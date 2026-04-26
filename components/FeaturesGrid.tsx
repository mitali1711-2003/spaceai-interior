"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Box,
  DollarSign,
  Image,
  LayoutGrid,
} from "lucide-react";

export const features = [
  {
    icon: Sparkles,
    title: "AI Style Matching",
    description:
      "Tell our AI your preferences and it instantly curates a design style uniquely tailored to you — from minimalist Japandi to maximalist Boho.",
    badge: "GPT-4V",
    badgeColor: "text-electric-blue border-electric-blue/30 bg-electric-blue/10",
  },
  {
    icon: Layers,
    title: "Real-Time AR Preview",
    description:
      "Point your phone at any room and see your new design overlaid in real-time augmented reality. Walk around it. Feel it. Love it before you buy.",
    badge: "AR Kit",
    badgeColor: "text-green-400 border-green-400/30 bg-green-400/10",
  },
  {
    icon: Box,
    title: "3D Furniture Placement",
    description:
      "Drag and drop furniture from 50,000+ products in our 3D catalog. Place them perfectly with AI-assisted spacing and proportional alignment.",
    badge: "3D Engine",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  },
  {
    icon: DollarSign,
    title: "Smart Budget Planner",
    description:
      "Set your budget and watch our AI optimize designs to fit your spend — finding the best value alternatives without compromising on style.",
    badge: "Smart",
    badgeColor: "text-gold border-gold/30 bg-gold/10",
  },
  {
    icon: Image,
    title: "Mood Board Generator",
    description:
      "Auto-generate stunning mood boards from your style selections. Export them as beautiful PDFs to share with family, friends, or contractors.",
    badge: "Auto",
    badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Room Planner",
    description:
      "Design your entire home with consistent style across all rooms. Our AI ensures color palettes and furniture styles flow seamlessly throughout.",
    badge: "Pro",
    badgeColor: "text-electric-blue border-electric-blue/30 bg-electric-blue/10",
  },
];

export function FeaturesGrid() {
  return (
    <section className="section-padding py-24">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-gold border border-gold/20 mb-4">
            Features
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Design Smarter</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A complete AI-powered design suite that replaces expensive interior designers, mood board apps, and AR tools.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="feature-card group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-electric-blue/0 group-hover:bg-electric-blue/5 transition-all duration-500 rounded-2xl" />

                {/* Top row */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
