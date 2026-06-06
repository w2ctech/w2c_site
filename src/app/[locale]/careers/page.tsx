"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Spark, Arrow } from "@/components/ui/Icons";
import { PageHero, CTASection } from "@/components/ui/PageHero";

const ROLES = [
  { name: "Senior Full-Stack Engineer", dept: "Engineering", loc: "Noida / Remote", type: "Full-time", desc: "Own features end-to-end across React, Node and cloud. You will ship product for EU and US clients and mentor the team around you." },
  { name: "AI / ML Engineer", dept: "AI", loc: "Remote", type: "Full-time", desc: "Build LLM and RAG applications, fine-tune models and put AI into production. Comfort with Python and modern ML tooling required." },
  { name: "Cloud / DevOps Engineer", dept: "Cloud", loc: "Noida / Remote", type: "Full-time", desc: "Design cloud-native infrastructure, CI/CD and reliability. AWS/GCP, IaC and a calm hand during incidents." },
  { name: "Search Engineer", dept: "Data", loc: "Remote", type: "Contract / FT", desc: "Work on Lucene, Elasticsearch and vector search — relevance tuning and data pipelines for high-traffic marketplaces." },
  { name: "Technical Recruiter / Bench Sales", dept: "People", loc: "Noida", type: "Full-time", desc: "Grow our vetted vendor network and match the right engineers to the right clients across our staff-augmentation business." },
];

const PERKS = [
  ["Remote-first", "Work from where you do your best thinking. Our teams span three continents already."],
  ["Global projects", "Ship for EU and US partners — real products, real scale, real ownership."],
  ["Learning budget", "Annual stipend for courses, conferences and certifications. AI moves fast; so do we."],
  ["Real mentorship", "Senior engineers who review your code and grow your career, not just your ticket count."],
  ["Flexible engagements", "Full-time, contract or freelance — we meet good people where they are."],
  ["Honest culture", "Small enough to be heard, structured enough to deliver. No politics, no theatre."],
];

export default function CareersPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        kicker="Careers"
        title={<>Build software that matters — with people who have got your back.</>}
        sub="We are a small, senior team shipping for clients worldwide. If you like ownership, scale and a bit of AI, you will feel at home."
      >
        <Reveal delay={200}>
          <div className="flex items-center gap-3.5 flex-wrap mt-[30px]">
            <a href="#open-roles" className="btn-accent">See open roles <Arrow /></a>
            <a href="/about" className="btn-ghost">About the team</a>
          </div>
        </Reveal>
      </PageHero>

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="mb-11">
          <Reveal><Eyebrow>Why join W2C</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display font-semibold text-tx mt-5 max-w-[16ch] text-[clamp(34px,5vw,58px)]">
              Senior work, human pace.
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
          {PERKS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80}>
              <Card hover>
                <span className="text-accent-ink inline-flex"><Spark /></span>
                <h3 className="font-display font-semibold text-tx text-[20px] my-4">{t}</h3>
                <p className="text-[15.5px] text-tx-2">{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="open-roles" className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-end mb-10">
            <div>
              <Reveal><Eyebrow>Open roles</Eyebrow></Reveal>
              <Reveal delay={60}>
                <h2 className="font-display font-semibold text-tx mt-5 text-[clamp(34px,5vw,58px)]">
                  Find your seat.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed max-w-[420px]">
                Don't see your exact role? We are always talking to good engineers — send us a note anyway.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-[14px] max-w-[920px]">
            {ROLES.map((r, i) => (
              <Reveal key={r.name} delay={i * 50}>
                <Card>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full bg-transparent border-0 cursor-pointer text-left p-0 grid grid-cols-[1fr_auto] gap-4 items-center"
                  >
                    <div>
                      <h3 className="font-display font-semibold text-tx text-[21px]">{r.name}</h3>
                      <div className="flex items-center gap-1.5 mt-2.5 font-mono text-xs text-tx-3">
                        <span className="text-accent-ink">{r.dept}</span>
                        <span className="opacity-40">·</span>
                        <span>{r.loc}</span>
                        <span className="opacity-40">·</span>
                        <span>{r.type}</span>
                      </div>
                    </div>
                    <span className={`inline-flex text-tx-2 transition-transform duration-[250ms] ${open === i ? "rotate-90" : ""}`}>
                      <Arrow />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-[350ms] ease-out"
                    style={{ maxHeight: open === i ? "200px" : "0" }}
                  >
                    <div className="pt-4">
                      <p className="text-[16px] text-tx-2 max-w-[640px]">{r.desc}</p>
                      <a href="/contact" className="btn-accent inline-flex mt-5 text-sm px-4 py-2">Apply for this role <Arrow /></a>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="ink" />
    </main>
  );
}
