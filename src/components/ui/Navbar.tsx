"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { Button } from "./Button";
import { Sun, Moon } from "./Icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useTheme } from "./useTheme";
import { useLocale } from "@/i18n/LocaleContext";

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
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <>
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
              <a key={href} href={`/${locale}${href === "/" ? "" : href}`} className={linkClasses(href)} onClick={() => setOpen(false)}>
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
              className="md:hidden bg-transparent border-0 cursor-pointer p-2 relative z-[210]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
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
      </header>

      {/* Mobile drawer — rendered OUTSIDE the sticky header so position:fixed
          attaches to the viewport on every browser. Full-viewport, opaque. */}
      <div
        className={`md:hidden fixed inset-0 z-[200] transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Scrim */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default border-0 p-0"
        />

        {/* Panel */}
        <nav
          id="mobile-nav"
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-surface border-l border-line shadow-2xl flex flex-col transition-transform duration-[260ms] ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ height: "100dvh", paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center justify-between px-[var(--gutter,20px)] h-[70px] border-b border-line shrink-0">
            <Brand />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="w-[38px] h-[38px] rounded-[10px] grid place-items-center bg-transparent border border-line-2 text-tx-2 hover:text-accent-ink hover:border-accent transition-colors"
            >
              <span className="relative block w-[18px] h-[18px]">
                <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-tx rounded-sm rotate-45" />
                <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-tx rounded-sm -rotate-45" />
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-[var(--gutter,20px)] py-6">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={`/${locale}${href === "/" ? "" : href}`}
                onClick={() => setOpen(false)}
                className={`block font-display text-[28px] py-4 border-b border-line ${
                  isActive(href) ? "text-accent-ink" : "text-tx"
                }`}
              >
                {label}
              </a>
            ))}
            <div className="mt-8">
              <Button href="https://calendly.com/w2ctechsolution/consultation" variant="accent" arrow>
                {t.nav?.getQuote || "Get a Quote"}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
