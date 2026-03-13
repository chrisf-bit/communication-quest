"use client";

import { CommunicationStyle } from "@/types";
import { STYLES } from "@/data/styles";
import {
  Zap,
  Sparkles,
  Heart,
  BarChart3,
} from "lucide-react";

const ICON_MAP = {
  direct: Zap,
  expressive: Sparkles,
  supportive: Heart,
  analytical: BarChart3,
};

interface StyleBadgeProps {
  style: CommunicationStyle;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function StyleBadge({
  style,
  size = "md",
  showLabel = true,
  selected = false,
  onClick,
  disabled = false,
}: StyleBadgeProps) {
  const styleDef = STYLES[style];
  const Icon = ICON_MAP[style];

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  const isInteractive = !!onClick;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center rounded-full font-medium transition-all duration-200
        ${sizeClasses[size]}
        ${
          isInteractive && !disabled
            ? "cursor-pointer hover:scale-105 active:scale-95"
            : "cursor-default"
        }
        ${disabled ? "opacity-50" : ""}
      `}
      style={{
        backgroundColor: selected ? styleDef.colour : styleDef.colourLight,
        color: selected ? "white" : styleDef.colour,
        border: `2px solid ${selected ? styleDef.colour : "transparent"}`,
        boxShadow: selected ? `0 0 0 3px ${styleDef.colour}20` : "none",
      }}
    >
      <Icon size={iconSizes[size]} />
      {showLabel && <span>{styleDef.name}</span>}
    </button>
  );
}
