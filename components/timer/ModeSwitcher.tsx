"use client";

import { useRouter } from "next/navigation";

export default function ModeSwitcher() {
  const router = useRouter();

  const items = [
    { label: "Classic", href: "/timer" },
    { label: "Focus", href: "/timer?mode=focus" },
    { label: "Game", href: "/timer?mode=game" },
    { label: "Classroom", href: "/timer?mode=classroom" },
  ];

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-1 text-xs">
      {items.map((item) => (
        <button
          key={item.href}
          onClick={() => router.push(item.href)}
          className="px-2 py-1 rounded text-center bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}