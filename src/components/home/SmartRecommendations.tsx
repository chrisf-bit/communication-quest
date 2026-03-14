"use client";

import Link from "next/link";
import { UserProgress, CommunicationStyle } from "@/types";
import { getWeakestStyle, getStylePercentage } from "@/lib/progress/stats";
import { getNextUnlock } from "@/lib/progress/levelGating";
import { STYLES, STYLE_LIST } from "@/data/styles";
import { Target, BookOpen, RefreshCw, TrendingUp, ArrowRight, Lock, RotateCcw } from "lucide-react";
import { getDueCount } from "@/lib/progress/mastery";

interface Recommendation {
  id: string;
  icon: typeof Target;
  title: string;
  description: string;
  href: string;
  colour: string;
  bgColour: string;
  borderColour: string;
}

function getRecommendations(progress: UserProgress): Recommendation[] {
  const recs: Recommendation[] = [];

  // 1. Weakest style recommendation
  const weakStyle = getWeakestStyle(progress);
  if (weakStyle) {
    const weakPct = getStylePercentage(progress, weakStyle);
    const styleDef = STYLES[weakStyle];
    recs.push({
      id: "weak-style",
      icon: Target,
      title: "Focus area",
      description: `Your ${weakStyle} style is at ${weakPct}% - try a focused practice session to improve.`,
      href: "/practice",
      colour: styleDef.colour,
      bgColour: `${styleDef.colour}15`,
      borderColour: `${styleDef.colour}40`,
    });
  }

  // 2. Unexplored styles
  const unexplored = STYLE_LIST.filter(
    (s) => progress.styleScores[s].attempts === 0
  );
  if (unexplored.length > 0 && unexplored.length < 4) {
    const style = unexplored[0];
    const styleDef = STYLES[style];
    recs.push({
      id: "unexplored",
      icon: TrendingUp,
      title: "New territory",
      description: `You haven't practised ${style} style yet. Try it to round out your skills.`,
      href: "/practice",
      colour: styleDef.colour,
      bgColour: `${styleDef.colour}15`,
      borderColour: `${styleDef.colour}40`,
    });
  }

  // 3. Vocabulary recommendation if they've done workouts but not vocab
  if (progress.workoutsCompleted >= 2) {
    recs.push({
      id: "vocab",
      icon: BookOpen,
      title: "Build your vocabulary",
      description: "Learn the words and phrases each communication style typically uses.",
      href: "/practice",
      colour: "#A78BFA",
      bgColour: "rgba(124, 58, 237, 0.12)",
      borderColour: "rgba(124, 58, 237, 0.4)",
    });
  }

  // 4. Unlock progress
  const nextUnlock = getNextUnlock(progress.totalXP);
  if (nextUnlock) {
    recs.push({
      id: "unlock",
      icon: Lock,
      title: `Unlock ${nextUnlock.difficulty} scenarios`,
      description: `${nextUnlock.xpNeeded} more XP to unlock ${nextUnlock.difficulty} difficulty. Keep training!`,
      href: "/workout",
      colour: "#A78BFA",
      bgColour: "rgba(124, 58, 237, 0.12)",
      borderColour: "rgba(124, 58, 237, 0.4)",
    });
  }

  // 5. Spaced repetition - scenarios due for review
  const dueCount = getDueCount(progress);
  if (dueCount > 0) {
    recs.push({
      id: "review-due",
      icon: RotateCcw,
      title: `${dueCount} scenario${dueCount === 1 ? "" : "s"} due for review`,
      description: "Revisit scenarios you've practised before to strengthen your skills.",
      href: "/workout",
      colour: "#F59E0B",
      bgColour: "rgba(245, 158, 11, 0.12)",
      borderColour: "rgba(245, 158, 11, 0.4)",
    });
  }

  // 6. Replay suggestion if they've completed many scenarios
  if (progress.completedScenarioIds.length >= 6) {
    recs.push({
      id: "replay",
      icon: RefreshCw,
      title: "Replay for mastery",
      description: `You've seen ${progress.completedScenarioIds.length} scenarios. Replay them to improve your scores.`,
      href: "/workout",
      colour: "#38BDF8",
      bgColour: "rgba(56, 189, 248, 0.12)",
      borderColour: "rgba(56, 189, 248, 0.4)",
    });
  }

  // Return max 2 recommendations
  return recs.slice(0, 2);
}

interface SmartRecommendationsProps {
  progress: UserProgress;
}

export function SmartRecommendations({ progress }: SmartRecommendationsProps) {
  const recommendations = getRecommendations(progress);

  if (recommendations.length === 0) return null;

  return (
    <div className="space-y-3">
      {recommendations.map((rec) => {
        const Icon = rec.icon;
        return (
          <Link
            key={rec.id}
            href={rec.href}
            className="block rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${rec.bgColour}, transparent)`,
              border: `2px solid ${rec.borderColour}`,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${rec.colour}25` }}
              >
                <Icon size={24} style={{ color: rec.colour }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">{rec.title}</p>
                <p className="text-sm text-white/70 mt-0.5">{rec.description}</p>
              </div>
              <ArrowRight size={20} className="text-white/50 flex-shrink-0" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
