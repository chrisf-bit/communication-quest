import { UserProgress, CommunicationStyle, ScenarioMastery, SessionRecord } from "@/types";

/**
 * Merge localStorage progress into Supabase progress.
 * Strategy: highest-wins for scalars, union for arrays, per-key best for maps.
 */
export function mergeProgress(
  local: UserProgress,
  cloud: UserProgress
): UserProgress {
  const merged: UserProgress = {
    // Scalar fields: take the higher value
    workoutsCompleted: Math.max(local.workoutsCompleted, cloud.workoutsCompleted),
    totalScore: Math.max(local.totalScore, cloud.totalScore),
    totalPossibleScore: Math.max(local.totalPossibleScore, cloud.totalPossibleScore),
    totalXP: Math.max(local.totalXP, cloud.totalXP),
    currentStreak: Math.max(local.currentStreak, cloud.currentStreak),
    longestStreak: Math.max(local.longestStreak, cloud.longestStreak),
    lastSessionDate: newerDate(local.lastSessionDate, cloud.lastSessionDate),
    isDemo: false, // Authenticated users are never demo
    hasCompletedAssessment: local.hasCompletedAssessment || cloud.hasCompletedAssessment,

    // Arrays: union/deduplicate
    completedScenarioIds: [...new Set([
      ...local.completedScenarioIds,
      ...cloud.completedScenarioIds,
    ])],
    completedDailyChallenges: [...new Set([
      ...(local.completedDailyChallenges ?? []),
      ...(cloud.completedDailyChallenges ?? []),
    ])],

    // Sessions: merge and deduplicate by id, keep latest 20
    sessions: mergeSessions(local.sessions, cloud.sessions),

    // Per-style scores: take the better stats per style
    styleScores: mergeStyleScores(local.styleScores, cloud.styleScores),
    styleXP: mergeStyleXP(local.styleXP, cloud.styleXP),

    // Per-scenario mastery: per-key best score
    scenarioMastery: mergeScenarioMastery(local.scenarioMastery, cloud.scenarioMastery),

    // Assessment: take whichever exists (prefer cloud if both exist)
    assessmentProfile: cloud.assessmentProfile ?? local.assessmentProfile,
  };

  return merged;
}

function newerDate(a: string | null, b: string | null): string | null {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

function mergeSessions(a: SessionRecord[], b: SessionRecord[]): SessionRecord[] {
  const byId = new Map<string, SessionRecord>();
  for (const s of [...b, ...a]) {
    byId.set(s.id, s);
  }
  return [...byId.values()]
    .sort((x, y) => y.date.localeCompare(x.date))
    .slice(0, 20);
}

function mergeStyleScores(
  a: UserProgress["styleScores"],
  b: UserProgress["styleScores"]
): UserProgress["styleScores"] {
  const styles: CommunicationStyle[] = ["direct", "expressive", "supportive", "analytical"];
  const result = {} as UserProgress["styleScores"];

  for (const style of styles) {
    const aStyle = a[style];
    const bStyle = b[style];
    result[style] = {
      attempts: Math.max(aStyle.attempts, bStyle.attempts),
      correctIdentifications: Math.max(aStyle.correctIdentifications, bStyle.correctIdentifications),
      totalScore: Math.max(aStyle.totalScore, bStyle.totalScore),
      totalPossible: Math.max(aStyle.totalPossible, bStyle.totalPossible),
    };
  }

  return result;
}

function mergeStyleXP(
  a: UserProgress["styleXP"],
  b: UserProgress["styleXP"]
): UserProgress["styleXP"] {
  const styles: CommunicationStyle[] = ["direct", "expressive", "supportive", "analytical"];
  const result = {} as UserProgress["styleXP"];

  for (const style of styles) {
    const aXP = a[style];
    const bXP = b[style];
    if (aXP.xp >= bXP.xp) {
      result[style] = { ...aXP };
    } else {
      result[style] = { ...bXP };
    }
  }

  return result;
}

function mergeScenarioMastery(
  a: Record<string, ScenarioMastery>,
  b: Record<string, ScenarioMastery>
): Record<string, ScenarioMastery> {
  const result: Record<string, ScenarioMastery> = { ...b };

  for (const [id, mastery] of Object.entries(a)) {
    if (!result[id] || mastery.bestScore > result[id].bestScore) {
      result[id] = mastery;
    }
  }

  return result;
}
