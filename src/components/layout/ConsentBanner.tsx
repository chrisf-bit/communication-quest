"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";
import { hasConsented, saveConsent } from "@/lib/consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on page load
    const timer = setTimeout(() => {
      if (!hasConsented()) {
        setVisible(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    saveConsent(false);
    setVisible(false);
  }

  function handleAcceptAll() {
    saveConsent(true);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
      style={{ background: "rgba(15, 23, 42, 0.98)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: "rgba(124, 58, 237, 0.15)" }}
          >
            <Shield size={20} className="text-purple-400" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-sm sm:text-base font-medium mb-1">
              Your privacy matters
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              This app stores your progress and preferences in your browser&apos;s local storage.
              No data is sent to external servers. By continuing, you consent to this storage.
              Read our{" "}
              <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="text-white/40 hover:text-white/70 transition-colors flex-shrink-0 sm:hidden"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex items-center justify-end gap-3 mt-4">
          <Link
            href="/privacy"
            className="text-white/50 hover:text-white/70 text-xs sm:text-sm transition-colors"
          >
            Privacy Policy
          </Link>
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 transition-all hover:bg-white/15"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
