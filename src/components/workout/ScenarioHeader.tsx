"use client";

import { useState, type ReactNode } from "react";
import { Scenario, Character, QuestionType } from "@/types";
import { SceneCharacter } from "@/components/shared/SceneCharacter";
import { SpeechBubble } from "@/components/shared/SpeechBubble";
import { DifficultyBadge } from "@/components/shared/DifficultyBadge";
import { WorkplaceScene, WorkplaceSceneForeground, hashToScene } from "@/components/shared/WorkplaceScene";
import { MapPin, MessageCircle } from "lucide-react";

interface ScenarioHeaderProps {
  scenario: Scenario;
  character: Character;
  questionNumber: number;
  totalQuestions: number;
  questionType?: QuestionType;
  dialogueOverride?: string;
  contextOverride?: string;
  children?: ReactNode;
}

function getVoiceParams(seed: string, style: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const val = Math.abs(hash);
  const styleRate: Record<string, number> = {
    direct: 1.05,
    expressive: 1.0,
    supportive: 0.92,
    analytical: 0.88,
  };
  return { pitch: 0.85 + (val % 40) / 100, rate: styleRate[style] || 0.95 };
}

const EXPRESSION_MAP: Record<
  QuestionType,
  "speaking" | "thinking" | "neutral"
> = {
  spot: "speaking",
  choose: "thinking",
  rewrite: "neutral",
  vocabulary: "neutral",
};

// Where the character stands in each scene type (percentage-based positioning)
const SCENE_POSITIONS: Record<number, { bottom: string; left: string; height: string }> = {
  0: { bottom: "-5%", left: "4%", height: "140%" },   // Office - standing beside the desk
  1: { bottom: "-3%", left: "24%", height: "135%" },  // Meeting - standing at head of table
  2: { bottom: "-5%", left: "28%", height: "140%" },  // Presentation - standing at podium
  3: { bottom: "-5%", left: "10%", height: "138%" },  // Break room - standing near counter
};

export function ScenarioHeader({
  scenario,
  character,
  questionNumber,
  totalQuestions,
  questionType = "spot",
  dialogueOverride,
  contextOverride,
  children,
}: ScenarioHeaderProps) {
  const voice = getVoiceParams(character.avatarSeed, character.style);
  const expression = EXPRESSION_MAP[questionType];
  const dialogue = dialogueOverride || scenario.dialogue;
  const context = contextOverride || scenario.context;
  const [started, setStarted] = useState(false);
  const sceneIndex = hashToScene(scenario.id);
  const charPos = SCENE_POSITIONS[sceneIndex] || SCENE_POSITIONS[0];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Dark gradient base background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-3.5rem)]">
        {/* Top bar: Progress */}
        <div className="px-6 pt-4 pb-2 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div
              className="flex-1 h-3 rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(questionNumber / totalQuestions) * 100}%`,
                  background: "linear-gradient(90deg, #58CC02, #89E219)",
                }}
              />
            </div>
            <span className="text-sm font-bold text-white whitespace-nowrap"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              {questionNumber}/{totalQuestions}
            </span>
            <DifficultyBadge difficulty={scenario.difficulty} />
          </div>
        </div>

        {/* Context bar */}
        <div className="px-6 pb-3 max-w-4xl mx-auto w-full">
          <div
            className="inline-flex items-start gap-2.5 px-5 py-3 rounded-xl text-base text-white/90 font-medium leading-relaxed"
            style={{
              backgroundColor: "rgba(30, 27, 75, 0.85)",
              border: "2px solid rgba(99, 102, 241, 0.4)",
            }}
          >
            <MapPin size={20} className="flex-shrink-0 mt-0.5 text-indigo-400" />
            {context}
          </div>
        </div>

        {/* Main content area - character left, panels right */}
        <div className="relative flex-1 flex flex-row">
          {/* Left column: Scene + Character */}
          <div className="relative w-1/3 sm:w-2/5 flex-shrink-0">
            <div className="absolute inset-0 overflow-hidden">
              <WorkplaceScene seed={scenario.id} />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.02) 40%, rgba(15,23,42,0.1) 70%, rgba(15,23,42,0.3) 100%)",
                }}
              />
            </div>

            {/* Character */}
            <div
              className="absolute z-10"
              style={{
                bottom: "0%",
                left: "10%",
                height: "90%",
                filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.6))",
              }}
            >
              {/* Name tag */}
              <div
                className="flex flex-col items-center gap-0.5 mb-1 px-3 py-1.5 rounded-xl mx-auto w-fit"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span className="text-sm font-semibold text-white text-center leading-tight whitespace-nowrap">
                  {character.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/90">
                  {character.role}
                </span>
              </div>
              <SceneCharacter
                seed={character.avatarSeed}
                style={character.style}
                expression={started ? expression : "neutral"}
                animated={true}
              />
            </div>

            {/* Foreground furniture */}
            <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none">
              <WorkplaceSceneForeground seed={scenario.id} />
            </div>
          </div>

          {/* Right column: Dialogue + Answer panel */}
          <div className="flex-1 flex flex-col z-20 min-w-0">
            {/* Speech / intro */}
            <div className="px-4 sm:px-6 pt-3">
              <div className="w-full max-w-lg">
                {!started ? (
                  <div className="space-y-4" style={{ animation: "slide-in-right 0.3s ease-out" }}>
                    <div
                      className="rounded-2xl p-5 space-y-3"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.75)",
                        border: "2px solid rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <p className="text-white text-base font-medium leading-relaxed">
                        {character.name} wants to talk to you.
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Read the context above, then tap below when you&apos;re ready to hear what they have to say.
                      </p>
                      <button
                        onClick={() => setStarted(true)}
                        className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                        style={{
                          background: "linear-gradient(135deg, #58CC02, #46A302)",
                          boxShadow: "0 4px 20px rgba(88, 204, 2, 0.4)",
                        }}
                      >
                        <MessageCircle size={24} />
                        Hear them out
                      </button>
                    </div>
                  </div>
                ) : (
                  <SpeechBubble
                    text={dialogue}
                    style={scenario.targetStyle}
                    characterName=""
                    animated={true}
                    autoSpeak={true}
                    voicePitch={voice.pitch}
                    voiceRate={voice.rate}
                    neutral={true}
                  />
                )}
              </div>
            </div>

            {/* Answer panel */}
            {started && children && <div className="mt-auto">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
