-- Communication Quest: Admin helper functions
-- Run this in your Supabase SQL Editor

-- Helper to look up a user ID by email (used by admin to add facilitators)
create or replace function public.get_user_id_by_email(p_email text)
returns table (id uuid)
language sql
security definer
as $$
  select u.id
  from auth.users u
  where u.email = p_email;
$$;

-- Admin policy: chris@rapid-learn.co.uk can read all orgs
create policy "Admin can read all orgs"
  on public.organisations for select
  using (
    auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk'
  );

-- Admin policy: chris@rapid-learn.co.uk can read all cohorts
create policy "Admin can read all cohorts"
  on public.cohorts for select
  using (
    auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk'
  );

-- Admin policy: chris@rapid-learn.co.uk can read all org_members
create policy "Admin can read all org members"
  on public.org_members for select
  using (
    auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk'
  );

-- Admin policy: chris@rapid-learn.co.uk can read all cohort_members
create policy "Admin can read all cohort members"
  on public.cohort_members for select
  using (
    auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk'
  );

-- Admin insert policies
create policy "Admin can insert orgs"
  on public.organisations for insert
  with check (auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk');

create policy "Admin can insert cohorts"
  on public.cohorts for insert
  with check (auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk');

create policy "Admin can insert org members"
  on public.org_members for insert
  with check (
    auth.uid() = user_id
    or auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk'
  );

-- Admin can upsert org_members (for adding facilitators)
create policy "Admin can update org members"
  on public.org_members for update
  using (auth.jwt() ->> 'email' = 'chris@rapid-learn.co.uk');
