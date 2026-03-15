import { Scenario } from "@/types";

export const SCENARIOS_PART9: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (97-99)
  // ============================================

  // Scenario 97 - Jordan Cole, conflict, foundation
  {
    id: "scenario-97",
    title: "The Process Standoff",
    context:
      "You are in a team meeting where Jordan has clashed with a colleague from operations over a proposed change to the procurement process. The colleague wants to add two extra approval steps. Jordan has cut across them mid-sentence.",
    chooseContext:
      "Jordan has made his position clear and is now looking at you to back him up. The operations colleague is visibly frustrated and the room has gone quiet.",
    rewriteContext:
      "Jordan has asked you to send a follow-up email to the operations manager summarising why the additional approval steps will not be adopted. He wants it sent before lunch.",
    characterId: "jordan-cole",
    dialogue:
      "Two more approval steps? No. That adds three days to every order. We are not slowing down procurement because someone wants more sign-offs. If there is a compliance gap, show me the evidence. Otherwise, we keep the current process.",
    chooseDialogue:
      "You were in the room. Tell me straight: am I wrong, or is this just process for the sake of process? I need someone who will give me a direct answer.",
    rewriteDialogue:
      "Send the operations manager an email. Keep it factual: the proposal adds delay, there is no evidence of a compliance gap, and we are not adopting it. Do not soften it. If they want to escalate, they can.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has shut down a colleague's proposal in a meeting by demanding evidence and rejecting additional process steps. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan's response is blunt, fast, and outcome-focused. He rejects the proposal on the grounds of speed and demands evidence before considering any change. That is classic direct communication.",
          observation:
            "Notice the flat refusal followed by a conditional: 'show me the evidence'. Jordan is not exploring options or asking for feelings. He is making a decision and moving on.",
          coachingTip:
            "When someone rejects an idea immediately based on its impact on speed or results, they are likely a direct communicator. They value efficiency over consensus.",
          styleContext:
            "Direct communicators in conflict situations become more decisive, not less. They see prolonged debate as wasted time and prefer to resolve disagreements quickly.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does mention evidence, which might seem analytical. However, he is not asking to study the data carefully; he is using it as a challenge to end the debate. An analytical communicator would want to review the compliance data before deciding.",
          observation:
            "The phrase 'show me the evidence' is being used as a rhetorical device to shut down the proposal, not as a genuine request for analysis.",
          coachingTip:
            "When someone mentions evidence but uses it as a condition for even considering a change, that is direct. When someone genuinely wants to sit with the data, that is analytical.",
          styleContext:
            "Direct communicators sometimes use data references as a decisive tool, whereas analytical communicators use data as an investigative tool. The intent differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan is not concerned about how the operations colleague feels, nor is he trying to build enthusiasm for an alternative. His focus is entirely on protecting speed and efficiency.",
          observation:
            "There is no acknowledgement of the colleague's perspective, no attempt to find common ground, and no interest in discussing feelings. This is purely task-driven.",
          coachingTip:
            "In conflict, notice whether the person leads with results and decisions or with relationships and feelings. Jordan leads with the impact on outcomes, which signals a direct style.",
          styleContext:
            "Direct communicators handle conflict head-on and quickly. They would rather have a sharp disagreement that resolves fast than a drawn-out diplomatic process.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan is asking you to give him a straight answer about whether the extra approval steps are justified. The room is tense. How do you respond?",
      options: [
        {
          id: "s97-opt-a",
          text: "You are right on the delay; the data shows three extra days per order with no reduction in procurement errors over the last two quarters. The current process is working. I would push back on the proposal.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Jordan exactly what he asked for: a direct answer backed by a fact. You have taken a position without hedging, which a direct communicator respects.",
        },
        {
          id: "s97-opt-b",
          text: "I can see both sides, to be honest. The operations team might have a point about risk, but the delay is a real concern. Maybe we should look at a compromise that adds one step instead of two.",
          score: 5,
          result: "partial",
          explanation:
            "This is balanced but non-committal. Jordan asked for a straight answer, and 'I can see both sides' will feel like fence-sitting to a direct communicator.",
        },
        {
          id: "s97-opt-c",
          text: "I think we should probably take some time to hear the operations team out properly. They might feel unheard right now, and it could damage the working relationship if we dismiss their concerns too quickly.",
          score: 0,
          result: "weak",
          explanation:
            "This focuses on the relationship and feelings rather than answering Jordan's question. He asked whether the proposal has merit, not how the other team feels.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to email the operations manager explaining that the additional approval steps will not be adopted. Write it in a direct style: factual, clear, and without softening language.",
      targetTraits: ["factual", "concise", "decisive", "no-hedging"],
      exampleStrongResponse:
        "Hi Karen,\n\nFollowing today's discussion, we will not be adding the two additional approval steps to the procurement process. The change would add an estimated three working days per order, and there is no evidence of a compliance gap in the current process.\n\nIf you have data showing a specific risk, send it across and we will review it. Otherwise, the current process stands.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your email is clear, factual, and leaves no room for misinterpretation. You have stated the decision, given the reasoning, and left the door open for evidence without softening the position.",
          observation:
            "You avoided phrases like 'unfortunately' or 'we appreciate your input', which would dilute the directness. The message is professional but firm.",
          coachingTip:
            "When writing on behalf of a direct communicator, avoid apologetic openers. State the decision first, then the reasoning. Keep it under six sentences if you can.",
          styleContext:
            "Direct communicators value written communication that mirrors how they speak: short, clear, and unambiguous. If the reader has to guess the answer, it is too soft.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right message but may include unnecessary softening or filler. Check whether you have apologised, hedged, or buried the decision in the middle of the text.",
          observation:
            "Phrases like 'after careful consideration' or 'we really value your suggestion' can feel insincere when the answer is no. A direct communicator would skip them.",
          coachingTip:
            "Read your email back and ask: is the decision in the first two sentences? If not, restructure so the answer comes first.",
          styleContext:
            "Direct communicators expect emails to lead with the conclusion. Context and reasoning come after, not before.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either avoids stating the decision clearly, over-apologises, or tries to soften the rejection to the point where the recipient might not realise it is a 'no'.",
          observation:
            "If your email could be read as 'maybe' or 'let us discuss further', it has not matched Jordan's intent. He wants a definitive communication.",
          coachingTip:
            "Try writing the word 'No' at the top of a blank page, then build one or two sentences of reasoning around it. That is the structure a direct communicator wants.",
          styleContext:
            "Direct communicators see unclear rejections as worse than blunt ones. Ambiguity creates false hope and wastes everyone's time.",
        },
      },
    },
  },

  // Scenario 98 - Sam Hartley, meeting, intermediate
  {
    id: "scenario-98",
    title: "The Strategy Derailment",
    context:
      "You are in a quarterly strategy meeting. Sam has grown impatient with the discussion drifting into operational detail and has interrupted the facilitator to refocus the room on the three decisions that need to be made today.",
    chooseContext:
      "Sam has asked each attendee to state their position on the first decision: whether to invest in a new product line or double down on the existing portfolio. He is going around the table and you are next.",
    rewriteContext:
      "Sam has asked you to draft the meeting action log before the room clears. He wants one line per decision, with the owner and deadline, and nothing else.",
    characterId: "sam-hartley",
    dialogue:
      "We have been in this room for 40 minutes and we have not made a single decision. We have three things to resolve today. I am listing them now, and we are going around the table. State your position, give your reason in one sentence, and we move on.",
    chooseDialogue:
      "Your turn. New product line or double down on what we have? Pick one and tell me why in one sentence.",
    rewriteDialogue:
      "Before anyone leaves, I want the action log written up. One line per decision: what was decided, who owns it, and when it is due. No commentary, no context. Just the commitments.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has interrupted a strategy meeting to refocus the room on decisions, demanding one-sentence positions from each attendee. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam is taking control of the meeting to drive towards outcomes. The one-sentence constraint, the round-the-table format, and the impatience with discussion all signal a direct communicator who values decisions over deliberation.",
          observation:
            "Sam has imposed structure not for thoroughness but for speed. The goal is to leave the room with three decisions, not three well-explored topics.",
          coachingTip:
            "When someone takes over a meeting to force decisions, they are displaying direct tendencies. They see meetings as decision-making forums, not discussion forums.",
          styleContext:
            "Direct communicators in meetings become frustrated when conversation loops without resolution. They intervene to compress discussion into decisions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. Sam is being structured, which can appear analytical. But the structure serves speed, not depth. An analytical communicator would want more time to examine each decision properly, not less.",
          observation:
            "The one-sentence constraint is the key. An analytical communicator would find this restrictive and insufficient for proper evaluation.",
          coachingTip:
            "Structure for speed signals direct. Structure for accuracy signals analytical. Ask yourself whether the person wants to decide quickly or decide correctly.",
          styleContext:
            "Direct communicators use structure to eliminate waffle. Analytical communicators use structure to ensure completeness. Same tool, different purpose.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam is not trying to make people feel included or to generate creative energy. He is frustrated by a lack of progress and is pushing for conclusions.",
          observation:
            "There is no invitation to share feelings, no enthusiasm about exploring ideas, and no concern about whether people are comfortable with the pace. This is task-focused leadership.",
          coachingTip:
            "In meetings, notice whether someone pushes for decisions (direct), data (analytical), ideas (expressive), or consensus (supportive).",
          styleContext:
            "Direct communicators evaluate meetings by the number of decisions made. If a meeting ends without clear outcomes, they consider it a failure.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has asked you to pick one option and explain your reasoning in one sentence. How do you respond?",
      options: [
        {
          id: "s98-opt-a",
          text: "Double down on the existing portfolio. Our current products have 22% headroom in underpenetrated markets, and splitting focus now risks both tracks underperforming.",
          score: 10,
          result: "strong",
          explanation:
            "This follows Sam's format precisely: a clear position followed by one sentence of reasoning with a specific data point. Direct communicators respect this discipline.",
        },
        {
          id: "s98-opt-b",
          text: "I think there are arguments for both, honestly. The new product line has potential, but there are risks. Could we perhaps look at a phased approach where we test the new line on a smaller scale first?",
          score: 5,
          result: "partial",
          explanation:
            "This avoids picking a side, which is exactly what Sam asked you to do. The suggestion of a phased approach is reasonable but does not meet the brief of 'pick one'.",
        },
        {
          id: "s98-opt-c",
          text: "I would really like to hear what the rest of the team thinks first. There are some strong feelings around the table and I want to make sure everyone has had a chance to share their perspective before I weigh in.",
          score: 0,
          result: "weak",
          explanation:
            "This defers the decision and focuses on group feelings. Sam has specifically asked each person to state their position independently. Waiting for others signals indecision.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a one-line-per-decision action log with what was decided, who owns it, and when it is due. Write the action log in a direct style with no commentary or context.",
      targetTraits: ["concise", "structured", "specific-dates", "no-commentary"],
      exampleStrongResponse:
        "1. Double down on existing portfolio, no new product line this year. Owner: Sam Hartley. Due: implementation plan by 18 March.\n2. Reduce regional marketing spend by 12% and reallocate to digital. Owner: Lisa Graves. Due: revised budget by 25 March.\n3. Hire two additional account managers for the North region. Owner: You. Due: job specs live by 21 March.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Perfect. Each line follows the same structure: decision, owner, deadline. There is no padding, no opinion, and no ambiguity. Sam can forward this to the leadership team as-is.",
          observation:
            "You kept the format consistent across all three items, which makes it scannable. Direct communicators value documents they can read in under 10 seconds.",
          coachingTip:
            "Action logs for direct communicators should be ruthlessly formatted. If you find yourself writing 'it was agreed that', you are adding unnecessary words.",
          styleContext:
            "Direct communicators treat action logs as accountability tools. Each line is a contract. Keep them tight enough that there is no room for reinterpretation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your log captures the decisions but may include extra context or lack specific deadlines. Check whether every line has all three elements: decision, owner, date.",
          observation:
            "If any item says 'TBC' or 'to be confirmed', it will not satisfy Sam. He wants commitments, not placeholders.",
          coachingTip:
            "Apply a three-column test to each line: can you extract a What, a Who, and a When? If any column is empty, the line is incomplete.",
          styleContext:
            "Direct communicators see vague action items as unfinished business. An action without a deadline is just a suggestion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your log is either too narrative, missing deadlines, or includes commentary that Sam explicitly said to leave out. He asked for commitments, not minutes.",
          observation:
            "If your log reads like a meeting summary with phrases such as 'there was a productive discussion about', it is not an action log. Strip it back to decisions.",
          coachingTip:
            "Delete every word that is not a decision, a name, or a date. What remains is your action log.",
          styleContext:
            "Direct communicators distinguish sharply between meeting notes and action logs. They want the latter: a list of who is doing what by when.",
        },
      },
    },
  },

  // Scenario 99 - Alex Tran, one-to-one, advanced
  {
    id: "scenario-99",
    title: "The Career Ultimatum",
    context:
      "You are in a one-to-one with Alex, who has asked for a frank conversation about her career progression. She has told you she has received an external offer and wants to know where she stands before making a decision.",
    chooseContext:
      "Alex has listened to your initial response and is now pressing for specifics. She wants to know the exact timeline for a promotion and what would need to happen to make it a certainty, not a possibility.",
    rewriteContext:
      "Alex has asked you to put your commitment in writing. She wants an email she can refer back to that outlines the specific milestones she needs to hit and the timeline for her promotion decision.",
    characterId: "alex-tran",
    dialogue:
      "I will be straight with you. I have an offer from a competitor. It is a senior role with a 20% pay increase. I am not using it as leverage; I am telling you because I respect you enough to give you the chance to make a counter case. But I need specifics, not promises.",
    chooseDialogue:
      "I appreciate the sentiment, but 'we value you' is not a plan. What is the timeline? What do I need to deliver? And who makes the final call? I want facts, not reassurance.",
    rewriteDialogue:
      "Put it in writing. I want an email that sets out the milestones, the timeline, and the decision-maker. If I am going to turn down a concrete offer, I need something concrete in return.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has told you about an external offer and is asking for specific facts about her promotion prospects, rejecting vague reassurance. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex is handling a career-defining conversation with trademark directness: stating the situation plainly, setting a clear expectation, and explicitly rejecting vague promises. She wants a business case, not emotional support.",
          observation:
            "The phrase 'specifics, not promises' is a defining marker. Alex is treating her career move as a negotiation that requires concrete terms, not warm words.",
          coachingTip:
            "When someone in a career conversation asks for timelines and decision-makers rather than reassurance and support, they are communicating directly. Meet them with equal precision.",
          styleContext:
            "Direct communicators approach career conversations as transactions. They respect honesty, even if the answer is not what they want to hear. Vagueness feels disrespectful to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Alex's request for milestones and timelines could appear analytical. However, the driving force is action and decision-making, not analysis. She is not asking to study the promotion criteria; she wants to know the deal.",
          observation:
            "An analytical communicator would ask to review the competency framework, benchmark against peers, and examine historical promotion data. Alex wants a yes-or-no pathway.",
          coachingTip:
            "The difference lies in what they do with the information. Direct communicators want facts so they can decide. Analytical communicators want facts so they can evaluate.",
          styleContext:
            "Direct communicators in career conversations want clarity and commitment. Analytical communicators want thoroughness and fairness. Both are fact-based, but the purpose differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not seeking emotional validation or collaborative brainstorming about her future. She has framed this as a straightforward business conversation with a deadline attached.",
          observation:
            "Notice the absence of phrases like 'I feel undervalued' or 'I would love your thoughts on my development'. Alex has presented an offer, stated her terms, and asked for a response.",
          coachingTip:
            "In career conversations, notice whether the person frames the discussion around feelings and growth (supportive/expressive) or around facts and decisions (direct/analytical).",
          styleContext:
            "Direct communicators in career talks are not being cold; they are being efficient. They believe clarity respects both parties' time and avoids misunderstandings.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex wants to know the exact timeline for promotion, what she needs to deliver, and who makes the final call. How do you respond?",
      options: [
        {
          id: "s99-opt-a",
          text: "Fair enough. Promotion window is September. Hit your Q2 revenue target, complete the leadership programme by July, and get sign-off from the regional director. I will set up a meeting with her next week. Definitive answer by 1 October.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Alex exactly what she asked for: a timeline, specific deliverables, a named decision-maker, and a definitive deadline. It matches her directness with equal precision.",
        },
        {
          id: "s99-opt-b",
          text: "I hear you, and I genuinely want to make this work. Let me go away and speak to a few people and come back to you with a clearer picture. I think there is a strong case for you, but I need to check a few things first.",
          score: 5,
          result: "partial",
          explanation:
            "This shows good intent but lacks the specifics Alex demanded. 'Come back to you' and 'check a few things' are too vague for someone who has a concrete offer on the table.",
        },
        {
          id: "s99-opt-c",
          text: "Alex, I just want you to know how much the team values you. You are an incredible asset and I would hate to see you go. Let me talk to HR about what we can do, and let us set up a follow-up to explore your development goals together.",
          score: 0,
          result: "weak",
          explanation:
            "This is entirely relationship-focused and avoids every specific question Alex asked. She explicitly said she does not want reassurance; she wants a plan. This response will push her towards the external offer.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants a written email setting out the milestones, timeline, and decision-maker for her promotion. Write it in a direct style: specific, committed, and structured so she can hold you to it.",
      targetTraits: ["specific-milestones", "named-decision-maker", "definitive-timeline", "committed-tone"],
      exampleStrongResponse:
        "Alex,\n\nHere is what needs to happen for your promotion to Senior Account Director:\n\n1. Hit or exceed your Q2 revenue target of 340K by 30 June.\n2. Complete the leadership programme and submit your portfolio by 31 July.\n3. Receive sign-off from Regional Director, Claire Weston. I will arrange a meeting with her by 21 March.\n\nIf all three are met, I will submit your promotion case in the September window. You will have a definitive answer by 1 October.\n\nI am putting my name behind this. Let me know your decision on the external offer by Friday so I can start the process.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured, specific, and gives Alex something she can hold you accountable to. You have named milestones, dates, and a decision-maker, which is exactly what she asked for.",
          observation:
            "The numbered format and definitive language show you understand how to communicate with a direct person in high-stakes situations. There is no ambiguity.",
          coachingTip:
            "In career conversations with direct communicators, your written commitment carries the same weight as a contract. Make sure every statement is something you can deliver.",
          styleContext:
            "Direct communicators keep emails like this and will reference them months later. Write accordingly: clear, trackable, and honest.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email addresses the right areas but may lack specificity on dates, milestones, or the decision-maker. Check whether Alex could use this email to hold you to account in six months.",
          observation:
            "If any milestone says 'we will review' or 'subject to', it weakens the commitment. Alex wants certainty, not conditions.",
          coachingTip:
            "Replace every vague phrase with a number or a name. 'We will look at promotion in due course' becomes 'Promotion decision by 1 October, pending three milestones'.",
          styleContext:
            "Direct communicators lose trust when written commitments are watered down with caveats. Be bold and specific, even if it feels uncomfortable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too vague, too emotional, or avoids the specifics Alex requested. She asked for milestones, a timeline, and a decision-maker. If any of those are missing, the email fails the brief.",
          observation:
            "If your email reads more like a pep talk than a plan, it will not land with Alex. She is comparing your words against a concrete job offer.",
          coachingTip:
            "Write the email as if it will be forwarded to a lawyer. Would the commitments hold up? If not, they are not specific enough for a direct communicator.",
          styleContext:
            "Direct communicators in career negotiations want parity: a concrete offer deserves a concrete counter. Anything less signals that you are not serious.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (100-102)
  // ============================================

  // Scenario 100 - Priya Sharma, meeting, foundation
  {
    id: "scenario-100",
    title: "The Board Pitch",
    context:
      "You are attending a board meeting where Priya has been asked to present the case for investing in a new employee wellbeing programme. Rather than opening with the budget slide, she has launched into a story about a team member who nearly burned out last year.",
    chooseContext:
      "Priya has finished her story and is now asking the board to imagine what the company could look like in two years if wellbeing was embedded into the culture. She is looking for allies in the room.",
    rewriteContext:
      "Priya has asked you to help her draft the closing statement for the board pack. She wants it to inspire action, not just summarise data.",
    characterId: "priya-sharma",
    dialogue:
      "Before I show you the numbers, let me tell you about Jess. She is one of our best project managers, and six months ago she was on the verge of walking out. Not because of the work, but because nobody asked her how she was. That is the gap we are filling. This programme is not a cost; it is a statement about who we want to be.",
    chooseDialogue:
      "Now picture this: two years from now, every new starter says this is the best company they have ever worked for. Our retention numbers are in the top quartile. Our Glassdoor rating is a 4.7. That is not fantasy; that is what happens when you invest in people. Who is with me?",
    rewriteDialogue:
      "I need the closing paragraph to land with impact. Do not just list the benefits. Write something that makes the board feel the urgency and the opportunity. I want them to leave this room ready to act.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a board presentation with a personal story rather than data and described the investment as 'a statement about who we want to be'. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya is using storytelling, vision, and emotional framing to make her case. Leading with a human story rather than a budget slide and using aspirational language are hallmarks of expressive communication.",
          observation:
            "The shift from an individual story to a company identity statement ('who we want to be') is a classic expressive technique. She is connecting hearts before minds.",
          coachingTip:
            "When someone opens a business case with a story or a vision rather than data, they are likely expressive. They believe people are persuaded by meaning, not just metrics.",
          styleContext:
            "Expressive communicators in board settings use narrative to create momentum. They see data as supporting evidence, not the headline act.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does show care for the individual, which can seem supportive. But the key difference is her ambition and energy. A supportive communicator would focus on Jess's wellbeing quietly; Priya is using Jess's story to inspire a room full of board members.",
          observation:
            "Supportive communicators care about the person. Expressive communicators care about the person and want to broadcast that caring to change the system.",
          coachingTip:
            "If the person is telling a story to one individual to comfort them, that is supportive. If they are telling it to a room to inspire change, that is expressive.",
          styleContext:
            "Expressive and supportive styles both value people, but expressive communicators use that value as a rallying cry. They want to create a movement, not just a moment.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not leading with data, process, or efficiency. She is leading with emotion, vision, and storytelling. That places her firmly in the expressive quadrant.",
          observation:
            "A direct communicator would have opened with the ROI. An analytical communicator would have opened with the research methodology. Priya opened with a human story.",
          coachingTip:
            "Notice what comes first in a presentation: data, decisions, feelings, or stories. Expressive communicators nearly always lead with a narrative.",
          styleContext:
            "Expressive communicators believe that the best business decisions start with a compelling 'why'. They use story and vision to build that foundation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has painted a two-year vision and asked 'who is with me?' She is looking for allies. How do you respond to match her energy?",
      options: [
        {
          id: "s100-opt-a",
          text: "I am with you, Priya. That is the kind of workplace people talk about when they say they love where they work. Back this now and we are building a reputation that attracts the best talent in the industry.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy and aspirational language. You have endorsed the vision, amplified it, and used forward-looking language. Expressive communicators thrive when others build on their enthusiasm.",
        },
        {
          id: "s100-opt-b",
          text: "It sounds promising. I think we should look at the data behind the retention claims and build a proper business case with projected ROI before we commit. Can we see the numbers?",
          score: 5,
          result: "partial",
          explanation:
            "This is a reasonable response but it deflates Priya's momentum by shifting to analysis at a moment when she is building energy. The data matters, but the timing of the request undermines her approach.",
        },
        {
          id: "s100-opt-c",
          text: "I think we need to be careful here. Wellbeing programmes can be expensive, and the evidence base for ROI is mixed. I would want to see a detailed cost-benefit analysis before supporting this.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Priya's approach by leading with caution and scepticism. While valid concerns, raising them immediately after her rallying call will be perceived as dismissive of her vision.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a closing paragraph for the board pack that inspires action, not just summarises data. Write it in an expressive style: visionary, energising, and people-centred.",
      targetTraits: ["visionary", "people-centred", "energising", "aspirational"],
      exampleStrongResponse:
        "This is not a programme; it is a promise. A promise that every person who works here will be seen, heard, and supported to do the best work of their career. The companies that thrive in the next decade will be the ones that invest in their people before their people invest elsewhere. We have the evidence, we have the plan, and we have the moment. The only question is whether we have the courage to lead.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing paragraph uses aspirational language, emotional framing, and a call to action. It reads like something a board would remember, which is exactly what Priya wants.",
          observation:
            "You balanced emotion with credibility by referencing evidence and a plan alongside the inspirational language. That is skilled expressive communication.",
          coachingTip:
            "When writing for expressive communicators, end with a question or a challenge. 'Will we lead?' is more powerful than 'we recommend proceeding'.",
          styleContext:
            "Expressive communicators want documents that move people. If your closing paragraph could be read aloud at a conference, it is probably pitched right.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your paragraph captures some of the right themes but may lack the emotional punch or aspirational sweep that Priya is looking for. Check whether it inspires or merely informs.",
          observation:
            "If your paragraph reads like a summary rather than a rallying cry, it needs more energy. Priya wants the board to feel something, not just note something.",
          coachingTip:
            "Try reading your paragraph aloud. If it sounds flat, add a rhetorical question or a bold statement about the future. Expressive communication needs rhythm.",
          styleContext:
            "Expressive communicators measure written communication by its emotional impact. A factually accurate but uninspiring paragraph misses the mark.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paragraph is either too data-focused, too cautious, or lacks the inspirational tone Priya requested. She specifically asked you not to just summarise data.",
          observation:
            "If your closing reads like 'the programme is projected to deliver a 12% improvement in retention', it is informing, not inspiring. Priya wants both, but she wants the inspiration to lead.",
          coachingTip:
            "Start with why it matters to people, then layer in a bold statement about the future. Finish with a call to action that makes saying 'no' feel like a missed opportunity.",
          styleContext:
            "Expressive communicators see board packs as opportunities to tell a story. The data is the evidence; the narrative is the argument.",
        },
      },
    },
  },

  // Scenario 101 - Marcus Webb, one-to-one, intermediate
  {
    id: "scenario-101",
    title: "The Mentoring Spark",
    context:
      "You are in a one-to-one with Marcus, who has been asked to mentor a new graduate hire. He is excited about the opportunity and has arrived with a whiteboard full of ideas for how to make the mentoring relationship creative and impactful.",
    chooseContext:
      "Marcus is now asking you to help him design the first mentoring session. He wants it to be memorable and different from the standard onboarding experience. He is buzzing with energy.",
    rewriteContext:
      "Marcus wants to send the graduate a welcome message before their first session. He wants it to feel personal, enthusiastic, and unlike any corporate email they have ever received.",
    characterId: "marcus-webb",
    dialogue:
      "I have been thinking about this all weekend. I do not want to just tick the mentoring boxes, you know? I want this to be the kind of experience that shapes how they see their whole career. I have got ideas for creative challenges, real projects, even a shadowing rotation. Let me walk you through what I have mapped out.",
    chooseDialogue:
      "For the first session, I am thinking we skip the usual 'here are your objectives' conversation and instead do something they will actually remember. Maybe a mini-project they present back to me by the end of the week? Something that gets them thinking and makes them feel like they matter from day one.",
    rewriteDialogue:
      "I want to send them a message that makes them genuinely excited to start. Not the usual 'welcome to the team, here is your laptop' email. Something that shows we actually care about who they are and what they could become. Help me write it.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus has arrived at a mentoring discussion with a whiteboard of creative ideas and wants to create a career-shaping experience rather than a standard programme. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is showing classic expressive traits: enthusiasm, big-picture thinking, creative ambition, and a desire to make the experience memorable and meaningful. He is not just mentoring; he is designing an experience.",
          observation:
            "The phrase 'shapes how they see their whole career' reveals the scope of Marcus's vision. Expressive communicators think in terms of transformation, not just development.",
          coachingTip:
            "When someone brings energy and creative ideas to a structured process, they are likely expressive. They see potential for impact where others see routine.",
          styleContext:
            "Expressive communicators approach mentoring as a creative opportunity. They want the relationship to be inspiring and memorable, not just functional.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does care about the graduate's experience, which can seem supportive. But the distinguishing factor is his creative ambition and energy. A supportive communicator would focus on making the graduate feel safe; Marcus wants to make them feel inspired.",
          observation:
            "Supportive communicators create comfort. Expressive communicators create excitement. Marcus is firmly in the excitement camp, with his whiteboard of ideas and weekend brainstorming.",
          coachingTip:
            "If someone is focused on how a person feels, that is supportive. If they are focused on creating a wow moment, that is expressive. Watch for energy levels and creative ambition.",
          styleContext:
            "Expressive communicators and supportive communicators both value people, but they express it differently. Expressive is about inspiration; supportive is about reassurance.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not focused on data, process, or efficiency. He has spent his weekend brainstorming creative ideas and arrived buzzing with energy. This is far from analytical or direct territory.",
          observation:
            "A direct communicator would want to set clear objectives and move on. An analytical communicator would research best practice mentoring frameworks. Marcus is designing an experience.",
          coachingTip:
            "Ask yourself: is this person driven by results, data, people, or ideas? Marcus is driven by ideas and impact, which points to expressive.",
          styleContext:
            "Expressive communicators bring creative energy to everything, including structured processes. They transform routine activities into opportunities for innovation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants to design a first mentoring session that is memorable and different. He has suggested a mini-project for the graduate to present by the end of the week. How do you respond?",
      options: [
        {
          id: "s101-opt-a",
          text: "I love that idea. What if you asked them to find one thing about the company they find genuinely exciting and build a five-minute pitch around it? It gives you insight into how they think and gives them ownership from day one.",
          score: 10,
          result: "strong",
          explanation:
            "This builds on Marcus's energy and adds a creative layer. You have matched his enthusiasm and contributed an idea that aligns with his vision. Expressive communicators are energised by collaborative ideation.",
        },
        {
          id: "s101-opt-b",
          text: "That could work, but we should make sure the project aligns with their role objectives. Maybe we set it up so the output feeds into their first-quarter development plan? That way it is fun but also structured.",
          score: 5,
          result: "partial",
          explanation:
            "This grounds the idea in practical terms, which is not wrong, but it dampens the creative energy Marcus brought to the conversation. He is not looking for structure right now; he is looking for co-creation.",
        },
        {
          id: "s101-opt-c",
          text: "I think we should be careful about overwhelming a new starter in their first week. Most graduates just want to settle in and understand the basics before taking on a project. Maybe we hold off on the creative stuff until month two.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down Marcus's creative energy entirely. While the concern has some validity, expressing it as a flat rejection will frustrate an expressive communicator who sees this as their best idea.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants to send the graduate a welcome message that feels personal, enthusiastic, and unlike a standard corporate email. Write it in an expressive style: warm, energising, and focused on potential.",
      targetTraits: ["warm", "enthusiastic", "personal", "future-focused"],
      exampleStrongResponse:
        "Hi Aisha,\n\nI am genuinely thrilled that you are joining the team. I have been your mentor for about 48 hours and I have already started planning some brilliant things for us to work on together.\n\nForget everything you have heard about corporate onboarding. We are going to do this differently. I want to find out what excites you, what challenges you, and what kind of impact you want to have. Your first week will not be about reading handbooks; it will be about discovering what you can bring to this place.\n\nBring your best ideas and your curiosity. I will bring the coffee and a whiteboard.\n\nSee you Monday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, personal, and full of energy. It breaks the mould of corporate communication and would make a new starter feel genuinely excited. This is exactly what Marcus was after.",
          observation:
            "You used informal, enthusiastic language without being unprofessional. The balance between warmth and ambition is what makes expressive communication land well.",
          coachingTip:
            "When writing for expressive communicators, let personality come through. Use first-person, show genuine excitement, and paint a picture of what is coming.",
          styleContext:
            "Expressive communicators believe first impressions set the tone for the entire relationship. A memorable welcome message creates energy that carries through the mentoring programme.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right ingredients but may be a little too formal or reserved for what Marcus wants. Check whether it sounds like a person wrote it or a template generated it.",
          observation:
            "If your message could be sent by any manager in the company without changing a word, it is not personal enough. Marcus wants it to sound distinctly like him.",
          coachingTip:
            "Add one unexpected line, something that breaks the corporate pattern. That is what makes the message memorable.",
          styleContext:
            "Expressive communicators want their personality to come through in everything they write. If the tone is interchangeable with any other manager, it is too generic.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a standard welcome email: polite but impersonal. Marcus specifically asked for something different, and a generic tone will disappoint him.",
          observation:
            "If your message includes phrases like 'please do not hesitate to reach out' or 'we look forward to welcoming you', it is following the template Marcus wanted to break.",
          coachingTip:
            "Write the standard email first, then delete it. Now write what you would actually say to someone you were excited to work with. That is the version Marcus wants.",
          styleContext:
            "Expressive communicators see standard corporate communication as a missed opportunity. Every message is a chance to connect, inspire, and stand out.",
        },
      },
    },
  },

  // Scenario 102 - Nina Okafor, conflict, advanced
  {
    id: "scenario-102",
    title: "The Territorial Clash",
    context:
      "You are witnessing a heated exchange between Nina and a colleague from the marketing team. The colleague has launched a client engagement campaign that overlaps with a project Nina has been developing for three months. Nina feels her territory has been invaded.",
    chooseContext:
      "Nina has made her frustration known and is now looking to you for support. She wants to resolve this quickly but is hurt that nobody consulted her before launching a campaign in her space.",
    rewriteContext:
      "Nina wants to send a message to the marketing lead proposing a collaborative approach going forward. She wants the tone to be assertive but open, making it clear that future overlap needs to be discussed in advance.",
    characterId: "nina-okafor",
    dialogue:
      "I have spent three months building relationships with those clients, and now marketing has launched a campaign targeting the same accounts without even telling me. I am not angry about competition; I am angry about the lack of respect. If we are going to overlap, at least have the conversation first. I bring ideas to the table too, and right now I feel completely sidelined.",
    chooseDialogue:
      "I know I need to calm down, but this is not just about territory. It is about trust. If people can launch into my space without a heads-up, what does that say about how this team operates? I want to fix this, but I need you to help me do it without losing my credibility.",
    rewriteDialogue:
      "I am going to reach out to the marketing lead. I do not want a war; I want a partnership. But I need the message to be clear: this cannot happen again without a conversation first. Help me write something that is firm but still opens the door for collaboration.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Nina is upset about a colleague launching a campaign in her space without consultation. She has expressed frustration through the lens of respect, trust, and being sidelined. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's response is emotionally charged but articulate. She frames the conflict in terms of respect, recognition, and collaboration rather than process or data. The openness about her feelings and the desire to contribute ideas are classic expressive traits.",
          observation:
            "The phrase 'I bring ideas to the table too' is revealing. Nina is not just upset about the overlap; she is upset about being excluded from the creative process. That is a core expressive concern.",
          coachingTip:
            "When someone in conflict talks about respect, recognition, and being heard rather than about process failures or data, they are likely expressive. Their frustration is about inclusion, not just outcomes.",
          styleContext:
            "Expressive communicators experience territorial conflicts as personal rejections. The issue is not the campaign; it is the message that their contribution was not valued enough to warrant a conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does care about the relationship, which can seem supportive. But supportive communicators in conflict tend to withdraw or accommodate. Nina is confronting the issue openly and assertively, which is more characteristic of expressive communication.",
          observation:
            "Supportive communicators in conflict might say 'it is fine, I will adjust'. Nina is saying 'this is not fine, and here is why'. She is expressing, not absorbing.",
          coachingTip:
            "The distinction is in the response to conflict. Supportive avoids or accommodates. Expressive confronts but through emotional expression rather than data or demands.",
          styleContext:
            "Expressive communicators in conflict are vocal and passionate. They want their feelings acknowledged before they can move to resolution. Supportive communicators want harmony restored quickly.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not approaching this analytically or with a purely results-driven lens. She is talking about feelings, respect, and being sidelined. The emotional language is central to her communication.",
          observation:
            "A direct communicator would say 'stay out of my accounts'. An analytical communicator would ask for a territory mapping exercise. Nina is expressing how the situation makes her feel.",
          coachingTip:
            "In conflict, expressive communicators reveal their emotions openly. If someone names their feelings and frames the issue around respect and recognition, that is expressive.",
          styleContext:
            "Expressive communicators see conflict as an opportunity for honest emotional expression. They do not hide their feelings; they use them to explain why the situation matters to them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina wants to resolve the territorial overlap but is hurt and wants to maintain her credibility. She has asked for your help. How do you respond?",
      options: [
        {
          id: "s102-opt-a",
          text: "You are right to be frustrated. Reach out to the marketing lead and propose a joint approach. Frame it as an opportunity, not a complaint. Lead with your genuine desire to collaborate. That turns a conflict into a conversation and keeps your credibility intact.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Nina's feelings, acknowledges her self-awareness, and channels her energy into a constructive action. It matches her expressive need for recognition while giving her a path forward.",
        },
        {
          id: "s102-opt-b",
          text: "I think the best approach is to document the overlap, map out the accounts clearly, and present a proposal for territory boundaries. That way there is a process to prevent this happening again.",
          score: 5,
          result: "partial",
          explanation:
            "This is logical and practical but skips over Nina's emotional needs. She has told you she feels sidelined and hurt. Jumping straight to process without acknowledging those feelings will feel dismissive.",
        },
        {
          id: "s102-opt-c",
          text: "Honestly, sometimes these things happen in big organisations. I would not take it personally. Just focus on your own work and let marketing do their thing. It will sort itself out.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Nina's feelings entirely. Telling an expressive communicator not to take something personally when they have explained exactly why it is personal will damage your relationship with her.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants to message the marketing lead proposing collaboration while making it clear that future overlap must be discussed first. Write it in an expressive style: assertive, open, and relationship-oriented.",
      targetTraits: ["assertive-but-warm", "collaborative", "emotionally-honest", "relationship-oriented"],
      exampleStrongResponse:
        "Hi Dev,\n\nI noticed the new client engagement campaign has some overlap with the accounts I have been developing over the past few months. I will be honest: I was surprised not to hear about it beforehand, because I think there is a real opportunity for us to work together on this rather than duplicating effort.\n\nI would love to set up a quick conversation to look at where our work intersects and how we can combine our strengths. I have some ideas that I think could make both our efforts stronger.\n\nGoing forward, it would mean a lot if we could flag any crossover before launching, so we can coordinate and make the most of what we are both bringing to the table. I am confident we can turn this into something much bigger than either of us could do alone.\n\nWhen are you free this week?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message is assertive without being aggressive, honest about the frustration, and opens the door to collaboration. It reflects Nina's expressive style: emotionally transparent but constructive.",
          observation:
            "You framed the boundary ('flag any crossover before launching') as a mutual benefit rather than a demand. That is skilled expressive communication in a conflict situation.",
          coachingTip:
            "When writing assertive messages for expressive communicators, pair every firm statement with a collaborative offer. 'This was not OK' becomes 'I think we can do better together'.",
          styleContext:
            "Expressive communicators resolve conflict by opening dialogue, not by setting rigid boundaries. Their assertiveness comes wrapped in an invitation to collaborate.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message addresses the issue but may be either too soft (avoiding the boundary) or too hard (sounding like a complaint rather than an invitation). Check the balance between honesty and openness.",
          observation:
            "If the message reads as purely diplomatic with no honest acknowledgement of frustration, it does not reflect Nina's expressive nature. She wants to be real, not just polite.",
          coachingTip:
            "Expressive communicators value authenticity in conflict. A message that is too polished or corporate will feel false. Let some genuine feeling show through.",
          styleContext:
            "Expressive communicators in conflict want to be heard and then to create something better. The message should achieve both.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either avoids addressing the conflict directly, reads as an accusation, or lacks the warmth and collaborative spirit Nina asked for. She wanted firm but open, not passive or aggressive.",
          observation:
            "If the message sounds like a formal complaint or a passive-aggressive note, it misses Nina's intent. She wants a relationship, not a ruling.",
          coachingTip:
            "Write the message as if you genuinely want to work with this person. If it sounds like you are building a case against them, start again with a collaborative opening.",
          styleContext:
            "Expressive communicators want conflict to end with a stronger relationship, not a documented grievance. The tone should be candid but warm.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (103-105)
  // ============================================

  // Scenario 103 - Tom Brennan, one-to-one, foundation
  {
    id: "scenario-103",
    title: "The Return Conversation",
    context:
      "You are having a one-to-one with Tom, who has returned to work after three weeks of sick leave for stress. He is clearly nervous about being back and is speaking quietly, checking whether the team has managed without him.",
    chooseContext:
      "Tom has opened up slightly and admitted he is worried about letting people down. He is asking whether his workload has been redistributed and whether people are frustrated with him for being away.",
    rewriteContext:
      "Tom has asked if you could send a brief note to the team on his behalf, letting them know he is back and easing him into the conversation. He does not want a fuss, but he also does not want to feel invisible.",
    characterId: "tom-brennan",
    dialogue:
      "I just want to check, honestly, has it been alright while I was away? I feel terrible about the timing. I know the project was at a crucial stage, and I keep thinking about what I left on everyone else's plate. I do not want people to think I was not coping.",
    chooseDialogue:
      "I suppose I am just worried that people are annoyed with me. I would not blame them. It is a lot of extra work. I just want to know that I have not damaged things, and that I can ease back in without causing more disruption.",
    rewriteDialogue:
      "Would you mind sending something to the team for me? Nothing big. Just something that says I am back and I am grateful. I do not want to make it awkward, but I also do not want to just appear at my desk without anyone knowing.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has returned from sick leave and is expressing worry about burdening the team, checking whether people are frustrated, and downplaying his own needs. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom is displaying hallmark supportive traits: concern for others before himself, anxiety about being a burden, and a desire for reassurance that relationships are intact. His focus is entirely on the team's wellbeing, not his own.",
          observation:
            "Notice how Tom frames his sick leave through the lens of its impact on others. He does not talk about his own recovery; he worries about 'what I left on everyone else's plate'.",
          coachingTip:
            "When someone returns from absence and their first instinct is to apologise for the inconvenience rather than discuss their own needs, they are likely a supportive communicator.",
          styleContext:
            "Supportive communicators prioritise harmony and other people's comfort, sometimes at the expense of their own needs. In sensitive situations, they need explicit reassurance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Tom's openness about his feelings could appear expressive. But expressive communicators share feelings with energy and confidence; Tom is sharing cautiously, seeking reassurance rather than connection.",
          observation:
            "An expressive communicator returning from sick leave might say 'it has been a journey, and I want to share what I have learned'. Tom says 'I hope I have not caused problems'. The energy is entirely different.",
          coachingTip:
            "Expressive communicators share feelings to create connection. Supportive communicators share feelings to check that relationships are safe. Notice the direction of the emotional energy.",
          styleContext:
            "Supportive communicators in vulnerable moments focus outward: are you OK with me? Expressive communicators focus outward too, but with more confidence: let me tell you about my experience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not asking about deadlines, data, or efficiency. He is asking about people and relationships. His entire concern is about how others feel about his absence.",
          observation:
            "A direct communicator would ask 'what did I miss and what do I need to catch up on?' An analytical communicator would want a briefing on project status. Tom wants to know if people are upset.",
          coachingTip:
            "Listen for what someone prioritises in a return-to-work conversation. If it is relationships and team feelings, it is supportive. If it is tasks and progress, it is direct or analytical.",
          styleContext:
            "Supportive communicators measure their return to work by the quality of their relationships, not the speed of their catch-up. Reassure them that the team is glad to have them back.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom is worried that the team is annoyed with him and wants to ease back in without causing disruption. How do you respond?",
      options: [
        {
          id: "s103-opt-a",
          text: "Tom, nobody is annoyed with you. The team pulled together because they care about you, not because they resented it. Your health matters more than any deadline. We have planned a gradual return at your own pace.",
          score: 10,
          result: "strong",
          explanation:
            "This addresses Tom's core fear directly: that people are upset with him. The reassurance is specific, warm, and includes a practical plan for a gradual return. This is exactly what a supportive communicator needs to hear.",
        },
        {
          id: "s103-opt-b",
          text: "Good to have you back. Here is where we are on the project: we managed to keep things on track, and I have put together a catch-up plan so you can get back up to speed quickly. Let me walk you through the priorities.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical and efficient but misses Tom's emotional needs. He did not ask about the project status; he asked whether people are upset. Jumping to tasks will feel like his feelings have been overlooked.",
        },
        {
          id: "s103-opt-c",
          text: "Look, you were off and the team covered. That is how it works. Do not overthink it. The main thing now is getting you back on the tools and closing the gap. Let us focus on what needs doing.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Tom's anxiety and jumps straight to task mode. 'Do not overthink it' will feel invalidating to a supportive communicator who is genuinely worried about the impact on his colleagues.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to send a brief note to the team letting them know he is back, expressed with gratitude and without making a fuss. Write it in a supportive style: warm, understated, and team-focused.",
      targetTraits: ["warm", "understated", "grateful", "team-focused"],
      exampleStrongResponse:
        "Hi team,\n\nJust a quick note to let you know that Tom is back with us from today. He wanted me to pass on how grateful he is for everything you all did to keep things running while he was away. He knows it meant extra work for everyone, and he genuinely appreciates it.\n\nHe is easing back in gradually over the next couple of weeks, so please do say hello and welcome him back when you get a chance. No fuss needed; just a friendly face will mean a lot.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your note is warm, grateful, and understated, exactly matching Tom's request. It acknowledges the team's effort, signals a gradual return, and invites warmth without creating pressure.",
          observation:
            "You avoided making Tom the centre of attention while still making him visible. That balance between acknowledgement and modesty is key to communicating on behalf of a supportive person.",
          coachingTip:
            "When writing on behalf of a supportive communicator, keep the focus on thanking others rather than drawing attention to the individual. They want to be included, not spotlighted.",
          styleContext:
            "Supportive communicators want to re-enter a group quietly but warmly. The ideal message says 'you are welcome here' without saying 'all eyes on you'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your note covers the essentials but may be either too formal or too focused on logistics. Check whether it conveys genuine warmth and gratitude.",
          observation:
            "If the note reads like an HR announcement rather than a team message, it misses the personal touch Tom was hoping for.",
          coachingTip:
            "Add one line that shows genuine human warmth, something like 'a friendly face will mean a lot'. That transforms an announcement into a welcome.",
          styleContext:
            "Supportive communicators can tell the difference between a procedural communication and a caring one. Small touches of warmth make a significant difference.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note is either too blunt, too formal, or focuses on work rather than the person. Tom asked for something warm and grateful, not an operational update.",
          observation:
            "If the note says 'Tom is back, here is his updated workload', it has missed the emotional point entirely. Tom wants the team to know he is grateful and to feel welcomed.",
          coachingTip:
            "Before sending, ask yourself: would Tom feel comfortable with this being read aloud? If it sounds cold or transactional, soften the language and add gratitude.",
          styleContext:
            "Supportive communicators judge communication by how it makes people feel. A note that is efficient but emotionless will not meet their standard.",
        },
      },
    },
  },

  // Scenario 104 - Leah Morgan, conflict, intermediate
  {
    id: "scenario-104",
    title: "The Blame Redirect",
    context:
      "You are in a team debrief after a project delivery went wrong. A colleague has publicly blamed Leah for missing a critical handover deadline. Leah has not responded aggressively but is visibly upset and is trying to address the situation calmly.",
    chooseContext:
      "Leah has spoken to you privately after the debrief. She is not angry at the colleague but is hurt by the public blame. She wants to resolve things but does not want to create more conflict.",
    rewriteContext:
      "Leah has asked you to help her draft a message to the colleague, acknowledging the missed handover but gently pointing out that the public blame was unfair. She wants to rebuild the relationship, not score a point.",
    characterId: "leah-morgan",
    dialogue:
      "I know I missed the handover window, and I take responsibility for that. But I do not think calling me out in front of the whole team was fair. I had flagged the risk two weeks ago, and nobody came back to me. I am not looking for a fight. I just want us to talk about it properly so it does not happen again.",
    chooseDialogue:
      "I am not angry at Jamie. I understand the pressure they were under. But it really stung being singled out like that, especially when I had tried to raise the issue earlier. I just want to clear the air without making it worse. Can you help me figure out how to approach this?",
    rewriteDialogue:
      "I want to send Jamie a message. Not aggressive, not passive. I want to own my part, but I also want them to understand how it felt being blamed publicly. I am not trying to win; I just want us to be able to work together properly again.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Leah has been publicly blamed in a debrief but is responding calmly, taking partial responsibility, and seeking a private conversation rather than a confrontation. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's response to being publicly blamed is textbook supportive: she takes responsibility for her part, avoids escalating, and prioritises restoring the relationship. Her goal is harmony, not victory.",
          observation:
            "The phrase 'I am not looking for a fight' is a key marker. Supportive communicators in conflict want resolution without damage. They will absorb unfairness to protect the relationship.",
          coachingTip:
            "When someone in conflict acknowledges their own fault before addressing the other person's behaviour, they are likely supportive. They lead with accountability, not accusation.",
          styleContext:
            "Supportive communicators often take more than their fair share of blame to de-escalate. This is a strength, but it can also mean their legitimate concerns go unheard if you are not attentive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does share her feelings, which can seem expressive. But the emotional expression is restrained and purposeful, aimed at restoring harmony rather than asserting herself. An expressive communicator would be more vocal and passionate about the unfairness.",
          observation:
            "Expressive communicators in conflict express loudly and seek acknowledgement. Supportive communicators express quietly and seek resolution. Leah is in the latter camp.",
          coachingTip:
            "Volume and energy are good differentiators. If someone shares feelings calmly and with the goal of peace, they are likely supportive. If they share feelings passionately and with the goal of being heard, they are likely expressive.",
          styleContext:
            "Supportive communicators in conflict often appear calm on the surface while feeling deeply hurt underneath. Their restraint is a coping strategy, not a sign of indifference.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not responding with data, demands, or efficiency. She is navigating the emotional terrain of a conflict, prioritising the relationship over being right.",
          observation:
            "A direct communicator would push back immediately. An analytical communicator would present evidence of the early risk flag. Leah is focused on how to move forward together.",
          coachingTip:
            "In conflict, supportive communicators ask 'how do we fix the relationship?' while direct communicators ask 'who is responsible?' and analytical communicators ask 'what does the evidence show?'",
          styleContext:
            "Supportive communicators would rather be hurt than hurtful. In conflict, they absorb the blow and then quietly seek repair. Recognise that their calm exterior may mask real pain.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants to clear the air with Jamie without making the situation worse. She has asked for your help figuring out how to approach the conversation. How do you respond?",
      options: [
        {
          id: "s104-opt-a",
          text: "A quiet, one-to-one conversation is the right approach. Acknowledge your part in the missed handover first to show good faith. Then explain that you flagged the risk earlier and that being called out publicly was hurtful. Focus on working together going forward, not assigning blame.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Leah's supportive approach: lead with accountability, share feelings honestly but gently, and focus on the future relationship. It gives her a framework that aligns with her natural style.",
        },
        {
          id: "s104-opt-b",
          text: "You should not have to smooth this over. Jamie was wrong to blame you publicly, and they need to hear that. Be direct: tell them it was unfair and that you expect a different approach next time. You do not need to apologise for their poor behaviour.",
          score: 5,
          result: "partial",
          explanation:
            "This validates the unfairness but pushes Leah towards a confrontational approach that does not fit her style. She has already said she does not want a fight. Coaching her to be aggressive will feel unnatural and unhelpful.",
        },
        {
          id: "s104-opt-c",
          text: "Honestly, I would just let it go. These things blow over quickly and bringing it up again might make it a bigger deal than it needs to be. Just focus on doing a great job on the next project and people will forget about it.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Leah's feelings and tells her to suppress a legitimate concern. While she does not want a confrontation, she does want to address the issue. Telling her to ignore it leaves the hurt unresolved.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants to send Jamie a message that owns her part in the missed handover while gently explaining that the public blame was hurtful. She wants to rebuild the working relationship. Write it in a supportive style: honest, non-confrontational, and forward-looking.",
      targetTraits: ["accountable", "non-confrontational", "honest-about-feelings", "forward-looking"],
      exampleStrongResponse:
        "Hi Jamie,\n\nI wanted to reach out after the debrief. You were right that the handover deadline was missed, and I take responsibility for my part in that. I should have escalated more firmly when I flagged the risk two weeks ago.\n\nI hope you do not mind me being honest: being called out in front of the team was difficult. I know it was not your intention to single me out, but it left me feeling quite exposed.\n\nI really value working with you, and I would like to make sure we can move past this. Could we grab a coffee and talk about how we handle handovers differently next time? I think we can set things up so neither of us is in that position again.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message balances accountability with honesty beautifully. You have owned the mistake, shared the emotional impact gently, and offered a path forward that protects the relationship. This is exactly how a supportive communicator would want to handle it.",
          observation:
            "The phrase 'I hope you do not mind me being honest' is a classic supportive technique: asking permission before sharing something vulnerable. It lowers the other person's defences.",
          coachingTip:
            "When writing on behalf of supportive communicators in conflict, always include three elements: accountability for their part, honest expression of feelings, and an invitation to move forward together.",
          styleContext:
            "Supportive communicators resolve conflict through vulnerability and repair. Their messages aim to strengthen the relationship, not to establish who was right.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message addresses the situation but may lean too heavily towards either blame or submission. Check whether you have balanced accountability with honesty about feelings.",
          observation:
            "If the message only apologises without mentioning the public blame, Leah's legitimate concern goes unaddressed. If it focuses too much on the blame, it becomes accusatory.",
          coachingTip:
            "Aim for a 40/30/30 split: 40% owning your part, 30% honest feelings, 30% forward-looking invitation. That balance reflects supportive communication in conflict.",
          styleContext:
            "Supportive communicators need their messages to feel fair, not just to themselves but to the recipient. They want the other person to feel respected, even while hearing difficult feedback.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either avoids the emotional honesty Leah wanted or comes across as confrontational. She asked for something honest but non-aggressive, and missing that balance undermines the goal.",
          observation:
            "If the message reads as either a full apology with no mention of the public blame, or a formal complaint about Jamie's behaviour, it does not reflect Leah's intent.",
          coachingTip:
            "Rewrite with Leah's voice in mind: she is someone who takes responsibility readily but also has the courage to share when something has hurt her. Both elements must be present.",
          styleContext:
            "Supportive communicators want conflict resolution to feel mutual and genuine. A message that is either all apology or all accusation will not feel right to them.",
        },
      },
    },
  },

  // Scenario 105 - David Chen, meeting, advanced
  {
    id: "scenario-105",
    title: "The Incident Review",
    context:
      "You are in an incident review meeting following a data breach that affected 200 customer accounts. David is chairing the meeting and has set the tone by opening with a reminder that the purpose is learning, not blame. Several people in the room look defensive.",
    chooseContext:
      "The discussion has reached the point where the root cause needs to be identified. A junior team member who made the configuration error is sitting in the room looking terrified. David has noticed and is managing the conversation carefully.",
    rewriteContext:
      "David has asked you to draft the summary paragraph for the incident report. He wants it to accurately describe what happened without making the junior team member feel personally responsible. He wants the language to focus on process gaps, not individual failings.",
    characterId: "david-chen",
    dialogue:
      "Before we go any further, I want to be clear about what this meeting is and what it is not. It is a chance to understand what happened and make sure it does not happen again. It is not a blame session. Everyone in this room was operating under pressure, and we owe it to each other to be honest without being hurtful. If anyone feels uncomfortable at any point, say so.",
    chooseDialogue:
      "We need to talk about the configuration step where the error occurred. Before we do, I want to say something: the person involved followed the process as they understood it. If the process allowed this to happen, that is a process failure, not a people failure. Let us focus on the system, not the individual.",
    rewriteDialogue:
      "I need the incident summary to be factual and fair. Describe the chain of events, identify the process gap, and recommend the fix. But do not write it in a way that reads like a disciplinary. The person involved is in this room, and they need to walk out of here knowing they are still valued.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David has opened an incident review by explicitly framing it as a learning exercise, not a blame session, and has invited people to speak up if they feel uncomfortable. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David is displaying advanced supportive leadership: creating psychological safety, protecting the most vulnerable person in the room, and framing a difficult conversation around learning rather than punishment. His priority is people, even in a high-stakes situation.",
          observation:
            "The invitation to speak up if uncomfortable is a deliberate act of inclusion. David is reading the room and adjusting the environment before any content is discussed. That is a hallmark of supportive communication.",
          coachingTip:
            "When a meeting chair prioritises the emotional safety of the room before addressing the facts, they are demonstrating a supportive style. They believe better outcomes emerge from safe environments.",
          styleContext:
            "Supportive communicators in leadership roles use their position to protect others. They see their job as creating the conditions where honest conversation can happen without fear.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's openness and inclusive language could seem expressive. But expressive communicators would add more energy and vision to the framing. David is quiet, careful, and protective, which is distinctly supportive.",
          observation:
            "An expressive leader might say 'this is an opportunity to come back stronger'. David says 'let us be honest without being hurtful'. The focus is on care, not inspiration.",
          coachingTip:
            "Expressive leaders energise a room. Supportive leaders calm a room. In a crisis meeting, notice whether the chair is creating energy or creating safety.",
          styleContext:
            "Supportive leaders in incident reviews act as shields. They position themselves between the facts and the people, ensuring accountability happens without damage.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not pushing for quick decisions or demanding root cause data. He is managing the human dynamics of a room full of anxious people. His priority is the emotional climate, not the operational facts.",
          observation:
            "A direct communicator would open with 'what went wrong and how do we fix it?' An analytical communicator would open with 'let us walk through the timeline'. David opened with 'let us be kind to each other'.",
          coachingTip:
            "The first words a meeting chair says reveal their style. If they set emotional boundaries before content boundaries, they are likely supportive.",
          styleContext:
            "Supportive communicators believe that how you conduct an investigation matters as much as what you find. They protect people's dignity even when holding them accountable.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has reframed the configuration error as a process failure and is protecting the junior team member. The discussion needs to continue. How do you contribute?",
      options: [
        {
          id: "s105-opt-a",
          text: "David is right. The configuration step had no automated validation and no peer check. Anyone could have made this error. Let us focus on what safeguards were missing and build them into the process going forward.",
          score: 10,
          result: "strong",
          explanation:
            "This reinforces David's framing by supporting the 'process, not person' narrative with specific observations. It normalises the error and redirects energy towards systemic improvement, which is exactly what David was trying to achieve.",
        },
        {
          id: "s105-opt-b",
          text: "I appreciate the sentiment, but we do need to understand exactly what happened at the individual level. Can we walk through the steps the person took so we can identify where the mistake was made?",
          score: 5,
          result: "partial",
          explanation:
            "This is factually reasonable but undermines the psychological safety David has created. Asking for a step-by-step individual account in a room where the person is already terrified will feel like an interrogation, regardless of intent.",
        },
        {
          id: "s105-opt-c",
          text: "Look, someone made an error that exposed 200 customer accounts. We need to be honest about accountability here. If the process was followed incorrectly, that is a training and competence issue, and we need to address it directly.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts David's carefully constructed safe environment. Framing the error as a competence issue in front of the person responsible will cause exactly the harm David was trying to prevent.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants the incident summary to be factual and fair, describing the process gap without making the junior team member feel personally responsible. Write the summary paragraph in a supportive style: accurate, process-focused, and protective of the individual.",
      targetTraits: ["factual", "process-focused", "protective", "fair"],
      exampleStrongResponse:
        "On 4 March, a configuration change was applied to the customer database without automated validation in place. The change followed the existing process documentation, which did not include a secondary review step for this type of modification. The absence of this safeguard meant the error was not detected until customer data had been exposed for approximately six hours. The root cause has been identified as a gap in the configuration management process, specifically the lack of automated checks and peer review for high-impact changes. A revised process with mandatory validation has been implemented effective immediately.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is factual and thorough without identifying or blaming the individual. By framing the root cause as a process gap, you have followed David's brief precisely and protected the team member's dignity.",
          observation:
            "You used passive constructions ('a change was applied') deliberately and appropriately to shift focus from person to process. That is a thoughtful choice in sensitive documentation.",
          coachingTip:
            "In incident reports for supportive leaders, describe what happened and what the system lacked, not who did what wrong. The lesson should be about better processes, not better people.",
          styleContext:
            "Supportive communicators want incident reports to be tools for improvement, not evidence for punishment. The language should make the reader think about systems, not individuals.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary covers the facts but may inadvertently point towards the individual through phrasing or level of detail about the specific actions taken.",
          observation:
            "If any sentence could be read as 'this person did this wrong', it needs reframing. David wants the summary to pass the test: could the junior team member read this and feel it was fair?",
          coachingTip:
            "Read each sentence and ask whether it describes a system gap or a personal error. Replace any personal attribution with process language.",
          styleContext:
            "Supportive communicators believe documentation should educate, not incriminate. The summary should leave every reader thinking about how to improve the process, not about who to blame.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either names the individual, describes their specific actions in a way that assigns blame, or fails to identify the process gap. David explicitly asked for a process-focused account.",
          observation:
            "If the summary reads like a factual account of one person's mistakes, it will feel like a disciplinary record. David wanted something that protects the individual while being honest about what happened.",
          coachingTip:
            "Remove any reference to the individual and restructure around the question: what should the process have prevented? That reframing shifts accountability from person to system.",
          styleContext:
            "Supportive communicators see a direct link between how you write about mistakes and how safe people feel to report them in future. Punitive language reduces future transparency.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (106-108)
  // ============================================

  // Scenario 106 - Rachel Finch, meeting, foundation
  {
    id: "scenario-106",
    title: "The Budget Challenge",
    context:
      "You are in a departmental budget meeting. Rachel has been asked to review the proposed marketing spend for the next quarter. While others in the room are enthusiastic about a bold new campaign, Rachel has quietly pulled up a spreadsheet and is questioning the projected return.",
    chooseContext:
      "Rachel has presented her analysis showing that the projected ROI is based on assumptions that differ from the last three quarters of actual performance. She is asking the group to explain the discrepancy before committing any budget.",
    rewriteContext:
      "Rachel has asked you to help her draft a follow-up email to the marketing team requesting the specific data she needs to validate their projections. She wants the request to be precise and methodical.",
    characterId: "rachel-finch",
    dialogue:
      "I can see the enthusiasm for this campaign, and I am not against it in principle. But the projected return of 340% is based on conversion rates we have never actually achieved. Our average over the last three quarters is 2.1%, and this projection assumes 3.8%. I need to understand where that number comes from before I can support the spend.",
    chooseDialogue:
      "I am not trying to block this. I just need the workings. Show me the conversion rate assumption, the cost-per-acquisition model, and the retention rate you have used. If the numbers stand up, I will back the proposal. If they do not, we need to adjust before we commit the budget.",
    rewriteDialogue:
      "Send the marketing team a data request. I need last quarter's actual conversion rates by channel, the cost-per-acquisition for each segment, and the retention rate assumptions they have used. Ask them to include the methodology, not just the headline numbers.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has questioned a campaign's projected ROI by comparing it with actual historical data and is asking for the methodology behind the assumptions. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's approach is textbook analytical: she has independently verified the claims, identified a specific discrepancy, and is requesting the underlying methodology before making a decision. She is evidence-driven, not emotion-driven.",
          observation:
            "The comparison between projected and actual conversion rates shows Rachel does her own homework. She is not taking the proposal at face value; she is testing it against real data.",
          coachingTip:
            "When someone responds to a proposal by asking for the data behind the assumptions rather than reacting to the conclusion, they are likely analytical. They trust evidence, not enthusiasm.",
          styleContext:
            "Analytical communicators in budget meetings act as quality controllers. They see their role as ensuring decisions are based on sound evidence, not on optimism.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel's challenge is task-focused, which can seem direct. But a direct communicator would make a quick decision based on the information available. Rachel is pausing to investigate, asking for workings and methodology.",
          observation:
            "The key difference is pace. A direct communicator says 'the numbers do not work, cut the budget'. Rachel says 'the numbers might not work; show me the evidence so I can evaluate properly'.",
          coachingTip:
            "Direct communicators decide quickly with available information. Analytical communicators gather more information before deciding. Rachel is gathering, not deciding.",
          styleContext:
            "Direct and analytical styles can look similar in meetings because both challenge proposals. The difference is that direct challenges lead to decisions; analytical challenges lead to deeper investigation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on how people feel about the campaign or on generating creative alternatives. She is focused purely on whether the data supports the proposal.",
          observation:
            "There is no emotional language, no concern for team dynamics, and no alternative vision. Rachel is testing a claim against evidence, which is a purely analytical activity.",
          coachingTip:
            "If someone's primary tool in a discussion is data and their primary question is 'what is the evidence?', they are analytical. Style shows in what they reach for first.",
          styleContext:
            "Analytical communicators in meetings often appear reserved or sceptical. They are not being negative; they are being rigorous. They support decisions that survive scrutiny.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has asked for the conversion rate assumption, cost-per-acquisition model, and retention rate before she will back the proposal. How do you respond to support the meeting's progress?",
      options: [
        {
          id: "s106-opt-a",
          text: "Rachel raises a valid point. Let us ask the marketing team to provide those three data points by Wednesday so we can reconvene with a clear evidence base. We approve the budget once the figures are verified.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Rachel's analytical approach by proposing a structured follow-up with specific data requirements and a timeline. It validates her concern without derailing the meeting.",
        },
        {
          id: "s106-opt-b",
          text: "I think the overall direction of the campaign is strong, and we should back it. We can always adjust the budget mid-quarter if the returns are not hitting the projections. Let us not overcomplicate this.",
          score: 5,
          result: "partial",
          explanation:
            "This dismisses Rachel's data concerns in favour of directional momentum. While the sentiment is valid, 'let us not overcomplicate this' will feel dismissive to an analytical communicator who sees rigour as essential, not optional.",
        },
        {
          id: "s106-opt-c",
          text: "I think the campaign concept is brilliant and the team has put amazing work into it. Let us back them and show our support. We can review the numbers afterwards and see how it lands.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises enthusiasm and team morale over evidence, which is the opposite of what Rachel is asking for. Approving a budget based on feelings rather than data will undermine her trust in the process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to send a data request to the marketing team asking for specific metrics and methodology. Write it in an analytical style: precise, structured, and focused on evidence.",
      targetTraits: ["precise", "structured", "evidence-focused", "methodical"],
      exampleStrongResponse:
        "Hi Marketing team,\n\nFollowing the budget meeting, we need the following data to validate the Q2 campaign projections before we can confirm the spend:\n\n1. Actual conversion rates by channel for Q4, Q1, and the most recent available period.\n2. Cost-per-acquisition for each customer segment, with the calculation methodology used.\n3. Retention rate assumptions for the projected ROI, including the data source and time period used as the baseline.\n\nPlease include the raw data and any assumptions underpinning the headline figures. We need this by Wednesday 19 March to allow time for review before the follow-up budget meeting on Friday 21 March.\n\nLet me know if any of these points need clarification.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your email is precise, structured, and asks for exactly the right level of detail. The numbered format, specific deadlines, and request for methodology mirror Rachel's analytical approach perfectly.",
          observation:
            "You asked for raw data as well as assumptions, which shows you understand that analytical communicators want to verify conclusions independently, not just receive summaries.",
          coachingTip:
            "When writing data requests for analytical communicators, be as specific as possible about what you need. Vague requests like 'send over the numbers' will return incomplete or unhelpful responses.",
          styleContext:
            "Analytical communicators write data requests the way scientists write research protocols: precise, replicable, and leaving no room for ambiguity.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email asks for the right information but may lack the specificity or structure Rachel would expect. Check whether each request is precise enough for the recipient to know exactly what to provide.",
          observation:
            "If any point says 'send the marketing data', it is too broad. Rachel would want to specify which metrics, which time periods, and which format.",
          coachingTip:
            "For each data point, specify: what metric, what time period, what format, and what level of detail. That transforms a vague ask into an analytical request.",
          styleContext:
            "Analytical communicators are frustrated by vague data requests because they produce vague responses. Precision in the request saves time for everyone.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too casual, too broad, or lacks the structure and precision Rachel asked for. She wanted a methodical request, not a general enquiry.",
          observation:
            "If the email says 'could you share some data to help us with the budget decision?', it is far too unstructured for an analytical communicator's standards.",
          coachingTip:
            "Rewrite the email using a numbered list with one specific data point per item. Include time periods, formats, and deadlines. Treat it like a specification document.",
          styleContext:
            "Analytical communicators judge the quality of a data request by its precision. A sloppy request signals sloppy thinking, and they will lose confidence in the process.",
        },
      },
    },
  },

  // Scenario 107 - Owen Grant, conflict, intermediate
  {
    id: "scenario-107",
    title: "The Methodology Dispute",
    context:
      "You are in a cross-department meeting where Owen has challenged the methodology used in a customer satisfaction report. The team that produced the report is defending their approach, but Owen has identified a sampling bias that he believes invalidates the headline conclusions.",
    chooseContext:
      "The report authors are pushing back, arguing that their methodology is industry standard. Owen is calm but insistent that the specific sample size and selection criteria are flawed. Tensions are rising as neither side is backing down.",
    rewriteContext:
      "Owen has asked you to help him draft a written response to the report authors, outlining the specific methodological concerns and proposing an alternative approach. He wants it to be evidence-based and professionally constructive.",
    characterId: "owen-grant",
    dialogue:
      "I have reviewed the report in detail, and there is a fundamental issue with the sample. You have surveyed 120 customers, but 87 of those came from the same region, and that region had a service upgrade six weeks ago. The satisfaction scores are skewed by recency bias. Your headline finding of 89% satisfaction does not represent the full customer base. I can show you the breakdown if it would help.",
    chooseDialogue:
      "I understand you followed the standard methodology, but standard does not mean appropriate for every context. The sample weighting does not account for regional variation, and without that adjustment, the 89% figure is misleading. I am not saying the work is bad; I am saying the conclusion needs qualifying. Here are the specific adjustments I would recommend.",
    rewriteDialogue:
      "I want to put my concerns in writing so there is a clear record. Walk through the sampling issue, explain why it matters, and suggest a reweighted analysis. Keep it professional. I am not trying to discredit the team; I am trying to get the right answer.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has challenged a report's methodology by identifying specific sampling bias, offering to share his analysis, and requesting that the conclusion be qualified. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen is displaying classic analytical conflict behaviour: he has done a thorough independent review, identified a specific technical flaw, and is presenting evidence calmly and methodically. His challenge is about accuracy, not authority.",
          observation:
            "The level of detail in Owen's challenge is key: he has not just said 'the numbers are wrong'; he has identified exactly why they are wrong, citing specific figures, regional breakdowns, and cognitive biases.",
          coachingTip:
            "When someone in a disagreement leads with specific evidence and offers to share their analysis, they are likely analytical. Their conflict is with the data, not the person.",
          styleContext:
            "Analytical communicators in conflict are driven by a need for accuracy. They do not challenge for the sake of it; they challenge because they have found something that does not add up.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen's challenge is assertive, which can seem direct. But a direct communicator would say 'the report is wrong, redo it'. Owen is explaining why it might be wrong and offering a specific alternative. The approach is investigative, not decisive.",
          observation:
            "Direct communicators in conflict push for a resolution. Analytical communicators push for the correct answer. Owen wants the right conclusion, not just a quick one.",
          coachingTip:
            "When someone's conflict behaviour includes offering to share their working, they are likely analytical. Direct communicators state conclusions; analytical communicators show their reasoning.",
          styleContext:
            "The difference in conflict is the end goal. Direct communicators want the issue resolved. Analytical communicators want the issue understood. Owen is firmly in the understanding camp.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not focused on how the report team feels or on building team spirit. He is focused on whether the data supports the conclusion. This is a purely intellectual challenge, not an emotional or relational one.",
          observation:
            "There is no concern for the team's morale, no attempt to build rapport, and no emotional language. Owen is debating methodology the way a scientist would peer-review a study.",
          coachingTip:
            "If someone in a disagreement cites specific numbers, identifies biases, and offers alternative methods, they are communicating analytically. The conflict is technical, not personal.",
          styleContext:
            "Analytical communicators often do not realise their challenges feel personal to others, because to them the debate is purely about methodology. Understanding this helps you mediate.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen and the report authors are at an impasse. Owen insists the sample is biased; the authors say the methodology is industry standard. How do you help move the discussion forward?",
      options: [
        {
          id: "s107-opt-a",
          text: "Both positions have merit. The methodology is standard, but Owen has found a context-specific issue. I suggest we run a parallel analysis: keep the original and ask Owen to produce a reweighted version. Present both to leadership and let the data speak for itself.",
          score: 10,
          result: "strong",
          explanation:
            "This validates both sides and proposes a data-driven resolution. Running parallel analyses lets the evidence settle the dispute without anyone losing face. An analytical communicator would appreciate this rigour.",
        },
        {
          id: "s107-opt-b",
          text: "I think we just need to make a call here. The report has been done, and it is good enough for the board. We can note Owen's concern as a caveat and move on. Redoing the analysis is going to cost time we do not have.",
          score: 5,
          result: "partial",
          explanation:
            "This prioritises speed over accuracy, which will frustrate Owen. Telling an analytical communicator that something is 'good enough' when they have identified a specific flaw will undermine their trust in the process.",
        },
        {
          id: "s107-opt-c",
          text: "I think we are all getting a bit caught up in the detail here. The customer satisfaction trend is positive, and that is the main story. Let us focus on the bigger picture and not get bogged down in sampling debates.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Owen's concern as detail-obsession, which is deeply disrespectful to an analytical communicator. The sampling issue is not a detail; it is the foundation of the entire conclusion. Ignoring it does not make it go away.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a written response outlining the sampling concern and proposing a reweighted analysis. Write it in an analytical style: evidence-based, structured, and professionally constructive.",
      targetTraits: ["evidence-based", "structured", "constructive", "technically-precise"],
      exampleStrongResponse:
        "Hi Sarah,\n\nThank you for the customer satisfaction report. The overall structure and presentation are strong, and I can see the effort that has gone into the analysis.\n\nI have one methodological concern I would like to raise. Of the 120 respondents, 87 (72.5%) are from the North West region, which received a service upgrade in January. This creates a potential recency bias, as customers in that region are disproportionately likely to report higher satisfaction in the weeks following an upgrade.\n\nThe current headline figure of 89% satisfaction may therefore overstate the position for the wider customer base. I would suggest running a reweighted analysis that adjusts for regional representation proportional to actual customer distribution. I have outlined a suggested approach below.\n\nI am happy to work through this together if it would be helpful. The goal is to ensure the board receives a figure they can rely on with full confidence.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response is technically precise, professionally worded, and offers a collaborative path forward. You have acknowledged the team's work, identified the specific issue with evidence, and proposed a solution. This is exactly what Owen was aiming for.",
          observation:
            "Starting with a positive acknowledgement before raising the concern is a smart approach when writing analytical criticism. It establishes goodwill and prevents the recipient from becoming defensive.",
          coachingTip:
            "When writing critical technical feedback for analytical communicators, lead with respect for the work, present the specific concern with data, and offer to collaborate on the fix. That structure preserves relationships while pursuing accuracy.",
          styleContext:
            "Analytical communicators want their criticism to be received as peer review, not as attack. The written format helps because it allows precise, measured language that verbal exchanges sometimes lack.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your response raises the right concern but may lack the specific evidence or the constructive tone Owen wanted. Check whether you have included the actual figures and offered a collaborative solution.",
          observation:
            "If the response says 'the sample might be biased' without specifying how, it is not analytical enough. Owen wants the exact numbers and the precise nature of the bias documented.",
          coachingTip:
            "Include the specific data points that support your concern. Analytical communicators build credibility through evidence, not through assertion.",
          styleContext:
            "Analytical communicators expect written criticism to be verifiable. If the reader cannot independently check your claims, the response lacks the rigour they value.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is either too vague, too aggressive, or lacks the evidence and structure Owen asked for. He wanted a professional, evidence-based communication, not a general complaint.",
          observation:
            "If the response says 'the report is wrong' without explaining exactly why, it will not meet Owen's standards. He wants the reader to understand the technical issue, not just the conclusion.",
          coachingTip:
            "Restructure your response around three elements: what the issue is, why it matters, and what you recommend. Include specific numbers for each. That is the analytical communication template.",
          styleContext:
            "Analytical communicators lose credibility when their written challenges lack evidence. The strength of their position depends on the rigour of their argument, not the force of their opinion.",
        },
      },
    },
  },

  // Scenario 108 - Fiona Banks, one-to-one, advanced
  {
    id: "scenario-108",
    title: "The Underperformance Diagnosis",
    context:
      "You are in a one-to-one with Fiona, who is your line manager. She has called the meeting to discuss a dip in your team's output over the past two months. Rather than expressing frustration, she has arrived with a printed dashboard and a list of questions designed to help you both identify the root cause.",
    chooseContext:
      "Fiona has reviewed the data with you and has narrowed the issue to two possible causes: a workflow bottleneck in the review stage and a skills gap in the newer team members. She wants you to confirm which factor is the primary driver and explain your reasoning.",
    rewriteContext:
      "Fiona has asked you to produce a one-page root cause analysis with a recommended action plan. She wants the analysis to be evidence-based, clearly structured, and ready to share with the senior leadership team.",
    characterId: "fiona-banks",
    dialogue:
      "I have been tracking the team's output over the last eight weeks, and there is a clear downward trend. I do not want to speculate about why. I have brought the data, and I would like us to walk through it together so we can identify the root cause properly. I have a few hypotheses, but I want to hear your perspective first, grounded in what you are seeing on the ground.",
    chooseDialogue:
      "Based on what we have reviewed, it looks like the issue sits in one of two areas: the review bottleneck or the skills gap. I need you to tell me which one is the bigger factor and why. Use the data we have in front of us, not a hunch. If both are contributing, quantify the split as best you can.",
    rewriteDialogue:
      "I need a one-page root cause analysis. Structure it clearly: current performance, identified cause, supporting evidence, and recommended actions. Keep it evidence-based. This will go to the senior leadership team, so it needs to stand up to scrutiny. No opinions without data.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has arrived at a performance discussion with printed dashboards, a list of questions, and a preference for data-driven diagnosis over speculation. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's approach is methodical, evidence-based, and investigative. She has prepared data in advance, withheld her own conclusions to avoid bias, and asked you to ground your perspective in evidence. This is a textbook analytical management style.",
          observation:
            "The phrase 'I do not want to speculate' is a strong analytical marker. Fiona sees speculation as the enemy of good decision-making and uses structured inquiry to replace it with evidence.",
          coachingTip:
            "When a manager arrives with data, asks questions before sharing their own view, and explicitly discourages guesswork, they are analytical. Prepare for these meetings with evidence, not opinions.",
          styleContext:
            "Analytical managers use one-to-ones as diagnostic sessions. They are not interrogating you; they are collaborating on a puzzle. Come with data and you will earn their respect.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Fiona's focus on performance could seem direct. But a direct manager would say 'output is down, what are you going to do about it?' Fiona is saying 'output is down, let us figure out why together'. The approach is collaborative investigation, not demand-driven.",
          observation:
            "Direct managers want solutions. Analytical managers want understanding that leads to solutions. Fiona will not accept a fix that is not grounded in a proper diagnosis.",
          coachingTip:
            "The key difference is whether the manager jumps to action or insists on diagnosis first. Fiona insists on diagnosis, which signals analytical over direct.",
          styleContext:
            "Analytical managers may appear slower to act because they invest more time in understanding. But the solutions they implement tend to be more precise because they are based on root cause analysis rather than surface symptoms.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not leading with empathy, enthusiasm, or concern for how you feel about the performance dip. She is leading with data and methodology. The conversation is framed as a diagnostic exercise, not an emotional check-in.",
          observation:
            "A supportive manager would ask 'how are you feeling about the team's performance?' An expressive manager would paint a vision of what success looks like. Fiona has printed a dashboard.",
          coachingTip:
            "The tools a manager brings to a one-to-one reveal their style. Data and questions signal analytical. Empathy and concern signal supportive. Vision and energy signal expressive.",
          styleContext:
            "Analytical managers show care through rigour. They believe the best way to help you is to help you understand the problem properly. Their preparation is their form of respect.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona wants you to identify the primary driver of the performance dip, choosing between the review bottleneck and the skills gap, and to support your answer with data. How do you respond?",
      options: [
        {
          id: "s108-opt-a",
          text: "The primary driver is the review bottleneck. Average turnaround has increased from 1.2 to 3.4 days over six weeks, while the skills-related error rate only rose from 4% to 5.1%, which is normal variation. I estimate the bottleneck accounts for 75% of the output drop. That is where we intervene first.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Fiona exactly what she asked for: a clear primary driver, quantified reasoning, a proportional split, and a specific recommendation. Every statement is grounded in data from the dashboard.",
        },
        {
          id: "s108-opt-b",
          text: "I think it is probably a mix of both, honestly. The review stage has been slow, and the newer team members are still finding their feet. It is hard to separate the two because they are connected. I think we need to address both at the same time.",
          score: 5,
          result: "partial",
          explanation:
            "This is directionally sensible but too imprecise for Fiona. She asked you to quantify the split and identify the primary driver. 'Probably a mix of both' and 'hard to separate' will feel like insufficient analysis.",
        },
        {
          id: "s108-opt-c",
          text: "Honestly, I think the team has been under a lot of pressure lately, and morale is a factor. People are working long hours and feeling stretched. I think if we focused on team wellbeing, the output would naturally recover.",
          score: 0,
          result: "weak",
          explanation:
            "This introduces a factor (morale) that is not supported by the data in front of you, which is exactly what Fiona asked you to avoid. She wants a data-driven answer, not an intuitive one.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a one-page root cause analysis structured as: current performance, identified cause, supporting evidence, and recommended actions. Write it in an analytical style: evidence-based, clearly structured, and ready for senior leadership scrutiny.",
      targetTraits: ["evidence-based", "clearly-structured", "specific-metrics", "actionable-recommendations"],
      exampleStrongResponse:
        "Root Cause Analysis: Team Output Decline (January to March)\n\nCurrent Performance:\nTeam output has declined by 18% over the past eight weeks, from an average of 42 completed units per week to 34.5. The decline has been consistent, with no single week showing recovery.\n\nIdentified Cause:\nThe primary driver (estimated 75% contribution) is a bottleneck at the review stage. Average review turnaround has increased from 1.2 days to 3.4 days, caused by a reduction in available reviewers from four to two following internal transfers in January. A secondary factor (estimated 25% contribution) is a skills gap in three newer team members, whose error rate is 5.1% compared to the team average of 2.3%.\n\nSupporting Evidence:\n- Review queue depth has tripled since week 3 (from 8 items to 24 items on average).\n- Newer team members account for 61% of items returned for rework.\n- Output in non-review-dependent tasks has remained stable, confirming the bottleneck is stage-specific.\n\nRecommended Actions:\n1. Recruit or reassign one additional reviewer by 28 March to restore capacity. Owner: line manager.\n2. Implement a structured skills programme for the three newer team members, with fortnightly progress reviews. Owner: team lead. Start: 17 March.\n3. Introduce a daily review queue check to identify and escalate backlogs before they compound. Owner: team lead. Start: immediately.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your analysis is precisely structured, evidence-rich, and actionable. Each section follows a logical flow from observation to cause to evidence to solution. Fiona can share this with senior leadership with full confidence.",
          observation:
            "You quantified the contribution of each factor, included specific metrics, and attached owners and deadlines to every recommendation. This is the standard of rigour an analytical leader expects.",
          coachingTip:
            "When writing root cause analyses for analytical leaders, every claim needs evidence and every recommendation needs an owner, a deadline, and a measurable outcome.",
          styleContext:
            "Analytical leaders judge written analysis by whether it would survive cross-examination. If a board member could challenge any claim and you could defend it with data, you have met the standard.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your analysis covers the right ground but may lack the quantified evidence or structured format Fiona specified. Check whether every section has specific metrics and whether the recommendations have owners and deadlines.",
          observation:
            "If any section relies on general statements like 'the review stage has been slow' without specifying how slow, it is not precise enough for an analytical audience.",
          coachingTip:
            "Replace every qualitative observation with a quantitative one. 'The review stage is slow' becomes 'review turnaround has increased from 1.2 to 3.4 days'. Numbers build credibility.",
          styleContext:
            "Analytical communicators read qualitative statements as placeholders for data that should have been included. Every adjective should ideally be replaced with a number.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your analysis is either unstructured, opinion-based, or lacks the evidence and rigour Fiona explicitly requested. She said 'no opinions without data', and if your analysis contains unsupported claims, it will not pass her threshold.",
          observation:
            "If your document reads like a narrative about what you think is happening rather than a structured diagnosis of what the data shows, it needs a fundamental restructure.",
          coachingTip:
            "Start again with four headings: Current Performance, Identified Cause, Supporting Evidence, Recommended Actions. Under each heading, include only facts, figures, and specific proposals. Remove any sentence that contains 'I think' or 'I feel'.",
          styleContext:
            "Analytical communicators distinguish sharply between opinion and evidence. A root cause analysis that blends the two will be sent back for revision. Keep them separate and clearly labelled.",
        },
      },
    },
  },
];
