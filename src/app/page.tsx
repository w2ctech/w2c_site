import { locales, defaultLocale } from "@/i18n/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

function getLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0];
  if (preferred && locales.includes(preferred as typeof locales[number])) return preferred;
  return defaultLocale;
}

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = getLocale(acceptLanguage);
  redirect(`/${locale}`);
}
