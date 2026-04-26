import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/FeaturesPageContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore SpaceAI's full feature set: AI style matching, real-time AR preview, 3D furniture placement, smart budget planner, mood board generator, and multi-room planner.",
};

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
