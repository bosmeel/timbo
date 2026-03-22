"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PRESETS = [300, 600, 900, 1800, 3600];

export default function Page() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(900);
  const [total, setTotal] = useState(900);
  const [running, setRunning] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const isStart = !running && seconds === total;

  const progress = total > 0 ? seconds / total : 0;
  const angle = progress * 360;

  function unlockAudio() {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;

      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
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
      }
    }, 300);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <main className="fixed inset-0 bg-white flex flex-col">

      {/* logo bovenin */}
      <div className="flex justify-center pt-4">
        <Image
          src="/logo-timbo-final.svg"
          alt="Timbo"
          width={120}
          height={30}
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="aspect-square w-[min(70vh,95vw)]">
          <svg viewBox="0 0 200 200" className="w-full h-full pointer-events-none">
            <circle cx="100" cy="100" r="100" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" />

            {!isStart && progress > 0 && (
           <path d={pie(100, 100, 100, -angle)} fill="#e11d48" />
            )}

            {isStart && (
              <foreignObject x="30" y="70" width="140" height="60">
  <div className="flex items-center justify-center h-full">
    <Image
      src="/logo-timbo-final.svg"
      alt="Timbo"
      width={120}
      height={30}
    />
  </div>
</foreignObject>
            )}
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 pb-8">
        <div className="text-5xl font-semibold text-black tracking-wide my-6">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {PRESETS.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                unlockAudio();
                setTotal(sec);
                setSeconds(sec);
                setRunning(true);
                endTimeRef.current = Date.now() + sec * 1000;
              }}
              className="px-5 py-3 bg-gray-100 text-black rounded-xl"
            >
              {sec / 60}
            </button>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => {
              unlockAudio();

              if (!running) {
                endTimeRef.current = Date.now() + seconds * 1000;
              } else {
                endTimeRef.current = null;
              }

              setRunning(!running);
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
            onClick={toggleFullscreen}
            className="hidden md:block px-6 py-3 bg-gray-200 text-black rounded-xl"
          >
            {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
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