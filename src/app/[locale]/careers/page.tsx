import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { buildPageMetadata, PAGE_KEYWORDS } from "@/lib/seo";
import CareersClientPage from "./CareersClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;

  return buildPageMetadata({
    locale,
    path: "/careers",
    title: "Careers | W2C Tech",
    description:
      "Join W2C Tech to build software, AI, and cloud systems with a senior, global team across impactful client projects.",
    keywords: PAGE_KEYWORDS.careers,
  });
}

export default function CareersPage() {
  return <CareersClientPage />;
}
