"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Globe, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTABanner } from "./CTABanner";
import { AnimatedCounter } from "./AnimatedCounter";

const team = [
  {
    name: "Aisha Patel",
    role: "CEO & Co-Founder",
    bg: "bg-gradient-to-br from-electric-blue/30 to-purple-600/20",
    initials: "AP",
    bio: "Previously led product at Airbnb's interior imaging team. Architecture degree from MIT. Obsessed with making great design accessible to everyone.",
  },
  {
    name: "Marcus Kim",
    role: "CTO & Co-Founder",
    bg: "bg-gradient-to-br from-gold/30 to-orange-600/20",
    initials: "MK",
    bio: "Ex-Google Brain researcher specializing in generative vision models. PhD in Computer Vision, Stanford. Built the AI core that powers SpaceAI.",
  },
  {
    name: "Sofia Ramirez",
    role: "Head of Design",
    bg: "bg-gradient-to-br from-pink-500/30 to-red-600/20",
    initials: "SR",
    bio: "Award-winning interior designer with 12 years of practice. Bridges the gap between human taste and machine intelligence at SpaceAI.",
  },
  {
    name: "James Chen",
    role: "Head of Engineering",
    bg: "bg-gradient-to-br from-green-500/30 to-teal-600/20",
    initials: "JC",
    bio: "Built AR experiences at Apple's Reality team. Led the WebXR and LiDAR scanning infrastructure that powers our real-time AR preview.",
  },
  {
    name: "Priya Singh",
    role: "Head of Growth",
    bg: "bg-gradient-to-br from-electric-blue/20 to-cyan-600/20",
    initials: "PS",
    bio: "Scaled Houzz from 5M to 40M users. Drives SpaceAI's go-to-market strategy across B2C and B2B channels.",
  },
  {
    name: "David Osei",
    role: "Head of AI Research",
    bg: "bg-gradient-to-br from-purple-500/30 to-violet-600/20",
    initials: "DO",
    bio: "Research background in multimodal LLMs. Leads the team developing our next-generation style matching and room understanding models.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Design is for Everyone",
    description:
      "Great interior design shouldn't require a $300/hour consultant. We're building AI tools that give every person, everywhere, access to professional-quality design.",
  },
  {
    icon: Zap,
    title: "Speed is a Feature",
    description:
      "Design shouldn't take weeks. Every product decision we make optimizes for getting users from inspiration to real-world action as fast as possible.",
  },
  {
    icon: Globe,
    title: "Local Context Matters",
    description:
      "Design preferences differ radically across cultures. Our AI is trained to understand local aesthetics, available furniture brands, and cultural design contexts.",
  },
  {
    icon: Award,
    title: "Accuracy Earns Trust",
    description:
      "AR that lies loses users immediately. We obsess over dimensional accuracy, lighting simulation, and material rendering so what you see is truly what you get.",
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "SpaceAI founded in San Francisco by Aisha Patel and Marcus Kim with a $2M seed round." },
  { year: "2022", title: "First Product", description: "Launched AI design suggestions for iOS. 10,000 users in the first month. Product Hunt #1 of the day." },
  { year: "2023", title: "AR Launch", description: "Shipped real-time AR preview. Raised $15M Series A. Crossed 100K monthly active users." },
  { year: "2024", title: "Enterprise", description: "Launched Enterprise API. Partnered with IKEA, Wayfair, and 12 real estate firms. Reached 500K users." },
  { year: "2025", title: "Global Expansion", description: "Expanded to 54 countries. Launched in 18 languages. Crossed $10M ARR. Series B in progress." },
];

export function AboutPageContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-6">
                Our Story
              </div>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                We Believe Great Design{" "}
                <span className="gradient-text">Belongs to All</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                SpaceAI was born from a simple frustration: why should transforming your living space require thousands of dollars and months of back-and-forth with designers? We set out to build the AI + AR tools that make great design instant, affordable, and joyful.
              </p>
              <Link href="/pricing" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
                Start Designing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-16 border-y border-white/8">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 10000, suffix: "+", label: "Rooms Designed" },
              { value: 54, suffix: "", label: "Countries" },
              { value: 98, suffix: "%", label: "Satisfaction" },
              { value: 500, suffix: "K+", label: "Active Users" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-black text-4xl sm:text-5xl gradient-text-blue mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-gold border border-gold/20 mb-6">
                Our Mission
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                Making the World&apos;s Spaces{" "}
                <span className="gradient-text">More Beautiful</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We started SpaceAI because we believe where you live shapes how you feel, work, and grow. But for most people, design help has been inaccessible — too expensive, too slow, too complicated.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Our AI doesn&apos;t just suggest furniture. It understands light, flow, culture, and personal taste. Combined with AR that shows you exactly how it will look before you spend a cent, we&apos;re making professional-grade design something everyone can experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass rounded-2xl p-5 border border-white/8 hover:border-electric-blue/20 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{value.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent pointer-events-none" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-4">
              The Team
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Built by{" "}
              <span className="gradient-text">Dreamers & Builders</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Ex-Google, Apple, Airbnb, and Stanford AI Lab. United by the belief that great design should be for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-3xl p-6 border border-white/8 hover:border-electric-blue/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${member.bg} rounded-2xl flex items-center justify-center mb-4 font-display font-bold text-lg text-white`}>
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-lg mb-0.5">{member.name}</h3>
                <p className="text-electric-blue text-sm font-medium mb-3">{member.role}</p>
                <p className="text-white/45 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding py-20">
        <div className="container-max max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-gold border border-gold/20 mb-4">
              Our Journey
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Building the{" "}
              <span className="gradient-text">Future of Spaces</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/50 via-gold/30 to-electric-blue/10" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Year */}
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-xs font-bold text-white/30">{milestone.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-electric-blue border-2 border-background relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-5 border border-white/8 flex-1 -mt-1">
                    <h3 className="font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
