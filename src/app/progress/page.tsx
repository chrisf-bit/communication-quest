"use client";

import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress/store";
import {
  getOverallPercentage,
  getStylePercentage,
  getStrongestStyle,
  getWeakestStyle,
  getRecentAverageScore,
} from "@/lib/progress/stats";
import { UserProgress } from "@/types";
import { STYLES, STYLE_LIST } from "@/data/styles";
import { StyleBadge } from "@/components/shared/StyleBadge";
import { ScoreRing } from "@/components/shared/ScoreRing";
import {
  Play,
  Trophy,
  TrendingUp,
  Flame,
  Calendar,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STAT_ACCENTS = [
  { label: "Sessions", colour: "#FF6B6B" },
  { label: "Overall", colour: "#059669" },
  { label: "Day Streak", colour: "#F59E0B" },
  { label: "Recent Avg", colour: "#3B82F6" },
];

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <p className="text-white/90">Loading...</p>
      </div>
    );
  }

  const hasData = progress.workoutsCompleted > 0;
  const overallPct = getOverallPercentage(progress);
  const strongest = getStrongestStyle(progress);
  const weakest = getWeakestStyle(progress);
  const recentAvg = getRecentAverageScore(progress);

  if (!hasData) {
    return (
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        {/* Glow orbs */}
        <div
          className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
          style={{ background: "#7C3AED" }}
        />
        <div
          className="pointer-events-none fixed bottom-40 right-1/3 w-64 h-64 rounded-full blur-[120px] opacity-15"
          style={{ background: "#3B82F6" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-xl"
            style={{
              background: "rgba(124, 58, 237, 0.15)",
              border: "2px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            <BarChart3 size={36} style={{ color: "#7C3AED" }} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">No progress yet</h2>
            <p className="text-white/90">
              Complete your first session to start tracking your communication
              skills.
            </p>
          </div>
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#58CC02" }}
          >
            <Play size={24} />
            Start Playing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Glow orbs — one for each style colour */}
      <div
        className="pointer-events-none fixed top-16 left-[15%] w-72 h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "#FF6B6B" }}
      />
      <div
        className="pointer-events-none fixed top-1/3 right-[10%] w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 left-[30%] w-60 h-60 rounded-full blur-[100px] opacity-12"
        style={{ background: "#059669" }}
      />
      <div
        className="pointer-events-none fixed bottom-16 right-[25%] w-56 h-56 rounded-full blur-[100px] opacity-10"
        style={{ background: "#3B82F6" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-white">Your Progress</h1>

        {/* Overview stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Sessions */}
          <div
            className="backdrop-blur-xl rounded-2xl p-4 text-center space-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: STAT_ACCENTS[0].colour,
            }}
          >
            <Play size={26} style={{ color: STAT_ACCENTS[0].colour }} className="mx-auto" />
            <p className="text-2xl font-bold text-white">{progress.workoutsCompleted}</p>
            <p className="text-xs text-white/90">Sessions</p>
          </div>

          {/* Overall */}
          <div
            className="backdrop-blur-xl rounded-2xl p-4 text-center space-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: STAT_ACCENTS[1].colour,
            }}
          >
            <div className="flex justify-center">
              <ScoreRing
                score={overallPct}
                maxScore={100}
                size={44}
                strokeWidth={4}
                colour={STAT_ACCENTS[1].colour}
                showLabel={false}
              />
            </div>
            <p className="text-2xl font-bold text-white">{overallPct}%</p>
            <p className="text-xs text-white/90">Overall</p>
          </div>

          {/* Day Streak */}
          <div
            className="backdrop-blur-xl rounded-2xl p-4 text-center space-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: STAT_ACCENTS[2].colour,
            }}
          >
            <Flame size={26} style={{ color: STAT_ACCENTS[2].colour }} className="mx-auto" />
            <p className="text-2xl font-bold text-white">{progress.currentStreak}</p>
            <p className="text-xs text-white/90">Day Streak</p>
          </div>

          {/* Recent Avg */}
          <div
            className="backdrop-blur-xl rounded-2xl p-4 text-center space-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: STAT_ACCENTS[3].colour,
            }}
          >
            <TrendingUp size={26} style={{ color: STAT_ACCENTS[3].colour }} className="mx-auto" />
            <p className="text-2xl font-bold text-white">{recentAvg}%</p>
            <p className="text-xs text-white/90">Recent Avg</p>
          </div>
        </div>

        {/* Style breakdown */}
        <div
          className="backdrop-blur-xl rounded-2xl p-6 space-y-5"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <h2 className="text-lg font-semibold text-white">Style Performance</h2>
          <div className="space-y-4">
            {STYLE_LIST.map((style) => {
              const pct = getStylePercentage(progress, style);
              const ss = progress.styleScores[style];
              return (
                <div key={style} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StyleBadge style={style} size="sm" />
                      <span className="text-xs text-white/90">
                        {ss.attempts} attempts
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white">{pct}%</span>
                  </div>
                  <div
                    className="w-full h-2.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.3)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: STYLES[style].colour,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths and development */}
        <div className="grid sm:grid-cols-2 gap-4">
          {strongest && (
            <div
              className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftColor: "#059669",
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center gap-2">
                <Trophy size={24} style={{ color: "#059669" }} />
                <h3 className="font-semibold text-sm text-white">Your Strongest Style</h3>
              </div>
              <StyleBadge style={strongest} size="md" />
              <p className="text-sm text-white/90">
                You tend to read and adapt to{" "}
                <span className="font-medium capitalize text-white/75">{strongest}</span>{" "}
                communicators well. Keep refining your approach to maintain this
                strength.
              </p>
            </div>
          )}
          {weakest && weakest !== strongest && (
            <div
              className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftColor: "#F59E0B",
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={24} style={{ color: "#F59E0B" }} />
                <h3 className="font-semibold text-sm text-white">Development Focus</h3>
              </div>
              <StyleBadge style={weakest} size="md" />
              <p className="text-sm text-white/90">
                Adapting to{" "}
                <span className="font-medium capitalize text-white/75">{weakest}</span>{" "}
                communicators is your biggest growth opportunity. Focus practice
                sessions here.
              </p>
            </div>
          )}
        </div>

        {/* Session history */}
        {progress.sessions.length > 0 && (
          <div
            className="backdrop-blur-xl rounded-2xl p-6 space-y-4"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <h2 className="text-lg font-semibold text-white">Recent Sessions</h2>
            <div className="space-y-1">
              {progress.sessions.slice(0, 10).map((session) => {
                const pct = session.maxScore > 0
                  ? Math.round((session.totalScore / session.maxScore) * 100)
                  : 0;
                const date = new Date(session.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                });

                return (
                  <div
                    key={session.id}
                    className="flex items-center gap-3 py-3 rounded-xl px-3"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Calendar size={18} className="text-white/90" />
                      <span className="text-xs text-white/90 w-12">
                        {date}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium capitalize text-white">
                          {session.type}
                        </span>
                        <span className="text-xs text-white/90">
                          {session.questions.length} questions
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {session.questions.map((q, i) => (
                          <span key={i}>
                            {q.result === "strong" && (
                              <CheckCircle2 size={16} className="text-emerald-400" />
                            )}
                            {q.result === "partial" && (
                              <AlertCircle size={16} className="text-amber-400" />
                            )}
                            {q.result === "weak" && (
                              <XCircle size={16} className="text-rose-400" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-white">{pct}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center py-4">
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#58CC02" }}
          >
            <Play size={24} />
            Play Again
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
