"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Tag } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Arrow, Spark } from "@/components/ui/Icons";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import { useDict, useLocale } from "@/i18n/LocaleContext";
import type { Metadata } from "next";

const SERVICES = [
  { n: "01", tag: "Build", t: "Software & SaaS Solutions", d: "Custom product engineering, end to end. We design and build SaaS platforms, web apps, internal tools and APIs that are clean to maintain and ready to grow.", points: ["SaaS product engineering", "APIs & system integration", "Internal tools & dashboards", "Mobile & cross-platform apps"], ai: false },
  { n: "02", tag: "AI", ai: true, t: "AI Systems & AI-Enabled Software", d: "AI where it earns its keep. We build LLM-powered features, ML models and intelligent automation — and retrofit AI into the software you already run.", points: ["LLM & RAG applications", "ML models & data products", "AI copilots & agents", "AI strategy & consulting"] },
  { n: "03", tag: "Cloud", t: "Cloud & DevOps", d: "The to Cloud in Web to Cloud. Migrations, cloud-native architecture, CI/CD and reliability engineering that keeps your systems fast and always on.", points: ["Cloud migration & architecture", "CI/CD & automation", "Infrastructure as code", "Monitoring & SRE"], ai: false },
  { n: "04", tag: "Search", ai: true, t: "Search & Data Engineering", d: "Findability at scale. Lucene, Elasticsearch and modern vector search — combined with AI to deliver relevance your users actually feel.", points: ["Lucene / Elasticsearch", "Vector & semantic search", "Data pipelines & ETL", "Analytics & reporting"] },
  { n: "05", tag: "Teams", t: "Staff Augmentation", d: "The right people, fast — on transparent per-hour billing. Vetted, continuously reskilled engineers and full squads that embed in your team, backed by our trusted vendor network.", points: ["Per-hour, scale-as-you-go billing", "Reskilled, vetted engineers", "Dedicated squads or individuals", "Trusted vendor network"], ai: false },
  { n: "06", tag: "Advise", t: "IT Consulting & Distribution", d: "Direction before delivery. Architecture reviews, technology strategy and software distribution to get the right systems into the right hands.", points: ["Technology strategy", "Architecture & audits", "Software distribution", "Digital transformation"], ai: false },
];

const MODELS = [
  ["Dedicated Team", "A self-managed squad that works as an extension of your org — ideal for long-term products.", "Monthly"],
  ["Staff Augmentation", "Reskilled experts who slot into your existing team and process, scaling up or down on demand.", "Per hour"],
  ["Fixed Project", "Defined scope, timeline and price — best when requirements are clear and outcomes are concrete.", "Per project"],
];

function Placeholder({ label, ink = false }: { label: string; ink?: boolean }) {
  return (
    <div className={`relative border border-line rounded-[var(--radius-card)] flex items-center justify-center overflow-hidden aspect-square w-full ${ink ? "bg-ink" : "bg-card-solid"} bg-[repeating-linear-gradient(-45deg,oklch(0.92_0.02_264/0.05)_0_1px,transparent_1px_11px)]`}>
      <span className={`font-mono text-xs tracking-[0.04em] py-1.5 px-3 rounded-full border border-line-2 ${ink ? "bg-ink-soft text-on-ink-2" : "bg-[oklch(0.16_0.018_264/0.7)] text-tx-2"}`}>
        {label}
      </span>
    </div>
  );
}

function ServiceBlock({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-center">
        <div style={{ order: flip ? 2 : 1 }}>
          <div className="flex items-center gap-3.5 mb-[18px]">
            <span className="font-mono text-[13px] text-accent-ink tracking-[0.1em]">{s.n}</span>
            <Tag ai={s.ai}>
              {s.ai && <span className="text-accent-ink inline-flex"><Spark size={13} /></span>}
              {s.tag}
            </Tag>
          </div>
          <h2 className="font-display font-semibold text-tx text-[clamp(28px,3.6vw,45px)] mb-4">{s.t}</h2>
          <p className="text-[19px] text-tx-2 leading-relaxed mb-[26px]">{s.d}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0 m-0">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 items-start text-tx-2">
                <span className="mt-2 w-[7px] h-[7px] rounded-[2px] bg-accent rotate-45 shadow-[0_0_10px_var(--color-accent)] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ order: flip ? 1 : 2 }}>
          <Placeholder label={s.t.toLowerCase()} ink={s.ai} />
        </div>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  const { locale } = useLocale();
  const dict = useDict<Record<string, Record<string, string>>>();

  return (
    <main>
      <PageHero
        kicker={dict.services?.kicker || "Services"}
        title={<>Everything from <span className="text-accent-ink">web to cloud</span> — and the AI in between.</>}
        sub={dict.services?.subtitle || "Six capabilities, one accountable partner."}
      >
        <Reveal delay={200}>
          <div className="flex items-center gap-3.5 flex-wrap mt-[30px]">
            <Button href="https://calendly.com/w2ctechsolution/consultation" variant="accent" arrow>{dict.services?.getQuote || "Get a quote"}</Button>
            <Button href={`/${locale}/about`} variant="ghost">{dict.services?.howWeWork || "How we work"}</Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid gap-[clamp(64px,9vw,120px)]">
          {SERVICES.map((s, i) => <ServiceBlock key={s.n} s={s} i={i} />)}
        </div>
      </section>

      <section className="surface-ink">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
          <div className="mb-11">
            <Reveal><Eyebrow>{dict.services?.engagementEyebrow || "Engagement models"}</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="font-display font-semibold text-tx mt-5 max-w-[16ch] text-[clamp(34px,5vw,58px)]">
                {dict.services?.engagementHeading || "Work with us the way that fits."}
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
            {MODELS.map(([t, d, m], i) => (
              <Reveal key={t} delay={i * 80}>
                <Card>
                  <span className="font-mono text-xs text-accent tracking-[0.1em] uppercase">{m}</span>
                  <h3 className="font-display font-semibold text-tx text-[clamp(21px,2vw,27px)] my-3.5">{t}</h3>
                  <p className="text-[15.5px] text-tx-2">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="default" />
    </main>
  );
}
