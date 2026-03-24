"use client";

export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TimerVisual from "@/components/timer/TimerVisual";
import ModeSwitcher from "@/components/timer/ModeSwitcher";

function getPresets(mode: string | null) {
  if (mode === "game") {
    return [30, 60, 120, 180, 300];
  }

  if (mode === "classroom") {
    return [60, 300, 600, 900, 1800];
  }

  // focus / default (originele timer + 1 min toegevoegd)
  return [60, 120, 180, 300, 600, 900, 1200, 1800, 2700, 3600];
}

export default function Page() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(900);
  const [total, setTotal] = useState(900);
  const [running, setRunning] = useState(false);

  // ✅ NIEUW
  const searchParams = useSearchParams();
const mode = searchParams.get("mode");

const variant: "disc" | "hourglass" =
  mode === "game" ? "hourglass" : "disc";

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const endTimeRef = useRef<number | null>(null);

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

    // 🔑 force reload
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

      <div className="absolute top-4 left-4 z-10">
        <a href="/" className="text-xs text-gray-400">
          ← Home
        </a>
      </div>

      <Suspense fallback={null}>
      <ModeSwitcher />
      </Suspense>

      <div className="flex justify-center pt-4">
        <Image src="/logo-timbo-final.svg" alt="Timbo" width={100} height={25} />
      </div>

      {/* ✅ FIXED */}
      <div className="flex-1 flex items-center justify-center py-6">
        <TimerVisual
  variant={variant}
  progress={progress}
  remaining={seconds}
  duration={total}
  isRunning={running}
  isFinished={seconds === 0}
  mode={mode}   // ✅ toevoegen
/>
      </div>

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
              const newTotal = total + 60;

              if (running && endTimeRef.current) {
                endTimeRef.current += 60000;
              }

              setTotal(newTotal);
              setSeconds(prev => prev + 60);
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

function ModeLabel() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  if (!mode) return null;

  return (
    <div className="absolute top-4 right-4 z-10 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
      {mode === "focus" && "Focus"}
      {mode === "game" && "Game"}
      {mode === "classroom" && "Classroom"}
    </div>
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}