"use client";

import { useState, useCallback, useMemo } from "react";
import {
  WorkoutQuestion,
  QuestionAnswer,
  Scenario,
  CommunicationStyle,
} from "@/types";
import { getCharacter } from "@/data/characters";
import { scoreSpotTheStyle, scoreChooseBestResponse } from "@/lib/scoring/spotAndChooseScorer";
import { heuristicEvaluator } from "@/lib/scoring/heuristicEvaluator";
import { recordSession } from "@/lib/progress/store";
import { generateId } from "@/lib/utils";
import { SpotTheStyle } from "./SpotTheStyle";
import { ChooseBestResponse } from "./ChooseBestResponse";
import { RewriteResponse } from "./RewriteResponse";
import { ScenarioFeedback } from "./ScenarioFeedback";
import { WorkoutSummary } from "./WorkoutSummary";
import { MessageCircle, ArrowRight } from "lucide-react";

interface WorkoutFlowProps {
  questions: WorkoutQuestion[];
  scenarioMap: Record<string, Scenario>;
  onComplete: () => void;
  onRestart: () => void;
}

type Phase = "intro" | "question" | "scenario-feedback" | "summary";

export function WorkoutFlow({
  questions,
  scenarioMap,
  onComplete,
  onRestart,
}: WorkoutFlowProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  const [lastEvaluation, setLastEvaluation] = useState<{
    detectedTraits?: string[];
    missingTraits?: string[];
  }>({});

  // Group questions by scenario for multi-turn flow
  const scenarioGroups = useMemo(() => {
    const groups: WorkoutQuestion[][] = [];
    let current: WorkoutQuestion[] = [];
    for (const q of questions) {
      if (current.length > 0 && current[0].scenarioId !== q.scenarioId) {
        groups.push(current);
        current = [];
      }
      current.push(q);
    }
    if (current.length > 0) groups.push(current);
    return groups;
  }, [questions]);

  // Which scenario group and position within it
  const currentGroupIndex = useMemo(() => {
    let count = 0;
    for (let g = 0; g < scenarioGroups.length; g++) {
      count += scenarioGroups[g].length;
      if (currentIndex < count) return g;
    }
    return scenarioGroups.length - 1;
  }, [currentIndex, scenarioGroups]);

  const currentGroup = scenarioGroups[currentGroupIndex] || [];
  const positionInGroup = currentIndex - scenarioGroups
    .slice(0, currentGroupIndex)
    .reduce((sum, g) => sum + g.length, 0);
  const isLastInGroup = positionInGroup >= currentGroup.length - 1;

  const currentQuestion = questions[currentIndex];
  const currentScenario = currentQuestion
    ? scenarioMap[currentQuestion.scenarioId]
    : null;
  const currentCharacter = currentScenario
    ? getCharacter(currentScenario.characterId)
    : null;

  // Get answers for the current scenario group
  const currentGroupAnswers = useMemo(() => {
    if (!currentGroup.length) return [];
    const scenarioId = currentGroup[0].scenarioId;
    return answers.filter((a) => a.scenarioId === scenarioId);
  }, [answers, currentGroup]);

  const handleSpotAnswer = useCallback(
    (selectedStyle: CommunicationStyle) => {
      if (!currentScenario || !currentQuestion) return;
      const result = scoreSpotTheStyle(selectedStyle, currentScenario);
      const answer: QuestionAnswer = {
        scenarioId: currentQuestion.scenarioId,
        questionType: "spot",
        userAnswer: selectedStyle,
        score: result.score,
        maxScore: result.maxScore,
        result: result.result,
        feedback: result.feedback,
        answeredAt: new Date().toISOString(),
      };
      setAnswers((prev) => [...prev, answer]);
      setLastEvaluation({});

      if (isLastInGroup) {
        setPhase("scenario-feedback");
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentScenario, currentQuestion, isLastInGroup]
  );

  const handleChooseAnswer = useCallback(
    (optionId: string) => {
      if (!currentScenario || !currentQuestion) return;
      const result = scoreChooseBestResponse(optionId, currentScenario);
      const answer: QuestionAnswer = {
        scenarioId: currentQuestion.scenarioId,
        questionType: "choose",
        userAnswer: optionId,
        score: result.score,
        maxScore: result.maxScore,
        result: result.result,
        feedback: result.feedback,
        answeredAt: new Date().toISOString(),
      };
      setAnswers((prev) => [...prev, answer]);
      setLastEvaluation({});

      if (isLastInGroup) {
        setPhase("scenario-feedback");
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentScenario, currentQuestion, isLastInGroup]
  );

  const handleRewriteAnswer = useCallback(
    (text: string) => {
      if (!currentScenario || !currentQuestion) return;
      const evaluation = heuristicEvaluator.evaluate(
        text,
        currentScenario.targetStyle,
        currentScenario
      );
      const answer: QuestionAnswer = {
        scenarioId: currentQuestion.scenarioId,
        questionType: "rewrite",
        userAnswer: text,
        score: evaluation.score,
        maxScore: evaluation.maxScore,
        result: evaluation.result,
        feedback: evaluation.feedback,
        answeredAt: new Date().toISOString(),
      };
      setAnswers((prev) => [...prev, answer]);
      setLastEvaluation({
        detectedTraits: evaluation.detectedTraits,
        missingTraits: evaluation.missingTraits,
      });

      if (isLastInGroup) {
        setPhase("scenario-feedback");
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentScenario, currentQuestion, isLastInGroup]
  );

  const handleScenarioContinue = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      // All scenarios done - save session
      const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
      const maxScore = answers.reduce((sum, a) => sum + a.maxScore, 0);

      const scenarioStyles: Record<string, CommunicationStyle> = {};
      for (const q of questions) {
        const s = scenarioMap[q.scenarioId];
        if (s) scenarioStyles[q.scenarioId] = s.targetStyle;
      }

      recordSession(
        {
          id: generateId(),
          date: new Date().toISOString(),
          type: "workout",
          questions: answers,
          totalScore,
          maxScore,
        },
        scenarioStyles
      );

      setPhase("summary");
      onComplete();
    } else {
      setCurrentIndex(nextIndex);
      setPhase("question");
    }
  }, [currentIndex, questions, answers, scenarioMap, onComplete]);

  // Count question types for intro tags
  const questionTypeCounts = useMemo(
    () => ({
      spot: questions.filter((q) => q.questionType === "spot").length,
      choose: questions.filter((q) => q.questionType === "choose").length,
      rewrite: questions.filter((q) => q.questionType === "rewrite").length,
    }),
    [questions]
  );

  const scenarioCount = scenarioGroups.length;

  if (phase === "intro") {
    return (
      <div
        className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
          animation: "fade-up 0.5s ease-out",
        }}
      >
        {/* Style colour glow orbs - matching landing page */}
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

        {/* Decorative geometric shapes */}
        <svg
          className="absolute top-12 right-12 opacity-[0.06]"
          width="100"
          height="100"
          viewBox="0 0 80 80"
        >
          <circle cx="40" cy="40" r="36" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute bottom-12 left-12 opacity-[0.05]"
          width="80"
          height="80"
          viewBox="0 0 60 60"
        >
          <rect x="8" y="8" width="44" height="44" rx="10" fill="none" stroke="white" strokeWidth="2" transform="rotate(12 30 30)" />
        </svg>
        <div className="absolute top-16 left-20 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute top-28 right-20 w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="absolute bottom-20 right-28 w-2.5 h-2.5 rounded-full bg-white/10" />

        <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 8px 32px rgba(88, 204, 2, 0.4)",
            }}
          >
            <MessageCircle size={48} className="text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to play?
          </h2>
          <p className="text-lg text-white/75 font-medium max-w-md mx-auto">
            {scenarioCount} scenario{scenarioCount !== 1 ? "s" : ""}, {questions.length} questions - about {Math.ceil(questions.length * 1.5)} minutes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {questionTypeCounts.spot > 0 && (
              <span
                className="px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ color: "#FF6B6B", backgroundColor: "rgba(255,107,107,0.15)", border: "2px solid rgba(255,107,107,0.3)" }}
              >
                Spot the Style
              </span>
            )}
            {questionTypeCounts.choose > 0 && (
              <span
                className="px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ color: "#F59E0B", backgroundColor: "rgba(245,158,11,0.15)", border: "2px solid rgba(245,158,11,0.3)" }}
              >
                Choose Response
              </span>
            )}
            {questionTypeCounts.rewrite > 0 && (
              <span
                className="px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ color: "#059669", backgroundColor: "rgba(5,150,105,0.15)", border: "2px solid rgba(5,150,105,0.3)" }}
              >
                Write Response
              </span>
            )}
          </div>
          <p className="text-sm text-white/90 font-medium max-w-sm mx-auto">
            Each scenario has 3 questions - you&apos;ll see your score after completing all three
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined" && window.speechSynthesis) {
                const warmup = new SpeechSynthesisUtterance("");
                warmup.volume = 0;
                window.speechSynthesis.speak(warmup);
              }
              setPhase("question");
            }}
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

  if (phase === "summary") {
    return (
      <WorkoutSummary
        answers={answers}
        scenarios={scenarioMap}
        onRetry={onRestart}
      />
    );
  }

  if (phase === "scenario-feedback" && currentScenario) {
    return (
      <ScenarioFeedback
        answers={currentGroupAnswers}
        scenario={currentScenario}
        scenarioNumber={currentGroupIndex + 1}
        totalScenarios={scenarioCount}
        detectedTraits={lastEvaluation.detectedTraits}
        missingTraits={lastEvaluation.missingTraits}
        onContinue={handleScenarioContinue}
      />
    );
  }

  if (!currentScenario || !currentCharacter || !currentQuestion) {
    return (
      <div className="text-center text-muted-foreground">Loading...</div>
    );
  }

  return (
    <div>
      {phase === "question" && (
        <>
          {currentQuestion.questionType === "spot" && (
            <SpotTheStyle
              scenario={currentScenario}
              character={currentCharacter}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleSpotAnswer}
            />
          )}
          {currentQuestion.questionType === "choose" && (
            <ChooseBestResponse
              scenario={currentScenario}
              character={currentCharacter}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleChooseAnswer}
            />
          )}
          {currentQuestion.questionType === "rewrite" && (
            <RewriteResponse
              scenario={currentScenario}
              character={currentCharacter}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleRewriteAnswer}
            />
          )}
        </>
      )}
    </div>
  );
}
