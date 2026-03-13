"use client";

import { useState, useMemo } from "react";
import { VocabularyChallenge, CommunicationStyle } from "@/types";
import { STYLES, STYLE_GRID_ORDER } from "@/data/styles";
import { getVocabMoment } from "@/data/vocabulary";
import { BookOpen, ArrowRight, Check, X } from "lucide-react";

interface VocabMomentProps {
  targetStyle: CommunicationStyle;
  onComplete: (correct: boolean) => void;
}

const STYLE_BG: Record<CommunicationStyle, string> = {
  direct: "linear-gradient(145deg, #DC2626, #B91C1C)",
  expressive: "linear-gradient(145deg, #F59E0B, #D97706)",
  supportive: "linear-gradient(145deg, #059669, #047857)",
  analytical: "linear-gradient(145deg, #2563EB, #1D4ED8)",
};

export function VocabMoment({ targetStyle, onComplete }: VocabMomentProps) {
  const challenge = useMemo(() => getVocabMoment(targetStyle), [targetStyle]);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSentenceDetection = (style: CommunicationStyle) => {
    if (answered || challenge.type !== "sentence-detection") return;
    const correct = style === challenge.correctStyle;
    setSelectedAnswer(style);
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleLanguageMatch = (optionId: string) => {
    if (answered || challenge.type !== "language-match") return;
    const option = challenge.options.find((o) => o.id === optionId);
    const correct = option?.isCorrect ?? false;
    setSelectedAnswer(optionId);
    setIsCorrect(correct);
    setAnswered(true);
  };

  return (
    <div
      className="rounded-2xl p-6 space-y-5"
      style={{
        background: "rgba(124, 58, 237, 0.1)",
        border: "2px solid rgba(124, 58, 237, 0.3)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(124, 58, 237, 0.2)" }}
        >
          <BookOpen size={22} className="text-[#7C3AED]" />
        </div>
        <div>
          <p className="text-xs text-[#A78BFA] uppercase tracking-wider font-semibold">
            Vocab Moment
          </p>
          <p className="text-sm text-white/70">Quick language check</p>
        </div>
      </div>

      {/* Sentence Detection */}
      {challenge.type === "sentence-detection" && (
        <div className="space-y-4">
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <p className="text-white text-sm italic leading-relaxed">
              &ldquo;{challenge.sentence}&rdquo;
            </p>
          </div>
          <p className="text-sm text-white/70">Which style does this sound like?</p>
          <div className="grid grid-cols-2 gap-3">
            {STYLE_GRID_ORDER.map((style) => {
              const isSelected = selectedAnswer === style;
              const isCorrectAnswer = style === challenge.correctStyle;

              let borderColour = "rgba(255,255,255,0.2)";
              let bg = "rgba(255,255,255,0.05)";

              if (answered) {
                if (isCorrectAnswer) {
                  borderColour = "#059669";
                  bg = "rgba(5, 150, 105, 0.15)";
                } else if (isSelected && !isCorrect) {
                  borderColour = "#FF6B6B";
                  bg = "rgba(255, 107, 107, 0.15)";
                }
              }

              return (
                <button
                  key={style}
                  onClick={() => handleSentenceDetection(style)}
                  disabled={answered}
                  className="rounded-xl p-3 text-sm font-bold text-white transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ background: bg, border: `2px solid ${borderColour}` }}
                >
                  {answered && isCorrectAnswer && <Check size={16} className="text-emerald-400" />}
                  {answered && isSelected && !isCorrect && <X size={16} className="text-rose-400" />}
                  {STYLES[style].name}
                </button>
              );
            })}
          </div>
          {answered && (
            <p className="text-sm text-white/70">{challenge.explanation}</p>
          )}
        </div>
      )}

      {/* Language Match */}
      {challenge.type === "language-match" && (
        <div className="space-y-4">
          <div
            className="rounded-xl p-4"
            style={{
              background: STYLE_BG[challenge.characterStyle],
            }}
          >
            <p className="text-white text-sm leading-relaxed">
              {challenge.characterSays}
            </p>
          </div>
          <p className="text-sm text-white/70">Pick the best response for their style:</p>
          <div className="space-y-2">
            {challenge.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectAnswer = option.isCorrect;

              let borderColour = "rgba(255,255,255,0.15)";
              let bg = "rgba(255,255,255,0.05)";

              if (answered) {
                if (isCorrectAnswer) {
                  borderColour = "#059669";
                  bg = "rgba(5, 150, 105, 0.15)";
                } else if (isSelected && !isCorrect) {
                  borderColour = "#FF6B6B";
                  bg = "rgba(255, 107, 107, 0.15)";
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleLanguageMatch(option.id)}
                  disabled={answered}
                  className="w-full rounded-xl p-3 text-sm text-white text-left transition-all duration-200 flex items-center gap-2"
                  style={{ background: bg, border: `2px solid ${borderColour}` }}
                >
                  {answered && isCorrectAnswer && <Check size={16} className="text-emerald-400 flex-shrink-0" />}
                  {answered && isSelected && !isCorrect && <X size={16} className="text-rose-400 flex-shrink-0" />}
                  {option.text}
                </button>
              );
            })}
          </div>
          {answered && (
            <p className="text-sm text-white/70">{challenge.explanation}</p>
          )}
        </div>
      )}

      {/* Word Sort - simplified for vocab moment (just show 4 words, pick the style) */}
      {challenge.type === "word-sort" && (() => {
        // For vocab moment, pick 1 random word and ask which style it belongs to
        const randomWord = challenge.words[Math.floor(Math.random() * challenge.words.length)];
        return (
          <div className="space-y-4">
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <p className="text-2xl font-bold text-white">{randomWord.word}</p>
            </div>
            <p className="text-sm text-white/70">Which communication style uses this word most?</p>
            <div className="grid grid-cols-2 gap-3">
              {STYLE_GRID_ORDER.map((style) => {
                const isSelected = selectedAnswer === style;
                const isCorrectAnswer = style === randomWord.style;

                let borderColour = "rgba(255,255,255,0.2)";
                let bg = "rgba(255,255,255,0.05)";

                if (answered) {
                  if (isCorrectAnswer) {
                    borderColour = "#059669";
                    bg = "rgba(5, 150, 105, 0.15)";
                  } else if (isSelected && !isCorrect) {
                    borderColour = "#FF6B6B";
                    bg = "rgba(255, 107, 107, 0.15)";
                  }
                }

                return (
                  <button
                    key={style}
                    onClick={() => {
                      if (answered) return;
                      const correct = style === randomWord.style;
                      setSelectedAnswer(style);
                      setIsCorrect(correct);
                      setAnswered(true);
                    }}
                    disabled={answered}
                    className="rounded-xl p-3 text-sm font-bold text-white transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: bg, border: `2px solid ${borderColour}` }}
                  >
                    {answered && isCorrectAnswer && <Check size={16} className="text-emerald-400" />}
                    {answered && isSelected && !isCorrect && <X size={16} className="text-rose-400" />}
                    {STYLES[style].name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Continue button */}
      {answered && (
        <button
          onClick={() => onComplete(isCorrect)}
          className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
          }}
        >
          Continue
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
}
