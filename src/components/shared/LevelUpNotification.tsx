"use client";

import { useEffect, useState } from "react";
import { ProficiencyLevel, PROFICIENCY_TIERS } from "@/types";
import { Shield, Star, Zap, Swords, Crown } from "lucide-react";

const LEVEL_ICONS: Record<ProficiencyLevel, typeof Star> = {
  rookie: Shield,
  "rising-star": Star,
  "sharp-shooter": Zap,
  ninja: Swords,
  jedi: Crown,
};

const LEVEL_COLOURS: Record<ProficiencyLevel, string> = {
  rookie: "#94A3B8",
  "rising-star": "#F59E0B",
  "sharp-shooter": "#3B82F6",
  ninja: "#7C3AED",
  jedi: "#059669",
};

interface LevelUpNotificationProps {
  newLevel: ProficiencyLevel;
  context?: string; // e.g. "Direct" or "Overall"
  onDismiss: () => void;
}

export function LevelUpNotification({
  newLevel,
  context,
  onDismiss,
}: LevelUpNotificationProps) {
  const [visible, setVisible] = useState(false);
  const tier = PROFICIENCY_TIERS.find((t) => t.level === newLevel) ?? PROFICIENCY_TIERS[0];
  const Icon = LEVEL_ICONS[newLevel];
  const colour = LEVEL_COLOURS[newLevel];

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setVisible(true), 50);
    // Auto dismiss after 4 seconds
    const dismiss = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 300);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(dismiss);
    };
  }, [onDismiss]);

  return (
    <div
      className="fixed top-[4.5rem] left-1/2 -translate-x-1/2 z-[100] transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0" : "-20px"})`,
      }}
    >
      <div
        className="rounded-2xl px-6 py-4 flex items-center gap-4 backdrop-blur-xl cursor-pointer"
        style={{
          background: "rgba(15, 23, 42, 0.95)",
          border: `2px solid ${colour}60`,
          boxShadow: `0 8px 32px ${colour}30`,
        }}
        onClick={() => {
          setVisible(false);
          setTimeout(onDismiss, 300);
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${colour}, ${colour}BB)`,
            boxShadow: `0 4px 16px ${colour}40`,
          }}
        >
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">
            Level Up{context ? ` - ${context}` : ""}
          </p>
          <p className="text-lg font-bold text-white">{tier.label}</p>
        </div>
      </div>
    </div>
  );
}
