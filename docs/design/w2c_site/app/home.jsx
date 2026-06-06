/* global React, Reveal, Eyebrow, Arrow, Spark, Placeholder, CTASection */

const PARTNERS = ["Rebelle", "Vinted", "SportEco", "Token Metrix", "Rebelle", "Vinted", "SportEco", "Token Metrix"];

const CAPS = [
  { t: "Software & SaaS Solutions", d: "Custom product engineering — SaaS platforms, web apps, internal tools and APIs, built to last and built to scale.", tag: "Build" },
  { t: "AI Systems & AI-Enabled Software", d: "LLM features, ML models, intelligent automation and AI woven into the software you already run.", tag: "AI", ai: true },
  { t: "Cloud & DevOps", d: "The “to Cloud” in Web to Cloud — migrations, infrastructure, CI/CD and platforms that stay up.", tag: "Cloud" },
  { t: "Staff Augmentation", d: "Reskilled, vetted engineers and full squads on transparent per-hour billing — through our trusted vendor network.", tag: "Teams" },
];

const NUMS = [
  ["2020", "Founded — lean by design"],
  ["4+", "Global clients delivered"],
  ["3", "Continents served"],
  ["14+", "Years of founder expertise"],
];

function HeroVisual() {
  return (
    <div className="viz" aria-hidden="true">
      <div className="viz-grid"></div>
      <div className="viz-ring" style={{ width: 130, height: 130 }}></div>
      <div className="viz-ring" style={{ width: 250, height: 250 }}></div>
      <div className="viz-ring" style={{ width: 380, height: 380 }}></div>
      <div className="viz-line" style={{ left: "55%", top: "42%", width: 132, transform: "rotate(26deg)" }}></div>
      <div className="viz-line" style={{ left: "55%", top: "42%", width: 120, transform: "rotate(152deg)" }}></div>
      <div className="viz-line" style={{ left: "55%", top: "42%", width: 112, transform: "rotate(258deg)" }}></div>
      <div className="viz-node" style={{ left: "55%", top: "42%", width: 16, height: 16 }}></div>
      <div className="viz-node n2" style={{ left: "79%", top: "31%", width: 11, height: 11 }}></div>
      <div className="viz-node n3" style={{ left: "30%", top: "57%", width: 11, height: 11 }}></div>
      <div className="viz-node dim" style={{ left: "71%", top: "63%", width: 8, height: 8 }}></div>
      <div className="viz-node dim" style={{ left: "39%", top: "27%", width: 8, height: 8 }}></div>
      <div className="viz-panel">
        <div className="viz-row">
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><i className="viz-dot"></i>w2c · cloud</span>
          <span style={{ color: "var(--accent-ink)" }}>online</span>
        </div>
        <div className="viz-row"><span>ai-search · v3</span><span className="viz-bar"><i style={{ width: "82%" }}></i></span></div>
        <div className="viz-row"><span>deploy · eu-central</span><span className="viz-bar"><i style={{ width: "64%" }}></i></span></div>
      </div>
    </div>
  );
}

