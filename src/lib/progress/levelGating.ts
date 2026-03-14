import { Difficulty, ProficiencyLevel, Scenario, UserProgress, CommunicationStyle } from "@/types";
import { getLevelForXP } from "./xp";
import { getStylePercentage } from "./stats";
import { STYLE_LIST } from "@/data/styles";

/**
 * Level gating - which difficulties are unlocked based on proficiency.
 *
 * Rookie (0 XP):        Foundation only
 * Rising Star (100 XP): Foundation + Intermediate
 * Sharp Shooter (300+): All difficulties
 */
const DIFFICULTY_UNLOCK: Record<ProficiencyLevel, Difficulty[]> = {
  "rookie": ["foundation"],
  "rising-star": ["foundation", "intermediate"],
  "sharp-shooter": ["foundation", "intermediate", "advanced"],
  "ninja": ["foundation", "intermediate", "advanced"],
  "jedi": ["foundation", "intermediate", "advanced"],
};

/**
 * Get the difficulties unlocked for a given XP total.
 */
export function getUnlockedDifficulties(totalXP: number): Difficulty[] {
  const level = getLevelForXP(totalXP);
  return DIFFICULTY_UNLOCK[level];
}

/**
 * Filter scenarios to only those the user has unlocked.
 */
export function getUnlockedScenarios(scenarios: Scenario[], totalXP: number): Scenario[] {
  const unlocked = getUnlockedDifficulties(totalXP);
  return scenarios.filter((s) => unlocked.includes(s.difficulty));
}

/**
 * Get the count of locked scenarios (for UI display).
 */
export function getLockedScenarioCount(scenarios: Scenario[], totalXP: number): number {
  const unlocked = getUnlockedDifficulties(totalXP);
  return scenarios.filter((s) => !unlocked.includes(s.difficulty)).length;
}

/**
 * Get the next difficulty tier that will be unlocked and the XP needed.
 */
export function getNextUnlock(totalXP: number): { difficulty: Difficulty; xpNeeded: number } | null {
  const level = getLevelForXP(totalXP);
  if (level === "rookie") {
    return { difficulty: "intermediate", xpNeeded: 100 - totalXP };
  }
  if (level === "rising-star") {
    return { difficulty: "advanced", xpNeeded: 300 - totalXP };
  }
  return null; // Everything unlocked
}

/**
 * Adaptive difficulty - biases scenario selection toward weak styles.
 *
 * Returns a weighted pool where weak styles appear more often.
 * 60% weak styles, 40% mixed (when the user has enough history).
 */
export function getAdaptivePool(
  scenarios: Scenario[],
  progress: UserProgress
): Scenario[] {
  // Need some history to adapt
  const totalAttempts = STYLE_LIST.reduce(
    (sum, s) => sum + progress.styleScores[s].attempts, 0
  );
  if (totalAttempts < 6) return scenarios; // Not enough data yet

  // Calculate per-style accuracy
  const styleAccuracy: { style: CommunicationStyle; pct: number; attempts: number }[] = STYLE_LIST.map((style) => ({
    style,
    pct: getStylePercentage(progress, style),
    attempts: progress.styleScores[style].attempts,
  }));

  // Find styles below average (weak areas)
  const avgPct = styleAccuracy.reduce((sum, s) => sum + s.pct, 0) / styleAccuracy.length;
  const weakStyles = styleAccuracy
    .filter((s) => s.attempts > 0 && s.pct < avgPct)
    .map((s) => s.style);

  // Also include unexplored styles as weak
  const unexplored = styleAccuracy
    .filter((s) => s.attempts === 0)
    .map((s) => s.style);

  const focusStyles = [...weakStyles, ...unexplored];

  if (focusStyles.length === 0) return scenarios; // All styles roughly equal

  // Build weighted pool: focus scenarios appear 3x
  const focusScenarios = scenarios.filter((s) => focusStyles.includes(s.targetStyle));
  const otherScenarios = scenarios.filter((s) => !focusStyles.includes(s.targetStyle));

  return [...focusScenarios, ...focusScenarios, ...focusScenarios, ...otherScenarios];
}
