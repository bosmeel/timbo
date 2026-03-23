export const metadata = {
  title: "Classroom Timer – Visual Timer for Teachers",
  description: "Simple classroom timer to help students manage time and transitions.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-center">

      <h1 className="text-3xl font-semibold mb-6">
        Classroom Timer
      </h1>

      <p className="mb-4">
        Help students understand time with a clear visual timer.
      </p>

      <p className="mb-6">
        Ideal for classroom activities, transitions and structured learning.
      </p>

      <Link
        href="/timer"
        className="px-6 py-3 bg-black text-white rounded-xl inline-block"
      >
        Start Classroom Timer
      </Link>

    </main>
  );
}