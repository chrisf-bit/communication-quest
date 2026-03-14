"use client";

import { useEffect, useState } from "react";
import { FeedbackContent, FeedbackResult, CommunicationStyle, QuestionType } from "@/types";
import { STYLES } from "@/data/styles";
import { StyleBadge } from "@/components/shared/StyleBadge";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Sparkles,
  TrendingUp,
  ThumbsUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface FeedbackPanelProps {
  feedback: FeedbackContent;
  score: number;
  maxScore: number;
  targetStyle: CommunicationStyle;
  questionType: QuestionType;
  exampleResponse?: string;
  detectedTraits?: string[];
  missingTraits?: string[];
  onContinue: () => void;
}

const RESULT_CONFIG: Record<
  FeedbackResult,
  { label: string; colour: string; sceneBg: string; Icon: typeof ThumbsUp }
> = {
  strong: {
    label: "Great Match",
    colour: "#059669",
    sceneBg: "linear-gradient(160deg, #ECFDF5 0%, #D1FAE5 40%, #A7F3D050 100%)",
    Icon: Sparkles,
  },
  partial: {
    label: "Getting There",
    colour: "#D97706",
    sceneBg: "linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 40%, #FDE68A50 100%)",
    Icon: TrendingUp,
  },
  weak: {
    label: "Room to Grow",
    colour: "#FF6B6B",
    sceneBg: "linear-gradient(160deg, #FFF1F2 0%, #FFE4E6 40%, #FECDD350 100%)",
    Icon: ThumbsUp,
  },
};

// Style-matching meter
function StyleMeter({ score, maxScore, colour }: { score: number; maxScore: number; colour: string }) {
  const [animatedPct, setAnimatedPct] = useState(0);
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPct(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const segments = 20;
  const filledSegments = Math.round((animatedPct / 100) * segments);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: `${colour}99` }}>
          Style Match
        </span>
        <span className="text-3xl font-bold" style={{ color: colour }}>
          {Math.round(animatedPct)}%
        </span>
      </div>
      <div className="flex gap-1 h-4">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all duration-500 ease-out"
            style={{
              backgroundColor: i < filledSegments ? colour : "rgba(0,0,0,0.06)",
              opacity: i < filledSegments ? 1 - (i * 0.012) : 1,
              transitionDelay: `${i * 30}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function FeedbackPanel({
  feedback,
  score,
  maxScore,
  targetStyle,
  questionType,
  exampleResponse,
  detectedTraits,
  missingTraits,
  onContinue,
}: FeedbackPanelProps) {
  const config = RESULT_CONFIG[feedback.result];
  const ResultIcon = config.Icon;
  const styleColour = STYLES[targetStyle].colour;

  return (
    <div className="space-y-5" style={{ animation: "fade-up 0.4s ease-out" }}>
      {/* Result scene - full coloured background */}
      <div
        className="relative rounded-3xl overflow-hidden px-8 py-8"
        style={{
          background: config.sceneBg,
          borderLeft: `5px solid ${config.colour}`,
        }}
      >
        {/* Decorative blurs */}
        <div
          className="absolute top-4 right-8 w-28 h-28 rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: config.colour }}
        />
        <div
          className="absolute bottom-4 left-10 w-36 h-36 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: config.colour }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${config.colour}, ${config.colour}CC)` }}
            >
              <ResultIcon size={32} className="text-white" />
            </div>
            <h3
              className="font-bold text-3xl"
              style={{ color: config.colour }}
            >
              {config.label}
            </h3>
          </div>

          <StyleMeter score={score} maxScore={maxScore} colour={config.colour} />
        </div>
      </div>

      {/* Coaching cards - white panels */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-border/30 space-y-5">
        {/* Style insight */}
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${styleColour}15` }}
          >
            <StyleBadge style={targetStyle} size="sm" showLabel={false} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: styleColour }}>
              Style Insight
            </span>
            <p className="text-base text-foreground/75 leading-relaxed mt-1">{feedback.observation}</p>
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Coaching tip */}
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
          >
            <Lightbulb size={20} className="text-white" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">
              Coach&apos;s Tip
            </span>
            <p className="text-base text-foreground/75 leading-relaxed mt-1">{feedback.coachingTip}</p>
          </div>
        </div>

        {/* Detected/missing traits */}
        {questionType === "rewrite" && (detectedTraits?.length || missingTraits?.length) && (
          <>
            <hr className="border-border/30" />
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
              >
                <Target size={20} className="text-white" />
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  What We Spotted
                </span>
                {detectedTraits && detectedTraits.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {detectedTraits.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"
                      >
                        <CheckCircle2 size={12} />
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {missingTraits && missingTraits.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {missingTraits.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200"
                      >
                        <AlertTriangle size={12} />
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Example strong response */}
        {exampleResponse && (
          <>
            <hr className="border-border/30" />
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Example Strong Response
              </span>
              <p className="text-base text-foreground/80 italic leading-relaxed mt-2">
                {"\u201C"}{exampleResponse}{"\u201D"}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 active:scale-[0.98]"
        style={{
          background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
          boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
        }}
      >
        Continue
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
