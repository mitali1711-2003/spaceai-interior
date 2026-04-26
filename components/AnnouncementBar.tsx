"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-electric-blue/90 via-blue-500/90 to-electric-blue/90 backdrop-blur-sm border-b border-electric-blue/30">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
              <Sparkles className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
              <p className="text-white font-medium text-center">
                <span className="font-bold">Limited offer:</span> Get{" "}
                <span className="underline underline-offset-2 font-bold">14 days free</span>{" "}
                on any plan — no credit card needed.
              </p>
              <Link
                href="/pricing"
                className="hidden sm:flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors text-white font-semibold text-xs px-3 py-1.5 rounded-full flex-shrink-0"
              >
                Claim offer
                <ArrowRight className="w-3 h-3" />
              </Link>
              <button
                onClick={() => setVisible(false)}
                aria-label="Dismiss"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
