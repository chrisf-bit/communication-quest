"use client";

import { useState } from "react";
import { Scenario, Character } from "@/types";
import { ScenarioHeader } from "./ScenarioHeader";
import { PenLine, Send } from "lucide-react";


interface RewriteResponseProps {
  scenario: Scenario;
  character: Character;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (text: string) => void;
}

export function RewriteResponse({
  scenario,
  character,
  questionNumber,
  totalQuestions,
  onAnswer,
}: RewriteResponseProps) {
  const [text, setText] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const canSubmit = wordCount >= 3 && !confirmed;

  const handleConfirm = () => {
    if (canSubmit) {
      setConfirmed(true);
      onAnswer(text.trim());
    }
  };

  return (
    <ScenarioHeader
      scenario={scenario}
      character={character}
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      questionType="rewrite"
      dialogueOverride={scenario.rewriteDialogue}
      contextOverride={scenario.rewriteContext}
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
              <PenLine size={28} className="text-[#A78BFA]" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              Write your response
            </h3>
          </div>


          {/* Scenario prompt - tells the user what to respond to */}
          <p className="text-sm leading-relaxed text-white/80 italic">
            {scenario.rewriteQuestion.prompt}
          </p>

          <textarea
            value={text}
            onChange={(e) => !confirmed && setText(e.target.value)}
            disabled={confirmed}
            placeholder="Type your response here..."
            rows={4}
            className={`
              w-full p-4 rounded-2xl text-base leading-relaxed resize-none
              transition-all duration-200 text-white placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-white/20
              ${confirmed ? "opacity-50 cursor-default" : ""}
            `}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor:
                text.length > 0
                  ? "rgba(59,130,246,0.5)"
                  : "rgba(255,255,255,0.15)",
            }}
          />
          <div className="flex items-center justify-between text-sm">
            <span
              className="font-semibold"
              style={{ color: wordCount >= 3 ? "#58CC02" : "rgba(255,255,255,0.7)" }}
            >
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </span>
            <span className="text-white/70 font-medium">1-3 sentences</span>
          </div>

          {canSubmit && (
            <button
              onClick={handleConfirm}
              className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white/10"
              style={{
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.6)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <Send size={24} />
              Submit
            </button>
          )}
        </div>
      </div>
    </ScenarioHeader>
  );
}
