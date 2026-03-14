-- Communication Quest: Policies for learner self-join flow
-- Run this in your Supabase SQL Editor

-- Allow anyone authenticated to read cohorts by join_code
-- (needed so the join page can look up cohort details)
create policy "Anyone can read cohorts by join code"
  on public.cohorts for select
  using (auth.role() = 'authenticated');

-- Allow authenticated users to insert themselves into cohort_members
create policy "Users can join cohorts"
  on public.cohort_members for insert
  with check (auth.uid() = user_id);

-- Allow authenticated users to insert themselves as org members (member role only)
create policy "Users can join orgs as member"
  on public.org_members for insert
  with check (auth.uid() = user_id and role = 'member');

-- Allow users to read their own org memberships (already exists from 002 fix)
-- This is a no-op if it already exists
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'org_members' and policyname = 'Users can read own org memberships'
  ) then
    execute 'create policy "Users can read own org memberships" on public.org_members for select using (auth.uid() = user_id)';
  end if;
end $$;
