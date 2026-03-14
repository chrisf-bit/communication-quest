import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/**
 * GET /api/facilitator/cohort?cohortId=xxx
 *
 * Returns cohort details + all learner progress for a facilitator.
 * Relies on RLS policies - only facilitators/admins in the org can read this data.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cohortId = searchParams.get("cohortId");

  if (!cohortId) {
    return NextResponse.json({ error: "cohortId required" }, { status: 400 });
  }

  const supabase = await createServerSupabaseClient();

  // Check the current user is authenticated
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  // Fetch cohort details (RLS ensures only facilitators can read)
  const { data: cohort, error: cohortError } = await supabase
    .from("cohorts")
    .select("*")
    .eq("id", cohortId)
    .single();

  if (cohortError || !cohort) {
    return NextResponse.json({ error: "Cohort not found or access denied" }, { status: 404 });
  }

  // Fetch cohort members with their emails via the helper function
  const { data: members, error: membersError } = await supabase
    .rpc("get_cohort_learner_emails", { p_cohort_id: cohortId });

  if (membersError) {
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }

  // Fetch progress for all cohort members (RLS allows facilitator access)
  const memberIds = (members || []).map((m: { user_id: string }) => m.user_id);

  let learnerProgress: Record<string, unknown>[] = [];
  if (memberIds.length > 0) {
    const { data: progressRows, error: progressError } = await supabase
      .from("user_progress")
      .select("*")
      .in("user_id", memberIds);

    if (!progressError && progressRows) {
      learnerProgress = progressRows;
    }
  }

  // Build email lookup
  const emailMap: Record<string, string> = {};
  const joinedMap: Record<string, string> = {};
  for (const m of members || []) {
    emailMap[m.user_id] = m.email;
    joinedMap[m.user_id] = m.joined_at;
  }

  return NextResponse.json({
    cohort: {
      id: cohort.id,
      name: cohort.name,
      seatLimit: cohort.seat_limit,
      startsAt: cohort.starts_at,
      expiresAt: cohort.expires_at,
      joinCode: cohort.join_code,
    },
    learners: learnerProgress.map((row: Record<string, unknown>) => ({
      userId: row.user_id,
      email: emailMap[row.user_id as string] || "Unknown",
      joinedAt: joinedMap[row.user_id as string] || null,
      totalXP: row.total_xp,
      workoutsCompleted: row.workouts_completed,
      totalScore: row.total_score,
      totalPossibleScore: row.total_possible_score,
      currentStreak: row.current_streak,
      longestStreak: row.longest_streak,
      lastSessionDate: row.last_session_date,
      hasCompletedAssessment: row.has_completed_assessment,
      styleScores: row.style_scores,
      styleXP: row.style_xp,
      assessmentProfile: row.assessment_profile,
      completedScenarioIds: row.completed_scenario_ids,
      sessions: row.sessions,
    })),
    totalSeats: cohort.seat_limit,
    seatsUsed: memberIds.length,
  });
}
