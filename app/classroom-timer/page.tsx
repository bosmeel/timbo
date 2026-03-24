import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Timer – Large Visual Timer for Teaching",
  description:
    "A clear and simple classroom timer for teachers and students. Large display, easy presets and distraction-free timing.",
};

export default function ClassroomTimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4">
          Classroom Timer for Teaching
        </h1>

        <p className="text-base text-neutral-600 mb-6">
          A clear, visual timer designed for classroom use. Perfect for lessons, activities and structured time blocks.
        </p>

        <Link
          href="/timer?mode=classroom"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start Classroom Timer
        </Link>
      </section>

      {/* WHAT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          What is a Classroom Timer?
        </h2>

        <p className="text-neutral-700">
          A classroom timer helps teachers manage time during lessons and activities.
          It provides a clear visual countdown so students understand how much time is left.
        </p>
      </section>

      {/* WHY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Why this Classroom Timer works
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Large and easy-to-read time display</li>
          <li>Simple presets for common classroom intervals</li>
          <li>Clear visual countdown for students</li>
          <li>No distractions or complex controls</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Use it for
        </h2>

        <ul className="space-y-2 text-neutral-700">
          <li>Classroom activities and exercises</li>
          <li>Group work sessions</li>
          <li>Quiet reading or focus time</li>
          <li>Transitions between lessons</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mb-12">
        <Link
          href="/timer?mode=classroom"
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold"
        >
          Start classroom session
        </Link>
      </section>

      {/* SEO BLOCK */}
      <section>
        <p className="text-neutral-700">
          This classroom timer is built for teachers who need a simple and reliable way to manage time.
          A visual countdown helps students stay engaged and understand time limits without constant reminders.
          It works on any screen and is ready to use instantly, making it ideal for both physical classrooms and digital learning environments.
        </p>
      </section>

    </main>
  );
}