import { Scenario, QuestionType, WorkoutQuestion, WorkoutConfig } from "@/types";

// Shuffles array in place (Fisher-Yates)
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const DEFAULT_WORKOUT_CONFIG: WorkoutConfig = {
  questionCount: 2, // Number of SCENARIOS (each gets 3 questions)
  mixTypes: ["spot", "choose", "rewrite"],
};

/**
 * Generate a multi-turn workout.
 * Each scenario produces 3 questions (spot → choose → rewrite).
 * Questions are grouped by scenario so the player has a full
 * conversation before seeing their combined score.
 */
export function generateWorkout(
  scenarios: Scenario[],
  completedIds: string[] = [],
  config: WorkoutConfig = DEFAULT_WORKOUT_CONFIG
): WorkoutQuestion[] {
  const { questionCount } = config;

  // Prefer unseen scenarios
  const unseen = scenarios.filter((s) => !completedIds.includes(s.id));
  const pool = unseen.length >= questionCount ? unseen : shuffle(scenarios);

  // Select scenarios - mix styles where possible
  const selected: Scenario[] = [];
  const shuffled = shuffle(pool);
  const stylesSeen = new Set<string>();

  // First pass: one from each style
  for (const scenario of shuffled) {
    if (selected.length >= questionCount) break;
    if (!stylesSeen.has(scenario.targetStyle)) {
      selected.push(scenario);
      stylesSeen.add(scenario.targetStyle);
    }
  }

  // Fill remaining
  for (const scenario of shuffled) {
    if (selected.length >= questionCount) break;
    if (!selected.includes(scenario)) {
      selected.push(scenario);
    }
  }

  // Each scenario gets all 3 question types, in order
  const QUESTION_SEQUENCE: QuestionType[] = ["spot", "choose", "rewrite"];
  const questions: WorkoutQuestion[] = [];
  let globalIndex = 0;

  for (const scenario of shuffle(selected)) {
    for (const qType of QUESTION_SEQUENCE) {
      questions.push({
        scenarioId: scenario.id,
        questionType: qType,
        questionIndex: globalIndex++,
      });
    }
  }

  return questions; // Already grouped by scenario, do NOT shuffle
}

export function generatePracticeSet(
  scenarios: Scenario[],
  mode: QuestionType,
  count: number = 5,
  completedIds: string[] = []
): WorkoutQuestion[] {
  const unseen = scenarios.filter((s) => !completedIds.includes(s.id));
  const pool = unseen.length >= count ? unseen : shuffle(scenarios);
  const selected = shuffle(pool).slice(0, count);

  return selected.map((scenario, index) => ({
    scenarioId: scenario.id,
    questionType: mode,
    questionIndex: index,
  }));
}
