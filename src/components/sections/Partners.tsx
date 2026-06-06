const PARTNERS = [
  { name: "Rebelle", logo: "/assets/rebelle.png" },
  { name: "Vinted", logo: "/assets/vinted.png" },
  { name: "SportEco", logo: null },
  { name: "Token Metrix", logo: null },
];

const TRACK = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export function Partners() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] border-y border-line bg-surface-2">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] mb-[26px]">
        <span className="font-mono text-[12.5px] tracking-[0.16em] uppercase text-tx-3">
          Partners &amp; clients we build for
        </span>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {TRACK.map((p, i) => (
            <div key={i} className="flex items-center justify-center min-w-[120px] px-4">
              {p.logo ? (
                <div className="h-10 flex items-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity logo-lighten"
                  />
                </div>
              ) : (
                <span className="font-display font-semibold text-[clamp(20px,2.4vw,26px)] tracking-[-0.02em] text-tx-3 hover:text-tx transition-colors">
                  {p.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
