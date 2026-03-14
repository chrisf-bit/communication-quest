"use client";

import { useState, useMemo, useCallback } from "react";
import { Scenario } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { useProgress } from "@/components/providers/ProgressProvider";
import { isDemoLimitReached, DEMO_SCENARIO_IDS } from "@/lib/demo";

import { SCENARIOS } from "@/data/scenarios";
import { generateWorkout } from "@/data/workoutGenerator";

export default function WorkoutPage() {
  const [workoutKey, setWorkoutKey] = useState(0);
  const { progress, refreshProgress } = useProgress();

  const scenarioMap = useMemo(() => {
    const map: Record<string, Scenario> = {};
    for (const s of SCENARIOS) {
      map[s.id] = s;
    }
    return map;
  }, []);

  if (!progress) return null;

  // Demo users who've used their free session see the fullscreen CTA
  if (isDemoLimitReached(progress.workoutsCompleted, progress.isDemo)) {
    return <DemoCTA variant="fullscreen" />;
  }

  // Demo users get curated scenarios; full users get adaptive, level-gated workouts
  const questions = progress.isDemo
    ? generateWorkout(
        SCENARIOS.filter((s) => DEMO_SCENARIO_IDS.includes(s.id)),
        []
      )
    : generateWorkout(SCENARIOS, progress.completedScenarioIds, undefined, progress);

  const handleComplete = () => {};

  const handleRestart = () => {
    setWorkoutKey((k) => k + 1);
    refreshProgress();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <WorkoutFlow
        key={workoutKey}
        questions={questions}
        scenarioMap={scenarioMap}
        onComplete={handleComplete}
        onRestart={handleRestart}
      />
    </div>
  );
}
