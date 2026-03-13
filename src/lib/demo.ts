/**
 * Demo mode configuration.
 *
 * Demo users can play:
 * - 1 workout (2 scenarios = 6 questions)
 * - 1 vocabulary session
 *
 * After completing either, they see a sign-up CTA.
 */

// Hand-picked showcase scenarios — one per style, foundation difficulty
// These are the best "first impression" scenarios
export const DEMO_SCENARIO_IDS = [
  "scenario-01", // Direct - Jordan Cole, "Cutting Through the Agenda"
  "scenario-07", // Expressive - Priya Sharma, marketing brainstorm
];

// Max sessions allowed in demo mode
export const DEMO_MAX_WORKOUTS = 1;
export const DEMO_MAX_VOCABULARY = 1;

/**
 * Check if a demo user has exhausted their free sessions.
 */
export function isDemoLimitReached(
  workoutsCompleted: number,
  isDemo: boolean
): boolean {
  if (!isDemo) return false;
  return workoutsCompleted >= DEMO_MAX_WORKOUTS;
}

/**
 * Check if vocabulary demo limit is reached.
 */
export function isVocabDemoLimitReached(
  sessions: { mode?: string }[],
  isDemo: boolean
): boolean {
  if (!isDemo) return false;
  const vocabSessions = sessions.filter((s) => s.mode === "vocabulary");
  return vocabSessions.length >= DEMO_MAX_VOCABULARY;
}
