"use client";

import { useProgress } from "@/components/providers/ProgressProvider";
import {
  getOverallPercentage,
  getStylePercentage,
  getStrongestStyle,
  getWeakestStyle,
  getRecentAverageScore,
} from "@/lib/progress/stats";
import { getProgressToNextLevel } from "@/lib/progress/xp";
import { CommunicationStyle, PROFICIENCY_TIERS } from "@/types";
import { STYLES, STYLE_LIST } from "@/data/styles";
import { SCENARIOS } from "@/data/scenarios";
import { SCENARIO_PACKS, getPackStats, getScenariosForPack } from "@/data/scenarioPacks";
import { getNextUnlock, getUnlockedDifficulties, getLockedScenarioCount } from "@/lib/progress/levelGating";
import { getMasteryOverview, getMasteryStars, getDueCount } from "@/lib/progress/mastery";
import { getNextMilestone } from "@/lib/daily";
import { ACHIEVEMENTS, getUnlockedAchievements } from "@/data/achievements";
import * as LucideIcons from "lucide-react";
import { StyleBadge } from "@/components/shared/StyleBadge";
import { ScoreRing } from "@/components/shared/ScoreRing";
import {
  Play,
  Trophy,
  TrendingUp,
  Flame,
  Calendar,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowRight,
  Zap,
  Shield,
  Swords,
  Crown,
  Star,
  Lock,
  Unlock,
  Package,
} from "lucide-react";
import Link from "next/link";

const LEVEL_ICONS: Record<string, typeof Star> = {
  rookie: Shield,
  "rising-star": Star,
  "sharp-shooter": Zap,
  ninja: Swords,
  jedi: Crown,
};

