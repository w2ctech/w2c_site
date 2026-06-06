import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Typography";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Arrow } from "../ui/Icons";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-center">
        <Reveal>
          <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-line aspect-[4/3]">
            <img
              src="/assets/office_photo.png"
              alt="W2C Tech team at office"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal><Eyebrow>Who we are</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display font-semibold text-tx mt-[18px] text-[clamp(28px,3.6vw,45px)]">
              A small team that builds big systems.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-[18px]">
              We're a focused, senior team — small enough to care, sharp enough to build big.
              We help clients use the web, cloud and AI to their full potential, with people you can count on.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] mt-[30px]">
            <Reveal delay={160}>
              <Card>
                <span className="font-mono text-xs text-accent-ink tracking-[0.1em]">MISSION</span>
                <p className="mt-3 text-[16px] text-tx-2">
                  To help clients harness the internet and AI through affordable, effective, custom software.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={220}>
              <Card>
                <span className="font-mono text-xs text-accent-ink tracking-[0.1em]">VISION</span>
                <p className="mt-3 text-[16px] text-tx-2">
                  To be a global leader in scalable, intelligent software that strengthens our clients' businesses.
                </p>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={260}>
            <div className="mt-[30px]">
              <Button href="/about" variant="ghost" arrow>
                Meet the team
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
