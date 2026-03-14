"use client";

import { useState, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Scenario } from "@/types";
import { SCENARIO_PACKS, getScenariosForPack } from "@/data/scenarioPacks";
import { SCENARIOS } from "@/data/scenarios";
import { STYLES } from "@/data/styles";
import { useProgress } from "@/components/providers/ProgressProvider";
import { getMasteryStars } from "@/lib/progress/mastery";
import { getUnlockedScenarios } from "@/lib/progress/levelGating";
import { generateWorkout } from "@/data/workoutGenerator";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { StyleBadge } from "@/components/shared/StyleBadge";
import {
  ArrowLeft,
  Play,
  Star,
  Lock,
  CheckCircle2,
  Package,
} from "lucide-react";

type Phase = "browse" | "playing";

export default function PackDetailPage() {
  const params = useParams();
  const router = useRouter();
  const packId = params.packId as string;
  const [phase, setPhase] = useState<Phase>("browse");
  const [workoutKey, setWorkoutKey] = useState(0);
  const { progress, refreshProgress } = useProgress();

  const pack = useMemo(
    () => SCENARIO_PACKS.find((p) => p.id === packId),
    [packId]
  );

  const packScenarios = useMemo(
    () => (pack ? getScenariosForPack(pack, SCENARIOS) : []),
    [pack]
  );

  const scenarioMap = useMemo(() => {
    const map: Record<string, Scenario> = {};
    for (const s of SCENARIOS) {
      map[s.id] = s;
    }
    return map;
  }, []);

  const unlockedIds = useMemo(() => {
    if (!progress) return new Set<string>();
    const unlocked = getUnlockedScenarios(SCENARIOS, progress.totalXP);
    return new Set(unlocked.map((s) => s.id));
  }, [progress]);

  const questions = useMemo(() => {
    if (phase !== "playing" || !progress) return [];
    const unlocked = packScenarios.filter((s) => unlockedIds.has(s.id));
    if (unlocked.length === 0) return [];
    return generateWorkout(unlocked, progress.completedScenarioIds, { questionCount: 2, mixTypes: ["spot", "choose", "rewrite"] }, progress);
  }, [phase, packScenarios, progress, unlockedIds, workoutKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePlay = useCallback(() => {
    setPhase("playing");
  }, []);

  const handleRestart = useCallback(() => {
    setWorkoutKey((k) => k + 1);
    setPhase("playing");
    refreshProgress();
  }, [refreshProgress]);

  if (!pack) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div className="text-center space-y-4">
          <p className="text-white/70">Pack not found.</p>
          <Link href="/packs" className="text-[#A78BFA] hover:underline">
            Back to packs
          </Link>
        </div>
      </div>
    );
  }

  if (phase === "playing" && progress) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <WorkoutFlow
          key={workoutKey}
          questions={questions}
          scenarioMap={scenarioMap}
          onComplete={() => {}}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent =
    (LucideIcons as any)[pack.icon] ?? Package;

  // Group scenarios by difficulty
  const byDifficulty = {
    foundation: packScenarios.filter((s) => s.difficulty === "foundation"),
    intermediate: packScenarios.filter((s) => s.difficulty === "intermediate"),
    advanced: packScenarios.filter((s) => s.difficulty === "advanced"),
  };

  const unlockedPackScenarios = packScenarios.filter((s) =>
    unlockedIds.has(s.id)
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: pack.colour }}
      />

      <div className="relative max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Back */}
        <Link
          href="/packs"
          className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          All Packs
        </Link>

        {/* Pack header */}
        <div className="flex items-start gap-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: `${pack.colour}25`,
              border: `2px solid ${pack.colour}40`,
            }}
          >
            <IconComponent size={32} style={{ color: pack.colour }} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {pack.name}
            </h1>
            <p className="text-white/60 mt-1">{pack.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-sm font-bold text-white/50">
                {packScenarios.length} scenarios
              </span>
              {progress && (
                <span
                  className="text-sm font-bold"
                  style={{ color: pack.colour }}
                >
                  {
                    packScenarios.filter((s) =>
                      progress.completedScenarioIds.includes(s.id)
                    ).length
                  }
                  /{packScenarios.length} played
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Play button */}
        {unlockedPackScenarios.length > 0 && (
          <button
            onClick={handlePlay}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${pack.colour}, ${pack.colour}CC)`,
              boxShadow: `0 4px 20px ${pack.colour}40`,
            }}
          >
            <Play size={24} />
            Play This Pack
          </button>
        )}

        {/* Scenario list by difficulty */}
        {(["foundation", "intermediate", "advanced"] as const).map((diff) => {
          const scenarios = byDifficulty[diff];
          if (scenarios.length === 0) return null;

          const diffColour =
            diff === "foundation"
              ? "#58CC02"
              : diff === "intermediate"
                ? "#F59E0B"
                : "#EF4444";

          return (
            <div key={diff} className="space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    color: diffColour,
                    backgroundColor: `${diffColour}15`,
                  }}
                >
                  {diff}
                </span>
                <span className="text-xs text-white/40">
                  {scenarios.length} scenario
                  {scenarios.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-2">
                {scenarios.map((scenario) => {
                  const isUnlocked = unlockedIds.has(scenario.id);
                  const isCompleted =
                    progress?.completedScenarioIds.includes(scenario.id) ??
                    false;
                  const mastery = progress?.scenarioMastery?.[scenario.id];
                  const stars = getMasteryStars(mastery);

                  return (
                    <div
                      key={scenario.id}
                      className="flex items-center gap-3 py-3 px-4 rounded-2xl"
                      style={{
                        backgroundColor: isUnlocked
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(255,255,255,0.02)",
                        opacity: isUnlocked ? 1 : 0.5,
                      }}
                    >
                      {!isUnlocked ? (
                        <Lock size={18} className="text-white/30 flex-shrink-0" />
                      ) : isCompleted ? (
                        <CheckCircle2
                          size={18}
                          className="text-emerald-400 flex-shrink-0"
                        />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-white/20 flex-shrink-0" />
                      )}

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">
                          {scenario.title}
                        </p>
                        {mastery && (
                          <p className="text-xs text-white/40">
                            Best: {mastery.bestScore}/{mastery.bestPossible} |
                            Attempt {mastery.attempts}
                          </p>
                        )}
                      </div>

                      <StyleBadge style={scenario.targetStyle} size="sm" />

                      {isCompleted && (
                        <div className="flex gap-0.5">
                          {[1, 2, 3].map((s) => (
                            <Star
                              key={s}
                              size={14}
                              fill={
                                s <= stars ? "#FBBF24" : "transparent"
                              }
                              style={{
                                color:
                                  s <= stars
                                    ? "#FBBF24"
                                    : "rgba(255,255,255,0.15)",
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
