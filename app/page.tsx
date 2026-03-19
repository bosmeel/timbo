"use client";

export const dynamic = "force-dynamic";

export default function Page() {
  if (typeof window === "undefined") return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <a
        href="/timer"
        className="px-6 py-3 rounded-xl bg-black text-white"
      >
        Open Timbo Timer
      </a>
    </main>
  );
}