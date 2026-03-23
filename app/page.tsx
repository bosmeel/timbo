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

<div className="mt-6 text-sm text-gray-400 flex gap-4 justify-center">
  <a href="/about">About</a>
  <a href="/visual-timer-for-kids">Learn</a>
</div>

      <p className="mt-6 text-sm text-gray-500">
  <Link href="/visual-timer-for-kids">
    Learn more about visual timers
  </Link>
</p>

<p className="mt-4 text-sm text-gray-400">
  <a href="/about">About</a>
</p>

    </main>
  );
}