import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Timer – Online Timer for Studying",
  description:
    "Use this study timer to stay focused and productive. Perfect for students, homework and exam preparation.",
};

export default function StudyTimerPage() {
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
          Study Timer
        </h1>

        <p className="text-gray-600 mb-6">
          Stay focused while studying. Use a simple timer to structure your sessions and improve concentration.
        </p>

        <Link
          href="/timer?mode=focus&time=1500"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start study timer (25 min)
        </Link>
      </section>

      {/* WHY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Why use a study timer?
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Improves focus and concentration</li>
          <li>Breaks study time into manageable blocks</li>
          <li>Reduces procrastination</li>
          <li>Helps build consistent habits</li>
        </ul>
      </section>

      {/* METHODS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          How to use it
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>Set a timer (25 minutes is common)</li>
          <li>Focus on one task</li>
          <li>Take a short break</li>
          <li>Repeat the cycle</li>
        </ul>
      </section>

      {/* SEO TEXT */}
      <section className="mb-10">
        <p className="text-gray-600">
          A study timer helps you stay focused and avoid distractions.
          By working in structured time blocks, you can improve productivity
          and retain more information. This simple online timer is designed
          to support effective study habits.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          Related timers
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/pomodoro-timer" className="underline">
            Pomodoro timer
          </Link>
          <Link href="/25-minute-timer" className="underline">
            25 minute timer
          </Link>
          <Link href="/focus-timer" className="underline">
            Focus timer for deep work
          </Link>
        </div>
      </section>

    </main>
  );
}