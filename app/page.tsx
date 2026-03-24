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

      {/* timers (allemaal gelijk behandeld) */}
      <div className="w-full max-w-md grid gap-3">

        <Link
          href="/timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Classic Timer</div>
          <div className="text-xs text-gray-500">Simple visual timer</div>
        </Link>

        <Link
          href="/timer?mode=focus"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Focus Timer</div>
          <div className="text-xs text-gray-500">Minimal & distraction-free</div>
        </Link>

        <Link
          href="/timer?mode=game"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Game Timer</div>
          <div className="text-xs text-gray-500">Fast & engaging</div>
        </Link>

        <Link
          href="/timer?mode=classroom"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50 text-left"
        >
          <div className="font-medium">Classroom Timer</div>
          <div className="text-xs text-gray-500">Clear & structured</div>
        </Link>

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