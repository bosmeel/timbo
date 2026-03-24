import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://timbo.cc";

  const routes = [
    "",
    "/timer",

    "/about",
    "/privacy",
    "/contact",
    "/visual-timer-for-kids",

    // use-case timers
    "/focus-timer",
    "/classroom-timer",
    "/game-timer",

    // minute timers
    "/5-minute-timer",
    "/10-minute-timer",
    "/15-minute-timer",
    "/25-minute-timer",
    "/30-minute-timer",
    "/1-hour-timer",

    // intent pages
    "/pomodoro-timer",
    "/study-timer",
    "/online-timer",
    "/countdown-timer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}