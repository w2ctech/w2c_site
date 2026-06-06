"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { Button } from "./Button";
import { Sun, Moon } from "./Icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useTheme } from "./useTheme";
import { useLocale } from "@/i18n/LocaleContext";

const NAV_ITEMS = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  const t = (dict as Record<string, Record<string, string>>) || {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(`/${locale}`, "") || "/";
    if (href === "/") return cleanPath === "/";
    return cleanPath.startsWith(href);
  };

  const linkClasses = (href: string) =>
    `text-[15px] px-3.5 py-2 rounded-full transition-colors font-[450] ${
      isActive(href)
        ? "text-tx font-medium bg-[oklch(0.92_0.02_264/0.05)]"
        : "text-tx-2 hover:text-tx"
    }`;

  const navItems: [string, string][] = [
    [t.nav?.home || "Home", "/"],
    [t.nav?.services || "Services", "/services"],
    [t.nav?.about || "About", "/about"],
    [t.nav?.careers || "Careers", "/careers"],
    [t.nav?.contact || "Contact", "/contact"],
  ];

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[oklch(0.155_0.018_264/0.85)] backdrop-blur-[16px] saturate-[1.3] border-line"
          : "bg-[oklch(0.171_0.018_264/0.72)] backdrop-blur-[16px] saturate-[1.3] border-transparent"
      } theme-light:bg-[oklch(0.986_0.004_95/0.78)] theme-light:scrolled:bg-[oklch(0.986_0.004_95/0.92)]`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between px-[clamp(20px,5vw,64px)]">
        <Brand />

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navItems.map(([label, href]) => (
            <a key={href} href={`/${locale}${href === "/" ? "" : href}`} className={linkClasses(href)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LocaleSwitcher />
          <button
            onClick={toggleTheme}
            className="w-[38px] h-[38px] rounded-[10px] shrink-0 grid place-items-center bg-transparent border border-line-2 text-tx-2 hover:text-accent-ink hover:border-accent hover:bg-card hover:-translate-y-px transition-all"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <div className="hidden md:block">
            <Button href="https://calendly.com/w2ctechsolution/consultation" variant="accent" size="sm" arrow>
              {t.nav?.getQuote || "Get a Quote"}
            </Button>
          </div>

          <button
            className="md:hidden bg-transparent border-0 cursor-pointer p-2"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-[22px] h-[2px] bg-tx rounded-sm my-1 transition-transform duration-[250ms]"
              style={open ? { transform: "translateY(6px) rotate(45deg)" } : {}} />
            <span className="block w-[22px] h-[2px] bg-tx rounded-sm my-1 transition-opacity duration-200"
              style={open ? { opacity: 0 } : {}} />
            <span className="block w-[22px] h-[2px] bg-tx rounded-sm my-1 transition-transform duration-[250ms]"
              style={open ? { transform: "translateY(-6px) rotate(-45deg)" } : {}} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 bottom-0 top-[70px] z-[99] bg-surface transition-all duration-[250ms] ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-[var(--gutter)] pt-6">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={`/${locale}${href === "/" ? "" : href}`}
              className={`block font-display text-[30px] py-3.5 border-b border-line ${
                isActive(href) ? "text-accent-ink" : "text-tx"
              }`}
            >
              {label}
            </a>
          ))}
          <div className="mt-6">
            <Button href="https://calendly.com/w2ctechsolution/consultation" variant="accent" arrow>
              {t.nav?.getQuote || "Get a Quote"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
