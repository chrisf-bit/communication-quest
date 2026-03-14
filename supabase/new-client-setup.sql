-- =============================================
-- NEW CLIENT SETUP TEMPLATE
-- =============================================
-- Copy this file and fill in the values below.
-- Run in Supabase SQL Editor to set up a new client.
--
-- ALTERNATIVELY: Use the admin page at /admin to do this
-- without writing any SQL.
-- =============================================

-- 1. SET THESE VALUES
-- -------------------
-- Client company name
\set org_name 'ACME Training Ltd'
-- Cohort name (e.g. the programme name + date)
\set cohort_name 'Leadership Programme - April 2026'
-- Number of learner seats
\set seat_limit 30
-- Duration in weeks
\set duration_weeks 12
-- Facilitator email (they must have signed up to the app first)
\set facilitator_email 'facilitator@acme-training.com'

-- 2. CREATE THE ORGANISATION
-- --------------------------
insert into public.organisations (id, name)
values (gen_random_uuid(), :'org_name')
returning id as org_id;

-- NOTE: Copy the org_id from the result above and paste it below
-- Replace 'PASTE_ORG_ID_HERE' with the actual UUID

-- 3. CREATE THE COHORT
-- --------------------
insert into public.cohorts (org_id, name, join_code, seat_limit, starts_at, expires_at)
values (
  'PASTE_ORG_ID_HERE',
  :'cohort_name',
  -- Auto-generate a join code from the cohort name
  lower(regexp_replace(:'cohort_name', '[^a-zA-Z0-9]+', '-', 'g')) || '-' || substr(gen_random_uuid()::text, 1, 4),
  :seat_limit,
  now(),
  now() + (:'duration_weeks' || ' weeks')::interval
)
returning id as cohort_id, join_code;

-- NOTE: The join_code in the result is what you share with the client.
-- The invite link is: https://quest.rapid-learn.co.uk/join/JOIN_CODE_HERE

-- 4. ADD THE FACILITATOR
-- ----------------------
insert into public.org_members (user_id, org_id, role)
select id, 'PASTE_ORG_ID_HERE', 'facilitator'
from auth.users
where email = :'facilitator_email';

-- 5. DONE!
-- --------
-- Send the client:
-- 1. Invite link: https://quest.rapid-learn.co.uk/join/JOIN_CODE_HERE
-- 2. Tell the facilitator to sign in and visit /facilitator to see their dashboard
