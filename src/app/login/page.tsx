"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { Mail, Lock, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

type Mode = "password" | "magic-link";

export default function LoginPage() {
  const router = useRouter();
  const { signInWithEmail, signInWithMagicLink } = useAuth();
  const [mode, setMode] = useState<Mode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setLoading(true);

      if (mode === "password") {
        const { error: err } = await signInWithEmail(email, password);
        if (err) {
          setError(err);
          setLoading(false);
        } else {
          router.push("/");
        }
      } else {
        const { error: err } = await signInWithMagicLink(email);
        if (err) {
          setError(err);
          setLoading(false);
        } else {
          setMagicLinkSent(true);
          setLoading(false);
        }
      }
    },
    [mode, email, password, signInWithEmail, signInWithMagicLink, router]
  );

  if (magicLinkSent) {
    return (
      <div
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
        }}
      >
        <div className="max-w-sm w-full text-center space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ backgroundColor: "rgba(88, 204, 2, 0.2)" }}
          >
            <Mail size={32} className="text-[#58CC02]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Check your email</h2>
          <p className="text-white/70">
            We sent a sign-in link to <strong className="text-white">{email}</strong>.
            Click the link to log in.
          </p>
          <button
            onClick={() => setMagicLinkSent(false)}
            className="text-sm text-[#A78BFA] hover:underline"
          >
            Try a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div
        className="pointer-events-none fixed top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: "#7C3AED" }}
      />

      <div className="relative max-w-sm w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 16px rgba(88, 204, 2, 0.3)",
            }}
          >
            <MessageCircle size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-white/60 text-sm">
            Sign in to sync your progress across devices
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex rounded-xl overflow-hidden" style={{ border: "2px solid rgba(255,255,255,0.15)" }}>
          <button
            onClick={() => setMode("password")}
            className="flex-1 py-2.5 text-sm font-bold transition-colors"
            style={{
              background: mode === "password" ? "rgba(124, 58, 237, 0.3)" : "transparent",
              color: mode === "password" ? "#A78BFA" : "rgba(255,255,255,0.5)",
            }}
          >
            Password
          </button>
          <button
            onClick={() => setMode("magic-link")}
            className="flex-1 py-2.5 text-sm font-bold transition-colors"
            style={{
              background: mode === "magic-link" ? "rgba(124, 58, 237, 0.3)" : "transparent",
              color: mode === "magic-link" ? "#A78BFA" : "rgba(255,255,255,0.5)",
            }}
          >
            Magic Link
          </button>
        </div>

        {/* Form */}
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
                className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              />
            </div>
          </div>

          {mode === "password" && (
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-white/70">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  style={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "2px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
            </div>
          )}

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
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)",
            }}
          >
            {loading
              ? "Signing in..."
              : mode === "password"
                ? "Sign In"
                : "Send Magic Link"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white/50">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#A78BFA] font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
