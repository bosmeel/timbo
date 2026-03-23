"use client";

export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const PRESETS = [120, 180, 300, 600, 900, 1200, 1800, 2700, 3600];

export default function Page() {

  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(900);
  const [total, setTotal] = useState(900);
  const [running, setRunning] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const isStart = !running && seconds === total;

  const progress = total > 0 ? seconds / total : 0;
  const angle = progress * 360;

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
      if (!audioRef.current) return;

      const audio = audioRef.current;
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
    <main className="min-h-dvh bg-white flex flex-col overflow-y-auto pt-8 relative">

      {/* floating nav */}
      <div className="absolute top-4 left-4 z-10">
        <a href="/" className="text-xs text-gray-400">
          ← Home
        </a>
      </div>

      {/* mode label */}
      {mode && (
        <div className="absolute top-4 right-4 z-10 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {mode === "focus" && "Focus"}
          {mode === "game" && "Game"}
          {mode === "classroom" && "Classroom"}
        </div>
      )}

      {/* logo */}
      <div className="flex justify-center pt-4">
        <Image src="/logo-timbo-final.svg" alt="Timbo" width={100} height={25} />
      </div>

      {/* TIMER */}
      <div className="flex-1 flex items-center justify-center">
        <div className="aspect-square w-[min(60vh,90vw)]">
          <svg viewBox="0 0 200 200" className="w-full h-full">

            <circle cx="100" cy="100" r="98" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" />

            {[0, 90, 180, 270].map((deg) => {
              const p1 = polar(100, 100, 90, deg);
              const p2 = polar(100, 100, 98, deg);
              return (
                <line
                  key={deg}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="#d1d5db"
                  strokeWidth="2"
                />
              );
            })}

            {!isStart && progress > 0 && (
              <path d={pie(100, 100, 98, -angle)} fill="#e11d48" />
            )}

            {isStart && (
              <foreignObject x="30" y="70" width="140" height="60">
                <div className="flex items-center justify-center h-full">
                  <Image src="/logo-timbo-final.svg" alt="Timbo" width={100} height={25} />
                </div>
              </foreignObject>
            )}

          </svg>
        </div>
      </div>

      {/* UI */}
      <div className="flex flex-col items-center gap-4 pb-[calc(80px+env(safe-area-inset-bottom))]">

        <div className="text-5xl font-semibold text-black my-4">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-3 flex-wrap justify-center max-w-[320px]">
          {PRESETS.map((sec) => (
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

        {/* footer links */}
        <div className="mt-6 text-sm text-gray-400 flex gap-4 justify-center">
          <Link href="/about">About</Link>
          <Link href="/visual-timer-for-kids">Learn</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

      </div>

      <audio ref={audioRef} src="/beep.mp3" preload="auto" />
    </main>
  );
}

/* helpers */
function pie(cx: number, cy: number, r: number, angle: number) {
  const end = polar(cx, cy, r, angle);
  const large = Math.abs(angle) > 180 ? 1 : 0;

  return ["M", cx, cy, "L", cx, cy - r, "A", r, r, 0, large, 0, end.x, end.y, "Z"].join(" ");
}

function polar(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}