import type { Metadata } from "next";
import { PricingPageContent } from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for SpaceAI. Free plan available. Pro at $29/mo. Enterprise at $99/mo. No hidden fees, cancel anytime.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
