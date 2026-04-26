import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FurnitureShowcase } from "@/components/FurnitureShowcase";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PricingCards } from "@/components/PricingCards";
import { TrialBanner } from "@/components/TrialBanner";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "SpaceAI — AI + AR Interior Design Platform",
  description:
    "Design your dream space with AI & AR. Upload a photo, get AI-generated designs, and preview them in augmented reality instantly.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <FeaturesGrid />
      <FurnitureShowcase />
      <BeforeAfterSlider />
      <TestimonialsCarousel />
      <TrialBanner />
      <PricingCards />
      <CTABanner />
    </>
  );
}
