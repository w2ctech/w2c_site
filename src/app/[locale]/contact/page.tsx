import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { buildPageMetadata, PAGE_KEYWORDS } from "@/lib/seo";
import ContactClientPage from "./ContactClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;

  return buildPageMetadata({
    locale,
    path: "/contact",
    title: "Contact | W2C Tech",
    description:
      "Contact W2C Tech for software engineering, AI systems, cloud architecture, DevOps, and staff augmentation engagements.",
    keywords: PAGE_KEYWORDS.contact,
  });
}

export default function ContactPage() {
  return <ContactClientPage />;
}
