import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://w2ctech.com";
export const SITE_NAME = "W2C Tech";
export const SITE_TAGLINE = "Web to Cloud — Software, AI & Cloud, built to scale";
export const DEFAULT_OG_IMAGE = "/og-image.svg";
export const TWITTER_HANDLE = "@w2ctech";

// =============================================================
// KEYWORD UNIVERSE
// Organized by intent. The UNIVERSAL set is included on every
// page; per-page sets layer on top to push topical relevance.
// =============================================================

export const KEYWORDS_BRAND = [
  "W2C Tech",
  "W2C",
  "w2ctech",
  "Web to Cloud",
  "W2C Tech Solution",
  "W2C Tech Private Limited",
  "W2C Tech India",
  "W2C Tech EU",
  "W2C Tech US",
] as const;

export const KEYWORDS_SOFTWARE = [
  "custom software development",
  "custom software development company",
  "software consulting company",
  "software consultancy",
  "software engineering firm",
  "software development services",
  "software development agency",
  "bespoke software development",
  "enterprise software development",
  "enterprise SaaS solutions",
  "SaaS development",
  "SaaS platform development",
  "B2B SaaS development",
  "B2C software development",
  "web application development",
  "web app development",
  "responsive web development",
  "progressive web app development",
  "mobile app development",
  "iOS app development",
  "Android app development",
  "cross-platform app development",
  "React Native development",
  "API development",
  "REST API development",
  "GraphQL API development",
  "API integration services",
  "system integration",
  "full-stack development",
  "frontend development",
  "backend development",
  "Node.js development",
  "TypeScript development",
  "Next.js development",
  "React development",
  "Python development",
  "microservices architecture",
  "serverless architecture",
  "event-driven architecture",
  "MVP development",
  "startup software consulting",
  "product engineering",
  "custom product engineering",
  "internal tools development",
  "dashboard development",
  "admin panel development",
  "legacy system modernization",
  "technical debt reduction",
  "code review services",
  "software architecture consulting",
  "software architecture design",
  "software audit",
  "software due diligence",
] as const;

export const KEYWORDS_AI = [
  "AI integration services",
  "AI consulting",
  "AI consulting firm",
  "AI development company",
  "artificial intelligence services",
  "AI-enabled software",
  "AI copilot development",
  "AI agent development",
  "agentic AI",
  "autonomous agents",
  "chatbot development",
  "conversational AI",
  "voice AI",
  "speech recognition",
  "LLM development",
  "large language model integration",
  "OpenAI API integration",
  "Anthropic Claude integration",
  "Google Gemini integration",
  "RAG application development",
  "retrieval augmented generation",
  "vector database",
  "text embeddings",
  "ML model development",
  "machine learning consulting",
  "machine learning services",
  "deep learning",
  "natural language processing",
  "NLP",
  "computer vision",
  "predictive analytics",
  "AI strategy consulting",
  "enterprise AI transformation",
  "intelligent automation",
  "AI automation",
  "AI retrofitting",
  "AI fine-tuning",
  "prompt engineering",
  "MLOps",
  "machine learning operations",
  "AI model deployment",
  "AI model serving",
  "AI inference",
  "AI training",
  "AI evaluation",
  "AI monitoring",
  "AI observability",
  "AI safety",
  "responsible AI",
  "AI governance",
  "generative AI",
  "GenAI",
  "multimodal AI",
  "AI SaaS",
  "AI platform development",
  "edge AI",
  "AI for enterprise",
  "AI readiness assessment",
  "AI workflow orchestration",
] as const;

