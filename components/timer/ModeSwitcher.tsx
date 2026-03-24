"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ModeSwitcher() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const current = mode || "classic";

  const items = [
    { label: "Classic", href: "/timer", key: "classic" },
    { label: "Focus", href: "/timer?mode=focus", key: "focus" },
    { label: "Game", href: "/timer?mode=game", key: "game" },
    { label: "Classroom", href: "/timer?mode=classroom", key: "classroom" },
  ];

  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 text-xs">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className={`
            px-2 py-1 rounded text-center
            ${current === item.key
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600"}
          `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}