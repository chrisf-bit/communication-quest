"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  MessageSquare,
  PenLine,
  BookOpen,
  Zap,
  BarChart3,
  Heart,
  Sparkles,
  ArrowRight,
  X,
  Star,
  Flame,
  Trophy,
} from "lucide-react";

const STORAGE_KEY = "communication-quest-tutorial-seen";

interface TutorialStep {
  title: string;
  description: string;
  content: React.ReactNode;
}

function hasSeen(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(STORAGE_KEY) === "true";
}

function markSeen(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, "true");
  }
}

export function SpotlightTutorial() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!hasSeen()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    markSeen();
    setVisible(false);
  };

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      dismiss();
    }
  };

  const steps: TutorialStep[] = [
    {
      title: "Welcome to Communication Quest",
      description:
        "Train yourself to recognise and adapt to different communication styles through realistic workplace scenarios.",
      content: (
        <div className="flex justify-center gap-4 py-4">
          {[
            { icon: BarChart3, colour: "#2563EB", label: "Analytical" },
            { icon: Zap, colour: "#FF6B6B", label: "Direct" },
            { icon: Heart, colour: "#059669", label: "Supportive" },
            { icon: Sparkles, colour: "#F59E0B", label: "Expressive" },
          ].map(({ icon: Icon, colour, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: colour,
                  boxShadow: `0 4px 16px ${colour}40`,
                }}
              >
                <Icon size={28} className="text-white" />
              </div>
              <span className="text-xs font-bold text-white/70">{label}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Every Workout Has 3 Rounds",
      description:
        "Each scenario takes you through a 3-step progression that builds your skills from recognition to production.",
      content: (
        <div className="space-y-3 py-2">
          {[
            {
              icon: Eye,
              colour: "#FF6B6B",
              step: "1",
              title: "Spot the Style",
              desc: "Identify which style the character is using",
            },
            {
              icon: MessageSquare,
              colour: "#F59E0B",
              step: "2",
              title: "Choose the Best Response",
              desc: "Pick the most effective reply for their style",
            },
            {
              icon: PenLine,
              colour: "#059669",
              step: "3",
              title: "Write Your Response",
              desc: "Compose your own style-adapted response",
            },
          ].map(({ icon: Icon, colour, step: s, title, desc }) => (
            <div
              key={s}
              className="flex items-center gap-4 rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${colour}30` }}
              >
                <Icon size={22} style={{ color: colour }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs text-white/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Vocab Moments",
      description:
        "After each scenario, a quick vocabulary challenge tests your knowledge of the language patterns each style uses.",
      content: (
        <div className="py-4">
          <div
            className="rounded-xl p-4 space-y-3"
            style={{
              background: "rgba(124, 58, 237, 0.1)",
              border: "2px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-[#A78BFA]" />
              <span className="text-xs text-[#A78BFA] uppercase font-bold tracking-wider">
                Example
              </span>
            </div>
            <div
              className="rounded-lg p-3"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <p className="text-white text-sm italic">
                "Can we review the numbers before deciding?"
              </p>
            </div>
            <p className="text-xs text-white/60">
              Which communication style does this sentence represent?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Analytical", correct: true },
                { label: "Direct", correct: false },
                { label: "Supportive", correct: false },
                { label: "Expressive", correct: false },
              ].map(({ label, correct }) => (
                <div
                  key={label}
                  className="rounded-lg p-2 text-xs font-bold text-center"
                  style={{
                    background: correct
                      ? "rgba(5, 150, 105, 0.15)"
                      : "rgba(255,255,255,0.05)",
                    border: correct
                      ? "2px solid #059669"
                      : "2px solid rgba(255,255,255,0.15)",
                    color: correct ? "#34D399" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Level Up and Earn Rewards",
      description:
        "Earn XP for every answer. Level up to unlock harder scenarios, earn mastery stars, and collect achievements as you improve.",
      content: (
        <div className="flex justify-center gap-6 py-6">
          {[
            { icon: Zap, colour: "#7C3AED", label: "Earn XP" },
            { icon: Star, colour: "#F59E0B", label: "Mastery Stars" },
            { icon: Flame, colour: "#F97316", label: "Streaks" },
            { icon: Trophy, colour: "#FBBF24", label: "Achievements" },
          ].map(({ icon: Icon, colour, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${colour}25` }}
              >
                <Icon size={24} style={{ color: colour }} />
              </div>
              <span className="text-xs font-bold text-white/70">{label}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const current = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1A1035 0%, #0F172A 100%)",
          border: "2px solid rgba(255,255,255,0.15)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.6)",
          animation: "fade-up 0.4s ease-out",
        }}
      >
        {/* Skip button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-all z-10"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-8 pt-8 pb-6 space-y-4">
          {/* Step indicator */}
          <div className="flex justify-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === step ? 24 : 8,
                  backgroundColor:
                    i === step
                      ? "#7C3AED"
                      : i < step
                        ? "rgba(124, 58, 237, 0.4)"
                        : "rgba(255, 255, 255, 0.15)",
                }}
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white text-center pt-2">
            {current.title}
          </h2>
          <p className="text-sm text-white/70 text-center leading-relaxed">
            {current.description}
          </p>

          {current.content}
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 flex gap-3">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-3.5 rounded-xl font-bold text-white/70 hover:text-white hover:bg-white/10 transition-all"
              style={{
                border: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={next}
            className="flex-1 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: isLast
                ? "linear-gradient(135deg, #58CC02, #46A302)"
                : "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: isLast
                ? "0 4px 16px rgba(88, 204, 2, 0.3)"
                : "0 4px 16px rgba(124, 58, 237, 0.3)",
            }}
          >
            {isLast ? "Let's Go!" : "Next"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
