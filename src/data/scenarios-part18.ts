import { Scenario } from "@/types";

export const SCENARIOS_PART18: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (205-207)
  // ============================================

  // Scenario 205 - Jordan Cole, team, foundation
  {
    id: "scenario-205",
    title: "The New Starter Integration",
    context:
      "A new team member is joining next week and the team needs to agree on an onboarding plan. Jordan wants to make sure the new starter is productive within two weeks, not left to figure things out alone.",
    chooseContext:
      "Jordan has proposed a structured two-week onboarding plan with daily check-ins and assigned tasks. A colleague suggests a more relaxed approach to let the new starter find their feet naturally.",
    rewriteContext:
      "Jordan has asked you to write the onboarding schedule email that the new starter will receive on day one, covering their first two weeks with clear expectations and milestones.",
    characterId: "jordan-cole",
    dialogue:
      "We have a new person starting Monday. Last time, someone joined and it took six weeks before they were contributing properly because nobody gave them a clear plan. That is not happening again. I want a two-week schedule with daily objectives, a buddy assigned by Friday, and a list of systems access sorted before they walk through the door.",
    chooseDialogue:
      "Letting someone 'find their feet' is code for 'nobody has planned anything'. New starters do not want to float around feeling useless. They want to know what they are supposed to do and when. A structured first two weeks is not controlling - it is respectful.",
    rewriteDialogue:
      "Write the email so the new starter reads it on Sunday night and walks in Monday morning knowing exactly what their first day looks like. No vague welcome messages. Give them a timetable, a buddy name, and their first deliverable.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan is demanding a structured onboarding plan with daily objectives, a buddy, and systems access arranged in advance, criticising a previous unplanned experience. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan is driving towards a structured outcome with urgency, assigning tasks and deadlines, and dismissing unstructured alternatives. This is direct communication focused on efficiency and accountability.",
          observation:
            "Notice how Jordan reframes 'finding your feet' as a failure of planning. Direct communicators see ambiguity as a leadership gap, not a feature.",
          coachingTip:
            "When someone criticises a lack of structure and proposes specific actions with deadlines, they are communicating directly. Respond with equally concrete contributions.",
          styleContext:
            "Direct communicators believe new starters judge an organisation by how prepared it is for their arrival. A clear plan signals that the team values their time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. The structured plan can look analytical, but Jordan is not designing a methodology - she is issuing orders. The emphasis is on getting things done by Friday, not on perfecting the approach.",
          observation:
            "An analytical communicator would research onboarding best practices and build an evidence-based framework. Jordan is creating a checklist and assigning owners.",
          coachingTip:
            "Direct communicators create structure for speed. Analytical communicators create structure for thoroughness. Jordan wants the plan done quickly, not perfectly.",
          styleContext:
            "Direct communicators use structure as a shortcut to action. The plan is a tool for execution, not a document for review.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not discussed how the new starter might feel, what would make them comfortable, or how to build a personal connection during onboarding. The focus is entirely on productivity.",
          observation:
            "There is no mention of team introductions over coffee, personal interests, or emotional wellbeing. Jordan measures onboarding success by how quickly the person contributes.",
          coachingTip:
            "Ask yourself: is this person focused on the new starter's experience or their output? Jordan is firmly in the output camp.",
          styleContext:
            "Direct communicators see a structured onboarding plan as the most caring thing you can do for a new starter, because it eliminates the anxiety of not knowing what to do.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants a structured two-week onboarding plan. A colleague suggests letting the new starter find their feet naturally. How do you respond?",
      options: [
        {
          id: "s205-opt-a",
          text: "Agreed. I will draft the two-week plan today with daily objectives and circulate it by end of play. I will confirm the buddy and get IT to sort systems access by Thursday.",
          score: 10,
          result: "strong",
          explanation:
            "You have immediately moved to execution with specific actions and deadlines. This matches Jordan's direct style perfectly and shows you understand the urgency.",
        },
        {
          id: "s205-opt-b",
          text: "A plan is helpful, but could we leave some unstructured time in the first week for the new starter to meet people informally and get a feel for the culture?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable addition, but Jordan has already dismissed the unstructured approach. Frame informal time as a scheduled item if you want it included, not as a replacement for structure.",
        },
        {
          id: "s205-opt-c",
          text: "Every new starter is different. Some people prefer structure, others prefer to explore on their own. Maybe we should ask them what they would like before we plan everything for them.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan has made clear she wants the plan ready before the person arrives. Suggesting you wait to ask them delays the preparation and contradicts her instruction entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to write the onboarding email the new starter will receive on day one. It should include a timetable, buddy name, and first deliverable. Write it in a direct style with no vague welcome messages.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Your First Two Weeks - What to Expect\n\nWelcome to the team. Here is your plan.\n\nDay 1 (Monday):\n- 9:00 - Meet your buddy, James Park. He will be your go-to person for the first two weeks.\n- 9:30 - Systems setup. Laptop, email, project management tool. James will walk you through it.\n- 11:00 - Team introductions (30 mins, not a full day).\n- 14:00 - Read the project brief for Client Alpha. This is your first project.\n- By end of day: Send James three questions about the project brief.\n\nWeek 1 goal: Understand the Client Alpha project well enough to contribute to Thursday's planning meeting.\nWeek 2 goal: Own your first deliverable and present it at the Friday review.\n\nYour buddy: James Park (james.park@company.com, ext 4412).\n\nQuestions before Monday? Email me directly.\n\nJordan",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email gives the new starter everything they need to walk in on Monday feeling prepared. Specific times, named contacts, and clear deliverables. Jordan would send this unchanged.",
          observation:
            "You included a deliverable for day one, which signals that the team takes the new starter seriously. Direct communicators see early expectations as a sign of respect.",
          coachingTip:
            "When writing for direct communicators, give new starters something to do, not just something to read. Action from day one signals that their contribution matters.",
          styleContext:
            "Direct communicators believe the best onboarding experience is one where the new person feels useful immediately. Idle time feels disrespectful to both parties.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether you have included specific times, named contacts, and a concrete first deliverable. If any part of the email says 'we will figure this out on the day', it is too vague.",
          observation:
            "If your email includes phrases like 'we will find a time for introductions' or 'feel free to explore the office', it lacks the precision Jordan expects.",
          coachingTip:
            "Replace every 'we will arrange' with a specific arrangement. The new starter should not need to follow up on anything in this email.",
          styleContext:
            "Direct communicators test onboarding emails by asking: could someone follow this plan without asking a single question? If yes, it is ready.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either reads like a generic welcome message, lacks specific times and tasks, or does not include a first deliverable. Jordan wanted a timetable, not a greeting card.",
          observation:
            "If your email opens with 'we are so excited to have you join the team' without following it with a concrete plan, it is exactly the kind of vague welcome Jordan wants to avoid.",
          coachingTip:
            "Start with the plan. The warmth can come from the buddy relationship, not the email. Jordan wants this email to be a useful document, not a feel-good message.",
          styleContext:
            "Direct communicators express care through preparation, not warm words. A detailed plan is more welcoming than a paragraph of enthusiasm.",
        },
      },
    },
  },

  // Scenario 206 - Sam Hartley, team, intermediate
  {
    id: "scenario-206",
    title: "The Underperforming Team Member",
    context:
      "A team member has been consistently missing deadlines and the rest of the team is picking up the slack. Sam has decided it is time to address the issue directly rather than letting it continue.",
    chooseContext:
      "Sam has raised the issue in a one-to-one and the team member has become defensive, blaming unclear priorities and a heavy workload. Sam is not accepting the deflection.",
    rewriteContext:
      "Sam has asked you to draft a follow-up email summarising the conversation, the agreed actions, and the timeline for improvement, so there is a clear written record.",
    characterId: "sam-hartley",
    dialogue:
      "We need to talk about the last three deadlines. The API documentation was due on the 5th - delivered on the 12th. The test plan was due on the 10th - still outstanding. The sprint review notes were due on the 14th - delivered incomplete. That is three misses in three weeks. I need to understand what is happening and what is going to change.",
    chooseDialogue:
      "I hear you on the workload, and I am happy to review priorities with you. But unclear priorities do not explain why the test plan was not flagged as at risk. If you knew you could not deliver, I needed to know before the deadline, not after. Going forward, I need you to raise a flag the moment a deadline is in jeopardy. No exceptions.",
    rewriteDialogue:
      "Write the follow-up email so it is factual, not emotional. List the missed deadlines, state the agreed actions, and set the review date. If this ever needs to go to HR, the email should stand on its own as a clear, fair record of the conversation.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Sam has listed three specific missed deadlines with dates, rejected deflection to workload without evidence, and demanded a behaviour change going forward. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam confronts the issue with specific examples, rejects vague excuses, and sets clear expectations for future behaviour. This is direct communication applied to performance management.",
          observation:
            "Notice how Sam separates the missed deadlines from the failure to communicate risk. Direct communicators care about both the result and the transparency of the process.",
          coachingTip:
            "When someone lists specific examples, rejects deflection, and demands clear future behaviour, they are managing directly. Respond with equally specific commitments.",
          styleContext:
            "Direct communicators see missed deadlines as a communication failure, not just a performance one. They expect early warnings, not late apologies.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam uses specific data, which can look analytical. But the purpose is to confront and correct, not to analyse root causes in depth. The specifics serve accountability, not investigation.",
          observation:
            "An analytical communicator would want to map the root causes systematically and identify process improvements. Sam wants the behaviour to change immediately.",
          coachingTip:
            "Direct communicators use data as evidence in a performance conversation. Analytical communicators use data as input to a process review. Sam is holding someone accountable, not conducting an audit.",
          styleContext:
            "Direct communicators in performance conversations are interested in commitments, not explanations. The data proves there is a problem; the question is what changes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how the team member is feeling, whether there are personal issues, or what support they might need emotionally. The conversation is about performance, not wellbeing.",
          observation:
            "There is no mention of stress, personal circumstances, or emotional support. Sam is managing to outcomes, not to feelings.",
          coachingTip:
            "Ask yourself: is this person trying to understand the person or improve the output? Sam is firmly focused on the output and the behaviours that need to change.",
          styleContext:
            "Direct communicators show care through clarity. Making expectations explicit and consequences visible is their version of support.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member has become defensive, blaming unclear priorities and heavy workload. Sam has rejected the deflection and set a clear expectation about flagging risks early. How do you support the conversation?",
      options: [
        {
          id: "s206-opt-a",
          text: "Let us make it specific. If any deliverable is at risk more than 48 hours before the deadline, flag it in the stand-up that day so we can redistribute. Does that work for both of you?",
          score: 10,
          result: "strong",
          explanation:
            "You have turned Sam's expectation into a concrete process with a specific trigger and a defined action. This gives both parties clarity and avoids future ambiguity.",
        },
        {
          id: "s206-opt-b",
          text: "I think there might be some truth to the workload concern. Could we review the current assignments and see whether the distribution is genuinely fair before we set new expectations?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but Sam has already acknowledged the workload point and moved past it. Reopening it may feel like you are undermining his handling of the conversation.",
        },
        {
          id: "s206-opt-c",
          text: "Maybe we should give them a bit more time to settle into the role. Everyone has rough patches, and coming down too hard might damage their confidence.",
          score: 0,
          result: "weak",
          explanation:
            "Sam has presented three specific misses in three weeks. Suggesting a 'rough patch' without addressing the pattern will frustrate a direct communicator who sees inaction as enabling.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to draft a follow-up email that records the conversation factually: missed deadlines, agreed actions, and review timeline. Write it in a direct style that could serve as a formal record.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Follow-up - Performance Discussion 14 March\n\nHi Alex,\n\nThis email summarises our conversation today.\n\nMissed deadlines discussed:\n1. API documentation - due 5 March, delivered 12 March (7 days late).\n2. Test plan - due 10 March, not yet delivered.\n3. Sprint review notes - due 14 March, delivered incomplete.\n\nAgreed actions:\n1. Outstanding test plan to be delivered by 18 March.\n2. Going forward, any deliverable at risk of missing its deadline must be flagged to me at least 48 hours in advance.\n3. We will review your current workload together on 17 March to confirm priorities are clear and manageable.\n\nReview date: We will meet on 28 March to review progress against these actions.\n\nI am committed to supporting you in getting back on track. If anything is unclear, let me know.\n\nSam",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is factual, specific, and fair. It records the issues, the agreements, and the review timeline without being punitive or emotional. This would stand up as a clear record if needed.",
          observation:
            "You included a commitment to support, which shows that direct communication in performance management can be firm and fair simultaneously.",
          coachingTip:
            "When writing performance follow-ups for direct communicators, stick to facts, actions, and dates. The email should be usable as evidence of a fair process.",
          styleContext:
            "Direct communicators believe that written records protect both parties. A clear email prevents disputes about what was agreed and demonstrates that the conversation was constructive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every deadline and action has a specific date attached. If any item says 'as soon as possible' or 'in due course', it needs tightening.",
          observation:
            "If your email references the conversation in general terms without listing each missed deadline specifically, it is not precise enough to serve as a formal record.",
          coachingTip:
            "For each item, include: what was due, when it was due, and what actually happened. The gap between expectation and reality should be visible at a glance.",
          styleContext:
            "Direct communicators use follow-up emails as accountability tools. Vague summaries undermine that purpose.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either avoids naming specific deadlines, uses softening language that obscures the severity, or reads more like a check-in than a formal record. Sam wanted facts, not diplomacy.",
          observation:
            "If your email says 'we discussed some recent challenges with timelines' rather than listing each missed deadline with dates, it is too soft to be useful.",
          coachingTip:
            "Be specific and factual. 'Some challenges' becomes 'three missed deadlines in three weeks'. The record should be unambiguous.",
          styleContext:
            "Direct communicators see vague performance emails as a disservice to both parties. Clarity is fairness.",
        },
      },
    },
  },

  // Scenario 207 - Alex Tran, team, advanced
  {
    id: "scenario-207",
    title: "The Team Restructure Announcement",
    context:
      "The organisation is restructuring and Alex's team is being split across two divisions. Alex has been asked to communicate the change and keep people focused during the transition.",
    chooseContext:
      "Alex has announced the restructure and several team members are expressing anxiety about reporting lines and role changes. Alex wants to address the uncertainty without making promises she cannot keep.",
    rewriteContext:
      "Alex has asked you to write the internal communication that goes to the whole team, explaining what is changing, what is not, and what happens next.",
    characterId: "alex-tran",
    dialogue:
      "I am not going to pretend this is easy news. The team is splitting into two divisions from April 1st. Some of you will report to me, some to Raj Patel. I do not have all the answers yet, but here is what I do know: nobody is losing their job, your projects are continuing, and your pay is not affected. I will have reporting lines confirmed by the 21st. Until then, focus on your current work.",
    chooseDialogue:
      "I understand the anxiety, and I am not dismissing it. But I am not going to speculate about things I do not know yet. What I can tell you is the three things that are confirmed: no redundancies, no pay changes, no project cancellations. Everything else is still being finalised, and I will update you the moment I have clarity. Speculation helps nobody.",
    rewriteDialogue:
      "Write the communication so it answers three questions: what is changing, what is definitely not changing, and when people will know more. Do not pad it with corporate language about 'exciting opportunities'. People are worried. Respect that by being straight with them.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Alex has announced a restructure by stating exactly what she knows, what she does not know, and when she will have answers, while refusing to speculate or use corporate language. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex communicates with radical transparency, distinguishing clearly between known and unknown facts, and refusing to fill gaps with speculation or corporate spin. This is advanced direct communication in a high-anxiety situation.",
          observation:
            "Notice how Alex treats honesty about uncertainty as a form of respect. Direct communicators believe that saying 'I do not know yet' is more trustworthy than saying 'everything will be fine'.",
          coachingTip:
            "When a leader separates confirmed facts from unconfirmed speculation and sets a specific date for the next update, they are communicating directly. Trust the clarity.",
          styleContext:
            "Direct communicators handle restructures by controlling what they can: the facts they share, the timeline they commit to, and the work they expect to continue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is organised and factual, which can look analytical. But notice she is not conducting a thorough analysis of the restructure - she is delivering a clear, immediate message under pressure.",
          observation:
            "An analytical communicator would present the rationale behind the restructure, the evaluation criteria for team placement, and a detailed transition plan. Alex gives the essentials and promises the rest by a specific date.",
          coachingTip:
            "Direct communicators in uncertainty give the minimum confirmed information with maximum clarity. Analytical communicators want to provide the full picture. Alex is managing through clarity, not completeness.",
          styleContext:
            "Direct communicators believe that a short, honest message beats a long, speculative one. In uncertain times, they share only what they can stand behind.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not discussed the emotional journey, shared personal feelings about the change, or invited people to express their concerns at length. She acknowledges the difficulty but moves quickly to facts and instructions.",
          observation:
            "Alex says 'I am not going to pretend this is easy', which acknowledges emotion briefly before pivoting to concrete information. The emotional acknowledgement is a stepping stone, not the destination.",
          coachingTip:
            "Direct communicators show empathy through honesty and action, not through extended emotional processing. They believe people feel safer when they have facts, not feelings.",
          styleContext:
            "In crisis communication, direct communicators demonstrate care by providing clarity quickly. They see extended emotional discussion as a delay that increases anxiety.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Team members are anxious about reporting lines and role changes. Alex has shared what she knows and refused to speculate. A team member asks directly: 'Should I be worried?' How do you respond in line with Alex's approach?",
      options: [
        {
          id: "s207-opt-a",
          text: "No one is losing their job, your pay is unchanged, and your current projects continue. Reporting lines will be confirmed by the 21st. Focus on the work in front of you, and if anything changes, Alex will tell you directly.",
          score: 10,
          result: "strong",
          explanation:
            "You have repeated the confirmed facts, avoided speculation, and directed focus back to action. This matches Alex's approach of managing anxiety through transparency and clarity.",
        },
        {
          id: "s207-opt-b",
          text: "I completely understand why you are worried. Change is always unsettling, and it is natural to feel anxious. Let us have a longer conversation about it over coffee so I can hear your specific concerns.",
          score: 5,
          result: "partial",
          explanation:
            "Empathetic and well-meaning, but Alex has already set the tone: facts now, details by the 21st. Offering a longer emotional conversation may undermine the message that speculation is not helpful right now.",
        },
        {
          id: "s207-opt-c",
          text: "Honestly, I think this restructure is going to be a really positive change. New leadership, fresh perspectives - I would see it as an opportunity rather than something to worry about.",
          score: 0,
          result: "weak",
          explanation:
            "Alex explicitly rejected corporate spin about 'exciting opportunities'. Repackaging uncertainty as a positive undermines the honest, factual tone she has carefully established.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants you to write the internal team communication about the restructure. It must answer: what is changing, what is not changing, and when they will know more. No corporate language. Write it in a direct style that respects people's concerns.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Team Update - Restructure Effective 1 April\n\nTeam,\n\nYou will have heard that the organisation is restructuring. Here is what it means for us.\n\nWhat is changing:\n- From 1 April, our team will be split across two divisions.\n- Some of you will continue reporting to me. Others will report to Raj Patel.\n- Reporting lines will be confirmed and communicated individually by 21 March.\n\nWhat is not changing:\n- Nobody is losing their job.\n- Your pay and benefits are unaffected.\n- Your current projects continue as planned.\n\nWhat happens next:\n- 21 March: Individual reporting line confirmations sent.\n- 25 March: Team meeting to discuss transition logistics.\n- 1 April: New structure takes effect.\n\nI know this creates uncertainty, and I respect that. I am choosing to share what I know now rather than wait until I have every answer. If you have questions that cannot wait, come to me directly.\n\nAlex",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your communication is clear, honest, and structured around the three questions Alex specified. It acknowledges uncertainty without filling it with false reassurance. Alex would send this to the team immediately.",
          observation:
            "You included a specific timeline with dates, which gives the team something concrete to hold onto during an uncertain period. Structure is reassurance for a direct communicator.",
          coachingTip:
            "When writing change communications for direct communicators, separate confirmed facts from pending decisions. People can handle 'we do not know yet' far better than 'everything will be fine'.",
          styleContext:
            "Direct communicators believe that honest communication during restructures builds more trust than optimistic spin. The team will remember how they were told, not just what they were told.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether any language could be read as corporate spin. Phrases like 'this is an exciting opportunity for growth' or 'we are confident this will strengthen the team' are exactly what Alex wanted to avoid.",
          observation:
            "If your communication includes any sentence that could appear in a generic restructure announcement from any company, it is too corporate for Alex's voice.",
          coachingTip:
            "Read each sentence and ask: is this something Alex would actually say to the team in person? If it sounds like it came from HR, rewrite it.",
          styleContext:
            "Direct communicators in restructures speak in their own voice, not the company's. The personal tone is what makes the message trustworthy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your communication either uses corporate language, fails to separate what is known from what is unknown, or does not include specific dates for next steps. Alex wanted straight talk, not a press release.",
          observation:
            "If your communication opens with 'we are embarking on an exciting transformation journey', it has failed completely. Alex wanted honesty, not marketing.",
          coachingTip:
            "Strip out every word that sounds like it was written by a communications department. What remains should sound like Alex talking to her team in a meeting room.",
          styleContext:
            "Direct communicators earn trust during restructures by being the one person who tells it straight. Corporate language in that moment feels like a betrayal.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (208-210)
  // ============================================

  // Scenario 208 - Priya Sharma, conflict, foundation
  {
    id: "scenario-208",
    title: "The Creative Direction Disagreement",
    context:
      "Two team members have a fundamental disagreement about the creative direction of a campaign. Priya has been asked to mediate because she has a talent for finding common ground without making either party feel dismissed.",
    chooseContext:
      "Priya has listened to both sides and is now trying to find the emotional common ground beneath the surface-level disagreement. Both parties are becoming entrenched in their positions.",
    rewriteContext:
      "Priya has asked you to write a summary of the mediation session that captures both perspectives fairly and outlines the agreed way forward in a way that both parties can feel good about.",
    characterId: "priya-sharma",
    dialogue:
      "I have heard both of you, and here is what I think is happening. You are both passionate about this campaign, and you are both right about different things. Kai, your instinct about the visual identity is sharp - it needs to be bold. Ren, your concern about the messaging is valid - it needs to be clear. The argument is not about who is right. It is about how we combine two good ideas.",
    chooseDialogue:
      "I can see you are both frustrated, and that is because you both care deeply about this work. That is actually a good sign. What I do not want is for this disagreement to become about winning. Let us step back from the two proposals and ask: what does the client need to feel when they see this campaign? Start there, and I think you will find you agree on more than you think.",
    rewriteDialogue:
      "Write the summary so both Kai and Ren read it and feel understood. I do not want either of them to think I sided with the other person. Capture what each person contributed, where the common ground is, and what the next step looks like. Make it feel like a partnership document, not a verdict.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Priya has reframed a creative disagreement as two passionate people who are both right about different aspects, and redirected the conversation towards emotional common ground. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya de-escalates through reframing, emotional recognition, and vision-casting. She turns a conflict into a shared creative challenge, which is classic expressive mediation.",
          observation:
            "Notice how Priya validates both parties' emotions before addressing the substance. Expressive communicators believe that emotional acknowledgement is the prerequisite for productive discussion.",
          coachingTip:
            "When a mediator reframes disagreement as shared passion and redirects to a bigger vision, they are communicating expressively. Follow their lead by contributing ideas, not taking sides.",
          styleContext:
            "Expressive communicators see conflict as misdirected energy. Their instinct is to redirect that energy towards a shared goal rather than suppress it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is caring and focused on both parties' feelings, which can look supportive. But notice she is actively reframing the narrative, not just comforting. She is shaping the conversation, not just holding space.",
          observation:
            "A supportive mediator would say 'let us take a moment to check how everyone is feeling'. Priya says 'you are both right about different things and here is how we combine them'.",
          coachingTip:
            "Expressive mediators reframe and redirect. Supportive mediators listen and validate. Priya is doing both, but the reframing is the dominant move.",
          styleContext:
            "Expressive communicators mediate by creating a new story that both parties can see themselves in. The story is the tool.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented a structured analysis of both proposals, a decision matrix, or a logical framework for resolution. Her approach is emotional and narrative-driven.",
          observation:
            "There are no scoring criteria, no comparative assessments, and no data-driven evaluation. Priya is resolving the conflict through empathy and vision, not analysis.",
          coachingTip:
            "Ask yourself: is this person solving the conflict logically or emotionally? Priya is firmly in the emotional and creative space.",
          styleContext:
            "Expressive communicators believe that most workplace conflicts are emotional, not logical. Address the emotion first and the logic follows.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Both team members are becoming entrenched in their positions about the campaign's creative direction. Priya wants to find emotional common ground. How do you contribute?",
      options: [
        {
          id: "s208-opt-a",
          text: "You are both fighting for a campaign the client will be proud of. What if we lead with Kai's bold visual identity and carry Ren's clear messaging underneath? Boldness grabs attention, clarity keeps it.",
          score: 10,
          result: "strong",
          explanation:
            "You have built on Priya's reframing by proposing a creative synthesis that honours both contributions. This is how you support an expressive mediator - by adding creative energy, not analytical critique.",
        },
        {
          id: "s208-opt-b",
          text: "Could we create both versions and test them with a small focus group? That way the data can help us decide rather than it being a subjective call.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but it sidesteps the emotional resolution Priya is building. Testing both versions may delay the reconciliation she is trying to achieve in this moment.",
        },
        {
          id: "s208-opt-c",
          text: "I think Ren has a stronger point about messaging clarity. Bold visuals are nice but if the message does not land, the campaign fails. We should prioritise Ren's approach.",
          score: 0,
          result: "weak",
          explanation:
            "Taking one side is exactly what Priya is trying to avoid. This would validate Ren but alienate Kai, destroying the collaborative dynamic Priya has carefully built.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants you to write a mediation summary that captures both perspectives fairly and outlines the agreed way forward. Both Kai and Ren should feel understood. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Creative Direction - Mediation Summary\n\nWhat we discussed:\nKai and Ren brought two compelling perspectives to the campaign's creative direction. Kai's vision for a bold, distinctive visual identity reflects the ambition of the client's brand. Ren's focus on messaging clarity ensures the campaign communicates effectively at every touchpoint. Both perspectives are essential.\n\nWhere we found common ground:\nThe team agreed that the campaign should feel both bold and clear. A campaign that is visually striking but confusing fails. A campaign that is well-messaged but forgettable also fails. The sweet spot is a design that grabs attention and a message that holds it.\n\nAgreed next step:\nKai and Ren will co-develop a single concept that combines a bold visual identity with clear, focused messaging. They will present a joint draft by Friday, with Priya available as a sounding board throughout the week.\n\nThis was a productive session. The passion both of you bring to this work is exactly what will make the final campaign outstanding.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary honours both contributions equally, identifies the common ground, and frames the next step as a collaboration. Both Kai and Ren would read this and feel respected.",
          observation:
            "You closed with an affirming statement about their passion, which is exactly how an expressive communicator would end a mediation summary. The final note matters.",
          coachingTip:
            "When writing mediation summaries for expressive communicators, give equal weight and equal warmth to both perspectives. Any imbalance will feel like a judgement.",
          styleContext:
            "Expressive communicators measure mediation success by whether both parties leave feeling valued. The document should read like a celebration of constructive tension, not a resolution of conflict.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether both perspectives receive equal warmth and detail. If one person's contribution gets a paragraph and the other gets a sentence, it feels unbalanced.",
          observation:
            "If your summary frames one perspective as the 'main' approach and the other as a 'helpful addition', it is not truly balanced.",
          coachingTip:
            "Count the words devoted to each perspective. They should be roughly equal. Imbalance in length signals imbalance in value.",
          styleContext:
            "Expressive communicators in mediation are acutely sensitive to how fairness feels, not just how it is structured. Both parties must feel equally seen.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either takes a side, lacks warmth, or reads like a decision memo rather than a partnership document. Priya wanted both people to feel understood, not managed.",
          observation:
            "If your summary opens with 'after careful consideration, the team has decided...' it reads like a verdict. Priya wanted a collaborative narrative, not a ruling.",
          coachingTip:
            "Rewrite as if both Kai and Ren are reading over your shoulder. Would both feel fairly represented? If not, adjust until they would.",
          styleContext:
            "Expressive communicators see mediation documents as relationship tools. If the document damages either party's sense of contribution, the mediation has failed regardless of the outcome.",
        },
      },
    },
  },

  // Scenario 209 - Marcus Webb, conflict, intermediate
  {
    id: "scenario-209",
    title: "The Resource Allocation Tension",
    context:
      "Two project leads are in conflict over a shared developer resource. Marcus has been asked to mediate because the tension has started affecting team morale and the developer caught in the middle is considering leaving.",
    chooseContext:
      "Marcus has spoken to both project leads individually and now has them in the same room. Both are being polite but the underlying resentment is obvious. Marcus needs to name the real issue.",
    rewriteContext:
      "Marcus has asked you to write a joint message from both project leads to the developer, acknowledging that the situation has been unfair to her and confirming the resolution.",
    characterId: "marcus-webb",
    dialogue:
      "Let us stop being polite and start being honest. You are both frustrated because you both need Maya full-time and she is being pulled in two directions. Maya is brilliant, and the fact that you both want her is a compliment to her. But right now, she is the one suffering. She is not a resource to allocate - she is a person caught in your disagreement. So let us fix this for Maya, not for either of you.",
    chooseDialogue:
      "Here is what I see. Jess, you are worried about losing momentum on the product launch. Derek, you are worried about missing the compliance deadline. Both fears are valid. But the way you have handled it - pulling Maya between you without talking to each other - has made things worse, not better. The fix starts with the two of you having a conversation that should have happened three weeks ago.",
    rewriteDialogue:
      "Write the message to Maya from both of them. I want her to read it and feel that someone finally saw what she was going through. No corporate apology - a real one. Then tell her what the plan is going forward so she knows the tug-of-war is over.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has recentred a resource conflict around the person caught in the middle, named the unspoken tension, and challenged both parties to fix the situation for Maya rather than for themselves. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus uses direct emotional honesty, names the real issue, and reframes the conflict around a human story rather than a process problem. This is expressive mediation that challenges through empathy.",
          observation:
            "The phrase 'she is not a resource to allocate - she is a person' is a classic expressive reframe. Marcus elevates the conversation from logistics to values.",
          coachingTip:
            "When a mediator names the emotional truth of a situation and challenges both parties to act on it, they are communicating expressively. Match their honesty.",
          styleContext:
            "Expressive communicators in conflict resolution name what everyone is thinking but nobody is saying. They believe that unspoken truths are more damaging than spoken ones.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does show deep care for Maya, which can look supportive. But notice he is also challenging both project leads directly. Supportive mediators create safety; expressive mediators create accountability through emotional truth-telling.",
          observation:
            "A supportive mediator would privately check on Maya and gently facilitate. Marcus puts the truth on the table in front of everyone and demands action.",
          coachingTip:
            "Expressive mediators combine empathy with directness. They care deeply and say so loudly. Supportive mediators care deeply and say so quietly.",
          styleContext:
            "Expressive communicators believe that publicly naming a problem is more respectful than privately managing it. Transparency is their form of care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not proposed a resource allocation framework, a scheduling matrix, or a capacity planning exercise. His intervention is emotional and relational, not systematic.",
          observation:
            "There are no spreadsheets, no time-split calculations, and no process proposals. Marcus is fixing people, not processes.",
          coachingTip:
            "Ask yourself: is this person solving a logistics problem or a relationship problem? Marcus sees this as a relationship failure that happens to look like a resource conflict.",
          styleContext:
            "Expressive communicators believe that most resource conflicts are relationship conflicts in disguise. Fix the relationship and the resource question resolves itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has named the real issue: both project leads have been pulling Maya in two directions without talking to each other. The tension in the room is high. How do you support Marcus's intervention?",
      options: [
        {
          id: "s209-opt-a",
          text: "The question is not who gets Maya - it is how you use her time well together. What if all three of you agreed a weekly priority? That puts Maya back in control of her own time.",
          score: 10,
          result: "strong",
          explanation:
            "You have built on Marcus's emotional reframe by proposing a solution that centres Maya's agency. Including Maya in the decision-making honours Marcus's principle that she is a person, not a resource.",
        },
        {
          id: "s209-opt-b",
          text: "Would it help to formally assign Maya to one project for the next four weeks and then rotate? A clear allocation would remove the ambiguity.",
          score: 5,
          result: "partial",
          explanation:
            "Practical but mechanical. Marcus has just reframed this as a human issue, and responding with a scheduling solution misses the emotional moment he has created.",
        },
        {
          id: "s209-opt-c",
          text: "I think we need to escalate this to senior leadership. It is not fair to ask Marcus to solve a structural problem that really needs a management decision about headcount.",
          score: 0,
          result: "weak",
          explanation:
            "Escalating removes the resolution from the people involved and ignores Marcus's point that this is a relationship issue, not a structural one. It also signals that the people in the room cannot solve their own problems.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants you to write a joint message from Jess and Derek to Maya, acknowledging what she has been through and confirming the resolution. It should feel like a genuine apology, not a corporate one. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Maya,\n\nWe owe you an apology, and a real one.\n\nOver the past few weeks, we have both been so focused on our own project deadlines that we lost sight of the fact that you were being pulled between us. That was not fair to you, and it should not have taken someone else pointing it out for us to see it.\n\nYou do exceptional work, and the fact that we both want you on our projects is a reflection of how much we value what you bring. But wanting your time should never have come at the cost of your wellbeing.\n\nHere is what we have agreed: going forward, the three of us will meet on Monday mornings to set priorities for the week together. You will have a clear plan, a single set of expectations, and the right to push back if things are not working. Your time is yours to manage, and we are here to support that, not compete for it.\n\nWe are sorry, and we are grateful. Thank you for your patience while we sorted ourselves out.\n\nJess and Derek",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is honest, personal, and emotionally mature. It acknowledges the impact on Maya, takes genuine responsibility, and confirms a practical resolution that puts her back in control. Marcus would be proud of this.",
          observation:
            "You framed the apology as taking responsibility rather than making excuses. This is how expressive communicators want accountability to sound: human, not corporate.",
          coachingTip:
            "When writing apologies for expressive communicators, lead with acknowledgement of impact, not explanation of circumstances. What happened to the person matters more than why it happened.",
          styleContext:
            "Expressive communicators believe that a genuine apology strengthens a relationship more than a perfect process could. The vulnerability is the repair.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the apology feels genuine or formulaic. If it uses phrases like 'we regret any inconvenience' or 'we apologise for the disruption', it has slipped into corporate territory.",
          observation:
            "If your message explains why the conflict happened before acknowledging how it affected Maya, the ordering is wrong. Impact first, context second.",
          coachingTip:
            "Read the apology aloud. Does it sound like two colleagues speaking honestly, or like a PR statement? If it is the latter, rewrite it in a more personal voice.",
          styleContext:
            "Expressive communicators judge apologies by whether they feel felt. The reader should sense genuine remorse, not performative regret.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either avoids a genuine apology, focuses on the process rather than the person, or uses corporate language that distances the writers from their responsibility.",
          observation:
            "If your message says 'going forward, resource allocation will be managed through a formal process' without acknowledging Maya's personal experience, it has missed the entire point.",
          coachingTip:
            "Start with 'we are sorry' and mean it. Then explain what changes. The apology is not optional - it is the foundation Marcus built the whole mediation on.",
          styleContext:
            "Expressive communicators see unapologetic process fixes as emotionally dishonest. If you hurt someone, say so before you fix the system.",
        },
      },
    },
  },

  // Scenario 210 - Nina Okafor, conflict, advanced
  {
    id: "scenario-210",
    title: "The Generational Work Style Clash",
    context:
      "Tension has emerged between newer team members who prefer flexible, async work and longer-serving colleagues who value in-person collaboration. Nina has been asked to facilitate a resolution that respects both perspectives.",
    chooseContext:
      "Nina has gathered both groups and is trying to build understanding rather than forcing a compromise. The longer-serving group feels that flexible work reduces team cohesion. The newer group feels that mandated office time is outdated.",
    rewriteContext:
      "Nina has asked you to write a team charter on working practices that both groups can sign up to, capturing shared principles rather than rigid rules.",
    characterId: "nina-okafor",
    dialogue:
      "I am not here to tell anyone their way of working is wrong. Both of you are right about something important. In-person collaboration builds trust in ways that screens cannot replicate. And flexible work lets people do their best thinking without the noise of an open-plan office. The question is not which is better. It is how we honour both.",
    chooseDialogue:
      "I want everyone to try something. Instead of defending your own preference, describe what the other group values and why it might be valid. If you work remotely, tell me what in-person collaboration gives the team. If you work in the office, tell me what flexibility gives an individual. Let us stop arguing positions and start understanding perspectives.",
    rewriteDialogue:
      "Write a charter that both groups helped create. Not a policy document - something that says 'this is who we are and how we work together'. It should feel like a set of shared commitments, not a set of imposed rules. Both groups need to see themselves in it.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina has refused to declare one working style superior, asked each group to articulate the other's perspective, and framed the task as honouring both values. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina uses values-based facilitation, perspective-taking exercises, and inclusive language to transform a conflict into a shared exploration. This is advanced expressive communication that builds bridges through empathy and vision.",
          observation:
            "The perspective-swapping exercise is a distinctly expressive technique. It forces each group to step into the other's story, which is how expressive communicators build understanding.",
          coachingTip:
            "When a facilitator asks conflicting parties to advocate for the other side's position, they are using an expressive approach to conflict resolution. Engage fully with the exercise.",
          styleContext:
            "Expressive communicators believe that understanding precedes agreement. If both sides can articulate what the other values, a shared solution becomes possible.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina cares deeply about both groups' feelings, which can look supportive. But she is actively facilitating a transformation in how the groups relate to each other, not simply validating their emotions.",
          observation:
            "A supportive facilitator would ensure everyone feels heard. Nina goes further by asking people to hear each other - to actively take the other perspective.",
          coachingTip:
            "Supportive communicators validate. Expressive communicators transform. Nina is asking people to change how they see each other, which goes beyond validation.",
          styleContext:
            "Expressive facilitators use conflict as raw material for deeper connection. They do not just resolve the disagreement; they use it to strengthen the team's empathy muscle.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented utilisation data, productivity metrics, or a structured analysis of different working models. Her approach is entirely relational and values-driven.",
          observation:
            "There are no studies cited, no attendance data analysed, and no cost-benefit assessments. Nina is facilitating a human conversation, not a data review.",
          coachingTip:
            "Ask yourself: is this person trying to find the right answer or build the right understanding? Nina believes that shared understanding produces better answers than any analysis could.",
          styleContext:
            "Expressive communicators trust that when people genuinely understand each other's values, they create solutions that no top-down policy could match.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has asked each group to describe what the other group values and why it might be valid. The longer-serving group is struggling to articulate the value of flexible work. How do you help?",
      options: [
        {
          id: "s210-opt-a",
          text: "Think about a time you needed deep focus and came in early or stayed late for quiet. That is what flexible work gives people - the ability to match their environment to the work. It is about doing your best work wherever that happens.",
          score: 10,
          result: "strong",
          explanation:
            "You have translated the concept into an experience the longer-serving group can relate to personally. This is expressive communication - building understanding through shared experience, not abstract argument.",
        },
        {
          id: "s210-opt-b",
          text: "Research consistently shows that knowledge workers are more productive with some degree of schedule autonomy. The data supports flexible working as an efficiency tool, not just a lifestyle preference.",
          score: 5,
          result: "partial",
          explanation:
            "Factually sound, but Nina is asking for empathy, not evidence. Citing research tells the group they are statistically wrong rather than helping them emotionally understand the other perspective.",
        },
        {
          id: "s210-opt-c",
          text: "Honestly, the office is just not as appealing to newer hires. The commute costs money, the office is noisy, and most of the work can be done from anywhere. They see mandatory office time as pointless.",
          score: 0,
          result: "weak",
          explanation:
            "This advocates for one side rather than building empathy. It also dismisses the value of in-person work, which Nina explicitly validated. Taking sides undermines the entire facilitation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to write a team working charter that captures shared commitments rather than rigid rules. Both groups should see themselves in it. Write it in an expressive style that feels like a shared document, not a policy.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Our Working Charter\n\nThis is not a policy. It is a set of commitments we have made to each other about how we work together.\n\nWhat we believe:\n- Great work happens in different environments. Some days that means a busy office. Some days that means a quiet home desk. Both are valid.\n- Connection matters. We are better when we know each other as people, not just as names on a screen.\n- Trust is the foundation. We trust each other to choose the working pattern that lets them do their best work, and we hold ourselves accountable for the results.\n\nWhat we commit to:\n- At least two days per week, we gather in person for collaboration, team meetings, and the conversations that build trust.\n- On remote days, we stay visible and reachable during core hours (10-3), and we respect that deep-focus time outside those hours is valuable.\n- We check in with each other regularly - not to monitor, but to stay connected.\n- If something is not working, we say so openly and adjust together.\n\nThis charter belongs to all of us. It will evolve as we learn what works, and every voice in the team has a right to shape it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your charter feels like a team document, not a management directive. It captures shared values, makes room for both perspectives, and invites ongoing evolution. Nina would be delighted with this.",
          observation:
            "You opened by declaring what the charter is not, which immediately sets a tone of collaboration rather than compliance. Expressive communicators frame documents as living agreements.",
          coachingTip:
            "When writing team charters for expressive communicators, use 'we' throughout and include a commitment to revisit. Static documents feel controlling; evolving ones feel collaborative.",
          styleContext:
            "Expressive communicators want team documents that people actually refer to, not documents that sit in a shared drive gathering dust. The tone determines the longevity.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the tone feels like a shared commitment or a management instruction. If any section reads like 'employees are expected to', it needs rewriting in collaborative language.",
          observation:
            "If your charter uses 'must', 'required', or 'mandatory', it has slipped from a charter into a policy. Nina wanted commitments, not requirements.",
          coachingTip:
            "Replace every directive phrase with a commitment phrase. 'Team members must attend' becomes 'we commit to gathering'. The shift from instruction to agreement changes how the document feels.",
          styleContext:
            "Expressive communicators believe that people honour commitments they made voluntarily far more than rules imposed on them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your charter either reads like an HR policy, imposes one working style over another, or lacks the warmth and inclusivity Nina specified. If either group would feel their perspective is missing, it has failed.",
          observation:
            "If your charter mandates specific office days without acknowledging the value of flexibility, or endorses full remote work without valuing in-person connection, it is one-sided.",
          coachingTip:
            "Go back to Nina's facilitation: both perspectives are valid. The charter must reflect that balance. Read it from each group's viewpoint and check whether they would sign it willingly.",
          styleContext:
            "Expressive communicators see one-sided charters as a form of exclusion. The whole point of the mediation was to create something everyone can see themselves in.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (211-213)
  // ============================================

  // Scenario 211 - Tom Brennan, email, foundation
  {
    id: "scenario-211",
    title: "The Project Delay Notification",
    context:
      "A project has hit an unexpected delay and the client needs to be informed. Tom is coaching you on how to deliver the news by email in a way that maintains trust and avoids triggering panic.",
    chooseContext:
      "Tom has reviewed your draft notification email and thinks it is too abrupt. He wants you to soften the delivery without hiding the facts or diluting the message.",
    rewriteContext:
      "Tom has asked you to rewrite the email so the client feels informed, supported, and confident that you have a plan - rather than blindsided by bad news.",
    characterId: "tom-brennan",
    dialogue:
      "I know you want to be upfront with the client, and that is the right instinct. But there is a difference between being honest and being blunt. If you open the email with 'the project is delayed by three weeks', the client reads that and panics before they reach your explanation. Lead with the context, then the news, then the plan. By the time they get to the delay, they already understand why and what you are doing about it.",
    chooseDialogue:
      "Your draft says 'we have encountered an issue that will push the timeline back'. That is technically honest but it sounds like you are in trouble. Change the framing. Something like, 'during our testing phase, we identified an issue that needs resolution before we proceed, and we want to get it right rather than rush past it'. Same facts, but now the client hears diligence, not failure.",
    rewriteDialogue:
      "Rewrite the email so the client finishes reading it and thinks, 'they have this under control'. Not, 'this is going wrong'. The delay is real and you cannot hide it. But the tone should communicate care, competence, and a clear path forward.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Tom is coaching you to deliver bad news by email in a way that leads with context, frames the delay as diligence, and ensures the client feels supported rather than alarmed. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the client's emotional response and coaches you to manage their experience of the news, not just the news itself. This is supportive communication that protects the relationship while delivering difficult information.",
          observation:
            "Notice how Tom reframes the delay as 'wanting to get it right'. Supportive communicators turn bad news into evidence of care, without being dishonest.",
          coachingTip:
            "When someone coaches you to think about how the reader will feel at each point in an email, they are communicating supportively. Follow their lead by considering emotional impact alongside factual accuracy.",
          styleContext:
            "Supportive communicators believe that how bad news is delivered determines whether it damages or strengthens a relationship. The framing is the message.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom uses storytelling and reframing, which can look expressive. But his goal is to protect the client from anxiety, not to inspire them. The warmth serves reassurance, not excitement.",
          observation:
            "An expressive communicator might reframe the delay as an opportunity for a better outcome. Tom frames it as responsible behaviour. The tone is reassuring, not aspirational.",
          coachingTip:
            "Supportive communicators frame bad news to minimise harm. Expressive communicators frame bad news to maximise hope. Tom is firmly in the harm-reduction space.",
          styleContext:
            "Supportive email communication manages the reader's emotional journey through a message. Every sentence is placed to build confidence, not anxiety.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not suggested ignoring the delay, being vague, or burying the facts. He is teaching you to present the same facts in a way that maintains trust, not to distort or omit them.",
          observation:
            "Tom explicitly says 'the delay is real and you cannot hide it'. He is not suggesting dishonesty; he is suggesting emotional intelligence in how the truth is delivered.",
          coachingTip:
            "Supportive communication is not about avoiding difficult truths. It is about delivering them in a way that preserves the recipient's trust and dignity.",
          styleContext:
            "Supportive communicators see blunt delivery of bad news as a failure of care, not a demonstration of honesty. Both can coexist.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has said your draft email is too abrupt and wants you to reframe the delay as a sign of diligence. Which opening line best follows his guidance?",
      options: [
        {
          id: "s211-opt-a",
          text: "During testing, we identified a data integrity issue we want to resolve properly before launch. We are adjusting the timeline by three weeks to deliver a product you can rely on. Here is our plan.",
          score: 10,
          result: "strong",
          explanation:
            "You have placed the delay within a narrative of care and quality. The client reads diligence first, timeline change second, and plan third. This matches Tom's guidance perfectly.",
        },
        {
          id: "s211-opt-b",
          text: "We wanted to let you know as soon as possible that the project will be delayed by three weeks due to a testing issue. We are working on a resolution and will keep you updated.",
          score: 5,
          result: "partial",
          explanation:
            "Honest and timely, but it leads with the delay, which is what Tom specifically asked you to avoid. The client reads 'delayed by three weeks' before they understand why or what happens next.",
        },
        {
          id: "s211-opt-c",
          text: "Unfortunately, we have run into a significant technical issue during testing. The project is now three weeks behind schedule. We apologise for the inconvenience and are doing everything we can to get back on track.",
          score: 0,
          result: "weak",
          explanation:
            "This opens with alarm language - 'unfortunately', 'significant technical issue', 'behind schedule'. Tom explicitly wanted to avoid triggering panic. This email invites a worried phone call.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to rewrite the delay notification email so the client feels informed, supported, and confident you have a plan. Write it in a supportive style that communicates care and competence.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Rebecca,\n\nI wanted to give you a transparent update on where we are with the project.\n\nDuring our quality assurance testing this week, we identified a data integrity issue that, if left unresolved, could cause problems after launch. We have made the decision to address it now rather than risk it affecting your team later.\n\nWhat this means: we are adjusting the delivery date from 28 March to 18 April. During those three weeks, here is exactly what will happen:\n- Week 1: Root cause analysis and fix implementation.\n- Week 2: Retesting across all affected modules.\n- Week 3: Full regression test and final sign-off.\n\nI will send you a brief progress update at the end of each week so you always know where things stand.\n\nI know timeline changes are never welcome, and I appreciate your patience. We are taking this approach because delivering something reliable matters more to us than delivering something fast. If you would like to talk through any of this, I am available any time this week.\n\nWarm regards,\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email delivers the news within a framework of care, competence, and transparency. The client reaches the timeline change already understanding the reason and seeing the plan. This is exactly what Tom wanted.",
          observation:
            "You offered weekly updates and availability for a conversation, which gives the client control without adding pressure. Supportive communicators make themselves available rather than imposing check-ins.",
          coachingTip:
            "When writing delay notifications for supportive communicators, the structure is: context, news, plan, ongoing support. Each element builds the client's confidence in you.",
          styleContext:
            "Supportive communicators believe that a delay communicated with care can actually strengthen a client relationship. The email is an opportunity to demonstrate professionalism.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the email communicates care as well as competence. If it reads like a project status update rather than a message from someone who understands the impact, add more warmth.",
          observation:
            "If your email does not acknowledge that timeline changes are unwelcome or offer availability for a conversation, it is technically sound but emotionally incomplete.",
          coachingTip:
            "Add one sentence that acknowledges the client's likely reaction. 'I know this is not what you were hoping to hear' goes a long way in a supportive communication.",
          styleContext:
            "Supportive communicators never assume that good process communication is sufficient. The human acknowledgement is what makes the message feel genuinely caring.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either leads with the bad news, uses alarm language, or fails to include a clear plan. Tom wanted the client to feel reassured, not concerned.",
          observation:
            "If your email opens with the delay or uses words like 'unfortunately', 'significant', or 'behind schedule', it has the wrong emotional trajectory.",
          coachingTip:
            "Reorder the email: why we caught the issue, what the issue is, how we are fixing it, what the new timeline is, how we will keep you informed. The delay is the fourth item, not the first.",
          styleContext:
            "Supportive communicators manage the emotional journey of a message. Every sentence should build confidence, not erode it.",
        },
      },
    },
  },

  // Scenario 212 - Leah Morgan, email, intermediate
  {
    id: "scenario-212",
    title: "The Difficult Feedback by Email",
    context:
      "A colleague has asked for written feedback on a proposal they submitted for a new client initiative. The proposal has fundamental issues, and Leah is advising you on how to deliver honest feedback by email without damaging the relationship.",
    chooseContext:
      "Leah has read your draft feedback email and thinks the tone is too harsh. She wants you to restructure it so the colleague feels encouraged to revise rather than discouraged from trying again.",
    rewriteContext:
      "Leah has asked you to rewrite the feedback email so it leads with what works, clearly identifies what needs improving, and closes with encouragement for the revision.",
    characterId: "leah-morgan",
    dialogue:
      "I know the proposal has problems, and yes, you need to be honest about them. But email is the worst medium for critical feedback because the reader cannot hear your tone of voice. Every word carries more weight. If you write 'this section does not work', they hear 'you are not good enough'. We need to be more careful than that.",
    chooseDialogue:
      "Your feedback says 'the pricing model is fundamentally flawed'. That might be true, but read that sentence imagining you are the person who spent two weeks building it. Now try: 'the pricing model has the right building blocks, but the assumptions underneath need stress-testing before this goes to the client'. Same concern, but now they can hear it without shutting down.",
    rewriteDialogue:
      "Rewrite the email so your colleague reads it and thinks, 'okay, I know exactly what to fix, and I feel supported in doing it'. Not, 'my work was terrible and everyone knows it'. The goal is a better proposal, not a bruised colleague.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is coaching you to deliver critical email feedback by considering how each sentence will feel to the reader, reframing harsh language as constructive guidance. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah is entirely focused on the reader's emotional experience of receiving the feedback. She coaches you to test every sentence against how it will feel, not just what it says. This is supportive communication applied to written feedback.",
          observation:
            "Leah's reframe of 'fundamentally flawed' to 'the right building blocks but needs stress-testing' preserves the same concern while protecting the reader's confidence. Supportive communicators choose words for their emotional impact.",
          coachingTip:
            "When someone asks you to imagine reading your own words as the recipient, they are teaching supportive communication. The reader's feeling is as important as the message's content.",
          styleContext:
            "Supportive communicators see written feedback as particularly high-risk because the reader processes it alone, without the softening effect of facial expressions and tone of voice.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does reframe language creatively, which can look expressive. But her purpose is protection, not inspiration. She is not trying to make the feedback exciting - she is trying to make it survivable.",
          observation:
            "An expressive communicator would frame the revision as a creative opportunity. Leah frames it as something the colleague can handle without feeling demolished.",
          coachingTip:
            "Supportive communicators soften to protect. Expressive communicators reframe to inspire. Leah is in protection mode throughout this coaching.",
          styleContext:
            "Supportive communicators treat email feedback as a care exercise. The feedback must land, but it must not wound.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not suggested avoiding the feedback or being dishonest. She is teaching you to deliver the same honest message in words the reader can absorb without shutting down.",
          observation:
            "Leah explicitly says the proposal has problems and you need to be honest. She is not softening the substance - she is softening the delivery.",
          coachingTip:
            "Supportive communication is not avoidance. It is honest communication delivered with care for the reader's emotional state. The message does not change; the wrapping does.",
          styleContext:
            "Supportive communicators believe that feedback only works if the recipient can hear it. Harsh delivery creates defensiveness that blocks the content from landing.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has pointed out that your feedback line 'the pricing model is fundamentally flawed' will feel devastating by email. Which alternative best matches her supportive approach?",
      options: [
        {
          id: "s212-opt-a",
          text: "The pricing model's structure is solid. Before it goes to the client, the volume projections in year two need pressure-testing. Tighten those and the model becomes much stronger.",
          score: 10,
          result: "strong",
          explanation:
            "You have preserved the critical feedback while leading with what works, naming the specific area that needs work, and framing the revision as strengthening rather than fixing. This matches Leah's approach perfectly.",
        },
        {
          id: "s212-opt-b",
          text: "The pricing model needs significant revision. The volume projections do not hold up under scrutiny and the margin assumptions are optimistic. Please rework sections 3 and 4 with more conservative figures.",
          score: 5,
          result: "partial",
          explanation:
            "Specific and actionable, but the tone is clinical. It tells the colleague what is wrong without acknowledging what is right or softening the blow. By email, this will read as cold.",
        },
        {
          id: "s212-opt-c",
          text: "I am not sure the pricing model works in its current form. It might be worth starting again from scratch with different assumptions.",
          score: 0,
          result: "weak",
          explanation:
            "Suggesting they start from scratch devalues all the work they put in. Combined with the hedging ('I am not sure'), this is both discouraging and vague - the worst combination for written feedback.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants you to rewrite the feedback email to lead with what works, identify what needs improving, and close with encouragement. Write it in a supportive style that the colleague can act on without feeling crushed.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Sam,\n\nThank you for sharing the proposal. I can see how much thought has gone into it, and the strategic rationale is strong. The way you have framed the client's challenge in section one is compelling and sets the right tone.\n\nA few areas I think would benefit from another pass before it goes forward:\n\n1. Pricing model: The structure is logical, but the volume projections in year two feel optimistic based on what we know about this client's growth rate. Could you run a scenario with more conservative figures to see how the margins hold up?\n\n2. Implementation timeline: The six-month estimate is tight given the scope. It might be worth adding a buffer or phasing the deliverables so the client does not feel we are over-promising.\n\n3. Risk section: There is good content here, but it would be stronger with one or two mitigation strategies for each risk rather than just listing them.\n\nThe foundation is genuinely strong, and with these refinements it will be in great shape. Happy to talk through any of this if it would help.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email follows the structure Leah wanted: appreciation, specific improvements, and encouragement. The colleague knows exactly what to revise and feels supported in doing it.",
          observation:
            "You framed each improvement as a refinement rather than a correction, which preserves the colleague's confidence. 'Would benefit from another pass' is very different from 'needs fixing'.",
          coachingTip:
            "When writing feedback emails for supportive communicators, imagine the reader opening this at their desk. Do they feel motivated to improve or defeated? Aim for motivated.",
          styleContext:
            "Supportive communicators believe that the best feedback emails are ones the reader prints out and keeps at their desk as a working guide, not ones they close and try to forget.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the opening genuinely identifies something specific that works. If the praise is generic ('good effort') rather than specific ('the strategic rationale in section one is strong'), it feels obligatory.",
          observation:
            "If your opening praise could apply to any proposal, it reads as a template. Specific praise shows you actually read the work and found value in it.",
          coachingTip:
            "Name one specific thing that genuinely works well. Specific praise earns the right to give specific criticism. Generic praise earns nothing.",
          styleContext:
            "Supportive communicators see specific praise as the foundation of trustworthy feedback. If the reader believes you valued the good parts, they trust your assessment of the weak parts.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either leads with criticism, lacks specific praise for what works, or closes without encouragement. Leah wanted the colleague to feel supported throughout the reading experience.",
          observation:
            "If your email opens with 'I have some concerns about the proposal' or closes with 'let me know if you need help', the emotional bookends are wrong. Open warm, close encouraging.",
          coachingTip:
            "Restructure: specific praise, specific improvements framed as refinements, and a genuinely encouraging close. The colleague should finish reading feeling energised to revise, not deflated.",
          styleContext:
            "Supportive communicators measure feedback success by the quality of the revision it produces. If the colleague revises with confidence and clarity, the email worked.",
        },
      },
    },
  },

  // Scenario 213 - David Chen, email, advanced
  {
    id: "scenario-213",
    title: "The Boundary-Setting Email",
    context:
      "A client has been consistently emailing outside working hours and expecting immediate responses. David is coaching you on how to set boundaries by email without damaging the relationship or appearing unhelpful.",
    chooseContext:
      "David has reviewed your draft boundary-setting email and thinks it is too apologetic. He wants you to frame the boundary as something that benefits the client, not as a limitation you are imposing.",
    rewriteContext:
      "David has asked you to rewrite the email so it establishes clear response time expectations while making the client feel valued and well-served, not restricted.",
    characterId: "david-chen",
    dialogue:
      "Setting boundaries by email is delicate because you cannot control how the reader interprets your tone. The instinct is to apologise, but apologising for having boundaries makes them sound like a problem. Instead, frame it as a commitment: 'here is when you will hear from us and here is why that makes our service better for you'. The boundary becomes a promise, not a restriction.",
    chooseDialogue:
      "Your draft says 'unfortunately, we are unable to respond to emails after 6pm'. That word 'unfortunately' makes it sound like you wish you could but cannot. Remove the apology. Try: 'to ensure every response is thorough and considered, we reply to all emails received after 6pm by 10am the following morning'. Now the boundary sounds like quality assurance.",
    rewriteDialogue:
      "Rewrite the email so the client reads it and thinks, 'they are being professional and I am being looked after'. Not, 'they are trying to do less for me'. Every sentence should reinforce that the boundary exists to serve them better, not to protect you from them.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "David is coaching you to frame a boundary-setting email as a service commitment rather than a restriction, removing apologetic language and focusing on client benefit. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David centres the client's experience and reframes the boundary as something that improves service quality. His approach protects the relationship while establishing clear expectations. This is advanced supportive communication.",
          observation:
            "The reframe from 'unable to respond after 6pm' to 'we reply by 10am to ensure thoroughness' is a masterclass in supportive boundary-setting. The same fact is delivered as a promise instead of a limitation.",
          coachingTip:
            "When someone coaches you to remove apologies from boundary-setting and replace them with service commitments, they are communicating supportively at an advanced level. The client's perception is everything.",
          styleContext:
            "Supportive communicators believe that boundaries, when framed correctly, actually increase client confidence. A team that manages its time well delivers better work.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David does use creative reframing, which can look expressive. But the purpose is to maintain the client's sense of being cared for, not to inspire them. The reframe serves protection, not excitement.",
          observation:
            "An expressive communicator might turn the boundary conversation into a broader discussion about work-life values. David stays focused on the client's practical experience.",
          coachingTip:
            "Supportive communicators reframe to protect. Expressive communicators reframe to inspire. David is protecting the client's trust, not championing a philosophy.",
          styleContext:
            "Supportive boundary-setting is a service act: I am defining how I serve you best. Expressive boundary-setting is a values act: I am sharing why this matters to me.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not suggested being rigid, cold, or refusing to help outside hours. He is teaching you to set expectations warmly while making the client feel the boundary is in their interest.",
          observation:
            "David explicitly wants the client to feel 'professional and looked after'. He is not withdrawing service; he is defining how service is delivered.",
          coachingTip:
            "Supportive boundary-setting is not about saying no. It is about saying 'here is how I say yes, and here is why it is better this way'. The boundary is a commitment, not a wall.",
          styleContext:
            "Supportive communicators see clear boundaries as an expression of care. A well-defined service commitment is more caring than chaotic availability.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has said your draft is too apologetic and wants you to reframe the boundary as a quality commitment. Which revision best follows his guidance?",
      options: [
        {
          id: "s213-opt-a",
          text: "Our team responds to all communications within core hours of 8am to 6pm. Emails received after 6pm will be our first priority the following morning, with a response by 10am. This ensures you always receive a thorough reply.",
          score: 10,
          result: "strong",
          explanation:
            "You have framed the boundary as a quality guarantee. The client hears 'you will always get a thorough response' rather than 'we do not work evenings'. This matches David's coaching perfectly.",
        },
        {
          id: "s213-opt-b",
          text: "We appreciate your enthusiasm for the project and we want to be transparent about our response times. We typically respond to emails during business hours, though we do our best to monitor urgent queries outside of those times.",
          score: 5,
          result: "partial",
          explanation:
            "Polite but soft. The phrase 'do our best to monitor urgent queries' actually weakens the boundary by suggesting you might still respond after hours. David wanted clarity, not flexibility.",
        },
        {
          id: "s213-opt-c",
          text: "We have noticed that several emails have been sent outside of working hours. While we understand the urgency, our team is only available between 8am and 6pm. We would appreciate it if future communications could be sent during these times.",
          score: 0,
          result: "weak",
          explanation:
            "This tells the client they are doing something wrong, which David explicitly wanted to avoid. Asking the client to change their behaviour is controlling. David wanted to manage your response, not their sending habits.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants you to rewrite the boundary-setting email so the client feels valued and well-served. Frame the boundary as a service commitment, not a limitation. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Martin,\n\nI wanted to take a moment to share how our team manages communications, so you always know what to expect from us.\n\nOur commitment to you:\n- Every email you send during our core hours (8am-6pm) will receive a response within four hours.\n- Any email received after 6pm becomes our first priority the following morning, with a response by 10am.\n- For genuinely urgent matters outside core hours, you can reach me on my mobile. I have included the number below.\n\nWe have structured it this way because we want every response to be thorough and useful, not rushed. You deserve our full attention, and this framework ensures you always get it.\n\nIf this does not work for any reason, please tell me and we will find a solution together. Your needs come first, and we will always find a way to meet them.\n\nWarm regards,\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email establishes clear boundaries while making the client feel prioritised. The escalation path for genuinely urgent matters shows flexibility, and the framing of response times as quality commitments is exactly what David wanted.",
          observation:
            "You included an invitation for the client to push back if it does not work, which demonstrates confidence in the boundary rather than rigidity. Supportive communicators hold boundaries gently but firmly.",
          coachingTip:
            "When writing boundary-setting emails for supportive communicators, include a path for exceptions. It shows you are setting a standard, not building a wall.",
          styleContext:
            "Supportive communicators know that the most effective boundaries are ones that feel collaborative. If the client helped shape the arrangement, they will respect it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether any language feels restrictive or apologetic. If you use 'unfortunately' or 'we are unable to', you have slipped into the apologetic tone David wanted to avoid.",
          observation:
            "If your email does not explain why the boundary benefits the client, it reads as a limitation. David wanted every constraint to be framed as a service commitment.",
          coachingTip:
            "For every boundary you set, immediately follow it with the benefit to the client. 'We respond by 10am' is a boundary. 'Because we want to give your query our full attention' is the benefit.",
          styleContext:
            "Supportive communicators never present a boundary without a reason that benefits the other person. Unexplained boundaries feel arbitrary.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either apologises for the boundary, asks the client to change their behaviour, or fails to frame the response times as quality commitments. David wanted confidence, not apology.",
          observation:
            "If your email says 'we hope you understand' or 'we apologise for any inconvenience', it is undermining the boundary by treating it as something the client should tolerate rather than appreciate.",
          coachingTip:
            "Remove every apology. Replace it with a commitment. 'Sorry we cannot respond after 6pm' becomes 'every evening email is our first task the following morning'. The confidence makes the boundary trustworthy.",
          styleContext:
            "Supportive communicators believe that apologetic boundaries invite testing. Confident, caring boundaries invite respect.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (214-216)
  // ============================================

  // Scenario 214 - Rachel Finch, one-to-one, foundation
  {
    id: "scenario-214",
    title: "The Career Development Discussion",
    context:
      "You are having a one-to-one with Rachel about her career development goals. She has been in her current role for two years and wants to understand what specific steps she needs to take to move to the next level.",
    chooseContext:
      "Rachel has asked for a clear, measurable development plan rather than vague assurances about progression. She wants to know exactly what competencies she needs to demonstrate and how they will be assessed.",
    rewriteContext:
      "Rachel has asked you to write her development plan as a document she can track quarterly, with specific milestones and measurable criteria for each competency area.",
    characterId: "rachel-finch",
    dialogue:
      "I have been in this role for two years and I want to move to senior analyst. But when I asked my manager what I needed to do, the answer was 'keep doing what you are doing and it will happen naturally'. That is not a plan. I need specifics. What competencies am I being measured against? Where do I currently sit on each one? And what does 'meeting expectations' look like in observable terms?",
    chooseDialogue:
      "I have looked at the competency framework and it says I need to 'demonstrate strategic thinking'. That could mean anything. I need a definition I can test myself against. Something like: 'produces analysis that senior stakeholders use to make decisions without requiring further clarification'. That is measurable. 'Demonstrate strategic thinking' is not.",
    rewriteDialogue:
      "Write the development plan so I can look at it every quarter and assess objectively whether I am on track. If a criteria says 'improve presentation skills', that is too vague. It should say 'deliver three client-facing presentations with a feedback score of 4 out of 5 or above'. Specific, measurable, trackable.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has rejected vague development advice, demanded specific competency definitions with measurable criteria, and proposed her own observable benchmarks. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel demands precision, measurability, and objective criteria for her development. She rejects vague guidance and creates her own specific definitions. This is analytical communication applied to personal career planning.",
          observation:
            "Notice how Rachel rewrites 'demonstrate strategic thinking' into a testable statement. Analytical communicators do not accept terms they cannot measure.",
          coachingTip:
            "When someone rejects qualitative guidance and demands quantitative criteria, they are communicating analytically. Support them by offering equally specific development metrics.",
          styleContext:
            "Analytical communicators approach career development the same way they approach projects: with clear requirements, measurable milestones, and regular checkpoints.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive and action-oriented, which can look direct. But notice she is not demanding a promotion - she is demanding a clear framework for understanding what a promotion requires. The focus is on the criteria, not the outcome.",
          observation:
            "A direct communicator would say 'what do I need to do to get promoted? Tell me and I will do it'. Rachel wants to understand the measurement system, not just the actions.",
          coachingTip:
            "Direct communicators want to know what to do. Analytical communicators want to know how they will be measured. Rachel is focused on the assessment framework.",
          styleContext:
            "Analytical communicators see career development as a system to understand and optimise. They want the rules to be visible, consistent, and fair.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not discussed her feelings about being overlooked, her emotional connection to the work, or her anxiety about the future. Her entire approach is systematic and measurement-focused.",
          observation:
            "There are no emotional appeals, no stories about passion or purpose, and no requests for reassurance. Rachel wants data, not encouragement.",
          coachingTip:
            "Ask yourself: is this person asking to be understood or asking to be measured? Rachel wants a measuring stick, not a supportive conversation.",
          styleContext:
            "Analytical communicators feel most supported when they have clear criteria. Ambiguity creates more anxiety for them than a challenging target ever could.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has asked for a development plan with specific, measurable criteria rather than vague competency descriptions. How do you respond?",
      options: [
        {
          id: "s214-opt-a",
          text: "Fair challenge. For 'strategic thinking', the measure could be: 'your analysis informs at least two senior leadership decisions per quarter, with no significant rework'. We will define all five competencies that way.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted Rachel's framework and provided a specific, testable definition that matches her demand for measurability. This is how to support an analytical communicator in development discussions.",
        },
        {
          id: "s214-opt-b",
          text: "I think you are already demonstrating strategic thinking. Your recent market analysis was excellent, and I am confident the promotion will come when the time is right.",
          score: 5,
          result: "partial",
          explanation:
            "Encouraging but unhelpful to Rachel. She has explicitly said vague assurances about natural progression are not acceptable. She wants criteria, not confidence.",
        },
        {
          id: "s214-opt-c",
          text: "These competency frameworks are guidelines, not rigid checklists. The reality is that promotion decisions involve a lot of subjective judgement and organisational context. It is hard to define it as precisely as you would like.",
          score: 0,
          result: "weak",
          explanation:
            "Telling Rachel that the system is subjective is the worst possible response. She is asking you to make it less subjective, and you are telling her it cannot be. This will erode her trust in the process entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to write a quarterly development plan with specific milestones and measurable criteria for each competency area. Write it in an analytical style with precise, testable benchmarks.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Development Plan: Rachel Finch - Senior Analyst Pathway\nReview cycle: Quarterly (next review: June 2026)\n\nCompetency 1: Strategic Analysis\n- Current level: Developing\n- Target: Analysis used as basis for 2+ senior leadership decisions per quarter with no major rework.\n- Q2 milestone: Lead the competitive landscape analysis for the annual strategy review. Success = presented to leadership without significant revision.\n\nCompetency 2: Client Communication\n- Current level: Competent\n- Target: Deliver 3 client-facing presentations per quarter with average feedback score of 4.0/5.0 or above.\n- Q2 milestone: Present Q1 findings to Client Alpha. Collect structured feedback using the standard form.\n\nCompetency 3: Technical Leadership\n- Current level: Developing\n- Target: Mentor 1 junior analyst through a complete project cycle with documented knowledge transfer.\n- Q2 milestone: Pair with a junior on the data quality audit. Document the methodology handover.\n\nCompetency 4: Stakeholder Management\n- Current level: Developing\n- Target: Manage 2 cross-functional projects with stakeholder satisfaction survey scores of 4.0/5.0 or above.\n- Q2 milestone: Co-lead the procurement review with the finance team. Run a stakeholder feedback survey at project close.\n\nAssessment: Each competency reviewed against evidence at quarterly checkpoints. Promotion threshold: 'competent' or above across all four areas for two consecutive quarters.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your plan is specific, measurable, and trackable. Rachel can assess herself against these criteria at any point and know objectively where she stands. This is exactly what she asked for.",
          observation:
            "You included current levels, targets, quarterly milestones, and a clear promotion threshold. This gives Rachel a complete system to work within.",
          coachingTip:
            "When writing development plans for analytical communicators, every competency should answer three questions: where am I now, where do I need to be, and how will we measure whether I got there?",
          styleContext:
            "Analytical communicators treat development plans as project plans. The same rigour they apply to client work, they expect in their own career management.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every competency has a measurable target and a specific quarterly milestone. If any section says 'develop skills in...' without a testable outcome, it needs tightening.",
          observation:
            "If your plan includes phrases like 'demonstrate growth in' or 'show improvement', Rachel will ask: how exactly will you measure that? Be ready with an answer, or better yet, include it upfront.",
          coachingTip:
            "For each competency, define success in terms Rachel can verify herself. If she cannot look at a piece of evidence and say 'I have met this criterion', the definition is too vague.",
          styleContext:
            "Analytical communicators want development plans that function as self-assessment tools. They should not need their manager to tell them whether they are on track.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan either uses vague language, lacks measurable targets, or reads like a generic competency framework rather than a personalised development document. Rachel would not accept this.",
          observation:
            "If your plan says 'improve strategic thinking skills' without defining what that looks like in observable terms, it has failed the basic test Rachel set.",
          coachingTip:
            "Go back to Rachel's own example. She rewrote 'demonstrate strategic thinking' into a specific, testable criterion. Apply that same discipline to every competency in your plan.",
          styleContext:
            "Analytical communicators see unmeasurable development goals as meaningless. If you cannot test it, you cannot track it, and if you cannot track it, it does not count.",
        },
      },
    },
  },

  // Scenario 215 - Owen Grant, one-to-one, intermediate
  {
    id: "scenario-215",
    title: "The Process Improvement Proposal",
    context:
      "Owen has requested a one-to-one to present his analysis of the team's current reporting workflow. He believes there are significant inefficiencies and has prepared a detailed proposal for improvement.",
    chooseContext:
      "Owen has presented his findings but his manager is sceptical, suggesting the current process works well enough and the disruption of changing it outweighs the benefit. Owen pushes back with data.",
    rewriteContext:
      "Owen has asked you to help him write a formal process improvement proposal that makes the case for change using the data he has gathered, structured in a way that his manager cannot dismiss.",
    characterId: "owen-grant",
    dialogue:
      "I have tracked our reporting workflow over eight weeks. The current process requires 14 manual steps across three systems, with an average of 3.2 handoffs per report. The error rate on manual data entry steps is 11.4%, and each error takes an average of 45 minutes to identify and correct. That means we are spending roughly 18 hours per month on avoidable rework. I have a proposal that reduces the manual steps from 14 to 6.",
    chooseDialogue:
      "I understand the concern about disruption. But the current disruption is already happening - it is just invisible. Eighteen hours of monthly rework is the equivalent of losing a full-time team member for one day every two weeks. The automation I am proposing has a three-week implementation period and pays for itself within two months. The data supports the change.",
    rewriteDialogue:
      "Write the proposal so every claim is backed by a specific data point from my eight-week tracking period. I do not want anyone reading this to be able to say, 'that is just your opinion'. Every recommendation should trace to measured evidence. If the data does not support a claim, I do not want it in the document.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has tracked a workflow for eight weeks, quantified error rates and rework costs, and built a data-backed proposal that shows ROI within two months. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen builds his case entirely from measured evidence, tracking data over an extended period and quantifying every claim. This is analytical communication at its most rigorous - opinion removed, evidence central.",
          observation:
            "Notice the specificity: 14 steps, 3.2 handoffs, 11.4% error rate, 45 minutes per correction, 18 hours monthly. Analytical communicators believe that precision of data determines persuasiveness of argument.",
          coachingTip:
            "When someone presents a proposal built on weeks of measured data with decimal-point precision, they are communicating analytically. Challenge the data if you disagree, but never dismiss it as 'just opinion'.",
          styleContext:
            "Analytical communicators build proposals the way scientists build experiments: controlled observation, measured outcomes, and evidence-based conclusions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive about his conclusions, which can look direct. But his assertiveness comes from the evidence, not from personality. He says 'the data supports the change', not 'I believe we should change'.",
          observation:
            "A direct communicator would say 'this process is broken, let us fix it'. Owen says 'this process creates 18 hours of monthly rework, and here is the evidence'.",
          coachingTip:
            "Analytical communicators let data be the advocate. Direct communicators advocate personally. Owen hides behind nothing but also stands behind the numbers, not his own authority.",
          styleContext:
            "Analytical communicators feel most confident when their recommendations can withstand scrutiny. They over-prepare because they want the data to be unassailable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not discussed team morale, the emotional toll of rework, or how the current process makes people feel. His entire case is built on numbers and efficiency metrics.",
          observation:
            "There are no personal stories, no emotional appeals, and no references to team satisfaction. Owen is arguing from data, not from experience.",
          coachingTip:
            "Ask yourself: is this person building a case from evidence or from experience? Owen has eight weeks of measured data - this is pure analytical argumentation.",
          styleContext:
            "Analytical communicators believe that well-measured evidence is more persuasive than any personal experience. They invest in the data because they trust it to speak louder than they can.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen's manager is sceptical, arguing the current process works well enough and changing it would be disruptive. Owen has presented ROI data showing the change pays for itself in two months. How do you support Owen's case?",
      options: [
        {
          id: "s215-opt-a",
          text: "Owen's data shows 18 hours of monthly rework at an 11.4% error rate. The automation has a three-week build and two-month payback. The question is not whether to change - it is when we start.",
          score: 10,
          result: "strong",
          explanation:
            "You have reinforced Owen's data, restated the ROI timeline, and reframed the decision as one the data has already made. This is how to support an analytical communicator's proposal.",
        },
        {
          id: "s215-opt-b",
          text: "The team has been complaining about the reporting process for months. It is clearly causing frustration, and Owen has done the work to quantify what we all already knew. I think we should trust his analysis.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive of Owen but relies on team sentiment rather than data. Owen's case is built on evidence, not feelings. Adding 'we all already knew' undermines the rigour of his research.",
        },
        {
          id: "s215-opt-c",
          text: "I think any process has inefficiencies if you look closely enough. Eighteen hours a month across a team of twelve is not that significant. We should focus on bigger priorities.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing measured data without counter-evidence is the fastest way to lose an analytical communicator's respect. Owen will see this as intellectually lazy and likely disengage.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to write a formal process improvement proposal where every recommendation is backed by specific data from his eight-week tracking period. Write it in an analytical style with full evidence traceability.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Process Improvement Proposal: Reporting Workflow Automation\nAuthor: Owen Grant | Data period: 8 weeks (13 January - 7 March 2026)\n\nCurrent state:\n- Workflow steps: 14 manual steps across 3 systems.\n- Average handoffs per report: 3.2.\n- Manual data entry error rate: 11.4% (measured across 142 reports).\n- Average error correction time: 45 minutes per incident.\n- Total monthly rework: 18 hours (equivalent to 2.25 full working days).\n\nProposed change:\n- Reduce manual steps from 14 to 6 through automation of data transfer between systems.\n- Eliminate 2 of 3 handoff points by consolidating input to a single portal.\n- Introduce validation rules at data entry to reduce error rate from 11.4% to an estimated 3% or below.\n\nExpected benefits:\n- Rework reduction: From 18 hours/month to an estimated 4 hours/month (78% reduction).\n- Error rate: From 11.4% to under 3% (based on comparable automation implementations in similar workflows).\n- Time savings: 14 hours/month recovered for productive work.\n\nImplementation:\n- Timeline: 3 weeks (1 week configuration, 1 week testing, 1 week parallel running).\n- Cost: Estimated 8 hours of developer time plus 4 hours of user acceptance testing.\n- Payback period: 2 months (based on 14 hours/month saved vs 12 hours implementation cost).\n\nRisk:\n- Parallel running period mitigates risk of data loss during transition.\n- Rollback plan: Current process preserved and can be reactivated within 24 hours if needed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every claim in your proposal traces to Owen's measured data, the expected benefits are quantified with clear methodology, and the implementation plan includes risk mitigation. Owen would submit this with confidence.",
          observation:
            "You included a rollback plan, which demonstrates analytical thinking about risk. Owen would appreciate that you anticipated his manager's concern about disruption and addressed it preemptively.",
          coachingTip:
            "When writing proposals for analytical communicators, include risk mitigation alongside benefits. Acknowledging what could go wrong strengthens the case rather than weakening it.",
          styleContext:
            "Analytical communicators see risk acknowledgement as a sign of thorough thinking, not a sign of doubt. Proposals that ignore risk look naive, not confident.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every benefit claim is traceable to the eight-week data. If any projection says 'we expect significant improvement' without a specific number, it needs quantifying.",
          observation:
            "If your proposal estimates time savings without showing the calculation, Owen will ask for the working. Better to include it upfront.",
          coachingTip:
            "Show your working. Analytical communicators trust proposals where they can verify every number themselves. If a reader has to take your word for a calculation, the proposal is incomplete.",
          styleContext:
            "Analytical communicators see transparent methodology as a mark of credibility. The more you show, the more they trust.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal either lacks specific numbers, uses vague improvement language, or does not trace recommendations back to the measured data. Owen would not submit this.",
          observation:
            "If your proposal says 'the current process is inefficient and we recommend automation' without quantifying the inefficiency or the expected improvement, it is an opinion piece, not a data-backed proposal.",
          coachingTip:
            "Return to Owen's eight weeks of data. Every recommendation should start with a measured finding and end with a quantified expected outcome. That is the structure Owen demands.",
          styleContext:
            "Analytical communicators will not attach their name to proposals that cannot withstand scrutiny. The evidence is their reputation.",
        },
      },
    },
  },

  // Scenario 216 - Fiona Banks, one-to-one, advanced
  {
    id: "scenario-216",
    title: "The Methodology Disagreement",
    context:
      "Fiona is in a one-to-one with a senior colleague who has challenged her choice of analytical methodology for a client project. The colleague favours a simpler approach; Fiona believes the complexity is warranted.",
    chooseContext:
      "The colleague has argued that the simpler method produces results that are 'good enough' and that Fiona's approach is over-engineered for the client's needs. Fiona disagrees and has evidence to support her position.",
    rewriteContext:
      "Fiona has asked you to write a methodology justification document that explains her chosen approach, compares it to the simpler alternative, and demonstrates why the additional complexity is warranted for this specific engagement.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed both approaches against the client's data set. The simpler method produces results with a margin of error of plus or minus 8%. My approach brings that down to plus or minus 2.5%. For a client making a 2 million pound investment decision based on this analysis, that difference represents a potential 110,000 pound variance in projected returns. I would argue that is not over-engineering. That is appropriate rigour.",
    chooseDialogue:
      "I respect the preference for simplicity, and in many cases I would agree. But this is not a routine engagement. The client's data has three confounding variables that the simpler model does not account for. If we use the basic approach and the client discovers those variables were ignored, we lose credibility. Worse, they make a decision based on analysis that understated the risk. The additional complexity takes an extra two days. The cost of getting it wrong is measured in months.",
    rewriteDialogue:
      "Write the justification so a non-technical reader can follow the logic but a technical reader can verify the claims. I want both audiences served. For the non-technical reader: why the simpler approach is insufficient for this client. For the technical reader: the specific statistical basis for choosing the more rigorous model.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has compared two methodologies using margin of error, client investment scale, and confounding variable analysis to justify her choice of the more rigorous approach. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona defends her methodology with statistical precision, financial impact calculations, and specific technical arguments. Every point is evidence-based, and the case for complexity is itself structured with analytical rigour.",
          observation:
            "Notice how Fiona translates the margin of error difference into a pound figure the decision-maker can grasp. Analytical communicators make technical arguments accessible without dumbing them down.",
          coachingTip:
            "When someone defends a methodology by comparing statistical outcomes, quantifying risk, and identifying confounding variables, they are communicating at the highest analytical level. Engage with the evidence, not the preference.",
          styleContext:
            "Analytical communicators see methodology disputes as intellectual exercises, not personal conflicts. They welcome challenge because it sharpens their thinking.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is confident and assertive, which can look direct. But her confidence is built on evidence comparison, not personal conviction. She says 'the data shows' rather than 'I believe'.",
          observation:
            "A direct communicator would say 'trust me, the complex approach is better'. Fiona walks through the margin of error, the financial impact, and the confounding variables to prove it.",
          coachingTip:
            "Analytical communicators prove their position. Direct communicators assert it. Fiona is building an evidence chain, not asking for trust.",
          styleContext:
            "Analytical communicators would rather spend two hours building an evidence-based justification than two minutes asserting authority. The evidence is the authority.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not discussed her feelings about the challenge, her frustration at being questioned, or the interpersonal dynamics of the disagreement. The entire exchange is technical and evidence-focused.",
          observation:
            "There is no emotional language, no personal stories, and no appeal to relationship or trust. Fiona is arguing from data, not from experience.",
          coachingTip:
            "Ask yourself: is this person defending their judgement or their evidence? Fiona is defending the evidence. If the data supported the simpler approach, she would switch without hesitation.",
          styleContext:
            "Analytical communicators are loyal to evidence, not to their own ideas. If you can disprove their position with better data, they will change it without ego.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona's colleague argues the simpler method is 'good enough' and her approach is over-engineered. Fiona has shown the margin of error difference represents a 110,000 pound variance for the client. How do you support her position?",
      options: [
        {
          id: "s216-opt-a",
          text: "The simpler approach has plus or minus 8% versus 2.5% for Fiona's method. On a 2 million pound decision, that is 110,000 pounds of confidence. Two extra days is a fraction of that cost.",
          score: 10,
          result: "strong",
          explanation:
            "You have reinforced Fiona's argument using her own data, compared the cost of additional rigour to the cost of insufficient accuracy, and matched her analytical logic. This is how to support an analytical communicator's position.",
        },
        {
          id: "s216-opt-b",
          text: "I trust Fiona's judgement on methodology. She has been doing this type of analysis for years and she would not complicate things without good reason.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive but appeals to authority rather than evidence. Fiona has presented data; backing her with 'trust' rather than engaging with the numbers misses the point of how she argues.",
        },
        {
          id: "s216-opt-c",
          text: "The client probably does not care about the methodology as long as the results look reasonable. We should go with whichever approach is faster and save the detail for academic work.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing methodological rigour as academic is deeply disrespectful to an analytical communicator. Fiona has shown the real-world financial impact. This response ignores her evidence entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants you to write a methodology justification that serves both technical and non-technical readers. It should explain why the simpler approach is insufficient and why the chosen method is warranted. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Methodology Justification: Client Engagement 2026-Q1\n\nOverview (non-technical summary):\nThe client is making a 2 million pound investment decision based on our analysis. Two methodologies were evaluated. The simpler approach produces results with a margin of error of plus or minus 8%, meaning the projected return could vary by up to 160,000 pounds from the true figure. Our recommended approach reduces that margin to plus or minus 2.5%, narrowing the variance to 50,000 pounds. For a decision of this magnitude, we recommend the approach that gives the client the highest confidence in the numbers.\n\nTechnical comparison:\n\nMethod A (basic regression):\n- Margin of error: +/- 8% (n=340, R-squared: 0.72).\n- Confounding variables addressed: 0 of 3 identified.\n- Time required: 3 days.\n\nMethod B (multi-variate analysis with confound adjustment - recommended):\n- Margin of error: +/- 2.5% (n=340, R-squared: 0.91).\n- Confounding variables addressed: 3 of 3 (seasonal demand patterns, supplier pricing cycles, regulatory compliance costs).\n- Time required: 5 days.\n\nWhy Method B is warranted:\n1. The client's data contains three confounding variables (listed above) that inflate the error rate in Method A. Ignoring them does not remove their effect - it hides it.\n2. The financial impact of the margin of error difference is 110,000 pounds on a 2 million pound decision. The additional 2 days of analytical work costs approximately 1,600 pounds.\n3. If the client later identifies that confounding variables were not controlled for, our credibility is compromised regardless of whether the final number was close.\n\nRecommendation: Proceed with Method B. The cost-benefit ratio (1,600 pounds invested to reduce variance by 110,000 pounds) is unambiguous.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your justification serves both audiences, provides full statistical comparison, and makes the cost-benefit case in concrete terms. Fiona would present this with confidence to any stakeholder.",
          observation:
            "You included R-squared values and specific confounding variables, which gives the technical reader everything they need to verify the claim. For the non-technical reader, the pound figures tell the story.",
          coachingTip:
            "When writing methodology justifications for analytical communicators, serve two audiences in clearly labelled sections. The non-technical reader needs the conclusion; the technical reader needs the evidence.",
          styleContext:
            "Analytical communicators believe that a well-written justification makes the right answer obvious. If the document is clear enough, the reader arrives at the same conclusion independently.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the non-technical section truly stands alone and whether the technical section includes enough detail for verification. Both audiences should be fully served by their respective sections.",
          observation:
            "If the non-technical summary includes statistical terminology, or if the technical section lacks specific values, the document does not serve either audience properly.",
          coachingTip:
            "Test each section by asking: could someone in this audience make a decision based solely on what I have written here? If not, add the missing information.",
          styleContext:
            "Analytical communicators write for verification, not for persuasion. The document should make the conclusion inevitable, not just appealing.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your justification either lacks statistical comparison, uses vague language about accuracy, or does not separate the audiences. Fiona wanted precision for both the technical and non-technical reader.",
          observation:
            "If your document says 'our recommended approach is more accurate' without quantifying by how much and what the financial impact is, it is too vague for Fiona.",
          coachingTip:
            "Go back to the numbers. The entire case rests on the difference between 8% and 2.5% margin of error and what that means in pounds for a 2 million pound decision. Make those numbers the centrepiece.",
          styleContext:
            "Analytical communicators see vague methodology justifications as professionally irresponsible. If you cannot quantify why one approach is better, you have not done the analysis.",
        },
      },
    },
  },
];
