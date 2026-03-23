export const metadata = {
  title: "Focus Timer – Stay Concentrated",
  description: "Visual focus timer to help with concentration, study and deep work.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-center">

      <h1 className="text-3xl font-semibold mb-6">
        Focus Timer
      </h1>

      <p className="mb-4">
        Stay focused with a simple visual timer.
      </p>

      <p className="mb-6">
        Perfect for study, homework or deep work sessions.
      </p>

      <Link
        href="/timer"
        className="px-6 py-3 bg-black text-white rounded-xl inline-block"
      >
        Start Focus Timer
      </Link>

    </main>
  );
}