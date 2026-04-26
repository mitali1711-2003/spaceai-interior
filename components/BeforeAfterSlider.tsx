"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section className="section-padding py-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-electric-blue border border-electric-blue/20 mb-4">
            Before & After
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            See the{" "}
            <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Drag the slider to see how SpaceAI transforms an ordinary living room into a stunning modern space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden cursor-col-resize select-none border border-white/10 shadow-glass"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER (Right side - AI redesigned) */}
            <div className="absolute inset-0">
              {/* Beautiful AI designed room */}
              <div className="w-full h-full bg-gradient-to-br from-[#0a1628] via-[#0e1f3d] to-[#0a0f1e]">
                {/* Floor */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#1a1209]/80 to-transparent" />
                {/* Modern sofa */}
                <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-3/5 h-[14%] bg-gradient-to-t from-[#1e3a5f] to-[#2a4f7a] rounded-2xl border border-electric-blue/20" />
                {/* Cushions */}
                <div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="w-12 h-12 bg-electric-blue/50 rounded-xl border border-electric-blue/30" />
                  <div className="w-12 h-12 bg-white/20 rounded-xl border border-white/20" />
                  <div className="w-12 h-12 bg-gold/30 rounded-xl border border-gold/20" />
                </div>
                {/* Coffee table with glow */}
                <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-1/4 h-[6%] bg-[#1a1a2e] rounded-xl border border-electric-blue/20 shadow-glow-blue-sm" />
                {/* Art on wall */}
                <div className="absolute top-[15%] left-[12%] w-[18%] h-[28%] rounded-xl border border-electric-blue/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-electric-blue/30 to-gold/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gold/40 blur-sm" />
                  </div>
                </div>
                {/* Pendant light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[15%] bg-white/20" />
                <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-12 h-12 bg-gold/60 rounded-full blur-md" />
                {/* Rug */}
                <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-4/5 h-[8%] bg-electric-blue/10 rounded-full border border-electric-blue/10" />
                {/* Large window */}
                <div className="absolute top-[8%] right-[8%] w-[22%] h-[45%] border border-white/15 rounded-xl bg-sky-900/20 grid grid-cols-2 gap-1 p-1">
                  <div className="bg-sky-800/30 rounded" />
                  <div className="bg-sky-800/30 rounded" />
                  <div className="bg-sky-700/20 rounded" />
                  <div className="bg-sky-700/20 rounded" />
                </div>
                {/* After label */}
                <div className="absolute top-4 right-4 glass rounded-xl px-3 py-1.5 border border-electric-blue/30">
                  <span className="text-xs font-semibold text-electric-blue">After — AI Design</span>
                </div>
              </div>
            </div>

            {/* BEFORE (Left side — clipped by slider) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              {/* Plain empty room */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a1612] via-[#211d18] to-[#1a1612]">
                {/* Plain floor */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#3d3020]/60 to-transparent" />
                {/* Old worn sofa */}
                <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-3/5 h-[14%] bg-gradient-to-t from-[#4a3728] to-[#5c4535] rounded-lg border border-white/5" />
                {/* Plain table */}
                <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-1/4 h-[5%] bg-[#3a2e20] rounded border border-white/5" />
                {/* Bare wall */}
                <div className="absolute top-[8%] right-[8%] w-[22%] h-[45%] border border-white/8 rounded bg-white/3" />
                {/* Bare window */}
                <div className="absolute top-[8%] right-[8%] w-[22%] h-[45%] border border-white/8 rounded-xl bg-stone-900/20 grid grid-cols-2 gap-1 p-1">
                  <div className="bg-stone-800/20 rounded" />
                  <div className="bg-stone-800/20 rounded" />
                  <div className="bg-stone-700/10 rounded" />
                  <div className="bg-stone-700/10 rounded" />
                </div>
                {/* Before label */}
                <div className="absolute top-4 left-4 glass rounded-xl px-3 py-1.5 border border-white/10">
                  <span className="text-xs font-semibold text-white/60">Before</span>
                </div>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-0.5 h-full bg-white/40" />
              <div className="absolute w-10 h-10 rounded-full glass-strong border-2 border-white/50 flex items-center justify-center shadow-glass">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-white/70 rounded-full" />
                  <div className="w-0.5 h-4 bg-white/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/30 text-sm mt-4">
            ← Drag slider to compare →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
