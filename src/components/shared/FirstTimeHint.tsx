"use client";

import { useState, useEffect } from "react";
import { Lightbulb, X } from "lucide-react";

interface FirstTimeHintProps {
  hintKey: string; // localStorage key suffix
  title: string;
  description: string;
}

export function FirstTimeHint({ hintKey, title, description }: FirstTimeHintProps) {
  const [visible, setVisible] = useState(false);
  const storageKey = `cq-hint-seen-${hintKey}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = localStorage.getItem(storageKey);
    if (!seen) {
      setVisible(true);
    }
  }, [storageKey]);

  const dismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, "true");
    }
  };

  if (!visible) return null;

  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl mb-3"
      style={{
        background: "rgba(120, 80, 0, 0.25)",
        border: "2px solid rgba(251, 191, 36, 0.5)",
        animation: "slide-up 0.3s ease-out",
      }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
        style={{ background: "#FBBF24" }}
      >
        <Lightbulb size={16} className="text-black" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#FBBF24] mb-1">{title}</p>
        <p className="text-sm leading-relaxed text-white/80">{description}</p>
      </div>
      <button
        onClick={dismiss}
        className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X size={16} className="text-white/80" />
      </button>
    </div>
  );
}
