"use client";

import { useState, useMemo } from "react";
import { LanguageMatchChallenge as MatchData } from "@/types";
import { STYLES } from "@/data/styles";
import { STYLE_LANGUAGE_TIPS } from "@/data/vocabulary";
import { Check, X, MessageCircle } from "lucide-react";

interface Props {
  challenge: MatchData;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: number, maxScore: number) => void;
}

export function LanguageMatchChallengeUI({
  challenge,
  questionNumber,
  totalQuestions,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Shuffle options once
  const shuffledOptions = useMemo(() => {
    const arr = [...challenge.options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [challenge]);

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);

    const option = challenge.options.find((o) => o.id === selected);
    const score = option?.isCorrect ? 10 : 0;

    setTimeout(() => onAnswer(score, 10), 2000);
  };

  const getOptionState = (optionId: string) => {
    if (!submitted) return selected === optionId ? "selected" : "idle";
    const option = challenge.options.find((o) => o.id === optionId);
    if (option?.isCorrect) return "correct";
    if (optionId === selected && !option?.isCorrect) return "wrong";
    return "idle";
  };

  const styleDef = STYLES[challenge.characterStyle];
  const OPTION_LABELS = ["A", "B", "C", "D"];

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
          <span className="font-medium">Language Match</span>
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
          <h2 className="text-2xl font-bold text-white mb-2">Match their language</h2>
          <p className="text-white/90">
            Choose the response that best matches this person&apos;s communication style.
          </p>
        </div>

        {/* Character speech */}
        <div
          className="w-full rounded-2xl p-6 mb-6"
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
              <MessageCircle size={22} className="text-[#7C3AED]" />
            </div>
            <p className="text-lg text-white font-medium leading-relaxed italic">
              &ldquo;{challenge.characterSays}&rdquo;
            </p>
          </div>
        </div>

        {/* Response options */}
        <div className="w-full space-y-3 mb-8">
          {shuffledOptions.map((option, idx) => {
            const state = getOptionState(option.id);
            const originalIdx = challenge.options.findIndex((o) => o.id === option.id);

            return (
              <button
                key={option.id}
                onClick={() => !submitted && setSelected(option.id)}
                disabled={submitted}
                className={`
                  w-full rounded-2xl p-4 text-left transition-all duration-200 flex items-start gap-3
                  ${submitted ? "cursor-default" : "cursor-pointer hover:-translate-y-0.5"}
                `}
                style={{
                  background:
                    state === "correct"
                      ? "rgba(88, 204, 2, 0.15)"
                      : state === "wrong"
                      ? "rgba(255, 107, 107, 0.15)"
                      : state === "selected"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(15, 23, 42, 0.6)",
                  border:
                    state === "correct"
                      ? "2px solid #58CC02"
                      : state === "wrong"
                      ? "2px solid #FF6B6B"
                      : state === "selected"
                      ? "2px solid white"
                      : "2px solid rgba(255,255,255,0.15)",
                  opacity: submitted && state === "idle" ? 0.4 : 1,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
                  style={{
                    background:
                      state === "correct"
                        ? "#58CC02"
                        : state === "wrong"
                        ? "#FF6B6B"
                        : "rgba(255,255,255,0.15)",
                    color: "white",
                  }}
                >
                  {state === "correct" ? (
                    <Check size={18} strokeWidth={3} />
                  ) : state === "wrong" ? (
                    <X size={18} strokeWidth={3} />
                  ) : (
                    OPTION_LABELS[idx]
                  )}
                </div>
                <p className="text-white/90 text-sm leading-relaxed pt-1">
                  {option.text}
                </p>
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
              {challenge.options.find((o) => o.id === selected)?.isCorrect
                ? "Correct!"
                : "Not quite."}
            </p>
            <p className="text-sm text-white/90">
              {challenge.explanation}
            </p>
            <p className="text-sm text-white/70 italic">
              {STYLE_LANGUAGE_TIPS[challenge.characterStyle]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
