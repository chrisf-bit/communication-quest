"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useOptionalAuth } from "@/components/providers/AuthProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  MessagesSquare,
  Mail,
  ArrowRight,
  Users,
  Clock,
  Check,
  AlertCircle,
} from "lucide-react";

interface CohortInfo {
  name: string;
  orgName: string;
  seatLimit: number;
  seatsUsed: number;
  expiresAt: string;
  expired: boolean;
  full: boolean;
}

type Phase = "loading" | "info" | "email" | "link-sent" | "joining" | "joined" | "error";

export default function JoinPage() {
  const params = useParams();
  const router = useRouter();
  const code = params.code as string;
  const auth = useOptionalAuth();

  const [phase, setPhase] = useState<Phase>("loading");
  const [cohortInfo, setCohortInfo] = useState<CohortInfo | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sendingLink, setSendingLink] = useState(false);

  // Load cohort info
  useEffect(() => {
    fetch(`/api/join?code=${code}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setPhase("error");
        } else {
          setCohortInfo(data);
          setPhase("info");
        }
      })
      .catch(() => {
        setError("Failed to load cohort information");
        setPhase("error");
      });
  }, [code]);

  // If user is already authenticated, auto-join
  useEffect(() => {
    if (phase !== "info" || !auth?.user) return;

    setPhase("joining");
    fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ joinCode: code }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setPhase("error");
        } else {
          setPhase("joined");
          // Redirect to home after a moment
          setTimeout(() => router.push("/"), 2000);
        }
      })
      .catch(() => {
        setError("Failed to join cohort");
        setPhase("error");
      });
  }, [phase, auth?.user, code, router]);

  if (phase === "loading") {
    return <PageShell><p className="text-white/70">Loading...</p></PageShell>;
  }

  if (phase === "error") {
    return (
      <PageShell>
        <div className="max-w-sm w-full text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: "rgba(239, 68, 68, 0.2)" }}
          >
            <AlertCircle size={32} className="text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Unable to Join</h2>
          <p className="text-white/70">{error}</p>
        </div>
      </PageShell>
    );
  }

  if (phase === "joining") {
    return <PageShell><p className="text-white/70">Joining cohort...</p></PageShell>;
  }

  if (phase === "joined") {
    return (
      <PageShell>
        <div className="max-w-sm w-full text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: "rgba(88, 204, 2, 0.2)" }}
          >
            <Check size={32} className="text-[#58CC02]" />
          </div>
          <h2 className="text-2xl font-bold text-white">You're In</h2>
          <p className="text-white/70">
            Welcome to <strong className="text-white">{cohortInfo?.name}</strong>. Redirecting you to the app...
          </p>
        </div>
      </PageShell>
    );
  }

  if (phase === "link-sent") {
    return (
      <PageShell>
        <div className="max-w-sm w-full text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: "rgba(88, 204, 2, 0.2)" }}
          >
            <Mail size={32} className="text-[#58CC02]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Check your email</h2>
          <p className="text-white/70">
            We sent a sign-in link to <strong className="text-white">{email}</strong>.
            Click the link to join <strong className="text-white">{cohortInfo?.name}</strong>.
          </p>
          <button
            onClick={() => { setPhase("info"); setEmail(""); }}
            className="text-sm text-[#A78BFA] hover:underline"
          >
            Try a different email
          </button>
        </div>
      </PageShell>
    );
  }

  // Phase: info or email (unauthenticated user)
  if (!cohortInfo) return null;

  const spotsLeft = cohortInfo.seatLimit - cohortInfo.seatsUsed;

  return (
    <PageShell>
      <div className="relative max-w-sm w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              boxShadow: "0 4px 16px rgba(249, 115, 22, 0.3)",
            }}
          >
            <MessagesSquare size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Join {cohortInfo.name}</h1>
          <p className="text-white/60 text-sm">
            {cohortInfo.orgName} has invited you to Communication Quest
          </p>
        </div>

        {/* Cohort details */}
        <div
          className="rounded-2xl p-4 space-y-2.5"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(88, 204, 2, 0.2)" }}
            >
              <Check size={12} className="text-[#58CC02]" />
            </div>
            <span className="text-sm text-white/80">Full access to all scenarios and training modes</span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(88, 204, 2, 0.2)" }}
            >
              <Check size={12} className="text-[#58CC02]" />
            </div>
            <span className="text-sm text-white/80">Cloud-saved progress across all devices</span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(88, 204, 2, 0.2)" }}
            >
              <Check size={12} className="text-[#58CC02]" />
            </div>
            <span className="text-sm text-white/80">Style assessment and personalised learning path</span>
          </div>
        </div>

        {/* Status badges */}
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-white/50">
            <Users size={14} />
            <span>{spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} remaining</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <Clock size={14} />
            <span>Until {new Date(cohortInfo.expiresAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Email form */}
        {!auth?.user && (
          <EmailForm
            email={email}
            setEmail={setEmail}
            sending={sendingLink}
            error={error}
            joinCode={code}
            onSent={() => setPhase("link-sent")}
            onSending={setSendingLink}
            onError={setError}
          />
        )}
      </div>
    </PageShell>
  );
}

function EmailForm({
  email,
  setEmail,
  sending,
  error,
  joinCode,
  onSent,
  onSending,
  onError,
}: {
  email: string;
  setEmail: (e: string) => void;
  sending: boolean;
  error: string | null;
  joinCode: string;
  onSent: () => void;
  onSending: (s: boolean) => void;
  onError: (e: string | null) => void;
}) {
  const { signInWithMagicLink } = useAuth();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      onError(null);
      onSending(true);

      // The magic link will redirect back to this join page
      // Once authenticated, the useEffect will auto-join the cohort
      const { error: err } = await signInWithMagicLink(email, `/join/${joinCode}`);
      if (err) {
        onError(err);
        onSending(false);
      } else {
        onSent();
        onSending(false);
      }
    },
    [email, signInWithMagicLink, onSent, onSending, onError]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-bold text-white/70">Email</label>
        <div className="relative">
          <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          />
        </div>
      </div>

      {error && (
        <div
          className="rounded-xl p-3 text-sm text-red-300"
          style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)" }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        style={{
          background: "linear-gradient(135deg, #F97316, #EA580C)",
          boxShadow: "0 4px 16px rgba(249, 115, 22, 0.3)",
        }}
      >
        {sending ? "Sending link..." : "Join with Email"}
        {!sending && <ArrowRight size={18} />}
      </button>

      <p className="text-center text-xs text-white/40">
        We'll send you a sign-in link. No password needed.
      </p>
    </form>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#F97316" }}
      />
      {children}
    </div>
  );
}
