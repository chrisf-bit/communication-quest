"use client";

import { STYLES, STYLE_LIST } from "@/data/styles";
import { StyleBadge } from "@/components/shared/StyleBadge";
import {
  Zap,
  Sparkles,
  Heart,
  BarChart3,
  Play,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const ICON_MAP = {
  direct: Zap,
  expressive: Sparkles,
  supportive: Heart,
  analytical: BarChart3,
};

export default function MethodPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(225, 29, 72, 0.12)", filter: "blur(100px)" }}
      />
      <div
        className="fixed bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.12)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="space-y-3 text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
            }}
          >
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">About the Method</h1>
          <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
            Communication Quest is built on a widely recognised model of
            communication styles. The idea is simple: people tend to communicate in
            patterns, and if you can read those patterns, you can adapt your
            approach to connect more effectively.
          </p>
        </div>

        {/* The four styles - each with bold colour treatment */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-white text-center">The Four Styles</h2>
          <p className="text-sm text-white/90 leading-relaxed text-center max-w-xl mx-auto">
            Most people lean towards one or two styles naturally, but everyone uses
            all four depending on context, stress, and who they&apos;re talking to.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {STYLE_LIST.map((styleId) => {
              const style = STYLES[styleId];
              const Icon = ICON_MAP[styleId];

              const bgMap: Record<string, string> = {
                analytical: "linear-gradient(145deg, #2563EB, #1D4ED8)",
                direct: "linear-gradient(145deg, #DC2626, #B91C1C)",
                supportive: "linear-gradient(145deg, #059669, #047857)",
                expressive: "linear-gradient(145deg, #F59E0B, #D97706)",
              };
              const shadowMap: Record<string, string> = {
                analytical: "0 8px 32px rgba(37, 99, 235, 0.4)",
                direct: "0 8px 32px rgba(220, 38, 38, 0.4)",
                supportive: "0 8px 32px rgba(5, 150, 105, 0.4)",
                expressive: "0 8px 32px rgba(245, 158, 11, 0.4)",
              };

              return (
                <div
                  key={styleId}
                  className="relative overflow-hidden rounded-2xl p-6 space-y-4 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: bgMap[styleId],
                    border: "2px solid rgba(255,255,255,0.3)",
                    boxShadow: shadowMap[styleId],
                  }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", filter: "blur(50px)" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Icon size={30} className="text-white" />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-xl text-white"
                          style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
                        >
                          {style.name}
                        </h3>
                        <p className="text-sm text-white/90 mt-0.5">
                          {style.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
                          Key Traits
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {style.traits.map((trait) => (
                            <span
                              key={trait}
                              className="px-3 py-1.5 rounded-md text-xs font-bold"
                              style={{
                                backgroundColor: "rgba(255,255,255,0.2)",
                                color: "white",
                              }}
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
                          How to Adapt
                        </h4>
                        <ul className="space-y-1.5">
                          {style.bestApproach.slice(0, 3).map((tip, i) => (
                            <li
                              key={i}
                              className="text-xs text-white/90 flex items-start gap-1.5"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-white/70"
                              />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-white text-center">How the Training Works</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                num: 1,
                icon: BookOpen,
                title: "Read the scenario",
                desc: "Each scenario presents a realistic workplace interaction with behavioural cues that signal a communication style.",
                colour: "#FF6B6B",
              },
              {
                num: 2,
                icon: MessageSquare,
                title: "Respond and adapt",
                desc: "You may identify the style, choose the best response, or write your own. Each task builds a different aspect of communication flexibility.",
                colour: "#F59E0B",
              },
              {
                num: 3,
                icon: Target,
                title: "Get coaching feedback",
                desc: "After each answer, you receive a clear explanation of what worked, what to notice, and how to adapt better next time.",
                colour: "#059669",
              },
              {
                num: 4,
                icon: TrendingUp,
                title: "Track your progress",
                desc: "See which styles you handle well and where you need more practice. Regular short sessions build lasting skill.",
                colour: "#3B82F6",
              },
            ].map(({ num, icon: StepIcon, title, desc, colour }) => (
              <div
                key={num}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colour}20` }}
                >
                  <StepIcon size={26} style={{ color: colour }} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">{title}</h4>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important caveats */}
        <section
          className="rounded-2xl p-6 space-y-3"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <h2 className="text-lg font-bold text-white">A Note on Styles</h2>
          <div className="space-y-2 text-sm text-white/90 leading-relaxed">
            <p>
              Communication styles are tendencies, not personality types. Nobody is
              just one style. People adapt based on context, stress, topic, and who
              they&apos;re speaking with.
            </p>
            <p>
              The value of this model is not in labelling people, but in developing
              the habit of paying attention to how others communicate - and
              adjusting your approach to meet them where they are.
            </p>
            <p>
              The best communicators are not stuck in one mode. They are flexible,
              observant, and intentional.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-4">
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
            }}
          >
            <Play size={24} />
            Start Playing
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
