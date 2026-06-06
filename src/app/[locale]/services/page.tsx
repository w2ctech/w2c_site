import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { buildPageMetadata, PAGE_KEYWORDS } from "@/lib/seo";
import ServicesClientPage from "./ServicesClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;

  return buildPageMetadata({
    locale,
    path: "/services",
    title: "Services | W2C Tech",
    description:
      "Software, AI systems, cloud and DevOps, search and data engineering, and staff augmentation from one accountable partner.",
    keywords: PAGE_KEYWORDS.services,
  });
}

export default function ServicesPage() {
  return <ServicesClientPage />;
}
