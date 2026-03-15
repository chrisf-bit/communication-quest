"use client";

import { useEffect, useState } from "react";
import {
  QuestionAnswer,
  CommunicationStyle,
  FeedbackResult,
  Scenario,
} from "@/types";
import { STYLES } from "@/data/styles";
import { StyleBadge } from "@/components/shared/StyleBadge";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Sparkles,
  TrendingUp,
  ThumbsUp,
  CheckCircle2,
  AlertTriangle,
  Search,
  MessageSquare,
  PenTool,
  Zap,
  Heart,
  BarChart3,
} from "lucide-react";

interface ScenarioFeedbackProps {
  answers: QuestionAnswer[];
  scenario: Scenario;
  scenarioNumber: number;
  totalScenarios: number;
  detectedTraits?: string[];
  missingTraits?: string[];
  onContinue: () => void;
}

const RESULT_CONFIG: Record<
  FeedbackResult,
  { label: string; colour: string; sceneBg: string; Icon: typeof ThumbsUp }
> = {
  strong: {
    label: "Great Match",
    colour: "#059669",
    sceneBg:
      "linear-gradient(160deg, rgba(5,150,105,0.15) 0%, rgba(5,150,105,0.08) 100%)",
    Icon: Sparkles,
  },
  partial: {
    label: "Getting There",
    colour: "#D97706",
    sceneBg:
      "linear-gradient(160deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.08) 100%)",
    Icon: TrendingUp,
  },
  weak: {
    label: "Room to Grow",
    colour: "#FF6B6B",
    sceneBg:
      "linear-gradient(160deg, rgba(255,107,107,0.15) 0%, rgba(255,107,107,0.08) 100%)",
    Icon: ThumbsUp,
  },
};

const QUESTION_TYPE_META: Record<
  string,
  { label: string; Icon: typeof Search }
> = {
  spot: { label: "Spot the Style", Icon: Search },
  choose: { label: "Choose Response", Icon: MessageSquare },
  rewrite: { label: "Write Response", Icon: PenTool },
};

