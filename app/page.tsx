"use client";

export default function Home() {

  let ua = "unknown";

  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent;
  }

  return (
    <div style={{
      padding: "20px",
      fontFamily: "monospace",
      wordBreak: "break-all"
    }}>
      <h2>User Agent:</h2>
      <p>{ua}</p>
    </div>
  );
}