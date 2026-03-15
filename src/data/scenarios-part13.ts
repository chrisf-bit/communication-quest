import { Scenario } from "@/types";

export const SCENARIOS_PART13: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (145-147)
  // ============================================

  // Scenario 145 - Jordan Cole, remote, foundation
  {
    id: "scenario-145",
    title: "Leading a Remote Crisis Response",
    context:
      "A production system has gone down overnight, affecting clients across three time zones. Jordan has called an emergency video conference at 06:30 to coordinate the response. Team members are joining from London, Singapore, and New York.",
    chooseContext:
      "Jordan has assigned initial responsibilities and is now asking each regional lead to confirm their immediate actions. The Singapore team has flagged that their on-call engineer is unavailable.",
    rewriteContext:
      "Jordan has asked you to draft a brief incident update message for the cross-regional Slack channel, covering what happened, who is doing what, and the next checkpoint time.",
    characterId: "jordan-cole",
    dialogue:
      "Right, we have a P1 down across all regions. I do not care what time zone you are in; this is everyone's problem until it is fixed. London, you own the database investigation. Singapore, take the application layer. New York, handle client comms. First checkpoint in 90 minutes. Go.",
    chooseDialogue:
      "Then find someone else in Singapore who can step in. I need a name in the next ten minutes, not a conversation about shift rotas. We have clients losing service right now.",
    rewriteDialogue:
      "Post the incident update in the cross-region channel. What broke, who owns each workstream, when the next checkpoint is. Nothing else. People are panicking; give them facts.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened an emergency call by assigning regional owners, setting a checkpoint time, and dismissing time zone concerns. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan cuts through the complexity of a multi-region crisis with immediate role assignment and a clear deadline. There is no time spent on diagnosis or consensus; it is pure command and control.",
          observation:
            "Notice how Jordan frames the crisis as a shared obligation ('everyone's problem') and immediately moves to action. There is no invitation to discuss the approach.",
          coachingTip:
            "In a remote crisis, direct communicators take charge by removing ambiguity. They assign, set deadlines, and expect execution. Respond with confirmations, not questions.",
          styleContext:
            "Direct communicators believe crises demand speed and clarity above all else. They see discussion during an outage as a luxury that costs clients money.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan is structured, which can look analytical. But notice that Jordan is not explaining the root cause methodology or asking for data before acting. The focus is on speed of assignment.",
          observation:
            "An analytical communicator would want to understand the failure mode before assigning workstreams. Jordan assigns first and investigates in parallel.",
          coachingTip:
            "If someone is assigning tasks before the problem is fully understood, they are prioritising action over analysis. That is a hallmark of the direct style.",
          styleContext:
            "Direct communicators trust that parallel action and investigation will converge. Analytical communicators prefer sequential diagnosis before action.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan is not checking how the team feels about being woken early or whether the workload distribution feels fair. The entire exchange is task-focused and urgent.",
          observation:
            "There is no empathy for the disrupted schedules, no enthusiasm about the challenge, and no relationship-building. This is pure operational command.",
          coachingTip:
            "Ask yourself: is this person focused on getting the problem fixed or on how the team is coping? Jordan is firmly in the 'fix it now' camp.",
          styleContext:
            "Direct communicators believe the kindest thing you can do in a crisis is restore service quickly. Emotional support can come after the fix.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The Singapore team's on-call engineer is unavailable and Jordan wants a replacement name in ten minutes. How do you respond?",
      options: [
        {
          id: "s145-opt-a",
          text: "Priya Lim can step in. She handled the last P1 and knows the application layer. I will brief her in the next five minutes and she will join the checkpoint call.",
          score: 10,
          result: "strong",
          explanation:
            "A named replacement, relevant experience, a briefing commitment, and a timeline. This matches Jordan's demand for immediate, specific action.",
        },
        {
          id: "s145-opt-b",
          text: "I will reach out to the wider Singapore team and see who is available. Should have an answer within the hour once I have checked schedules.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally right, but 'within the hour' is far too slow when Jordan asked for ten minutes. The response needs more urgency and specificity.",
        },
        {
          id: "s145-opt-c",
          text: "It might be worth considering whether we can redistribute the Singapore workstream across London and New York instead. That way nobody has to be pulled in cold.",
          score: 0,
          result: "weak",
          explanation:
            "This opens a strategic discussion when Jordan wants a tactical solution. In a P1 crisis with a direct communicator, solve the immediate problem first.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants a brief incident update for the cross-regional Slack channel covering what happened, who owns what, and the next checkpoint time. Write it in a direct style.",
      targetTraits: ["concise", "structured", "named-owners", "specific-times"],
      exampleStrongResponse:
        "P1 Incident Update, 06:45 GMT\n\nIssue: Production database connectivity failure affecting all regions since 05:15 GMT.\nImpact: Client-facing services down across APAC, EMEA, and Americas.\n\nWorkstream owners:\n- Database investigation: London (lead: Jordan Cole)\n- Application layer: Singapore (lead: Priya Lim)\n- Client communications: New York (lead: Marcus Reid)\n\nNext checkpoint: 08:00 GMT. All leads report progress in this channel.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your update is structured, specific, and wastes no words. Every sentence contains a fact or an action. This is exactly what a direct communicator wants broadcast to the team.",
          observation:
            "You included timestamps, named owners, and a clear next step. Anyone reading this knows the status without needing to ask a follow-up question.",
          coachingTip:
            "In crisis communications for a direct audience, every sentence should answer one of three questions: what happened, who is fixing it, and when is the next update.",
          styleContext:
            "Direct communicators judge crisis comms by how quickly someone can scan the message and know what to do. Structure and brevity save time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your update may be missing specific times, named owners, or a clear next checkpoint. Check that every key detail is concrete.",
          observation:
            "If your update uses phrases like 'the team is investigating' or 'we will update soon', it lacks the specificity Jordan expects in a P1 situation.",
          coachingTip:
            "Replace every vague reference with a concrete one. 'The team' becomes a named person. 'Soon' becomes a specific time. Direct communicators need precision.",
          styleContext:
            "Direct communicators read crisis updates for actionable detail. Vague language creates follow-up questions, which slow down the response.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your update is either too long, too vague, or includes unnecessary context that dilutes the key information. In a crisis, less is more.",
          observation:
            "If your update opens with an apology or an explanation of how the issue was discovered, you have misjudged the audience and the moment.",
          coachingTip:
            "Write the update, then delete any sentence that does not answer: what, who, or when. What remains is what Jordan wants published.",
          styleContext:
            "Direct communicators see lengthy crisis updates as a sign that the writer is not clear on the priorities. Brevity signals competence.",
        },
      },
    },
  },

  // Scenario 146 - Sam Hartley, remote, intermediate
  {
    id: "scenario-146",
    title: "The Virtual All-Hands Q&A",
    context:
      "The quarterly virtual all-hands is underway with 200 staff on the call. Sam is leading the Q&A section and has just received a question from an employee challenging the company's decision to restructure the sales team.",
    chooseContext:
      "Sam has given his initial answer but the employee has followed up, suggesting the restructure was poorly communicated. Other employees are posting supportive messages in the chat. Sam is responding.",
    rewriteContext:
      "Sam has asked you to draft a follow-up message for the company-wide Slack channel summarising the key decisions from the all-hands and the rationale for the sales restructure.",
    characterId: "sam-hartley",
    dialogue:
      "Fair question. Here is the answer: the old structure had three layers of approval before a deal could close. We have cut it to one. Twelve people are moving to new roles, not losing their jobs. The change takes effect on 1 April. Next question.",
    chooseDialogue:
      "I hear the concern about communication. We could have given more notice, and I take that on board. But the decision itself is the right one, and it is not up for renegotiation on this call. If you want to discuss your specific situation, email me directly today.",
    rewriteDialogue:
      "Post a summary in the company channel. What was decided, why, and what happens next. Do not soften it. People want clarity, not comfort.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has answered a challenging question at the all-hands by stating facts, giving a date, and moving on without further discussion. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam addresses the question head-on with facts and a timeline, then immediately moves to the next question. There is no extended justification or emotional reassurance.",
          observation:
            "Notice how Sam reframes the restructure positively ('moving to new roles, not losing their jobs') but does it with a single factual statement rather than an emotional appeal.",
          coachingTip:
            "When someone answers a difficult question with facts, a date, and 'next question', they are signalling a direct style. They see transparency as giving answers, not giving comfort.",
          styleContext:
            "Direct communicators handle public challenges by being factual and decisive. They believe the best way to reduce anxiety is to state the truth plainly and move forward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. Sam does use data and structure, which can look analytical. But notice that Sam is not walking through a detailed rationale or inviting further analysis. The answer is a statement, not an explanation.",
          observation:
            "An analytical communicator would explain the metrics behind the decision, perhaps sharing before-and-after approval cycle times. Sam states the change and moves on.",
          coachingTip:
            "The difference is in depth. Direct communicators give enough information to close the question. Analytical communicators give enough information to close the argument.",
          styleContext:
            "Direct communicators in a public forum aim for brevity and clarity. Analytical communicators in the same setting would provide supporting evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam is not exploring how employees feel about the change or inviting a group discussion about the best path forward. The response is factual and final.",
          observation:
            "There is no attempt to build consensus, share excitement about the new structure, or check whether people feel heard. This is a statement of decisions made.",
          coachingTip:
            "Ask yourself: is this person closing a question or opening a conversation? Sam is closing it. That is a direct communicator managing a public forum.",
          styleContext:
            "Direct communicators believe all-hands Q&As are for sharing decisions, not for debating them. They redirect individual concerns to private channels.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The employee has pushed back on communication quality and others are agreeing in the chat. Sam has acknowledged the feedback but stated the decision is final. How do you follow up in the chat?",
      options: [
        {
          id: "s146-opt-a",
          text: "Thanks for addressing that, Sam. For anyone with questions about their specific role, I will set up 15-minute one-to-one slots this week. DM me to book.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Sam's approach by channelling concerns into specific, actionable next steps. It respects the direct style by not reopening the debate publicly.",
        },
        {
          id: "s146-opt-b",
          text: "I think a lot of people would benefit from a more detailed breakdown of the rationale. Could we schedule a follow-up session to walk through the thinking?",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned, but it implicitly suggests Sam's answer was insufficient. A direct communicator may see this as undermining the closure they just established.",
        },
        {
          id: "s146-opt-c",
          text: "It sounds like there are some strong feelings about this. Maybe we should pause and give people a chance to share their concerns before moving to the next topic.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Sam's decision to move on. In a 200-person all-hands, reopening emotional discussion after a direct communicator has closed it creates confusion.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a company-wide Slack message summarising the all-hands decisions, including the sales restructure rationale. Write it in a direct style without softening the message.",
      targetTraits: ["concise", "factual", "decision-focused", "action-oriented"],
      exampleStrongResponse:
        "All-Hands Summary, Q1 2026\n\nKey decisions:\n1. Sales team restructure: Three approval layers reduced to one. Twelve team members move to new roles effective 1 April. No redundancies.\n2. Q2 targets confirmed: Revenue target increased by 8%. Regional breakdowns shared in the attached deck.\n3. New client onboarding process launches 14 April.\n\nWhy the sales restructure: The previous structure added an average of 11 days to deal closure. The new structure removes that delay.\n\nNext steps: If the restructure affects your role, your manager will contact you by 21 March. For questions, email sam.hartley@company.com.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured around decisions and next steps, not feelings or reassurances. A direct communicator would send this without editing.",
          observation:
            "You included what changed, why, and what happens next, all in a scannable format. Anyone reading this knows exactly where they stand.",
          coachingTip:
            "When summarising for a direct audience, lead with decisions, follow with rationale in one sentence, and close with next steps. That is the complete package.",
          styleContext:
            "Direct communicators see post-meeting summaries as accountability tools. Every statement should be something someone can act on or refer back to.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your summary may include too much preamble or softening language. Sam specifically asked you not to soften the message.",
          observation:
            "If your summary includes phrases like 'we understand this may cause concern' or 'we hope everyone feels supported', you have added comfort that Sam did not request.",
          coachingTip:
            "Read your summary and remove any sentence that exists to manage emotions rather than convey information. What remains is what Sam wants published.",
          styleContext:
            "Direct communicators distinguish between empathy (which they value privately) and softening (which they see as diluting the message publicly).",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either buries the key decisions in too much context, avoids stating the restructure clearly, or focuses on reassurance rather than facts.",
          observation:
            "If your summary reads more like a pastoral letter than a business update, you have misjudged the audience. Sam wants facts, not feelings.",
          coachingTip:
            "Start with the decisions in bullet form. If your summary does not make sense as bullet points, it is probably too narrative for a direct communicator.",
          styleContext:
            "Direct communicators believe that clarity is kindness. The clearer the message, the less anxiety it creates, even if the tone feels blunt.",
        },
      },
    },
  },

  // Scenario 147 - Alex Tran, remote, advanced
  {
    id: "scenario-147",
    title: "The Virtual Interview Panel",
    context:
      "You are part of a virtual interview panel for a senior engineering hire. Alex is chairing the panel and has set up a structured scorecard process. The candidate has just finished presenting their technical solution.",
    chooseContext:
      "Alex has asked each panellist to give a one-minute verdict on the candidate's technical presentation. One panellist is giving a lengthy, anecdotal response. Alex is intervening.",
    rewriteContext:
      "Alex has asked you to write a summary email to the hiring manager with the panel's recommendation, covering strengths, concerns, and a clear hire or no-hire verdict.",
    characterId: "alex-tran",
    dialogue:
      "Good presentation. Here is what I need from each of you now: a score out of ten for technical depth, a score for communication, and one sentence on whether you would hire. We go around the panel once. No back-and-forth until everyone has scored. I will start. Eight, seven, yes. Next.",
    chooseDialogue:
      "I appreciate the detail, but I need your scores and verdict, not a story. We have two more candidates today and I want to compare like for like. Score, verdict, one sentence. Go.",
    rewriteDialogue:
      "Send the hiring manager our recommendation by end of day. Scores, strengths, concerns, verdict. If we cannot agree, state the split. Do not hedge.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Alex has structured the panel debrief with numerical scores, one-sentence verdicts, and no discussion until everyone has spoken. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex imposes a tight format, leads by example with rapid scoring, and shuts down extended commentary. This is a direct communicator controlling the pace of a group decision.",
          observation:
            "The phrase 'no back-and-forth until everyone has scored' is key. Alex wants independent verdicts first, not a discussion that could lead to groupthink.",
          coachingTip:
            "When someone structures a group decision with strict time limits and format rules, they are operating in a direct style. They value speed and independence of judgement.",
          styleContext:
            "Direct communicators run panels like this to prevent the most articulate person from dominating. Scores first, discussion second ensures everyone's view is captured.",
        },
        partial: {
          result: "partial",
          explanation:
            "Very close. The structured scorecard and numerical scoring look analytical, and that is a reasonable association. But Alex is using structure to accelerate the decision, not to ensure analytical rigour.",
          observation:
            "An analytical communicator would want to discuss the scoring criteria in depth before scoring. Alex pre-set the criteria and is now driving to a rapid verdict.",
          coachingTip:
            "Look at the purpose behind the structure. If it exists to speed things up, it is direct. If it exists to ensure thoroughness, it is analytical.",
          styleContext:
            "Direct communicators borrow analytical tools (scorecards, ratings) but use them for speed. They want a number they can compare, not a narrative they need to interpret.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not inviting the panel to share their feelings about the candidate or to explore the candidate's cultural fit through open discussion. This is a structured, rapid evaluation.",
          observation:
            "There is no warmth, no interest in building consensus, and no creative reflection on the candidate's potential. This is a scoring exercise run at pace.",
          coachingTip:
            "Ask yourself: is this person trying to understand the candidate deeply or trying to reach a decision quickly? Alex is firmly in the 'decide quickly' camp.",
          styleContext:
            "Direct communicators believe that lengthy panel discussions introduce bias. Quick, independent scoring followed by targeted discussion produces better hiring decisions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A panellist is giving a lengthy, anecdotal response instead of scores and a verdict. Alex has asked them to stick to the format. How do you support the process?",
      options: [
        {
          id: "s147-opt-a",
          text: "I will go next while you gather your scores. Nine, eight, yes, strong system design and clear communication under pressure. The only concern is limited experience with our specific tech stack.",
          score: 10,
          result: "strong",
          explanation:
            "This models the expected format, keeps the panel moving, and gives the struggling panellist time to recalibrate. It supports Alex's process without creating confrontation.",
        },
        {
          id: "s147-opt-b",
          text: "Perhaps we could give everyone a couple of minutes to write their scores down before going around the table? That might help everyone collect their thoughts.",
          score: 5,
          result: "partial",
          explanation:
            "Considerate, but it slows the process down. Alex has already modelled the format and wants the panel to match that pace, not introduce a writing exercise.",
        },
        {
          id: "s147-opt-c",
          text: "I think the anecdotes are actually quite valuable. They give us colour on how the candidate performed beyond just a number. Could we allow a bit more time for qualitative feedback?",
          score: 0,
          result: "weak",
          explanation:
            "This contradicts Alex's explicitly stated process and slows down a panel that has two more candidates to see. A direct communicator will see this as undermining the structure.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants a recommendation email to the hiring manager with scores, strengths, concerns, and a clear verdict. The panel scored 8.5 average with one dissenting voice. Write it in a direct style.",
      targetTraits: ["concise", "verdict-first", "scores-included", "concerns-stated"],
      exampleStrongResponse:
        "Subject: Panel Recommendation, Senior Engineer, Candidate A\n\nVerdict: Hire. Panel score: 8.5/10 average (range 7 to 10).\n\nStrengths: Exceptional system design capability, clear communicator under pressure, strong track record of delivery at scale.\n\nConcerns: Limited experience with our specific tech stack (flagged by one panellist, score 7/10). Mitigated by strong learning agility demonstrated in the technical exercise.\n\nSplit: Three panellists voted hire, one voted conditional hire pending a technical deep-dive on infrastructure tooling.\n\nRecommended next step: Extend offer with a 90-day technical onboarding plan.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You led with the verdict, included the scores, stated the concern honestly, and gave a clear next step. A direct communicator would forward this without changes.",
          observation:
            "Leading with 'Hire' followed by the supporting data is the direct approach. The hiring manager can stop reading after the first line if they trust the panel.",
          coachingTip:
            "In recommendation emails for a direct audience, put the answer first and the evidence second. They want the verdict, then the rationale, not the other way around.",
          styleContext:
            "Direct communicators write recommendation emails as decision documents. The first sentence should contain the decision; everything else supports it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good effort, but your email may bury the verdict in context or avoid stating the dissenting view clearly. Alex specifically said 'if we cannot agree, state the split'.",
          observation:
            "If your email builds up to the recommendation rather than leading with it, the hiring manager has to read the whole thing to find the answer. That is not direct.",
          coachingTip:
            "Put your verdict in the first sentence. Then support it with scores and evidence. The hiring manager should know the answer before they finish the first line.",
          styleContext:
            "Direct communicators read recommendation emails for the answer, not for the journey to the answer. Lead with the punchline.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either avoids giving a clear verdict, hedges the recommendation, or focuses too much on the process rather than the outcome.",
          observation:
            "If your email says 'the panel had a good discussion and there were mixed views' without stating a clear hire or no-hire, you have not delivered what Alex asked for.",
          coachingTip:
            "Alex said 'do not hedge'. That means your email must contain the word 'hire' or 'no-hire' in the opening line. Everything else is supporting detail.",
          styleContext:
            "Direct communicators see hedged recommendations as a failure of leadership. The panel exists to make a call, not to present options to the hiring manager.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (148-150)
  // ============================================

  // Scenario 148 - Priya Sharma, remote, foundation
  {
    id: "scenario-148",
    title: "Virtual Team Building Facilitation",
    context:
      "The team is scattered across four offices and Priya has organised a virtual team building session on Zoom. She has planned interactive activities to help new joiners feel connected with the wider group.",
    chooseContext:
      "Priya has noticed that two new joiners have their cameras off and have not spoken yet. She is trying to bring them into the conversation without putting them on the spot.",
    rewriteContext:
      "Priya has asked you to send a follow-up message to the team Slack channel capturing the highlights of the session and encouraging people to stay connected.",
    characterId: "priya-sharma",
    dialogue:
      "OK everyone, this is going to be brilliant! I have got three activities lined up and I promise you will actually enjoy these ones. First up, we are going to do a 'two truths and a lie' but with a twist. Instead of boring facts, I want your most ridiculous, unbelievable stories. The wilder the better. Ready? I will go first because mine is genuinely outrageous.",
    chooseDialogue:
      "I can see a couple of new faces are keeping things low-key, which is totally fine. But I would love to hear from you when you are ready. No pressure at all. Actually, how about this: everyone drop your most random fun fact in the chat and I will read them out. That way nobody has to unmute if they do not want to.",
    rewriteDialogue:
      "Can you write something for the team channel? Make it fun and warm. Mention the best moments, tag the new people to make them feel included, and remind everyone we are doing this monthly. I want people to actually look forward to the next one.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a virtual team building session with high energy, promised the activities would be enjoyable, and volunteered to go first with an 'outrageous' story. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with enthusiasm, makes bold promises about the session being fun, and volunteers to go first with dramatic flair. This is a textbook expressive communicator setting the tone.",
          observation:
            "Notice phrases like 'this is going to be brilliant' and 'genuinely outrageous'. Expressive communicators use amplified language to generate energy and buy-in.",
          coachingTip:
            "When someone leads a session by promising it will be enjoyable and volunteering to go first with something dramatic, they are signalling an expressive style. Match their energy.",
          styleContext:
            "Expressive communicators see team building as a performance opportunity. They believe enthusiasm is contagious and that the facilitator's energy determines the session's success.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and inclusive, which can look supportive. But notice that the focus is on energy and entertainment rather than on making sure everyone feels safe.",
          observation:
            "A supportive communicator would focus on creating a psychologically safe space. Priya is focused on creating an exciting, high-energy experience.",
          coachingTip:
            "The tell is where the energy is directed. Supportive communicators create calm safety. Expressive communicators create exciting momentum.",
          styleContext:
            "Expressive communicators use team building to generate collective excitement. Supportive communicators use it to deepen trust and connection.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not presenting data about the benefits of team building or setting rigid time limits. She is also not issuing direct instructions. The approach is entirely energy-driven.",
          observation:
            "There is no structure, no agenda, and no analysis. This is a facilitator who leads through personality and enthusiasm.",
          coachingTip:
            "Ask yourself: is this person trying to inform, instruct, or energise? Priya is clearly in the 'energise' camp, which is the hallmark of an expressive communicator.",
          styleContext:
            "Expressive communicators believe that a virtual team building session lives or dies on its energy level. They invest in making it memorable and enjoyable.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has noticed two new joiners with cameras off and is trying to include them without pressure. She has asked everyone to drop fun facts in the chat. How do you support her approach?",
      options: [
        {
          id: "s148-opt-a",
          text: "Love this! I will go first - mine is that I once accidentally ended up on stage at a comedy club. New joiners, yours are going to be the best ones, I can tell already!",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy, models the behaviour she wants, and warmly encourages the new joiners without pressuring them. It keeps the momentum going.",
        },
        {
          id: "s148-opt-b",
          text: "Good idea. I will put mine in the chat. Everyone should feel free to share when they are comfortable.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive and cooperative, but it lacks the energy and enthusiasm Priya is trying to generate. It does not amplify the fun she is creating.",
        },
        {
          id: "s148-opt-c",
          text: "We could also try a structured icebreaker where everyone answers the same question in turn. That might be more equitable and ensure everyone participates.",
          score: 0,
          result: "weak",
          explanation:
            "This replaces Priya's spontaneous, fun approach with a structured exercise. It misreads the expressive style by introducing process where she wants energy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a warm, fun Slack message capturing the session highlights, tagging new joiners, and building excitement for the next session. Write it in an expressive style.",
      targetTraits: ["enthusiastic", "warm", "personal-mentions", "forward-looking"],
      exampleStrongResponse:
        "What a session! Massive thanks to everyone who joined today. Highlights include: @Tom's absolutely unbelievable surfing story (we are still not sure we believe you), @Aisha revealing her secret talent for competitive origami, and @Dev proving that quiet people always have the best stories.\n\nHuge welcome to our new joiners @Priya L and @James, you fit right in and your chat contributions were brilliant.\n\nWe are making this a monthly thing because honestly, that was too much fun to be a one-off. Next session: 10 April. Start preparing your best stories now!",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your message is warm, personal, and builds genuine excitement for the next session. An expressive communicator would love sending this out.",
          observation:
            "You mentioned specific people and moments, which makes the message feel personal rather than generic. That is how expressive communicators build connection remotely.",
          coachingTip:
            "When writing for an expressive audience, name names, reference specific moments, and always point forward to the next opportunity for connection.",
          styleContext:
            "Expressive communicators want team messages to feel like shared memories, not corporate updates. Specificity and warmth make people feel seen.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good effort, but your message may be too generic or lacking in specific personal mentions. Priya specifically asked you to tag people and reference highlights.",
          observation:
            "If your message reads like a corporate thank-you rather than a personal recap, it misses the expressive brief. Add names, stories, and enthusiasm.",
          coachingTip:
            "Re-read your message and ask: would someone who was not at the session feel like they missed something brilliant? If not, add more specificity and energy.",
          styleContext:
            "Expressive communicators believe the best team messages make people who were absent wish they had been there and people who attended feel valued.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too brief, or lacks the warmth and enthusiasm Priya requested. It reads more like a meeting summary than a celebration.",
          observation:
            "If your message could have been written by someone who was not at the session, it is too impersonal for an expressive communicator.",
          coachingTip:
            "Inject personality. Use first-person reactions, reference specific funny moments, and end with something that makes people excited for the next session.",
          styleContext:
            "Expressive communicators see team messages as relationship-building tools. A message without warmth, humour, or personal touches misses the entire point.",
        },
      },
    },
  },

  // Scenario 149 - Marcus Webb, remote, intermediate
  {
    id: "scenario-149",
    title: "Remote Client Discovery Workshop",
    context:
      "Marcus is facilitating a virtual discovery workshop with a new client via Zoom. The client team of six people are all on camera and Marcus is trying to uncover their challenges before proposing a solution.",
    chooseContext:
      "Marcus has built good energy in the session but the client's finance director has been quiet throughout. Marcus is trying to draw them into the conversation.",
    rewriteContext:
      "Marcus has asked you to draft a follow-up email to the client capturing the key themes from the discovery session and proposing next steps.",
    characterId: "marcus-webb",
    dialogue:
      "This is fantastic, honestly. I can already see three or four areas where we can make a real difference. But before I get carried away, I want to hear from everyone. What is the one thing that keeps you up at night about this project? And do not give me the polished version; give me the real one. I want the messy truth because that is where the good stuff lives.",
    chooseDialogue:
      "I have noticed our finance colleague has been taking it all in, which is great, but I would love to get your perspective. In my experience, the finance view is always the one that makes or breaks a project. No pressure, but what is your biggest concern? Even if it is just a gut feeling, I want to hear it.",
    rewriteDialogue:
      "Write the follow-up email. Make it feel personal, not like a template. Reference specific things people said. I want them to read it and think 'these people were really listening'. Then suggest three next steps that feel exciting, not just procedural.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has opened a discovery workshop by expressing enthusiasm, asking for honest rather than polished answers, and saying 'the messy truth is where the good stuff lives'. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with enthusiasm ('this is fantastic'), uses vivid language ('the messy truth'), and frames vulnerability as exciting rather than uncomfortable. This is a classic expressive facilitation style.",
          observation:
            "Notice how Marcus makes honesty sound appealing rather than risky. 'Where the good stuff lives' reframes candour as opportunity, which is a signature expressive move.",
          coachingTip:
            "When a facilitator uses dramatic language to make participation feel exciting rather than obligatory, they are operating in an expressive style. Feed their energy with genuine engagement.",
          styleContext:
            "Expressive communicators believe the best insights come from creating an atmosphere where people feel energised enough to be candid. They use enthusiasm as a trust-building tool.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. Marcus is creating psychological safety, which can look supportive. But the method is through energy and excitement, not through gentle reassurance.",
          observation:
            "A supportive communicator would say 'take your time, there are no wrong answers'. Marcus says 'give me the messy truth because that is where the good stuff lives'. The difference is pace and energy.",
          coachingTip:
            "Supportive communicators create safety through calm. Expressive communicators create safety through enthusiasm and self-disclosure. The outcome is similar; the method is different.",
          styleContext:
            "Expressive communicators make vulnerability exciting. Supportive communicators make vulnerability safe. Both approaches invite candour, but the emotional register differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not asking for structured data or specific metrics, nor is he issuing directives. The entire approach is built on energy, connection, and colourful language.",
          observation:
            "There is no scorecard, no formal process, and no instruction. This is a facilitator who leads through personality and genuine curiosity.",
          coachingTip:
            "Ask yourself: is this person trying to extract data or to extract stories? Marcus wants stories, feelings, and honest reactions, which is the hallmark of an expressive communicator.",
          styleContext:
            "Expressive communicators see discovery workshops as conversations, not interrogations. They believe the best insights emerge when people feel energised and heard.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus is trying to draw the quiet finance director into the conversation by flattering their importance and asking for even a gut feeling. How do you support this?",
      options: [
        {
          id: "s149-opt-a",
          text: "Marcus is right, the finance perspective always changes the game. Some of the best workshop insights start with 'I am not sure about this, but...' so whatever you are thinking, we want to hear it.",
          score: 10,
          result: "strong",
          explanation:
            "This amplifies Marcus's approach by validating the finance director's importance and normalising uncertainty. It matches the expressive style of making participation feel exciting rather than obligatory.",
        },
        {
          id: "s149-opt-b",
          text: "We could also send a short questionnaire after the session for anyone who prefers to share their thoughts in writing. That way everyone's input is captured.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and inclusive, but it shifts the moment from live engagement to a follow-up process. Marcus wants the energy of a real-time conversation, not a post-session form.",
        },
        {
          id: "s149-opt-c",
          text: "Let us move on to the next agenda item and circle back to finance later. We are running behind schedule and there are still three topics to cover.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down exactly the moment Marcus is trying to create. Expressive communicators value spontaneous, genuine interaction over rigid agenda management.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants a personal, non-template follow-up email that references specific things people said and proposes exciting next steps. Write it in an expressive style.",
      targetTraits: ["personal", "specific-references", "enthusiastic", "relationship-building"],
      exampleStrongResponse:
        "Subject: Brilliant session today, here is what we heard\n\nHi everyone,\n\nThank you for such an open and honest conversation this afternoon. Genuinely one of the best discovery sessions we have run.\n\nA few things that really stood out: Sarah's point about the disconnect between field teams and head office was a lightbulb moment for us. James's concern about data quality being a barrier to trust landed strongly, and the finance perspective on payback periods is going to shape everything we propose.\n\nWe see three exciting next steps:\n1. A focused session on the field team communication gap, because that felt like the biggest unlock.\n2. A data quality audit so we can show you exactly where the gaps are, no guessing.\n3. A draft business case by end of month, built around the payback framework your finance director described.\n\nWe are genuinely excited about this. Looking forward to the next conversation.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email feels personal, references specific contributions, and frames next steps as exciting opportunities rather than procedural tasks. Marcus would be proud to send this.",
          observation:
            "By naming specific people and their contributions, you make each reader feel individually valued. That is the expressive communicator's secret weapon in client relationships.",
          coachingTip:
            "When writing follow-up emails for an expressive communicator, the test is: would the recipient feel like this was written specifically for them? If yes, you have nailed it.",
          styleContext:
            "Expressive communicators use follow-up emails to deepen relationships, not just to document discussions. Every message is an opportunity to build connection and momentum.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your email may lack specific references to what individuals said or may frame next steps as procedural rather than exciting.",
          observation:
            "If your email could be sent to any client after any discovery session, it is too generic. Marcus wants the client to feel uniquely heard.",
          coachingTip:
            "Go back and add at least two specific references to things people said. Name the person and paraphrase their point. That transforms a template into a personal message.",
          styleContext:
            "Expressive communicators judge follow-up emails by whether they capture the energy of the conversation. Generic summaries feel like the writer was not really listening.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email reads like a standard meeting summary rather than a personal follow-up. It lacks warmth, specificity, and the enthusiasm Marcus asked for.",
          observation:
            "If your email starts with 'Please find below a summary of the key discussion points', you have written a report, not a relationship-building message.",
          coachingTip:
            "Rewrite your email as if you are writing to a friend about an exciting meeting you just had. Then adjust the tone to be professional but keep the energy.",
          styleContext:
            "Expressive communicators see discovery workshops as the start of a partnership, not a procurement process. The follow-up should feel like the beginning of something exciting.",
        },
      },
    },
  },

  // Scenario 150 - Nina Okafor, remote, advanced
  {
    id: "scenario-150",
    title: "Facilitating a Virtual Design Sprint",
    context:
      "Nina is leading a two-day virtual design sprint with a cross-functional team of eight. They are midway through day one and the group has just completed the problem framing exercise. Nina is transitioning to the ideation phase.",
    chooseContext:
      "The ideation phase has produced some bold ideas but one senior stakeholder is dismissing them as impractical. Nina is trying to protect the creative space without alienating the stakeholder.",
    rewriteContext:
      "Nina has asked you to write a summary message for the sprint Miro board capturing the best ideas from the ideation session and framing them for tomorrow's prototyping phase.",
    characterId: "nina-okafor",
    dialogue:
      "OK, that problem framing was incredible. I can feel the energy shifting now. We have gone from 'this is overwhelming' to 'oh wait, actually there is something here'. That is exactly what design sprints do. Now comes my favourite part: ideation. Rules are simple. No idea is too wild. No judging. If it makes you slightly uncomfortable, it is probably worth exploring. I want volume, not perfection. Go!",
    chooseDialogue:
      "Hold on a second. I love that we are pressure-testing ideas, but right now we are in divergent thinking mode. The whole point is to go wide before we go narrow. Can we park the feasibility conversation for tomorrow and just let the ideas breathe for now? Some of the best innovations I have seen started as 'impossible' ideas that someone figured out how to make work.",
    rewriteDialogue:
      "Write up the best ideas on the Miro board. Make it visual and exciting. I want people to come back tomorrow morning and feel genuinely fired up to prototype. Group them thematically and add a one-line hook for each that captures why it is exciting.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Nina has transitioned from problem framing to ideation by celebrating the group's progress, describing the energy shift, and encouraging wild ideas with no judgement. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina narrates the emotional journey of the group ('from overwhelming to oh wait, actually'), celebrates progress enthusiastically, and frames discomfort as a positive signal. This is an expressive communicator at their best.",
          observation:
            "The phrase 'if it makes you slightly uncomfortable, it is probably worth exploring' is a signature expressive reframe. They turn potential anxiety into creative excitement.",
          coachingTip:
            "When a facilitator describes the room's energy and uses that description to build momentum, they are operating in an expressive style. They are narrating the experience as it happens.",
          styleContext:
            "Expressive communicators see facilitation as storytelling. They narrate the group's journey to help participants feel the progress and build confidence for the next phase.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Nina is creating a safe space for ideas, which can look supportive. But the method is through excitement and creative challenge, not through gentle reassurance.",
          observation:
            "A supportive facilitator would say 'every idea is valued and there is no wrong answer'. Nina says 'if it makes you uncomfortable, it is probably worth exploring'. The difference is pace and provocation.",
          coachingTip:
            "Supportive communicators protect ideas by creating safety. Expressive communicators protect ideas by creating excitement. Notice which emotional register the facilitator is using.",
          styleContext:
            "Expressive facilitators use creative energy as a shield against premature judgement. Supportive facilitators use psychological safety. Both protect ideas, but through different mechanisms.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not presenting a structured ideation framework or asking for evidence-based solutions. She is also not issuing directives. The entire approach is energy-driven and creative.",
          observation:
            "There is no methodology explained, no criteria for evaluating ideas, and no time-boxed process. This is a facilitator leading through creative energy and personal enthusiasm.",
          coachingTip:
            "Ask yourself: is this person trying to manage a process or to unleash creative energy? Nina is clearly in the 'unleash' camp, which is the hallmark of an expressive communicator.",
          styleContext:
            "Expressive communicators believe ideation works best when people feel energised and uninhibited. Structure can come later; the first job is to generate momentum.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior stakeholder is dismissing bold ideas as impractical during the divergent thinking phase. Nina wants to protect the creative space. How do you support her?",
      options: [
        {
          id: "s150-opt-a",
          text: "That feasibility lens will be valuable tomorrow when we prototype. For now, what would it look like if we assumed this idea could work? Sometimes the most impractical-sounding ideas contain a kernel that becomes the actual solution.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the stakeholder's perspective, redirects it to tomorrow, and reframes the 'impractical' idea as potentially containing a breakthrough. It matches Nina's expressive approach to protecting creative space.",
        },
        {
          id: "s150-opt-b",
          text: "Good point about feasibility. Maybe we should note which ideas are realistic and which are more aspirational so we can prioritise tomorrow.",
          score: 5,
          result: "partial",
          explanation:
            "Practical but it introduces premature filtering during divergent thinking. Nina specifically asked the group to go wide before going narrow.",
        },
        {
          id: "s150-opt-c",
          text: "I agree, we should focus on ideas that can actually be implemented. There is no point spending time on things that will never get past the business case stage.",
          score: 0,
          result: "weak",
          explanation:
            "This sides with the stakeholder against Nina's facilitation approach and kills the creative momentum she has been building. It fundamentally undermines the design sprint process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants a Miro board summary of the best ideas, grouped thematically with one-line hooks that capture why each is exciting. Write it in an expressive style that will fire people up for tomorrow.",
      targetTraits: ["enthusiastic", "visual-language", "thematic-grouping", "momentum-building"],
      exampleStrongResponse:
        "Day 1 Ideation Highlights\n\nTheme 1: The Self-Service Revolution\nWhat if customers never had to wait for us? Three ideas that flip the support model on its head.\n- Idea: AI-guided troubleshooting that learns from every interaction.\n- Idea: Community-powered support where expert users mentor new ones.\n- Idea: Predictive alerts that fix problems before customers notice.\n\nTheme 2: The Data Unlock\nWe are sitting on insights we have never used. These ideas turn dormant data into competitive advantage.\n- Idea: Real-time dashboards that let clients see their own performance metrics.\n- Idea: Automated benchmarking that shows clients how they compare to peers.\n\nTheme 3: The Human Touch at Scale\nTechnology that makes every interaction feel personal, even at 10,000 users.\n- Idea: Personalised onboarding journeys based on user behaviour.\n- Idea: Video check-ins triggered by engagement drops.\n\nTomorrow we prototype the top three. Come ready to build.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary groups ideas thematically, uses compelling hooks, and ends with a call to action that builds momentum for day two. Nina would be thrilled with this.",
          observation:
            "The thematic hooks ('The Self-Service Revolution', 'The Data Unlock') turn a list of ideas into a narrative. That is how expressive communicators create excitement around abstract concepts.",
          coachingTip:
            "When summarising creative output for an expressive audience, give each theme a name that tells a story. 'Group 1' is forgettable. 'The Self-Service Revolution' is memorable.",
          styleContext:
            "Expressive communicators believe that how you present ideas matters as much as the ideas themselves. Compelling framing builds buy-in and energy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your summary may lack the thematic hooks or the momentum-building language Nina asked for. Check that each group has a compelling one-liner.",
          observation:
            "If your summary lists ideas without framing them in an exciting way, it reads like meeting notes rather than a creative showcase.",
          coachingTip:
            "Add a one-line hook to each theme that explains why it is exciting, not just what it is. Transform 'Customer Support Ideas' into something that makes people lean forward.",
          styleContext:
            "Expressive communicators use framing to generate energy. The content matters, but the packaging determines whether people come back tomorrow fired up or flat.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary reads like a structured list rather than an exciting showcase of creative thinking. It lacks the energy and visual language Nina requested.",
          observation:
            "If your summary could be a spreadsheet, it is not what Nina wants on the Miro board. She asked for something that would fire people up.",
          coachingTip:
            "Think about your summary as a movie trailer for tomorrow's prototyping session. It should make people excited to come back and build something.",
          styleContext:
            "Expressive communicators see sprint summaries as momentum tools. A dry list of ideas kills energy. A compelling narrative builds anticipation for the next phase.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (151-153)
  // ============================================

  // Scenario 151 - Tom Brennan, remote, foundation
  {
    id: "scenario-151",
    title: "Remote Daily Check-in with a Struggling Team Member",
    context:
      "You have a daily 15-minute video check-in with your team. Tom, a normally reliable team member, has been missing deadlines and seems withdrawn on camera over the past week. Today's check-in is just the two of you.",
    chooseContext:
      "Tom has admitted that he is struggling with the workload since a colleague left the team two months ago. He looks tired and his voice is flat. He is asking whether you think he is underperforming.",
    rewriteContext:
      "Tom has asked you to send him a summary of what you discussed and the adjustments you agreed, so he has something to refer back to and does not feel like it was just a conversation that disappears.",
    characterId: "tom-brennan",
    dialogue:
      "I appreciate you checking in. Honestly, I have been finding it hard to keep up since Jess left. I do not want to make excuses, but I feel like I am doing two jobs and not doing either of them well. I keep thinking I should just get on with it, but I am running out of steam. I hope that is OK to say.",
    chooseDialogue:
      "Do you think I am underperforming? I really do not want to let the team down. I have been trying to pick up everything Jess used to do, but I can feel the quality slipping and it is stressing me out. I just want to know where I stand.",
    rewriteDialogue:
      "Could you send me a note about what we agreed today? Not a formal thing, just something I can look back at. When things feel overwhelming, it helps to have something written down so I know what I am supposed to focus on.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has opened up about struggling with workload since a colleague left, expressed worry about making excuses, and checked whether it was OK to share his feelings. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom is open about his feelings but cautious about burdening others ('I do not want to make excuses', 'I hope that is OK to say'). This self-aware vulnerability combined with concern for the team is a hallmark of the supportive style.",
          observation:
            "Notice how Tom frames his struggle in terms of impact on others ('not doing either of them well') rather than impact on himself. Supportive communicators prioritise the team even when they are struggling.",
          coachingTip:
            "When someone shares a difficulty but immediately checks whether it is acceptable to do so, they are signalling a supportive style. They need reassurance that honesty is welcome.",
          styleContext:
            "Supportive communicators find it difficult to ask for help because they see it as potentially burdening others. Acknowledging their courage in speaking up is important.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. Tom is open about his feelings, which can look expressive. But notice the hesitancy and self-editing. An expressive communicator would share freely without checking whether it was acceptable.",
          observation:
            "An expressive communicator would say 'this is really hard and I need help' without the qualifiers. Tom says 'I hope that is OK to say', which shows he is filtering his honesty through concern for others.",
          coachingTip:
            "The tell is the hesitancy. Expressive communicators share openly and boldly. Supportive communicators share carefully, always checking whether they are creating a problem by being honest.",
          styleContext:
            "Supportive communicators self-edit to protect relationships. Their honesty comes with a built-in apology, which is different from the unfiltered candour of an expressive communicator.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not presenting a structured analysis of his workload or demanding a solution. He is sharing how he feels and checking whether his feelings are valid.",
          observation:
            "There is no data, no ultimatum, and no proposed solution. This is someone processing their emotions and seeking reassurance, which is a supportive communication pattern.",
          coachingTip:
            "Ask yourself: is this person presenting a problem to be solved or sharing a feeling to be acknowledged? Tom is sharing feelings, which is the hallmark of a supportive communicator.",
          styleContext:
            "Supportive communicators process stress by talking about how they feel, not by analysing the workload data. Responding with empathy before solutions is the key to connecting with them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has asked whether you think he is underperforming. He is worried about letting the team down and is clearly stressed. How do you respond?",
      options: [
        {
          id: "s151-opt-a",
          text: "You are not underperforming, Tom. You have been carrying a workload built for two people and kept things moving when others would have flagged this sooner. Let us work out which tasks are genuinely yours and which we need to redistribute.",
          score: 10,
          result: "strong",
          explanation:
            "This directly addresses Tom's fear, validates his effort, and offers collaborative problem-solving. It matches the supportive style by reassuring first and then working through the solution together.",
        },
        {
          id: "s151-opt-b",
          text: "The numbers show your output has dropped by about 20% over the past month, but I think that is understandable given the circumstances. Let me pull together a workload analysis and we can look at it together next week.",
          score: 5,
          result: "partial",
          explanation:
            "Factually accurate but emotionally cold. Leading with a performance metric when someone is asking for reassurance misses the moment. Tom needs to hear he is valued before he hears data.",
        },
        {
          id: "s151-opt-c",
          text: "Honestly, yes, there has been a drop in your output. But rather than dwelling on it, let us focus on what we can control. I need you to prioritise the top three deliverables and let everything else go. Can you do that?",
          score: 0,
          result: "weak",
          explanation:
            "Confirming underperformance when someone is vulnerable and stressed will damage trust. Tom needs empathy and support first, not a direct performance assessment and instruction.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants a written summary of your discussion and the adjustments you agreed, something he can refer back to when things feel overwhelming. Write it in a supportive style.",
      targetTraits: ["warm", "reassuring", "collaborative-language", "clear-priorities"],
      exampleStrongResponse:
        "Hi Tom,\n\nThanks for being so honest today. It takes real strength to flag when things are not working, and I want you to know I value that.\n\nHere is what we agreed:\n- Your core priorities for the next two weeks are the Henderson report and the Q2 planning inputs. Everything else can wait.\n- I am going to speak to the leadership team about redistributing Jess's workload properly. You should not be carrying it indefinitely.\n- We will keep our daily check-ins but make them shorter and more focused on how you are doing, not just what you are doing.\n\nYou are a valued part of this team, Tom. We will get through this together. If anything feels off between now and our next chat, just message me.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message opens with warmth, clearly lists the agreements, and closes with personal reassurance. Tom would find this genuinely comforting to refer back to.",
          observation:
            "The phrase 'we will get through this together' is exactly what a supportive communicator needs to hear. It frames the challenge as shared, not individual.",
          coachingTip:
            "When writing follow-ups for a supportive communicator, bookend the practical content with emotional reassurance. Open with warmth, list the agreements, close with support.",
          styleContext:
            "Supportive communicators need written records to feel secure. A warm, clear summary gives them permission to focus on agreed priorities without worrying about everything else.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good effort, but your message may be too task-focused or lacking in the warmth Tom needs. Check that you have acknowledged his courage in speaking up.",
          observation:
            "If your message jumps straight to the action points without first acknowledging how Tom is feeling, it reads more like a task list than a supportive follow-up.",
          coachingTip:
            "Add a sentence at the start that validates Tom's honesty and a sentence at the end that reinforces your support. The practical content goes in the middle.",
          styleContext:
            "Supportive communicators read follow-up messages looking for two things: clarity on what to do and reassurance that they are valued. Both must be present.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either lacks warmth, reads like a performance management note, or fails to provide the clear priorities Tom asked for.",
          observation:
            "If your message could be filed in an HR system, it is too formal. Tom asked for something he could refer back to for comfort and clarity, not a formal record.",
          coachingTip:
            "Write as if you are sending a message to someone you genuinely care about. Include the practical details but wrap them in language that says 'I have got your back'.",
          styleContext:
            "Supportive communicators can tell the difference between a genuine follow-up and a formal one. The tone matters as much as the content.",
        },
      },
    },
  },

  // Scenario 152 - Leah Morgan, remote, intermediate
  {
    id: "scenario-152",
    title: "The Remote Exit Interview",
    context:
      "You are conducting a remote exit interview with a departing team member. Leah, from HR, is also on the call in a supporting role. The departing employee has hinted that their reason for leaving is related to management issues.",
    chooseContext:
      "The departing employee has become emotional, saying they felt unsupported by their line manager during a difficult personal period. Leah is responding.",
    rewriteContext:
      "Leah has asked you to draft a confidential summary of the exit interview for the HR file, capturing the key themes while being sensitive to the departing employee's trust in sharing their experiences.",
    characterId: "leah-morgan",
    dialogue:
      "Thank you for being willing to share this with us. I know exit interviews can feel like a formality, but I genuinely want to understand your experience so we can do better for others. Whatever you share stays confidential. There is no judgement here. Take your time.",
    chooseDialogue:
      "I am really sorry you went through that. Nobody should feel unsupported when they are dealing with personal challenges, and I can hear how much that affected your decision. Can I ask, was there a specific moment when you felt things could have been handled differently? Only if you are comfortable sharing.",
    rewriteDialogue:
      "Write the summary with real care, please. This person trusted us with something difficult and I want the record to reflect that. Capture the themes without making it feel clinical. Their manager needs to see this, but it should be written in a way that protects the individual's dignity.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has opened the exit interview by emphasising confidentiality, removing judgement, and explicitly inviting the departing employee to take their time. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah prioritises psychological safety by naming the potential discomfort ('exit interviews can feel like a formality'), offering confidentiality, and giving the employee control of the pace. This is a supportive communicator creating space for honesty.",
          observation:
            "Notice how Leah frames the purpose as 'so we can do better for others'. She connects the employee's willingness to share to a benefit for colleagues, which appeals to the supportive instinct to help the team.",
          coachingTip:
            "When someone opens a difficult conversation by naming the discomfort and offering explicit safety, they are signalling a supportive style. They need trust before they can work effectively.",
          styleContext:
            "Supportive communicators believe the quality of information you receive depends on the quality of the safety you create. They invest in trust before asking difficult questions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and personal, which can look expressive. But the focus is on safety and comfort rather than on energy and enthusiasm.",
          observation:
            "An expressive communicator would say something like 'I really want to hear your story and I know it is going to help us enormously'. Leah focuses on removing barriers to sharing rather than generating excitement about sharing.",
          coachingTip:
            "The tell is the emotional register. Expressive communicators create warmth through energy. Supportive communicators create warmth through gentleness and patience.",
          styleContext:
            "Supportive communicators in exit interviews focus on making the person feel safe. Expressive communicators focus on making the person feel valued. Both are warm but in different ways.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not structuring the interview around specific questions or asking for data-driven feedback. The opening is entirely about emotional safety and trust-building.",
          observation:
            "There is no agenda, no checklist, and no time limit. This is someone who believes the conversation will flow naturally once the person feels safe enough to be honest.",
          coachingTip:
            "Ask yourself: is this person trying to collect data or to create a safe space for honest sharing? Leah is creating safety, which is the hallmark of a supportive communicator.",
          styleContext:
            "Supportive communicators see exit interviews as deeply human conversations, not as data collection exercises. The relationship with the departing person matters even on their last day.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The departing employee has become emotional about feeling unsupported during a personal difficulty. Leah has responded with empathy and asked for a specific example. How do you contribute?",
      options: [
        {
          id: "s152-opt-a",
          text: "I appreciate you sharing that, and I can see it still affects you. We want to make sure this does not happen to someone else. Whatever you feel comfortable sharing will help us, and if you need to pause, that is fine.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the emotion, connects the sharing to a purpose (helping others), and offers control over the pace. It perfectly matches Leah's supportive approach to the conversation.",
        },
        {
          id: "s152-opt-b",
          text: "That is really helpful context. Could you tell me roughly when this was and whether you raised it through any formal channels? That will help us trace what happened.",
          score: 5,
          result: "partial",
          explanation:
            "Useful follow-up, but the shift to dates and formal channels feels premature when the person is still emotional. The supportive approach would acknowledge the feeling before seeking specifics.",
        },
        {
          id: "s152-opt-c",
          text: "I understand. Let me make a note of that. Moving on, could you tell me about your experience with the team's development opportunities and career progression framework?",
          score: 0,
          result: "weak",
          explanation:
            "Moving on when someone is emotional signals that their feelings are inconvenient. This would damage trust and likely shut down any further honest sharing for the rest of the interview.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants a confidential exit interview summary that captures the key themes with sensitivity, protecting the individual's dignity while ensuring the manager receives the feedback. Write it in a supportive style.",
      targetTraits: ["sensitive", "dignity-preserving", "theme-focused", "constructive"],
      exampleStrongResponse:
        "Exit Interview Summary (Confidential)\n\nThe departing team member shared their experiences openly and with considerable trust. The key themes are summarised below with care for the individual's privacy.\n\nPrimary reason for leaving: A feeling of being unsupported during a period of personal difficulty. The individual felt that their line manager did not adjust expectations or check in regularly when they were going through a challenging time outside work.\n\nWhat they valued: Strong relationships with immediate colleagues, the quality of the team's work, and the organisation's mission. They emphasised that their decision was not about the company as a whole but about the management support they received during a specific period.\n\nSuggestion for improvement: More structured check-ins during known periods of personal difficulty, and manager training on how to balance performance expectations with pastoral care.\n\nThe individual asked that their feedback be used constructively and not attributed in a way that could create conflict. We should honour that request.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary captures the themes without exposing specific details, preserves the individual's dignity, and ends with a commitment to honour their trust. Leah would be proud of this.",
          observation:
            "You framed the feedback constructively rather than accusatorially. 'A feeling of being unsupported' is very different from 'the manager failed to provide support'. The first protects dignity; the second assigns blame.",
          coachingTip:
            "When writing sensitive summaries for a supportive audience, use feeling-based language ('they felt unsupported') rather than accusatory language ('they were unsupported'). It captures the truth without creating conflict.",
          styleContext:
            "Supportive communicators believe exit interview summaries should serve two purposes: inform improvement and honour trust. If the summary achieves one at the expense of the other, it has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your summary may be either too clinical or too detailed, potentially exposing information the departing employee shared in confidence.",
          observation:
            "If your summary reads like a formal complaint rather than a sensitively captured theme, it risks violating the trust Leah worked hard to establish.",
          coachingTip:
            "Re-read your summary and ask: if the departing employee read this, would they feel their trust was honoured? If not, adjust the language to be more protective.",
          styleContext:
            "Supportive communicators judge exit interview records by whether they serve the departing person's wishes as well as the organisation's needs. Both matter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too blunt, too detailed, or fails to protect the individual's dignity. Leah specifically asked for a summary written with care.",
          observation:
            "If your summary names specific incidents, dates, or direct quotes without the person's consent, it violates the confidentiality Leah promised.",
          coachingTip:
            "Summarise in themes, not in specifics. 'The individual felt unsupported during a personal difficulty' conveys the message without exposing private details.",
          styleContext:
            "Supportive communicators see exit interview records as trust documents. How you handle someone's honesty after they have left says everything about the organisation's values.",
        },
      },
    },
  },

  // Scenario 153 - David Chen, remote, advanced
  {
    id: "scenario-153",
    title: "Leading a Virtual Change Management Session",
    context:
      "The organisation is rolling out a major change to its operating model. David is leading a virtual session for middle managers who will need to cascade the changes to their teams. Several managers have expressed private concerns about the pace of change.",
    chooseContext:
      "One manager has openly said they do not feel equipped to explain the changes to their team because they do not fully understand the rationale themselves. Others are nodding in agreement. David is responding.",
    rewriteContext:
      "David has asked you to write a message for the managers' Slack channel capturing the spirit of the session and the support commitments, so managers have something to share with their teams.",
    characterId: "david-chen",
    dialogue:
      "Before we get into the detail, I want to acknowledge something. This is a big change and I know some of you have concerns about the pace. That is completely natural and I would be worried if nobody felt that way. I have been through changes like this before, and the managers who do well are the ones who are honest with their teams about what they know and what they do not. So let us start there. What are you most worried about?",
    chooseDialogue:
      "Thank you for saying that. I think a lot of people in this room feel the same way, and it takes courage to say it out loud. Here is what I can promise: nobody is expected to have all the answers. You are not alone in this. We will build a shared FAQ that you can use with your teams, and I will run drop-in sessions every week where you can bring the questions you cannot answer. Does that help?",
    rewriteDialogue:
      "Write something for the managers' channel that captures what we discussed. Keep it honest about the fact that this is hard. Include the support we are offering. I want every manager who reads it to think 'OK, I am not alone in this and there is help available'.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has opened a change management session by acknowledging concerns, normalising worry, and inviting managers to share what they are most afraid of. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads by acknowledging the emotional reality, normalising concern ('I would be worried if nobody felt that way'), and inviting vulnerability. This is a supportive communicator creating the conditions for honest dialogue.",
          observation:
            "The phrase 'the managers who do well are the ones who are honest about what they know and what they do not' gives people permission to be imperfect. Supportive communicators lead by removing the pressure to pretend.",
          coachingTip:
            "When a leader opens a change session by normalising concern and inviting honest discussion of fears, they are operating in a supportive style. They believe trust precedes action.",
          styleContext:
            "Supportive communicators handle change by creating emotional safety first. They know that people cannot engage with the detail until they feel their concerns have been acknowledged.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. David is sharing personal experience, which can look expressive. But the purpose is to reassure rather than to energise. The tone is gentle, not dynamic.",
          observation:
            "An expressive communicator would frame the change as an exciting challenge. David frames it as something difficult that people will get through with support. The emotional register is care, not enthusiasm.",
          coachingTip:
            "Expressive communicators energise people through change. Supportive communicators steady people through change. Notice whether the leader is generating excitement or generating safety.",
          styleContext:
            "Supportive communicators see change management as pastoral work. The first job is to make people feel safe enough to engage honestly with the new reality.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not presenting the business case for change or issuing instructions for cascading the message. The entire opening is about emotional readiness.",
          observation:
            "There is no data, no timeline, and no directive. This is a leader who believes the emotional groundwork must be laid before the operational detail can land effectively.",
          coachingTip:
            "Ask yourself: is this person trying to explain the change or to prepare people emotionally for the change? David is doing the latter, which is the hallmark of a supportive communicator.",
          styleContext:
            "Supportive communicators believe that change fails not because the plan is wrong but because people do not feel ready. They invest in readiness before rolling out the plan.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A manager has said they do not feel equipped to explain the changes to their team. David has offered shared resources and weekly support sessions. How do you support this approach?",
      options: [
        {
          id: "s153-opt-a",
          text: "I felt the same way when I first heard about this, and that honesty is actually a strength. If we tell our teams 'here is what I know, here is what I am still finding out, and here is where you can ask questions', they will respect that more than a polished script.",
          score: 10,
          result: "strong",
          explanation:
            "This models the vulnerability David is encouraging, normalises the feeling, and offers a practical framework for being honest with teams. It aligns perfectly with the supportive approach.",
        },
        {
          id: "s153-opt-b",
          text: "Could we get the executive team to do a recorded video explaining the rationale? That way we can play it in team meetings rather than having to explain it ourselves.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but it avoids the personal connection David is encouraging. Managers playing a video is very different from managers having honest conversations with their teams.",
        },
        {
          id: "s153-opt-c",
          text: "I think we just need to get on with it. Our teams will take their cue from us, so if we look uncertain, they will panic. We should present the changes confidently even if we have questions ourselves.",
          score: 0,
          result: "weak",
          explanation:
            "This contradicts David's entire approach, which is built on the idea that honest vulnerability is more effective than false confidence. It would undermine the safety he has created in the room.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants a Slack message for managers that is honest about the difficulty of the change, outlines the support available, and makes every reader feel they are not alone. Write it in a supportive style.",
      targetTraits: ["honest", "reassuring", "support-focused", "community-building"],
      exampleStrongResponse:
        "Hi everyone,\n\nThank you to everyone who joined today's session. It was an honest and open conversation, and I think we all came away feeling a bit more prepared.\n\nHere is the truth: this change is significant and it is OK to have questions you cannot yet answer. Several managers shared that they feel the same way, and that honesty was one of the most valuable parts of the session.\n\nHere is what we are putting in place to support you:\n- A shared FAQ document that we will build together and keep updated as new questions arise.\n- Weekly drop-in sessions (Thursdays, 10:00 to 10:30) where you can bring any question, no matter how small.\n- A buddy system pairing managers who have been through similar changes with those experiencing it for the first time.\n\nYou are not expected to have all the answers. You are expected to be honest with your teams about what you know and what you are still finding out. That is enough.\n\nWe are in this together. If you need anything between now and Thursday, message me directly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is honest about the difficulty, specific about the support, and closes with genuine reassurance. Every manager reading this would feel less alone.",
          observation:
            "The phrase 'you are not expected to have all the answers' gives explicit permission to be imperfect. That is the most powerful thing a supportive communicator can offer during change.",
          coachingTip:
            "When writing for a supportive audience during change, the most important sentence is the one that gives people permission to not be perfect. Build the message around that.",
          styleContext:
            "Supportive communicators believe that change messages should make people feel supported, not pressured. The tone should say 'we are in this together' rather than 'this is what you need to do'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your message may lack the emotional honesty or personal reassurance David asked for. Check that you have acknowledged the difficulty explicitly.",
          observation:
            "If your message lists the support resources without first acknowledging that people are struggling, it reads like a solution in search of a problem.",
          coachingTip:
            "Name the difficulty before offering the solution. 'This is hard and here is how we will help' is more powerful than 'here are some resources'.",
          styleContext:
            "Supportive communicators need the problem to be acknowledged before they can trust the solution. Skipping the acknowledgement makes the support feel performative.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too corporate, too brief, or fails to create the sense of community and support David explicitly requested.",
          observation:
            "If your message could have been sent by a CEO who was not at the session, it is too impersonal. David wants managers to feel the message was written by someone who understands their reality.",
          coachingTip:
            "Write from a position of shared experience. Use 'we' rather than 'you'. Reference what was actually said in the session. Make it feel personal and grounded.",
          styleContext:
            "Supportive communicators see change communications as relationship acts, not information acts. The message is the medium through which trust is maintained or broken.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (154-156)
  // ============================================

  // Scenario 154 - Rachel Finch, remote, foundation
  {
    id: "scenario-154",
    title: "Async Code Review Discussion",
    context:
      "You are reviewing a pull request thread in GitHub. Rachel has left detailed comments on a junior developer's PR, requesting changes to the error handling approach and providing references to the team's coding standards.",
    chooseContext:
      "The junior developer has pushed back on Rachel's feedback, arguing that the simpler approach they used is more readable. Rachel is responding in the PR thread.",
    rewriteContext:
      "Rachel has asked you to add a comment to the PR thread summarising the agreed approach, referencing the relevant coding standard, and explaining why the change matters for long-term maintainability.",
    characterId: "rachel-finch",
    dialogue:
      "I have reviewed the error handling in lines 42 to 67. The current implementation catches all exceptions with a generic handler, which masks specific failure modes. Our coding standard (section 4.3.2) requires typed exceptions with distinct recovery paths. I have linked three examples from the main branch where this pattern is implemented correctly. Please refactor to match.",
    chooseDialogue:
      "I understand the readability argument and I agree that simpler code is generally preferable. However, in this case, the simplicity comes at the cost of observability. When this service fails at 2am, the generic handler will log 'error occurred' rather than 'payment gateway timeout on retry 3 of 5'. The second version is what the on-call engineer needs to diagnose the issue. The coding standard exists for this exact reason.",
    rewriteDialogue:
      "Add a summary comment to the PR. Reference section 4.3.2 of the coding standard, link the three examples I provided, and explain the observability rationale. Make it clear this is not about style preference; it is about operational reliability.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has reviewed a pull request by referencing specific line numbers, citing the coding standard section number, linking examples, and requesting a specific refactor. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel provides precise references (line numbers, standard section numbers, linked examples) and frames her feedback in terms of technical correctness rather than personal preference. This is a textbook analytical approach to code review.",
          observation:
            "Notice how Rachel does not say 'I think this should change'. She says 'our coding standard requires this'. Analytical communicators ground feedback in established criteria, not personal opinion.",
          coachingTip:
            "When someone provides feedback with specific references, citations, and evidence, they are signalling an analytical style. Respond with equally specific reasoning.",
          styleContext:
            "Analytical communicators see code review as a quality assurance process, not a negotiation. Feedback is grounded in standards and evidence, which removes subjectivity.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive and action-oriented, which can look direct. But notice that she provides extensive evidence and references rather than simply saying 'change this'. The depth of reasoning is analytical.",
          observation:
            "A direct communicator would say 'fix the error handling' without linking three examples and citing a standard. Rachel provides the evidence because she believes the reasoning matters.",
          coachingTip:
            "The tell is whether someone provides evidence with their directive. Direct communicators instruct. Analytical communicators instruct and explain why, with references.",
          styleContext:
            "Direct communicators in code review focus on what needs to change. Analytical communicators focus on what needs to change and why, with supporting evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not checking how the developer feels about the feedback or framing it as an exciting learning opportunity. The feedback is precise, evidence-based, and impersonal.",
          observation:
            "There is no emotional warmth, no enthusiasm, and no concern for the developer's feelings. This is a technical assessment delivered with surgical precision.",
          coachingTip:
            "Ask yourself: is this person focused on the code quality or on the developer's experience? Rachel is focused entirely on code quality, which is the hallmark of an analytical communicator.",
          styleContext:
            "Analytical communicators see code review feedback as a contribution to code quality, not as a personal interaction. The code is the subject, not the developer.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The junior developer has argued that the simpler approach is more readable. Rachel has explained the observability trade-off. How do you contribute to the PR thread?",
      options: [
        {
          id: "s154-opt-a",
          text: "Agree with Rachel. The observability benefit outweighs the readability cost. Last quarter, a generic handler made incident INC-2847 take 40 minutes longer to diagnose. The typed exception pattern would have surfaced the root cause immediately.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Rachel's position with additional evidence (a real incident), which is exactly how analytical communicators expect discussions to be advanced: with data and examples.",
        },
        {
          id: "s154-opt-b",
          text: "Both approaches have merit. Could we perhaps use the simpler approach for non-critical paths and the typed exception pattern for payment and authentication flows?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable compromise, but it introduces inconsistency in the codebase. Rachel cited a standard that applies to all error handling, not just critical paths.",
        },
        {
          id: "s154-opt-c",
          text: "I think the junior developer has a fair point about readability. Sometimes the coding standard is overly prescriptive and we should trust developers to use their judgement.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines the coding standard Rachel cited and opens a philosophical debate about standards versus judgement. An analytical communicator will see this as undermining the team's agreed processes.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a PR summary comment referencing the coding standard, linking examples, and explaining the observability rationale. Write it in an analytical style.",
      targetTraits: ["precise-references", "evidence-based", "rationale-explained", "structured"],
      exampleStrongResponse:
        "Summary: Error handling refactor agreed.\n\nRequired change: Replace generic exception handler (lines 42 to 67) with typed exceptions per coding standard section 4.3.2.\n\nRationale: Generic handlers mask failure modes and reduce observability. When a service fails, on-call engineers need specific error context (e.g., 'payment gateway timeout, retry 3 of 5') rather than generic messages. This directly affects mean time to resolution.\n\nReference implementations:\n- Payment service: /src/payments/handler.ts (lines 88 to 112)\n- Auth service: /src/auth/validator.ts (lines 34 to 56)\n- Notification service: /src/notifications/sender.ts (lines 71 to 95)\n\nAll three follow the typed exception pattern and have been stable in production for 6+ months.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your comment is structured, references the standard, links specific examples, and explains the operational rationale. Rachel would approve this without changes.",
          observation:
            "You connected the coding standard to a real-world outcome (mean time to resolution), which elevates the feedback from 'follow the rules' to 'here is why the rules exist'.",
          coachingTip:
            "When writing for an analytical audience, always connect the standard to the outcome. 'Section 4.3.2 says X' is weaker than 'Section 4.3.2 says X, which matters because Y'.",
          styleContext:
            "Analytical communicators want PR comments that serve as documentation. A well-written summary comment educates future developers as well as resolving the current discussion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your comment may be missing specific file references, the standard section number, or a clear explanation of the operational rationale.",
          observation:
            "If your comment says 'we should follow the coding standard' without specifying which section, it is not precise enough for an analytical communicator.",
          coachingTip:
            "Add the specific section number, link to at least one example implementation, and explain the practical consequence of not following the standard.",
          styleContext:
            "Analytical communicators see vague references as a sign of shallow understanding. Specificity demonstrates that you have read the standard and understood its purpose.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your comment is either too brief, lacks references, or frames the change as a matter of preference rather than a matter of standard compliance and operational reliability.",
          observation:
            "If your comment says 'Rachel is right, please make the change', it is a directive, not an explanation. Rachel wants the rationale documented, not just the decision.",
          coachingTip:
            "Write your comment as if a new developer will read it in six months and need to understand why the code is written this way. That is the level of detail Rachel expects.",
          styleContext:
            "Analytical communicators see code review discussions as knowledge artefacts. A comment that says 'just do it' wastes the opportunity to document the reasoning for future reference.",
        },
      },
    },
  },

  // Scenario 155 - Owen Grant, remote, intermediate
  {
    id: "scenario-155",
    title: "Async Weekly Update in a Project Management Tool",
    context:
      "The team uses an async weekly update format in their project management tool. Owen has posted his update for the week, and it is significantly more detailed than anyone else's. He has flagged a potential risk that nobody else has noticed.",
    chooseContext:
      "You have responded to Owen's update asking for clarification on the risk he flagged. Owen is providing more detail and asking whether the team's risk register needs updating.",
    rewriteContext:
      "Owen has asked you to draft an update to the project risk register based on the risk he identified, including likelihood, impact, and proposed mitigation steps.",
    characterId: "owen-grant",
    dialogue:
      "Weekly update, 10 March:\n\nCompleted: Data validation module (100%), API endpoint testing (95%, two edge cases remaining).\nIn progress: Integration testing with the payments provider, estimated completion 14 March.\nBlocker: None currently, but see risk note below.\n\nRisk identified: The payments provider's sandbox environment has been intermittently unavailable (three outages in the past five business days, averaging 47 minutes each). If this pattern continues during our integration testing window, we will lose approximately 1.5 days of testing time. I recommend we request a dedicated test environment or build a local mock. Data attached.",
    chooseDialogue:
      "Good question. The three outages occurred on Monday (09:12 to 09:58), Wednesday (14:33 to 15:22), and Friday (10:05 to 10:47). I have logged the exact timestamps and error codes. The pattern suggests scheduled maintenance that is not communicated, but I cannot confirm that without checking with the provider's support team. I would rate this as medium likelihood, high impact. Yes, I think it should go on the risk register with a review date of 17 March.",
    rewriteDialogue:
      "Draft the risk register entry. Include the evidence I have gathered, the likelihood and impact ratings, and two mitigation options with pros and cons for each. I want the project manager to be able to make a decision based on the entry alone, without needing to ask follow-up questions.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has posted a weekly update with precise completion percentages, a risk analysis including frequency data and time impact calculations, and a specific recommendation. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen provides granular completion data, quantifies a risk with specific numbers (three outages, 47-minute average, 1.5 days impact), and offers an evidence-based recommendation. This is an analytical communicator at their most thorough.",
          observation:
            "Notice how Owen does not just flag the risk; he quantifies it. 'The payments provider has had issues' becomes 'three outages in five days, averaging 47 minutes each'. That level of precision is the analytical signature.",
          coachingTip:
            "When someone provides data-backed analysis alongside their status update rather than just a list of tasks, they are signalling an analytical style. Match their rigour in your response.",
          styleContext:
            "Analytical communicators see weekly updates as opportunities to surface patterns and risks that others might miss. Their detail is not over-engineering; it is early warning.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is action-oriented and makes a clear recommendation, which can look direct. But notice the depth of evidence behind the recommendation. A direct communicator would flag the risk and request action without the supporting data.",
          observation:
            "A direct communicator would say 'sandbox is unreliable, we need an alternative'. Owen says 'here are the exact outage times, the average duration, and the calculated impact on our timeline'. The evidence is the analytical differentiator.",
          coachingTip:
            "The tell is whether the recommendation comes with evidence or stands alone. Direct communicators recommend. Analytical communicators recommend and show their working.",
          styleContext:
            "Direct communicators flag risks to prompt action. Analytical communicators flag risks to ensure informed decision-making. Both are valuable; the approach differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not expressing concern about how the team feels or generating excitement about the project. The update is entirely data-driven and process-focused.",
          observation:
            "There is no emotional language, no team-building sentiment, and no creative framing. This is a status report that reads like an engineering log.",
          coachingTip:
            "Ask yourself: is this person sharing how things feel or how things measure? Owen is firmly in the measurement camp, which is the hallmark of an analytical communicator.",
          styleContext:
            "Analytical communicators see async updates as data artefacts. Every update should be precise enough that someone reading it in six months can understand exactly what was happening.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has provided exact timestamps and error codes for the outages and rated the risk as medium likelihood, high impact. He wants to add it to the risk register with a review date. How do you respond?",
      options: [
        {
          id: "s155-opt-a",
          text: "Agree on the rating. Before the 17 March review, could you check with the provider whether the outages are scheduled maintenance? That would shift the likelihood rating and change the mitigation approach.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Owen's analysis, accepts his recommendation, and suggests a specific action that would sharpen the risk assessment. It engages with the analytical approach at the right level of detail.",
        },
        {
          id: "s155-opt-b",
          text: "Thanks, Owen. Let us add it to the register. I trust your judgement on the ratings. Can you own the mitigation and update us next week?",
          score: 5,
          result: "partial",
          explanation:
            "Supportive and decisive, but it skips the analytical engagement Owen is looking for. He shared detailed evidence because he wants the team to evaluate it, not just accept it.",
        },
        {
          id: "s155-opt-c",
          text: "That is a lot of detail for a weekly update. Could you keep future updates to a summary level and flag risks separately if they come up? It would make the updates easier to scan.",
          score: 0,
          result: "weak",
          explanation:
            "This criticises Owen's thoroughness, which is his core strength. An analytical communicator who is told to be less detailed will feel their contribution is being devalued.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a risk register entry with evidence, likelihood and impact ratings, and two mitigation options with pros and cons. Write it in an analytical style that allows a decision without follow-up questions.",
      targetTraits: ["evidence-based", "rated-risk", "options-with-tradeoffs", "self-contained"],
      exampleStrongResponse:
        "Risk Register Entry: PRJ-R-012\n\nRisk: Payments provider sandbox environment instability during integration testing.\n\nEvidence: Three unplanned outages in five business days (10, 12, and 14 March). Average duration: 47 minutes. Error codes: TIMEOUT_502 (twice), SERVICE_UNAVAILABLE_503 (once). Pattern suggests unannounced maintenance windows.\n\nLikelihood: Medium (confirmed pattern, but root cause unverified).\nImpact: High (estimated 1.5 days of lost testing time in a 10-day integration window).\n\nMitigation Option A: Request dedicated test environment from provider.\n- Pros: Eliminates dependency on shared sandbox; gives us control of test schedule.\n- Cons: May incur additional cost (estimated GBP 2,000 to 5,000 per month); provider lead time unknown.\n\nMitigation Option B: Build local mock of payments API.\n- Pros: No external dependency; reusable for future testing cycles; no ongoing cost.\n- Cons: Estimated 3 to 4 days of development effort; mock may not replicate edge cases in provider behaviour.\n\nRecommendation: Pursue Option A in parallel with verifying the outage root cause by 17 March. If the provider cannot guarantee stability, fall back to Option B.\n\nReview date: 17 March. Owner: Owen Grant.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your entry is self-contained, evidence-based, and presents two options with clear trade-offs. A project manager could make a decision from this entry alone, which is exactly what Owen requested.",
          observation:
            "You included cost estimates, development effort, and a fallback strategy. That level of completeness means nobody needs to ask a follow-up question.",
          coachingTip:
            "When writing risk register entries for an analytical audience, the test is: can someone make a decision from this entry without asking you anything? If yes, it is complete.",
          styleContext:
            "Analytical communicators design documents to be self-contained. Every piece of information a decision-maker might need should be present, eliminating the need for follow-up conversations.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but your entry may be missing the evidence detail, the cost estimates, or clear pros and cons for each option. Owen wants a decision-ready document.",
          observation:
            "If your entry recommends an option without showing the trade-offs of the alternative, the decision-maker cannot evaluate whether you have considered all angles.",
          coachingTip:
            "Add specific numbers where possible: dates, costs, effort estimates. Analytical communicators trust recommendations backed by quantified analysis.",
          styleContext:
            "Analytical communicators see risk register entries as decision tools, not record-keeping. If the entry does not support decision-making, it is not serving its purpose.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your entry is either too brief, lacks evidence, or presents a recommendation without supporting analysis. Owen specifically asked for a self-contained, decision-ready entry.",
          observation:
            "If your entry says 'risk: sandbox unreliable, mitigation: find an alternative', it is a summary, not a risk register entry. Owen wants depth.",
          coachingTip:
            "Write your entry as if you will not be available to answer questions about it. Every piece of context the reader might need should be in the document.",
          styleContext:
            "Analytical communicators believe that incomplete documentation creates unnecessary meetings. A thorough risk entry saves everyone time in the long run.",
        },
      },
    },
  },

  // Scenario 156 - Fiona Banks, remote, advanced
  {
    id: "scenario-156",
    title: "Remote Budget Review Meeting",
    context:
      "Fiona is leading a virtual quarterly budget review with department heads. The team is halfway through the financial year and several departments are tracking over budget. Fiona has prepared a detailed variance analysis.",
    chooseContext:
      "One department head has attributed their overspend to unexpected market conditions and is asking for additional budget. Fiona is responding with her analysis.",
    rewriteContext:
      "Fiona has asked you to draft a follow-up email to all department heads summarising the budget positions, the agreed actions, and the conditions under which additional funding requests will be considered.",
    characterId: "fiona-banks",
    dialogue:
      "Let us start with the numbers. I have prepared a variance analysis for each department, comparing actuals to budget at the halfway point. Three of six departments are tracking over budget. Marketing is 12% over, Operations is 8% over, and Product Development is 6% over. I have broken each variance into controllable and uncontrollable factors. Before we discuss remedial actions, I want to walk through the data so everyone is working from the same baseline.",
    chooseDialogue:
      "I appreciate the context on market conditions, and I have factored that into the uncontrollable variance. However, the data shows that 60% of your overspend is in controllable categories: specifically, contractor spend, which is up 34% against plan, and travel, which is up 22%. The market conditions account for approximately 40% of the variance. So the question is not whether you need more budget overall, but whether the controllable 60% can be brought back in line.",
    rewriteDialogue:
      "Send the follow-up email. Include each department's variance position with the controllable and uncontrollable split. List the agreed actions with owners and dates. For additional funding requests, set out the criteria clearly: what evidence is required, what the approval process is, and by when requests must be submitted. I do not want anyone to say they did not know the rules.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has opened a budget review by presenting variance percentages for each department, distinguishing between controllable and uncontrollable factors, and insisting on walking through the data before discussing actions. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona leads with quantified data, introduces a framework (controllable versus uncontrollable variance), and insists on establishing a shared factual baseline before moving to discussion. This is an analytical communicator at their most rigorous.",
          observation:
            "The phrase 'I want to walk through the data so everyone is working from the same baseline' is telling. Analytical communicators believe informed discussion requires shared facts, and they will invest time to create that foundation.",
          coachingTip:
            "When someone insists on reviewing data before discussing actions, they are signalling an analytical style. Respect the process; they believe better data leads to better decisions.",
          styleContext:
            "Analytical communicators see budget reviews as evidence-based exercises. They believe most budget disagreements arise from people working with different numbers, so they align the data first.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is authoritative and structured, which can look direct. But notice that she is not immediately issuing instructions to cut spending. She is walking through the analysis first because she believes the data should drive the actions.",
          observation:
            "A direct communicator would say 'Marketing, you are 12% over, cut your contractor spend by next month'. Fiona presents the data and expects the discussion to produce the action plan.",
          coachingTip:
            "The tell is whether someone presents data as context for discussion or as justification for a pre-made decision. Fiona is doing the former, which is analytical.",
          styleContext:
            "Direct communicators use data to support decisions already made. Analytical communicators use data to inform decisions yet to be made. The relationship between data and action differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not asking department heads how they feel about their budgets or generating enthusiasm for financial discipline. The entire approach is data-driven and methodical.",
          observation:
            "There is no emotional language, no team-building sentiment, and no creative reframing of the budget challenge. This is a financial review led with precision and rigour.",
          coachingTip:
            "Ask yourself: is this person leading with numbers or with narrative? Fiona is leading with numbers, complete with percentage breakdowns and analytical frameworks.",
          styleContext:
            "Analytical communicators see budget reviews as opportunities to apply rigorous analysis. They believe financial discipline comes from understanding the data, not from emotional appeals.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A department head has blamed market conditions for their overspend. Fiona has shown that 60% of the variance is controllable. How do you contribute to the discussion?",
      options: [
        {
          id: "s156-opt-a",
          text: "Fiona, that controllable/uncontrollable split is useful. For the contractor spend, could we see a month-by-month breakdown? If the increase started before the market shift, it strengthens the case that it is a controllable issue rather than an external factor.",
          score: 10,
          result: "strong",
          explanation:
            "This engages with Fiona's framework, requests additional data to test the department head's claim, and offers an evidence-based hypothesis. It is exactly the kind of analytical contribution she values.",
        },
        {
          id: "s156-opt-b",
          text: "I think we should give the department head the benefit of the doubt on the market conditions. These numbers do not always tell the full story and there may be context we are not seeing in the data.",
          score: 5,
          result: "partial",
          explanation:
            "Empathetic, but it undermines Fiona's data-driven approach by suggesting the numbers are insufficient. An analytical communicator wants the context to be surfaced through data, not through trust.",
        },
        {
          id: "s156-opt-c",
          text: "Let us just agree a target reduction and move on. We are spending too long on this. Marketing, can you cut 10% from contractor spend by end of quarter? Done.",
          score: 0,
          result: "weak",
          explanation:
            "This imposes a solution without engaging with the analysis. Fiona specifically insisted on walking through the data before discussing actions, and this approach skips the process entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a follow-up email with each department's variance position, controllable/uncontrollable splits, agreed actions, and clear criteria for additional funding requests. Write it in an analytical style.",
      targetTraits: ["data-driven", "structured", "criteria-defined", "comprehensive"],
      exampleStrongResponse:
        "Subject: Q2 Budget Review, Summary and Agreed Actions\n\nDepartment Variance Positions (H1 Actuals vs Budget):\n- Marketing: +12% (controllable: 7.2%, uncontrollable: 4.8%). Key driver: contractor spend (+34% vs plan).\n- Operations: +8% (controllable: 5.6%, uncontrollable: 2.4%). Key driver: logistics costs (+18% vs plan).\n- Product Development: +6% (controllable: 2.4%, uncontrollable: 3.6%). Key driver: cloud infrastructure scaling.\n- Sales, Finance, HR: On or under budget. No action required.\n\nAgreed Actions:\n1. Marketing to submit a contractor spend reduction plan by 21 March (owner: J. Clarke).\n2. Operations to renegotiate logistics contracts by 31 March (owner: P. Morris).\n3. Product Development to complete cloud cost optimisation review by 28 March (owner: S. Kapoor).\n\nAdditional Funding Requests:\nRequests will be considered if they meet all three criteria:\na) The overspend is at least 70% attributable to uncontrollable factors, supported by evidence.\nb) A remediation plan for controllable factors is submitted alongside the request.\nc) Requests are submitted by 4 April with full supporting data.\n\nApproval process: Finance review within five business days of submission. Final decision by CFO.\n\nNext review: 14 April. All departments to submit updated forecasts by 10 April.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured, quantified, and comprehensive. Every department knows its position, every action has an owner and date, and the funding criteria are unambiguous. Fiona would send this without editing.",
          observation:
            "The funding criteria are particularly well-defined. By stating three clear conditions, you remove any ambiguity about what constitutes a valid request. That is analytical communication at its best.",
          coachingTip:
            "When writing for an analytical audience, define criteria explicitly. 'At least 70% attributable to uncontrollable factors' is far more useful than 'primarily due to external conditions'.",
          styleContext:
            "Analytical communicators design follow-up emails as reference documents. Every stakeholder should be able to open this email in three months and know exactly what was agreed and what the rules are.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but your email may be missing the controllable/uncontrollable split, the specific funding criteria, or owner and date details for the agreed actions.",
          observation:
            "If your email lists actions without owners and dates, or defines funding criteria vaguely, it is not precise enough for Fiona's standards.",
          coachingTip:
            "Add specifics: percentage splits, named owners, exact dates, and numbered criteria. Analytical communicators need precision to trust that the follow-up will actually be followed.",
          styleContext:
            "Analytical communicators see vague follow-up emails as a guarantee of future disagreements. Precision now prevents conflict later.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too brief, lacks the data detail, or fails to set out clear criteria for funding requests. Fiona specifically said she wants no one to be able to say they did not know the rules.",
          observation:
            "If your email summarises the meeting in a few sentences without the variance positions and criteria, it is a meeting note, not a decision document.",
          coachingTip:
            "Think of the email as a contract. Every department should know exactly what is expected of them, by when, and under what conditions they can request more money.",
          styleContext:
            "Analytical communicators use follow-up emails to create accountability. If the email does not contain enough detail to hold people to their commitments, it has failed its purpose.",
        },
      },
    },
  },
];
