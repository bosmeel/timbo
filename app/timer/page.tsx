"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, Suspense } from "react";
import TimerVisual from "@/components/timer/TimerVisual";
import ModeSwitcher from "@/components/timer/ModeSwitcher";

function getPresets(mode: string | null) {
  if (mode === "game") return [30, 60, 120, 180, 300];
  if (mode === "classroom") return [60, 300, 600, 900, 1800];
  return [60, 120, 180, 300, 600, 900, 1200, 1800, 2700, 3600];
}

export default function Page() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(900);
  const [total, setTotal] = useState(900);
  const [running, setRunning] = useState(false);

  const [mode, setMode] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const endTimeRef = useRef<number | null>(null);

  // ✅ veilig mode ophalen (client only)
  useEffect(() => {
  const updateMode = () => {
    const params = new URLSearchParams(window.location.search);
    setMode(params.get("mode"));
  };

  updateMode();

  const observer = new MutationObserver(updateMode);
  observer.observe(document, { subtree: true, childList: true });

  return () => observer.disconnect();
}, []);

  const variant: "disc" | "hourglass" =
    mode === "game" ? "hourglass" : "disc";

  const progress = total > 0 ? 1 - (seconds / total) : 0;

  function unlockAudio() {
    try {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      audio.muted = true;

      const p = audio.play();

      if (p !== undefined) {
        p.then(() => {
          audio.pause();
          audio.currentTime = 0;
          audio.muted = false;
        }).catch(() => {
          audio.muted = false;
        });
      }
    } catch {}
  }

  function playBeep() {
    try {
      const audio = audioRef.current;
      if (!audio) return;

      let src = "/beep-focus.mp3";
      if (mode === "game") src = "/beep-game.mp3";
      if (mode === "classroom") src = "/beep-classroom.mp3";

      audio.pause();
      audio.src = src;
      audio.load();
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch {}
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!running || !endTimeRef.current) return;

      const remaining = Math.max(
        0,
        Math.round((endTimeRef.current - Date.now()) / 1000)
      );

      setSeconds(remaining);

      if (remaining === 0) {
        setRunning(false);
        endTimeRef.current = null;
        playBeep();
      }
    }, 300);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <main
      className={`
        min-h-dvh flex flex-col overflow-y-auto pt-8 relative
        ${seconds === 0
          ? mode === "game"
            ? "bg-red-50"
            : mode === "classroom"
            ? "bg-yellow-50"
            : "bg-white"
          : mode === "classroom"
          ? "bg-gray-50"
          : "bg-white"}
      `}
    >

      {/* back */}
      <div className="absolute top-4 left-4 z-10">
        <a href="/" className="text-xs text-gray-400">
          ← Home
        </a>
      </div>

      {/* mode switch */}
      <Suspense fallback={null}>
        <ModeSwitcher />
      </Suspense>

      {/* logo */}
      <div className="flex justify-center pt-4">
        <Image src="/logo-timbo-final.svg" alt="Timbo" width={100} height={25} />
      </div>

      {/* visual */}
      <div className="flex-1 flex items-center justify-center py-6">
        <TimerVisual
          variant={variant}
          progress={progress}
          remaining={seconds}
          duration={total}
          isRunning={running}
          isFinished={seconds === 0}
          mode={mode}
        />
      </div>

      {/* UI */}
      <div className="flex flex-col items-center gap-4 pb-[calc(80px+env(safe-area-inset-bottom))]">

        <div
          className={`
            font-semibold my-4
            ${seconds === 0 ? "text-red-600" : "text-black"}
            ${mode === "classroom" ? "text-7xl" : "text-4xl"}
          `}
        >
          {formatTime(seconds)}
        </div>

        {/* presets */}
        <div className="flex gap-3 flex-wrap justify-center max-w-[320px]">
          {getPresets(mode).map((sec) => (
            <button
              key={sec}
              onClick={() => {
                unlockAudio();
                setTotal(sec);
                setSeconds(sec);
                setRunning(false);
                endTimeRef.current = null;
              }}
              className="px-4 py-2 bg-gray-100 text-black rounded-xl"
            >
              {sec / 60}
            </button>
          ))}
        </div>

        {/* controls */}
        <div className="flex gap-3 flex-wrap justify-center">

          <button
            onClick={() => {
              unlockAudio();

              if (!running) {
                endTimeRef.current = Date.now() + seconds * 1000;
                setRunning(true);
              } else {
                endTimeRef.current = null;
                setRunning(false);
              }
            }}
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            {running ? "Pause" : "Start"}
          </button>

          <button
            onClick={() => {
              setSeconds(total);
              setRunning(false);
              endTimeRef.current = null;
            }}
            className="px-6 py-3 bg-gray-200 text-black rounded-xl"
          >
            Reset
          </button>

          <button
            onClick={() => {
              const add = 60;

              if (running && endTimeRef.current) {
                endTimeRef.current += add * 1000;
              }

              setTotal((t) => t + add);
              setSeconds((s) => s + add);
            }}
            className="px-4 py-3 bg-gray-200 text-black rounded-xl"
          >
            +1 min
          </button>

          <button
            onClick={toggleFullscreen}
            className="hidden md:block px-6 py-3 bg-gray-200 text-black rounded-xl"
          >
            {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>

        </div>

        {/* footer */}
        <div className="mt-6 text-sm text-gray-400 flex gap-4 justify-center">
          <Link href="/about">About</Link>
          <Link href="/visual-timer-for-kids">Learn</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

      </div>

      <audio ref={audioRef} preload="auto" />
    </main>
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}