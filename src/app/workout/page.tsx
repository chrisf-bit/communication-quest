"use client";

import { useState, useMemo, useCallback } from "react";
import { Scenario } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { loadProgress } from "@/lib/progress/store";
import { isDemoLimitReached, DEMO_SCENARIO_IDS } from "@/lib/demo";

// Dynamic import to avoid SSR issues with scenarios
import { SCENARIOS } from "@/data/scenarios";
import { generateWorkout } from "@/data/workoutGenerator";

export default function WorkoutPage() {
  const [workoutKey, setWorkoutKey] = useState(0);

  const scenarioMap = useMemo(() => {
    const map: Record<string, Scenario> = {};
    for (const s of SCENARIOS) {
      map[s.id] = s;
    }
    return map;
  }, []);

  const progress = useMemo(() => loadProgress(), [workoutKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // Demo users who've used their free session see the fullscreen CTA
  if (isDemoLimitReached(progress.workoutsCompleted, progress.isDemo)) {
    return <DemoCTA variant="fullscreen" />;
  }

  // Demo users get curated scenarios; full users get the normal generator
  const questions = progress.isDemo
    ? generateWorkout(
        SCENARIOS.filter((s) => DEMO_SCENARIO_IDS.includes(s.id)),
        []
      )
    : generateWorkout(SCENARIOS, progress.completedScenarioIds);

  const handleComplete = () => {};

  const handleRestart = () => {
    setWorkoutKey((k) => k + 1);
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
