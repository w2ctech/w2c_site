import type { MetadataRoute } from "next";

const BASE_URL = "https://w2ctech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/disclaimer", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/refund-policy", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
