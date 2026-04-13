# Communication Quest - CLAUDE.md

## Project Overview

Communication Quest is a Duolingo-style enterprise L&D training app that teaches users to recognise and adapt to four communication styles (Direct, Expressive, Supportive, Analytical) through interactive workplace scenarios. Target customers are training providers who offer cohort-based access to their learners.

**Live URL:** https://quest.rapid-learn.co.uk
**Repo:** https://github.com/chrisf-bit/communication-quest

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **Language:** TypeScript, React 19
- **Styling:** TailwindCSS 4, inline styles for dynamic colours
- **Icons:** Lucide React only (no emojis anywhere)
- **Auth:** Supabase Auth with magic link only (no passwords)
- **Database:** Supabase (PostgreSQL with RLS)
- **Email:** Resend SMTP via rapid-learn.co.uk domain
- **Hosting:** Vercel (production)
- **Charts:** Recharts
- **Animations:** Framer Motion, CSS keyframes

## Dev Commands

```bash
npm run dev     # localhost:3000 (Turbopack)
npm run build   # Production build
npm run lint    # ESLint
```

## Architecture

Single Next.js app, no separate backend. All server logic lives in API routes (`src/app/api/`).

### Storage Pattern

- **Guests:** localStorage via `LocalStorageAdapter` (key: `conversation-quest-progress`)
- **Authenticated users:** Supabase via `SupabaseAdapter` (table: `user_progress`)
- **Provider + Adapter pattern:** `ProgressProvider` selects adapter based on auth state
- **Pure function variants:** `applySession()`, `applyAssessment()`, `applyDailyChallenge()` take progress as input, return updated progress without side effects. Use these in components, not the direct `recordSession()` etc.

### Key Directories

```
src/
  app/              # Next.js App Router pages + API routes
    api/access/     # Cohort/trial access check
    api/admin/      # Admin CRUD for orgs/cohorts/facilitators
    api/facilitator/ # Facilitator dashboard data
    api/join/       # Cohort join endpoint
    auth/callback/  # Magic link callback
  components/
    assessment/     # Style assessment flow
    home/           # Home page cards (daily challenge, recommendations, tutorial)
    layout/         # Header, AccessGate, ConsentBanner
    providers/      # AuthProvider, ProgressProvider, Providers wrapper
    shared/         # CharacterAvatar, ScoreRing, StyleBadge, SpeechBubble, etc.
    vocabulary/     # WordSort, SentenceDetection, LanguageMatch challenges
    workout/        # SpotTheStyle, ChooseBestResponse, RewriteResponse, WorkoutFlow, etc.
  data/             # All static content (scenarios, styles, characters, vocabulary, assessment)
  lib/
    progress/       # Store, adapters, XP, mastery, stats, level gating, merge
    scoring/        # Heuristic evaluator, spot/choose scorer
    supabase/       # Client, server, middleware helpers
  types/            # All TypeScript interfaces
supabase/
  migrations/       # SQL migrations (run manually in Supabase SQL Editor)
```

## Communication Styles

Four styles, each with a colour, icon, and scoring traits:

| Style | Colour | Icon | Scoring Traits (weight) |
|-------|--------|------|------------------------|
| Direct | #FF6B6B | Zap | concise (2), action-oriented (3), outcome-led (3), no-hedging (2) |
| Expressive | #F59E0B | Sparkles | warm-opener (2), acknowledges-ideas (3), forward-looking (3), inclusive-language (2) |
| Supportive | #059669 | Heart | acknowledges-feelings (3), collaborative-framing (2), reassuring (3), not-rushed (2) |
| Analytical | #3B82F6 | BarChart3 | specific-detail (3), structured (2), evidence-based (3), avoids-vague (2) |

**Style adjacency (partial credit):** Direct <-> Analytical (task-focused), Expressive <-> Supportive (people-focused)

**2x2 grid order:** Analytical top-left, Direct top-right, Supportive bottom-left, Expressive bottom-right

