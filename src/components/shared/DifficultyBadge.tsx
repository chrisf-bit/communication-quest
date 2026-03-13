"use client";

import { Difficulty } from "@/types";

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { label: string; colour: string; bg: string }
> = {
  foundation: { label: "Foundation", colour: "#58CC02", bg: "rgba(88, 204, 2, 0.15)" },
  intermediate: { label: "Intermediate", colour: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)" },
  advanced: { label: "Advanced", colour: "#FF6B6B", bg: "rgba(255, 107, 107, 0.15)" },
};

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const config = DIFFICULTY_CONFIG[difficulty];

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
      style={{ backgroundColor: config.bg, color: config.colour }}
    >
      {config.label}
    </span>
  );
}
