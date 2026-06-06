import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Typography";
import { Card } from "../ui/Card";
import { Spark } from "../ui/Icons";

const STEPS = [
  ["01", "Discover", "We learn your domain, map the problem and design an architecture that won't need rebuilding next year."],
  ["02", "Build", "Senior engineers ship in tight loops — software, AI models and cloud infrastructure, in production fast."],
  ["03", "Scale", "We harden, automate and grow the system — and the team — as your traffic and ambitions climb."],
];

export function Approach() {
  return (
    <section className="surface-ink">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-start">
          <div>
            <Reveal><Eyebrow>The W2C method</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="font-display font-semibold text-tx mt-5 max-w-[12ch] text-[clamp(34px,5vw,58px)]">
                From idea to production, then beyond.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-5 max-w-[460px]">
                Every engagement runs on the same belief: build scalable systems, embed AI where it earns its keep,
                and stay long enough to see them grow.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-[30px] inline-flex items-center gap-3.5 px-5 py-4 rounded-full border border-line-2 bg-card">
                <span className="text-accent inline-flex"><Spark /></span>
                <span className="text-[15px] text-tx-2">AI built into every layer — not bolted on after.</span>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-[18px]">
            {STEPS.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 90}>
                <Card>
                  <div className="grid grid-cols-[auto_1fr] gap-[22px] items-start">
                    <span className="font-mono text-[13px] text-accent-ink tracking-[0.1em]">{n}</span>
                    <div>
                      <h3 className="font-display font-semibold text-tx text-[clamp(21px,2vw,27px)] mb-2">{t}</h3>
                      <p className="text-[15.5px] text-tx-2">{d}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
