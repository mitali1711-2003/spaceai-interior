"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const col1 = [
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop&q=80", alt: "Gray Sofa" },
  { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=500&fit=crop&q=80", alt: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400&h=500&fit=crop&q=80", alt: "Coffee Table" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=500&fit=crop&q=80", alt: "Minimalist Bedroom" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop&q=80", alt: "Gray Sofa" },
  { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=500&fit=crop&q=80", alt: "Bedroom" },
];

const col2 = [
  { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=500&fit=crop&q=80", alt: "Dining Table" },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop&q=80", alt: "Modern Living Room" },
  { src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=500&fit=crop&q=80", alt: "Lounge Chair" },
  { src: "https://images.unsplash.com/photo-1513506003901-1e6a35549b8b?w=400&h=500&fit=crop&q=80", alt: "Pendant Light" },
  { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=500&fit=crop&q=80", alt: "Dining Table" },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop&q=80", alt: "Modern Living Room" },
];

const col3 = [
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop&q=80", alt: "Living Room" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&q=80", alt: "Table Lamp" },
  { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=500&fit=crop&q=80", alt: "Bookshelf" },
  { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=500&fit=crop&q=80", alt: "Japandi Sofa" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop&q=80", alt: "Living Room" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&q=80", alt: "Table Lamp" },
];

function ScrollColumn({
  images,
  speed,
  direction = "up",
  offset = 0,
}: {
  images: { src: string; alt: string }[];
  speed: number;
  direction?: "up" | "down";
  offset?: number;
}) {
  const y = useMotionValue(offset);
  const itemHeight = 220; // px per card including gap
  const totalHeight = images.length * itemHeight;

  useAnimationFrame((_, delta) => {
    const move = (delta / 1000) * speed;
    const current = y.get();
    if (direction === "up") {
      const next = current - move;
      y.set(next <= -totalHeight / 2 ? 0 : next);
    } else {
      const next = current + move;
      y.set(next >= 0 ? -totalHeight / 2 : next);
    }
  });

  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <motion.div style={{ y }} className="flex flex-col gap-3 will-change-transform">
      {doubled.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03, zIndex: 10 }}
          transition={{ duration: 0.3 }}
          className="relative w-[160px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-glass cursor-pointer"
          style={{ perspective: 800 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="160px"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <span className="text-white/70 text-[10px] font-medium leading-tight line-clamp-1">
              {img.alt}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function AuthImagePanel() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-1">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Blue glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-blue/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gold/10 blur-3xl rounded-full pointer-events-none" />

      {/* Three scrolling columns */}
      <div className="absolute inset-0 flex items-start justify-center gap-3 px-4 pt-4">
        <ScrollColumn images={col1} speed={40} direction="up" offset={0} />
        <ScrollColumn images={col2} speed={32} direction="down" offset={-400} />
        <ScrollColumn images={col3} speed={38} direction="up" offset={-200} />
      </div>

      {/* Top & bottom fade masks */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-1 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none z-10" />
      {/* Left & right fade */}
      <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-surface-1 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-surface-1 to-transparent pointer-events-none z-10" />

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6">
        <div className="glass-strong rounded-2xl px-6 py-4 border border-white/10 text-center max-w-xs">
          <div className="text-xs text-electric-blue font-semibold uppercase tracking-widest mb-1">
            50,000+ Pieces
          </div>
          <div className="font-display font-bold text-lg leading-tight">
            Find furniture that fits your space perfectly
          </div>
          <div className="text-white/40 text-xs mt-1">
            AI-matched to your room & style
          </div>
        </div>
      </div>
    </div>
  );
}
