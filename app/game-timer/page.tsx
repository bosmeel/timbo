export const metadata = {
  title: "Game Timer – Set a Time Limit for Any Game",
  description: "Simple visual game timer for board games, challenges and time-based play.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-center">

      <h1 className="text-3xl font-semibold mb-6">
        Game Timer
      </h1>

      <p className="mb-4">
        Use Timbo as a simple game timer for board games, challenges or time-based play.
      </p>

      <p className="mb-6">
        Set a clear time limit and let everyone see how much time is left.
      </p>

      <Link
        href="/timer"
        className="px-6 py-3 bg-black text-white rounded-xl inline-block"
      >
        Start Game Timer
      </Link>

    </main>
  );
}