"use client";

import { Lock, ArrowRight, Sparkles, Trophy, Target, TrendingUp } from "lucide-react";

interface DemoCTAProps {
  variant: "inline" | "fullscreen";
  xpEarned?: number;
}

const UNLOCK_FEATURES = [
  { icon: Target, label: "60+ workplace scenarios" },
  { icon: TrendingUp, label: "Track your progress over time" },
  { icon: Trophy, label: "Level up from Rookie to Jedi" },
  { icon: Sparkles, label: "Personalised practice recommendations" },
];

export function DemoCTA({ variant, xpEarned }: DemoCTAProps) {
  if (variant === "inline") {
    return (
      <div
        className="rounded-2xl p-6 space-y-4 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(59, 130, 246, 0.15))",
          border: "2px solid rgba(124, 58, 237, 0.4)",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <Lock size={20} className="text-[#7C3AED]" />
          <p className="text-sm font-semibold text-white">
            You've completed your free demo session
          </p>
        </div>
        <p className="text-sm text-white/80">
          Sign up to unlock all scenarios, track your progress, and level up your communication skills.
        </p>
        <button
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
          }}
        >
          Sign Up Free
          <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  // Fullscreen variant — shown after demo workout summary
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#7C3AED" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#3B82F6" }}
      />

      <div className="relative max-w-md w-full space-y-8 text-center">
        {/* Achievement badge */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
          }}
        >
          <Sparkles size={40} className="text-white" />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">
            Great start!
          </h2>
          {xpEarned !== undefined && xpEarned > 0 && (
            <p className="text-lg font-bold text-[#7C3AED]">
              +{xpEarned} XP earned
            </p>
          )}
          <p className="text-white/80 text-lg">
            You've seen what Conversation Quest can do. Sign up to unlock the full experience.
          </p>
        </div>

        {/* What you unlock */}
        <div
          className="rounded-2xl p-5 space-y-3 text-left"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            What you unlock
          </p>
          {UNLOCK_FEATURES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124, 58, 237, 0.2)" }}
              >
                <Icon size={18} className="text-[#7C3AED]" />
              </div>
              <span className="text-sm text-white/90">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="space-y-3">
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
            }}
          >
            Sign Up Free
            <ArrowRight size={22} />
          </button>
          <p className="text-xs text-white/50">
            No credit card required. Your demo progress will be saved.
          </p>
        </div>
      </div>
    </div>
  );
}
