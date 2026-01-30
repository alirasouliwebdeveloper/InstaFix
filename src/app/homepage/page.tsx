import Hero from "@/components/Hero";
import Articles from "@/components/sections/Landing/Articles";
import CTA from "@/components/sections/Landing/CTA";
import FAQ from "@/components/sections/Landing/FAQ";
import HowItWorks from "@/components/sections/Landing/HowItWorks";
import Services from "@/components/sections/Landing/Services";
import Testimonials from "@/components/sections/Landing/Testimonials";
import WhyInstaFix from "@/components/sections/Landing/WhyInstaFix";

export default function homePage() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyInstaFix />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Articles />
      <CTA />
    </div>
  );
}
