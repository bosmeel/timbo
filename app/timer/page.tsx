"use client";

import { useEffect, useRef, useState } from "react";

const PRESETS = [300, 600, 900, 1800, 3600];

export default function Page() {
  const [seconds, setSeconds] = useState(900);
  const [total, setTotal] = useState(900);
  const [running, setRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const isStart = !running && seconds === total;

  const progress = total > 0 ? seconds / total : 0;
  const angle = progress * 360;

  /* TIMER — HARD REALTIME */
  useEffect(() => {
    let raf: number;

    function update() {
      if (!running || !endTimeRef.current) return;

      const remaining = Math.max(
        0,
        Math.round((endTimeRef.current - Date.now()) / 1000)
      );

      setSeconds(remaining);

      if (remaining === 0) {
        setRunning(false);
        endTimeRef.current = null;

        try {
          const ctx = audioCtxRef.current || new AudioContext();
          audioCtxRef.current = ctx;

          const beep = (delay: number) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();

            o.type = "sine";
            o.frequency.value = 880;

            o.connect(g);
            g.connect(ctx.destination);

            const t = ctx.currentTime + delay;

            g.gain.setValueAtTime(0.3, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

            o.start(t);
            o.stop(t + 0.2);
          };

          beep(0);
          beep(0.3);
          beep(1);
          beep(1.3);
        } catch {}

        return;
      }

      raf = requestAnimationFrame(update);
    }

    if (running && !endTimeRef.current) {
      endTimeRef.current = Date.now() + seconds * 1000;
    }

    if (running) {
      raf = requestAnimationFrame(update);
    }

    return () => cancelAnimationFrame(raf);
  }, [running]);

  /* FULLSCREEN STATE */
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <main className="w-screen h-screen bg-white overflow-hidden">
      <div
        className={`w-full h-full flex flex-col items-center justify-between ${
          isFullscreen ? "px-[2%] py-[2%]" : "px-[4%] py-[4%]"
        }`}
      >
        {/* TIMER */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div
            className={`aspect-square ${
              isFullscreen
                ? "w-[min(76vh,94vw)]"
                : "w-[min(60vh,92vw)]"
            }`}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* BASE */}
              <circle cx="100" cy="100" r="100" fill="#f3f4f6" />

              {/* RED PIE */}
              {!isStart && progress > 0 && (
                <path d={pie(100, 100, 100, -angle)} fill="#dc2626" />
              )}

              {/* START */}
              {isStart && (
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  fontSize="15"
                  fill="#6b7280"
                  style={{ letterSpacing: "3px" }}
                >
                  TIMBA
                </text>
              )}
            </svg>
          </div>
        </div>

        {/* TIME */}
        <div className="text-3xl font-semibold mb-2">
          {formatTime(seconds)}
        </div>

        {/* PRESETS */}
        <div className="flex gap-3 flex-wrap justify-center">
          {PRESETS.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                setTotal(sec);
                setSeconds(sec);
                setRunning(true);
                endTimeRef.current = null;
              }}
              className="px-5 py-3 bg-black text-white rounded-xl"
            >
              {sec / 60}
            </button>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="flex gap-3 flex-wrap justify-center mt-3 mb-2">
          <button
            onClick={() => {
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
            className="px-6 py-3 bg-gray-200 rounded-xl"
          >
            Reset
          </button>

          {/* FULLSCREEN */}
          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else {
                document.exitFullscreen();
              }
            }}
            className="px-6 py-3 bg-gray-200 rounded-xl"
          >
            {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
    </main>
  );
}

/* CLOCKWISE PIE */
function pie(cx: number, cy: number, r: number, angle: number) {
  const end = polar(cx, cy, r, angle);
  const large = Math.abs(angle) > 180 ? 1 : 0;

  return [
    "M", cx, cy,
    "L", cx, cy - r,
    "A", r, r, 0, large, 0, end.x, end.y,
    "Z"
  ].join(" ");
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