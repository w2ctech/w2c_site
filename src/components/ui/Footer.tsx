import Link from "next/link";
import { Brand } from "./Brand";
import { Button } from "./Button";
import { Arrow } from "./Icons";

const FOOTER_LINKS = {
  company: [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
  ],
  capabilities: [
    ["Software Solutions", "/services"],
    ["AI Systems", "/services"],
    ["Cloud & DevOps", "/services"],
    ["Staff Augmentation", "/services"],
    ["Search & Data", "/services"],
  ],
  legal: [
    ["Privacy Policy", "/privacy-policy"],
    ["Terms of Service", "/terms-of-service"],
    ["Disclaimer", "/disclaimer"],
    ["Refund Policy", "/refund-policy"],
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink pt-[72px] pb-9 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:gap-10">
          <div>
            <div className="mb-[18px]">
              <Brand />
            </div>
            <p className="text-[15px] text-on-ink-2 max-w-[320px] leading-relaxed">
              Web&nbsp;to&nbsp;Cloud. We build scalable software, intelligent AI systems, and the teams to run them — for partners across the EU, US and India.
            </p>
            <p className="mt-[22px] font-mono text-xs text-on-ink-2 flex gap-1.5">
              <span>EU</span><span className="opacity-40">/</span>
              <span>US</span><span className="opacity-40">/</span>
              <span>INDIA</span>
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase font-medium text-on-ink mb-[18px]">Company</h4>
            <ul className="grid gap-[11px] text-[15px] list-none p-0 m-0">
              {FOOTER_LINKS.company.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-on-ink-2 hover:text-accent-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase font-medium text-on-ink mb-[18px]">Capabilities</h4>
            <ul className="grid gap-[11px] text-[15px] list-none p-0 m-0">
              {FOOTER_LINKS.capabilities.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-on-ink-2 hover:text-accent-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase font-medium text-on-ink mb-[18px]">Get in touch</h4>
            <ul className="grid gap-[11px] text-[15px] list-none p-0 m-0">
              <li>
                <a href="mailto:w2ctechsolution@gmail.com" className="text-on-ink-2 hover:text-accent-ink transition-colors">
                  w2ctechsolution@gmail.com
                </a>
              </li>
              <li className="text-[14px] leading-relaxed text-on-ink-2">
                G-4/38, Block-G, Rohini Sector 15<br />Delhi 110089 — HQ
              </li>
              <li className="text-xs text-on-ink-2 font-mono">
                CIN: U72900UP2022PTC168187
              </li>
              <li className="text-xs text-on-ink-2 font-mono">
                GSTIN: 09AADCW3276E1Z7
              </li>
              <li className="mt-1.5">
                <a href="https://calendly.com/w2ctechsolution/consultation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm rounded-full border border-transparent bg-[oklch(0.96_0.006_90)] text-[oklch(0.17_0.012_75)] font-medium inline-flex items-center gap-2.5 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  Start a project <Arrow />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-11 border-t border-[oklch(1_0_0/0.1)]" />

        <div className="flex flex-wrap justify-between gap-3 font-mono text-[13px] text-on-ink-2">
          <span>&copy; {new Date().getFullYear()} W2C Tech — Web to Cloud</span>
          <span className="flex gap-3">
            <Link href="/privacy-policy" className="hover:text-on-ink transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-on-ink transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-on-ink transition-colors">Disclaimer</Link>
            <span>Built for scale</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
