"use client";

import type { Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import type { ReactNode } from "react";

export function ClientShell({
  children,
  locale,
  dict,
}: {
  children: ReactNode;
  locale: Locale;
  dict: Record<string, unknown>;
}) {
  return (
    <LocaleProvider locale={locale} dict={dict}>
      <Navbar />
      {children}
      <Footer />
    </LocaleProvider>
  );
}
