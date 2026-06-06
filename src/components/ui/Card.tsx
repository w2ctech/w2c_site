import type { ReactNode } from "react";

export function Card({
  children,
  hover = false,
  ai = false,
  className = "",
  ...rest
}: {
  children: ReactNode;
  hover?: boolean;
  ai?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative rounded-[var(--radius-card)] bg-card border border-line p-7 backdrop-blur-[12px] saturate-[1.1] transition-all duration-[250ms] ease-out
        before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
        before:bg-gradient-to-b before:from-[oklch(1_0_0/0.06)] before:to-transparent before:from-0% before:to-30%
        ${hover ? "hover:-translate-y-1 hover:shadow-lg hover:border-line-2 hover:bg-card-solid" : ""}
        ${ai ? "!bg-gradient-to-b from-accent-soft to-card !border-[oklch(0.82_0.14_85/0.35)]" : ""}
        ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
