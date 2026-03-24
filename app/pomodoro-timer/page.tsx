import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomodoro Timer – Free Online Focus Timer",
  description:
    "Use a Pomodoro timer to improve focus and productivity. Work in 25 minute sessions with short breaks.",
};

export default function PomodoroTimerPage() {
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
          Pomodoro Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Work in focused 25 minute sessions followed by short breaks. A simple method to stay productive.
        </p>

        <Link
          href="/timer?mode=focus&time=1500"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start Pomodoro (25 min)
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          How the Pomodoro technique works
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Work for 25 minutes</li>
          <li>Take a 5 minute break</li>
          <li>Repeat 4 times</li>
          <li>Take a longer break (15–30 minutes)</li>
        </ul>
      </section>

      {/* WHY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Why it works
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Reduces distractions</li>
          <li>Improves focus</li>
          <li>Prevents burnout</li>
          <li>Builds consistent work habits</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          The Pomodoro technique is one of the most effective productivity methods.
          By working in short, focused intervals, you can maintain concentration
          and avoid fatigue. This simple online Pomodoro timer helps you get started instantly.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/25-minute-timer" className="underline">
            25 minute timer
          </Link>
          <Link href="/5-minute-timer" className="underline">
            5 minute timer (break)
          </Link>
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
        </div>
      </section>

    </main>
  );
}