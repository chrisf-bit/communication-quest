import { ScenarioCategory, Scenario, Difficulty } from "@/types";

export interface ScenarioPack {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  colour: string;
  /** Scenarios are included if their category matches */
  categories: ScenarioCategory[];
  /** Optional: only include specific scenario IDs */
  scenarioIds?: string[];
}

/**
 * Themed scenario packs.
 * Each pack groups scenarios by workplace context.
 * Scenarios can appear in multiple packs if they fit.
 */
export const SCENARIO_PACKS: ScenarioPack[] = [
  {
    id: "meetings-mastery",
    name: "Meetings Mastery",
    description: "Navigate meetings, stand-ups, and group discussions with every style.",
    icon: "Users",
    colour: "#3B82F6",
    categories: ["meeting"],
  },
  {
    id: "feedback-conversations",
    name: "Feedback Conversations",
    description: "Give and receive feedback tailored to each communication style.",
    icon: "MessageCircle",
    colour: "#059669",
    categories: ["feedback"],
  },
  {
    id: "client-relationships",
    name: "Client Relationships",
    description: "Build rapport and manage client expectations across styles.",
    icon: "Briefcase",
    colour: "#F59E0B",
    categories: ["client", "sales"],
  },
  {
    id: "team-dynamics",
    name: "Team Dynamics",
    description: "Collaborate across teams and manage cross-functional relationships.",
    icon: "Network",
    colour: "#8B5CF6",
    categories: ["team"],
  },
  {
    id: "difficult-conversations",
    name: "Difficult Conversations",
    description: "Handle disagreements, tension, and conflict with different styles.",
    icon: "AlertTriangle",
    colour: "#EF4444",
    categories: ["conflict"],
  },
  {
    id: "written-comms",
    name: "Written Communication",
    description: "Craft emails, messages, and written updates that land with each style.",
    icon: "Mail",
    colour: "#06B6D4",
    categories: ["email"],
  },
  {
    id: "one-to-ones",
    name: "One-to-One Conversations",
    description: "Coaching, performance reviews, and individual check-ins.",
    icon: "UserCheck",
    colour: "#EC4899",
    categories: ["one-to-one"],
  },
  {
    id: "presentations",
    name: "Presenting with Impact",
    description: "Adapt your presentation style to engage different audiences.",
    icon: "Presentation",
    colour: "#F97316",
    categories: ["presentation"],
  },
  {
    id: "negotiations",
    name: "Negotiation Skills",
    description: "Navigate contract discussions and terms with style awareness.",
    icon: "Handshake",
    colour: "#14B8A6",
    categories: ["negotiation"],
  },
  {
    id: "remote-working",
    name: "Remote Communication",
    description: "Communicate effectively on video calls and in async channels.",
    icon: "Monitor",
    colour: "#6366F1",
    categories: ["remote"],
  },
];

/**
 * Get scenarios that belong to a pack.
 */
export function getScenariosForPack(pack: ScenarioPack, allScenarios: Scenario[]): Scenario[] {
  if (pack.scenarioIds) {
    return allScenarios.filter((s) => pack.scenarioIds!.includes(s.id));
  }
  return allScenarios.filter((s) => pack.categories.includes(s.category));
}

/**
 * Get pack completion stats.
 */
export function getPackStats(
  pack: ScenarioPack,
  allScenarios: Scenario[],
  completedIds: string[]
): {
  total: number;
  completed: number;
  percentage: number;
  difficulties: Record<Difficulty, number>;
} {
  const packScenarios = getScenariosForPack(pack, allScenarios);
  const completed = packScenarios.filter((s) => completedIds.includes(s.id)).length;
  const difficulties: Record<Difficulty, number> = {
    foundation: packScenarios.filter((s) => s.difficulty === "foundation").length,
    intermediate: packScenarios.filter((s) => s.difficulty === "intermediate").length,
    advanced: packScenarios.filter((s) => s.difficulty === "advanced").length,
  };

  return {
    total: packScenarios.length,
    completed,
    percentage: packScenarios.length > 0 ? Math.round((completed / packScenarios.length) * 100) : 0,
    difficulties,
  };
}
