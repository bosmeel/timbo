"use client";

import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function Home() {

  const [isOldDevice, setIsOldDevice] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;

    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const isOldVersion = /OS (9|10|11|12)_/.test(ua);

    if (isIOS && isOldVersion) {
      setIsOldDevice(true);
    }
  }, []);

  // 👇 fallback
  if (isOldDevice) {
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

  // 👇 normale pagina
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