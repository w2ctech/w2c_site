import type { MetadataRoute } from "next";

const BASE_URL = "https://w2ctech.com";
const LOCALES = ["en", "de", "fr"];

const routes = [
  { path: "", priority: 1, changefreq: "weekly" as const },
  { path: "/services", priority: 0.9, changefreq: "weekly" as const },
  { path: "/about", priority: 0.8, changefreq: "monthly" as const },
  { path: "/careers", priority: 0.7, changefreq: "weekly" as const },
  { path: "/contact", priority: 0.8, changefreq: "monthly" as const },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" as const },
  { path: "/terms-of-service", priority: 0.3, changefreq: "yearly" as const },
  { path: "/disclaimer", priority: 0.3, changefreq: "yearly" as const },
  { path: "/refund-policy", priority: 0.3, changefreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority, changefreq }) => {
    const defaultLocale = LOCALES[0];
    const pathWithSlash = path ? `/${path}` : "";

    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${pathWithSlash}`,
      lastModified: new Date(),
      changeFrequency: changefreq,
      priority: locale === defaultLocale ? priority : priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${pathWithSlash}`])
        ),
      },
    }));
  });
}
