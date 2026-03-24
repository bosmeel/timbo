import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Timer – Free Online Deep Work Timer",
  description:
    "Use this focus timer for deep work, studying and concentration. Minimal distractions, simple controls and instant start.",
};

export default function FocusTimerPage() {
  return (
    <main className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Focus Timer for Deep Work</h1>
        <p>
          A simple, distraction-free timer designed for focus, studying and deep work.
        </p>

        <Link href="/timer?mode=focus" className="cta-button">
          Start Focus Timer
        </Link>
      </section>

      {/* WHAT */}
      <section>
        <h2>What is a Focus Timer?</h2>
        <p>
          A focus timer helps you work in dedicated time blocks without distractions.
          It creates structure, improves concentration and makes it easier to stay on task.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why this Focus Timer works</h2>
        <ul>
          <li>Minimal design without distractions</li>
          <li>Clear visual time tracking</li>
          <li>Instant start, no setup needed</li>
          <li>Works on desktop and mobile</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section>
        <h2>Use it for</h2>
        <ul>
          <li>Studying and exam preparation</li>
          <li>Deep work sessions</li>
          <li>ADHD-friendly time blocking</li>
          <li>Pomodoro-style workflows</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <Link href="/timer?mode=focus" className="cta-button">
          Start your focus session
        </Link>
      </section>

      {/* SEO BLOCK */}
      <section>
        <p>
          This free online focus timer is built for people who want to work without distractions.
          Whether you're studying, working remotely or trying to improve productivity,
          a clear visual timer helps you stay on track. Unlike complex productivity tools,
          this timer is simple and ready to use instantly. Just choose your time and start focusing.
        </p>
      </section>

    </main>
  );
}