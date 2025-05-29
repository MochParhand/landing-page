// app/page.tsx

export const metadata = {
  title: "Magasu - Digital",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="categories" className="scroll-mt-24">
        <BusinessCategories />
      </section>
      <section id="features" className="scroll-mt-24">
        <FeaturesPlanet />
      </section>
      <section id="testimonial" className="scroll-mt-24">
        <LargeTestimonial />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Cta />
      </section>
    </>
  );
}