import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Capabilities } from "@/components/sections/Capabilities";
import { Approach } from "@/components/sections/Approach";
import { Cases } from "@/components/sections/Cases";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FoundersVision } from "@/components/sections/FoundersVision";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTASection } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "W2C Tech — Web to Cloud · Software, AI & Cloud",
  description:
    "Custom software, AI systems, and cloud — built to scale. A small, senior team delivering for ambitious companies across the EU, US and India since 2020.",
};

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
