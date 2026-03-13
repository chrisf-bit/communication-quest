import {
  UserProgress,
  SessionRecord,
  CommunicationStyle,
  StyleXP,
  SessionResult,
  LevelUpEvent,
  ProficiencyLevel,
} from "@/types";
import { xpForResult, firstTimeBonus, perfectScenarioBonus, getLevelForXP } from "./xp";

const STORAGE_KEY = "conversation-quest-progress";

const DEFAULT_STYLE_SCORE = {
  attempts: 0,
  correctIdentifications: 0,
  totalScore: 0,
  totalPossible: 0,
};

const DEFAULT_STYLE_XP: StyleXP = {
  xp: 0,
  level: "rookie",
};

function createDefaultProgress(isDemo = true): UserProgress {
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
    isDemo,
  };
}

/**
 * Migrate older progress data that lacks new XP fields.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrateProgress(data: any): UserProgress {
  const progress = data as UserProgress;

  if (progress.totalXP === undefined) {
    progress.totalXP = 0;
  }
  if (progress.styleXP === undefined) {
    progress.styleXP = {
      direct: { ...DEFAULT_STYLE_XP },
      expressive: { ...DEFAULT_STYLE_XP },
      supportive: { ...DEFAULT_STYLE_XP },
      analytical: { ...DEFAULT_STYLE_XP },
    };
  }
  if (progress.isDemo === undefined) {
    progress.isDemo = true;
  }

  return progress;
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return createDefaultProgress();

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return createDefaultProgress();
    const data = JSON.parse(stored);
    return migrateProgress(data);
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
): SessionResult {
  const progress = loadProgress();

  // Snapshot old levels for level-up detection
  const oldOverallLevel = getLevelForXP(progress.totalXP);
  const oldStyleLevels: Record<CommunicationStyle, ProficiencyLevel> = {
    direct: progress.styleXP.direct.level,
    expressive: progress.styleXP.expressive.level,
    supportive: progress.styleXP.supportive.level,
    analytical: progress.styleXP.analytical.level,
  };

  progress.workoutsCompleted += 1;
  progress.totalScore += session.totalScore;
  progress.totalPossibleScore += session.maxScore;

  // Track XP earned this session
  let sessionXP = 0;

  // Group answers by scenario for perfect-scenario bonus
  const answersByScenario = new Map<string, typeof session.questions>();
  for (const answer of session.questions) {
    const existing = answersByScenario.get(answer.scenarioId) ?? [];
    existing.push(answer);
    answersByScenario.set(answer.scenarioId, existing);
  }

  // Update per-style scores and XP
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

      // XP per question
      const questionXP = xpForResult(answer.result);
      progress.styleXP[style].xp += questionXP;
      sessionXP += questionXP;
    }
  }

  // First-time and perfect-scenario bonuses
  for (const [scenarioId, answers] of answersByScenario) {
    const style = scenarioStyles[scenarioId];
    if (!style) continue;

    const ftBonus = firstTimeBonus(scenarioId, progress.completedScenarioIds);
    const perfBonus = perfectScenarioBonus(answers.map((a) => a.result));

    if (ftBonus > 0) {
      progress.styleXP[style].xp += ftBonus;
      sessionXP += ftBonus;
    }
    if (perfBonus > 0) {
      progress.styleXP[style].xp += perfBonus;
      sessionXP += perfBonus;
    }
  }

  // Update levels based on new XP
  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    progress.styleXP[style].level = getLevelForXP(progress.styleXP[style].xp);
  }

  progress.totalXP += sessionXP;

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

  // Detect level-ups
  const levelUps: LevelUpEvent[] = [];
  const newOverallLevel = getLevelForXP(progress.totalXP);
  if (newOverallLevel !== oldOverallLevel) {
    levelUps.push({ style: "overall", oldLevel: oldOverallLevel, newLevel: newOverallLevel });
  }
  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    if (progress.styleXP[style].level !== oldStyleLevels[style]) {
      levelUps.push({
        style,
        oldLevel: oldStyleLevels[style],
        newLevel: progress.styleXP[style].level,
      });
    }
  }

  return { progress, xpEarned: sessionXP, levelUps };
}

export function resetProgress(): void {
  saveProgress(createDefaultProgress());
}

/**
 * Check if user is in demo mode.
 */
export function isDemoMode(): boolean {
  return loadProgress().isDemo;
}
