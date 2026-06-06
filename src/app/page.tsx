import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import TrustedPartners from "@/components/TrustedPartners";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <WhyChooseUs />
        <CTA />
        <TrustedPartners />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
