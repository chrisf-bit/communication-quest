"use client";

import { useState } from "react";
import { CommunicationStyle, SentenceDetectionChallenge as SentenceData } from "@/types";
import { STYLES, STYLE_GRID_ORDER } from "@/data/styles";
import { STYLE_LANGUAGE_TIPS } from "@/data/vocabulary";
import { Check, X, MessageSquare } from "lucide-react";

const STYLE_BG: Record<CommunicationStyle, string> = {
  direct: "linear-gradient(145deg, #DC2626, #B91C1C)",
  expressive: "linear-gradient(145deg, #FBBF24, #F59E0B)",
  supportive: "linear-gradient(145deg, #059669, #047857)",
  analytical: "linear-gradient(145deg, #2563EB, #1D4ED8)",
};

// Style adjacency for partial credit
const STYLE_ADJACENCY: Record<CommunicationStyle, CommunicationStyle> = {
  direct: "analytical",
  analytical: "direct",
  expressive: "supportive",
  supportive: "expressive",
};

interface Props {
  challenge: SentenceData;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: number, maxScore: number) => void;
}

export function SentenceDetectionChallengeUI({
  challenge,
  questionNumber,
  totalQuestions,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<CommunicationStyle | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);

    let score = 0;
    if (selected === challenge.correctStyle) {
      score = 10;
    } else if (
      challenge.adjacentStyle
        ? selected === challenge.adjacentStyle
        : selected === STYLE_ADJACENCY[challenge.correctStyle]
    ) {
      score = 5;
    }

    setTimeout(() => onAnswer(score, 10), 2000);
  };

  const getButtonState = (style: CommunicationStyle) => {
    if (!submitted) return selected === style ? "selected" : "idle";
    if (style === challenge.correctStyle) return "correct";
    if (style === selected && style !== challenge.correctStyle) return "wrong";
    return "idle";
  };

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex flex-col"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        animation: "fade-up 0.4s ease-out",
      }}
    >
      {/* Progress bar */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between text-sm text-white/90 mb-2">
          <span className="font-bold">Question {questionNumber} of {totalQuestions}</span>
          <span className="font-medium">Sentence Detection</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
              background: "linear-gradient(90deg, #58CC02, #46A302)",
            }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-3xl mx-auto w-full">
        {/* Instruction */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Which style is this?</h2>
          <p className="text-white/90">
            Read the sentence and identify the communication style.
          </p>
        </div>

        {/* Sentence card */}
        <div
          className="w-full rounded-2xl p-6 mb-8"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.2)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124, 58, 237, 0.2)" }}
            >
              <MessageSquare size={22} className="text-[#7C3AED]" />
            </div>
            <p className="text-lg text-white font-medium leading-relaxed italic">
              &ldquo;{challenge.sentence}&rdquo;
            </p>
          </div>
        </div>

        {/* Style choices */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-lg mb-8">
          {STYLE_GRID_ORDER.map((style) => {
            const styleDef = STYLES[style];
            const state = getButtonState(style);

            return (
              <button
                key={style}
                onClick={() => !submitted && setSelected(style)}
                disabled={submitted}
                className={`
                  relative rounded-2xl p-5 text-center transition-all duration-200
                  ${submitted ? "cursor-default" : "cursor-pointer hover:-translate-y-1 active:translate-y-0.5"}
                `}
                style={{
                  background: STYLE_BG[style],
                  borderWidth: state === "selected" ? "3px" : "2px",
                  borderStyle: "solid",
                  borderColor:
                    state === "correct"
                      ? "#58CC02"
                      : state === "wrong"
                      ? "#FF6B6B"
                      : state === "selected"
                      ? "white"
                      : "rgba(255,255,255,0.3)",
                  opacity: submitted && state === "idle" ? 0.4 : 1,
                }}
              >
                {state === "correct" && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#58CC02]">
                    <Check size={16} strokeWidth={3} className="text-white" />
                  </div>
                )}
                {state === "wrong" && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#FF6B6B]">
                    <X size={16} strokeWidth={3} className="text-white" />
                  </div>
                )}
                <span className="font-bold text-base text-white">
                  {styleDef.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Submit */}
        {!submitted && selected && (
          <button
            onClick={handleSubmit}
            className="px-10 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
            }}
          >
            Submit
          </button>
        )}

        {/* Feedback */}
        {submitted && (
          <div
            className="w-full rounded-2xl p-5 text-center space-y-3"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.2)",
              animation: "fade-up 0.3s ease-out",
            }}
          >
            <p className="text-white font-bold text-lg">
              {selected === challenge.correctStyle
                ? "Correct!"
                : selected === (challenge.adjacentStyle ?? STYLE_ADJACENCY[challenge.correctStyle])
                ? "Close - partial credit!"
                : "Not quite."}
            </p>
            <p className="text-sm text-white/90">
              {challenge.explanation}
            </p>
            <p className="text-sm text-white/70 italic">
              {STYLE_LANGUAGE_TIPS[challenge.correctStyle]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