export default function ProgressPage() {
  const { progress } = useProgress();

  if (!progress) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <p className="text-white/90">Loading...</p>
      </div>
    );
  }

  const hasData = progress.workoutsCompleted > 0;
  const overallPct = getOverallPercentage(progress);
  const strongest = getStrongestStyle(progress);
  const weakest = getWeakestStyle(progress);
  const recentAvg = getRecentAverageScore(progress);
  const overallXP = getProgressToNextLevel(progress.totalXP);
  const OverallLevelIcon = LEVEL_ICONS[overallXP.currentTier.level] ?? Star;

  if (!hasData) {
    return (
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div
          className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
          style={{ background: "#7C3AED" }}
        />
        <div
          className="pointer-events-none fixed bottom-40 right-1/3 w-64 h-64 rounded-full blur-[120px] opacity-15"
          style={{ background: "#3B82F6" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-xl"
            style={{
              background: "rgba(124, 58, 237, 0.15)",
              border: "2px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            <BarChart3 size={36} style={{ color: "#7C3AED" }} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">No progress yet</h2>
            <p className="text-white/90">
              Complete your first session to start tracking your communication
              skills.
            </p>
          </div>
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#58CC02" }}
          >
            <Play size={24} />
            Start Playing
          </Link>
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
        className="pointer-events-none fixed top-16 left-[15%] w-72 h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "#FF6B6B" }}
      />
      <div
        className="pointer-events-none fixed top-1/3 right-[10%] w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 left-[30%] w-60 h-60 rounded-full blur-[100px] opacity-12"
        style={{ background: "#059669" }}
      />
      <div
        className="pointer-events-none fixed bottom-16 right-[25%] w-56 h-56 rounded-full blur-[100px] opacity-10"
        style={{ background: "#3B82F6" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-white">Your Progress</h1>

        {/* Overall level card */}
        <div
          className="backdrop-blur-xl rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.15))",
            border: "2px solid rgba(124, 58, 237, 0.3)",
          }}
        >
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
              }}
            >
              <OverallLevelIcon size={32} className="text-white" />
            </div>
            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Overall Level</p>
                  <p className="text-xl font-bold text-white">{overallXP.currentTier.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#7C3AED]">{progress.totalXP}</p>
                  <p className="text-xs text-white/60">Total XP</p>
                </div>
              </div>
              {overallXP.nextTier && (
                <div className="space-y-1">
                  <div
                    className="w-full h-2.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.round(overallXP.progress * 100)}%`,
                        background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                      }}
                    />
                  </div>
                  <p className="text-xs text-white/50">
                    {overallXP.nextTier.xpRequired - progress.totalXP} XP to {overallXP.nextTier.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overview stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Play, value: String(progress.workoutsCompleted), label: "Sessions", colour: "#FF6B6B" },
            { icon: null, value: `${overallPct}%`, label: "Overall", colour: "#059669", isScore: true },
            { icon: Flame, value: String(progress.currentStreak), label: "Day Streak", colour: "#F59E0B" },
            { icon: TrendingUp, value: `${recentAvg}%`, label: "Recent Avg", colour: "#3B82F6" },
          ].map(({ icon: CardIcon, value, label, colour, isScore }) => (
            <div
              key={label}
              className="backdrop-blur-xl rounded-2xl p-4 text-center space-y-1"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: colour,
              }}
            >
              {isScore ? (
                <div className="flex justify-center">
                  <ScoreRing
                    score={overallPct}
                    maxScore={100}
                    size={44}
                    strokeWidth={4}
                    colour={colour}
                    showLabel={false}
                  />
                </div>
              ) : CardIcon ? (
                <CardIcon size={26} style={{ color: colour }} className="mx-auto" />
              ) : null}
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-white/90">{label}</p>
            </div>
          ))}
        </div>

        {/* Style proficiency levels */}
        <div
          className="backdrop-blur-xl rounded-2xl p-6 space-y-5"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <h2 className="text-lg font-semibold text-white">Style Proficiency</h2>
          <div className="space-y-5">
            {STYLE_LIST.map((style) => {
              const pct = getStylePercentage(progress, style);
              const ss = progress.styleScores[style];
              const styleXP = progress.styleXP?.[style] ?? { xp: 0, level: "rookie" as const };
              const xpProg = getProgressToNextLevel(styleXP.xp);
              const tier = PROFICIENCY_TIERS.find((t) => t.level === styleXP.level) ?? PROFICIENCY_TIERS[0];
              const LevelIcon = LEVEL_ICONS[styleXP.level] ?? Star;

              return (
                <div
                  key={style}
                  className="rounded-xl p-4 space-y-3"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <StyleBadge style={style} size="sm" />
                      <div className="flex items-center gap-1.5">
                        <LevelIcon size={16} style={{ color: STYLES[style].colour }} />
                        <span className="text-sm font-bold text-white">{tier.label}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/60">{ss.attempts} attempts</span>
                      <span className="text-sm font-bold text-white">{pct}%</span>
                    </div>
                  </div>

                  {/* Accuracy bar */}
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: STYLES[style].colour,
                      }}
                    />
                  </div>

                  {/* XP progress to next level */}
                  <div className="flex items-center gap-3">
                    <Zap size={14} style={{ color: STYLES[style].colour }} />
                    <div className="flex-1">
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${Math.round(xpProg.progress * 100)}%`,
                            backgroundColor: STYLES[style].colour,
                            opacity: 0.7,
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-white/50 tabular-nums">
                      {styleXP.xp} XP
                      {xpProg.nextTier && ` / ${xpProg.nextTier.xpRequired}`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths and development */}
        <div className="grid sm:grid-cols-2 gap-4">
          {strongest && (
            <div
              className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftColor: "#059669",
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center gap-2">
                <Trophy size={24} style={{ color: "#059669" }} />
                <h3 className="font-semibold text-sm text-white">Your Strongest Style</h3>
              </div>
              <StyleBadge style={strongest} size="md" />
              <p className="text-sm text-white/90">
                You tend to read and adapt to{" "}
                <span className="font-medium capitalize text-white/75">{strongest}</span>{" "}
                communicators well. Keep refining your approach to maintain this
                strength.
              </p>
            </div>
          )}
          {weakest && weakest !== strongest && (
            <div
              className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderLeftColor: "#F59E0B",
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={24} style={{ color: "#F59E0B" }} />
                <h3 className="font-semibold text-sm text-white">Development Focus</h3>
              </div>
              <StyleBadge style={weakest} size="md" />
              <p className="text-sm text-white/90">
                Adapting to{" "}
                <span className="font-medium capitalize text-white/75">{weakest}</span>{" "}
                communicators is your biggest growth opportunity. Focus practice
                sessions here.
              </p>
            </div>
          )}
        </div>

        {/* Mastery stars overview */}
        {(() => {
          const mastery = getMasteryOverview(progress);
          const dueForReview = getDueCount(progress);
          if (mastery.totalAttempted === 0) return null;

          return (
            <div
              className="backdrop-blur-xl rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-amber-400" />
                  <h2 className="text-lg font-semibold text-white">Scenario Mastery</h2>
                </div>
                {dueForReview > 0 && (
                  <Link
                    href="/workout"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "rgba(245, 158, 11, 0.25)", border: "1px solid rgba(245, 158, 11, 0.4)" }}
                  >
                    {dueForReview} due for review
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { stars: 1, count: mastery.oneStar, label: "Started", colour: "#94A3B8" },
                  { stars: 2, count: mastery.twoStar, label: "Proficient", colour: "#F59E0B" },
                  { stars: 3, count: mastery.threeStar, label: "Mastered", colour: "#FBBF24" },
                ].map(({ stars, count, label, colour }) => (
                  <div
                    key={stars}
                    className="rounded-xl p-4 text-center space-y-1"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex justify-center gap-0.5">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < stars ? colour : "transparent"}
                          style={{ color: i < stars ? colour : "rgba(255,255,255,0.2)" }}
                        />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-white">{count}</p>
                    <p className="text-xs text-white/60">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 text-center">
                {mastery.totalAttempted} of {SCENARIOS.length} scenarios attempted
              </p>
            </div>
          );
        })()}

        {/* Unlock progress and streaks */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Unlock progress */}
          {(() => {
            const nextUnlockInfo = getNextUnlock(progress.totalXP);
            const unlockedDiffs = getUnlockedDifficulties(progress.totalXP);
            const lockedCount = getLockedScenarioCount(SCENARIOS, progress.totalXP);

            return (
              <div
                className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Unlock size={20} className="text-[#A78BFA]" />
                  <h3 className="font-semibold text-sm text-white">Scenario Unlocks</h3>
                </div>
                <div className="space-y-2">
                  {(["foundation", "intermediate", "advanced"] as const).map((diff) => {
                    const isUnlocked = unlockedDiffs.includes(diff);
                    return (
                      <div key={diff} className="flex items-center gap-2">
                        {isUnlocked ? (
                          <CheckCircle2 size={16} className="text-emerald-400" />
                        ) : (
                          <Lock size={16} className="text-white/30" />
                        )}
                        <span className={`text-sm capitalize ${isUnlocked ? "text-white" : "text-white/40"}`}>
                          {diff}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {nextUnlockInfo && (
                  <p className="text-xs text-white/50">
                    {nextUnlockInfo.xpNeeded} XP to unlock {nextUnlockInfo.difficulty}
                  </p>
                )}
                {lockedCount > 0 && (
                  <p className="text-xs text-white/40">
                    {lockedCount} scenario{lockedCount !== 1 ? "s" : ""} still locked
                  </p>
                )}
              </div>
            );
          })()}

          {/* Streak info */}
          <div
            className="backdrop-blur-xl rounded-2xl p-5 space-y-3"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-amber-400" />
              <h3 className="font-semibold text-sm text-white">Streaks</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">{progress.currentStreak}</p>
                <p className="text-xs text-white/60">Current</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{progress.longestStreak ?? progress.currentStreak}</p>
                <p className="text-xs text-white/60">Longest</p>
              </div>
            </div>
            {(() => {
              const nextMilestone = getNextMilestone(progress.currentStreak);
              if (!nextMilestone) return null;
              const daysLeft = nextMilestone.days - progress.currentStreak;
              return (
                <div className="text-center">
                  <p className="text-xs text-white/50">
                    {daysLeft} {daysLeft === 1 ? "day" : "days"} to {nextMilestone.label} (+{nextMilestone.xpBonus} XP)
                  </p>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Scenario packs */}
        {(() => {
          const packsWithData = SCENARIO_PACKS
            .map((pack) => {
              const packScenarios = getScenariosForPack(pack, SCENARIOS);
              const threeStarCount = packScenarios.filter(
                (s) => getMasteryStars(progress.scenarioMastery?.[s.id]) === 3
              ).length;
              return {
                pack,
                stats: getPackStats(pack, SCENARIOS, progress.completedScenarioIds),
                threeStarCount,
                totalInPack: packScenarios.length,
              };
            })
            .filter(({ stats }) => stats.total > 0);

          if (packsWithData.length === 0) return null;

          return (
            <div
              className="backdrop-blur-xl rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="flex items-center gap-2">
                <Package size={20} className="text-[#A78BFA]" />
                <h2 className="text-lg font-semibold text-white">Scenario Packs</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {packsWithData.map(({ pack, stats, threeStarCount, totalInPack }) => (
                  <div
                    key={pack.id}
                    className="rounded-xl p-4 space-y-2"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">{pack.name}</h3>
                      <div className="flex items-center gap-2">
                        {threeStarCount > 0 && (
                          <span className="flex items-center gap-0.5 text-xs text-amber-400">
                            <Star size={12} fill="#FBBF24" />
                            {threeStarCount}/{totalInPack}
                          </span>
                        )}
                        <span className="text-xs font-bold" style={{ color: pack.colour }}>
                          {stats.completed}/{stats.total}
                        </span>
                      </div>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${stats.percentage}%`,
                          backgroundColor: pack.colour,
                        }}
                      />
                    </div>
                    <p className="text-xs text-white/50">{pack.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Achievements */}
        {(() => {
          const unlocked = getUnlockedAchievements(progress);
          const locked = ACHIEVEMENTS.filter((a) => !a.check(progress));
          const IconMap = LucideIcons as unknown as Record<string, typeof Star>;

          return (
            <div
              className="backdrop-blur-xl rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy size={20} className="text-amber-400" />
                  <h2 className="text-lg font-semibold text-white">Achievements</h2>
                </div>
                <span className="text-xs text-white/50">
                  {unlocked.length}/{ACHIEVEMENTS.length}
                </span>
              </div>

              {/* Unlocked */}
              {unlocked.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {unlocked.map((a) => {
                    const AIcon = IconMap[a.icon] ?? Star;
                    return (
                      <div
                        key={a.id}
                        className="rounded-xl p-3 text-center space-y-1"
                        style={{
                          background: `${a.colour}15`,
                          border: `1px solid ${a.colour}40`,
                        }}
                      >
                        <AIcon size={24} style={{ color: a.colour }} className="mx-auto" />
                        <p className="text-xs font-bold text-white">{a.name}</p>
                        <p className="text-[10px] text-white/50">{a.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Next locked achievements (show up to 3) */}
              {locked.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">Next to unlock</p>
                  {locked.slice(0, 3).map((a) => {
                    const AIcon = IconMap[a.icon] ?? Star;
                    return (
                      <div
                        key={a.id}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <AIcon size={18} className="text-white/20 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white/40">{a.name}</p>
                          <p className="text-[10px] text-white/25">{a.description}</p>
                        </div>
                        <Lock size={14} className="text-white/15 flex-shrink-0" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

        {/* Session history */}
        {progress.sessions.length > 0 && (
          <div
            className="backdrop-blur-xl rounded-2xl p-6 space-y-4"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <h2 className="text-lg font-semibold text-white">Recent Sessions</h2>
            <div className="space-y-1">
              {progress.sessions.slice(0, 10).map((session) => {
                const pct = session.maxScore > 0
                  ? Math.round((session.totalScore / session.maxScore) * 100)
                  : 0;
                const date = new Date(session.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                });

                return (
                  <div
                    key={session.id}
                    className="flex items-center gap-3 py-3 rounded-xl px-3"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Calendar size={18} className="text-white/90" />
                      <span className="text-xs text-white/90 w-12">
                        {date}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium capitalize text-white">
                          {session.type}
                        </span>
                        <span className="text-xs text-white/90">
                          {session.questions.length} questions
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {session.questions.map((q, i) => (
                          <span key={i}>
                            {q.result === "strong" && (
                              <CheckCircle2 size={16} className="text-emerald-400" />
                            )}
                            {q.result === "partial" && (
                              <AlertCircle size={16} className="text-amber-400" />
                            )}
                            {q.result === "weak" && (
                              <XCircle size={16} className="text-rose-400" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-white">{pct}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center py-4">
          <Link
            href="/workout"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#58CC02" }}
          >
            <Play size={24} />
            Play Again
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