function Hero({ go }) {
  const nav = (e, h) => { e.preventDefault(); go(h); };
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-grad"></div>
      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBlock: "clamp(56px, 9vw, 112px) clamp(40px, 6vw, 64px)" }}>
        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <Reveal><Eyebrow>Web&nbsp;to&nbsp;Cloud · Software &amp; AI</Eyebrow></Reveal>
            <Reveal delay={70} as="h1" className="h-display" style={{ marginTop: 22, maxWidth: "15ch" }}>
              Software, <span className="grad">AI</span> &amp; cloud, built to scale with you.
            </Reveal>
            <Reveal delay={140}>
              <p className="lead" style={{ marginTop: 24, maxWidth: 560 }}>
                A small, senior team that builds big. W2C&nbsp;Tech delivers custom software,
                intelligent AI systems and cloud — for ambitious companies across the EU, US and India.
                Founded 2020.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="kicker-row" style={{ marginTop: 32 }}>
                <a href="#/contact" onClick={(e) => nav(e, "#/contact")} className="btn btn-accent">Start a project <Arrow /></a>
                <a href="#/services" onClick={(e) => nav(e, "#/services")} className="btn btn-ghost">Explore services</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} style={{ width: "100%" }}>
            <div style={{ maxWidth: 460, width: "100%", marginLeft: "auto" }}><HeroVisual /></div>
          </Reveal>
        </div>
      </div>

      {/* number strip */}
      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBottom: "clamp(48px, 7vw, 88px)" }}>
        <Reveal>
          <div className="num-row" style={{ borderTop: "1px solid var(--line)", paddingTop: 34 }}>
            {NUMS.map(([n, l]) => (
              <div key={l}>
                <div className="stat-num">{n}</div>
                <div className="muted" style={{ marginTop: 8, fontSize: 15 }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section-tight" style={{ borderBlock: "1px solid var(--line)", background: "var(--paper-2)" }}>
      <div className="wrap" style={{ marginBottom: 26 }}>
        <span className="mono" style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--tx-3)" }}>
          Partners &amp; clients we build for
        </span>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span key={i} className="logo-word">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities({ go }) {
  const nav = (e, h) => { e.preventDefault(); go(h); };
  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ alignItems: "end", marginBottom: 48 }}>
          <div>
            <Reveal><Eyebrow>What we do</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20 }}>One partner, the whole stack.</h2></Reveal>
          </div>
          <Reveal delay={120}>
            <p className="lead" style={{ maxWidth: 440 }}>
              We solve problems end-to-end — strategy, engineering, AI and the people to run it. No hand-offs, no gaps.
            </p>
          </Reveal>
        </div>
        <div className="grid g-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <a href="#/services" onClick={(e) => nav(e, "#/services")}
                 className={"card card-hover" + (c.ai ? " feature-ai" : "")}
                 style={{ display: "block", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
                  <span className={"tag" + (c.ai ? " pill-accent" : "")}>
                    {c.ai && <span style={{ color: "var(--accent-ink)", display: "inline-flex" }}><Spark size={13} /></span>}
                    {c.tag}
                  </span>
                  <span style={{ color: "var(--accent-ink)", display: "inline-flex" }}><Arrow className="" /></span>
                </div>
                <h3 className="h3" style={{ marginBottom: 12 }}>{c.t}</h3>
                <p className="muted" style={{ fontSize: 16 }}>{c.d}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    ["01", "Discover", "We learn your domain, map the problem and design an architecture that won’t need rebuilding next year."],
    ["02", "Build", "Senior engineers ship in tight loops — software, AI models and cloud infrastructure, in production fast."],
    ["03", "Scale", "We harden, automate and grow the system — and the team — as your traffic and ambitions climb."],
  ];
  return (
    <section className="surface-ink">
      <div className="wrap section">
        <div className="split" style={{ alignItems: "start" }}>
          <div>
            <Reveal><Eyebrow>The W2C method</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="h1" style={{ marginTop: 20, maxWidth: "12ch" }}>
                From idea to production, then beyond.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 20, maxWidth: 460 }}>
                Every engagement runs on the same belief: build scalable systems, embed AI where it earns its keep,
                and stay long enough to see them grow.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="card" style={{ marginTop: 30, display: "inline-flex", alignItems: "center", gap: 14, padding: "16px 20px", borderRadius: 100 }}>
                <span style={{ color: "var(--accent)", display: "inline-flex" }}><Spark /></span>
                <span style={{ fontSize: 15 }}>AI built into every layer — not bolted on after.</span>
              </div>
            </Reveal>
          </div>
          <div style={{ display: "grid", gap: 18 }}>
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 90}>
                <div className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 22, alignItems: "start" }}>
                  <span className="step-num">{n}</span>
                  <div>
                    <h3 className="h3" style={{ marginBottom: 8 }}>{t}</h3>
                    <p className="muted" style={{ fontSize: 15.5 }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser({ go }) {
  const nav = (e, h) => { e.preventDefault(); go(h); };
  return (
    <section className="section">
      <div className="wrap split">
        <Reveal>
          <Placeholder label="team / office photo" style={{ aspectRatio: "5/4", width: "100%" }} />
        </Reveal>
        <div>
          <Reveal><Eyebrow>Who we are</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="h2" style={{ marginTop: 18 }}>
              A small team that builds big systems.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: 18 }}>
              We’re a focused, senior team — small enough to care, sharp enough to build big.
              We help clients use the web, cloud and AI to their full potential, with people you can count on.
            </p>
          </Reveal>
          <div className="grid g-2" style={{ marginTop: 30 }}>
            <Reveal delay={160}>
              <div className="card" style={{ height: "100%" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent-ink)", letterSpacing: "0.1em" }}>MISSION</span>
                <p style={{ marginTop: 12, fontSize: 16 }} className="muted">
                  To help clients harness the internet and AI through affordable, effective, custom software.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="card" style={{ height: "100%" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent-ink)", letterSpacing: "0.1em" }}>VISION</span>
                <p style={{ marginTop: 12, fontSize: 16 }} className="muted">
                  To be a global leader in scalable, intelligent software that strengthens our clients’ businesses.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={260}>
            <a href="#/about" onClick={(e) => nav(e, "#/about")} className="btn btn-ghost" style={{ marginTop: 30 }}>
              Meet the team <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    ["Vinted", "EU · Marketplace", "Scaled search relevance and catalog services for one of Europe’s largest resale platforms.", "Search & AI"],
    ["Rebelle", "EU · Luxury resale", "Engineering capacity and intelligent automation for a premium second-hand marketplace.", "Staff Aug · AI"],
    ["SportEco", "EU · Sports retail", "Cloud platform and data services for a sustainable sports commerce brand.", "Cloud · Build"],
    ["Token Metrix", "US · Analytics", "Cloud data pipelines and AI-assisted reporting for a US analytics product.", "Cloud · AI"],
  ];
  return (
    <section className="section" style={{ background: "var(--paper-2)", borderBlock: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="split" style={{ alignItems: "end", marginBottom: 44 }}>
          <div>
            <Reveal><Eyebrow>Success stories</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20 }}>Trusted by teams that ship.</h2></Reveal>
          </div>
          <Reveal delay={120}>
            <p className="lead" style={{ maxWidth: 420 }}>
              From EU marketplaces to US analytics — long-term partnerships, not one-off projects.
            </p>
          </Reveal>
        </div>
        <div className="grid g-4">
          {cases.map((c, i) => (
            <Reveal key={c[0]} delay={i * 80}>
              <div className="card card-hover" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                <Placeholder label="logo" style={{ height: 64, width: "100%" }} />
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                    <h3 className="h3">{c[0]}</h3>
                    <span className="mono" style={{ fontSize: 11.5, color: "var(--tx-3)" }}>{c[1]}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 15.5, marginTop: 10 }}>{c[2]}</p>
                </div>
                <span className="tag pill-accent" style={{ marginTop: "auto" }}>{c[3]}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    ["You’ll feel heard", "We listen first, then choose the solution that actually fits — not the one that bills the most."],
    ["We treat it as our own", "A sincere stake in your outcome. Your roadmap, uptime and growth become ours too."],
    ["Honest, fair pricing", "Senior expertise at reasonable rates, with flexible engagement and staffing models."],
    ["Built to scale", "Architecture and AI decisions made for where you’re going, not just where you are."],
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 96 }}>
            <Reveal><Eyebrow>Why choose us</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="h1" style={{ marginTop: 20, maxWidth: "13ch" }}>
                The right partner, at an honest price.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 18, maxWidth: 440 }}>
                We have the expertise to offer impartial advice and services — and we genuinely want your company to reach its potential.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {points.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18 }}>
                  <span style={{ marginTop: 4, width: 9, height: 9, borderRadius: 2, background: "var(--accent)", transform: "rotate(45deg)" }}></span>
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
  );
}

