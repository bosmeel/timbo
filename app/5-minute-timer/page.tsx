import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Minute Timer – Online Countdown Timer",
  description:
    "Start a 5 minute timer instantly. Simple, visual and free countdown timer for focus, study and activities.",
};

export default function FiveMinuteTimerPage() {
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
          5 Minute Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a 5 minute countdown instantly. Perfect for focus, tasks and quick activities.
        </p>

        <Link
          href="/timer?mode=classic&time=300"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start 5 minute timer
        </Link>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use a 5 minute timer for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Quick focus sessions</li>
          <li>Short study blocks</li>
          <li>Breaks and resets</li>
          <li>Games and challenges</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A 5 minute timer is one of the most effective ways to get started with a task.
          Short time blocks reduce resistance and help you build momentum.
          This simple online timer starts instantly and works on any device.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
          <Link href="/game-timer" className="underline">
            Game timer for fast rounds
          </Link>
          <Link href="/classroom-timer" className="underline">
            Classroom timer for teaching
          </Link>
        </div>
      </section>

    </main>
  );
}