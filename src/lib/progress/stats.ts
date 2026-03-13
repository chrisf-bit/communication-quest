import { UserProgress, CommunicationStyle } from "@/types";
import { STYLE_LIST } from "@/data/styles";

export function getOverallPercentage(progress: UserProgress): number {
  if (progress.totalPossibleScore === 0) return 0;
  return Math.round(
    (progress.totalScore / progress.totalPossibleScore) * 100
  );
}

export function getStylePercentage(
  progress: UserProgress,
  style: CommunicationStyle
): number {
  const ss = progress.styleScores[style];
  if (!ss || ss.totalPossible === 0) return 0;
  return Math.round((ss.totalScore / ss.totalPossible) * 100);
}

export function getStrongestStyle(
  progress: UserProgress
): CommunicationStyle | null {
  let best: CommunicationStyle | null = null;
  let bestPct = -1;

  for (const style of STYLE_LIST) {
    const pct = getStylePercentage(progress, style);
    const ss = progress.styleScores[style];
    if (ss.attempts > 0 && pct > bestPct) {
      bestPct = pct;
      best = style;
    }
  }

  return best;
}

export function getWeakestStyle(
  progress: UserProgress
): CommunicationStyle | null {
  let worst: CommunicationStyle | null = null;
  let worstPct = 101;

  for (const style of STYLE_LIST) {
    const pct = getStylePercentage(progress, style);
    const ss = progress.styleScores[style];
    if (ss.attempts > 0 && pct < worstPct) {
      worstPct = pct;
      worst = style;
    }
  }

  return worst;
}

export function getStyleRadarData(
  progress: UserProgress
): { style: string; score: number; fullMark: number }[] {
  return STYLE_LIST.map((style) => ({
    style: style.charAt(0).toUpperCase() + style.slice(1),
    score: getStylePercentage(progress, style),
    fullMark: 100,
  }));
}

export function getRecentAverageScore(
  progress: UserProgress,
  count: number = 5
): number {
  const recent = progress.sessions.slice(0, count);
  if (recent.length === 0) return 0;

  const totalScore = recent.reduce((sum, s) => sum + s.totalScore, 0);
  const totalMax = recent.reduce((sum, s) => sum + s.maxScore, 0);
  if (totalMax === 0) return 0;

  return Math.round((totalScore / totalMax) * 100);
}
