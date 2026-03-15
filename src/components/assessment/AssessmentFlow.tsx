"use client";

import { useState, useCallback } from "react";
import { CommunicationStyle } from "@/types";
import { STYLES, STYLE_LIST } from "@/data/styles";
import {
  ASSESSMENT_QUESTIONS,
  AssessmentQuestion,
  calculateAssessmentProfile,
} from "@/data/assessment";
import { applyAssessment } from "@/lib/progress/store";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  ArrowRight,
  Check,
  X,
  Zap,
  BarChart3,
  Heart,
  Volume2,
  Target,
  Sparkles,
} from "lucide-react";

const STYLE_ICONS: Record<CommunicationStyle, typeof Zap> = {
  direct: Zap,
  expressive: Volume2,
  supportive: Heart,
  analytical: BarChart3,
};

interface AssessmentFlowProps {
  onComplete: () => void;
}

type Phase = "intro" | "question" | "feedback" | "results";

export function AssessmentFlow({ onComplete }: AssessmentFlowProps) {
  const { progress: currentProgress, saveProgress } = useProgress();
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    { questionId: string; selectedOptionId: string }[]
  >([]);
  const [lastAnswer, setLastAnswer] = useState<{
    selectedOptionId: string;
    correctOptionId: string;
    isCorrect: boolean;
    correctStyle: CommunicationStyle;
    explanation: string;
  } | null>(null);
  const [profile, setProfile] = useState<ReturnType<
    typeof calculateAssessmentProfile
  > | null>(null);
  const [xpAwarded, setXpAwarded] = useState(0);

  const question: AssessmentQuestion | undefined =
    ASSESSMENT_QUESTIONS[currentIndex];

  const handleAnswer = useCallback(
    (optionId: string) => {
      if (!question) return;

      const isCorrect = optionId === question.correctOptionId;
      const newAnswers = [
        ...answers,
        { questionId: question.id, selectedOptionId: optionId },
      ];
      setAnswers(newAnswers);
      setLastAnswer({
        selectedOptionId: optionId,
        correctOptionId: question.correctOptionId,
        isCorrect,
        correctStyle: question.correctStyle,
        explanation: question.explanation,
      });
      setPhase("feedback");
    },
    [question, answers]
  );

  const handleFeedbackContinue = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= ASSESSMENT_QUESTIONS.length) {
      // Done - calculate profile
      const result = calculateAssessmentProfile(answers);
      setProfile(result);

      if (currentProgress) {
        const { progress: updated, xpAwarded: xp } = applyAssessment(currentProgress, result);
        setXpAwarded(xp);
        saveProgress(updated);
      }

      setPhase("results");
    } else {
      setCurrentIndex(nextIndex);
      setLastAnswer(null);
      setPhase("question");
    }
  }, [currentIndex, answers, currentProgress, saveProgress]);

  // INTRO
  if (phase === "intro") {
    return (
      <div
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
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
          className="pointer-events-none fixed bottom-32 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-15"
          style={{ background: "#58CC02" }}
        />

        <div
          className="relative max-w-lg w-full text-center space-y-8"
          style={{ animation: "fade-up 0.5s ease-out" }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
            }}
          >
            <Target size={48} className="text-white" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Style Assessment
            </h1>
            <p className="text-lg text-white/80 max-w-md mx-auto">
              15 questions testing your ability to recognise communication
              patterns from language alone. Takes about 5 minutes.
            </p>
          </div>

          <div
            className="rounded-2xl p-5 space-y-3 text-left mx-auto max-w-sm"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
              What you&apos;ll discover
            </p>
            {[
              "Which language patterns you recognise",
              "Which styles you find trickier to spot",
              "A personalised starting profile",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124, 58, 237, 0.2)" }}
                >
                  <Check size={14} className="text-[#7C3AED]" />
                </div>
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPhase("question")}
            className="px-12 py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2.5 mx-auto transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
            }}
          >
            Start Assessment
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  // RESULTS
  if (phase === "results" && profile) {
    const allEqual = profile.strongestStyle === null;
    const strongDef = profile.strongestStyle ? STYLES[profile.strongestStyle] : null;
    const weakDef = profile.weakestStyle ? STYLES[profile.weakestStyle] : null;
    const StrongestIcon = profile.strongestStyle ? STYLE_ICONS[profile.strongestStyle] : null;
    const WeakestIcon = profile.weakestStyle ? STYLE_ICONS[profile.weakestStyle] : null;

    return (
      <div
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div
          className="relative max-w-lg w-full space-y-6"
          style={{ animation: "fade-up 0.5s ease-out" }}
        >
          {/* Score header */}
          <div className="text-center space-y-4">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(135deg, #58CC02, #46A302)",
                boxShadow: "0 8px 32px rgba(88, 204, 2, 0.4)",
              }}
            >
              <Sparkles size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Your Style Profile
            </h2>
            <p className="text-white/70">
              {profile.correctCount}/{profile.totalQuestions} correct
            </p>
            {xpAwarded > 0 && (
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(124, 58, 237, 0.25)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                }}
              >
                <Zap size={16} className="text-[#A78BFA]" />
                <span className="text-sm font-bold text-[#A78BFA]">
                  +{xpAwarded} XP
                </span>
              </div>
            )}
          </div>

          {/* Style bars */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            {STYLE_LIST.map((style) => {
              const styleDef = STYLES[style];
              const Icon = STYLE_ICONS[style];
              const score = profile.styleScores[style];

              return (
                <div key={style} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon size={16} style={{ color: styleDef.colour }} />
                      <span className="text-sm font-bold text-white">
                        {styleDef.name}
                      </span>
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: styleDef.colour }}
                    >
                      {score}%
                    </span>
                  </div>
                  <div
                    className="h-3 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.max(score, 3)}%`,
                        background: `linear-gradient(90deg, ${styleDef.colour}, ${styleDef.colour}BB)`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strongest + Focus (hidden when all styles score equally) */}
          {!allEqual && strongDef && weakDef && StrongestIcon && WeakestIcon && (
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-4 space-y-2"
                style={{
                  background: `linear-gradient(135deg, ${strongDef.colour}20, ${strongDef.colour}08)`,
                  border: `2px solid ${strongDef.colour}40`,
                }}
              >
                <div className="flex items-center gap-2">
                  <StrongestIcon
                    size={18}
                    style={{ color: strongDef.colour }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: strongDef.colour }}
                  >
                    Strongest
                  </span>
                </div>
                <p className="text-white font-bold">{strongDef.name}</p>
              </div>
              <div
                className="rounded-2xl p-4 space-y-2"
                style={{
                  background: `linear-gradient(135deg, ${weakDef.colour}20, ${weakDef.colour}08)`,
                  border: `2px solid ${weakDef.colour}40`,
                }}
              >
                <div className="flex items-center gap-2">
                  <WeakestIcon size={18} style={{ color: weakDef.colour }} />
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: weakDef.colour }}
                  >
                    Focus Area
                  </span>
                </div>
                <p className="text-white font-bold">{weakDef.name}</p>
              </div>
            </div>
          )}
          {allEqual && (
            <div
              className="rounded-2xl p-4 text-center"
              style={{
                background: "rgba(88, 204, 2, 0.1)",
                border: "2px solid rgba(88, 204, 2, 0.3)",
              }}
            >
              <p className="text-white font-bold">Perfectly Balanced</p>
              <p className="text-white/60 text-sm mt-1">
                You scored equally across all four styles.
              </p>
            </div>
          )}

          {/* Coaching message */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: "rgba(88, 204, 2, 0.1)",
              border: "1px solid rgba(88, 204, 2, 0.3)",
            }}
          >
            <p className="text-sm text-white/90 leading-relaxed">
              {profile.correctCount >= 12
                ? "Exceptional. You have a rare instinct for language patterns. Training will help you apply this skill under pressure in real conversations."
                : profile.correctCount >= 8
                  ? `Strong performance. You spotted more patterns than most.${weakDef ? ` Focus on ${weakDef.name} scenarios to close the remaining gaps.` : " Keep practising to sharpen all four styles."}`
                  : profile.correctCount >= 5
                    ? `A solid start. You picked up on some patterns, but communication styles are trickier to distinguish than most people expect.${weakDef ? ` Your ${weakDef.name} recognition could use the most work.` : ""} The training scenarios will build your accuracy quickly.`
                    : profile.correctCount >= 2
                      ? "Don't worry - this assessment is deliberately tough. Most people find it harder than expected because styles overlap in subtle ways. That's exactly what the training is designed to teach you."
                      : "This is a hard test by design. The styles are deliberately ambiguous and the differences are subtle. The good news is that pattern recognition improves dramatically with practice - the training scenarios will sharpen your instincts quickly."}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onComplete}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
            }}
          >
            Start Training
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  // FEEDBACK after answering
  if (phase === "feedback" && lastAnswer && question) {
    const correctDef = STYLES[lastAnswer.correctStyle];
    const CorrectIcon = STYLE_ICONS[lastAnswer.correctStyle];
    const correctOption = question.options.find((o) => o.id === lastAnswer.correctOptionId);

    return (
      <div
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div
          className="relative max-w-lg w-full space-y-6"
          style={{ animation: "fade-up 0.3s ease-out" }}
        >
          {/* Result indicator */}
          <div className="text-center space-y-3">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
              style={{
                background: lastAnswer.isCorrect
                  ? "rgba(5, 150, 105, 0.2)"
                  : "rgba(245, 158, 11, 0.2)",
                border: `2px solid ${lastAnswer.isCorrect ? "#059669" : "#D97706"}`,
              }}
            >
              {lastAnswer.isCorrect ? (
                <Check size={32} className="text-emerald-400" />
              ) : (
                <X size={32} className="text-amber-400" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {lastAnswer.isCorrect ? "Correct!" : "Not quite"}
            </h3>
            <p className="text-sm text-white/60">
              Question {currentIndex + 1} of {ASSESSMENT_QUESTIONS.length}
            </p>
          </div>

          {/* Correct answer */}
          <div
            className="rounded-2xl p-5 space-y-3"
            style={{
              background: `linear-gradient(135deg, ${correctDef.colour}15, ${correctDef.colour}08)`,
              border: `2px solid ${correctDef.colour}40`,
            }}
          >
            <div className="flex items-center gap-2">
              <CorrectIcon size={20} style={{ color: correctDef.colour }} />
              <span
                className="text-sm font-bold"
                style={{ color: correctDef.colour }}
              >
                {correctOption?.text ?? correctDef.name}
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {lastAnswer.explanation}
            </p>
          </div>

          {/* Continue */}
          <button
            onClick={handleFeedbackContinue}
            className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2.5 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
            }}
          >
            {currentIndex + 1 < ASSESSMENT_QUESTIONS.length
              ? "Next Question"
              : "See Your Profile"}
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    );
  }

  // QUESTION
  if (!question) return null;

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div
        className="relative max-w-lg w-full space-y-6"
        style={{ animation: "fade-up 0.3s ease-out" }}
      >
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">
              Question {currentIndex + 1} of {ASSESSMENT_QUESTIONS.length}
            </span>
            <span className="text-white/60">Style Assessment</span>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%`,
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
              }}
            />
          </div>
        </div>

        {/* Question prompt */}
        <p className="text-center text-white font-semibold text-lg">
          {question.prompt}
        </p>

        {/* Phrase display (for phrase-match type) */}
        {question.phrase && (
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-white/90 text-sm sm:text-base leading-relaxed italic">
              &ldquo;{question.phrase}&rdquo;
            </p>
          </div>
        )}

        {/* Options */}
        <div className={`grid gap-3 ${question.type === "phrase-match" ? "grid-cols-2" : "grid-cols-1"}`}>
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              className={`rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                question.type === "phrase-match" ? "" : "w-full"
              }`}
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 58, 237, 0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {question.type === "phrase-match" ? (
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = STYLE_ICONS[option.style];
                    const styleDef = STYLES[option.style];
                    return (
                      <>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${styleDef.colour}25` }}
                        >
                          <Icon size={22} style={{ color: styleDef.colour }} />
                        </div>
                        <span className="font-bold text-white">{option.text}</span>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5"
                    style={{
                      background: "rgba(124, 58, 237, 0.2)",
                      color: "#A78BFA",
                    }}
                  >
                    {option.id.toUpperCase()}
                  </span>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {option.text}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
