import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        "electric-blue": "#0EA5E9",
        gold: "#F59E0B",
        "blue-glow": "#38BDF8",
        "surface-1": "#0f0f0f",
        "surface-2": "#141414",
        "surface-3": "#1a1a1a",
        "border-subtle": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.15), transparent)",
        "blue-radial":
          "radial-gradient(circle at center, rgba(14,165,233,0.2) 0%, transparent 70%)",
        "gold-radial":
          "radial-gradient(circle at center, rgba(245,158,11,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(14,165,233,0.35)",
        "glow-gold": "0 0 30px rgba(245,158,11,0.35)",
        "glow-blue-sm": "0 0 15px rgba(14,165,233,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