function FoundersVision() {
  const founders = [
    ["Yogendra Singh", "Director · 14+ yrs IT"],
    ["Bishwajeet Biswas", "Director · Cloud"],
    ["Ekta Singh", "Senior HR Specialist"],
  ];
  const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <section className="surface-ink" style={{ position: "relative", overflow: "hidden" }}>
      <img src="assets/bg-mesh.png" alt="" aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55, pointerEvents: "none" }} />
      <div className="wrap section" style={{ position: "relative", zIndex: 1 }}>
        <Reveal><Eyebrow>Founders’ vision</Eyebrow></Reveal>
        <Reveal delay={70}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.18, color: "var(--on-ink)", fontSize: "clamp(26px, 3.4vw, 42px)", maxWidth: "19ch", marginTop: 24, textWrap: "balance" }}>
            “We started small to build big — scalable systems, lasting partnerships, and AI that earns its place.”
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div style={{ display: "flex", gap: "28px 40px", flexWrap: "wrap", marginTop: 42, alignItems: "center" }}>
            {founders.map(([n, r]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", background: "var(--accent-soft)", border: "1px solid var(--line-2)", color: "var(--accent-ink)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>{initials(n)}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--on-ink)", fontSize: 17 }}>{n}</div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--accent-ink)", marginTop: 3 }}>{r}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage({ go }) {
  return (
    <main>
      <Hero go={go} />
      <Partners />
      <Capabilities go={go} />
      <Approach />
      <AboutTeaser go={go} />
      <FoundersVision />
      <WhyUs />
      <CTASection go={go} variant="ink" />
    </main>
  );
}

window.HomePage = HomePage;
