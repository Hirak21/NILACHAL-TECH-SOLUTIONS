"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedCaseSection } from "@/components/sections/featured-case-section";
import { FounderSection } from "@/components/sections/founder-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ContactSection } from "@/components/sections/contact-section";

const RoadJourney3D = dynamic(
  () =>
    import("@/components/three/road-journey").then((mod) => mod.RoadJourney3D),
  { ssr: false, loading: () => null }
);

export default function HomePage() {
  return (
    <>
      <RoadJourney3D />
      <div className="relative z-10">
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <ProcessSection />
        <FeaturedCaseSection />
        <FounderSection />
        <PrinciplesSection />
        <FinalCtaSection />
        <ContactSection />
      </div>
    </>
  );
}
