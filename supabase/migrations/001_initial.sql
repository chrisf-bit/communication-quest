-- Communication Quest: Initial schema
-- Run this in your Supabase SQL Editor

-- =============================================
-- User Progress (one row per authenticated user)
-- =============================================
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  total_xp integer not null default 0,
  level integer not null default 1,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_session_date text,
  workouts_completed integer not null default 0,
  total_score integer not null default 0,
  total_possible_score integer not null default 0,
  is_demo boolean not null default false,
  has_completed_assessment boolean not null default false,
  completed_scenario_ids text[] not null default '{}',
  completed_daily_challenges text[] not null default '{}',
  style_scores jsonb not null default '{}',
  style_xp jsonb not null default '{}',
  sessions jsonb not null default '[]',
  scenario_mastery jsonb not null default '{}',
  assessment_profile jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: users can only access their own progress
alter table public.user_progress enable row level security;

create policy "Users can read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger user_progress_updated_at
  before update on public.user_progress
  for each row execute function public.handle_updated_at();

-- =============================================
-- Organisations (future-ready, not wired to UI yet)
-- =============================================
create table if not exists public.organisations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  branding jsonb not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.organisations enable row level security;

-- =============================================
-- Org Members (future-ready)
-- =============================================
create table if not exists public.org_members (
  user_id uuid not null references auth.users(id) on delete cascade,
  org_id uuid not null references public.organisations(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (user_id, org_id)
);

alter table public.org_members enable row level security;

create policy "Members can read own org membership"
  on public.org_members for select
  using (auth.uid() = user_id);
