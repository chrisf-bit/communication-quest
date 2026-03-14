import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    return NextResponse.json({
      hasUser: !!user,
      email: user?.email || null,
      userId: user?.id || null,
      error: error?.message || null,
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) });
  }
}
