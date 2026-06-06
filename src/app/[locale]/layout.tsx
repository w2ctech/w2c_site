import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/request";
import { ClientShell } from "./client-shell";

const BASE_URL = "https://w2ctech.com";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return <ClientShell locale={locale} dict={dict}>{children}</ClientShell>;
}
