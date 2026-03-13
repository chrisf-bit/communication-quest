import { Scenario } from "@/types";

export const SCENARIOS_PART6: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (61-63)
  // ============================================

  // Scenario 61 - Jordan Cole, negotiation, foundation
  {
    id: "scenario-61",
    title: "The Contract Crunch",
    context:
      "You are meeting with Jordan to discuss renewing a key supplier contract. The current deal expires in three weeks and Jordan wants to lock in better terms before the deadline.",
    chooseContext:
      "Jordan has reviewed your initial proposal and is pushing back on the pricing structure. She wants a faster resolution and has made it clear she will walk away if progress stalls.",
    rewriteContext:
      "Jordan has asked you to summarise the final agreed terms in writing so she can sign off today. She wants no ambiguity and no filler.",
    characterId: "jordan-cole",
    dialogue:
      "We have three weeks. I want 15% off the unit cost or we switch suppliers. I have already spoken to two alternatives. Tell me right now if you can match that or not.",
    chooseDialogue:
      "Your counter-offer is close but not there yet. Drop the setup fee entirely and we have a deal. I need a yes or no by end of play today.",
    rewriteDialogue:
      "Good. Put the final terms on one page. No legal padding, no maybe language. I want numbers, dates, and a signature line.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened the negotiation with a specific demand, a deadline, and a clear ultimatum. Which communication style is she displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with a specific number, names her alternatives, and demands an immediate answer. That is classic direct communication in a negotiation setting.",
          observation:
            "Notice how Jordan frames the negotiation as a binary choice: match the price or lose the business. Direct communicators value decisiveness over deliberation.",
          coachingTip:
            "When someone opens a negotiation with an ultimatum and a tight deadline, they are signalling a direct style. Respond with equal clarity and speed.",
          styleContext:
            "Direct communicators negotiate by stating their position upfront and expecting the same in return. They see prolonged back-and-forth as inefficiency.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both direct and analytical communicators are task-focused, but an analytical negotiator would present data, benchmarks, and comparisons rather than issuing a blunt ultimatum.",
          observation:
            "Jordan is not asking for a detailed cost breakdown or market analysis. She has already done her homework and wants a commitment.",
          coachingTip:
            "If someone demands evidence and methodology, think analytical. If they demand a decision and a deadline, think direct.",
          styleContext:
            "Direct and analytical styles both care about facts, but direct communicators use facts as leverage for speed, while analytical communicators use them as a basis for thorough evaluation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan shows no interest in the relationship dynamic or how you feel about the negotiation. Her focus is entirely on the commercial outcome.",
          observation:
            "There is no warmth, no collaborative language, and no invitation to explore options together. Jordan wants a result, not a conversation.",
          coachingTip:
            "Ask yourself: is this person focused on results, ideas, people, or process? Jordan's focus on outcomes and speed points squarely to direct.",
          styleContext:
            "Direct communicators can seem confrontational in negotiations, but they often respect counterparts who are equally straightforward.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants the setup fee dropped entirely and needs a yes or no by end of day. How do you respond?",
      options: [
        {
          id: "s61-opt-a",
          text: "I can waive the setup fee if we lock in a two-year term instead of one. That gives you the saving you need and gives us the commitment. I will have the revised contract to you by 3pm.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Jordan's directness with a clear counter-proposal, a specific trade-off, and a concrete timeline. Direct negotiators respect speed and clarity.",
        },
        {
          id: "s61-opt-b",
          text: "Let me take that back to the team and see what we can do. I should be able to get back to you in a couple of days with some options.",
          score: 5,
          result: "partial",
          explanation:
            "This is too slow and vague for Jordan. She asked for a yes or no today, and 'a couple of days' signals indecision to a direct communicator.",
        },
        {
          id: "s61-opt-c",
          text: "I really value our partnership and I want to make sure we find something that works for everyone. Perhaps we could set up a broader meeting with both teams to explore all the possibilities?",
          score: 0,
          result: "weak",
          explanation:
            "This is relationship-focused and avoids the specific question Jordan asked. A direct communicator will see this as stalling and may lose patience entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants the final terms summarised on one page with numbers, dates, and a signature line. Write the summary in a direct style, leading with the key commercial terms.",
      targetTraits: ["concise", "outcome-led", "specific-numbers", "no-hedging"],
      exampleStrongResponse:
        "Contract Renewal Summary\n\nSupplier: Meridian Components Ltd\nTerm: 24 months from 1 April 2026\nUnit cost: GBP 42.50 (15% reduction from current rate)\nSetup fee: Waived\nPayment terms: 30 days net\nReview date: 1 October 2026\n\nSignature: _______________\nDate: _______________",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is clean, specific, and contains only the information needed to make a decision. Jordan will appreciate the lack of padding.",
          observation:
            "You led with the key commercial terms and avoided any unnecessary narrative. That is exactly what a direct communicator wants in a contract summary.",
          coachingTip:
            "When writing for a direct communicator, treat every word as having a cost. If it does not add factual value, remove it.",
          styleContext:
            "Direct communicators prefer documents they can scan in under 30 seconds. Bullet points and tables work far better than paragraphs.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have included the right information but there is too much surrounding text. Jordan asked for numbers and dates, not context or explanation.",
          observation:
            "Look at where you have added qualifiers or background. A direct communicator would see those as noise.",
          coachingTip:
            "Try stripping your response down to just the data points. If it reads like a table or a list of facts, you are on the right track.",
          styleContext:
            "In negotiations with direct communicators, brevity signals confidence. Lengthy explanations can suggest uncertainty.",
        },
        weak: {
          result: "weak",
          explanation:
            "This response includes too much narrative and not enough concrete detail. Jordan specifically asked for numbers and dates, not relationship language or caveats.",
          observation:
            "Your response reads more like a letter than a contract summary. Direct communicators want structure and precision.",
          coachingTip:
            "Go back to Jordan's request: numbers, dates, signature line. Use that as your template and strip everything else away.",
          styleContext:
            "Direct communicators in negotiations judge competence by how quickly you can get to the point. A clear, tight summary builds trust faster than a detailed narrative.",
        },
      },
    },
  },

  // Scenario 62 - Sam Hartley, negotiation, intermediate
  {
    id: "scenario-62",
    title: "The Budget Battle",
    context:
      "Sam is leading a cross-departmental budget allocation meeting. Resources are tight this quarter and Sam wants to secure funding for his team's priority project before anyone else makes their case.",
    chooseContext:
      "Sam has heard your department's counter-proposal and is not satisfied. He has started questioning whether your project delivers enough return to justify the investment.",
    rewriteContext:
      "Sam has agreed to a compromise but wants you to draft a joint statement to the finance director confirming the split. He insists it must be factual and free of spin.",
    characterId: "sam-hartley",
    dialogue:
      "My project delivers a 3x return in six months. Yours is a nice-to-have. I am not sharing budget with something that cannot prove ROI by Q3. Show me the numbers or step aside.",
    chooseDialogue:
      "Your figures are soft. Projected savings are not the same as confirmed revenue. I need hard evidence, not forecasts. If you cannot prove the return, the budget stays with my project.",
    rewriteDialogue:
      "Fine, we will split 60/40 in my favour. Write it up for the finance director. Stick to facts. No padding, no politics. I want it sent before lunch.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has dismissed your project as a 'nice-to-have' and demanded proof of ROI. He is framing the negotiation as a competition for limited resources. Which communication style is this?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam frames the budget discussion as a zero-sum contest and leads with his own project's ROI. He is assertive, competitive, and focused on winning the allocation.",
          observation:
            "Notice how Sam positions his project as the obvious winner and challenges you to prove yours is worth funding. Direct communicators negotiate to win.",
          coachingTip:
            "When someone frames a negotiation competitively and demands you justify your position, match their energy with facts and confidence rather than becoming defensive.",
          styleContext:
            "Direct communicators in resource negotiations often stake their claim early and forcefully. They respect counterparts who push back with equal conviction.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference numbers and ROI, which can look analytical. However, his primary goal is to win the allocation quickly, not to conduct a thorough analysis.",
          observation:
            "An analytical communicator would want to compare both proposals methodically. Sam has already decided his project is better and is daring you to challenge that.",
          coachingTip:
            "Direct communicators use data as ammunition, not as a basis for exploration. They cite numbers to close discussions, not to open them.",
          styleContext:
            "The key difference is intent: direct communicators use evidence to accelerate decisions, while analytical communicators use it to ensure accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam shows no interest in collaboration or consensus. His language is competitive and dismissive, which is far from a supportive or expressive approach.",
          observation:
            "Phrases like 'step aside' and 'nice-to-have' are designed to dominate the conversation, not to build agreement.",
          coachingTip:
            "Look at the emotional intent behind the words. Sam is asserting dominance, not seeking harmony or excitement. That points clearly to direct.",
          styleContext:
            "In budget negotiations, direct communicators often open aggressively to establish their position. Understanding this tactic helps you respond strategically.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam is questioning your project's ROI and insisting that projected savings are not good enough. How do you respond to hold your ground?",
      options: [
        {
          id: "s62-opt-a",
          text: "Fair challenge. Here are three confirmed savings from the pilot: GBP 28,000 in reduced overtime, GBP 15,000 in supplier consolidation, and GBP 9,000 in process automation. That is GBP 52,000 confirmed, not projected. A 60/40 split in your favour still funds both.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Sam's directness by presenting hard evidence, acknowledging his challenge, and proposing a specific compromise. Direct communicators respect people who fight their corner with facts.",
        },
        {
          id: "s62-opt-b",
          text: "I understand your concerns and I think both projects have merit. Maybe we could find a way to fund both at a reduced level and revisit the allocation next quarter.",
          score: 5,
          result: "partial",
          explanation:
            "This is too conciliatory for Sam. He has challenged your numbers and you have responded with vague diplomacy rather than evidence. He will see this as weakness.",
        },
        {
          id: "s62-opt-c",
          text: "I do not think it is fair to dismiss our project without properly reviewing it. The team has worked incredibly hard on this and I think we deserve a fair hearing. Can we schedule a longer session to go through everything together?",
          score: 0,
          result: "weak",
          explanation:
            "This appeals to fairness and emotion, neither of which will move a direct communicator in a budget fight. Sam wants evidence, not appeals to effort or process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a joint statement to the finance director confirming the 60/40 budget split. Write it in a direct style: factual, brief, and free of any political language.",
      targetTraits: ["concise", "factual", "specific-numbers", "action-oriented"],
      exampleStrongResponse:
        "To: Finance Director\nSubject: Q3 Budget Allocation, Operations Division\n\nWe have agreed a 60/40 split of the GBP 180,000 Q3 discretionary budget.\n\nProject Alpha (Sam Hartley): GBP 108,000, targeting 3x return by end of Q3.\nProject Beta (your name): GBP 72,000, delivering GBP 52,000 in confirmed savings.\n\nBoth allocations are final. We will report progress at the mid-quarter review on 15 August.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your statement is factual, specific, and free of any political spin. Sam will appreciate the precision and the finance director will have everything needed to approve.",
          observation:
            "You presented both allocations clearly and included measurable outcomes. That is strong negotiation communication with a direct counterpart.",
          coachingTip:
            "In joint statements after a negotiation, direct communicators want to see the deal locked down with no room for reinterpretation. Be precise.",
          styleContext:
            "Direct communicators view written agreements as commitments, not conversation starters. Make sure every term is unambiguous.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your statement covers the key points but includes some unnecessary framing or softening language. Sam asked for facts, not narrative.",
          observation:
            "Look for places where you have added qualifiers like 'we hope' or 'subject to'. Direct communicators want certainty, not caveats.",
          coachingTip:
            "Read your statement back and remove any word that does not convey a fact. If the meaning survives, the word was unnecessary.",
          styleContext:
            "In post-negotiation communication, direct communicators want to move forward, not revisit the discussion. Your summary should close the conversation.",
        },
        weak: {
          result: "weak",
          explanation:
            "This statement includes too much background context, diplomatic language, or hedging. Sam was explicit: stick to facts, no padding, no politics.",
          observation:
            "Your response reads more like a proposal than a confirmation. The negotiation is done. Sam wants a record, not a pitch.",
          coachingTip:
            "Strip your statement down to the core facts: who gets what, how much, and by when. That is all a direct communicator needs.",
          styleContext:
            "Direct communicators lose trust when written confirmations do not match the verbal agreement. Be precise and concise.",
        },
      },
    },
  },

  // Scenario 63 - Alex Tran, negotiation, advanced
  {
    id: "scenario-63",
    title: "The Scope Squeeze",
    context:
      "Alex is negotiating project scope with you as an internal stakeholder. The original brief has grown significantly and Alex wants to cut features to hit the original deadline. You need several of those features for your department's goals.",
    chooseContext:
      "Alex has flatly rejected your request to keep all features and has proposed removing three items from the scope. You need at least two of those three to meet your quarterly targets.",
    rewriteContext:
      "Alex has agreed to keep two of the three features but wants you to formally accept the timeline risk in writing. She will not proceed without your sign-off.",
    characterId: "alex-tran",
    dialogue:
      "The scope has ballooned by 40%. I am not missing the deadline because stakeholders kept adding 'one more thing'. We are cutting three features today. Tell me which ones you can live without or I will decide for you.",
    chooseDialogue:
      "I have heard your case. Features B and C stay, feature A goes. That is not negotiable. If you want A back in, find me two extra weeks and the budget to cover it. Otherwise we move on.",
    rewriteDialogue:
      "Right. You are keeping B and C but accepting the risk of a two-week delay if integration testing runs long. Put that in writing. I need your sign-off before I brief the team tomorrow morning.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Alex has told you that three features are being cut today and that she will decide for you if you do not choose. This is a high-stakes scope negotiation. Which style is Alex using?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex has set a hard boundary, imposed a decision deadline of 'today', and made it clear she will override you if you hesitate. That is direct communication under pressure.",
          observation:
            "The phrase 'I will decide for you' is a power move. Direct communicators use urgency and authority to force resolution when negotiations drag.",
          coachingTip:
            "In advanced negotiations with direct communicators, you need to match their decisiveness. Come with a clear position and be ready to trade, not deliberate.",
          styleContext:
            "Direct communicators escalate their assertiveness when they feel a negotiation is being slowed by indecision. Meeting that energy with preparation earns respect.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does reference the 40% scope increase, which could seem analytical. But her intent is not to analyse the growth; it is to justify immediate cuts. The data serves the decision, not the other way round.",
          observation:
            "An analytical communicator would want to review each feature's impact before deciding. Alex has already decided and is telling you what happens next.",
          coachingTip:
            "When someone uses data to justify an action they have already taken, that is direct. When they use data to explore what action to take, that is analytical.",
          styleContext:
            "Direct communicators in scope negotiations often present their decision first and provide justification only when challenged.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. There is nothing collaborative, empathetic, or exploratory in Alex's approach. She has made a unilateral decision and is giving you a narrow window to influence it.",
          observation:
            "Alex is not asking for your input on the process or how the team feels about the changes. She is managing the outcome.",
          coachingTip:
            "Look at the power dynamic. When someone says 'tell me or I will decide', they are exercising direct authority. That is a clear signal.",
          styleContext:
            "In scope negotiations, direct communicators prioritise the deadline over stakeholder comfort. Understanding this helps you frame your counter-arguments around outcomes, not feelings.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has removed feature A and says it is not negotiable unless you find two extra weeks and budget. You need feature A. How do you make your case?",
      options: [
        {
          id: "s63-opt-a",
          text: "Feature A drives GBP 35,000 in quarterly revenue for my department. I can fund two additional developers from my budget for the next sprint, which covers the resource gap without extending the deadline. That keeps all three features and your timeline.",
          score: 10,
          result: "strong",
          explanation:
            "This addresses both of Alex's conditions, time and budget, with a specific solution. You are negotiating on her terms, which is exactly how to influence a direct communicator.",
        },
        {
          id: "s63-opt-b",
          text: "I understand the pressure you are under but feature A is really important to us. Could we perhaps look at a phased approach where we deliver the core features first and add A in a later release?",
          score: 5,
          result: "partial",
          explanation:
            "A phased approach is a reasonable idea but the framing is too tentative. 'Perhaps' and 'could we look at' signal uncertainty. Alex wants a concrete proposal, not a suggestion for further discussion.",
        },
        {
          id: "s63-opt-c",
          text: "I think we should involve the wider team in this decision. It affects several departments and I would not want anyone to feel left out of such an important call. Can we schedule a broader meeting?",
          score: 0,
          result: "weak",
          explanation:
            "Alex has explicitly said she will decide today. Proposing a broader meeting is the opposite of what she wants and will be seen as stalling the negotiation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex needs your written sign-off accepting that features B and C are staying but that you accept the timeline risk if integration testing overruns. Write this in a direct style that is clear, decisive, and unambiguous.",
      targetTraits: ["concise", "decisive", "specific-conditions", "accountability"],
      exampleStrongResponse:
        "Alex,\n\nI confirm the following:\n\nFeatures B and C remain in scope. Feature A is deferred.\n\nI accept the risk of a two-week delay if integration testing for B and C exceeds the planned window. My department will absorb any downstream impact.\n\nPlease proceed with the revised plan and brief the team.\n\nSigned: [Name]\nDate: [Date]",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your sign-off is clear, takes ownership of the risk, and gives Alex the green light to proceed. Direct communicators value this kind of decisive accountability.",
          observation:
            "You stated what you are agreeing to, what risk you are accepting, and what action follows. That is a textbook sign-off for a direct counterpart.",
          coachingTip:
            "In written agreements with direct communicators, always be explicit about what you are accepting. Ambiguity creates conflict later.",
          styleContext:
            "Direct communicators use written sign-offs as binding commitments. Make sure your wording reflects genuine acceptance, not reluctant compliance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your sign-off covers the basics but includes some hedging or conditional language that weakens the commitment. Alex wants certainty.",
          observation:
            "Phrases like 'I think this should work' or 'hopefully' undermine the clarity of a sign-off. Either you accept the risk or you do not.",
          coachingTip:
            "Replace any tentative language with firm statements. 'I accept' is stronger than 'I am comfortable with' in a direct negotiation context.",
          styleContext:
            "Direct communicators interpret hedging as reluctance. If you are signing off, commit fully. If you have reservations, state them as conditions, not concerns.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response does not clearly confirm acceptance of the risk. Alex asked for a sign-off, not a discussion. She cannot brief her team without a clear commitment from you.",
          observation:
            "Your response raises new questions or concerns instead of closing the agreement. Alex will see this as reopening a settled negotiation.",
          coachingTip:
            "Go back to Alex's request: accept the scope and the risk, in writing. Start with 'I confirm' and end with 'please proceed'. Keep everything in between factual.",
          styleContext:
            "In negotiations with direct communicators, the sign-off is the final step. If you cannot commit, say so clearly. If you can, do so without qualification.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (64-66)
  // ============================================

  // Scenario 64 - Priya Sharma, negotiation, foundation
  {
    id: "scenario-64",
    title: "The Partnership Pitch",
    context:
      "Priya is negotiating partnership terms with you for a joint training programme. She is excited about the potential and wants to shape the deal around the vision rather than getting bogged down in specifics.",
    chooseContext:
      "Priya has responded enthusiastically to your initial ideas but wants to expand the scope of the partnership significantly. She is painting a picture of a much bigger collaboration than you originally planned.",
    rewriteContext:
      "Priya wants you to draft a one-page partnership vision statement that captures the energy and ambition of the deal. She says the formal terms can come later.",
    characterId: "priya-sharma",
    dialogue:
      "This could be massive. Imagine if we combine your content expertise with our delivery platform, we could reach thousands of learners across the region. I do not want to get stuck on percentages yet. Let us talk about the vision first and work backwards from there.",
    chooseDialogue:
      "I love where this is going. What if we added a certification pathway too? And a community hub for graduates? The more I think about it, the bigger the opportunity. Let us not limit ourselves at this stage.",
    rewriteDialogue:
      "Can you write up a vision statement that really captures the excitement? Something that shows what this partnership could become, not just what it is on day one. Make it inspiring.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya wants to discuss the vision before the specifics and is painting a picture of a large-scale opportunity. Which communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with imagination and possibility. She explicitly defers the details in favour of the big picture, which is a hallmark of expressive communication.",
          observation:
            "Notice phrases like 'this could be massive' and 'imagine if'. Expressive communicators negotiate by building excitement around what is possible.",
          coachingTip:
            "When someone wants to talk vision before terms, they are likely expressive. Engage with their enthusiasm before steering towards specifics.",
          styleContext:
            "Expressive communicators see negotiations as creative opportunities. They are energised by possibility and can feel constrained by premature detail.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators are people-oriented, but Priya is driven by creative energy and ambition rather than harmony and consensus.",
          observation:
            "A supportive communicator would focus on how the partnership benefits everyone involved. Priya is focused on how big and exciting it could become.",
          coachingTip:
            "Expressive communicators negotiate with enthusiasm and vision. Supportive communicators negotiate with care and collaboration. Listen for the driving emotion.",
          styleContext:
            "The key difference is energy: expressive communicators bring excitement, while supportive communicators bring warmth.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not focused on data, process, or bottom-line outcomes. Her language is visionary and emotionally driven, which points away from analytical or direct styles.",
          observation:
            "There are no numbers, no deadlines, and no demand for specifics. Priya wants to explore the possibilities before committing to terms.",
          coachingTip:
            "Ask yourself: is this person leading with facts, actions, feelings, or ideas? Priya is leading with ideas, which signals expressive.",
          styleContext:
            "Expressive communicators often frustrate detail-oriented colleagues in negotiations because they resist early structure. Understanding this helps you adapt.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya wants to expand the partnership scope with certifications and a community hub. She is building momentum and does not want to be limited. How do you respond?",
      options: [
        {
          id: "s64-opt-a",
          text: "I love the ambition. A certification pathway would really set this apart from anything else in the market. Let us sketch out the full vision today, then I will map out what each phase would look like so we can bring it to life step by step.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Priya's enthusiasm, builds on her ideas, and gently introduces structure without dampening the energy. Expressive communicators respond well to people who share their excitement.",
        },
        {
          id: "s64-opt-b",
          text: "Those are interesting ideas. Before we go further though, we should probably pin down the core terms of the partnership so we know what we are working with.",
          score: 5,
          result: "partial",
          explanation:
            "This is sensible but feels like a handbrake to an expressive communicator. Priya is in creative flow and jumping to terms too early may feel dismissive.",
        },
        {
          id: "s64-opt-c",
          text: "We need to be realistic about what we can deliver in the first year. Adding certifications and a community hub would require significant investment. Let us focus on the core offering first.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down Priya's vision with practical objections. While the concerns may be valid, raising them this early will feel deflating to an expressive communicator who is trying to build momentum.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants an inspiring vision statement that captures what the partnership could become. Write it in an expressive style, leading with ambition and possibility rather than terms and conditions.",
      targetTraits: ["visionary", "enthusiastic", "big-picture", "inspiring"],
      exampleStrongResponse:
        "Together, we are building something that does not exist yet: a learning partnership that combines world-class content with a platform that reaches every corner of the region. From certified professionals to thriving alumni communities, this is not just a training programme. It is a movement. Phase one launches this autumn. The full vision unfolds over three years.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your vision statement captures the scale and ambition Priya is looking for. It is inspiring without being vague, and it gives a sense of momentum.",
          observation:
            "You balanced aspiration with just enough structure to feel credible. That is exactly what expressive communicators want: a dream with a direction.",
          coachingTip:
            "When writing for expressive communicators, lead with the destination, not the route. Paint the picture of success first, then hint at the roadmap.",
          styleContext:
            "Expressive communicators use vision statements to generate buy-in and excitement. The energy of the document matters as much as the content.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your statement covers the right ground but lacks the emotional energy Priya is looking for. It reads more like a plan than a vision.",
          observation:
            "Look for places where you have defaulted to practical language. Priya wants to feel the possibility, not just understand the logistics.",
          coachingTip:
            "Try replacing cautious phrases with bold ones. Instead of 'we aim to', use 'we will'. Instead of 'potentially', use 'imagine'.",
          styleContext:
            "Expressive communicators are motivated by language that moves them. Choose words that create energy and forward motion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your statement is too focused on practicalities and constraints. Priya asked for inspiration, not a project plan. The tone does not match her request.",
          observation:
            "Your response reads like it was written for an analytical or direct audience. Priya will feel her enthusiasm has been filtered out.",
          coachingTip:
            "Set aside the constraints for now and write as if anything were possible. Priya wants to see the full picture before anyone starts trimming it.",
          styleContext:
            "In negotiations with expressive communicators, the vision document is a relationship-building tool. It shows you share their ambition.",
        },
      },
    },
  },

  // Scenario 65 - Marcus Webb, negotiation, intermediate
  {
    id: "scenario-65",
    title: "The Timeline Tangle",
    context:
      "Marcus is negotiating a timeline extension with you as the client contact. His team is behind schedule but he wants to reframe the conversation around delivering something better rather than something late.",
    chooseContext:
      "Marcus has pitched a revised creative direction that he believes justifies the delay. He is animated and passionate about the new approach but you are under pressure from your own stakeholders.",
    rewriteContext:
      "Marcus has persuaded you to consider the revised timeline. He wants you to write a brief message to your stakeholders reframing the delay as a strategic upgrade.",
    characterId: "marcus-webb",
    dialogue:
      "I know we are behind, but hear me out. What if I told you the delay gives us the chance to deliver something genuinely groundbreaking instead of just ticking the boxes? I have had this idea that could completely transform the user experience. Give me ten minutes to walk you through it.",
    chooseDialogue:
      "Picture this: instead of a standard onboarding flow, we build an interactive journey that adapts to each user's role. It is not just better, it is a completely different category of product. Yes, it takes three more weeks, but this is the version people will talk about.",
    rewriteDialogue:
      "You see it now, right? So tell your stakeholders this is not a delay. It is a strategic pivot. Frame it as an upgrade. I will back you up with a demo prototype by Friday.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus is reframing a project delay as an opportunity for something 'groundbreaking'. He is enthusiastic and wants to walk you through his creative vision. Which style is this?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is turning a difficult negotiation into an exciting pitch. He reframes the delay as an opportunity and leads with creative energy rather than apologies or data.",
          observation:
            "Notice how Marcus asks for your attention ('hear me out', 'give me ten minutes') before presenting facts. Expressive communicators want engagement before agreement.",
          coachingTip:
            "When someone reframes a setback as an opportunity and leads with enthusiasm, they are negotiating in an expressive style. Acknowledge the vision before addressing the practicalities.",
          styleContext:
            "Expressive communicators are natural reframers. In negotiations, they instinctively turn problems into possibilities. This can be powerful but needs grounding.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is confident and assertive, which can look direct. But his approach centres on creative storytelling rather than demands or ultimatums.",
          observation:
            "A direct communicator would say 'we need three more weeks, here is why'. Marcus says 'imagine what we could build with three more weeks'. The framing is completely different.",
          coachingTip:
            "Direct communicators negotiate with facts and positions. Expressive communicators negotiate with narratives and vision. Listen for the storytelling.",
          styleContext:
            "Both direct and expressive styles bring confidence to negotiations, but the source is different: direct confidence comes from certainty, expressive confidence comes from possibility.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not focused on data, consensus, or careful analysis. He is selling a creative vision and using energy to persuade you.",
          observation:
            "There are no spreadsheets, no risk assessments, and no requests for group input. Marcus is making a personal, passionate case for his idea.",
          coachingTip:
            "Ask yourself: is this person trying to prove, decide, connect, or inspire? Marcus is trying to inspire, which is the core of expressive communication.",
          styleContext:
            "Expressive communicators bring a sales mindset to internal negotiations. They pitch ideas with the same energy they would use with external clients.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus is pitching a completely revised creative direction that adds three weeks to the timeline. He believes it will transform the product. How do you respond?",
      options: [
        {
          id: "s65-opt-a",
          text: "The adaptive journey idea is genuinely exciting and I can see why you are fired up about it. Here is what I need to make this work: a one-page summary of the upgrade I can present to my stakeholders, and the demo prototype you mentioned by Friday. If those land well, I will champion the revised timeline.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's creative vision while channelling the energy into practical next steps. You are speaking his language but also protecting your own position. Expressive communicators respond well to allies who share their enthusiasm.",
        },
        {
          id: "s65-opt-b",
          text: "It sounds interesting but I am not sure my stakeholders will accept a three-week delay. Can you give me the key benefits in bullet points so I can make the case?",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but undersells your engagement with the idea. Marcus wants you to feel the excitement, not just process the information. Asking for bullet points feels transactional.",
        },
        {
          id: "s65-opt-c",
          text: "Marcus, I appreciate the creativity, but a delay is a delay. My stakeholders will not accept a three-week extension regardless of the reason. We need to stick to the original timeline.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the conversation entirely. Even if the timeline is firm, dismissing Marcus's vision this bluntly will damage the relationship and his motivation. Expressive communicators take rejection of their ideas personally.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants you to message your stakeholders reframing the delay as a strategic upgrade. Write this in an expressive style that generates excitement about the revised direction.",
      targetTraits: ["reframing", "enthusiastic", "narrative-driven", "persuasive"],
      exampleStrongResponse:
        "Quick update on the onboarding project. The team has identified an opportunity to deliver something significantly stronger than the original brief. Instead of a standard linear flow, we are building an adaptive experience that responds to each user's role and context. This takes an additional three weeks but elevates the product from functional to exceptional. A working prototype will be ready by Friday for your review.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message reframes the delay as a strategic decision and generates enthusiasm without overselling. Marcus will feel you have genuinely bought into the vision.",
          observation:
            "You used language that positions the change as an upgrade rather than a setback. That is exactly the reframing Marcus was looking for.",
          coachingTip:
            "When communicating on behalf of an expressive counterpart, channel their energy but add enough structure to satisfy your audience. Balance vision with credibility.",
          styleContext:
            "Expressive communicators are skilled at reframing. Learning to do this authentically is a powerful negotiation technique.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the facts but lacks the energy Marcus was hoping for. It reads more like a status update than a strategic reframe.",
          observation:
            "The information is correct but the tone is neutral. Marcus wanted you to sell the opportunity, not just report it.",
          coachingTip:
            "Try adding a line that captures the impact or ambition. What will this upgrade mean for users? Why is it worth the wait?",
          styleContext:
            "Expressive communicators want their allies to advocate with passion, not just accuracy. Bring some of their energy into your communication.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like an apology for a delay rather than an announcement of an upgrade. Marcus specifically asked you to reframe, not to report.",
          observation:
            "Leading with the delay and then trying to justify it reverses the framing Marcus wants. Lead with the opportunity.",
          coachingTip:
            "Restructure your message: start with what is getting better, then mention the timeline change, then describe next steps. The order matters.",
          styleContext:
            "In negotiations with expressive communicators, how you present information is as important as what information you present. Framing drives perception.",
        },
      },
    },
  },

  // Scenario 66 - Nina Okafor, negotiation, advanced
  {
    id: "scenario-66",
    title: "The Resource Rally",
    context:
      "Nina is negotiating resource allocation for a critical project and wants to secure the best people from across the organisation. She is making her case with passion and creativity, framing the project as a once-in-a-generation opportunity.",
    chooseContext:
      "Nina has made an impassioned case for her project but other department heads are pushing back. She is looking to you as an ally and is using storytelling to bring you on side.",
    rewriteContext:
      "Nina has won the initial argument but needs you to co-author a proposal to the leadership team. She wants the document to inspire commitment, not just approval.",
    characterId: "nina-okafor",
    dialogue:
      "This is not just another project. This is the one that defines what this organisation becomes over the next five years. I need your best people, not whoever is available. I am building a dream team and I want you to be part of making that happen. Who is in?",
    chooseDialogue:
      "Look, the other departments are playing it safe. They want to protect their resources and keep things comfortable. But comfort does not build the future. I need people who believe in this vision as much as I do. Tell me you see what I see.",
    rewriteDialogue:
      "We have got the green light in principle. Now we need a proposal that makes the leadership team feel the urgency. Not a spreadsheet, not a risk register. A story. Something that makes them want to be part of this.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina is framing her resource request as a once-in-a-generation opportunity and asking you to join a 'dream team'. She is using emotional language and vision to negotiate. Which style is this?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina is negotiating through inspiration. She frames the project as transformational, appeals to ambition, and recruits allies through shared vision. That is expressive communication at an advanced level.",
          observation:
            "Notice how Nina positions the negotiation as a choice between playing it safe and building the future. Expressive communicators create narratives that make their preferred outcome feel inevitable.",
          coachingTip:
            "Advanced expressive negotiators use identity and belonging to persuade. They make you want to be part of the story. Recognise this tactic so you can engage with it thoughtfully.",
          styleContext:
            "Expressive communicators at their most influential do not just ask for resources. They invite you into a shared mission. This is a sophisticated persuasion technique.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is certainly assertive, which can look direct. But her assertiveness comes from passion and vision, not from positional authority or demands.",
          observation:
            "A direct communicator would say 'I need these people, make it happen'. Nina says 'be part of building something extraordinary'. The appeal is emotional, not transactional.",
          coachingTip:
            "When someone appeals to your sense of purpose or identity, they are likely expressive. When they appeal to your sense of urgency or accountability, they are likely direct.",
          styleContext:
            "Both styles can be persuasive in negotiations but through different mechanisms: direct through authority, expressive through inspiration.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not presenting data, seeking consensus, or focusing on process. She is selling a vision and asking for emotional commitment.",
          observation:
            "Phrases like 'dream team', 'defines what this organisation becomes', and 'who is in?' are designed to stir excitement, not satisfy analytical scrutiny.",
          coachingTip:
            "Listen for the emotional register of the language. If someone is trying to inspire action through vision and belonging, that is expressive communication.",
          styleContext:
            "In resource negotiations, expressive communicators compete not by proving ROI but by creating a compelling narrative that makes people want to contribute.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina is asking you to commit emotionally to her vision while other departments are pushing back. She wants to know you share her ambition. How do you respond?",
      options: [
        {
          id: "s66-opt-a",
          text: "I see it. This project has the potential to reshape how we operate, and I want to be part of that. I can commit two of my strongest people for the first phase. Let us build the momentum now and bring the others along once they see what we are creating.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Nina's emotional register while offering concrete support. You are speaking her language, sharing the vision, and providing a specific commitment. Expressive communicators are energised by allies who share their enthusiasm.",
        },
        {
          id: "s66-opt-b",
          text: "I appreciate the ambition, Nina. I would like to help but I need to understand the resource commitment in more detail before I can make any promises. Can you send me the project plan?",
          score: 5,
          result: "partial",
          explanation:
            "This is cautious and practical. While reasonable, asking for a project plan when Nina is seeking emotional buy-in may feel like a rejection of her vision. Timing matters with expressive communicators.",
        },
        {
          id: "s66-opt-c",
          text: "I think we need to be careful about overcommitting. My team already has a full workload and I cannot justify pulling people off existing projects without a proper business case and approval from my line manager.",
          score: 0,
          result: "weak",
          explanation:
            "This response prioritises caution and process over the relationship and the opportunity. Nina will feel you are one of the 'safe' department heads she was criticising. Even valid concerns need a different framing with an expressive negotiator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants a proposal that makes the leadership team feel the urgency and want to be part of the project. Write a compelling opening paragraph in an expressive style that inspires commitment.",
      targetTraits: ["inspirational", "narrative-driven", "urgency", "visionary"],
      exampleStrongResponse:
        "In five years, this organisation will look back at this moment as the point where everything changed. Project Horizon is not an incremental improvement. It is a fundamental reimagining of how we develop talent, serve our clients, and compete in a market that will not wait for us to catch up. The team we are assembling represents the best of what we have. The question is not whether we can afford to do this. It is whether we can afford not to.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your opening creates urgency, paints a compelling future, and ends with a powerful rhetorical question. Nina will feel you have captured the essence of what she is trying to achieve.",
          observation:
            "You used narrative framing to make the proposal feel like a defining moment rather than a routine request. That is exactly the energy Nina wants.",
          coachingTip:
            "When co-authoring with an expressive communicator, lean into the storytelling. Your job is to amplify their vision, not temper it. Save the tempering for the appendix.",
          styleContext:
            "Expressive communicators use proposals as persuasion tools. The narrative arc is as important as the business case.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your paragraph makes the case but lacks the emotional punch Nina is looking for. It reads more like a justification than an invitation.",
          observation:
            "Look for places where you have defaulted to analytical or cautious language. Nina wants the reader to feel urgency, not just understand it.",
          coachingTip:
            "Try reading your paragraph aloud. Does it create energy? Does it make the reader want to act? If not, strengthen the emotional language.",
          styleContext:
            "Expressive communicators measure a proposal's success by the reaction it generates, not just the approval it secures.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paragraph does not create the sense of urgency or inspiration Nina requested. It reads like a business case summary rather than a call to action.",
          observation:
            "Nina specifically asked for something that makes people want to be part of this. Your response explains the project but does not sell the opportunity.",
          coachingTip:
            "Start with the future and work backwards. What will the world look like if this succeeds? What happens if it does not? Make the leadership team feel the stakes.",
          styleContext:
            "In negotiations at the leadership level, expressive communicators know that decisions are driven by emotion and justified by logic. Lead with the emotion.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (67-69)
  // ============================================

  // Scenario 67 - Tom Brennan, negotiation, foundation
  {
    id: "scenario-67",
    title: "The Salary Conversation",
    context:
      "Tom is a high-performing team member who has asked for a salary review. He is uncomfortable with confrontation and has framed the conversation carefully, emphasising his commitment to the team rather than making demands.",
    chooseContext:
      "Tom has acknowledged your constraints but is quietly persistent. He is not pushing aggressively but he has made it clear that he feels undervalued. He wants to find a solution that works for everyone.",
    rewriteContext:
      "Tom has accepted a phased approach to the salary increase. He wants you to confirm the arrangement in a way that feels fair and acknowledges his contribution.",
    characterId: "tom-brennan",
    dialogue:
      "I do not want to make this awkward, and I know budgets are tight. But I have been here three years now and I think my contribution has grown quite a lot since my last review. I was hoping we could find a way to reflect that, whatever that looks like.",
    chooseDialogue:
      "I appreciate you being honest about the budget situation. I am not looking for anything unreasonable. I just want to feel like the effort I put in is recognised. Maybe there is a middle ground that works for both of us?",
    rewriteDialogue:
      "A phased increase sounds fair. I am happy to work towards it. Could you put something in writing so we both know where we stand? I just want to make sure we are on the same page and that I am not being a nuisance about it.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has raised a salary discussion by emphasising his commitment and softening the request with phrases like 'I do not want to make this awkward'. Which style is he displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom's approach to negotiation is careful, considerate, and relationship-preserving. He softens his request, acknowledges constraints, and seeks a collaborative outcome. That is textbook supportive communication.",
          observation:
            "Notice how Tom preemptively apologises for any discomfort and frames his request as a hope rather than a demand. Supportive communicators prioritise the relationship even when advocating for themselves.",
          coachingTip:
            "When someone negotiates by minimising their own ask and showing concern for the other party's position, they are likely supportive. Honour that consideration in your response.",
          styleContext:
            "Supportive communicators often understate their case in negotiations. Their politeness can mask how strongly they feel about the issue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators are people-oriented, but Tom is not seeking excitement or creative expression. He wants acknowledgement and fairness.",
          observation:
            "An expressive communicator would make a bolder case, perhaps linking their contribution to a bigger vision. Tom is quiet, measured, and deferential.",
          coachingTip:
            "Supportive communicators negotiate softly. Expressive communicators negotiate passionately. The emotional register tells you which style you are dealing with.",
          styleContext:
            "Both styles care about people, but supportive communicators express it through consideration and care, while expressive communicators express it through energy and enthusiasm.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not being data-driven, demanding, or visionary. He is being careful, considerate, and relationship-conscious, all hallmarks of supportive communication.",
          observation:
            "Phrases like 'whatever that looks like' and 'I do not want to make this awkward' show someone prioritising harmony over outcomes.",
          coachingTip:
            "Look at what Tom cares about most in this negotiation: not the number, but the relationship. That tells you his style.",
          styleContext:
            "Supportive communicators in salary discussions often need more encouragement to state their true expectations. They tend to settle for less because they dislike conflict.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom wants to find a middle ground and feels undervalued. He is not being aggressive but he is quietly persistent. How do you respond?",
      options: [
        {
          id: "s67-opt-a",
          text: "Tom, I want you to know that your contribution is genuinely valued and this conversation is not awkward at all. You are right that your role has grown significantly. Let me propose a phased approach: a 5% increase now, with a review for a further adjustment in six months based on the targets we agree together. Does that feel fair to you?",
          score: 10,
          result: "strong",
          explanation:
            "This validates Tom's feelings, acknowledges his discomfort, and proposes a collaborative solution with clear steps. The question at the end invites his input, which supportive communicators appreciate.",
        },
        {
          id: "s67-opt-b",
          text: "I hear you, Tom. Let me look at the numbers and see what is possible. I will come back to you next week with a proposal.",
          score: 5,
          result: "partial",
          explanation:
            "This is neutral and reasonable but lacks the warmth and reassurance Tom needs. He left this conversation vulnerable and a delayed response may leave him anxious.",
        },
        {
          id: "s67-opt-c",
          text: "The budget is fixed this quarter. If there is room next financial year, I will consider it. For now, you will need to be patient.",
          score: 0,
          result: "weak",
          explanation:
            "This is blunt and dismissive. Tom took courage to raise this issue and a cold response will damage his trust and engagement. Supportive communicators internalise rejection deeply.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants written confirmation of the phased salary increase that feels fair and acknowledges his contribution. Write this in a supportive style that is warm, clear, and reassuring.",
      targetTraits: ["warm", "reassuring", "collaborative", "appreciative"],
      exampleStrongResponse:
        "Hi Tom,\n\nThank you for raising this. I want you to know how much I value your contribution to the team over the past three years, and this adjustment is well deserved.\n\nHere is what we have agreed:\n- Immediate 5% salary increase effective from 1 April\n- A further review in October, linked to the targets we will set together next week\n\nI am committed to making sure your development and compensation reflect the impact you have. If you have any questions or want to discuss anything further, my door is always open.\n\nBest,\n[Your name]",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your confirmation is warm, specific, and reassuring. Tom will feel valued and respected, which is exactly what a supportive communicator needs after a difficult conversation.",
          observation:
            "You combined the factual terms with genuine appreciation and an open invitation for further dialogue. That balance is perfect for a supportive recipient.",
          coachingTip:
            "When confirming agreements with supportive communicators, always pair the facts with emotional acknowledgement. The 'how' matters as much as the 'what'.",
          styleContext:
            "Supportive communicators save written confirmations and re-read them. The tone of your message will shape how Tom feels about the outcome long after the negotiation is over.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your confirmation covers the key terms but lacks the personal warmth Tom needs. It reads more like a formal HR letter than a message from a manager who values him.",
          observation:
            "Look for opportunities to add genuine appreciation and reassurance. Tom specifically asked for confirmation that he is 'not being a nuisance', so address that directly.",
          coachingTip:
            "Add one or two sentences that speak to Tom as a person, not just an employee. Acknowledge his courage in raising the issue and his importance to the team.",
          styleContext:
            "Supportive communicators interpret tone carefully. A confirmation that is factually correct but emotionally flat may leave Tom wondering if you really value him.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your confirmation is too transactional. It reads like a contract clause rather than a personal message to someone who trusted you with a vulnerable conversation.",
          observation:
            "Tom framed his request around feeling valued, not just being paid more. Your response needs to address the emotional dimension, not just the financial one.",
          coachingTip:
            "Rewrite with Tom's feelings in mind. Start with appreciation, confirm the terms in the middle, and close with reassurance and openness.",
          styleContext:
            "In negotiations with supportive communicators, the follow-up communication is as important as the deal itself. It either reinforces trust or undermines it.",
        },
      },
    },
  },

  // Scenario 68 - Leah Morgan, negotiation, intermediate
  {
    id: "scenario-68",
    title: "The SLA Reset",
    context:
      "Leah is renegotiating a service level agreement with you after a series of missed targets. She wants to find a fair resolution but is uncomfortable holding your team to account. She keeps emphasising that she understands the pressures you are under.",
    chooseContext:
      "Leah has heard your explanation but is still not satisfied with the current SLA performance. She is torn between pushing harder and maintaining the positive working relationship.",
    rewriteContext:
      "Leah has proposed revised SLA targets and wants you to respond with a counter-proposal. She has asked you to be honest but also to keep the tone constructive.",
    characterId: "leah-morgan",
    dialogue:
      "I know your team has been stretched and I genuinely sympathise with that. But the missed targets are affecting my team too, and I need to protect them. Can we look at this together and find something realistic that keeps everyone on track without putting unfair pressure on anyone?",
    chooseDialogue:
      "I do not want this to feel adversarial. You have explained the capacity issues and I understand. But I also have a responsibility to my stakeholders. Could we agree on a revised target that gives your team room to breathe but still gives mine what they need?",
    rewriteDialogue:
      "I have put together some suggested revisions. I tried to be fair. Have a look and tell me honestly what you think. If anything does not work, we can adjust. I would rather get something we both believe in than something that looks good on paper but falls apart in practice.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is renegotiating SLA targets but keeps emphasising fairness, understanding your pressures, and wanting to avoid adversarial dynamics. Which style is she displaying?",
      correctStyle: "supportive",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's negotiation approach is built around empathy, fairness, and relationship preservation. She explicitly says she does not want the process to feel adversarial, which is a classic supportive trait.",
          observation:
            "Notice how Leah validates your pressures before stating her own needs. Supportive communicators lead with understanding, even when they are the ones being let down.",
          coachingTip:
            "When someone negotiates by acknowledging your difficulties before raising their own concerns, they are likely supportive. Reciprocate that empathy to build trust.",
          styleContext:
            "Supportive communicators in SLA negotiations often settle for less than they should because they prioritise the relationship. Do not mistake their empathy for weakness.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does reference specific targets, which can seem analytical. But her primary concern is fairness and feelings, not data and process.",
          observation:
            "An analytical communicator would lead with the performance data and ask for root cause analysis. Leah leads with emotional context and seeks a collaborative resolution.",
          coachingTip:
            "If the conversation centres on how people feel about the outcome, think supportive. If it centres on what the evidence shows, think analytical.",
          styleContext:
            "Both supportive and analytical communicators can be thorough in negotiations, but for different reasons: one seeks fairness, the other seeks accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not being demanding, visionary, or purely data-focused. Her entire approach is designed to protect the relationship while addressing the problem.",
          observation:
            "Every sentence Leah speaks includes a reference to fairness, understanding, or collaboration. That is the language of a supportive communicator.",
          coachingTip:
            "Look at what Leah is optimising for: not speed, not creativity, not precision, but harmony. That is the clearest indicator of a supportive style.",
          styleContext:
            "Supportive communicators often make the best long-term negotiation partners because they genuinely care about outcomes that work for everyone.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants a revised target that gives your team room to breathe but still meets her stakeholders' needs. She does not want this to feel adversarial. How do you respond?",
      options: [
        {
          id: "s68-opt-a",
          text: "Thank you for being so understanding about the capacity issues, Leah. I appreciate that. Here is a proposal: we move the response target from 4 hours to 6 hours for the next quarter, then step it back down to 4 as we bring the new team members up to speed. That way your stakeholders see a clear commitment to improvement and my team has a realistic runway. How does that feel?",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Leah's collaborative approach, acknowledges her empathy, and offers a phased solution that addresses both sides. Ending with 'how does that feel' invites her input, which supportive communicators value.",
        },
        {
          id: "s68-opt-b",
          text: "I can commit to a 6-hour response time starting next month. That is the best I can offer given current resources. Let me know if that works.",
          score: 5,
          result: "partial",
          explanation:
            "This is direct and efficient but lacks the collaborative warmth Leah is seeking. She wants a conversation, not a take-it-or-leave-it offer.",
        },
        {
          id: "s68-opt-c",
          text: "Honestly, Leah, the targets were unrealistic from the start. We need to reset expectations across the board. I will send over what my team can realistically deliver and we can go from there.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the existing agreement and shifts blame. Leah has been empathetic and constructive; responding with defensiveness will damage the trust she is working hard to maintain.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has proposed revised SLA targets and asked for an honest, constructive counter-proposal. Write your response in a supportive style that is collaborative, fair, and relationship-focused.",
      targetTraits: ["collaborative", "fair-minded", "empathetic", "constructive"],
      exampleStrongResponse:
        "Hi Leah,\n\nThank you for putting this together. I can see you have been really thoughtful about balancing both teams' needs, and I appreciate that.\n\nI agree with most of your proposed revisions. The one area I would like to adjust is the resolution time for Priority 2 tickets. Moving from 8 hours to 12 hours for the first quarter would give my team the breathing room they need without significantly impacting your stakeholders. I am happy to commit to stepping it back to 8 hours from Q2 once recruitment is complete.\n\nI think this is a fair approach that sets both teams up to succeed. Let me know your thoughts and we can finalise together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your counter-proposal mirrors Leah's collaborative approach, acknowledges her effort, and suggests a specific adjustment with a clear rationale. The tone is warm and constructive throughout.",
          observation:
            "You matched Leah's communication style by leading with appreciation and framing your adjustment as a suggestion rather than a demand. That builds trust.",
          coachingTip:
            "In negotiations with supportive communicators, always frame counter-proposals as collaborative adjustments rather than rejections. The framing shapes how they receive the content.",
          styleContext:
            "Supportive communicators are more likely to agree to a counter-proposal that is presented collaboratively. The relationship dynamic influences the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your counter-proposal addresses the practical issue but lacks the warmth and acknowledgement Leah deserves. She put significant emotional effort into being fair.",
          observation:
            "Leah asked you to be honest but constructive. Your response may be honest but it needs more warmth to feel constructive to a supportive communicator.",
          coachingTip:
            "Add an opening line that acknowledges Leah's effort and a closing line that reinforces the collaborative spirit. Bookend the practical content with relational language.",
          styleContext:
            "Supportive communicators evaluate counter-proposals based on tone as much as content. A warm framing makes the same adjustment easier to accept.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too transactional or defensive for this context. Leah went out of her way to be fair and empathetic; your counter-proposal should reflect that same spirit.",
          observation:
            "If your response reads like it could have been written to any stakeholder, it misses the personal connection Leah is seeking.",
          coachingTip:
            "Rewrite with Leah in mind. Reference her effort, validate her proposal, then gently suggest your adjustment. Make it feel like a conversation between partners, not opposing parties.",
          styleContext:
            "Supportive communicators remember how negotiations made them feel long after the terms are forgotten. Invest in the relationship, not just the agreement.",
        },
      },
    },
  },

  // Scenario 69 - David Chen, negotiation, advanced
  {
    id: "scenario-69",
    title: "The Scope Standoff",
    context:
      "David is caught in the middle of a negotiation between his team and yours over changes to project requirements. He is trying to find a solution that respects everyone's concerns, but the pressure is building and he is visibly uncomfortable with the conflict.",
    chooseContext:
      "David has listened carefully to both sides and is now proposing a compromise. He is clearly stressed by the disagreement and is working hard to keep things collaborative despite rising tensions.",
    rewriteContext:
      "David has brokered a tentative agreement but is worried that one side feels they lost out. He wants you to help him communicate the decision in a way that makes everyone feel heard.",
    characterId: "david-chen",
    dialogue:
      "I have spoken to both teams and I think I understand where everyone is coming from. The requirement changes matter to your side, and the timeline matters to mine. I do not want anyone to feel steamrolled. Can we find something that honours both priorities without forcing either side to give up what matters most?",
    chooseDialogue:
      "Here is what I am thinking. What if we phase the requirement changes so your highest-priority items go into this release and the rest move to the next sprint? That way neither team has to sacrifice their core commitments. I have checked with my side and they are willing if yours are. What do you think?",
    rewriteDialogue:
      "We have reached an agreement, which is great. But I am a bit worried that Sarah's team feels they gave up more than they got. Could you help me draft something that frames this positively for everyone? I want people to walk away feeling good about the outcome, not just accepting it.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David is mediating between two teams, emphasising that he does not want anyone to feel 'steamrolled', and is working hard to find a solution that honours both sides. Which communication style is he demonstrating?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David is a natural mediator whose primary concern is that every person feels respected and heard. He prioritises emotional outcomes alongside practical ones, which is the hallmark of advanced supportive communication.",
          observation:
            "David does not just want a solution; he wants a solution that feels fair to everyone involved. That dual focus on outcome and feeling is distinctly supportive.",
          coachingTip:
            "When someone in a negotiation focuses as much on how people feel about the result as on the result itself, they are operating from a supportive style. Engage with both dimensions.",
          styleContext:
            "Supportive communicators make excellent mediators because they genuinely care about all parties. However, they can become paralysed when a fair outcome for everyone is not possible.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's concern for people's feelings could be read as expressive, but he lacks the creative energy and vision-driven approach of an expressive communicator. His focus is on harmony, not inspiration.",
          observation:
            "An expressive communicator mediating would try to reframe the situation as an exciting opportunity. David is trying to minimise harm and preserve relationships.",
          coachingTip:
            "Supportive mediators focus on fairness and feelings. Expressive mediators focus on reframing and energy. David's careful, measured approach points to supportive.",
          styleContext:
            "The emotional intent is the differentiator: supportive communicators want everyone comfortable; expressive communicators want everyone excited.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David shows no signs of wanting to dominate the discussion, drive towards data, or push for speed. His entire approach is built around empathy and consensus.",
          observation:
            "Every phrase David uses centres on mutual respect: 'honours both priorities', 'without forcing either side'. This is deeply supportive language.",
          coachingTip:
            "When someone uses the language of fairness, respect, and mutual benefit in a conflict situation, they are almost certainly supportive. That is their natural default under pressure.",
          styleContext:
            "Supportive communicators under negotiation pressure often become more empathetic, not less. They double down on relationship preservation when tensions rise.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has proposed phasing the requirement changes so both teams keep their core commitments. He has already checked with his side. How do you respond?",
      options: [
        {
          id: "s69-opt-a",
          text: "David, this is a really thoughtful compromise and I can see how much effort you have put into understanding both sides. I have spoken to my team and we are comfortable with phasing. Let us sit down together and prioritise the items so we can present a united front to both teams. I want to make sure your side feels this is fair too.",
          score: 10,
          result: "strong",
          explanation:
            "This matches David's collaborative energy, acknowledges his mediation effort, and extends the same care he has shown. Ending with concern for his team mirrors the supportive approach perfectly.",
        },
        {
          id: "s69-opt-b",
          text: "That could work. Let me review the priority list and come back to you with our top three items for this release.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical and reasonable but emotionally flat. David has invested significant emotional energy in this mediation and a purely transactional response may feel dismissive.",
        },
        {
          id: "s69-opt-c",
          text: "I appreciate the thought but I cannot agree to deferring any of the requirements. They are all critical and my stakeholders will not accept a phased approach. We need to find another way.",
          score: 0,
          result: "weak",
          explanation:
            "This rejects David's carefully crafted compromise outright. He has already consulted his team and put himself on the line. Dismissing his proposal without a collaborative alternative will be deeply discouraging for a supportive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David is worried that Sarah's team feels they lost out in the negotiation. Write a message that frames the outcome positively for everyone, in a supportive style that makes all parties feel valued and heard.",
      targetTraits: ["inclusive", "reassuring", "balanced", "appreciative"],
      exampleStrongResponse:
        "Hi everyone,\n\nThank you all for your flexibility and willingness to work through this together. Reaching a fair agreement when priorities compete is never easy, and I appreciate the constructive spirit from both teams.\n\nHere is what we have agreed:\n- Phase 1 (this sprint): Requirements A and B delivered alongside the existing timeline commitments\n- Phase 2 (next sprint): Requirements C and D, with dedicated resource allocated to ensure quality\n\nBoth phases carry equal priority and equal commitment. No items have been deprioritised; they have been sequenced to give each the attention it deserves.\n\nI am confident this approach sets everyone up for success. If anyone has concerns or wants to discuss further, please reach out. This works because we are all pulling in the same direction.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your message frames the outcome as a shared achievement, reassures both teams, and positions the phasing as a quality decision rather than a compromise. David will be relieved and grateful.",
          observation:
            "The phrase 'no items have been deprioritised, they have been sequenced' is a masterful reframe that protects everyone's sense of value. That is exactly what David was asking for.",
          coachingTip:
            "When communicating negotiation outcomes on behalf of a supportive colleague, always frame decisions as collaborative achievements. The narrative shapes how people feel about the result.",
          styleContext:
            "Supportive communicators care about the aftermath of negotiations as much as the outcome. How you communicate the decision determines whether people feel good or resentful.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the practical outcome but does not fully address David's concern about Sarah's team feeling like they lost. More reassurance and inclusive language is needed.",
          observation:
            "David specifically asked for a message that makes everyone feel heard. Look for places where you can add acknowledgement and appreciation.",
          coachingTip:
            "Add a line that explicitly values the contribution or flexibility of the team David is worried about. Make them feel seen.",
          styleContext:
            "In post-negotiation communications, supportive communicators need to see that everyone's contribution is acknowledged, especially the party that gave ground.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a decision announcement rather than a collaborative outcome summary. David wanted everyone to feel valued; this risks making the phased team feel deprioritised.",
          observation:
            "If your message focuses only on what was decided without acknowledging how people feel about it, you have missed the supportive dimension entirely.",
          coachingTip:
            "Rewrite with the emotional outcome in mind. Every team should finish reading your message feeling that their needs were understood and their contribution was valued.",
          styleContext:
            "Supportive communicators judge negotiation success by relationship health, not just contractual terms. Your communication should reinforce that the relationships are intact.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (70-72)
  // ============================================

  // Scenario 70 - Rachel Finch, negotiation, foundation
  {
    id: "scenario-70",
    title: "The Vendor Verdict",
    context:
      "Rachel is leading a vendor pricing negotiation for a major procurement. She has prepared a detailed comparison of three suppliers and wants to discuss the data before making any commitments.",
    chooseContext:
      "Rachel has presented her analysis and is questioning some of the assumptions in the vendor's proposal. She is methodical and wants to ensure every figure is substantiated before moving forward.",
    rewriteContext:
      "Rachel has identified her preferred vendor but wants you to draft the negotiation response, ensuring it is evidence-based and references specific data points from the evaluation.",
    characterId: "rachel-finch",
    dialogue:
      "I have benchmarked all three vendors across 14 criteria. Vendor B scores highest on 9 of them, but their pricing model has two variables I cannot validate without seeing their cost breakdown. Before we negotiate terms, I need to understand those numbers. Can you get me the underlying data?",
    chooseDialogue:
      "Their volume discount structure does not add up. At 500 units the discount is 12%, but at 1,000 units it only rises to 14%. That is a diminishing rate of return that does not match industry norms. I want to challenge that before we agree to anything.",
    rewriteDialogue:
      "Good. Now draft the negotiation response. Reference the benchmark data, flag the pricing discrepancy, and request a revised schedule. Keep it factual. I do not want any language that commits us before we have verified their figures.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has benchmarked three vendors across 14 criteria and wants to understand the underlying cost data before negotiating. Which communication style is she displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's approach is methodical, evidence-based, and process-driven. She will not negotiate until she understands the data, which is the defining trait of analytical communication.",
          observation:
            "Notice how Rachel has structured her analysis (14 criteria, specific scores) and identified a gap she needs filled before proceeding. Analytical communicators prepare thoroughly and negotiate from evidence.",
          coachingTip:
            "When someone requests underlying data before committing to terms, they are signalling an analytical style. Provide the evidence they need rather than pushing for a quick decision.",
          styleContext:
            "Analytical communicators see negotiation preparation as essential, not optional. They will resist any pressure to commit before the analysis is complete.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is task-focused, which can seem direct. But her priority is understanding the data, not closing the deal quickly. A direct communicator would push for a decision once the top-line figures looked right.",
          observation:
            "Rachel is drilling into the methodology behind the numbers. A direct communicator would accept the headline figures and move to terms.",
          coachingTip:
            "If someone is focused on closing quickly, think direct. If they are focused on verifying thoroughly, think analytical.",
          styleContext:
            "Direct and analytical communicators both value facts, but they use them differently. Direct communicators use facts to accelerate. Analytical communicators use facts to validate.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel shows no interest in the relationship with the vendor or in creative reframing. She is focused entirely on the rigour of the data and the integrity of the process.",
          observation:
            "There is no emotional language, no visionary framing, and no concern about how the vendor feels. Rachel wants accuracy.",
          coachingTip:
            "Look at what drives the person's negotiation behaviour. If it is evidence and process, that is analytical. If it is relationships or vision, look elsewhere.",
          styleContext:
            "Analytical communicators in procurement negotiations are the most thorough evaluators. Their rigour protects the organisation from bad deals.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has identified a pricing discrepancy in the vendor's volume discount structure and wants to challenge it before agreeing to anything. How do you respond?",
      options: [
        {
          id: "s70-opt-a",
          text: "Good catch. The industry benchmark for volume discounts at that scale is typically 18 to 20% at the 1,000-unit tier. I will draft a response that references the benchmark data and asks them to justify the 14% figure with a cost breakdown. We should also request their pricing methodology documentation.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Rachel's analytical approach by validating her observation with additional evidence, proposing a structured response, and requesting documentation. Analytical communicators respect counterparts who bring data to the table.",
        },
        {
          id: "s70-opt-b",
          text: "You are probably right. Let us push back on the pricing and see if they will come down. I will draft something this afternoon.",
          score: 5,
          result: "partial",
          explanation:
            "This agrees with Rachel but lacks the specificity she expects. 'Push back' is too vague for someone who wants a data-driven negotiation strategy.",
        },
        {
          id: "s70-opt-c",
          text: "I think we are overcomplicating this. The overall price is within budget and Vendor B scored highest. Let us just lock it in and move on.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Rachel's analysis entirely. Telling an analytical communicator to ignore a data discrepancy and 'just move on' undermines their core approach and will erode trust.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to draft a negotiation response to the vendor that references benchmark data, flags the pricing discrepancy, and requests a revised schedule. Write it in an analytical style, keeping it factual and non-committal.",
      targetTraits: ["evidence-based", "precise", "non-committal", "structured"],
      exampleStrongResponse:
        "Dear Vendor B,\n\nThank you for your proposal dated 28 February. We have completed a benchmarking exercise across three shortlisted suppliers using 14 evaluation criteria.\n\nYour proposal scores favourably on 9 criteria. However, we have identified a discrepancy in the volume discount structure: the increment from 12% (500 units) to 14% (1,000 units) represents a diminishing rate of return that falls below industry norms of 18 to 20% at the 1,000-unit tier.\n\nPlease provide:\n1. A detailed cost breakdown supporting the current discount structure\n2. Your pricing methodology documentation\n3. A revised discount schedule reflecting the volume commitment\n\nWe will review the updated information before proceeding to contract terms.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response is structured, evidence-based, and carefully non-committal. Rachel will appreciate the precision and the clear separation of fact from decision.",
          observation:
            "You referenced specific data points, made a clear request, and avoided any language that suggests a commitment. That is exactly what an analytical communicator wants.",
          coachingTip:
            "In vendor negotiations for analytical stakeholders, always separate the evaluation from the decision. Present evidence, request clarification, then decide. Never conflate the steps.",
          styleContext:
            "Analytical communicators view non-committal language as strength, not weakness. It signals that the decision will be made on evidence, which is exactly their philosophy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your response flags the issue but lacks the specificity Rachel expects. Reference the actual numbers and benchmarks to strengthen the case.",
          observation:
            "Analytical communicators want to see the evidence embedded in the communication, not just referenced. Show the data.",
          coachingTip:
            "Include the specific figures: the discount percentages, the industry benchmarks, and the gap. Let the data make the argument.",
          styleContext:
            "Analytical communicators trust communications that contain verifiable data. Generalisations weaken the message.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too informal or committal for Rachel's requirements. She specifically said she does not want any language that commits before the figures are verified.",
          observation:
            "Check for phrases that imply agreement or enthusiasm. Rachel wants a neutral, evidence-based request for information, not a warm message.",
          coachingTip:
            "Strip out any evaluative language ('we are excited', 'great proposal') and replace it with objective statements. Let the data speak.",
          styleContext:
            "Analytical communicators in vendor negotiations view premature warmth as a negotiating weakness. Stay neutral until the evidence supports a decision.",
        },
      },
    },
  },

  // Scenario 71 - Owen Grant, negotiation, intermediate
  {
    id: "scenario-71",
    title: "The Terms Table",
    context:
      "Owen is reviewing proposed terms and conditions with a new client. He has identified several clauses that create risk for the organisation and wants to negotiate amendments before the contract is signed.",
    chooseContext:
      "Owen has presented his analysis of the risky clauses and the client has pushed back, saying the terms are standard. Owen is not satisfied and wants to see the evidence for that claim.",
    rewriteContext:
      "Owen has negotiated three amendments and wants you to draft the updated clause language. He insists the wording must be precise and leave no room for interpretation.",
    characterId: "owen-grant",
    dialogue:
      "I have reviewed the proposed terms line by line. Clauses 4.2, 7.1, and 9.3 create unacceptable exposure for us. Clause 4.2 has an uncapped liability provision, 7.1 allows unilateral scope changes, and 9.3 has a termination clause that only favours their side. I need these addressed before I can recommend we proceed.",
    chooseDialogue:
      "They say the terms are 'industry standard' but I have checked three comparable contracts from the last 18 months and none of them include an uncapped liability clause. I want them to provide evidence for that claim or agree to a cap. We should not accept assertions without data.",
    rewriteDialogue:
      "We have agreed the amendments. Now draft the revised clause language. Every word matters here. I need the liability cap expressed as a specific multiple of the annual contract value, and the termination clause must be reciprocal with a minimum 90-day notice period on both sides. No ambiguity.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has reviewed the contract line by line, identified three specific clauses that create risk, and will not proceed until they are addressed. Which communication style is he using?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's clause-by-clause analysis, specific risk identification, and refusal to proceed without resolution are hallmarks of analytical communication. He negotiates from evidence, not instinct.",
          observation:
            "Notice how Owen references specific clause numbers and categorises the risks precisely. Analytical communicators in contract negotiations are systematic and thorough.",
          coachingTip:
            "When someone negotiates by referencing specific clauses and requesting evidence-based justification, they are analytical. Meet them with equal precision.",
          styleContext:
            "Analytical communicators treat contract negotiations as a quality assurance process. Every clause must withstand scrutiny before they will endorse it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is certainly assertive about his position, which can seem direct. But his assertiveness is rooted in analysis, not authority. He is not demanding a decision; he is demanding evidence.",
          observation:
            "A direct communicator would say 'fix these clauses or we walk'. Owen says 'address these clauses so I can recommend we proceed'. The difference is process versus outcome.",
          coachingTip:
            "Direct communicators negotiate to close. Analytical communicators negotiate to validate. Owen's focus on verification before recommendation is the key indicator.",
          styleContext:
            "Both styles can be firm in contract negotiations, but for different reasons: direct for speed, analytical for accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not focused on relationships, emotions, or creative vision. His approach is purely risk-based, evidence-driven, and process-oriented.",
          observation:
            "Every point Owen raises is grounded in specific contractual language and risk assessment. That is analytical communication in its purest form.",
          coachingTip:
            "Look at the negotiation toolkit: if someone uses risk analysis, clause references, and evidence requests, they are almost certainly analytical.",
          styleContext:
            "Analytical communicators are invaluable in contract negotiations because they catch risks others miss. Their thoroughness protects the organisation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has challenged the client's claim that the terms are 'industry standard' and wants evidence. The client is getting impatient. How do you support Owen's position?",
      options: [
        {
          id: "s71-opt-a",
          text: "Owen is right to challenge that. I have pulled three comparable contracts from our portfolio and none include uncapped liability. I suggest we present those as counter-evidence and propose a cap at 2x the annual contract value. That is defensible, fair, and consistent with our risk framework.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Owen with additional evidence, proposes a specific and justified counter-position, and references an established framework. Analytical communicators trust colleagues who bring data to reinforce their analysis.",
        },
        {
          id: "s71-opt-b",
          text: "I agree the uncapped liability is a problem. Let us push back on that one and see if they will negotiate. We can probably live with the other two clauses as they are.",
          score: 5,
          result: "partial",
          explanation:
            "This partially supports Owen but dismisses two of his three concerns without justification. An analytical communicator has raised three risks for a reason and expects all three to be addressed.",
        },
        {
          id: "s71-opt-c",
          text: "I think we are at risk of losing this client if we push too hard on the terms. The commercial opportunity outweighs the contractual risk. Can we just agree and move forward?",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises the commercial relationship over contractual rigour, which directly contradicts Owen's analytical approach. He has identified genuine risks and dismissing them will undermine his trust in you.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to draft the revised clause language with a specific liability cap and a reciprocal termination clause. Write the amended wording in an analytical style, ensuring precision and zero ambiguity.",
      targetTraits: ["precise", "unambiguous", "structured", "evidence-referenced"],
      exampleStrongResponse:
        "Clause 4.2 (Liability Cap) - Revised:\nThe total aggregate liability of either party under this agreement shall not exceed two (2) times the annual contract value, calculated on the basis of fees paid or payable in the twelve (12) months preceding the date of the claim.\n\nClause 9.3 (Termination) - Revised:\nEither party may terminate this agreement by providing ninety (90) days written notice to the other party. This right of termination is reciprocal and applies equally to both parties under all circumstances outlined in Schedule 3.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your clause language is precise, unambiguous, and structured exactly as Owen requested. The specific multiplier and the reciprocal termination wording leave no room for misinterpretation.",
          observation:
            "You expressed the liability cap as a specific multiple and included the calculation basis. That level of precision is what analytical communicators require in contract language.",
          coachingTip:
            "In legal drafting for analytical stakeholders, every qualifier matters. Words like 'reasonable', 'approximately', or 'generally' introduce the ambiguity they are trying to eliminate.",
          styleContext:
            "Analytical communicators read contracts the way engineers read specifications. If a term can be interpreted two ways, they will flag it as a defect.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your clause language covers the intent but lacks some of the precision Owen requires. Check for any terms that could be interpreted differently by each party.",
          observation:
            "Owen said 'every word matters'. Review your wording for any vague terms or missing specifics that could create a dispute later.",
          coachingTip:
            "Read each clause as if you were looking for a loophole. If you find one, so will the other party. Tighten the language until there is only one possible reading.",
          styleContext:
            "Analytical communicators in contract negotiations will reject language that is 'close enough'. For them, precision is not a preference; it is a requirement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your clause language is too general or informal for Owen's standards. He specifically asked for precise wording with no ambiguity, and your draft does not meet that brief.",
          observation:
            "Contract language for an analytical stakeholder must be exact. Phrases like 'reasonable efforts' or 'as appropriate' are the kind of vagueness Owen is trying to eliminate.",
          coachingTip:
            "Replace every qualitative term with a quantitative one. Instead of 'reasonable notice', use '90 days written notice'. Instead of 'appropriate cap', use '2x annual contract value'.",
          styleContext:
            "Analytical communicators view imprecise contract language as a risk factor. Your drafting should eliminate interpretation, not invite it.",
        },
      },
    },
  },

  // Scenario 72 - Fiona Banks, negotiation, advanced
  {
    id: "scenario-72",
    title: "The Priority Protocol",
    context:
      "Fiona is leading a cross-functional priority negotiation where four departments are competing for a shared pool of development resources. She has built a scoring matrix to evaluate each request objectively and wants the allocation to be data-driven, not political.",
    chooseContext:
      "Fiona has presented her scoring matrix but two department heads are challenging the weighting methodology. Fiona is calmly defending her approach with evidence and inviting structured feedback.",
    rewriteContext:
      "Fiona has finalised the priority rankings and wants you to draft the allocation memo. She insists it must show the methodology, the scores, and the rationale for each ranking so that no one can claim the process was opaque.",
    characterId: "fiona-banks",
    dialogue:
      "I have scored every request against five weighted criteria: strategic alignment, revenue impact, customer risk, implementation complexity, and resource efficiency. The weights were calibrated using last year's actuals and validated by finance. I would like to walk you through the methodology before we discuss the results.",
    chooseDialogue:
      "I hear the objection about the weighting, and it is a fair challenge. Here is my rationale: strategic alignment carries 30% because the board's stated priority is market growth. Revenue impact carries 25% because it directly maps to the financial targets. If you believe the weights should differ, show me the data and I will recalibrate. I am not attached to my model; I am attached to getting it right.",
    rewriteDialogue:
      "The rankings are final. Now I need the allocation memo to be completely transparent. Include the scoring matrix, the weights, and a one-line rationale for each department's ranking. Anyone reading this document should be able to trace the logic from input to output without asking a single question.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has built a weighted scoring matrix calibrated against historical data and validated by finance. She wants to walk through the methodology before discussing results. Which style is this?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's approach is a masterclass in analytical negotiation: a structured framework, weighted criteria, historical calibration, and external validation. She has built an evidence fortress before the discussion even begins.",
          observation:
            "Notice that Fiona wants to explain the methodology before the results. Analytical communicators believe that if the process is sound, the outcome is defensible. They build credibility through transparency.",
          coachingTip:
            "When someone insists on walking through their methodology before sharing conclusions, they are deeply analytical. Engage with the process first, then the results.",
          styleContext:
            "Analytical communicators at the advanced level do not just use data; they build systems for generating and validating data. Their negotiation power comes from methodological rigour.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is certainly decisive, which can seem direct. But her decisiveness is built on a validated analytical framework, not on positional authority or speed.",
          observation:
            "A direct communicator would present the results and defend them. Fiona presents the methodology and invites scrutiny. The sequence reveals the style.",
          coachingTip:
            "Direct communicators lead with conclusions. Analytical communicators lead with the logic that produced the conclusions. Fiona's insistence on methodology-first is the key tell.",
          styleContext:
            "In priority negotiations, direct communicators fight for their position. Analytical communicators fight for the integrity of the process. Both can be equally effective.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not focused on people's feelings, creative reframing, or relationship dynamics. Her entire approach is structured, evidence-based, and process-oriented.",
          observation:
            "There is no emotional language, no visionary framing, and no concern about how people feel about the process. Fiona trusts the data to produce the right answer.",
          coachingTip:
            "When someone builds a scoring matrix and validates it externally before a negotiation, they are analytical. That level of preparation is the strongest signal.",
          styleContext:
            "Analytical communicators in priority negotiations often face resistance because their rigour can feel impersonal. Understanding this dynamic helps you engage with them productively.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Two department heads are challenging Fiona's weighting methodology. She has invited data-driven feedback and says she will recalibrate if the evidence supports it. How do you engage constructively?",
      options: [
        {
          id: "s72-opt-a",
          text: "I think the weights are well-calibrated but I have one data point to consider. Our department's customer risk score may be understated. Last quarter we had three escalations that cost GBP 45,000 in remediation. If we factor that in, customer risk might warrant a higher weight than 15%. Here is the data for your review.",
          score: 10,
          result: "strong",
          explanation:
            "This respects Fiona's framework, offers a specific and evidenced challenge, and provides data for her to evaluate. Analytical communicators welcome constructive scrutiny when it is backed by evidence.",
        },
        {
          id: "s72-opt-b",
          text: "I think the overall approach is sound. My only concern is that the customer risk weighting might be too low. Could we revisit that one?",
          score: 5,
          result: "partial",
          explanation:
            "This raises the right concern but without the supporting evidence Fiona needs. She has explicitly asked challengers to 'show me the data'. A concern without data is just an opinion to an analytical communicator.",
        },
        {
          id: "s72-opt-c",
          text: "Honestly, I think this matrix is overcomplicating things. We all know which projects matter most. Can we just discuss it like normal people and reach a consensus?",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Fiona's entire analytical framework as unnecessary. For someone who has invested significant effort in building an objective process, this is deeply disrespectful and will shut down any collaborative goodwill.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a fully transparent allocation memo that includes the scoring matrix, weights, and a rationale for each ranking. Write the opening section and the first two department entries in an analytical style that makes the logic completely traceable.",
      targetTraits: ["transparent", "structured", "evidence-based", "traceable"],
      exampleStrongResponse:
        "Q3 Development Resource Allocation Memo\n\nMethodology:\nAll requests were evaluated against five weighted criteria: strategic alignment (30%), revenue impact (25%), customer risk (20%), implementation complexity (15%), and resource efficiency (10%). Weights were calibrated using FY2025 actuals and validated by the finance team on 4 March 2026.\n\nScoring Scale: 1 (low) to 5 (high). Final score = weighted sum across all criteria.\n\nRankings:\n\n1. Operations (Score: 4.35)\nRationale: Highest strategic alignment (5) and revenue impact (4) due to direct link to the board's market growth priority. Low implementation complexity (2) enables rapid deployment with minimal resource contention.\n\n2. Customer Success (Score: 3.90)\nRationale: Strongest customer risk score (5) driven by three Q4 escalations totalling GBP 45,000. Moderate strategic alignment (3) but high urgency due to contractual SLA commitments expiring in June.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your memo is fully transparent, methodologically sound, and traceable from criteria to scores to rankings. Fiona will be satisfied that anyone reading it can follow the logic without additional explanation.",
          observation:
            "You included the specific weights, the scoring scale, the validation source, and the per-department rationale. That level of traceability is exactly what Fiona requires.",
          coachingTip:
            "When writing for analytical stakeholders, always make the logic chain visible: criteria, weights, scores, rationale, conclusion. If any link is missing, they will question the result.",
          styleContext:
            "Analytical communicators use transparency as a negotiation tool. A fully documented process is harder to challenge than a gut-feel decision.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your memo includes the key elements but lacks some of the specificity Fiona requires. Check that every score has a traceable rationale and every weight has a justification.",
          observation:
            "Fiona said 'anyone reading this should be able to trace the logic from input to output without asking a single question'. Test your memo against that standard.",
          coachingTip:
            "Add the specific data points behind each score. Instead of saying 'high revenue impact', state the projected figure. Analytical communicators want evidence, not assertions.",
          styleContext:
            "Analytical communicators will test your memo by looking for gaps in the logic chain. Close those gaps before submitting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your memo does not meet Fiona's transparency requirements. The methodology is unclear, the scores are not explained, or the rationale is too general. She cannot defend a document that lacks rigour.",
          observation:
            "Fiona's standard is complete traceability. If a department head reads this and has to ask 'why did we score 3 on strategic alignment?', the memo has failed.",
          coachingTip:
            "Start with the methodology section: list every criterion and its weight with a justification. Then work through each department, showing the score for every criterion and the evidence behind it.",
          styleContext:
            "In cross-functional priority negotiations, analytical communicators use documentation as their primary defence. A well-structured memo prevents political challenges because the logic speaks for itself.",
        },
      },
    },
  },
];
