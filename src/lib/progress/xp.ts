import {
  ProficiencyLevel,
  ProficiencyTier,
  PROFICIENCY_TIERS,
  FeedbackResult,
} from "@/types";

/**
 * Calculate XP earned for a single question answer.
 * strong = 10 XP, partial = 5 XP, weak = 1 XP
 */
export function xpForResult(result: FeedbackResult): number {
  switch (result) {
    case "strong":
      return 10;
    case "partial":
      return 5;
    case "weak":
      return 1;
  }
}

/**
 * Bonus XP for completing all 3 questions in a scenario with "strong" results.
 */
export function perfectScenarioBonus(
  results: FeedbackResult[]
): number {
  return results.every((r) => r === "strong") ? 10 : 0;
}

/**
 * First-time scenario bonus.
 */
export function firstTimeBonus(
  scenarioId: string,
  completedIds: string[]
): number {
  return completedIds.includes(scenarioId) ? 0 : 5;
}

/**
 * Get the proficiency level for a given XP amount.
 */
export function getLevelForXP(xp: number): ProficiencyLevel {
  let current: ProficiencyTier = PROFICIENCY_TIERS[0];
  for (const tier of PROFICIENCY_TIERS) {
    if (xp >= tier.xpRequired) {
      current = tier;
    } else {
      break;
    }
  }
  return current.level;
}

/**
 * Get the tier object for a proficiency level.
 */
export function getTier(level: ProficiencyLevel): ProficiencyTier {
  return PROFICIENCY_TIERS.find((t) => t.level === level) ?? PROFICIENCY_TIERS[0];
}

/**
 * Get progress toward the next tier (0-1 fraction).
 */
export function getProgressToNextLevel(xp: number): {
  currentTier: ProficiencyTier;
  nextTier: ProficiencyTier | null;
  progress: number; // 0-1
} {
  let currentIdx = 0;
  for (let i = 0; i < PROFICIENCY_TIERS.length; i++) {
    if (xp >= PROFICIENCY_TIERS[i].xpRequired) {
      currentIdx = i;
    } else {
      break;
    }
  }

  const currentTier = PROFICIENCY_TIERS[currentIdx];
  const nextTier = PROFICIENCY_TIERS[currentIdx + 1] ?? null;

  if (!nextTier) {
    return { currentTier, nextTier: null, progress: 1 };
  }

  const rangeXP = nextTier.xpRequired - currentTier.xpRequired;
  const earnedInRange = xp - currentTier.xpRequired;
  return {
    currentTier,
    nextTier,
    progress: Math.min(earnedInRange / rangeXP, 1),
  };
}
