import { Scenario, CommunicationStyle } from "@/types";

/**
 * Daily challenge system.
 * Uses a deterministic hash of the date to pick a scenario,
 * so all users see the same challenge each day.
 */

// Simple string hash (djb2)
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0; // unsigned
}

/**
 * Get today's date string in YYYY-MM-DD format (UTC).
 */
export function getTodayKey(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * Pick the daily challenge scenario deterministically from the date.
 * Rotates through styles so consecutive days cover different styles.
 */
export function getDailyScenario(scenarios: Scenario[], dateKey?: string): Scenario | null {
  if (scenarios.length === 0) return null;

  const key = dateKey ?? getTodayKey();
  const hash = hashString(`daily-challenge-${key}`);
  const index = hash % scenarios.length;
  return scenarios[index];
}

/**
 * Get which style today's daily challenge focuses on.
 * Cycles through styles based on day-of-year so variety is guaranteed.
 */
export function getDailyStyle(dateKey?: string): CommunicationStyle {
  const key = dateKey ?? getTodayKey();
  const dayOfYear = Math.floor(
    (new Date(key).getTime() - new Date(key.slice(0, 4) + "-01-01").getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const styles: CommunicationStyle[] = ["direct", "expressive", "supportive", "analytical"];
  return styles[dayOfYear % 4];
}

/**
 * Check if the user has completed today's daily challenge.
 */
export function hasCompletedDailyChallenge(
  completedDailies: string[],
  dateKey?: string
): boolean {
  const key = dateKey ?? getTodayKey();
  return completedDailies.includes(key);
}

/**
 * Streak milestone rewards.
 * Returns XP bonus for reaching a milestone, or 0 if not a milestone day.
 */
export interface StreakMilestone {
  days: number;
  label: string;
  xpBonus: number;
}

export const STREAK_MILESTONES: StreakMilestone[] = [
  { days: 3, label: "3-Day Streak", xpBonus: 25 },
  { days: 7, label: "Week Warrior", xpBonus: 50 },
  { days: 14, label: "Fortnight Force", xpBonus: 100 },
  { days: 30, label: "Monthly Master", xpBonus: 200 },
  { days: 60, label: "Double Month", xpBonus: 350 },
  { days: 100, label: "Century Club", xpBonus: 500 },
];

/**
 * Check if the current streak hits a milestone.
 * Returns the milestone if this is the exact day it was reached, null otherwise.
 */
export function getStreakMilestone(streak: number): StreakMilestone | null {
  return STREAK_MILESTONES.find((m) => m.days === streak) ?? null;
}

/**
 * Get the next milestone the user is working toward.
 */
export function getNextMilestone(streak: number): StreakMilestone | null {
  return STREAK_MILESTONES.find((m) => m.days > streak) ?? null;
}
