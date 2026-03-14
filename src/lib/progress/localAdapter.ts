import { UserProgress } from "@/types";
import { ProgressAdapter } from "./adapter";
import { loadProgress, saveProgress } from "./store";

/**
 * localStorage-backed adapter. Used for unauthenticated (guest) users.
 * Delegates to the existing store.ts functions.
 */
export class LocalStorageAdapter implements ProgressAdapter {
  async load(): Promise<UserProgress> {
    return loadProgress();
  }

  async save(progress: UserProgress): Promise<void> {
    saveProgress(progress);
  }
}
