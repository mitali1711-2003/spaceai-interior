"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Box,
  DollarSign,
  Image,
  LayoutGrid,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { CTABanner } from "./CTABanner";

const featureDetails = [
  {
    icon: Sparkles,
    title: "AI Style Matching",
    badge: "Powered by GPT-4V",
    badgeColor: "text-electric-blue border-electric-blue/30 bg-electric-blue/10",
    description:
      "Our AI understands your aesthetic at a deep level. Describe your dream room in natural language, pin inspiration images, or answer a quick style quiz — and watch as SpaceAI generates a custom design language tuned to your exact taste.",
    capabilities: [
      "Natural language room descriptions",
      "Inspiration image analysis",
      "Style quiz with 100+ preference signals",
      "Learns and adapts to your taste over time",
      "Cross-references 2M+ design examples",
      "Generates cohesive color palettes automatically",
    ],
    visual: "ai-style",
    reverse: false,
  },
  {
    icon: Layers,
    title: "Real-Time AR Preview",
    badge: "AR Kit + WebXR",
    badgeColor: "text-green-400 border-green-400/30 bg-green-400/10",
    description:
      "See your redesigned room before spending a cent. Point your phone at any space and SpaceAI overlays the AI-generated design in real-time AR. Walk around the room, check furniture proportions, see how light plays off new surfaces — all before committing to a single purchase.",
    capabilities: [
      "Real-time room scanning via LiDAR",
      "Furniture placement to centimeter accuracy",
      "Day/night lighting simulation",
      "Works on iOS and Android",
      "Share AR experiences via link",
      "Record walkthroughs as video",
    ],
    visual: "ar-preview",
    reverse: true,
  },
  {
    icon: Box,
    title: "3D Furniture Placement",
    badge: "50,000+ Items",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    description:
      "Drag, drop, rotate, and scale any furniture item from our catalog of 50,000+ products from top brands. Our AI auto-suggests optimal placement based on room flow, natural light, and proportional balance. Every item links directly to purchase.",
    capabilities: [
      "50,000+ 3D product models",
      "Real-world accurate dimensions",
      "AI-assisted optimal placement",
      "Direct purchase links",
      "Custom furniture upload",
      "Save and compare multiple layouts",
    ],
    visual: "3d-furniture",
    reverse: false,
  },
  {
    icon: DollarSign,
    title: "Smart Budget Planner",
    badge: "AI Optimizer",
    badgeColor: "text-gold border-gold/30 bg-gold/10",
    description:
      "Set your total budget and our AI engine finds the optimal design — identifying where to splurge for maximum visual impact and where smart substitutions save money without compromising style. A full room transformation for any budget.",
    capabilities: [
      "Set total or per-category budgets",
      "Auto-find budget-friendly alternatives",
      "Real-time price tracking across retailers",
      "ROI analysis for renovation decisions",
      "Phased purchase planning",
      "Export itemized shopping list",
    ],
    visual: "budget",
    reverse: true,
  },
  {
    icon: Image,
    title: "Mood Board Generator",
    badge: "Auto-Generate",
    badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
    description:
      "Generate stunning, presentation-ready mood boards in one click. SpaceAI curates textures, colors, furniture pieces, and lighting into a beautiful visual reference document. Perfect for sharing with contractors, clients, or getting sign-off from your partner.",
    capabilities: [
      "One-click mood board generation",
      "Custom brand colors and fonts",
      "Export as PDF, PNG, or link",
      "Collaborate and comment with others",
      "Pull from Pinterest and saved images",
      "Contractor-ready spec sheets",
    ],
    visual: "moodboard",
    reverse: false,
  },
  {
    icon: LayoutGrid,
    title: "Multi-Room Planner",
    badge: "Whole Home",
    badgeColor: "text-electric-blue border-electric-blue/30 bg-electric-blue/10",
    description:
      "Design your entire home with visual consistency across every room. SpaceAI's multi-room mode ensures your open-plan living room flows into the kitchen, and the hallway ties the whole home together — with one unified design language throughout.",
    capabilities: [
      "Whole-home design consistency",
      "Room-to-room palette linking",
      "Open-plan space optimization",
      "Floor plan import (DXF/PDF)",
      "Contractor walkthrough mode",
      "Version history for every room",
    ],
    visual: "multi-room",
    reverse: true,
  },
];

function FeatureVisual({ type }: { type: string }) {
  const visuals: Record<string, React.ReactNode> = {
    "ai-style": (
      <div className="relative aspect-square max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-3xl" />
        <div className="glass-strong rounded-3xl p-6 h-full flex flex-col gap-3">
          <div className="glass rounded-xl p-3 flex items-center gap-3 border border-electric-blue/20">
            <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex-shrink-0" />
            <div className="h-2 bg-white/20 rounded flex-1" />
          </div>
          {["Modern Nordic", "Warm Japandi", "Dark Luxe", "Coastal Minimal"].map((style, i) => (
            <motion.div
              key={style}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-xl p-3 flex items-center justify-between border ${i === 0 ? "border-electric-blue/40 bg-electric-blue/5" : "border-white/8"}`}
            >
              <span className="text-sm text-white/70">{style}</span>
              {i === 0 && <div className="w-2 h-2 bg-electric-blue rounded-full" />}
            </motion.div>
          ))}
        </div>
      </div>
    ),
    "ar-preview": (
      <div className="relative aspect-square max-w-sm mx-auto">
        <div className="glass-strong rounded-3xl overflow-hidden h-full border border-green-400/20">
          <div className="h-full bg-gradient-to-br from-[#0a1628] to-[#0f1f3d] flex items-center justify-center relative">
            <div className="absolute inset-4 border border-green-400/30 rounded-2xl" />
            <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute top-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="text-center">
              <div className="w-20 h-20 bg-green-400/20 rounded-2xl mx-auto mb-3 flex items-center justify-center border border-green-400/30">
                <Layers className="w-10 h-10 text-green-400" />
              </div>
              <div className="text-green-400 text-sm font-semibold">AR Active</div>
              <div className="text-white/30 text-xs mt-1">Room detected</div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    visuals[type] ?? (
      <div className="relative aspect-square max-w-sm mx-auto">
        <div className="glass-strong rounded-3xl h-full flex items-center justify-center border border-white/10">
          <div className="text-center">
            <div className="w-20 h-20 bg-electric-blue/10 rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-electric-blue" />
            </div>
            <div className="text-white/40 text-sm">Interactive Preview</div>
          </div>
        </div>
      </div>
    )
  );
}

export function FeaturesPageContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Feature Suite
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
              Every Tool You Need to{" "}
              <span className="gradient-text">Design Better</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
              SpaceAI combines AI, AR, and 3D technology into one seamless platform. No subscriptions to juggle, no learning curve.
            </p>
            <Link href="/pricing" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature deep dives */}
      <section className="section-padding py-12">
        <div className="container-max">
          <div className="space-y-28">
            {featureDetails.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    feature.reverse ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={feature.reverse ? "lg:col-start-2" : ""}>
                    <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border mb-5 ${feature.badgeColor}`}>
                      {feature.badge}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <h2 className="font-display font-bold text-3xl sm:text-4xl">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed mb-7">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {feature.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/60">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={feature.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <FeatureVisual type={feature.visual} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
