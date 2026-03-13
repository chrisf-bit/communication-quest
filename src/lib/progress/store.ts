import {
  UserProgress,
  SessionRecord,
  QuestionAnswer,
  CommunicationStyle,
} from "@/types";

const STORAGE_KEY = "conversation-quest-progress";

const DEFAULT_STYLE_SCORE = {
  attempts: 0,
  correctIdentifications: 0,
  totalScore: 0,
  totalPossible: 0,
};

function createDefaultProgress(): UserProgress {
  return {
    workoutsCompleted: 0,
    totalScore: 0,
    totalPossibleScore: 0,
    styleScores: {
      direct: { ...DEFAULT_STYLE_SCORE },
      expressive: { ...DEFAULT_STYLE_SCORE },
      supportive: { ...DEFAULT_STYLE_SCORE },
      analytical: { ...DEFAULT_STYLE_SCORE },
    },
    sessions: [],
    completedScenarioIds: [],
    lastSessionDate: null,
    currentStreak: 0,
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return createDefaultProgress();

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return createDefaultProgress();
    return JSON.parse(stored) as UserProgress;
  } catch {
    return createDefaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable - silently fail
  }
}

export function recordSession(
  session: SessionRecord,
  scenarioStyles: Record<string, CommunicationStyle>
): UserProgress {
  const progress = loadProgress();

  progress.workoutsCompleted += 1;
  progress.totalScore += session.totalScore;
  progress.totalPossibleScore += session.maxScore;

  // Update per-style scores
  for (const answer of session.questions) {
    const style = scenarioStyles[answer.scenarioId];
    if (style && progress.styleScores[style]) {
      const ss = progress.styleScores[style];
      ss.attempts += 1;
      ss.totalScore += answer.score;
      ss.totalPossible += answer.maxScore;
      if (answer.questionType === "spot" && answer.result === "strong") {
        ss.correctIdentifications += 1;
      }
    }
  }

  // Track completed scenarios
  const newIds = session.questions.map((q) => q.scenarioId);
  progress.completedScenarioIds = [
    ...new Set([...progress.completedScenarioIds, ...newIds]),
  ];

  // Update streak
  const today = new Date().toISOString().split("T")[0];
  if (progress.lastSessionDate) {
    const lastDate = new Date(progress.lastSessionDate);
    const todayDate = new Date(today);
    const diffDays = Math.floor(
      (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 1) {
      progress.currentStreak += 1;
    } else if (diffDays > 1) {
      progress.currentStreak = 1;
    }
    // Same day - keep current streak
  } else {
    progress.currentStreak = 1;
  }
  progress.lastSessionDate = today;

  // Add session to history (keep last 20)
  progress.sessions = [session, ...progress.sessions].slice(0, 20);

  saveProgress(progress);
  return progress;
}

export function resetProgress(): void {
  saveProgress(createDefaultProgress());
}
