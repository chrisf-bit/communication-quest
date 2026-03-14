/**
 * Manages user consent for local storage usage.
 * Uses a separate localStorage key so consent state is independent of app data.
 * If localStorage is unavailable, consent defaults to false.
 */

const CONSENT_KEY = "conversation-quest-consent";

export type ConsentState = {
  essential: boolean; // Always true when consent given - required for app to function
  analytics: boolean; // Future: analytics/tracking consent
  consentedAt: string; // ISO date string
  version: string; // Policy version - bump when policy changes materially
};

const CURRENT_POLICY_VERSION = "1.0";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const consent = JSON.parse(stored) as ConsentState;

    // If policy version has changed, re-prompt
    if (consent.version !== CURRENT_POLICY_VERSION) return null;

    return consent;
  } catch {
    return null;
  }
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function saveConsent(analytics: boolean = false): void {
  if (typeof window === "undefined") return;

  const consent: ConsentState = {
    essential: true,
    analytics,
    consentedAt: new Date().toISOString(),
    version: CURRENT_POLICY_VERSION,
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // localStorage unavailable
  }
}

export function revokeConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // localStorage unavailable
  }
}

export function getCurrentPolicyVersion(): string {
  return CURRENT_POLICY_VERSION;
}
