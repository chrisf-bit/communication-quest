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
import { getStreakMilestone } from "@/lib/daily";
import { updateMastery } from "./mastery";

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
    longestStreak: 0,
    completedDailyChallenges: [],
    scenarioMastery: {},
    isDemo,
    hasCompletedAssessment: false,
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
  if (progress.hasCompletedAssessment === undefined) {
    progress.hasCompletedAssessment = false;
  }
  if (progress.longestStreak === undefined) {
    progress.longestStreak = progress.currentStreak ?? 0;
  }
  if (progress.completedDailyChallenges === undefined) {
    progress.completedDailyChallenges = [];
  }
  if (progress.scenarioMastery === undefined) {
    progress.scenarioMastery = {};
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

  // Update per-scenario mastery and spaced repetition
  for (const [scenarioId, answers] of answersByScenario) {
    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    const results = answers.map((a) => a.result);
    progress.scenarioMastery[scenarioId] = updateMastery(
      progress.scenarioMastery[scenarioId],
      totalScore,
      results
    );
  }

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
  if (progress.currentStreak > (progress.longestStreak ?? 0)) {
    progress.longestStreak = progress.currentStreak;
  }

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

/**
 * Record assessment results. Awards XP based on correctness.
 * 4+ correct → bonus 50 XP (skip toward Rising Star).
 */
export function recordAssessment(profile: {
  styleScores: Record<CommunicationStyle, number>;
  strongestStyle: CommunicationStyle | null;
  weakestStyle: CommunicationStyle | null;
  correctCount: number;
}): { xpAwarded: number } {
  const progress = loadProgress();

  progress.hasCompletedAssessment = true;
  progress.assessmentProfile = {
    ...profile,
    completedAt: new Date().toISOString(),
  };

  // Award XP: 5 per correct answer + 50 bonus for 8+ correct
  const baseXP = profile.correctCount * 5;
  const bonusXP = profile.correctCount >= 8 ? 50 : 0;
  const totalXP = baseXP + bonusXP;

  progress.totalXP += totalXP;

  // Distribute XP across styles based on what they got right
  // For simplicity, add equally to all styles
  const perStyle = Math.floor(totalXP / 4);
  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    progress.styleXP[style].xp += perStyle;
    progress.styleXP[style].level = getLevelForXP(progress.styleXP[style].xp);
  }

  saveProgress(progress);
  return { xpAwarded: totalXP };
}

/**
 * Record that the user completed today's daily challenge.
 * Returns the streak milestone XP bonus if one was reached.
 */
