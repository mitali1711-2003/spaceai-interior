"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Smartphone } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Room Photo",
    description:
      "Take a photo of any room with your phone or upload an existing image. Our AI instantly analyzes the space, dimensions, lighting, and existing furniture.",
    color: "blue",
    gradient: "from-electric-blue/20 to-transparent",
    border: "border-electric-blue/30",
    glow: "shadow-glow-blue-sm",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
  },
  {
    step: "02",
    icon: Wand2,
    title: "AI Generates Design Options",
    description:
      "Our GPT-4V powered AI generates multiple complete interior design styles tailored to your taste, budget, and room dimensions in under 10 seconds.",
    color: "gold",
    gradient: "from-gold/20 to-transparent",
    border: "border-gold/30",
    glow: "shadow-glow-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    step: "03",
    icon: Smartphone,
    title: "Preview in AR on Your Phone",
    description:
      "Open the SpaceAI app, point your camera at the room, and watch your new design appear in real-time augmented reality. See furniture to scale before buying.",
    color: "blue",
    gradient: "from-electric-blue/20 to-transparent",
    border: "border-electric-blue/30",
    glow: "shadow-glow-blue-sm",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-4">
            How It Works
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            From Photo to{" "}
            <span className="gradient-text">Perfect Room</span>
            <br />in 3 Steps
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No design experience needed. Our AI does the heavy lifting — you just choose your favorite.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-electric-blue/30 via-gold/30 to-electric-blue/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className={`glass rounded-2xl p-8 border ${step.border} transition-all duration-300 hover:${step.glow} hover:-translate-y-1 h-full`}>
                  {/* Step number */}
                  <div className="text-7xl font-display font-black text-white/5 absolute top-4 right-6 select-none">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-6 relative z-10`}>
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  <h3 className="font-display font-bold text-xl mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
