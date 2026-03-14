import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/**
 * POST /api/join
 * Body: { joinCode: string }
 *
 * Adds the authenticated user to the cohort matching the join code.
 * Returns cohort info on success.
 */
export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Please sign in first" }, { status: 401 });
  }

  const body = await request.json();
  const joinCode = body.joinCode;

  if (!joinCode) {
    return NextResponse.json({ error: "Join code required" }, { status: 400 });
  }

  // Look up cohort by join code (uses service-level query - no RLS needed for public join codes)
  const { data: cohort, error: cohortError } = await supabase
    .from("cohorts")
    .select("id, name, seat_limit, expires_at, org_id")
    .eq("join_code", joinCode)
    .single();

  if (cohortError || !cohort) {
    return NextResponse.json({ error: "Invalid join code" }, { status: 404 });
  }

  // Check cohort hasn't expired
  if (new Date(cohort.expires_at) < new Date()) {
    return NextResponse.json({ error: "This cohort has expired" }, { status: 410 });
  }

  // Check seat limit
  const { count } = await supabase
    .from("cohort_members")
    .select("*", { count: "exact", head: true })
    .eq("cohort_id", cohort.id);

  if (count !== null && count >= cohort.seat_limit) {
    return NextResponse.json({ error: "This cohort is full" }, { status: 409 });
  }

  // Check if already a member
  const { data: existing } = await supabase
    .from("cohort_members")
    .select("user_id")
    .eq("user_id", user.id)
    .eq("cohort_id", cohort.id)
    .single();

  if (existing) {
    return NextResponse.json({ alreadyMember: true, cohortName: cohort.name });
  }

  // Add to cohort
  const { error: insertError } = await supabase
    .from("cohort_members")
    .insert({ user_id: user.id, cohort_id: cohort.id });

  if (insertError) {
    return NextResponse.json({ error: "Failed to join cohort" }, { status: 500 });
  }

  // Also ensure they're an org member (as 'member' role)
  await supabase
    .from("org_members")
    .upsert(
      { user_id: user.id, org_id: cohort.org_id, role: "member" },
      { onConflict: "user_id,org_id" }
    );

  return NextResponse.json({ success: true, cohortName: cohort.name });
}

/**
 * GET /api/join?code=xxx
 *
 * Returns public cohort info for the join page (no auth required).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const joinCode = searchParams.get("code");

  if (!joinCode) {
    return NextResponse.json({ error: "Code required" }, { status: 400 });
  }

  const supabase = await createServerSupabaseClient();

  const { data: cohort, error } = await supabase
    .from("cohorts")
    .select("name, seat_limit, expires_at, org_id, organisations(name)")
    .eq("join_code", joinCode)
    .single();

  if (error || !cohort) {
    return NextResponse.json({ error: "Invalid join code" }, { status: 404 });
  }

  // Count current members
  const { count } = await supabase
    .from("cohort_members")
    .select("*", { count: "exact", head: true })
    .eq("cohort_id", joinCode);

  const org = cohort.organisations as unknown as { name: string } | null;

  return NextResponse.json({
    name: cohort.name,
    orgName: org?.name || "Unknown",
    seatLimit: cohort.seat_limit,
    seatsUsed: count || 0,
    expiresAt: cohort.expires_at,
    expired: new Date(cohort.expires_at) < new Date(),
    full: count !== null && count >= cohort.seat_limit,
  });
}
