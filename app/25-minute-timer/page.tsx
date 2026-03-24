import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "25 Minute Timer – Online Countdown Timer",
  description:
    "Start a 25 minute timer instantly. Perfect for Pomodoro sessions, focus and productivity.",
};

export default function TwentyFiveMinuteTimerPage() {
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
          25 Minute Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a 25 minute countdown instantly. Ideal for Pomodoro sessions and focused work.
        </p>

        <Link
          href="/timer?mode=focus&time=1500"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start 25 minute timer
        </Link>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use a 25 minute timer for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Pomodoro work sessions</li>
          <li>Focused study blocks</li>
          <li>Deep work without distractions</li>
          <li>Productivity routines</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A 25 minute timer is the standard duration used in the Pomodoro technique.
          It provides enough time to focus deeply while keeping sessions manageable.
          This simple online timer helps you stay productive and consistent.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/pomodoro-timer" className="underline">
            Pomodoro timer
          </Link>
          <Link href="/5-minute-timer" className="underline">
            5 minute timer (break)
          </Link>
          <Link href="/30-minute-timer" className="underline">
            30 minute timer
          </Link>
        </div>
      </section>

    </main>
  );
}