function StyleMeter({
  score,
  maxScore,
  colour,
}: {
  score: number;
  maxScore: number;
  colour: string;
}) {
  const [animatedPct, setAnimatedPct] = useState(0);
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPct(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const segments = 20;
  const filledSegments = Math.round((animatedPct / 100) * segments);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-bold uppercase tracking-wider text-white/90"
        >
          Style Match
        </span>
        <span className="text-3xl font-bold" style={{ color: colour }}>
          {Math.round(animatedPct)}%
        </span>
      </div>
      <div className="flex gap-1 h-4">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all duration-500 ease-out"
            style={{
              backgroundColor:
                i < filledSegments ? colour : "rgba(255,255,255,0.08)",
              opacity: i < filledSegments ? 1 - i * 0.012 : 1,
              transitionDelay: `${i * 30}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function getOverallResult(answers: QuestionAnswer[]): FeedbackResult {
  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const totalMax = answers.reduce((sum, a) => sum + a.maxScore, 0);
  const pct = totalMax > 0 ? totalScore / totalMax : 0;
  if (pct >= 0.7) return "strong";
  if (pct >= 0.4) return "partial";
  return "weak";
}

export function ScenarioFeedback({
  answers,
  scenario,
  scenarioNumber,
  totalScenarios,
  detectedTraits,
  missingTraits,
  onContinue,
}: ScenarioFeedbackProps) {
  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const totalMax = answers.reduce((sum, a) => sum + a.maxScore, 0);
  const overallResult = getOverallResult(answers);
  const config = RESULT_CONFIG[overallResult];
  const ResultIcon = config.Icon;
  const styleColour = STYLES[scenario.targetStyle].colour;
  const styleName = STYLES[scenario.targetStyle].name;

  // Pick the best coaching tip from the answers (prefer rewrite, then choose, then spot)
  const rewriteAnswer = answers.find((a) => a.questionType === "rewrite");
  const chooseAnswer = answers.find((a) => a.questionType === "choose");
  const spotAnswer = answers.find((a) => a.questionType === "spot");
  const bestFeedback =
    rewriteAnswer?.feedback || chooseAnswer?.feedback || spotAnswer?.feedback;

  const isLastScenario = scenarioNumber >= totalScenarios;

  return (
    <div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)" }}
    >
      <div
        className="max-w-3xl mx-auto space-y-5 px-4 py-8"
        style={{ animation: "fade-up 0.4s ease-out" }}
      >
        {/* Scenario label */}
        <div className="text-center">
          <span className="text-sm font-bold text-white/90">
            Scenario {scenarioNumber} of {totalScenarios} - Results
          </span>
        </div>

        {/* Result scene - dark glass with coloured glow orbs */}
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-8 backdrop-blur-xl"
          style={{
            background: config.sceneBg,
            border: "2px solid rgba(255,255,255,0.3)",
            borderLeftWidth: "5px",
            borderLeftColor: config.colour,
          }}
        >
          <div
            className="absolute top-4 right-8 w-28 h-28 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: config.colour }}
          />
          <div
            className="absolute bottom-4 left-10 w-36 h-36 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: config.colour }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${config.colour}, ${config.colour}CC)`,
                }}
              >
                <ResultIcon size={40} className="text-white" />
              </div>
              <div>
                <h3
                  className="font-bold text-3xl"
                  style={{ color: config.colour }}
                >
                  {config.label}
                </h3>
                <p className="text-sm font-bold mt-1 text-white/90">
                  {scenario.title}
                </p>
              </div>
            </div>

            <StyleMeter
              score={totalScore}
              maxScore={totalMax}
              colour={config.colour}
            />
          </div>
        </div>

        {/* Per-question breakdown */}
        <div
          className="rounded-3xl p-6 space-y-4 backdrop-blur-xl"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            Question Breakdown
          </span>
          <div className="space-y-3">
            {answers.map((answer, i) => {
              const meta = QUESTION_TYPE_META[answer.questionType];
              const QIcon = meta.Icon;
              const answerPct =
                answer.maxScore > 0
                  ? Math.round((answer.score / answer.maxScore) * 100)
                  : 0;
              const resultConfig = RESULT_CONFIG[answer.result];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-2xl"
                  style={{ backgroundColor: `${resultConfig.colour}15` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${resultConfig.colour}30, ${resultConfig.colour}18)`,
                    }}
                  >
                    <QIcon size={22} style={{ color: resultConfig.colour }} />
                  </div>
                  <span className="text-sm font-bold text-white/90 flex-1">
                    {meta.label}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: resultConfig.colour }}
                  >
                    {answerPct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coaching cards */}
        <div
          className="rounded-3xl p-6 space-y-5 backdrop-blur-xl"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          {/* Style insight */}
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${styleColour}25` }}
            >
              {(() => {
                const iconMap = { direct: Zap, expressive: Sparkles, supportive: Heart, analytical: BarChart3 };
                const StyleIcon = iconMap[scenario.targetStyle];
                return <StyleIcon size={22} style={{ color: styleColour }} />;
              })()}
            </div>
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: styleColour }}
              >
                {styleName} Style
              </span>
              <p className="text-base text-white/75 leading-relaxed mt-1">
                {bestFeedback?.observation}
              </p>
            </div>
          </div>

          <hr className="border-white/10" />

          {/* Coaching tip */}
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              }}
            >
              <Lightbulb size={26} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                Coach&apos;s Tip
              </span>
              <p className="text-base text-white/75 leading-relaxed mt-1">
                {bestFeedback?.coachingTip}
              </p>
            </div>
          </div>

          {/* Detected/missing traits */}
          {(detectedTraits?.length || missingTraits?.length) && (
            <>
              <hr className="border-white/10" />
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #059669, #047857)",
                  }}
                >
                  <Target size={26} className="text-white" />
                </div>
                <div className="space-y-3 flex-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    What We Spotted
                  </span>
                  {detectedTraits && detectedTraits.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {detectedTraits.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-300"
                          style={{
                            backgroundColor: "rgba(5,150,105,0.15)",
                            border: "1px solid rgba(5,150,105,0.3)",
                          }}
                        >
                          <CheckCircle2 size={14} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {missingTraits && missingTraits.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {missingTraits.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-amber-300"
                          style={{
                            backgroundColor: "rgba(217,119,6,0.15)",
                            border: "1px solid rgba(217,119,6,0.3)",
                          }}
                        >
                          <AlertTriangle size={14} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Example strong response */}
          {scenario.rewriteQuestion.exampleStrongResponse && (
            <>
              <hr className="border-white/10" />
              <div>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                  Example Strong Response
                </span>
                <p className="text-base text-white/90 italic leading-relaxed mt-2">
                  {"\u201C"}
                  {scenario.rewriteQuestion.exampleStrongResponse}
                  {"\u201D"}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          style={{
            background: isLastScenario
              ? "linear-gradient(135deg, #58CC02, #46A302)"
              : "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: isLastScenario
              ? "0 4px 16px rgba(88, 204, 2, 0.4)"
              : "0 4px 16px rgba(124, 58, 237, 0.3)",
          }}
        >
          {isLastScenario ? "See Results" : "Next Scenario"}
          <ArrowRight size={26} />
        </button>
      </div>
    </div>
  );
}
