import { SupabaseClient } from "@supabase/supabase-js";
import { UserProgress, CommunicationStyle, StyleScore, StyleXP, ProficiencyLevel } from "@/types";
import { ProgressAdapter } from "./adapter";

const DEFAULT_STYLE_SCORE: StyleScore = {
  attempts: 0,
  correctIdentifications: 0,
  totalScore: 0,
  totalPossible: 0,
};

const DEFAULT_STYLE_XP: StyleXP = {
  xp: 0,
  level: "rookie" as ProficiencyLevel,
};

function createDefaultProgress(): UserProgress {
  return {
    workoutsCompleted: 0,
    totalScore: 0,
    totalPossibleScore: 0,
    totalXP: 0,
    styleScores: {
      direct: { ...DEFAULT_STYLE_SCORE },
      expressive: { ...DEFAULT_STYLE_SCORE },
      supportive: { ...DEFAULT_STYLE_SCORE },
      analytical: { ...DEFAULT_STYLE_SCORE },
    },
    styleXP: {
      direct: { ...DEFAULT_STYLE_XP },
      expressive: { ...DEFAULT_STYLE_XP },
      supportive: { ...DEFAULT_STYLE_XP },
      analytical: { ...DEFAULT_STYLE_XP },
    },
    sessions: [],
    completedScenarioIds: [],
    lastSessionDate: null,
    currentStreak: 0,
    longestStreak: 0,
    completedDailyChallenges: [],
    scenarioMastery: {},
    isDemo: false,
    hasCompletedAssessment: false,
  };
}

/**
 * Convert a Supabase row into a UserProgress object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToProgress(row: any): UserProgress {
  return {
    workoutsCompleted: row.workouts_completed ?? 0,
    totalScore: row.total_score ?? 0,
    totalPossibleScore: row.total_possible_score ?? 0,
    totalXP: row.total_xp ?? 0,
    styleScores: row.style_scores ?? {
      direct: { ...DEFAULT_STYLE_SCORE },
      expressive: { ...DEFAULT_STYLE_SCORE },
      supportive: { ...DEFAULT_STYLE_SCORE },
      analytical: { ...DEFAULT_STYLE_SCORE },
    },
    styleXP: row.style_xp ?? {
      direct: { ...DEFAULT_STYLE_XP },
      expressive: { ...DEFAULT_STYLE_XP },
      supportive: { ...DEFAULT_STYLE_XP },
      analytical: { ...DEFAULT_STYLE_XP },
    },
    sessions: row.sessions ?? [],
    completedScenarioIds: row.completed_scenario_ids ?? [],
    lastSessionDate: row.last_session_date ?? null,
    currentStreak: row.current_streak ?? 0,
    longestStreak: row.longest_streak ?? 0,
    completedDailyChallenges: row.completed_daily_challenges ?? [],
    scenarioMastery: row.scenario_mastery ?? {},
    isDemo: row.is_demo ?? false,
    hasCompletedAssessment: row.has_completed_assessment ?? false,
    assessmentProfile: row.assessment_profile ?? undefined,
  };
}

/**
 * Convert a UserProgress object into a Supabase row for upsert.
 */
function progressToRow(userId: string, progress: UserProgress) {
  return {
    user_id: userId,
    total_xp: progress.totalXP,
    total_score: progress.totalScore,
    total_possible_score: progress.totalPossibleScore,
    current_streak: progress.currentStreak,
    longest_streak: progress.longestStreak,
    last_session_date: progress.lastSessionDate,
    workouts_completed: progress.workoutsCompleted,
    is_demo: progress.isDemo,
    has_completed_assessment: progress.hasCompletedAssessment,
    completed_scenario_ids: progress.completedScenarioIds,
    completed_daily_challenges: progress.completedDailyChallenges,
    style_scores: progress.styleScores,
    style_xp: progress.styleXP,
    sessions: progress.sessions,
    scenario_mastery: progress.scenarioMastery,
    assessment_profile: progress.assessmentProfile ?? null,
  };
}

/**
 * Supabase-backed adapter. Used for authenticated users.
 */
export class SupabaseAdapter implements ProgressAdapter {
  constructor(
    private supabase: SupabaseClient,
    private userId: string
  ) {}

  async load(): Promise<UserProgress> {
    const { data, error } = await this.supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", this.userId)
      .single();

    if (error || !data) {
      return createDefaultProgress();
    }

    return rowToProgress(data);
  }

  async save(progress: UserProgress): Promise<void> {
    const row = progressToRow(this.userId, progress);

    await this.supabase
      .from("user_progress")
      .upsert(row, { onConflict: "user_id" });
  }
}
