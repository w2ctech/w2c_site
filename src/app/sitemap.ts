import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { locales, defaultLocale } from "@/i18n/config";

const routes: { path: string; priority: number; changefreq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changefreq: "weekly" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/careers", priority: 0.8, changefreq: "weekly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-of-service", priority: 0.3, changefreq: "yearly" },
  { path: "/disclaimer", priority: 0.3, changefreq: "yearly" },
  { path: "/refund-policy", priority: 0.3, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap(({ path, priority, changefreq }) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: changefreq,
      priority: locale === defaultLocale ? priority : Math.max(0.1, priority * 0.9),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