export const KEYWORDS_CLOUD = [
  "cloud architecture consulting",
  "cloud consulting services",
  "cloud migration services",
  "cloud-native development",
  "cloud infrastructure",
  "cloud automation",
  "DevOps consulting",
  "DevOps services",
  "DevOps as a service",
  "CI/CD pipeline",
  "continuous integration",
  "continuous deployment",
  "infrastructure as code",
  "IaC",
  "Terraform",
  "Pulumi",
  "Ansible",
  "site reliability engineering",
  "SRE consulting",
  "cloud monitoring",
  "observability",
  "Prometheus",
  "Grafana",
  "Datadog",
  "AWS consulting",
  "GCP consulting",
  "Google Cloud consulting",
  "Azure consulting",
  "multi-cloud",
  "hybrid cloud",
  "cloud security",
  "cloud compliance",
  "cloud cost optimization",
  "FinOps",
  "managed cloud services",
  "Docker",
  "Kubernetes",
  "container orchestration",
  "serverless functions",
  "AWS Lambda",
  "Cloud Run",
  "GitOps",
  "ArgoCD",
  "platform engineering",
  "AWS well-architected",
  "cloud landing zone",
  "disaster recovery",
  "high availability",
] as const;

export const KEYWORDS_SEARCH_DATA = [
  "search engineering",
  "Elasticsearch consulting",
  "Elasticsearch implementation",
  "Lucene development",
  "OpenSearch consulting",
  "Solr consulting",
  "vector search",
  "semantic search",
  "full-text search",
  "relevance tuning",
  "search ranking",
  "data engineering",
  "data pipeline development",
  "ETL development",
  "ELT pipelines",
  "data analytics",
  "business intelligence",
  "BI dashboards",
  "analytics and reporting",
  "big data consulting",
  "data warehouse",
  "data lakehouse",
  "BigQuery consulting",
  "Snowflake consulting",
  "real-time analytics",
  "streaming data",
  "Kafka",
] as const;

export const KEYWORDS_STAFFING = [
  "staff augmentation",
  "IT staff augmentation",
  "IT staffing services",
  "dedicated development team",
  "dedicated engineering squad",
  "offshore software development",
  "offshore development team",
  "remote development team",
  "nearshore software development",
  "freelance software developers",
  "contract software engineers",
  "vetted engineers",
  "reskilled engineers",
  "bench sales",
  "vendor network",
  "IT outsourcing",
  "remote-first software team",
  "hire React developers",
  "hire Node developers",
  "hire AI engineers",
  "hire DevOps engineers",
  "hire Python developers",
  "hire full-stack developers",
] as const;

export const KEYWORDS_CONSULTING = [
  "IT consulting",
  "technology consulting",
  "digital transformation consulting",
  "technology strategy",
  "architecture audit",
  "software distribution",
  "software reseller",
  "IT procurement",
  "technology advisory",
  "IT solutions provider",
  "technology partner",
] as const;

export const KEYWORDS_INDUSTRY = [
  "fintech software",
  "crypto analytics",
  "retail software",
  "sports commerce platform",
  "luxury resale platform",
  "sustainable commerce",
  "marketplace platform development",
  "e-commerce development",
  "logistics software",
  "healthtech software",
  "edtech software",
  "media analytics",
  "B2B platforms",
  "marketplace software",
] as const;

export const KEYWORDS_GEO = [
  "software company India",
  "software company EU",
  "software company Germany",
  "software company France",
  "software company United States",
  "software company Hamburg",
  "software company Delhi",
  "software company Iowa",
  "software development India",
  "AI consulting India",
  "AI consulting Europe",
  "cloud consulting India",
  "cloud consulting Europe",
  "DevOps India",
  "Elasticsearch India",
  "software outsourcing India",
] as const;

export const KEYWORDS_ANALYTICS = [
  "Google Analytics 4",
  "GA4 setup",
  "Google Tag Manager",
  "GTM implementation",
  "Google Search Console",
  "GSC verification",
  "web analytics implementation",
  "conversion tracking",
  "event tracking",
  "data layer",
  "user behavior analytics",
  "A/B testing",
  "experimentation",
  "marketing analytics",
  "performance analytics",
  "Looker Studio",
  "Mixpanel",
  "Amplitude analytics",
  "Hotjar",
  "Microsoft Clarity",
  "Bing UET",
  "Facebook pixel",
  "Meta pixel",
  "LinkedIn Insight Tag",
  "Twitter pixel",
  "TikTok pixel",
  "funnel analysis",
  "cohort analysis",
  "retention analytics",
  "attribution modeling",
] as const;

