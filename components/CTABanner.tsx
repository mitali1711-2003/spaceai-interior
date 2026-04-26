"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTABanner() {
  return (
    <section className="section-padding py-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-gold/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-electric-blue/20 blur-3xl" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-electric-blue/20" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-gold border-gold/20 mb-6"
            >
              <Sparkles className="w-3 h-3 text-gold" />
              No credit card required
            </motion.div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-balance">
              Start Designing in{" "}
              <span className="gradient-text">60 Seconds</span>
            </h2>

            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Join 10,000+ designers and homeowners who are transforming spaces with AI & AR.
              Your dream room is one click away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="btn-primary flex items-center gap-2 text-base px-8 py-4 shadow-glow-blue"
              >
                Try For Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
              >
                See All Features
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
