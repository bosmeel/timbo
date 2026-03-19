"use client";

export const dynamic = "force-dynamic";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">

      {/* 👇 disclaimer */}
      <div className="text-center text-sm text-gray-500 mb-4 max-w-xs">
        This timer works best on modern devices.
        <br />
        Older iPads (iOS 12 and below) are not supported.
      </div>

      {/* 👇 knop */}
      <a
        href="/timer"
        className="px-6 py-3 rounded-xl bg-black text-white"
      >
        Open Timbo Timer
      </a>

    </main>
  );
}