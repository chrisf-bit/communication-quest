"use client";

import { useState, useMemo } from "react";
import { CommunicationStyle, WordSortChallenge as WordSortData } from "@/types";
import { STYLES, STYLE_GRID_ORDER } from "@/data/styles";
import { STYLE_LANGUAGE_TIPS } from "@/data/vocabulary";
import { Check, X, ArrowRight } from "lucide-react";

const STYLE_BG: Record<CommunicationStyle, string> = {
  direct: "linear-gradient(145deg, #DC2626, #B91C1C)",
  expressive: "linear-gradient(145deg, #FBBF24, #F59E0B)",
  supportive: "linear-gradient(145deg, #059669, #047857)",
  analytical: "linear-gradient(145deg, #2563EB, #1D4ED8)",
};

interface Props {
  challenge: WordSortData;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: number, maxScore: number) => void;
}

export function WordSortChallengeUI({
  challenge,
  questionNumber,
  totalQuestions,
  onAnswer,
}: Props) {
  const [assignments, setAssignments] = useState<Record<string, CommunicationStyle | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  // Shuffle words once
  const shuffledWords = useMemo(() => {
    const arr = [...challenge.words];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [challenge]);

  const [activeWord, setActiveWord] = useState<string | null>(null);

  const allAssigned = shuffledWords.every((w) => assignments[w.word] != null);

  const handleStyleClick = (style: CommunicationStyle) => {
    if (submitted || !activeWord) return;
    setAssignments((prev) => ({ ...prev, [activeWord]: style }));
    // Find next unassigned word
    const nextUnassigned = shuffledWords.find(
      (w) => w.word !== activeWord && !assignments[w.word] && assignments[w.word] !== style
    );
    setActiveWord(nextUnassigned?.word ?? null);
  };

  const handleWordClick = (word: string) => {
    if (submitted) return;
    setActiveWord(word === activeWord ? null : word);
  };

  const handleSubmit = () => {
    if (!allAssigned || submitted) return;
    setSubmitted(true);
    const correct = shuffledWords.filter(
      (w) => assignments[w.word] === w.style
    ).length;
    const score = Math.round((correct / shuffledWords.length) * 10);
    setFinalScore(score);
  };

  const getWordResult = (word: string, correctStyle: CommunicationStyle) => {
    if (!submitted) return null;
    return assignments[word] === correctStyle ? "correct" : "wrong";
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
          <span className="font-medium">Word Sort</span>
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
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Sort these words</h2>
          <p className="text-white/90">
            Tap a word, then tap the style it belongs to.
          </p>
        </div>

        {/* Words to sort */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {shuffledWords.map(({ word, style: correctStyle }) => {
            const assigned = assignments[word];
            const result = getWordResult(word, correctStyle);
            const isActive = activeWord === word;

            return (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                disabled={submitted}
                className={`
                  px-5 py-3 rounded-xl font-bold text-base transition-all duration-200
                  ${submitted ? "cursor-default" : "cursor-pointer"}
                  ${isActive ? "ring-2 ring-white scale-105" : ""}
                `}
                style={{
                  background: assigned
                    ? STYLE_BG[assigned]
                    : "rgba(255,255,255,0.1)",
                  border: result === "correct"
                    ? "2px solid #58CC02"
                    : result === "wrong"
                    ? "2px solid #FF6B6B"
                    : isActive
                    ? "2px solid white"
                    : "2px solid rgba(255,255,255,0.2)",
                  color: "white",
                }}
              >
                <span className="flex items-center gap-2">
                  {word}
                  {result === "correct" && <Check size={18} className="text-[#58CC02]" />}
                  {result === "wrong" && <X size={18} className="text-[#FF6B6B]" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Style buckets */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-lg mb-8">
          {STYLE_GRID_ORDER.map((style) => {
            const styleDef = STYLES[style];
            const assignedWords = shuffledWords.filter(
              (w) => assignments[w.word] === style
            );
            const isTarget = activeWord != null;

            return (
              <button
                key={style}
                onClick={() => handleStyleClick(style)}
                disabled={submitted || !activeWord}
                className={`
                  rounded-2xl p-4 text-center transition-all duration-200
                  ${isTarget && !submitted ? "cursor-pointer hover:-translate-y-0.5" : "cursor-default"}
                `}
                style={{
                  background: STYLE_BG[style],
                  border: "2px solid rgba(255,255,255,0.3)",
                  opacity: isTarget || submitted ? 1 : 0.6,
                }}
              >
                <span className="font-bold text-white text-sm">{styleDef.name}</span>
                {assignedWords.length > 0 && (
                  <div className="mt-2 flex flex-wrap justify-center gap-1">
                    {assignedWords.map((w) => (
                      <span
                        key={w.word}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                      >
                        {w.word}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Submit / Feedback */}
        {!submitted && allAssigned && (
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

        {submitted && (
          <div
            className="w-full rounded-2xl p-5 text-center space-y-3"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.2)",
              animation: "fade-up 0.3s ease-out",
            }}
          >
            {(() => {
              const correct = shuffledWords.filter(
                (w) => assignments[w.word] === w.style
              ).length;
              const total = shuffledWords.length;
              // Find the first incorrect word to show its style tip
              const firstWrong = shuffledWords.find(
                (w) => assignments[w.word] !== w.style
              );
              const tipStyle = firstWrong ? firstWrong.style : shuffledWords[0].style;

              return (
                <>
                  <p className="text-white font-bold text-lg">
                    {correct === total
                      ? "All correct!"
                      : `${correct} of ${total} correct`}
                  </p>
                  {correct < total && (
                    <div className="space-y-2">
                      {shuffledWords
                        .filter((w) => assignments[w.word] !== w.style)
                        .map((w) => (
                          <p key={w.word} className="text-sm text-white/90">
                            <span className="font-bold" style={{ color: STYLES[w.style].colour }}>
                              {w.word}
                            </span>
                            {" "}belongs to{" "}
                            <span className="font-bold" style={{ color: STYLES[w.style].colour }}>
                              {STYLES[w.style].name}
                            </span>
                          </p>
                        ))}
                    </div>
                  )}
                  <p className="text-sm text-white/70 italic">
                    {STYLE_LANGUAGE_TIPS[tipStyle]}
                  </p>
                </>
              );
            })()}
            <button
              onClick={() => finalScore !== null && onAnswer(finalScore, 10)}
              className="mt-2 px-10 py-3 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 mx-auto transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #58CC02, #46A302)",
                boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
              }}
            >
              Next
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
