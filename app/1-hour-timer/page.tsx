import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Hour Timer – Online Countdown Timer",
  description:
    "Start a 1 hour timer instantly. Simple, visual and free countdown timer for work, study and long focus sessions.",
};

export default function OneHourTimerPage() {
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
          1 Hour Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a 1 hour countdown instantly. Ideal for deep work, study sessions and long tasks.
        </p>

        <Link
          href="/timer?mode=classic&time=3600"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start 1 hour timer
        </Link>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use a 1 hour timer for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Deep work sessions</li>
          <li>Long study blocks</li>
          <li>Work sessions without interruption</li>
          <li>Productivity sprints</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A 1 hour timer is perfect for longer focus sessions.
          It allows you to work deeply without constant interruptions.
          This simple online timer helps you stay productive and on track.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          More timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/30-minute-timer" className="underline">
            30 minute timer
          </Link>
          <Link href="/15-minute-timer" className="underline">
            15 minute timer
          </Link>
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
        </div>
      </section>

    </main>
  );
}