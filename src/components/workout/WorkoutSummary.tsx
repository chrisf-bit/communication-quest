"use client";

import { QuestionAnswer, CommunicationStyle, Scenario } from "@/types";
import { STYLES } from "@/data/styles";
import { ScoreRing } from "@/components/shared/ScoreRing";
import { StyleBadge } from "@/components/shared/StyleBadge";
import {
  Trophy,
  TrendingUp,
  Target,
  RotateCcw,
  Home,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

interface WorkoutSummaryProps {
  answers: QuestionAnswer[];
  scenarios: Record<string, Scenario>;
  onRetry: () => void;
}

export function WorkoutSummary({
  answers,
  scenarios,
  onRetry,
}: WorkoutSummaryProps) {
  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const maxScore = answers.reduce((sum, a) => sum + a.maxScore, 0);
  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const stylePerformance: Record<CommunicationStyle, { score: number; max: number }> = {
    direct: { score: 0, max: 0 },
    expressive: { score: 0, max: 0 },
    supportive: { score: 0, max: 0 },
    analytical: { score: 0, max: 0 },
  };

  for (const answer of answers) {
    const scenario = scenarios[answer.scenarioId];
    if (scenario) {
      const style = scenario.targetStyle;
      stylePerformance[style].score += answer.score;
      stylePerformance[style].max += answer.maxScore;
    }
  }

  const stylesWithData = Object.entries(stylePerformance)
    .filter(([, v]) => v.max > 0)
    .map(([style, v]) => ({
      style: style as CommunicationStyle,
      percentage: Math.round((v.score / v.max) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const strongestStyle = stylesWithData[0];
  const weakestStyle = stylesWithData[stylesWithData.length - 1];

  const scoreColour = percentage >= 70 ? "#059669" : percentage >= 40 ? "#D97706" : "#FF6B6B";
  const sceneBg = percentage >= 70
    ? "linear-gradient(160deg, rgba(5,150,105,0.15) 0%, rgba(5,150,105,0.08) 100%)"
    : percentage >= 40
      ? "linear-gradient(160deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.08) 100%)"
      : "linear-gradient(160deg, rgba(255,107,107,0.15) 0%, rgba(255,107,107,0.08) 100%)";

  const ResultIcon = (result: string) => {
    switch (result) {
      case "strong": return <CheckCircle2 size={24} className="text-emerald-400" />;
      case "partial": return <AlertCircle size={24} className="text-amber-400" />;
      default: return <XCircle size={24} className="text-rose-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)" }}
    >
      <div className="max-w-3xl mx-auto space-y-6 px-4 py-8" style={{ animation: "fade-up 0.5s ease-out" }}>
        {/* Score scene - dark glass with coloured accents */}
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-10 text-center backdrop-blur-xl"
          style={{
            background: sceneBg,
            borderLeft: `5px solid ${scoreColour}`,
            border: `2px solid rgba(255,255,255,0.3)`,
            borderLeftWidth: "5px",
            borderLeftColor: scoreColour,
          }}
        >
          <div
            className="absolute top-4 right-8 w-32 h-32 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: scoreColour }}
          />
          <div
            className="absolute bottom-4 left-10 w-40 h-40 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: scoreColour }}
          />

          <div className="relative z-10 space-y-4">
            <div className="flex justify-center" style={{ animation: "result-pulse 0.6s ease-out" }}>
              <ScoreRing
                score={totalScore}
                maxScore={maxScore}
                size={140}
                strokeWidth={10}
                colour={scoreColour}
              />
            </div>
            <h2 className="text-3xl font-bold text-white">Session Complete</h2>
          </div>
        </div>

        {/* Style breakdown - dark glass card */}
        {stylesWithData.length > 0 && (
          <div
            className="rounded-3xl p-6 space-y-4 backdrop-blur-xl"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
              >
                <Target size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-white">Style Breakdown</h3>
            </div>
            <div className="space-y-3">
              {stylesWithData.map(({ style, percentage: pct }) => (
                <div key={style} className="flex items-center gap-3">
                  <StyleBadge style={style} size="sm" />
                  <div
                    className="flex-1 h-3.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${STYLES[style].colour}, ${STYLES[style].colour}BB)`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold w-10 text-right text-white">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strengths and focus - dark glass scene cards */}
        <div className="grid grid-cols-2 gap-4">
          {strongestStyle && (
            <div
              className="relative rounded-3xl overflow-hidden p-5 space-y-3 backdrop-blur-xl"
              style={{
                background: "linear-gradient(160deg, rgba(5,150,105,0.15) 0%, rgba(5,150,105,0.08) 100%)",
                borderLeft: "4px solid #059669",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftWidth: "4px",
                borderLeftColor: "#059669",
              }}
            >
              <div className="absolute top-2 right-3 w-16 h-16 rounded-full blur-2xl opacity-20 bg-emerald-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <Trophy size={24} className="text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Strongest
                  </span>
                </div>
                <div className="mt-2">
                  <StyleBadge style={strongestStyle.style} size="md" />
                </div>
              </div>
            </div>
          )}
          {weakestStyle && weakestStyle.style !== strongestStyle?.style && (
            <div
              className="relative rounded-3xl overflow-hidden p-5 space-y-3 backdrop-blur-xl"
              style={{
                background: "linear-gradient(160deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.08) 100%)",
                borderLeft: "4px solid #D97706",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftWidth: "4px",
                borderLeftColor: "#D97706",
              }}
            >
              <div className="absolute top-2 right-3 w-16 h-16 rounded-full blur-2xl opacity-20 bg-amber-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <TrendingUp size={24} className="text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Focus Area
                  </span>
                </div>
                <div className="mt-2">
                  <StyleBadge style={weakestStyle.style} size="md" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Question review - dark glass card */}
        <div
          className="rounded-3xl p-6 space-y-4 backdrop-blur-xl"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <h3 className="font-bold text-lg text-white">Question Review</h3>
          <div className="space-y-2">
            {answers.map((answer, i) => {
              const scenario = scenarios[answer.scenarioId];
              const typeLabel =
                answer.questionType === "spot"
                  ? "Spot"
                  : answer.questionType === "choose"
                    ? "Choose"
                    : "Write";
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 rounded-2xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  {ResultIcon(answer.result)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate text-white">
                      {scenario?.title || "Scenario"}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                    style={{ backgroundColor: "rgba(124,58,237,0.2)", color: "#A78BFA" }}
                  >
                    {typeLabel}
                  </span>
                  <span className="text-base font-bold text-white/90">
                    {answer.score}/{answer.maxScore}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href="/"
            className="flex-1 py-4 rounded-2xl font-bold text-center text-white transition-all hover:bg-white/10 hover:shadow-md flex items-center justify-center gap-2"
            style={{ borderWidth: "3px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.2)" }}
          >
            <Home size={26} />
            Home
          </Link>
          <button
            onClick={onRetry}
            className="flex-1 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
            }}
          >
            <RotateCcw size={26} />
            Train Again
          </button>
        </div>

        <div className="text-center pb-4">
          <Link
            href="/progress"
            className="text-sm font-bold text-white/90 hover:text-white inline-flex items-center gap-1 transition-colors"
          >
            View your progress
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
