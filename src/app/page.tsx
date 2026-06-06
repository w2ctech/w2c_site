import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Capabilities } from "@/components/sections/Capabilities";
import { Approach } from "@/components/sections/Approach";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Cases } from "@/components/sections/Cases";
import { FoundersVision } from "@/components/sections/FoundersVision";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTASection } from "@/components/ui/PageHero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Capabilities />
      <Approach />
      <Cases />
      <AboutTeaser />
      <FoundersVision />
      <WhyUs />
      <CTASection variant="ink" />
    </main>
  );
}
