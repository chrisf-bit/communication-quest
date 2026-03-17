import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Admin email - always has access
const ADMIN_EMAIL = "chris@rapid-learn.co.uk";

// Free trial duration in days for users with no cohort
const FREE_TRIAL_DAYS = 3;

/**
 * GET /api/access
 *
 * Checks whether the authenticated user has active cohort access.
 * Returns: { hasAccess, reason, cohortName, expiresAt }
 */
export async function GET() {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ hasAccess: false, reason: "not-authenticated" });
  }

  // Admin always has access
  if (user.email === ADMIN_EMAIL) {
    return NextResponse.json({ hasAccess: true, reason: "admin" });
  }

  // Check if user is in any active cohort
  const { data: memberships, error: memError } = await supabase
    .from("cohort_members")
    .select("cohort_id, cohorts(name, expires_at)")
    .eq("user_id", user.id);

  if (memError || !memberships || memberships.length === 0) {
    // No cohort membership - check if they're a facilitator (facilitators always have access)
    const { data: orgMemberships } = await supabase
      .from("org_members")
      .select("role")
      .eq("user_id", user.id)
      .in("role", ["facilitator", "admin"]);

    if (orgMemberships && orgMemberships.length > 0) {
      return NextResponse.json({ hasAccess: true, reason: "facilitator" });
    }

    // No cohort - check if within free trial period
    const createdAt = new Date(user.created_at);
    const trialEnd = new Date(createdAt.getTime() + FREE_TRIAL_DAYS * 24 * 60 * 60 * 1000);
    const now2 = new Date();

    if (now2 < trialEnd) {
      return NextResponse.json({
        hasAccess: true,
        reason: "free-trial",
        trialEndsAt: trialEnd.toISOString(),
      });
    }

    return NextResponse.json({
      hasAccess: false,
      reason: "trial-expired",
      trialEndsAt: trialEnd.toISOString(),
    });
  }

  // Check if any cohort is still active
  const now = new Date();
  let activeCohort: { name: string; expiresAt: string } | null = null;
  let latestExpired: { name: string; expiresAt: string } | null = null;

  for (const m of memberships) {
    const cohort = m.cohorts as unknown as { name: string; expires_at: string } | null;
    if (!cohort) continue;

    const expiresAt = new Date(cohort.expires_at);
    if (expiresAt > now) {
      activeCohort = { name: cohort.name, expiresAt: cohort.expires_at };
      break;
    } else {
      // Track the most recently expired cohort for the message
      if (!latestExpired || new Date(cohort.expires_at) > new Date(latestExpired.expiresAt)) {
        latestExpired = { name: cohort.name, expiresAt: cohort.expires_at };
      }
    }
  }

  if (activeCohort) {
    return NextResponse.json({
      hasAccess: true,
      reason: "active-cohort",
      cohortName: activeCohort.name,
      expiresAt: activeCohort.expiresAt,
    });
  }

  return NextResponse.json({
    hasAccess: false,
    reason: "cohort-expired",
    cohortName: latestExpired?.name || "Unknown",
    expiresAt: latestExpired?.expiresAt || null,
  });
}
