import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Minute Timer – Online Countdown Timer",
  description:
    "Start a 10 minute timer instantly. Simple, visual and free countdown timer for focus, study and activities.",
};

export default function TenMinuteTimerPage() {
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
          10 Minute Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a 10 minute countdown instantly. Ideal for focus, tasks and short sessions.
        </p>

        <Link
          href="/timer?mode=classic&time=600"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start 10 minute timer
        </Link>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use a 10 minute timer for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Short focus sessions</li>
          <li>Quick work blocks</li>
          <li>Breaks and resets</li>
          <li>Daily tasks</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A 10 minute timer is perfect for short productive sessions.
          It helps you stay focused without feeling overwhelmed.
          This online timer is simple, visual and ready to use instantly.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/5-minute-timer" className="underline">
            5 minute timer
          </Link>
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
          <Link href="/classroom-timer" className="underline">
            Classroom timer
          </Link>
        </div>
      </section>

    </main>
  );
}