import { Scenario } from "@/types";

export const SCENARIOS_PART32: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (373-375) - team
  // ============================================

  // Scenario 373 - Jordan Cole, team, foundation
  {
    id: "scenario-373",
    title: "The Sprint Retrospective Overhaul",
    context:
      "Your development team's sprint retrospectives have become repetitive and unproductive. Jordan has been asked to take over facilitation and redesign the format to produce actionable outcomes.",
    chooseContext:
      "Jordan has scrapped the old format and introduced a new rule: every issue raised must come with a proposed solution. The team is adjusting to the change.",
    rewriteContext:
      "Jordan has asked you to write a brief set of ground rules for the new retrospective format that the team can reference before each session.",
    characterId: "jordan-cole",
    dialogue:
      "The old retro format is dead. We spent 90 minutes last sprint listing problems and left with zero actions. From now on, every issue you raise must include a fix. No problem without a proposal. We start in ten minutes.",
    chooseDialogue:
      "I am hearing complaints but no solutions. If the deployment pipeline is slow, tell me what you want changed and by when. I do not need a feelings circle - I need a fix.",
    rewriteDialogue:
      "Write the ground rules. Five bullets maximum. Each one should tell someone exactly what to do, not what to feel. Pin it to the team channel before the next retro.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has taken over sprint retrospectives by scrapping the old format, imposing a new rule requiring solutions with every problem, and setting a tight timeline. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan immediately dismantles the old process, imposes a new rule, and moves to action within minutes. This is textbook direct communication - decisive, outcome-focused, and impatient with anything that does not produce results.",
          observation:
            "Notice how Jordan frames the problem in terms of wasted time and zero actions. Direct communicators measure meetings by outputs, not by how people felt during them.",
          coachingTip:
            "When someone kills an existing process and replaces it with a results-oriented rule, they are signalling a direct style. Respond with solutions, not feelings.",
          styleContext:
            "Direct communicators see unproductive meetings as one of the worst sins in a workplace. They will intervene aggressively to fix them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Jordan is structured, which can look analytical. But notice the emphasis is on speed and action, not thorough analysis. There is no request for data or evidence - just a demand for solutions.",
          observation:
            "An analytical communicator would ask the team to review metrics on past retrospective outcomes before proposing changes. Jordan simply declares a new approach.",
          coachingTip:
            "If the person imposes a new process to drive faster results, that is direct. If they analyse why the old process failed before proposing a replacement, that is analytical.",
          styleContext:
            "Direct communicators trust their instincts about what is broken and act immediately. They do not need a root cause analysis to make a change.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not checked in with the team about how they feel, invited open discussion about preferred formats, or tried to build consensus around the change.",
          observation:
            "There is no mention of team comfort, personal preferences, or gradual transition. Jordan has simply declared a new reality and expects everyone to adapt.",
          coachingTip:
            "Ask yourself: is this person prioritising team feelings or team results? Jordan is entirely focused on producing actionable outcomes from each session.",
          styleContext:
            "Direct communicators believe retrospectives should produce changes, not catharsis. If a meeting does not end with clear actions, it was a waste of time.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has told the team that every issue must come with a proposed fix. A colleague raises a concern about team morale without offering a solution. How do you respond?",
      options: [
        {
          id: "s373-opt-a",
          text: "Morale is worth addressing. Here is a specific proposal: pair people on tasks they have been avoiding solo. It builds support and clears the backlog. Can we trial it this sprint?",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the concern but immediately converted it into a concrete, time-bound action. This matches Jordan's demand for problems paired with solutions.",
        },
        {
          id: "s373-opt-b",
          text: "I think morale is important too. Maybe we should have a separate session to talk about how everyone is feeling and what support they need.",
          score: 5,
          result: "partial",
          explanation:
            "This shows empathy but proposes another meeting rather than an immediate action. Jordan will see this as kicking the problem down the road.",
        },
        {
          id: "s373-opt-c",
          text: "We should not dismiss morale concerns just because they do not come with a neat fix. Sometimes people need to be heard before solutions emerge.",
          score: 0,
          result: "weak",
          explanation:
            "This directly challenges Jordan's new ground rule and offers no path forward. A direct communicator will see this as resistance without contribution.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write five ground rules for the new retrospective format. Write them in a direct style - each rule should tell someone exactly what to do.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Sprint Retrospective Ground Rules\n\n1. Every issue you raise must include a proposed fix and a named owner.\n2. Time-box each discussion point to three minutes. If it needs longer, it becomes a ticket.\n3. Leave with no more than three actions. Each one has a deadline and a single person responsible.\n4. No repeating issues from previous retros unless the fix was tried and failed.\n5. The retro ends when the actions are agreed, not when the hour is up.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your ground rules are specific, actionable, and leave no room for ambiguity. Jordan would approve these without edits.",
          observation:
            "You focused on observable behaviours and measurable outcomes rather than aspirational statements about collaboration or respect.",
          coachingTip:
            "When writing rules for direct communicators, make every sentence testable. Could someone point to the rule and say 'this was followed' or 'this was broken'? That is the standard.",
          styleContext:
            "Direct communicators want rules that create accountability, not guidelines that suggest good intentions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether each rule is truly actionable. Phrases like 'be prepared' or 'come ready to contribute' are too vague for this format.",
          observation:
            "If your rules include words like 'try to', 'aim to', or 'where possible', they are leaving too much room for interpretation.",
          coachingTip:
            "Replace every conditional phrase with an absolute one. 'Try to bring solutions' becomes 'Every issue must include a solution'. No wiggle room.",
          styleContext:
            "Direct communicators distrust rules that can be interpreted loosely. They want bright lines, not grey areas.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your ground rules are either too vague, too many, or read more like values statements than operational rules.",
          observation:
            "If your rules include phrases like 'respect each other's contributions' or 'create a safe space for sharing', they have missed Jordan's brief entirely.",
          coachingTip:
            "Delete any rule that could apply to any meeting in any company. What remains should be specific to how this retrospective will run differently.",
          styleContext:
            "Direct communicators do not write rules about how to feel. They write rules about what to do and what happens when you do not do it.",
        },
      },
    },
  },

  // Scenario 374 - Sam Hartley, team, intermediate
  {
    id: "scenario-374",
    title: "The Cross-Functional Accountability Gap",
    context:
      "Two teams - product and engineering - are blaming each other for missed delivery dates. Sam has been asked to chair a joint session to establish clear ownership boundaries.",
    chooseContext:
      "Sam has laid out a RACI chart on the whiteboard and is pushing both sides to commit to specific responsibilities. Neither team wants to own the grey areas.",
    rewriteContext:
      "Sam has asked you to draft a follow-up email summarising the agreed ownership split and the consequences for missed handoffs.",
    characterId: "sam-hartley",
    dialogue:
      "We are not leaving this room until every task on this board has one owner. Not a team, not a committee - one person. If something falls between the cracks again, I want to know exactly whose name is next to it.",
    chooseDialogue:
      "Stop telling me it is a shared responsibility. That means nobody owns it. Product, who signs off requirements? Engineering, who confirms they are buildable? I need names, not departments.",
    rewriteDialogue:
      "Send the email today. List every task, the single owner, and the deadline. Add one line at the bottom: if a handoff is late, the owner escalates to me within 24 hours. No exceptions.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam is chairing a cross-functional meeting by demanding single owners for every task and refusing to accept shared responsibility. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam demands individual accountability, refuses ambiguity, and pushes for named owners rather than team-level responsibility. This is direct communication focused on eliminating excuses.",
          observation:
            "Notice how Sam rejects 'shared responsibility' as meaningless. Direct communicators believe accountability must be personal to be real.",
          coachingTip:
            "When someone refuses vague ownership and demands specific names against specific tasks, they are using a direct style. Respond with clarity, not caveats.",
          styleContext:
            "Direct communicators see shared ownership as a way to avoid individual accountability. They force specificity to prevent future blame-shifting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam is using a RACI chart, which is an analytical tool. But notice that Sam is using it to force decisions, not to analyse the situation. The tool serves the directness.",
          observation:
            "An analytical communicator would spend time defining the criteria for each RACI category. Sam is simply using it as a forcing function for commitment.",
          coachingTip:
            "The tool someone uses does not define their style. How they use it does. Sam uses the RACI chart as a hammer, not a microscope.",
          styleContext:
            "Direct communicators will borrow analytical tools when they help drive faster decisions. The tool is in service of action, not understanding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not explored how the teams feel about the blame dynamic, tried to understand the interpersonal tensions, or sought to build bridges between the groups.",
          observation:
            "There is no attempt to validate frustrations or create a safe space for honest conversation. Sam is solving a structural problem, not a relationship one.",
          coachingTip:
            "Is this person trying to fix feelings or fix a process? Sam is entirely focused on eliminating ambiguity in task ownership.",
          styleContext:
            "Direct communicators address conflict by clarifying roles and responsibilities, not by exploring emotions or building trust.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has demanded that every task has a single named owner. The product lead says requirements sign-off should be shared between product and design. How do you respond?",
      options: [
        {
          id: "s374-opt-a",
          text: "Split it cleanly. Product owns the business requirements and signs off by Wednesday. Design owns the UX spec and signs off by Friday. Two tasks, two owners, two deadlines.",
          score: 10,
          result: "strong",
          explanation:
            "You converted a shared responsibility into two distinct tasks with clear owners and deadlines. This matches Sam's demand for unambiguous accountability.",
        },
        {
          id: "s374-opt-b",
          text: "What if we keep it shared but add a review checkpoint where both parties confirm sign-off together? That way neither side feels left out.",
          score: 5,
          result: "partial",
          explanation:
            "The checkpoint idea adds structure, but Sam has explicitly rejected shared ownership. This still leaves ambiguity about who is accountable if sign-off is late.",
        },
        {
          id: "s374-opt-c",
          text: "I think forcing single ownership on collaborative tasks might damage the relationship between the teams. We should focus on improving communication instead.",
          score: 0,
          result: "weak",
          explanation:
            "This challenges Sam's entire approach without offering a workable alternative. A direct communicator will hear this as avoidance of accountability.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to draft a follow-up email listing every task, its single owner, its deadline, and the escalation rule. Write it in a direct style - clear, short, and unambiguous.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Task Ownership - Product/Engineering Handoffs\n\nTeam,\n\nBelow is the agreed ownership split from today's session. Every task has one owner and one deadline.\n\n- Business requirements sign-off: Jamie (Product) - every Wednesday by 5pm\n- UX spec sign-off: Dana (Design) - every Friday by 12pm\n- Technical feasibility review: Ravi (Engineering) - within 48 hours of spec sign-off\n- Sprint commitment confirmation: Ravi (Engineering) - Monday 10am\n\nEscalation rule: if a handoff is late, the task owner emails me within 24 hours with the reason and revised date. No exceptions.\n\nQuestions - reply to this email today.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is tight, names are attached to tasks, deadlines are specific, and the escalation rule is clear. Sam would forward this without changes.",
          observation:
            "You avoided softening language and went straight to the information people need to act on. No preamble, no thanks, no filler.",
          coachingTip:
            "When writing follow-up emails for direct communicators, lead with the actions and close with the consequences. Everything else is noise.",
          styleContext:
            "Direct communicators judge follow-up emails by whether they could hold someone accountable using only the email as evidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every task has a specific person (not a team) and a specific deadline (not 'as soon as possible'). Sam wants precision.",
          observation:
            "If your email includes phrases like 'the team will ensure' or 'by end of week', it still leaves room for ambiguity.",
          coachingTip:
            "Replace every team reference with a person's name and every vague deadline with a day and time. That is the level of specificity Sam expects.",
          styleContext:
            "Direct communicators do not send emails that require interpretation. If someone has to ask 'does this mean me?' - the email has failed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too soft, or does not include the specific task-owner-deadline format Sam requested.",
          observation:
            "If your email opens with a thank you for attending or includes a paragraph about the importance of collaboration, it has missed the brief.",
          coachingTip:
            "Strip out every sentence that is not a task, a name, a deadline, or a consequence. What remains is what Sam wants.",
          styleContext:
            "Direct communicators want follow-up emails that function as contracts, not as summaries of a pleasant conversation.",
        },
      },
    },
  },

  // Scenario 375 - Alex Tran, team, advanced
  {
    id: "scenario-375",
    title: "The Underperforming Squad",
    context:
      "Alex leads a squad that has missed three consecutive sprint goals. Senior leadership has raised concerns. Alex has called a team meeting to address the pattern head-on before it escalates further.",
    chooseContext:
      "Alex has shared the data - three missed sprints, declining velocity, and two client complaints. The team is quiet. Alex is pushing for commitments, not explanations.",
    rewriteContext:
      "Alex has asked you to draft a recovery plan that the squad can present to senior leadership, showing exactly how they will hit the next two sprint goals.",
    characterId: "alex-tran",
    dialogue:
      "Three sprints in a row. That is not bad luck, that is a pattern. I am not interested in why right now - I am interested in what changes this week. Leadership is watching. We either fix this ourselves or someone else will fix it for us.",
    chooseDialogue:
      "I can see the discomfort, but I am not going to pretend this is fine. We over-committed, under-delivered, and two clients noticed. I need each of you to tell me right now what you will personally do differently in the next sprint.",
    rewriteDialogue:
      "Write the recovery plan. Two pages maximum. Sprint goals for the next two sprints, who owns what, and the three specific changes we are making. Leadership does not want a story - they want evidence we have a grip on this.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "team",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has confronted the team about three missed sprint goals, dismissed explanations, and demanded individual commitments for immediate change while referencing leadership scrutiny. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex names the problem bluntly, refuses to dwell on reasons, demands personal commitments, and uses the threat of external intervention as a motivator. This is direct communication under pressure.",
          observation:
            "Notice how Alex distinguishes between understanding the problem and fixing it. The focus is entirely on future action, not past analysis.",
          coachingTip:
            "When a leader confronts poor performance by demanding individual commitments and referencing consequences, they are operating in a strongly direct mode. Match their urgency with specific plans.",
          styleContext:
            "Direct communicators escalate their directness when stakes are high. The more pressure they feel, the more they focus on action and accountability.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does reference data - three sprints, declining velocity, two complaints. But the data serves as a verdict, not an investigation. Alex has already concluded what is wrong and wants action.",
          observation:
            "An analytical leader would walk through the data methodically, identify root causes, and propose evidence-based changes. Alex skips analysis and goes straight to demands.",
          coachingTip:
            "If data is presented to justify a decision already made, that is direct. If data is presented to inform a decision yet to be made, that is analytical.",
          styleContext:
            "Direct communicators use metrics to create urgency, not understanding. The numbers are there to make the case for immediate change.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not checked on team wellbeing, explored whether people are struggling, or offered support before demanding change. The approach is confrontational and results-focused.",
          observation:
            "There is no attempt to create psychological safety or acknowledge that the team might be feeling demoralised. Alex treats this as a performance problem, not a people problem.",
          coachingTip:
            "Is this person leading with empathy or accountability? Alex is firmly in the accountability camp, using external pressure as a catalyst for change.",
          styleContext:
            "Direct communicators believe that in a crisis, comfort is less important than clarity. They would rather be honest about the stakes than protect feelings.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has asked each team member to state what they will personally do differently. A senior developer says they need more time to think about it and will send suggestions by email later. How do you respond?",
      options: [
        {
          id: "s375-opt-a",
          text: "I will commit now. I will reduce my work in progress to two items maximum and flag blockers in standup instead of waiting for them to clear. That starts tomorrow.",
          score: 10,
          result: "strong",
          explanation:
            "You made an immediate, specific, personal commitment with a clear start date. This is exactly what Alex asked for and demonstrates that you take the situation seriously.",
        },
        {
          id: "s375-opt-b",
          text: "I have a few ideas but want to check the sprint data first to make sure I am targeting the right areas. Can I confirm my commitments by end of day?",
          score: 5,
          result: "partial",
          explanation:
            "This shows diligence, but Alex explicitly asked for commitments in the room, not later. The delay, even by a few hours, will read as hesitation under this level of pressure.",
        },
        {
          id: "s375-opt-c",
          text: "I think before we make individual commitments, we should discuss whether the sprint goals were realistic in the first place. The problem might be planning, not execution.",
          score: 0,
          result: "weak",
          explanation:
            "This redirects the conversation to root causes when Alex has explicitly said they are not interested in why right now. It will be heard as deflection, not contribution.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a two-page recovery plan for senior leadership showing how the squad will hit the next two sprint goals. Write it in a direct style - specific commitments, named owners, measurable changes.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Squad Recovery Plan - Sprints 14 and 15\n\nProblem: Three consecutive missed sprint goals. Velocity down 30%. Two client complaints logged.\n\nRoot cause (one line): Over-commitment against capacity. No WIP limits. Blockers not escalated early enough.\n\nThree changes effective immediately:\n1. WIP limit of two items per developer. Enforced in daily standup. Owner: Alex.\n2. Blocker escalation within four hours, not end of day. Owner: Tech lead.\n3. Sprint commitment reduced by 20% until velocity stabilises. Owner: Product manager.\n\nSprint 14 goal: Deliver five of six committed stories. Zero client-facing defects.\nSprint 15 goal: Deliver six of six. Restore velocity to Sprint 10 baseline.\n\nReview point: End of Sprint 15. If both goals are met, return to normal operating rhythm.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your recovery plan is tight, specific, and gives leadership exactly what they need - the problem, the fix, and the timeline. Alex would present this with confidence.",
          observation:
            "You avoided lengthy explanations and focused on what is changing, who is responsible, and how success will be measured.",
          coachingTip:
            "When writing recovery plans for direct communicators, lead with the problem in one line, the fix in three bullets, and the success criteria. Everything else is padding.",
          styleContext:
            "Direct communicators want recovery plans that demonstrate grip, not understanding. Leadership wants to see control, not analysis.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your changes are truly specific and measurable. 'Improve communication' or 'be more disciplined' are too vague for a recovery plan.",
          observation:
            "If your plan includes phrases like 'we will aim to' or 'the team will try to', it sounds uncertain. Alex needs certainty.",
          coachingTip:
            "Replace every intention with a commitment. 'We aim to reduce defects' becomes 'Zero client-facing defects in Sprint 14'. Make it binary.",
          styleContext:
            "Direct communicators present recovery plans as commitments, not aspirations. The language should be 'we will', not 'we hope to'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan is either too long, too vague, or spends more time explaining the problem than solving it.",
          observation:
            "If your plan includes a detailed root cause analysis or a paragraph about team dynamics, it has missed what leadership is looking for.",
          coachingTip:
            "Leadership already knows there is a problem. They want to see three things: what is changing, who owns each change, and when they will see results.",
          styleContext:
            "Direct communicators see lengthy recovery plans as a sign that the team is still processing the problem rather than fixing it.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (376-378) - conflict
  // ============================================

  // Scenario 376 - Priya Sharma, conflict, foundation
  {
    id: "scenario-376",
    title: "The Creative Clash",
    context:
      "Two designers on Priya's team disagree about the direction for a client rebrand. The tension has started affecting the wider team's energy. Priya has stepped in to mediate.",
    chooseContext:
      "Priya has heard both sides and is now trying to reframe the disagreement as a creative opportunity rather than a personal conflict.",
    rewriteContext:
      "Priya has asked you to draft a message to the team acknowledging the tension and setting a positive tone for moving forward together.",
    characterId: "priya-sharma",
    dialogue:
      "I love that you both care this much about the work - that passion is exactly what makes this team brilliant. What I am hearing is two strong visions, not a fight. Let us find a way to channel both of those ideas into something even better.",
    chooseDialogue:
      "I know this has been frustrating for everyone, and I appreciate you being honest about it. Here is what I think - let us give both concepts a fair shot. A quick side-by-side review with the client will show us which direction resonates. Sound good?",
    rewriteDialogue:
      "Send a message to the team. Acknowledge the tension, celebrate the passion behind it, and let everyone know we have a plan to move forward that honours both perspectives. Keep it warm and genuine.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Priya has responded to a team conflict by reframing disagreement as creative passion, celebrating both perspectives, and proposing an inclusive path forward. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya reframes the conflict positively, celebrates passion, and uses enthusiastic, forward-looking language. This is expressive communication - turning tension into energy and keeping the team inspired.",
          observation:
            "Notice how Priya uses phrases like 'brilliant', 'even better', and 'I love that'. Expressive communicators bring warmth and optimism even to difficult conversations.",
          coachingTip:
            "When someone reframes conflict as creative energy and uses enthusiastic language, they are displaying an expressive style. Match their positivity with genuine engagement.",
          styleContext:
            "Expressive communicators believe conflict often means people care deeply. They channel that energy rather than suppressing it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is empathetic, which can look supportive. But notice the energy and enthusiasm - 'brilliant', 'even better'. A supportive communicator would focus more on making each person feel safe and heard, with less forward momentum.",
          observation:
            "A supportive communicator would say 'I understand this has been hard for both of you'. Priya says 'I love that you both care this much'. The tone is celebratory, not consoling.",
          coachingTip:
            "If someone acknowledges feelings and then energetically pushes toward an exciting outcome, that is expressive. If they linger on the feelings and reassure, that is supportive.",
          styleContext:
            "Expressive communicators validate feelings quickly and then redirect toward a vision. They do not dwell - they propel.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not analysed the merits of each design approach, asked for data on which direction is stronger, or imposed a decision based on objective criteria.",
          observation:
            "There is no reference to evidence, process, or structured evaluation. Priya is working with energy and relationships, not logic and data.",
          coachingTip:
            "Is this person solving the conflict through analysis or through enthusiasm? Priya is using warmth and reframing, not evidence and structure.",
          styleContext:
            "Expressive communicators resolve conflict by changing the emotional narrative, not by applying analytical rigour to the competing positions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has reframed the design disagreement as a creative opportunity and proposed showing both concepts to the client. One designer says they feel their work is being treated as a backup option. How do you respond?",
      options: [
        {
          id: "s376-opt-a",
          text: "Your work is not a backup - it is one of two strong contenders. That is a compliment to your talent, not a compromise. Let us both go in with confidence and see which direction the client connects with.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the designer's concern, reframed the situation positively, and used encouraging, forward-looking language. This matches Priya's expressive approach perfectly.",
        },
        {
          id: "s376-opt-b",
          text: "I understand how that could feel frustrating. Perhaps we should sit down privately and talk through your concerns before the client presentation.",
          score: 5,
          result: "partial",
          explanation:
            "This is empathetic but leans more supportive than expressive. Priya would want you to energise and reframe, not just console and defer.",
        },
        {
          id: "s376-opt-c",
          text: "Objectively, we should let the client data decide. Both concepts will be scored against the brief criteria, so the stronger one will win on merit.",
          score: 0,
          result: "weak",
          explanation:
            "This is analytical and dismisses the emotional dimension entirely. In a conflict mediated by an expressive leader, ignoring feelings will make things worse.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a message to the team acknowledging the recent tension, celebrating the passion behind it, and outlining a positive path forward. Write it in an expressive style - warm, genuine, and forward-looking.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi team,\n\nI wanted to take a moment to talk about the last couple of weeks. There has been real tension around the rebrand direction, and I know that has been tough. But here is what I also see - two people who care deeply about doing great work for our client. That kind of passion is rare, and it is one of the reasons this team produces exceptional results.\n\nWe have agreed to present both concepts to the client in a side-by-side review next Thursday. Both directions are strong, and I genuinely believe this process will sharpen our final output.\n\nLet us go into next week as a united team, backing each other and trusting the process. I am proud of what we are building here.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, genuine, and turns a difficult moment into a rallying point. Priya would send this without edits.",
          observation:
            "You acknowledged the tension honestly, reframed it as a sign of passion, and closed with an inclusive, forward-looking statement.",
          coachingTip:
            "When writing for expressive communicators, lead with genuine acknowledgement, reframe negatives as positives, and close with inspiration. The emotional arc matters.",
          styleContext:
            "Expressive communicators use team messages to shape culture and energy. A well-written message after conflict can actually strengthen the team.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but the warmth or forward momentum may be missing. Check whether your message feels genuinely encouraging or just professionally neutral.",
          observation:
            "If your message reads like a status update with a line about feelings added on, it needs more emotional authenticity.",
          coachingTip:
            "Expressive messages have an emotional arc - acknowledge, reframe, inspire. Make sure yours does not flatten out into a procedural update.",
          styleContext:
            "Expressive communicators want messages that people feel, not just read. The tone should leave the team feeling energised and united.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too clinical, too brief, or fails to address the emotional dimension of the situation.",
          observation:
            "If your message jumps straight to the plan without acknowledging how people have been feeling, it misses the point entirely.",
          coachingTip:
            "Start with empathy, move to reframing, and close with vision. If any of those three elements is missing, the message will fall flat with an expressive leader.",
          styleContext:
            "Expressive communicators see team communication as a leadership act. A post-conflict message that ignores feelings signals that leadership is not paying attention.",
        },
      },
    },
  },

  // Scenario 377 - Marcus Webb, conflict, intermediate
  {
    id: "scenario-377",
    title: "The Budget Battle",
    context:
      "Marketing and sales are at odds over who controls the events budget. Marcus has been pulled in because the disagreement has become personal, with both department heads refusing to attend the same meetings.",
    chooseContext:
      "Marcus has met with both leaders separately and is now bringing them together for the first time in two weeks. He wants to focus on shared goals, not past grievances.",
    rewriteContext:
      "Marcus has asked you to write a joint email from both department heads to their teams, signalling that the budget disagreement has been resolved and collaboration is back on track.",
    characterId: "marcus-webb",
    dialogue:
      "Look, I get it - you both feel strongly about this, and that is because you both care about the same thing: growing the business. The budget is a tool, not a trophy. Let us figure out how to use it in a way that makes both teams proud of what they deliver together.",
    chooseDialogue:
      "Before we talk numbers, I want to acknowledge something. This stopped being about budget weeks ago. It became personal, and that has hurt both teams. I think you both know that. So let us draw a line, agree on what we are building together, and then divide the money to match.",
    rewriteDialogue:
      "Write the joint email. It should feel collaborative, not like a ceasefire. Both names on it, a shared commitment to the events programme, and a line about what this partnership means for the teams. No blame, no history - just forward momentum.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has mediated a budget conflict by naming the personal dimension, reframing the budget as a shared tool, and urging both leaders to focus on what they are building together. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus names the emotional reality, reframes the conflict around shared purpose, and uses energetic, vision-oriented language. This is expressive conflict resolution - honest, warm, and forward-moving.",
          observation:
            "Notice how Marcus says 'both teams proud of what they deliver together'. Expressive communicators anchor resolution in a shared vision of success, not just a practical compromise.",
          coachingTip:
            "When a mediator names the personal dimension and then redirects toward a shared aspiration, they are using an expressive style. Engage with their vision.",
          styleContext:
            "Expressive communicators believe that most workplace conflicts have an emotional root. They address it openly before turning to the practical resolution.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is empathetic, which can seem supportive. But notice the energy and forward momentum. A supportive communicator would spend more time letting each person feel heard before proposing a way forward.",
          observation:
            "A supportive mediator would say 'take your time, I want to understand how you both feel about this'. Marcus says 'let us draw a line and agree on what we are building together'. The pace is expressive.",
          coachingTip:
            "If someone validates feelings and then quickly pivots to an inspiring shared goal, that is expressive. If they linger on validation and move slowly, that is supportive.",
          styleContext:
            "Expressive communicators use emotional honesty as a springboard, not a resting place. They acknowledge and then propel.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not proposed a data-driven budget split, set objective criteria for allocation, or asked for spending analysis. The approach is relational, not analytical.",
          observation:
            "There is no reference to ROI calculations, past event performance data, or objective allocation models. Marcus is working with people, not spreadsheets.",
          coachingTip:
            "Is this person solving the conflict through evidence or through relationship? Marcus is firmly in the relationship camp.",
          styleContext:
            "Expressive communicators resolve resource conflicts by rebuilding the relationship first. They believe the numbers will follow once the people are aligned.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has asked both leaders to focus on shared goals rather than past grievances. The sales director says they still feel marketing undermined them in front of a client. How do you respond?",
      options: [
        {
          id: "s377-opt-a",
          text: "That clearly stung, and I appreciate you saying it out loud. But imagine if the client saw both teams presenting together with a united message - that is the story we want to tell from here. Can we build toward that?",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the hurt, validated the honesty, and immediately redirected toward an inspiring future scenario. This matches Marcus's expressive mediation style perfectly.",
        },
        {
          id: "s377-opt-b",
          text: "I am sorry that happened. Would it help if we set up a private conversation between you and the marketing lead to work through that specific incident?",
          score: 5,
          result: "partial",
          explanation:
            "This is caring but delays resolution. Marcus has brought them together to move forward now, not to schedule more conversations about the past.",
        },
        {
          id: "s377-opt-c",
          text: "Can we look at the specific incident objectively? What exactly was said in front of the client, and was it factually inaccurate or just poorly timed?",
          score: 0,
          result: "weak",
          explanation:
            "This turns an emotional moment into a fact-finding exercise. Marcus has explicitly said this is no longer about the specifics - it is about rebuilding the relationship.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to draft a joint email from both department heads signalling that the budget disagreement is resolved and collaboration is restored. Write it in an expressive style - warm, collaborative, and forward-looking.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi everyone,\n\nWe wanted to reach out together because the last few weeks have been difficult for both our teams, and you deserve to hear directly from us.\n\nWe had a real disagreement about the events budget, and it affected how our teams worked together. That was not fair to any of you, and we own that. But here is the good news - we have had honest conversations, found common ground, and agreed on a plan that both teams can be proud of.\n\nFrom this point forward, our events programme is a joint effort. Shared planning, shared ownership, shared credit. We are excited about what we can achieve when marketing and sales are pulling in the same direction.\n\nThank you for your patience and professionalism through this. We are back on track, and we are better for it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm, honest about the difficulty, and closes with genuine enthusiasm for the partnership. Marcus would approve both leaders sending this.",
          observation:
            "You balanced accountability for the disruption with optimism about the future. That combination is exactly what expressive communicators aim for.",
          coachingTip:
            "When writing joint messages after a conflict, be honest about what went wrong, take shared ownership, and close with a compelling vision of what comes next.",
          styleContext:
            "Expressive communicators see post-conflict messaging as a chance to strengthen culture. The message should leave teams feeling proud, not relieved.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your message genuinely feels like two people who have resolved something, or just a procedural announcement that the fight is over.",
          observation:
            "If the email reads like a corporate statement rather than a personal communication from two leaders, it needs more warmth and authenticity.",
          coachingTip:
            "Add a sentence that shows genuine enthusiasm about working together. 'We are excited' or 'we are proud of' signals real resolution, not just a truce.",
          styleContext:
            "Expressive communicators want post-conflict messages to feel like a new beginning, not just the end of a problem.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too formal, or avoids the emotional dimension of the situation. It reads like a memo, not a message from two leaders who have reconnected.",
          observation:
            "If the email does not acknowledge any difficulty or simply announces new budget allocations, it misses the human story entirely.",
          coachingTip:
            "Start with honesty about what happened. Move to shared ownership. Close with excitement about the future. All three elements are essential.",
          styleContext:
            "Expressive communicators never pretend conflict did not happen. They name it, own it, and use it as fuel for a better story going forward.",
        },
      },
    },
  },

  // Scenario 378 - Nina Okafor, conflict, advanced
  {
    id: "scenario-378",
    title: "The Client Escalation",
    context:
      "A long-standing client has threatened to leave after a series of miscommunications between your account team and their procurement department. Nina has stepped in to save the relationship.",
    chooseContext:
      "Nina has arranged a face-to-face meeting with the client's senior stakeholder. She wants to lead with honesty, rebuild trust through personal connection, and co-create a solution rather than present one.",
    rewriteContext:
      "Nina has asked you to draft a follow-up letter to the client after the meeting, reinforcing the commitments made and the value of the ongoing partnership.",
    characterId: "nina-okafor",
    dialogue:
      "I am not going to pretend the last three months have been acceptable - they have not, and you deserve better from us. But I also know that what we have built over four years is worth fighting for. I am here because this relationship matters to me personally, and I want us to fix this together.",
    chooseDialogue:
      "Thank you for being so candid about what has gone wrong on our side. I have heard every point and I take them seriously. Here is what I would love to do - let us design the solution together, right now. You tell me what good looks like from your end, and I will tell you what we can commit to. No corporate promises, just real ones.",
    rewriteDialogue:
      "Write the follow-up letter. It should feel personal, not corporate. Acknowledge what went wrong, restate our commitments from the meeting, and close with something that shows we genuinely value this partnership. I want them to read it and feel that we meant every word.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina has approached a client escalation by leading with personal honesty, referencing the relationship's history, offering to co-create solutions, and distinguishing between corporate and real promises. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina leads with emotional honesty, invokes the personal significance of the relationship, and proposes co-creating a solution in the moment. This is expressive communication at its most powerful - authentic, relational, and action-oriented.",
          observation:
            "Notice how Nina says 'this relationship matters to me personally'. Expressive communicators make professional relationships personal, which builds trust through vulnerability.",
          coachingTip:
            "When someone saves a client relationship by leading with honesty and personal investment rather than formal apologies and service credits, they are using an expressive approach.",
          styleContext:
            "Expressive communicators believe that in a crisis, authenticity is more persuasive than process. Personal commitment beats corporate reassurance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Nina is empathetic and caring, which looks supportive. But notice the energy, the forward momentum, and the willingness to co-create in the moment. A supportive communicator would move more slowly and cautiously.",
          observation:
            "A supportive communicator would say 'I understand this has been difficult and I want you to know we are here for you'. Nina says 'let us design the solution together, right now'. The pace and initiative are expressive.",
          coachingTip:
            "If someone combines emotional honesty with energetic forward action, that is expressive. If they combine emotional honesty with patient reassurance, that is supportive.",
          styleContext:
            "Expressive communicators do not just validate - they activate. They use emotional connection as a launchpad for collaborative action.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a root cause analysis, proposed SLA improvements with metrics, or offered a structured remediation plan. Her approach is relational, not procedural.",
          observation:
            "There are no references to service level data, incident reports, or process improvements. Nina is rebuilding trust through personal connection, not operational rigour.",
          coachingTip:
            "Is this person saving the relationship through data and process, or through authenticity and personal commitment? Nina is firmly in the authenticity camp.",
          styleContext:
            "Expressive communicators believe clients stay for relationships, not for SLAs. In a crisis, they lead with the human connection.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has offered to co-create a solution with the client in real time. The client's stakeholder says they appreciate the honesty but wants to see a formal written proposal before committing. How do you respond?",
      options: [
        {
          id: "s378-opt-a",
          text: "Absolutely - and I want that proposal to reflect what we discussed today, not some generic recovery plan. Let us sketch the key points together now so the written version is genuinely ours, not just ours on paper.",
          score: 10,
          result: "strong",
          explanation:
            "You honoured the client's need for formality while keeping the collaborative, personal spirit of Nina's approach. The proposal becomes a shared document, not a corporate deliverable.",
        },
        {
          id: "s378-opt-b",
          text: "Of course. I will have our team put together a formal remediation plan with timelines and SLAs. You will have it by Friday.",
          score: 5,
          result: "partial",
          explanation:
            "This is professional but shifts from co-creation to unilateral delivery. Nina would want the proposal to feel collaborative, not handed down.",
        },
        {
          id: "s378-opt-c",
          text: "I understand. Before we draft anything, I would like to schedule a review of all incident reports from the last quarter so the proposal is grounded in the full picture.",
          score: 0,
          result: "weak",
          explanation:
            "This delays action and shifts to an analytical mode. The client has asked for a proposal, not an investigation. Nina would see this as losing the momentum of a breakthrough meeting.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a follow-up letter to the client that feels personal, acknowledges what went wrong, restates commitments, and closes with genuine appreciation for the partnership. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Dear Sarah,\n\nThank you for meeting with us yesterday. Your honesty meant a great deal, and I want you to know that every word landed.\n\nWe fell short over the last three months, and there is no way to dress that up. Missed handoffs, slow responses, and a lack of proactive communication - none of that reflects the standard we hold ourselves to, or the standard you deserve.\n\nHere is what we committed to in our meeting, and what I am personally standing behind:\n- A dedicated account lead (James) as your single point of contact, effective Monday\n- Weekly status calls for the first 90 days, moving to fortnightly once we have rebuilt rhythm\n- A 24-hour response guarantee on all procurement queries\n\nThis partnership has meant a great deal to our team over four years, and I am determined that the next four will be even stronger. You took a chance on us when we were a much smaller company, and that loyalty is something I will never take for granted.\n\nWith real appreciation,\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your letter is personal, honest, and closes with genuine warmth. It reads like it came from a human being, not a complaints department. Nina would send this with confidence.",
          observation:
            "You balanced accountability with appreciation, and your commitments are specific without feeling transactional. That is the expressive sweet spot.",
          coachingTip:
            "When writing post-crisis letters for expressive communicators, let the personality show. First person, personal references, and genuine emotion make the difference.",
          styleContext:
            "Expressive communicators see follow-up letters as an extension of the relationship, not a contractual obligation. The tone should match the warmth of the meeting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether it feels genuinely personal or just professionally competent. Nina wants the client to feel that this letter came from a real person, not a template.",
          observation:
            "If your letter could be sent by any account manager to any client with minor edits, it needs more personal touches.",
          coachingTip:
            "Add a reference to something specific from the meeting, a personal commitment, or a genuine expression of what the relationship means. Make it unmistakably human.",
          styleContext:
            "Expressive communicators measure follow-up letters by whether they deepen the relationship. A letter that just restates commitments is only half the job.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your letter is either too formal, too brief, or reads like a service recovery template. Nina wanted personal and genuine, not corporate and safe.",
          observation:
            "If your letter opens with 'further to our meeting' or closes with 'please do not hesitate to contact us', it has missed the tone entirely.",
          coachingTip:
            "Rewrite as if you were writing to someone you genuinely care about. Use first person, reference specific moments, and close with heartfelt appreciation.",
          styleContext:
            "Expressive communicators cringe at corporate language in moments that call for human connection. Authenticity is non-negotiable.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (379-381) - email
  // ============================================

  // Scenario 379 - Tom Brennan, email, foundation
  {
    id: "scenario-379",
    title: "The Policy Change Notification",
    context:
      "The company has updated its flexible working policy, reducing the number of remote days from three to two per week. Tom has been asked to draft the email to his team announcing the change.",
    chooseContext:
      "Tom is reviewing his draft and wants to make sure the email acknowledges people's feelings about the change, explains the reasoning gently, and reassures the team that their wellbeing still matters.",
    rewriteContext:
      "Tom has asked you to write the email to the team about the policy change. He wants it to feel considerate and reassuring, not like a corporate mandate.",
    characterId: "tom-brennan",
    dialogue:
      "I know this is not what anyone wanted to hear, and I want to be upfront about that. The flexible working policy is changing, and I understand that affects people's routines and family arrangements. I wanted to tell you myself rather than have it come through a company-wide announcement.",
    chooseDialogue:
      "I have had a few people ask me privately whether this is the start of a full return to office. I want to reassure you - it is not. Two days remote is still a significant part of our week, and I will keep advocating for the flexibility that works for this team.",
    rewriteDialogue:
      "Write the email for me. Start by acknowledging that this is a difficult change. Explain the reasoning without making it sound like a done deal that nobody cares about. Close by letting people know my door is open if they need to talk it through.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom is announcing an unpopular policy change by leading with acknowledgement of how people feel, delivering the news personally rather than via corporate channels, and offering reassurance about the future. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with empathy, chooses personal delivery over corporate messaging, and focuses on reassuring the team. This is supportive communication - prioritising people's feelings during a difficult change.",
          observation:
            "Notice how Tom says 'I wanted to tell you myself'. Supportive communicators take ownership of delivering difficult news because they want the team to feel cared for, not managed.",
          coachingTip:
            "When someone delivers bad news by leading with empathy, choosing personal contact, and offering reassurance, they are using a supportive style.",
          styleContext:
            "Supportive communicators see policy changes as moments that can either strengthen or damage trust. They invest heavily in the delivery to protect the relationship.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm, which can look expressive. But notice the measured pace and focus on reassurance rather than enthusiasm. An expressive communicator would reframe the change more positively and energetically.",
          observation:
            "An expressive communicator might say 'I know this feels tough, but I am excited about what we can do with two strong office days'. Tom stays with the acknowledgement longer and does not rush to a positive spin.",
          coachingTip:
            "If someone lingers on validation and offers steady reassurance, that is supportive. If they validate quickly and pivot to an exciting reframe, that is expressive.",
          styleContext:
            "Supportive communicators do not rush past difficult feelings. They sit with the discomfort and make sure people feel heard before moving on.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented the business case for the change, shared data on office utilisation, or framed the policy in terms of productivity outcomes.",
          observation:
            "There is no attempt to justify the change analytically. Tom is managing the human impact, not explaining the strategic logic.",
          coachingTip:
            "Is this person focused on why the change makes sense or on how the change makes people feel? Tom is firmly in the feelings camp.",
          styleContext:
            "Supportive communicators believe that how you deliver news matters as much as the news itself. They invest in the delivery, not the justification.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has reassured the team that the remote day reduction is not the start of a full return to office. A team member says they feel like leadership does not trust people to work from home. How do you respond?",
      options: [
        {
          id: "s379-opt-a",
          text: "I can understand why it might feel that way, and that is a valid concern. I want you to know that I trust this team completely. If you want to talk through how we can make the new arrangement work for you specifically, I am here for that conversation.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the feeling, offered personal reassurance, and opened the door for an individual conversation. This matches Tom's supportive approach perfectly.",
        },
        {
          id: "s379-opt-b",
          text: "I hear you. Let us use this as motivation - if we show strong results with the new arrangement, we will have a stronger case for more flexibility in the future.",
          score: 5,
          result: "partial",
          explanation:
            "This is forward-looking but skips the validation step. Tom would want you to sit with the feeling before redirecting to solutions.",
        },
        {
          id: "s379-opt-c",
          text: "The decision was based on collaboration metrics, not trust. The data showed that teams with more office days had better cross-functional output.",
          score: 0,
          result: "weak",
          explanation:
            "This is factual but emotionally tone-deaf. The team member expressed a feeling, not a request for data. Tom would see this response as dismissive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write an email to the team announcing the flexible working policy change. He wants it to feel considerate and reassuring. Write it in a supportive style - acknowledge feelings, explain gently, and offer support.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nI wanted to share some news with you directly rather than have it arrive via a company-wide email.\n\nFrom next month, our flexible working policy is changing from three remote days to two. I know this will affect routines, childcare arrangements, and the balance many of you have built around the current setup, and I do not take that lightly.\n\nThe reasoning behind the change is about increasing the time we have together for collaboration and mentoring, particularly for newer team members. I understand that does not make the adjustment any easier, and I respect that.\n\nWhat I want you to know is that I am committed to making this work in a way that still supports your wellbeing. If the change creates a specific challenge for you, please come and talk to me. I would rather have an honest conversation now than have anyone struggling quietly.\n\nYou are a brilliant team, and that has nothing to do with where you sit. That will not change.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with empathy, explains gently without being defensive, and closes with genuine reassurance and an open door. Tom would send this feeling confident his team is cared for.",
          observation:
            "You acknowledged specific impacts - routines, childcare, personal balance - rather than offering generic sympathy. That specificity makes the empathy feel real.",
          coachingTip:
            "When writing supportive emails about change, name the specific things people might be affected by. It shows you have actually thought about their lives, not just the policy.",
          styleContext:
            "Supportive communicators believe change management is mostly about trust. An email that makes people feel seen is worth more than one that makes the business case.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your email truly sits with the difficulty or rushes to explain the reasoning. Supportive emails need space for feelings before they move to justification.",
          observation:
            "If your explanation of the reasoning takes up more space than your acknowledgement of the impact, the balance is off.",
          coachingTip:
            "Give the emotional acknowledgement at least as much space as the business reasoning. Supportive communicators lead with people, not policy.",
          styleContext:
            "Supportive communicators would rather over-acknowledge than under-acknowledge. When in doubt, add more empathy, not more explanation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too brief, too corporate, or leads with the business rationale rather than the human impact.",
          observation:
            "If your email opens with 'I am writing to inform you of a change to our flexible working policy', it has missed Tom's brief entirely.",
          coachingTip:
            "Start with 'I know this is not easy' or 'I wanted to tell you this personally'. The opening line sets the tone for everything that follows.",
          styleContext:
            "Supportive communicators see the opening of a difficult email as the most important sentence. It signals whether the reader is about to be managed or cared for.",
        },
      },
    },
  },

  // Scenario 380 - Leah Morgan, email, intermediate
  {
    id: "scenario-380",
    title: "The Restructure Announcement",
    context:
      "The department is being restructured, and some roles are changing significantly. Leah needs to email the team before the all-hands meeting so people are not blindsided by the news.",
    chooseContext:
      "Leah is concerned that the email might cause anxiety and wants to strike the right balance between honesty and reassurance. She wants people to feel informed, not panicked.",
    rewriteContext:
      "Leah has asked you to write a pre-announcement email that prepares the team for the restructure discussion without causing unnecessary worry.",
    characterId: "leah-morgan",
    dialogue:
      "I need to email the team before the all-hands. I do not want anyone hearing about their role changing for the first time in a room full of people. That is not how we do things here. People deserve the chance to process this privately first.",
    chooseDialogue:
      "I know some people are going to be worried, and I do not blame them. I want the email to be honest about what is happening but also make it clear that I will be there to talk everyone through what it means for them individually. Nobody should feel like they are facing this alone.",
    rewriteDialogue:
      "Write the email. Be honest about the restructure, but be careful with the tone. Do not downplay it, but do not dramatise it either. Make sure people know that individual conversations will follow and that I care about how this lands for each person.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Leah has chosen to email the team privately before a public restructure announcement, prioritising individual dignity and offering personal follow-up conversations. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah prioritises emotional safety, chooses private communication before public, and commits to individual conversations. This is supportive leadership - protecting people through a difficult transition.",
          observation:
            "Notice how Leah says 'nobody should feel like they are facing this alone'. Supportive communicators take personal responsibility for the emotional experience of their team.",
          coachingTip:
            "When a leader goes out of their way to protect people from being blindsided and offers individual support, they are operating in a strongly supportive style.",
          styleContext:
            "Supportive communicators see restructures as fundamentally personal events, not organisational ones. They manage the human dimension before the operational one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and personal, which can seem expressive. But notice the focus is on protection and reassurance, not on reframing the change as an exciting opportunity.",
          observation:
            "An expressive leader would say 'this restructure is a chance to build something amazing together'. Leah is focused on making sure nobody feels abandoned.",
          coachingTip:
            "If the priority is protecting feelings, that is supportive. If the priority is energising people about the future, that is expressive. Leah is clearly protecting.",
          styleContext:
            "Supportive communicators in a restructure focus on stability and individual care. Expressive communicators focus on vision and collective excitement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not discussed the strategic rationale for the restructure, presented org chart changes, or explained the efficiency gains expected from the new structure.",
          observation:
            "There is no reference to business objectives, structural logic, or operational metrics. Leah is entirely focused on the human experience of the change.",
          coachingTip:
            "Is this person managing a structural change or managing the people going through it? Leah is doing the latter.",
          styleContext:
            "Supportive communicators believe that if you get the people dimension right, the structural changes will land more smoothly.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has sent the pre-announcement email. A team member replies saying they are worried about being made redundant. How do you respond?",
      options: [
        {
          id: "s380-opt-a",
          text: "Thank you for being honest with me about how you are feeling. I completely understand the worry. I cannot share all the details by email, but I want to meet with you tomorrow morning so we can talk through what this means for you specifically. You are not facing this alone.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the fear, committed to a personal conversation, and offered reassurance without making promises you cannot keep. This is exactly how Leah would want you to respond.",
        },
        {
          id: "s380-opt-b",
          text: "I understand the concern. Let us wait until the all-hands meeting where the full details will be shared, and then we can discuss your specific situation afterwards.",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but asks a worried person to wait in uncertainty. Leah sent the pre-announcement specifically to avoid that experience.",
        },
        {
          id: "s380-opt-c",
          text: "The restructure is focused on improving efficiency, not reducing headcount. I would encourage you to look at the bigger picture rather than jumping to conclusions.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses a legitimate fear and tells someone how they should think. Leah would see this as exactly the kind of response she was trying to prevent.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a pre-announcement email about the department restructure. Be honest but careful with the tone. Acknowledge that change is unsettling and promise individual conversations. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nI wanted to reach out before the all-hands meeting on Thursday because I believe you deserve to hear this from me first.\n\nThe department is going through a restructure, and some roles will be changing. I know that word alone can be unsettling, and I want you to know that I understand that. Change is difficult, especially when it affects your day-to-day work and the routines you have built.\n\nI do not have all the details to share yet, but here is what I can tell you: no decisions have been made about individuals without careful thought, and every person on this team matters to me.\n\nAfter the all-hands, I will be scheduling one-to-one conversations with each of you to talk through what the changes mean for your role specifically. I want you to have the space to ask questions, raise concerns, and hear from me directly.\n\nIn the meantime, if you are feeling worried or just want to talk, please reach out. My door is always open, and I mean that.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email balances honesty with reassurance and makes every reader feel individually valued. Leah would send this knowing her team feels cared for.",
          observation:
            "You did not promise everything will be fine, which would feel dishonest. Instead, you promised presence, support, and individual attention. That is more meaningful.",
          coachingTip:
            "Supportive emails about change should never over-promise outcomes. Instead, promise process - individual conversations, open doors, genuine care.",
          styleContext:
            "Supportive communicators know the difference between false reassurance and genuine support. They promise to be there, not that everything will be perfect.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether you have given enough space to the emotional dimension. If the email moves quickly from 'there is a restructure' to 'here is the timeline', it feels procedural rather than caring.",
          observation:
            "If your email does not explicitly say something like 'I understand this is unsettling' or 'your feelings about this are valid', the emotional validation is missing.",
          coachingTip:
            "Add a sentence that names the likely emotional response. 'I know change can be worrying' or 'I understand this might feel uncertain'. Name it to normalise it.",
          styleContext:
            "Supportive communicators believe that naming an emotion reduces its power. When you say 'I know this might be worrying', you give people permission to feel what they are already feeling.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too corporate, too brief, or fails to acknowledge the emotional weight of a restructure announcement.",
          observation:
            "If your email reads like an HR template or leads with the business rationale for the restructure, it has missed Leah's brief.",
          coachingTip:
            "Imagine receiving this email when your job might be changing. Would you feel cared for or processed? Rewrite until the answer is cared for.",
          styleContext:
            "Supportive communicators test every piece of change communication against one question: will this make people feel safe enough to keep performing while the uncertainty plays out?",
        },
      },
    },
  },

  // Scenario 381 - David Chen, email, advanced
  {
    id: "scenario-381",
    title: "The Redundancy Follow-Up",
    context:
      "Following a round of redundancies, the remaining team is shaken. David needs to send an email that acknowledges the loss, thanks those who are staying, and sets a compassionate tone for moving forward.",
    chooseContext:
      "David has drafted his email but is worried it might come across as either dismissive of those who left or insensitive to those who remain. He wants to honour both groups.",
    rewriteContext:
      "David has asked you to write the email. He wants it to acknowledge the colleagues who have left with genuine respect, thank the remaining team sincerely, and set a tone of care and stability going forward.",
    characterId: "david-chen",
    dialogue:
      "This is the hardest email I have ever had to write. We lost good people this week - people who contributed enormously to this team. And I know that those of you who are still here might be feeling a mix of relief, guilt, and uncertainty. All of those feelings are valid, and I want you to know I see them.",
    chooseDialogue:
      "I am not going to pretend we can just move on and get back to normal. Normal has changed. What I can promise is that I will be honest with you about where we are, I will check in with each of you individually, and I will make sure nobody has to carry this quietly.",
    rewriteDialogue:
      "Write the email. It needs to honour the people who left - do not reduce them to a line about 'organisational changes'. Thank the people who are staying without making it sound transactional. And close with something that feels steady and human, not motivational.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David is approaching a post-redundancy email by naming the emotional complexity, validating mixed feelings, and promising individual check-ins rather than a quick return to business as usual. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David names the emotional reality - relief, guilt, uncertainty - validates all of it, and promises personal support. This is supportive communication at its most needed - holding space for grief while providing stability.",
          observation:
            "Notice how David says 'all of those feelings are valid'. Supportive communicators normalise the full range of emotional responses, not just the comfortable ones.",
          coachingTip:
            "When a leader names specific emotions their team might be experiencing and validates each one, they are operating in a deeply supportive mode.",
          styleContext:
            "Supportive communicators know that after redundancies, the remaining team needs permission to feel. Without that permission, performance suffers silently.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is heartfelt, which can seem expressive. But notice the measured pace and focus on stability rather than inspiration. An expressive leader would pivot more quickly to an energising vision of what comes next.",
          observation:
            "An expressive leader might say 'we will honour their legacy by building something amazing'. David says 'I will check in with each of you individually'. The approach is personal and steady, not visionary.",
          coachingTip:
            "If someone sits with the difficulty and promises steady, individual support, that is supportive. If they acknowledge the difficulty and then rally the team around a new vision, that is expressive.",
          styleContext:
            "Supportive communicators resist the urge to inspire too soon after loss. They know that premature optimism can feel dismissive of genuine grief.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented the business case for the redundancies, shared financial data, or outlined efficiency targets for the remaining team.",
          observation:
            "There is no attempt to justify the decision or shift focus to operational priorities. David is managing the human aftermath, not the business logic.",
          coachingTip:
            "Is this person managing the emotional recovery or the operational recovery? David is entirely focused on helping people process what has happened.",
          styleContext:
            "Supportive communicators believe that operational recovery follows emotional recovery. Get the people right first, and the work will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has sent his email and a team member replies saying they feel guilty for still having a job when their close colleague was let go. How do you respond?",
      options: [
        {
          id: "s381-opt-a",
          text: "That is a really natural thing to feel, and I appreciate you trusting me with it. Survivor guilt is real, and there is no timeline for working through it. Let us have a coffee this week - I want to make sure you have the support you need.",
          score: 10,
          result: "strong",
          explanation:
            "You named the feeling, normalised it, and offered personal support without rushing them past it. This is exactly the response David would want from his team.",
        },
        {
          id: "s381-opt-b",
          text: "I understand. The best thing you can do for your colleague is to make the most of the opportunity you still have. They would want you to succeed.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned but reframes the guilt before fully validating it. David would want you to sit with the feeling longer before offering perspective.",
        },
        {
          id: "s381-opt-c",
          text: "The decisions were made based on role requirements, not individual worth. Your position was retained because the business needs your specific skills going forward.",
          score: 0,
          result: "weak",
          explanation:
            "This is logical but emotionally inappropriate. Someone expressing guilt does not need a business justification - they need human acknowledgement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a post-redundancy email that honours those who left, thanks those who remain, and sets a compassionate tone without being motivational. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nThis has been a painful week, and I am not going to pretend otherwise.\n\nWe said goodbye to colleagues who have been part of this team for years - people who shaped our culture, supported each other through tough projects, and made this a better place to work. They deserve to be remembered for their contributions, not reduced to a line in a restructure announcement.\n\nFor those of you who are still here, I know this is not straightforward either. You might be feeling relieved, uncertain, sad, guilty, or all of those things at once. Every one of those responses is completely natural, and none of them is wrong.\n\nI am not going to ask you to bounce back quickly or pretend everything is normal. What I will do is be honest with you, check in with each of you personally over the coming days, and make sure nobody is carrying this alone.\n\nWe will find our rhythm again, but we will do it at a pace that respects what has happened. If you need to talk - about the changes, about how you are feeling, about anything - I am here.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email honours those who left with genuine respect, validates the complex emotions of those who remain, and promises steady, personal support. David would send this knowing his team feels held.",
          observation:
            "You resisted the temptation to pivot to optimism or business priorities. That restraint is what makes the email feel authentic and trustworthy.",
          coachingTip:
            "Post-redundancy emails must honour the loss before addressing the future. If the email reaches 'moving forward' too quickly, it signals that feelings do not matter.",
          styleContext:
            "Supportive communicators understand that the most powerful thing you can do after loss is simply acknowledge it fully without rushing to fix it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your email truly sits with the loss or moves too quickly to reassurance. Also check whether those who left are honoured as individuals, not just mentioned as a group.",
          observation:
            "If your email transitions to 'looking ahead' before the halfway point, it risks feeling like the loss is being processed as a business event rather than a human one.",
          coachingTip:
            "Give the acknowledgement of loss at least half the email. Supportive communicators earn the right to talk about the future by fully honouring the past.",
          styleContext:
            "Supportive communicators know that rushing past grief damages trust. The remaining team watches how you treat those who left to gauge how you will treat them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too brief, too corporate, or fails to acknowledge the depth of what the team is going through.",
          observation:
            "If your email opens with 'as you are aware, the organisation has undergone some changes' or closes with 'let us focus on delivering our targets', it has missed David's brief entirely.",
          coachingTip:
            "Read your email as someone who just lost a close colleague. Would it make you feel that your leader understands what you are going through? If not, rewrite.",
          styleContext:
            "Supportive communicators see post-redundancy emails as one of the most important tests of leadership character. Get it wrong and trust is shattered.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (382-384) - remote
  // ============================================

  // Scenario 382 - Rachel Finch, remote, foundation
  {
    id: "scenario-382",
    title: "The Remote Standup Structure",
    context:
      "Rachel's team has been fully remote for six months and the daily standup has become chaotic - running over time, lacking structure, and often going off-topic. Rachel wants to redesign it.",
    chooseContext:
      "Rachel has analysed three weeks of standup data - average duration, number of off-topic tangents, and follow-up actions generated - and is presenting her proposed new format.",
    rewriteContext:
      "Rachel has asked you to write a process document for the new standup format, including the exact structure, time allocations, and rules for when to take items offline.",
    characterId: "rachel-finch",
    dialogue:
      "I have tracked our standups for the last three weeks. Average duration is 28 minutes against a 15-minute target. 62% of the time is spent on two people's updates, and only 30% of discussed items result in a follow-up action. The format is not working. I have a proposal based on the data.",
    chooseDialogue:
      "The new format has three phases. Phase one: each person states their top blocker in under 60 seconds - that is five minutes total for the team. Phase two: we triage blockers by priority and assign owners - three minutes. Phase three: we confirm actions and close - two minutes. Anything else goes into a parking lot for a separate session.",
    rewriteDialogue:
      "Document the new standup format. Include the three phases with exact time allocations. Add a decision tree for when to take an item offline versus discuss it in standup. I want anyone joining the team to be able to read this and know exactly how the standup works on day one.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has redesigned the daily standup by tracking data on duration and effectiveness, presenting percentage-based findings, and proposing a structured three-phase format with exact time allocations. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel collected data over three weeks, presented specific percentages, and proposed a structured solution with precise time allocations. This is analytical communication - evidence-based, systematic, and thorough.",
          observation:
            "Notice how Rachel does not just say 'standups are too long'. She provides exact figures - 28 minutes, 62% of time, 30% action rate. Analytical communicators quantify problems before proposing solutions.",
          coachingTip:
            "When someone diagnoses a problem with data and proposes a fix with specific parameters, they are using an analytical style. Engage with their evidence, not just their conclusions.",
          styleContext:
            "Analytical communicators believe that measuring a problem is the first step to solving it. They distrust solutions that are not grounded in data.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Rachel's proposal is decisive, which can look direct. But notice the depth of preparation - three weeks of data, specific metrics, a phased approach. A direct communicator would have just declared the new format.",
          observation:
            "A direct communicator would say 'standups are too long, we are cutting them to ten minutes'. Rachel explains why they are too long, with evidence, before proposing the change.",
          coachingTip:
            "If the diagnosis comes with data and the solution comes with structure, that is analytical. If the diagnosis is instinctive and the solution is immediate, that is direct.",
          styleContext:
            "Analytical communicators earn the right to propose changes by proving the problem exists with evidence. Direct communicators assert the problem and demand change.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not asked how people feel about the standup format, explored whether the long discussions serve relationship-building, or checked in on team morale.",
          observation:
            "There is no reference to team dynamics, personal preferences, or emotional wellbeing. Rachel is optimising a process, not managing a relationship.",
          coachingTip:
            "Is this person redesigning a meeting based on feelings or data? Rachel is firmly in the data camp.",
          styleContext:
            "Analytical communicators treat meetings as systems that can be measured and improved. Efficiency is the goal, not comfort.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has presented her data-driven standup redesign. A colleague says they liked the old format because the open discussions helped them feel connected to the team while remote. How do you respond?",
      options: [
        {
          id: "s382-opt-a",
          text: "That is a valid point. What if we keep the standup focused as Rachel proposes, but add a separate 15-minute optional coffee chat twice a week for open discussion? That way we protect both efficiency and connection, and we can track attendance to see if people value it.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the concern, proposed a structured solution that addresses both efficiency and connection, and included a measurement element. This matches Rachel's analytical approach.",
        },
        {
          id: "s382-opt-b",
          text: "I agree connection matters. Maybe we could keep five minutes at the end of the standup for open chat and see how it goes.",
          score: 5,
          result: "partial",
          explanation:
            "This compromises Rachel's structure without clear parameters. 'See how it goes' is too vague for an analytical communicator who has already measured the problem.",
        },
        {
          id: "s382-opt-c",
          text: "I think the data speaks for itself. We are wasting nearly half our standup time, and we need to fix that. We can find other ways to socialise.",
          score: 0,
          result: "weak",
          explanation:
            "While data-driven, this dismisses a legitimate concern about remote team connection. Even analytical communicators need to account for valid variables, and social connection affects performance.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a process document for the new standup format, including the three phases, time allocations, and rules for taking items offline. Write it in an analytical style - structured, specific, and evidence-based.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Daily Standup - Process Document\n\nPurpose: Identify and triage blockers in under 10 minutes. Non-blocking updates are shared asynchronously via the team channel.\n\nPhase 1: Blocker Round (5 minutes)\n- Each person states their top blocker in under 60 seconds\n- Format: 'I am blocked on [task] because [reason]. I need [specific help] from [person].'\n- If no blocker, say 'No blockers' and pass\n\nPhase 2: Triage (3 minutes)\n- Blockers are prioritised by impact on sprint goal\n- Each blocker gets an owner and a resolution deadline\n- If a blocker requires more than 2 minutes of discussion, it moves to the parking lot\n\nPhase 3: Close (2 minutes)\n- Confirm actions: who, what, by when\n- Note any parking lot items and schedule follow-up sessions\n\nOffline Decision Rule:\nTake an item offline if: (a) it involves only 2-3 people, (b) it requires more than 2 minutes of discussion, or (c) it needs information not available in the standup.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document is structured, specific, and could be followed by anyone without additional explanation. Rachel would adopt this immediately.",
          observation:
            "You included exact time allocations, a template for contributions, and a clear decision rule for offline items. This is the level of precision analytical communicators expect.",
          coachingTip:
            "When writing process documents for analytical communicators, include formats, thresholds, and decision rules. If someone could interpret a step in two ways, it is not specific enough.",
          styleContext:
            "Analytical communicators want process documents that eliminate ambiguity. Every edge case should have a rule.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your document is truly specific enough. Are time limits exact? Are the rules for taking items offline clear and testable?",
          observation:
            "If your document says 'keep contributions brief' instead of 'under 60 seconds', it leaves room for interpretation that Rachel would not accept.",
          coachingTip:
            "Replace every qualitative instruction with a quantitative one. 'Brief' becomes '60 seconds'. 'Quickly' becomes '2 minutes'. Measure everything.",
          styleContext:
            "Analytical communicators distrust documents that rely on judgement calls. They want rules, not guidelines.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document is either too vague, lacks structure, or reads more like a set of suggestions than a defined process.",
          observation:
            "If your document says things like 'try to keep it short' or 'use your best judgement about what to discuss', it is not a process - it is advice.",
          coachingTip:
            "A process document should be followed identically by any team member on any day. If the outcome depends on individual interpretation, add more structure.",
          styleContext:
            "Analytical communicators create processes to remove variability. If the standup runs differently depending on who facilitates, the document has failed.",
        },
      },
    },
  },

  // Scenario 383 - Owen Grant, remote, intermediate
  {
    id: "scenario-383",
    title: "The Remote Onboarding Gap",
    context:
      "Owen has noticed that remote hires take significantly longer to reach full productivity than office-based hires. He has been asked to investigate and propose an improved remote onboarding framework.",
    chooseContext:
      "Owen has presented his findings: remote hires take an average of 14 weeks to reach full productivity versus 8 weeks for office-based hires. He has identified three key gaps in the current process.",
    rewriteContext:
      "Owen has asked you to draft a proposal for the new remote onboarding framework, including specific milestones, check-in schedules, and success metrics.",
    characterId: "owen-grant",
    dialogue:
      "I pulled the data on the last 12 remote hires versus the last 12 office-based hires. The productivity gap is 6 weeks on average - 14 versus 8. The three biggest contributors are: delayed access to tools and systems, no structured learning pathway, and infrequent manager check-ins during the first month. Each of those is fixable with a defined process.",
    chooseDialogue:
      "The current onboarding checklist has 8 items. My proposed framework has 23, organised into three phases: pre-start, first fortnight, and first quarter. Each phase has specific milestones that the new hire and their manager verify together. The difference between our current approach and this one is measurability.",
    rewriteDialogue:
      "Write the proposal. Structure it around the three phases. Each phase needs: milestones with target dates, the check-in schedule, and the metric we use to confirm the new hire is on track. I want this to be a system, not a suggestion.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has investigated remote onboarding by comparing data across 24 hires, identifying a specific productivity gap with three root causes, and proposing a phased framework with measurable milestones. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen collected comparative data, quantified the gap precisely, identified root causes systematically, and proposed a structured, measurable solution. This is analytical communication at its most thorough.",
          observation:
            "Notice how Owen specifies '12 remote hires versus 12 office-based hires'. Analytical communicators define their sample sizes and comparison groups to establish credibility.",
          coachingTip:
            "When someone presents a problem with specific data points, named root causes, and a structured solution framework, they are using an analytical style. Engage with their evidence.",
          styleContext:
            "Analytical communicators do not propose changes based on instinct. They build the case with data first and let the evidence drive the solution design.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive about the solution, which can seem direct. But notice the depth of investigation - comparative data, root cause analysis, phased approach. A direct communicator would have just mandated a new process.",
          observation:
            "A direct communicator would say 'remote onboarding is broken, here is the fix'. Owen says 'here is what the data shows, here are the causes, and here is a system to address them'. The rigour is analytical.",
          coachingTip:
            "If the solution is preceded by a thorough investigation and backed by specific data, that is analytical. If it is preceded by a gut feeling and backed by authority, that is direct.",
          styleContext:
            "Analytical communicators invest heavily in diagnosis before prescription. They believe better data leads to better solutions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not explored how new remote hires feel during onboarding, asked about their emotional experience, or focused on building personal connections.",
          observation:
            "There is no reference to loneliness, belonging, or relationship-building. Owen is solving a productivity gap, not an emotional one.",
          coachingTip:
            "Is this person measuring onboarding success by how people feel or by how quickly they reach productivity? Owen is firmly in the productivity measurement camp.",
          styleContext:
            "Analytical communicators define onboarding success in terms of measurable outcomes. They trust that good systems create good experiences, not the other way around.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has presented his 23-point onboarding framework. A manager says it looks over-engineered and that good onboarding is really about building relationships, which cannot be reduced to a checklist. How do you respond?",
      options: [
        {
          id: "s383-opt-a",
          text: "Relationships matter, but the data shows that the biggest gaps are structural - tool access, learning pathways, and check-in frequency. The framework does not prevent relationship-building; it ensures the foundational elements are in place so managers can focus their energy on connection rather than admin.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the point, reframed the framework as enabling rather than replacing relationships, and anchored your argument in Owen's data. This is a strong analytical response.",
        },
        {
          id: "s383-opt-b",
          text: "Perhaps we could simplify it to the ten most critical items and give managers flexibility on the rest. That might feel less prescriptive.",
          score: 5,
          result: "partial",
          explanation:
            "This compromises without defending the evidence. Owen identified 23 items through systematic analysis - reducing them without revisiting the data undermines the analytical approach.",
        },
        {
          id: "s383-opt-c",
          text: "You are right that relationships are the most important part. Maybe the checklist should focus on social integration milestones instead of process ones.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons Owen's data-driven findings in favour of an untested hypothesis. Owen has already identified the three root causes - pivoting away from them ignores the evidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to draft a remote onboarding proposal structured in three phases with milestones, check-in schedules, and success metrics. Write it in an analytical style - systematic, specific, and measurable.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Remote Onboarding Framework - Proposal\n\nObjective: Reduce time-to-full-productivity for remote hires from 14 weeks to 9 weeks within two quarters.\n\nPhase 1: Pre-Start (Day -5 to Day 0)\nMilestones:\n- All system access provisioned and tested by Day -2\n- Equipment delivered and verified functional by Day -1\n- Welcome pack sent with team directory, org chart, and first-week schedule\nCheck-in: IT confirms tool access. Manager sends welcome message with first-day agenda.\nSuccess metric: New hire logs into all required systems within 30 minutes of start on Day 1.\n\nPhase 2: First Fortnight (Day 1 to Day 14)\nMilestones:\n- Complete structured learning pathway (12 modules) by Day 10\n- Shadow three team processes by Day 14\n- Deliver one small, supervised task by Day 14\nCheck-in: Daily 15-minute call with manager (Days 1-5), then every other day (Days 6-14).\nSuccess metric: Learning pathway completion rate of 100%. Supervised task delivered to acceptable standard.\n\nPhase 3: First Quarter (Week 3 to Week 12)\nMilestones:\n- Independent task delivery by Week 4\n- First client-facing interaction by Week 6\n- Full sprint participation by Week 8\nCheck-in: Weekly 30-minute one-to-one with manager. Fortnightly buddy catch-up.\nSuccess metric: Sprint velocity reaches 80% of team average by Week 10.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal is systematic, measurable, and could be implemented consistently across every remote hire. Owen would present this to leadership with confidence.",
          observation:
            "You included specific dates, quantified success metrics, and defined check-in frequencies precisely. This is the level of detail analytical communicators require.",
          coachingTip:
            "When writing proposals for analytical communicators, every milestone should be verifiable and every metric should be measurable. If you cannot tell whether it was achieved, it is too vague.",
          styleContext:
            "Analytical communicators judge proposals by their implementability. A proposal that requires interpretation at the point of use is not finished.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your milestones and metrics are truly specific. 'Settle in well' or 'build key relationships' cannot be measured and will frustrate an analytical reader.",
          observation:
            "If your check-in schedule says 'regular catch-ups' instead of 'daily 15-minute calls for the first week', it needs more precision.",
          coachingTip:
            "Convert every qualitative milestone to a quantitative one. 'Feels comfortable with tools' becomes 'completes all 12 learning modules by Day 10'.",
          styleContext:
            "Analytical communicators do not accept milestones that rely on self-reporting of feelings. They want observable, verifiable evidence of progress.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal lacks the structure, specificity, or measurability that Owen requested. It reads more like a set of intentions than a framework.",
          observation:
            "If your proposal does not include dates, metrics, and specific check-in frequencies, it is not a system - it is a wish list.",
          coachingTip:
            "Start each phase with a date range, list milestones with target dates, specify check-in frequency exactly, and define how you will know the phase succeeded.",
          styleContext:
            "Analytical communicators want onboarding frameworks that work the same way every time, regardless of who manages the new hire. Remove all dependence on individual judgement.",
        },
      },
    },
  },

  // Scenario 384 - Fiona Banks, remote, advanced
  {
    id: "scenario-384",
    title: "The Distributed Team Performance Review",
    context:
      "Fiona manages a team spread across three time zones. She has identified inconsistencies in how performance is assessed for remote versus co-located team members and wants to standardise the approach.",
    chooseContext:
      "Fiona has compared performance review scores and promotion rates across the three locations and found that co-located team members receive higher ratings despite comparable output metrics.",
    rewriteContext:
      "Fiona has asked you to draft a new performance assessment framework that eliminates proximity bias and evaluates all team members against the same objective criteria.",
    characterId: "fiona-banks",
    dialogue:
      "I ran a comparison across all three locations for the last two review cycles. Co-located team members received an average score of 4.1 out of 5, while remote team members averaged 3.6. When I cross-referenced against output metrics - tickets closed, client satisfaction scores, project delivery rates - there was no statistically significant difference in actual performance. The gap is in perception, not output.",
    chooseDialogue:
      "The bias is structural, not intentional. Managers naturally weight visibility - they see co-located people contributing in meetings, hallway conversations, and spontaneous problem-solving. Remote contributions are equally valuable but less visible. We need assessment criteria that measure output, not presence.",
    rewriteDialogue:
      "Draft the framework. Define five assessment criteria, each with a scoring rubric that references measurable outputs only. Include specific guidance on what does and does not count as evidence. I want to eliminate any criterion that could be influenced by physical proximity.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has identified proximity bias in performance reviews by comparing scores against output metrics across locations, finding a perception gap unsupported by data, and proposing criteria based on measurable outputs. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona built her case through comparative data analysis, identified a specific statistical finding, diagnosed the structural cause, and proposed an evidence-based solution. This is analytical communication applied to a systemic problem.",
          observation:
            "Notice how Fiona says 'no statistically significant difference'. Analytical communicators use precise statistical language to distinguish between real differences and perceived ones.",
          coachingTip:
            "When someone identifies a problem by comparing data sets, isolates the variable causing the discrepancy, and proposes measurement-based solutions, they are using an analytical style at an advanced level.",
          styleContext:
            "Analytical communicators excel at uncovering bias because they trust data over intuition. When perception and output diverge, they follow the output.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is decisive about the need for change, which can seem direct. But notice the extensive evidence gathering and structural analysis. A direct communicator would have said 'the reviews are unfair - change the criteria' without the data work.",
          observation:
            "A direct communicator would treat this as a decision to be made. Fiona treats it as a hypothesis to be tested. The data came first; the conclusion followed.",
          coachingTip:
            "If someone builds a case before making a recommendation, that is analytical. If they make a recommendation and then find supporting evidence, that is direct.",
          styleContext:
            "Analytical communicators persuade through evidence. Their recommendations carry weight because the investigation is rigorous and transparent.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not explored how remote team members feel about the review process, asked about their sense of fairness, or focused on the emotional impact of the bias.",
          observation:
            "There is no reference to morale, belonging, or the personal experience of being underrated. Fiona is solving a measurement problem, not an emotional one.",
          coachingTip:
            "Is this person addressing feelings of unfairness or the factual basis for unfairness? Fiona is proving the bias exists with data, not describing how it feels.",
          styleContext:
            "Analytical communicators believe that fixing the system fixes the experience. If the assessment criteria are fair, the feelings of fairness will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has proposed output-based assessment criteria to eliminate proximity bias. A senior manager argues that soft skills like 'team presence' and 'cultural contribution' cannot be measured and should remain in the review. How do you respond?",
      options: [
        {
          id: "s384-opt-a",
          text: "We can measure those. 'Team presence' becomes 'number of cross-functional collaborations initiated per quarter'. 'Cultural contribution' becomes 'peer recognition nominations received and given'. If we define the behaviours precisely, we can score them without proximity bias.",
          score: 10,
          result: "strong",
          explanation:
            "You converted vague criteria into specific, measurable indicators that work equally for remote and co-located team members. This is exactly how Fiona would approach the objection.",
        },
        {
          id: "s384-opt-b",
          text: "Those are important, but perhaps we could weight them lower than output metrics to reduce their impact on the overall score.",
          score: 5,
          result: "partial",
          explanation:
            "This reduces the bias but does not eliminate it. Fiona's approach is to make every criterion measurable, not to reduce the weight of unmeasurable ones.",
        },
        {
          id: "s384-opt-c",
          text: "I agree that some things cannot be reduced to numbers. Perhaps managers should use their professional judgement for those criteria, alongside the data for everything else.",
          score: 0,
          result: "weak",
          explanation:
            "This reintroduces the exact bias Fiona identified. Professional judgement is the mechanism through which proximity bias operates. An analytical communicator would reject this immediately.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to draft a performance assessment framework with five criteria, each with a scoring rubric based on measurable outputs and guidance on acceptable evidence. Write it in an analytical style - structured, specific, and bias-resistant.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Performance Assessment Framework - Distributed Teams\n\nPrinciple: Every criterion is assessed using measurable outputs only. Physical proximity to a manager must not influence any score.\n\n1. Delivery Quality (25%)\n   Score 5: 95%+ of deliverables accepted without revision. Zero critical defects.\n   Score 3: 80-94% accepted. One critical defect resolved within SLA.\n   Score 1: Below 80% acceptance rate or repeated critical defects.\n   Evidence: Project acceptance records, defect logs, client feedback scores.\n\n2. Collaboration (20%)\n   Score 5: Initiated 5+ cross-functional collaborations per quarter. Responded to peer requests within 4 hours average.\n   Score 3: Initiated 2-4 collaborations. Response time within 8 hours.\n   Score 1: Fewer than 2 collaborations initiated. Response time exceeds 24 hours.\n   Evidence: Collaboration tool activity logs, peer survey responses, project contribution records.\n\n3. Initiative (20%)\n   Score 5: Proposed and delivered 2+ process improvements adopted by the team.\n   Score 3: Proposed 1 improvement. Actively contributed to others' proposals.\n   Score 1: No improvements proposed. Minimal contribution to team development.\n   Evidence: Improvement proposal records, implementation logs, team retrospective notes.\n\n4. Knowledge Sharing (15%)\n   Score 5: Published 4+ knowledge articles. Mentored 1+ team members with documented outcomes.\n   Score 3: Published 2-3 articles. Participated in mentoring or onboarding.\n   Score 1: Fewer than 2 articles. No mentoring contribution.\n   Evidence: Knowledge base contributions, mentoring logs, onboarding feedback.\n\n5. Reliability (20%)\n   Score 5: 100% of commitments met on time. Proactive communication of risks 48+ hours before deadlines.\n   Score 3: 90-99% on-time delivery. Risks communicated within 24 hours.\n   Score 1: Below 90% on-time. Risks communicated after deadline impact.\n   Evidence: Sprint completion records, risk communication logs, deadline adherence data.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your framework is rigorously structured, every criterion has measurable thresholds, and the evidence requirements ensure consistent application across locations. Fiona would implement this immediately.",
          observation:
            "You eliminated any criterion that could be influenced by physical proximity. Every score can be verified with objective records, making bias nearly impossible.",
          coachingTip:
            "When building assessment frameworks for analytical communicators, test every criterion by asking: could two different managers score the same person identically using only the evidence specified? If yes, the framework is working.",
          styleContext:
            "Analytical communicators design systems to remove human variability. A performance framework should produce the same result regardless of who conducts the review.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every scoring threshold is truly quantified. If any criterion uses language like 'demonstrates strong' or 'shows leadership', it reintroduces subjectivity.",
          observation:
            "If your rubric includes descriptors like 'excellent', 'good', or 'needs improvement' without defining what those mean in measurable terms, it is not precise enough.",
          coachingTip:
            "Replace every qualitative descriptor with a number or observable behaviour. 'Shows strong collaboration' becomes 'initiated 5+ cross-functional collaborations per quarter'.",
          styleContext:
            "Analytical communicators know that subjective descriptors are where bias hides. The more precise the rubric, the fairer the outcome.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your framework lacks the specificity, measurability, or structure that Fiona requested. It reads more like a traditional review form than a bias-resistant assessment system.",
          observation:
            "If your criteria include 'teamwork', 'leadership', or 'attitude' without measurable definitions, the framework will reproduce the exact bias Fiona identified.",
          coachingTip:
            "Start each criterion with a measurable output, define three scoring levels with specific thresholds, and list the evidence required. If you cannot point to a data source, the criterion is not ready.",
          styleContext:
            "Analytical communicators reject frameworks that rely on manager impression. If the evidence is not specified, the assessment is not objective.",
        },
      },
    },
  },
];
