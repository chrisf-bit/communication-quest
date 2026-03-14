import { UserProgress, CommunicationStyle } from "@/types";
import { getMasteryStars, getMasteryOverview } from "@/lib/progress/mastery";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  category: "milestone" | "mastery" | "streak" | "exploration" | "specialist";
  colour: string;
  check: (progress: UserProgress) => boolean;
}

export interface UnlockedAchievement {
  achievement: Achievement;
  unlockedAt: string; // ISO date
}

export const ACHIEVEMENTS: Achievement[] = [
  // Milestone achievements
  {
    id: "first-steps",
    name: "First Steps",
    description: "Complete your first workout session.",
    icon: "Footprints",
    category: "milestone",
    colour: "#58CC02",
    check: (p) => p.workoutsCompleted >= 1,
  },
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Complete 5 workout sessions.",
    icon: "Rocket",
    category: "milestone",
    colour: "#58CC02",
    check: (p) => p.workoutsCompleted >= 5,
  },
  {
    id: "committed",
    name: "Committed",
    description: "Complete 15 workout sessions.",
    icon: "Trophy",
    category: "milestone",
    colour: "#F59E0B",
    check: (p) => p.workoutsCompleted >= 15,
  },
  {
    id: "dedicated",
    name: "Dedicated",
    description: "Complete 30 workout sessions.",
    icon: "Award",
    category: "milestone",
    colour: "#7C3AED",
    check: (p) => p.workoutsCompleted >= 30,
  },
  {
    id: "century",
    name: "Century",
    description: "Complete 100 workout sessions.",
    icon: "Crown",
    category: "milestone",
    colour: "#FBBF24",
    check: (p) => p.workoutsCompleted >= 100,
  },

  // XP achievements
  {
    id: "first-hundred",
    name: "Rising Star",
    description: "Earn 100 XP total.",
    icon: "Star",
    category: "milestone",
    colour: "#F59E0B",
    check: (p) => p.totalXP >= 100,
  },
  {
    id: "xp-500",
    name: "Sharpshooter",
    description: "Earn 500 XP total.",
    icon: "Zap",
    category: "milestone",
    colour: "#7C3AED",
    check: (p) => p.totalXP >= 500,
  },
  {
    id: "xp-1000",
    name: "Grandmaster",
    description: "Earn 1,000 XP total.",
    icon: "Crown",
    category: "milestone",
    colour: "#FBBF24",
    check: (p) => p.totalXP >= 1000,
  },

  // Streak achievements
  {
    id: "streak-3",
    name: "On a Roll",
    description: "Reach a 3-day streak.",
    icon: "Flame",
    category: "streak",
    colour: "#F97316",
    check: (p) => (p.longestStreak ?? p.currentStreak) >= 3,
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    description: "Reach a 7-day streak.",
    icon: "Flame",
    category: "streak",
    colour: "#F97316",
    check: (p) => (p.longestStreak ?? p.currentStreak) >= 7,
  },
  {
    id: "streak-14",
    name: "Fortnight Force",
    description: "Reach a 14-day streak.",
    icon: "Flame",
    category: "streak",
    colour: "#EF4444",
    check: (p) => (p.longestStreak ?? p.currentStreak) >= 14,
  },
  {
    id: "streak-30",
    name: "Monthly Master",
    description: "Reach a 30-day streak.",
    icon: "Flame",
    category: "streak",
    colour: "#FBBF24",
    check: (p) => (p.longestStreak ?? p.currentStreak) >= 30,
  },

  // Exploration achievements
  {
    id: "style-explorer",
    name: "Style Explorer",
    description: "Attempt at least one scenario in all 4 communication styles.",
    icon: "Compass",
    category: "exploration",
    colour: "#3B82F6",
    check: (p) => {
      const styles: CommunicationStyle[] = ["direct", "expressive", "supportive", "analytical"];
      return styles.every((s) => p.styleScores[s].attempts > 0);
    },
  },
  {
    id: "ten-scenarios",
    name: "Scenario Sampler",
    description: "Attempt 10 different scenarios.",
    icon: "Map",
    category: "exploration",
    colour: "#3B82F6",
    check: (p) => p.completedScenarioIds.length >= 10,
  },
  {
    id: "fifty-scenarios",
    name: "Well Travelled",
    description: "Attempt 50 different scenarios.",
    icon: "Globe",
    category: "exploration",
    colour: "#059669",
    check: (p) => p.completedScenarioIds.length >= 50,
  },
  {
    id: "hundred-scenarios",
    name: "Scenario Veteran",
    description: "Attempt 100 different scenarios.",
    icon: "Globe",
    category: "exploration",
    colour: "#7C3AED",
    check: (p) => p.completedScenarioIds.length >= 100,
  },

  // Mastery achievements
  {
    id: "first-star",
    name: "Star Gazer",
    description: "Earn your first mastery star on any scenario.",
    icon: "Star",
    category: "mastery",
    colour: "#94A3B8",
    check: (p) => {
      const overview = getMasteryOverview(p);
      return overview.totalAttempted >= 1;
    },
  },
  {
    id: "first-three-star",
    name: "Perfectionist",
    description: "Earn 3 mastery stars on any scenario (90%+ score).",
    icon: "Star",
    category: "mastery",
    colour: "#FBBF24",
    check: (p) => {
      const overview = getMasteryOverview(p);
      return overview.threeStar >= 1;
    },
  },
  {
    id: "five-three-stars",
    name: "Gold Standard",
    description: "Earn 3 mastery stars on 5 different scenarios.",
    icon: "Star",
    category: "mastery",
    colour: "#FBBF24",
    check: (p) => {
      const overview = getMasteryOverview(p);
      return overview.threeStar >= 5;
    },
  },
  {
    id: "twenty-three-stars",
    name: "Master Communicator",
    description: "Earn 3 mastery stars on 20 different scenarios.",
    icon: "Award",
    category: "mastery",
    colour: "#7C3AED",
    check: (p) => {
      const overview = getMasteryOverview(p);
      return overview.threeStar >= 20;
    },
  },

  // Specialist achievements (per-style depth)
  {
    id: "direct-specialist",
    name: "Direct Specialist",
    description: "Score 80%+ accuracy on direct style with 10+ attempts.",
    icon: "Zap",
    category: "specialist",
    colour: "#FF6B6B",
    check: (p) => {
      const ss = p.styleScores.direct;
      if (ss.attempts < 10) return false;
      return ss.totalPossible > 0 && (ss.totalScore / ss.totalPossible) * 100 >= 80;
    },
  },
  {
    id: "expressive-specialist",
    name: "Expressive Specialist",
    description: "Score 80%+ accuracy on expressive style with 10+ attempts.",
    icon: "Sparkles",
    category: "specialist",
    colour: "#F59E0B",
    check: (p) => {
      const ss = p.styleScores.expressive;
      if (ss.attempts < 10) return false;
      return ss.totalPossible > 0 && (ss.totalScore / ss.totalPossible) * 100 >= 80;
    },
  },
  {
    id: "supportive-specialist",
    name: "Supportive Specialist",
    description: "Score 80%+ accuracy on supportive style with 10+ attempts.",
    icon: "Heart",
    category: "specialist",
    colour: "#059669",
    check: (p) => {
      const ss = p.styleScores.supportive;
      if (ss.attempts < 10) return false;
      return ss.totalPossible > 0 && (ss.totalScore / ss.totalPossible) * 100 >= 80;
    },
  },
  {
    id: "analytical-specialist",
    name: "Analytical Specialist",
    description: "Score 80%+ accuracy on analytical style with 10+ attempts.",
    icon: "BarChart3",
    category: "specialist",
    colour: "#3B82F6",
    check: (p) => {
      const ss = p.styleScores.analytical;
      if (ss.attempts < 10) return false;
      return ss.totalPossible > 0 && (ss.totalScore / ss.totalPossible) * 100 >= 80;
    },
  },
  {
    id: "all-rounder",
    name: "All-Rounder",
    description: "Score 70%+ accuracy on all 4 communication styles with 10+ attempts each.",
    icon: "Shield",
    category: "specialist",
    colour: "#7C3AED",
    check: (p) => {
      const styles: CommunicationStyle[] = ["direct", "expressive", "supportive", "analytical"];
      return styles.every((s) => {
        const ss = p.styleScores[s];
        if (ss.attempts < 10) return false;
        return ss.totalPossible > 0 && (ss.totalScore / ss.totalPossible) * 100 >= 70;
      });
    },
  },

  // Assessment achievement
  {
    id: "assessed",
    name: "Self-Aware",
    description: "Complete the communication style assessment.",
    icon: "ClipboardCheck",
    category: "milestone",
    colour: "#06B6D4",
    check: (p) => p.hasCompletedAssessment,
  },
];

/**
 * Get all unlocked achievements for the current progress.
 */
export function getUnlockedAchievements(progress: UserProgress): Achievement[] {
  return ACHIEVEMENTS.filter((a) => a.check(progress));
}

/**
 * Get newly unlocked achievements by comparing before/after progress.
 */
export function getNewAchievements(
  beforeProgress: UserProgress,
  afterProgress: UserProgress
): Achievement[] {
  const beforeIds = new Set(
    ACHIEVEMENTS.filter((a) => a.check(beforeProgress)).map((a) => a.id)
  );
  return ACHIEVEMENTS.filter(
    (a) => a.check(afterProgress) && !beforeIds.has(a.id)
  );
}
