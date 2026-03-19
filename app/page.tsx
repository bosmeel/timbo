"use client";

import { isOldIOS } from "./lib/isOldIOS";

export const dynamic = "force-dynamic";

export default function Home() {

  // 1. fallback — ALTIJD eerst
  if (isOldIOS()) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif"
      }}>
        <div>
          <h1>Device not supported</h1>
          <p>
            This timer does not work on older devices.<br />
            Please use a newer browser or device.
          </p>
        </div>
      </div>
    );
  }

  // 2. normale render
  try {
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
  } catch (e) {
    return <div>Something went wrong</div>;
  }
}