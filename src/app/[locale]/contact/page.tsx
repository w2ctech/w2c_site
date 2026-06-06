import type { Metadata } from "next";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  PAGE_KEYWORDS,
  BASE_URL,
  SITE_NAME,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";
import { JsonLd } from "@/components/JsonLd";
import ContactClientPage from "./ContactClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: "Contact W2C Tech — Book a Software, AI or Cloud Consultation",
    description:
      "Talk to W2C Tech about your software, AI, cloud, search or staff augmentation project. Offices in Delhi, Hamburg and Dubuque. Book a free consultation today.",
    keywords: PAGE_KEYWORDS.contact,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const url = `${BASE_URL}/${locale}/contact`;
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url,
    inLanguage: locale,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
  };
  const graph = [
    breadcrumbJsonLd(locale, [
      { name: "Home", path: "" },
      { name: "Contact", path: "/contact" },
    ]),
    contactSchema,
  ];

  return (
    <>
      <JsonLd id="ld-contact" data={graph} />
      <ContactClientPage />
    </>
  );
}
