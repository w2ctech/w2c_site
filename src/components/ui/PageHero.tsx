import { Eyebrow } from "./Typography";
import { Reveal } from "./Reveal";
import { Arrow } from "./Icons";

export function PageHero({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_16%,var(--color-glow-gold),transparent_70%),radial-gradient(40%_40%_at_12%_92%,var(--color-glow-blue),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(60px,9vw,110px)] pb-[clamp(40px,6vw,72px)]">
        <Reveal>
          <Eyebrow>{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="font-display font-semibold tracking-[-0.035em] leading-tight text-tx mt-[22px] max-w-[16ch] text-[clamp(40px,7vw,84px)]">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={140}>
            <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-6 max-w-[620px]">
              {sub}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function CTASection({ variant = "ink" }: { variant?: "ink" | "default" }) {
  return (
    <section className={variant === "ink" ? "bg-ink border-y border-line" : ""}>
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <Reveal><Eyebrow>Have a project in mind?</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="font-display font-semibold text-tx mt-5 max-w-[620px] text-[clamp(34px,5vw,58px)]">
                Let&apos;s build something that scales with you.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-[18px] max-w-[520px]">
                Tell us where you want to go. We&apos;ll bring the engineers, the AI, and the cloud to get you there.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="flex gap-3 flex-wrap">
              <a href="/contact" className="btn-accent">Connect with us <Arrow /></a>
              <a href="/services" className="btn-ghost">See services</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
