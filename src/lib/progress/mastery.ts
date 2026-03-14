import { ScenarioMastery, MasteryStars, FeedbackResult, UserProgress } from "@/types";

/**
 * Calculate mastery stars from best score.
 * 0 stars: never attempted
 * 1 star:  attempted (any score)
 * 2 stars: 70%+ best score (21+ out of 30)
 * 3 stars: 90%+ best score (27+ out of 30)
 */
export function getMasteryStars(mastery: ScenarioMastery | undefined): MasteryStars {
  if (!mastery || mastery.attempts === 0) return 0;
  const pct = mastery.bestScore / mastery.bestPossible;
  if (pct >= 0.9) return 3;
  if (pct >= 0.7) return 2;
  return 1;
}

/**
 * Get aggregate mastery stats across all scenarios.
 */
export function getMasteryOverview(progress: UserProgress): {
  totalAttempted: number;
  oneStar: number;
  twoStar: number;
  threeStar: number;
} {
  const entries = Object.values(progress.scenarioMastery ?? {});
  let oneStar = 0;
  let twoStar = 0;
  let threeStar = 0;

  for (const m of entries) {
    const stars = getMasteryStars(m);
    if (stars === 1) oneStar++;
    if (stars === 2) twoStar++;
    if (stars === 3) threeStar++;
  }

  return {
    totalAttempted: entries.length,
    oneStar,
    twoStar,
    threeStar,
  };
}

// ============================================
// SM-2 Spaced Repetition
// ============================================

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

/**
 * Map a scenario attempt's overall result to an SM-2 quality score (0-5).
 * Based on the average result across the 3 questions.
 */
function qualityFromResults(results: FeedbackResult[]): number {
  const scores: Record<FeedbackResult, number> = { strong: 5, partial: 3, weak: 1 };
  const avg = results.reduce((sum, r) => sum + scores[r], 0) / results.length;
  return Math.round(avg);
}

/**
 * Determine overall result from individual question results.
 */
export function overallResult(results: FeedbackResult[]): FeedbackResult {
  const strongCount = results.filter((r) => r === "strong").length;
  const weakCount = results.filter((r) => r === "weak").length;
  if (strongCount >= 2) return "strong";
  if (weakCount >= 2) return "weak";
  return "partial";
}

/**
 * Create or update mastery data after a scenario attempt.
 * Implements the SM-2 algorithm for spaced repetition scheduling.
 */
export function updateMastery(
  existing: ScenarioMastery | undefined,
  totalScore: number,
  results: FeedbackResult[]
): ScenarioMastery {
  const today = new Date().toISOString().split("T")[0];
  const quality = qualityFromResults(results);
  const result = overallResult(results);

  if (!existing) {
    // First attempt
    const interval = quality >= 3 ? 1 : 0; // Review tomorrow if decent, same day if poor
    return {
      bestScore: totalScore,
      bestPossible: 30,
      attempts: 1,
      lastAttemptDate: today,
      lastResult: result,
      easeFactor: DEFAULT_EASE,
      interval,
      nextReviewDate: addDays(today, Math.max(interval, 1)),
    };
  }

  // Update best score
  const bestScore = Math.max(existing.bestScore, totalScore);
  const attempts = existing.attempts + 1;

  // SM-2 ease factor adjustment
  let easeFactor = existing.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  easeFactor = Math.max(easeFactor, MIN_EASE);

  // SM-2 interval calculation
  let interval: number;
  if (quality < 3) {
    // Failed - reset to short interval
    interval = 1;
  } else if (existing.interval === 0) {
    interval = 1;
  } else if (existing.interval === 1) {
    interval = 6;
  } else {
    interval = Math.round(existing.interval * easeFactor);
  }

  return {
    bestScore,
    bestPossible: 30,
    attempts,
    lastAttemptDate: today,
    lastResult: result,
    easeFactor,
    interval,
    nextReviewDate: addDays(today, interval),
  };
}

/**
 * Get scenarios due for review (spaced repetition).
 * Returns scenario IDs sorted by most overdue first.
 */
export function getDueScenarioIds(progress: UserProgress): string[] {
  const today = new Date().toISOString().split("T")[0];
  const mastery = progress.scenarioMastery ?? {};

  const due: { id: string; overdueDays: number }[] = [];

  for (const [id, m] of Object.entries(mastery)) {
    if (m.nextReviewDate <= today) {
      const overdue = daysBetween(m.nextReviewDate, today);
      due.push({ id, overdueDays: overdue });
    }
  }

  // Most overdue first
  due.sort((a, b) => b.overdueDays - a.overdueDays);
  return due.map((d) => d.id);
}

/**
 * Get count of scenarios due for review.
 */
export function getDueCount(progress: UserProgress): number {
  return getDueScenarioIds(progress).length;
}

// ============================================
// Date helpers
// ============================================

function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

function daysBetween(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}
