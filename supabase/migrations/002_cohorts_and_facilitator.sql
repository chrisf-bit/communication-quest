-- Communication Quest: Cohorts and facilitator access
-- Run this in your Supabase SQL Editor AFTER 001_initial.sql

-- =============================================
-- Cohorts (a group of learners within an org)
-- =============================================
create table if not exists public.cohorts (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organisations(id) on delete cascade,
  name text not null,
  join_code text not null unique,
  seat_limit integer not null default 30,
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '12 weeks'),
  created_at timestamptz not null default now()
);

alter table public.cohorts enable row level security;

-- Facilitators can read cohorts in their org
create policy "Facilitators can read org cohorts"
  on public.cohorts for select
  using (
    exists (
      select 1 from public.org_members
      where org_members.user_id = auth.uid()
        and org_members.org_id = cohorts.org_id
        and org_members.role in ('facilitator', 'admin')
    )
  );

-- =============================================
-- Cohort Members (learners assigned to a cohort)
-- =============================================
create table if not exists public.cohort_members (
  user_id uuid not null references auth.users(id) on delete cascade,
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (user_id, cohort_id)
);

alter table public.cohort_members enable row level security;

-- Learners can see their own cohort membership
create policy "Users can read own cohort membership"
  on public.cohort_members for select
  using (auth.uid() = user_id);

-- Facilitators can read cohort members in their org
create policy "Facilitators can read cohort members"
  on public.cohort_members for select
  using (
    exists (
      select 1 from public.cohorts
      join public.org_members on org_members.org_id = cohorts.org_id
      where cohorts.id = cohort_members.cohort_id
        and org_members.user_id = auth.uid()
        and org_members.role in ('facilitator', 'admin')
    )
  );

-- =============================================
-- Facilitator access to learner progress
-- =============================================
-- Allow facilitators to read progress of learners in their cohorts
create policy "Facilitators can read cohort learner progress"
  on public.user_progress for select
  using (
    auth.uid() = user_id
    or exists (
      select 1 from public.cohort_members cm
      join public.cohorts c on c.id = cm.cohort_id
      join public.org_members om on om.org_id = c.org_id
      where cm.user_id = user_progress.user_id
        and om.user_id = auth.uid()
        and om.role in ('facilitator', 'admin')
    )
  );

-- Drop the old restrictive select policy and replace with the one above
-- (The new policy includes the original auth.uid() = user_id check)
drop policy if exists "Users can read own progress" on public.user_progress;

-- =============================================
-- Allow facilitators to manage org members
-- =============================================
create policy "Facilitators can read org members"
  on public.org_members for select
  using (
    auth.uid() = user_id
    or exists (
      select 1 from public.org_members om2
      where om2.org_id = org_members.org_id
        and om2.user_id = auth.uid()
        and om2.role in ('facilitator', 'admin')
    )
  );

-- Drop the old restrictive policy
drop policy if exists "Members can read own org membership" on public.org_members;

-- =============================================
-- Allow facilitators to read their org details
-- =============================================
create policy "Members can read own org"
  on public.organisations for select
  using (
    exists (
      select 1 from public.org_members
      where org_members.org_id = organisations.id
        and org_members.user_id = auth.uid()
    )
  );

-- =============================================
-- Helper: get user display info for facilitator views
-- =============================================
create or replace function public.get_cohort_learner_emails(p_cohort_id uuid)
returns table (user_id uuid, email text, joined_at timestamptz)
language sql
security definer
as $$
  select cm.user_id, u.email, cm.joined_at
  from public.cohort_members cm
  join auth.users u on u.id = cm.user_id
  where cm.cohort_id = p_cohort_id
    and exists (
      select 1 from public.cohorts c
      join public.org_members om on om.org_id = c.org_id
      where c.id = p_cohort_id
        and om.user_id = auth.uid()
        and om.role in ('facilitator', 'admin')
    );
$$;
