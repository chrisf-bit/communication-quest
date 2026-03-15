"use client";

import { useState, useEffect, useCallback } from "react";
import { useOptionalAuth } from "@/components/providers/AuthProvider";
import { STYLES, STYLE_LIST } from "@/data/styles";
import { CommunicationStyle } from "@/types";
import {
  Users,
  BarChart3,
  Zap,
  Heart,
  Volume2,
  TrendingUp,
  Shield,
  Star,
  Swords,
  Crown,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Flame,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// =============================================
// Types
// =============================================

interface CohortSummary {
  id: string;
  name: string;
  orgName: string;
  seatLimit: number;
  seatsUsed: number;
  startsAt: string;
  expiresAt: string;
  joinCode: string;
}

interface Learner {
  userId: string;
  email: string;
  joinedAt: string | null;
  totalXP: number;
  workoutsCompleted: number;
  totalScore: number;
  totalPossibleScore: number;
  currentStreak: number;
  longestStreak: number;
  lastSessionDate: string | null;
  hasCompletedAssessment: boolean;
  styleScores: Record<CommunicationStyle, { attempts: number; correctIdentifications: number; totalScore: number; totalPossible: number }>;
  styleXP: Record<CommunicationStyle, { xp: number; level: string }>;
  assessmentProfile?: {
    styleScores: Record<CommunicationStyle, number>;
    strongestStyle: CommunicationStyle | null;
    weakestStyle: CommunicationStyle | null;
    correctCount: number;
  };
  completedScenarioIds: string[];
  sessions: { date: string; totalScore: number; maxScore: number }[];
}

interface CohortData {
  cohort: {
    id: string;
    name: string;
    seatLimit: number;
    startsAt: string;
    expiresAt: string;
    joinCode: string;
  };
  learners: Learner[];
  totalSeats: number;
  seatsUsed: number;
}

type Tab = "overview" | "learners" | "insights";
type LearnerSort = "email" | "xp" | "workouts" | "accuracy" | "lastActive";

const STYLE_ICONS: Record<CommunicationStyle, typeof Zap> = {
  direct: Zap,
  expressive: Volume2,
  supportive: Heart,
  analytical: BarChart3,
};

const LEVEL_ICONS: Record<string, typeof Star> = {
  rookie: Shield,
  "rising-star": Star,
  "sharp-shooter": Zap,
  ninja: Swords,
  jedi: Crown,
};

// =============================================
// Dashboard Page
// =============================================

export default function FacilitatorPage() {
  const auth = useOptionalAuth();
  const [cohorts, setCohorts] = useState<CohortSummary[]>([]);
  const [selectedCohortId, setSelectedCohortId] = useState<string | null>(null);
  const [cohortData, setCohortData] = useState<CohortData | null>(null);
  const [isFacilitator, setIsFacilitator] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("overview");

  // Load cohort list
  useEffect(() => {
    if (!auth?.user) return;

    fetch("/api/facilitator/cohorts")
      .then((r) => r.json())
      .then((data) => {
        setIsFacilitator(data.isFacilitator);
        setCohorts(data.cohorts || []);
        if (data.cohorts?.length > 0) {
          setSelectedCohortId(data.cohorts[0].id);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [auth?.user]);

  // Load cohort detail when selected
  useEffect(() => {
    if (!selectedCohortId) return;

    fetch(`/api/facilitator/cohort?cohortId=${selectedCohortId}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setCohortData(data);
      });
  }, [selectedCohortId]);

  if (!auth?.user) {
    return <AccessDenied message="Please sign in to access the facilitator dashboard." />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isFacilitator || cohorts.length === 0) {
    return <AccessDenied message="No cohorts found. You need facilitator access to view this dashboard." />;
  }

  if (!cohortData) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)]"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "#7C3AED" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-10"
        style={{ background: "#58CC02" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Facilitator Dashboard</h1>
            <p className="text-sm text-white/60 mt-1">{cohortData.cohort.name}</p>
          </div>

          <div className="flex items-center gap-2">
            {auth?.user?.email === "chris@rapid-learn.co.uk" && (
              <a
                href="/admin"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
              >
                <Target size={16} />
                Admin
              </a>
            )}
          </div>

          {/* Cohort selector */}
          {cohorts.length > 1 && (
            <select
              value={selectedCohortId || ""}
              onChange={(e) => setSelectedCohortId(e.target.value)}
              className="rounded-xl px-4 py-2 text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              {cohorts.map((c) => (
                <option key={c.id} value={c.id}>{c.name} ({c.orgName})</option>
              ))}
            </select>
          )}
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
          {([
            { id: "overview" as Tab, label: "Overview", icon: TrendingUp },
            { id: "learners" as Tab, label: "Learners", icon: Users },
            { id: "insights" as Tab, label: "Insights", icon: Target },
          ]).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                tab === id
                  ? "bg-[#7C3AED] text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "overview" && <OverviewTab data={cohortData} />}
        {tab === "learners" && <LearnersTab data={cohortData} />}
        {tab === "insights" && <InsightsTab data={cohortData} />}
      </div>
    </div>
  );
}

// =============================================
// Overview Tab
// =============================================

function OverviewTab({ data }: { data: CohortData }) {
  const { learners, cohort } = data;
  const [copied, setCopied] = useState(false);

  const activeLearners = learners.filter((l) => l.workoutsCompleted > 0);
  const assessedLearners = learners.filter((l) => l.hasCompletedAssessment);
  const totalWorkouts = learners.reduce((sum, l) => sum + l.workoutsCompleted, 0);
  const avgAccuracy = learners.length > 0
    ? learners.reduce((sum, l) => {
        const pct = l.totalPossibleScore > 0 ? (l.totalScore / l.totalPossibleScore) * 100 : 0;
        return sum + pct;
      }, 0) / learners.length
    : 0;
  const avgXP = learners.length > 0
    ? Math.round(learners.reduce((sum, l) => sum + l.totalXP, 0) / learners.length)
    : 0;

  const daysRemaining = Math.max(0, Math.ceil(
    (new Date(cohort.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  ));

  const joinUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/join/${cohort.joinCode}`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(joinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [joinUrl]);

  // Aggregate style scores
  const styleAverages: Record<CommunicationStyle, number> = { direct: 0, expressive: 0, supportive: 0, analytical: 0 };
  const styleAttemptCounts: Record<CommunicationStyle, number> = { direct: 0, expressive: 0, supportive: 0, analytical: 0 };

  for (const l of learners) {
    for (const style of STYLE_LIST) {
      const ss = l.styleScores?.[style];
      if (ss && ss.totalPossible > 0) {
        styleAverages[style] += (ss.totalScore / ss.totalPossible) * 100;
        styleAttemptCounts[style]++;
      }
    }
  }
  for (const style of STYLE_LIST) {
    if (styleAttemptCounts[style] > 0) {
      styleAverages[style] = Math.round(styleAverages[style] / styleAttemptCounts[style]);
    }
  }

  return (
    <div className="space-y-6">
      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <MetricCard icon={Users} label="Learners" value={`${data.seatsUsed}/${cohort.seatLimit}`} color="#7C3AED" />
        <MetricCard icon={CheckCircle2} label="Active" value={String(activeLearners.length)} color="#58CC02" />
        <MetricCard icon={Target} label="Assessed" value={String(assessedLearners.length)} color="#F59E0B" />
        <MetricCard icon={Flame} label="Workouts" value={String(totalWorkouts)} color="#FF6B6B" />
        <MetricCard icon={TrendingUp} label="Avg Accuracy" value={`${Math.round(avgAccuracy)}%`} color="#3B82F6" />
        <MetricCard icon={Clock} label="Days Left" value={String(daysRemaining)} color={daysRemaining <= 7 ? "#FF6B6B" : "#059669"} />
      </div>

      {/* Group style profile + join link */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Style profile */}
        <div
          className="lg:col-span-2 rounded-2xl p-5 space-y-4"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Group Style Profile
          </h3>
          {STYLE_LIST.map((style) => {
            const def = STYLES[style];
            const Icon = STYLE_ICONS[style];
            const pct = styleAverages[style];
            return (
              <div key={style} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={16} style={{ color: def.colour }} />
                    <span className="text-sm font-bold text-white">{def.name}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: def.colour }}>
                    {pct}%
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.max(pct, 3)}%`,
                      background: `linear-gradient(90deg, ${def.colour}, ${def.colour}BB)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
          {activeLearners.length === 0 && (
            <p className="text-sm text-white/50 italic">No learner data yet - style profile will appear once learners complete workouts.</p>
          )}
        </div>

        {/* Join link + cohort info */}
        <div className="space-y-4">
          <div
            className="rounded-2xl p-5 space-y-3"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
              Invite Link
            </h3>
            <p className="text-xs text-white/50 break-all">{joinUrl}</p>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: copied
                  ? "linear-gradient(135deg, #059669, #047857)"
                  : "linear-gradient(135deg, #7C3AED, #6D28D9)",
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy Link"}
            </button>
          </div>

          <div
            className="rounded-2xl p-5 space-y-2"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
              Cohort Details
            </h3>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Avg XP</span>
                <span className="text-white font-bold">{avgXP}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Starts</span>
                <span className="text-white font-bold">{new Date(cohort.startsAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Expires</span>
                <span className="text-white font-bold">{new Date(cohort.expiresAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================
// Learners Tab
// =============================================

function LearnersTab({ data }: { data: CohortData }) {
  const { learners } = data;
  const [sortBy, setSortBy] = useState<LearnerSort>("xp");
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleSort = useCallback((field: LearnerSort) => {
    if (sortBy === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(field);
      setSortAsc(false);
    }
  }, [sortBy, sortAsc]);

  const sorted = [...learners].sort((a, b) => {
    let diff = 0;
    switch (sortBy) {
      case "email":
        diff = a.email.localeCompare(b.email);
        break;
      case "xp":
        diff = a.totalXP - b.totalXP;
        break;
      case "workouts":
        diff = a.workoutsCompleted - b.workoutsCompleted;
        break;
      case "accuracy": {
        const aPct = a.totalPossibleScore > 0 ? a.totalScore / a.totalPossibleScore : 0;
        const bPct = b.totalPossibleScore > 0 ? b.totalScore / b.totalPossibleScore : 0;
        diff = aPct - bPct;
        break;
      }
      case "lastActive":
        diff = (a.lastSessionDate || "").localeCompare(b.lastSessionDate || "");
        break;
    }
    return sortAsc ? diff : -diff;
  });

  const SortIcon = sortAsc ? ChevronUp : ChevronDown;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        border: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* Table header */}
      <div className="grid grid-cols-[1fr_80px_80px_80px_100px] gap-2 px-5 py-3 text-xs font-bold text-white/50 uppercase tracking-wider border-b border-white/10">
        <SortHeader label="Learner" field="email" current={sortBy} asc={sortAsc} onSort={handleSort} />
        <SortHeader label="XP" field="xp" current={sortBy} asc={sortAsc} onSort={handleSort} />
        <SortHeader label="Sessions" field="workouts" current={sortBy} asc={sortAsc} onSort={handleSort} />
        <SortHeader label="Accuracy" field="accuracy" current={sortBy} asc={sortAsc} onSort={handleSort} />
        <SortHeader label="Last Active" field="lastActive" current={sortBy} asc={sortAsc} onSort={handleSort} />
      </div>

      {/* Rows */}
      {sorted.length === 0 ? (
        <div className="px-5 py-8 text-center text-sm text-white/50">
          No learners have joined yet. Share the invite link to get started.
        </div>
      ) : (
        sorted.map((learner) => (
          <LearnerRow
            key={learner.userId}
            learner={learner}
            expanded={expandedId === learner.userId}
            onToggle={() => setExpandedId(expandedId === learner.userId ? null : learner.userId)}
          />
        ))
      )}
    </div>
  );
}

function SortHeader({
  label,
  field,
  current,
  asc,
  onSort,
}: {
  label: string;
  field: LearnerSort;
  current: LearnerSort;
  asc: boolean;
  onSort: (f: LearnerSort) => void;
}) {
  const isActive = current === field;
  return (
    <button
      onClick={() => onSort(field)}
      className={`flex items-center gap-1 text-left ${isActive ? "text-white/90" : "text-white/50 hover:text-white/70"}`}
    >
      {label}
      {isActive && (asc ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
    </button>
  );
}

function LearnerRow({ learner, expanded, onToggle }: { learner: Learner; expanded: boolean; onToggle: () => void }) {
  const accuracy = learner.totalPossibleScore > 0
    ? Math.round((learner.totalScore / learner.totalPossibleScore) * 100)
    : 0;
  const lastActive = learner.lastSessionDate
    ? new Date(learner.lastSessionDate).toLocaleDateString()
    : "Never";
  const emailDisplay = learner.email.split("@")[0];

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full grid grid-cols-[1fr_80px_80px_80px_100px] gap-2 px-5 py-3 text-sm hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white/80"
            style={{ background: "rgba(124, 58, 237, 0.2)" }}
          >
            {emailDisplay[0]?.toUpperCase()}
          </div>
          <span className="text-white/90 truncate">{emailDisplay}</span>
          {learner.hasCompletedAssessment && (
            <CheckCircle2 size={14} className="text-[#58CC02] flex-shrink-0" />
          )}
        </div>
        <span className="text-white/80 font-mono">{learner.totalXP}</span>
        <span className="text-white/80 font-mono">{learner.workoutsCompleted}</span>
        <span className="text-white/80 font-mono">{accuracy}%</span>
        <span className="text-white/60 text-xs">{lastActive}</span>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div
          className="px-5 pb-4 pt-1 space-y-3"
          style={{ animation: "fade-up 0.2s ease-out" }}
        >
          {/* Style breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {STYLE_LIST.map((style) => {
              const def = STYLES[style];
              const Icon = STYLE_ICONS[style];
              const xpData = learner.styleXP?.[style];
              const scoreData = learner.styleScores?.[style];
              const pct = scoreData && scoreData.totalPossible > 0
                ? Math.round((scoreData.totalScore / scoreData.totalPossible) * 100)
                : 0;
              const LevelIcon = LEVEL_ICONS[xpData?.level || "rookie"] || Shield;

              return (
                <div
                  key={style}
                  className="rounded-xl p-3 space-y-1"
                  style={{
                    background: `${def.colour}10`,
                    border: `1px solid ${def.colour}30`,
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon size={14} style={{ color: def.colour }} />
                    <span className="text-xs font-bold text-white/80">{def.shortName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold" style={{ color: def.colour }}>{pct}%</span>
                    <LevelIcon size={14} className="text-white/40" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Assessment profile if available */}
          {learner.assessmentProfile && (
            <div
              className="rounded-xl p-3 text-xs text-white/60"
              style={{ background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
            >
              Assessment: {learner.assessmentProfile.correctCount}/15 correct
              {learner.assessmentProfile.strongestStyle && (
                <> - Strongest: <span className="text-white/80 font-bold">{STYLES[learner.assessmentProfile.strongestStyle].name}</span></>
              )}
              {learner.assessmentProfile.weakestStyle && (
                <> - Focus: <span className="text-white/80 font-bold">{STYLES[learner.assessmentProfile.weakestStyle].name}</span></>
              )}
            </div>
          )}

          {/* Session history timeline */}
          {learner.sessions && learner.sessions.length > 0 && (
            <SessionTimeline sessions={learner.sessions} />
          )}

          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Streak: {learner.currentStreak} days</span>
            <span>Best streak: {learner.longestStreak} days</span>
            <span>Scenarios: {learner.completedScenarioIds?.length || 0}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================
// Insights Tab
// =============================================

function InsightsTab({ data }: { data: CohortData }) {
  const { learners } = data;
  const activeLearners = learners.filter((l) => l.workoutsCompleted > 0);

  // Style difficulty ranking - which styles does the group struggle with most?
  const styleAccuracy: { style: CommunicationStyle; pct: number; count: number }[] = STYLE_LIST.map((style) => {
    let totalPct = 0;
    let count = 0;
    for (const l of learners) {
      const ss = l.styleScores?.[style];
      if (ss && ss.totalPossible > 0) {
        totalPct += (ss.totalScore / ss.totalPossible) * 100;
        count++;
      }
    }
    return { style, pct: count > 0 ? Math.round(totalPct / count) : 0, count };
  }).sort((a, b) => a.pct - b.pct);

  // Proficiency distribution
  const tierCounts: Record<string, number> = {};
  for (const l of learners) {
    // Get highest tier across all styles
    let highestXP = 0;
    for (const style of STYLE_LIST) {
      const xp = l.styleXP?.[style]?.xp || 0;
      if (xp > highestXP) highestXP = xp;
    }
    const tier = highestXP >= 5000 ? "jedi" : highestXP >= 2500 ? "ninja" : highestXP >= 1000 ? "sharp-shooter" : highestXP >= 400 ? "rising-star" : "rookie";
    tierCounts[tier] = (tierCounts[tier] || 0) + 1;
  }

  // Engagement tiers
  const notStarted = learners.filter((l) => l.workoutsCompleted === 0).length;
  const lightUsers = learners.filter((l) => l.workoutsCompleted >= 1 && l.workoutsCompleted <= 3).length;
  const regularUsers = learners.filter((l) => l.workoutsCompleted >= 4 && l.workoutsCompleted <= 10).length;
  const powerUsers = learners.filter((l) => l.workoutsCompleted > 10).length;

  // Assessment completion
  const assessedCount = learners.filter((l) => l.hasCompletedAssessment).length;

  // Weakest style across assessed learners
  const weakestStyleCounts: Record<CommunicationStyle, number> = { direct: 0, expressive: 0, supportive: 0, analytical: 0 };
  for (const l of learners) {
    if (l.assessmentProfile?.weakestStyle) {
      weakestStyleCounts[l.assessmentProfile.weakestStyle]++;
    }
  }
  const mostCommonWeakStyle = STYLE_LIST.reduce((a, b) => weakestStyleCounts[a] >= weakestStyleCounts[b] ? a : b);

  return (
    <div className="space-y-6">
      {/* Cohort progress over time */}
      <WeeklyProgress learners={learners} cohort={data.cohort} />

      {/* Style difficulty ranking */}
      <div
        className="rounded-2xl p-5 space-y-4"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "2px solid rgba(255,255,255,0.15)",
        }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
          Style Difficulty Ranking
        </h3>
        <p className="text-xs text-white/50">
          Styles ranked from hardest to easiest for your cohort
        </p>
        {styleAccuracy.map(({ style, pct, count }, i) => {
          const def = STYLES[style];
          const Icon = STYLE_ICONS[style];
          return (
            <div key={style} className="flex items-center gap-3">
              <span className="text-xs font-bold text-white/40 w-5">{i + 1}</span>
              <Icon size={18} style={{ color: def.colour }} />
              <span className="text-sm font-bold text-white flex-shrink-0 w-24">{def.name}</span>
              <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max(pct, 3)}%`,
                    background: `linear-gradient(90deg, ${def.colour}, ${def.colour}BB)`,
                  }}
                />
              </div>
              <span className="text-sm font-bold w-12 text-right" style={{ color: def.colour }}>
                {pct}%
              </span>
              <span className="text-xs text-white/40 w-20 text-right">
                {count} learner{count !== 1 ? "s" : ""}
              </span>
            </div>
          );
        })}
        {activeLearners.length === 0 && (
          <p className="text-sm text-white/50 italic">No data yet.</p>
        )}
      </div>

      {/* Engagement + Assessment + Coaching */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Engagement distribution */}
        <div
          className="rounded-2xl p-5 space-y-3"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Engagement
          </h3>
          <EngagementBar label="Not started" count={notStarted} total={learners.length} color="#6B7280" />
          <EngagementBar label="1-3 sessions" count={lightUsers} total={learners.length} color="#F59E0B" />
          <EngagementBar label="4-10 sessions" count={regularUsers} total={learners.length} color="#3B82F6" />
          <EngagementBar label="10+ sessions" count={powerUsers} total={learners.length} color="#58CC02" />
        </div>

        {/* Assessment completion */}
        <div
          className="rounded-2xl p-5 space-y-3"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Assessment
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{assessedCount}</span>
            <span className="text-sm text-white/50">of {learners.length} completed</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${learners.length > 0 ? Math.max((assessedCount / learners.length) * 100, 3) : 0}%`,
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
              }}
            />
          </div>
          {assessedCount > 0 && (
            <p className="text-xs text-white/50">
              Most common focus area: <span className="font-bold" style={{ color: STYLES[mostCommonWeakStyle].colour }}>{STYLES[mostCommonWeakStyle].name}</span>
            </p>
          )}
        </div>

        {/* Coaching recommendations */}
        <div
          className="rounded-2xl p-5 space-y-3"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Coaching Tips
          </h3>
          <div className="space-y-2">
            {styleAccuracy.length > 0 && styleAccuracy[0].count > 0 && (
              <CoachingTip
                icon={Target}
                text={`Focus workshop time on ${STYLES[styleAccuracy[0].style].name} - it's your group's weakest style at ${styleAccuracy[0].pct}%.`}
                color={STYLES[styleAccuracy[0].style].colour}
              />
            )}
            {notStarted > 0 && (
              <CoachingTip
                icon={Users}
                text={`${notStarted} learner${notStarted > 1 ? "s haven't" : " hasn't"} started yet. Consider sending a reminder.`}
                color="#F59E0B"
              />
            )}
            {assessedCount < learners.length && learners.length > 0 && (
              <CoachingTip
                icon={CheckCircle2}
                text={`${learners.length - assessedCount} learner${learners.length - assessedCount > 1 ? "s haven't" : " hasn't"} taken the assessment. It helps personalise their training.`}
                color="#7C3AED"
              />
            )}
            {activeLearners.length === 0 && (
              <CoachingTip
                icon={ArrowRight}
                text="Share the invite link to get your cohort started."
                color="#58CC02"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================
// Progress Over Time Components
// =============================================

function WeeklyProgress({ learners, cohort }: { learners: Learner[]; cohort: CohortData["cohort"] }) {
  // Collect all sessions across all learners, bucket by week
  const allSessions: { date: string; score: number; max: number }[] = [];
  for (const l of learners) {
    if (!l.sessions) continue;
    for (const s of l.sessions) {
      allSessions.push({ date: s.date, score: s.totalScore, max: s.maxScore });
    }
  }

  if (allSessions.length === 0) {
    return (
      <div
        className="rounded-2xl p-5"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "2px solid rgba(255,255,255,0.15)",
        }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
          Progress Over Time
        </h3>
        <p className="text-sm text-white/50 italic mt-3">No session data yet.</p>
      </div>
    );
  }

  // Build weekly buckets from cohort start
  const startDate = new Date(cohort.startsAt);
  const now = new Date();
  const weeks: { label: string; sessions: number; avgAccuracy: number; totalSessions: number }[] = [];

  for (let weekStart = new Date(startDate); weekStart <= now; weekStart = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000)) {
    const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekSessions = allSessions.filter((s) => {
      const d = new Date(s.date);
      return d >= weekStart && d < weekEnd;
    });

    let avgAcc = 0;
    if (weekSessions.length > 0) {
      const totalAcc = weekSessions.reduce((sum, s) => sum + (s.max > 0 ? (s.score / s.max) * 100 : 0), 0);
      avgAcc = Math.round(totalAcc / weekSessions.length);
    }

    const weekNum = weeks.length + 1;
    weeks.push({
      label: `W${weekNum}`,
      sessions: weekSessions.length,
      avgAccuracy: avgAcc,
      totalSessions: weekSessions.length,
    });

    if (weeks.length >= 12) break; // Max 12 weeks
  }

  const maxSessions = Math.max(...weeks.map((w) => w.sessions), 1);

  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        border: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">
          Cohort Progress Over Time
        </h3>
        <div className="flex items-center gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#7C3AED" }} />
            Sessions
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#58CC02" }} />
            Avg accuracy
          </span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-1.5" style={{ height: 120 }}>
        {weeks.map((week, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1" style={{ height: "100%" }}>
            {/* Accuracy dot */}
            <div className="flex-1 relative w-full flex items-end justify-center">
              {/* Session bar */}
              <div
                className="w-full rounded-t-md transition-all duration-500"
                style={{
                  height: `${Math.max((week.sessions / maxSessions) * 100, week.sessions > 0 ? 8 : 0)}%`,
                  background: "linear-gradient(180deg, #7C3AED, #6D28D9)",
                  opacity: week.sessions > 0 ? 1 : 0.2,
                }}
              />
              {/* Accuracy indicator */}
              {week.sessions > 0 && (
                <div
                  className="absolute w-3 h-3 rounded-full border-2 border-[#0F172A]"
                  style={{
                    background: "#58CC02",
                    bottom: `${Math.max(week.avgAccuracy, 5)}%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              )}
            </div>
            {/* Label */}
            <span className="text-[10px] text-white/40 font-medium">{week.label}</span>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="flex items-center gap-6 text-xs text-white/50 pt-1 border-t border-white/5">
        <span>Total sessions: {allSessions.length}</span>
        <span>
          Overall accuracy: {allSessions.length > 0
            ? Math.round(allSessions.reduce((s, a) => s + (a.max > 0 ? (a.score / a.max) * 100 : 0), 0) / allSessions.length)
            : 0}%
        </span>
        <span>Active weeks: {weeks.filter((w) => w.sessions > 0).length}/{weeks.length}</span>
      </div>
    </div>
  );
}

function SessionTimeline({ sessions }: { sessions: { date: string; totalScore: number; maxScore: number }[] }) {
  // Show last 10 sessions as a mini sparkline
  const recent = sessions.slice(-10);
  if (recent.length === 0) return null;

  const scores = recent.map((s) => s.maxScore > 0 ? (s.totalScore / s.maxScore) * 100 : 0);
  const maxScore = 100;

  // Trend: compare first half avg to second half avg
  const midpoint = Math.floor(scores.length / 2);
  const firstHalf = scores.slice(0, midpoint);
  const secondHalf = scores.slice(midpoint);
  const firstAvg = firstHalf.length > 0 ? firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length : 0;
  const secondAvg = secondHalf.length > 0 ? secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length : 0;
  const trending = secondAvg > firstAvg + 5 ? "up" : secondAvg < firstAvg - 5 ? "down" : "stable";
  const trendColor = trending === "up" ? "#58CC02" : trending === "down" ? "#FF6B6B" : "#F59E0B";

  return (
    <div
      className="rounded-xl p-3 space-y-2"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
          Recent Sessions
        </span>
        <div className="flex items-center gap-1.5">
          <TrendingUp size={12} style={{ color: trendColor }} />
          <span className="text-xs font-bold" style={{ color: trendColor }}>
            {trending === "up" ? "Improving" : trending === "down" ? "Declining" : "Steady"}
          </span>
        </div>
      </div>

      {/* Sparkline bars */}
      <div className="flex items-end gap-1" style={{ height: 32 }}>
        {scores.map((score, i) => {
          const pct = Math.max(score / maxScore, 0.08);
          const color = score >= 70 ? "#58CC02" : score >= 40 ? "#F59E0B" : "#FF6B6B";
          return (
            <div
              key={i}
              className="flex-1 rounded-t-sm transition-all duration-300"
              style={{
                height: `${pct * 100}%`,
                background: color,
                opacity: 0.8,
              }}
              title={`${Math.round(score)}% - ${new Date(recent[i].date).toLocaleDateString()}`}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[10px] text-white/30">
        <span>{new Date(recent[0].date).toLocaleDateString()}</span>
        <span>{new Date(recent[recent.length - 1].date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

// =============================================
// Shared Components
// =============================================

function MetricCard({ icon: Icon, label, value, color }: { icon: typeof Users; label: string; value: string; color: string }) {
  return (
    <div
      className="rounded-2xl p-4 space-y-2"
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        border: `2px solid ${color}30`,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon size={16} style={{ color }} />
        <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function EngagementBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-white/70">{label}</span>
        <span className="text-white/50">{count}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
        <div className="h-full rounded-full" style={{ width: `${Math.max(pct, 2)}%`, background: color }} />
      </div>
    </div>
  );
}

function CoachingTip({ icon: Icon, text, color }: { icon: typeof Target; text: string; color: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${color}20` }}
      >
        <Icon size={12} style={{ color }} />
      </div>
      <p className="text-xs text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <p className="text-white/70">Loading dashboard...</p>
    </div>
  );
}

function AccessDenied({ message }: { message: string }) {
  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div className="max-w-sm text-center space-y-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
          style={{ background: "rgba(124, 58, 237, 0.2)" }}
        >
          <Shield size={32} className="text-[#7C3AED]" />
        </div>
        <h2 className="text-xl font-bold text-white">Facilitator Access</h2>
        <p className="text-sm text-white/60">{message}</p>
      </div>
    </div>
  );
}
