"use client";

import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { SCENARIO_PACKS, getScenariosForPack, getPackStats } from "@/data/scenarioPacks";
import { SCENARIOS } from "@/data/scenarios";
import { loadProgress } from "@/lib/progress/store";
import { getMasteryStars } from "@/lib/progress/mastery";
import { UserProgress } from "@/types";
import { Package, ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function PacksPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const packData = useMemo(() => {
    if (!progress) return [];
    return SCENARIO_PACKS.map((pack) => {
      const stats = getPackStats(pack, SCENARIOS, progress.completedScenarioIds);
      const scenarios = getScenariosForPack(pack, SCENARIOS);

      // Count mastery stars for this pack
      let threeStarCount = 0;
      for (const s of scenarios) {
        const mastery = progress.scenarioMastery?.[s.id];
        if (mastery && getMasteryStars(mastery) >= 3) {
          threeStarCount++;
        }
      }

      return { pack, stats, threeStarCount, scenarioCount: scenarios.length };
    });
  }, [progress]);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#7C3AED" }}
      />
      <div
        className="pointer-events-none fixed bottom-32 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ background: "#F59E0B" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Package size={30} className="text-[#A78BFA]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Scenario Packs
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Themed collections of scenarios grouped by workplace context. Pick a pack to focus your training.
          </p>
        </div>

        {/* Pack grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packData.map(({ pack, stats, threeStarCount, scenarioCount }) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[pack.icon] ?? Package;
            const isComplete = stats.completed === stats.total && stats.total > 0;

            return (
              <Link
                key={pack.id}
                href={`/packs/${pack.id}`}
                className="group relative rounded-2xl p-6 space-y-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg backdrop-blur-xl overflow-hidden"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: `2px solid ${pack.colour}40`,
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: pack.colour }}
                />

                <div className="relative z-10">
                  {/* Icon + title */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${pack.colour}25` }}
                    >
                      <IconComponent size={24} style={{ color: pack.colour }} />
                    </div>
                    {isComplete && (
                      <CheckCircle2 size={20} className="text-emerald-400" />
                    )}
                  </div>

                  <h3 className="font-bold text-lg text-white mt-3">
                    {pack.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mt-1">
                    {pack.description}
                  </p>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-xs font-bold text-white/50">
                      {scenarioCount} scenarios
                    </span>
                    {stats.completed > 0 && (
                      <span className="text-xs font-bold" style={{ color: pack.colour }}>
                        {stats.completed}/{stats.total} played
                      </span>
                    )}
                    {threeStarCount > 0 && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                        <Star size={12} fill="#FBBF24" />
                        {threeStarCount}
                      </span>
                    )}
                  </div>

                  {/* Progress bar */}
                  {stats.completed > 0 && (
                    <div className="mt-3">
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${stats.percentage}%`,
                            background: `linear-gradient(90deg, ${pack.colour}, ${pack.colour}BB)`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Difficulty breakdown */}
                  <div className="flex gap-2 mt-3">
                    {stats.difficulties.foundation > 0 && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(88, 204, 2, 0.15)", color: "#58CC02" }}
                      >
                        {stats.difficulties.foundation} Foundation
                      </span>
                    )}
                    {stats.difficulties.intermediate > 0 && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#F59E0B" }}
                      >
                        {stats.difficulties.intermediate} Intermediate
                      </span>
                    )}
                    {stats.difficulties.advanced > 0 && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#EF4444" }}
                      >
                        {stats.difficulties.advanced} Advanced
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} className="text-white/40" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
