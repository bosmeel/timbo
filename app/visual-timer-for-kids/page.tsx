import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Timer – How it works | Timbo",
  description:
    "Learn how visual timers help with focus, learning and time awareness for kids and adults.",
};

export default function LearnPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* back */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-400 underline">
          ← Home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-4">
        What is a visual timer?
      </h1>

      <p className="text-gray-600 mb-6">
        A visual timer shows time passing in a clear and simple way.
        Instead of numbers only, you can see how much time is left.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Why it works
      </h2>

      <ul className="mb-6 text-gray-700 space-y-2">
        <li>Reduces stress around time</li>
        <li>Improves focus and structure</li>
        <li>Makes time easier to understand</li>
        <li>Works well for kids and adults</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Different timers for different situations
      </h2>

      <p className="text-gray-600 mb-4">
        Timbo offers different timer types, each designed for a specific use.
      </p>

      <ul className="mb-8 text-gray-700 space-y-2">
        <li>
          <strong>Classic Timer:</strong> simple visual countdown for everyday use
        </li>
        <li>
          <strong>Focus Timer:</strong> distraction-free for deep work and studying
        </li>
        <li>
          <strong>Game Timer:</strong> fast and engaging for short activities
        </li>
        <li>
          <strong>Classroom Timer:</strong> clear and structured for groups and teaching
        </li>
      </ul>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 border rounded-xl hover:bg-gray-50"
        >
          Choose a timer
        </Link>
      </div>

    </main>
  );
}