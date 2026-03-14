import { Scenario, QuestionType, WorkoutQuestion, WorkoutConfig, CommunicationStyle, UserProgress } from "@/types";
import { getUnlockedScenarios, getAdaptivePool } from "@/lib/progress/levelGating";
import { getDueScenarioIds } from "@/lib/progress/mastery";

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
 * Each scenario produces 3 questions (spot -> choose -> rewrite).
 * Questions are grouped by scenario so the player has a full
 * conversation before seeing their combined score.
 *
 * When progress is provided:
 * - Level gating filters scenarios by unlocked difficulty
 * - Adaptive difficulty biases toward weak styles
 */
export function generateWorkout(
  scenarios: Scenario[],
  completedIds: string[] = [],
  config: WorkoutConfig = DEFAULT_WORKOUT_CONFIG,
  progress?: UserProgress
): WorkoutQuestion[] {
  const { questionCount } = config;

  // Apply level gating if progress available
  let available = progress
    ? getUnlockedScenarios(scenarios, progress.totalXP)
    : scenarios;

  // Apply adaptive difficulty weighting if progress available
  if (progress) {
    available = getAdaptivePool(available, progress);
  }

  // Spaced repetition: prioritise scenarios due for review
  const dueIds = progress ? getDueScenarioIds(progress) : [];
  const dueScenarios = dueIds
    .map((id) => available.find((s) => s.id === id))
    .filter((s): s is Scenario => s !== undefined);

  // Select scenarios - mix styles where possible, deduplicate
  const selected: Scenario[] = [];
  const selectedIds = new Set<string>();

  // First: add up to half from spaced repetition due list
  const maxDue = Math.max(1, Math.floor(questionCount / 2));
  for (const scenario of dueScenarios) {
    if (selected.length >= maxDue) break;
    if (!selectedIds.has(scenario.id)) {
      selected.push(scenario);
      selectedIds.add(scenario.id);
    }
  }

  // Prefer unseen scenarios for remaining slots
  const unseen = available.filter((s) => !completedIds.includes(s.id) && !selectedIds.has(s.id));
  const pool = unseen.length >= (questionCount - selected.length) ? unseen : shuffle(available);
  const shuffled = shuffle(pool);
  const stylesSeen = new Set<string>();

  // First pass: one from each style
  for (const scenario of shuffled) {
    if (selected.length >= questionCount) break;
    if (!stylesSeen.has(scenario.targetStyle) && !selectedIds.has(scenario.id)) {
      selected.push(scenario);
      selectedIds.add(scenario.id);
      stylesSeen.add(scenario.targetStyle);
    }
  }

  // Fill remaining (deduplicate since adaptive pool has duplicates)
  for (const scenario of shuffled) {
    if (selected.length >= questionCount) break;
    if (!selectedIds.has(scenario.id)) {
      selected.push(scenario);
      selectedIds.add(scenario.id);
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
  completedIds: string[] = [],
  focusStyle?: CommunicationStyle
): WorkoutQuestion[] {
  // Filter by style if specified
  const styleFiltered = focusStyle
    ? scenarios.filter((s) => s.targetStyle === focusStyle)
    : scenarios;

  const unseen = styleFiltered.filter((s) => !completedIds.includes(s.id));
  const pool = unseen.length >= count ? unseen : shuffle(styleFiltered);
  const selected = shuffle(pool).slice(0, count);

  return selected.map((scenario, index) => ({
    scenarioId: scenario.id,
    questionType: mode,
    questionIndex: index,
  }));
}