**Style colours are ONLY for style-related UI.** Generic elements use brand purple (#7C3AED).

## Characters

12 characters, 3 per style. Each has a unique `characterId`, name, role, company, and `avatarSeed` for deterministic SVG generation:

- **Direct:** jordan-cole, sam-hartley, alex-tran
- **Expressive:** priya-sharma, marcus-webb, nina-okafor
- **Supportive:** tom-brennan, leah-morgan, david-chen
- **Analytical:** rachel-finch, owen-grant, fiona-banks

## Scenarios

~420 scenarios across 35 files (`scenarios-part1.ts` through `scenarios-part35.ts`), combined in `scenarios.ts`. IDs: `scenario-01` through `scenario-420`.

Each scenario has:
- 3 evolving contexts (base, choose, rewrite) - the conversation progresses
- 3 evolving dialogues
- `targetStyle`, `difficulty` (foundation/intermediate/advanced), `category`, `skillFocus`
- `spotQuestion`: identify style from dialogue
- `chooseQuestion`: 3 options scored 10/5/0 (options shuffled at render time)
- `rewriteQuestion`: free-text with targetTraits, exampleStrongResponse

**Categories:** meeting, feedback, sales, client, team, conflict, email, one-to-one, presentation, negotiation, remote

**Skill focuses:** recognition, adaptation, de-escalation, persuasion, clarity, empathy, brevity

## Scoring

### Spot the Style
- Correct style: 10 (strong)
- Adjacent style: 5 (partial)
- Wrong: 0 (weak)

### Choose Best Response
- Score from option definition: 10 (strong), 5 (partial), 0 (weak)
- Options are shuffled randomly each time to prevent position-based cheating

### Rewrite Response (Heuristic Evaluator)
- Minimum 10 chars or instant weak/0
- Regex-based trait detection against style-specific positive/negative patterns
- Each detected trait adds its weight (max 10 total)
- Result: 7-10 = strong, 4-6 = partial, 0-3 = weak
- Returns detectedTraits[] and missingTraits[] for feedback

## Progression System

### XP
- Per question: strong=10, partial=5, weak=1
- First-time scenario bonus: +5
- Perfect scenario (all 3 strong): +10
- Assessment: 5 per correct + 50 bonus if 8+ correct
- Streak milestones: bonuses at 3, 7, 14, 30 days

### Proficiency Levels (per-style and overall)
| Level | XP Threshold |
|-------|-------------|
| Rookie | 0 |
| Rising Star | 100 |
| Sharp Shooter | 300 |
| Ninja | 600 |
| Jedi | 1000 |

### Level Gating (difficulty unlock)
- Rookie: foundation only
- Rising Star (100 XP): + intermediate
- Sharp Shooter (300 XP): + advanced

### Spaced Repetition (SM-2)
Per-scenario mastery tracking: easeFactor (init 2.5, min 1.3), interval, nextReviewDate. Failed reviews reset interval to 1 day.

### Mastery Stars
- 1 star: attempted
- 2 stars: 70%+ best score
- 3 stars: 90%+ best score

## Workout Generation

Default: 2 scenarios per workout (6 questions total). Algorithm:
1. Filter by unlocked difficulty (level gating)
2. Weight toward weak styles if 6+ total attempts (adaptive)
3. Prioritise scenarios due for spaced repetition review (max 50% of slots)
4. Prefer unseen scenarios for remaining slots
5. Attempt one scenario per style first pass
6. Shuffle scenario order; within each scenario: spot -> choose -> rewrite

## Demo Mode

- `isDemo: true` by default for guests
- Limits: 1 workout (scenarios 01 + 07 only) + 1 vocabulary session
- Assessment is always available (acts as a hook)
- On authentication, `isDemo` flipped to `false` automatically in ProgressProvider

## Auth & Access Control

### Auth Flow
Magic link only via Supabase + Resend SMTP. No passwords.
- `/signup` and `/login` pages send magic link
- `/auth/callback` exchanges code for session
- Site URL: `https://quest.rapid-learn.co.uk`
- Redirect URLs must include `/auth/callback`

### Access Tiers (checked via GET /api/access)
1. **Admin** (chris@rapid-learn.co.uk) - always full access
2. **Facilitator** (org_members with role facilitator/admin) - always full access
3. **Active cohort member** - full access until cohort expires
4. **Free trial** - 3 days from account creation
5. **Expired** - blocked with "Cohort Access Expired" screen

### AccessGate Component
Wraps the app. Public paths always allowed: /login, /signup, /join, /admin, /facilitator, /auth, /privacy

## Database Schema (Supabase)

### Tables
- `user_progress` - one row per user, JSONB columns for complex data
- `organisations` - client companies
- `org_members` - links users to orgs with role (member/facilitator/admin)
- `cohorts` - time-limited seat-based access (join_code, seat_limit, expires_at)
- `cohort_members` - links users to cohorts

### RLS Policies
- Users read/write own progress
- Facilitators read progress of learners in their cohorts
- Admin (chris@rapid-learn.co.uk) can read/write all via JWT email check
- Anyone authenticated can read cohorts by join code
- Users can self-insert into cohort_members and org_members (as member role only)

### Migrations
Run manually in Supabase SQL Editor (not automated):
- `001_initial.sql` - user_progress, organisations, org_members
- `002_cohorts_and_facilitator.sql` - cohorts, cohort_members, facilitator RLS policies
- `003` and `004` - additional RLS policies for joining and admin access

## Cohort System

### Client Onboarding Flow (current - manual)
1. Client pays via Stripe payment link (manual)
2. Admin creates org + cohort via `/admin` page
3. Admin adds facilitator by email via `/admin`
4. Facilitator shares invite link with learners: `quest.rapid-learn.co.uk/join/[code]`
5. Learners click link, enter email, get magic link, auto-joined to cohort

### Facilitator Dashboard (/facilitator)
Three tabs:
- **Overview:** learner count, active/assessed counts, total workouts, avg accuracy, group style profile, days remaining, invite link
- **Learners:** sortable table (XP, sessions, accuracy, last active), expandable rows with per-style breakdown, assessment results, session sparkline
- **Insights:** weekly progress chart, style difficulty ranking, engagement distribution, coaching tips

### Admin Page (/admin)
Only visible to chris@rapid-learn.co.uk. Create orgs, cohorts, add facilitators.

## Design Rules

- **Dark theme** with gradient backgrounds (`#0F172A` to `#1A1035` to `#0D1520`)
- **No emojis ever.** Use Lucide icons only.
- **No em dashes.** Use regular hyphens only.
- **No scrolling where possible.** Use stepped/tabbed/paginated flows.
- **No coloured left-edge borders on cards.** Use subtle tinted borders and gradient backgrounds instead.
- **No style colour hints during gameplay.** Question panels use purple (#7C3AED), not the target style colour.
- **Orange branded logo** (#F97316 family) - MessagesSquare icon with rounded-xl background
- **Green CTAs** (#58CC02) for primary actions
- **Purple** (#7C3AED) for secondary actions and generic accent
- **Card style:** `backdrop-blur-xl rounded-2xl`, border `2px solid rgba(255,255,255,0.3)`, bg `rgba(15, 23, 42, 0.8)`
- **Glow orbs:** Large blurred circles for ambient lighting, positioned absolutely, low opacity

### Accessibility
- User is colour blind - avoid dark reds, ensure high text contrast
- Reserve style colours for style-related UI only
- Mobile: small circular CharacterAvatar on mobile, full scene on desktop

## Anti-Cheating Measures

- **Option shuffling:** chooseQuestion options randomised each render (not always A=correct)
- **Answer length normalisation:** correct answers trimmed to within 20% of incorrect answer average length
- **No style hints:** question panels don't use the target style colour

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon key]
```

Middleware gracefully degrades if these are missing (returns early, no crash).

## Deployment

- **Platform:** Vercel
- **Branch:** master
- **Build:** `next build` (Turbopack)
- **Env vars:** Set in Vercel project settings
- **Domain:** quest.rapid-learn.co.uk (custom domain via GoDaddy DNS)

### Supabase Setup
- Auth > URL Configuration: Site URL = `https://quest.rapid-learn.co.uk`
- Auth > URL Configuration: Redirect URLs must include `https://quest.rapid-learn.co.uk/auth/callback`
- Auth > SMTP: Resend (smtp.resend.dev:465, username: resend, password: API key)
- Sender: noreply@rapid-learn.co.uk

## Git Conventions

- **No Co-Authored-By or AI attribution** in commits
- Commit messages: short summary line, optional body with detail
- Branch: master (push directly for now)

## Known Issues / Technical Debt

- Part 22 scenarios may need quality review (generated to fill a gap)
- Vocabulary mode could use a "Next" button between challenges (user reported it moves too fast)
- Assessment should be made harder (target 0-30% score for untrained users)
- The `ScenarioFeedback` and `WorkoutSummary` have unused imports (StyleBadge, CommunicationStyle) flagged as hints
- localStorage key is `conversation-quest-progress` (legacy name, not `communication-quest-progress`)
