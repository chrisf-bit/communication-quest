"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { QuestionType, Scenario } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { VocabularyFlow } from "@/components/vocabulary/VocabularyFlow";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { SCENARIOS } from "@/data/scenarios";
import { generatePracticeSet } from "@/data/workoutGenerator";
import { loadProgress } from "@/lib/progress/store";
import { isDemoLimitReached, isVocabDemoLimitReached } from "@/lib/demo";
import { Eye, MessageSquare, PenLine, BookOpen, ArrowLeft, Sparkles, Lock } from "lucide-react";

const MODES: {
  type: QuestionType;
  label: string;
  description: string;
  icon: typeof Eye;
  colour: string;
  colourBg: string;
}[] = [
  {
    type: "spot",
    label: "Spot the Style",
    description:
      "Focus on reading behavioural cues and identifying communication styles.",
    icon: Eye,
    colour: "#FF6B6B",
    colourBg: "rgba(255, 107, 107, 0.15)",
  },
  {
    type: "choose",
    label: "Choose the Best Response",
    description:
      "Practise selecting the most effective response for each style.",
    icon: MessageSquare,
    colour: "#F59E0B",
    colourBg: "rgba(245, 158, 11, 0.15)",
  },
  {
    type: "rewrite",
    label: "Write Your Response",
    description:
      "Compose your own style-adapted responses and get coaching feedback.",
    icon: PenLine,
    colour: "#059669",
    colourBg: "rgba(5, 150, 105, 0.15)",
  },
  {
    type: "vocabulary",
    label: "Vocabulary Mode",
    description:
      "Learn the words and language patterns each communication style typically uses.",
    icon: BookOpen,
    colour: "#7C3AED",
    colourBg: "rgba(124, 58, 237, 0.15)",
  },
];

export default function PracticePage() {
  const [selectedMode, setSelectedMode] = useState<QuestionType | null>(null);
  const [practiceKey, setPracticeKey] = useState(0);
  const [showDemoCTA, setShowDemoCTA] = useState(false);

  const scenarioMap = useMemo(() => {
    const map: Record<string, Scenario> = {};
    for (const s of SCENARIOS) {
      map[s.id] = s;
    }
    return map;
  }, []);

  const questions = useMemo(() => {
    if (!selectedMode || selectedMode === "vocabulary") return [];
    const progress = loadProgress();
    return generatePracticeSet(
      SCENARIOS,
      selectedMode,
      5,
      progress.completedScenarioIds
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode, practiceKey]);

  const handleRestart = useCallback(() => {
    setPracticeKey((k) => k + 1);
  }, []);

  const handleModeSelect = useCallback((mode: QuestionType) => {
    const progress = loadProgress();
    if (progress.isDemo) {
      if (mode === "vocabulary") {
        if (isVocabDemoLimitReached(progress.sessions, true)) {
          setShowDemoCTA(true);
          return;
        }
      } else {
        if (isDemoLimitReached(progress.workoutsCompleted, true)) {
          setShowDemoCTA(true);
          return;
        }
      }
    }
    setSelectedMode(mode);
  }, []);

  if (showDemoCTA) {
    return <DemoCTA variant="fullscreen" />;
  }

  if (selectedMode) {
    // Vocabulary mode has its own flow
    if (selectedMode === "vocabulary") {
      return (
        <div className="min-h-screen">
          <div className="absolute top-4 left-4 z-50">
            <button
              onClick={() => setSelectedMode(null)}
              className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to modes
            </button>
          </div>
          <VocabularyFlow
            key={practiceKey}
            onComplete={() => {}}
            onRestart={handleRestart}
          />
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
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => setSelectedMode(null)}
            className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to modes
          </button>
          <WorkoutFlow
            key={practiceKey}
            questions={questions}
            scenarioMap={scenarioMap}
            onComplete={() => {}}
            onRestart={handleRestart}
          />
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
      {/* Glow orbs */}
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#7C3AED" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#FF6B6B" }}
      />
      <div
        className="pointer-events-none fixed top-1/2 right-10 w-56 h-56 rounded-full blur-[100px] opacity-10"
        style={{ background: "#059669" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-12 space-y-10">
        {/* Hero section */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles size={30} className="text-[#7C3AED]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Practice Modes
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Choose a specific skill to train. Each session includes 5 challenges.
          </p>
        </div>

        {/* Mode cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODES.map(({ type, label, description, icon: Icon, colour, colourBg }) => {
            const progress = loadProgress();
            const isLocked = progress.isDemo && (
              type === "vocabulary"
                ? isVocabDemoLimitReached(progress.sessions, true)
                : isDemoLimitReached(progress.workoutsCompleted, true)
            );

            return (
            <button
              key={type}
              onClick={() => handleModeSelect(type)}
              className="backdrop-blur-xl rounded-2xl p-6 text-left space-y-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] cursor-pointer group"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${colour}80`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${colour}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="p-3 rounded-xl inline-flex"
                style={{ backgroundColor: colourBg }}
              >
                <Icon size={30} style={{ color: colour }} />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg text-white">{label}</h3>
                {isLocked && <Lock size={16} className="text-white/50" />}
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                {isLocked ? "Sign up to unlock this mode" : description}
              </p>
            </button>
            );
          })}
        </div>

        {/* Mixed session link */}
        <div className="text-center">
          <p className="text-white/90 text-sm">
            Or try a{" "}
            <Link
              href="/workout"
              className="font-semibold text-[#58CC02] hover:underline transition-colors"
            >
              mixed session
            </Link>{" "}
            that combines all three modes.
          </p>
        </div>
      </div>
    </div>
  );
}
