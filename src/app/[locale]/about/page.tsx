import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Spark } from "@/components/ui/Icons";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, senior team that builds big. Since 2020 W2C Tech has delivered software, AI and cloud systems for partners across the EU, US and India.",
};

const FOUNDERS = [
  { name: "Yogendra Singh", role: "Director — Software Eng & AI", bio: "14+ years across the IT industry — specializing in software engineering and artificial intelligence. Leading delivery, client partnerships and the engineering vision behind W2C.", img: "/assets/yogendra.jpeg" },
  { name: "Bishwajeet Biswas", role: "Director — Cloud", bio: "Heads the cloud and infrastructure practice, turning Web to Cloud from a tagline into production systems.", img: "/assets/bishwajeet.png" },
  { name: "Ekta Singh", role: "Senior HR Specialist", bio: "Leads people and talent — building the bench, the culture and the vendor network that staffs every project.", img: "/assets/ekta.jpeg" },
];

const VALUES = [
  ["Build to scale", "We make architecture and AI decisions for where you are going — systems that grow instead of getting rebuilt."],
  ["Partners, not vendors", "We take a sincere stake in our clients outcomes and stay for the long haul. Your goals become ours."],
  ["Honest by default", "Impartial advice, fair pricing, and clear communication. You always know where things stand."],
  ["Curious about AI", "We treat AI as a tool, not a trophy — applied where it genuinely makes software better."],
];


export default function AboutPage() {
  const initials = (n: string) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <main>
      <PageHero
        kicker="About W2C Tech"
        title={<>A software team that grows businesses, not just code.</>}
        sub="A small, senior team that builds big. Since 2020 we have delivered software, AI and cloud systems for partners across the EU, US and India."
      />

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)]">
          <Reveal>
            <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-line aspect-[4/5]">
              <img
                src="/assets/Our_story.png"
                alt="From Web to Cloud to AI journey"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>Our story</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="font-display font-semibold text-tx mt-[18px] text-[clamp(28px,3.6vw,45px)]">
                From Web to Cloud — and now to AI.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[clamp(18px,2vw,22px)] text-tx-2 leading-relaxed mt-[18px]">
                W2C — Web to Cloud — started with a simple idea: help businesses use the internet to its full potential. Since 2020, that mission has grown to run through cloud and AI too.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <p className="text-[16.5px] text-tx-2 mt-[18px]">
                Today we ship software, intelligent AI systems and the cloud platforms that run them — and when teams need more hands, we provide vetted engineers through our trusted vendor network.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="grid grid-cols-2 gap-5 mt-[34px]">
                {[["2020", "Founded"], ["2022", "Registered"], ["4+", "Global clients"], ["3", "Continents"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display font-semibold text-[40px] tracking-[-0.04em] leading-none text-tx">{n}</div>
                    <div className="text-[14.5px] text-tx-2 mt-1.5">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-ink">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)]">
            <Reveal>
              <Card>
                <span className="font-mono text-xs text-accent tracking-[0.12em]">MISSION</span>
                <h3 className="font-display font-semibold text-tx my-4" style={{ fontSize: 32 }}>Empower clients to win online.</h3>
                <p className="text-[17px] text-tx-2">
                  To help our clients use the internet and AI to their full potential — through affordable, effective, custom design, software and marketing solutions.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card>
                <span className="font-mono text-xs text-accent tracking-[0.12em]">VISION</span>
                <h3 className="font-display font-semibold text-tx my-4" style={{ fontSize: 32 }}>A global leader in scalable software.</h3>
                <p className="text-[17px] text-tx-2">
                  To become a global leader in unique, intelligent web and cloud solutions that improve our clients productivity and business strength.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="mb-[46px]">
          <Reveal><Eyebrow>Leadership</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display font-semibold text-tx mt-5 max-w-[16ch] text-[clamp(34px,5vw,58px)]">
              The people who keep us pointed forward.
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <div>
                <div className="relative w-full aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden border border-line">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-tx text-[22px] mt-4">{f.name}</h3>
                <div className="font-mono text-[12.5px] text-accent-ink tracking-[0.06em] uppercase my-1.5">{f.role}</div>
                <p className="text-[15.5px] text-tx-2">{f.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(28px,5vw,72px)] items-start">
            <div className="md:sticky md:top-24">
              <Reveal><Eyebrow>What we value</Eyebrow></Reveal>
              <Reveal delay={60}>
                <h2 className="font-display font-semibold text-tx mt-5 max-w-[12ch] text-[clamp(34px,5vw,58px)]">
                  How we show up, every project.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 inline-flex items-center gap-3.5 px-5 py-4 rounded-full border border-line-2 bg-card">
                  <span className="text-accent-ink inline-flex"><Spark /></span>
                  <span className="text-[15px] text-tx-2">Trusted vendor tie-ups for staffing at any scale.</span>
                </div>
              </Reveal>
            </div>
            <div className="grid gap-[14px]">
              {VALUES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80}>
                  <Card>
                    <div className="grid grid-cols-[auto_1fr] gap-[18px]">
                      <span className="mt-1.5 w-[9px] h-[9px] rounded-[2px] bg-accent rotate-45" />
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
        </div>
      </section>

      <CTASection variant="ink" />
    </main>
  );
}
