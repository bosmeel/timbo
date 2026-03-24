import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Timer – Free Countdown Timer",
  description:
    "Use this free online timer to count down time. Simple, visual and easy to use on any device.",
};

export default function OnlineTimerPage() {
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
          Online Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Start a timer instantly. Simple, visual and free countdown timer for any use.
        </p>

        <Link
          href="/timer"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start timer
        </Link>
      </section>

      {/* WHAT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What is an online timer?
        </h2>

        <p className="text-gray-600">
          An online timer lets you measure time directly in your browser.
          It is useful for work, study, cooking, workouts and daily tasks.
        </p>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What can you use it for?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Focus and productivity</li>
          <li>Studying and homework</li>
          <li>Cooking and kitchen timers</li>
          <li>Games and activities</li>
        </ul>
      </section>

      {/* QUICK LINKS (belangrijk) */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">
          Popular timers
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
          This online timer is designed to be simple and effective.
          You can start a countdown instantly without any setup.
          Whether you need a quick timer or a structured session,
          this tool helps you stay on track.
        </p>
      </section>

    </main>
  );
}