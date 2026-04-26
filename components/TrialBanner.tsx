"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Check, ArrowRight } from "lucide-react";

const trialPerks = [
  "All Pro features unlocked",
  "Unlimited rooms",
  "AR preview on mobile",
  "Mood board generator",
  "No credit card required",
];

function Countdown() {
  // Fixed end date: 14 days from a reference point
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1.5">
      <Clock className="w-4 h-4 text-gold" />
      <span className="text-white/60 text-sm">Offer resets in</span>
      <div className="flex items-center gap-1 font-display font-bold text-gold tabular-nums">
        <span className="glass rounded-lg px-2 py-0.5 border border-gold/20">{pad(timeLeft.hours)}</span>
        <span className="text-gold/60">:</span>
        <span className="glass rounded-lg px-2 py-0.5 border border-gold/20">{pad(timeLeft.minutes)}</span>
        <span className="text-gold/60">:</span>
        <span className="glass rounded-lg px-2 py-0.5 border border-gold/20">{pad(timeLeft.seconds)}</span>
      </div>
    </div>
  );
}

export function TrialBanner() {
  return (
    <section className="section-padding py-16">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gold/20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-electric-blue/10" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative px-8 py-12 sm:px-12 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 text-xs font-bold text-gold mb-5">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  Limited Time — Free Trial
                </div>

                <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 leading-tight">
                  Try SpaceAI{" "}
                  <span className="text-gold glow-text-gold">Free for 14 Days</span>
                </h2>

                <p className="text-white/60 text-lg mb-6 leading-relaxed">
                  Get full Pro access — every feature, every room, every AR preview — completely free for 14 days. No credit card. Cancel with one click.
                </p>

                <Countdown />

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link
                    href="/signup"
                    className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4 shadow-glow-blue"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features"
                    className="btn-secondary flex items-center justify-center gap-2 text-base px-8 py-4"
                  >
                    See What&apos;s Included
                  </Link>
                </div>

                <p className="text-white/25 text-xs mt-4">
                  No credit card · Cancel anytime · Full access instantly
                </p>
              </div>

              {/* Right: perks */}
              <div className="glass-strong rounded-2xl p-7 border border-white/10">
                <h3 className="font-semibold text-white/80 mb-5 text-sm uppercase tracking-widest">
                  What&apos;s included in your trial
                </h3>
                <div className="space-y-3 mb-7">
                  {trialPerks.map((perk, i) => (
                    <motion.div
                      key={perk}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-electric-blue/20 border border-electric-blue/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-electric-blue" />
                      </div>
                      <span className="text-white/70 text-sm">{perk}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Mini pricing callout */}
                <div className="border-t border-white/8 pt-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/40 text-sm">After trial ends</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/30 text-sm line-through">$29</span>
                      <span className="font-display font-bold text-white">$23</span>
                      <span className="text-white/40 text-xs">/mo</span>
                    </div>
                  </div>
                  <p className="text-white/30 text-xs">
                    Annual billing saves 20% · Downgrade to free anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