export const UNIVERSAL_KEYWORDS = [
  ...KEYWORDS_BRAND,
  ...KEYWORDS_SOFTWARE,
  ...KEYWORDS_AI,
  ...KEYWORDS_CLOUD,
  ...KEYWORDS_SEARCH_DATA,
  ...KEYWORDS_STAFFING,
  ...KEYWORDS_CONSULTING,
  ...KEYWORDS_INDUSTRY,
  ...KEYWORDS_GEO,
] as const;

export const PAGE_KEYWORDS: Record<string, readonly string[]> = {
  home: [
    "software AI cloud partner",
    "scalable software team",
    "web to cloud company",
    "senior software engineering team",
    "AI-first software company",
  ],
  services: [
    "software services",
    "AI services",
    "cloud and DevOps services",
    "search and data engineering services",
    "IT consulting services",
    "engagement models",
    "dedicated team",
    "staff augmentation",
    "fixed price project",
  ],
  about: [
    "about W2C Tech",
    "software engineering leadership",
    "senior software team",
    "global delivery team",
    "company values",
    "engineering culture",
    "founders W2C Tech",
  ],
  careers: [
    "software engineering jobs",
    "AI engineer jobs",
    "ML engineer jobs",
    "DevOps jobs",
    "search engineer jobs",
    "remote tech jobs",
    "remote software jobs India",
    "tech recruiter jobs",
    "bench sales jobs",
  ],
  contact: [
    "book software consultation",
    "software project quote",
    "talk to software experts",
    "contact W2C Tech",
    "hire software team",
    "software RFP",
  ],
  privacy: ["privacy policy", "data protection policy", "GDPR statement"],
  terms: ["terms of service", "MSA", "service agreement"],
  refund: ["refund policy", "cancellation policy"],
  disclaimer: ["disclaimer", "website disclaimer"],
};

// =============================================================
// METADATA HELPERS
// =============================================================

export function localeAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
  );
  map["x-default"] = `${BASE_URL}/en${path}`;
  return map;
}

export function canonicalFor(locale: Locale, path: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

const OG_LOCALE_MAP: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
};

export function buildPageMetadata(input: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article";
}): Metadata {
  const url = canonicalFor(input.locale, input.path);
  const keywords = Array.from(
    new Set([...UNIVERSAL_KEYWORDS, ...KEYWORDS_ANALYTICS, ...(input.keywords ?? [])])
  );
  const image = input.ogImage ?? DEFAULT_OG_IMAGE;
  const ogLocale = OG_LOCALE_MAP[input.locale];
  const alternateOgLocales = locales
    .filter((l) => l !== input.locale)
    .map((l) => OG_LOCALE_MAP[l]);

  return {
    title: input.title,
    description: input.description,
    keywords,
    alternates: {
      canonical: url,
      languages: localeAlternates(input.path),
    },
    openGraph: {
      type: input.type ?? "website",
      url,
      title: input.title,
      description: input.description,
      siteName: SITE_NAME,
      locale: ogLocale,
      alternateLocale: alternateOgLocales,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
  };
}

// =============================================================
// JSON-LD HELPERS — small per-page schema graphs
// =============================================================

export function breadcrumbJsonLd(
  locale: Locale,
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${BASE_URL}/${locale}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: (input.areaServed ?? ["European Union", "United States", "India"]).map(
      (n) => ({ "@type": "Country", name: n })
    ),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function jobPostingJsonLd(role: {
  title: string;
  description: string;
  employmentType: string;
  location: string;
  remote?: boolean;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    employmentType: role.employmentType,
    hiringOrganization: { "@id": `${BASE_URL}/#organization` },
    jobLocationType: role.remote ? "TELECOMMUTE" : undefined,
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: role.location },
    },
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60)
      .toISOString()
      .slice(0, 10),
    url: role.url,
    directApply: false,
  };
}
