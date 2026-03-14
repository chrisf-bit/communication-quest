"use client";

import { type ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { ProgressProvider } from "./ProgressProvider";

/**
 * App-level providers. Always wraps auth + progress context.
 * If Supabase env vars are not set, AuthProvider still mounts but
 * auth operations will fail gracefully and the app falls back to localStorage.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ProgressProvider>{children}</ProgressProvider>
    </AuthProvider>
  );
}
