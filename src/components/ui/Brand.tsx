import Link from "next/link";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-[11px] shrink-0" aria-label="W2C Tech home">
      <div
        className="w-[34px] h-[34px] rounded-[9px] shrink-0 relative overflow-hidden bg-card-solid"
        style={{ boxShadow: "0 0 0 1px oklch(0.82 0.14 85 / 0.3), 0 4px 16px oklch(0.82 0.14 85 / 0.3)" }}
      >
        <img
          src="/assets/w2c-logo.png"
          alt="W2C Tech"
          className="w-full h-full object-contain p-0.5"
        />
      </div>
      <span className="font-display font-semibold text-[19px] tracking-[-0.03em] text-tx whitespace-nowrap">
        W2C<b className="text-accent-ink font-semibold"> Tech</b>
      </span>
    </Link>
  );
}
