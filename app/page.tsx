"use client";

export const dynamic = "force-dynamic";

export default function Page() {
  if (typeof window === "undefined") return null;

  const isOldIOS =
    typeof navigator !== "undefined" &&
    /OS 12_/.test(navigator.userAgent);

  if (isOldIOS) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-center p-6">
        <div>
          <h1 className="text-xl font-semibold mb-4">Timbo Timer</h1>
          <p className="text-gray-600">
            This device is too old to run the timer.
            <br />
            Please use a newer device.
          </p>
        </div>
      </main>
    );
  }

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