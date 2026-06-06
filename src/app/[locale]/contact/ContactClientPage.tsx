"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Spark, Arrow } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";

type Location = [string, string, string, boolean];
const LOCATIONS: Location[] = [
  ["India — HQ", "Rohini, Delhi", "G-4/38, Block-G, Rohini Sector 15, Delhi 110089, India.", true],
  ["European Union", "Hamburg, Germany", "Brooktorkai 4, 20457 Hamburg, Germany.", false],
  ["United States", "Dubuque, Iowa", "4400 Chavenelle Rd, Dubuque, Iowa 52002, United States.", false],
];

const SERVICES_OPTS = ["Software Solutions", "AI Systems", "Cloud & DevOps", "Search & Data", "Staff Augmentation", "Consulting", "Careers / Apply", "Something else"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const er: Record<string, string> = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!form.email.trim()) er.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email looks off";
    if (!form.message.trim()) er.message = "Tell us a little about your project";
    else if (form.message.trim().length < 50) er.message = "Please share a bit more detail (at least 50 characters)";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setErrors({ form: "Failed to send. Please try again or email us directly." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again or email us directly." });
    }
    setSending(false);
  };

  return (
    <main>
      <PageHero
        kicker="Contact"
        title={<>Let's talk about what we can build together.</>}
        sub="Tell us where you want to go. We will bring the engineers, the AI and the cloud to help you get there — usually with a reply inside one business day."
      />

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.85fr] gap-[clamp(32px,5vw,72px)] items-start">
          <Reveal>
            <Card>
              <div className="p-0">
                {!sent ? (
                  <form onSubmit={submit} noValidate>
                    <h2 className="font-display font-semibold text-tx text-[clamp(21px,2vw,27px)] mb-6">Start the conversation</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                      <div>
                        <label className="field-label">Your name</label>
                        <input className="input-field" value={form.name} onChange={set("name")} placeholder="Jane Doe" />
                        {errors.name && <small className="text-accent-ink block mt-1.5">{errors.name}</small>}
                      </div>
                      <div>
                        <label className="field-label">Email</label>
                        <input className="input-field" value={form.email} onChange={set("email")} placeholder="jane@example.com" />
                        {errors.email && <small className="text-accent-ink block mt-1.5">{errors.email}</small>}
                      </div>
                    </div>
                    <div className="mt-[18px]">
                      <label className="field-label">Company <span className="opacity-50">(optional)</span></label>
                      <input className="input-field" value={form.company} onChange={set("company")} placeholder="Company name" />
                    </div>
                    <div className="mt-[18px]">
                      <label className="field-label">What do you need?</label>
                      <select className="input-field" value={form.service} onChange={set("service")} style={{ appearance: "none" }}>
                        <option value="">Select a service...</option>
                        {SERVICES_OPTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="mt-[18px]">
                      <label className="field-label">Project details</label>
                      <textarea className="input-field" rows={5} value={form.message} onChange={set("message")} placeholder="A few lines on what you are building and where you would like help..." style={{ resize: "vertical" }} />
                      <div className="flex justify-between mt-1.5">
                        {errors.message ? (
                          <small className="text-accent-ink">{errors.message}</small>
                        ) : (
                          <small className={`font-mono text-xs ${form.message.trim().length >= 50 ? "text-green-400" : "text-tx-3"}`}>
                            {form.message.trim().length >= 50 ? "✓ " : ""}{form.message.trim().length}/50 characters minimum
                          </small>
                        )}
                      </div>
                    </div>
                    <button type="submit" className="btn-accent w-full justify-center mt-6" disabled={sending}>
                      {sending ? "Sending..." : "Send message"} {!sending && <Arrow />}
                    </button>
                    {errors.form && <small className="text-red-400 block mt-3 text-center">{errors.form}</small>}
                  </form>
                ) : (
                  <div className="text-center py-10 px-3">
                    <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent-ink grid place-items-center mx-auto mb-[22px]">
                      <Spark size={26} />
                    </div>
                    <h2 className="font-display font-semibold text-tx text-[clamp(21px,2vw,27px)] mb-3">
                      Thanks, {form.name.split(" ")[0] || "there"} — message received.
                    </h2>
                    <p className="text-tx-2 max-w-[380px] mx-auto">
                      We will review your note and get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                      className="btn-ghost mt-[26px]"
                    >
                      Send another <Arrow />
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </Reveal>

          <div>
            <Reveal>
              <Card>
                <span className="font-mono text-xs text-accent tracking-[0.12em]">DIRECT</span>
                <a href="mailto:admin@w2ctech.com" className="block font-display text-[22px] mt-3.5 mb-1 text-on-ink break-all">
                  admin@w2ctech.com
                </a>
                <a href="mailto:w2ctechsolution@gmail.com" className="block text-[14px] text-on-ink-2 hover:text-on-ink transition-colors">
                  w2ctechsolution@gmail.com
                </a>
                <a href="https://wa.me/919626222140" target="_blank" rel="noopener noreferrer" className="block text-[15px] mt-2 text-accent-ink hover:text-accent transition-colors">
                  WhatsApp +91-9626222140
                </a>
                <p className="text-[14px] text-on-ink-2 mt-2.5">Prefer email or WhatsApp? Reach us directly.</p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-[22px] grid gap-[14px]">
                {LOCATIONS.map(([t, place, d, hq]) => (
                  <Card key={t}>
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <span className={`mt-1.5 w-2.5 h-2.5 rounded-[3px] rotate-45 ${hq ? "bg-accent" : "bg-line-2"}`} />
                      <div>
                        <div className="flex justify-between gap-2.5 items-baseline">
                          <h3 className="font-display font-semibold text-tx text-[18px]">{t}</h3>
                          <span className="font-mono text-[11.5px] text-tx-2">{place}</span>
                        </div>
                        <p className="text-[15px] text-tx-2 mt-2">{d}</p>
                      </div>
                    </div>
                  </Card>
                ))}
                <p className="font-mono text-xs text-tx-2 mt-1 opacity-80">Three offices · EU · US · India</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
