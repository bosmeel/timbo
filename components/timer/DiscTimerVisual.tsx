import Image from "next/image";

type Props = {
  progress: number;
  remaining: number;
  duration: number;
  isRunning: boolean;
  isFinished: boolean;
  mode?: string | null;
};

export default function DiscTimerVisual({
  progress,
  remaining,
  duration,
  isRunning,
  mode,
}: Props) {

  const isStart = !isRunning && remaining === duration;
  const angle = progress * 360;

  const isFocus = mode === "focus";

  return (
    <div className="aspect-square w-[min(60vh,90vw)]">
      <svg viewBox="0 0 200 200" className="w-full h-full">

        {/* 🔵 BACKGROUND */}
        {isFocus ? (
  <>
    {/* zachte buitenrand */}
    <circle cx="100" cy="100" r="98" fill="#ffffff" stroke="#f3f4f6" strokeWidth="2" />

    {/* subtiele binnenring */}
    <circle cx="100" cy="100" r="85" fill="none" stroke="#f5f5f5" strokeWidth="1" />
  </>
) : (
  <circle cx="100" cy="100" r="98" fill="#ffffff" stroke="#f0f0f0" strokeWidth="2" />
)}

        {/* 🔴 TIMER PIE */}
        {!isStart && progress > 0 && (
          <path d={pie(100, 100, 98, angle)} fill="#e11d48" />
        )}

        {/* 🟢 LOGO alleen bij classic */}
        {isStart && !isFocus && (
          <foreignObject x="30" y="70" width="140" height="60">
            <div className="flex items-center justify-center h-full">
              <Image src="/logo-timbo-final.svg" alt="Timbo" width={100} height={25} />
            </div>
          </foreignObject>
        )}

      </svg>
    </div>
  );
}

/* helpers */
function pie(cx: number, cy: number, r: number, angle: number) {
  const end = polar(cx, cy, r, angle);
  const large = angle > 180 ? 1 : 0;

  return ["M", cx, cy, "L", cx, cy - r, "A", r, r, 0, large, 1, end.x, end.y, "Z"].join(" ");
}

function polar(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}