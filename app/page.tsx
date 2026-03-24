"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">

      {/* logo */}
      <div className="mb-6">
        <Image
          src="/logo-timbo-final.svg"
          alt="Timbo"
          width={140}
          height={40}
        />
      </div>

      {/* headline */}
      <h1 className="text-3xl font-semibold mb-4 max-w-md">
        Visual timer for focus, games & classroom
      </h1>

      {/* sub */}
      <p className="text-gray-600 mb-10 max-w-md">
        Timbo makes time visible. Simple, clear and easy to use.
      </p>

      {/* timers */}
      <div className="w-full max-w-md grid gap-3">

        {/* Classic → direct tool */}
        <Link
          href="/timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Classic Timer</div>
          <div className="text-xs text-gray-500">Simple visual timer</div>
        </Link>

        {/* Focus → SEO page */}
        <Link
          href="/focus-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Focus Timer</div>
          <div className="text-xs text-gray-500">Deep work & concentration</div>
        </Link>

        {/* Game → SEO page */}
        <Link
          href="/game-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Game Timer</div>
          <div className="text-xs text-gray-500">Fast rounds & challenges</div>
        </Link>

        {/* Classroom → SEO page */}
        <Link
          href="/classroom-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Classroom Timer</div>
          <div className="text-xs text-gray-500">Teaching & group timing</div>
        </Link>

      </div>

      {/* STEP 11 — SEO interlink boost */}
      <div className="mt-16 max-w-md text-left">

        <p className="text-gray-500 mb-4 text-sm">
          Looking for a specific timer? Explore our use cases:
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/focus-timer" className="underline">
            Focus timer for studying and deep work
          </Link>
          <Link href="/classroom-timer" className="underline">
            Classroom timer for teachers and students
          </Link>
          <Link href="/game-timer" className="underline">
            Game timer for fast-paced rounds
          </Link>
        </div>

      </div>

      {/* footer */}
      <div className="mt-10 text-sm text-gray-400 flex gap-4 justify-center flex-wrap">
        <Link href="/about">About</Link>
        <Link href="/visual-timer-for-kids">Learn</Link>
        <Link href="/privacy">Privacy</Link>
      </div>

    </main>
  );
}