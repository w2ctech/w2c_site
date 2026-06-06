/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- Icons (simple) ---------- */
function Arrow({ className = "arr" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Spark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5c.3 2.7 1.8 4.2 4.5 4.5C9.8 6.3 8.3 7.8 8 10.5 7.7 7.8 6.2 6.3 3.5 6 6.2 5.7 7.7 4.2 8 1.5Z" fill="currentColor"/>
      <path d="M13 9.5c.15 1.35.9 2.1 2.25 2.25C13.9 11.9 13.15 12.65 13 14c-.15-1.35-.9-2.1-2.25-2.25C12.1 11.6 12.85 10.85 13 9.5Z" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}
function Sun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function Moon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- Reveal on scroll (scroll-position based; IntersectionObserver
   is unreliable in this preview, so we compute visibility manually) ---------- */
const _revealEls = new Set();
let _revealBound = false;
function _show(el) {
  // In a backgrounded tab, CSS transitions freeze at frame 0 — snap instead of animating
  if (document.hidden) el.style.transition = "none";
  el.classList.add("in");
  el.style.opacity = "1";
  el.style.transform = "none";
  _revealEls.delete(el);
}
function _checkReveals() {
  const h = window.innerHeight || document.documentElement.clientHeight;
  _revealEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < h * 0.92 && r.bottom > -40) _show(el);
  });
}
function _bindReveals() {
  if (_revealBound) return;
  _revealBound = true;
  window.addEventListener("scroll", _checkReveals, { passive: true });
  window.addEventListener("resize", _checkReveals);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) _checkReveals(); });
}
function registerReveal(el) {
  _revealEls.add(el);
  _bindReveals();
  requestAnimationFrame(() => requestAnimationFrame(_checkReveals));
  setTimeout(_checkReveals, 60);
  // safety net: never let content stay hidden
  setTimeout(() => { if (_revealEls.has(el)) _show(el); }, 1600);
}

