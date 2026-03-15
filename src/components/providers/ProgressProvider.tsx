"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { UserProgress } from "@/types";
import { ProgressAdapter } from "@/lib/progress/adapter";
import { LocalStorageAdapter } from "@/lib/progress/localAdapter";
import { SupabaseAdapter } from "@/lib/progress/supabaseAdapter";
import { mergeProgress } from "@/lib/progress/merge";
import { loadProgress as loadLocalProgress, saveProgress as saveLocalProgress } from "@/lib/progress/store";
import { useOptionalAuth } from "./AuthProvider";
import { createClient } from "@/lib/supabase/client";

const BACKUP_KEY = "communication-quest-progress-backup";
const MIGRATED_KEY = "communication-quest-migrated";

interface AccessStatus {
  hasAccess: boolean;
  reason: "admin" | "facilitator" | "active-cohort" | "not-authenticated" | "no-cohort" | "cohort-expired";
  cohortName?: string;
  expiresAt?: string;
}

interface ProgressContextValue {
  progress: UserProgress | null;
  isLoading: boolean;
  accessStatus: AccessStatus | null;
  saveProgress: (progress: UserProgress) => Promise<void>;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
}

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const auth = useOptionalAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [accessStatus, setAccessStatus] = useState<AccessStatus | null>(null);
  const adapterRef = useRef<ProgressAdapter>(new LocalStorageAdapter());

  // Select adapter based on auth state
  useEffect(() => {
    if (auth?.isLoading) return;

    const setupAdapter = async () => {
      setIsLoading(true);

      if (auth?.user) {
        // Authenticated: use Supabase adapter
        const supabase = createClient();
        const supabaseAdapter = new SupabaseAdapter(supabase, auth.user.id);
        adapterRef.current = supabaseAdapter;

        // Check if we need to migrate localStorage data
        const needsMigration =
          typeof window !== "undefined" &&
          !localStorage.getItem(MIGRATED_KEY) &&
          localStorage.getItem("conversation-quest-progress");

        if (needsMigration) {
          await migrateLocalToCloud(supabaseAdapter);
        }

        // Check cohort access
        try {
          const accessRes = await fetch("/api/access");
          const accessData = await accessRes.json();
          setAccessStatus(accessData);
        } catch {
          // If access check fails, allow access (fail open for UX)
          setAccessStatus({ hasAccess: true, reason: "admin" });
        }

        const cloudProgress = await supabaseAdapter.load();
        // Authenticated users are never in demo mode
        if (cloudProgress.isDemo) {
          cloudProgress.isDemo = false;
          await supabaseAdapter.save(cloudProgress);
        }
        setProgress(cloudProgress);
      } else {
        // Guest: use localStorage adapter
        adapterRef.current = new LocalStorageAdapter();
        const localProgress = await adapterRef.current.load();
        setProgress(localProgress);
      }

      setIsLoading(false);
    };

    setupAdapter();
  }, [auth?.user, auth?.isLoading]);

  const handleSave = useCallback(async (newProgress: UserProgress) => {
    setProgress(newProgress);
    await adapterRef.current.save(newProgress);
  }, []);

  const handleRefresh = useCallback(async () => {
    const loaded = await adapterRef.current.load();
    setProgress(loaded);
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLoading,
        accessStatus,
        saveProgress: handleSave,
        refreshProgress: handleRefresh,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

/**
 * Migrate localStorage progress to Supabase on first authenticated login.
 */
async function migrateLocalToCloud(supabaseAdapter: SupabaseAdapter) {
  try {
    const localProgress = loadLocalProgress();
    const cloudProgress = await supabaseAdapter.load();

    // Only migrate if local has meaningful data
    const hasLocalData =
      localProgress.workoutsCompleted > 0 ||
      localProgress.completedScenarioIds.length > 0 ||
      localProgress.totalXP > 0;

    if (hasLocalData) {
      const merged = mergeProgress(localProgress, cloudProgress);
      await supabaseAdapter.save(merged);
    }

    // Back up localStorage data and mark as migrated
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("conversation-quest-progress");
      if (raw) {
        localStorage.setItem(BACKUP_KEY, raw);
      }
      localStorage.setItem(MIGRATED_KEY, new Date().toISOString());
      localStorage.removeItem("conversation-quest-progress");
    }
  } catch {
    // Migration failed silently - user can still use the app
    // localStorage data is preserved
  }
}
