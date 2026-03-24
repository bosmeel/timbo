import HourglassTimerVisual from "./HourglassTimerVisual";
import DiscTimerVisual from "./DiscTimerVisual";
import FocusTimerVisual from "./FocusTimerVisual";

type Props = {
  variant: "disc" | "hourglass";
  progress: number;
  remaining: number;
  duration: number;
  isRunning: boolean;
  isFinished: boolean;
  mode?: string | null;
};

export default function TimerVisual({
  variant,
  progress,
  remaining,
  duration,
  isRunning,
  isFinished,
  mode,
}: Props) {

  // ✅ eerst focus check (belangrijk!)
  if (mode === "focus") {
    return <FocusTimerVisual progress={progress} />;
  }

  // daarna hourglass
  if (variant === "hourglass") {
    return (
      <HourglassTimerVisual
        progress={progress}
        remaining={remaining}
        duration={duration}
        isRunning={isRunning}
        isFinished={isFinished}
      />
    );
  }

  // fallback = classic disc
  return (
    <DiscTimerVisual
      progress={progress}
      remaining={remaining}
      duration={duration}
      isRunning={isRunning}
      isFinished={isFinished}
      mode={mode}
    />
  );
}