export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.18em] uppercase text-accent-ink font-medium whitespace-nowrap">
      <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft),0_0_12px_var(--color-accent)] inline-block" />
      {children}
    </span>
  );
}

export function Tag({ children, ai = false }: { children: React.ReactNode; ai?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.08em] uppercase rounded-full px-3 py-1.5 border ${
        ai
          ? "bg-accent-soft text-accent-ink border-[oklch(0.82_0.14_85/0.3)]"
          : "text-tx-2 border-line-2 bg-[oklch(0.92_0.02_264/0.03)]"
      }`}
    >
      {children}
    </span>
  );
}
