import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

export const BASE_URL = "https://w2ctech.com";

export const CORE_SEO_KEYWORDS = [
  "custom software development",
  "software consulting company",
  "enterprise SaaS solutions",
  "SaaS development",
  "web application development",
  "mobile app development",
  "API development",
  "full-stack development",
  "product engineering",
  "MVP development",
  "software architecture consulting",
  "AI integration services",
  "AI consulting",
  "AI-enabled software",
  "AI copilot development",
  "AI agent development",
  "LLM development",
  "RAG application development",
  "machine learning consulting",
  "intelligent automation",
  "cloud architecture consulting",
  "cloud migration services",
  "cloud-native development",
  "DevOps consulting",
  "CI/CD pipeline",
  "infrastructure as code",
  "site reliability engineering",
  "AWS consulting",
  "GCP consulting",
  "search engineering",
  "Elasticsearch consulting",
  "Lucene development",
  "vector search",
  "semantic search",
  "data engineering",
  "data pipeline development",
  "analytics and reporting",
  "staff augmentation",
  "dedicated development team",
  "offshore development team",
  "IT consulting",
  "technology strategy",
  "digital transformation",
  "W2C Tech",
  "web to cloud",
  "software company India",
  "software company EU",
  "software company US",
] as const;

export const PAGE_KEYWORDS: Record<string, readonly string[]> = {
  home: ["software, AI and cloud partner", "scalable software team", "web to cloud company"],
  services: ["software services", "AI services", "cloud and DevOps services", "IT consulting services"],
  about: ["software engineering leadership", "senior software team", "global delivery team"],
  careers: ["software engineering jobs", "AI engineer jobs", "DevOps jobs", "remote tech jobs"],
  contact: ["book software consultation", "software project quote", "talk to software experts"],
  legal: ["privacy policy", "terms of service", "refund policy", "website disclaimer"],
};

export function localeAlternates(path: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]));
}

export function canonicalFor(locale: Locale, path: string) {
  return `${BASE_URL}/${locale}${path}`;
}

export function buildPageMetadata(input: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
}): Metadata {
  const url = canonicalFor(input.locale, input.path);
  const keywords = [...CORE_SEO_KEYWORDS, ...(input.keywords ?? [])];

  return {
    title: input.title,
    description: input.description,
    keywords,
    alternates: {
      canonical: url,
      languages: localeAlternates(input.path),
    },
    openGraph: {
      type: "website",
      url,
      title: input.title,
      description: input.description,
      siteName: "W2C Tech",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "W2C Tech" }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/og-image.svg"],
    },
  };
}
