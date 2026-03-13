"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadProgress } from "@/lib/progress/store";
import { getOverallPercentage, getWeakestStyle, getStylePercentage } from "@/lib/progress/stats";
import { UserProgress } from "@/types";
import { STYLES } from "@/data/styles";

import { ScoreRing } from "@/components/shared/ScoreRing";
import { getProgressToNextLevel } from "@/lib/progress/xp";
import {
  Play,
  ArrowRight,
  Eye,
  MessageSquare,
  PenLine,
  Target,
  Flame,
  Zap,
  Volume2,
  Brain,
  BarChart3,
  BookOpen,
  Sparkles,
  Heart,
  Lock,
} from "lucide-react";

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const hasHistory = progress && progress.workoutsCompleted > 0;
  const overallPct = progress ? getOverallPercentage(progress) : 0;

  return (
    <div className="space-y-0">
      {/* Hero - dark with bold 4-colour glow orbs */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        {/* 4 style colour glow orbs - bold and vivid */}
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full"
          style={{
            backgroundColor: "rgba(255, 107, 107, 0.25)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{
            backgroundColor: "rgba(245, 158, 11, 0.22)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            backgroundColor: "rgba(5, 150, 105, 0.2)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
          style={{
            backgroundColor: "rgba(59, 130, 246, 0.25)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center gap-4">
            {[
              { icon: BarChart3, colour: "#2563EB" },
              { icon: Zap, colour: "#FF6B6B" },
              { icon: Heart, colour: "#059669" },
              { icon: Sparkles, colour: "#F59E0B" },
            ].map(({ icon: Icon, colour }, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: colour,
                  boxShadow: `0 4px 16px ${colour}40`,
                }}
              >
                <Icon size={28} className="text-white" />
              </div>
            ))}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none">
            Conversation{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF6B6B, #F59E0B, #059669, #3B82F6)",
              }}
            >
              Quest
            </span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Practise recognising communication styles and adapting your responses
            in realistic workplace situations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/workout"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #58CC02, #46A302)",
                boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
              }}
            >
              <Play size={26} />
              {hasHistory ? "Play Now" : "Start Playing"}
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white border-2 border-white/30 transition-all duration-200 hover:bg-white/10 hover:border-white/50"
            >
              How It Works
              <ArrowRight size={24} />
            </Link>
          </div>

          {/* Feature pills - each a different style colour */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { icon: Volume2, label: "Voiced characters", colour: "#FB7185" },
              { icon: Brain, label: "Style coaching", colour: "#34D399" },
              { icon: Target, label: "Instant feedback", colour: "#FCD34D" },
            ].map(({ icon: Icon, label, colour }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm"
                style={{
                  color: colour,
                  backgroundColor: `${colour}20`,
                  border: `1px solid ${colour}30`,
                }}
              >
                <Icon size={20} />
                {label}
              </span>
            ))}
          </div>

          {/* Demo banner - inside hero so it stays in the dark zone */}
          {hasHistory && progress?.isDemo && (
            <div className="max-w-6xl mx-auto px-6 pt-6">
              <div
                className="rounded-2xl px-5 py-3 flex items-center justify-between"
                style={{
                  background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.2))",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-[#7C3AED]" />
                  <span className="text-sm text-white/90">
                    Demo mode — sign up to unlock all content
                  </span>
                </div>
                <button
                  className="text-sm font-bold text-[#7C3AED] hover:text-[#A78BFA] transition-colors flex items-center gap-1"
                >
                  Sign Up
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats bar for returning users */}
      {hasHistory && progress && (() => {
        const xpProgress = getProgressToNextLevel(progress.totalXP);
        return (
        <section className="max-w-6xl mx-auto px-6 -mt-8 -mb-8 relative z-10">
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                icon: Play,
                value: progress.workoutsCompleted,
                label: "Sessions",
                position: "0%",
              },
              {
                icon: null,
                value: overallPct,
                label: "Average",
                position: "33%",
                isScore: true,
              },
              {
                icon: Flame,
                value: progress.currentStreak,
                label: "Day Streak",
                position: "66%",
              },
              {
                icon: Zap,
                value: progress.totalXP,
                label: xpProgress.currentTier.label,
                position: "100%",
                isXP: true,
              },
            ].map(({ icon: CardIcon, value, label, position, isScore, isXP }) => (
              <div
                key={label}
                className="rounded-2xl p-5 text-center space-y-2"
                style={{
                  background: "linear-gradient(90deg, #DC2626, #D97706, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  backgroundPosition: position,
                }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 flex items-center justify-center">
                    {isScore ? (
                      <ScoreRing
                        score={overallPct}
                        maxScore={100}
                        size={56}
                        strokeWidth={5}
                        colour="#ffffff"
                        showLabel={false}
                      />
                    ) : CardIcon ? (
                      <CardIcon size={32} className="text-white" />
                    ) : null}
                  </div>
                  <p className="text-3xl font-bold text-white">
                    {isXP ? `${value}` : isScore ? `${value}%` : value}
                  </p>
                  <p className="text-sm text-white/90 font-semibold">
                    {isXP ? `${label}` : label}
                  </p>
                  {isXP && xpProgress.nextTier && (
                    <div className="w-full">
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.3)" }}
                      >
                        <div
                          className="h-full rounded-full bg-white transition-all duration-500"
                          style={{ width: `${Math.round(xpProgress.progress * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        );
      })()}

      {/* Smart recommendation for returning users (signed-up users only) */}
      {hasHistory && progress && !progress.isDemo && (() => {
        const weakStyle = getWeakestStyle(progress);
        if (!weakStyle) return null;
        const weakPct = getStylePercentage(progress, weakStyle);
        const styleDef = STYLES[weakStyle];

        return (
          <section
            className="pt-16"
            style={{
              background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <Link
                href="/practice"
                className="block rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${styleDef.colour}20, ${styleDef.colour}10)`,
                  border: `2px solid ${styleDef.colour}40`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${styleDef.colour}30` }}
                  >
                    <Target size={24} style={{ color: styleDef.colour }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white">Recommended for you</p>
                    <p className="text-sm text-white/70 mt-0.5">
                      Your <span className="font-semibold capitalize" style={{ color: styleDef.colour }}>{weakStyle}</span> style
                      is at {weakPct}% — try a focused practice session to improve.
                    </p>
                  </div>
                  <ArrowRight size={20} className="text-white/50 flex-shrink-0" />
                </div>
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Four ways to train */}
      <section
        className={`${hasHistory ? "pt-16" : "pt-16"} pb-16`}
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
            Four Ways to Train
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Eye,
                title: "Spot the Style",
                desc: "Read a workplace scenario and identify the communication style from behavioural cues.",
                colour: "#FF6B6B",
              },
              {
                icon: MessageSquare,
                title: "Choose the Best Response",
                desc: "Pick the most effective response for that person\u2019s style from realistic options.",
                colour: "#F59E0B",
              },
              {
                icon: PenLine,
                title: "Write Your Response",
                desc: "Compose your own style-adapted response and get instant coaching feedback.",
                colour: "#059669",
              },
              {
                icon: BookOpen,
                title: "Vocabulary Mode",
                desc: "Learn the words and language patterns each communication style typically uses.",
                colour: "#7C3AED",
              },
            ].map(({ icon: Icon, title, desc, colour }) => (
              <div
                key={title}
                className="rounded-2xl p-6 space-y-4 transition-all duration-200 hover:-translate-y-1 backdrop-blur-xl"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${colour}35` }}
                >
                  <Icon size={34} style={{ color: colour }} />
                </div>
                <h3 className="font-bold text-lg text-white" style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>{title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style overview */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
            Four Communication Styles
          </h2>
          <p className="text-white/90 text-center max-w-2xl mx-auto text-lg font-medium">
            People tend towards one or two styles, but everyone adapts depending
            on context. The skill is reading others and flexing your approach.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Grid order: Task/Introvert, Task/Extrovert, People/Introvert, People/Extrovert */}
            {[
              {
                style: "analytical" as const,
                name: "Analytical",
                icon: BarChart3,
                desc: "Precise and thorough. Values data, evidence, and structured thinking.",
                bg: "linear-gradient(145deg, #2563EB, #1D4ED8)",
                shadow: "0 8px 32px rgba(37, 99, 235, 0.4)",
              },
              {
                style: "direct" as const,
                name: "Direct",
                icon: Zap,
                desc: "Results-focused and decisive. Values efficiency and getting to the point.",
                bg: "linear-gradient(145deg, #DC2626, #B91C1C)",
                shadow: "0 8px 32px rgba(220, 38, 38, 0.4)",
              },
              {
                style: "supportive" as const,
                name: "Supportive",
                icon: Target,
                desc: "Calm and relationship-focused. Values trust, harmony, and consideration.",
                bg: "linear-gradient(145deg, #059669, #047857)",
                shadow: "0 8px 32px rgba(5, 150, 105, 0.4)",
              },
              {
                style: "expressive" as const,
                name: "Expressive",
                icon: Volume2,
                desc: "Enthusiastic and people-oriented. Values energy, ideas, and collaboration.",
                bg: "linear-gradient(145deg, #F59E0B, #D97706)",
                shadow: "0 8px 32px rgba(245, 158, 11, 0.4)",
              },
            ].map(({ style, name, icon: SIcon, desc, bg, shadow }) => (
              <div
                key={style}
                className="relative overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: bg,
                  border: "2px solid rgba(255,255,255,0.3)",
                  boxShadow: shadow,
                }}
              >
                {/* Background glow orb */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", filter: "blur(40px)" }}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <SIcon size={30} className="text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg text-white"
                      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
                    >
                      {name}
                    </h3>
                    <p className="text-sm text-white/90 mt-1.5 font-medium leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden text-center py-16"
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{ backgroundColor: "rgba(88,204,2,0.1)", filter: "blur(120px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Target size={30} style={{ color: "#58CC02" }} />
            <p className="text-xl text-white/90 font-semibold">
              Practice beats theory. Start building your communication flexibility.
            </p>
          </div>
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
            }}
          >
            <Zap size={24} />
            Begin Training
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-6"
        style={{ background: "#0A0F1A", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-sm text-white/90 font-medium">
          Conversation Quest - Practice-based communication training
        </p>
      </footer>
    </div>
  );
}
