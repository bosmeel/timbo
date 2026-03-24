import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Timer – Fast Countdown Timer for Games",
  description:
    "A fast and simple game timer for board games, challenges and quick rounds. Perfect for short time limits and competitive play.",
};

export default function GameTimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4">
          Game Timer for Fast Rounds
        </h1>

        <p className="text-base text-neutral-600 mb-6">
          A quick and simple timer designed for games, challenges and time-based rounds.
        </p>

        <Link
          href="/timer?mode=game"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start Game Timer
        </Link>
      </section>

      {/* WHAT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What is a Game Timer?
        </h2>

        <p className="text-neutral-700">
          A game timer adds time pressure to games and activities.
          It keeps rounds short, increases excitement and ensures fair play between players.
        </p>
      </section>

      {/* WHY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Why this Game Timer works
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Fast presets for short time limits</li>
          <li>Clear countdown for competitive play</li>
          <li>Simple controls, no setup needed</li>
          <li>Works on any device</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Use it for
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Board games and party games</li>
          <li>Quiz rounds and challenges</li>
          <li>Turn-based games</li>
          <li>Kids games and activities</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mb-12">
        <Link
          href="/timer?mode=game"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start your game round
        </Link>
      </section>

      {/* SEO BLOCK */}
      <section>
        <p className="text-neutral-700">
          This game timer is designed for fast-paced activities where time matters.
          Whether you're playing a board game, hosting a quiz or running a challenge,
          a clear countdown keeps everyone engaged and ensures fair timing.
          The timer is simple, quick to start and works instantly on any device.
        </p>
      </section>

    </main>
  );
}