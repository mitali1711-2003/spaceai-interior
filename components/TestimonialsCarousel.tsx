"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Interior Designer, Studio FORM",
    avatar: "SC",
    avatarBg: "bg-electric-blue/20",
    avatarColor: "text-electric-blue",
    rating: 5,
    text: "SpaceAI completely transformed how I present concepts to clients. I can generate 10 design variations in the time it used to take me to do 1. The AR preview feature? My clients are absolutely blown away every single time.",
  },
  {
    name: "Marcus Williams",
    role: "Homeowner, New York",
    avatar: "MW",
    avatarBg: "bg-gold/20",
    avatarColor: "text-gold",
    rating: 5,
    text: "I was completely lost redesigning my apartment. SpaceAI took my terrible 'mid-century modern meets chaos' description and produced something stunning. Moved in last month and everyone thinks I hired a professional designer.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design, Nest Living",
    avatar: "PS",
    avatarBg: "bg-purple-400/20",
    avatarColor: "text-purple-400",
    rating: 5,
    text: "The multi-room planner is a game-changer. We used SpaceAI to design 47 model home rooms last quarter. The consistency across rooms and the 3D AR previews cut our client approval timeline in half. Worth every penny.",
  },
  {
    name: "James O'Brien",
    role: "Real Estate Developer",
    avatar: "JO",
    avatarBg: "bg-green-400/20",
    avatarColor: "text-green-400",
    rating: 5,
    text: "We now include SpaceAI-generated renders in every property listing. Buyer engagement is up 340% and time-to-close has dropped significantly. The ROI on the Enterprise plan was immediate.",
  },
  {
    name: "Aiko Tanaka",
    role: "Lifestyle Blogger",
    avatar: "AT",
    avatarBg: "bg-pink-400/20",
    avatarColor: "text-pink-400",
    rating: 5,
    text: "As someone who moves a lot, SpaceAI is my secret weapon. I upload my new apartment's photos, pick a vibe, and have a complete shopping list with AR preview before the moving truck even arrives. Genuinely magical.",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section className="section-padding py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent pointer-events-none" />

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
            Testimonials
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Loved by Designers{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-white/50 text-lg">
            Join 10,000+ professionals and homeowners transforming spaces with SpaceAI.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-strong rounded-3xl p-8 sm:p-10 border border-white/10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-7 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonials[current].avatarBg} flex items-center justify-center font-display font-bold ${testimonials[current].avatarColor}`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[current].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-electric-blue/30 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-electric-blue" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-electric-blue/30 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
