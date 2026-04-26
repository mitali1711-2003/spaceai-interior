import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind SpaceAI — our mission to democratize interior design through AI and augmented reality. Meet the team building the future of spaces.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
