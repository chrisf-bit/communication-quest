"use client";

import { useState, useMemo, useCallback } from "react";
import { Scenario } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { loadProgress } from "@/lib/progress/store";

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

  const questions = useMemo(() => {
    const progress = loadProgress();
    return generateWorkout(SCENARIOS, progress.completedScenarioIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workoutKey]);

  const handleComplete = useCallback(() => {
    // Workout complete - summary shown by WorkoutFlow
  }, []);

  const handleRestart = useCallback(() => {
    setWorkoutKey((k) => k + 1);
  }, []);

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
