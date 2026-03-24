type Props = {
  progress: number;
};

export default function FocusTimerVisual({ progress }: Props) {
  const clamped = Math.max(0, Math.min(1, progress));

  const trackTop = 26;
const trackHeight = 268;
const trackBottom = trackTop + trackHeight;

const fillHeight = trackHeight * clamped;

  return (
    <div className="flex items-center justify-center">
      <svg width="140" height="320" viewBox="0 0 140 320">

        {/* OUTER FRAME */}
        <rect
          x="40"
          y="20"
          width="60"
          height="280"
          rx="30"
          fill="#ffffff"
          stroke="#d1d5db"
          strokeWidth="3"
        />

        {/* INNER TRACK */}
        <rect
          x="46"
          y="26"
          width="48"
          height="268"
          rx="24"
          fill="#f9fafb"
        />

        {/* RED INNER BAR (los van rand) */}
        {clamped > 0 && (
          <rect
  x="52"
  y={trackBottom - fillHeight}
  width="36"
  height={fillHeight}
  rx={Math.min(18, fillHeight / 2)}
  fill="#e11d48"
/>
        )}

      </svg>
    </div>
  );
}