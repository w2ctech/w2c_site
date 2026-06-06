import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Arrow } from "../ui/Icons";

const NUMS = [
  ["2020", "Founded — lean by design"],
  ["4+", "Global clients delivered"],
  ["3", "Continents served"],
  ["14+", "Years of founder expertise"],
];

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square border border-line rounded-[var(--radius-card)] bg-[radial-gradient(60%_60%_at_60%_35%,var(--color-glow-gold),transparent_70%),var(--color-card-solid)] overflow-hidden backdrop-blur-[8px]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-2)_1px,transparent_1.4px)] bg-[size:26px_26px]" style={{ maskImage: "radial-gradient(80% 80% at 55% 40%, #000, transparent 80%)" }} />
      <div className="viz-ring w-[130px] h-[130px]" />
      <div className="viz-ring w-[250px] h-[250px]" />
      <div className="viz-ring w-[380px] h-[380px]" />
      <div className="absolute h-px left-[55%] top-[42%] w-[132px] origin-left bg-gradient-to-r from-accent to-transparent opacity-50 rotate-[26deg]" />
      <div className="absolute h-px left-[55%] top-[42%] w-[120px] origin-left bg-gradient-to-r from-accent to-transparent opacity-50 rotate-[152deg]" />
      <div className="absolute h-px left-[55%] top-[42%] w-[112px] origin-left bg-gradient-to-r from-accent to-transparent opacity-50 rotate-[258deg]" />
      <div className="viz-node left-[55%] top-[42%] w-4 h-4" />
      <div className="viz-node left-[79%] top-[31%] w-[11px] h-[11px]" style={{ animationDelay: "0.8s" }} />
      <div className="viz-node left-[30%] top-[57%] w-[11px] h-[11px]" style={{ animationDelay: "1.6s" }} />
      <div className="absolute rounded-full bg-tx-2 shadow-[0_0_0_3px_oklch(0.92_0.02_264/0.06)] -translate-x-1/2 -translate-y-1/2 w-2 h-2 left-[71%] top-[63%]" />
      <div className="absolute rounded-full bg-tx-2 shadow-[0_0_0_3px_oklch(0.92_0.02_264/0.06)] -translate-x-1/2 -translate-y-1/2 w-2 h-2 left-[39%] top-[27%]" />

      <div className="absolute left-[18px] right-[18px] bottom-[18px] bg-[oklch(0.14_0.016_264/0.72)] border border-line-2 rounded-[14px] px-4 py-3.5 backdrop-blur-[10px] grid gap-2.5">
        <div className="flex items-center justify-between gap-3 font-mono text-[11.5px] text-tx-2">
          <span className="flex items-center gap-2 whitespace-nowrap flex-none">
            <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] flex-none" />
            w2c · cloud
          </span>
          <span className="text-accent-ink">online</span>
        </div>
        <div className="flex items-center justify-between gap-3 font-mono text-[11.5px] text-tx-2">
          <span className="whitespace-nowrap flex-none">ai-search · v3</span>
          <span className="h-1 rounded bg-[oklch(0.92_0.02_264/0.1)] overflow-hidden shrink-0 w-[84px]">
            <span className="block h-full rounded bg-gradient-to-r from-accent to-[oklch(0.72_0.13_78)] w-[82%]" />
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 font-mono text-[11.5px] text-tx-2">
          <span className="whitespace-nowrap flex-none">deploy · eu-central</span>
          <span className="h-1 rounded bg-[oklch(0.92_0.02_264/0.1)] overflow-hidden shrink-0 w-[84px]">
            <span className="block h-full rounded bg-gradient-to-r from-accent to-[oklch(0.72_0.13_78)] w-[64%]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_16%,var(--color-glow-gold),transparent_70%),radial-gradient(40%_40%_at_12%_92%,var(--color-glow-blue),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,9vw,112px)] pb-[clamp(40px,6vw,64px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-center">
          <div>
            <Reveal>
              <Eyebrow>Web&nbsp;to&nbsp;Cloud · Software &amp; AI</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="font-display font-semibold text-[clamp(40px,7vw,84px)] tracking-[-0.035em] leading-[1.05] text-tx mt-[22px] max-w-[15ch]">
                Software, <span className="text-accent">AI</span> &amp; cloud, built to scale with you.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-6 max-w-[560px]">
                A small, senior team that builds big. W2C&nbsp;Tech delivers custom software,
                intelligent AI systems and cloud — for ambitious companies across the EU, US and India.
                Founded 2020.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="flex items-center gap-3.5 flex-wrap mt-8">
                <Button href="https://calendly.com/w2ctechsolution/consultation" variant="accent" arrow>
                  Start a project
                </Button>
                <Button href="/services" variant="ghost">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="max-w-[460px] w-full ml-auto">
              <HeroVisual />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] pb-[clamp(48px,7vw,88px)]">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-[34px] border-t border-line">
            {NUMS.map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-semibold text-[clamp(38px,5vw,58px)] tracking-[-0.04em] leading-none text-tx">{n}</div>
                <div className="text-[15px] text-tx-2 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
