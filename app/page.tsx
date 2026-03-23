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
        Visual timer that helps kids understand time
      </h1>

      {/* sub */}
      <p className="text-gray-600 mb-8 max-w-md">
        Timbo makes time visible. Perfect for focus, routines and transitions.
      </p>

      {/* CTA */}
      <Link
        href="/timer"
        className="px-6 py-3 bg-black text-white rounded-xl"
      >
        Start Timer
      </Link>

      {/* use cases */}
      <div className="mt-10 w-full max-w-md grid grid-cols-1 gap-3">

        <Link
          href="/focus-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50"
        >
          Focus Timer
        </Link>

        <Link
          href="/classroom-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50"
        >
          Classroom Timer
        </Link>

        <Link
          href="/game-timer"
          className="px-4 py-3 border rounded-xl text-black hover:bg-gray-50"
        >
          Game Timer
        </Link>

      </div>

      {/* footer links */}
      <div className="mt-10 text-sm text-gray-400 flex gap-4 justify-center flex-wrap">
        <Link href="/about">About</Link>
        <Link href="/visual-timer-for-kids">Learn</Link>
        <Link href="/privacy">Privacy</Link>
      </div>

    </main>
  );
}