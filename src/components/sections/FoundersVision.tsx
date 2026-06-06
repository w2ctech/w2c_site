import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Typography";

const FOUNDERS = [
  { name: "Yogendra Singh", role: "Director · 14+ yrs IT", img: "/assets/yogendra.jpeg" },
  { name: "Bishwajeet Biswas", role: "Director · Cloud", img: "/assets/bishwajeet.png" },
  { name: "Ekta Singh", role: "Senior HR Specialist", img: "/assets/ekta.jpeg" },
];

export function FoundersVision() {
  return (
    <section className="relative overflow-hidden surface-ink">
      <img
        src="/assets/bg-mesh.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
      />
      <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
        <Reveal><Eyebrow>Founders&apos; vision</Eyebrow></Reveal>
        <Reveal delay={70}>
          <p className="font-display font-medium tracking-[-0.02em] leading-[1.18] text-on-ink text-[clamp(26px,3.4vw,42px)] max-w-[19ch] mt-6 text-pretty">
            &ldquo;We started small to build big — scalable systems, lasting partnerships, and AI that earns its place.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="flex gap-x-10 gap-y-7 flex-wrap mt-[42px] items-center">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="flex items-center gap-3.5">
                <div className="w-[52px] h-[52px] rounded-full shrink-0 overflow-hidden border border-line-2">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-display font-semibold text-on-ink text-[17px]">{f.name}</div>
                  <div className="font-mono text-xs text-accent-ink mt-[3px]">{f.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
