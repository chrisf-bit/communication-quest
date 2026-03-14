import { UserProgress } from "@/types";

/**
 * Storage adapter interface for progress persistence.
 * Implementations: LocalStorageAdapter (guest), SupabaseAdapter (authenticated).
 */
export interface ProgressAdapter {
  load(): Promise<UserProgress>;
  save(progress: UserProgress): Promise<void>;
}
