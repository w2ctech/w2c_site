/* global React, Reveal, Eyebrow, Arrow, Spark, Placeholder, CTASection, PageHero */
const { useState: useStateC } = React;

const ROLES = [
  ["Senior Full-Stack Engineer", "Engineering", "Noida / Remote", "Full-time",
    "Own features end-to-end across React, Node and cloud. You’ll ship product for EU and US clients and mentor the team around you."],
  ["AI / ML Engineer", "AI", "Remote", "Full-time",
    "Build LLM and RAG applications, fine-tune models and put AI into production. Comfort with Python and modern ML tooling required."],
  ["Cloud / DevOps Engineer", "Cloud", "Noida / Remote", "Full-time",
    "Design cloud-native infrastructure, CI/CD and reliability. AWS/GCP, IaC and a calm hand during incidents."],
  ["Search Engineer", "Data", "Remote", "Contract / FT",
    "Work on Lucene, Elasticsearch and vector search — relevance tuning and data pipelines for high-traffic marketplaces."],
  ["Technical Recruiter / Bench Sales", "People", "Noida", "Full-time",
    "Grow our vetted vendor network and match the right engineers to the right clients across our staff-augmentation business."],
];

const PERKS = [
  ["Remote-first", "Work from where you do your best thinking. Our teams span three continents already."],
  ["Global projects", "Ship for EU and US partners — real products, real scale, real ownership."],
  ["Learning budget", "Annual stipend for courses, conferences and certifications. AI moves fast; so do we."],
  ["Real mentorship", "Senior engineers who review your code and grow your career, not just your ticket count."],
  ["Flexible engagements", "Full-time, contract or freelance — we meet good people where they are."],
  ["Honest culture", "Small enough to be heard, structured enough to deliver. No politics, no theatre."],
];

function Role({ r, idx, open, onToggle, go }) {
  const [name, dept, loc, type, desc] = r;
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", borderColor: open ? "var(--line-2)" : "var(--line)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{ width: "100%", background: "none", border: 0, cursor: "pointer", textAlign: "left",
                 padding: "24px 28px", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}
      >
        <div>
          <h3 className="h3" style={{ fontSize: 21 }}>{name}</h3>
          <div className="kicker-row mono" style={{ marginTop: 10, fontSize: 12, color: "var(--tx-3)" }}>
            <span style={{ color: "var(--accent-ink)" }}>{dept}</span>
            <span style={{ opacity: .4 }}>·</span><span>{loc}</span>
            <span style={{ opacity: .4 }}>·</span><span>{type}</span>
          </div>
        </div>
        <span style={{ display: "inline-flex", color: "var(--tx-2)", transition: "transform .25s", transform: open ? "rotate(90deg)" : "none" }}>
          <Arrow className="" />
        </span>
      </button>
      <div style={{ maxHeight: open ? 260 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <div style={{ padding: "0 28px 26px" }}>
          <p className="muted" style={{ fontSize: 16, maxWidth: 640 }}>{desc}</p>
          <a href="#/contact" onClick={(e) => { e.preventDefault(); go("#/contact"); }} className="btn btn-accent btn-sm" style={{ marginTop: 20 }}>
            Apply for this role <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}

function CareersPage({ go }) {
  const [open, setOpen] = useStateC(0);
  return (
    <main>
      <PageHero
        kicker="Careers"
        title={<>Build software that matters — with people who’ve got your back.</>}
        sub="We’re a small, senior team shipping for clients worldwide. If you like ownership, scale and a bit of AI, you’ll feel at home."
      >
        <Reveal delay={200}>
          <div className="kicker-row" style={{ marginTop: 30 }}>
            <a href="#open-roles" className="btn btn-accent">See open roles <Arrow /></a>
            <a href="#/about" onClick={(e) => { e.preventDefault(); go("#/about"); }} className="btn btn-ghost">About the team</a>
          </div>
        </Reveal>
      </PageHero>

      {/* Perks */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 44 }}>
            <Reveal><Eyebrow>Why join W2C</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20, maxWidth: "16ch" }}>Senior work, human pace.</h2></Reveal>
          </div>
          <div className="grid g-3">
            {PERKS.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <div className="card card-hover" style={{ height: "100%" }}>
                  <span style={{ display: "inline-flex", color: "var(--accent-ink)" }}><Spark /></span>
                  <h3 className="h3" style={{ fontSize: 20, margin: "16px 0 10px" }}>{t}</h3>
                  <p className="muted" style={{ fontSize: 15.5 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section" id="open-roles" style={{ background: "var(--paper-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: "end", marginBottom: 40 }}>
            <div>
              <Reveal><Eyebrow>Open roles</Eyebrow></Reveal>
              <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20 }}>Find your seat.</h2></Reveal>
            </div>
            <Reveal delay={120}>
              <p className="lead" style={{ maxWidth: 420 }}>
                Don’t see your exact role? We’re always talking to good engineers — send us a note anyway.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "grid", gap: 14, maxWidth: 920 }}>
            {ROLES.map((r, i) => (
              <Reveal key={r[0]} delay={i * 50}>
                <Role r={r} idx={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} go={go} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection go={go} variant="ink" />
    </main>
  );
}

window.CareersPage = CareersPage;
