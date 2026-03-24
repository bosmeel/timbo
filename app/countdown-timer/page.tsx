import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countdown Timer – Free Online Timer",
  description:
    "Start a countdown timer instantly. Simple, visual and free timer for work, study and everyday use.",
};

export default function CountdownTimerPage() {
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
          Countdown Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a countdown instantly. A simple and visual timer for any task.
        </p>

        <Link
          href="/timer"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start countdown timer
        </Link>
      </section>

      {/* WHAT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What is a countdown timer?
        </h2>

        <p className="text-gray-600">
          A countdown timer shows how much time is left until zero.
          It helps you stay focused and manage time effectively.
        </p>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Common uses
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Work and productivity</li>
          <li>Study sessions</li>
          <li>Cooking and kitchen timers</li>
          <li>Games and activities</li>
        </ul>
      </section>

      {/* QUICK LINKS */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">
          Popular countdown timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/5-minute-timer" className="underline">
            5 minute timer
          </Link>
          <Link href="/10-minute-timer" className="underline">
            10 minute timer
          </Link>
          <Link href="/15-minute-timer" className="underline">
            15 minute timer
          </Link>
          <Link href="/30-minute-timer" className="underline">
            30 minute timer
          </Link>
          <Link href="/1-hour-timer" className="underline">
            1 hour timer
          </Link>
        </div>
      </section>

      {/* TYPES */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">
          Timer types
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/focus-timer" className="underline">
            Focus timer
          </Link>
          <Link href="/pomodoro-timer" className="underline">
            Pomodoro timer
          </Link>
          <Link href="/study-timer" className="underline">
            Study timer
          </Link>
          <Link href="/classroom-timer" className="underline">
            Classroom timer
          </Link>
          <Link href="/game-timer" className="underline">
            Game timer
          </Link>
        </div>
      </section>

      {/* SEO TEXT */}
      <section>
        <p className="text-gray-600">
          A countdown timer is one of the simplest ways to manage time.
          It helps you stay aware of how much time is left and keeps you focused.
          This online timer is easy to use and works instantly in your browser.
        </p>
      </section>

    </main>
  );
}