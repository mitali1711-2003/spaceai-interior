"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";
import { PricingCards } from "./PricingCards";
import { CTABanner } from "./CTABanner";

const comparisonFeatures = [
  {
    category: "Core AI",
    items: [
      { name: "AI design suggestions", free: true, pro: true, enterprise: true },
      { name: "Design styles available", free: "5", pro: "50+", enterprise: "50+" },
      { name: "Rooms per month", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "AI style quiz", free: true, pro: true, enterprise: true },
      { name: "GPT-4V natural language", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "AR & 3D",
    items: [
      { name: "Real-time AR preview", free: false, pro: true, enterprise: true },
      { name: "3D furniture placement", free: false, pro: true, enterprise: true },
      { name: "Furniture catalog items", free: "500", pro: "50,000+", enterprise: "50,000+" },
      { name: "AR video recording", free: false, pro: true, enterprise: true },
      { name: "LiDAR room scanning", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Design Tools",
    items: [
      { name: "Mood board generator", free: false, pro: true, enterprise: true },
      { name: "Smart budget planner", free: false, pro: true, enterprise: true },
      { name: "Multi-room planner", free: false, pro: true, enterprise: true },
      { name: "Before/after comparison", free: true, pro: true, enterprise: true },
      { name: "Color palette generator", free: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Export & Share",
    items: [
      { name: "HD image export", free: true, pro: true, enterprise: true },
      { name: "4K export", free: false, pro: true, enterprise: true },
      { name: "PDF mood board export", free: false, pro: true, enterprise: true },
      { name: "Shareable links", free: true, pro: true, enterprise: true },
      { name: "Contractor spec sheets", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Team & Business",
    items: [
      { name: "Team collaboration", free: false, pro: false, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "White-label option", free: false, pro: false, enterprise: true },
      { name: "Custom AI training", free: false, pro: false, enterprise: true },
      { name: "SSO / SAML", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Community support", free: true, pro: true, enterprise: true },
      { name: "Email support", free: false, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
      { name: "SLA guarantee", free: false, pro: false, enterprise: true },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-electric-blue mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-white/15 mx-auto" />;
  if (value === null) return <Minus className="w-4 h-4 text-white/20 mx-auto" />;
  return <span className="text-xs text-white/70 font-medium">{value}</span>;
}

const faqs = [
  {
    q: "Is the free plan really free forever?",
    a: "Yes. The free plan is free forever with 3 rooms per month and basic AI suggestions. No credit card required to sign up.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel your subscription anytime from your dashboard. You won't be charged again and you'll keep access until the end of your billing period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and for Enterprise plans, we support invoicing.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes! Paying annually saves you 20% compared to monthly billing. Toggle the billing switch on the pricing cards above.",
  },
  {
    q: "What is the Enterprise plan for?",
    a: "Enterprise is designed for interior design agencies, property developers, home staging companies, and SaaS builders who want to embed SpaceAI via API or offer it white-labeled to their own clients.",
  },
  {
    q: "Do you offer student or nonprofit discounts?",
    a: "Yes — students with a valid .edu email get 50% off Pro. Nonprofits get 30% off. Contact support@spaceai.design.",
  },
];

export function PricingPageContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-6">
              Pricing
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl mb-6">
              Pricing That Scales{" "}
              <span className="gradient-text">With You</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mx-auto">
              Start free. Upgrade when you need more power. No contracts, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards standalone />

      {/* Full Comparison Table */}
      <section className="section-padding py-16">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Full Feature{" "}
              <span className="gradient-text">Comparison</span>
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-4 text-white/40 text-sm font-medium w-1/2">Feature</th>
                  {["Free", "Pro", "Enterprise"].map((plan) => (
                    <th key={plan} className="text-center py-4 px-4 font-display font-bold">
                      {plan === "Pro" ? (
                        <span className="text-electric-blue">{plan}</span>
                      ) : (
                        plan
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((group) => (
                  <React.Fragment key={group.category}>
                    <tr className="border-b border-white/5">
                      <td
                        colSpan={4}
                        className="py-4 text-xs font-bold uppercase tracking-widest text-electric-blue/70"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((item) => (
                      <tr
                        key={item.name}
                        className="border-b border-white/5 hover:bg-white/2 transition-colors"
                      >
                        <td className="py-3 pr-4 text-sm text-white/70">{item.name}</td>
                        <td className="py-3 px-4 text-center">
                          <CellValue value={item.free} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <CellValue value={item.pro} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <CellValue value={item.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-20">
        <div className="container-max max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass rounded-2xl p-6 border border-white/8"
              >
                <h3 className="font-semibold mb-2 text-white/90">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/40 text-sm">
              Still have questions?{" "}
              <Link href="/about" className="text-electric-blue hover:underline">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
