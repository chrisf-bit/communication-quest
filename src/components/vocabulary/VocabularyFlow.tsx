"use client";

import { useState, useMemo, useCallback } from "react";
import {
  VocabularyChallenge,
  QuestionAnswer,
  CommunicationStyle,
  FeedbackContent,
} from "@/types";
import { recordSession } from "@/lib/progress/store";
import { generateId } from "@/lib/utils";
import { generateVocabularySet } from "@/data/vocabulary";
import { WordSortChallengeUI } from "./WordSortChallenge";
import { SentenceDetectionChallengeUI } from "./SentenceDetectionChallenge";
import { LanguageMatchChallengeUI } from "./LanguageMatchChallenge";
import { WorkoutSummary } from "../workout/WorkoutSummary";
import { BookOpen, ArrowRight, Trophy, BarChart3, RotateCcw } from "lucide-react";

interface VocabularyFlowProps {
  onComplete: () => void;
  onRestart: () => void;
  challengeCount?: number;
}

type Phase = "intro" | "challenge" | "summary";

/**
 * Get the "target style" for a vocabulary challenge - used for progress tracking.
 */
function getChallengeTargetStyle(challenge: VocabularyChallenge): CommunicationStyle {
  switch (challenge.type) {
    case "word-sort":
      // Use the first word's style as representative
      return challenge.words[0].style;
    case "sentence-detection":
      return challenge.correctStyle;
    case "language-match":
      return challenge.characterStyle;
  }
}

