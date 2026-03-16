"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { QuestionType, Scenario, CommunicationStyle } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { VocabularyFlow } from "@/components/vocabulary/VocabularyFlow";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { SCENARIOS } from "@/data/scenarios";
import { STYLES, STYLE_LIST } from "@/data/styles";
import { generatePracticeSet } from "@/data/workoutGenerator";
import { useProgress } from "@/components/providers/ProgressProvider";
import { getStylePercentage } from "@/lib/progress/stats";
import { getUnlockedScenarios } from "@/lib/progress/levelGating";
import { isDemoLimitReached, isVocabDemoLimitReached } from "@/lib/demo";
import {
  Eye,
  MessageSquare,
  PenLine,
  BookOpen,
  ArrowLeft,
  Sparkles,
  Lock,
  Zap,
  Volume2,
  Heart,
  BarChart3,
  Shuffle,
} from "lucide-react";

const STYLE_ICONS: Record<CommunicationStyle, typeof Zap> = {
  direct: Zap,
  expressive: Volume2,
  supportive: Heart,
  analytical: BarChart3,
};

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

type PracticeStep = "mode" | "style-filter" | "playing";

export default function PracticePage() {
  const { progress } = useProgress();
  const [step, setStep] = useState<PracticeStep>("mode");
  const [selectedMode, setSelectedMode] = useState<QuestionType | null>(null);
  const [focusStyle, setFocusStyle] = useState<CommunicationStyle | null>(null);
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
    if (!selectedMode || selectedMode === "vocabulary" || step !== "playing" || !progress) return [];
    const unlocked = getUnlockedScenarios(SCENARIOS, progress.totalXP);
    return generatePracticeSet(
      unlocked,
      selectedMode,
      5,
      progress.completedScenarioIds,
      focusStyle ?? undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode, practiceKey, step, focusStyle, progress]);

  const handleRestart = useCallback(() => {
    setPracticeKey((k) => k + 1);
  }, []);

  const handleBack = useCallback(() => {
    if (step === "playing") {
      setStep("style-filter");
    } else if (step === "style-filter") {
      setStep("mode");
      setSelectedMode(null);
      setFocusStyle(null);
    } else {
      setSelectedMode(null);
    }
  }, [step]);

  const handleModeSelect = useCallback((mode: QuestionType) => {
    if (progress?.isDemo) {
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

    // Vocabulary goes straight to playing, others get style filter
    if (mode === "vocabulary") {
      setStep("playing");
    } else {
      setStep("style-filter");
    }
  }, [progress]);

  const handleStyleSelect = useCallback((style: CommunicationStyle | null) => {
    setFocusStyle(style);
    setStep("playing");
  }, []);

  if (showDemoCTA) {
    return <DemoCTA variant="fullscreen" />;
  }

  // Playing state
  if (step === "playing" && selectedMode) {
    if (selectedMode === "vocabulary") {
      return (
        <div className="min-h-screen pt-14 sm:pt-16">
          <div className="fixed top-[4.5rem] left-4 z-30">
            <button
              onClick={() => { setStep("mode"); setSelectedMode(null); }}
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
            onClick={handleBack}
            className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back
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

  if (!progress) return null;

  // Style filter step
  if (step === "style-filter" && selectedMode) {
    const modeConfig = MODES.find((m) => m.type === selectedMode);

    return (
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div
          className="pointer-events-none fixed top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full blur-[120px] opacity-20"
          style={{ background: modeConfig?.colour ?? "#7C3AED" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 py-12 space-y-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to modes
          </button>

          <div className="text-center space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Focus on a Style?
            </h1>
            <p className="text-white/70 max-w-md mx-auto">
              Practise all styles or focus on one to strengthen a specific area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* All styles option */}
            <button
              onClick={() => handleStyleSelect(null)}
              className="rounded-2xl p-5 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Shuffle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">All Styles</h3>
                  <p className="text-sm text-white/60">Mixed practice across all four styles</p>
                </div>
              </div>
            </button>

            {/* Per-style options */}
            {STYLE_LIST.map((style) => {
              const styleDef = STYLES[style];
              const StyleIcon = STYLE_ICONS[style];
              const pct = getStylePercentage(progress, style);
              const scenarioCount = SCENARIOS.filter((s) => s.targetStyle === style).length;

              return (
                <button
                  key={style}
                  onClick={() => handleStyleSelect(style)}
                  className="rounded-2xl p-5 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: `linear-gradient(135deg, ${styleDef.colour}15, ${styleDef.colour}08)`,
                    border: `2px solid ${styleDef.colour}40`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${styleDef.colour}25` }}
                    >
                      <StyleIcon size={24} style={{ color: styleDef.colour }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">{styleDef.name}</h3>
                        {pct > 0 && (
                          <span className="text-sm font-bold" style={{ color: styleDef.colour }}>
                            {pct}%
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/60">
                        {scenarioCount} scenarios
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mode selection (default)
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
        className="pointer-events-none fixed top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#7C3AED" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 right-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#FF6B6B" }}
      />
      <div
        className="pointer-events-none fixed top-1/2 right-10 w-28 h-28 sm:w-56 sm:h-56 rounded-full blur-[100px] opacity-10"
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
