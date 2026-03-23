import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://timbo.cc";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/timer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/visual-timer-for-kids`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/focus-timer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/classroom-timer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/game-timer`,
      lastModified: new Date(),
    },
  ];
}