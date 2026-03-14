import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Hardcoded admin email - only this user can access admin functions
const ADMIN_EMAIL = "chris@rapid-learn.co.uk";

async function checkAdmin() {
  const supabase = await createServerSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user || user.email !== ADMIN_EMAIL) {
    return { supabase: null, user: null, error: "Unauthorised" };
  }
  return { supabase, user, error: null };
}

/**
 * GET /api/admin
 * Returns all orgs, cohorts, and facilitators for the admin dashboard.
 */
export async function GET() {
  const { supabase, error } = await checkAdmin();
  if (error || !supabase) {
    return NextResponse.json({ error }, { status: 401 });
  }

  // Fetch all orgs
  const { data: orgs } = await supabase.from("organisations").select("*").order("created_at", { ascending: false });

  // Fetch all cohorts with member counts
  const { data: cohorts } = await supabase.from("cohorts").select("*").order("created_at", { ascending: false });

  // Fetch all org members
  const { data: members } = await supabase.from("org_members").select("*");

  // Get emails for facilitators via RPC or auth - we'll use a simple approach
  // Since admin can see all org_members, we need emails
  const facilitatorIds = (members || [])
    .filter((m: Record<string, unknown>) => m.role === "facilitator" || m.role === "admin")
    .map((m: Record<string, unknown>) => m.user_id);

  // Count members per cohort
  const { data: cohortMembers } = await supabase.from("cohort_members").select("cohort_id");
  const memberCounts: Record<string, number> = {};
  for (const cm of cohortMembers || []) {
    memberCounts[cm.cohort_id] = (memberCounts[cm.cohort_id] || 0) + 1;
  }

  return NextResponse.json({
    orgs: orgs || [],
    cohorts: (cohorts || []).map((c: Record<string, unknown>) => ({
      ...c,
      memberCount: memberCounts[c.id as string] || 0,
    })),
    members: members || [],
  });
}

/**
 * POST /api/admin
 * Body: { action: string, ... }
 *
 * Actions:
 * - createOrg: { name }
 * - createCohort: { orgId, name, seatLimit, weeks }
 * - addFacilitator: { orgId, email }
 */
export async function POST(request: Request) {
  const { supabase, error } = await checkAdmin();
  if (error || !supabase) {
    return NextResponse.json({ error }, { status: 401 });
  }

  const body = await request.json();

  switch (body.action) {
    case "createOrg": {
      const { data, error: err } = await supabase
        .from("organisations")
        .insert({ name: body.name })
        .select()
        .single();

      if (err) return NextResponse.json({ error: err.message }, { status: 500 });
      return NextResponse.json({ org: data });
    }

    case "createCohort": {
      // Generate a readable join code
      const joinCode = body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 30)
        + "-" + Math.random().toString(36).slice(2, 6);

      const weeks = body.weeks || 12;

      const { data, error: err } = await supabase
        .from("cohorts")
        .insert({
          org_id: body.orgId,
          name: body.name,
          join_code: joinCode,
          seat_limit: body.seatLimit || 30,
          starts_at: new Date().toISOString(),
          expires_at: new Date(Date.now() + weeks * 7 * 24 * 60 * 60 * 1000).toISOString(),
        })
        .select()
        .single();

      if (err) return NextResponse.json({ error: err.message }, { status: 500 });
      return NextResponse.json({ cohort: data });
    }

    case "addFacilitator": {
      // Look up user by email
      const { data: users, error: lookupErr } = await supabase.rpc("get_user_id_by_email", { p_email: body.email });

      if (lookupErr || !users || users.length === 0) {
        // User doesn't exist yet - they'll need to sign up first
        return NextResponse.json({
          error: `No account found for ${body.email}. Ask them to sign up first at the app, then try again.`,
        }, { status: 404 });
      }

      const userId = users[0].id;

      const { error: err } = await supabase
        .from("org_members")
        .upsert(
          { user_id: userId, org_id: body.orgId, role: "facilitator" },
          { onConflict: "user_id,org_id" }
        );

      if (err) return NextResponse.json({ error: err.message }, { status: 500 });
      return NextResponse.json({ success: true });
    }

    default:
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }
}
