import type { Metadata } from "next";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
  PAGE_KEYWORDS,
  BASE_URL,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";
import { JsonLd } from "@/components/JsonLd";
import ServicesClientPage from "./ServicesClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/services",
    title:
      "Services — Software, AI, Cloud, Search, Staff Augmentation | W2C Tech",
    description:
      "Custom software, AI systems, cloud and DevOps, search and data engineering, staff augmentation and IT consulting — delivered by a senior team across the EU, US and India.",
    keywords: PAGE_KEYWORDS.services,
  });
}

const SERVICE_SCHEMAS = [
  {
    name: "Custom Software & SaaS Development",
    description:
      "End-to-end custom product engineering — SaaS platforms, web apps, mobile apps, internal tools and APIs that scale.",
    serviceType: "Custom Software Development",
  },
  {
    name: "AI Systems & AI-Enabled Software",
    description:
      "LLM and RAG applications, ML models, AI copilots and agents, intelligent automation and AI strategy consulting.",
    serviceType: "AI Consulting and Development",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Cloud-native architecture, migrations, CI/CD, infrastructure as code, observability and SRE.",
    serviceType: "Cloud Consulting",
  },
  {
    name: "Search & Data Engineering",
    description:
      "Lucene, Elasticsearch, OpenSearch, vector and semantic search, data pipelines, ETL and analytics.",
    serviceType: "Search Engineering",
  },
  {
    name: "Staff Augmentation",
    description:
      "Vetted, reskilled engineers and dedicated squads on transparent per-hour billing, backed by a trusted vendor network.",
    serviceType: "IT Staff Augmentation",
  },
  {
    name: "IT Consulting & Software Distribution",
    description:
      "Architecture audits, technology strategy, digital transformation and software distribution.",
    serviceType: "IT Consulting",
  },
];

const FAQ_ITEMS = [
  {
    q: "What engagement models does W2C Tech offer?",
    a: "We offer three core models: Dedicated Team (monthly retainer, self-managed squad), Staff Augmentation (per-hour, scale up or down on demand) and Fixed Project (defined scope, timeline and price).",
  },
  {
    q: "Where is W2C Tech located?",
    a: "We are headquartered in Delhi, India with offices in Hamburg, Germany and Dubuque, Iowa, United States. We deliver across the EU, US and India.",
  },
  {
    q: "What technology stack do you specialize in?",
    a: "TypeScript, Next.js, React, Node.js, Python, Tailwind CSS, PostgreSQL, AWS, Google Cloud, Docker, Kubernetes, Terraform, Elasticsearch, Lucene, OpenAI, Anthropic Claude, Google Gemini and modern vector databases.",
  },
  {
    q: "Do you provide AI consulting?",
    a: "Yes. We build LLM and RAG applications, fine-tune models, develop AI copilots and agents, and retrofit AI into existing software systems.",
  },
  {
    q: "How do I get a quote?",
    a: "Book a consultation at https://calendly.com/w2ctechsolution/consultation or email w2ctechsolution@gmail.com with a brief description of your project.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const url = `${BASE_URL}/${locale}/services`;
  const graph = [
    breadcrumbJsonLd(locale, [
      { name: "Home", path: "" },
      { name: "Services", path: "/services" },
    ]),
    ...SERVICE_SCHEMAS.map((s) => serviceJsonLd({ ...s, url })),
    faqJsonLd(FAQ_ITEMS),
  ];

  return (
    <>
      <JsonLd id="ld-services" data={graph} />
      <ServicesClientPage />
    </>
  );
}
