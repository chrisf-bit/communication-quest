"use client";

import { useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Scenario, WorkoutQuestion } from "@/types";
import { WorkoutFlow } from "@/components/workout/WorkoutFlow";
import { getDailyScenario, getTodayKey, hasCompletedDailyChallenge } from "@/lib/daily";
import { loadProgress, recordDailyChallenge } from "@/lib/progress/store";
import { SCENARIOS } from "@/data/scenarios";
import { Calendar, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DailyChallengePage() {
  const router = useRouter();
  const todayKey = getTodayKey();
  const progress = useMemo(() => loadProgress(), []);
  const completed = hasCompletedDailyChallenge(progress.completedDailyChallenges ?? [], todayKey);

  const dailyScenario = useMemo(() => getDailyScenario(SCENARIOS, todayKey), [todayKey]);

  const scenarioMap = useMemo(() => {
    const map: Record<string, Scenario> = {};
    for (const s of SCENARIOS) {
      map[s.id] = s;
    }
    return map;
  }, []);

  // Build a workout from just the daily scenario (spot -> choose -> rewrite)
  const questions: WorkoutQuestion[] = useMemo(() => {
    if (!dailyScenario) return [];
    return [
      { scenarioId: dailyScenario.id, questionType: "spot" as const, questionIndex: 0 },
      { scenarioId: dailyScenario.id, questionType: "choose" as const, questionIndex: 1 },
      { scenarioId: dailyScenario.id, questionType: "rewrite" as const, questionIndex: 2 },
    ];
  }, [dailyScenario]);

  const handleComplete = useCallback(() => {
    recordDailyChallenge(todayKey);
  }, [todayKey]);

  const handleRestart = useCallback(() => {
    router.push("/");
  }, [router]);

  if (!dailyScenario) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-white/70">No daily challenge available.</p>
        <Link href="/" className="text-[#A78BFA] hover:underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  // Already completed today
  if (completed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
        <div
          className="rounded-2xl p-8 text-center space-y-4"
          style={{
            background: "linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(5, 150, 105, 0.08))",
            border: "2px solid rgba(5, 150, 105, 0.3)",
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ backgroundColor: "rgba(5, 150, 105, 0.25)" }}
          >
            <Check size={32} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Challenge Complete!</h2>
          <p className="text-white/70">
            You have already completed today's daily challenge. Come back tomorrow for a new one.
          </p>
          {progress.currentStreak > 1 && (
            <p className="text-amber-400 font-bold">
              {progress.currentStreak}-day streak!
            </p>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            }}
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Daily challenge header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.25)" }}
        >
          <Calendar size={22} className="text-amber-400" />
        </div>
        <div>
          <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
            Daily Challenge
          </p>
          <p className="text-sm text-white/60">{todayKey}</p>
        </div>
      </div>

      <WorkoutFlow
        questions={questions}
        scenarioMap={scenarioMap}
        onComplete={handleComplete}
        onRestart={handleRestart}
      />
    </div>
  );
}
