"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for exploring AI interior design.",
    cta: "Start Free — No Card Needed",
    ctaVariant: "secondary" as const,
    popular: false,
    features: [
      "3 rooms per month",
      "Basic AI design suggestions",
      "5 styles to choose from",
      "HD image export",
      "Community support",
      "Mobile app access",
    ],
    missing: ["AR preview", "Mood board generator", "3D furniture placement", "Budget planner"],
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 23 },
    description: "For serious designers and homeowners.",
    cta: "Start 14-Day Free Trial",
    ctaVariant: "primary" as const,
    popular: true,
    features: [
      "Unlimited rooms",
      "Full AI design suite",
      "50+ design styles",
      "Real-time AR preview",
      "Mood board generator",
      "3D furniture placement",
      "Smart budget planner",
      "Priority support",
      "Advanced exports (PDF, 4K)",
    ],
    missing: ["Team collaboration", "API access", "White-label"],
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 79 },
    description: "For agencies, studios, and developers.",
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Multi-room project planner",
      "Full API access",
      "White-label option",
      "Custom AI training",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise deployment",
      "SSO & SAML",
    ],
    missing: [],
  },
];

export function PricingCards({ standalone = false }: { standalone?: boolean }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className={`section-padding ${standalone ? "pt-8 pb-24" : "py-24"}`}>
      <div className="container-max">
        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-4">
              Pricing
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Simple,{" "}
              <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              No hidden fees. Cancel anytime. Start free and upgrade when you need more.
            </p>
          </motion.div>
        )}

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`text-sm font-medium ${!annual ? "text-white" : "text-white/40"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? "bg-electric-blue" : "bg-white/20"}`}
          >
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${annual ? "translate-x-7" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-white" : "text-white/40"}`}>
            Annual
            <span className="ml-2 text-xs text-green-400 font-semibold">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-electric-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-glow-blue z-10">
                  <Zap className="w-3 h-3" fill="white" />
                  Most Popular
                </div>
              )}

              <div className={`glass rounded-3xl p-8 h-full transition-all duration-300 ${
                plan.popular
                  ? "border-electric-blue/40 shadow-glow-blue-sm"
                  : "border-white/8 hover:border-white/15"
              }`}>
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-white/40 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-black">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-white/40 text-sm">/month</span>
                    )}
                  </div>
                  {annual && plan.price.monthly > 0 && (
                    <p className="text-xs text-white/30 mt-1">
                      Billed annually (${(annual ? plan.price.annual : plan.price.monthly) * 12}/yr)
                    </p>
                  )}
                  {plan.price.monthly > 0 && (
                    <div className="inline-flex items-center gap-1.5 mt-2 bg-green-400/10 border border-green-400/25 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-semibold">14-day free trial included</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.name === "Enterprise" ? "/about" : "/signup"}
                  className={`block text-center font-semibold py-3 px-6 rounded-xl mb-8 transition-all duration-300 ${
                    plan.ctaVariant === "primary"
                      ? "bg-electric-blue text-white shadow-glow-blue hover:shadow-glow-blue hover:scale-105"
                      : "glass text-white hover:bg-white/10 hover:border-electric-blue/30"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                  {plan.missing.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/20 line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
