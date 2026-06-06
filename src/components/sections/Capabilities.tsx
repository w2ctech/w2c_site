import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Eyebrow, Tag } from "../ui/Typography";
import { Card } from "../ui/Card";
import { Arrow, Spark } from "../ui/Icons";

const CAPS = [
  { t: "Software & SaaS Solutions", d: "Custom product engineering — SaaS platforms, web apps, internal tools and APIs, built to last and built to scale.", tag: "Build", ai: false },
  { t: "AI Systems & AI-Enabled Software", d: "LLM features, ML models, intelligent automation and AI woven into the software you already run.", tag: "AI", ai: true },
  { t: "Cloud & DevOps", d: "The “to Cloud” in Web to Cloud — migrations, infrastructure, CI/CD and platforms that stay up.", tag: "Cloud", ai: false },
  { t: "Staff Augmentation", d: "Reskilled, vetted engineers and full squads on transparent per-hour billing — through our trusted vendor network.", tag: "Teams", ai: false },
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-end mb-12">
        <div>
          <Reveal><Eyebrow>What we do</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display font-semibold text-tx mt-5 text-[clamp(34px,5vw,58px)]">
              One partner, the whole stack.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed max-w-[440px]">
            We solve problems end-to-end — strategy, engineering, AI and the people to run it. No hand-offs, no gaps.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
        {CAPS.map((c, i) => (
          <Reveal key={c.t} delay={i * 80}>
            <Link href="/services" className="block h-full">
              <Card hover ai={c.ai}>
                <div className="flex justify-between items-center mb-[22px]">
                  <Tag ai={c.ai}>
                    {c.ai && <span className="text-accent-ink inline-flex"><Spark size={13} /></span>}
                    {c.tag}
                  </Tag>
                  <span className="text-accent-ink inline-flex"><Arrow /></span>
                </div>
                <h3 className="font-display font-semibold text-tx text-[clamp(21px,2vw,27px)] mb-3">{c.t}</h3>
                <p className="text-[16px] text-tx-2">{c.d}</p>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
