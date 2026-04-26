"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Rooms Designed", description: "Across 54 countries" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", description: "Based on 2,400+ reviews" },
  { value: 50000, suffix: "+", label: "Furniture Items", description: "In our 3D catalog" },
  { value: 3, suffix: "min", label: "Average Design Time", description: "From photo to final render" },
];

export function StatsSection() {
  return (
    <section className="section-padding py-16 border-y border-white/8">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-black text-4xl sm:text-5xl gradient-text-blue mb-1">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>
              <div className="font-semibold text-white/80 mb-0.5">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
