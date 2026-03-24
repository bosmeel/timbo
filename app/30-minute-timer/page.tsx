import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30 Minute Timer – Online Countdown Timer",
  description:
    "Start a 30 minute timer instantly. Simple, visual and free countdown timer for focus, study and productivity.",
};

export default function ThirtyMinuteTimerPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* back */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-400 underline">
          ← All timers
        </Link>
      </div>

      {/* HERO */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          30 Minute Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a 30 minute countdown instantly. Ideal for focus sessions, studying and productive work blocks.
        </p>

        <Link
          href="/timer?mode=classic&time=1800"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start 30 minute timer
        </Link>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use a 30 minute timer for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Deep work sessions</li>
          <li>Study blocks</li>
          <li>Pomodoro-style work</li>
          <li>Focused productivity tasks</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A 30 minute timer is one of the most effective time blocks for productivity.
          It is long enough to focus deeply, but short enough to stay manageable.
          This simple online timer helps you stay on track without distractions.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/15-minute-timer" className="underline">
            15 minute timer
          </Link>
          <Link href="/10-minute-timer" className="underline">
            10 minute timer
          </Link>
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
        </div>
      </section>

    </main>
  );
}