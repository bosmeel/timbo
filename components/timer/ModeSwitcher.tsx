"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MODES = [
  { key: "classic", label: "Classic", href: "/timer" },
  { key: "focus", label: "Focus", href: "/timer?mode=focus" },
  { key: "game", label: "Game", href: "/timer?mode=game" },
  { key: "classroom", label: "Classroom", href: "/timer?mode=classroom" },
];

export default function ModeSwitcher() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");

  const current = modeParam || "classic";

  return (
    <div className="absolute top-4 right-4 z-10 flex gap-2">

      {MODES.map((item) => {
        const active = current === item.key;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`
  text-xs px-3 py-1.5 rounded-full border transition
  ${
    active
      ? "bg-gray-100 text-black border-gray-400"
      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
  }
`}
          >
            {item.label}
          </Link>
        );
      })}

    </div>
  );
}