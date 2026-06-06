import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/request";
import ClientLayout from "./client-layout";

const BASE_URL = "https://w2ctech.com";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(`${BASE_URL}/${locale}`),
    title: {
      default: "W2C Tech — Web to Cloud · Software, AI & Cloud",
      template: "%s | W2C Tech",
    },
    description: (dict as Record<string, string>).hero?.eyebrow || "",
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
    icons: { icon: "/favicon.svg", apple: "/icon.svg" },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ClientLayout locale={locale} dict={dict}>{children}</ClientLayout>;
}
