import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { Arrow } from "./Icons";

type ButtonBase = {
  variant?: "accent" | "ghost" | "light";
  size?: "sm" | "md";
  children: ReactNode;
  arrow?: boolean;
  className?: string;
};

type ButtonAsButton = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "ghost",
  size = "md",
  children,
  arrow = false,
  className = "",
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const base = [
    "inline-flex items-center gap-2.5 font-body font-medium rounded-full border cursor-pointer",
    "transition-all duration-200 whitespace-nowrap group",
    size === "sm" ? "px-4 py-2 text-sm" : "px-[22px] py-[13px] text-[15.5px]",
  ];

  const variants = {
    accent:
      "bg-accent text-on-accent border-transparent shadow-[0_0_0_1px_oklch(0.82_0.14_85/0.4),0_8px_24px_oklch(0.82_0.14_85/0.22)] hover:shadow-[0_0_0_1px_var(--color-accent),0_12px_30px_oklch(0.82_0.14_85/0.32)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-tx border-line-2 hover:bg-card hover:border-accent hover:text-tx",
    light:
      "bg-[oklch(0.96_0.006_90)] text-[oklch(0.17_0.012_75)] border-transparent hover:-translate-y-0.5 hover:shadow-lg",
  };

  const cls = [...base, variants[variant], className].join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
