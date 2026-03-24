import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Timer – Free Online Deep Work Timer",
  description:
    "Use this focus timer for deep work, studying and concentration. Minimal distractions and instant start.",
};

export default function FocusTimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4">
          Focus Timer for Deep Work
        </h1>

        <p className="text-base text-neutral-600 mb-6">
          A simple, distraction-free timer designed for focus, studying and productivity.
        </p>

        <Link
          href="/timer?mode=focus"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start Focus Timer
        </Link>
      </section>

      {/* WHAT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What is a Focus Timer?
        </h2>

        <p className="text-neutral-700">
          A focus timer helps you work in structured time blocks. It reduces distractions,
          improves concentration and makes it easier to stay on task during work or study sessions.
        </p>
      </section>

      {/* WHY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Why this Focus Timer works
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Minimal interface with no distractions</li>
          <li>Clear visual time tracking</li>
          <li>Instant start without setup</li>
          <li>Works on desktop and mobile</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Use it for
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Studying and exam preparation</li>
          <li>Deep work sessions</li>
          <li>ADHD-friendly time blocking</li>
          <li>Pomodoro-style workflows</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mb-12">
        <Link
          href="/timer?mode=focus"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start your focus session
        </Link>
      </section>

      {/* SEO BLOCK */}
      <section>
        <p className="text-neutral-700">
          This free online focus timer is designed for people who want to work without distractions.
          Whether you are studying, working remotely or improving productivity,
          a simple visual timer helps you stay focused. Unlike complex productivity tools,
          this timer is ready instantly and requires no setup. Choose your time and start working.
        </p>
      </section>
<section className="mt-16 border-t pt-8">
  <h2 className="text-lg font-semibold mb-4">
    Explore other timers
  </h2>

  <div className="grid gap-3">

    <Link href="/focus-timer" className="underline">
      Focus Timer – for deep work and concentration
    </Link>

    <Link href="/classroom-timer" className="underline">
      Classroom Timer – for teaching and group activities
    </Link>

    <Link href="/game-timer" className="underline">
      Game Timer – for fast-paced games and challenges
    </Link>

  </div>
</section>
    </main>
  );
}