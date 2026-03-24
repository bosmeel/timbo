type HourglassTimerVisualProps = {
  progress: number;
  remaining: number;
  duration: number;
  isRunning: boolean;
  isFinished: boolean;
};

export default function HourglassTimerVisual({
  progress,
  isRunning,
}: HourglassTimerVisualProps) {

  const t = Math.max(0, Math.min(1, progress));

  const topY = 26;
  const height = 84;
  const bottomY = 150;

  return (
    <div style={{ width: "320px", margin: "0 auto", color: "#222" }}>
      <svg viewBox="0 0 220 260">
<rect width="220" height="260" fill="#fff7f7" />
        <defs>
          <clipPath id="topClip">
            <path d="M50 26 C50 70 90 100 110 110 C130 100 170 70 170 26 Z" />
          </clipPath>

          <clipPath id="bottomClip">
            <path d="M50 234 C50 190 90 160 110 150 C130 160 170 190 170 234 Z" />
          </clipPath>
        </defs>

        {/* TOP */}
        {t < 1 && (
          <g clipPath="url(#topClip)">
            <rect
              x="40"
              y={topY + (height * t)}
              width="140"
              height={height}
              fill="#ef4444"
            />
          </g>
        )}

        {/* BOTTOM */}
        {t > 0 && (
  <g clipPath="url(#bottomClip)">
    <rect
      x="40"
      y={bottomY + height - (height * t)}
      width="140"
      height={height * t}
      fill="#ef4444"
    />
  </g>
)}

        {/* FLOW */}
        {isRunning && t > 0 && t < 1 && (
          <rect
            x="109"
            y="110"
            width="2"
            height="40"
            fill="#ef4444"
          />
        )}

        {/* FRAME */}
        <rect x="42" y="10" width="136" height="8" rx="4" fill="currentColor" />
        <rect x="42" y="242" width="136" height="8" rx="4" fill="currentColor" />

        {/* GLAS */}
        <path
          d="M50 26 C50 70 90 100 110 110 C130 100 170 70 170 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M50 234 C50 190 90 160 110 150 C130 160 170 190 170 234"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

      </svg>
    </div>
  );
}