"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { Mail, Lock, ArrowRight, MessageCircle, Check } from "lucide-react";

export default function SignupPage() {
  const { signUpWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      setLoading(true);
      const { error: err } = await signUpWithEmail(email, password);
      if (err) {
        setError(err);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    },
    [email, password, signUpWithEmail]
  );

  if (success) {
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
            <Check size={32} className="text-[#58CC02]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Check your email</h2>
          <p className="text-white/70">
            We sent a confirmation link to <strong className="text-white">{email}</strong>.
            Click the link to verify your account.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-[#A78BFA] font-bold hover:underline"
          >
            Go to sign in
            <ArrowRight size={16} />
          </Link>
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
        style={{ background: "#58CC02" }}
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
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="text-white/60 text-sm">
            Save your progress and train across devices
          </p>
        </div>

        {/* Benefits */}
        <div
          className="rounded-2xl p-4 space-y-2.5"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            "Cloud-saved progress across all devices",
            "Full access to all scenarios and modes",
            "Track your style mastery over time",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(88, 204, 2, 0.2)" }}
              >
                <Check size={12} className="text-[#58CC02]" />
              </div>
              <span className="text-sm text-white/80">{item}</span>
            </div>
          ))}
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
                className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#58CC02]"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-white/70">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="At least 6 characters"
                className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#58CC02]"
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
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #58CC02, #46A302)",
              boxShadow: "0 4px 16px rgba(88, 204, 2, 0.3)",
            }}
          >
            {loading ? "Creating account..." : "Create Account"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white/50">
          Already have an account?{" "}
          <Link href="/login" className="text-[#A78BFA] font-bold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
