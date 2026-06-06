import type { Metadata } from "next";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  jobPostingJsonLd,
  PAGE_KEYWORDS,
  BASE_URL,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";
import { JsonLd } from "@/components/JsonLd";
import CareersClientPage from "./CareersClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/careers",
    title: "Careers — Software, AI, DevOps & Search Engineer Jobs | W2C Tech",
    description:
      "Build software that matters with a senior, remote-first team. Open roles in software engineering, AI, ML, DevOps, search and technical recruitment.",
    keywords: PAGE_KEYWORDS.careers,
  });
}

const ROLES_SCHEMA = [
  {
    title: "Senior Full-Stack Engineer",
    description:
      "Own features end-to-end across React, Node and cloud. Ship product for EU and US clients and mentor the team around you.",
    employmentType: "FULL_TIME",
    location: "Noida, India",
    remote: true,
  },
  {
    title: "AI / ML Engineer",
    description:
      "Build LLM and RAG applications, fine-tune models and put AI into production. Comfort with Python and modern ML tooling required.",
    employmentType: "FULL_TIME",
    location: "Remote",
    remote: true,
  },
  {
    title: "Cloud / DevOps Engineer",
    description:
      "Design cloud-native infrastructure, CI/CD and reliability. AWS/GCP, IaC and a calm hand during incidents.",
    employmentType: "FULL_TIME",
    location: "Noida, India",
    remote: true,
  },
  {
    title: "Search Engineer",
    description:
      "Work on Lucene, Elasticsearch and vector search — relevance tuning and data pipelines for high-traffic marketplaces.",
    employmentType: "CONTRACTOR",
    location: "Remote",
    remote: true,
  },
  {
    title: "Technical Recruiter / Bench Sales",
    description:
      "Grow our vetted vendor network and match the right engineers to the right clients across our staff-augmentation business.",
    employmentType: "FULL_TIME",
    location: "Noida, India",
    remote: false,
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const url = `${BASE_URL}/${locale}/careers`;
  const graph = [
    breadcrumbJsonLd(locale, [
      { name: "Home", path: "" },
      { name: "Careers", path: "/careers" },
    ]),
    ...ROLES_SCHEMA.map((r) => jobPostingJsonLd({ ...r, url })),
  ];

  return (
    <>
      <JsonLd id="ld-careers" data={graph} />
      <CareersClientPage />
    </>
  );
}
