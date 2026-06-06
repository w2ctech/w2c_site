/* global React, Reveal, Eyebrow, Arrow, Spark, Placeholder, CTASection */

function PageHero({ kicker, title, sub, children }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
      <div className="hero-grad"></div>
      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBlock: "clamp(60px, 9vw, 110px) clamp(40px, 6vw, 72px)" }}>
        <Reveal><Eyebrow>{kicker}</Eyebrow></Reveal>
        <Reveal delay={70}><h1 className="h-display" style={{ marginTop: 22, maxWidth: "16ch" }}>{title}</h1></Reveal>
        {sub && <Reveal delay={140}><p className="lead" style={{ marginTop: 24, maxWidth: 620 }}>{sub}</p></Reveal>}
        {children}
      </div>
    </section>
  );
}
window.PageHero = PageHero;

const SERVICES = [
  {
    n: "01", tag: "Build", t: "Software & SaaS Solutions",
    d: "Custom product engineering, end to end. We design and build SaaS platforms, web apps, internal tools and APIs that are clean to maintain and ready to grow.",
    points: ["SaaS product engineering", "APIs & system integration", "Internal tools & dashboards", "Mobile & cross-platform apps"],
  },
  {
    n: "02", tag: "AI", ai: true, t: "AI Systems & AI-Enabled Software",
    d: "AI where it earns its keep. We build LLM-powered features, ML models and intelligent automation — and retrofit AI into the software you already run.",
    points: ["LLM & RAG applications", "ML models & data products", "AI copilots & agents", "AI strategy & consulting"],
  },
  {
    n: "03", tag: "Cloud", t: "Cloud & DevOps",
    d: "The “to Cloud” in Web to Cloud. Migrations, cloud-native architecture, CI/CD and reliability engineering that keeps your systems fast and always on.",
    points: ["Cloud migration & architecture", "CI/CD & automation", "Infrastructure as code", "Monitoring & SRE"],
  },
  {
    n: "04", tag: "Search", ai: true, t: "Search & Data Engineering",
    d: "Findability at scale. Lucene, Elasticsearch and modern vector search — combined with AI to deliver relevance your users actually feel.",
    points: ["Lucene / Elasticsearch", "Vector & semantic search", "Data pipelines & ETL", "Analytics & reporting"],
  },
  {
    n: "05", tag: "Teams", t: "Staff Augmentation",
    d: "The right people, fast — on transparent per-hour billing. Vetted, continuously reskilled engineers and full squads that embed in your team, backed by our trusted vendor network.",
    points: ["Per-hour, scale-as-you-go billing", "Reskilled, vetted engineers", "Dedicated squads or individuals", "Trusted vendor network"],
  },
  {
    n: "06", tag: "Advise", t: "IT Consulting & Distribution",
    d: "Direction before delivery. Architecture reviews, technology strategy and software distribution to get the right systems into the right hands.",
    points: ["Technology strategy", "Architecture & audits", "Software distribution", "Digital transformation"],
  },
];

const MODELS = [
  ["Dedicated Team", "A self-managed squad that works as an extension of your org — ideal for long-term products.", "Monthly"],
  ["Staff Augmentation", "Reskilled experts who slot into your existing team and process, scaling up or down on demand.", "Per hour"],
  ["Fixed Project", "Defined scope, timeline and price — best when requirements are clear and outcomes are concrete.", "Per project"],
];

function ServiceBlock({ s, i }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <div className="split" style={{ gap: "clamp(28px, 5vw, 72px)" }}>
        <div style={{ order: flip ? 2 : 1 }}>
          <div className="kicker-row" style={{ marginBottom: 18 }}>
            <span className="step-num" style={{ color: "var(--accent-ink)" }}>{s.n}</span>
            <span className={"tag" + (s.ai ? " pill-accent" : "")}>
              {s.ai && <span style={{ color: "var(--accent-ink)", display: "inline-flex" }}><Spark size={13} /></span>}
              {s.tag}
            </span>
          </div>
          <h2 className="h2" style={{ marginBottom: 16 }}>{s.t}</h2>
          <p className="lead" style={{ marginBottom: 26, fontSize: 19 }}>{s.d}</p>
          <ul className="list-check" style={{ gridTemplateColumns: "1fr 1fr", display: "grid", gap: "12px 24px" }}>
            {s.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div style={{ order: flip ? 1 : 2 }}>
          <Placeholder label={s.t.toLowerCase()} ink={s.ai}
            style={{ aspectRatio: "1/1", width: "100%" }} className="dot-grid" />
        </div>
      </div>
    </Reveal>
  );
}

function ServicesPage({ go }) {
  const nav = (e, h) => { e.preventDefault(); go(h); };
  return (
    <main>
      <PageHero
        kicker="Services"
        title={<>Everything from <span style={{ color: "var(--accent-ink)" }}>web to cloud</span> — and the AI in between.</>}
        sub="Six capabilities, one accountable partner. Mix and match, or hand us the whole thing. Either way, you get senior people who own the outcome."
      >
        <Reveal delay={200}>
          <div className="kicker-row" style={{ marginTop: 30 }}>
            <a href="#/contact" onClick={(e) => nav(e, "#/contact")} className="btn btn-accent">Get a quote <Arrow /></a>
            <a href="#/about" onClick={(e) => nav(e, "#/about")} className="btn btn-ghost">How we work</a>
          </div>
        </Reveal>
      </PageHero>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: "clamp(64px, 9vw, 120px)" }}>
          {SERVICES.map((s, i) => <ServiceBlock key={s.n} s={s} i={i} />)}
        </div>
      </section>

      {/* Engagement models */}
      <section className="surface-ink">
        <div className="wrap section">
          <div style={{ marginBottom: 44 }}>
            <Reveal><Eyebrow>Engagement models</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20, maxWidth: "16ch" }}>Work with us the way that fits.</h2></Reveal>
          </div>
          <div className="grid g-3">
            {MODELS.map(([t, d, m], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m}</span>
                  <h3 className="h3" style={{ margin: "14px 0 12px" }}>{t}</h3>
                  <p className="muted" style={{ fontSize: 15.5 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection go={go} variant="default" />
    </main>
  );
}

window.ServicesPage = ServicesPage;
