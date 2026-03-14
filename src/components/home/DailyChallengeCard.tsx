"use client";

import { useMemo } from "react";
import Link from "next/link";
import { UserProgress, Scenario } from "@/types";
import { getDailyScenario, getTodayKey, hasCompletedDailyChallenge, getNextMilestone } from "@/lib/daily";
import { STYLES } from "@/data/styles";
import { Calendar, Check, Flame, ArrowRight, Trophy } from "lucide-react";

interface DailyChallengeCardProps {
  progress: UserProgress;
  scenarios: Scenario[];
}

export function DailyChallengeCard({ progress, scenarios }: DailyChallengeCardProps) {
  const todayKey = getTodayKey();
  const dailyScenario = useMemo(() => getDailyScenario(scenarios, todayKey), [scenarios, todayKey]);
  const completed = hasCompletedDailyChallenge(progress.completedDailyChallenges ?? [], todayKey);
  const nextMilestone = getNextMilestone(progress.currentStreak);

  if (!dailyScenario) return null;

  const styleDef = STYLES[dailyScenario.targetStyle];
  const streakDaysRemaining = nextMilestone ? nextMilestone.days - progress.currentStreak : 0;

  if (completed) {
    return (
      <div
        className="rounded-2xl p-5"
        style={{
          background: "linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(5, 150, 105, 0.08))",
          border: "2px solid rgba(5, 150, 105, 0.3)",
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(5, 150, 105, 0.25)" }}
          >
            <Check size={24} className="text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white">Daily Challenge Complete</p>
            <p className="text-sm text-white/70 mt-0.5">
              {progress.currentStreak > 1 ? (
                <>
                  <Flame size={14} className="inline text-amber-400 mr-1" />
                  {progress.currentStreak}-day streak!
                  {nextMilestone && (
                    <span className="text-white/50">
                      {" "}
                      - {streakDaysRemaining} more {streakDaysRemaining === 1 ? "day" : "days"} to {nextMilestone.label} (+{nextMilestone.xpBonus} XP)
                    </span>
                  )}
                </>
              ) : (
                "Come back tomorrow to start a streak"
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/daily"
      className="block rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.08))",
        border: "2px solid rgba(245, 158, 11, 0.4)",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.25)" }}
        >
          <Calendar size={24} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-white">Daily Challenge</p>
            {progress.currentStreak > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400">
                <Flame size={12} />
                {progress.currentStreak}
              </span>
            )}
          </div>
          <p className="text-sm text-white/70 mt-0.5">
            {dailyScenario.title}
          </p>
        </div>
        {nextMilestone && progress.currentStreak > 0 && (
          <div className="flex-shrink-0 text-right hidden sm:block">
            <div className="flex items-center gap-1 text-xs text-amber-400/70">
              <Trophy size={12} />
              <span>{nextMilestone.label}</span>
            </div>
            <p className="text-xs text-white/40 mt-0.5">
              in {streakDaysRemaining} {streakDaysRemaining === 1 ? "day" : "days"}
            </p>
          </div>
        )}
        <ArrowRight size={20} className="text-white/50 flex-shrink-0" />
      </div>
    </Link>
  );
}
