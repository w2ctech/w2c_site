"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";

type Dict = Record<string, unknown>;

const LocaleContext = createContext<{ locale: Locale; dict: Dict } | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dict;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useDict<T = Record<string, never>>() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useDict must be used within LocaleProvider");
  return ctx.dict as unknown as T;
}
