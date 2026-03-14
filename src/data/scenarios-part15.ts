import { Scenario } from "@/types";

export const SCENARIOS_PART15: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (169-171)
  // ============================================

  // Scenario 169 - Sam Hartley, sales, foundation
  {
    id: "scenario-169",
    title: "The Cold Outreach Follow-Up",
    context:
      "You are reviewing your sales pipeline with Sam. A prospect you contacted two weeks ago has not responded to your initial outreach. Sam is advising you on how to handle the follow-up.",
    chooseContext:
      "Sam has suggested sending a second outreach message. The prospect is a Head of Procurement at a mid-sized manufacturing firm. Sam wants the follow-up to be sharper than the original.",
    rewriteContext:
      "Sam has asked you to draft the follow-up email to the prospect, keeping it under five sentences and leading with a specific result you can deliver.",
    characterId: "sam-hartley",
    dialogue:
      "Two weeks and no reply means your first message was too soft. Do not chase; reposition. Lead with a number, not a greeting. Tell them what you saved someone like them and ask for fifteen minutes. If they do not reply to that, move on.",
    chooseDialogue:
      "Your first email read like a brochure. This one needs to read like a business case. One line on what you do, one line on the result, one line asking for the meeting. That is it.",
    rewriteDialogue:
      "Write the follow-up now. Five sentences maximum. No 'just checking in', no 'I hope this finds you well'. Open with a result, close with a date for the call. Make it impossible to ignore.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Sam has told you to stop chasing and start repositioning, leading with results and keeping the follow-up to three lines. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam cuts straight to the problem: your original message was too soft. He gives you a clear formula (number, result, meeting request) and sets a hard boundary: if they do not reply, move on.",
          observation:
            "Notice how Sam frames the follow-up as a repositioning, not a second attempt. Direct communicators see persistence without a new angle as weakness.",
          coachingTip:
            "When someone gives you a prescriptive formula for outreach and tells you to abandon the lead if it fails, they are operating in a direct style.",
          styleContext:
            "Direct communicators believe in economy of effort. Every message should earn its place, and chasing diminishing returns is a waste of time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference data ('lead with a number'), which can feel analytical. But notice he is not asking you to research the prospect further or build a detailed case. He wants brevity and impact.",
          observation:
            "An analytical communicator would ask you to segment the prospect and tailor the message based on industry benchmarks. Sam just wants a punchy three-liner.",
          coachingTip:
            "If someone tells you to use a number to grab attention, that is direct. If they tell you to use a number to build a logical argument, that is analytical.",
          styleContext:
            "Direct communicators use data as a hook, not as evidence. The number is there to open the door, not to prove a thesis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked you to build rapport, share a personal story, or check how the prospect might be feeling. The entire approach is transactional and results-focused.",
          observation:
            "There is no warmth in Sam's advice. He is treating the follow-up as a business problem to solve, not a relationship to nurture.",
          coachingTip:
            "Ask yourself: is this person focused on connecting or converting? Sam is entirely focused on conversion.",
          styleContext:
            "Direct communicators approach sales as problem-solving. The prospect has a need; you have a solution. The message should make that obvious and fast.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants your follow-up email to read like a business case, not a brochure. How do you respond to his coaching?",
      options: [
        {
          id: "s169-opt-a",
          text: "Got it. I will lead with the 18% cost reduction we delivered for a similar manufacturer, ask for fifteen minutes on Thursday or Friday, and keep it to three lines. I will send it to you before it goes out.",
          score: 10,
          result: "strong",
          explanation:
            "You mirror Sam's directness perfectly: a specific result, a specific ask, and a time-bound commitment to send it for review. No filler.",
        },
        {
          id: "s169-opt-b",
          text: "I will rework the email and try to make it more concise. I think if I mention some of our case studies and include a link to our website, that could help them see the value.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally right, but Sam said 'three lines', not 'a link to your website'. Adding case studies and links makes it longer, not sharper.",
        },
        {
          id: "s169-opt-c",
          text: "I was thinking of trying a different approach, maybe connecting with them on LinkedIn first and building a bit of a relationship before going in with the hard sell. What do you think?",
          score: 0,
          result: "weak",
          explanation:
            "Sam explicitly told you to reposition, not to build a relationship. Suggesting a softer approach after clear direction signals you were not listening to his style.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a five-sentence follow-up email that opens with a result and closes with a specific date for the call. Write it in a direct style.",
      targetTraits: ["result-led", "concise", "specific-ask", "time-bound"],
      exampleStrongResponse:
        "Subject: 18% Procurement Savings, Similar Sector\n\nWe recently helped a manufacturer of your size reduce procurement costs by 18% in six months. The approach is straightforward and I can walk you through it in fifteen minutes. Are you available Thursday at 10am or Friday at 2pm? If neither works, suggest a time that does. I will keep it brief.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You opened with a result, kept it tight, and closed with a specific ask. Sam would approve of this immediately.",
          observation:
            "You avoided filler phrases and made the value proposition clear in the first sentence. This is exactly what direct communicators respond to.",
          coachingTip:
            "In sales follow-ups for direct communicators, the first sentence is the only one that matters. If it does not contain a result or a number, rewrite it.",
          styleContext:
            "Direct communicators judge outreach by how quickly they can decide whether to respond. A result in the first line makes that decision easy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right idea but may be missing a specific result, a concrete time, or both. Check that you have led with a number and closed with a date.",
          observation:
            "Phrases like 'significant savings' or 'sometime next week' are too vague for this style. Direct communicators want precision.",
          coachingTip:
            "Replace every adjective with a number. 'Significant' becomes '18%'. 'Soon' becomes 'Thursday at 10am'. Precision is persuasion for direct communicators.",
          styleContext:
            "Direct communicators scan emails for actionable specifics. If they have to guess what you mean, they will not reply.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too vague, or too relationship-focused. Sam asked for five sentences that hit hard. Anything else misses the brief.",
          observation:
            "If your email opens with 'I hope you are well' or 'Just following up', you have used your most valuable real estate on filler.",
          coachingTip:
            "Delete your first sentence. Does the email still make sense? If so, the first sentence was filler. Keep deleting until every line earns its place.",
          styleContext:
            "Direct communicators see wordy follow-ups as a sign that the sender does not respect their time. Brevity is a form of courtesy.",
        },
      },
    },
  },

  // Scenario 170 - Jordan Cole, email, intermediate
  {
    id: "scenario-170",
    title: "The Project Status Escalation",
    context:
      "A critical project is running behind schedule. Jordan has been copied into an email thread where the project manager is explaining delays. Jordan is responding to the thread.",
    chooseContext:
      "Jordan has asked you to draft an escalation email to senior leadership explaining the delay and proposing a recovery plan. He wants it sent within the hour.",
    rewriteContext:
      "Jordan has reviewed your draft and wants it tightened. He says the email needs to state the problem, the impact, the fix, and the new deadline, nothing else.",
    characterId: "jordan-cole",
    dialogue:
      "I have read this thread three times and I still do not know what the actual problem is. Everyone is explaining why things are hard, but nobody is telling me what has slipped, by how much, and what we are doing about it. I need an escalation email to the exec team in the next hour. No background, no excuses, just facts.",
    chooseDialogue:
      "The draft is too long. The exec team will not read past the second paragraph. Cut it to four bullet points: what slipped, by how many days, the recovery plan, and the new completion date. That is all they need.",
    rewriteDialogue:
      "Rewrite it. Four bullet points. Problem, impact, fix, new date. If a sentence does not fit into one of those four categories, delete it. Send it to me for a final check before it goes out.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has criticised a lengthy email thread for lacking clarity and demanded a four-point escalation email within the hour. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan is frustrated by vagueness and demands a stripped-back, action-focused email. The instruction is prescriptive: four bullets, one hour, no excuses. This is textbook direct communication.",
          observation:
            "Notice Jordan's frustration is not with the delay itself but with the lack of clarity about the delay. Direct communicators can tolerate problems, but they cannot tolerate confusion.",
          coachingTip:
            "When someone dismisses context and asks only for facts and actions, they are signalling a direct style. Match it with structure and brevity.",
          styleContext:
            "Direct communicators believe that escalation emails should be decision-ready. The reader should know what happened and what to do about it in under thirty seconds.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Jordan's insistence on structure (four bullets, specific categories) can seem analytical. But notice Jordan is not asking for root cause analysis or data. He wants the information compressed for speed, not expanded for rigour.",
          observation:
            "An analytical communicator would ask for a detailed breakdown of each delay. Jordan wants the opposite: strip it down to the essentials.",
          coachingTip:
            "Structure for speed is direct. Structure for depth is analytical. Jordan's four bullets are designed to accelerate a decision, not to explain one.",
          styleContext:
            "Direct communicators use structure as a compression tool. Analytical communicators use structure as an expansion tool. The intent behind the format matters.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has shown no interest in how the team feels about the delay, nor has he asked for a collaborative discussion about the recovery plan. This is a command, not a conversation.",
          observation:
            "There is no invitation to brainstorm, no acknowledgement of the team's effort, and no exploration of creative solutions. Jordan wants facts delivered fast.",
          coachingTip:
            "If someone responds to a problem by demanding a structured output within a tight deadline, that is direct. They are solving for speed and clarity, not for consensus or morale.",
          styleContext:
            "Direct communicators treat escalation emails as operational tools. The purpose is to inform a decision-maker, not to explain a situation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has told you your escalation draft is too long and needs cutting to four bullet points. How do you respond?",
      options: [
        {
          id: "s170-opt-a",
          text: "Understood. Here is the revised version: milestone three slipped by nine days due to a vendor dependency; projected revenue impact of 40K if unresolved; recovery plan is to run workstreams two and three in parallel; new completion date is 28 April. I will send it to you in fifteen minutes.",
          score: 10,
          result: "strong",
          explanation:
            "You have hit all four categories with specific detail and committed to a tight turnaround. Jordan can review and send this without further editing.",
        },
        {
          id: "s170-opt-b",
          text: "I will trim it down. Should I include some context about why the vendor was late, or do you want me to leave that out entirely?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable question, but Jordan already answered it: 'no background, no excuses'. Asking again suggests you did not fully absorb his direction.",
        },
        {
          id: "s170-opt-c",
          text: "I think the exec team might want more context so they understand the full picture. If we just send bullet points, it could come across as dismissive of the complexity involved.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan specifically said the exec team will not read past paragraph two. Arguing for more context directly contradicts his instruction and his reading of the audience.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to rewrite the escalation email using exactly four bullet points: problem, impact, fix, and new date. Write it in a direct style.",
      targetTraits: ["four-point-structure", "specific-numbers", "no-filler", "action-focused"],
      exampleStrongResponse:
        "Subject: Project Atlas, Milestone 3 Delay and Recovery Plan\n\nUpdate on Project Atlas status:\n\n- Problem: Milestone 3 (data migration) has slipped by 9 working days due to a vendor integration delay.\n- Impact: If unresolved, this pushes final delivery past the Q2 revenue window, with an estimated 40K impact.\n- Recovery plan: Run workstreams 2 and 3 in parallel, with additional QA resource from 14 April.\n- New completion date: 28 April (original target was 15 April).\n\nHappy to discuss on a call if needed. No further action required from the exec team at this stage.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email follows the four-point structure precisely and includes specific numbers for every claim. Jordan would send this without changes.",
          observation:
            "You have made it possible for a senior leader to read, understand, and act on this email in under thirty seconds. That is the goal of direct escalation writing.",
          coachingTip:
            "When writing escalation emails for direct communicators, treat the subject line as a headline. The reader should know the topic and severity before they open the email.",
          styleContext:
            "Direct communicators believe that escalation emails earn trust through clarity. A concise, structured update signals competence more than a detailed explanation ever could.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have the right structure, but some of your bullets may lack specific numbers or contain unnecessary context. Check that each bullet answers its question in one sentence.",
          observation:
            "If your bullet says 'some delay' instead of '9 working days' or 'potential financial impact' instead of '40K', it needs tightening.",
          coachingTip:
            "Each bullet should pass the 'so what' test. If a senior leader reads it and asks 'how much?' or 'by when?', you have not been specific enough.",
          styleContext:
            "Direct communicators read escalation emails to make decisions. Every vague bullet is a follow-up question they should not have to ask.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either breaks the four-point structure, includes background context Jordan told you to cut, or lacks the specific data needed for an executive audience.",
          observation:
            "If your email opens with an apology or an explanation of how hard the team has been working, you have misjudged the purpose of the communication.",
          coachingTip:
            "Write your email, then ask: can the reader make a decision based on this alone? If not, add data. If it is too long, cut context. The email should be self-contained and concise.",
          styleContext:
            "Direct communicators see long escalation emails as a sign that the sender does not understand the audience. Executives want signal, not noise.",
        },
      },
    },
  },

  // Scenario 171 - Alex Tran, client, advanced
  {
    id: "scenario-171",
    title: "The Quarterly Business Review",
    context:
      "You are presenting a quarterly business review to a key client. Alex is the programme director on the client side and is known for running tight review meetings with no tolerance for padding.",
    chooseContext:
      "During the review, Alex has flagged that one of your deliverables missed its SLA by two days. She wants to know what happened and what you are doing to prevent a repeat, and she wants the answer now, not in a follow-up email.",
    rewriteContext:
      "Alex has asked you to produce a one-page executive summary of the quarter's performance that she can present to her board. She wants outcomes, not activities.",
    characterId: "alex-tran",
    dialogue:
      "I have twenty minutes for this review. Show me outcomes against the three KPIs we agreed. If something is off track, tell me what you are doing about it. I do not need slides on methodology or team structure. I read those in the pre-read. Let us get to the numbers.",
    chooseDialogue:
      "You missed the SLA on deliverable four by two days. I am not asking you to explain the circumstances. I am asking you what systemic change you are making so it does not happen again. Give me a concrete answer.",
    rewriteDialogue:
      "I need a one-page summary for my board. Three KPIs, actual vs target, a one-sentence explanation for any miss, and the top three priorities for next quarter. No graphs, no narrative. A table and three bullet points. Send it by end of day.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "client",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has opened a quarterly review by stating she has twenty minutes, wants outcomes against three KPIs, and does not need methodology slides. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex controls the agenda, sets a hard time limit, and explicitly filters out anything that is not outcome-focused. This is a direct communicator managing a meeting for maximum efficiency.",
          observation:
            "The phrase 'I read those in the pre-read' is a direct communicator's way of saying 'do not waste my time repeating what I already know'. She has done her preparation and expects you to respect that.",
          coachingTip:
            "When a client opens a review with a time limit and a filter for what they do not want to hear, match their pace. Start with outcomes, not context.",
          styleContext:
            "Direct communicators view business reviews as accountability checkpoints. They want to know: did you deliver what you promised, and if not, what are you doing about it?",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does reference KPIs and data, which feels analytical. But notice she is not asking for deep analysis or methodology. She wants the headline numbers and the actions behind any miss. Speed, not depth.",
          observation:
            "An analytical client would ask how you arrived at the numbers. Alex just wants to see them and move on. The rigour is expected to be in the pre-read, not the meeting.",
          coachingTip:
            "If a client asks for numbers to drive decisions, that is direct. If they ask for numbers to validate methodology, that is analytical. Alex is in decision mode.",
          styleContext:
            "Direct communicators separate preparation from presentation. They expect the detail to exist, but they do not want it repeated in the meeting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not invited collaboration, asked how your team is feeling, or explored creative approaches to improvement. This is a performance-focused review with a hard time limit.",
          observation:
            "There is no warmth, no relationship-building, and no open-ended exploration. Alex is here to assess performance and move on.",
          coachingTip:
            "When a client sets a twenty-minute window and tells you what not to present, they are prioritising efficiency over relationship. Adjust your approach accordingly.",
          styleContext:
            "Direct communicators demonstrate trust in a client relationship by being demanding. They assume you can handle directness and will lose respect if you cannot.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has asked for a concrete systemic change to prevent a repeat SLA miss, not an explanation of the circumstances. How do you respond?",
      options: [
        {
          id: "s171-opt-a",
          text: "We are adding an automated early-warning trigger at the 72-hour mark before any SLA deadline. If a deliverable is not at 80% completion by that point, it escalates to me directly and I reassign resource. This is live from next Monday.",
          score: 10,
          result: "strong",
          explanation:
            "You have described a specific systemic change with a clear trigger, an escalation path, and an implementation date. Alex can hold you to this in the next review.",
        },
        {
          id: "s171-opt-b",
          text: "We have reviewed what went wrong and the team has learned from it. I am confident it will not happen again. We have tightened our internal processes and added more oversight to that workstream.",
          score: 5,
          result: "partial",
          explanation:
            "This is reassurance, not a systemic change. Alex asked for a concrete mechanism, not a promise. 'Tightened processes' and 'more oversight' are too vague for a direct communicator.",
        },
        {
          id: "s171-opt-c",
          text: "I appreciate you raising it. The delay was actually caused by a dependency on your side, the data we needed came in late. But we absorb these things and do not point fingers. We will work harder to build in more buffer next time.",
          score: 0,
          result: "weak",
          explanation:
            "Alex explicitly said she did not want circumstances. You have given her circumstances and deflected blame. A direct communicator will see this as evasion, and the passive-aggressive tone will damage trust.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has requested a one-page board summary: three KPIs with actual vs target, one-sentence explanations for any misses, and the top three priorities for next quarter. Write it in a direct style.",
      targetTraits: ["table-format", "actual-vs-target", "one-sentence-explanations", "three-priorities"],
      exampleStrongResponse:
        "Subject: Q1 Performance Summary, Board Update\n\nKPI Performance:\n- Customer satisfaction: Target 92%, Actual 94%. On track.\n- SLA compliance: Target 99%, Actual 97.3%. Miss caused by a vendor dependency on deliverable 4; automated early-warning system now in place.\n- Cost efficiency: Target 15% saving, Actual 14.2%. Marginal miss due to unplanned infrastructure upgrade; absorbed within existing budget.\n\nTop 3 Priorities for Q2:\n1. Achieve 99.5% SLA compliance with new monitoring triggers.\n2. Deliver Phase 2 automation, targeting 18% cost saving.\n3. Complete mid-year client satisfaction survey by end of May.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary hits all three KPIs with actual vs target, provides one-sentence explanations for misses, and lists clear priorities. Alex can present this to her board without editing.",
          observation:
            "You have made every sentence earn its place. The miss explanations include both the cause and the corrective action, which is exactly what a board needs to see.",
          coachingTip:
            "When writing board summaries for direct communicators, remember that they will be judged by how efficiently the board absorbs the information. Your job is to make their presentation effortless.",
          styleContext:
            "Direct communicators treat board summaries as trust signals. A clean, concise summary tells the board that the programme is under control. Length suggests the opposite.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary covers the right ground but may include unnecessary narrative, miss the actual vs target comparison, or present priorities without clear timelines.",
          observation:
            "If your summary says 'we plan to improve SLA compliance' without a target number, it is not board-ready. Alex will send it back.",
          coachingTip:
            "Board members read summaries to assess risk and progress. Every line should answer: are we on track, and if not, what is being done? Remove anything that does not answer one of those questions.",
          styleContext:
            "Direct communicators want board papers that pass the 'corridor test': could a board member understand the key messages if they only had thirty seconds to read it between meetings?",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too long, too narrative, or does not follow the structure Alex specified. She asked for a table and three bullet points, not a written report.",
          observation:
            "If your summary opens with a paragraph about the team's hard work or the challenges of the quarter, you have missed the brief entirely.",
          coachingTip:
            "Strip out every sentence that is not a KPI result, a miss explanation, or a Q2 priority. What remains is what Alex asked for. Everything else is noise.",
          styleContext:
            "Direct communicators believe that the quality of a summary is inversely proportional to its length. One page means one page, and ideally less.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (172-174)
  // ============================================

  // Scenario 172 - Nina Okafor, client, foundation
  {
    id: "scenario-172",
    title: "The Client Workshop Facilitation",
    context:
      "You are co-facilitating a strategy workshop with a long-standing client. Nina is the Client Engagement Lead and is opening the session to energise the room and set the tone for a creative day.",
    chooseContext:
      "Nina has noticed that some attendees are quiet and disengaged after the first exercise. She is trying to bring them into the conversation and lift the energy before the next activity.",
    rewriteContext:
      "Nina has asked you to write a thank-you email to the client attendees after the workshop, capturing the energy of the day and reinforcing the key themes discussed.",
    characterId: "nina-okafor",
    dialogue:
      "Welcome, everyone! I am so glad you are all here. Today is not about sitting through presentations. It is about rolling up our sleeves, sharing ideas, and walking out of here with something we are genuinely excited about. I want everyone's voice in the room, no idea is too wild. Let us make this a day we actually remember.",
    chooseDialogue:
      "I can see a few of you are still warming up, and that is completely fine. But I promise, the best ideas in these sessions always come from the quietest people. So if something is bubbling away in your head, this is the moment. We want to hear it.",
    rewriteDialogue:
      "Send the group a thank-you email tonight while the energy is still fresh. I want them to feel how brilliant today was. Mention the standout ideas, call out the people who contributed something special, and remind them why this work matters. Do not make it corporate; make it human.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "client",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Nina has opened a client workshop by emphasising energy, creativity, and making the day memorable. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina opens with enthusiasm, invites wild ideas, and frames the day as something to be remembered. She is focused on energy, participation, and creative output. This is a classic expressive opening.",
          observation:
            "The phrase 'no idea is too wild' is a hallmark of expressive communication. It signals that creativity is valued above structure and that the room should feel free to think big.",
          coachingTip:
            "When someone opens a session by focusing on energy and creative freedom rather than agenda and objectives, they are signalling an expressive style. Match their enthusiasm.",
          styleContext:
            "Expressive communicators believe that the best outcomes come from environments where people feel inspired. They invest heavily in setting the emotional tone of a session.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does show warmth and inclusivity, which can feel supportive. But notice she is focused on energy and excitement, not on making everyone feel safe and comfortable. The goal is creative output, not emotional reassurance.",
          observation:
            "A supportive communicator would check in privately with quiet attendees. Nina addresses the whole room with enthusiasm, expecting the energy to lift everyone.",
          coachingTip:
            "Expressive communicators create inclusive environments through energy. Supportive communicators create inclusive environments through individual care. Nina is doing the former.",
          styleContext:
            "Expressive communicators believe that a great opening sets the tone for everything that follows. They see their role as the spark that ignites the room.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not set a structured agenda, asked for pre-read materials, or listed the specific objectives for the day. She is focused on the feeling of the session, not the framework.",
          observation:
            "There are no timelines, no deliverables, and no KPIs in Nina's opening. The focus is on inspiration and participation, not on precision.",
          coachingTip:
            "Ask yourself: is this person trying to structure the day or energise it? Nina is firmly in the 'energise' camp. That points to an expressive style.",
          styleContext:
            "Expressive communicators trust that great outcomes emerge from great energy. They believe that if people are engaged and excited, the quality of the output will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina is trying to draw out quieter attendees by encouraging them to share ideas. How do you support her in this moment?",
      options: [
        {
          id: "s172-opt-a",
          text: "Nina is right, some of the best thinking happens quietly. To build on that, why don't we try a quick round where everyone shares one idea that excited them from the last exercise? Even a half-formed thought is welcome. Let us go around the table.",
          score: 10,
          result: "strong",
          explanation:
            "You have built on Nina's energy while creating a structured invitation for quieter voices. The 'half-formed thought' permission mirrors her expressive ethos of valuing all contributions.",
        },
        {
          id: "s172-opt-b",
          text: "We could put a few prompts on the screen to help people think about what they want to share. Sometimes a visual aid helps structure the thinking.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and helpful, but it shifts the energy from personal connection to process. Nina wants human warmth, not facilitation mechanics.",
        },
        {
          id: "s172-opt-c",
          text: "Let us move on to the next exercise. People will engage when they are ready. Putting pressure on quieter participants can sometimes backfire.",
          score: 0,
          result: "weak",
          explanation:
            "Nina has made a deliberate choice to draw people in. Dismissing her approach and moving on undermines her facilitation style and the inclusive tone she has set.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a thank-you email that captures the energy of the workshop day and feels human, not corporate. Write it in an expressive style.",
      targetTraits: ["warm-tone", "name-specific-contributions", "enthusiasm", "human-not-corporate"],
      exampleStrongResponse:
        "Subject: What a Day! Thank You for Bringing the Energy\n\nHi everyone,\n\nI just wanted to say a huge thank you for today. The energy in that room was something special, and it showed in the quality of ideas we generated together.\n\nA few standout moments: Sarah's pivot on the customer journey completely reframed how we think about onboarding. James's idea about community-led feedback was bold and exactly the kind of thinking we need. And the breakout group that tackled the retention challenge brought a level of honesty that moved the whole conversation forward.\n\nThis is the kind of day that reminds me why this work matters. Let us carry this momentum into the next phase.\n\nSee you all soon.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm, personal, and names specific contributions. It captures the energy of the day without sounding like a template. Nina would be proud to send this.",
          observation:
            "You have made individuals feel seen and valued, which is exactly what expressive communicators want from a follow-up. This email strengthens the client relationship.",
          coachingTip:
            "When writing on behalf of an expressive communicator, use people's names, reference specific moments, and let the enthusiasm come through naturally. Avoid formality.",
          styleContext:
            "Expressive communicators believe that the follow-up is as important as the event itself. A great email extends the emotional impact of the day and keeps the momentum alive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has warmth but may lack specific names, standout moments, or the personal touch Nina asked for. Check that it feels like a message from a person, not a company.",
          observation:
            "If your email says 'the group contributed well' instead of naming who contributed what, it falls short of Nina's brief.",
          coachingTip:
            "Expressive communicators value recognition. Swap generic praise for specific call-outs. Instead of 'great ideas were shared', say 'Sarah's idea about X was a turning point'.",
          styleContext:
            "Expressive communicators build loyalty through personal acknowledgement. A generic thank-you is worse than no thank-you at all.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email reads as corporate, generic, or overly formal. Nina specifically asked you to make it human, not polished. If it could have been written about any workshop, it misses the mark.",
          observation:
            "If your email opens with 'Further to today's workshop, please find below a summary of actions', you have written exactly what Nina told you not to write.",
          coachingTip:
            "Read your email aloud. Does it sound like something you would say to a friend after a great day? If not, rewrite it. Expressive communicators want authenticity, not professionalism.",
          styleContext:
            "Expressive communicators see corporate language as a barrier to connection. They would rather an email felt slightly informal than perfectly polished but cold.",
        },
      },
    },
  },

  // Scenario 173 - Priya Sharma, sales, intermediate
  {
    id: "scenario-173",
    title: "The Cross-Sell Conversation",
    context:
      "You are in a meeting with an existing client who is happy with your current service. Priya is leading the conversation and is looking for an opportunity to introduce a new product line that could add value.",
    chooseContext:
      "The client has mentioned a challenge they are facing with employee engagement. Priya sees an opening to connect it to your new learning platform offering and is building the bridge between their problem and your solution.",
    rewriteContext:
      "Priya has asked you to send a follow-up email that captures the excitement of the conversation and positions the new platform as a natural next step, not a hard sell.",
    characterId: "priya-sharma",
    dialogue:
      "You know what I love about working with you? We keep uncovering new ways to help. And what you just said about engagement, that is exactly why we built this new platform. Imagine your managers opening an app in the morning and knowing exactly where their team stands. It is not about more data; it is about giving people a reason to care. I am so excited to show you what this could look like for your organisation.",
    chooseDialogue:
      "Think about it this way. Your managers are already telling you engagement is dropping. What if, instead of another survey, you gave them a tool that starts conversations? Picture a Monday morning team check-in that takes two minutes and gives everyone a voice. That is what this platform does. It turns data into dialogue.",
    rewriteDialogue:
      "Send them a follow-up while the energy is high. Do not make it a product pitch. Make it about the conversation we had and the problem they shared. Then paint a picture of what their Monday mornings could look like with this tool in place. Keep it exciting, keep it real.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Priya has connected a client's engagement challenge to your new platform by painting a vision of what it could look like in practice. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with enthusiasm ('I love working with you'), paints a vivid picture ('imagine your managers opening an app'), and frames the product emotionally ('giving people a reason to care'). This is expressive selling at its best.",
          observation:
            "Priya does not list features or present data. She tells a story about what the client's world could look like. Expressive communicators sell by making the future tangible and exciting.",
          coachingTip:
            "When someone sells by creating a vision rather than presenting a specification, they are using an expressive approach. Support it by adding specific proof points that ground the vision in reality.",
          styleContext:
            "Expressive communicators believe that people buy outcomes they can see in their minds. The product is secondary to the transformation it enables.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Priya does show genuine care for the client, which can feel supportive. But notice that her care is expressed through excitement and vision, not through reassurance and checking in. She is energising, not comforting.",
          observation:
            "A supportive communicator would ask how the engagement issue is affecting the team emotionally. Priya skips straight to the solution and paints an inspiring picture.",
          coachingTip:
            "If someone responds to a problem by painting a vision of a better future, they are expressive. If they respond by acknowledging the difficulty and offering steady support, they are supportive.",
          styleContext:
            "Expressive communicators show they care by getting excited about solving the problem. Supportive communicators show they care by sitting with the person in the problem.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented pricing, ROI data, or a structured comparison of options. Nor has she set a rigid agenda for the conversation. The approach is story-driven and emotionally led.",
          observation:
            "There are no spreadsheets, no feature lists, and no formal proposal structure. Priya is selling a feeling, not a specification.",
          coachingTip:
            "Ask yourself: is this person selling with data or with a story? Priya is telling a story about better Monday mornings. That is an expressive sales style.",
          styleContext:
            "Expressive communicators in sales know that excitement is contagious. If they can get the client to feel what the product could do, the logical justification becomes easier later.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has described the platform as a tool that turns data into dialogue. The client looks interested but wants to know more. How do you build on Priya's energy?",
      options: [
        {
          id: "s173-opt-a",
          text: "I can picture this working brilliantly with your team. What if we set up a short pilot with one of your regions? Two weeks, real teams, real feedback. You would see within days whether this shifts the conversation. We could have you up and running by mid-April.",
          score: 10,
          result: "strong",
          explanation:
            "You maintain Priya's enthusiasm, make the next step tangible and low-risk, and give a specific timeline. You are selling the experience, not the contract.",
        },
        {
          id: "s173-opt-b",
          text: "I can send over a product overview and some case studies. That way you can review the features and see how other organisations have used it. We could schedule a proper demo for next week.",
          score: 5,
          result: "partial",
          explanation:
            "This is a sensible next step, but it shifts the energy from the conversation to a document. Priya built momentum; you have slowed it down by introducing process.",
        },
        {
          id: "s173-opt-c",
          text: "Let me pull up the pricing tiers so you can see where this fits in your budget. We have three packages and I can walk you through the feature comparison now if you have time.",
          score: 0,
          result: "weak",
          explanation:
            "Priya deliberately avoided a product pitch. Jumping to pricing and feature comparisons kills the emotional momentum and turns a conversation into a transaction.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a follow-up email that captures the energy of the conversation and positions the platform as a natural next step. Write it in an expressive style, focusing on the client's challenge, not the product.",
      targetTraits: ["conversational-tone", "vision-painting", "client-problem-led", "excitement"],
      exampleStrongResponse:
        "Subject: Monday Mornings Could Look Very Different\n\nHi Claire,\n\nI have been thinking about what you shared today about the engagement challenge, and honestly, it stayed with me after the call. The fact that your managers are already asking for better tools tells me the appetite is there.\n\nHere is what I keep picturing: your regional leads opening a quick check-in on a Monday morning, seeing exactly where their people are, and having a real conversation about it before the week even gets going. No surveys, no quarterly reports. Just a simple, human moment that makes people feel heard.\n\nI would love to show you what this could look like in practice. We could set up a short pilot with one region, real teams, real results, and you would know within two weeks whether this shifts the dial.\n\nShall I put something together?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with the client's challenge, paints a vivid picture of the solution in action, and proposes a low-risk next step. It reads like a genuine conversation, not a sales pitch.",
          observation:
            "You have captured Priya's style perfectly: personal, enthusiastic, and vision-led. The email makes the reader want to say yes.",
          coachingTip:
            "When writing follow-ups for expressive communicators, start with the client's words, not your product. Reference what they said, show you listened, and then connect it to a future they can see.",
          styleContext:
            "Expressive communicators build sales relationships through shared excitement. The follow-up email should feel like a continuation of a great conversation, not the start of a formal process.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email is on the right track but may lean too heavily on product features or lack the personal, conversational warmth Priya asked for.",
          observation:
            "If your email lists what the platform does rather than what the client's world could look like, it has shifted from storytelling to selling.",
          coachingTip:
            "Read your email back. Does it sound like something you would say in a conversation, or something you would paste from a template? Priya wants the former.",
          styleContext:
            "Expressive communicators believe authenticity sells. A follow-up that feels personal will always outperform one that feels polished.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email reads as a formal product pitch, a generic follow-up, or both. Priya specifically asked you not to make it a product pitch. If it leads with features, pricing, or attachments, it misses the brief.",
          observation:
            "If your email could be sent to any client after any meeting, it is not personal enough. Priya wants this client to feel special.",
          coachingTip:
            "Delete everything in your email that could apply to a different client. What remains is the personal content. Build the email around that.",
          styleContext:
            "Expressive communicators see generic follow-ups as missed opportunities. Every email is a chance to deepen the relationship, and a template wastes it.",
        },
      },
    },
  },

  // Scenario 174 - Marcus Webb, email, advanced
  {
    id: "scenario-174",
    title: "The Budget Approval Request",
    context:
      "Marcus needs to secure budget approval from his CFO for a new innovation project. He is composing an email that needs to excite the reader while still being persuasive enough to unlock funding.",
    chooseContext:
      "The CFO has replied to Marcus's initial email asking for more detail on expected outcomes. Marcus is crafting his response and wants to balance vision with enough substance to close the deal.",
    rewriteContext:
      "Marcus has asked you to help him write the final version of the budget request email, blending his signature enthusiasm with the concrete details the CFO needs to approve the spend.",
    characterId: "marcus-webb",
    dialogue:
      "I know the CFO wants numbers, and I will give her numbers. But if I just send a spreadsheet, she will see cost. I need her to see opportunity. The opening paragraph has to make her lean forward. Then the numbers back it up. If I lead with the budget, the answer is no before she finishes reading. If I lead with the vision, she reads the budget differently.",
    chooseDialogue:
      "She wants to know what we get for the money. Fair enough. But I am not going to just list deliverables. I am going to describe what this team looks like in six months if we get the green light. A prototype in market, three client pilots running, and a pipeline of ideas that did not exist before. Then I give her the number.",
    rewriteDialogue:
      "Help me land the final version. The opening needs to feel like a conversation, not a proposal. Then we pivot to the specifics: what we are building, who it serves, and what it costs. But the last line has to be the one she remembers. Make her want to fund this.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus is planning a budget request email that leads with vision before presenting numbers, believing the CFO will read the budget differently if she is excited first. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is strategically sequencing emotion before data. He knows the CFO needs numbers, but he believes the story around the numbers is what unlocks the yes. This is an expressive communicator adapting to a data-driven audience without abandoning their natural style.",
          observation:
            "The phrase 'if I lead with the budget, the answer is no before she finishes reading' reveals Marcus's understanding of narrative sequencing. He is not ignoring data; he is framing it within a story.",
          coachingTip:
            "When someone treats email structure as a storytelling exercise, with a hook, a vision, and then the facts, they are operating expressively even in a formal context.",
          styleContext:
            "Expressive communicators at an advanced level know how to blend their style with what the audience needs. They do not abandon enthusiasm; they deploy it strategically.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting choice. Marcus does want to get to the point and secure a decision, which can feel direct. But notice that his strategy is emotional sequencing, not brevity. A direct communicator would lead with the ask and the number, not with a vision paragraph.",
          observation:
            "A direct communicator would say 'I need 50K for X, here is the return'. Marcus says 'let me make you want to fund this, and then I will tell you the number'. The approach is fundamentally different.",
          coachingTip:
            "If someone views an email as a persuasion arc with an emotional hook, they are expressive. If they view it as a decision prompt with supporting data, they are direct.",
          styleContext:
            "Expressive communicators believe in the power of narrative even in formal business contexts. They see every email as an opportunity to inspire, not just inform.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not building a detailed evidence base or asking for reassurance. He is deliberately crafting an emotional arc. The email structure he describes is story-first, data-second, which is the hallmark of expressive communication.",
          observation:
            "There is no detailed ROI model, no risk matrix, and no request for consensus. Marcus is selling a vision and backing it with just enough data to be credible.",
          coachingTip:
            "Ask yourself: is this person trying to prove the case or to sell the dream? Marcus is selling the dream. The proof is there, but it plays a supporting role.",
          styleContext:
            "Expressive communicators understand that decisions are often made emotionally and justified logically. They design their communications to work with that reality, not against it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The CFO has asked Marcus for more detail on expected outcomes. He wants to describe what the team looks like in six months rather than listing deliverables. How do you help him shape the response?",
      options: [
        {
          id: "s174-opt-a",
          text: "That works, Marcus. Paint the six-month picture first, then anchor it with three measurable milestones: prototype in market by month four, three pilot clients signed by month five, and a pipeline review at month six. The vision gets her excited; the milestones give her something to approve against.",
          score: 10,
          result: "strong",
          explanation:
            "You support Marcus's expressive approach while adding the structural anchors the CFO needs. Vision plus milestones is the perfect blend for this audience.",
        },
        {
          id: "s174-opt-b",
          text: "I think we should probably lead with the milestones this time. She has already read the vision. Now she wants to see the plan. We can add some colour, but the substance needs to come first.",
          score: 5,
          result: "partial",
          explanation:
            "Practical advice, but it overrides Marcus's instinct. He knows his CFO and has a strategy. A better approach is to help him integrate the data into his narrative, not replace the narrative with data.",
        },
        {
          id: "s174-opt-c",
          text: "Maybe we should set up a meeting instead. Emails can be misread, and I think Marcus would be more persuasive face to face where he can read the room and adjust.",
          score: 0,
          result: "weak",
          explanation:
            "This dodges the task entirely. Marcus has been asked to reply by email, and the CFO is expecting a response. Suggesting a meeting is avoidance, not strategy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants a budget request email that opens like a conversation, pivots to specifics, and closes with a memorable line. Write it in an expressive style that still satisfies a data-minded CFO.",
      targetTraits: ["vision-led-opening", "concrete-milestones", "memorable-close", "conversational-tone"],
      exampleStrongResponse:
        "Subject: The Innovation Bet That Pays for Itself\n\nHi Sarah,\n\nYou asked what this team looks like in six months. Here is what I see.\n\nBy September, we have a working prototype in market, three client pilots generating real feedback, and a pipeline of ideas that did not exist six months ago. We will have moved from 'what if' to 'what is next', and the organisation will have proof that investing in innovation is not a gamble but a growth strategy.\n\nHere is what it takes to get there:\n- Team of four, fully dedicated from April: 120K\n- Prototyping and pilot delivery costs: 35K\n- Total investment: 155K, with a projected first-year return of 280K based on pilot conversion rates from comparable programmes.\n\nThis is not a cost line. It is the starting point for our next revenue stream.\n\nI would love to walk you through the detail. Are you free Thursday?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email blends Marcus's visionary style with the concrete detail the CFO requires. The opening is human, the middle is structured, and the close is memorable. This is expressive communication at an advanced level.",
          observation:
            "You have balanced emotion and evidence perfectly. The CFO can feel the ambition and verify the numbers. That combination is what unlocks budget.",
          coachingTip:
            "When writing for expressive communicators who need to persuade analytical audiences, use the 'sandwich' approach: vision, evidence, memorable close. The evidence earns permission; the vision earns excitement.",
          styleContext:
            "Expressive communicators at their best know that enthusiasm alone does not unlock budgets. The skill is in making the data feel like part of the story, not an interruption to it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email captures some of Marcus's energy but may lack either the concrete figures the CFO needs or the memorable closing line Marcus asked for. Check that both the vision and the substance are present.",
          observation:
            "If your email is all vision and no numbers, the CFO cannot approve it. If it is all numbers and no vision, Marcus would not send it. Both halves matter.",
          coachingTip:
            "Test your email against two questions: would Marcus be excited to send this, and would the CFO have enough information to approve it? If either answer is no, revise.",
          styleContext:
            "Expressive communicators need their emails to feel like them. If the data drowns the personality, they will not feel ownership of the message.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too dry and formal (missing Marcus's voice entirely) or too visionary with no substance (giving the CFO nothing to approve). Marcus asked for both halves.",
          observation:
            "If your email reads like a finance memo, Marcus would not send it. If it reads like a motivational speech, the CFO would not fund it. The challenge is the blend.",
          coachingTip:
            "Write the email in Marcus's voice first, full of energy and vision. Then go back and add one specific number or milestone to each paragraph. That grounds the enthusiasm in reality.",
          styleContext:
            "Expressive communicators lose credibility when their enthusiasm is not backed by substance. The best expressive emails make the reader feel something and know something at the same time.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (175-177)
  // ============================================

  // Scenario 175 - Tom Brennan, email, foundation
  {
    id: "scenario-175",
    title: "The New Team Member Introduction",
    context:
      "A new team member is joining your client account. Tom is drafting an introductory email to the client, wanting to set the right tone and make both the new colleague and the client feel comfortable with the transition.",
    chooseContext:
      "Tom has noticed that the client seemed slightly anxious in their last call about the team change. He wants to address their concerns in the introduction email without making it sound like there is a problem.",
    rewriteContext:
      "Tom has asked you to write the introduction email, making the new team member feel welcomed and the client feel reassured that the quality of service will not change.",
    characterId: "tom-brennan",
    dialogue:
      "I want this email to feel warm, not just informative. The client has built a relationship with our current team, and any change can feel unsettling. So let us introduce Amira properly, share a bit about her background, and make it clear that the handover will be smooth. I do not want the client to feel like they are being passed along. I want them to feel like they are gaining someone brilliant.",
    chooseDialogue:
      "I picked up some hesitation in their voice last call. They did not say it outright, but I think they are worried about losing continuity. We should acknowledge that without making it a big thing. Something like, 'We know relationships matter to you, and that is exactly why we have chosen Amira.'",
    rewriteDialogue:
      "Write the email from both of us, me and Amira. I will introduce her and explain the transition. Then Amira adds a personal note at the end. The client should finish reading it and feel good, not worried. Reassurance first, logistics second.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom wants the introduction email to feel warm, reassure the client about continuity, and position the new team member as a gain, not a disruption. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom is focused on the emotional impact of the change. He is thinking about how the client feels, not just what they need to know. The priority is reassurance and relationship continuity, which is classic supportive communication.",
          observation:
            "Tom's phrase 'I do not want the client to feel like they are being passed along' reveals his core concern: emotional continuity, not just service continuity.",
          coachingTip:
            "When someone prioritises how a message will make the recipient feel over what information it conveys, they are communicating in a supportive style.",
          styleContext:
            "Supportive communicators believe that transitions succeed when the people involved feel cared for. The logistics matter, but the relationship matters more.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Tom is warm and enthusiastic about Amira, which can look expressive. But notice that his warmth is rooted in reassurance, not excitement. He is calming, not energising.",
          observation:
            "An expressive communicator would focus on how exciting it is to have Amira join. Tom focuses on how the client will feel about the change. The emotional target is different.",
          coachingTip:
            "Expressive warmth generates excitement. Supportive warmth generates comfort. Tom is aiming for comfort.",
          styleContext:
            "Supportive communicators approach change by acknowledging what might be lost before celebrating what is gained. They lead with reassurance.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not focused on efficiency, data, or structure. He has not said 'just tell them who Amira is and move on'. His entire approach is about the emotional experience of the reader.",
          observation:
            "There is no urgency, no demand for brevity, and no focus on outcomes. Tom is thinking about how a human being will feel when they read this email.",
          coachingTip:
            "If someone spends more time thinking about the reader's emotional response than the information being conveyed, they are using a supportive style.",
          styleContext:
            "Supportive communicators treat every email as a touchpoint in a relationship. They ask: will this make the reader feel valued, or will it feel transactional?",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has noticed the client is anxious about the team change and wants to address it subtly in the email. How do you suggest framing it?",
      options: [
        {
          id: "s175-opt-a",
          text: "How about we include a line like: 'We know how important consistency is to you, and that is exactly why we have chosen Amira. She has spent the last two weeks getting to know your account inside out, and I will be alongside her for the first month to make sure the transition is seamless.' It acknowledges the concern without labelling it.",
          score: 10,
          result: "strong",
          explanation:
            "You address the anxiety without naming it directly, offer a concrete reassurance (Amira has prepared, Tom will overlap), and signal that the client's feelings have been noticed and respected.",
        },
        {
          id: "s175-opt-b",
          text: "We could add a section about Amira's qualifications and experience to show the client she is more than capable. If they see her track record, they will feel confident in the change.",
          score: 5,
          result: "partial",
          explanation:
            "Credentials help, but they address competence, not continuity. The client is not worried about whether Amira is skilled; they are worried about losing a relationship. Tom wants to address the emotional concern.",
        },
        {
          id: "s175-opt-c",
          text: "I would not overthink it. Team changes happen all the time. Just introduce Amira and move on. If we draw attention to the transition, the client might worry more, not less.",
          score: 0,
          result: "weak",
          explanation:
            "Tom has already identified that the client is anxious. Ignoring it does not make it go away. Supportive communicators address concerns with care; dismissing them undermines the relationship.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants an introduction email that reassures the client and makes them feel good about the team change. Write it in a supportive style, with reassurance before logistics.",
      targetTraits: ["warm-opening", "reassurance-first", "personal-touch", "smooth-transition"],
      exampleStrongResponse:
        "Subject: Introducing Amira to Your Account Team\n\nHi Claire,\n\nI wanted to personally introduce you to Amira Hassan, who will be joining your account team from next Monday.\n\nWe know how important it is to you to work with people who understand your business and care about getting things right. That is exactly why we have chosen Amira. She has spent the last two weeks getting to know your account in detail, and I will be working alongside her for the first month to make sure the transition is completely smooth.\n\nAmira comes from a customer success background and is brilliant at building strong, lasting relationships. I think you will really enjoy working with her.\n\nAmira adds: Hi Claire, I am really looking forward to getting started. Tom has told me a lot about your team, and I am excited to continue the great work. Please do not hesitate to reach out if there is anything you would like to discuss before I officially start.\n\nWe are both here for you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with warmth, addresses the unspoken concern about continuity, and gives the client a personal connection to Amira before she even starts. This is exactly the tone Tom wanted.",
          observation:
            "The dual-voice format (Tom introducing, Amira adding a personal note) makes the email feel collaborative and human. The client finishes reading and feels cared for.",
          coachingTip:
            "When writing introductions for supportive communicators, put the relationship at the centre. The client should feel that the change was made with them in mind, not despite them.",
          styleContext:
            "Supportive communicators measure the success of a transition email by how the reader feels after reading it. Information is secondary to emotional impact.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email is informative but may lack the personal warmth or reassurance Tom asked for. Check that you have acknowledged the client's likely concerns and positioned the change positively.",
          observation:
            "If your email reads like an HR announcement rather than a personal message, it needs more warmth. Tom wants the client to feel valued, not processed.",
          coachingTip:
            "Add a sentence that shows you understand what the client might be feeling. Even something simple like 'we know change can feel unsettling' makes a difference.",
          styleContext:
            "Supportive communicators believe that naming an emotion, even gently, helps people feel understood. Ignoring it does not make it go away.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too brief, or lacks any acknowledgement of the client's perspective. Tom asked for warmth and reassurance; a factual announcement does not deliver either.",
          observation:
            "If your email simply states 'Amira will be taking over your account from Monday', it treats the client as a line item, not a person. Tom would not send this.",
          coachingTip:
            "Before sending, ask: would I feel good receiving this email? If the answer is 'it is fine', that is not good enough for a supportive communicator. They want the reader to feel genuinely cared for.",
          styleContext:
            "Supportive communicators invest time in emails that others would dash off. They see every communication as an opportunity to strengthen a relationship, and they will not waste it.",
        },
      },
    },
  },

  // Scenario 176 - Leah Morgan, client, intermediate
  {
    id: "scenario-176",
    title: "The Service Failure Recovery",
    context:
      "A service failure has affected one of your key clients. Leah is the HR Business Partner on the client side and is understandably concerned about the impact on her people. You are meeting her to discuss what happened and how you will make it right.",
    chooseContext:
      "Leah has explained that the service failure caused confusion among her managers, who were relying on your platform for a critical deadline. She is not angry, but she needs to know her people will be looked after.",
    rewriteContext:
      "Leah has asked you to send a message to her management team acknowledging the issue and reassuring them that it has been resolved, in a tone that feels honest and caring, not corporate.",
    characterId: "leah-morgan",
    dialogue:
      "I am not going to pretend I am not disappointed. My managers were relying on that system for their quarterly reviews, and when it went down, they felt let down. They are good people who were trying to do the right thing, and the tool they trusted was not there for them. I need to know this will not happen again, and I need to be able to tell them that with confidence.",
    chooseDialogue:
      "I appreciate you being honest about what happened. What matters to me now is how we support the managers who were affected. Some of them lost work, and they are feeling frustrated. I need a plan that puts them first, not the system.",
    rewriteDialogue:
      "I would like you to send my managers a short message acknowledging what happened. Do not hide behind technical language. Just be honest, say you are sorry, and tell them it is fixed. And let them know that if they lost any work, someone will help them recover it personally. That matters more than any system update.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has expressed disappointment about a service failure by focusing on how it affected her managers personally, describing them as good people who were let down. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah frames the entire issue in human terms. She is not talking about SLA breaches or system uptime. She is talking about people who felt let down. Her concern is emotional impact, not operational metrics. This is supportive communication in a moment of service failure.",
          observation:
            "The phrase 'good people who were trying to do the right thing' tells you everything about Leah's priorities. She sees her role as protecting her team's dignity and morale.",
          coachingTip:
            "When a client discusses a service failure by focusing on how people felt rather than what the system did, they are communicating supportively. Respond to the feeling first, then the fix.",
          styleContext:
            "Supportive communicators in service recovery situations need to hear that you understand the human cost of the failure. Fixing the system is necessary but not sufficient.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does show emotion, which can seem expressive. But notice that her emotion is concern for others, not personal frustration or energetic storytelling. She is advocating for her team, not expressing herself.",
          observation:
            "An expressive communicator might say 'I am furious about this!' Leah says 'my managers felt let down'. The emotional focus is outward, not inward.",
          coachingTip:
            "If someone expresses emotion on behalf of others and focuses on their wellbeing, that is supportive. If they express emotion about their own experience, that may be expressive.",
          styleContext:
            "Supportive communicators channel their feelings through concern for others. Their disappointment is real, but it is expressed as advocacy, not as personal frustration.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not asked for data on uptime, a root cause analysis, or a structured remediation plan. She is asking for emotional reassurance and a human response.",
          observation:
            "There are no metrics, no demands for technical detail, and no urgency about timelines. Leah wants to know her people will be looked after.",
          coachingTip:
            "When a client's primary concern after a service failure is how their team feels, not what the data says, they are communicating supportively. Lead with empathy.",
          styleContext:
            "Supportive communicators evaluate service recovery by how it makes people feel, not by how quickly the system is restored. The relationship recovery matters as much as the technical recovery.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants a plan that puts her managers first, not the system. She needs to know the affected people will be supported. How do you respond?",
      options: [
        {
          id: "s176-opt-a",
          text: "I completely understand, and your managers deserve better than what happened. Here is what I would like to do: I will assign a dedicated person to contact each affected manager individually, help them recover any lost work, and make sure they feel supported. I will also send them a personal message from our team acknowledging what happened. No one should feel like they are dealing with this alone.",
          score: 10,
          result: "strong",
          explanation:
            "You lead with empathy, offer individual support for each affected person, and commit to a personal message. This puts people at the centre of the recovery, which is exactly what Leah needs.",
        },
        {
          id: "s176-opt-b",
          text: "We have already fixed the underlying issue, and I can share the incident report with you so you can see what went wrong and what we have done to prevent it happening again. The system has been stable since yesterday.",
          score: 5,
          result: "partial",
          explanation:
            "Good that the fix is in place, but Leah asked about her people, not the system. Leading with the technical resolution before addressing the human impact misses her emotional priority.",
        },
        {
          id: "s176-opt-c",
          text: "These things happen in any technology platform. We have a 99.7% uptime record, and this was an isolated incident. I would not want your managers to lose confidence in the system based on one event.",
          score: 0,
          result: "weak",
          explanation:
            "Leah is talking about people and you are quoting uptime statistics. Dismissing her concern with data feels defensive and tone-deaf. A supportive client needs human acknowledgement, not a performance metric.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants you to send her managers an honest, caring message acknowledging the service failure and offering personal support to recover lost work. Write it in a supportive style.",
      targetTraits: ["honest-acknowledgement", "no-jargon", "personal-support-offer", "warm-tone"],
      exampleStrongResponse:
        "Subject: An Apology and Our Commitment to You\n\nHi everyone,\n\nI want to reach out personally to acknowledge the system issue that affected your quarterly review process last week. I know many of you were relying on the platform at a critical time, and it was not there for you. That is on us, and I am sorry.\n\nThe issue has been fully resolved, and we have put safeguards in place to prevent it from happening again. But more importantly, if you lost any work as a result, I want to make sure you get the support you need to recover it. A member of our team will be reaching out to each of you individually over the next two days to check in and help with anything that was affected.\n\nYou should not have to deal with this on your own. Please do not hesitate to contact me directly if there is anything I can do.\n\nThank you for your patience, and again, I am sorry for the disruption.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is honest, warm, and puts the individual at the centre. You have acknowledged the failure without hiding behind technical language and offered personal, proactive support. Leah would be confident sharing this with her team.",
          observation:
            "The offer to reach out individually is exactly the kind of detail that reassures a supportive communicator. It signals that every person matters, not just the system.",
          coachingTip:
            "When writing recovery messages for supportive audiences, the apology is the starting point, not the ending point. What matters is the personal commitment to making things right for each individual.",
          styleContext:
            "Supportive communicators judge service recovery by how cared-for the affected people feel. A sincere, personal response builds more trust than a flawless technical fix.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message acknowledges the issue but may lean too heavily on the technical fix or use corporate language that feels impersonal. Leah asked for honesty and warmth, not a polished incident report.",
          observation:
            "If your message says 'the incident has been resolved and steps have been taken to prevent recurrence' without acknowledging how people felt, it is too clinical.",
          coachingTip:
            "Read your message from the perspective of a manager who lost two hours of work. Do they feel understood and supported, or do they feel like they received a system notification?",
          styleContext:
            "Supportive communicators want recovery messages to feel human. The technical fix should be mentioned, but it should not dominate the message.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too corporate, too defensive, or fails to offer the personal support Leah specifically requested. If it reads like an automated incident notification, it misses the brief entirely.",
          observation:
            "If your message opens with 'We are pleased to confirm that the issue has been resolved', you have prioritised the system over the people. Leah would not send this.",
          coachingTip:
            "Start with the human impact, not the technical resolution. Say sorry before you say fixed. Offer help before you offer reassurance. People first, always.",
          styleContext:
            "Supportive communicators see corporate apologies as worse than no apology at all. They need the message to feel genuine, personal, and human.",
        },
      },
    },
  },

  // Scenario 177 - David Chen, sales, advanced
  {
    id: "scenario-177",
    title: "The Renewal Conversation with an At-Risk Account",
    context:
      "A key account is approaching renewal, but recent feedback suggests the client is considering alternatives. David is leading the renewal strategy and wants to approach the conversation with care, focusing on the relationship rather than the contract.",
    chooseContext:
      "David has learned that the client's main concern is not price but a feeling that they have been taken for granted. He wants to address this head-on in the renewal meeting without being defensive.",
    rewriteContext:
      "David has asked you to draft a pre-meeting email to the client that acknowledges the relationship honestly and sets the tone for a constructive renewal conversation.",
    characterId: "david-chen",
    dialogue:
      "This is not a pricing problem. They feel like we stopped listening. When I spoke to their Head of Ops last week, she said, 'You used to feel like a partner. Now you feel like a supplier.' That tells me everything. We need to go into this renewal meeting and show them we heard that. Not with a new proposal, but with honesty about where we fell short and a clear commitment to doing better.",
    chooseDialogue:
      "She told me they feel taken for granted. That is hard to hear, but it is fair. I do not want to go in and pitch. I want to go in and listen. If we spend the first twenty minutes understanding what changed for them, the renewal conversation becomes much more natural. People renew with people they trust, not with people who offer discounts.",
    rewriteDialogue:
      "Send the client an email before the meeting. Not a sales email, a relationship email. Acknowledge that we have heard their feedback, that we take it seriously, and that the meeting is about listening, not pitching. If they walk in expecting a hard sell and get genuine honesty instead, we have a chance.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David has identified that a client at risk of leaving feels taken for granted, and wants to lead the renewal meeting with honesty and listening rather than a new proposal. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David has diagnosed the problem as relational, not commercial. His strategy is to listen, acknowledge where the team fell short, and rebuild trust through honesty. This is supportive communication at an advanced level, prioritising the relationship over the transaction.",
          observation:
            "David's quote of the client saying 'You used to feel like a partner. Now you feel like a supplier' shows he is attuned to the emotional dimension of the relationship. He heard the feeling behind the words.",
          coachingTip:
            "When someone approaches a renewal by focusing on what the client feels rather than what the client needs, they are operating supportively. The strategy is trust repair, not value demonstration.",
          styleContext:
            "Supportive communicators believe that renewals are won or lost on the quality of the relationship. Price and features matter, but they matter less than whether the client feels valued.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting. David does show passion about the relationship, which can feel expressive. But notice that his energy is directed toward listening and acknowledging, not toward excitement or vision. He is not selling a new future; he is repairing a present hurt.",
          observation:
            "An expressive communicator would go in with a bold new vision for the partnership. David wants to go in with humility and genuine listening. The approach is fundamentally different.",
          coachingTip:
            "If someone's renewal strategy is to listen before they speak and acknowledge before they propose, they are supportive. If the strategy is to inspire with a new vision, that is expressive.",
          styleContext:
            "Supportive communicators in sales situations know that trust is rebuilt through vulnerability, not through persuasion. Admitting where you fell short is more powerful than promising you will be better.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not focused on pricing models, competitive positioning, or contract terms. His entire strategy is relational. He believes the client will renew if they feel valued, not if they receive a better offer.",
          observation:
            "There is no mention of discounts, added features, or market comparison. David is solving a relationship problem, not a commercial one.",
          coachingTip:
            "When someone says 'people renew with people they trust, not with people who offer discounts', they are telling you their communication priority. Trust and relationship sit firmly in the supportive style.",
          styleContext:
            "Supportive communicators approach at-risk accounts by rebuilding the human connection. They know that once trust is restored, the commercial conversation becomes straightforward.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David wants to spend the first twenty minutes of the renewal meeting listening, not pitching. The client has said they feel taken for granted. How do you open the meeting?",
      options: [
        {
          id: "s177-opt-a",
          text: "Thank you for making the time to meet. Before we talk about anything else, I want to say that we have heard your feedback, and it matters to us. You told us the partnership does not feel the way it used to, and we take that seriously. I would like to start by understanding what changed from your side, because getting this right matters more to us than any contract.",
          score: 10,
          result: "strong",
          explanation:
            "You open with honesty, acknowledge the client's feedback without being defensive, and prioritise understanding over selling. David would see this as exactly the right tone for rebuilding trust.",
        },
        {
          id: "s177-opt-b",
          text: "We value your partnership and want to make sure the renewal works for both sides. We have put together some options that address the areas we think could be improved, and I would love to walk you through them.",
          score: 5,
          result: "partial",
          explanation:
            "Polite and professional, but it skips the listening step David emphasised. You have gone straight to presenting options when the client needs to feel heard first.",
        },
        {
          id: "s177-opt-c",
          text: "I know there have been some concerns, but I want to reassure you that we have already made significant changes on our side. Let me show you what we have done over the last quarter to improve the service, and I think you will see we are on the right track.",
          score: 0,
          result: "weak",
          explanation:
            "You have told the client what you have done without first listening to what they experienced. David specifically said the first twenty minutes should be about understanding, not demonstrating. This feels defensive and self-serving.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants a pre-meeting email that acknowledges the client's feedback honestly and positions the meeting as an opportunity to listen, not to pitch. Write it in a supportive style.",
      targetTraits: ["honest-acknowledgement", "listening-commitment", "relationship-focused", "non-defensive"],
      exampleStrongResponse:
        "Subject: Ahead of Thursday, a Few Honest Words\n\nHi Rebecca,\n\nI wanted to drop you a note ahead of our meeting on Thursday. I have been reflecting on the feedback your team shared, and I want you to know that it landed. The idea that we have gone from feeling like a partner to feeling like a supplier is not something I take lightly.\n\nI am not writing to sell you on a renewal. I am writing because your experience of working with us matters, and somewhere along the way, we stopped showing that clearly enough.\n\nOn Thursday, I would like to start by listening. I want to understand what changed from your perspective and what working with us should feel like going forward. This is not a pitch meeting. It is a conversation about whether we can be the partner you need us to be.\n\nI appreciate your openness, and I am looking forward to a genuine conversation.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is honest, non-defensive, and puts the relationship at the centre. The client reads this and knows they are walking into a meeting with someone who has genuinely listened. David would send this without hesitation.",
          observation:
            "The line about not writing to sell on a renewal is powerful. It breaks the expected pattern and signals authenticity, which is exactly what a disillusioned client needs to see.",
          coachingTip:
            "When writing pre-meeting emails for supportive communicators dealing with at-risk accounts, the most important thing you can convey is that you have heard the feedback and taken it to heart. Everything else follows from that.",
          styleContext:
            "Supportive communicators in renewal situations know that the email before the meeting sets the emotional tone for the conversation. If the client walks in feeling heard, the meeting is already half won.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email acknowledges the situation but may lack the personal vulnerability or the explicit commitment to listen that David requested. Check that your email could not be mistaken for a standard account management follow-up.",
          observation:
            "If your email says 'we are committed to continuous improvement' instead of 'we stopped showing you that we care', it is too polished. David wants honesty, not polish.",
          coachingTip:
            "Supportive emails in sensitive situations need to feel slightly uncomfortable. If the writer is not being at least a little vulnerable, the reader will not believe it is genuine.",
          styleContext:
            "Supportive communicators build trust through vulnerability. A perfectly polished email can feel insincere in a moment that calls for honesty.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too commercial, too defensive, or too generic to serve the purpose David described. If it reads like a renewal reminder or a service improvement report, it misses the point entirely.",
          observation:
            "If your email includes phrases like 'I am confident you will see the improvements we have made', you are still pitching. David asked you to stop pitching and start listening.",
          coachingTip:
            "Write the email as though the contract does not exist. What would you say to someone you care about who told you the relationship has changed? Start there, and the right tone will follow.",
          styleContext:
            "Supportive communicators know that at-risk clients can smell a sales tactic from a mile away. The only thing that works is genuine human honesty.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (178-180)
  // ============================================

  // Scenario 178 - Rachel Finch, email, foundation
  {
    id: "scenario-178",
    title: "The Meeting Actions Summary",
    context:
      "A cross-functional project meeting has just concluded. Rachel has been tasked with sending the follow-up email summarising the agreed actions, owners, and deadlines. She treats this as a precision exercise.",
    chooseContext:
      "A colleague has sent their own version of the meeting summary, but Rachel has spotted several inaccuracies in the action descriptions and missing deadlines. She wants to correct the record without causing friction.",
    rewriteContext:
      "Rachel has asked you to redraft the meeting actions email with correct details, clear ownership, and specific deadlines for every action item.",
    characterId: "rachel-finch",
    dialogue:
      "I will send the summary. But I am not just going to list what people said they would do. I am going to cross-reference it with the project plan to make sure the actions actually align with the milestones. If someone committed to something that contradicts the agreed timeline, I will flag it. A meeting summary is only useful if it is accurate.",
    chooseDialogue:
      "I have seen James's version. Three of the actions are described incorrectly, and two have no deadline at all. I am not going to send a correction email that calls him out. I will send a 'revised version for the record' that happens to be right. But I need the details to be exact.",
    rewriteDialogue:
      "Redraft the summary. Every action needs an owner, a deadline, and a one-line description of the specific deliverable. No ambiguity. If someone said 'I will look into it', that is not an action. Convert it into something measurable or flag it as unresolved.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel is cross-referencing meeting actions against the project plan, flagging contradictions, and insisting that every action has a specific deliverable and deadline. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel is not just summarising; she is verifying. She cross-references, checks for contradictions, and refuses to accept vague commitments as actions. This level of rigour and accuracy focus is a hallmark of analytical communication.",
          observation:
            "The phrase 'a meeting summary is only useful if it is accurate' reveals Rachel's core belief. For her, an inaccurate summary is worse than no summary at all.",
          coachingTip:
            "When someone treats a routine email as a quality assurance exercise, verifying details against source documents, they are communicating analytically.",
          styleContext:
            "Analytical communicators view meeting summaries as accountability tools. Every imprecise action is a future misunderstanding waiting to happen.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel does want actions completed efficiently, which can feel direct. But notice she is not demanding speed. She is demanding accuracy. A direct communicator would list the actions and move on. Rachel verifies them against the project plan first.",
          observation:
            "A direct communicator trusts that people will deliver what they said. An analytical communicator verifies that what people said matches what was agreed.",
          coachingTip:
            "If someone's priority is 'get it done', that is direct. If their priority is 'get it right', that is analytical. Rachel is firmly in the 'get it right' camp.",
          styleContext:
            "Analytical communicators invest upfront time in precision to avoid downstream corrections. They believe that accuracy now saves rework later.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on how the team feels about the actions, nor has she tried to energise the group about what was achieved. Her focus is entirely on the accuracy and completeness of the written record.",
          observation:
            "There is no celebration of progress, no relationship-building, and no creative reframing. Rachel is concerned with one thing: is this document correct?",
          coachingTip:
            "When someone's response to a meeting is to verify the notes against the plan rather than to reflect on the discussion, they are approaching communication analytically.",
          styleContext:
            "Analytical communicators believe that the quality of follow-up documentation reflects the quality of the meeting. Sloppy notes signal sloppy thinking.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has spotted errors in a colleague's meeting summary and wants to correct the record without causing friction. How do you suggest she handles it?",
      options: [
        {
          id: "s178-opt-a",
          text: "Send a 'final version for the project record' to the full group, with each action numbered, showing owner, deliverable, and deadline. Preface it with: 'I have cross-referenced the actions against the project plan and made a few clarifications. This version should serve as the definitive record.' It corrects the errors without naming them as errors.",
          score: 10,
          result: "strong",
          explanation:
            "You help Rachel correct the record diplomatically while maintaining her analytical standards. The 'definitive record' framing sets accuracy as the goal without criticising the earlier attempt.",
        },
        {
          id: "s178-opt-b",
          text: "Maybe just message James privately and let him know about the errors so he can send a correction himself. That way, the record gets fixed and nobody feels undermined.",
          score: 5,
          result: "partial",
          explanation:
            "Considerate, but Rachel cannot control the quality of James's correction. Her concern is that the record is exact, and relying on someone else to fix it introduces uncertainty she would rather avoid.",
        },
        {
          id: "s178-opt-c",
          text: "I would leave it. People will figure out the right actions as they go. Sending a second version will make things confusing, and James might feel embarrassed. It is not worth the hassle.",
          score: 0,
          result: "weak",
          explanation:
            "Rachel has identified factual errors in a document that will drive project work. Leaving them uncorrected is the opposite of what an analytical communicator would accept. Accuracy is not optional for her.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a meeting actions email where every item has an owner, a deadline, and a specific deliverable. Vague commitments should be flagged as unresolved. Write it in an analytical style.",
      targetTraits: ["numbered-actions", "specific-owners", "deadlines", "measurable-deliverables"],
      exampleStrongResponse:
        "Subject: Project Atlas, Meeting Actions (Revised and Final)\n\nBelow are the confirmed actions from today's meeting, cross-referenced against the project plan.\n\n1. Data migration scoping document: Owner: Sarah Patel. Deliverable: completed scoping document with data mapping. Deadline: 28 March.\n2. User acceptance testing plan: Owner: James Liu. Deliverable: test plan with acceptance criteria for all five modules. Deadline: 4 April.\n3. Vendor integration timeline: Owner: Chris Hartley. Deliverable: confirmed integration schedule with dependency map. Deadline: 31 March.\n4. Stakeholder communication plan: UNRESOLVED. Action discussed but no specific deliverable or owner agreed. To be resolved at next meeting (7 April).\n\nPlease confirm your actions by end of day Friday. If any deadlines conflict with existing commitments, flag them now so we can adjust the plan.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every action has a numbered entry, a named owner, a specific deliverable, and a deadline. You have also flagged the unresolved item clearly. Rachel would file this with confidence that the project record is accurate.",
          observation:
            "The 'unresolved' flag is a detail that distinguishes good summaries from great ones. Analytical communicators want to know what was not decided as well as what was.",
          coachingTip:
            "When writing for analytical communicators, do not skip the items that were left open. Flag them explicitly. An unresolved action is still an action; it just needs a different next step.",
          styleContext:
            "Analytical communicators value completeness as much as accuracy. A summary that only lists what was agreed, without noting what was not, gives a false sense of closure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary lists actions but may be missing specific deliverables, deadlines, or the unresolved item flag. Rachel needs each entry to be self-contained and unambiguous.",
          observation:
            "If an action says 'James to handle testing' without specifying what the deliverable is and when it is due, Rachel will send it back for revision.",
          coachingTip:
            "For each action, ask: could someone read this in three months and know exactly what was expected? If not, add the missing detail.",
          styleContext:
            "Analytical communicators write meeting summaries that serve as future reference documents. Vague language today creates disputes tomorrow.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too informal, lacks structure, or contains the kind of vague language Rachel specifically asked you to eliminate. 'Look into it' is not an action; it is a wish.",
          observation:
            "If your summary uses phrases like 'the team will work on the migration' without naming who, what, and when, it fails Rachel's basic standard.",
          coachingTip:
            "Convert every vague commitment into a specific one. 'Look into it' becomes 'produce a scoping document by 28 March'. If you cannot convert it, flag it as unresolved.",
          styleContext:
            "Analytical communicators see vague meeting summaries as a source of future conflict. Every undefined action is an argument waiting to happen.",
        },
      },
    },
  },

  // Scenario 179 - Owen Grant, sales, intermediate
  {
    id: "scenario-179",
    title: "The Pricing Objection",
    context:
      "A prospect has pushed back on your pricing during a sales call. Owen is the quality assurance lead on the client side and has been asked to evaluate your proposal. He is approaching the pricing conversation methodically, comparing your offering against alternatives.",
    chooseContext:
      "Owen has laid out a detailed comparison of your pricing against two competitors, highlighting where your costs are higher and asking you to justify the difference with evidence, not promises.",
    rewriteContext:
      "Owen has asked you to send a written pricing justification that maps each cost line to a specific deliverable, quality standard, or risk mitigation measure.",
    characterId: "owen-grant",
    dialogue:
      "I have been through your proposal line by line. Your total cost is 14% higher than Competitor A and 8% higher than Competitor B. I am not saying price is the only factor, but I need to understand what accounts for the premium. Walk me through each cost line and show me what quality standard or deliverable justifies the difference. I will not approve a spend I cannot explain to the board.",
    chooseDialogue:
      "You have told me your service is better quality, but I need evidence, not opinion. Show me your defect rate, your SLA compliance over the last twelve months, and any third-party audit results. If the data supports the premium, I will recommend you. If it does not, I will recommend the lower bidder. It is that straightforward.",
    rewriteDialogue:
      "Send me a written justification. Map every cost line to a deliverable or a quality measure. I want to see: what are we paying for, what standard is it delivered to, and how do you prove it? If a line item cannot be tied to a specific output, I will challenge it.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has compared your pricing against two competitors line by line and is asking you to justify the premium with evidence, not promises. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen has done a detailed cost comparison and is asking for evidence-based justification of each line item. He is not asking for the cheapest price; he is asking for the most defensible one. This is analytical evaluation at its core.",
          observation:
            "Owen's phrase 'I will not approve a spend I cannot explain to the board' is key. He is not making a personal judgement; he is building a case that will withstand scrutiny from others.",
          coachingTip:
            "When someone evaluates pricing by asking for evidence and auditability rather than simply demanding a discount, they are communicating analytically. Give them data, not reassurance.",
          styleContext:
            "Analytical communicators approach pricing decisions as evidence exercises. The question is never 'is it too expensive?' but rather 'can I justify the expense with data?'",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Owen is decisive and clear, which can feel direct. But notice he is not demanding a lower price or making a snap judgement. He is building a case through systematic comparison. A direct communicator would say 'reduce the price or we go elsewhere'. Owen says 'prove the premium or I will recommend someone else'.",
          observation:
            "A direct communicator uses pricing conversations to negotiate. An analytical communicator uses them to evaluate. Owen is evaluating.",
          coachingTip:
            "If someone compares your pricing line by line against competitors and asks for evidence, they are analytical. If they simply tell you the price is too high, they are direct.",
          styleContext:
            "Analytical communicators see pricing objections as information gaps, not negotiation tactics. They genuinely want to understand the value behind the number.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on the relationship, the team chemistry, or how excited he is about the project. His evaluation is purely evidence-based, and his decision criteria are transparent and methodical.",
          observation:
            "There is no emotional language, no concern about people, and no creative reframing. Owen is running a structured evaluation process.",
          coachingTip:
            "When someone approaches a pricing conversation with a spreadsheet and a comparison framework, they are analytical. Respond with data, structure, and evidence.",
          styleContext:
            "Analytical communicators in procurement situations want to make defensible decisions. They are not trying to get the cheapest deal; they are trying to make the right one.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen wants evidence of quality: defect rates, SLA compliance, and third-party audits. He says he will recommend you if the data supports the premium. How do you respond?",
      options: [
        {
          id: "s179-opt-a",
          text: "Absolutely. Our defect rate over the last twelve months is 0.3%, compared to an industry average of 1.2%. SLA compliance is 99.4% across all active contracts. I can also share our ISO 27001 audit report from November and two client references who can speak to quality outcomes. I will send the data pack by end of day tomorrow.",
          score: 10,
          result: "strong",
          explanation:
            "You respond with specific data points, industry benchmarks, and a commitment to provide verifiable evidence. Owen can take this directly to his board.",
        },
        {
          id: "s179-opt-b",
          text: "I am confident our quality speaks for itself. We have been in the market for fifteen years and our reputation is built on doing things right. I can arrange a call with a couple of our existing clients if that would help.",
          score: 5,
          result: "partial",
          explanation:
            "Client references are useful, but Owen asked for data, not testimonials. 'Quality speaks for itself' is an opinion, not evidence. He needs numbers he can put in a report.",
        },
        {
          id: "s179-opt-c",
          text: "I think comparing us on price alone misses the point. We bring a level of partnership and commitment that you will not get from a budget provider. You get what you pay for in this industry.",
          score: 0,
          result: "weak",
          explanation:
            "Owen explicitly said he is not comparing on price alone. He is asking you to prove the value. Responding with platitudes about partnership ignores his question and undermines your credibility.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a written pricing justification that maps each cost line to a deliverable, quality standard, or risk mitigation measure. Write it in an analytical style.",
      targetTraits: ["line-by-line-mapping", "evidence-based", "quality-standards", "verifiable-claims"],
      exampleStrongResponse:
        "Subject: Pricing Justification, Line-by-Line Breakdown\n\nHi Owen,\n\nAs requested, below is a breakdown mapping each cost line to a specific deliverable and quality standard.\n\n1. Project management (18K): Dedicated PM at 0.5 FTE. Deliverable: weekly status reports, risk register, and milestone tracking. Standard: PMI methodology, verified by quarterly internal audit.\n2. Development (45K): Four developers for 12 weeks. Deliverable: fully tested platform build to agreed specification. Standard: 0.3% defect rate target, ISO 27001 compliant environment.\n3. Quality assurance (12K): Independent QA resource throughout. Deliverable: test plan, regression suite, and UAT support. Standard: all critical defects resolved before release.\n4. Support and maintenance (10K annual): 12 months post-launch. Deliverable: SLA of 4-hour response for P1 issues. Standard: 99.4% SLA compliance track record over last 24 months.\n\nTotal: 85K (development) + 10K (annual support).\n\nI have attached our latest ISO audit certificate and a 12-month SLA compliance report for reference. Happy to discuss any line item in more detail.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every cost line is mapped to a deliverable and a quality standard, with supporting evidence attached. Owen can present this to his board without additional questions. This is exactly the rigour he asked for.",
          observation:
            "The combination of specific numbers, named standards, and attached evidence makes this a boardroom-ready document. Analytical communicators value this level of preparation.",
          coachingTip:
            "When writing for analytical buyers, treat every cost line as a claim that needs evidence. If you cannot back it up with data, either find the data or acknowledge the gap.",
          styleContext:
            "Analytical communicators approve spending they can defend. Your justification document is not just for Owen; it is the document he will use to defend his recommendation to others.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your justification lists costs but may lack the specific quality standards, evidence references, or deliverable descriptions Owen asked for. Each line needs to answer: what, to what standard, and how do you prove it?",
          observation:
            "If a cost line says 'development team' without specifying deliverables and quality measures, it is a budget line, not a justification. Owen needs the latter.",
          coachingTip:
            "For each line item, add three things: what is delivered, to what standard, and what evidence exists to verify the claim. Without all three, the justification is incomplete.",
          styleContext:
            "Analytical communicators distinguish between a price list and a value justification. One tells you what things cost; the other tells you why they are worth it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your justification is either too high-level, lacks supporting evidence, or reads like a sales pitch rather than a structured cost breakdown. Owen asked for line-by-line mapping, not a paragraph about value.",
          observation:
            "If your response says 'our pricing reflects the quality of our team and our track record', it is an assertion, not a justification. Owen needs specifics.",
          coachingTip:
            "Rewrite your response as though it will be attached to a board paper. Would a non-executive director reading it for the first time understand exactly what each pound is paying for?",
          styleContext:
            "Analytical communicators reject justifications that rely on reputation or relationship. Evidence is the currency. Without it, the premium is indefensible.",
        },
      },
    },
  },

  // Scenario 180 - Fiona Banks, client, advanced
  {
    id: "scenario-180",
    title: "The Strategic Account Planning Session",
    context:
      "You are in a strategic account planning session with a major client. Fiona is the Finance Director and has been asked to contribute to the discussion about the next twelve months of the partnership. She is approaching it with characteristic rigour.",
    chooseContext:
      "Fiona has challenged your proposed growth plan, asking you to demonstrate how each initiative maps to a measurable business outcome. She is not opposed to growth; she is opposed to growth without evidence.",
    rewriteContext:
      "Fiona has asked you to produce a twelve-month strategic account plan that ties every proposed initiative to a financial metric, risk assessment, and success criterion.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed your growth plan. Conceptually, it makes sense. But I cannot take a plan to my board that says 'expand the partnership' without quantifying what expansion means in financial terms. For every initiative you are proposing, I need to see the projected financial impact, the investment required, the risk, and the metric we will use to decide whether it worked. If you cannot measure it, I cannot fund it.",
    chooseDialogue:
      "You have proposed five initiatives. I want to rank them by projected ROI and implement them in order of financial return, not in order of what is easiest to deliver. Show me the numbers for each one. If the ROI on an initiative is negative or uncertain, it drops off the plan. I would rather do three things well than five things poorly.",
    rewriteDialogue:
      "Draft the account plan as a structured document. Each initiative gets one page: objective, investment, projected return, risk assessment, success metric, and review date. No narrative. No vision statements. Just a clear case for each pound we are asked to spend. If I can hand this to my board and they can approve it without asking questions, you have done your job.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has asked you to quantify every initiative in your growth plan with financial projections, risk assessments, and success metrics, stating that if you cannot measure it, she cannot fund it. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona is not rejecting growth; she is demanding rigour. Every initiative must be quantified, risk-assessed, and measurable. She approaches account planning as a financial exercise where evidence determines priority. This is analytical communication at an advanced level.",
          observation:
            "The phrase 'if you cannot measure it, I cannot fund it' is a defining statement of the analytical worldview. Fiona sees measurement as a prerequisite for investment, not an afterthought.",
          coachingTip:
            "When a client demands that every proposal be tied to a metric and a financial outcome, they are communicating analytically. Do not argue for initiatives on instinct; argue for them on evidence.",
          styleContext:
            "Analytical communicators at senior levels treat every proposal as a business case. The strength of the evidence determines the priority, not the enthusiasm of the presenter.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is decisive and clear, which can feel direct. But notice she is not making decisions on instinct or demanding speed. She is building a framework for evidence-based decision-making. A direct communicator would say 'pick the three that will deliver the most and do them'. Fiona says 'rank them by ROI and show me the numbers before we decide'.",
          observation:
            "A direct communicator trusts their judgement. An analytical communicator trusts the data. Fiona will not move until the data supports the decision.",
          coachingTip:
            "If someone wants to rank initiatives by projected ROI rather than by gut feel or ease of implementation, they are analytical. The data drives the decision, not the person.",
          styleContext:
            "Analytical communicators in finance roles apply investment logic to every decision. Each initiative is an investment, and every investment needs a projected return.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on team morale, creative possibilities, or relationship-building. She is evaluating your proposals through a purely financial and methodological lens.",
          observation:
            "There is no discussion of how the team feels about the plan, no excitement about the vision, and no concern about interpersonal dynamics. Fiona is here to assess the numbers.",
          coachingTip:
            "When a senior client responds to your growth plan by asking for projected ROI, risk assessments, and success metrics, they are telling you how they make decisions. Give them what they need.",
          styleContext:
            "Analytical communicators at board level need every proposal to be defensible under scrutiny. Their job is to explain where money goes and what it achieves. Your plan must help them do that.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona wants to rank your five proposed initiatives by projected ROI and only implement those with a positive return. How do you respond?",
      options: [
        {
          id: "s180-opt-a",
          text: "I agree with that approach. I have initial projections for each initiative. Ranked by ROI: initiative two returns an estimated 3.2x over twelve months, initiative four returns 2.7x, and initiative one returns 1.8x. Initiatives three and five have projected returns below 1x in the first year, so I would recommend either deferring them or treating them as exploratory pilots with capped investment. I can share the full modelling behind each figure.",
          score: 10,
          result: "strong",
          explanation:
            "You accept Fiona's framework, provide specific ROI projections, rank the initiatives as she requested, and offer the supporting data for scrutiny. This is exactly how to respond to an analytical client at board level.",
        },
        {
          id: "s180-opt-b",
          text: "That makes sense. I will put together a more detailed financial breakdown for each initiative and send it over before our next meeting. I want to make sure the numbers are solid before we commit to a ranking.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable caution, and Fiona would respect the desire for accuracy. But she asked for the ranking now, not next week. If you have initial projections, share them. Analytical clients value progress toward the answer, even if it is preliminary.",
        },
        {
          id: "s180-opt-c",
          text: "I understand the need for financial rigour, but I think we should also consider the strategic value of some of these initiatives. Not everything can be reduced to a number, and some of the highest-impact work we do together has been hard to quantify upfront.",
          score: 0,
          result: "weak",
          explanation:
            "Fiona has told you explicitly that she cannot fund what she cannot measure. Arguing that some things are beyond quantification directly contradicts her decision-making framework and will erode her confidence in your ability to partner with her.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a twelve-month strategic account plan where each initiative has a one-page case: objective, investment, projected return, risk assessment, success metric, and review date. Write the entry for one initiative in an analytical style.",
      targetTraits: ["structured-one-pager", "financial-metrics", "risk-assessment", "measurable-success-criteria"],
      exampleStrongResponse:
        "Initiative 2: Automated Compliance Reporting\n\nObjective: Replace manual quarterly compliance reporting with an automated dashboard, reducing report preparation time by 60% and eliminating data entry errors.\n\nInvestment: 42K (28K development, 8K integration, 6K training and change management).\n\nProjected return: Annual saving of 65K in reduced manual effort (3 FTE at 20% allocation freed up), plus an estimated 15K reduction in error-related rework. Payback period: 7 months. 12-month ROI: 1.9x.\n\nRisk assessment: Medium. Primary risk is integration complexity with existing ERP system. Mitigated by a four-week technical discovery phase before committing to full build. If discovery reveals a cost increase of more than 20%, the initiative will be re-evaluated before proceeding.\n\nSuccess metric: Report preparation time reduced from 12 working days to 5 working days per quarter, with zero data entry errors across two consecutive reporting cycles.\n\nReview date: Six-month review on 15 October. Full twelve-month review on 15 April.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your one-pager covers every category Fiona specified: objective, investment, projected return, risk, success metric, and review date. The financial modelling is specific and the risk assessment includes a mitigation strategy. Fiona could hand this to her board without changes.",
          observation:
            "The payback period and ROI calculation give Fiona exactly what she needs to rank this initiative against others. The conditional gate in the risk assessment (re-evaluate if cost increases by more than 20%) shows sophisticated financial thinking.",
          coachingTip:
            "When writing for analytical finance directors, include both the upside projection and the conditions under which you would stop. This shows you are thinking about their risk, not just your revenue.",
          styleContext:
            "Analytical communicators at board level need documents they can defend. A well-structured one-pager with clear financials and risk mitigation is the highest form of persuasion for this audience.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your one-pager covers some of the required categories but may be missing specific financial figures, a risk mitigation strategy, or a measurable success criterion. Fiona needs all six elements to consider it complete.",
          observation:
            "If your projected return says 'significant savings' instead of '65K', or your risk assessment says 'low to medium' without explaining why, Fiona will ask for revisions.",
          coachingTip:
            "For each section, ask: would Fiona need to ask a follow-up question? If yes, the section is not detailed enough. The goal is a self-contained case that answers every question before it is asked.",
          styleContext:
            "Analytical communicators value self-contained documents. If a one-pager generates questions, it has not done its job.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your entry is either too narrative, lacks the structured format Fiona specified, or does not include measurable financial data. If it reads like a project description rather than a business case, it misses the brief.",
          observation:
            "If your entry says 'this initiative will transform how the team works' without quantifying the transformation, Fiona cannot present it to her board. Vision is not enough; evidence is everything.",
          coachingTip:
            "Rewrite your entry as though each line will be challenged by a non-executive director who has never heard of the project. If it cannot survive that scrutiny, add more evidence or remove the claim.",
          styleContext:
            "Analytical communicators in finance see unquantified proposals as incomplete proposals. The idea might be excellent, but without numbers, it is just an idea.",
        },
      },
    },
  },
];
