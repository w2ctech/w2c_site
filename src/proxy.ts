import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get("w2c-locale")?.value;
  if (cookie && locales.includes(cookie as typeof locales[number])) return cookie;

  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0];
  if (preferred && locales.includes(preferred as typeof locales[number])) return preferred;

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = locales.find((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);

  if (pathLocale) {
    const response = NextResponse.next();
    response.cookies.set("w2c-locale", pathLocale, { maxAge: 31536000, path: "/" });
    return response;
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/.well-known") ||
    pathname.match(/\.(svg|ico|png|jpg|jpeg|webp|gif|css|js|woff2?|xml|webmanifest|txt|html)$/)
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set("w2c-locale", locale, { maxAge: 31536000, path: "/" });
  return response;
}
