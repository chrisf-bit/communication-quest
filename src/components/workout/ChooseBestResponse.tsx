"use client";

import { useState, useMemo } from "react";
import { Scenario, Character } from "@/types";
import { ScenarioHeader } from "./ScenarioHeader";
import { MessageSquare, Check } from "lucide-react";


interface ChooseBestResponseProps {
  scenario: Scenario;
  character: Character;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
}

export function ChooseBestResponse({
  scenario,
  character,
  questionNumber,
  totalQuestions,
  onAnswer,
}: ChooseBestResponseProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  // Shuffle options to prevent position-based cheating
  const shuffledOptions = useMemo(() => {
    const arr = [...scenario.chooseQuestion.options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [scenario]);

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
      questionType="choose"
      dialogueOverride={scenario.chooseDialogue}
      contextOverride={scenario.chooseContext}
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
              className="rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(124, 58, 237, 0.15)", width: "52px", height: "52px" }}
            >
              <MessageSquare size={28} className="text-[#A78BFA]" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              Pick the best response
            </h3>
          </div>


          <div className="space-y-2.5">
            {shuffledOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => !confirmed && setSelected(option.id)}
                disabled={confirmed}
                className={`
                  w-full text-left p-4 rounded-2xl transition-all duration-200
                  ${confirmed ? "opacity-50 cursor-default" : "cursor-pointer hover:-translate-y-0.5 active:translate-y-0.5"}
                `}
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor:
                    selected === option.id
                      ? "rgba(59,130,246,0.8)"
                      : "rgba(255,255,255,0.3)",
                  background:
                    selected === option.id
                      ? "rgba(59,130,246,0.25)"
                      : "rgba(0,0,0,0.4)",
                  animation: `slide-in-right 0.4s ease-out ${0.3 + index * 0.1}s both`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 font-semibold text-sm"
                    style={{
                      background:
                        selected === option.id
                          ? "linear-gradient(135deg, #3B82F6, #2563EB)"
                          : "rgba(255,255,255,0.12)",
                      color: selected === option.id ? "white" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    {selected === option.id ? (
                      <Check size={18} strokeWidth={3} />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-white/90">
                    {option.text}
                  </p>
                </div>
              </button>
            ))}
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