export function VocabularyFlow({
  onComplete,
  onRestart,
  challengeCount = 5,
}: VocabularyFlowProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  const [flowKey, setFlowKey] = useState(0);

  const challenges = useMemo(
    () => generateVocabularySet(challengeCount),
    [challengeCount, flowKey]
  );

  const currentChallenge = challenges[currentIndex];

  const handleAnswer = useCallback(
    (score: number, maxScore: number) => {
      if (!currentChallenge) return;

      const result =
        score >= maxScore * 0.7
          ? "strong"
          : score >= maxScore * 0.4
          ? "partial"
          : ("weak" as const);

      const feedback: FeedbackContent = {
        result,
        explanation: "",
        observation: "",
        coachingTip: "",
        styleContext: "",
      };

      const answer: QuestionAnswer = {
        scenarioId: currentChallenge.id,
        questionType: "vocabulary",
        userAnswer: "",
        score,
        maxScore,
        result,
        feedback,
        answeredAt: new Date().toISOString(),
      };

      setAnswers((prev) => [...prev, answer]);

      if (currentIndex + 1 >= challenges.length) {
        // Session complete - save progress
        const allAnswers = [...answers, answer];
        const totalScore = allAnswers.reduce((sum, a) => sum + a.score, 0);
        const totalMax = allAnswers.reduce((sum, a) => sum + a.maxScore, 0);

        const scenarioStyles: Record<string, CommunicationStyle> = {};
        for (let i = 0; i < challenges.length; i++) {
          scenarioStyles[challenges[i].id] = getChallengeTargetStyle(challenges[i]);
        }

        recordSession(
          {
            id: generateId(),
            date: new Date().toISOString(),
            type: "practice",
            mode: "vocabulary",
            questions: allAnswers,
            totalScore,
            maxScore: totalMax,
          },
          scenarioStyles
        );

        setPhase("summary");
        onComplete();
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentChallenge, currentIndex, challenges, answers, onComplete]
  );

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setAnswers([]);
    setPhase("intro");
    setFlowKey((k) => k + 1);
    onRestart();
  }, [onRestart]);

  // ---- INTRO ----
  if (phase === "intro") {
    return (
      <div
        className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
          animation: "fade-up 0.5s ease-out",
        }}
      >
        {/* Glow orbs */}
        <div
          className="absolute top-0 left-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: "rgba(255, 107, 107, 0.2)", filter: "blur(100px)" }}
        />
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.18)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full"
          style={{ backgroundColor: "rgba(5, 150, 105, 0.15)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.2)", filter: "blur(100px)" }}
        />

        <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
            }}
          >
            <BookOpen size={48} className="text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Vocabulary Mode
          </h2>
          <p className="text-lg text-white/75 font-medium max-w-md mx-auto">
            {challengeCount} challenges - learn the language patterns of each communication style
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span
              className="px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ color: "#7C3AED", backgroundColor: "rgba(124,58,237,0.15)", border: "2px solid rgba(124,58,237,0.3)" }}
            >
              Word Sort
            </span>
            <span
              className="px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ color: "#7C3AED", backgroundColor: "rgba(124,58,237,0.15)", border: "2px solid rgba(124,58,237,0.3)" }}
            >
              Sentence Detection
            </span>
            <span
              className="px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ color: "#7C3AED", backgroundColor: "rgba(124,58,237,0.15)", border: "2px solid rgba(124,58,237,0.3)" }}
            >
              Language Match
            </span>
          </div>
          <button
            onClick={() => setPhase("challenge")}
            className="px-12 py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2.5 mx-auto transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
            }}
          >
            Let&apos;s Go
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  // ---- SUMMARY ----
  if (phase === "summary") {
    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    const maxScore = answers.reduce((sum, a) => sum + a.maxScore, 0);
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

    return (
      <div
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
          animation: "fade-up 0.5s ease-out",
        }}
      >
        <div className="text-center space-y-8 px-8 max-w-2xl">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background:
                percentage >= 70
                  ? "linear-gradient(135deg, #58CC02, #46A302)"
                  : percentage >= 40
                  ? "linear-gradient(135deg, #F59E0B, #D97706)"
                  : "linear-gradient(135deg, #FF6B6B, #DC2626)",
              boxShadow:
                percentage >= 70
                  ? "0 8px 32px rgba(88, 204, 2, 0.4)"
                  : percentage >= 40
                  ? "0 8px 32px rgba(245, 158, 11, 0.4)"
                  : "0 8px 32px rgba(255, 107, 107, 0.4)",
            }}
          >
            <Trophy size={40} className="text-white" />
          </div>

          <h2 className="text-4xl font-bold text-white">
            {percentage >= 70
              ? "Great work!"
              : percentage >= 40
              ? "Getting there!"
              : "Keep practising!"}
          </h2>

          <div
            className="rounded-2xl p-6 space-y-4"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <BarChart3 size={24} className="text-[#7C3AED]" />
              <span className="text-3xl font-bold text-white">{percentage}%</span>
            </div>
            <p className="text-white/90">
              {totalScore} of {maxScore} points across {answers.length} challenges
            </p>

            {/* Per-question breakdown */}
            <div className="space-y-2 pt-2">
              {answers.map((answer, i) => {
                const challenge = challenges[i];
                const typeLabel =
                  challenge.type === "word-sort"
                    ? "Word Sort"
                    : challenge.type === "sentence-detection"
                    ? "Sentence Detection"
                    : "Language Match";
                const pct = Math.round((answer.score / answer.maxScore) * 100);

                return (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/90">{typeLabel}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-24 h-2 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background:
                              pct >= 70
                                ? "#58CC02"
                                : pct >= 40
                                ? "#F59E0B"
                                : "#FF6B6B",
                          }}
                        />
                      </div>
                      <span className="text-white/70 w-8 text-right font-bold">
                        {answer.score}/{answer.maxScore}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-8 py-4 rounded-2xl font-bold text-lg text-white flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #58CC02, #46A302)",
                boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
              }}
            >
              <RotateCcw size={22} />
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- CHALLENGE ----
  if (!currentChallenge) return null;

  switch (currentChallenge.type) {
    case "word-sort":
      return (
        <WordSortChallengeUI
          key={currentChallenge.id}
          challenge={currentChallenge}
          questionNumber={currentIndex + 1}
          totalQuestions={challenges.length}
          onAnswer={handleAnswer}
        />
      );
    case "sentence-detection":
      return (
        <SentenceDetectionChallengeUI
          key={currentChallenge.id}
          challenge={currentChallenge}
          questionNumber={currentIndex + 1}
          totalQuestions={challenges.length}
          onAnswer={handleAnswer}
        />
      );
    case "language-match":
      return (
        <LanguageMatchChallengeUI
          key={currentChallenge.id}
          challenge={currentChallenge}
          questionNumber={currentIndex + 1}
          totalQuestions={challenges.length}
          onAnswer={handleAnswer}
        />
      );
  }
}