export function recordDailyChallenge(dateKey: string): { streakMilestoneXP: number } {
  const progress = loadProgress();

  // Already completed today
  if (progress.completedDailyChallenges.includes(dateKey)) {
    return { streakMilestoneXP: 0 };
  }

  progress.completedDailyChallenges = [...progress.completedDailyChallenges, dateKey];

  // Check for streak milestone bonus
  const milestone = getStreakMilestone(progress.currentStreak);
  let streakMilestoneXP = 0;
  if (milestone) {
    progress.totalXP += milestone.xpBonus;
    streakMilestoneXP = milestone.xpBonus;
  }

  saveProgress(progress);
  return { streakMilestoneXP };
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

// ============================================
// Pure variants (no internal load/save - for use with ProgressProvider)
// ============================================

/**
 * Pure version of recordSession. Takes progress as input, returns updated progress + result.
 * Does NOT read from or write to localStorage.
 */
export function applySession(
  currentProgress: UserProgress,
  session: SessionRecord,
  scenarioStyles: Record<string, CommunicationStyle>
): SessionResult {
  // Deep-clone to avoid mutation
  const progress: UserProgress = JSON.parse(JSON.stringify(currentProgress));

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

  let sessionXP = 0;

  const answersByScenario = new Map<string, typeof session.questions>();
  for (const answer of session.questions) {
    const existing = answersByScenario.get(answer.scenarioId) ?? [];
    existing.push(answer);
    answersByScenario.set(answer.scenarioId, existing);
  }

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
      const questionXP = xpForResult(answer.result);
      progress.styleXP[style].xp += questionXP;
      sessionXP += questionXP;
    }
  }

  for (const [scenarioId, answers] of answersByScenario) {
    const style = scenarioStyles[scenarioId];
    if (!style) continue;
    const ftBonus = firstTimeBonus(scenarioId, progress.completedScenarioIds);
    const perfBonus = perfectScenarioBonus(answers.map((a) => a.result));
    if (ftBonus > 0) { progress.styleXP[style].xp += ftBonus; sessionXP += ftBonus; }
    if (perfBonus > 0) { progress.styleXP[style].xp += perfBonus; sessionXP += perfBonus; }
  }

  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    progress.styleXP[style].level = getLevelForXP(progress.styleXP[style].xp);
  }

  progress.totalXP += sessionXP;

  const newIds = session.questions.map((q) => q.scenarioId);
  progress.completedScenarioIds = [...new Set([...progress.completedScenarioIds, ...newIds])];

  for (const [scenarioId, answers] of answersByScenario) {
    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    const results = answers.map((a) => a.result);
    progress.scenarioMastery[scenarioId] = updateMastery(progress.scenarioMastery[scenarioId], totalScore, results);
  }

  const today = new Date().toISOString().split("T")[0];
  if (progress.lastSessionDate) {
    const lastDate = new Date(progress.lastSessionDate);
    const todayDate = new Date(today);
    const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) { progress.currentStreak += 1; }
    else if (diffDays > 1) { progress.currentStreak = 1; }
  } else {
    progress.currentStreak = 1;
  }
  progress.lastSessionDate = today;
  if (progress.currentStreak > (progress.longestStreak ?? 0)) {
    progress.longestStreak = progress.currentStreak;
  }

  progress.sessions = [session, ...progress.sessions].slice(0, 20);

  const levelUps: LevelUpEvent[] = [];
  const newOverallLevel = getLevelForXP(progress.totalXP);
  if (newOverallLevel !== oldOverallLevel) {
    levelUps.push({ style: "overall", oldLevel: oldOverallLevel, newLevel: newOverallLevel });
  }
  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    if (progress.styleXP[style].level !== oldStyleLevels[style]) {
      levelUps.push({ style, oldLevel: oldStyleLevels[style], newLevel: progress.styleXP[style].level });
    }
  }

  return { progress, xpEarned: sessionXP, levelUps };
}

/**
 * Pure version of recordAssessment. Takes progress as input, returns updated progress + XP awarded.
 */
export function applyAssessment(
  currentProgress: UserProgress,
  profile: {
    styleScores: Record<CommunicationStyle, number>;
    strongestStyle: CommunicationStyle | null;
    weakestStyle: CommunicationStyle | null;
    correctCount: number;
  }
): { progress: UserProgress; xpAwarded: number } {
  const progress: UserProgress = JSON.parse(JSON.stringify(currentProgress));

  progress.hasCompletedAssessment = true;
  progress.assessmentProfile = { ...profile, completedAt: new Date().toISOString() };

  const baseXP = profile.correctCount * 5;
  const bonusXP = profile.correctCount >= 8 ? 50 : 0;
  const totalXP = baseXP + bonusXP;

  progress.totalXP += totalXP;

  const perStyle = Math.floor(totalXP / 4);
  for (const style of Object.keys(progress.styleXP) as CommunicationStyle[]) {
    progress.styleXP[style].xp += perStyle;
    progress.styleXP[style].level = getLevelForXP(progress.styleXP[style].xp);
  }

  return { progress, xpAwarded: totalXP };
}

/**
 * Pure version of recordDailyChallenge.
 */
export function applyDailyChallenge(
  currentProgress: UserProgress,
  dateKey: string
): { progress: UserProgress; streakMilestoneXP: number } {
  if (currentProgress.completedDailyChallenges.includes(dateKey)) {
    return { progress: currentProgress, streakMilestoneXP: 0 };
  }

  const progress: UserProgress = JSON.parse(JSON.stringify(currentProgress));
  progress.completedDailyChallenges = [...progress.completedDailyChallenges, dateKey];

  const milestone = getStreakMilestone(progress.currentStreak);
  let streakMilestoneXP = 0;
  if (milestone) {
    progress.totalXP += milestone.xpBonus;
    streakMilestoneXP = milestone.xpBonus;
  }

  return { progress, streakMilestoneXP };
}
