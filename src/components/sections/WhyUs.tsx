import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Typography";
import { Card } from "../ui/Card";

const POINTS = [
  ["You'll feel heard", "We listen first, then choose the solution that actually fits — not the one that bills the most."],
  ["We treat it as our own", "A sincere stake in your outcome. Your roadmap, uptime and growth become ours too."],
  ["Honest, fair pricing", "Senior expertise at reasonable rates, with flexible engagement and staffing models."],
  ["Built to scale", "Architecture and AI decisions made for where you're going, not just where you are."],
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-start">
        <div className="md:sticky md:top-24">
          <Reveal><Eyebrow>Why choose us</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display font-semibold text-tx mt-5 max-w-[13ch] text-[clamp(34px,5vw,58px)]">
              The right partner, at an honest price.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-[18px] max-w-[440px]">
              We have the expertise to offer impartial advice and services — and we genuinely want your company to reach its potential.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-[14px]">
          {POINTS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <Card>
                <div className="grid grid-cols-[auto_1fr] gap-[18px]">
                  <span className="mt-1 w-[9px] h-[9px] rounded-[2px] bg-accent rotate-45 shadow-[0_0_10px_var(--color-accent)]" />
                  <div>
                    <h3 className="font-display font-semibold text-tx text-[20px] mb-[7px]">{t}</h3>
                    <p className="text-[15.5px] text-tx-2">{d}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
