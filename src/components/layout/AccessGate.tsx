"use client";

import { usePathname } from "next/navigation";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Clock, Sparkles, Mail, KeyRound } from "lucide-react";
import { type ReactNode } from "react";

// Pages that should always be accessible regardless of cohort status
const PUBLIC_PATHS = [
  "/login",
  "/signup",
  "/join",
  "/admin",
  "/facilitator",
  "/auth",
  "/privacy",
];

export function AccessGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { accessStatus, isLoading } = useProgress();

  // Always allow public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return <>{children}</>;
  }

  // Still loading - show nothing (the loading state is handled by individual pages)
  if (isLoading || !accessStatus) {
    return <>{children}</>;
  }

  // Access granted
  if (accessStatus.hasAccess) {
    return <>{children}</>;
  }

  // Cohort expired
  if (accessStatus.reason === "cohort-expired") {
    return (
      <ExpiredScreen
        cohortName={accessStatus.cohortName}
        expiresAt={accessStatus.expiresAt}
      />
    );
  }

  // Free trial expired
  if (accessStatus.reason === "trial-expired") {
    return <TrialExpiredScreen />;
  }

  // Default: allow access
  return <>{children}</>;
}

function ExpiredScreen({ cohortName, expiresAt }: { cohortName?: string; expiresAt?: string }) {
  const expiredDate = expiresAt ? new Date(expiresAt).toLocaleDateString() : "recently";

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "#7C3AED" }}
      />

      <div className="relative max-w-md w-full text-center space-y-8">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
          style={{
            background: "linear-gradient(135deg, #F97316, #EA580C)",
            boxShadow: "0 8px 32px rgba(249, 115, 22, 0.3)",
          }}
        >
          <Clock size={40} className="text-white" />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">Cohort Access Expired</h1>
          <p className="text-white/70">
            Your access to <strong className="text-white">{cohortName || "Communication Quest"}</strong> ended on {expiredDate}.
          </p>
        </div>

        <div
          className="rounded-2xl p-5 space-y-3 text-left"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            Want to continue training?
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Contact your training provider to extend your access, or reach out to us directly to discuss options.
          </p>
          <a
            href="mailto:chris@rapid-learn.co.uk"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
            }}
          >
            <Mail size={16} />
            Contact Rapid Learn
          </a>
        </div>

        <p className="text-xs text-white/40">
          Your progress data is saved and will be available if your access is renewed.
        </p>
      </div>
    </div>
  );
}

function TrialExpiredScreen() {
  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "#7C3AED" }}
      />

      <div className="relative max-w-md w-full text-center space-y-8">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: "0 8px 32px rgba(124, 58, 237, 0.3)",
          }}
        >
          <Sparkles size={40} className="text-white" />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">Your Free Trial Has Ended</h1>
          <p className="text-white/70">
            Thanks for trying <strong className="text-white">Communication Quest</strong>. Your 3-day free trial has now ended.
          </p>
        </div>

        <div
          className="rounded-2xl p-5 space-y-4 text-left"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            Ready to keep going?
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Join a 12-week cohort to unlock full access to all scenarios, packs, and progress tracking. Get in touch to find out more.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:chris@rapid-learn.co.uk?subject=Communication%20Quest%20-%20Full%20Access"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
              }}
            >
              <Mail size={16} />
              Get Full Access
            </a>
            <a
              href="/join"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white/80 text-sm transition-all duration-200 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <KeyRound size={16} />
              I have a join code
            </a>
          </div>
        </div>

        <p className="text-xs text-white/40">
          Your progress is saved and will be waiting for you when you get full access.
        </p>
      </div>
    </div>
  );
}
