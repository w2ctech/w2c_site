/* global React, Reveal, Eyebrow, Arrow, Spark, Placeholder, CTASection, PageHero */

const FOUNDERS = [
  ["Yogendra Singh", "Director", "14+ years across the IT industry — leading delivery, client partnerships and the engineering vision behind W2C."],
  ["Bishwajeet Biswas", "Director — Cloud", "Heads the cloud and infrastructure practice, turning “Web to Cloud” from a tagline into production systems."],
  ["Ekta Singh", "Senior HR Specialist", "Leads people and talent — building the bench, the culture and the vendor network that staffs every project."],
];

const VALUES = [
  ["Build to scale", "We make architecture and AI decisions for where you’re going — systems that grow instead of getting rebuilt."],
  ["Partners, not vendors", "We take a sincere stake in our clients’ outcomes and stay for the long haul. Your goals become ours."],
  ["Honest by default", "Impartial advice, fair pricing, and clear communication. You always know where things stand."],
  ["Curious about AI", "We treat AI as a tool, not a trophy — applied where it genuinely makes software better."],
];

function AboutPage({ go }) {
  return (
    <main>
      <PageHero
        kicker="About W2C Tech"
        title={<>A software team that grows businesses, not just code.</>}
        sub="A small, senior team that builds big. Since 2020 we’ve delivered software, AI and cloud systems for partners across the EU, US and India."
      />

      {/* Story */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <Placeholder label="team at work" style={{ aspectRatio: "4/5", width: "100%" }} />
          </Reveal>
          <div>
            <Reveal><Eyebrow>Our story</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="h2" style={{ marginTop: 18 }}>From Web to Cloud — and now to AI.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 18 }}>
                W2C — Web to Cloud — started with a simple idea: help businesses use the internet to its full
                potential. Since 2020, that mission has grown to run through cloud and AI too.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <p className="muted" style={{ marginTop: 18, fontSize: 16.5 }}>
                Today we ship software, intelligent AI systems and the cloud platforms that run them — and when teams
                need more hands, we provide vetted engineers through our trusted vendor network. From EU marketplaces
                like Vinted, Rebelle and SportEco to US products like Token Metrix, we build for the long term.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="num-row" style={{ marginTop: 34, gridTemplateColumns: "1fr 1fr" }}>
                {[["2020", "Founded"], ["2022", "Registered"], ["4+", "Global clients"], ["3", "Continents"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="stat-num" style={{ fontSize: 40 }}>{n}</div>
                    <div className="muted" style={{ marginTop: 6, fontSize: 14.5 }}>{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="surface-ink">
        <div className="wrap section">
          <div className="split">
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.12em" }}>MISSION</span>
                <h3 className="h2" style={{ margin: "16px 0", fontSize: 32 }}>Empower clients to win online.</h3>
                <p className="muted" style={{ fontSize: 17 }}>
                  To help our clients use the internet and AI to their full potential — through affordable, effective,
                  custom design, software and marketing solutions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card" style={{ height: "100%" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.12em" }}>VISION</span>
                <h3 className="h2" style={{ margin: "16px 0", fontSize: 32 }}>A global leader in scalable software.</h3>
                <p className="muted" style={{ fontSize: 17 }}>
                  To become a global leader in unique, intelligent web and cloud solutions that improve our clients’
                  productivity and business strength.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 46 }}>
            <Reveal><Eyebrow>Leadership</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20, maxWidth: "16ch" }}>The people who keep us pointed forward.</h2></Reveal>
          </div>
          <div className="grid g-3">
            {FOUNDERS.map(([name, role, bio], i) => (
              <Reveal key={name} delay={i * 90}>
                <div className="person">
                  <Placeholder label="portrait" />
                  <h3 className="h3" style={{ fontSize: 22 }}>{name}</h3>
                  <div className="mono" style={{ fontSize: 12.5, color: "var(--accent-ink)", margin: "6px 0 12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{role}</div>
                  <p className="muted" style={{ fontSize: 15.5 }}>{bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--paper-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div style={{ position: "sticky", top: 96 }}>
              <Reveal><Eyebrow>What we value</Eyebrow></Reveal>
              <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20, maxWidth: "12ch" }}>How we show up, every project.</h2></Reveal>
              <Reveal delay={120}>
                <div className="card" style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 14, padding: "16px 20px", borderRadius: 100 }}>
                  <span style={{ color: "var(--accent-ink)", display: "inline-flex" }}><Spark /></span>
                  <span style={{ fontSize: 15 }}>Trusted vendor tie-ups for staffing at any scale.</span>
                </div>
              </Reveal>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {VALUES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80}>
                  <div className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18 }}>
                    <span style={{ marginTop: 5, width: 9, height: 9, borderRadius: 2, background: "var(--accent)", transform: "rotate(45deg)" }}></span>
                    <div>
                      <h3 className="h3" style={{ fontSize: 20, marginBottom: 7 }}>{t}</h3>
                      <p className="muted" style={{ fontSize: 15.5 }}>{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection go={go} variant="ink" />
    </main>
  );
}

window.AboutPage = AboutPage;
