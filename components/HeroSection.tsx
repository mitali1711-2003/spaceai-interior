"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

function FloatingRoomMockup() {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Main card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden border border-white/10 shadow-glass">
        {/* Room preview */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-surface-2 to-surface-3 overflow-hidden">
          {/* Simulated room with CSS */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#8B7355]/40 to-transparent" />
          {/* Wall art */}
          <div className="absolute top-6 left-8 w-20 h-14 bg-gradient-to-br from-electric-blue/20 to-gold/20 rounded-lg border border-white/10" />
          {/* Sofa */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-t from-[#3d2b1f] to-[#5c4033] rounded-2xl border border-white/10" />
          {/* Cushions */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-10 h-10 bg-electric-blue/40 rounded-lg border border-electric-blue/30" />
            <div className="w-10 h-10 bg-gold/30 rounded-lg border border-gold/30" />
            <div className="w-10 h-10 bg-electric-blue/30 rounded-lg border border-electric-blue/20" />
          </div>
          {/* Coffee table */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#5c4033]/80 rounded-xl border border-white/10" />
          {/* Lamp */}
          <div className="absolute bottom-16 right-12 w-4 h-20 bg-gradient-to-t from-[#3d2b1f] to-transparent" />
          <div className="absolute bottom-32 right-10 w-8 h-8 bg-gold/40 rounded-full blur-sm" />
          {/* Plant */}
          <div className="absolute bottom-14 left-10 w-8 h-16 flex flex-col items-center gap-1">
            <div className="w-8 h-10 bg-green-600/40 rounded-full" />
            <div className="w-4 h-6 bg-[#3d2b1f]" />
          </div>
          {/* Window */}
          <div className="absolute top-4 right-8 w-24 h-20 border border-white/15 rounded-lg bg-blue-900/20 grid grid-cols-2 gap-0.5 p-0.5">
            <div className="bg-sky-900/30 rounded-sm" />
            <div className="bg-sky-900/30 rounded-sm" />
            <div className="bg-sky-800/20 rounded-sm" />
            <div className="bg-sky-800/20 rounded-sm" />
          </div>
          {/* AI overlay badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 left-4 glass rounded-xl px-3 py-1.5 flex items-center gap-1.5 border border-electric-blue/30"
          >
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
            <span className="text-xs font-medium text-electric-blue">AI Active</span>
          </motion.div>
        </div>

        {/* Controls bar */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
            <span className="text-xs text-white/60">Rendering design...</span>
          </div>
          <div className="flex gap-1.5">
            {["Modern", "Nordic", "Luxe"].map((style, i) => (
              <motion.button
                key={style}
                whileHover={{ scale: 1.05 }}
                className={`text-xs px-2 py-1 rounded-lg transition-colors ${
                  i === 0
                    ? "bg-electric-blue/20 text-electric-blue border border-electric-blue/30"
                    : "glass text-white/50"
                }`}
              >
                {style}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-12 top-1/3 glass rounded-2xl p-3 border border-white/10 hidden lg:block"
      >
        <div className="text-xs text-white/50 mb-1">Styles Generated</div>
        <div className="text-xl font-bold gradient-text-blue">247</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-10 bottom-1/4 glass rounded-2xl p-3 border border-white/10 hidden lg:block"
      >
        <div className="text-xs text-white/50 mb-1">AR Ready</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-sm font-semibold text-green-400">Live</span>
        </div>
      </motion.div>

      {/* Glow under card */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-electric-blue/20 blur-2xl rounded-full" />
    </motion.div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_100%)]" />
    </div>
  );
}

const TRUSTED_LOGOS = ["Apple", "Google", "Nike", "IKEA", "Airbnb", "Pinterest", "Houzz"];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <GridBackground />

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Powered by GPT-4V + AR Kit
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              Design Your{" "}
              <span className="gradient-text glow-text-blue">Dream Space</span>
              {" "}with AI & AR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Upload a photo. Get AI-generated designs. View in AR instantly.
              Transform any room in under 60 seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/signup"
                className="btn-primary flex items-center justify-center gap-2 text-base px-7 py-3.5 shadow-glow-blue"
              >
                Try For Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2 text-base px-7 py-3.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 ml-0.5" fill="white" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8"
            >
              {[
                { value: "10K+", label: "Rooms Designed" },
                { value: "98%", label: "Satisfaction" },
                { value: "3min", label: "Avg. Design Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl gradient-text-blue">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y }}
          >
            <FloatingRoomMockup />
          </motion.div>
        </div>

        {/* Trusted By Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-white/30 text-sm uppercase tracking-widest mb-6">
            Trusted by designers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-white/25 font-display font-semibold text-base tracking-wide hover:text-white/50 transition-colors duration-300 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
