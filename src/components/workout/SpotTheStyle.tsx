"use client";

import { useState } from "react";
import { CommunicationStyle, Scenario, Character } from "@/types";
import { STYLES, STYLE_GRID_ORDER } from "@/data/styles";
import { ScenarioHeader } from "./ScenarioHeader";
import { Eye, Check } from "lucide-react";

// Solid gradient backgrounds matching style cards across the app
const BUTTON_BG: Record<CommunicationStyle, string> = {
  direct: "linear-gradient(145deg, #DC2626, #B91C1C)",
  expressive: "linear-gradient(145deg, #FBBF24, #F59E0B)",
  supportive: "linear-gradient(145deg, #059669, #047857)",
  analytical: "linear-gradient(145deg, #2563EB, #1D4ED8)",
};

interface SpotTheStyleProps {
  scenario: Scenario;
  character: Character;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedStyle: CommunicationStyle) => void;
}

export function SpotTheStyle({
  scenario,
  character,
  questionNumber,
  totalQuestions,
  onAnswer,
}: SpotTheStyleProps) {
  const [selected, setSelected] = useState<CommunicationStyle | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (selected && !confirmed) {
      setConfirmed(true);
      onAnswer(selected);
    }
  };

  return (
    <ScenarioHeader
      scenario={scenario}
      character={character}
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      questionType="spot"
    >
      {/* Answer panel - user interaction area with green accent */}
      <div
        className="backdrop-blur-xl rounded-t-3xl px-6 pt-6 pb-8"
        style={{
          background: "rgba(15, 23, 42, 0.9)",
          borderTop: "3px solid rgba(124, 58, 237, 0.5)",
          animation: "slide-up 0.4s ease-out",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="w-13 h-13 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(124, 58, 237, 0.15)", width: "52px", height: "52px" }}
            >
              <Eye size={28} className="text-[#A78BFA]" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              What style is this?
            </h3>
          </div>


          <div className="grid grid-cols-2 gap-3">
            {STYLE_GRID_ORDER.map((style) => {
              const styleDef = STYLES[style];
              const bg = BUTTON_BG[style];
              const isSelected = selected === style;
              return (
                <button
                  key={style}
                  onClick={() => !confirmed && setSelected(style)}
                  disabled={confirmed}
                  className={`
                    relative rounded-2xl p-5 transition-all duration-200
                    ${confirmed ? "opacity-50 cursor-default" : "cursor-pointer hover:-translate-y-1 active:translate-y-0.5"}
                  `}
                  style={{
                    background: bg,
                    borderWidth: isSelected ? "3px" : "2px",
                    borderStyle: "solid",
                    borderColor: isSelected
                      ? "white"
                      : "rgba(255,255,255,0.3)",
                  }}
                >
                  {isSelected && (
                    <div
                      className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-white"
                    >
                      <Check
                        size={18}
                        strokeWidth={3}
                        className="text-slate-900"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-base capitalize text-white">
                      {styleDef.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {selected && !confirmed && (
            <button
              onClick={handleConfirm}
              className="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:bg-white/10"
              style={{
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.6)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </ScenarioHeader>
  );
}
