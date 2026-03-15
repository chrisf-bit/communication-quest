import { Scenario } from "@/types";

export const SCENARIOS_PART26: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (301-303) - email
  // ============================================

  // Scenario 301 - Jordan Cole, email, foundation
  {
    id: "scenario-301",
    title: "The Budget Approval Request",
    context:
      "Your department needs sign-off on a quarterly budget increase to cover rising supplier costs. Jordan has been copied into the email chain and has jumped in with a blunt reply demanding clarity from the finance team.",
    chooseContext:
      "Jordan has replied to the finance team's three-paragraph explanation with a single line asking for the exact figure and the deadline. The finance team seems taken aback.",
    rewriteContext:
      "Jordan has asked you to draft a follow-up email to the CFO summarising the budget request in a way that gets a yes-or-no answer within 24 hours.",
    characterId: "jordan-cole",
    dialogue:
      "I have read this thread four times and I still do not know how much money we are asking for. Someone give me a number and a date. I will forward it to the CFO with a one-line recommendation. That is all this needs.",
    chooseDialogue:
      "The finance team sent another paragraph explaining context. I do not need context. I need the number, the reason in one sentence, and whether it is approved or not by Friday. Reply with those three things or do not reply at all.",
    rewriteDialogue:
      "Write the email to the CFO. Subject line should tell them the ask. Body should be three lines maximum: what we need, why, and when we need the answer. If it is longer than that, you have over-thought it.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has cut through a lengthy email thread by demanding a single number, a one-sentence reason, and a deadline. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan strips the conversation back to the bare essentials - a number, a reason, and a deadline. This is direct communication focused purely on getting to a decision.",
          observation:
            "Notice how Jordan frames the problem as too much information, not too little. Direct communicators see lengthy explanations as an obstacle to action.",
          coachingTip:
            "When someone responds to a long email chain by demanding brevity and a single decision point, they are signalling a direct style. Match their economy of words.",
          styleContext:
            "Direct communicators treat email as a tool for decisions, not discussions. If an email does not end with a clear action, they see it as wasted effort.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does want specific data, which can look analytical. But notice the goal is speed of decision, not depth of analysis. Jordan wants the number to forward it, not to scrutinise it.",
          observation:
            "An analytical communicator would ask for a breakdown of the supplier costs, trend data, and a comparison with last quarter. Jordan just wants the total.",
          coachingTip:
            "If someone asks for a number to make a quick decision, that is direct. If they ask for a number to validate a hypothesis, that is analytical.",
          styleContext:
            "Direct communicators use data as a means to an end. They want just enough information to act, not a complete picture.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has shown no interest in how people feel about the budget discussion or in building consensus. The entire focus is on cutting through noise to reach a decision.",
          observation:
            "There is no acknowledgement of the finance team's effort in explaining the context. Jordan treats their explanation as an obstacle, not a contribution.",
          coachingTip:
            "Ask yourself: is this person trying to understand everyone's perspective or trying to force a decision? Jordan is entirely focused on the latter.",
          styleContext:
            "Direct communicators can seem dismissive of detailed explanations, but they are not being rude - they genuinely believe brevity serves everyone better.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants three things from the finance team: the number, the reason, and the deadline. How do you respond to help move things forward?",
      options: [
        {
          id: "s301-opt-a",
          text: "The ask is 42,000 pounds to cover a 15% rise in packaging costs. We need approval by Friday to lock in the current supplier rate.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Jordan exactly what was asked for: the number, the reason in one sentence, and the deadline. Clean, complete, actionable.",
        },
        {
          id: "s301-opt-b",
          text: "I can pull the figure together, but I think it would help if I included some context about why supplier costs have risen so sharply this quarter.",
          score: 5,
          result: "partial",
          explanation:
            "Offering to provide the number is good, but suggesting additional context goes against Jordan's explicit request for brevity. It risks slowing things down.",
        },
        {
          id: "s301-opt-c",
          text: "I think we should set up a short call with the finance team to make sure everyone is aligned before we go to the CFO. There might be sensitivities we are not seeing.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan has made it clear that this needs a quick email, not a meeting. Suggesting a call introduces delay and complexity that a direct communicator will resist.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the email to the CFO requesting budget approval. Jordan wants a clear subject line and no more than three lines in the body. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Approval needed - 42k budget increase by Friday\n\nWe need an additional 42,000 pounds this quarter to cover a 15% rise in packaging supplier costs. If approved by Friday, we lock in current rates and avoid a further 8% increase next month. Please confirm yes or no.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your email is tight, decision-ready, and respects the CFO's time. Jordan would forward this without changes.",
          observation:
            "You included the ask, the consequence of delay, and a clear call to action. That is everything a direct communicator needs in an email.",
          coachingTip:
            "When writing for direct communicators, put the decision in the subject line and the reasoning in the body. Never make someone read to the end to find out what you want.",
          styleContext:
            "Direct communicators judge emails by how quickly the reader can act on them. If the action is buried, the email has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your email could be shorter. If any sentence does not directly support the decision, cut it.",
          observation:
            "Common traps include opening with background context, using phrases like 'I wanted to flag' or 'as you may be aware', or ending with an open question instead of a yes-or-no ask.",
          coachingTip:
            "Read your email back and delete the first sentence. If it still makes sense, the first sentence was filler.",
          styleContext:
            "Direct communicators skim emails. If your key message is in paragraph two, they may never reach it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too tentative, or does not include a clear ask. Jordan would rewrite it before forwarding.",
          observation:
            "If your email includes hedging language like 'it might be worth considering' or 'I was wondering if perhaps', it will not land with a direct communicator.",
          coachingTip:
            "Strip your email to three elements: what you need, why you need it, and when you need it by. Delete everything else.",
          styleContext:
            "Direct communicators see wordy emails as a sign that the sender has not done the thinking. Do the thinking first, then write the conclusion.",
        },
      },
    },
  },

  // Scenario 302 - Sam Hartley, email, intermediate
  {
    id: "scenario-302",
    title: "The Vendor Termination Notice",
    context:
      "A long-standing vendor has consistently missed delivery targets for three months. Sam has decided to terminate the contract and wants to send a formal notice via email. You are reviewing the draft.",
    chooseContext:
      "Sam's draft email is two sentences long: the contract is terminated effective in 30 days and the vendor should contact legal for handover details. A colleague has suggested softening the language.",
    rewriteContext:
      "Sam has asked you to write the termination email, keeping it professional but leaving no room for negotiation. The decision is final.",
    characterId: "sam-hartley",
    dialogue:
      "We gave them three chances. The numbers speak for themselves. I am not writing a Dear John letter - I am writing a termination notice. Keep it clean, keep it factual, and do not apologise for holding them to the contract they signed.",
    chooseDialogue:
      "Someone suggested we 'soften the tone' to preserve the relationship. There is no relationship to preserve. They missed targets three months running. The email says we are ending the contract, gives them 30 days, and tells them who to contact. That is professional enough.",
    rewriteDialogue:
      "Write it. State the termination, cite the clause, give the 30-day notice period, and name the legal contact for handover. Four sentences. Do not thank them for their service - they did not deliver one.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam is insisting on a blunt, factual termination email with no softening language or relationship-preservation efforts. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam treats the email as a purely transactional instrument. The decision is made, the facts support it, and the communication should reflect that without emotional padding.",
          observation:
            "Notice Sam explicitly rejects softening. Direct communicators see unnecessary warmth in a termination notice as dishonest rather than kind.",
          coachingTip:
            "When someone frames professional communication as a transaction rather than a relationship moment, they are operating in a direct style.",
          styleContext:
            "Direct communicators believe clarity is the most respectful thing you can offer, even in difficult messages. Ambiguity wastes everyone's time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference the contract clause and delivery data, which can seem analytical. But the reasoning is deployed to justify a decision already made, not to build a case for discussion.",
          observation:
            "An analytical communicator would likely include a performance summary table and a detailed timeline of missed targets. Sam just wants the termination stated plainly.",
          coachingTip:
            "If someone cites evidence to close a discussion, that is direct. If they cite evidence to open one, that is analytical.",
          styleContext:
            "Direct communicators reference data as confirmation, not exploration. The conclusion is never in doubt.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has explicitly rejected emotional language and relationship management. There is no attempt to cushion the impact or acknowledge the vendor's feelings.",
          observation:
            "A supportive or expressive communicator would likely acknowledge the history of the relationship and express regret, even in a termination. Sam sees that as counterproductive.",
          coachingTip:
            "Consider what is absent from Sam's approach: empathy, gratitude, regret. The absence of these signals a direct style.",
          styleContext:
            "Direct communicators compartmentalise emotions and business decisions. They are not being cold - they are being efficient.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A colleague has suggested softening the termination email to preserve goodwill. Sam disagrees. How do you weigh in?",
      options: [
        {
          id: "s302-opt-a",
          text: "I agree with keeping it factual. The contract terms are clear and the performance data backs the decision. A clean, professional notice respects both parties' time.",
          score: 10,
          result: "strong",
          explanation:
            "This aligns with Sam's position while framing factual brevity as professionalism. It validates the approach without being dismissive of the colleague's concern.",
        },
        {
          id: "s302-opt-b",
          text: "Could we add a single line acknowledging the length of the relationship without changing the substance? Something like 'we recognise our longstanding partnership' before stating the termination.",
          score: 5,
          result: "partial",
          explanation:
            "This is a reasonable middle ground, but Sam has already rejected this approach. Adding warmth when the decision-maker wants none risks undermining their authority.",
        },
        {
          id: "s302-opt-c",
          text: "I think we should schedule a call with the vendor first. Ending a five-year relationship by email feels harsh. They deserve a conversation before they receive the formal notice.",
          score: 0,
          result: "weak",
          explanation:
            "Sam has explicitly decided on email as the channel and does not want to open a dialogue. Suggesting a call introduces the negotiation Sam is trying to avoid.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the vendor termination email. Sam wants four sentences maximum: the termination, the contract clause, the 30-day notice period, and the legal contact. Direct style, no softening.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Contract termination - 30-day notice\n\nThis email serves as formal notice that we are terminating our supply agreement effective 14 April 2026, in accordance with clause 12.3 of the contract. This follows three consecutive months of missed delivery targets as documented in our performance reviews. Please contact Sarah Lloyd in our legal team at s.lloyd@company.com to arrange the handover of outstanding obligations. All current orders placed before today will be honoured under existing terms.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your email is factual, complete, and leaves no room for misinterpretation. Sam would send this as written.",
          observation:
            "You stated the action, cited the authority, gave the timeline, and provided the next step. That is a complete direct communication in four sentences.",
          coachingTip:
            "In difficult emails, direct style means saying the hard thing first and providing logistics second. Never bury the decision.",
          styleContext:
            "Direct communicators believe that difficult messages are best delivered without preamble. The reader should know the decision within the first sentence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Nearly there, but check for unnecessary softening. Phrases like 'unfortunately' or 'we regret to inform you' add emotional weight that Sam specifically wanted to avoid.",
          observation:
            "If your email opens with context or background before stating the termination, it is not matching the direct style Sam requested.",
          coachingTip:
            "Lead with the decision. If your first sentence does not contain the word 'terminating' or 'terminated', restructure.",
          styleContext:
            "Direct communicators put the conclusion first because they believe the reader deserves to know immediately what has been decided.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either softens the message, adds unnecessary context, or fails to state the termination clearly in the opening line.",
          observation:
            "If your email could be read as a warning rather than a termination, it is not direct enough. There should be no ambiguity about what is happening.",
          coachingTip:
            "Rewrite your first sentence as: 'We are terminating the contract effective [date].' Build the rest around that statement.",
          styleContext:
            "A direct communicator sees ambiguity in a termination notice as a legal risk and a professional failing. Say what you mean.",
        },
      },
    },
  },

  // Scenario 303 - Alex Tran, email, advanced
  {
    id: "scenario-303",
    title: "The Board Report Summary",
    context:
      "The quarterly board meeting is tomorrow and the CEO has asked for a one-page email summary of the operations report. Alex has been tasked with distilling a 40-page document into key points and recommendations.",
    chooseContext:
      "Alex has produced a bullet-point summary but a colleague has suggested adding narrative context to help board members who were not at last quarter's meeting.",
    rewriteContext:
      "Alex has asked you to draft the executive summary email. The CEO wants to read it on a phone screen during a taxi ride to the meeting. Every word must earn its place.",
    characterId: "alex-tran",
    dialogue:
      "Forty pages. The board will not read forty pages. They will read one email on the way to the meeting and walk in ready to decide. My job is to give them five bullet points and a recommendation. Everything else is appendix material.",
    chooseDialogue:
      "Adding narrative context is adding length. If a board member needs background, they can read last quarter's minutes. This email is not a catch-up document - it is a decision brief. Five bullets, one recommendation, done.",
    rewriteDialogue:
      "Write it for a phone screen. Five bullets: revenue, costs, headcount, risk, and the one decision they need to make. Under each bullet, one sentence of data and one sentence of implication. The recommendation goes at the top, not the bottom. If they stop reading after the first line, they still know what we are asking for.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "email",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Alex is distilling a 40-page report into a five-bullet email with a single recommendation, designed to be read on a phone screen. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex is relentlessly focused on compression and decision-readiness. The entire approach is designed to minimise reading time and maximise decision speed.",
          observation:
            "Notice how Alex puts the recommendation at the top. Direct communicators lead with the answer and support it afterwards, rather than building up to a conclusion.",
          coachingTip:
            "When someone designs communication around the recipient's constraints - phone screen, taxi ride, two minutes - they are thinking like a direct communicator.",
          styleContext:
            "Direct communicators believe the best communication is the shortest one that still enables a decision. Anything beyond that is noise.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex is working with data-heavy content, which can seem analytical. But notice that Alex is compressing data, not expanding on it. The goal is brevity, not thoroughness.",
          observation:
            "An analytical communicator would want to ensure every data point is accurately represented with appropriate caveats. Alex wants to reduce 40 pages to five bullets.",
          coachingTip:
            "If someone treats a detailed report as raw material to compress, that is direct. If they treat it as material to validate and extend, that is analytical.",
          styleContext:
            "Direct communicators see executive summaries as a test of judgment: what matters enough to survive the compression? Everything else is noise.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has rejected adding narrative, context, or background. The approach is purely functional - get the decision-makers to a yes or no as fast as possible.",
          observation:
            "There is no consideration of how board members might feel about receiving such a compressed summary, or whether they might want to discuss the details.",
          coachingTip:
            "Ask yourself: is this person optimising for understanding or for action? Alex is entirely focused on enabling a decision, not ensuring comprehension.",
          styleContext:
            "Direct communicators trust decision-makers to ask for more detail if they need it. They never pre-emptively over-inform.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A colleague wants to add narrative context to the board summary for members who missed last quarter. Alex disagrees. How do you respond?",
      options: [
        {
          id: "s303-opt-a",
          text: "The summary should stand on its own. If someone needs last quarter's context, we can attach a one-line link to the previous minutes. The email itself stays at five bullets.",
          score: 10,
          result: "strong",
          explanation:
            "This respects Alex's constraint while offering a pragmatic solution for the colleague's concern. The core document stays lean.",
        },
        {
          id: "s303-opt-b",
          text: "What if we add a single sentence of context at the top, something like 'This builds on Q2 actions agreed in June'? It adds ten words but helps frame the bullets.",
          score: 5,
          result: "partial",
          explanation:
            "A minor addition, but Alex has been clear that every word must justify its inclusion. Even ten words of framing may feel like dilution to a direct communicator.",
        },
        {
          id: "s303-opt-c",
          text: "I think we should create two versions: a short one for people who are up to speed and a longer one with full context for anyone joining fresh. That way everyone is covered.",
          score: 0,
          result: "weak",
          explanation:
            "Creating two versions doubles the work and contradicts Alex's principle that one clear document should serve everyone. Direct communicators reject redundancy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the executive summary email for the board. Recommendation at the top, five bullets with one sentence of data and one of implication each. Write it for a phone screen in direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Q3 Board Decision - Approve 200k investment in automation\n\nRecommendation: Approve 200,000 pounds for warehouse automation to recover margin by Q1 next year.\n\n- Revenue: Up 6% to 4.2M, driven by enterprise accounts. Pipeline supports continued growth.\n- Costs: Logistics costs rose 11%, eroding 2 points of margin. Automation addresses this directly.\n- Headcount: 142 FTE, stable. No new hires proposed this quarter.\n- Risk: Single-supplier dependency on packaging. Mitigation plan in progress, completion by November.\n- Decision needed: Approve capital expenditure of 200k for warehouse automation. Payback period is 14 months.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is phone-readable, decision-ready, and every sentence serves the recommendation. Alex would send this to the CEO without edits.",
          observation:
            "You led with the recommendation and structured each bullet as data plus implication. A board member could read the first line and know the ask.",
          coachingTip:
            "The test of a great executive summary: if the reader only sees the first line, do they know what you want? If yes, you have written it in direct style.",
          styleContext:
            "Direct communicators treat board papers as decision instruments, not information dumps. Your summary passed that test.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each bullet truly contains both a data point and an implication. If any bullet is just a fact without a 'so what', it is incomplete.",
          observation:
            "Common issues include burying the recommendation at the end, using hedging language like 'we might consider', or including context that does not serve the decision.",
          coachingTip:
            "For each bullet, ask: does this help the board say yes or no? If it is just informational, cut it or link it to the decision.",
          styleContext:
            "Direct communicators want every data point to have a purpose. Orphan facts - numbers without implications - frustrate them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too long for a phone screen, buries the recommendation, or includes narrative that Alex specifically excluded.",
          observation:
            "If your email opens with 'as you will recall from last quarter' or 'I wanted to provide an update on', it has already failed the direct style test.",
          coachingTip:
            "Delete your first paragraph. Start with 'Recommendation:' followed by the ask. Then list the supporting bullets. That is the entire structure.",
          styleContext:
            "Direct communicators lose trust in a summary that makes them scroll to find the point. The ask should be visible before they start reading.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (304-306) - one-to-one
  // ============================================

  // Scenario 304 - Priya Sharma, one-to-one, foundation
  {
    id: "scenario-304",
    title: "The Career Aspirations Chat",
    context:
      "You have scheduled a one-to-one with Priya to discuss her career goals for the next 12 months. She arrives full of energy and ideas, keen to talk about where she sees herself heading.",
    chooseContext:
      "Priya has shared three different career paths she is excited about and is asking for your honest take on which one suits her strengths best.",
    rewriteContext:
      "Priya has asked you to help her draft a development plan that captures the energy of your conversation while being specific enough to act on.",
    characterId: "priya-sharma",
    dialogue:
      "I have been thinking about this a lot, and honestly I am buzzing. There are so many directions I could go - I could lean into the client-facing stuff because I love the energy of those conversations, or I could go deeper into strategy, or even explore a sideways move into marketing. What do you think? I want to hear your gut feeling.",
    chooseDialogue:
      "I know I probably sound all over the place, but that is how I process - I need to talk it through! The client work lights me up, but the strategy piece feels like a growth stretch. And marketing would be totally new, which is scary but also kind of thrilling. Help me think out loud here.",
    rewriteDialogue:
      "Can you write something up that captures where we landed? I do not want a dry bullet list - I want it to feel like me. Something that shows the excitement but also the plan. If someone reads it, they should think 'that is so Priya' and also know exactly what I am working towards.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has arrived at a career discussion full of energy, sharing multiple ideas and asking for gut-feeling responses rather than data-driven analysis. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya is enthusiastic, explores multiple possibilities openly, and values emotional responses ('gut feeling') over structured analysis. This is classic expressive communication.",
          observation:
            "Notice how Priya processes by talking aloud and finds energy in the breadth of options rather than feeling overwhelmed by them.",
          coachingTip:
            "When someone brings energy and multiple ideas to a one-to-one and invites spontaneous reactions, they are signalling an expressive style. Match their enthusiasm before narrowing the focus.",
          styleContext:
            "Expressive communicators use one-to-ones as thinking spaces. They are not asking you to decide for them - they are asking you to think alongside them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and people-oriented, which can look supportive. But notice she is leading the conversation with energy and ideas, not seeking reassurance or comfort.",
          observation:
            "A supportive communicator would be more likely to ask 'do you think I am ready for this?' rather than 'I am buzzing, what do you think?'",
          coachingTip:
            "If someone brings excitement and wants to explore possibilities, that is expressive. If they bring uncertainty and want encouragement, that is supportive.",
          styleContext:
            "Expressive communicators share feelings as fuel for forward motion. Supportive communicators share feelings to build connection and seek safety.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not asked for data, structured analysis, or a systematic comparison of options. Her approach is driven by enthusiasm and instinct, not logic.",
          observation:
            "There are no spreadsheets, criteria matrices, or risk assessments in Priya's approach. She is exploring through conversation, not calculation.",
          coachingTip:
            "Ask yourself: is this person leading with energy or evidence? Priya is powered by excitement about possibilities, which is the hallmark of expressive communication.",
          styleContext:
            "Expressive communicators trust their instincts and value how a career path feels, not just whether it looks rational on paper.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya is thinking out loud about three career paths and wants your honest reaction. How do you respond?",
      options: [
        {
          id: "s304-opt-a",
          text: "I love that you are exploring all of this. The client-facing work clearly gives you energy, and I have seen you light up in those meetings. What if we started there and built the strategy skills around it? Best of both worlds.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy, validates her exploration, and offers a forward-looking suggestion that combines her interests. It feels collaborative and enthusiastic.",
        },
        {
          id: "s304-opt-b",
          text: "Those are all interesting options. Let me think about it and come back to you with some pros and cons for each one. I want to give you a considered view rather than an off-the-cuff reaction.",
          score: 5,
          result: "partial",
          explanation:
            "Thoughtful, but Priya specifically asked for a gut reaction. Deferring the conversation to a later, more analytical discussion misses the moment she is trying to create.",
        },
        {
          id: "s304-opt-c",
          text: "I think you need to narrow this down before we can have a productive conversation. Pick the one you are most serious about and we can build a plan around that.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the exploratory energy that Priya thrives on. Telling an expressive communicator to narrow down before discussing feels like criticism of their process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Help Priya draft a development plan that captures her energy and personality while being specific enough to act on. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Development Plan - Priya Sharma\n\nThe big picture: I want to grow into a role where I combine client relationships with strategic thinking - bringing energy to the room and substance to the conversation.\n\nPriority 1: Deepen client-facing skills by leading two new account relationships this quarter. I thrive in these conversations and want to make them my signature strength.\n\nPriority 2: Build strategic capability by shadowing the strategy team on one project and presenting my observations to the leadership group.\n\nPriority 3: Keep exploring. Book a coffee chat with the marketing director to understand whether a future sideways move could bring fresh perspective to my career.\n\nThis plan feels right because it plays to my strengths while stretching me into new territory. Let us revisit in three months and see where the energy is taking me.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your plan has personality, specificity, and forward momentum. It sounds like Priya wrote it, which is exactly what she asked for.",
          observation:
            "You balanced enthusiasm with concrete actions. Each priority has a specific deliverable, but the language stays warm and personal.",
          coachingTip:
            "Expressive communicators want development plans that feel like a story, not a spreadsheet. Your plan told a story with clear chapters.",
          styleContext:
            "Expressive communicators are more likely to follow through on plans that excite them emotionally. A dry template would gather dust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether it sounds like Priya. If the language is too formal or the tone too neutral, it will not resonate with an expressive communicator.",
          observation:
            "If your plan reads like a standard HR template, it has missed the brief. Priya wanted something that captures her energy, not just her goals.",
          coachingTip:
            "Try reading your plan aloud. If it sounds like it could belong to anyone, add personal voice. If it sounds distinctly like Priya, you have nailed it.",
          styleContext:
            "Expressive communicators connect with documents that reflect their personality. Generic language signals that you were not really listening.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan is either too dry, too generic, or lacks the personal energy Priya specifically requested. It reads like a standard development template.",
          observation:
            "If your plan is a bullet list of SMART objectives without any personality, Priya will not feel represented by it.",
          coachingTip:
            "Start with how the plan makes Priya feel, not what it contains. 'I am excited to...' is a better opener than 'Objective 1:' for an expressive communicator.",
          styleContext:
            "Expressive communicators need to see themselves in a document before they commit to it. Make the plan unmistakably hers.",
        },
      },
    },
  },

  // Scenario 305 - Marcus Webb, one-to-one, intermediate
  {
    id: "scenario-305",
    title: "The Project Ownership Discussion",
    context:
      "Marcus has requested a one-to-one because he feels his contribution to a successful product launch has gone unrecognised. He is not angry, but he is passionate about getting the credit he deserves.",
    chooseContext:
      "Marcus has explained in detail how he drove the creative direction of the launch campaign while others received the public recognition. He is looking for your support in making this visible.",
    rewriteContext:
      "Marcus has asked you to help him write an email to the senior leadership team highlighting his specific contributions to the launch, without sounding like he is complaining.",
    characterId: "marcus-webb",
    dialogue:
      "I poured everything into that campaign. The concept was mine, the pitch was mine, and I was the one staying late to get the visuals right. Then the wrap-up presentation went out with three names on it and mine was not one of them. I am not looking for a trophy, but I need people to know what I actually did.",
    chooseDialogue:
      "I have thought about this and I do not want to go in heavy. I want the leadership team to hear my story - what I contributed, why it mattered, and what I want to do next. I just need someone to help me frame it so it lands as confidence, not complaint.",
    rewriteDialogue:
      "Help me write something that tells my story without sounding bitter. I want them to read it and think 'we need more of Marcus on the next one.' It should show what I brought to the table and where I want to go from here. Make it sound like me - direct but warm.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus is passionately explaining his unrecognised contribution to a project and wants his story heard by leadership. He frames the issue as narrative, not grievance. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with passion and personal narrative. He wants recognition through storytelling, not formal complaint. He cares about how his contribution is perceived and felt.",
          observation:
            "Notice how Marcus frames this as 'my story' rather than 'a process failure.' Expressive communicators personalise professional situations because their identity is tied to their work.",
          coachingTip:
            "When someone talks about being recognised for their contribution through narrative rather than metrics, they are communicating expressively. Help them shape the story.",
          styleContext:
            "Expressive communicators see their work as an extension of themselves. Being overlooked is not just a career issue - it is a personal one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does express vulnerability, which can look supportive. But notice he is driving the conversation forward with solutions, not seeking comfort. He wants action, not just a listening ear.",
          observation:
            "A supportive communicator might say 'I feel hurt and I am not sure what to do.' Marcus says 'here is what I want to happen.' The emotion fuels action, not retreat.",
          coachingTip:
            "If someone shares feelings as a springboard to a plan, that is expressive. If they share feelings as a need for reassurance, that is supportive.",
          styleContext:
            "Expressive communicators process emotions openly but are not paralysed by them. They use feelings as data points for their next move.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not presenting a logical case with evidence and metrics. He is telling a personal story about creative ownership and recognition. The approach is emotional and narrative-driven.",
          observation:
            "There are no KPIs, project timelines, or contribution logs in Marcus's approach. He leads with passion and personal investment.",
          coachingTip:
            "Ask yourself: is this person building a case or telling a story? Marcus is telling the story of his contribution, which is expressive communication.",
          styleContext:
            "Expressive communicators believe the most compelling argument is a well-told story, not a spreadsheet of contributions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants help framing his contribution email so it lands as confidence rather than complaint. How do you guide him?",
      options: [
        {
          id: "s305-opt-a",
          text: "Let us lead with the impact you had - the creative concept, the pitch, the execution. Then connect it to what you want next. Frame it as 'here is what I bring and here is where I want to take it.' That turns it into a forward-looking story.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's feelings, helps him shape a narrative, and reframes the past contribution as a springboard for future ambition. It matches his expressive style perfectly.",
        },
        {
          id: "s305-opt-b",
          text: "I think you should document your specific contributions with dates and deliverables. That way the leadership team has concrete evidence rather than just your perspective on it.",
          score: 5,
          result: "partial",
          explanation:
            "Evidence is useful, but framing Marcus's passionate narrative as something that needs proof shifts the conversation to an analytical register he did not ask for.",
        },
        {
          id: "s305-opt-c",
          text: "Honestly, I would let this one go. The project is finished, the team got the credit collectively, and bringing it up now might look like sour grapes.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing Marcus's need for recognition is the worst response for an expressive communicator. He came to you for support in telling his story, not to be told the story does not matter.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Help Marcus write the email to senior leadership highlighting his contributions to the launch. It should sound confident, forward-looking, and distinctly like Marcus. Expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Reflections on the product launch - and where I want to go next\n\nI wanted to share some thoughts while the launch is still fresh. I am proud of what the team achieved, and I want to be transparent about the role I played so we can build on it going forward.\n\nI developed the original creative concept and pitched it to the steering group. I led the visual direction through three rounds of iteration, and I was the last person in the room on the nights we needed to get the assets over the line. This was one of the most rewarding projects I have worked on.\n\nLooking ahead, I would love to take on a creative lead role on the next campaign. I have the ideas, the energy, and the track record to back it up. I would welcome a conversation about how to make that happen.\n\nThanks for reading - I am excited about what comes next.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is Marcus on the page. Confident, warm, personal, and forward-looking. It tells his story without bitterness and opens a door to the next opportunity.",
          observation:
            "You balanced pride in past work with ambition for the future. The tone is assertive without being confrontational - exactly the line Marcus wanted to walk.",
          coachingTip:
            "Expressive communicators want emails that sound like them talking. If you can hear their voice when you read it, you have matched the style.",
          styleContext:
            "Expressive communicators use written communication to extend their personality. A great email from an expressive person feels like a conversation, not a memo.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the email sounds like Marcus or like a standard contribution summary. If the warmth and personality are missing, it will not land.",
          observation:
            "If your email lists contributions without connecting them to how Marcus felt about the work or where he wants to go, it is missing the expressive element.",
          coachingTip:
            "Add a sentence about what the project meant to Marcus personally. Expressive communicators connect professional achievements to personal fulfilment.",
          styleContext:
            "An expressive communicator's contribution email should make the reader want to work with them on the next project, not just acknowledge the last one.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too complaint-focused, or lacks Marcus's distinctive voice and energy.",
          observation:
            "If your email reads like a grievance or a formal record of contributions without personality, it misses what Marcus asked for entirely.",
          coachingTip:
            "Start again with this frame: 'I am proud of what I did and I want more of it.' Build the email around that feeling.",
          styleContext:
            "Expressive communicators lose engagement with dry, impersonal documents. If the email does not excite Marcus, he will not send it.",
        },
      },
    },
  },

  // Scenario 306 - Nina Okafor, one-to-one, advanced
  {
    id: "scenario-306",
    title: "The Difficult Promotion Conversation",
    context:
      "Nina has been passed over for a promotion she was confident she would get. She has requested a one-to-one with you to understand why and to figure out her next steps. She is visibly disappointed but channelling it into determination.",
    chooseContext:
      "Nina has listened to the reasons for the decision and is now pushing back, arguing that the criteria were not applied fairly. She is not hostile, but she is challenging you with conviction.",
    rewriteContext:
      "Nina has asked you to help her write a response to the promotion panel, acknowledging the decision while making a compelling case for reconsideration or fast-tracking for the next cycle.",
    characterId: "nina-okafor",
    dialogue:
      "I am not going to pretend I am fine with this. I put in the work, I hit every target, and I have people across the business who would vouch for my impact. I need you to help me understand what happened, because from where I am standing, this does not add up. I am not leaving this conversation without a plan.",
    chooseDialogue:
      "You are telling me the panel wanted more strategic visibility. But I led the cross-functional review that saved the Manchester project. That is strategy. I think the issue is not my capability - it is that the right people were not in the room when the decision was made. So how do we fix that?",
    rewriteDialogue:
      "I want to write to the panel. I am not going to beg, but I am going to make my case clearly. I want them to feel what it is like to be me in this situation - to have delivered everything asked of me and still be told to wait. And then I want to lay out exactly what I will do in the next six months that makes the decision obvious next time.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina is responding to being passed over for promotion with visible emotion, personal conviction, and a demand for a clear plan. She wants the panel to 'feel what it is like to be her.' Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina leads with emotion and personal narrative, but channels it into advocacy and action. She wants people to feel her perspective and then act on it. This is expressive communication at its most powerful.",
          observation:
            "Notice how Nina's emotion is not unfocused - it drives her argument. She moves from 'this is how I feel' to 'this is what I want to happen.' That emotional momentum is distinctly expressive.",
          coachingTip:
            "When someone uses personal experience and emotional resonance as persuasion tools rather than logical arguments, they are operating in an expressive register.",
          styleContext:
            "Expressive communicators believe the most compelling arguments are felt, not just understood. Nina wants the panel to empathise before they evaluate.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does seek understanding and connection, which can look supportive. But she is not looking for comfort - she is building a case through personal narrative. The goal is persuasion, not reassurance.",
          observation:
            "A supportive communicator in this situation would focus on processing the disappointment. Nina is already past that - she is channelling disappointment into a campaign.",
          coachingTip:
            "If someone uses emotion as fuel for action, that is expressive. If they use emotion as a signal for needing support, that is supportive.",
          styleContext:
            "Expressive communicators transform setbacks into stories of resilience. Nina is already writing the comeback chapter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not presenting a dispassionate analysis of the promotion criteria or requesting a formal review process. Her approach is deeply personal and emotionally charged.",
          observation:
            "There is no request for a scoring breakdown, a criteria matrix, or a benchmarking exercise. Nina's case is built on personal impact and the injustice she feels.",
          coachingTip:
            "Ask yourself: is this person appealing to logic or to empathy? Nina wants the panel to feel her frustration and see her determination. That is expressive persuasion.",
          styleContext:
            "Expressive communicators in setback situations do not retreat into data - they advance into narrative. The story of being overlooked becomes the story of why they will not be overlooked again.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina is pushing back on the promotion decision, arguing that the panel lacked visibility of her strategic contributions. How do you respond?",
      options: [
        {
          id: "s306-opt-a",
          text: "You are right that visibility matters, and the Manchester project is a strong example. Let us build a plan that puts your strategic work in front of the right people over the next two quarters. By the time the next panel sits, your name should already be in the conversation.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Nina's frustration, acknowledges the real issue of visibility, and channels the energy into a concrete forward plan. It matches her expressive drive to turn setbacks into action.",
        },
        {
          id: "s306-opt-b",
          text: "I hear your frustration. Let me go back to the panel and get the specific scoring criteria so we can see exactly where the gap was. That will give us something concrete to work from.",
          score: 5,
          result: "partial",
          explanation:
            "Seeking clarity is reasonable, but shifting to an analytical framework when Nina is in an emotionally driven mode risks disconnecting from her energy. Address the feeling first, then the data.",
        },
        {
          id: "s306-opt-c",
          text: "I understand this is disappointing, but the panel's decision was based on the evidence available at the time. The best thing you can do now is focus on your current role and let the work speak for itself over time.",
          score: 0,
          result: "weak",
          explanation:
            "Telling Nina to be patient and let things happen organically is the opposite of what an expressive communicator wants to hear. She came with energy and a plan - meet her there.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Help Nina write to the promotion panel. She wants to acknowledge the decision, make her case emotionally and factually, and lay out a six-month plan that makes the next decision obvious. Expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Promotion feedback - my response and plan\n\nThank you for sharing the panel's feedback. I respect the process, and I want to be honest about where I stand.\n\nI am proud of what I delivered this year. I led the cross-functional review that rescued the Manchester project, I built relationships across three departments that did not previously collaborate, and I did all of this while exceeding my core performance targets. This work matters to me - not just as a career milestone, but because I genuinely believe I make the people around me better.\n\nI hear the feedback about strategic visibility. Here is what I am going to do about it: over the next six months, I will lead a strategic initiative with direct reporting to the senior leadership team, present quarterly to the board on cross-functional performance, and mentor two junior team members to demonstrate leadership depth.\n\nI am not waiting to be told I am ready. I am showing you. I would welcome a conversation about how to make the next cycle a formality rather than a question.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is Nina at her best - honest, passionate, and strategically assertive. The email acknowledges the decision without accepting it as final and turns the feedback into a launchpad.",
          observation:
            "You balanced personal emotion with professional ambition. The line 'I am not waiting to be told I am ready' captures Nina's expressive determination perfectly.",
          coachingTip:
            "Expressive communicators persuade by making you feel their commitment. If the reader finishes this email rooting for Nina, the style is working.",
          styleContext:
            "Expressive communicators turn setback emails into manifesto emails. They do not just respond to feedback - they reshape the narrative around it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether the email captures Nina's personal voice and emotional conviction. If it reads like a standard feedback response, it is missing the expressive element.",
          observation:
            "If your plan section is just a bullet list of objectives without connecting them to Nina's values and motivation, it will feel incomplete.",
          coachingTip:
            "Add a sentence about why this matters to Nina personally. Expressive communicators need the emotional thread running through professional documents.",
          styleContext:
            "An expressive communicator's response to setback should leave the reader thinking 'I want this person on my team' - not just 'they met the criteria.'",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too passive, too analytical, or fails to capture Nina's distinctive voice and emotional conviction.",
          observation:
            "If your email accepts the decision without challenge, presents a generic development plan, or sounds like it could have been written by anyone, it has missed the brief.",
          coachingTip:
            "Rewrite with Nina's voice in mind: confident, warm, and unwilling to be overlooked. Start with how she feels, move to what she has done, and finish with what she will do.",
          styleContext:
            "Expressive communicators see career setbacks as temporary chapters in a longer story. Your email should read like the turning point, not the ending.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (307-309) - presentation
  // ============================================

  // Scenario 307 - Tom Brennan, presentation, foundation
  {
    id: "scenario-307",
    title: "The Wellbeing Initiative Pitch",
    context:
      "Tom has been asked to present a proposal for a new workplace wellbeing programme to the senior leadership team. He is passionate about the initiative but nervous about presenting to such a senior audience.",
    chooseContext:
      "Tom has finished his presentation and a board member has asked a pointed question about ROI. Tom is visibly uncomfortable with the challenge but trying to respond thoughtfully.",
    rewriteContext:
      "Tom has asked you to help him prepare a follow-up email to the board summarising the key points from his presentation and addressing the ROI question with care.",
    characterId: "tom-brennan",
    dialogue:
      "I know the numbers matter, and I have done my homework on that. But I want to start by talking about what this programme means for people. We have team members who are struggling quietly, and they need to know the organisation cares. If we get this right, the numbers will follow - because people who feel supported do better work.",
    chooseDialogue:
      "I appreciate the question about ROI, and I do not want to dodge it. The research shows that wellbeing programmes reduce absence by 25% on average. But for me, the real return is in the conversations we are not having yet - the team members who are burning out silently because they do not feel safe saying so.",
    rewriteDialogue:
      "Help me write something that keeps the human element front and centre but also gives the board the reassurance they need on cost. I do not want it to feel like I am selling - I want it to feel like I am inviting them to do the right thing. If we lose the heart of this proposal, we lose the programme.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom is presenting a wellbeing proposal by leading with the human impact and stating that numbers will follow if people feel cared for. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with care for people, emphasises emotional safety, and frames the business case as secondary to the human one. This is supportive communication - the wellbeing of others comes first.",
          observation:
            "Notice how Tom talks about people 'struggling quietly' and needing to 'feel safe.' Supportive communicators are attuned to the unspoken needs of others.",
          coachingTip:
            "When a presenter leads with empathy and frames business outcomes as a consequence of caring for people, they are operating in a supportive style.",
          styleContext:
            "Supportive communicators believe that looking after people is not just the right thing to do - it is the smart thing to do. But they lead with the heart, not the head.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is passionate about the topic, which can look expressive. But notice the focus is on others' wellbeing rather than his own enthusiasm. He is advocating for people who cannot advocate for themselves.",
          observation:
            "An expressive communicator would lead with their personal connection to the topic. Tom leads with his concern for the team members who are struggling.",
          coachingTip:
            "If someone presents with passion for a cause that serves others, look at where the focus sits. Expressive focuses on the presenter's energy. Supportive focuses on the audience's needs.",
          styleContext:
            "Supportive communicators often champion causes that protect vulnerable people. Their passion is other-directed, not self-directed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not led with data, analysis, or a structured business case. His opening argument is entirely about human impact and emotional safety.",
          observation:
            "There is no cost-benefit analysis, no benchmarking data, and no structured framework in Tom's opening. He starts with people and builds outward.",
          coachingTip:
            "Ask yourself: does this person lead with evidence or empathy? Tom leads with empathy. The evidence exists, but it is positioned as supporting the human case, not replacing it.",
          styleContext:
            "Supportive communicators use data as reassurance, not as the primary argument. The case is built on care; the numbers just prove it works.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has been challenged on ROI during his wellbeing presentation. He is uncomfortable but trying to respond. How do you support him?",
      options: [
        {
          id: "s307-opt-a",
          text: "Tom, you made the point well - the research backs up a 25% reduction in absence. And you are right that the deeper value is in creating a culture where people speak up before they burn out. Both things can be true.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Tom's approach, reinforces the data he provided, and honours his belief that the human case and the business case are complementary. It makes him feel supported without taking over.",
        },
        {
          id: "s307-opt-b",
          text: "I think we should put together a more detailed cost-benefit analysis for the board. The wellbeing case is strong, but we need harder numbers to get sign-off at this level.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but suggesting Tom needs harder numbers in front of the board could undermine his confidence. Better to support the approach he has taken and offer to supplement later.",
        },
        {
          id: "s307-opt-c",
          text: "Honestly, the board are numbers people. You might want to restructure the pitch to lead with the financial case and keep the human element as supporting evidence.",
          score: 0,
          result: "weak",
          explanation:
            "Telling Tom to abandon his people-first approach misses the entire point of his communication style. He specifically said losing the heart of the proposal means losing the programme.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Help Tom write a follow-up email to the board that keeps the human element central while addressing the ROI question. Supportive style - caring, collaborative, and reassuring.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Wellbeing programme - follow-up and next steps\n\nThank you all for the thoughtful questions during the presentation. I appreciated the honest conversation about both the human and financial dimensions of this proposal.\n\nAt its heart, this programme is about creating a workplace where people feel safe enough to ask for help before they reach crisis point. The research supports what many of us already sense - teams that feel cared for perform better, stay longer, and support each other more effectively.\n\nOn the ROI question: comparable programmes show a 25% reduction in absence and measurable improvements in engagement scores within 12 months. I would welcome the chance to work with finance to build a more detailed model that reflects our specific context.\n\nI do not want to rush this decision. If it would help, I am happy to run a pilot with one team and share the results before we commit to a full rollout. The important thing is that we get it right - for our people and for the business.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is Tom's voice. You led with gratitude, centred the people case, addressed the numbers with care, and offered a collaborative next step. The board feels invited, not sold to.",
          observation:
            "The pilot suggestion is perfect for a supportive style - it shows confidence in the programme while respecting the board's need for reassurance.",
          coachingTip:
            "Supportive communicators build trust by offering choices rather than forcing decisions. Your email gives the board a gentle on-ramp.",
          styleContext:
            "Supportive communicators earn buy-in by demonstrating patience and care. An email that says 'let us get it right together' is more persuasive to them than one that says 'here is why I am right.'",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the email feels collaborative or defensive. If the ROI section reads like a rebuttal rather than an invitation to explore together, it has lost the supportive tone.",
          observation:
            "If your email separates the human case and the business case into opposing sections, it creates a tension Tom would not want.",
          coachingTip:
            "Weave the people impact and the data together rather than treating them as separate arguments. For Tom, they are two sides of the same coin.",
          styleContext:
            "Supportive communicators do not present alternatives as trade-offs. They frame them as complementary parts of a single, caring approach.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too data-heavy, too defensive, or has lost the warmth and care that Tom specifically wanted to preserve.",
          observation:
            "If the email reads like a business case document rather than a thoughtful follow-up from someone who cares about people, it has missed Tom's brief.",
          coachingTip:
            "Start again with this thought: 'What would Tom want the board to feel after reading this?' The answer is reassured, invited, and cared for.",
          styleContext:
            "Supportive communicators want their written communication to feel like an extended hand, not a closed fist.",
        },
      },
    },
  },

  // Scenario 308 - Leah Morgan, presentation, intermediate
  {
    id: "scenario-308",
    title: "The Change Management Briefing",
    context:
      "Leah has been asked to brief a group of middle managers on an upcoming restructure. She knows the news will be unsettling and wants to deliver it in a way that acknowledges the emotional impact while providing clarity.",
    chooseContext:
      "Leah has delivered the news and several managers are expressing anxiety about their teams. One manager is visibly upset. Leah is responding with patience and care, checking in with each person.",
    rewriteContext:
      "Leah has asked you to help her draft the talking points for a follow-up Q and A session, anticipating the concerns that managers will raise and preparing responses that balance honesty with reassurance.",
    characterId: "leah-morgan",
    dialogue:
      "I know this is a lot to take in, and I want you to know that I am not going to rush through this. We have time for questions, we have time for concerns, and nobody is going to be left without answers. Some of those answers might be 'we do not know yet,' and I would rather be honest about that than pretend we have it all figured out.",
    chooseDialogue:
      "I can see this is landing hard for some of you, and that is completely understandable. Your teams are going to look to you for reassurance, so I want to make sure you feel supported first. Let us go around the room - tell me your biggest concern and I will either answer it now or commit to getting you an answer by Friday.",
    rewriteDialogue:
      "I need talking points for the follow-up session. For each likely question, I want two things: an honest answer and a reassuring one. Not one or the other - both. If someone asks 'will there be redundancies?' I want to be truthful but I also want them to walk out feeling that we are doing this thoughtfully, not recklessly.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is delivering difficult restructure news by explicitly prioritising emotional space, checking in individually, and being honest about what she does not yet know. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with care, creates space for feelings, and prioritises the emotional wellbeing of her audience before addressing logistics. She is honest but gentle - the hallmark of supportive communication.",
          observation:
            "Notice how Leah says 'I want to make sure you feel supported first.' Supportive communicators sequence emotional safety before information delivery.",
          coachingTip:
            "When a presenter acknowledges emotional impact before diving into content and commits to following up individually, they are communicating supportively.",
          styleContext:
            "Supportive communicators believe that people cannot process information effectively until they feel safe. The emotional setup is not a detour - it is the foundation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and engaging, which can look expressive. But notice the focus is on the audience's feelings, not her own. She is creating safety for others, not sharing her personal experience.",
          observation:
            "An expressive communicator might share how they personally feel about the restructure. Leah focuses entirely on how the managers are feeling.",
          coachingTip:
            "If the presenter's warmth is directed at making others feel safe, that is supportive. If it is directed at sharing their own experience, that is expressive.",
          styleContext:
            "Supportive communicators in difficult briefings become emotional anchors for the room. Their calm comes from care, not detachment.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not led with a structured timeline, a decision matrix, or a rational case for the restructure. Her opening is entirely about emotional readiness.",
          observation:
            "There is no PowerPoint deck of organisational charts or transition milestones. Leah starts with people, not processes.",
          coachingTip:
            "Ask yourself: is this person leading with a plan or with empathy? Leah leads with empathy. The plan will come, but only after people feel heard.",
          styleContext:
            "Supportive communicators sequence differently from analytical or direct ones. Feelings first, facts second, actions third.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One manager is visibly upset about the restructure news. Leah is checking in with the room. How do you respond to support the situation?",
      options: [
        {
          id: "s308-opt-a",
          text: "Thank you for creating the space for this, Leah. I think what would help right now is knowing that we can come back to you individually if we are not ready to ask questions in front of the group. Would that be possible?",
          score: 10,
          result: "strong",
          explanation:
            "This affirms Leah's approach, respects the upset manager's need for privacy, and offers a practical suggestion that aligns with the supportive style of the briefing.",
        },
        {
          id: "s308-opt-b",
          text: "I appreciate the honesty. Can you give us the timeline so we know what we are working with? That might help people feel more in control.",
          score: 5,
          result: "partial",
          explanation:
            "Requesting a timeline is practical, but in this moment the room needs emotional support, not logistics. Leah has deliberately sequenced feelings before facts.",
        },
        {
          id: "s308-opt-c",
          text: "I think we just need to get through the detail and then people can process it afterwards. Dragging it out is making it harder.",
          score: 0,
          result: "weak",
          explanation:
            "Suggesting that emotional processing is 'dragging it out' directly contradicts Leah's supportive approach and dismisses the feelings in the room.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft talking points for Leah's follow-up Q and A session on the restructure. Each point should have an honest answer and a reassuring framing. Supportive style throughout.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Q and A Talking Points\n\nQ: Will there be redundancies?\nHonest answer: We cannot rule it out at this stage. The review is still underway and we expect to have clarity within four weeks.\nReassuring framing: Every decision will be made with care, and no one will find out about their role through a mass email. We are committed to individual conversations with anyone affected.\n\nQ: What happens to my team?\nHonest answer: Some teams will be restructured, and reporting lines may change. We will share the proposed structure before any changes take effect.\nReassuring framing: Your role as a manager is more important than ever during this transition. We will make sure you have the information you need to support your people.\n\nQ: When will we know more?\nHonest answer: The review concludes at the end of next month. Key decisions will be communicated within two weeks of that.\nReassuring framing: I know the uncertainty is hard. I will send weekly updates - even if the update is 'nothing has changed yet' - so you are never left guessing.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "These talking points balance honesty and care beautifully. Each answer acknowledges the difficulty while offering a specific reassurance. Leah would feel confident using these.",
          observation:
            "The weekly updates commitment is excellent - supportive communicators value consistent, transparent communication even when there is nothing new to share.",
          coachingTip:
            "In uncertain situations, supportive communicators want to reduce anxiety through predictability. Committing to regular updates - even empty ones - builds trust.",
          styleContext:
            "Supportive communicators would rather over-communicate than leave people in silence. Silence feels like abandonment to the people they care about.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the reassuring framing feels genuine or formulaic. Supportive communication only works when the care behind it is authentic.",
          observation:
            "If your reassurances sound like corporate messaging - 'we value our people' - rather than specific commitments, they will not land with Leah or her audience.",
          coachingTip:
            "Replace any generic reassurance with a specific action. 'We care about you' becomes 'I will personally speak to every affected team member before any announcement.'",
          styleContext:
            "Supportive communicators earn trust through specificity of care, not breadth of sentiment. One concrete promise is worth ten warm platitudes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points are either too blunt, too corporate, or fail to balance honesty with emotional support.",
          observation:
            "If your answers give the facts without acknowledging the human impact, they will feel cold. Leah specifically wanted both dimensions in every response.",
          coachingTip:
            "For each answer, add a sentence that starts with 'I understand this might feel...' before the factual response. That emotional acknowledgement is what makes it supportive.",
          styleContext:
            "Supportive communicators believe that how you deliver news is as important as what the news contains. Tone and timing matter as much as accuracy.",
        },
      },
    },
  },

  // Scenario 309 - David Chen, presentation, advanced
  {
    id: "scenario-309",
    title: "The Team Retrospective Facilitation",
    context:
      "David has been asked to facilitate a team retrospective after a difficult project that caused significant stress and interpersonal tension. He wants to create a safe space where people can be honest without the session becoming a blame exercise.",
    chooseContext:
      "During the retrospective, two team members have started pointing fingers at each other. David is intervening to redirect the conversation toward shared learning rather than individual accountability.",
    rewriteContext:
      "David has asked you to help him draft a summary of the retrospective findings, framing the lessons learned in a way that honours the difficulty of the project without assigning blame.",
    characterId: "david-chen",
    dialogue:
      "Before we start, I want to set something up. This session is not about who got it wrong. It is about what we can learn together. Everyone in this room did their best with what they had at the time, and I genuinely believe that. So I am asking us all to speak from our own experience - 'I found it difficult when...' rather than 'you should have...' Can we agree on that?",
    chooseDialogue:
      "I can hear that there is real frustration here, and I do not want to dismiss that. But I want to gently redirect us. Instead of talking about what someone else did or did not do, can we talk about what we each needed and did not get? That shifts us from blame to understanding, and I think we will get much further.",
    rewriteDialogue:
      "The summary needs to feel like a group document, not a report card. I want each lesson to start with 'we learned that...' rather than 'the team failed to...' The people who lived through this project deserve to see their experience reflected with dignity, not reduced to a list of mistakes.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David is facilitating a retrospective by establishing ground rules about speaking from personal experience, redirecting blame into shared learning, and insisting that the summary preserves dignity. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David creates psychological safety, redirects conflict into shared understanding, and insists that the process honours everyone's experience. This is advanced supportive facilitation.",
          observation:
            "Notice how David reframes blame as unmet needs: 'what we each needed and did not get.' Supportive communicators transform adversarial dynamics into collaborative ones.",
          coachingTip:
            "When a facilitator prioritises emotional safety, uses 'we' language consistently, and reframes conflict as shared learning, they are operating in a deeply supportive style.",
          styleContext:
            "Supportive communicators believe that retrospectives should heal as well as teach. If people leave feeling blamed, the session has failed regardless of the insights generated.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is warm and emotionally engaged, which can look expressive. But notice that his focus is entirely on the group's emotional safety, not on sharing his own feelings about the project.",
          observation:
            "An expressive facilitator might share their personal experience of the difficult project. David keeps the spotlight on the team's collective experience.",
          coachingTip:
            "If a facilitator creates space for others' emotions while managing their own in the background, that is supportive. If they share their own emotions to model openness, that is expressive.",
          styleContext:
            "Supportive facilitators are emotional architects - they design the space but do not make themselves the centrepiece of it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not structured the retrospective around metrics, timelines, or process analysis. His primary concern is emotional safety and collective dignity.",
          observation:
            "There is no start-stop-continue framework, no RAG status review, and no action item tracker. David is facilitating a human conversation, not a process review.",
          coachingTip:
            "Ask yourself: is this facilitator optimising for insight or for safety? David believes safety must come first because honest insights only emerge when people feel protected.",
          styleContext:
            "Supportive facilitators trade efficiency for depth. A retrospective that takes twice as long but produces genuine honesty is a success in their eyes.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Two team members are blaming each other during the retrospective. David is redirecting. How do you support his facilitation?",
      options: [
        {
          id: "s309-opt-a",
          text: "I want to build on what David said. I know I found parts of this project really challenging too, and I think if we each share what we found hardest, we might discover we were all struggling with the same things. Can I go first?",
          score: 10,
          result: "strong",
          explanation:
            "Offering to go first with a personal vulnerability models the behaviour David is encouraging. It shifts the room from adversarial to collaborative and gives the arguing pair a graceful exit.",
        },
        {
          id: "s309-opt-b",
          text: "Perhaps it would help to look at the project timeline objectively and identify the points where things went off track. That might depersonalise the conversation.",
          score: 5,
          result: "partial",
          explanation:
            "Depersonalising through data is reasonable, but David has specifically chosen a feelings-first approach. Shifting to a timeline analysis changes the facilitation style he has set.",
        },
        {
          id: "s309-opt-c",
          text: "I think both of you have valid points. Let us acknowledge that mistakes were made on both sides and move forward.",
          score: 0,
          result: "weak",
          explanation:
            "Saying 'mistakes were made on both sides' is exactly the kind of blame-adjacent language David is trying to avoid. It validates the adversarial frame instead of dissolving it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the retrospective summary document. David wants each lesson framed as 'we learned that...' with dignity preserved and no blame assigned. Supportive style throughout.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Project Retrospective Summary\n\nThis summary reflects the honest, thoughtful conversation the team had about a project that stretched us all. Every lesson here comes from a place of shared experience, not individual judgment.\n\nWe learned that when timelines are compressed without adjusting scope, the pressure falls unevenly across the team. Several of us felt we were carrying more than our share but did not feel able to say so at the time.\n\nWe learned that communication gaps between workstreams created assumptions that led to rework. Nobody intended to leave others in the dark - the pace simply outran our ability to keep everyone informed.\n\nWe learned that checking in with each other matters as much as checking off tasks. The moments where we paused to ask 'how are you doing with this?' were the moments that kept us going.\n\nGoing forward, we have agreed to build in regular check-ins - not just on progress, but on how people are feeling about the work. We are a team that cares about getting it right, and we are also a team that cares about each other. This retrospective proved both.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This summary preserves dignity, honours difficulty, and frames lessons as collective discoveries. David would share this with pride, knowing it reflects the team's experience truthfully and gently.",
          observation:
            "You avoided assigning blame while being honest about what went wrong. The phrase 'nobody intended to leave others in the dark' acknowledges the impact without accusing anyone.",
          coachingTip:
            "Supportive retrospective summaries work when they read as if the team wrote them together. If any individual would feel singled out, revise.",
          styleContext:
            "Supportive communicators write retrospective summaries that teams can revisit without flinching. The document should feel like a shared understanding, not a verdict.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether any lessons implicitly assign responsibility. Phrases like 'the team failed to communicate' still carry blame, even in collective language.",
          observation:
            "If your summary reads like a softer version of a blame report rather than a genuinely shared reflection, it needs more work on tone.",
          coachingTip:
            "Replace 'we failed to...' with 'we learned that...' throughout. The framing changes the emotional register from accountability to growth.",
          styleContext:
            "Supportive retrospective summaries should leave every reader thinking 'yes, that is what happened, and I feel seen' rather than 'that is what I did wrong.'",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either assigns blame, uses passive-aggressive framing, or reads like a clinical incident report rather than a human reflection.",
          observation:
            "If the document includes phrases like 'certain team members' or 'communication breakdowns' without emotional context, it has lost David's supportive intent.",
          coachingTip:
            "Rewrite with this principle: every sentence should be something every team member would nod along to. If anyone would feel defensive reading it, soften the framing.",
          styleContext:
            "Supportive communicators believe retrospective documents should strengthen the team, not document its failures. If the summary makes the team feel worse, it has failed.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (310-312) - negotiation
  // ============================================

  // Scenario 310 - Rachel Finch, negotiation, foundation
  {
    id: "scenario-310",
    title: "The Software Licence Renewal",
    context:
      "Rachel is leading the negotiation to renew a software licence agreement. The vendor has proposed a 20% price increase. Rachel has spent the past week analysing usage data, market comparisons, and contract terms before the meeting.",
    chooseContext:
      "Rachel has presented her analysis showing that the team only uses 60% of the licensed features. The vendor is pushing back, arguing that the full suite provides strategic value even if not every feature is used daily.",
    rewriteContext:
      "Rachel has asked you to draft a counter-proposal email to the vendor, structured around the usage data, with a clear rationale for each term you are proposing.",
    characterId: "rachel-finch",
    dialogue:
      "I have run the numbers. We use 14 of the 23 features in the enterprise licence. The remaining nine were accessed fewer than ten times across the whole team last quarter. I am not paying a 20% premium for functionality we do not use. My proposal is a tiered licence at the current rate, covering the 14 features we actually need.",
    chooseDialogue:
      "Strategic value is a qualitative argument. I need a quantitative one. Show me the adoption curve for the unused features across your other enterprise clients. If 80% of comparable organisations grow into those features within two years, I will consider the full suite. Otherwise, we are renegotiating scope.",
    rewriteDialogue:
      "The counter-proposal needs three sections. Section one: usage data showing which features we actively use. Section two: market comparison with two alternative vendors at equivalent capability. Section three: our proposed terms with a line-by-line rationale. No opinion, just evidence.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has prepared detailed usage data, market comparisons, and feature-by-feature analysis to counter a vendor's price increase. She demands quantitative justification for the vendor's position. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel leads with data, demands evidence from the vendor, and structures her negotiation around quantitative analysis. Every position is backed by specific numbers. This is analytical communication.",
          observation:
            "Notice how Rachel counters a qualitative argument ('strategic value') by demanding quantitative proof. Analytical communicators do not accept assertions without data.",
          coachingTip:
            "When a negotiator presents detailed usage metrics and demands comparable evidence from the other party, they are communicating analytically. Match their rigour.",
          styleContext:
            "Analytical communicators negotiate by building an evidence base that makes their position logically unavoidable. The data does the persuading.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about what she wants, which can look direct. But notice that her position is built on analysis, not authority. She is not saying 'this is what I want' - she is saying 'this is what the data supports.'",
          observation:
            "A direct negotiator would state their position and apply pressure. Rachel states her position and presents the evidence that justifies it.",
          coachingTip:
            "If someone's negotiation power comes from their analysis rather than their authority, that is analytical. Rachel's leverage is her data, not her rank.",
          styleContext:
            "Analytical communicators believe the strongest negotiating position is the best-researched one. They invest time in preparation so the conversation follows their evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not appealed to the relationship with the vendor, the emotional impact of the price increase, or the team's feelings about the software. Her approach is entirely data-driven.",
          observation:
            "There is no mention of the vendor partnership, mutual respect, or collaborative problem-solving. Rachel treats this as a numerical problem with a numerical solution.",
          coachingTip:
            "Ask yourself: is this person building a relationship or building a case? Rachel is building a case with spreadsheets, usage logs, and market data.",
          styleContext:
            "Analytical communicators in negotiations are often mistaken for being cold. They are not - they simply believe the fairest outcome is the one supported by the best evidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The vendor argues that the unused features have 'strategic value.' Rachel wants quantitative proof. How do you support her position?",
      options: [
        {
          id: "s310-opt-a",
          text: "Rachel is right to ask for data. Could you share adoption rates for these features across your enterprise clients of a similar size? If the trend shows growth, we are open to discussing a phased approach. If not, our usage data stands.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Rachel's analytical approach by requesting specific, comparable data. It keeps the negotiation evidence-based while leaving a structured path forward.",
        },
        {
          id: "s310-opt-b",
          text: "I think there might be features our team has not explored fully. What if we ran a training session on the unused features and reassessed usage in three months?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable idea, but it delays the negotiation and implicitly concedes that the unused features might have value. Rachel wants the vendor to prove that claim, not for your team to test it.",
        },
        {
          id: "s310-opt-c",
          text: "We have had a great relationship with you for years and I would hate to see this become adversarial. Can we find a middle ground that works for both sides?",
          score: 0,
          result: "weak",
          explanation:
            "Appealing to the relationship undermines Rachel's data-driven approach. She has built a case on evidence and inviting a compromise based on feelings disregards that preparation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the counter-proposal email to the vendor with three sections: usage data, market comparison, and proposed terms with rationale. Analytical style - structured, evidence-based, no opinion.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Licence renewal counter-proposal - data-driven terms\n\nSection 1: Usage Analysis (Q4 data)\nOf 23 enterprise features, 14 are actively used (more than 50 sessions per month). The remaining 9 features recorded fewer than 10 total sessions across all users last quarter. Full usage breakdown is attached.\n\nSection 2: Market Comparison\nVendor A offers comparable functionality (13 of our 14 active features) at 85% of your current rate. Vendor B offers a modular licence model at 70% of your current rate for equivalent scope. Both quotes are attached for reference.\n\nSection 3: Proposed Terms\n- Licence scope: 14 active features only, removing 9 unused modules\n- Price: Current rate maintained (no increase), reflecting reduced scope\n- Contract term: 12 months with quarterly usage review\n- Rationale: Our usage data does not support a 20% increase for features we do not use. A scope-matched licence at the current rate reflects fair value for both parties.\n\nWe welcome your response with supporting data for any alternative proposal.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Precisely structured, evidence-based, and free of opinion. Rachel would send this with confidence that every claim is substantiated and every term is justified.",
          observation:
            "You separated data, comparison, and proposal into clean sections. Each point is supported by specific numbers. There is nothing the vendor can dismiss as subjective.",
          coachingTip:
            "Analytical counter-proposals work when the structure is so clear that the vendor has to respond point by point. Your format forces a structured reply.",
          styleContext:
            "Analytical communicators believe that well-structured proposals are harder to reject than well-argued ones. Your structure does the heavy lifting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every claim is backed by a specific number. If any point relies on phrases like 'significantly underused' or 'much cheaper', it is too vague for analytical style.",
          observation:
            "Analytical communicators want to see the exact number, not a characterisation of it. '60% usage' is analytical. 'Low usage' is not.",
          coachingTip:
            "Replace every adjective with a number. 'Underused' becomes 'accessed 7 times in 90 days.' That precision is what makes analytical communication credible.",
          styleContext:
            "Analytical communicators treat vague language as a weakness in a proposal. Every claim should be verifiable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal is either unstructured, opinion-based, or lacks the specific data Rachel requires.",
          observation:
            "If your email includes phrases like 'we feel this is too expensive' or 'in our opinion', it has departed from analytical style. Rachel wants evidence, not sentiment.",
          coachingTip:
            "Remove all opinion and emotion from the proposal. Every sentence should either state a fact or propose a term justified by that fact.",
          styleContext:
            "Analytical communicators see opinion in a negotiation document as a signal that the sender ran out of evidence. Let the data speak.",
        },
      },
    },
  },

  // Scenario 311 - Owen Grant, negotiation, intermediate
  {
    id: "scenario-311",
    title: "The Service Level Agreement Review",
    context:
      "Owen is renegotiating the service level agreement with a logistics partner whose delivery performance has been inconsistent. He has compiled three months of delivery data, penalty calculations, and industry benchmarks to bring to the meeting.",
    chooseContext:
      "The logistics partner has acknowledged the performance issues but is asking for leniency, citing supply chain disruptions beyond their control. Owen is methodically working through the data to separate controllable failures from external factors.",
    rewriteContext:
      "Owen has asked you to draft the revised SLA terms, with each change justified by the performance data and benchmarked against industry standards.",
    characterId: "owen-grant",
    dialogue:
      "I have categorised every late delivery in the past 90 days. Of 847 deliveries, 119 were late. Of those, 73 were within your operational control - routing errors, warehouse delays, driver scheduling. The remaining 46 I have attributed to external factors such as weather and port congestion. My issue is with the 73.",
    chooseDialogue:
      "I understand supply chain disruption is real. That is why I separated the external factors from the internal ones. I am not penalising you for a storm. I am asking you to account for the 73 deliveries where the failure was within your operational control. Here is the breakdown by cause category.",
    rewriteDialogue:
      "The revised SLA should have four sections: performance targets benchmarked against industry median, penalty thresholds adjusted for external events, a reporting cadence so we track this monthly rather than quarterly, and a review trigger if performance drops below 90% for two consecutive months. Justify every change with data from this quarter.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has categorised 119 late deliveries into controllable and uncontrollable factors, separated them by cause, and is negotiating only on the operational failures. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's approach is meticulous - categorising, separating, and benchmarking before drawing conclusions. He negotiates from a position of detailed analysis, not authority or emotion.",
          observation:
            "Notice how Owen distinguishes between 73 controllable failures and 46 external ones. Analytical communicators insist on precision because it makes their argument harder to refute.",
          coachingTip:
            "When a negotiator brings categorised data, separates variables, and benchmarks against industry standards, they are communicating analytically. Meet them with equal precision.",
          styleContext:
            "Analytical communicators believe fairness in negotiation comes from accuracy. Owen is not trying to punish the partner - he is trying to measure them accurately.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is firm about holding the partner accountable, which can look direct. But his firmness comes from the thoroughness of his analysis, not from asserting authority.",
          observation:
            "A direct negotiator might say 'your performance is unacceptable, fix it.' Owen says 'here are the specific instances where your performance was below standard, categorised by cause.'",
          coachingTip:
            "If someone's negotiation leverage comes from the depth of their research rather than the strength of their position, that is analytical.",
          styleContext:
            "Analytical communicators earn credibility through preparation. When they present findings this detailed, the other party knows they have done their homework.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on the relationship with the partner, how the team feels about the delivery failures, or the emotional impact of poor service. The conversation is entirely data-driven.",
          observation:
            "There is no acknowledgement of the partner's feelings, no expression of disappointment, and no appeal to shared values. Owen is operating in spreadsheet mode.",
          coachingTip:
            "Ask yourself: is this person navigating feelings or navigating data? Owen is navigating data with surgical precision.",
          styleContext:
            "Analytical communicators in negotiations can seem impersonal, but they see precision as the ultimate form of fairness. The data treats everyone equally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The logistics partner is asking for leniency, citing supply chain disruptions. Owen has already separated controllable from uncontrollable factors. How do you respond?",
      options: [
        {
          id: "s311-opt-a",
          text: "Owen has already accounted for external factors in his analysis. The 73 controllable failures are the ones we need to address. Could you walk us through what corrective actions you have taken on routing errors and warehouse delays specifically?",
          score: 10,
          result: "strong",
          explanation:
            "This validates Owen's analytical separation and moves the conversation to the specific operational categories. It asks for evidence-based responses from the partner, matching the analytical register.",
        },
        {
          id: "s311-opt-b",
          text: "We appreciate your transparency about the challenges. Perhaps we could set a grace period while the supply chain stabilises and then reassess the targets.",
          score: 5,
          result: "partial",
          explanation:
            "Empathetic but imprecise. Owen has already separated the external factors. Offering a blanket grace period ignores the analytical distinction he carefully made.",
        },
        {
          id: "s311-opt-c",
          text: "Look, 119 late deliveries in 90 days is not good enough. We need to see immediate improvement or we will be looking at alternative providers.",
          score: 0,
          result: "weak",
          explanation:
            "This is a direct-style ultimatum that ignores Owen's careful analysis. He specifically separated controllable from uncontrollable failures, and this response conflates them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the revised SLA with four sections: performance targets, penalty thresholds, reporting cadence, and review triggers. Each section must be justified by this quarter's data. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Revised Service Level Agreement - Effective Q2 2026\n\nSection 1: Performance Targets\n- On-time delivery target: 95% (up from 91% current). Industry median for comparable logistics partners is 96.2% (source: Logistics Performance Index 2025). The 95% target represents a step toward median, accounting for our specific delivery complexity.\n\nSection 2: Penalty Thresholds\n- Penalties apply only to controllable failures, defined as routing errors, warehouse delays, and driver scheduling issues.\n- External factors (weather events, port congestion, regulatory holds) are excluded, provided they are reported within 24 hours with supporting evidence.\n- Penalty rate: 0.5% of monthly fee per percentage point below the 95% target.\n\nSection 3: Reporting Cadence\n- Monthly performance report due by the 5th working day of each month (previously quarterly).\n- Report must include total deliveries, on-time percentage, late delivery categorisation by cause, and corrective actions taken.\n\nSection 4: Review Triggers\n- If controllable on-time performance falls below 90% for two consecutive months, a formal review meeting is triggered within 10 working days.\n- The review will assess root causes, corrective action effectiveness, and whether the partnership remains viable.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Precisely structured, every term is data-justified, and the distinction between controllable and external factors is maintained throughout. Owen would approve this without revision.",
          observation:
            "You benchmarked against industry data, specified exact thresholds, and built in fair exclusions for external events. This is analytical negotiation at its best.",
          coachingTip:
            "Analytical SLAs work when both parties can audit the terms against the data. Your document passes that test - every number is traceable.",
          styleContext:
            "Analytical communicators see SLAs as living documents that should be as precise as the data that informs them. Vague commitments are not commitments at all.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every term has a specific justification. If any section relies on phrases like 'improved performance' without a target number, it is too vague.",
          observation:
            "Analytical SLAs fail when they use qualitative language where quantitative language is needed. 'Better reporting' should be 'monthly reports by the 5th working day.'",
          coachingTip:
            "For each term, ask: could this be audited? If someone could argue about what 'improved' means, replace it with a number.",
          styleContext:
            "Analytical communicators design agreements that remove subjectivity. If a term can be interpreted two ways, it needs to be more specific.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your SLA is either unstructured, lacks specific data justification, or uses vague language that Owen would find unacceptable in a formal agreement.",
          observation:
            "If your document includes phrases like 'we expect better performance' or 'regular reporting', it is not analytical. Owen wants exact targets, exact timelines, and exact consequences.",
          coachingTip:
            "Replace every instance of 'better', 'more', 'regular', or 'improved' with a specific number, date, or threshold.",
          styleContext:
            "Analytical communicators believe that vague SLAs create more conflict than they prevent. Precision is protection for both parties.",
        },
      },
    },
  },

  // Scenario 312 - Fiona Banks, negotiation, advanced
  {
    id: "scenario-312",
    title: "The Partnership Terms Restructure",
    context:
      "Fiona is leading negotiations to restructure a revenue-sharing partnership with a consulting firm. The current 50-50 split no longer reflects the actual contribution of each party. Fiona has built a detailed contribution model tracking hours, deliverables, and client revenue attribution over 18 months.",
    chooseContext:
      "The consulting firm's negotiator has proposed keeping the 50-50 split but adding a performance bonus layer. Fiona is systematically dismantling the proposal by showing that the bonus structure would still misallocate revenue relative to actual contribution.",
    rewriteContext:
      "Fiona has asked you to draft the revised partnership terms with a contribution-weighted revenue model, complete with the methodology, data sources, and worked examples.",
    characterId: "fiona-banks",
    dialogue:
      "I have tracked every hour, every deliverable, and every pound of attributable revenue for 18 months. Our team delivered 67% of the billable hours and originated 72% of the new client revenue. A 50-50 split was fair when we started, but the data no longer supports it. I am proposing a contribution-weighted model recalculated quarterly.",
    chooseDialogue:
      "A performance bonus on top of 50-50 does not solve the structural problem. Let me show you why. If we apply your proposed bonus thresholds to the past six quarters, our effective share rises to 54%. But our contribution-weighted share should be 67%. The bonus closes a third of the gap. I need a model that closes all of it.",
    rewriteDialogue:
      "The revised terms document needs to be watertight. Include the contribution methodology - how we weight hours, deliverables, and revenue attribution. Include the data sources and the formula. Then show three worked examples using real data from the past 18 months. If the consulting firm's analysts cannot find a flaw, we have done our job.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has built an 18-month contribution model tracking hours, deliverables, and revenue attribution to argue against a 50-50 split. She dismantles a counter-proposal with specific calculations. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's negotiation is built entirely on longitudinal data analysis, contribution modelling, and mathematical proof. She does not assert her position - she demonstrates it with evidence.",
          observation:
            "Notice how Fiona does not just reject the bonus proposal - she applies it to historical data to prove it falls short. Analytical communicators test counter-proposals against the evidence before responding.",
          coachingTip:
            "When a negotiator builds models, runs historical scenarios, and presents worked examples to make their case, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators at this level do not argue - they prove. The negotiation becomes a mathematical discussion where the strongest evidence determines the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive about what she wants, which can look direct. But her assertiveness is earned through analysis, not assumed through authority. She shows the workings, not just the conclusion.",
          observation:
            "A direct negotiator would state '67% is our share, take it or leave it.' Fiona shows why 67% is the right number through 18 months of data, inviting the other party to challenge the methodology.",
          coachingTip:
            "If someone invites scrutiny of their reasoning ('if the analysts cannot find a flaw'), that is analytical. Direct communicators do not invite challenges - they issue positions.",
          styleContext:
            "Analytical communicators gain confidence from the rigour of their analysis. They welcome scrutiny because they trust their data.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not appealed to fairness, partnership values, or the emotional history of the collaboration. Her case is built on contribution data and mathematical modelling.",
          observation:
            "There is no mention of trust, goodwill, or shared vision. Fiona treats the partnership terms as a mathematical problem with a provable solution.",
          coachingTip:
            "Ask yourself: is this person appealing to values or to evidence? Fiona is building a mathematical case that the current split is objectively wrong.",
          styleContext:
            "Analytical communicators believe the fairest negotiation is the most accurate one. If the data shows 67%, then 50% is not a compromise - it is an error.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The consulting firm proposes a bonus layer on the 50-50 split. Fiona has shown it only closes a third of the gap. How do you respond?",
      options: [
        {
          id: "s312-opt-a",
          text: "Fiona's analysis is clear. The bonus model still leaves a 13-point gap between our contribution and our share. Could we explore a base split that reflects the weighted contribution, with the bonus layer applied on top for exceptional performance?",
          score: 10,
          result: "strong",
          explanation:
            "This builds on Fiona's data, names the specific gap, and proposes a structure that addresses the root issue. It advances the negotiation analytically.",
        },
        {
          id: "s312-opt-b",
          text: "I think the bonus approach shows goodwill from their side. Maybe we can negotiate the bonus thresholds upward to close more of the gap without restructuring the base split.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the partner's effort but accepts a structural flaw that Fiona has already identified. Adjusting bonus thresholds is optimising the wrong variable.",
        },
        {
          id: "s312-opt-c",
          text: "We have worked together for years and a few percentage points should not damage a strong partnership. Let us find a number we are both comfortable with and move on.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing 'a few percentage points' ignores the data Fiona has spent 18 months building. For an analytical communicator, those points represent real, measurable misallocation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the revised partnership terms with a contribution-weighted revenue model. Include the methodology, data sources, formula, and three worked examples. Analytical style - no opinion, no vagueness.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Revised Partnership Terms - Contribution-Weighted Revenue Model\n\n1. Methodology\nRevenue share is calculated quarterly using a weighted contribution score comprising:\n- Billable hours delivered (weight: 40%)\n- Deliverables completed (weight: 30%)\n- New client revenue originated (weight: 30%)\nEach party's contribution score determines their percentage of revenue for that quarter.\n\n2. Data Sources\n- Billable hours: Project management system (Harvest), exported monthly\n- Deliverables: Client sign-off log, tracked per project\n- Revenue attribution: CRM (Salesforce), client origination field\n\n3. Formula\nParty A share = (A billable hours / total hours x 0.4) + (A deliverables / total deliverables x 0.3) + (A originated revenue / total revenue x 0.3)\n\n4. Worked Examples\n\nQ3 2025:\n- Our billable hours: 1,240 of 1,850 total (67%). Weighted: 26.8%\n- Our deliverables: 34 of 52 total (65%). Weighted: 19.6%\n- Our originated revenue: 380k of 520k total (73%). Weighted: 21.9%\n- Our total share: 68.3%. Partner share: 31.7%\n\nQ4 2025:\n- Our billable hours: 1,180 of 1,790 total (66%). Weighted: 26.4%\n- Our deliverables: 31 of 48 total (65%). Weighted: 19.4%\n- Our originated revenue: 410k of 580k total (71%). Weighted: 21.2%\n- Our total share: 67.0%. Partner share: 33.0%\n\nQ1 2026:\n- Our billable hours: 1,310 of 1,920 total (68%). Weighted: 27.3%\n- Our deliverables: 38 of 56 total (68%). Weighted: 20.4%\n- Our originated revenue: 420k of 590k total (71%). Weighted: 21.4%\n- Our total share: 69.1%. Partner share: 30.9%\n\nAverage across three quarters: Our share 68.1%, Partner share 31.9%.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is analytical negotiation documentation at the highest level. Every term is defined, every number is traceable, and the worked examples prove the model using real data.",
          observation:
            "You made the methodology transparent, the data sources verifiable, and the formula replicable. The consulting firm's analysts can audit every number, which is exactly what Fiona wanted.",
          coachingTip:
            "The best analytical proposals invite scrutiny. If the other party can run your formula and get the same numbers, the argument makes itself.",
          styleContext:
            "Analytical communicators at this level create documents that function as mathematical proofs. The conclusion is not an opinion - it is an output of the model.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every component is fully specified. If the weighting rationale is missing, or the data sources are not named, the model has gaps an analyst would flag.",
          observation:
            "Analytical documents at this level need to be reproducible. If someone cannot replicate your calculation from the information provided, add more detail.",
          coachingTip:
            "Test your document by asking: could an external auditor verify these numbers? If any step requires assumptions you have not stated, make them explicit.",
          styleContext:
            "Analytical communicators judge proposals by their auditability. If a number cannot be traced back to a source, it is not evidence - it is an assertion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document lacks the precision, structure, or worked examples Fiona requires. An analytical negotiator needs a document that functions as mathematical proof.",
          observation:
            "If your proposal uses round numbers without source data, describes the methodology in general terms, or omits worked examples, it will not meet Fiona's standard.",
          coachingTip:
            "Start with the formula, then show it working with real numbers from three different quarters. If the pattern is consistent, the model proves itself.",
          styleContext:
            "Analytical communicators see proposals without worked examples as untested hypotheses. The examples are not illustrations - they are proof.",
        },
      },
    },
  },
];
