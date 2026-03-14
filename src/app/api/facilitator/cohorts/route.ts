import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/**
 * GET /api/facilitator/cohorts
 *
 * Returns all cohorts the current user has facilitator/admin access to.
 */
export async function GET() {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  // Get org memberships where user is facilitator/admin
  const { data: memberships, error: memError } = await supabase
    .from("org_members")
    .select("org_id, role, organisations(name)")
    .eq("user_id", user.id)
    .in("role", ["facilitator", "admin"]);

  if (memError || !memberships || memberships.length === 0) {
    return NextResponse.json({ cohorts: [], isFacilitator: false });
  }

  const orgIds = memberships.map((m: Record<string, unknown>) => m.org_id);

  // Fetch cohorts for those orgs
  const { data: cohorts, error: cohortError } = await supabase
    .from("cohorts")
    .select("*")
    .in("org_id", orgIds)
    .order("created_at", { ascending: false });

  if (cohortError) {
    return NextResponse.json({ error: "Failed to fetch cohorts" }, { status: 500 });
  }

  // Count members per cohort
  const cohortIds = (cohorts || []).map((c: Record<string, unknown>) => c.id);
  let memberCounts: Record<string, number> = {};

  if (cohortIds.length > 0) {
    const { data: members } = await supabase
      .from("cohort_members")
      .select("cohort_id")
      .in("cohort_id", cohortIds);

    if (members) {
      memberCounts = {};
      for (const m of members) {
        memberCounts[m.cohort_id] = (memberCounts[m.cohort_id] || 0) + 1;
      }
    }
  }

  // Build org name lookup
  const orgNames: Record<string, string> = {};
  for (const m of memberships) {
    const org = m.organisations as unknown as Record<string, unknown> | null;
    if (org) {
      orgNames[m.org_id as string] = org.name as string;
    }
  }

  return NextResponse.json({
    isFacilitator: true,
    cohorts: (cohorts || []).map((c: Record<string, unknown>) => ({
      id: c.id,
      name: c.name,
      orgName: orgNames[c.org_id as string] || "Unknown",
      seatLimit: c.seat_limit,
      seatsUsed: memberCounts[c.id as string] || 0,
      startsAt: c.starts_at,
      expiresAt: c.expires_at,
      joinCode: c.join_code,
    })),
  });
}
