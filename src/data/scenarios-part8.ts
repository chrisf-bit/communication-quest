import { Scenario } from "@/types";

export const SCENARIOS_PART8: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (85-87)
  // ============================================

  // Scenario 85 - Sam Hartley, feedback, foundation
  {
    id: "scenario-85",
    title: "The Blunt Appraisal",
    context:
      "You are sitting down with Sam for a quarterly performance review. He has already reviewed the numbers and wants to get straight to ratings and next steps.",
    chooseContext:
      "Sam has pushed back on one of your development points, saying it is irrelevant to hitting targets. He wants the conversation to focus on output, not soft skills.",
    rewriteContext:
      "Sam has asked you to summarise the key takeaway from the review in two sentences so he can forward it to his line manager.",
    characterId: "sam-hartley",
    dialogue:
      "Skip the warm-up. Tell me where I stand against target, what rating I am getting, and what I need to do differently next quarter. I have another meeting in twenty minutes.",
    chooseDialogue:
      "I do not need coaching on collaboration. I need to know the three things that will move my numbers. Give me those and we are done.",
    rewriteDialogue:
      "Write it up for me. Two sentences, no filler. My manager does not want a story, she wants the headline.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Sam wants to skip the warm-up and jump straight to ratings, targets, and actions. Which communication style is he showing?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's insistence on cutting past small talk and going straight to outcomes, ratings, and actions is classic direct behaviour.",
          observation:
            "Notice how he frames the conversation around time pressure and results. He values speed and clarity above everything else.",
          coachingTip:
            "When someone opens a feedback session by asking for their rating before you have even started, you are almost certainly dealing with a direct communicator.",
          styleContext:
            "Direct communicators see feedback as a transaction: tell me where I am, tell me what to fix, and let me get back to work.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Analytical communicators also care about performance data, but they would want to understand the methodology behind the rating, not just hear the number.",
          observation:
            "Sam is not questioning how the rating was calculated. He simply wants the result and the action plan.",
          coachingTip:
            "Analytical people ask 'how did you arrive at that score?' Direct people ask 'what is my score?' That distinction matters.",
          styleContext:
            "Both styles are task-focused, but direct communicators prioritise speed of decision while analytical communicators prioritise rigour of evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam is not showing any interest in how the feedback lands emotionally or in building rapport. His focus is entirely on results and efficiency.",
          observation:
            "There is no mention of team harmony, personal connection, or shared feelings. Sam treats the review as a data exchange.",
          coachingTip:
            "Consider what the person is optimising for. If it is relationships, think supportive or expressive. If it is outcomes and speed, think direct.",
          styleContext:
            "Direct communicators can appear blunt in feedback sessions, but they appreciate the same directness in return. Do not soften the message; sharpen it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has dismissed your development point about collaboration and wants three things that will move his numbers. How do you respond?",
      options: [
        {
          id: "s85-opt-a",
          text: "Fair enough. Here are three priorities: 1) Increase conversion rate on inbound leads by 8%. 2) Reduce average deal cycle from 22 days to 16. 3) Upsell at least two existing accounts this quarter. I will check in on progress at the midpoint.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Sam exactly what he asked for: three specific, measurable priorities with no unnecessary context. Direct communicators respect this kind of precision.",
        },
        {
          id: "s85-opt-b",
          text: "I hear you, but collaboration is important too. Let me think about how to frame it in a way that connects to your targets, and I will come back to you.",
          score: 5,
          result: "partial",
          explanation:
            "This delays the answer and reopens a topic Sam has closed. A direct communicator will see this as stalling rather than helping.",
        },
        {
          id: "s85-opt-c",
          text: "I think it is worth taking a step back and looking at the bigger picture. Your numbers are strong, but the way you work with the team affects morale, and that has a knock-on effect. Let us talk about how you can bring people with you.",
          score: 0,
          result: "weak",
          explanation:
            "This ignores Sam's request entirely and returns to the topic he rejected. He will disengage quickly if you do not match his pace and focus.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a two-sentence summary of the review for his line manager. Write it in a direct style: lead with the outcome, be specific, and avoid any filler language.",
      targetTraits: ["concise", "outcome-led", "specific-metrics", "no-hedging"],
      exampleStrongResponse:
        "Sam exceeded target by 12% this quarter and is rated as a strong performer. Next quarter priorities are improving conversion rate, shortening deal cycles, and landing two upsell opportunities.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is tight, factual, and leads with the result. A direct reader could absorb this in five seconds.",
          observation:
            "You avoided phrases like 'overall it was a positive conversation' and went straight to the data. That is what Sam and his manager want.",
          coachingTip:
            "When writing for direct communicators, imagine they will only read the first sentence. Make sure it carries the most important information.",
          styleContext:
            "Direct communicators forward messages as-is. If your summary needs editing before it is shareable, it was not direct enough.",
        },
        partial: {
          result: "partial",
          explanation:
            "You are on the right track, but there may be softening language or missing specifics. Check whether you included a concrete result and clear next steps.",
          observation:
            "Phrases like 'had a really productive conversation' or 'discussed several areas' add warmth but remove precision.",
          coachingTip:
            "Read your summary aloud. If any sentence does not contain a number, a name, or an action, consider cutting it.",
          styleContext:
            "Direct communicators measure the quality of written feedback by its density of useful information per word.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too long, too vague, or too focused on the process rather than the outcome. Sam asked for a headline, not a narrative.",
          observation:
            "Starting with 'we had a great chat about' or 'Sam and I explored several themes' signals a mismatch with the direct style.",
          coachingTip:
            "Write your summary, then delete every adjective and adverb. What remains is closer to what a direct communicator wants.",
          styleContext:
            "In feedback contexts, direct communicators want to know: what was the result, and what happens next. Everything else is optional.",
        },
      },
    },
  },

  // Scenario 86 - Jordan Cole, sales, intermediate
  {
    id: "scenario-86",
    title: "The Hard Sell",
    context:
      "You are in a sales meeting with Jordan, a procurement director who has already reviewed three competing proposals. She has allocated fifteen minutes and wants to make a decision today.",
    chooseContext:
      "Jordan has narrowed the field to your proposal and one competitor. She wants to know why she should choose you, and she wants the answer in under sixty seconds.",
    rewriteContext:
      "Jordan is ready to commit but needs a one-paragraph justification she can paste into her board approval request. She has asked you to draft it.",
    characterId: "jordan-cole",
    dialogue:
      "I have read the proposal. Do not walk me through the slides. Tell me the price, the delivery date, and the one thing that makes you different from the other two. Go.",
    chooseDialogue:
      "You and BrightPath are neck and neck on price. Give me one reason to pick you. Make it concrete, not a slogan.",
    rewriteDialogue:
      "I need a paragraph for the board paper. No marketing language. Just the facts: what we are buying, what it costs, and why it is the right choice.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Jordan has dismissed the slide deck and asked for price, delivery date, and one differentiator. Which communication style is she demonstrating?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan is stripping the sales process down to its essentials. She wants facts, not a performance. That is textbook direct communication.",
          observation:
            "The instruction 'do not walk me through the slides' is a clear signal. She has already done her homework and wants you to match her pace.",
          coachingTip:
            "When a buyer says 'I have read it', believe them. Repeating what they already know will cost you credibility with a direct communicator.",
          styleContext:
            "Direct buyers make fast decisions but hold you accountable for every claim. Be precise, because they will remember what you promised.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An analytical buyer would also be fact-focused but would want to interrogate the detail: benchmarks, case studies, methodology. Jordan just wants the bottom line.",
          observation:
            "Jordan is not asking for evidence or proof points. She wants a quick, confident summary so she can decide now.",
          coachingTip:
            "Analytical buyers ask 'prove it'. Direct buyers say 'tell me'. The verb they use reveals their style.",
          styleContext:
            "In sales contexts, direct communicators value sellers who are as efficient with their time as they are with their own.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan is not interested in relationship-building or creative storytelling. She is running a competitive process and wants speed and substance.",
          observation:
            "There is no warmth, no interest in your company culture, and no desire to explore possibilities. This is a results-driven buyer.",
          coachingTip:
            "Ask yourself: is this person buying based on relationship, vision, comfort, or data? Jordan is buying on speed and outcome, which points to direct.",
          styleContext:
            "Direct buyers respect salespeople who can match their brevity. If you can answer in fewer words than they used to ask, you have their attention.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants one concrete reason to choose you over BrightPath. Both proposals are similar on price. How do you respond?",
      options: [
        {
          id: "s86-opt-a",
          text: "We guarantee go-live in eight weeks. BrightPath's average is twelve. If you miss your April deadline, the cost of delay is roughly 40,000 pounds. We remove that risk.",
          score: 10,
          result: "strong",
          explanation:
            "This is specific, competitive, and outcome-focused. You have given Jordan a number she can use to justify her decision. Direct buyers love quantified differentiation.",
        },
        {
          id: "s86-opt-b",
          text: "We have a really strong implementation team and our clients consistently rate us highly for support. I think you will find the experience of working with us is a cut above.",
          score: 5,
          result: "partial",
          explanation:
            "This is vague and relationship-focused. 'Really strong' and 'a cut above' are opinions, not evidence. Jordan asked for something concrete.",
        },
        {
          id: "s86-opt-c",
          text: "Honestly, I think both proposals have their strengths. What matters most is finding the right cultural fit. Why do not we set up a call with our project team so you can see how we work?",
          score: 0,
          result: "weak",
          explanation:
            "This dodges the question and adds another meeting to a process Jordan wants to close today. She will see this as a lack of confidence in your own proposition.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan needs a one-paragraph board justification covering what she is buying, what it costs, and why it is the right choice. Write it in a direct style with no marketing language.",
      targetTraits: ["factual", "concise", "outcome-led", "no-jargon"],
      exampleStrongResponse:
        "We are purchasing the ProConnect platform from Velocity Ltd at a total cost of 85,000 pounds, covering licence, implementation, and twelve months of support. Velocity guarantees go-live within eight weeks, which is four weeks faster than the nearest competitor and ensures we meet our April regulatory deadline. Their implementation track record across five comparable projects shows zero overruns.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This reads like a board paper should: factual, specific, and built around the decision rationale. Jordan can paste this straight in without editing.",
          observation:
            "You avoided superlatives and let the numbers speak for themselves. That is exactly how direct stakeholders justify decisions.",
          coachingTip:
            "When writing for board-level direct communicators, every sentence should answer 'so what?' If it does not, cut it.",
          styleContext:
            "Direct communicators at senior level want documents that respect their time and their intelligence. State the facts and trust them to draw the right conclusion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Decent, but there may be marketing language creeping in or missing specifics. Check whether every claim is backed by a number.",
          observation:
            "Phrases like 'industry-leading' or 'best-in-class' are red flags in a board paper. Replace them with evidence.",
          coachingTip:
            "Read each sentence and ask: could a competitor say this too? If yes, it is not specific enough for a direct buyer.",
          styleContext:
            "Direct communicators use board papers to make decisions, not to be impressed. Substance always beats style in their world.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paragraph reads more like a marketing brochure than a board justification. Jordan specifically asked for no marketing language.",
          observation:
            "If your text contains words like 'innovative', 'transformative', or 'exciting opportunity', it is misaligned with the brief.",
          coachingTip:
            "Strip your paragraph back to subject, verb, object. 'We are buying X for Y because Z.' Build from there, adding only essential detail.",
          styleContext:
            "Direct communicators trust people who write plainly. Overwritten copy suggests you are compensating for a weak proposition.",
        },
      },
    },
  },

  // Scenario 87 - Alex Tran, email, advanced
  {
    id: "scenario-87",
    title: "The Escalation Thread",
    context:
      "Alex has started an email thread with you and two senior directors about a project that has gone significantly over budget. The tone is urgent and Alex is pushing for immediate corrective action.",
    chooseContext:
      "The directors have replied asking for more detail. Alex has forwarded their responses to you with a one-line instruction to provide a clear breakdown within the hour.",
    rewriteContext:
      "Alex wants you to draft the final response to the directors, closing the loop on the budget overrun with a remediation plan. He expects it to be direct, factual, and under ten lines.",
    characterId: "alex-tran",
    dialogue:
      "This project is 30% over budget and nobody flagged it until last week. I need to know who is accountable, what the root cause is, and what the recovery plan looks like. Copy me on everything from now on.",
    chooseDialogue:
      "The directors want specifics. Pull together the budget variance, the three biggest cost drivers, and your recommended corrective actions. I need it in my inbox within sixty minutes.",
    rewriteDialogue:
      "Draft the close-out email to the directors. No apologies, no hedging. State what happened, what we are doing about it, and what the revised forecast looks like. Keep it tight.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex is escalating a budget overrun via email, demanding accountability, root cause, and a recovery plan. Which communication style does this reflect?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's email is action-oriented and demanding. He wants accountability and a plan, not a discussion. This is direct communication under pressure.",
          observation:
            "Note the command structure: 'I need to know', 'copy me on everything'. Alex is taking control of the situation with short, decisive instructions.",
          coachingTip:
            "Under stress, direct communicators become even more directive. Their emails get shorter and their expectations get higher.",
          styleContext:
            "Direct communicators escalate quickly and visibly. They would rather over-communicate upward than be caught without a plan.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An analytical communicator would also want root cause analysis, but they would focus on methodology and data accuracy rather than speed and accountability.",
          observation:
            "Alex is not asking for a detailed audit or a process review. He wants answers now and action immediately. Speed trumps thoroughness here.",
          coachingTip:
            "The word 'accountable' is a strong direct signal. Analytical communicators ask 'what went wrong in the process?' Direct communicators ask 'who is responsible?'",
          styleContext:
            "In escalation scenarios, direct communicators focus on ownership and resolution. Analytical communicators focus on understanding and prevention.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. There is no empathy, no concern about how people are feeling, and no interest in consensus. Alex is managing a crisis with command-and-control urgency.",
          observation:
            "Alex does not ask how the team is coping or whether anyone needs support. The entire focus is on fixing the problem and assigning responsibility.",
          coachingTip:
            "In high-pressure email threads, look at what the person prioritises. If it is people and feelings, think supportive. If it is speed and answers, think direct.",
          styleContext:
            "Direct communicators under pressure can seem harsh in writing because they strip away all politeness in favour of speed. Understanding this prevents misreading their intent.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex needs the budget variance, the three biggest cost drivers, and your recommended corrective actions within sixty minutes. How do you reply?",
      options: [
        {
          id: "s87-opt-a",
          text: "Here is the breakdown. Budget variance: 127,000 pounds over (30.2%). Top three cost drivers: 1) Unplanned infrastructure migration, 62,000 pounds. 2) Scope change on reporting module, 38,000 pounds. 3) Contractor extension due to testing delays, 27,000 pounds. Recommended actions: freeze all non-essential scope, renegotiate contractor day rate, and cap remaining spend with weekly sign-off. Revised forecast attached.",
          score: 10,
          result: "strong",
          explanation:
            "This is exactly what Alex asked for: structured, specific, and delivered without padding. The numbers are precise and the actions are concrete. A direct communicator will trust this immediately.",
        },
        {
          id: "s87-opt-b",
          text: "I have been looking into this and it is quite complex. There were several factors that contributed, including some scope changes and infrastructure challenges. I think we need to sit down and go through it properly rather than rushing a response. Can we schedule a call for this afternoon?",
          score: 5,
          result: "partial",
          explanation:
            "This delays the response and adds a meeting to a situation that Alex wants resolved in writing. The vague language ('quite complex', 'several factors') will frustrate him.",
        },
        {
          id: "s87-opt-c",
          text: "Hi Alex, I want to start by saying the team has been under enormous pressure and everyone has been working flat out to deliver this. The overrun is not down to any one person. I think we need to be careful about how we frame this to the directors so we do not demoralise the team. Let me put together a balanced view.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises team morale over the data Alex needs. He did not ask for a balanced view or emotional context. He asked for numbers and actions within an hour.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants a close-out email to the directors covering what happened, what you are doing about it, and the revised forecast. Keep it under ten lines with no apologies or hedging. Write it in Alex's direct style.",
      targetTraits: ["factual", "structured", "accountability-focused", "no-hedging"],
      exampleStrongResponse:
        "Subject: Project Aurora, Budget Overrun, Remediation Plan\n\nThe project is currently 127,000 pounds (30.2%) over the approved budget. The three primary cost drivers were unplanned infrastructure migration (62k), scope changes to the reporting module (38k), and contractor extensions (27k). We have implemented three corrective actions: all non-essential scope is frozen, contractor rates have been renegotiated, and remaining spend now requires weekly director sign-off. The revised total forecast is 548,000 pounds, and we expect to hold this figure. I will provide a weekly update every Friday until project close.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is factual, structured, and forward-looking. It acknowledges the problem without apologising for it and provides a clear path to resolution.",
          observation:
            "You led with the problem, explained the cause, described the fix, and committed to ongoing visibility. That is the structure direct senior leaders expect.",
          coachingTip:
            "In escalation emails, the structure should be: problem, cause, action, commitment. If you follow this pattern, direct communicators will trust your grip on the situation.",
          styleContext:
            "Direct communicators at director level want to see that you own the problem, understand the cause, and have already taken action. They do not want to be asked what to do.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right intent but may be missing structure or specifics. Check that you have included actual numbers and concrete actions rather than general commitments.",
          observation:
            "Phrases like 'we are looking into it' or 'we will review options' signal a lack of decisiveness. Direct readers want to see actions already taken, not actions planned.",
          coachingTip:
            "Replace every 'we plan to' with 'we have'. Even if you are still mid-action, frame it as in progress rather than under consideration.",
          styleContext:
            "In crisis communications, direct stakeholders judge you on the speed and specificity of your response. Vagueness erodes confidence faster than bad news does.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either opens with apologies, uses hedging language, or fails to provide the specific numbers and actions Alex requested.",
          observation:
            "Starting with 'I wanted to provide some context' or 'we regret that' shifts the tone from action to defence. Alex explicitly said no apologies.",
          coachingTip:
            "Write the email as if you are the person fixing the problem, not the person explaining it. Owners act, commentators explain.",
          styleContext:
            "Direct communicators respect people who face problems head-on. An email that hides behind qualifiers or shared responsibility reads as evasive.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (88-90)
  // ============================================

  // Scenario 88 - Priya Sharma, sales, foundation
  {
    id: "scenario-88",
    title: "The Pitch with Passion",
    context:
      "You are in a sales meeting with Priya, a marketing director who is exploring new creative platforms for her team. She is excited about the possibilities and wants to hear how your product can transform her campaigns.",
    chooseContext:
      "Priya has seen the demo and is buzzing with ideas. She wants to know how your platform can help her team stand out at an upcoming industry awards ceremony.",
    rewriteContext:
      "Priya has asked you to send a follow-up email that captures the energy of the meeting and paints a picture of what her team could achieve with the platform.",
    characterId: "priya-sharma",
    dialogue:
      "I love what I have seen so far. But I do not just want another tool, I want something that makes my team feel like they are creating magic. Tell me the story of a client who felt that way after using your platform.",
    chooseDialogue:
      "Our awards submission is in six weeks and I want to blow the judges away. How can your platform help us create something nobody has seen before?",
    rewriteDialogue:
      "Send me something I can share with my team that gets them as excited as I am right now. I want them to read it and think, 'this is going to change everything.'",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya is asking for stories, emotional impact, and creative transformation rather than features and pricing. Which communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya is buying the vision, not the specification. Her language is emotional, aspirational, and story-driven. That is classic expressive communication.",
          observation:
            "Notice phrases like 'creating magic' and 'blow the judges away'. She is not asking what the tool does; she is asking how it will make her team feel.",
          coachingTip:
            "When a buyer asks for stories instead of specs, and talks about feelings instead of features, you are dealing with an expressive communicator.",
          styleContext:
            "Expressive buyers are motivated by possibility and recognition. They want to be early adopters, not safe followers.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also care about how people feel, but they focus on comfort and safety rather than excitement and innovation.",
          observation:
            "Priya is not asking whether her team will be comfortable with the change. She is asking whether it will inspire them. That distinction points to expressive.",
          coachingTip:
            "Supportive buyers ask 'will my team be okay with this?' Expressive buyers ask 'will my team be thrilled by this?' Listen for the energy level.",
          styleContext:
            "Both expressive and supportive styles are people-oriented, but expressive leans toward ambition and recognition while supportive leans toward harmony and stability.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not asking for data, ROI calculations, or process detail. Her entire focus is on vision, creativity, and emotional impact.",
          observation:
            "A task-focused buyer would ask about implementation timelines or cost per user. Priya has not mentioned a single metric.",
          coachingTip:
            "Ask yourself: is this person buying with their head or their heart? Priya is clearly buying with her heart, which points toward expressive or supportive.",
          styleContext:
            "Expressive communicators make purchasing decisions based on how the product makes them feel and how it positions them in their organisation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya wants to know how your platform can help her team create something award-winning in six weeks. How do you respond?",
      options: [
        {
          id: "s88-opt-a",
          text: "Picture this: your team walks into the awards ceremony knowing they have created something the industry has never seen. Our platform has a real-time collaboration feature that lets your designers and copywriters build campaigns together, live, with instant visual previews. Last year, a client used it to produce a campaign that won three golds at the Marketing Excellence Awards. I can see your team doing something even bigger.",
          score: 10,
          result: "strong",
          explanation:
            "This paints a vivid picture, references a success story, and flatters Priya's ambition. Expressive buyers respond to narrative and possibility, and you have delivered both.",
        },
        {
          id: "s88-opt-b",
          text: "The platform has a robust set of collaboration tools and integrates with most design software. It should help your team work more efficiently within the six-week window. I can send you the feature comparison sheet.",
          score: 5,
          result: "partial",
          explanation:
            "This is accurate but flat. Priya did not ask about integration or efficiency. She asked about standing out and creating something extraordinary. You have matched a direct or analytical style, not hers.",
        },
        {
          id: "s88-opt-c",
          text: "Six weeks is quite tight. I would recommend starting with a pilot project so your team can get comfortable with the platform before committing to a high-stakes deliverable like an awards entry.",
          score: 0,
          result: "weak",
          explanation:
            "This pours cold water on Priya's enthusiasm. Suggesting caution and a pilot project is the opposite of what an expressive communicator wants to hear when they are fired up.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a follow-up email that captures the meeting's energy and gets her team excited about the platform. Write it in an expressive style: be vivid, aspirational, and people-focused.",
      targetTraits: ["vivid-language", "aspirational", "story-driven", "people-focused"],
      exampleStrongResponse:
        "Subject: Your Team's Next Big Moment\n\nIt was brilliant meeting you today, Priya. The energy in that room was infectious, and I could already see the wheels turning. Here is what I keep coming back to: your team has the talent and the ambition to create something genuinely groundbreaking. Our platform is designed to amplify exactly that kind of creativity, giving your designers and copywriters a shared space where ideas come to life in real time. One of our clients described it as 'the moment our campaigns went from good to unforgettable.' I think your team is about to have that same moment. Let us make it happen.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your email has energy, warmth, and a sense of shared excitement. Priya will read this and want to forward it to her team immediately.",
          observation:
            "You used emotional language and a client quote to build momentum. That is exactly how expressive communicators like to be sold to.",
          coachingTip:
            "When writing to expressive buyers, end with a call to action that feels collaborative and exciting, not administrative.",
          styleContext:
            "Expressive communicators share emails that make them look visionary. If your follow-up reads like a partnership invitation rather than a sales pitch, you have got the tone right.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right structure but might lack emotional colour or storytelling. Check whether it would genuinely excite someone.",
          observation:
            "If your email reads like a summary of features rather than a vision of what is possible, it will not land with an expressive reader.",
          coachingTip:
            "Try adding a client story or a vivid image of what success looks like. Expressive communicators are persuaded by narrative, not bullet points.",
          styleContext:
            "Expressive buyers want to feel something when they read your email. If the tone is neutral, you are speaking the wrong language.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too formal, too cautious, or too focused on process. Priya asked for energy and inspiration, and this does not deliver either.",
          observation:
            "If your email mentions implementation plans, risk assessments, or pilot phases, it is mismatched with Priya's request.",
          coachingTip:
            "Rewrite the email as if you are writing to a friend you are genuinely excited to work with. That warmth and confidence is what expressive communicators expect.",
          styleContext:
            "Expressive communicators lose interest when the energy drops. A flat follow-up after a high-energy meeting will make them question whether you understood them.",
        },
      },
    },
  },

  // Scenario 89 - Marcus Webb, feedback, intermediate
  {
    id: "scenario-89",
    title: "The Creative Review",
    context:
      "You are giving Marcus feedback on a campaign concept he presented to the leadership team. The concept was ambitious and creative but lacked some commercial rigour. Marcus is eager to hear your thoughts.",
    chooseContext:
      "Marcus has listened to your initial feedback and is visibly deflated. He wants to understand how he can keep the creative spark while making the commercial case stronger.",
    rewriteContext:
      "Marcus has asked you to write a short note summarising what he did well and what to refine, in a way that feels motivating rather than critical.",
    characterId: "marcus-webb",
    dialogue:
      "Tell me honestly, did the concept land? I put everything into that presentation. I know the numbers need work but I think the creative idea is strong. Did the room feel the energy?",
    chooseDialogue:
      "I get it, the business case needs more depth. But I do not want to strip the soul out of it. How do I add the rigour without losing the magic?",
    rewriteDialogue:
      "Can you write me a quick summary that I can look back on? Something that reminds me what worked and where to push harder. I want to feel like I am building on something good, not starting over.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus is asking whether the room 'felt the energy' and whether the creative idea 'landed'. He describes his work as having 'soul' and 'magic'. Which communication style is this?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is processing feedback through an emotional and creative lens. He cares about impact, energy, and whether his idea inspired people. That is quintessentially expressive.",
          observation:
            "Notice how he frames success in terms of feeling rather than metrics. 'Did the room feel the energy?' is an expressive question, not an analytical one.",
          coachingTip:
            "When someone asks 'did it land?' rather than 'did it meet the brief?', they are telling you they value emotional impact over technical accuracy.",
          styleContext:
            "Expressive communicators take feedback personally because their work is an extension of their identity. Acknowledge the creativity before addressing the gaps.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also care about how feedback feels, but they focus more on group harmony than personal creative impact.",
          observation:
            "Marcus is not asking whether the team is okay or whether the feedback was fair. He is asking whether his vision connected. That is an expressive concern.",
          coachingTip:
            "Supportive people ask 'is everyone comfortable with the feedback process?' Expressive people ask 'did my work move people?' Different questions, different styles.",
          styleContext:
            "Both styles are people-oriented, but expressive communicators seek recognition and inspiration while supportive communicators seek consensus and comfort.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not asking for data or process improvements. He is asking about emotional resonance and creative impact.",
          observation:
            "A task-focused person would ask 'what specific metrics does the business case need?' Marcus is asking about soul and magic.",
          coachingTip:
            "Listen to the vocabulary. Words like 'energy', 'magic', 'soul', and 'land' are emotional and sensory. They signal an expressive communicator.",
          styleContext:
            "Expressive communicators use vivid, emotional language even when discussing business topics. Their vocabulary is a reliable style indicator.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants to strengthen the commercial case without 'stripping the soul' from his concept. How do you guide him?",
      options: [
        {
          id: "s89-opt-a",
          text: "The creative idea is genuinely strong, Marcus, and the room responded to it. What we need to do is build a commercial story that is as compelling as the creative one. Think of the business case as the foundation that lets your idea fly higher. Let us take the three boldest elements of your concept and attach a revenue projection or cost saving to each one. That way, the numbers amplify the vision instead of competing with it.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's creativity, reframes the commercial work as enhancing rather than constraining his vision, and gives him a practical path forward. Expressive communicators respond well to this combination of encouragement and direction.",
        },
        {
          id: "s89-opt-b",
          text: "You need to add a proper financial model. The leadership team wants to see projected ROI, payback period, and a sensitivity analysis. I can send you a template.",
          score: 5,
          result: "partial",
          explanation:
            "This is factually correct but emotionally flat. Marcus asked how to preserve the creative spark, and you responded with spreadsheet requirements. The content is right but the delivery is wrong for his style.",
        },
        {
          id: "s89-opt-c",
          text: "Honestly, I think you need to go back to basics. The concept was visually impressive but the leadership team makes decisions on numbers, not aesthetics. I would start again with the business case and build the creative around it.",
          score: 0,
          result: "weak",
          explanation:
            "Telling Marcus to 'start again' is the one thing he explicitly said he did not want to hear. This dismisses his creative effort and will shut him down completely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants a motivating summary that celebrates what worked and frames improvements as building on strength. Write it in an expressive style: be warm, encouraging, and visionary.",
      targetTraits: ["encouraging", "visionary", "people-focused", "strengths-first"],
      exampleStrongResponse:
        "Marcus, your concept had real impact. The creative direction was bold and original, and the room genuinely responded to the energy you brought. The narrative arc was strong, and your visual storytelling was a standout. To take it to the next level, layer in the commercial evidence that proves your vision is not just inspiring but investable. Attach revenue potential to your three biggest creative ideas, and the leadership team will not just feel the concept, they will fund it. You are closer than you think.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is exactly the kind of feedback that fuels an expressive communicator. You acknowledged the creative strengths, framed the improvement as an enhancement, and ended on an encouraging note.",
          observation:
            "The phrase 'not just inspiring but investable' reframes commercial rigour as something that serves the creative vision. That is a powerful bridge for an expressive person.",
          coachingTip:
            "When giving feedback to expressive communicators, always start and end with what is working. The development point should feel like a stepping stone, not a setback.",
          styleContext:
            "Expressive communicators are energised by possibility and deflated by criticism. Frame every improvement as an opportunity to go further, not a correction.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your note has the right intent but may lean too heavily on the development areas or lack the warmth Marcus needs to stay motivated.",
          observation:
            "If the positives feel like a formality before the real feedback, an expressive reader will see through it. The praise needs to be genuine and specific.",
          coachingTip:
            "Be specific about what impressed you. 'Great work' is generic. 'Your visual storytelling was a standout' is personal and memorable.",
          styleContext:
            "Expressive communicators remember how feedback made them feel long after they forget the specific points. Lead with emotion and energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note is either too clinical, too blunt, or too focused on what went wrong. Marcus will read this as a rejection of his creative effort.",
          observation:
            "If the summary reads like a report card or a list of corrections, it is misaligned with what Marcus asked for.",
          coachingTip:
            "Rewrite with this question in mind: would Marcus want to pin this on his wall? If not, add more warmth and vision.",
          styleContext:
            "Expressive communicators need feedback that feels like fuel, not friction. If your note drains energy instead of adding it, the style is wrong.",
        },
      },
    },
  },

  // Scenario 90 - Nina Okafor, email, advanced
  {
    id: "scenario-90",
    title: "The Vision Email",
    context:
      "Nina is drafting a company-wide email to announce a new innovation lab she has championed. She has asked for your help making the email feel inspiring and personal rather than corporate.",
    chooseContext:
      "Nina has shared her first draft, which is competent but flat. She wants your help injecting energy, storytelling, and a sense of shared mission into the announcement.",
    rewriteContext:
      "Nina wants you to rewrite the opening paragraph of the announcement so it hooks people emotionally and makes them want to be part of the innovation lab.",
    characterId: "nina-okafor",
    dialogue:
      "I have written the announcement but it reads like a memo from HR. I want people to feel something when they read it. This lab is about giving our most creative people a space to dream big, and the email needs to reflect that.",
    chooseDialogue:
      "Here is my draft opening: 'We are pleased to announce the launch of the Innovation Lab, a new initiative designed to foster cross-functional collaboration.' It is accurate, but it is boring. Help me make it sing.",
    rewriteDialogue:
      "Rewrite my opening paragraph. I want someone reading it on their phone over breakfast to stop scrolling and think, 'I want in.' Make it human, make it bold, and make it feel like an invitation, not a directive.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Nina describes her draft as reading 'like a memo from HR' and wants people to 'feel something'. She talks about dreaming big and making the email 'sing'. Which style is she demonstrating?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina is rejecting corporate formality in favour of emotional resonance and storytelling. She wants her writing to inspire, not inform. That is textbook expressive communication.",
          observation:
            "The contrast she draws between a 'memo from HR' and something that makes people 'feel something' reveals her values: impact over accuracy, energy over efficiency.",
          coachingTip:
            "When someone actively rejects neutral, factual writing in favour of emotional impact, they are telling you exactly what style they operate in.",
          styleContext:
            "Expressive communicators see internal communications as opportunities to inspire and lead, not just to inform. They judge emails by emotional impact, not informational completeness.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also care about how people feel, but their focus would be on ensuring everyone feels included and comfortable rather than inspired and energised.",
          observation:
            "Nina is not worried about people feeling safe or consulted. She wants them to feel excited and ambitious. That is expressive, not supportive.",
          coachingTip:
            "Supportive communicators would say 'I want everyone to feel welcome.' Expressive communicators say 'I want everyone to feel inspired.' The desired emotion reveals the style.",
          styleContext:
            "Both styles care about people, but expressive communicators want to elevate and energise while supportive communicators want to reassure and include.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has explicitly rejected factual, process-oriented writing. She is not looking for clarity or data; she is looking for emotional connection.",
          observation:
            "A direct or analytical communicator would be satisfied with a clear, factual announcement. Nina finds that approach inadequate.",
          coachingTip:
            "When someone says 'it is accurate but boring', they are prioritising style over substance. That is a hallmark of expressive communication.",
          styleContext:
            "Expressive communicators believe how you say something is as important as what you say. Form and content carry equal weight in their world.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina's draft opening reads: 'We are pleased to announce the launch of the Innovation Lab, a new initiative designed to foster cross-functional collaboration.' She wants it to sing. Which revision do you suggest?",
      options: [
        {
          id: "s90-opt-a",
          text: "What if the best idea our company ever has is sitting in someone's head right now, waiting for a space to come alive? That is why we are launching the Innovation Lab, a place where curious minds from every corner of the business can come together to experiment, create, and build things that do not exist yet. If you have ever thought 'what if we tried this?', this is your invitation.",
          score: 10,
          result: "strong",
          explanation:
            "This opens with a provocative question, paints a vivid picture, and ends with a personal invitation. It has the energy, warmth, and storytelling that Nina is looking for.",
        },
        {
          id: "s90-opt-b",
          text: "We are excited to share that the Innovation Lab is now open. This is a dedicated space for teams across the business to collaborate on new ideas. We believe it will drive significant value and encourage creative thinking at all levels.",
          score: 5,
          result: "partial",
          explanation:
            "This is warmer than the original but still reads like a corporate announcement. 'Drive significant value' and 'encourage creative thinking' are generic phrases that lack the personal, bold tone Nina wants.",
        },
        {
          id: "s90-opt-c",
          text: "Following approval from the senior leadership team, we are launching the Innovation Lab in Q2. The lab will operate on a quarterly cohort model with structured intake criteria. Teams wishing to participate should submit a proposal via the intranet portal by 28 March.",
          score: 0,
          result: "weak",
          explanation:
            "This is pure process communication. It is exactly the kind of 'HR memo' tone that Nina rejected. There is no warmth, no vision, and no emotional pull.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to rewrite the opening paragraph so it hooks people emotionally and makes them want to join the innovation lab. Write it in an expressive style: be bold, human, and inviting.",
      targetTraits: ["bold-opening", "vivid-language", "personal-tone", "invitational"],
      exampleStrongResponse:
        "Every breakthrough starts with someone asking 'what if?' Today, we are creating a home for that question. The Innovation Lab is not a programme or a process. It is a space where your boldest ideas get room to breathe, where 'that will never work' becomes 'let us find out', and where the most creative people in our business get to do what they do best. If you have ever sketched an idea on the back of a napkin and wished someone would take it seriously, this is for you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is exactly the tone Nina wants. It is personal, vivid, and makes the reader feel individually invited. The language is bold without being corporate.",
          observation:
            "You used concrete imagery ('back of a napkin') and reframed the lab as a space for people rather than a business initiative. That human touch is what expressive communicators prize.",
          coachingTip:
            "When writing for expressive communicators, use 'you' and 'your' frequently. Make the reader feel like the email was written specifically for them.",
          styleContext:
            "Expressive communicators want internal communications to feel like a conversation with a friend, not a broadcast from management. Personal pronouns and vivid imagery are your best tools.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your opening has warmth but may lack the boldness or storytelling that would truly stop someone mid-scroll. Check whether it feels genuinely different from a standard announcement.",
          observation:
            "If your paragraph could have been written by any company about any initiative, it is not specific or personal enough for Nina.",
          coachingTip:
            "Try opening with a question, a bold claim, or a moment of storytelling. Expressive communicators want to be surprised, not just informed.",
          styleContext:
            "The test for an expressive email is: would someone forward this to a colleague and say 'you have to read this'? If not, push the energy higher.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening still reads like a corporate announcement. Nina explicitly asked for something human, bold, and inviting, and this does not meet that brief.",
          observation:
            "If your paragraph contains phrases like 'we are pleased to announce', 'key initiative', or 'strategic priority', it is in the wrong register for Nina.",
          coachingTip:
            "Imagine you are writing a letter to a friend about something you are genuinely excited about. Use that voice, then edit for a professional audience.",
          styleContext:
            "Expressive communicators have a low tolerance for corporate language. Every cliche is a signal that the writer does not share their values.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (91-93)
  // ============================================

  // Scenario 91 - Tom Brennan, email, foundation
  {
    id: "scenario-91",
    title: "The Gentle Introduction",
    context:
      "Tom is writing an email to introduce a new team member to the wider department. He wants the email to feel warm and welcoming rather than a standard HR announcement.",
    chooseContext:
      "Tom has received your draft and feels it is too formal. He wants the email to make the new starter feel like they are joining a family, not a corporation.",
    rewriteContext:
      "Tom has asked you to rewrite the welcome email so it feels personal and reassuring, making the new joiner feel comfortable and valued from day one.",
    characterId: "tom-brennan",
    dialogue:
      "I want this email to make Sarah feel like she is already part of the team before she even walks through the door. Can we mention something about her background that shows we actually took time to get to know her? I do not want it to sound like a template.",
    chooseDialogue:
      "Your draft is fine factually, but it could be about anyone. I want Sarah to read it and feel like we are genuinely glad she is joining us, not just filling a vacancy.",
    rewriteDialogue:
      "Can you rewrite it so it sounds like it is coming from a real person, not a process? I want her to feel the warmth of the team before she arrives.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom wants the welcome email to make the new starter feel like 'part of the family' and show that the team 'took time to get to know her'. Which communication style is he showing?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom is prioritising belonging, warmth, and personal connection. His focus is entirely on how the new joiner will feel, which is the hallmark of a supportive communicator.",
          observation:
            "Notice how Tom rejects templates and formal language in favour of personalisation and genuine care. He measures the quality of communication by its emotional impact on the individual.",
          coachingTip:
            "When someone asks 'will this make them feel welcome?' rather than 'does this cover all the information?', they are operating in a supportive style.",
          styleContext:
            "Supportive communicators believe that how you welcome someone sets the tone for their entire experience. First impressions are personal, not procedural.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Expressive communicators also value warmth, but they would focus more on celebration and excitement than on comfort and belonging.",
          observation:
            "Tom is not asking for a fanfare or a grand introduction. He wants something quiet, genuine, and reassuring. That gentleness is distinctly supportive.",
          coachingTip:
            "Expressive communicators would say 'let us make a big deal of this.' Supportive communicators say 'let us make her feel safe.' The energy level is different.",
          styleContext:
            "Both styles are people-oriented, but supportive communicators seek comfort and inclusion while expressive communicators seek excitement and recognition.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not concerned about efficiency, data, or process. His entire focus is on the human experience of joining a new team.",
          observation:
            "A direct or analytical communicator would send a factual announcement with a start date and role description. Tom finds that approach inadequate.",
          coachingTip:
            "If the person's main concern is 'how will this make someone feel?', you are almost certainly dealing with a supportive or expressive communicator.",
          styleContext:
            "Supportive communicators prioritise emotional safety in every interaction, including written ones. They believe good communication creates belonging.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom feels your draft is too formal and could be about anyone. He wants Sarah to feel genuinely welcomed. Which revision do you suggest?",
      options: [
        {
          id: "s91-opt-a",
          text: "Hi everyone, I am really pleased to let you know that Sarah Mitchell will be joining our team on 7 April. Sarah comes to us from a community engagement background and has a real passion for bringing people together, something you will notice straight away when you meet her. She mentioned during her interview that she loves a good team lunch, so perhaps we can organise one for her first week. Please do reach out and say hello before she starts. It means more than you might think.",
          score: 10,
          result: "strong",
          explanation:
            "This feels personal, warm, and specific to Sarah. The mention of her interview comment and the suggestion of a team lunch show genuine care. This is exactly the supportive tone Tom wants.",
        },
        {
          id: "s91-opt-b",
          text: "Team, Sarah Mitchell joins on 7 April as our new Community Engagement Lead. She has five years of experience in stakeholder management. Please make her feel welcome.",
          score: 5,
          result: "partial",
          explanation:
            "This is factually correct but emotionally flat. The instruction to 'make her feel welcome' is generic and does not create the warmth Tom is after.",
        },
        {
          id: "s91-opt-c",
          text: "Please note that Sarah Mitchell will be starting in the Community Engagement Lead role on 7 April. Her onboarding schedule is attached. Line managers should ensure all system access is provisioned by her start date.",
          score: 0,
          result: "weak",
          explanation:
            "This is a process email, not a welcome email. It treats Sarah's arrival as an administrative event rather than a human one. Tom would be disappointed.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants the welcome email to sound like it is coming from a real person and make Sarah feel the warmth of the team. Rewrite it in a supportive style: be personal, reassuring, and genuine.",
      targetTraits: ["personal", "warm", "reassuring", "inclusive"],
      exampleStrongResponse:
        "Hi everyone, I wanted to share some lovely news. Sarah Mitchell is joining our team on 7 April, and honestly, we are lucky to have her. Sarah has spent the last five years working in community engagement, and what stood out to all of us during the interview process was how naturally she connects with people. She told us she is a little nervous about starting somewhere new (who is not?), so I know she would really appreciate a friendly face or a quick hello before her first day. Let us make sure she feels at home from the moment she arrives.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is warm, personal, and reassuring. It acknowledges Sarah's nerves, humanises the transition, and gently encourages the team to reach out. That is supportive communication at its best.",
          observation:
            "The parenthetical 'who is not?' normalises the new starter's anxiety and makes the whole team feel included in the act of welcoming her.",
          coachingTip:
            "Supportive communicators value vulnerability and honesty. Mentioning that someone is nervous, and treating it as completely normal, builds trust.",
          styleContext:
            "Supportive communicators create belonging through small, genuine gestures. A well-written welcome email can shape someone's experience of a new job more than any onboarding document.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has warmth but may lack the personal detail or emotional honesty that makes a supportive welcome email feel genuinely caring.",
          observation:
            "If your email could apply to any new joiner without changing a word, it is not personal enough for Tom's standards.",
          coachingTip:
            "Include one specific detail about Sarah that shows you listened and cared. That specificity is what turns a generic welcome into a meaningful one.",
          styleContext:
            "Supportive communicators notice when communication is templated. They value the effort of personalisation because it signals genuine care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too formal, too process-driven, or too impersonal. Tom wanted warmth and humanity, and this reads like a standard notification.",
          observation:
            "If your email focuses on system access, onboarding schedules, or reporting lines, it has missed the brief entirely.",
          coachingTip:
            "Before sending, ask yourself: would this email make a nervous new starter feel excited or anxious? If anxious, rewrite with more warmth.",
          styleContext:
            "Supportive communicators judge written communication by a simple test: does this make someone feel cared for? If not, it needs more heart.",
        },
      },
    },
  },

  // Scenario 92 - Leah Morgan, sales, intermediate
  {
    id: "scenario-92",
    title: "The Consultative Close",
    context:
      "You are in a sales meeting with Leah, an operations manager who is considering a new workflow platform for her team. She is cautious and wants to make sure the transition will not disrupt her team's morale or productivity.",
    chooseContext:
      "Leah is close to a decision but is worried about how her team will react to yet another system change. She has asked how other organisations have managed the people side of the transition.",
    rewriteContext:
      "Leah wants you to send a reassuring email to her team explaining the new platform and why it will make their working lives easier, not harder.",
    characterId: "leah-morgan",
    dialogue:
      "I can see the benefits on paper, but my team has been through two system changes in the last eighteen months and they are tired. I need to know this will not be another disruption that leaves people feeling overwhelmed.",
    chooseDialogue:
      "What I really need to hear is how other teams have handled this. Not the ROI story, but the people story. Did staff actually feel supported during the switch?",
    rewriteDialogue:
      "Before I sign anything, I need an email I can send to my team that makes them feel heard and reassured. If they read it and feel anxious, I am not going ahead.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is focused on team morale, staff feelings, and whether people felt supported during previous transitions. Which communication style does this indicate?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's primary concern is the wellbeing of her team. She is not asking about features, pricing, or timelines; she is asking about people. That is classic supportive communication.",
          observation:
            "Notice that Leah explicitly distinguishes between the 'ROI story' and the 'people story'. She is telling you exactly what matters to her.",
          coachingTip:
            "When a buyer says 'my team is tired' or 'I do not want to overwhelm people', they are signalling a supportive style. Lead with empathy, not efficiency.",
          styleContext:
            "Supportive buyers make purchasing decisions based on team impact. If they believe the change will harm morale, no amount of ROI data will persuade them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Expressive communicators also care about people, but they would focus on excitement and inspiration rather than protection and reassurance.",
          observation:
            "Leah is not asking how to energise her team about the change. She is asking how to protect them from feeling overwhelmed. That protective instinct is supportive.",
          coachingTip:
            "Expressive buyers say 'how do I get my team excited?' Supportive buyers say 'how do I keep my team safe?' The desired outcome reveals the style.",
          styleContext:
            "Supportive communicators are gatekeepers for their team's wellbeing. Earning their trust requires showing genuine care for the people affected.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has explicitly deprioritised ROI and technical features. Her decision will be made on people grounds, not commercial ones.",
          observation:
            "A direct buyer would ask 'what is the payback period?' An analytical buyer would ask 'what is the implementation methodology?' Leah asks 'will my team be okay?'",
          coachingTip:
            "Identify what the buyer is protecting. If they are protecting revenue, think direct. If they are protecting people, think supportive.",
          styleContext:
            "Supportive communicators will delay or decline a purchase if they believe it will cause harm to their team, even if the business case is strong.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants the 'people story' of how other teams managed the transition. She cares about staff feelings, not ROI. How do you respond?",
      options: [
        {
          id: "s92-opt-a",
          text: "I completely understand, Leah. One of our clients, a team of about twenty in a similar operations role, had the same concern. Their manager told us that the key was involving the team early, letting them trial the system before go-live, and giving everyone a named support contact they could reach out to with questions. After six weeks, the feedback was overwhelmingly positive. Staff said they felt listened to throughout the process, which made all the difference.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Leah's people-first approach perfectly. You told a human story, focused on how staff felt, and emphasised the support structures that made the transition safe. This will build her confidence.",
        },
        {
          id: "s92-opt-b",
          text: "Our implementation data shows a 94% adoption rate within 30 days and a 22% productivity improvement in the first quarter. The system is very intuitive, so most teams pick it up quickly with minimal training.",
          score: 5,
          result: "partial",
          explanation:
            "These are impressive numbers, but Leah did not ask for metrics. She asked for the people story. Leading with data misses her emotional register.",
        },
        {
          id: "s92-opt-c",
          text: "Change is always hard, but your team will adapt. The platform is significantly better than what you are currently using, and once they see the efficiency gains, any initial resistance will disappear. I would recommend just going for it.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing Leah's concerns about her team and telling her to 'just go for it' is the worst approach for a supportive communicator. She will lose trust in you immediately.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah needs an email for her team explaining the new platform in a way that feels reassuring, not anxiety-inducing. Write it in a supportive style: be empathetic, honest, and people-focused.",
      targetTraits: ["empathetic", "reassuring", "honest", "people-focused"],
      exampleStrongResponse:
        "Hi team, I wanted to share something with you early because your input matters. We are exploring a new workflow platform, and before any decisions are made, I want you to know what is being considered and why. The goal is simple: to make your day-to-day work smoother, not to add another layer of complexity. I know the last couple of system changes were tough, and I have heard your feedback on that. This time, we are going to do things differently. You will get hands-on time with the platform before anything goes live, and there will be a dedicated support contact for every question, no matter how small. I am not going ahead with anything that does not feel right for this team. Your thoughts and concerns are welcome and wanted.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is excellent. You acknowledged past difficulties, invited feedback, and reassured the team that their feelings will shape the decision. That is exactly how a supportive leader communicates change.",
          observation:
            "The phrase 'I am not going ahead with anything that does not feel right for this team' is powerful. It gives the team a sense of control and safety.",
          coachingTip:
            "When writing change communications for supportive stakeholders, always acknowledge what happened before and explain what will be different this time.",
          styleContext:
            "Supportive communicators manage change by building consensus and trust. An email that invites questions and validates concerns is far more effective than one that announces a decision.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right direction but may be missing the emotional acknowledgement or the explicit invitation for feedback that supportive teams need.",
          observation:
            "If your email announces the change without asking for input, it will feel top-down rather than collaborative, even if the tone is warm.",
          coachingTip:
            "Add a clear, open-ended invitation for feedback. Something like 'I want to hear your thoughts' makes a significant difference to a supportive audience.",
          styleContext:
            "Supportive communicators feel respected when they are consulted, not just informed. The act of asking matters as much as the answer.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too directive, too focused on efficiency gains, or fails to acknowledge the team's past experiences. Leah said if it makes people anxious, she will not proceed.",
          observation:
            "If your email leads with 'exciting news' or 'great opportunity', it may feel tone-deaf to a team that has been through difficult changes recently.",
          coachingTip:
            "Read your email from the perspective of someone who is exhausted by change. Does it make them feel safe or pressured? Adjust accordingly.",
          styleContext:
            "Supportive audiences need to feel that the communicator understands their experience. Without that empathy, even positive changes feel threatening.",
        },
      },
    },
  },

  // Scenario 93 - David Chen, feedback, advanced
  {
    id: "scenario-93",
    title: "The Difficult Conversation",
    context:
      "You need to give David, a long-serving team lead, feedback about a pattern of avoiding difficult conversations with underperforming team members. David is well-liked and deeply committed to his team's wellbeing.",
    chooseContext:
      "David has acknowledged the pattern but is visibly uncomfortable. He has explained that he worries about damaging relationships with team members he cares about.",
    rewriteContext:
      "David has asked you to help him script an opening line for a performance conversation with one of his team members, something that is honest but does not feel like an attack.",
    characterId: "david-chen",
    dialogue:
      "I know I should be having those conversations, but every time I think about it, I picture their face and I just cannot bring myself to say something that might hurt them. These are good people. I do not want them to think I have given up on them.",
    chooseDialogue:
      "What if I say something wrong and it damages the trust we have built? I have worked with some of these people for years. I would rather carry the extra workload myself than risk that relationship.",
    rewriteDialogue:
      "Can you help me find the right words? I need an opening line that shows I still believe in them but also that something needs to change. I do not want it to sound like a warning, I want it to sound like I care enough to be honest.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "David avoids difficult conversations because he does not want to hurt people or damage trust. He would rather carry extra workload than risk a relationship. Which communication style is this?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David's avoidance of conflict stems from a deep commitment to relationships and a fear of causing emotional harm. This people-protective instinct is the core of the supportive style.",
          observation:
            "Notice how David frames feedback as a potential threat to the relationship rather than a tool for improvement. He sees people first, performance second.",
          coachingTip:
            "When someone avoids feedback because they fear hurting people, not because they lack courage, you are dealing with a supportive communicator.",
          styleContext:
            "Supportive communicators often struggle with performance conversations because they perceive directness as unkindness. Helping them see that honest feedback is an act of care is the key to unlocking this.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Expressive communicators also value relationships, but they are generally more comfortable with direct emotional expression and less likely to avoid conflict entirely.",
          observation:
            "David is not avoiding the conversation because he lacks confidence. He is avoiding it because he genuinely fears causing pain. That depth of empathy is distinctly supportive.",
          coachingTip:
            "Expressive communicators might delay a difficult conversation because they dislike negativity. Supportive communicators delay because they cannot bear causing hurt.",
          styleContext:
            "The distinction matters for coaching. Expressive people need help channelling their energy into tough conversations. Supportive people need help believing that honest feedback is a form of kindness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not avoiding the conversation due to a preference for efficiency or data. His barrier is entirely emotional and relationship-based.",
          observation:
            "A direct communicator would not hesitate to give this feedback. An analytical one would approach it methodically. David's hesitation is rooted in empathy, not process.",
          coachingTip:
            "Ask yourself: what is the person afraid of? If it is wasted time, think direct. If it is inaccuracy, think analytical. If it is hurting someone, think supportive.",
          styleContext:
            "Supportive communicators see every interaction through the lens of relationship impact. Understanding this helps you coach them more effectively.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David is worried that giving honest feedback will damage trust with team members he cares about deeply. How do you coach him?",
      options: [
        {
          id: "s93-opt-a",
          text: "David, the fact that you care this much is exactly why you are the right person to have this conversation. Think about it this way: if someone on your team is struggling and you do not say anything, they miss the chance to improve, and that is not protecting them, that is leaving them stuck. The most caring thing you can do is be honest with them, because it shows you believe they are capable of more. You are not giving up on them by having this conversation. You are investing in them.",
          score: 10,
          result: "strong",
          explanation:
            "This reframes honest feedback as an act of care, which aligns perfectly with David's values. You have validated his empathy and shown him that silence is more harmful than honesty. A supportive communicator needs this bridge.",
        },
        {
          id: "s93-opt-b",
          text: "I understand your concern, but you need to separate your personal feelings from your professional responsibilities. Performance management is part of your role, and avoiding it creates bigger problems down the line. Let us set up a structured process so you feel more confident.",
          score: 5,
          result: "partial",
          explanation:
            "This is pragmatically correct but emotionally dismissive. Telling David to 'separate personal feelings from professional responsibilities' contradicts his core values. A supportive communicator cannot simply switch off their empathy.",
        },
        {
          id: "s93-opt-c",
          text: "Honestly, David, this is a fundamental part of leadership. If you cannot give direct feedback, you are not doing the job. The team deserves a manager who will hold them to standard, even when it is uncomfortable. You need to step up.",
          score: 0,
          result: "weak",
          explanation:
            "This is brutally direct and will make David shut down. Telling a supportive communicator to 'step up' ignores the emotional complexity of their experience and damages your relationship with them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David needs an opening line for a performance conversation that is honest but caring. He wants it to show he believes in the person while being clear that something needs to change. Write it in a supportive style.",
      targetTraits: ["caring", "honest", "belief-in-person", "non-threatening"],
      exampleStrongResponse:
        "I wanted to have this conversation with you because I genuinely value you as part of this team, and I believe you are capable of more than what we have been seeing recently. I have noticed some things I would like us to talk through together, not because I am disappointed, but because I think we can find a way to get you back on track. I am here to support you, and I want us to figure this out as a team.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is beautifully balanced. It opens with genuine affirmation, addresses the performance issue honestly, and frames the conversation as collaborative rather than punitive. David would feel confident delivering this.",
          observation:
            "The phrase 'not because I am disappointed, but because I think we can find a way' removes the fear of judgement and replaces it with partnership. That is exactly the reframe David needs.",
          coachingTip:
            "When helping supportive communicators script difficult conversations, always include an explicit statement of belief in the person. It gives them the confidence to be honest.",
          styleContext:
            "Supportive communicators can deliver tough messages effectively when the message is wrapped in genuine care and collaborative intent. The structure is: affirm, address, support.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your opening has the right intent but may be too vague about the issue or too focused on the positive at the expense of clarity. David needs to name the problem, not just hint at it.",
          observation:
            "If your opening is all warmth and no substance, the team member will not understand what needs to change. Balance care with honesty.",
          coachingTip:
            "Supportive does not mean soft. The goal is to be kind and clear at the same time. Include a specific observation alongside the affirmation.",
          styleContext:
            "The best supportive feedback is both warm and precise. If the person leaves the conversation feeling cared for but confused about what to change, it has not worked.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening is either too blunt, too corporate, or too vague. David specifically asked for something that shows care while being honest. Missing either element fails the brief.",
          observation:
            "If your opening sounds like it came from a disciplinary procedure or a management textbook, it is not in David's voice.",
          coachingTip:
            "Write the opening as if you are talking to a friend you respect. Use natural language, not HR terminology. David needs words he would actually say.",
          styleContext:
            "Supportive communicators need scripts that feel authentic to who they are. If the words feel forced or borrowed, they will not use them.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (94-96)
  // ============================================

  // Scenario 94 - Rachel Finch, feedback, foundation
  {
    id: "scenario-94",
    title: "The Structured Review",
    context:
      "You are conducting a performance review with Rachel, a senior analyst who has prepared her own data pack ahead of the meeting. She wants to discuss her results against the agreed KPIs.",
    chooseContext:
      "Rachel has challenged one of your ratings, arguing that the scoring methodology was inconsistent with last quarter's approach. She wants you to explain the discrepancy.",
    rewriteContext:
      "Rachel has asked you to provide her review summary in writing, with specific reference to data points and clear criteria for each rating.",
    characterId: "rachel-finch",
    dialogue:
      "I have prepared a comparison of my performance against each of the seven KPIs we agreed at the start of the quarter. I have also benchmarked my results against the team average. Can we go through them one by one so I can understand exactly where I stand?",
    chooseDialogue:
      "Last quarter, my accuracy score of 97.2% was rated 'exceeds expectations'. This quarter, the same score has been rated 'meets expectations'. Can you explain what changed in the methodology?",
    rewriteDialogue:
      "I would appreciate the summary in writing so I can cross-reference it with my own data. Please include the specific KPI scores, the rating criteria, and any weighting changes from last quarter.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has prepared her own data pack, wants to review each KPI individually, and has benchmarked herself against team averages. Which communication style is she demonstrating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's preparation, methodical approach, and focus on benchmarking are textbook analytical behaviour. She values data, consistency, and rigour above all else.",
          observation:
            "Notice how she asks to go through each KPI 'one by one'. Analytical communicators prefer systematic, sequential discussion rather than high-level summaries.",
          coachingTip:
            "When someone arrives at a review with their own data pack, they are signalling that they value evidence over opinion. Match their preparation with your own.",
          styleContext:
            "Analytical communicators treat performance reviews as data validation exercises. They want to verify, not just listen.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Direct communicators also focus on results, but they would want the headline rating and the action plan, not a line-by-line walk-through of each KPI.",
          observation:
            "Rachel is not in a hurry. She wants thorough analysis, not a quick verdict. The methodical approach distinguishes her from a direct style.",
          coachingTip:
            "Direct communicators ask 'what is my rating?' Analytical communicators ask 'how did you calculate my rating?' The question reveals the style.",
          styleContext:
            "Both styles are task-focused, but analytical communicators prioritise accuracy and methodology while direct communicators prioritise speed and outcomes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on relationships, feelings, or team dynamics. Her entire approach is data-driven and process-oriented.",
          observation:
            "Rachel has not asked how you feel about her performance or whether the team appreciates her work. She wants numbers and methodology.",
          coachingTip:
            "If someone brings a spreadsheet to their own review, they are analytical. If they bring enthusiasm, they are expressive. If they bring questions about the team, they are supportive.",
          styleContext:
            "Analytical communicators find comfort in data because it removes subjectivity. In their view, a good review is one where every rating can be justified with evidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has pointed out that the same accuracy score received different ratings in consecutive quarters. She wants to understand the methodology change. How do you respond?",
      options: [
        {
          id: "s94-opt-a",
          text: "Good catch, Rachel. You are right that the threshold shifted. This quarter, we recalibrated the 'exceeds expectations' boundary from 96.5% to 97.5% based on an uplift in the team-wide accuracy baseline. The average moved from 93.1% to 95.4%, which meant the relative performance bands needed adjusting. I should have communicated that change at the start of the quarter, and I will make sure any future methodology updates are shared in advance.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Rachel's observation, explains the methodology with specific numbers, and acknowledges the communication gap. Analytical communicators respect transparency and precision, and you have delivered both.",
        },
        {
          id: "s94-opt-b",
          text: "The ratings are calibrated each quarter to reflect changes in team performance. Your score is still very strong, and I would not worry about the specific label. What matters is that you are consistently one of our top performers.",
          score: 5,
          result: "partial",
          explanation:
            "This dismisses Rachel's legitimate question about methodology. Telling an analytical person 'do not worry about the label' is like telling a direct person 'let us slow down'. It contradicts their core need.",
        },
        {
          id: "s94-opt-c",
          text: "Honestly, I think you are overthinking this, Rachel. The difference between 'meets' and 'exceeds' is not that significant in the grand scheme of things. Let us focus on your development goals for next quarter instead.",
          score: 0,
          result: "weak",
          explanation:
            "Calling an analytical person's methodological question 'overthinking' is dismissive and will damage trust. Rachel values precision, and you have just told her that precision does not matter.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants her review summary in writing with specific KPI scores, rating criteria, and any weighting changes. Write it in an analytical style: be precise, evidence-based, and methodical.",
      targetTraits: ["precise", "evidence-based", "methodical", "transparent"],
      exampleStrongResponse:
        "Performance Review Summary, Q4 2025\n\nOverall Rating: Meets Expectations (3.4/5.0)\n\nKPI Breakdown:\n1. Accuracy: 97.2% (target 95.0%, team avg 95.4%). Rating: Meets. Note: 'Exceeds' threshold was recalibrated from 96.5% to 97.5% this quarter due to team baseline uplift.\n2. Timeliness: 98.1% (target 95.0%, team avg 94.8%). Rating: Exceeds.\n3. Stakeholder Satisfaction: 4.2/5.0 (target 4.0, team avg 3.9). Rating: Meets.\n\nMethodology: Ratings are calculated using a weighted average with accuracy at 40%, timeliness at 35%, and stakeholder satisfaction at 25%. No weighting changes from Q3.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. This summary is structured, precise, and fully transparent about methodology. Rachel can cross-reference every number with her own data, which is exactly what she will do.",
          observation:
            "You included the recalibration note on the accuracy threshold, which addresses her earlier question proactively. Analytical communicators respect that kind of rigour.",
          coachingTip:
            "When writing for analytical communicators, include your methodology and any changes to it. They will notice inconsistencies, so it is better to explain them upfront.",
          styleContext:
            "Analytical communicators keep records. Your written summary will be compared against previous ones, so consistency and transparency are essential.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary has the right structure but may be missing specific numbers, methodology detail, or the explanation of changes Rachel requested.",
          observation:
            "If your summary uses phrases like 'strong performance' or 'broadly positive' without attaching numbers, it will feel incomplete to Rachel.",
          coachingTip:
            "Every claim in an analytical review should be backed by a data point. Replace adjectives with numbers wherever possible.",
          styleContext:
            "Analytical communicators do not trust qualitative assessments unless they are supported by quantitative evidence. Show your working.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is too narrative, too vague, or lacks the structured format Rachel explicitly requested. She asked for KPI scores, criteria, and weighting, and all three must be present.",
          observation:
            "If your summary reads like a paragraph of prose rather than a structured data summary, it does not match Rachel's style or her request.",
          coachingTip:
            "Use headings, numbered lists, and explicit data points. Analytical communicators process information more efficiently when it is structured.",
          styleContext:
            "Analytical communicators evaluate written feedback by its precision and structure. An unstructured summary, regardless of how positive the content, will feel careless to them.",
        },
      },
    },
  },

  // Scenario 95 - Owen Grant, email, intermediate
  {
    id: "scenario-95",
    title: "The Process Proposal",
    context:
      "Owen has emailed you with a detailed proposal for restructuring the team's quality assurance process. The email includes data tables, a risk assessment, and a phased implementation plan.",
    chooseContext:
      "You have responded positively but without enough detail. Owen has replied asking for specific feedback on each phase of his proposal, with supporting rationale for any suggested changes.",
    rewriteContext:
      "Owen wants you to draft a joint email to the department head summarising the proposed QA changes, including the evidence base, projected impact, and implementation timeline.",
    characterId: "owen-grant",
    dialogue:
      "I have attached the full proposal with appendices. Section 3 covers the cost-benefit analysis and Section 5 has the risk register. I would appreciate your feedback on each section separately, with reference to the specific data points where possible.",
    chooseDialogue:
      "Your response said the proposal 'looks good overall'. I need more than that. Can you confirm which elements you agree with, which you would modify, and what evidence supports your recommended changes?",
    rewriteDialogue:
      "The department head will want to see the evidence base, the projected defect reduction, and the timeline. Draft it as a structured business case, not a narrative. I will review it for accuracy before we send.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has submitted a proposal with appendices, cost-benefit analysis, and a risk register, and he wants section-by-section feedback referencing specific data points. Which style is this?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's thoroughness, his use of structured documentation, and his insistence on data-referenced feedback are hallmarks of analytical communication.",
          observation:
            "The request for 'feedback on each section separately' shows a sequential, methodical thinking style. Owen processes information systematically and expects others to do the same.",
          coachingTip:
            "When someone references specific sections and appendices in their email, match their level of detail in your response. Vague praise will frustrate them.",
          styleContext:
            "Analytical communicators invest significant time in preparation because they believe thorough analysis leads to better decisions. Dismissing that effort with a brief response feels disrespectful.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Direct communicators also value clear proposals, but they would send a one-page summary, not a multi-section document with appendices and a risk register.",
          observation:
            "The volume and structure of Owen's proposal distinguishes him from a direct communicator. He values completeness over brevity.",
          coachingTip:
            "Direct communicators write short proposals and expect short responses. Analytical communicators write detailed proposals and expect equally detailed responses.",
          styleContext:
            "Both styles are task-focused, but they differ in their relationship with detail. Direct communicators strip detail out. Analytical communicators build detail in.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen's communication is entirely process-driven and evidence-based. There is no focus on relationships, feelings, or creative vision.",
          observation:
            "Owen has not asked for your opinion or your gut feeling. He wants structured, evidence-based feedback. Every request is specific and measurable.",
          coachingTip:
            "Look at the format of the communication. Appendices, risk registers, and section numbers signal analytical thinking. Conversational language signals expressive or supportive.",
          styleContext:
            "Analytical communicators express care through thoroughness. A detailed proposal is their way of showing respect for the decision-making process.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen found your 'looks good overall' response insufficient and wants specific feedback on each element with supporting evidence. How do you reply?",
      options: [
        {
          id: "s95-opt-a",
          text: "You are right, Owen, my response lacked the detail your proposal deserves. Here is my section-by-section feedback:\n\nSection 2 (Process Map): Agreed as drafted. The three-stage gate review aligns with our ISO 9001 requirements.\nSection 3 (Cost-Benefit): The projected 18% defect reduction is credible based on the benchmark data you cited. However, the implementation cost estimate of 12,000 pounds does not appear to include backfill for the two team members who will lead the pilot. I estimate an additional 4,500 pounds.\nSection 5 (Risk Register): I would add a risk around stakeholder fatigue given the recent restructure. Likelihood: medium. Impact: high. Mitigation: staggered rollout with check-ins at each phase gate.\n\nHappy to discuss any of these points in detail.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Owen's analytical style perfectly. You have engaged with specific sections, cited data, identified a gap with a costed correction, and added a risk with a proper assessment. This is the level of rigour he expects.",
        },
        {
          id: "s95-opt-b",
          text: "Thanks Owen. I think the proposal is strong. The cost-benefit section could use a bit more detail on implementation costs, and I would suggest adding a risk around change fatigue. Let me know if you want to discuss.",
          score: 5,
          result: "partial",
          explanation:
            "This identifies the right issues but lacks the specificity Owen demands. 'A bit more detail' and 'a risk around change fatigue' are directional but not actionable for an analytical communicator.",
        },
        {
          id: "s95-opt-c",
          text: "I have had a look and I think it is great. You have clearly put a lot of work into it. Let us schedule a call to talk through any tweaks. I am sure we can have it finalised by end of week.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the kind of vague, relationship-oriented response that frustrated Owen the first time. He does not want a call to 'talk through tweaks'. He wants written, specific, evidence-based feedback.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a joint email to the department head presenting the QA proposal as a structured business case with evidence base, projected impact, and timeline. Write it in an analytical style.",
      targetTraits: ["structured", "evidence-based", "precise", "methodology-transparent"],
      exampleStrongResponse:
        "Subject: QA Process Restructure, Business Case and Implementation Plan\n\nDear Sarah,\n\nPlease find below the business case for the proposed QA process restructure.\n\nObjective: Reduce product defect rate from 4.2% to 3.4% within six months through a three-stage gate review process.\n\nEvidence Base: Benchmarking against three comparable organisations showed an average defect reduction of 18% following similar process changes (see Appendix A). Our internal pilot in Q3 2025 achieved a 15% reduction over eight weeks.\n\nProjected Impact: Estimated annual saving of 34,000 pounds in rework costs, based on current defect remediation rates of 820 pounds per incident.\n\nImplementation Timeline:\n- Phase 1 (Weeks 1 to 4): Process design and team training\n- Phase 2 (Weeks 5 to 10): Pilot with two product lines\n- Phase 3 (Weeks 11 to 16): Full rollout with fortnightly review checkpoints\n\nTotal Implementation Cost: 16,500 pounds (including 4,500 pounds backfill provision).\n\nWe are happy to present the full proposal and appendices at your convenience.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. This is a well-structured business case with clear sections, specific data, and a transparent methodology. Owen would be confident sending this to the department head.",
          observation:
            "You included projected savings, benchmarking data, and a phased timeline with specific week ranges. Every claim is backed by evidence, which is exactly what analytical stakeholders expect.",
          coachingTip:
            "When writing business cases for analytical audiences, structure the email like a report: objective, evidence, impact, timeline, cost. This framework works consistently.",
          styleContext:
            "Analytical communicators judge emails by their information density and logical structure. If every paragraph advances the argument with evidence, the email will land well.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email has the right shape but may be missing specific numbers, a clear evidence base, or the structured format that analytical readers expect.",
          observation:
            "If your email uses phrases like 'significant improvement' or 'considerable savings' without attaching numbers, it will feel unfinished to Owen.",
          coachingTip:
            "Replace every qualitative claim with a quantitative one. 'Significant reduction' becomes '18% reduction'. 'Cost-effective' becomes '34,000 pounds annual saving.'",
          styleContext:
            "Analytical communicators do not trust arguments built on adjectives. They trust arguments built on data. Show the numbers and let them draw the conclusions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too narrative, too vague, or lacks the structured business case format Owen specified. He will not send an unstructured email to the department head.",
          observation:
            "If your email reads like a persuasive pitch rather than an evidence-based proposal, it is misaligned with the analytical style.",
          coachingTip:
            "Use headings, bullet points, and explicit data. Owen asked for a structured business case, not a narrative. Match the format to the request.",
          styleContext:
            "Analytical communicators believe that well-structured evidence speaks for itself. Over-selling or under-evidencing will undermine your credibility with them.",
        },
      },
    },
  },

  // Scenario 96 - Fiona Banks, sales, advanced
  {
    id: "scenario-96",
    title: "The Evidence-Based Pitch",
    context:
      "You are pitching a data analytics platform to Fiona, a finance director who has requested a detailed technical evaluation before making any purchasing decision. She has sent you a 14-point evaluation criteria spreadsheet in advance.",
    chooseContext:
      "Fiona has reviewed your initial response and has follow-up questions about data accuracy tolerances, integration architecture, and your methodology for calculating projected ROI.",
    rewriteContext:
      "Fiona wants you to send a formal evaluation response that maps your platform's capabilities against each of her 14 criteria, with evidence for every claim.",
    characterId: "fiona-banks",
    dialogue:
      "I have shared the evaluation criteria with you. Each criterion has a weighting, and I expect your response to address all fourteen points with evidence, not opinions. If you cannot meet a criterion, say so explicitly. I have no patience for vague assurances.",
    chooseDialogue:
      "Your ROI projection claims a 22% efficiency gain. What is the methodology behind that number? I need to see the calculation, the assumptions, and at least two comparable case studies with verified outcomes.",
    rewriteDialogue:
      "Map your response to my evaluation spreadsheet. One row per criterion, with columns for capability statement, evidence source, and compliance status. I will score it independently before our next meeting.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has sent a 14-point weighted evaluation spreadsheet and insists on evidence-based responses with no vague assurances. Which communication style is she displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's structured evaluation framework, weighted criteria, and demand for evidence over opinion are hallmarks of analytical communication. She is buying with data, not instinct.",
          observation:
            "The explicit instruction to 'say so' if you cannot meet a criterion reveals her value of honesty and precision. She would rather hear 'no' than a hedge.",
          coachingTip:
            "When a buyer sends you an evaluation spreadsheet before the first meeting, you are dealing with an analytical communicator. Treat every cell as a test.",
          styleContext:
            "Analytical buyers make decisions through systematic comparison. Your job is not to persuade them emotionally but to provide the evidence they need to persuade themselves.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Direct communicators also dislike vague assurances, but they would not create a 14-point weighted evaluation framework. They would ask three questions and decide.",
          observation:
            "The thoroughness of Fiona's process distinguishes her from direct buyers. She invests time upfront to reduce risk, whereas direct buyers optimise for speed.",
          coachingTip:
            "Direct buyers say 'give me the headline'. Analytical buyers say 'give me the evidence'. The depth of their questions reveals their style.",
          styleContext:
            "Both styles reject waffle, but for different reasons. Direct communicators find it slow. Analytical communicators find it unsubstantiated.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not interested in relationship-building, creative vision, or team consensus. Her process is entirely evidence-driven and systematic.",
          observation:
            "Fiona has not asked about your company culture, your team, or your values. She has asked for data, methodology, and proof. Every question is technical.",
          coachingTip:
            "When a buyer's communication contains weighted criteria, evaluation spreadsheets, and requests for methodology, the style is unambiguously analytical.",
          styleContext:
            "Analytical buyers are the hardest to win over with charm and the easiest to win over with evidence. Give them what they ask for, precisely as they ask for it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona wants the methodology behind your 22% ROI claim, including the calculation, assumptions, and two verified case studies. How do you respond?",
      options: [
        {
          id: "s96-opt-a",
          text: "The 22% figure is derived from a time-motion analysis across three client implementations. The calculation is: average hours spent on manual data reconciliation (14.2 hours/week) multiplied by the platform's automated processing rate (89.3%), minus the residual manual effort (1.52 hours/week). This gives a net saving of 12.68 hours per analyst per week, which translates to 22.1% of total productive capacity.\n\nCase Study 1: Meridian Financial Services. Pre-implementation manual processing: 16.4 hours/week. Post-implementation: 2.1 hours/week. Verified saving: 87.2%. Independent audit by Deloitte, March 2025.\n\nCase Study 2: Northern Grid Utilities. Pre-implementation: 11.8 hours/week. Post-implementation: 1.3 hours/week. Verified saving: 89.0%. Client reference available on request.\n\nFull methodology document attached as Appendix B.",
          score: 10,
          result: "strong",
          explanation:
            "This is exactly what Fiona asked for: a transparent calculation with stated assumptions and two verified case studies. The level of precision matches her analytical style perfectly.",
        },
        {
          id: "s96-opt-b",
          text: "The 22% figure is based on results we have seen across multiple clients. On average, our platform reduces manual processing time significantly. I can share some general case study summaries if that would help.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague. 'Multiple clients', 'significantly', and 'general summaries' are exactly the kind of unsubstantiated language Fiona warned you about. She wants specific, verified data.",
        },
        {
          id: "s96-opt-c",
          text: "I appreciate the rigour, Fiona, but sometimes you have to trust the expertise. We have been in this market for twelve years and our clients consistently tell us the platform pays for itself within six months. I am confident you will see similar results.",
          score: 0,
          result: "weak",
          explanation:
            "Asking an analytical buyer to 'trust the expertise' instead of showing the evidence is the fastest way to lose the sale. Fiona explicitly said she has no patience for vague assurances, and that is exactly what this is.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a formal evaluation response mapping your platform against her 14 criteria, with evidence for every claim. Write the opening section and first three criteria responses in an analytical style: be structured, precise, and evidence-based.",
      targetTraits: ["structured", "evidence-based", "precise", "honest-about-gaps"],
      exampleStrongResponse:
        "Subject: Evaluation Response, DataFlow Analytics Platform v4.2\n\nDear Fiona,\n\nPlease find below our formal response to your 14-point evaluation criteria. Each criterion is addressed with a capability statement, evidence source, and compliance status.\n\nCriterion 1: Data Accuracy Tolerance (Weighting: 15%)\nCapability: Platform delivers 99.7% data accuracy on structured datasets, validated against source systems in real time.\nEvidence: Independent accuracy audit by PwC, January 2025 (Report ref: PwC-DA-2025-0041).\nCompliance: Fully compliant.\n\nCriterion 2: Integration Architecture (Weighting: 12%)\nCapability: RESTful API with pre-built connectors for SAP, Oracle, and Salesforce. Custom connectors available via SDK.\nEvidence: Technical architecture whitepaper (v3.1, September 2024). Integration test results for SAP and Oracle available on request.\nCompliance: Fully compliant.\n\nCriterion 3: Scalability (Weighting: 10%)\nCapability: Tested to 2.4 million concurrent transactions with sub-200ms response time.\nEvidence: Load testing report, conducted by NCC Group, November 2024.\nCompliance: Fully compliant. Note: performance above 3 million concurrent transactions has not been independently verified.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response follows Fiona's requested format precisely, backs every claim with a named evidence source, and is honest about the scalability limitation. Analytical buyers trust vendors who acknowledge gaps.",
          observation:
            "Including the report reference number and the independent auditor's name adds a layer of verifiability that analytical communicators deeply value.",
          coachingTip:
            "When responding to analytical evaluation criteria, always cite named, verifiable evidence sources. 'Internal testing' is weaker than 'NCC Group load test, November 2024'.",
          styleContext:
            "Analytical buyers score responses like examiners. Every criterion is an opportunity to demonstrate rigour or expose a gap. Treat the evaluation as seriously as they do.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your response has the right structure but may lack named evidence sources, specific metrics, or the honest disclosure of limitations that Fiona expects.",
          observation:
            "If your compliance status is 'yes' for every criterion without qualification, Fiona will not trust it. Every platform has limitations, and admitting them builds credibility.",
          coachingTip:
            "Include at least one honest limitation or caveat. Analytical buyers are more suspicious of perfect scores than imperfect ones.",
          styleContext:
            "Analytical communicators respect intellectual honesty. Saying 'we have not tested beyond this threshold' is more persuasive than claiming unlimited capability.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response does not follow Fiona's requested format, lacks evidence, or uses marketing language instead of technical specifics.",
          observation:
            "If your response reads like a product brochure rather than a structured evaluation, Fiona will disqualify it before scoring it.",
          coachingTip:
            "Go back to Fiona's original instruction: one row per criterion, with capability, evidence, and compliance status. Match her format exactly.",
          styleContext:
            "Analytical communicators design evaluation frameworks to enable objective comparison. If your response does not fit their framework, it cannot be scored, and if it cannot be scored, it will be excluded.",
        },
      },
    },
  },
];
