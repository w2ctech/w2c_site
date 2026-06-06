"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/i18n/LocaleContext";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { useState, useRef, useEffect } from "react";

export function LocaleSwitcher() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (l: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${l}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-[38px] h-[38px] rounded-[10px] shrink-0 grid place-items-center bg-transparent border border-line-2 text-tx-2 hover:text-accent-ink hover:border-accent hover:bg-card hover:-translate-y-px transition-all font-mono text-xs font-medium"
        aria-label="Switch language"
      >
        {locale.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-ink border border-line-2 rounded-xl overflow-hidden shadow-lg z-50 min-w-[140px]">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors font-body ${
                l === locale
                  ? "text-accent-ink bg-accent-soft font-medium"
                  : "text-tx-2 hover:text-tx hover:bg-card"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
