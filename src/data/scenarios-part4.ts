import { Scenario } from "@/types";

export const SCENARIOS_PART4: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (37-39)
  // ============================================

  // Scenario 37 - Sam Hartley, email, foundation
  {
    id: "scenario-37",
    title: "The Inbox Ultimatum",
    context:
      "You have received an email from Sam about a delayed product launch. The project is two weeks behind schedule and Sam wants answers.",
    chooseContext:
      "Sam has replied to your initial response and is pushing for a concrete recovery plan. The email chain is being copied to senior leadership.",
    rewriteContext:
      "Sam has asked you to draft a final update email to the steering group summarising the recovery plan. He wants it sent within the hour.",
    characterId: "sam-hartley",
    dialogue:
      "I need to know exactly why this is late and what you are doing to fix it. No background, no excuses. Give me the recovery plan and the new deadline by end of day.",
    chooseDialogue:
      "Fine, but I need the revised timeline in writing. Send me three bullet points: what went wrong, what changes, and the new go-live date.",
    rewriteDialogue:
      "Good. Now draft the steering group update. Keep it to five lines maximum. They do not need the history - just the plan and the date.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Sam has sent a blunt email demanding a recovery plan with no background or excuses. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's email strips away all context and goes straight to the demand: tell me the problem, tell me the fix, give me a date. That is textbook direct communication.",
          observation:
            "Notice the short sentences and the explicit rejection of background detail. Sam wants outcomes, not explanations.",
          coachingTip:
            "When someone in writing says 'no excuses' or 'no background', they are signalling a direct style. Match their brevity.",
          styleContext:
            "Direct communicators write emails the way they speak - short, punchy, and action-focused. They value emails they can read in under 30 seconds.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both direct and analytical communicators are task-focused, but an analytical person would ask for root cause analysis and supporting data rather than simply demanding a deadline.",
          observation:
            "Sam is not asking for evidence or methodology. The focus is purely on speed and a concrete commitment.",
          coachingTip:
            "If the email asks 'why did this happen and what is the data?' it is likely analytical. If it says 'fix it and tell me when', it is direct.",
          styleContext:
            "Direct and analytical styles both focus on the task, but direct prioritises speed and decisions while analytical prioritises accuracy and evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. There is nothing people-oriented or relationship-focused in Sam's email. The entire message is about outcomes and accountability.",
          observation:
            "Sam does not ask how you are feeling about the delay or whether you need support. The focus is entirely on the deliverable.",
          coachingTip:
            "Ask yourself: is this person focused on results, ideas, people, or accuracy? Sam's focus on results and deadlines points clearly to direct.",
          styleContext:
            "Direct communicators can seem abrupt in writing, but their intent is efficiency. They respect people who reply with equal clarity.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants three bullet points covering what went wrong, what changes, and the new go-live date. How do you reply?",
      options: [
        {
          id: "s37-opt-a",
          text: "Here is the summary: 1) Supplier delay on the API integration pushed us back 10 days. 2) We have added a second developer and moved to daily standups. 3) New go-live date: 14 March. I will flag any risks immediately.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Sam's format exactly - three clear bullets with specific facts. No padding, no apologies. Direct communicators respect this precision.",
        },
        {
          id: "s37-opt-b",
          text: "Thanks Sam. The delay was caused by a few things, mainly the supplier side. We are working on getting back on track and I will update you soon with a revised date.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague. Sam asked for specifics and you have given generalities. 'A few things' and 'update you soon' will frustrate a direct communicator.",
        },
        {
          id: "s37-opt-c",
          text: "Hi Sam, I completely understand the frustration and I want to reassure you that the team has been working incredibly hard despite the setbacks. I think if we all rally together we can get this across the line. Let me pull the team together and we can discuss the best path forward.",
          score: 0,
          result: "weak",
          explanation:
            "This is relationship-focused and avoids the three specifics Sam requested. It reads as stalling to a direct communicator who has asked for facts.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to draft a five-line maximum steering group update covering the recovery plan and the new date. Write the email in a direct style - lead with the outcome, be specific, and cut all unnecessary context.",
      targetTraits: ["concise", "outcome-led", "specific-dates", "no-hedging"],
      exampleStrongResponse:
        "Subject: Product Launch - Revised Timeline\n\nThe product launch has been rescheduled to 14 March. A supplier delay on the API integration caused a 10-day slip. We have added a second developer and moved to daily standups to recover pace. No further risks have been identified. I will confirm go-live readiness by 10 March.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is tight, specific, and leads with the key information. A direct stakeholder group would appreciate this clarity.",
          observation:
            "You included concrete dates and actions without any unnecessary preamble or apology. That is exactly what senior leaders with a direct style want.",
          coachingTip:
            "In written comms to direct communicators, put the most important information in the first sentence. If they only read one line, they should have what they need.",
          styleContext:
            "Direct communicators treat emails like executive summaries. If your email requires scrolling or re-reading, it is too long.",
        },
        partial: {
          result: "partial",
          explanation:
            "Decent effort, but there may be filler phrases or missing specifics. Check whether you included a concrete date and a clear action.",
          observation:
            "Your email might benefit from trimming phrases like 'I wanted to let you know' or 'as you are aware'. Get to the point faster.",
          coachingTip:
            "Read your email back and delete any sentence that does not contain a fact, a date, or an action. What remains is what a direct reader wants.",
          styleContext:
            "Direct communicators scan emails for numbers, dates, and decisions. Everything else is noise to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too vague, or opens with apologies and context. Sam explicitly said to skip the history.",
          observation:
            "Starting with 'I wanted to provide some context' or 'as you may be aware' signals that you have not adapted to the audience.",
          coachingTip:
            "Try writing your email, then deleting the first paragraph entirely. Often the second paragraph is where the real message starts.",
          styleContext:
            "Direct communicators judge written communication by how quickly it delivers the answer. Front-load the conclusion.",
        },
      },
    },
  },

  // Scenario 38 - Alex Tran, one-to-one, intermediate
  {
    id: "scenario-38",
    title: "The Performance Checkpoint",
    context:
      "You are in a quarterly one-to-one with Alex. She has opened the conversation by challenging you on a project that came in under target.",
    chooseContext:
      "Alex has acknowledged your initial explanation but is now pressing you for what you will do differently next quarter. She wants commitments, not reflections.",
    rewriteContext:
      "Alex has asked you to close the one-to-one by summarising your three priority actions for next quarter in writing, to be shared with the leadership team.",
    characterId: "alex-tran",
    dialogue:
      "You missed the Q3 target by 8%. I have read the report. I do not need the backstory. What I need to know is whether you have identified the gap and what you are going to do about it.",
    chooseDialogue:
      "Understood. So what are the three things you will change next quarter? Give me actions, not intentions.",
    rewriteDialogue:
      "Good. Write those three actions up and send them to me before you leave today. I will share them with the leadership team as your commitments.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has opened a one-to-one by stating the performance gap and asking for your plan, explicitly rejecting backstory. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Right. Alex is using a classic direct approach - she has done her homework, states the gap clearly, and wants forward-looking action, not a retrospective.",
          observation:
            "The phrase 'actions, not intentions' is a hallmark of direct communication. Alex distinguishes between talking about doing something and committing to doing it.",
          coachingTip:
            "When someone in a one-to-one jumps straight to accountability and next steps, they are signalling a direct style. Match their pace by coming prepared with actions.",
          styleContext:
            "Direct communicators use one-to-ones as accountability checkpoints. They expect you to arrive prepared and leave with commitments.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable guess. Alex does reference data (the 8% gap), which can seem analytical. But notice she is not asking for more data - she already has it. She wants a decision on what to do next.",
          observation:
            "An analytical communicator would dig deeper into the numbers. Alex uses the number as a starting point for action, not as a topic for investigation.",
          coachingTip:
            "The difference is what happens after the data is stated. Analytical asks 'what does the data tell us?' Direct says 'what are you going to do about it?'",
          styleContext:
            "Direct communicators use data as a springboard to action. Analytical communicators use data as a subject of study. Watch for what follows the numbers.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not showing concern for how you feel about missing the target or trying to build rapport. The focus is entirely on performance and accountability.",
          observation:
            "There are no softening phrases, no 'how are you finding things', and no attempt to ease into the difficult topic. That rules out supportive and expressive styles.",
          coachingTip:
            "In a one-to-one, notice what the person leads with. People-focused styles start with relationship. Task-focused styles start with performance.",
          styleContext:
            "Direct communicators view one-to-ones as a chance to align on deliverables. The relationship is built through mutual respect for results, not through small talk.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex wants three specific changes you will make next quarter. She has asked for actions, not intentions. How do you respond?",
      options: [
        {
          id: "s38-opt-a",
          text: "Three changes, all starting Monday. Pipeline reviews move from monthly to fortnightly. Two days a week ring-fenced for client-facing work. Weekly delivery check-in to track milestones.",
          score: 10,
          result: "strong",
          explanation:
            "This is direct, specific, and time-bound. Each action is concrete and the 'starts Monday' commitment shows decisiveness. Alex would respect this response.",
        },
        {
          id: "s38-opt-b",
          text: "I think I need to focus more on pipeline management and probably spend more time with clients. I will also try to be more hands-on with the delivery team. I will think about the detail and come back to you.",
          score: 5,
          result: "partial",
          explanation:
            "The right themes are here, but 'think I need to', 'probably', and 'try to' are hedging language. Alex asked for commitments, not considerations.",
        },
        {
          id: "s38-opt-c",
          text: "Honestly, it has been a tough quarter and I feel like the team has been stretched. I would love to talk through what support might be available and how we can create a better environment for hitting those numbers.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts focus to feelings and support rather than addressing Alex's question about specific actions. It will be perceived as deflection.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write up your three priority actions for next quarter. These will be shared with the leadership team. Write them in a direct style - specific, committed, and measurable.",
      targetTraits: ["specific", "measurable", "committed-tone", "action-oriented"],
      exampleStrongResponse:
        "Q4 Priority Actions:\n1. Move pipeline reviews from monthly to fortnightly - starting 1 October. Target: identify slippage within 5 working days.\n2. Ring-fence Tuesday and Thursday for client-facing activity. Target: increase client contact hours by 30%.\n3. Weekly delivery check-in every Monday at 09:00 with the project team. Target: zero missed milestones in Q4.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your actions are specific, measurable, and written with commitment. This is exactly the kind of follow-up a direct leader expects.",
          observation:
            "You used concrete metrics and start dates, which turns intentions into accountable commitments. Alex will hold you to these - and that is the point.",
          coachingTip:
            "With direct communicators, vague goals like 'improve client relationships' carry no weight. They want numbers, dates, and trackable outcomes.",
          styleContext:
            "Direct communicators treat written commitments as contracts. If you write it down and send it, you have agreed to deliver it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your actions touch the right areas but may lack specificity. Check whether each one has a measurable target and a start date.",
          observation:
            "Phrases like 'aim to improve' or 'work towards' weaken the commitment. Replace them with 'will increase by X%' or 'starting on [date]'.",
          coachingTip:
            "Apply the test: could someone check in four weeks and objectively verify whether this action has been taken? If not, make it more specific.",
          styleContext:
            "Direct communicators measure progress in binary terms - done or not done. Make sure your actions can be assessed that way.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your write-up is either too vague, too long, or focuses on context rather than actions. Alex asked for commitments to share with leadership, not a reflective essay.",
          observation:
            "If your response includes phrases like 'I feel that' or 'I hope to', it signals uncertainty rather than ownership.",
          coachingTip:
            "Strip out all qualifiers. Change 'I will try to improve pipeline visibility' to 'Fortnightly pipeline reviews starting 1 October'. Be definitive.",
          styleContext:
            "Direct communicators respect people who make bold commitments and deliver on them. Hedging is interpreted as a lack of confidence.",
        },
      },
    },
  },

  // Scenario 39 - Jordan Cole, client, advanced
  {
    id: "scenario-39",
    title: "The Client Escalation",
    context:
      "A major client has threatened to pull their contract. Jordan has called you into a brief corridor conversation to understand the situation and decide on next steps before a board call in 20 minutes.",
    chooseContext:
      "Jordan is satisfied with your summary but now wants to know how you are going to handle the client call this afternoon. He needs to brief the board on the plan in 15 minutes.",
    rewriteContext:
      "Jordan has asked you to send him a two-paragraph email he can forward directly to the board chair, explaining the retention plan for this client.",
    characterId: "jordan-cole",
    dialogue:
      "I have 20 minutes before the board call. Tell me the situation in 60 seconds, then tell me what you recommend. If you do not have a recommendation, tell me that too - I would rather know.",
    chooseDialogue:
      "Right. The board will ask me what our plan is for keeping the client. What is the one thing we are doing this week to stop them walking?",
    rewriteDialogue:
      "I need a two-paragraph email I can forward to the board chair. First paragraph: what happened. Second paragraph: what we are doing about it. Send it in the next 10 minutes.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has pulled you aside with 20 minutes before a board call, asking for a 60-second summary and a recommendation. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan is under pressure and showing quintessential direct traits - setting a tight time boundary, demanding a structured response, and valuing honesty ('tell me if you do not have a recommendation').",
          observation:
            "The instruction to deliver in 60 seconds and the willingness to hear 'I do not know yet' both signal a direct communicator. They prefer uncomfortable truth to comfortable vagueness.",
          coachingTip:
            "Under pressure, communication styles intensify. A direct communicator becomes even more focused on speed and decisiveness. Recognise that urgency amplifies style traits.",
          styleContext:
            "Direct communicators respect honesty even when the news is bad. Saying 'I do not have a recommendation yet' is better than waffling.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Jordan does structure the conversation methodically (situation, then recommendation), which can seem analytical. But the driver is speed, not thoroughness. An analytical communicator would ask for data before forming a view.",
          observation:
            "The 60-second constraint is the key differentiator. An analytical communicator would want enough time to review the details properly, not compress them.",
          coachingTip:
            "When time pressure drives the structure, it is usually direct. When a desire for accuracy drives the structure, it is usually analytical.",
          styleContext:
            "In high-pressure moments, direct communicators create structure to save time. Analytical communicators create structure to ensure accuracy. The motivation differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan is not checking in on how you feel or trying to build energy around the situation. The focus is entirely on getting the facts and making a decision under time pressure.",
          observation:
            "There is no relationship-building, no rallying language, and no emotional check-in. This is pure task focus under pressure.",
          coachingTip:
            "In crisis moments, notice whether the person leads with facts and decisions (direct/analytical) or with people and feelings (supportive/expressive).",
          styleContext:
            "Direct communicators in crisis mode become laser-focused. They compress communication to its essentials and expect others to do the same.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan needs to brief the board in 15 minutes and wants to know the one thing you are doing this week to retain the client. How do you respond?",
      options: [
        {
          id: "s39-opt-a",
          text: "I am calling their MD tomorrow at 9am with a revised service agreement: 15% uplift in support hours at no extra cost for 90 days to prove the value.",
          score: 10,
          result: "strong",
          explanation:
            "One clear action, a specific time, a concrete offer, and a rationale - all in three sentences. This gives Jordan exactly what he needs for the board.",
        },
        {
          id: "s39-opt-b",
          text: "I think we should probably arrange a meeting with their leadership team to discuss what has gone wrong and explore some options for improving the relationship going forward.",
          score: 5,
          result: "partial",
          explanation:
            "This is directionally correct but too vague for the situation. 'Probably', 'explore some options', and 'going forward' are all hedging phrases. Jordan needs a definitive action to report.",
        },
        {
          id: "s39-opt-c",
          text: "Honestly, I think we need to take a step back and really understand the client's perspective here. There might be deeper relationship issues we have not addressed. Could we set up a workshop with both teams to rebuild trust?",
          score: 0,
          result: "weak",
          explanation:
            "This is far too slow and reflective for the situation. Jordan has 15 minutes before a board call and needs an immediate, concrete action - not a process suggestion.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan needs a two-paragraph email to forward to the board chair. Paragraph one: what happened. Paragraph two: what you are doing about it. Write it in Jordan's direct style - tight, factual, and decisive.",
      targetTraits: ["concise", "two-paragraph-structure", "factual", "decisive"],
      exampleStrongResponse:
        "Our largest accounts client, Thornfield Group, has indicated they are considering terminating their contract at the next renewal point. The trigger was two consecutive quarters of delayed reporting and a breakdown in day-to-day account management following staff turnover on our side.\n\nWe are acting immediately. I am personally calling their MD tomorrow to present a revised service agreement including a 15% uplift in dedicated support hours at no extra cost for 90 days. I will report back to the board by Friday with their response and our longer-term retention plan.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email follows the exact structure requested and is written in a style that a board chair can scan in 20 seconds. Factual, decisive, and forward-looking.",
          observation:
            "You separated the problem from the solution clearly and used committed language. This is the kind of email a direct leader is confident forwarding upward.",
          coachingTip:
            "When writing for senior stakeholders through a direct communicator, write as if you are the one presenting to the board. Be as tight as possible.",
          styleContext:
            "Direct communicators often act as gatekeepers to senior leadership. If your written communication passes their filter, it will pass the board's.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email covers the right ground but may not be tight enough for a board-level audience. Check for unnecessary preamble or hedging language.",
          observation:
            "Board chairs read dozens of these emails. Every extra sentence reduces the chance yours gets read in full. Be ruthless with editing.",
          coachingTip:
            "After writing, ask: can I cut this in half without losing meaning? If yes, cut it. Board communication rewards brevity above all.",
          styleContext:
            "Direct communicators expect written communication to get progressively tighter as it moves up the organisation. Executive audiences have the least time.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too apologetic, or lacks a concrete action plan. Jordan specifically asked for two paragraphs with a clear structure.",
          observation:
            "If your email opens with 'I wanted to take a moment to explain' or includes lengthy apologies, it will not survive being forwarded to a board chair.",
          coachingTip:
            "Write the two paragraphs as if they were newspaper headlines: what happened, what we are doing. No emotion, no padding, no history lesson.",
          styleContext:
            "At board level, direct communication is not just a style preference - it is a practical necessity. Decision-makers need clarity, not narrative.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (40-42)
  // ============================================

  // Scenario 40 - Priya Sharma, team, foundation
  {
    id: "scenario-40",
    title: "The Cross-Team Spark",
    context:
      "You are on a cross-functional Slack channel where Priya has just posted about a new campaign idea she wants to co-create with the product and design teams.",
    chooseContext:
      "Priya has responded enthusiastically to the initial reactions in the channel and is now asking you directly to contribute a creative angle from your team's perspective.",
    rewriteContext:
      "Priya has asked you to post a follow-up message in the Slack channel that builds on the campaign idea and gets the wider team excited about collaborating.",
    characterId: "priya-sharma",
    dialogue:
      "OK team, I have been thinking about this all weekend and I am buzzing. What if we combine the product launch with a live customer story? Imagine the impact! I want everyone's wildest ideas in this thread - no filters, no 'but we have never done it before'. Let us make something brilliant.",
    chooseDialogue:
      "Love the energy in this thread! Right, your team has that amazing customer data. How could we weave that into something that really lands emotionally? Give me your most creative take.",
    rewriteDialogue:
      "Yes! That is exactly the kind of thinking we need. Now post something in the channel that gets the rest of the team fired up. Paint the picture of what this could look like if we go big.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has posted an enthusiastic message asking for 'wildest ideas' and inviting creative collaboration with no filters. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Priya's message is full of energy, vision, and creative invitation. The language ('buzzing', 'wildest ideas', 'make something brilliant') is classic expressive communication.",
          observation:
            "Notice how Priya leads with excitement and a big-picture vision rather than a structured plan. She wants to generate energy before narrowing down.",
          coachingTip:
            "When someone leads with enthusiasm and invites free-form creativity, they are signalling an expressive style. Match their energy before introducing structure.",
          styleContext:
            "Expressive communicators use language to inspire and energise. They think out loud and value brainstorming over planning in the early stages.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive styles are people-oriented, but notice that Priya is not checking in on how people feel. She is generating creative energy and inviting bold ideas.",
          observation:
            "A supportive communicator would focus on making sure everyone is comfortable contributing. Priya is focused on sparking excitement and ambition.",
          coachingTip:
            "If the message is 'let us make sure everyone feels included', it is supportive. If it is 'let us make something amazing together', it is expressive.",
          styleContext:
            "Expressive and supportive styles both value people, but expressives focus on shared excitement while supportives focus on shared comfort.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya's message is far from cautious or data-driven. There are no requests for evidence, no structured agenda, and no concern about risk.",
          observation:
            "The entire message is built around vision, energy, and creative freedom - the opposite of a task-focused or process-driven approach.",
          coachingTip:
            "Look at the emotional temperature of the message. High energy and creative language point to expressive. Measured, factual language points elsewhere.",
          styleContext:
            "Expressive communicators prioritise inspiration over information. They want to create momentum first and figure out the details later.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya is asking you to contribute a creative angle from your team's perspective. She wants your 'most creative take'. How do you respond?",
      options: [
        {
          id: "s40-opt-a",
          text: "What if we turn our top three customer stories into cinematic mini-documentaries? Real people, real results. Premiere them at the launch and let the emotion do the selling.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy with a vivid, imaginative idea. It paints a picture, uses emotive language, and builds on her vision rather than constraining it.",
        },
        {
          id: "s40-opt-b",
          text: "We have some customer data that could support the campaign. I can pull together a summary of the key metrics and share it with you by Friday so we can decide what to include.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful, but this is a practical response to a creative invitation. Priya asked for your wildest idea, not a data summary. You have matched the task but not the energy.",
        },
        {
          id: "s40-opt-c",
          text: "I want to make sure we are not overcommitting here. Can we first check with the product team about timelines and make sure we have budget approval before we start generating ideas?",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the creative energy entirely. While practical concerns are valid, raising them at this stage will frustrate an expressive communicator who is in brainstorm mode.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to post a message in the Slack channel that gets the wider team excited about the collaboration. Write a message that matches Priya's expressive style - paint a picture, build energy, and inspire creative thinking.",
      targetTraits: ["enthusiastic", "visually-descriptive", "inspiring", "inclusive-energy"],
      exampleStrongResponse:
        "Picture this: launch day, and instead of another slide deck, we open with a real customer on screen telling their story in their own words. The audience feels it before they see a single product feature. We have the stories, we have the talent in this team, and we have a chance to do something that actually moves people. Who is in?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your message paints a vivid picture and invites others into the vision. Priya would love this - it matches her energy and builds creative momentum.",
          observation:
            "You used visual language and an emotional hook, which is exactly how expressive communicators build buy-in. You made people feel the idea, not just understand it.",
          coachingTip:
            "With expressive communicators, use 'imagine' and 'picture this' language. Help them see the vision before you talk about the logistics.",
          styleContext:
            "Expressive communicators are inspired by possibility. When you paint a picture of what could be, you speak their language.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but your message may lack the emotional energy that gets an expressive team excited. Check whether it paints a picture or just describes a plan.",
          observation:
            "If your message reads more like a project brief than a rallying cry, it needs more vision and less structure.",
          coachingTip:
            "Try adding a 'moment' - describe a specific scene or feeling that brings the idea to life. Expressive communicators respond to stories, not summaries.",
          styleContext:
            "Expressive communicators are energised by language that creates imagery and emotion. Flat, factual writing will not generate the enthusiasm Priya is looking for.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too cautious, too factual, or too structured for this context. Priya asked you to fire up the team, not write a project update.",
          observation:
            "If your post could be mistaken for a status report, it has not matched the expressive tone of the conversation.",
          coachingTip:
            "Forget structure for a moment. Write as if you are telling a friend about the most exciting project you have ever worked on. That is the energy Priya wants.",
          styleContext:
            "Expressive communicators use Slack and messaging tools as spaces for creative energy. They want threads that crackle with ideas, not bullet-pointed updates.",
        },
      },
    },
  },

  // Scenario 41 - Marcus Webb, one-to-one, intermediate
  {
    id: "scenario-41",
    title: "The Vision Coaching Session",
    context:
      "You are in a one-to-one with Marcus, who has been asked to develop his team's quarterly plan. Instead of starting with objectives, he has opened the conversation by sharing his vision for where the team could be in a year.",
    chooseContext:
      "Marcus is energised by the conversation and is now asking you to help him shape the vision into something he can pitch to senior leadership. He wants it to land with impact.",
    rewriteContext:
      "Marcus has asked you to help him draft the opening paragraph of his pitch to senior leadership. He wants it to capture the excitement and ambition of the vision.",
    characterId: "marcus-webb",
    dialogue:
      "Forget the quarterly targets for a second. I keep thinking about where we could be in 12 months if we actually went for it. We could be the team that transforms how the business thinks about innovation. I want to build something people talk about. What do you think - am I dreaming too big?",
    chooseDialogue:
      "OK so help me shape this. I need to pitch it to the exec team next week and I want them to feel the same excitement I do. How do I make them see what I see?",
    rewriteDialogue:
      "Write me an opening paragraph for the pitch. Something that grabs them in the first 30 seconds. Not a spreadsheet - a story. Make them lean forward.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus has opened his one-to-one by sharing a big-picture vision rather than discussing quarterly objectives. He wants to 'build something people talk about'. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Marcus leads with vision, emotion, and ambition. He skips the tactical detail and goes straight to the inspiring big picture. That is classic expressive behaviour.",
          observation:
            "Notice 'am I dreaming too big?' - expressive communicators often check whether their energy is landing, but not to be cautious. They want encouragement to go bigger.",
          coachingTip:
            "When someone opens a planning conversation with vision and excitement rather than data and targets, they are almost certainly expressive. Feed the vision first.",
          styleContext:
            "Expressive communicators start with the 'why' and the 'wow' before getting to the 'how'. If you jump to logistics too soon, you will deflate their energy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting choice. Both expressive and direct communicators can be bold and ambitious, but the motivation differs. Direct is driven by results; expressive is driven by inspiration and recognition.",
          observation:
            "Marcus is not talking about hitting targets or winning. He is talking about transforming perception and being talked about. That is an expressive driver.",
          coachingTip:
            "Ask what is motivating the boldness. If it is 'I want to win', that is direct. If it is 'I want to inspire and be recognised', that is expressive.",
          styleContext:
            "Direct and expressive communicators can both seem ambitious, but direct ambition is outcome-driven while expressive ambition is impact-driven.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not seeking consensus, not asking for data, and not checking on the team's wellbeing. He is sharing a vision and inviting you to match his excitement.",
          observation:
            "There are no process concerns, no requests for evidence, and no concern about who might be affected. This is pure vision and energy.",
          coachingTip:
            "Supportive communicators would ask 'how will this affect the team?' Analytical communicators would ask 'what does the data say?' Marcus asks 'can you feel what I feel?'",
          styleContext:
            "Expressive communicators are fuelled by possibility and recognition. They want you to share their excitement before engaging with practicalities.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants your help making the exec team feel the same excitement he does about his vision. How do you respond?",
      options: [
        {
          id: "s41-opt-a",
          text: "Pick one moment from the last year where your team did something brilliant. Open with that, then say 'now imagine if we did that every quarter.' Show it, do not just tell it.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Marcus's expressive style perfectly - using storytelling, emotional hooks, and 'show, don't tell' language. It feeds his vision and gives him a practical tool.",
        },
        {
          id: "s41-opt-b",
          text: "I would recommend structuring it around three key pillars with supporting metrics for each. Executives respond well to data-backed proposals with clear ROI.",
          score: 5,
          result: "partial",
          explanation:
            "Sound advice for an analytical audience, but Marcus specifically said he does not want a spreadsheet approach. You have given him a format he will not feel excited about delivering.",
        },
        {
          id: "s41-opt-c",
          text: "Before pitching this, have you checked in with the team about whether they share this vision? It might be worth getting their input first so everyone feels ownership.",
          score: 0,
          result: "weak",
          explanation:
            "This is well-intentioned but misreads the moment. Marcus is in creative mode and wants help shaping his pitch, not a suggestion to slow down and consult.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants an opening paragraph for his pitch to senior leadership - something that 'grabs them in the first 30 seconds' and makes them 'lean forward'. Write it in Marcus's expressive style - bold, visual, and story-driven.",
      targetTraits: ["story-driven", "bold", "visually-descriptive", "emotionally-engaging"],
      exampleStrongResponse:
        "Six months ago, one of our junior developers built a prototype over a weekend that solved a problem three consultancies had failed to crack. That was not a fluke - it was a glimpse of what this team is capable of when we stop playing it safe. I am here to propose that we stop treating innovation as a side project and start treating it as the engine of this business. Here is what that looks like.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your opening is bold, story-driven, and creates momentum. It makes the audience want to hear what comes next, which is exactly what Marcus asked for.",
          observation:
            "You led with a concrete story rather than abstract claims, which gives the vision credibility while keeping the emotional impact. That is sophisticated expressive communication.",
          coachingTip:
            "The best expressive pitches anchor big visions in real moments. A story makes the ambition feel achievable rather than theoretical.",
          styleContext:
            "Expressive communicators know that data informs but stories persuade. Leading with a moment of brilliance gives the audience an emotional anchor for everything that follows.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your paragraph has promise but may need more emotional punch or a stronger opening hook. Check whether it tells a story or simply makes a claim.",
          observation:
            "If your opening reads like a summary rather than a scene, it will not create the 'lean forward' reaction Marcus wants.",
          coachingTip:
            "Try the cinema test: could your opening paragraph be the voiceover at the start of a film? If it could, it is expressive enough. If not, add more imagery.",
          styleContext:
            "Expressive communicators pitch ideas like film trailers - they create intrigue, emotion, and a desire to see more. Your opening should do the same.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paragraph is too flat, too factual, or too cautious for what Marcus needs. He wanted a story that grabs attention, not a summary that provides context.",
          observation:
            "Starting with 'the team has performed well this year' or 'I would like to propose' will not make anyone lean forward. It needs a hook.",
          coachingTip:
            "Delete your first sentence and start with the most surprising or impressive thing you can say. That is how expressive communicators open.",
          styleContext:
            "Expressive communicators believe that if the opening does not create energy, the audience is already lost. The first sentence is everything.",
        },
      },
    },
  },

  // Scenario 42 - Nina Okafor, email, advanced
  {
    id: "scenario-42",
    title: "The Relationship-First Email",
    context:
      "Nina has forwarded you an email she received from a long-standing client who has gone quiet over the past quarter. She wants your input on how to re-engage them with warmth rather than a hard sell.",
    chooseContext:
      "Nina has agreed with your initial thinking and is now asking you to help draft the re-engagement email. She wants it to feel personal and genuine, not like a template.",
    rewriteContext:
      "Nina has asked you to write the final version of the client re-engagement email. She wants it to sound like it comes from someone who genuinely cares about the relationship, not just the renewal.",
    characterId: "nina-okafor",
    dialogue:
      "I have been thinking about this one. They have been with us for three years and suddenly they go quiet - that tells me something has changed for them personally or professionally. I do not want to send a generic 'checking in' email. I want them to read it and feel like we actually care about them, not just their contract.",
    chooseDialogue:
      "OK so the tone needs to be warm but not pushy. I want them to feel remembered, not chased. How do we open this email in a way that feels human?",
    rewriteDialogue:
      "Perfect. Write the full email. Make it feel like a note from a friend who has noticed they have been quiet - not a salesperson who has noticed the revenue is down.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina is focused on how the client will feel when they read the re-engagement email, prioritising warmth and genuine connection over business outcomes. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina is focused on creating an emotional connection and making the client feel valued as a person. This is expressive communication - relationship-driven, personal, and focused on impact rather than process.",
          observation:
            "Notice how Nina frames the problem emotionally ('something has changed for them') rather than commercially ('revenue is at risk'). She thinks about relationships first.",
          coachingTip:
            "When someone prioritises how a message will feel over what it contains, they are typically expressive. They design communication for emotional impact.",
          styleContext:
            "Expressive communicators treat client relationships as personal connections. They believe that genuine care drives loyalty more than pricing or features.",
        },
        partial: {
          result: "partial",
          explanation:
            "Very close. Both expressive and supportive styles are people-oriented, and Nina's warmth could suggest either. The distinguishing factor is that Nina is being proactive and creative in her approach - she wants to craft something that lands with impact, not just offer support.",
          observation:
            "A supportive communicator might say 'we should check they are OK'. Nina says 'I want them to feel something when they read this'. The focus on emotional impact is expressive.",
          coachingTip:
            "Supportive communicators prioritise comfort and safety. Expressive communicators prioritise connection and impact. Both care about people, but in different ways.",
          styleContext:
            "The expressive-supportive distinction is one of the subtlest in communication styles. Expressive is proactively relational; supportive is responsively caring.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina's message has no focus on data, timelines, or efficiency. She is entirely concerned with the emotional quality of the communication.",
          observation:
            "There is no mention of metrics, contract terms, or structured processes. Nina's world is relationships and feelings.",
          coachingTip:
            "If someone is talking about how to make a message 'feel right', they are operating in expressive or supportive territory - never direct or analytical.",
          styleContext:
            "Expressive communicators design written communication for emotional resonance. The words matter, but the feeling matters more.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina wants to open the re-engagement email in a way that feels 'warm but not pushy' and makes the client feel 'remembered, not chased'. How do you suggest opening?",
      options: [
        {
          id: "s42-opt-a",
          text: "Open with something specific you remember about them. Something like: 'I was thinking of you when I saw [specific thing]. It reminded me of our conversation about [their goal].' It shows you were paying attention.",
          score: 10,
          result: "strong",
          explanation:
            "This is perfectly tuned to Nina's expressive style. It is personal, specific, and demonstrates genuine interest in the client as a person. The callback to a real conversation makes it authentic.",
        },
        {
          id: "s42-opt-b",
          text: "You could start with something like 'Hi, I noticed we have not connected in a while and I wanted to check in to see if there is anything we can help with on your end.'",
          score: 5,
          result: "partial",
          explanation:
            "This is polite and professional but generic - exactly what Nina said she did not want. It reads like a template rather than a personal note.",
        },
        {
          id: "s42-opt-c",
          text: "I would open with a summary of what we have delivered for them over the past year, so they are reminded of the value. Then ask if they would like to schedule a review meeting.",
          score: 0,
          result: "weak",
          explanation:
            "This is a commercial approach, not a relational one. Leading with a value summary makes it about the contract, which is exactly the tone Nina wants to avoid.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to write the full client re-engagement email. It should feel like a note from someone who genuinely cares about the relationship. Write it in an expressive style - personal, warm, and authentic. Avoid anything that reads like a sales template.",
      targetTraits: ["personal", "warm", "authentic", "relationship-focused"],
      exampleStrongResponse:
        "Hi Sarah,\n\nI was thinking about you last week when I came across an article about community-led growth strategies - it reminded me of that brilliant idea you had about building a customer advisory panel. I hope you have had the chance to explore it.\n\nI have noticed we have not caught up in a while and I genuinely miss our conversations. No agenda, no sales pitch - I would just love to hear how things are going with you and the team. If you fancy a coffee and a catch-up, I am free most mornings next week.\n\nHope you are well.\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Beautifully done. Your email feels like a genuine personal note. It is warm, specific, and puts the relationship above the transaction. Nina would be proud to send this.",
          observation:
            "You included a specific personal reference, which transforms a generic check-in into something that feels like it could only have been written for this person.",
          coachingTip:
            "The secret to expressive email communication is specificity. Anyone can say 'thinking of you'. Only someone who cares says 'I saw this and it reminded me of your idea about X'.",
          styleContext:
            "Expressive communicators build loyalty through personal connection. Clients remember how you made them feel long after they forget what you delivered.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email is friendly but may feel a little generic. Check whether it includes a specific personal reference that only someone who knows this client would write.",
          observation:
            "If your email could be sent to any client by changing the name, it is not personal enough for an expressive approach.",
          coachingTip:
            "Add one detail that proves you remember them as a person - a project they mentioned, a challenge they were facing, something they were excited about.",
          styleContext:
            "Expressive communicators personalise everything. A template with a warm tone is still a template. The personal detail is what makes it genuine.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email reads more like a business communication than a personal note. Nina specifically asked for something that feels like it comes from someone who cares, not someone who is managing an account.",
          observation:
            "If your email mentions contract terms, service reviews, or business value, it has missed the brief entirely.",
          coachingTip:
            "Forget you are writing a business email. Write as if you are reaching out to someone you genuinely like and have not heard from in months. That is the tone Nina wants.",
          styleContext:
            "Expressive communicators blur the line between professional and personal communication. They believe the best business relationships feel like friendships.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (43-45)
  // ============================================

  // Scenario 43 - Tom Brennan, email, foundation
  {
    id: "scenario-43",
    title: "The Careful Handover",
    context:
      "Tom has sent you a Slack message about a team restructure that will affect two of his direct reports. He is worried about how they will take the news and wants to plan the communication carefully.",
    chooseContext:
      "Tom has shared his concerns and is now asking for your advice on how to break the news to his team members individually. He wants to make sure they feel supported through the transition.",
    rewriteContext:
      "Tom has asked you to help him draft a message to send to the two affected team members before the formal announcement, so they hear it from him first in a way that feels caring and reassuring.",
    characterId: "tom-brennan",
    dialogue:
      "I know the restructure makes sense from a business perspective, but I keep thinking about Jess and Amir. They have both been with us for years and they trust me. I need to tell them before the formal announcement goes out. I want them to hear it from me, and I want them to know they are valued, whatever happens next.",
    chooseDialogue:
      "So how do I tell them? I do not want to just call them into a room and read from a script. They deserve better than that. How do I make sure they feel heard and supported?",
    rewriteDialogue:
      "Can you help me write a short message I can send them first? Something that says 'I am here for you and I will support you through this'. Not corporate speak - something real.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom is focused on how two team members will feel about a restructure and wants to personally deliver the news in a caring way. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Tom's entire focus is on the emotional wellbeing of his team members. He wants to protect them, prepare them, and make sure they feel valued. That is quintessential supportive communication.",
          observation:
            "Notice Tom's language: 'they trust me', 'they deserve better', 'I want them to know they are valued'. Every sentence centres on the people, not the process.",
          coachingTip:
            "When someone's first instinct during change is to think about how people will feel, they are signalling a supportive style. They process business decisions through a human lens.",
          styleContext:
            "Supportive communicators prioritise trust, loyalty, and emotional safety. They believe how you deliver news matters as much as the news itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive styles are people-oriented, but the key difference is the emotional driver. Tom is not trying to create energy or excitement - he is trying to provide comfort and reassurance during a difficult change.",
          observation:
            "An expressive communicator might focus on rallying the team around the opportunity in the change. Tom is focused on cushioning the impact.",
          coachingTip:
            "Supportive communicators protect people from distress. Expressive communicators energise people through change. Tom is firmly in protective mode.",
          styleContext:
            "The supportive style is characterised by care, stability, and loyalty. When change happens, their instinct is to shield and reassure, not to reframe and energise.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not focused on the business rationale, the timeline, or the efficiency of the restructure. His entire concern is the emotional impact on two specific people.",
          observation:
            "There is no mention of targets, data, or outcomes. Tom's message is entirely about relationships, trust, and care.",
          coachingTip:
            "If someone's response to a business change is 'how will this affect the people?', they are almost certainly supportive. Task-focused styles would ask 'how will this affect the results?'",
          styleContext:
            "Supportive communicators filter every decision through the question: how will this affect the people I care about? That is their primary lens.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom wants advice on how to tell his two team members about the restructure. He wants them to feel heard and supported, not just informed. How do you advise him?",
      options: [
        {
          id: "s43-opt-a",
          text: "Talk to each of them individually. Acknowledge how much you value their contribution, share the news honestly, and give them space to react. Let them know you will personally help them navigate whatever comes next.",
          score: 10,
          result: "strong",
          explanation:
            "This perfectly matches Tom's supportive instincts. Individual conversations, emotional acknowledgement, honesty, space to react, and a personal commitment to support. Tom would feel confident with this approach.",
        },
        {
          id: "s43-opt-b",
          text: "I would tell them both together so they hear the same message at the same time. Be clear about what is changing and when, and let them know the formal announcement will follow with more detail.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical and fair, but it misses Tom's need for personal, individual care. Telling them together prioritises consistency over emotional sensitivity.",
        },
        {
          id: "s43-opt-c",
          text: "Honestly, they will find out when the announcement goes out. I would not overthink it. Just be factual, explain the business case, and move on. People adapt.",
          score: 0,
          result: "weak",
          explanation:
            "This completely dismisses Tom's core concern. Telling a supportive communicator not to worry about people's feelings will erode his trust in you.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants to send a short personal message to each affected team member before the formal announcement. Write it in Tom's supportive style - warm, reassuring, and genuine. Avoid corporate language.",
      targetTraits: ["warm", "reassuring", "personal", "genuine"],
      exampleStrongResponse:
        "Hi Jess,\n\nI wanted to speak to you directly before you hear anything through formal channels. There are some changes coming to the team structure, and I know that can feel unsettling. I want you to know that I value everything you bring to this team, and that is not going to change.\n\nI would really like to sit down with you tomorrow so I can explain what is happening and hear how you are feeling about it. Whatever comes next, I am in your corner.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Lovely. Your message is warm, personal, and genuinely reassuring. It acknowledges the emotional difficulty of the situation without being patronising, and it offers a concrete next step. Tom would feel good sending this.",
          observation:
            "You led with trust and care before delivering any information. That sequencing is exactly right for a supportive communicator.",
          coachingTip:
            "With supportive communicators, lead with the relationship before the information. 'I value you' before 'here is what is changing' makes a significant difference.",
          styleContext:
            "Supportive communicators believe that people can handle difficult news if they feel safe and valued. The emotional groundwork comes first.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the right ground but may need more warmth or a stronger personal touch. Check whether it sounds like it comes from a person who cares or a manager doing their job.",
          observation:
            "If your message uses phrases like 'I wanted to inform you' or 'please be advised', it is too formal for what Tom is trying to achieve.",
          coachingTip:
            "Read your message back and ask: would this make someone feel valued and safe? If it reads like an HR template, soften it with personal language.",
          styleContext:
            "Supportive communicators want their written communication to feel like a conversation. If it could not be said warmly face to face, it needs rewriting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too corporate, too brief, or lacks genuine emotional warmth. Tom specifically asked for something real, not formal.",
          observation:
            "If your message focuses on the business rationale for the change rather than the person receiving it, it has missed the brief.",
          coachingTip:
            "Start with the person, not the change. 'I value you and I want you to hear this from me' is the emotional foundation Tom wants to build on.",
          styleContext:
            "Supportive communicators measure the quality of communication by how it makes the recipient feel. The content matters, but the care matters more.",
        },
      },
    },
  },

  // Scenario 44 - Leah Morgan, client, intermediate
  {
    id: "scenario-44",
    title: "The Client Wellbeing Check",
    context:
      "You are in a one-to-one with Leah, who is concerned about a client stakeholder who has seemed withdrawn and disengaged in recent workshops. Leah wants to address it sensitively without overstepping.",
    chooseContext:
      "Leah has shared her observations and is now asking how you would approach a conversation with the client stakeholder to check in on them without making it awkward.",
    rewriteContext:
      "Leah has asked you to draft a short email to the client stakeholder that opens the door for a conversation about what might be going on, without being intrusive.",
    characterId: "leah-morgan",
    dialogue:
      "I have noticed that Raj has been really quiet in the last two workshops. He used to be one of the most engaged people in the room. I do not want to assume anything, but I also do not want to ignore it. I would rather gently check in and let him know we have noticed, in case he needs support.",
    chooseDialogue:
      "So if I reach out to Raj, how do I do it without making him feel like he is being singled out or that something is wrong? I want it to feel like genuine care, not an intervention.",
    rewriteDialogue:
      "Could you help me draft a quick email to Raj? Something that opens the door without pushing through it. I want him to know we have noticed and we care, but I do not want to put him on the spot.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has noticed a client stakeholder becoming withdrawn and wants to check in sensitively without overstepping. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Leah's approach is gentle, empathetic, and cautious. She is attuned to changes in someone's behaviour and her instinct is to offer care rather than demand answers. That is classic supportive communication.",
          observation:
            "Notice the careful language: 'gently check in', 'in case he needs support', 'I do not want to assume'. Leah is navigating the situation with emotional sensitivity.",
          coachingTip:
            "Supportive communicators are often the first to notice when someone's behaviour changes. They read emotional signals that others miss and respond with care rather than curiosity.",
          styleContext:
            "Supportive communicators see themselves as guardians of emotional safety. They notice when someone pulls back and instinctively want to create a safe space.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both supportive and expressive styles are people-focused. But Leah is being cautious and protective, not energetic and proactive. She is treading carefully rather than rallying support.",
          observation:
            "An expressive communicator might say 'let us reach out and bring Raj back into the fold - I will make it fun.' Leah says 'let us be gentle and let him decide when he is ready.'",
          coachingTip:
            "The supportive approach is characterised by caution and respect for boundaries. If someone is being careful not to overwhelm, that is supportive, not expressive.",
          styleContext:
            "Supportive communicators respect the other person's emotional pace. They open doors gently rather than throwing them wide open.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not focused on data, outcomes, or efficiency. Her entire concern is the emotional wellbeing of one person, approached with great sensitivity.",
          observation:
            "There is no mention of performance impact, workshop metrics, or project timelines. Leah's lens is purely human.",
          coachingTip:
            "When someone's priority is 'how is this person feeling?' rather than 'how is this affecting the work?', they are in supportive territory.",
          styleContext:
            "Supportive communicators prioritise emotional awareness. They would rather be too careful than too direct when someone might be struggling.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants to reach out to Raj without making him feel singled out. She wants it to feel like genuine care, not an intervention. How do you suggest she approaches it?",
      options: [
        {
          id: "s44-opt-a",
          text: "Send a low-key message saying you have missed his perspective in recent sessions and offer a casual catch-up. No agenda, no pressure. Let him set the pace.",
          score: 10,
          result: "strong",
          explanation:
            "This perfectly matches Leah's supportive approach. It is affirming, low-pressure, and gives Raj full control over how much he shares. The focus on what she values about him creates emotional safety.",
        },
        {
          id: "s44-opt-b",
          text: "Just ask him directly in the next workshop if everything is OK. Better to address it openly than let it linger.",
          score: 5,
          result: "partial",
          explanation:
            "Direct, but risky in Leah's context. Asking someone publicly if they are OK could put them on the spot, which is exactly what Leah wants to avoid.",
        },
        {
          id: "s44-opt-c",
          text: "I would not overthink it. People have off periods. If his disengagement is affecting the workshops, raise it as a performance issue with his manager.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Leah's instinct to care and escalates it in a way that could damage Raj's trust. A supportive communicator would find this approach cold and harmful.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants a short email to Raj that 'opens the door without pushing through it'. Write it in a supportive style - gentle, affirming, and pressure-free. Make sure Raj feels cared about, not scrutinised.",
      targetTraits: ["gentle", "affirming", "low-pressure", "emotionally-safe"],
      exampleStrongResponse:
        "Hi Raj,\n\nI just wanted to drop you a note to say how much I have appreciated your contributions to our sessions over the past year. Your insights always add real value to the conversation.\n\nI realise we have not caught up properly in a while, and I would love to hear how things are going for you. No agenda at all - just a chance to connect. Would you be up for a quick chat over coffee sometime this week or next? Completely up to you.\n\nHope you are doing well.\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Beautifully done. Your email opens the door without any pressure, affirms Raj's value, and gives him full choice over whether to engage. Leah would feel confident sending this.",
          observation:
            "You made it about connection rather than concern, which avoids making Raj feel like there is a problem. That is a subtle but important distinction.",
          coachingTip:
            "The key to supportive outreach is making it feel like a gift (I value you) rather than a diagnosis (I am worried about you). Your email does that well.",
          styleContext:
            "Supportive communicators create invitations, not obligations. The phrase 'completely up to you' is a hallmark of this style - it gives the other person full control.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email is on the right track but may inadvertently create pressure. Check whether your wording implies that something is wrong or that Raj needs to explain himself.",
          observation:
            "Phrases like 'I have noticed you have been quiet' can feel like surveillance. Try framing it as 'I have missed your input' instead.",
          coachingTip:
            "The difference between 'I noticed you have been quiet' and 'I have missed hearing from you' is enormous. One observes a problem; the other expresses a value.",
          styleContext:
            "Supportive communicators frame outreach in terms of what they value about the person, not what they have observed about the person's behaviour.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email feels too formal, too direct, or too problem-focused. Leah specifically wanted something that feels caring and low-pressure.",
          observation:
            "If your email reads like a manager following up on a concern, it will put Raj on the defensive rather than making him feel safe.",
          coachingTip:
            "Imagine you are writing to a friend you have not heard from in a while. That warmth and casualness is what Leah wants in this email.",
          styleContext:
            "Supportive communicators want their written communication to feel like a hand on the shoulder, not a finger pointing at a problem.",
        },
      },
    },
  },

  // Scenario 45 - David Chen, team, advanced
  {
    id: "scenario-45",
    title: "The Consensus Builder",
    context:
      "You are on a cross-functional project where two teams have conflicting priorities. David has asked to facilitate a joint meeting to find common ground, and he has pulled you aside beforehand to discuss his approach.",
    chooseContext:
      "David is now in the meeting and has noticed tension rising between the two team leads. He turns to you for support in de-escalating the situation without taking sides.",
    rewriteContext:
      "After the meeting, David has asked you to draft a follow-up Slack message to both teams that acknowledges the tension, reinforces the collaborative spirit, and confirms the agreed next steps.",
    characterId: "david-chen",
    dialogue:
      "I have spoken to both team leads separately and I think I understand where each of them is coming from. The thing is, neither of them is wrong - they just have different pressures. I want to create a space in this meeting where both sides feel genuinely heard. If people feel respected, they are much more likely to find a compromise. I do not want to force a decision - I want them to arrive at one together.",
    chooseDialogue:
      "I can feel the tension building. Sarah and Mike are both getting defensive. I need to slow this down before someone says something that damages the relationship. How do I bring the temperature down without dismissing either of them?",
    rewriteDialogue:
      "That was a tough meeting but I think we got to a good place in the end. Can you write a follow-up Slack message that reminds both teams we are on the same side? I want it to feel unifying, not like a referee's report.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David wants to create a space where both conflicting teams feel heard and arrive at a compromise together, rather than having a decision forced. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. David's focus on psychological safety, mutual respect, and consensus-building is classic supportive communication. He prioritises the relationship between the teams over the speed of the decision.",
          observation:
            "The phrase 'if people feel respected, they are much more likely to find a compromise' reveals David's core belief: trust and safety drive better outcomes than pressure.",
          coachingTip:
            "Supportive communicators often act as bridges in conflict. They invest time in understanding all perspectives before bringing people together, because they believe the process determines the outcome.",
          styleContext:
            "Supportive communicators see conflict resolution as relationship work, not decision work. The goal is not just to solve the problem but to preserve the trust between the parties.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive styles are people-focused, but David is not trying to energise the room or inspire a shared vision. He is trying to create safety and facilitate consensus. That patience and caution is distinctly supportive.",
          observation:
            "An expressive communicator might try to rally both teams around an exciting shared goal. David is more concerned with making sure no one feels dismissed or overruled.",
          coachingTip:
            "Expressive facilitators create energy. Supportive facilitators create safety. David is clearly doing the latter - he is slowing down, not speeding up.",
          styleContext:
            "In facilitation contexts, supportive communicators are characterised by patience, neutrality, and deep concern for how each person experiences the process.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not pushing for a quick resolution or asking for data to determine who is right. He is focused entirely on the relational dynamics and creating conditions for mutual agreement.",
          observation:
            "There is no urgency, no demand for evidence, and no attempt to impose a solution. David's approach is about care, patience, and trust.",
          coachingTip:
            "If someone's instinct in a conflict is to slow down and make sure everyone feels heard, they are operating in supportive mode. Task-focused styles would push for resolution.",
          styleContext:
            "Supportive communicators believe that rushing a decision in a conflict will create a winner and a loser. They prefer to invest time in a process that leaves everyone feeling respected.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tension is rising between two team leads in the meeting. David wants to de-escalate without dismissing either person. How do you suggest he intervenes?",
      options: [
        {
          id: "s45-opt-a",
          text: "Pause and say: 'You both feel strongly because you both care about getting it right. Before we move forward, Sarah, can you summarise Mike's main concern, and Mike, can you do the same for Sarah?'",
          score: 10,
          result: "strong",
          explanation:
            "This is a masterful supportive intervention. It validates both parties, slows the pace, and uses a mirroring technique that builds empathy. David would feel confident with this approach.",
        },
        {
          id: "s45-opt-b",
          text: "Step in and say 'Look, we need to make a decision here. Let us hear both options and vote.' It is fair and efficient.",
          score: 5,
          result: "partial",
          explanation:
            "Fair, but too direct for this situation. A vote creates a winner and a loser, which is exactly what David wants to avoid. The speed undermines the trust-building he is trying to facilitate.",
        },
        {
          id: "s45-opt-c",
          text: "Let it play out. Healthy debate is good. They will work it out between themselves if you give them space.",
          score: 0,
          result: "weak",
          explanation:
            "This is hands-off to the point of negligence. David has specifically noticed the conversation becoming defensive, and doing nothing risks real relationship damage.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants a follow-up Slack message to both teams after a tense meeting. It should feel unifying, acknowledge the difficulty, and confirm next steps. Write it in David's supportive style - warm, respectful, and team-centred.",
      targetTraits: ["unifying", "acknowledging", "warm", "collaborative"],
      exampleStrongResponse:
        "Hi everyone,\n\nThank you all for today's session. I know it was not the easiest conversation, and I want to acknowledge that. The fact that both teams engaged honestly and stayed in the room says a lot about the respect you have for each other and for this project.\n\nWe agreed on three next steps: 1) Sarah and Mike will meet this week to align on the shared timeline. 2) Both teams will flag any blockers in the Friday stand-up. 3) We will reconvene in two weeks to review progress together.\n\nI genuinely believe we are stronger when we work through the hard stuff together. Thanks for your patience and your professionalism today.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, unifying, and respectful. It acknowledges the difficulty without dwelling on it and frames the tension as a sign of mutual commitment. David would be glad to send this.",
          observation:
            "You balanced emotional acknowledgement with practical next steps. That combination of care and clarity is the hallmark of skilled supportive communication.",
          coachingTip:
            "After tense meetings, supportive communicators always follow up to close the emotional loop. Acknowledging the difficulty makes it safe to move forward.",
          styleContext:
            "Supportive communicators understand that unresolved tension festers. A well-crafted follow-up message can turn a difficult meeting into a trust-building moment.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the practical follow-up well but may lack the emotional acknowledgement that David wants. Check whether you have addressed how people felt, not just what was decided.",
          observation:
            "If your message jumps straight to action items without acknowledging the difficulty of the conversation, it misses an opportunity to build trust.",
          coachingTip:
            "Add a sentence that validates the effort people made. Something like 'I know that was not easy, and I appreciate everyone's willingness to stay open' can transform a follow-up.",
          styleContext:
            "Supportive communicators always close the emotional loop before moving to logistics. Acknowledge the human experience first, then confirm the actions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too transactional or too focused on the conflict itself. David wanted something unifying, not a minutes-of-meeting summary or a post-mortem.",
          observation:
            "If your message reads like a project update or focuses on who said what, it will reopen wounds rather than heal them.",
          coachingTip:
            "Frame the message as a thank-you, not a summary. Thank people for showing up, for engaging honestly, and for committing to next steps. That is the supportive way.",
          styleContext:
            "Supportive communicators use follow-up communication to reinforce belonging. The message after a tough meeting should make people feel good about being part of the team.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (46-48)
  // ============================================

  // Scenario 46 - Rachel Finch, one-to-one, foundation
  {
    id: "scenario-46",
    title: "The Data-First Check-In",
    context:
      "You are in a one-to-one with Rachel to discuss the performance of a new reporting dashboard. Rachel has come prepared with a printed spreadsheet of usage metrics and a list of questions.",
    chooseContext:
      "Rachel has reviewed the usage data and is now asking you to explain a specific anomaly in the user adoption figures. She wants precision, not generalities.",
    rewriteContext:
      "Rachel has asked you to write a summary email to the project sponsor explaining the dashboard adoption trends and your recommendation for improving uptake. She wants it backed by data.",
    characterId: "rachel-finch",
    dialogue:
      "I have pulled the usage data for the first eight weeks. Adoption is at 43%, which is below the 60% target we set. I want to understand why. Can you walk me through the onboarding completion rates by department and tell me where the drop-off is happening?",
    chooseDialogue:
      "The marketing department shows 72% onboarding completion but only 31% weekly active usage. That gap is significant. What is your explanation for that specific discrepancy?",
    rewriteDialogue:
      "Good. Now I need you to write the sponsor update. Include the adoption figures, the departmental breakdown, and a data-backed recommendation for improving uptake. No opinions without evidence.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has arrived at a one-to-one with printed usage metrics and is asking for departmental breakdowns and drop-off data. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's preparation, precision, and insistence on data-driven answers are hallmarks of the analytical style. She has come with numbers and expects numbers back.",
          observation:
            "Notice that Rachel does not just want to know if adoption is low - she wants to understand the specific departmental patterns and where drop-offs occur. That level of granularity is distinctly analytical.",
          coachingTip:
            "When someone brings printed data to a one-to-one and asks for breakdowns by category, they are signalling analytical communication. Prepare with specifics, not summaries.",
          styleContext:
            "Analytical communicators prepare thoroughly and expect the same from others. Coming to a meeting with Rachel without data is like turning up without your homework.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both analytical and direct styles are task-focused, but the key difference is what they focus on. Rachel is not pushing for a quick decision - she is investigating a data anomaly. She wants understanding before action.",
          observation:
            "A direct communicator would say 'adoption is low - fix it.' Rachel says 'adoption is low - let us understand exactly why before we respond.'",
          coachingTip:
            "If someone wants to understand the data before deciding, they are analytical. If they want to decide and move on, they are direct. Rachel is clearly in investigation mode.",
          styleContext:
            "Analytical communicators believe that good decisions require good data. They invest time in understanding the problem before committing to a solution.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on relationships or generating excitement. Her entire approach is systematic, evidence-based, and methodical.",
          observation:
            "There are no relationship cues, no emotional language, and no appeal to vision. Rachel's world is numbers, patterns, and evidence.",
          coachingTip:
            "When someone's first instinct is to look at the data before forming any view, they are analytical. They trust evidence more than intuition.",
          styleContext:
            "Analytical communicators treat data as the foundation of all communication. If a claim is not backed by evidence, it does not carry weight with them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has identified a gap between 72% onboarding completion and 31% weekly usage in the marketing department and wants a specific explanation. How do you respond?",
      options: [
        {
          id: "s46-opt-a",
          text: "Three factors: 58% of marketing users onboarded but did not return within seven days, suggesting no follow-up nudges. The dashboard lacks marketing-specific KPIs. And their existing Looker dashboards cover 80% of their needs.",
          score: 10,
          result: "strong",
          explanation:
            "This is precise, structured, and data-backed. You have given Rachel three specific, evidence-based factors and offered to share the detail. That is exactly what an analytical communicator wants.",
        },
        {
          id: "s46-opt-b",
          text: "I think the marketing team probably completed onboarding because they were told to, but they have not found it useful enough to keep using. We should probably talk to them and find out what they need.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally reasonable, but too speculative for Rachel. 'Probably' and 'I think' signal opinion rather than analysis. She wants data, not hunches.",
        },
        {
          id: "s46-opt-c",
          text: "Honestly, 72% onboarding completion is actually quite good. I would focus on the departments that are struggling more and not worry too much about marketing - they will come round eventually.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the specific discrepancy Rachel flagged and substitutes your opinion for analysis. An analytical communicator will not accept 'they will come round eventually' as a response.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a sponsor update email with adoption figures, departmental breakdowns, and a data-backed recommendation. Write it in an analytical style - precise, evidence-based, and structured. No opinions without supporting data.",
      targetTraits: ["data-backed", "structured", "precise", "evidence-based"],
      exampleStrongResponse:
        "Subject: Dashboard Adoption - 8-Week Review and Recommendations\n\nOverall adoption stands at 43% against a target of 60%. Departmental breakdown: Operations 67%, Finance 54%, Marketing 31%, HR 22%.\n\nThe primary drop-off point is between onboarding completion and sustained weekly usage. 58% of users who completed onboarding did not return within the first seven days. This pattern is most pronounced in departments where existing tools already cover core reporting needs.\n\nRecommendation (supported by the data): Introduce department-specific dashboard views with KPIs relevant to each team's workflow. Pilot with Marketing (current gap: 41 percentage points between onboarding and usage). Projected uplift based on comparable implementations: 15-20% increase in weekly active usage within 30 days.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is precisely structured, leads with data, and connects the recommendation directly to the evidence. Rachel would confidently forward this to the sponsor.",
          observation:
            "You separated the data from the recommendation clearly, which allows the reader to evaluate both independently. That is how analytical communicators build trust.",
          coachingTip:
            "With analytical stakeholders, always show your working. The recommendation is only as credible as the data behind it.",
          styleContext:
            "Analytical communicators expect written communication to follow a logical structure: data, analysis, recommendation. Each step should flow from the previous one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has some good data points but may lack the structure or precision Rachel expects. Check whether every recommendation is directly supported by a specific finding.",
          observation:
            "If you have included a recommendation without explaining which data point supports it, an analytical reader will flag that as a gap.",
          coachingTip:
            "For every recommendation, add a 'because' clause. 'I recommend X because the data shows Y.' That link between evidence and action is essential for analytical communicators.",
          styleContext:
            "Analytical communicators test every claim against the evidence. If the link is not explicit, they will assume it has not been properly thought through.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email lacks sufficient data, is too opinion-driven, or does not follow a logical structure. Rachel specifically asked for evidence-backed communication.",
          observation:
            "If your email contains phrases like 'I feel that' or 'my sense is', it will not pass an analytical reader's credibility test.",
          coachingTip:
            "Replace every opinion with a data point. Change 'I think adoption is low because the tool is not useful enough' to 'Usage data shows a 41-point gap between onboarding and sustained use, indicating a relevance issue.'",
          styleContext:
            "Analytical communicators distinguish sharply between opinion and evidence. In their world, only evidence counts. Make sure your email operates in that world.",
        },
      },
    },
  },

  // Scenario 47 - Owen Grant, email, intermediate
  {
    id: "scenario-47",
    title: "The Quality Concern",
    context:
      "Owen has sent a detailed email flagging concerns about a process change that was implemented without what he considers adequate testing. He has included a comparison table showing error rates before and after the change.",
    chooseContext:
      "Owen has read your initial response and is pushing back. He does not feel you have addressed his concerns with sufficient rigour and is asking for a more detailed response.",
    rewriteContext:
      "Owen has asked you to draft a formal risk assessment email to the project board, covering the issues he has identified. He wants it to be thorough, evidence-based, and professionally cautious.",
    characterId: "owen-grant",
    dialogue:
      "I have compared the error rates from the four weeks before the process change with the four weeks after. Pre-change, the average error rate was 2.1%. Post-change, it has risen to 3.8%. That is an 81% increase. I have also identified three specific failure modes that did not exist before the change. I need to understand why this was not caught in testing and what the remediation plan is.",
    chooseDialogue:
      "Your response mentioned that the error rate increase 'may be within acceptable variance'. I need to push back on that. What is the confidence interval on your baseline figure? Have you controlled for seasonal volume changes? I need more rigour before I can accept that conclusion.",
    rewriteDialogue:
      "I think this needs to go to the project board as a formal risk assessment. Can you draft it? Include the before-and-after data, the three failure modes, and a risk rating. I want it to be thorough - the board will scrutinise this.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has sent a detailed email with comparison tables, percentage calculations, and specific failure modes, asking why issues were not caught in testing. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's email is methodical, evidence-rich, and process-focused. He has done his own analysis, quantified the issue precisely, and wants a rigorous explanation. That is textbook analytical communication.",
          observation:
            "Notice that Owen does not just say 'error rates are up'. He gives exact percentages, specifies the time periods, calculates the percentage increase, and identifies specific failure modes. That level of precision is distinctly analytical.",
          coachingTip:
            "When someone presents their concerns with supporting data and asks process-related questions ('why was this not caught in testing?'), they are operating analytically. Match their rigour.",
          styleContext:
            "Analytical communicators build cases rather than make claims. They expect you to engage with their evidence at the same level of detail they have provided.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both analytical and direct styles are task-focused, and Owen's email is certainly assertive. But notice that Owen is investigating, not directing. He wants to understand the problem, not just fix it.",
          observation:
            "A direct communicator would say 'error rates are up - fix it by Friday.' Owen says 'error rates are up by exactly 81% - explain why and show me the remediation plan.'",
          coachingTip:
            "The analytical style is distinguished by its depth of investigation. If someone has done their own analysis before raising the issue, they are analytical, not just direct.",
          styleContext:
            "Analytical communicators do not just flag problems - they diagnose them. By the time they raise an issue, they have already built a detailed case.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen's email is entirely focused on data, process, and evidence. There is no relationship-building, no emotional language, and no attempt to inspire or console.",
          observation:
            "The email reads like an audit finding, not a conversation. That precision and formality is a hallmark of analytical communication.",
          coachingTip:
            "Look for the format and content of the communication. Tables, percentages, and specific technical questions signal analytical. Warm language and personal anecdotes signal people-focused styles.",
          styleContext:
            "Analytical communicators treat emails as formal documents. They structure arguments, cite evidence, and expect responses that meet the same standard of rigour.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen is pushing back on your suggestion that the error rate increase may be within acceptable variance. He is asking about confidence intervals and seasonal controls. How do you respond?",
      options: [
        {
          id: "s47-opt-a",
          text: "Fair challenge. The baseline uses a 12-week rolling average with a confidence interval of plus or minus 0.4%. The 3.8% post-change figure sits well outside that range. I have not yet controlled for seasonal volume, and I will share that analysis by Thursday.",
          score: 10,
          result: "strong",
          explanation:
            "This engages with Owen's specific methodological questions, acknowledges what has not been done yet, and commits to further analysis. It shows intellectual honesty and analytical rigour.",
        },
        {
          id: "s47-opt-b",
          text: "Look, the error rate is higher but it is still under 4%. In the grand scheme of things, that is pretty manageable. I think we should focus on fixing the three failure modes rather than getting into the statistics.",
          score: 5,
          result: "partial",
          explanation:
            "This dismisses Owen's analytical concern with a subjective judgement. 'Pretty manageable' is an opinion, not an analysis. Owen specifically asked for more rigour, and this provides less.",
        },
        {
          id: "s47-opt-c",
          text: "I hear you, and I appreciate the thoroughness. Let me connect you with the testing team so you can raise these concerns with them directly. They would be better placed to answer your methodology questions.",
          score: 0,
          result: "weak",
          explanation:
            "This deflects rather than engages. Owen raised the concern with you and expects you to address it. Redirecting to another team will feel like avoidance.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to draft a formal risk assessment email to the project board. Include before-and-after data, three failure modes, and a risk rating. Write it in an analytical style - thorough, evidence-based, and professionally cautious.",
      targetTraits: ["thorough", "evidence-based", "structured", "professionally-cautious"],
      exampleStrongResponse:
        "Subject: Risk Assessment - Process Change Impact on Error Rates\n\nSummary: Following the process change implemented on 15 January, error rates have increased from a 12-week baseline average of 2.1% to a post-change average of 3.8% (81% increase, measured over four weeks). Three previously unobserved failure modes have been identified.\n\nFailure Modes:\n1. Data validation bypass on bulk uploads (first observed 22 January, 14 occurrences)\n2. Timeout errors during peak processing windows (first observed 29 January, 8 occurrences)\n3. Duplicate record generation in cross-system sync (first observed 2 February, 6 occurrences)\n\nRisk Rating: Medium-High. The error rate exceeds the agreed tolerance threshold of 2.5% and the failure modes introduce data integrity risks that were not present in the previous process.\n\nRecommendation: Pause the rollout to remaining departments until root cause analysis is complete and remediation for all three failure modes has been tested. Estimated timeline for analysis: 10 working days.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your risk assessment is thorough, precisely structured, and supported by specific data points. It draws clear conclusions from the evidence and provides a measured recommendation. Owen would be confident presenting this to the board.",
          observation:
            "You included dates, occurrence counts, and a clear risk threshold. That level of specificity transforms an opinion into a credible assessment.",
          coachingTip:
            "Analytical communicators judge written communication by its evidence base. Every claim should be traceable to a data point. Your email achieves that standard.",
          styleContext:
            "Analytical communicators write for scrutiny. They assume the reader will challenge every assertion, so they pre-empt those challenges with evidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your risk assessment covers the key areas but may lack the specificity Owen expects. Check whether each failure mode has dates and occurrence counts, and whether the risk rating is tied to a defined threshold.",
          observation:
            "A risk assessment that says 'error rates have increased significantly' is weaker than one that says 'error rates increased from 2.1% to 3.8%'. Be precise.",
          coachingTip:
            "For every adjective (significant, major, concerning), substitute a number. Analytical readers trust numbers more than adjectives.",
          styleContext:
            "Analytical communicators expect risk assessments to be defensible under challenge. Vague language invites questions; precise data answers them in advance.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your risk assessment is either too brief, too opinion-based, or lacks the structured evidence Owen requires. A board will not take action on generalities.",
          observation:
            "If your email says 'there are some issues that need attention' without quantifying them, it will not survive board-level scrutiny.",
          coachingTip:
            "Structure your risk assessment as: data, failure modes (with specifics), risk rating (with rationale), recommendation. Each section should flow logically from the evidence.",
          styleContext:
            "Analytical communicators view risk assessments as the highest form of professional communication. They must be precise, defensible, and complete.",
        },
      },
    },
  },

  // Scenario 48 - Fiona Banks, team, advanced
  {
    id: "scenario-48",
    title: "The Budget Scrutiny",
    context:
      "You are part of a cross-functional budget review meeting. Fiona has received your team's budget proposal and has emailed you ahead of the meeting with a series of detailed questions about your assumptions and methodology.",
    chooseContext:
      "In the meeting, Fiona has challenged a specific line item in your proposal and is asking you to justify the figure. Other team members are watching and the CFO is in the room.",
    rewriteContext:
      "After the meeting, Fiona has asked you to revise your budget proposal and send her an updated version with clearer methodology notes, so she can sign off before it goes to the CFO.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed your budget proposal and I have some concerns. Your projected revenue increase of 12% is based on a single quarter of growth data. That is not a statistically reliable basis for an annual projection. I also note that your cost assumptions do not account for the supplier price increase that was confirmed last month. Can you walk me through your methodology?",
    chooseDialogue:
      "Your line item for contractor spend shows a 20% increase year on year, but I cannot find a supporting breakdown. What are the underlying assumptions? How many contractors, at what day rate, for how many weeks?",
    rewriteDialogue:
      "I need you to revise the proposal before I can approve it. Add methodology notes to each major line item, adjust the revenue projection to use a 12-month rolling average, and include the confirmed supplier price increase. I want to be able to defend every number in this document.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has reviewed your budget proposal and is questioning the statistical reliability of your revenue projection and the absence of confirmed cost data. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's approach is methodical, evidence-focused, and sceptical of unsupported claims. She is not simply rejecting the proposal - she is interrogating the methodology behind it. That is analytical communication at its sharpest.",
          observation:
            "Notice that Fiona's challenge is specific and constructive. She does not say 'this is wrong' - she says 'this is based on insufficient data' and explains exactly why. She is teaching you her standard.",
          coachingTip:
            "When a Finance Director challenges your numbers, they are often showing you their analytical style in its purest form. They are not being difficult - they are being thorough.",
          styleContext:
            "Analytical communicators in senior finance roles apply the highest standards of evidence. Every number must be defensible, every assumption documented.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable confusion. Fiona is certainly assertive, which can seem direct. But her focus is on methodology and evidence quality, not on speed or outcomes. She wants to understand before she decides.",
          observation:
            "A direct communicator would say 'these numbers do not work - revise them.' Fiona says 'these numbers are based on insufficient data - show me better methodology.' The distinction is crucial.",
          coachingTip:
            "Direct communicators challenge conclusions. Analytical communicators challenge the process that led to the conclusions. Fiona is doing the latter.",
          styleContext:
            "In budget discussions, analytical communicators are not interested in whether you believe the numbers. They are interested in whether the methodology supports the numbers.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona's email contains no relationship-building, no emotional language, and no attempt to inspire. It is a rigorous, methodical critique of your financial assumptions.",
          observation:
            "Every sentence in Fiona's message contains a specific, data-related concern. There is nothing people-focused or vision-driven in her approach.",
          coachingTip:
            "When someone critiques your work by pointing to specific data gaps and methodological weaknesses, they are operating analytically. They are not attacking you - they are stress-testing the evidence.",
          styleContext:
            "Analytical communicators see financial proposals as arguments that must be defended with evidence. If the evidence is weak, the argument falls apart.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona is asking for the underlying assumptions behind your contractor spend line item - number of contractors, day rates, and duration. The CFO is in the room. How do you respond?",
      options: [
        {
          id: "s48-opt-a",
          text: "Six contractors at 650 pounds per day for 40 weeks gives 936,000 pounds. The 20% increase reflects two additional headcount for the Q3 product build, per the November scoping document. I can share the full breakdown.",
          score: 10,
          result: "strong",
          explanation:
            "This provides exactly the granularity Fiona asked for - specific numbers, calculations, and a link to an approved document. It demonstrates preparation and analytical credibility.",
        },
        {
          id: "s48-opt-b",
          text: "We are planning to increase contractor spend because we have a major product build coming up in the second half of the year. The exact split is still being finalised but we are confident in the overall figure.",
          score: 5,
          result: "partial",
          explanation:
            "This provides context but not the specifics Fiona asked for. 'Still being finalised' and 'confident in the overall figure' are red flags for an analytical communicator who wants to see the workings.",
        },
        {
          id: "s48-opt-c",
          text: "The contractor budget is in line with industry benchmarks and represents a reasonable investment given our growth plans. I am happy to discuss the detail offline if that would be helpful.",
          score: 0,
          result: "weak",
          explanation:
            "Appealing to 'industry benchmarks' without citing specific data is exactly the kind of unsupported claim that analytical communicators reject. Deferring the detail 'offline' in front of the CFO looks evasive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants you to revise the budget proposal with methodology notes, adjusted revenue projections using a 12-month rolling average, and the confirmed supplier price increase. Write a covering email for the revised proposal in an analytical style - precise, methodical, and defensible.",
      targetTraits: ["precise", "methodical", "defensible", "structured"],
      exampleStrongResponse:
        "Subject: Revised Budget Proposal - Updated Methodology and Assumptions\n\nFiona,\n\nPlease find attached the revised budget proposal incorporating your feedback. Key changes:\n\n1. Revenue projection: Adjusted from single-quarter extrapolation to a 12-month rolling average. The revised projection is 9.4% growth (down from 12%), which I consider more defensible. Source data and calculation methodology are in Appendix A.\n\n2. Supplier costs: Updated to reflect the confirmed 6.2% price increase effective 1 April. This adds 47,000 pounds to the annual cost base. Confirmation from the supplier is attached.\n\n3. Methodology notes: Each major line item now includes a notes column showing the source data, calculation method, and key assumptions.\n\nI am confident this version can withstand board-level scrutiny. Happy to walk through any line item in detail.\n\nRegards",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your covering email is precisely structured, references specific changes with quantified impacts, and signals that the methodology is now defensible. Fiona would trust this enough to approve.",
          observation:
            "You connected each change directly to Fiona's original feedback, which shows you have listened carefully and responded with rigour. That builds credibility with analytical stakeholders.",
          coachingTip:
            "When revising work for an analytical communicator, map each change explicitly to their feedback. It shows that you have addressed every concern systematically.",
          styleContext:
            "Analytical communicators evaluate revisions against their original feedback. A point-by-point response demonstrates thoroughness and respect for their process.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email addresses some of Fiona's concerns but may lack the quantified detail she expects. Check whether each revision includes a specific number or calculation.",
          observation:
            "Saying 'I have adjusted the revenue projection' is weaker than saying 'I have adjusted the revenue projection from 12% to 9.4% using a 12-month rolling average'. The specificity matters.",
          coachingTip:
            "For every change you describe, include two things: what you changed, and what the quantified impact is. Analytical communicators need both.",
          styleContext:
            "Analytical communicators evaluate the quality of revisions by the precision of the changes. Vague descriptions of improvements do not satisfy their standard.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too brief, too vague, or does not address Fiona's specific feedback points. She gave you three clear requirements and expects a structured response to each one.",
          observation:
            "If your email says 'I have updated the proposal as discussed' without detailing what changed and why, it will not pass Fiona's review.",
          coachingTip:
            "Treat Fiona's feedback as a checklist. Address each point explicitly, with evidence of the change and its quantified impact. Leave no item unaddressed.",
          styleContext:
            "Analytical communicators view vague revision notes as a sign that the work has not been done properly. If you cannot describe the change precisely, they will assume the thinking behind it is equally imprecise.",
        },
      },
    },
  },
];