function Reveal({ children, delay = 0, className = "", as = "div", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = delay + "ms";
    registerReveal(el);
    return () => { _revealEls.delete(el); };
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={"reveal " + className} style={style}>{children}</Tag>;
}

/* ---------- Brand wordmark ---------- */
function Brand({ onClick, light = false }) {
  return (
    <a className="brand" href="#/" onClick={onClick} aria-label="W2C Tech home">
      <span className="brand-mark" aria-hidden="true">W</span>
      <span className="brand-name" style={light ? { color: "var(--on-ink)" } : null}>
        W2C<b> Tech</b>
      </span>
    </a>
  );
}

/* ---------- Nav ---------- */
const NAV_ITEMS = [
  ["Home", "#/"],
  ["Services", "#/services"],
  ["About", "#/about"],
  ["Careers", "#/careers"],
  ["Contact", "#/contact"],
];

function Nav({ route, go, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [route]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (e, href) => { e.preventDefault(); go(href); };

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <Brand onClick={(e) => handleNav(e, "#/")} />
        <nav className="nav-links desktop">
          {NAV_ITEMS.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => handleNav(e, href)}
               className={"nav-link" + (route === href ? " active" : "")}>{label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle light / dark theme" title="Toggle theme">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <div className="nav-cta-desktop">
            <a href="#/contact" onClick={(e) => handleNav(e, "#/contact")} className="btn btn-accent btn-sm">
              Get a Quote <Arrow />
            </a>
          </div>
          <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span style={open ? { transform: "translateY(6px) rotate(45deg)" } : null}></span>
            <span style={open ? { opacity: 0 } : null}></span>
            <span style={open ? { transform: "translateY(-6px) rotate(-45deg)" } : null}></span>
          </button>
        </div>
      </div>
      <div className={"mobile-menu" + (open ? " open" : "")}>
        {NAV_ITEMS.map(([label, href]) => (
          <a key={href} href={href} onClick={(e) => handleNav(e, href)}
             className={route === href ? "active" : ""}>{label}</a>
        ))}
        <a href="#/contact" onClick={(e) => handleNav(e, "#/contact")} className="btn btn-accent" style={{ marginTop: 24 }}>
          Get a Quote <Arrow />
        </a>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer({ go }) {
  const handleNav = (e, href) => { e.preventDefault(); go(href); };
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <span className="brand-mark" aria-hidden="true">W</span>
              <span className="brand-name" style={{ color: "var(--on-ink)" }}>W2C<b> Tech</b></span>
            </div>
            <p className="muted" style={{ maxWidth: 320, fontSize: 15 }}>
              Web&nbsp;to&nbsp;Cloud. We build scalable software, intelligent AI systems, and the teams to run them — for partners across the EU, US and India.
            </p>
            <div className="kicker-row mono" style={{ marginTop: 22, fontSize: 12, color: "var(--on-ink-2)" }}>
              <span>EU</span><span style={{ opacity: .4 }}>/</span><span>US</span><span style={{ opacity: .4 }}>/</span><span>INDIA</span>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11, fontSize: 15 }}>
              {NAV_ITEMS.map(([label, href]) => (
                <li key={href}><a href={href} onClick={(e) => handleNav(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11, fontSize: 15 }}>
              <li><a href="#/services" onClick={(e) => handleNav(e, "#/services")}>Software Solutions</a></li>
              <li><a href="#/services" onClick={(e) => handleNav(e, "#/services")}>AI Systems</a></li>
              <li><a href="#/services" onClick={(e) => handleNav(e, "#/services")}>Cloud & DevOps</a></li>
              <li><a href="#/services" onClick={(e) => handleNav(e, "#/services")}>Staff Augmentation</a></li>
              <li><a href="#/services" onClick={(e) => handleNav(e, "#/services")}>Search & Data</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11, fontSize: 15 }}>
              <li><a href="mailto:w2ctechsolution@gmail.com">w2ctechsolution@gmail.com</a></li>
              <li className="muted" style={{ fontSize: 14, lineHeight: 1.5 }} data-editable="address">
                G-4/38, Block-G, Rohini Sector 15<br/>Delhi 110089 — HQ
              </li>
              <li style={{ marginTop: 6 }}>
                <a href="#/contact" onClick={(e) => handleNav(e, "#/contact")} className="btn btn-light btn-sm">
                  Start a project <Arrow />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="divider" style={{ margin: "44px 0 24px", background: "oklch(1 0 0 / 0.1)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13, color: "var(--on-ink-2)" }} className="mono">
          <span>© {new Date().getFullYear()} W2C Tech — Web to Cloud</span>
          <span>Privacy · Terms · Built for scale</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Shared bits ---------- */
function Eyebrow({ children }) { return <span className="eyebrow">{children}</span>; }

function Placeholder({ label, ink = false, style = {}, className = "" }) {
  return (
    <div className={"ph" + (ink ? " ph-ink" : "") + " " + className} style={style}>
      <span>{label}</span>
    </div>
  );
}

function CTASection({ go, variant = "ink" }) {
  const handleNav = (e, href) => { e.preventDefault(); go(href); };
  return (
    <section className={variant === "ink" ? "surface-ink" : ""}>
      <div className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }} className="cta-grid">
          <div>
            <Reveal><Eyebrow>Have a project in mind?</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h1" style={{ marginTop: 20, maxWidth: 620 }}>Let’s build something that scales with you.</h2></Reveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 18, maxWidth: 520 }}>
                Tell us where you want to go. We’ll bring the engineers, the AI, and the cloud to get you there.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
            <a href="#/contact" onClick={(e) => handleNav(e, "#/contact")} className="btn btn-accent">Connect with us <Arrow /></a>
            <a href="#/services" onClick={(e) => handleNav(e, "#/services")} className="btn btn-ghost" style={variant === "ink" ? { borderColor: "oklch(1 0 0 / 0.2)", color: "var(--on-ink)" } : null}>See services</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Arrow, Spark, Sun, Moon, Reveal, Brand, Nav, Footer, Eyebrow, Placeholder, CTASection, NAV_ITEMS,
});
