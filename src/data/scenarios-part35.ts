import { Scenario } from "@/types";

export const SCENARIOS_PART35: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (409-411) - Sales
  // ============================================

  // Scenario 409 - Jordan Cole, sales, foundation
  {
    id: "scenario-409",
    title: "Closing the Quarter",
    context:
      "Your sales team is reviewing pipeline numbers on the last day of the quarter. Jordan Cole has called a quick stand-up to address a deal that has been sitting in the pipeline for six weeks without movement.",
    chooseContext:
      "Jordan has turned to you and asked how you plan to close the stalled deal before end of day. The rest of the team is watching.",
    rewriteContext:
      "Jordan has asked you to draft a message to the prospect making a final push to close the deal today. He wants it sent within the hour.",
    characterId: "jordan-cole",
    dialogue:
      "This deal has been sitting there for six weeks. Six. I need a yes or a no from that prospect by five o'clock today. What is your plan to make that happen?",
    chooseDialogue:
      "Stop updating the CRM and start picking up the phone. I want a decision from them today - not a maybe, not a call-back request. A decision.",
    rewriteDialogue:
      "Write to them now. Be straight. Tell them the offer closes today and ask them to confirm or walk away. No fluff.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has demanded that you get a definitive answer from the prospect by end of day. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan's urgency, insistence on a binary outcome, and impatience with delay are classic direct communicator behaviours.",
          observation:
            "Notice that Jordan did not ask for a pipeline analysis or a detailed account review. He wants action and a result - today.",
          coachingTip:
            "When someone demands a yes-or-no outcome on a tight deadline, they are almost certainly operating in a direct style.",
          styleContext:
            "Direct communicators in sales environments focus relentlessly on closing. Open-ended timelines frustrate them deeply.",
        },
        partial: {
          result: "partial",
          explanation:
            "Not quite. An analytical communicator might also be frustrated by a stalled deal, but they would ask for data on why it stalled and what the conversion probability is. Jordan wants action, not analysis.",
          observation:
            "Jordan did not request a review of the deal's history or ask for a forecast update. He wants the phone picked up now.",
          coachingTip:
            "Analytical communicators ask why. Direct communicators ask when. Jordan is clearly asking when.",
          styleContext:
            "Both direct and analytical styles are task-focused, but direct communicators prioritise speed of decision over depth of understanding.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not match. Jordan showed no interest in how the prospect feels, no desire to build rapport, and no concern for team morale. His focus is entirely on the outcome.",
          observation:
            "There is no collaborative language, no warmth, and no invitation for the team to share their feelings about the situation.",
          coachingTip:
            "Ask yourself: is this person focused on results, ideas, people, or process? Jordan is laser-focused on results.",
          styleContext:
            "Direct communicators can seem blunt in sales settings, but their goal is momentum. They see unresolved deals as wasted energy.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants you to close the stalled deal today. How do you respond?",
      options: [
        {
          id: "s409-opt-a",
          text: "I will call at two, offer the discount if they sign today, and move them out of the pipeline if they cannot. You will have an answer by four.",
          score: 10,
          result: "strong",
          explanation:
            "Specific, time-bound, and action-oriented. You have matched Jordan's direct style by committing to a concrete plan with a clear deadline.",
        },
        {
          id: "s409-opt-b",
          text: "I think we should probably try reaching out again and see where they are at. I will send an email and follow up if I hear back.",
          score: 5,
          result: "partial",
          explanation:
            "This is too passive for a direct communicator. Phrases like 'probably' and 'see where they are at' lack the commitment Jordan is looking for.",
        },
        {
          id: "s409-opt-c",
          text: "I'd rather not pressure them. Pushing too hard could damage the relationship, and I think we should give them another week to think it over.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Jordan's instruction. He asked for a decision today, and you are proposing more delay. This will significantly frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a message to the prospect pushing for a same-day decision. Write it in a style that matches Jordan's direct communication preferences.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Hi Sarah - the pricing we discussed is available until close of business today. I need a confirmed yes or no by 5pm so we can finalise the contract or release the allocation. Can you confirm your decision this afternoon?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your message is clear, time-bound, and asks for a specific commitment. Jordan would approve of this approach.",
          observation:
            "You avoided hedging language and made the deadline unmistakable. That is exactly what a direct communicator wants to see.",
          coachingTip:
            "In sales communications for direct stakeholders, always lead with the deadline and the ask. Background can come later if needed.",
          styleContext:
            "Direct communicators believe that clear deadlines help prospects make faster decisions. Ambiguity slows everything down.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right intent but lacks the urgency and specificity Jordan expects. Tighten the language and make the deadline explicit.",
          observation:
            "Look for places where you used softening language or left the timeline open-ended. Direct communicators need precision.",
          coachingTip:
            "Replace phrases like 'when you get a chance' or 'at your convenience' with specific times and dates.",
          styleContext:
            "Direct communicators interpret vague timelines as lack of confidence. Be specific to be credible.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads more like relationship maintenance than a closing communication. Jordan asked for a push, not a check-in.",
          observation:
            "The prospect needs to feel the urgency of the deadline. Without it, they have no reason to act today.",
          coachingTip:
            "Rewrite with this structure: state the offer, state the deadline, ask for the decision. Three sentences maximum.",
          styleContext:
            "Direct communicators see every interaction as an opportunity to move toward a decision. Make sure your message does the same.",
        },
      },
    },
  },

  // Scenario 410 - Sam Hartley, sales, intermediate
  {
    id: "scenario-410",
    title: "The Competitor Pivot",
    context:
      "You are midway through a sales presentation to a potential enterprise client. Sam Hartley, your sales director, is sitting in. The prospect has just mentioned they received a lower quote from a competitor.",
    chooseContext:
      "Sam has jumped in and addressed the competitor comparison head-on. He now expects you to follow his lead and reinforce the value proposition without backtracking.",
    rewriteContext:
      "After the meeting, Sam wants you to send a follow-up email to the prospect that addresses the competitor comparison directly and positions your offer as the stronger choice.",
    characterId: "sam-hartley",
    dialogue:
      "A lower quote does not mean a better deal. Let me be blunt - if their solution fails in month three, that saving disappears overnight. Tell them what our uptime guarantee is worth in real money.",
    chooseDialogue:
      "Don't apologise for our pricing. Own it. Show them the total cost of ownership and make it impossible to ignore the difference.",
    rewriteDialogue:
      "Send the follow-up tonight. Lead with the ROI comparison. I want them reading it before their next internal meeting.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam has responded to the competitor comparison by challenging the prospect's assumption about value. Which communication style is Sam using?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Sam confronted the competitor comparison head-on, used strong language, and focused on winning the argument rather than exploring it. That is classic direct behaviour.",
          observation:
            "Sam did not say 'let me pull together some data on that' - he made a bold claim and expected you to back it up immediately.",
          coachingTip:
            "Direct communicators respond to competitive threats with assertion, not analysis. They want to control the narrative.",
          styleContext:
            "In competitive sales situations, direct communicators see hesitation as weakness. They prefer to confront objections immediately.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An analytical communicator might also challenge a competitor comparison, but they would do so with detailed data and structured evidence. Sam used conviction and force of argument instead.",
          observation:
            "Notice Sam did not ask for a spreadsheet or a feature comparison. He made a statement and expected agreement.",
          coachingTip:
            "The difference: analytical communicators prove with data. Direct communicators assert with confidence. Sam is asserting.",
          styleContext:
            "Both styles can handle objections effectively, but their methods differ. Direct communicators rely on bold statements; analytical communicators rely on detailed evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Sam showed no interest in building rapport with the prospect or making them feel comfortable. His approach was confrontational and outcome-driven.",
          observation:
            "Sam used the word 'blunt' deliberately. That is a signal of directness, not warmth or collaboration.",
          coachingTip:
            "Look at the emotional tone of the response. Sam is challenging, not empathising. That rules out people-focused styles.",
          styleContext:
            "Direct communicators see competitive selling as a contest. Their goal is to win the argument, not nurture the relationship.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has told you to own the pricing and show the prospect the total cost of ownership. How do you respond in the meeting?",
      options: [
        {
          id: "s410-opt-a",
          text: "Our platform costs more upfront, but you get 99.9% uptime with a financial guarantee. One day of downtime costs you 40K. Over three years, our solution saves you 120K. That is the real comparison.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Sam's approach by owning the price difference and reframing it with concrete numbers. This is exactly the kind of confident response a direct communicator expects.",
        },
        {
          id: "s410-opt-b",
          text: "That is a fair point about the pricing. I would love to sit down after this and walk through a more detailed comparison so you can see where the differences are.",
          score: 5,
          result: "partial",
          explanation:
            "You acknowledged the objection but deferred the argument. Sam wanted you to handle it now, in the room. Delaying weakens the position in a direct communicator's view.",
        },
        {
          id: "s410-opt-c",
          text: "I completely understand your concern about pricing, and I want to make sure you feel comfortable with whatever decision you make. There is no pressure from our side.",
          score: 0,
          result: "weak",
          explanation:
            "This is the opposite of what Sam instructed. He told you to own the pricing, not back away from it. This response undermines the assertive position Sam established.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the follow-up email Sam requested, leading with the ROI comparison and making a confident case for your solution over the competitor. Keep it direct and outcome-focused.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Hi David - following today's meeting, here is the comparison that matters. Our solution costs 18% more upfront but delivers 99.9% guaranteed uptime. Based on your transaction volume, a single day of downtime costs you 40K. Over three years, that uptime guarantee saves you 120K net. The competitor's quote does not include that protection. I have attached the full cost-of-ownership breakdown. Let me know if you want to move forward this week.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with the value argument, uses specific numbers, and closes with a call to action. Sam would send this without changes.",
          observation:
            "You avoided apologetic language and kept the focus on outcomes. That is how direct communicators build credibility in writing.",
          coachingTip:
            "When writing for direct stakeholders in competitive situations, always reframe cost as investment and close with a next step.",
          styleContext:
            "Direct communicators believe that confident follow-ups win deals. Hesitation in writing signals hesitation in delivery.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email makes the right points but could be sharper. Remove any hedging language and make the numbers more prominent.",
          observation:
            "Look for phrases that soften your position. Words like 'might', 'perhaps', or 'I think' weaken the argument for a direct reader.",
          coachingTip:
            "Put your strongest number in the first sentence. Direct communicators scan emails from the top - make the top count.",
          styleContext:
            "Direct communicators judge follow-up emails by whether they advance the deal. Every sentence should push toward a decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email does not lead with the ROI comparison and lacks the assertive tone Sam requested. It reads more like a thank-you note than a competitive positioning piece.",
          observation:
            "Sam specifically asked you to lead with the ROI comparison. If it is not in the first two sentences, you have missed the brief.",
          coachingTip:
            "Restructure: open with the savings number, back it up with the guarantee, close with a decision request. Skip pleasantries.",
          styleContext:
            "In direct communication, every email after a competitive meeting should strengthen your position. Neutral emails are missed opportunities.",
        },
      },
    },
  },

  // Scenario 411 - Alex Tran, sales, advanced
  {
    id: "scenario-411",
    title: "Walking Away from the Table",
    context:
      "You are in a tense negotiation with a major account that keeps demanding additional discounts. Alex Tran, your commercial lead, has been watching the back-and-forth with visible frustration. She steps in during a break.",
    chooseContext:
      "Alex has told you she is prepared to walk away from the deal if the client pushes for another discount. She wants you to go back into the room and hold the line.",
    rewriteContext:
      "The client has requested a final meeting to 'discuss terms'. Alex wants you to send a pre-meeting message that sets firm boundaries before anyone sits down.",
    characterId: "alex-tran",
    dialogue:
      "We have discounted three times already. Three. If they ask again, tell them the price is the price and we are happy to part ways. I would rather lose the deal than set a precedent we will regret for years.",
    chooseDialogue:
      "Go back in there and hold the line. If they push, remind them what happens when they go with a cheaper provider - they end up calling us anyway, and that costs more.",
    rewriteDialogue:
      "Send them something before the meeting. Make it clear that the terms on the table are final. I do not want them walking in thinking there is room to negotiate.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has told you she would rather lose the deal than discount further. Which communication style is Alex demonstrating?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's willingness to walk away, her frustration with repeated concessions, and her focus on holding a firm position are all direct communicator traits.",
          observation:
            "Alex framed this as a precedent issue, not a data issue. She is making a strategic decision based on conviction, not calculation.",
          coachingTip:
            "Direct communicators often draw hard lines in negotiations. They see ongoing concessions as a sign of weakness that damages long-term positioning.",
          styleContext:
            "In sales negotiations, direct communicators value respect and firm boundaries. They believe that walking away can be the strongest move.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but an analytical communicator would frame this differently. They would present the margin data and explain why a further discount is commercially unsustainable. Alex is making a gut-level call backed by principle.",
          observation:
            "Alex did not cite margin percentages or breakeven analysis. She said 'the price is the price' - that is assertion, not analysis.",
          coachingTip:
            "Analytical communicators justify decisions with data. Direct communicators justify decisions with conviction. Listen for which one dominates.",
          styleContext:
            "Both styles can reach the same conclusion in a negotiation, but the reasoning style differs. Direct communicators lead with certainty; analytical communicators lead with evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not fit. Alex showed no interest in preserving the relationship for its own sake or in making the client feel valued. Her priority is commercial discipline.",
          observation:
            "The language Alex used - 'the price is the price', 'happy to part ways' - is confrontational and boundary-setting, not relationship-building.",
          coachingTip:
            "Look at what the person is protecting. Alex is protecting margin and precedent, not the relationship. That is a task-focused, direct approach.",
          styleContext:
            "Direct communicators in negotiations are comfortable with tension. They see it as part of the process, not something to avoid.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "You are going back into the negotiation room after Alex told you to hold the line. The client opens by asking for a further 5% discount. How do you respond?",
      options: [
        {
          id: "s411-opt-a",
          text: "This is our best and final offer. We have already applied three reductions totalling 22%. If this works, we sign today. If not, I understand and we part on good terms.",
          score: 10,
          result: "strong",
          explanation:
            "You held the line exactly as Alex instructed while remaining professional. The response is firm, factual, and leaves no ambiguity about your position. This is advanced direct communication.",
        },
        {
          id: "s411-opt-b",
          text: "I hear you on the pricing. Let me take that back to my team and see if there is anything we can do. I want to make this work for both sides.",
          score: 5,
          result: "partial",
          explanation:
            "This sounds reasonable, but Alex explicitly told you not to leave room for further negotiation. Going back to 'see what we can do' undermines the firm boundary she set.",
        },
        {
          id: "s411-opt-c",
          text: "I really value this partnership and want to find a way to make everyone happy. Let me see what creative options we might have - maybe we can restructure the payment terms or add some extras to bridge the gap.",
          score: 0,
          result: "weak",
          explanation:
            "This completely ignores Alex's instruction. You are reopening negotiation on terms she closed. A direct communicator would see this as a failure to hold your position.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the pre-meeting message Alex requested that makes it clear the current terms are final. Be firm and professional, matching Alex's direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Hi Karen - ahead of Friday's meeting, I want to confirm our position. The terms and pricing in our current proposal are final. We have applied all available reductions and are not in a position to discount further. Friday's meeting should focus on agreeing the implementation timeline and contract details. If the current terms do not work for your team, we understand and are happy to discuss that honestly. Looking forward to speaking on Friday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your message sets firm boundaries while keeping the door open for a constructive meeting. Alex would approve - you have removed any expectation of further discounting before anyone sits down.",
          observation:
            "You managed to be firm without being aggressive. That is the mark of skilled direct communication at an advanced level.",
          coachingTip:
            "Pre-meeting boundary-setting is a powerful direct communication technique. It prevents wasted time and sets expectations clearly.",
          styleContext:
            "Direct communicators believe that ambiguity before a meeting leads to unproductive meetings. Clear pre-framing saves everyone's time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message hints at firm terms but leaves enough ambiguity that the client might still expect room to negotiate. Tighten the language.",
          observation:
            "Look for any phrasing that could be interpreted as flexibility. Words like 'hope to find a solution' or 'open to discussion' may undermine the boundary Alex wants set.",
          coachingTip:
            "Be explicit: state that the terms are final. Do not imply it - say it.",
          styleContext:
            "In direct communication, what you do not say is as important as what you say. Leaving gaps invites negotiation you do not want.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message does not set the boundary Alex requested. It reads as an invitation to continue negotiating, which is the opposite of the brief.",
          observation:
            "Alex said 'make it clear the terms are final'. If your message does not contain that statement or its equivalent, it has missed the mark.",
          coachingTip:
            "Rewrite with one clear sentence: the terms are final. Build everything else around that anchor statement.",
          styleContext:
            "Direct communicators need their written communications to match their verbal firmness. A soft email after a hard conversation sends mixed signals.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (412-414) - Client
  // ============================================

  // Scenario 412 - Priya Sharma, client, foundation
  {
    id: "scenario-412",
    title: "The Welcome Call",
    context:
      "You are joining a video call to welcome a new client who has just signed with your agency. Priya Sharma, the client relationship manager, is leading the call. She opens with visible enthusiasm.",
    chooseContext:
      "Priya has introduced you to the client and is now asking you to share your excitement about the project and what you envision for the partnership.",
    rewriteContext:
      "Priya has asked you to draft a welcome message to the client's wider team, setting the tone for the relationship ahead.",
    characterId: "priya-sharma",
    dialogue:
      "I am so thrilled to finally get this kicked off. I have been thinking about this all week and I have about a dozen ideas I want to run past you. But first - tell me what you are most excited about. I want to hear your vision.",
    chooseDialogue:
      "Your turn - tell them what got you excited when you first saw the brief. Let them feel that energy. This is the moment where we set the tone for everything that follows.",
    rewriteDialogue:
      "Write something that makes them feel like they chose the right partner. Make it warm, make it personal, and give them a taste of what is coming.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "client",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya opened the client welcome call with visible enthusiasm and asked the client to share their vision. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Priya's enthusiasm, her desire to share ideas immediately, and her focus on vision and excitement are hallmarks of an expressive communicator.",
          observation:
            "Notice how Priya talked about having 'a dozen ideas' and wanting to hear the client's 'vision'. Expressive communicators think in big pictures and possibilities.",
          coachingTip:
            "When someone opens a conversation with energy, ideas, and future-focused language, you are likely dealing with an expressive communicator.",
          styleContext:
            "Expressive communicators use onboarding moments to build emotional investment. They want everyone to feel the potential of what is ahead.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but not quite. A supportive communicator would also be warm in a welcome setting, but they would focus more on making the client feel safe and heard rather than sharing a dozen ideas and talking about vision.",
          observation:
            "Priya is leading with energy and creativity, not with reassurance and care. That is the expressive difference.",
          coachingTip:
            "Supportive communicators ask 'how are you feeling?' Expressive communicators ask 'what are you excited about?' Listen for the difference.",
          styleContext:
            "Both expressive and supportive styles are people-focused, but expressive communicators bring energy and ideas, while supportive communicators bring calm and safety.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Priya showed no interest in data, process, timelines, or bottom-line results. Her entire focus was on enthusiasm, ideas, and connection.",
          observation:
            "There were no numbers, no deadlines, and no structured agenda. This is relationship and energy-driven communication.",
          coachingTip:
            "Ask yourself: is this person leading with results, ideas, support, or analysis? Priya is clearly leading with ideas and enthusiasm.",
          styleContext:
            "Expressive communicators see client relationships as creative partnerships. The first meeting is about inspiration, not logistics.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has asked you to share what excited you about the brief with the new client. How do you respond?",
      options: [
        {
          id: "s412-opt-a",
          text: "The moment I read your brief I started sketching ideas. Your brand has so much potential and I cannot wait to explore what we build together. This is going to be special.",
          score: 10,
          result: "strong",
          explanation:
            "Warm, forward-looking, and full of genuine enthusiasm. You matched Priya's expressive energy and made the client feel valued. This is exactly the tone she wanted.",
        },
        {
          id: "s412-opt-b",
          text: "Thanks, Priya. I thought the brief was solid. We have some good ideas and I look forward to getting started on the deliverables.",
          score: 5,
          result: "partial",
          explanation:
            "Polite but flat. Priya asked you to share excitement and energy, and this response is functional rather than inspiring. An expressive communicator would want more warmth and vision.",
        },
        {
          id: "s412-opt-c",
          text: "I have reviewed the brief and put together a preliminary project plan with timelines and milestones. Shall I share my screen and walk through it?",
          score: 0,
          result: "weak",
          explanation:
            "This completely misreads the moment. Priya set up a relationship-building opportunity and you pivoted to logistics. The expressive communicator wants energy first, plans later.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the welcome message Priya requested for the client's wider team. Make it warm, personal, and forward-looking, matching Priya's expressive communication style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi everyone - we are genuinely delighted to be working with you. From the very first conversation, it was clear that your team brings a level of ambition and creativity that we find truly inspiring. We have already started brainstorming ideas and we cannot wait to share them with you. This is the beginning of something exciting, and we want every one of you to feel part of it. Here is to a brilliant partnership.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your message radiates warmth and excitement. It makes the client's team feel valued and builds anticipation for what is ahead. Priya would love this.",
          observation:
            "You used inclusive language and forward-looking phrasing, which are key traits of expressive communication in writing.",
          coachingTip:
            "When writing for expressive communicators, lead with feeling and vision. Facts and logistics can follow in a separate message.",
          styleContext:
            "Expressive communicators believe that the first message to a new team sets the emotional foundation for the entire relationship.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message is professional but lacks the warmth and personal touch Priya asked for. Try adding more forward-looking language and genuine enthusiasm.",
          observation:
            "Look for places where you defaulted to formal or functional language. Replace them with something that conveys excitement and connection.",
          coachingTip:
            "Imagine you are writing to a friend about a project you genuinely love. That is the warmth level Priya is looking for.",
          styleContext:
            "Expressive communicators want their written communications to feel personal, not corporate. Warmth is more important than polish.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads more like a formal acknowledgement than a warm welcome. Priya specifically asked for something that makes the team feel they chose the right partner.",
          observation:
            "If your message could be sent to any client without changing a word, it is not personal enough for an expressive communicator.",
          coachingTip:
            "Rewrite with specific references to what excited you about this particular client. Generic warmth is not enough - it needs to feel real.",
          styleContext:
            "Expressive communicators value authenticity above formality. A slightly imperfect but genuine message beats a polished but impersonal one.",
        },
      },
    },
  },

  // Scenario 413 - Marcus Webb, client, intermediate
  {
    id: "scenario-413",
    title: "The Creative Pitch",
    context:
      "You are in a client meeting where your team is presenting three creative concepts for an upcoming campaign. Marcus Webb, the creative director, is presenting the concepts and the client seems lukewarm about all three.",
    chooseContext:
      "Marcus has noticed the client's lack of enthusiasm and is now trying to re-engage them by asking what would make them truly excited. He wants you to support his approach.",
    rewriteContext:
      "After the meeting, Marcus wants you to send a message to the client acknowledging their hesitation and proposing a fresh collaborative session to develop the ideas further together.",
    characterId: "marcus-webb",
    dialogue:
      "I can see these haven't quite landed yet, and that is okay - honestly, the best campaigns always come from a bit of creative tension. Tell me this: if we threw the rulebook out, what would you really want to do? Forget the constraints for a moment. Dream big.",
    chooseDialogue:
      "Jump in here and share that idea you mentioned in the prep meeting - the one about the interactive element. The client needs to see what is possible when we think bigger.",
    rewriteDialogue:
      "Write to them and acknowledge that the concepts did not hit the mark. But frame it as an opportunity. Suggest we bring their team into a creative session so we build something together. Make them feel like co-creators, not critics.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus responded to the client's lukewarm reaction by asking them to dream big and forget constraints. Which communication style is Marcus demonstrating?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus reframed the rejection as 'creative tension', invited blue-sky thinking, and used language like 'dream big'. These are textbook expressive communicator moves.",
          observation:
            "Notice how Marcus did not get defensive or retreat to data. He leaned into the energy of the moment and tried to elevate the conversation.",
          coachingTip:
            "Expressive communicators respond to setbacks by raising the energy, not lowering the temperature. They see challenges as creative fuel.",
          styleContext:
            "In client settings, expressive communicators turn criticism into collaboration. They believe the best ideas come from open, energetic dialogue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. A supportive communicator might also try to re-engage a hesitant client, but they would focus on making the client feel safe to share concerns, not on dreaming big and throwing out the rulebook.",
          observation:
            "Marcus is pushing energy upward, not creating a soft landing. That is the expressive signature.",
          coachingTip:
            "Supportive communicators de-escalate. Expressive communicators re-energise. Marcus is doing the latter.",
          styleContext:
            "Both styles care about the client's experience, but they respond to lukewarm reactions differently. Expressive raises the stakes; supportive lowers them.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not match. Marcus showed no interest in timelines, budgets, or structured analysis. His entire response was about creativity, possibility, and engagement.",
          observation:
            "There was no data, no process, and no structured approach. This is idea-driven, energy-driven communication.",
          coachingTip:
            "Focus on what the person values most in the moment. Marcus values creative possibility, not process or precision.",
          styleContext:
            "Expressive communicators see creative presentations as collaborative performances. When the energy dips, they try to lift it, not analyse why it dropped.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants you to share your interactive campaign idea to re-engage the client. How do you present it?",
      options: [
        {
          id: "s413-opt-a",
          text: "Picture this - instead of a static campaign, we make the audience part of the story. They interact, they choose, they create. Your brand becomes something people participate in, not just look at.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Marcus's expressive energy with vivid, future-focused language. You painted a picture rather than listing features, which is exactly how expressive communicators inspire clients.",
        },
        {
          id: "s413-opt-b",
          text: "We did discuss an interactive element in our prep meeting. It would involve user-generated content and social sharing features. I can put together a more detailed proposal if you are interested.",
          score: 5,
          result: "partial",
          explanation:
            "Accurate but flat. Marcus wanted you to bring energy and vision, not a summary. The idea is right but the delivery lacks the expressive spark the moment requires.",
        },
        {
          id: "s413-opt-c",
          text: "Before we go further, I think we should review the campaign metrics from the last quarter to make sure any new direction is grounded in what actually works for your audience.",
          score: 0,
          result: "weak",
          explanation:
            "This kills the creative energy Marcus was building. He asked you to think bigger, and you responded with backward-looking data review. An expressive communicator would find this deflating.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the post-meeting message Marcus described - acknowledge the concepts did not quite land, frame it as an opportunity, and propose a collaborative creative session. Match Marcus's expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Claire - thank you for being so honest in today's session. The fact that the concepts did not fully land is not a problem - it is actually an opportunity. The best work always comes from genuine collaboration, and we would love to bring your team into the creative process. We are proposing a joint brainstorm session where we build the campaign together from the ground up. No slides, no polished decks - just ideas, energy, and the chance to create something you are genuinely proud of. Let us know what day works for your team.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. You turned a potential setback into an invitation for deeper collaboration. The tone is warm, optimistic, and makes the client feel like a partner, not a critic.",
          observation:
            "You reframed the situation positively without being dismissive of the client's concerns. That is skilled expressive communication.",
          coachingTip:
            "Expressive communicators excel at turning 'no' into 'not yet'. When writing recovery messages, always end with a forward-looking action.",
          styleContext:
            "Expressive communicators believe that creative setbacks are normal and necessary. Their writing reflects that philosophy - problems become possibilities.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message acknowledges the situation but does not fully reframe it as an opportunity. Add more forward-looking energy and make the collaborative session sound exciting, not remedial.",
          observation:
            "Check whether your message makes the client feel like they are being invited to something exciting or being offered a fix. The former is expressive; the latter is not.",
          coachingTip:
            "Use language that frames the next step as an upgrade, not a redo. Words like 'build together' and 'create' are stronger than 'revisit' and 'address'.",
          styleContext:
            "Expressive communicators never use language that implies failure. Even when correcting course, they frame it as evolution.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads as an apology rather than an opportunity. Marcus wanted something that makes the client excited about what comes next, not something that dwells on what went wrong.",
          observation:
            "If the dominant emotion in your message is regret, it does not match Marcus's expressive brief. The dominant emotion should be anticipation.",
          coachingTip:
            "Spend one sentence acknowledging today. Spend the rest painting a picture of what is next. That is the expressive ratio.",
          styleContext:
            "Expressive communicators look forward, not backward. Their recovery messages should feel like invitations to a better version of the future.",
        },
      },
    },
  },

  // Scenario 414 - Nina Okafor, client, advanced
  {
    id: "scenario-414",
    title: "The Relationship Rescue",
    context:
      "A long-standing client has expressed frustration with your team's recent performance and hinted they may consider other agencies. Nina Okafor, your client services director, has called an internal meeting to discuss how to re-engage them.",
    chooseContext:
      "Nina has outlined her plan to arrange a face-to-face meeting with the client's leadership team. She wants you to help her present a renewed vision for the partnership.",
    rewriteContext:
      "Nina wants you to write a personal message to the client's CEO requesting a meeting. The message should feel genuine and demonstrate that the relationship matters beyond the contract.",
    characterId: "nina-okafor",
    dialogue:
      "This is not about fixing a service issue. This is about showing them they matter to us. I want them to feel how much we care about this partnership. We need to remind them why they chose us in the first place - it was the relationship, not just the work.",
    chooseDialogue:
      "When we walk into that room, I want them to feel something different. No pitch deck, no metrics, no excuses. Just honest conversation about what this partnership means and where we want to take it together.",
    rewriteDialogue:
      "Write to their CEO. Not a formal letter - something personal. Something that shows we see them as partners, not just a contract number. Make it come from the heart.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "client",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina's approach to the at-risk client focuses on emotional reconnection and reminding them why the relationship matters. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Nina's emphasis on emotional connection, her desire to make the client 'feel something different', and her focus on partnership over process are deeply expressive traits.",
          observation:
            "Nina deliberately rejected pitch decks, metrics, and excuses in favour of honest emotional dialogue. Expressive communicators believe relationships are saved through feeling, not facts.",
          coachingTip:
            "When someone frames a business crisis in emotional rather than operational terms, they are communicating expressively. Follow their lead.",
          styleContext:
            "Expressive communicators in client rescue situations focus on reigniting the emotional bond. They trust that if the relationship is strong, the operational issues can be resolved.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable confusion. A supportive communicator would also prioritise the relationship, but they would focus on reassurance and stability rather than emotional re-engagement and vision. Nina wants to inspire, not just comfort.",
          observation:
            "Nina is not saying 'we will fix this and you do not need to worry'. She is saying 'let me remind you what this partnership could become'. That forward energy is expressive.",
          coachingTip:
            "Supportive communicators stabilise. Expressive communicators re-energise. Nina is choosing to lift the relationship, not just steady it.",
          styleContext:
            "In relationship rescue scenarios, the difference is clear: supportive says 'we are here for you'. Expressive says 'imagine what we could still build together'.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Nina explicitly rejected data, process, and formal presentations. Her entire approach is built on emotional reconnection and creative re-engagement.",
          observation:
            "A task-focused communicator would start with a root cause analysis or an improvement plan. Nina started with 'show them they matter'.",
          coachingTip:
            "When someone dismisses operational solutions in favour of emotional ones, they are operating in a people-focused style. Nina is clearly expressive.",
          styleContext:
            "Expressive communicators believe that the strongest business relationships are built on genuine human connection, not just performance metrics.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "You are about to walk into the client recovery meeting with Nina. She has said no pitch deck, no metrics, no excuses. How do you open your part of the conversation?",
      options: [
        {
          id: "s414-opt-a",
          text: "Before anything else, I want to be honest: this partnership has been one of the most important of my career. I want to understand what has changed and what you need from us - not as a provider, but as a partner who cares about your success.",
          score: 10,
          result: "strong",
          explanation:
            "This is emotionally honest, personal, and focused on the relationship rather than the contract. You matched Nina's vision for the meeting perfectly. This is advanced expressive communication.",
        },
        {
          id: "s414-opt-b",
          text: "We really appreciate your business and want to find a way to continue working together. We have reviewed the areas where we fell short and have some ideas for how to improve. Would you like to hear them?",
          score: 5,
          result: "partial",
          explanation:
            "Professional and well-intentioned, but it still frames the situation operationally. Nina wanted emotional authenticity, not a service improvement pitch. The intent is right but the delivery misses the expressive register.",
        },
        {
          id: "s414-opt-c",
          text: "I have prepared a detailed performance review covering the last six months, along with an improvement plan and revised SLAs. I thought it would be helpful to go through the numbers together.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly what Nina told you not to do. She said no metrics and no pitch deck. This response ignores her instructions and reads the room incorrectly for an expressive-led recovery meeting.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the personal message to the client's CEO that Nina described. It should feel genuine, demonstrate that the relationship matters beyond the contract, and come from the heart. Match Nina's expressive communication style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Dear Rebecca - I wanted to write to you personally, not as a supplier, but as someone who genuinely values what we have built together over the past four years. I know things have not been at their best recently, and I take that seriously - not because of the contract, but because this partnership matters to me personally. I would love the chance to sit down with you over coffee, away from agendas and slide decks, and talk honestly about where we go from here. I believe there is still so much we can accomplish together, and I would hate for us to lose that potential. Would you be open to meeting next week? Warmly, Nina.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is exactly what Nina asked for. Your message is personal, emotionally honest, and focused on the human relationship rather than the business arrangement. It takes courage to write this way in a professional context, and that is what expressive communication at an advanced level demands.",
          observation:
            "You avoided corporate language and wrote as one human to another. That is the essence of expressive communication in high-stakes situations.",
          coachingTip:
            "In relationship rescue situations, the most expressive thing you can do is drop the professional armour and write honestly. It is uncomfortable but effective.",
          styleContext:
            "Expressive communicators believe that vulnerability in business communication is a strength, not a risk. When a relationship is at stake, authenticity wins.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message is professional and appropriate, but Nina wanted something that feels personal. Push past the corporate comfort zone and write with more emotional honesty.",
          observation:
            "Check whether your message could have been written by anyone in the company. If so, it is not personal enough. Nina wants the CEO to feel that this was written by a real person who cares.",
          coachingTip:
            "Replace formal phrases with personal ones. Instead of 'we value the partnership', try 'this partnership matters to me'. The shift from 'we' to 'me' adds the personal dimension Nina asked for.",
          styleContext:
            "Expressive communicators in recovery situations use personal language deliberately. It signals that the commitment is human, not just contractual.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a standard business communication. Nina specifically said 'not a formal letter' and 'from the heart'. This does not meet that brief.",
          observation:
            "If your message could be a template used for any client, it is not what Nina asked for. She wanted something that could only be written for this specific person.",
          coachingTip:
            "Start over with this question: what would you say to this person if you met them in a corridor and had sixty seconds of complete honesty? Write that.",
          styleContext:
            "Expressive communicators see generic business writing as a missed opportunity for genuine connection. In a rescue situation, generic is the enemy.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (415-417) - Negotiation
  // ============================================

  // Scenario 415 - Tom Brennan, negotiation, foundation
  {
    id: "scenario-415",
    title: "The Budget Conversation",
    context:
      "Your department is negotiating its annual budget allocation with finance. Tom Brennan, your team lead, is in the meeting and the finance director has just pushed back on a staffing request, suggesting the team can manage with fewer people.",
    chooseContext:
      "Tom has responded to the finance director's pushback calmly and is now asking you to share your perspective on how reduced headcount would affect the team.",
    rewriteContext:
      "Tom wants you to draft a follow-up note to the finance director that restates the staffing case in a way that acknowledges their constraints while maintaining the request.",
    characterId: "tom-brennan",
    dialogue:
      "I hear what you are saying about the budget pressures, and I appreciate how difficult these decisions are for your team. I would not be asking if I did not genuinely believe this is about protecting the people we already have from burnout. Can we look at this together and find something that works for everyone?",
    chooseDialogue:
      "I would like you to share what you have been seeing on the ground - how the workload has been affecting the team. But let's keep it constructive. We are all trying to find the right answer here.",
    rewriteDialogue:
      "Write something to Sarah in finance. Acknowledge the pressures she is under and then explain why this matters for our people. Keep it respectful - she is doing her best too.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom acknowledged the finance director's pressures, framed his request around protecting people from burnout, and asked to find a solution together. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom's acknowledgement of the other side's difficulties, his focus on team wellbeing, and his collaborative 'find something that works for everyone' language are all supportive communicator traits.",
          observation:
            "Notice how Tom validated the finance director's position before making his case. Supportive communicators always acknowledge the other person's reality first.",
          coachingTip:
            "When someone leads a negotiation with empathy and collaboration rather than demands or data, they are almost certainly using a supportive communication style.",
          styleContext:
            "Supportive communicators negotiate by building bridges, not drawing battle lines. They believe that honouring the other side's perspective leads to better outcomes for everyone.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An expressive communicator might also be warm and people-focused in a negotiation, but they would bring more energy and passion to the argument. Tom's approach is calm, measured, and focused on mutual understanding.",
          observation:
            "Tom is not trying to inspire or energise the room. He is creating a safe space for honest dialogue. That steady calm is supportive, not expressive.",
          coachingTip:
            "Expressive communicators negotiate with enthusiasm and vision. Supportive communicators negotiate with patience and empathy. Tom is clearly patient.",
          styleContext:
            "Both styles care about people, but their energy is different. Expressive brings heat; supportive brings warmth. Tom is warm, not hot.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Tom did not demand a specific outcome, present data analysis, or push for a quick decision. He focused entirely on relationships and mutual respect.",
          observation:
            "A task-focused communicator would have argued the business case with numbers or insisted on the headcount increase. Tom argued with empathy.",
          coachingTip:
            "Ask yourself: is this person prioritising the outcome, the idea, the relationship, or the process? Tom is prioritising the relationship and the people.",
          styleContext:
            "Supportive communicators in negotiations prioritise preserving relationships even while advocating for their needs. They believe good relationships lead to good outcomes.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has asked you to share how reduced headcount would affect the team. He wants you to keep it constructive. How do you respond?",
      options: [
        {
          id: "s415-opt-a",
          text: "The team is already stretched. Two members worked every weekend last month, which is not sustainable. I think if we work together, we can protect the team without putting finance in a difficult position.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Tom's supportive style by focusing on people's wellbeing, using specific but empathetic examples, and maintaining a collaborative tone. This is exactly the approach Tom was looking for.",
        },
        {
          id: "s415-opt-b",
          text: "If we do not get the additional headcount, we will miss our Q3 targets by approximately 15%. I have the data to back that up if you would like to see it.",
          score: 5,
          result: "partial",
          explanation:
            "This is factually valid but misses the supportive tone Tom established. He asked you to talk about how workload affects the team, not to present performance metrics. The argument is task-focused rather than people-focused.",
        },
        {
          id: "s415-opt-c",
          text: "With respect, the numbers speak for themselves. We need more people and the sooner finance approves it, the sooner we can stop having this conversation.",
          score: 0,
          result: "weak",
          explanation:
            "This is confrontational and dismissive of the collaborative atmosphere Tom carefully established. A supportive communicator would find this aggressive and counterproductive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the follow-up note Tom described to the finance director. Acknowledge her pressures, explain why the staffing request matters for people's wellbeing, and keep it respectful. Match Tom's supportive communication style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Sarah - thank you for the honest conversation today. I know the budget pressures you are working under are significant, and I do not take lightly the fact that every request adds to that burden. The reason I am still asking is that I have seen the toll the current workload is taking on the team. Two people worked every weekend last month, and I am genuinely concerned about burnout. I am not looking for a blank cheque - just enough support to keep our people healthy and able to do their best work. I would welcome the chance to look at options together and find something that respects both our constraints. Thank you for considering it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your note is respectful, empathetic, and maintains the collaborative tone Tom established. You acknowledged Sarah's pressures genuinely, not as a rhetorical device. This is supportive communication done well.",
          observation:
            "You balanced advocacy for your team with respect for the finance director's position. That balance is the hallmark of skilled supportive negotiation.",
          coachingTip:
            "When writing for supportive communicators, always open by acknowledging the other person's situation before presenting your case. It builds trust.",
          styleContext:
            "Supportive communicators believe that respectful persistence is more effective than aggressive demands. Their written communications reflect that philosophy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your note makes the right case but could be more empathetic toward Sarah's position. Tom specifically asked you to acknowledge the pressures she is under.",
          observation:
            "Check whether your opening genuinely acknowledges Sarah's challenges or just pays lip service before moving to your request. Supportive communicators can tell the difference.",
          coachingTip:
            "Spend at least two sentences acknowledging the other person's reality before presenting your own. That investment in empathy pays dividends.",
          styleContext:
            "Supportive communicators read notes for emotional tone as much as content. If the note feels transactional, it misses the mark.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note does not match the supportive style Tom asked for. It either demands without acknowledging, or focuses on business outcomes instead of people's wellbeing.",
          observation:
            "Tom framed this as a conversation about protecting people, not hitting targets. Your note should reflect that framing.",
          coachingTip:
            "Rewrite with this structure: acknowledge their challenge, share the human impact, propose a collaborative next step. Keep the tone warm throughout.",
          styleContext:
            "Supportive communicators in negotiations always lead with empathy. If your note leads with a demand or a data point, it is in the wrong register.",
        },
      },
    },
  },

  // Scenario 416 - Leah Morgan, negotiation, intermediate
  {
    id: "scenario-416",
    title: "The Vendor Renegotiation",
    context:
      "Your company is renegotiating terms with a long-standing vendor whose prices have increased significantly. Leah Morgan, the procurement lead, is in the meeting. The vendor has said the increase is non-negotiable.",
    chooseContext:
      "Leah has acknowledged the vendor's position and is now looking for a way to keep the relationship intact while negotiating better terms. She wants you to contribute to the dialogue.",
    rewriteContext:
      "Leah wants you to send a follow-up email to the vendor proposing a phased approach to the price increase that protects both sides.",
    characterId: "leah-morgan",
    dialogue:
      "I understand the cost pressures you are facing - we are dealing with similar challenges ourselves. This has been a really good partnership for both of us, and I would hate for a pricing discussion to undermine that. Can we explore some middle ground where neither of us feels they have given too much?",
    chooseDialogue:
      "I want you to suggest the phased approach we discussed, but please do it in a way that shows we understand their situation. They are under pressure too, and I do not want them to feel cornered.",
    rewriteDialogue:
      "Write to Marcus at the vendor. Acknowledge the increase is real and that we respect their position. Then propose the phased option as something that might help both sides manage the change gradually.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Leah acknowledged the vendor's cost pressures, expressed concern about damaging the partnership, and proposed finding middle ground. Which communication style is Leah using?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's empathy for the vendor's position, her concern about relationship damage, and her desire to find a solution that feels fair to both sides are classic supportive communicator traits.",
          observation:
            "Leah said 'neither of us feels they have given too much'. That focus on both parties' feelings is distinctly supportive. Other styles would focus on the deal itself.",
          coachingTip:
            "When someone frames a negotiation around preserving the relationship rather than winning the argument, they are using a supportive communication style.",
          styleContext:
            "Supportive communicators in vendor negotiations prioritise the long-term relationship. They believe that pushing too hard today costs you goodwill tomorrow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. An expressive communicator might also value the vendor relationship, but they would frame the conversation with more energy and vision - perhaps talking about what the partnership could become. Leah is calmer and more focused on mutual comfort.",
          observation:
            "Leah is de-escalating, not energising. She wants both sides to feel safe, not inspired.",
          coachingTip:
            "Expressive communicators say 'imagine what we could do together'. Supportive communicators say 'let's make sure this works for everyone'. Leah is doing the latter.",
          styleContext:
            "Both styles value relationships, but expressive communicators bring creative energy while supportive communicators bring reassuring stability.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not fit. Leah showed no interest in winning the negotiation outright, presenting detailed analysis, or forcing a quick resolution. Her focus is entirely relational.",
          observation:
            "Leah's language is about feelings - 'I would hate for this to undermine' the partnership, wanting neither side to feel they 'gave too much'. Task-focused styles rarely use this language in negotiations.",
          coachingTip:
            "Pay attention to whether the person is protecting the deal or protecting the relationship. Leah is clearly protecting the relationship.",
          styleContext:
            "Supportive communicators see vendor relationships as partnerships built on mutual trust. Pricing disputes threaten that trust, so they handle them with care.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants you to propose the phased pricing approach while showing empathy for the vendor's situation. How do you present it?",
      options: [
        {
          id: "s416-opt-a",
          text: "We respect that your costs have gone up. We propose phasing the increase over twelve months - 50% now and the rest in six months. That gives both sides time to adjust. Does that feel workable?",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the vendor's reality, proposed a concrete compromise, and asked whether it feels fair to them. This is a textbook supportive negotiation approach that matches Leah's style perfectly.",
        },
        {
          id: "s416-opt-b",
          text: "We accept the price increase in principle, but we need it phased over twelve months. Here is the proposed schedule.",
          score: 5,
          result: "partial",
          explanation:
            "The proposal is reasonable but the delivery is too transactional. Leah specifically asked you to show empathy for the vendor's position. This response jumps straight to terms without the relational groundwork.",
        },
        {
          id: "s416-opt-c",
          text: "We are not happy with the increase and we think you should reconsider. If the pricing does not come down, we will need to look at other suppliers.",
          score: 0,
          result: "weak",
          explanation:
            "This is confrontational and threatening - the opposite of what Leah asked for. She explicitly said she does not want the vendor to feel cornered. This approach would damage the relationship she is trying to protect.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the follow-up email to the vendor proposing a phased pricing approach. Acknowledge their situation, propose the phased plan, and frame it as something that works for both sides. Match Leah's supportive communication style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Marcus - thank you for the open conversation today. We understand that cost increases are a reality of the current market, and we respect that you are managing significant pressures on your side. This partnership has been valuable to both of us for over five years, and we want to find a way to navigate this change together. We would like to propose phasing the increase over twelve months - absorbing half now and the remainder from July. We think this gives both sides time to adjust without anyone carrying an unfair burden. We are open to discussing the detail and finding the right shape for this. Let us know your thoughts when you are ready.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your email strikes the right balance between empathy and advocacy. You acknowledged the vendor's pressures genuinely, proposed a fair compromise, and left space for further dialogue. Leah would approve.",
          observation:
            "You ended with 'when you are ready' rather than a deadline. That unhurried closing is a hallmark of supportive communication - it gives the other party space to respond on their own terms.",
          coachingTip:
            "In supportive negotiation emails, the closing matters as much as the opening. Avoid pressure language and give the other side room to breathe.",
          styleContext:
            "Supportive communicators believe that giving people space to think leads to better, more sustainable agreements. Pressure creates compliance, not commitment.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email makes a reasonable proposal but could show more genuine empathy for the vendor's situation. Leah wanted them to feel understood, not just accommodated.",
          observation:
            "Check whether your acknowledgement of their position feels genuine or perfunctory. Supportive communicators invest real emotional energy in validating others.",
          coachingTip:
            "Try adding a sentence that shows you understand specifically what makes their situation difficult. Generic empathy reads as hollow to a supportive communicator.",
          styleContext:
            "Supportive communicators detect insincerity quickly. Make sure your empathy is real and specific, not just a diplomatic opening.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email does not match the supportive tone Leah described. It either pushes too hard, skips the empathy, or fails to frame the proposal as mutually beneficial.",
          observation:
            "Leah said 'acknowledge the increase is real' and 'help both sides manage the change'. If your email does not do both, it misses the brief.",
          coachingTip:
            "Restructure with supportive framing: validate their reality, share your challenge, propose something fair, invite dialogue. Keep the tone warm throughout.",
          styleContext:
            "Supportive negotiation emails should make the reader feel respected and understood. If yours makes them feel pressured, it is in the wrong register.",
        },
      },
    },
  },

  // Scenario 417 - David Chen, negotiation, advanced
  {
    id: "scenario-417",
    title: "The Internal Territory Dispute",
    context:
      "Two teams within your organisation are in dispute over ownership of a new product feature. Both teams believe it falls within their scope. David Chen, a senior team lead, has been asked to mediate the discussion.",
    chooseContext:
      "David has listened to both sides and is now asking each team to suggest a way forward that honours the other team's contribution. He has turned to you.",
    rewriteContext:
      "David wants you to draft a message to both team leads summarising the agreed way forward and reinforcing the importance of the collaborative relationship between the teams.",
    characterId: "david-chen",
    dialogue:
      "I can see this matters deeply to both of you, and I think that is a good thing - it means people care about doing great work. But right now, the way we are talking about this is hurting both teams. I would like us to step back and think about what outcome would make everyone feel proud of how we handled this, rather than who gets the credit.",
    chooseDialogue:
      "I want to hear from you, but I need you to do something difficult first. Before you tell me what your team should own, tell me something the other team has done really well on this project. Let's start from a place of respect.",
    rewriteDialogue:
      "Write to both Kathryn and James. Summarise what we agreed, but more importantly, acknowledge how hard this conversation was and recognise that both teams showed real maturity in how they handled it. That matters more than the decision itself.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David reframed the territory dispute from 'who gets ownership' to 'how do we handle this in a way everyone feels proud of'. Which communication style is David demonstrating?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. David's focus on feelings, his concern for relationship damage, and his reframing of the dispute around collective pride rather than individual ownership are advanced supportive communication techniques.",
          observation:
            "David asked each side to acknowledge the other's contribution before making their own case. That is a sophisticated supportive move - it forces empathy before advocacy.",
          coachingTip:
            "When a mediator prioritises how people feel about the process over what the outcome is, they are operating in a supportive style. David cares as much about the journey as the destination.",
          styleContext:
            "Supportive communicators make exceptional mediators because they naturally prioritise the health of relationships over the efficiency of decisions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An expressive communicator mediating this dispute might also be warm and people-focused, but they would bring more energy - perhaps proposing an exciting joint approach. David's method is quieter and more reflective.",
          observation:
            "David is asking people to slow down and reflect, not to get excited about a new possibility. That measured pace is supportive, not expressive.",
          coachingTip:
            "Expressive mediators energise the room. Supportive mediators calm it. David is deliberately lowering the temperature.",
          styleContext:
            "In mediation, expressive communicators propose creative solutions. Supportive communicators create the emotional safety needed for any solution to work.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. David did not focus on who has the stronger claim, what the data says, or what the fastest resolution would be. His entire approach is about people's feelings and relationship repair.",
          observation:
            "David said 'the way we are talking about this is hurting both teams'. That focus on emotional harm is distinctly supportive.",
          coachingTip:
            "When someone in a dispute focuses on how the process feels rather than what the outcome should be, they are communicating supportively.",
          styleContext:
            "Supportive communicators believe that the way a decision is made matters as much as the decision itself. A good outcome reached through a painful process is still a failure in their eyes.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has asked you to acknowledge something the other team has done well before stating your team's case. How do you respond?",
      options: [
        {
          id: "s417-opt-a",
          text: "The user research Kathryn's team did was outstanding - it shaped our thinking significantly and we would not be as far along without it. Whatever we decide on next steps, that contribution should not be overlooked.",
          score: 10,
          result: "strong",
          explanation:
            "You followed David's instruction with genuine warmth and specificity. By acknowledging the other team's contribution before advocating for your own, you demonstrated the kind of mutual respect David is cultivating. This is advanced supportive communication.",
        },
        {
          id: "s417-opt-b",
          text: "They have done good work. I respect that. But I still think the feature sits more naturally within our roadmap, and I would like to explain why.",
          score: 5,
          result: "partial",
          explanation:
            "The acknowledgement is thin and feels like a formality before getting to your real point. David asked you to start from a place of genuine respect, and this reads more like clearing a hurdle before making your argument.",
        },
        {
          id: "s417-opt-c",
          text: "I appreciate the request, David, but I think we should focus on the strategic question of which team is best placed to deliver this feature, not on compliments.",
          score: 0,
          result: "weak",
          explanation:
            "This rejects David's mediation approach entirely. He asked you to do something difficult because he believes it changes the dynamic. Dismissing it as 'compliments' shows you have not understood the supportive strategy at work.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the message David described to both team leads. Summarise the agreed way forward, acknowledge how difficult the conversation was, and recognise the maturity both teams showed. Match David's supportive communication style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Kathryn, hi James - thank you both for the conversation today. I know it was not easy, and I want to acknowledge that. Disputes like this are difficult precisely because both teams care deeply about their work, and that is something to be proud of. Here is what we agreed: the feature will sit within James's roadmap, with Kathryn's team contributing the user research and design input. Both teams will be credited in the product documentation. More importantly, I want to recognise how both of you handled this discussion. You listened to each other, acknowledged each other's contributions, and found a way forward that respects the work on both sides. That takes maturity, and it sets a really healthy precedent for how we resolve these situations in the future. Thank you for showing that it is possible to disagree and still come out stronger as colleagues.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your message is outstanding. You summarised the decision clearly but, more importantly, you honoured the process and the people involved. David would be genuinely proud of this communication.",
          observation:
            "You gave equal weight to the decision and the way it was reached. That balance is the hallmark of advanced supportive communication.",
          coachingTip:
            "When summarising difficult conversations, always acknowledge the emotional difficulty alongside the practical outcome. It validates people's experience.",
          styleContext:
            "Supportive communicators believe that how teams resolve conflict matters more than the resolution itself. Your message reinforces that value.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the practical outcome but does not give enough weight to the emotional journey both teams went through. David specifically asked you to recognise their maturity.",
          observation:
            "Check the ratio of practical content to relational content. David said acknowledging how they handled it matters more than the decision itself.",
          coachingTip:
            "Add at least two to three sentences specifically about how the teams conducted themselves. Be specific about what they did well.",
          styleContext:
            "Supportive communicators use follow-up messages as opportunities to reinforce positive behaviours, not just document outcomes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like meeting minutes rather than the warm, relationship-reinforcing communication David asked for. It misses the emotional dimension entirely.",
          observation:
            "David said 'that matters more than the decision itself'. If your message is mostly about the decision, it has missed the most important part.",
          coachingTip:
            "Rewrite with the feelings first and the facts second. Open with acknowledgement of the difficulty, then the maturity, then the decision.",
          styleContext:
            "Supportive communicators prioritise emotional closure. A practical summary without emotional acknowledgement feels incomplete to them.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (418-420) - Conflict
  // ============================================

  // Scenario 418 - Rachel Finch, conflict, foundation
  {
    id: "scenario-418",
    title: "The Process Breakdown",
    context:
      "A project delivery has failed because two departments followed different versions of the same process. Rachel Finch, the operations manager, has called a review meeting to understand what went wrong.",
    chooseContext:
      "Rachel has identified the root cause and is now asking each team to explain what version of the process they were following and why. She turns to you.",
    rewriteContext:
      "Rachel wants you to write a summary email documenting the process failure, the root cause, and the steps being taken to prevent recurrence.",
    characterId: "rachel-finch",
    dialogue:
      "Let's not start with blame. I want to understand the sequence. Which version of the SOP were you working from, when was it last updated, and where did the divergence happen? If we can map the timeline, we can fix the system rather than repeating this conversation next quarter.",
    chooseDialogue:
      "Walk me through your team's process step by step. I want to know what you did, what documentation you referenced, and at which point the output diverged from what the other team expected.",
    rewriteDialogue:
      "Write up what happened. I want the timeline, the root cause, and the corrective actions, all in one document. No opinions - just facts and next steps.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel asked for the timeline, the SOP version, and the point of divergence rather than assigning blame. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's structured approach, her focus on timelines and documentation, and her desire to fix the system rather than blame individuals are hallmarks of an analytical communicator.",
          observation:
            "Notice how Rachel asked three precise questions in sequence - version, update date, divergence point. Analytical communicators gather information in structured, logical steps.",
          coachingTip:
            "When someone responds to a failure by asking for the sequence of events and the documentation trail, they are almost certainly analytical.",
          styleContext:
            "Analytical communicators see process failures as system problems, not people problems. Their instinct is to investigate the mechanism, not the motivation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. A direct communicator might also want to get to the bottom of a failure quickly, but they would focus on who is responsible and what action to take now. Rachel wants to understand the system before proposing solutions.",
          observation:
            "Rachel did not say 'who dropped the ball' or 'what are we going to do about it'. She said 'let me map the timeline'. That is investigation, not action.",
          coachingTip:
            "Direct communicators ask 'what now?' Analytical communicators ask 'what happened and why?' Rachel is clearly in investigation mode.",
          styleContext:
            "Both direct and analytical styles are task-focused, but they respond to failure differently. Direct wants immediate action; analytical wants root cause understanding first.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not fit. Rachel showed no focus on feelings, relationships, or team morale. Her entire approach is structured, evidence-based, and process-oriented.",
          observation:
            "There was no emotional language, no relationship-building, and no concern for how people felt about the failure. This is a purely systematic approach.",
          coachingTip:
            "Ask yourself: is this person focused on people or process? Rachel is entirely focused on process and evidence.",
          styleContext:
            "Analytical communicators approach conflict through logic and structure. They believe that feelings follow facts - fix the system and the frustration resolves itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has asked you to walk through your team's process step by step. How do you respond?",
      options: [
        {
          id: "s418-opt-a",
          text: "We used SOP version 3.2, dated January 15th, following the five-step workflow. The divergence occurred at step three - classification - where the other team's version 3.4 from March uses a different taxonomy.",
          score: 10,
          result: "strong",
          explanation:
            "Structured, specific, and evidence-based. You matched Rachel's analytical style by providing exact versions, dates, and the precise point of divergence. This is exactly the information she needs.",
        },
        {
          id: "s418-opt-b",
          text: "I think we were following the standard process. There might have been some differences in how we classified things, but I would need to check. I can look into it and get back to you.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague for an analytical communicator. Rachel asked for specifics - version numbers, steps, and the point of divergence. Saying 'I think' and 'there might have been' does not meet her standard of precision.",
        },
        {
          id: "s418-opt-c",
          text: "Honestly, Rachel, I think the bigger issue here is that the teams are not communicating well enough. If we just talked more, this kind of thing would not happen.",
          score: 0,
          result: "weak",
          explanation:
            "Rachel specifically said she wants facts, not opinions. She asked for the process steps and you responded with a relationship-level observation. This frustrates analytical communicators who need concrete data before drawing conclusions.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the summary email Rachel requested documenting the process failure. Include the timeline, root cause, and corrective actions. Keep it factual and structured, matching Rachel's analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Process Divergence - Root Cause and Corrective Actions. Summary: A delivery failure occurred on March 7th due to two departments following different versions of the intake SOP. Root Cause: Department A was using SOP v3.2 (January 15th). Department B had updated to SOP v3.4 (March 1st). The versions differ at Step 3 (classification), where v3.4 introduced a revised taxonomy. No communication was issued to Department A regarding the update. Timeline: Jan 15 - SOP v3.2 issued to both departments. Mar 1 - Department B updated to v3.4 independently. Mar 7 - delivery outputs diverged at classification stage. Corrective Actions: 1. All SOP updates will be issued centrally through the ops team. 2. A version control log will be maintained and shared monthly. 3. Both departments will align on v3.5, which is currently in draft. Next Review: April 14th.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your summary is precisely what Rachel asked for - factual, structured, and complete. The timeline, root cause, and corrective actions are clearly separated and evidence-based.",
          observation:
            "You avoided opinions and interpretations, sticking to verifiable facts and concrete next steps. That is the gold standard for analytical communication.",
          coachingTip:
            "When writing for analytical communicators, use clear headings, dates, and version numbers. Structure is not just helpful - it is expected.",
          styleContext:
            "Analytical communicators use written summaries as reference documents. If yours is well-structured, it becomes the single source of truth for the issue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary covers the key points but could be more structured. Rachel would want clearer separation between timeline, root cause, and corrective actions.",
          observation:
            "Check whether your document can be scanned quickly for key facts. If someone needs to read it end to end to find the root cause, it is not structured enough.",
          coachingTip:
            "Use headings, bullet points, and dates. Analytical communicators process structured information more efficiently than prose.",
          styleContext:
            "Analytical communicators judge written summaries by their utility. Can I find what I need in ten seconds? If not, the structure needs work.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary lacks the structure and specificity Rachel requested. It reads more like a narrative account than an analytical document.",
          observation:
            "Rachel said 'no opinions - just facts and next steps'. If your summary contains speculation, blame, or vague language, it does not meet the brief.",
          coachingTip:
            "Rewrite with three clear sections: what happened (timeline), why it happened (root cause), and what we are doing about it (corrective actions).",
          styleContext:
            "Analytical communicators need summaries they can act on. Every sentence should either state a fact or describe a concrete next step.",
        },
      },
    },
  },

  // Scenario 419 - Owen Grant, conflict, intermediate
  {
    id: "scenario-419",
    title: "The Data Disagreement",
    context:
      "Two analysts on your team have produced conflicting reports on the same dataset. The disagreement has become personal, with each questioning the other's competence. Owen Grant, the analytics lead, steps in to resolve it.",
    chooseContext:
      "Owen has asked both analysts to present their methodology side by side. He now wants you to facilitate the comparison and help identify where the approaches diverged.",
    rewriteContext:
      "Owen wants you to write a brief to the team explaining how the conflict will be resolved - through structured methodology review, not personal debate.",
    characterId: "owen-grant",
    dialogue:
      "I do not care who is right. I care about which methodology is correct. Both of you - put your workbooks on screen. I want to see the data sources, the transformation steps, and the formulas. We will walk through them side by side until we find the divergence point. Opinions are off the table until the evidence is on it.",
    chooseDialogue:
      "Go through both methodologies and flag every point where they differ. I do not want you to judge which is better - just document the differences. We will evaluate after we have a complete picture.",
    rewriteDialogue:
      "Write to the team and explain how we are handling this. Make it clear that the review is about methodology, not people. I want the team to see that we resolve disagreements with evidence, not politics.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen separated the personal conflict from the technical disagreement and insisted on a side-by-side methodology review. Which communication style is Owen using?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Owen's insistence on evidence over opinion, his structured approach to comparison, and his focus on methodology rather than personality are all analytical communicator traits.",
          observation:
            "Owen said 'opinions are off the table until the evidence is on it'. That single sentence captures the analytical worldview - evidence first, conclusions second.",
          coachingTip:
            "When someone resolves a conflict by depersonalising it and asking for evidence-based comparison, they are communicating analytically.",
          styleContext:
            "Analytical communicators believe that most conflicts are actually data disagreements disguised as personal ones. Remove the data ambiguity and the personal tension often dissolves.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. A direct communicator might also be impatient with the personal drama and want a fast resolution. But Owen is not rushing to a decision - he is setting up a systematic review process. That patience with evidence gathering is analytical, not direct.",
          observation:
            "Owen said 'we will evaluate after we have a complete picture'. A direct communicator would want the answer now, not after a thorough review.",
          coachingTip:
            "Direct communicators resolve conflict by deciding quickly. Analytical communicators resolve conflict by investigating thoroughly. Owen is investigating.",
          styleContext:
            "Both styles cut through personal drama, but for different reasons. Direct wants speed; analytical wants accuracy. Owen wants accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not match. Owen showed no concern for how the analysts feel, no desire to rebuild their relationship, and no attempt to create a warm or inspiring atmosphere. His focus is entirely on the data.",
          observation:
            "Owen did not acknowledge anyone's feelings or try to bring the team together emotionally. He went straight to the workbooks.",
          coachingTip:
            "When someone in a conflict situation ignores the emotional dynamics and focuses exclusively on evidence, they are operating analytically.",
          styleContext:
            "Analytical communicators can seem cold in conflict situations, but their approach often works: resolve the factual disagreement and the emotional tension tends to follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has asked you to compare both methodologies and flag every difference without judging which is better. How do you proceed?",
      options: [
        {
          id: "s419-opt-a",
          text: "Four points of divergence: different baseline date ranges (calendar vs financial year), different outlier thresholds (two vs three standard deviations), different regional aggregation methods, and different rounding rules. All four are documented in a comparison table.",
          score: 10,
          result: "strong",
          explanation:
            "Precise, structured, and completely judgment-free. You identified specific differences with technical detail and documented them systematically. This is exactly the analytical approach Owen requested.",
        },
        {
          id: "s419-opt-b",
          text: "Having looked at both, I think Analyst A's approach is more robust. Their methodology follows best practice more closely and their results are more consistent.",
          score: 5,
          result: "partial",
          explanation:
            "Owen explicitly said not to judge which is better - just document the differences. By declaring one approach 'more robust', you jumped ahead of the process Owen set up. Good analysis, wrong timing.",
        },
        {
          id: "s419-opt-c",
          text: "I think the real issue is that these two need to communicate better. If they had talked before running their analysis, this would not have happened.",
          score: 0,
          result: "weak",
          explanation:
            "Owen asked for a technical comparison and you responded with a relationship observation. He specifically said opinions are off the table until the evidence is reviewed. This misses his approach entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the brief Owen described to the team explaining how the data conflict will be resolved. Emphasise that it is about methodology, not people. Match Owen's analytical communication style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Team - as you are aware, two reports produced from the same dataset have yielded different results. We are resolving this through a structured methodology review, not a debate about who is right. Process: 1. Both methodologies will be documented side by side. 2. All points of divergence will be identified and catalogued. 3. Each divergence will be evaluated against our documented standards and best practice. 4. The correct methodology will be confirmed and documented as the standard going forward. This is not a performance issue - it is a process issue. Different analytical decisions led to different outputs. Our job is to determine which decisions are correct and make sure everyone follows the same approach in future. The review will be completed by Friday. I will share the findings and the updated standard with the full team.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your brief is clear, structured, and depersonalises the conflict effectively. The numbered process gives the team confidence that this will be resolved systematically. Owen would approve.",
          observation:
            "You made it clear that this is a process issue, not a people issue. That distinction is critical in analytical conflict resolution.",
          coachingTip:
            "When writing about conflict resolution for analytical stakeholders, always describe the process you will follow. Structure builds confidence.",
          styleContext:
            "Analytical communicators believe that transparent, structured processes defuse conflict better than emotional reassurance. Your brief demonstrates that principle.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your brief addresses the situation but could be more structured. Owen would want a clearer step-by-step process and a more definitive separation between the technical issue and the personal tension.",
          observation:
            "Check whether your brief could leave anyone unclear about how the review will work or whether it is about blame. If so, tighten the language.",
          coachingTip:
            "Add numbered steps and an explicit statement that this is about methodology, not performance. Analytical communicators value that clarity.",
          styleContext:
            "Analytical communicators use written processes as conflict resolution tools. The more structured your brief, the more it calms the situation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your brief does not match Owen's analytical approach. It either assigns blame, relies on vague reassurance, or fails to describe a structured review process.",
          observation:
            "Owen said 'we resolve disagreements with evidence, not politics'. If your brief does not centre evidence and process, it misses his core message.",
          coachingTip:
            "Rewrite with a clear process: document, compare, evaluate, standardise. Each step should be specific and evidence-focused.",
          styleContext:
            "Analytical communicators need to see the system that will resolve the conflict. Without a clear process, they do not trust the outcome.",
        },
      },
    },
  },

  // Scenario 420 - Fiona Banks, conflict, advanced
  {
    id: "scenario-420",
    title: "The Compliance Standoff",
    context:
      "Your product team wants to launch a new feature, but the compliance team has blocked it, citing regulatory risk. The two teams have been going back and forth for weeks with increasing frustration. Fiona Banks, the head of compliance, has requested a formal review meeting.",
    chooseContext:
      "Fiona has laid out the specific regulatory risks in detail and is asking the product team to respond to each one with evidence that the risks have been mitigated. She turns to you as the product representative.",
    rewriteContext:
      "Fiona wants you to produce a joint risk assessment document that both teams can sign off on. It should address each compliance concern with specific evidence and mitigation steps.",
    characterId: "fiona-banks",
    dialogue:
      "I understand the urgency to launch, and I am not trying to slow things down for the sake of it. But there are three specific regulatory requirements that this feature does not currently meet. I need the product team to show me - with evidence, not assurances - how each one will be addressed before I can approve. Let me walk you through them one by one.",
    chooseDialogue:
      "I have laid out three regulatory concerns with specific references. For each one, I need you to tell me: what is the current state, what is the gap, and what is the mitigation plan with a timeline. If you cannot answer all three, we need to pause until you can.",
    rewriteDialogue:
      "Create a document that maps each compliance requirement to the product's current state, identifies gaps, and proposes specific mitigations with timelines. I want something both teams can review, challenge, and ultimately sign off on together.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona blocked the product launch citing three specific regulatory requirements and asked for evidence-based responses to each one. Which communication style is Fiona demonstrating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's structured presentation of specific requirements, her demand for evidence over assurances, and her systematic one-by-one approach are hallmarks of analytical communication at an advanced level.",
          observation:
            "Fiona said 'with evidence, not assurances'. That single phrase defines the analytical approach to conflict - they trust data and documentation, not promises and good intentions.",
          coachingTip:
            "When someone in a conflict presents numbered concerns and asks for evidence-based responses to each one, they are communicating analytically. Match their structure in your response.",
          styleContext:
            "Analytical communicators in compliance roles are not being obstructive - they are being thorough. Their job requires evidence, and they apply that standard consistently.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. A direct communicator might also push back firmly on a product launch, but they would likely give a simple yes-or-no verdict rather than walking through each requirement one by one. Fiona's thoroughness is analytical.",
          observation:
            "Fiona did not say 'it is blocked, end of discussion'. She said 'let me walk you through the concerns one by one'. That willingness to explain and evidence her position is analytical.",
          coachingTip:
            "Direct communicators block and move on. Analytical communicators block and explain why in detail. Fiona is doing the latter.",
          styleContext:
            "Both styles can be firm, but analytical firmness comes with detailed justification. They want you to understand the reasoning, not just the decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "That does not fit. Fiona showed no interest in how anyone feels about the block, no desire to build consensus through emotional appeal, and no attempt to energise the room with creative alternatives.",
          observation:
            "Fiona's language is entirely about requirements, evidence, gaps, and mitigations. There is no emotional or relational content.",
          coachingTip:
            "Look at what tools the person is using to make their case. Fiona is using regulatory references and evidence requests - those are analytical tools.",
          styleContext:
            "Analytical communicators in conflict rely on frameworks and evidence. Their authority comes from thoroughness, not personality or positional power.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has asked you to respond to each of her three regulatory concerns with the current state, the gap, and the mitigation plan. How do you respond to the first concern?",
      options: [
        {
          id: "s420-opt-a",
          text: "On data residency: we process in UK and EU, but lack a mechanism to prevent transfer to a third region during peak load. The mitigation is infrastructure-level geo-fencing, scoped at three weeks. I can share the technical spec after this meeting.",
          score: 10,
          result: "strong",
          explanation:
            "You answered all three parts of Fiona's framework precisely: current state, gap, and mitigation with a timeline. You also offered supporting documentation. This is exactly how an analytical communicator wants to receive information in a conflict resolution setting.",
        },
        {
          id: "s420-opt-b",
          text: "We are aware of the data residency concern and we are working on a fix. Our engineering team is confident they can resolve it before launch. I can get you more details next week.",
          score: 5,
          result: "partial",
          explanation:
            "This contains assurances rather than evidence - exactly what Fiona said she does not want. She asked for the current state, the gap, and the mitigation plan. You gave a general statement of intent with no specifics.",
        },
        {
          id: "s420-opt-c",
          text: "Fiona, I think we are overthinking this. The data residency risk is theoretical and no regulator has ever challenged this type of implementation. I think we should just launch and deal with any issues as they come up.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Fiona's concern as theoretical and proposes launching without evidence of compliance. For an analytical communicator - especially one in a compliance role - this is unacceptable. It shows a fundamental misunderstanding of how they evaluate risk.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Create the joint risk assessment document Fiona described. For each of the three compliance concerns, map the current state, the gap, and the mitigation with a timeline. Keep it structured and evidence-based, matching Fiona's analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Joint Risk Assessment - Feature Launch Review. Prepared for: Product and Compliance joint sign-off. Date: March 14, 2026. Requirement 1 - Data Residency. Current State: User data processed in UK and EU regions. Gap: No geo-fencing mechanism to prevent data transfer to third regions during peak load balancing. Mitigation: Implement infrastructure-level geo-fencing. Timeline: 3 weeks. Owner: Engineering. Requirement 2 - Consent Management. Current State: Users consent at account creation. Gap: Feature collects a new data category (usage patterns) not covered by existing consent. Mitigation: Update consent flow to include new data category with explicit opt-in. Timeline: 2 weeks. Owner: Product. Requirement 3 - Audit Trail. Current State: System logs user actions at session level. Gap: Feature requires action-level logging for regulatory audit compliance. Mitigation: Implement granular event logging with 12-month retention. Timeline: 4 weeks. Owner: Engineering. Proposed Launch Date: Revised to May 2, 2026, subject to completion of all mitigations and joint sign-off by both teams.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your document is exactly what Fiona asked for - structured, specific, and evidence-based. Each concern is addressed with the precise framework she specified: current state, gap, and mitigation with timeline and ownership. Both teams can review, challenge, and sign off on this.",
          observation:
            "You included owners and a revised launch date, which shows you understand that analytical documents need to be actionable, not just informational.",
          coachingTip:
            "When creating documents for analytical stakeholders, always include ownership and timelines. Without them, even a well-structured document feels incomplete.",
          styleContext:
            "Analytical communicators use documents like this as decision-making tools. If your document is thorough enough to base a decision on, you have met their standard.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your document addresses the concerns but lacks the precision Fiona expects. Check that each requirement has all three elements - current state, gap, and mitigation - with specific timelines and owners.",
          observation:
            "Analytical communicators will immediately spot any gaps in your framework. If one requirement is less detailed than the others, they will flag it.",
          coachingTip:
            "Apply the same level of detail to every section. Inconsistency in a risk assessment undermines confidence in the entire document.",
          styleContext:
            "Analytical communicators expect symmetry in structured documents. Every section should follow the same format and level of detail.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document does not meet the structured, evidence-based standard Fiona set. It either lacks the three-part framework, contains vague language, or misses key details like timelines and ownership.",
          observation:
            "Fiona asked for something both teams can sign off on. If your document contains vague commitments or missing details, neither team can confidently approve it.",
          coachingTip:
            "Use Fiona's framework as a template: for each concern, state the current state, identify the gap, and propose a specific mitigation with a timeline and an owner.",
          styleContext:
            "Analytical communicators will not sign off on vague documents. Specificity is not optional - it is the foundation of their trust in the process.",
        },
      },
    },
  },
];
