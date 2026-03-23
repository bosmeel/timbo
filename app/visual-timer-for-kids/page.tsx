import Link from "next/link";

export const metadata = {
  title: "Visual Timer for Kids – Free Online Timer",
  description: "Simple visual timer for kids. Helps with focus, routines and transitions. Free and easy to use.",
};

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-semibold mb-6">
        Visual Timer for Kids
      </h1>

      <p className="mb-4">
        Timbo is a simple visual timer that helps children understand time.
        Instead of numbers, kids see time pass visually.
      </p>

      <p className="mb-4">
        This makes it easier to:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Finish tasks</li>
        <li>Transition between activities</li>
        <li>Stay focused</li>
      </ul>

      <p className="mb-6">
        Perfect for parents, teachers and children with concentration challenges.
      </p>

      <Link
        href="/timer"
        className="inline-block px-6 py-3 bg-black text-white rounded-xl"
      >
        Start the Timer
      </Link>

    </main>
  );
}