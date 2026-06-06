import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Capabilities } from "@/components/sections/Capabilities";
import { Approach } from "@/components/sections/Approach";
import { Cases } from "@/components/sections/Cases";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FoundersVision } from "@/components/sections/FoundersVision";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTASection } from "@/components/ui/PageHero";
import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { buildPageMetadata, PAGE_KEYWORDS } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;

  return buildPageMetadata({
    locale,
    path: "",
    title: "W2C Tech — Web to Cloud · Software, AI & Cloud",
    description:
      "Custom software, AI systems, and cloud — built to scale. A small, senior team delivering for ambitious companies across the EU, US and India since 2020.",
    keywords: PAGE_KEYWORDS.home,
  });
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Capabilities />
      <Approach />
      <Cases />
      <AboutTeaser />
      <FoundersVision />
      <WhyUs />
      <CTASection variant="ink" />
    </main>
  );
}
