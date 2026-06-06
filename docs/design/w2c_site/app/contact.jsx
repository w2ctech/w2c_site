/* global React, Reveal, Eyebrow, Arrow, Spark, Placeholder, PageHero */
const { useState: useStateK } = React;

const LOCATIONS = [
  ["India — HQ", "Rohini, Delhi", "G-4/38, Block-G, Rohini Sector 15, Delhi 110089, India.", true],
  ["European Union", "Hamburg, Germany", "Brooktorkai 4, 20457 Hamburg, Germany.", false],
  ["United States", "Dubuque, Iowa", "4400 Chavenelle Rd, Dubuque, Iowa 52002, United States.", false],
];

const SERVICES_OPTS = ["Software Solutions", "AI Systems", "Cloud & DevOps", "Search & Data", "Staff Augmentation", "Consulting", "Careers / Apply", "Something else"];

function ContactPage({ go }) {
  const [form, setForm] = useStateK({ name: "", email: "", company: "", service: "", message: "" });
  const [errors, setErrors] = useStateK({});
  const [sent, setSent] = useStateK(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!form.email.trim()) er.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email looks off";
    if (!form.message.trim()) er.message = "Tell us a little about your project";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <main>
      <PageHero
        kicker="Contact"
        title={<>Let’s talk about what we can build together.</>}
        sub="Tell us where you want to go. We’ll bring the engineers, the AI and the cloud to help you get there — usually with a reply inside one business day."
      />

      <section className="section">
        <div className="wrap cols-form">
          {/* Form */}
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px, 3vw, 40px)" }}>
              {!sent ? (
                <form onSubmit={submit} noValidate>
                  <h2 className="h3" style={{ marginBottom: 24 }}>Start the conversation</h2>
                  <div className="grid g-2" style={{ gap: 18 }}>
                    <div>
                      <label className="field-label">Your name</label>
                      <input className="input" value={form.name} onChange={set("name")} placeholder="Jane Doe" />
                      {errors.name && <small style={{ color: "var(--accent-ink)", display: "block", marginTop: 6 }}>{errors.name}</small>}
                    </div>
                    <div>
                      <label className="field-label">Work email</label>
                      <input className="input" value={form.email} onChange={set("email")} placeholder="jane@company.com" />
                      {errors.email && <small style={{ color: "var(--accent-ink)", display: "block", marginTop: 6 }}>{errors.email}</small>}
                    </div>
                  </div>
                  <div style={{ marginTop: 18 }}>
                    <label className="field-label">Company <span style={{ opacity: .5 }}>(optional)</span></label>
                    <input className="input" value={form.company} onChange={set("company")} placeholder="Company name" />
                  </div>
                  <div style={{ marginTop: 18 }}>
                    <label className="field-label">What do you need?</label>
                    <select className="input" value={form.service} onChange={set("service")} style={{ appearance: "none" }}>
                      <option value="">Select a service…</option>
                      {SERVICES_OPTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginTop: 18 }}>
                    <label className="field-label">Project details</label>
                    <textarea className="input" rows={5} value={form.message} onChange={set("message")} placeholder="A few lines on what you’re building and where you’d like help…" style={{ resize: "vertical" }} />
                    {errors.message && <small style={{ color: "var(--accent-ink)", display: "block", marginTop: 6 }}>{errors.message}</small>}
                  </div>
                  <button type="submit" className="btn btn-accent" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
                    Send message <Arrow />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 12px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--accent-soft)", color: "var(--accent-ink)", display: "grid", placeItems: "center", margin: "0 auto 22px" }}>
                    <Spark size={26} />
                  </div>
                  <h2 className="h3" style={{ marginBottom: 12 }}>Thanks, {form.name.split(" ")[0] || "there"} — message received.</h2>
                  <p className="muted" style={{ maxWidth: 380, margin: "0 auto" }}>
                    We’ll review your note and get back to you within one business day. In the meantime, feel free to browse our work.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }} className="btn btn-ghost" style={{ marginTop: 26 }}>
                    Send another <Arrow />
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Side info */}
          <div>
            <Reveal>
              <div className="card" style={{ background: "var(--ink)", color: "var(--on-ink)", borderColor: "transparent" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.12em" }}>DIRECT</span>
                <a href="mailto:w2ctechsolution@gmail.com" style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 22, margin: "14px 0 6px", color: "var(--on-ink)", wordBreak: "break-all" }}>w2ctechsolution@gmail.com</a>
                <p style={{ color: "var(--on-ink-2)", fontSize: 15 }}>Prefer email? Reach us directly and we’ll route you to the right person.</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ marginTop: 22, display: "grid", gap: 14 }}>
                {LOCATIONS.map(([t, place, d, hq]) => (
                  <div key={t} className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
                    <span style={{ marginTop: 5, width: 10, height: 10, borderRadius: 3, background: hq ? "var(--accent)" : "var(--line-2)", transform: "rotate(45deg)" }}></span>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
                        <h3 className="h3" style={{ fontSize: 18 }}>{t}</h3>
                        <span className="mono muted" style={{ fontSize: 11.5 }}>{place}</span>
                      </div>
                      <p className="muted" style={{ fontSize: 15, marginTop: 8 }}>{d}</p>
                    </div>
                  </div>
                ))}
                <p className="mono muted" style={{ fontSize: 12, marginTop: 4, opacity: .8 }}>
                  Three offices · EU · US · India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ContactPage = ContactPage;
