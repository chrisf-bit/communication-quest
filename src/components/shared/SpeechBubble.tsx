"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { CommunicationStyle } from "@/types";
import { STYLES } from "@/data/styles";
import { Volume2, VolumeX } from "lucide-react";

interface SpeechBubbleProps {
  text: string;
  style: CommunicationStyle;
  characterName: string;
  animated?: boolean;
  voicePitch?: number;
  voiceRate?: number;
  neutral?: boolean; // Hide style colours (for gameplay, no hints)
  autoSpeak?: boolean; // Start speaking automatically on mount
}

export function SpeechBubble({
  text,
  style,
  characterName,
  animated = true,
  voicePitch = 1,
  voiceRate = 0.95,
  neutral = false,
  autoSpeak = false,
}: SpeechBubbleProps) {
  const [displayedText, setDisplayedText] = useState(animated ? "" : text);
  const [isComplete, setIsComplete] = useState(!animated);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const hasSpoken = useRef(false);

  // Use neutral colours during gameplay, style colours in feedback
  const accentColour = neutral ? "#CBD5E1" : STYLES[style].colour;
  const bgColour = neutral ? "rgba(0,0,0,0.6)" : STYLES[style].colourLight;
  const borderColour = neutral ? "rgba(255,255,255,0.4)" : STYLES[style].colour;

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = voicePitch;
    utterance.rate = voiceRate;
    utterance.volume = 0.85;
    utterance.lang = "en-GB";

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.lang.startsWith("en-GB") && v.name.includes("Female")
    ) || voices.find(
      (v) => v.lang.startsWith("en-GB")
    ) || voices.find(
      (v) => v.lang.startsWith("en")
    );
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text, voicePitch, voiceRate]);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // Typewriter animation
  useEffect(() => {
    if (!animated) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);
    hasSpoken.current = false;
    let index = 0;
    const speed = Math.max(15, Math.min(30, 1500 / text.length));

    const interval = setInterval(() => {
      index += 1;
      if (index >= text.length) {
        setDisplayedText(text);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        setDisplayedText(text.substring(0, index));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, animated]);

  // Pre-load voices and auto-speak if requested
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const voices = window.speechSynthesis.getVoices();
    if (autoSpeak && !hasSpoken.current && voices.length > 0) {
      hasSpoken.current = true;
      speak();
    }

    // Voices may load async - listen for voiceschanged
    if (autoSpeak && !hasSpoken.current) {
      const onVoicesChanged = () => {
        if (!hasSpoken.current) {
          hasSpoken.current = true;
          speak();
        }
      };
      window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      return () => window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
    }
  }, [autoSpeak, speak]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {characterName && (
        <span className={`text-xs font-medium ml-3 ${neutral ? "text-white/70" : "text-muted-foreground"}`}>
          {characterName}
        </span>
      )}
      <div
        className={`relative rounded-2xl rounded-tl-sm px-5 py-4 max-w-2xl transition-all duration-300 ${neutral ? "backdrop-blur-xl" : ""}`}
        style={{
          backgroundColor: bgColour,
          borderLeft: `4px solid ${borderColour}`,
          ...(neutral ? { border: `2px solid rgba(255,255,255,0.3)`, borderLeft: `4px solid rgba(255,255,255,0.5)` } : {}),
        }}
      >
        <p className={`text-base leading-relaxed pr-8 ${neutral ? "text-white/90" : "text-foreground"}`}>
          {"\u201C"}{displayedText}
          {!isComplete && (
            <span
              className="inline-block w-0.5 h-4 ml-0.5 animate-pulse align-text-bottom"
              style={{ backgroundColor: accentColour }}
            />
          )}
          {isComplete && "\u201D"}
        </p>

        {/* Audio control button */}
        <button
          onClick={isSpeaking ? stopSpeaking : speak}
          className="absolute top-3 right-3 p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            backgroundColor: isSpeaking ? accentColour : `${accentColour}20`,
            color: isSpeaking ? "white" : accentColour,
          }}
          title={isSpeaking ? "Stop speaking" : "Listen to dialogue"}
        >
          {isSpeaking ? (
            <VolumeX size={22} />
          ) : (
            <Volume2 size={22} />
          )}
        </button>

        {/* Speaking pulse indicator - fixed height to prevent layout shift */}
        <div className="h-4 flex items-center gap-1 mt-1">
          {isSpeaking && [0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                backgroundColor: accentColour,
                animation: `soundbar 0.6s ease-in-out ${i * 0.1}s infinite alternate`,
                height: "8px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
