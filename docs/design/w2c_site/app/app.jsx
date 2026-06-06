/* global React, ReactDOM, Nav, Footer, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakSelect, TweakSlider, TweakToggle */
const { useState, useEffect } = React;

const ROUTES = {
  "#/": "HomePage",
  "#/services": "ServicesPage",
  "#/about": "AboutPage",
  "#/careers": "CareersPage",
  "#/contact": "ContactPage",
};

const TWEAK_DEFAULTS = {
  accent: "#E7B73E",
  display: "Space Grotesk",
  atmo: 1,
};

function normalize(hash) {
  if (!hash || hash === "#" || hash === "#/") return "#/";
  return hash;
}

function App() {
  const [route, setRoute] = useState(normalize(window.location.hash));
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const onHash = () => {
      setRoute(normalize(window.location.hash));
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("w2c-theme", theme); } catch (e) {}
  }, [theme]);

  // Apply tweakable tokens (and re-derive accent shades per theme)
  useEffect(() => {
    const r = document.documentElement.style;
    const mixTo = theme === "light" ? "black" : "white";
    const inkPct = theme === "light" ? "30%" : "26%";
    const glowPct = theme === "light" ? "87%" : "80%";
    r.setProperty("--accent", t.accent);
    r.setProperty("--accent-ink", `color-mix(in oklab, ${t.accent}, ${mixTo} ${inkPct})`);
    r.setProperty("--accent-soft", `color-mix(in oklab, ${t.accent}, transparent 85%)`);
    r.setProperty("--glow-gold", `color-mix(in oklab, ${t.accent}, transparent ${glowPct})`);
    r.setProperty("--on-accent", theme === "light" ? "oklch(0.2 0.02 75)" : "oklch(0.18 0.02 70)");
    r.setProperty("--font-display", `"${t.display}", system-ui, sans-serif`);
    r.setProperty("--atmo", String(t.atmo));
  }, [t, theme]);

  const go = (href) => {
    const h = normalize(href);
    if (h === route) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    window.location.hash = h;
  };
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  const PageName = ROUTES[route] || "HomePage";
  const Page = window[PageName] || window.HomePage;

  return (
    <React.Fragment>
      <Nav route={route} go={go} theme={theme} onToggleTheme={toggleTheme} />
      <Page go={go} key={route} />
      <Footer go={go} />
      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={["#E7B73E", "#F2A93B", "#D9B25A", "#46B8E8"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSelect label="Headings" value={t.display}
          options={["Space Grotesk", "Sora", "Manrope"]}
          onChange={(v) => setTweak("display", v)} />
        <TweakSection label="Atmosphere" />
        <TweakSlider label="Glow" value={t.atmo} min={0} max={1.4} step={0.1}
          onChange={(v) => setTweak("atmo", v)} />
        <TweakToggle label="Light mode" value={theme === "light"}
          onChange={(v) => setTheme(v ? "light" : "dark")} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
