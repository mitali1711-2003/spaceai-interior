"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, ArrowRight, Mail, Lock, User, Check } from "lucide-react";
import { AuthImagePanel } from "./AuthImagePanel";

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /[0-9]/.test(p) },
];

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Right — Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-background relative z-10 min-w-0 overflow-y-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center shadow-glow-blue-sm">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-xl">
              Space<span className="gradient-text-blue">AI</span>
            </span>
          </Link>
        </motion.div>

        {step === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-sm w-full"
          >
            <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-6 border border-electric-blue/30">
              <Check className="w-8 h-8 text-electric-blue" />
            </div>
            <h2 className="font-display font-bold text-3xl mb-3">
              You&apos;re in! 🎉
            </h2>
            <p className="text-white/60 mb-6">
              Your account is ready. Your 14-day free trial starts now — full Pro access, no limits.
            </p>
            <Link href="/" className="btn-primary flex items-center gap-2 justify-center w-full py-3.5">
              Start Designing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-sm w-full"
          >
            {/* Trial pill */}
            <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/25 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-electric-blue text-xs font-semibold">14-Day Free Trial — No card needed</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-2">
              Create your account
            </h1>
            <p className="text-white/50 mb-7">
              Join 10,000+ designers transforming spaces with AI.
            </p>

            {/* Social signup */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button className="glass flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium hover:bg-white/8 transition-all duration-200 border border-white/8 hover:border-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="glass flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium hover:bg-white/8 transition-all duration-200 border border-white/8 hover:border-white/20">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-xs">or with email</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm text-white/60 font-medium mb-1.5 block">Full name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    required
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/25 outline-none border border-white/8 focus:border-electric-blue/50 focus:shadow-glow-blue-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-white/60 font-medium mb-1.5 block">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/25 outline-none border border-white/8 focus:border-electric-blue/50 focus:shadow-glow-blue-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-white/60 font-medium mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    required
                    className="w-full glass rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-white/25 outline-none border border-white/8 focus:border-electric-blue/50 focus:shadow-glow-blue-sm transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password strength indicators */}
                {password.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 space-y-1"
                  >
                    {passwordRules.map((rule) => (
                      <div key={rule.label} className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${rule.test(password) ? "bg-electric-blue/20 border border-electric-blue/50" : "bg-white/5 border border-white/10"}`}>
                          {rule.test(password) && <Check className="w-2 h-2 text-electric-blue" />}
                        </div>
                        <span className={`text-xs transition-colors duration-300 ${rule.test(password) ? "text-white/60" : "text-white/25"}`}>
                          {rule.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${agreed ? "bg-electric-blue border-electric-blue" : "border-white/20 bg-transparent hover:border-white/40"}`}
                >
                  {agreed && <Check className="w-3 h-3 text-white" />}
                </button>
                <span className="text-xs text-white/40 leading-relaxed">
                  I agree to SpaceAI&apos;s{" "}
                  <Link href="#" className="text-electric-blue hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="#" className="text-electric-blue hover:underline">Privacy Policy</Link>
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !agreed}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Free Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-5">
              Already have an account?{" "}
              <Link href="/login" className="text-electric-blue hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </motion.div>
        )}
      </div>

      {/* Left — Scrolling furniture images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block lg:w-[52%] xl:w-[55%] flex-shrink-0 relative"
      >
        <AuthImagePanel />
      </motion.div>
    </div>
  );
}
