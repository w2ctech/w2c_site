import { Reveal } from "../ui/Reveal";
import { Eyebrow, Tag } from "../ui/Typography";
import { Card } from "../ui/Card";

const CASES = [
  { name: "Vinted", region: "EU · Marketplace", desc: "Scaled search relevance and catalog services for one of Europe's largest resale platforms.", tag: "Search & AI" },
  { name: "Rebelle", region: "EU · Luxury resale", desc: "Engineering capacity and intelligent automation for a premium second-hand marketplace.", tag: "Staff Aug · AI" },
  { name: "SportEco", region: "EU · Sports retail", desc: "Cloud platform and data services for a sustainable sports commerce brand.", tag: "Cloud · Build" },
  { name: "Token Metrix", region: "US · Analytics", desc: "Cloud data pipelines and AI-assisted reporting for a US analytics product.", tag: "Cloud · AI" },
];

export function Cases() {
  return (
    <section className="border-y border-line bg-surface-2">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-end mb-11">
          <div>
            <Reveal><Eyebrow>Success stories</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="font-display font-semibold text-tx mt-5 text-[clamp(34px,5vw,58px)]">
                Trusted by teams that ship.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed max-w-[420px]">
              From EU marketplaces to US analytics — long-term partnerships, not one-off projects.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <Card hover>
                <div className="flex flex-col gap-1 mb-2.5">
                  <h3 className="font-display font-semibold text-tx text-lg sm:text-xl leading-tight break-words">
                    {c.name}
                  </h3>
                  <span className="font-mono text-[10.5px] text-tx-3 leading-tight">
                    {c.region}
                  </span>
                </div>
                <p className="text-[13px] sm:text-[14px] text-tx-2 leading-relaxed break-words">
                  {c.desc}
                </p>
                <div className="mt-3">
                  <Tag ai>{c.tag}</Tag>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
