import { Scenario } from "@/types";

export const SCENARIOS_PART19: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (217-219)
  // ============================================

  // Scenario 217 - Jordan Cole, presentation, foundation
  {
    id: "scenario-217",
    title: "The Product Launch Briefing",
    context:
      "Your team is preparing a product launch presentation for the sales force. Jordan has been asked to brief the presenters and wants to ensure the message is sharp, memorable, and focused on what the sales team actually needs to close deals.",
    chooseContext:
      "Jordan has reviewed the draft presentation and is frustrated that it spends too much time on product history and not enough on competitive positioning. She is pushing for a complete restructure.",
    rewriteContext:
      "Jordan has asked you to rewrite the opening two minutes of the presentation so the sales team knows exactly what the product does, why it wins, and what objection to expect.",
    characterId: "jordan-cole",
    dialogue:
      "This presentation is twenty slides long and the product's key differentiator does not appear until slide eleven. Nobody in sales is still listening by slide eleven. Slide one should be: what does it do, why is it better than the competitor, and what is the one objection you will hear in every pitch. Everything else is background noise.",
    chooseDialogue:
      "I do not care about the development journey or the engineering challenges we overcame. Sales does not sell stories about our process. They sell outcomes. Tell them the outcome in one sentence, give them the competitive edge in one sentence, and arm them with the objection handler in one sentence. Three sentences. That is the entire opening.",
    rewriteDialogue:
      "Write the opening so a salesperson could read it once before walking into a meeting and feel prepared. No build-up, no narrative arc. Just the three things they need: what it does, why it wins, what to say when the client pushes back.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Jordan has demanded the product's key differentiator appear on slide one, dismissed the development story as irrelevant, and reduced the opening to three sentences. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan strips the presentation to its essential components, demands the most important information appear first, and measures the opening by whether it equips sales teams to act immediately. This is direct communication applied to presentation design.",
          observation:
            "Notice how Jordan defines the opening as three sentences: outcome, advantage, objection handler. Direct communicators think in deliverables, even when structuring presentations.",
          coachingTip:
            "When someone restructures a presentation around what the audience needs to do, not what the presenter wants to say, they are thinking directly. Match their focus on utility.",
          styleContext:
            "Direct communicators design presentations as tools, not performances. A good presentation arms the audience to act; a bad one entertains them into inaction.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan is structured and demanding, which can look analytical. But notice she is not asking for more detail - she is asking for less. The structure serves speed, not thoroughness.",
          observation:
            "An analytical communicator would want the competitive positioning supported by market data and feature comparisons. Jordan wants one sentence.",
          coachingTip:
            "Direct communicators edit by deletion. Analytical communicators edit by addition. Jordan is cutting, not enriching.",
          styleContext:
            "Direct communicators believe that the best presentations are the shortest ones that still achieve their purpose. Every extra slide is a risk.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not discussed how the audience will feel, whether the narrative is engaging, or how to build emotional momentum. Her entire focus is on equipping the sales team with actionable content.",
          observation:
            "There is no mention of storytelling, audience engagement, or emotional connection. Jordan measures presentation quality by whether it makes the sales team more effective.",
          coachingTip:
            "Ask yourself: is this person designing an experience or a tool? Jordan is designing a tool for the sales force.",
          styleContext:
            "Direct communicators see presentations as briefings, not performances. The audience should leave knowing what to do, not feeling inspired.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants the opening restructured to three sentences: what the product does, why it wins, and the key objection handler. The current draft has eleven slides of preamble. How do you respond?",
      options: [
        {
          id: "s217-opt-a",
          text: "Here is the opening: 'This product cuts reporting time by 60%. The nearest competitor does 35%. The objection is price - we cost 20% more. The answer: the saving pays for itself in six weeks.' I will restructure the deck around that.",
          score: 10,
          result: "strong",
          explanation:
            "You have delivered exactly what Jordan asked for - three pieces of actionable information in sales-ready language. No preamble, no context-setting, just the tools.",
        },
        {
          id: "s217-opt-b",
          text: "I agree we need to front-load the key messages, but I think a brief context slide showing the market problem would help the sales team frame the conversation. One slide, thirty seconds.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable suggestion, but Jordan has already dismissed everything before the differentiator. Adding even one context slide may feel like you are reintroducing the preamble she just cut.",
        },
        {
          id: "s217-opt-c",
          text: "The development story is actually what makes this product compelling. Clients want to know the engineering behind it. I think cutting it removes the emotional hook.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan has explicitly said sales does not sell process stories. Arguing for the emotional hook of an engineering narrative contradicts her entire brief.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to write the opening two minutes of the presentation. Three things only: what the product does, why it wins, and the key objection with an answer. Write it in a direct style that a salesperson can memorise in one read.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Here is everything you need to know in sixty seconds.\n\nWhat it does: Automates client reporting. What currently takes your clients four hours a week takes twelve minutes with this product.\n\nWhy it wins: The closest competitor automates roughly 65% of the process. We automate 94%. Your clients do less manual work and get faster results.\n\nThe objection you will hear: 'It costs more.' The answer: 'Yes, it does. The time saving pays for the price difference in six weeks. After that, everything your client saves is profit. Here are the numbers.'\n\nThat is your pitch. The rest of this deck gives you the detail behind those three points. But if you only remember three things, remember those.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your opening delivers exactly what Jordan asked for in a format a salesperson can use immediately. The language is plain, the numbers are concrete, and the objection handler is ready to deploy in a live conversation.",
          observation:
            "You closed by telling the sales team that the three points are the entire pitch, with the rest as backup. Direct communicators love a clear hierarchy of importance.",
          coachingTip:
            "When writing presentation openings for direct communicators, test it by asking: could a salesperson walk into a meeting having only read this section and still perform? If yes, the opening works.",
          styleContext:
            "Direct communicators believe the best sales presentations are the ones the audience can deliver from memory. Complexity is the enemy of adoption.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether each of the three points is stated in one or two sentences maximum. If any section runs to a paragraph, it is too long for Jordan's brief.",
          observation:
            "If your opening includes qualifiers like 'depending on use case' or 'results may vary', it has introduced hedging that will weaken the sales message.",
          coachingTip:
            "Sales presentations for direct communicators should feel like instructions, not disclaimers. State the claim, back it with one number, move on.",
          styleContext:
            "Direct communicators in sales enablement believe that confidence in the opening predicts confidence in the meeting. Hedged language produces hedged salespeople.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening either includes unnecessary context, buries the differentiator, or does not address the objection. Jordan wanted three things, and if any is missing, the opening fails.",
          observation:
            "If your opening starts with the product's history, market positioning, or team credentials before stating what it does, it has repeated the mistake Jordan identified in the original deck.",
          coachingTip:
            "Start with the outcome. Then the advantage. Then the objection handler. That is the order. Do not rearrange it.",
          styleContext:
            "Direct communicators sequence information by importance, not by narrative logic. The most important thing goes first, always.",
        },
      },
    },
  },

  // Scenario 218 - Sam Hartley, presentation, intermediate
  {
    id: "scenario-218",
    title: "The Investor Pitch Rehearsal",
    context:
      "Sam is rehearsing an investor pitch and wants to cut through the noise. The company has a strong product but the previous pitch deck was too long, too detailed, and failed to create urgency.",
    chooseContext:
      "Sam has been told by a mentor to include more market analysis and competitive landscape slides. He disagrees, believing investors make decisions on momentum and traction, not market reports.",
    rewriteContext:
      "Sam has asked you to write the closing slide's speaking notes - the ask. He wants it to be impossible to misunderstand: how much money, what it is for, and what the investor gets.",
    characterId: "sam-hartley",
    dialogue:
      "Last time we pitched, we had forty slides. We got through twenty before the investors started checking their phones. This time: twelve slides maximum. Open with the problem. Show the product. Prove traction. Make the ask. If I cannot get to the money slide in eight minutes, the deck is too long.",
    chooseDialogue:
      "My mentor says I need a competitive landscape slide. I disagree. Investors do not invest in market analysis - they invest in momentum. Show them the revenue graph, the customer growth, and the pipeline. If those numbers are strong, the competitive landscape is irrelevant because we are already winning it.",
    rewriteDialogue:
      "Write the closing so the investor knows exactly what I am asking for and exactly what they get. 'We are raising 1.5 million for X, Y, and Z. Here is what that gets you. Here is the timeline. Yes or no.' I want them to feel the urgency to decide, not the comfort to defer.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam has cut the pitch deck from forty slides to twelve, dismissed market analysis as irrelevant when traction is strong, and wants the closing to demand a yes-or-no decision. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam designs the pitch for impact and speed, dismisses information that does not directly support the ask, and wants the closing to create urgency. This is direct communication applied to investor relations.",
          observation:
            "Sam's phrase 'investors do not invest in market analysis - they invest in momentum' reveals his core belief: action beats information. Direct communicators prioritise evidence of doing over evidence of knowing.",
          coachingTip:
            "When someone cuts content that does not directly serve the desired outcome and measures presentation success by decision speed, they are communicating directly.",
          styleContext:
            "Direct communicators design investor pitches to compress the decision timeline. Every slide that does not move the investor closer to 'yes' is a risk.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam references traction data and revenue graphs, which can look analytical. But he uses data as proof of momentum, not as analysis. The numbers serve the story of speed, not the story of rigour.",
          observation:
            "An analytical communicator would include the competitive landscape slide because it demonstrates thorough market understanding. Sam sees it as a distraction from the growth narrative.",
          coachingTip:
            "Direct communicators use data selectively - only the numbers that drive the decision. Analytical communicators use data comprehensively. Sam is curating, not compiling.",
          styleContext:
            "In investor pitches, direct communicators show only the metrics that prove momentum. They leave the detailed analysis for the due diligence phase, not the pitch.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not discussed the emotional journey of the pitch, how to build rapport with investors, or how to make the story feel inspiring. His entire focus is on brevity, traction, and the ask.",
          observation:
            "There is no mention of vision-casting, personal stories, or emotional connection. Sam treats the pitch as a transaction: here is what we have, here is what we need, decide.",
          coachingTip:
            "Ask yourself: is this person trying to inspire or to close? Sam is entirely focused on closing. The inspiration is in the numbers.",
          styleContext:
            "Direct communicators believe that strong traction metrics are more inspiring than any founder story. Growth speaks louder than words.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam's mentor recommends adding a competitive landscape slide. Sam says investors invest in momentum, not market analysis. How do you advise?",
      options: [
        {
          id: "s218-opt-a",
          text: "Skip the landscape slide. Revenue growth and your pipeline tell the competitive story. If an investor asks, answer verbally. Do not build a slide for a question that might not come.",
          score: 10,
          result: "strong",
          explanation:
            "You have backed Sam's instinct with practical logic: traction data implicitly demonstrates competitive position. Saving the competitive discussion for Q&A keeps the pitch tight.",
        },
        {
          id: "s218-opt-b",
          text: "Could you compromise with a single slide that shows your position relative to the top two competitors? It addresses the concern without adding significant length.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Sam has already decided. Adding a slide he does not believe in may weaken his delivery because he will not present it with conviction.",
        },
        {
          id: "s218-opt-c",
          text: "I think your mentor has a point. Investors need to understand the market to evaluate the opportunity. Without a competitive landscape, the pitch might look like you have not done your homework.",
          score: 0,
          result: "weak",
          explanation:
            "Sam has already addressed this: strong traction proves competitive position. Suggesting he has not done his homework will irritate a direct communicator who has made a deliberate, strategic choice.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to write the closing slide's speaking notes: the ask. How much money, what it is for, what the investor gets, and a clear timeline. Write it in a direct style that creates urgency.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "The ask.\n\nWe are raising 1.5 million. Here is what it buys:\n- 800k on product: we ship the enterprise tier by September, which unlocks contracts worth 3x our current average deal size.\n- 500k on sales: three senior hires to convert the 40 enterprise leads already in our pipeline.\n- 200k on runway: twelve months of buffer to hit the metrics that make the Series A inevitable.\n\nWhat you get: 12% equity at a 12.5 million pre-money valuation. Your money goes to work immediately - first hires start in April, enterprise product ships in September, and we hit 2 million ARR by December.\n\nThis round closes on 15 April. We have 900k committed. We need a decision within two weeks.\n\nI am happy to answer questions, but the numbers speak for themselves.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing is precise, urgent, and gives the investor everything they need to make a decision. The timeline creates natural urgency without being aggressive. Sam would deliver this with confidence.",
          observation:
            "You included how much is already committed, which is a direct communicator's way of creating social proof: others have already said yes, and you should too.",
          coachingTip:
            "When writing investor asks for direct communicators, include the round closing date and amount already committed. Both create urgency through facts, not pressure.",
          styleContext:
            "Direct communicators close investor pitches by making the decision feel time-bound and evidence-backed. The urgency comes from the market, not from the presenter.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the ask includes a specific closing date and equity terms. If the investor has to ask 'how much equity and when do you need the decision?', the closing is incomplete.",
          observation:
            "If your ask includes phrases like 'we are looking for partners who share our vision', it has drifted into expressive territory. Sam wants a transaction, not a relationship pitch.",
          coachingTip:
            "The closing should answer: how much, for what, what equity, and by when. If any of those four elements is missing, add it.",
          styleContext:
            "Direct communicators believe that investor closings should feel like purchase orders: clear, specific, and time-bound.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing either lacks specific terms, hedges the ask, or invites further conversation rather than demanding a decision. Sam wanted urgency, not openness.",
          observation:
            "If your closing says 'we would love to discuss how you might be involved' or 'we are open to flexible terms', it has failed to create the decisional pressure Sam wants.",
          coachingTip:
            "State the amount. State the equity. State the deadline. Then stop. The investor should feel that the opportunity is moving with or without them.",
          styleContext:
            "Direct communicators see soft investor closings as a sign of desperation. A confident ask with a deadline signals that the company has options.",
        },
      },
    },
  },

  // Scenario 219 - Alex Tran, presentation, advanced
  {
    id: "scenario-219",
    title: "The Crisis Communication Briefing",
    context:
      "A data breach has been discovered and Alex has been asked to prepare the internal briefing for all-hands. She needs to communicate what happened, what is being done, and what employees should say if asked by clients or media.",
    chooseContext:
      "Alex is being advised by the legal team to use careful, measured language. She disagrees, believing that overly cautious wording will make employees more anxious, not less.",
    rewriteContext:
      "Alex has asked you to write the employee talking points - five sentences maximum that any employee can use if a client or journalist asks about the breach.",
    characterId: "alex-tran",
    dialogue:
      "I have two priorities: be honest and be fast. Every hour we delay this briefing is an hour where rumours fill the gap. Here is what I am going to tell the company: what happened, what we know, what we do not know, what we are doing, and what every employee should say if asked. Five things. No corporate waffle. No hiding behind legal language. People deserve straight answers, especially when the news is bad.",
    chooseDialogue:
      "Legal wants me to say 'we are investigating a potential data incident'. I am going to say 'we had a data breach'. Because that is what happened, and if I use softer language, employees will assume the reality is worse than what I am telling them. In a crisis, the most dangerous thing is ambiguity. People fill ambiguity with their worst fears.",
    rewriteDialogue:
      "Write five talking points. Each one is a single sentence. They need to be true, clear, and easy to remember under pressure. If a journalist calls reception, the person answering the phone should be able to deliver these without panicking. Keep it human, keep it honest, and keep it short.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has rejected legal's cautious language in favour of calling a data breach a data breach, prioritised speed over polish, and structured the briefing around five clear points. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex communicates with radical honesty under pressure, rejecting euphemisms and prioritising clarity and speed. She believes that directness in a crisis is safer than caution. This is advanced direct communication in crisis management.",
          observation:
            "The insight that 'people fill ambiguity with their worst fears' reveals Alex's understanding of why directness matters most when the news is bad. Clarity is a form of care in a crisis.",
          coachingTip:
            "When a leader chooses plain language over legal language in a crisis and prioritises speed over perfection, they are communicating directly. Trust that instinct.",
          styleContext:
            "Direct communicators in crisis believe that the first message sets the emotional temperature. A clear, honest message calms. A vague, lawyered message creates panic.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is structured and factual, which can look analytical. But her structure serves speed and clarity, not thoroughness. She wants five points delivered fast, not a comprehensive incident report.",
          observation:
            "An analytical communicator would want to present the full timeline, root cause analysis, and impact assessment. Alex wants five sentences that stop rumours.",
          coachingTip:
            "In a crisis, direct communicators prioritise 'what do people need to know right now?' Analytical communicators prioritise 'what is the full picture?' Alex is firmly in the 'right now' camp.",
          styleContext:
            "Direct crisis communication is about controlling the narrative through honesty and speed. Analytical crisis communication is about controlling the narrative through completeness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not focused on how employees are feeling, offered emotional support, or built a narrative around the team's resilience. Her approach is informational and action-oriented.",
          observation:
            "There is no reassurance about wellbeing, no acknowledgement of anxiety, and no invitation to share feelings. Alex is briefing, not comforting.",
          coachingTip:
            "Ask yourself: is this person managing emotions or managing information? Alex is managing information, trusting that clear information is the best emotional management.",
          styleContext:
            "Direct communicators in crisis show care through clarity. They believe that employees feel calmer when they know the facts than when they are told not to worry.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Legal wants Alex to say 'potential data incident'. Alex wants to say 'data breach'. She believes ambiguity in a crisis makes things worse. How do you advise?",
      options: [
        {
          id: "s219-opt-a",
          text: "Say 'data breach'. Employees will find out the real language within hours. Softer words will feel misleading. Being straight now earns trust. Add 'we are still determining the full scope' to cover what we do not yet know.",
          score: 10,
          result: "strong",
          explanation:
            "You have backed Alex's instinct for plain language while adding a factual qualifier about scope. This is direct crisis communication that is honest about both what happened and what is still unknown.",
        },
        {
          id: "s219-opt-b",
          text: "Could we use 'confirmed data breach' to satisfy legal's concern about premature characterisation while still being direct? It acknowledges the facts without being vague.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable middle ground, but 'confirmed' is a qualifier Alex might see as unnecessary. She would likely say: if we are telling people it is a breach, adding 'confirmed' implies there was doubt.",
        },
        {
          id: "s219-opt-c",
          text: "I think we should follow legal's advice. They understand the regulatory implications better than we do, and using the wrong language could create liability issues down the line.",
          score: 0,
          result: "weak",
          explanation:
            "Alex has already considered and rejected this position. She believes the human cost of ambiguous language outweighs the legal risk of plain language. Deferring entirely to legal dismisses her leadership judgement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants five talking points - one sentence each - that any employee can use if asked about the breach by a client or journalist. They must be true, clear, and easy to remember under pressure. Write them in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Employee Talking Points - Data Breach\n\n1. We identified a data breach on Tuesday 10 March and immediately began investigating with external security specialists.\n\n2. We have notified the relevant regulatory authorities and are cooperating fully.\n\n3. We are contacting every affected customer directly to explain what happened and what steps we are taking to protect their data.\n\n4. We have implemented additional security measures to prevent this from happening again.\n\n5. For any further questions, please direct people to our dedicated response line: 0800 XXX XXXX.\n\nIf you are asked anything beyond these five points, say: 'I want to make sure you get accurate information, so let me connect you with our response team.' Do not guess. Do not speculate.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your talking points are honest, specific, and easy to deliver under pressure. Each one is a single sentence, and the final instruction gives employees a safe exit for questions they cannot answer. Alex would distribute these immediately.",
          observation:
            "You included a redirect for questions beyond the five points, which protects employees from being drawn into speculation. This is practical crisis communication.",
          coachingTip:
            "When writing crisis talking points for direct communicators, include both what to say and what to do when you do not know what to say. The escape route is as important as the content.",
          styleContext:
            "Direct communicators in crisis want every employee to feel confident answering basic questions. The talking points are armour, and the redirect is the shield.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each point is truly one sentence and whether an employee could deliver them from memory. If any point requires reading from a document, it is too complex.",
          observation:
            "If your talking points include caveats, conditions, or multi-clause sentences, they will be difficult to remember and deliver naturally under pressure.",
          coachingTip:
            "Read each point aloud. If you stumble or need to pause to remember the wording, simplify it. Crisis talking points must survive being spoken by nervous people.",
          styleContext:
            "Direct communicators test crisis talking points by imagining the most anxious employee delivering them to the most aggressive journalist. If they work in that scenario, they work everywhere.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points are either too vague, too long, or use corporate language that an employee would not naturally say. Alex wanted five human sentences, not five paragraphs of PR copy.",
          observation:
            "If your talking points include phrases like 'we take data security extremely seriously' or 'we are committed to the highest standards', they sound like a press release, not a human response.",
          coachingTip:
            "Replace every corporate phrase with something a normal person would actually say. 'We take this seriously' becomes 'we are fixing it'. Plain language under pressure is the goal.",
          styleContext:
            "Direct communicators despise corporate crisis language because it sounds rehearsed and insincere. The talking points should sound like a concerned colleague, not a communications team.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (220-222)
  // ============================================

  // Scenario 220 - Priya Sharma, negotiation, foundation
  {
    id: "scenario-220",
    title: "The Freelancer Rate Negotiation",
    context:
      "A talented freelancer wants to increase her rate significantly. Priya is coaching you on how to negotiate in a way that keeps the relationship strong while being honest about budget constraints.",
    chooseContext:
      "The freelancer has explained why she deserves a higher rate, and it is a compelling case. Priya wants you to acknowledge her value genuinely while being transparent about what you can actually offer.",
    rewriteContext:
      "Priya has asked you to write the follow-up email confirming the agreed terms, making sure it feels like a celebration of the partnership rather than a transactional confirmation.",
    characterId: "priya-sharma",
    dialogue:
      "She is not just negotiating a rate - she is telling you how she values herself and her work. If you come back with a spreadsheet and say 'the budget cannot accommodate that', you have turned a relationship conversation into a procurement exercise. Acknowledge what she brings first. Let her know you see her worth. Then have an honest conversation about the numbers.",
    chooseDialogue:
      "I know we cannot match her ask exactly, but we can meet her partway and offer something money does not buy: recognition, flexibility, and first refusal on the projects she loves most. When you present the counter-offer, lead with what you are giving her beyond the rate. The number alone will disappoint. The full package might delight.",
    rewriteDialogue:
      "Write the confirmation email so she reads it and thinks, 'they really value me'. Not, 'they negotiated me down'. Include the rate, yes, but surround it with everything else we are offering and make it feel like an investment in her, not a transaction.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has reframed a rate negotiation as a conversation about value and identity, urged you to lead with recognition before numbers, and suggested the full package matters more than the rate alone. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya sees the negotiation as a human interaction about identity and value, not a financial transaction. She prioritises how the freelancer feels about the outcome over the numbers themselves. This is expressive communication applied to negotiation.",
          observation:
            "The phrase 'she is telling you how she values herself' shows that Priya understands rate negotiations as emotional events. Expressive communicators tune into the identity dimension of business conversations.",
          coachingTip:
            "When someone frames a negotiation as a relationship moment rather than a financial exercise, they are communicating expressively. Match their focus on how the outcome feels, not just what it costs.",
          styleContext:
            "Expressive communicators negotiate by making the other party feel valued, understood, and excited about the partnership. The emotional outcome is as important as the financial one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is caring and relationship-focused, which can look supportive. But she is actively shaping the narrative and coaching you to present the offer in a way that creates positive emotion. She is not just protecting feelings - she is creating an experience.",
          observation:
            "A supportive communicator would focus on making the freelancer feel safe. Priya wants her to feel celebrated. Safety is passive; celebration is active.",
          coachingTip:
            "Supportive negotiators cushion disappointment. Expressive negotiators turn a counter-offer into a compliment. Notice whether the emphasis is on protecting or inspiring.",
          styleContext:
            "Expressive communicators believe that how a deal is presented determines how a deal is received. The same terms can feel like a win or a loss depending on the framing.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not suggested approaching this as a data-driven benchmarking exercise or a structured cost-benefit analysis. Her entire approach is relational and emotional.",
          observation:
            "There are no market rate comparisons, no spreadsheets, and no structured negotiation frameworks. Priya is managing feelings, not numbers.",
          coachingTip:
            "Ask yourself: is this person trying to get the right number or create the right feeling? Priya is firmly in the feeling space.",
          styleContext:
            "Expressive communicators see negotiations as relationship milestones. A well-handled negotiation strengthens the partnership; a badly handled one damages it regardless of the outcome.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The freelancer has made a compelling case for a higher rate. You cannot match it exactly but can offer a partial increase plus additional benefits. How do you present the counter-offer following Priya's guidance?",
      options: [
        {
          id: "s220-opt-a",
          text: "Everything you said about your value is true. We cannot quite reach the rate you asked for, but here is what we can do: a 15% increase, first refusal on all creative briefs, and full schedule flexibility.",
          score: 10,
          result: "strong",
          explanation:
            "You have led with genuine recognition, been transparent about the gap, and presented the full package in a way that feels generous and personal. This matches Priya's expressive approach perfectly.",
        },
        {
          id: "s220-opt-b",
          text: "Based on our budget analysis, we can offer a 15% rate increase. That brings you to the 75th percentile for freelancers in your category. We can also offer project selection priority and flexible scheduling.",
          score: 5,
          result: "partial",
          explanation:
            "Factually sound, but emotionally cold. Referencing percentiles turns a relationship conversation into a market analysis. The benefits are the same but the framing misses the human element Priya emphasised.",
        },
        {
          id: "s220-opt-c",
          text: "I appreciate the ask, but we have a fixed budget for external resources. We can offer a 10% increase and review again in six months. I hope that works for you.",
          score: 0,
          result: "weak",
          explanation:
            "This is a procurement response, not a relationship response. 'Fixed budget' and 'I hope that works' are exactly the language Priya warned against. The freelancer will feel processed, not valued.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants you to write the follow-up email confirming the agreed terms. It should feel like a celebration of the partnership, not a contract confirmation. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Aisha,\n\nI am so pleased we had that conversation. It reinforced something I already knew: you are not just a freelancer we work with - you are a creative partner who makes our work better.\n\nHere is what we have agreed:\n- Your rate increases to 450 per day, effective from 1 April.\n- You have first refusal on all creative briefs before they go to anyone else.\n- You set your own schedule. We trust you to manage your time in whatever way works best for you.\n\nI genuinely believe this partnership is one of the best things about how our team operates. I am excited about the projects coming up this quarter, and I am glad you will be part of them.\n\nLooking forward to what we create next.\n\nWarm regards,\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email confirms the terms while wrapping them in genuine appreciation and forward-looking energy. The freelancer reads this and feels valued as a partner, not managed as a supplier.",
          observation:
            "You positioned the rate increase alongside non-financial benefits, making the full package feel generous even if the rate alone did not match the original ask.",
          coachingTip:
            "When writing confirmation emails for expressive communicators, treat the terms as the middle of the message, not the beginning or end. Open and close with relationship, not logistics.",
          styleContext:
            "Expressive communicators want every business communication to strengthen the relationship. A confirmation email that feels warm is one the freelancer will remember when the next opportunity to work together arises.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the email feels genuinely warm or perfunctory. If the appreciation reads like a template, it will not create the celebratory tone Priya wanted.",
          observation:
            "If your email opens with 'further to our conversation, please find the agreed terms below', it has missed the tone entirely. Priya wanted this to feel personal.",
          coachingTip:
            "Read the opening aloud. Does it sound like Priya speaking, or does it sound like a contract administrator? Adjust until it sounds human.",
          styleContext:
            "Expressive communicators judge confirmation emails by whether the recipient smiles while reading them. If the email produces a neutral reaction, it needs more warmth.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either reads like a formal contract confirmation, lacks genuine appreciation, or fails to position the partnership positively. Priya wanted celebration, not administration.",
          observation:
            "If your email lists the terms without any surrounding warmth or forward-looking language, it will feel transactional rather than relational.",
          coachingTip:
            "Add three sentences of genuine appreciation before and after the terms. The terms are the content; the appreciation is the context that makes them meaningful.",
          styleContext:
            "Expressive communicators believe that how you confirm a deal determines how the other party feels about it for months to come. The email is not a receipt - it is a relationship moment.",
        },
      },
    },
  },

  // Scenario 221 - Marcus Webb, negotiation, intermediate
  {
    id: "scenario-221",
    title: "The Partnership Terms Discussion",
    context:
      "Your company is negotiating a joint venture with a smaller firm. Marcus is leading the conversation and wants to build a partnership that both sides feel genuinely excited about, not one where the smaller firm feels they were outmanoeuvred.",
    chooseContext:
      "The smaller firm's founder has expressed concern that the terms favour your company too heavily. Marcus wants to address the power imbalance openly rather than pretending it does not exist.",
    rewriteContext:
      "Marcus has asked you to write the partnership announcement that goes to both teams, framing it as a collaboration of equals even though the companies are different sizes.",
    characterId: "marcus-webb",
    dialogue:
      "I do not want to win this negotiation. I want both sides to feel like they won. If their founder walks away thinking we squeezed them, this partnership is dead before it starts. The best deals are the ones where both parties feel slightly generous. That means we need to find the thing they value most and make sure they get it, even if it costs us something we care less about.",
    chooseDialogue:
      "I can see she is worried about losing control of her brand. That is not a financial concern - it is an identity concern. So let us give her full creative control over how the partnership is presented publicly. It costs us nothing but it means everything to her. When you negotiate with someone's identity, you have to treat it with respect.",
    rewriteDialogue:
      "Write the announcement so their team reads it and feels proud, not absorbed. Use both company names equally. Reference what each side brings. Make it feel like two companies choosing each other, not a big company acquiring a small one's capabilities.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus has said he does not want to win the negotiation, identified the founder's identity concern, and proposed giving creative control as a goodwill gesture. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus navigates the negotiation through emotional intelligence, identity recognition, and values-based deal-making. He sees the partnership as a relationship to be designed, not a contract to be optimised. This is expressive negotiation at its best.",
          observation:
            "The phrase 'when you negotiate with someone's identity, you have to treat it with respect' reveals Marcus's sophisticated understanding of what really matters in partnership discussions.",
          coachingTip:
            "When a negotiator identifies the emotional or identity dimension of the other party's position and offers solutions on that level, they are communicating expressively. Match their depth.",
          styleContext:
            "Expressive communicators believe that the best partnerships are built on mutual pride, not mutual compromise. Both sides should feel they are gaining something meaningful.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is deeply caring about the founder's feelings, which can look supportive. But he is actively crafting a deal strategy around emotional levers, not just comforting someone. He is using empathy as a negotiation tool, not just a relational one.",
          observation:
            "A supportive negotiator would check in on the founder's comfort. Marcus identifies what she values most and builds it into the deal structure. That is strategic empathy.",
          coachingTip:
            "Expressive communicators use emotional insight strategically in negotiations. Supportive communicators use it to maintain comfort. Marcus is building a better deal, not just a better feeling.",
          styleContext:
            "Expressive negotiators blend empathy with strategy. They understand that giving someone what they emotionally need often costs less than what they financially demand.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not proposed a financial analysis of the deal terms, a structured comparison of each party's contributions, or a data-driven valuation model. His approach is relational and creative.",
          observation:
            "There are no spreadsheets, no term sheets, and no benchmarking against comparable partnerships. Marcus is negotiating through understanding, not analysis.",
          coachingTip:
            "Ask yourself: is this person optimising terms or optimising the relationship? Marcus is building a partnership that both sides are proud of.",
          styleContext:
            "Expressive negotiators measure success by how both parties feel about the deal, not just by what each party gets. Mutual pride is the goal.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The smaller firm's founder is worried about losing control of her brand. Marcus has identified this as an identity concern and proposed giving her full creative control over partnership branding. How do you present this to her?",
      options: [
        {
          id: "s221-opt-a",
          text: "Your brand is what makes you remarkable. Full creative control over how this partnership is presented publicly sits with you. Your voice, your visual identity, your standards. We are joining forces, not taking over.",
          score: 10,
          result: "strong",
          explanation:
            "You have addressed the identity concern directly, validated the founder's pride in her brand, and presented the creative control offer as a statement of respect. This matches Marcus's expressive approach.",
        },
        {
          id: "s221-opt-b",
          text: "We can include a clause in the partnership agreement that gives you approval rights over all co-branded materials. That should address the concern about brand control.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and protective, but it reduces an identity conversation to a contractual clause. Marcus wanted the founder to feel respected, not just legally protected.",
        },
        {
          id: "s221-opt-c",
          text: "I think brand concerns are secondary to getting the commercial terms right. Once the deal is structured properly, the branding questions tend to work themselves out.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the brand concern as secondary is exactly what Marcus warned against. For the founder, this is not secondary - it is the issue that will determine whether she signs.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants you to write the partnership announcement for both teams. It should present both companies as equals, reference what each brings, and make the smaller firm's team feel proud. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team,\n\nWe are excited to share some news that has been months in the making.\n\nStarting next month, we are entering a partnership with [Smaller Firm]. For those who do not know their work, you should - they have built one of the most respected creative practices in the industry, and their approach to brand storytelling is something we have admired for years.\n\nWhat this partnership means:\n- [Our company] brings scale, infrastructure, and a client base that opens doors to larger engagements.\n- [Smaller Firm] brings creative excellence, cultural insight, and an approach to design that pushes boundaries in ways we want to learn from.\n\nThis is not an acquisition. It is not a vendor relationship. It is two companies choosing to work together because we believe the combination creates something neither could build alone.\n\nYou will be hearing from both leadership teams over the coming weeks about how this works in practice. In the meantime, if you want to know more about [Smaller Firm], I would encourage you to explore their portfolio. You will understand immediately why we wanted to work with them.\n\nHere is to building something remarkable together.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your announcement gives both companies equal billing, explicitly praises what the smaller firm brings, and frames the partnership as a mutual choice. Their team would read this and feel proud, not absorbed.",
          observation:
            "You explicitly stated what this is not (acquisition, vendor relationship), which preemptively addresses the concern the smaller firm's team will have. This is emotionally intelligent communication.",
          coachingTip:
            "When writing partnership announcements for expressive communicators, be explicit about what the partnership is and is not. Ambiguity about the nature of the relationship creates anxiety.",
          styleContext:
            "Expressive communicators believe that first impressions in partnerships set the tone for years. An announcement that makes the smaller firm feel respected creates a foundation of trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the smaller firm receives equal warmth and specificity. If your announcement describes your company in detail but mentions the partner generically, the imbalance will be noticed.",
          observation:
            "If your announcement says 'we are excited to bring [Smaller Firm] on board', the language 'on board' implies they are joining you, not partnering with you. Word choice matters.",
          coachingTip:
            "Read the announcement from the smaller firm's perspective. Would they share it proudly with their own team? If not, adjust the language until they would.",
          styleContext:
            "Expressive communicators are acutely sensitive to hierarchy in partnership language. 'Working with' is different from 'bringing on board'. Choose the language of equals.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your announcement either foregrounds your company, uses language that implies the smaller firm is being acquired, or fails to specify what the partner brings. Marcus wanted equality of voice and pride.",
          observation:
            "If the announcement reads like a press release about your company's growth strategy, it has failed. The smaller firm should feel like a protagonist, not a footnote.",
          coachingTip:
            "Rewrite so that if you swapped the company names, the announcement would still work. That is the test for genuine equality of voice.",
          styleContext:
            "Expressive communicators see partnership announcements as the first act of the partnership itself. If the first communication is imbalanced, the partnership starts on uneven ground.",
        },
      },
    },
  },

  // Scenario 222 - Nina Okafor, negotiation, advanced
  {
    id: "scenario-222",
    title: "The Community Benefit Negotiation",
    context:
      "Your organisation is negotiating a facilities contract with a local council. Nina is leading the negotiation and wants to ensure the deal includes meaningful community benefit clauses, not just token gestures.",
    chooseContext:
      "The council's procurement officer is resistant to community benefit clauses, arguing they complicate the contract and add cost. Nina believes they are essential and is making a case for why they matter.",
    rewriteContext:
      "Nina has asked you to draft the community benefit section of the proposal, making the case that investing in local outcomes strengthens the partnership and delivers better long-term value.",
    characterId: "nina-okafor",
    dialogue:
      "This is not just a facilities contract. It is a relationship with a community. If we treat it as a procurement exercise, we will deliver a building. If we treat it as a partnership, we will deliver something the community is proud of. I want apprenticeship placements written into the contract. I want local supplier commitments. I want the people who live near this facility to feel it was built for them, not imposed on them.",
    chooseDialogue:
      "I understand the concern about cost and complexity. But here is how I see it: community benefit clauses are not an add-on. They are the thing that turns a contract into a mandate. If the local community supports this project, everything runs smoother - planning, delivery, ongoing operations. Opposition from local residents costs more in delays and reputation damage than any apprenticeship programme ever could.",
    rewriteDialogue:
      "Write the community benefit section so it reads like a vision, not a compliance checklist. I want the council to read it and think, 'this is a partner who understands what we are trying to achieve for our community'. Make the commitments specific but frame them within a story about what this project means for the area.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina has reframed a facilities contract as a community relationship, argued that community benefit clauses turn contracts into mandates, and insisted on apprenticeship placements and local supplier commitments. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina elevates a procurement conversation into a values discussion about community impact and organisational purpose. She uses vision-casting and emotional framing to argue for commitments that go beyond the transactional. This is advanced expressive communication in negotiation.",
          observation:
            "The phrase 'turns a contract into a mandate' is a powerful reframe. Nina shows how community investment converts local opposition into local support, making the business case through the values case.",
          coachingTip:
            "When a negotiator frames commercial terms as community outcomes and uses language about purpose and pride, they are negotiating expressively. Engage with their vision, not just their terms.",
          styleContext:
            "Expressive communicators in public sector negotiations understand that community support is a commercial asset. They negotiate purpose into contracts because it delivers better outcomes.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina cares deeply about the community, which can look supportive. But she is not just caring - she is building a strategic argument for why community investment is good business. The vision serves the negotiation.",
          observation:
            "A supportive negotiator would advocate for the community because it is the right thing to do. Nina argues it is both right and commercially smart. The dual framing is expressive.",
          coachingTip:
            "Expressive negotiators combine values with strategy. Supportive negotiators lead with values alone. Nina is making a business case wrapped in purpose.",
          styleContext:
            "Expressive communicators believe that purpose-driven proposals win more support than cost-driven ones. The vision sells the terms.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a cost-benefit analysis of community benefit clauses, a benchmarking study, or a structured comparison with other contracts. Her argument is built on vision and values, not metrics.",
          observation:
            "There are no spreadsheets, no ROI calculations, and no comparative data. Nina is negotiating through meaning and purpose.",
          coachingTip:
            "Ask yourself: is this person arguing from data or from conviction? Nina is entirely in the conviction space, believing the vision will carry the argument.",
          styleContext:
            "Expressive communicators trust that a compelling vision generates more commitment than a compelling spreadsheet. They invest in the story, not the calculation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The procurement officer says community benefit clauses add cost and complexity. Nina argues they generate community support that reduces project risk. How do you support her position?",
      options: [
        {
          id: "s222-opt-a",
          text: "Think about the last local project that faced community opposition. Those delays cost more than any apprenticeship programme. Community benefit clauses are insurance against the costliest risk in public sector delivery: local resistance.",
          score: 10,
          result: "strong",
          explanation:
            "You have built on Nina's vision by connecting community benefit to risk reduction and institutional pride. This makes the business case through expressive framing.",
        },
        {
          id: "s222-opt-b",
          text: "We could include a modest community benefit element - perhaps two apprenticeship placements - without significantly affecting the contract value. That satisfies the principle without overcomplicating the terms.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Nina is arguing for meaningful commitments, not token ones. 'Modest' and 'without significantly affecting' signal you are treating community benefit as a concession, not a conviction.",
        },
        {
          id: "s222-opt-c",
          text: "I think we should keep the community benefit discussion separate from the contract negotiation. We can always run community programmes independently without making them contractual obligations.",
          score: 0,
          result: "weak",
          explanation:
            "Nina specifically wants community benefit written into the contract because voluntary commitments are easier to abandon. Separating them undermines her entire argument about making them binding.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to draft the community benefit section of the proposal. It should read like a vision, not a checklist, with specific commitments framed within a story about the project's impact on the community. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Community Benefit: Building More Than a Facility\n\nThis project is an opportunity to do more than construct a building. It is an opportunity to invest in the community that will use it, work in it, and live alongside it.\n\nWe believe that the best infrastructure projects leave a legacy beyond the physical structure. Here is ours:\n\nLocal Employment:\n- A minimum of 30% of construction roles filled from within a 10-mile radius.\n- 6 apprenticeship placements across electrical, plumbing, and project management disciplines, with a guaranteed pathway to full-time employment on completion.\n\nLocal Supply Chain:\n- At least 25% of materials and services sourced from businesses within the local authority area.\n- A quarterly 'Meet the Buyer' event for local suppliers to access future opportunities across our wider portfolio.\n\nCommunity Engagement:\n- A Community Liaison Officer appointed from day one, with monthly open forums for residents throughout construction.\n- An annual community open day once the facility is operational, offering tours, skills workshops, and local hiring events.\n\nThese are not aspirations. They are contractual commitments with quarterly reporting against defined targets. We believe in them because they make this project stronger, and because the community that surrounds this facility deserves to benefit from its presence.\n\nWhen this project is complete, we want the local community to say: 'that was built with us, not just near us.'",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal reads like a vision statement with teeth - specific, measurable commitments wrapped in a compelling narrative about community impact. Nina would present this with conviction and pride.",
          observation:
            "You closed with a quote that captures the emotional aspiration of the entire section. Expressive communicators love a line that crystallises the vision into something memorable.",
          coachingTip:
            "When writing proposal sections for expressive communicators, give them a closing line they can quote in meetings. A strong ending anchors the entire section in people's memory.",
          styleContext:
            "Expressive communicators want proposals that inspire action, not just secure approval. If the council feels proud of what they are signing up to, the proposal has succeeded.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the commitments are framed within a narrative or just listed. If the section reads like a compliance checklist with numbers, it needs more story around the impact.",
          observation:
            "If your section opens with 'the following community benefit commitments will be included in the contract', it has started as a legal document. Nina wanted a vision.",
          coachingTip:
            "Lead with why these commitments matter, then list what they are. The purpose gives the commitments meaning; without it, they are just line items.",
          styleContext:
            "Expressive communicators believe that proposals with narrative outperform proposals without. The story makes the commitments feel intentional, not obligatory.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your section either reads like a compliance checklist, lacks specific commitments, or does not connect the benefits to a broader vision about the community. Nina wanted vision and specificity together.",
          observation:
            "If your section says 'we will endeavour to engage local suppliers where possible', it is too vague and too hedged. Nina wants binding commitments with specific targets.",
          coachingTip:
            "Combine vision with precision. 'We believe in local investment' is the vision. '30% of roles filled locally' is the commitment. Both must be present for the section to work.",
          styleContext:
            "Expressive communicators see vague community benefit clauses as performative. Specificity is what turns a nice idea into a genuine commitment. They want both the heart and the detail.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (223-225)
  // ============================================

  // Scenario 223 - Tom Brennan, remote, foundation
  {
    id: "scenario-223",
    title: "The Remote Team Check-In",
    context:
      "Your team has been fully remote for three months and Tom has noticed that some team members are becoming isolated. He wants to establish a regular check-in format that feels genuinely caring, not performative.",
    chooseContext:
      "Tom has proposed a weekly fifteen-minute check-in with each team member. A colleague suggests this is unnecessary and that the team should just use Slack to flag any issues.",
    rewriteContext:
      "Tom has asked you to write a message to the team introducing the new check-in format, explaining why it matters and what it will look like in practice.",
    characterId: "tom-brennan",
    dialogue:
      "I have been watching the team over the past few weeks, and I can see people retreating. Messages are shorter. Cameras are off more often. Two people have not spoken in a team meeting for a fortnight. That does not mean anything is wrong - it means remote work can be isolating if nobody actively works against it. I want to build a rhythm of connection that does not rely on people asking for help.",
    chooseDialogue:
      "Slack is great for tasks, but it is terrible for wellbeing. Nobody types 'I am struggling' into a channel. These check-ins are not about productivity - they are about making sure everyone knows someone is paying attention. Fifteen minutes, no agenda, just a genuine 'how are you?' from someone who actually wants to hear the answer.",
    rewriteDialogue:
      "Write the message so the team understands this is not a monitoring exercise. It is the opposite - it is me saying, 'you matter to us as a person, not just as a contributor'. If anyone reads it and thinks they are being managed, I have failed. They should read it and think they are being cared for.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has noticed signs of isolation in the remote team, proposed regular check-ins focused on wellbeing rather than productivity, and explicitly said the goal is making people feel cared for. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom is observing emotional cues, proactively creating space for human connection, and framing the initiative around care rather than performance. This is supportive communication that builds psychological safety in a remote team.",
          observation:
            "Tom noticed cameras being off and messages getting shorter. Supportive communicators read environmental signals that others miss, because they are constantly monitoring the emotional climate.",
          coachingTip:
            "When someone designs team practices around emotional wellbeing and explicitly distinguishes between monitoring and caring, they are communicating supportively. Follow their lead.",
          styleContext:
            "Supportive communicators see remote work as an environment that requires intentional relationship maintenance. Connection does not happen by accident when people are physically apart.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and people-focused, which can look expressive. But he is not creating energy or inspiration - he is creating safety. The tone is quiet and observational, not dynamic and motivational.",
          observation:
            "An expressive communicator would launch the check-ins with enthusiasm and a vision for team culture. Tom launches them quietly, almost apologetically, because he does not want people to feel managed.",
          coachingTip:
            "Supportive communicators introduce team practices gently. Expressive communicators introduce them with excitement. Tom's approach is deliberately understated.",
          styleContext:
            "Supportive communicators believe that the best team practices are the ones people barely notice because they feel so natural. Fanfare would undermine the intention.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not proposed a structured reporting system, a productivity dashboard, or a data-driven approach to remote work management. His entire focus is on human connection and emotional wellbeing.",
          observation:
            "There are no metrics, no KPIs, and no monitoring tools. Tom is building relationships, not tracking performance.",
          coachingTip:
            "Ask yourself: is this person trying to improve output or improve wellbeing? Tom is entirely focused on wellbeing, trusting that connection drives performance.",
          styleContext:
            "Supportive communicators believe that a team that feels connected performs better than a team that feels monitored. They invest in relationships and trust the results to follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom wants weekly fifteen-minute check-ins focused on wellbeing. A colleague says Slack is sufficient for flagging issues. How do you respond?",
      options: [
        {
          id: "s223-opt-a",
          text: "The people who most need a check-in are the least likely to type it into Slack. Fifteen minutes a week is a small investment in making sure nobody falls through the cracks.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated Tom's insight about the gap between needing support and asking for it, and framed the check-in as proactive care. This matches his supportive philosophy.",
        },
        {
          id: "s223-opt-b",
          text: "What if we did a fortnightly check-in instead? That balances the wellbeing goal with the time commitment, and we could use Slack for the weeks in between.",
          score: 5,
          result: "partial",
          explanation:
            "A practical compromise, but Tom proposed weekly for a reason - isolation builds quickly in remote teams. Reducing the frequency may dilute the impact before the rhythm is established.",
        },
        {
          id: "s223-opt-c",
          text: "I think people will find mandatory check-ins intrusive. If someone has a problem, they know how to reach out. We should trust adults to manage their own wellbeing.",
          score: 0,
          result: "weak",
          explanation:
            "Tom explicitly addressed this: people who are struggling often do not reach out. Calling check-ins intrusive dismisses his observation about the gap between needing help and asking for it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to write a message to the team introducing the new check-ins. It should make clear this is about care, not monitoring. Write it in a supportive style that makes people feel valued.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi everyone,\n\nWorking remotely has a lot of advantages, but one thing it does not do well on its own is keep us connected as people. It is easy for days to pass without a real conversation - not about work, but about how you are actually doing.\n\nSo I am going to start something simple: a fifteen-minute catch-up with each of you, once a week. No agenda, no status update required. Just a conversation.\n\nWhat it is:\n- A chance to talk about anything on your mind - work, life, or nothing in particular.\n- Completely private. Nothing you share goes anywhere unless you want it to.\n- Optional in the sense that you can skip it any week without explaining why. But it will always be there if you want it.\n\nWhat it is not:\n- A performance check.\n- A productivity review.\n- A meeting with minutes.\n\nI know some of you will think you do not need this, and you might be right. But I would rather offer it and have you not need it than not offer it and have someone quietly struggle.\n\nI will be reaching out to each of you to find a time that works. No rush.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, clear, and explicitly addresses the concern that check-ins might feel like monitoring. The 'what it is not' section is particularly effective at setting the right tone. Tom would send this immediately.",
          observation:
            "You made the check-in optional but always available, which gives people control without removing the safety net. This is how supportive communicators design team practices.",
          coachingTip:
            "When writing team announcements for supportive communicators, include a 'what it is not' section. Preemptively addressing concerns prevents misinterpretation.",
          styleContext:
            "Supportive communicators know that the way an initiative is introduced determines whether people engage with it. A message that feels like management will be treated as management.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the message could be read as mandatory. If any sentence implies attendance is expected or tracked, it contradicts Tom's intention to make people feel cared for, not managed.",
          observation:
            "If your message includes phrases like 'please confirm your availability' or 'attendance is expected', it reads as a calendar invite, not a care offer.",
          coachingTip:
            "Use invitational language throughout. 'I would like to offer' not 'I am implementing'. 'If you want to' not 'please ensure you'. The tone should be generous, not directive.",
          styleContext:
            "Supportive communicators introduce practices as offers, not requirements. The voluntary nature is what makes them feel safe.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either reads like a management directive, fails to distinguish the check-in from a performance review, or does not adequately communicate why it matters. Tom wanted the team to feel cared for, not administered.",
          observation:
            "If your message opens with 'effective from next week, I will be conducting regular check-ins with each team member', it sounds institutional. Tom wanted it to sound human.",
          coachingTip:
            "Rewrite as if you are speaking to a friend, not a team. The formality of the language directly impacts whether people trust the intention.",
          styleContext:
            "Supportive communicators believe that institutional language creates institutional relationships. Human language creates human ones.",
        },
      },
    },
  },

  // Scenario 224 - Leah Morgan, remote, intermediate
  {
    id: "scenario-224",
    title: "The Remote Onboarding Experience",
    context:
      "A new team member is starting next week and will be fully remote from day one. Leah wants to make sure their onboarding experience feels personal and welcoming, not like a series of video calls and shared documents.",
    chooseContext:
      "Leah has reviewed the standard onboarding checklist and thinks it is too process-focused. She wants to add human touchpoints that make the new starter feel genuinely part of the team before they have even met anyone in person.",
    rewriteContext:
      "Leah has asked you to write the welcome message that the new starter receives on day one, making them feel excited, supported, and connected to real people, not just systems.",
    characterId: "leah-morgan",
    dialogue:
      "Starting a new job remotely is lonely. You log on, you get a list of links to click, and you spend the day setting up passwords. Nobody remembers their first day for the passwords. They remember how they felt. I want this person to feel like the team was waiting for them, like they were expected and wanted, from the moment they open their laptop.",
    chooseDialogue:
      "The checklist says 'introduce to team via group call'. That is not an introduction - that is an ambush. Twenty faces on a screen and they have to say something clever in front of all of them. Instead, pair them with a buddy for a private call first. Let them meet one person properly before they meet everyone badly.",
    rewriteDialogue:
      "Write the welcome message so it feels like a letter from a friend, not an onboarding pack. Include the buddy's name, something personal about why we are excited they are joining, and an honest note about what their first day will actually look like. No corporate language. Just warmth.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Leah has criticised process-focused onboarding, prioritised how the new starter will feel, and proposed a private buddy call before a group introduction. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah designs the onboarding experience around the new starter's emotional journey, reducing anxiety at every step and prioritising personal connection over process efficiency. This is supportive communication applied to team integration.",
          observation:
            "Replacing a group introduction with a private buddy call is a distinctly supportive choice. Leah understands that one genuine connection is worth more than twenty superficial ones on day one.",
          coachingTip:
            "When someone redesigns a process to reduce a person's anxiety and increase their sense of belonging, they are communicating supportively. Support their approach by identifying other anxiety points to address.",
          styleContext:
            "Supportive communicators design experiences by imagining how the most anxious version of the new starter would feel at each step, then redesigning to make that version feel safe.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and enthusiastic about the new starter joining, which can look expressive. But her focus is on reducing anxiety and creating safety, not on generating excitement. The energy is protective, not aspirational.",
          observation:
            "An expressive communicator would plan an energetic virtual welcome party. Leah plans a quiet, private call with one friendly face. The approach is intimate, not celebratory.",
          coachingTip:
            "Supportive onboarding is designed around safety. Expressive onboarding is designed around excitement. Leah is firmly in the safety camp.",
          styleContext:
            "Supportive communicators know that new starters need to feel safe before they can feel excited. Excitement without safety creates performance anxiety.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not proposed a structured onboarding timeline with milestones, systems training modules, or a competency development schedule. Her entire focus is on how the new starter feels, not what they learn.",
          observation:
            "There are no checklists, no timelines, and no learning objectives. Leah is designing an emotional experience, not a training programme.",
          coachingTip:
            "Ask yourself: is this person optimising for capability or for belonging? Leah is entirely focused on belonging, trusting that a person who feels they belong will learn faster.",
          styleContext:
            "Supportive communicators believe that the emotional experience of onboarding predicts long-term retention more than the quality of systems training.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah thinks the standard group call introduction is overwhelming for a remote new starter and has proposed a private buddy call first. A colleague says the group call is more efficient. How do you respond?",
      options: [
        {
          id: "s224-opt-a",
          text: "Imagine logging on to your first day and facing twenty strangers on a screen. A fifteen-minute call with one friendly person first gives them an ally before the group call. That first impression matters.",
          score: 10,
          result: "strong",
          explanation:
            "You have used perspective-taking to make Leah's case and framed the buddy call as creating an ally, not a delay. This matches her supportive approach to onboarding design.",
        },
        {
          id: "s224-opt-b",
          text: "We could keep the group call but ask people to keep their cameras on and limit it to five minutes so the new starter is not overwhelmed. That way we keep the efficiency of one call.",
          score: 5,
          result: "partial",
          explanation:
            "A practical adjustment, but five minutes with twenty people still does not create genuine connection. Leah's point is about depth of connection, not duration of exposure.",
        },
        {
          id: "s224-opt-c",
          text: "Everyone goes through the group call on their first day. It is a rite of passage and most people enjoy meeting the whole team at once. I think we are overthinking this.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing Leah's concern as overthinking ignores the reality that starting remotely is fundamentally different from starting in an office. What works in person can feel overwhelming through a screen.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants you to write the day-one welcome message for the remote new starter. It should feel like a letter from a friend, include the buddy's name, and honestly describe what day one looks like. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Sophie,\n\nWelcome. We have been looking forward to today.\n\nStarting a new role remotely can feel a bit strange - no one to show you where the coffee is, no desk to make your own. So we want to make sure your first day feels as warm and human as it would in person.\n\nHere is what today looks like:\n\n9:00 - Your buddy, James Park, will call you. He has been with the team for two years and he is genuinely one of the kindest people you will meet. He will walk you through the basics, answer any questions, and make sure you know at least one friendly face before you meet the wider team.\n\n10:30 - A relaxed team introduction on video. No pressure to say anything brilliant. People will introduce themselves to you, not the other way around.\n\n11:30 - Free time to set up your laptop, explore the shared folders, and settle in at your own pace.\n\n14:00 - A one-to-one with your manager to talk about the first week. No deliverables expected. Just a conversation about what to expect and what you need.\n\nIf at any point today you feel lost, confused, or just want to talk to someone - message James or me. That is what we are here for.\n\nWe are really glad you are here.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, honest about the strangeness of remote starting, and gives Sophie a clear, non-threatening structure for her first day. The personal detail about James and the no-pressure team introduction are exactly what Leah wanted.",
          observation:
            "You addressed the anxiety of remote starting directly rather than pretending it does not exist. Supportive communicators name the discomfort so it can be managed, not ignored.",
          coachingTip:
            "When writing welcome messages for supportive communicators, acknowledge what might feel difficult before describing what will happen. Honesty about the challenge makes the support feel genuine.",
          styleContext:
            "Supportive communicators believe that the best welcome messages are the ones that make a new starter think, 'they understand what this feels like'. Empathy is the foundation of belonging.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the message includes personal touches that make the new starter feel individually welcomed. If it could be sent to anyone, it needs more personalisation.",
          observation:
            "If your message does not mention the buddy by name or include a personal note about why the team is excited, it feels like a template rather than a letter.",
          coachingTip:
            "Add one detail that is specific to this person. Even 'we were impressed by your background in data visualisation and cannot wait to see what you bring' makes the message feel written for them.",
          styleContext:
            "Supportive communicators personalise welcome messages because they know a generic welcome feels like a process, not a greeting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either reads like a standard onboarding email, lacks warmth, or focuses too heavily on systems and processes rather than people and feelings. Leah wanted a letter from a friend, not an HR pack.",
          observation:
            "If your message opens with 'please complete the following steps to set up your account', it has failed before the second sentence.",
          coachingTip:
            "Start with the human, not the system. 'Welcome, we are glad you are here' before 'here is your login'. The order signals what matters most.",
          styleContext:
            "Supportive communicators design day-one messages as emotional anchors. If the new starter saves it and rereads it when they feel uncertain, the message is doing its job.",
        },
      },
    },
  },

  // Scenario 225 - David Chen, remote, advanced
  {
    id: "scenario-225",
    title: "The Remote Team Conflict Resolution",
    context:
      "Two remote team members have had a misunderstanding over a Slack message that was read as dismissive. The tension has been building for a week. David is coaching you on how to resolve it without bringing them into a confrontational video call.",
    chooseContext:
      "David has suggested speaking to each person individually first to understand their perspective before facilitating a joint conversation. One person is reluctant to talk, saying it is not a big deal.",
    rewriteContext:
      "David has asked you to write a message to both team members inviting them to a facilitated conversation, framing it as a positive step rather than a disciplinary one.",
    characterId: "david-chen",
    dialogue:
      "Remote misunderstandings are different from in-person ones. In an office, this would have been resolved over a cup of tea within an hour. Over Slack, the original message gets screenshotted, reread, and reinterpreted ten different ways. By the time someone says something, the damage is already done. We need to get these two talking - not typing - in a way that feels safe for both of them.",
    chooseDialogue:
      "When she says it is not a big deal, that usually means it is a big deal but she does not feel safe raising it. Do not push. Just say, 'I have noticed things feel a bit off between you and Jen, and I wanted to check in. No pressure to talk about it if you do not want to, but I am here if you do.' Give her the door. Let her decide whether to walk through it.",
    rewriteDialogue:
      "Write the invitation so both of them feel like this is a conversation, not a tribunal. The word 'facilitated' sounds formal. Call it a catch-up. Say you want to make sure they are both okay and that you have noticed things feel a bit strained. No blame, no judgement, just an honest 'I care about you both and I want this to feel right'.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has explained how remote miscommunication amplifies conflict, advised against pushing someone who says the issue is 'not a big deal', and coached you to offer a door rather than a demand. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David approaches the conflict with deep sensitivity to both parties' emotional states, reads beneath surface-level responses, and creates conditions for voluntary engagement. This is advanced supportive communication in conflict resolution.",
          observation:
            "The metaphor of 'giving her the door and letting her decide whether to walk through it' is quintessentially supportive. It offers help without imposing it, which builds trust.",
          coachingTip:
            "When someone coaches you to offer support without demanding engagement, and reads 'it is not a big deal' as a sign of emotional guardedness rather than genuine indifference, they are communicating supportively at an advanced level.",
          styleContext:
            "Supportive communicators understand that in remote settings, people retreat rather than confront. The challenge is creating safety sufficient for someone to choose vulnerability.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is perceptive about interpersonal dynamics, which can look expressive. But his response is to create safety, not to create energy. He is opening a door, not lighting a fire.",
          observation:
            "An expressive communicator might bring the two people together with enthusiasm about restoring the relationship. David works quietly and individually, building safety before any joint conversation.",
          coachingTip:
            "Supportive conflict resolution is individual and gentle. Expressive conflict resolution is collective and energetic. David is firmly in the individual, gentle space.",
          styleContext:
            "Supportive communicators resolve remote conflicts in stages: listen individually, create safety, then facilitate. They never skip the first two steps.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not proposed a formal mediation process, a structured investigation, or a documented resolution framework. His approach is entirely relational and intuitive.",
          observation:
            "There are no procedures, no templates, and no formal escalation paths. David is reading people, not following processes.",
          coachingTip:
            "Ask yourself: is this person following a conflict resolution framework or reading the emotional landscape? David is entirely in the human-reading space.",
          styleContext:
            "Supportive communicators trust their ability to read people over their ability to follow procedures. They believe that the right conversation at the right moment resolves more than any formal process.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One person says the Slack misunderstanding is 'not a big deal'. David believes this means she does not feel safe raising it. How do you approach her?",
      options: [
        {
          id: "s225-opt-a",
          text: "I do not want to make it bigger than it needs to be. I just noticed things have felt different between you and Jen this week, and I wanted to check you are okay. No pressure - but if you do want to talk, I am here.",
          score: 10,
          result: "strong",
          explanation:
            "You have respected her stated position while gently opening the door David described. The offer of confidentiality and the lack of pressure create safety without forcing engagement.",
        },
        {
          id: "s225-opt-b",
          text: "I have noticed some tension in your messages with Jen. I think it would be helpful for us all to have a quick call to clear the air. It does not need to be a big thing - just fifteen minutes to make sure everyone is on the same page.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned but premature. David specifically said to talk to each person individually first. Jumping straight to a joint call before she feels safe may increase her defensiveness.",
        },
        {
          id: "s225-opt-c",
          text: "If you say it is not a big deal, I will take your word for it. Let me know if anything changes.",
          score: 0,
          result: "weak",
          explanation:
            "David explicitly warned that 'not a big deal' often masks genuine distress. Taking the statement at face value ignores the emotional subtext that supportive communicators are trained to read.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants you to write a message inviting both team members to a facilitated conversation. It should feel like a catch-up, not a tribunal. No blame, no formality. Write it in a supportive style that makes both feel safe.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi both,\n\nI wanted to reach out because I care about how things feel within the team, and I have noticed that things between you two have felt a bit off recently. That is completely normal when you are communicating mostly through text - tone gets lost, intentions get misread, and small things can snowball.\n\nI would love for us to have a relaxed catch-up on a call this week. Not to assign blame or dig through messages, but just to reset. Sometimes hearing someone's actual voice clears up in five minutes what a week of typing could not.\n\nHere is what I am picturing: a short, informal conversation where we all talk honestly about how things have felt, clear up any misunderstandings, and agree on how we want to communicate going forward. Nothing formal, nothing recorded, nothing that goes anywhere else.\n\nIf either of you would prefer to talk to me individually first, I am completely happy to do that. Whatever feels most comfortable.\n\nLet me know what works for you. No rush - we will find a time that suits everyone.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message normalises the conflict, removes blame, and offers individual conversations as an alternative. Both parties would read this and feel safe engaging. David would approve without changes.",
          observation:
            "You framed the call as a 'reset' rather than a 'resolution', which feels lighter and less loaded. Supportive communicators choose words that reduce the perceived stakes of engagement.",
          coachingTip:
            "When writing facilitation invitations for supportive communicators, reduce the emotional stakes in every sentence. 'Reset' instead of 'resolve'. 'Catch-up' instead of 'mediation'. Language shapes willingness.",
          styleContext:
            "Supportive communicators know that the invitation to talk is often more anxiety-inducing than the conversation itself. If the invitation feels safe, the conversation usually goes well.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good tone, but check whether the message inadvertently creates pressure. If any sentence implies they must attend or that the situation is serious, it may trigger defensiveness in someone who already said the issue is 'not a big deal'.",
          observation:
            "If your message includes phrases like 'we need to address this' or 'it is important we resolve this soon', it raises the stakes beyond what David intended.",
          coachingTip:
            "Keep the language optional throughout. 'I would love to' not 'I need us to'. 'If you are comfortable' not 'please confirm'. The lighter the touch, the safer the invitation.",
          styleContext:
            "Supportive communicators believe that the lightest touch often produces the deepest engagement. People open up when they feel they chose to, not when they feel they had to.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either feels too formal, assigns blame, or creates pressure to engage. David wanted both people to feel this was a caring gesture, not a management intervention.",
          observation:
            "If your message mentions the specific Slack message, names one person's behaviour as the cause, or uses language like 'conflict resolution session', it has become what David explicitly wanted to avoid.",
          coachingTip:
            "Remove any reference to what happened and focus entirely on how things feel. The conversation should be about the future, not the past. David does not want an investigation; he wants a reconnection.",
          styleContext:
            "Supportive communicators resolve remote conflicts by creating warmth, not by examining evidence. The goal is for two people to hear each other's voice and remember they are on the same side.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (226-228)
  // ============================================

  // Scenario 226 - Rachel Finch, meeting, foundation
  {
    id: "scenario-226",
    title: "The Data Quality Review Meeting",
    context:
      "Rachel has called a meeting to review data quality issues that have been affecting report accuracy. She has prepared a full analysis and wants the team to agree on a remediation plan based on the evidence.",
    chooseContext:
      "Rachel has presented the data quality findings and a colleague suggests the issues are minor and not worth the effort to fix. Rachel disagrees and pushes back with specific impact data.",
    rewriteContext:
      "Rachel has asked you to write the meeting minutes with a focus on decisions made, actions assigned, and the data that informed each decision.",
    characterId: "rachel-finch",
    dialogue:
      "I have identified 847 records with data quality issues across three categories: missing fields, duplicate entries, and format inconsistencies. Missing fields account for 62% of the total, duplicates for 24%, and format issues for 14%. These errors have caused 23 report corrections in the last quarter, each taking an average of 90 minutes to resolve. That is 34.5 hours of rework. I have a remediation plan that addresses all three categories.",
    chooseDialogue:
      "I would not call 847 records minor. That is 4.2% of our total data set, and the error rate is increasing - it was 2.8% last quarter. If the trend continues, we will be above 5% by September, which is the threshold at which our ISO certification auditor has flagged concerns. The cost of not acting is higher than the cost of fixing it.",
    rewriteDialogue:
      "Write the minutes so every decision is traceable to the data we reviewed. If someone reads the minutes in six months, they should understand not just what we decided but why, based on which specific findings. Include the numbers - I do not want vague references to 'data quality concerns'.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has quantified 847 records across three categories, calculated hours of rework, identified an increasing trend, and linked the issue to ISO certification risk. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel communicates entirely through quantified evidence, categorical analysis, and trend identification. Every claim is backed by a specific number, and every risk is linked to a measurable threshold. This is analytical communication at its most structured.",
          observation:
            "Notice how Rachel tracks not just the current state but the trend. Analytical communicators do not just report problems; they project where those problems are heading.",
          coachingTip:
            "When someone presents findings with categorical breakdowns, trend analysis, and threshold-based risk assessments, they are communicating analytically. Respond with equally specific contributions.",
          styleContext:
            "Analytical communicators see data quality meetings as evidence-review sessions. Every discussion point should reference a specific finding, and every action should address a quantified problem.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is assertive about the severity of the issue, which can look direct. But her assertiveness comes from the data, not from personal conviction. She lets the numbers make the argument.",
          observation:
            "A direct communicator would say 'this needs fixing now'. Rachel says 'the error rate was 2.8% last quarter, it is 4.2% now, and it will hit 5% by September'. The data does the urgency-creating.",
          coachingTip:
            "Analytical communicators build urgency through trend analysis. Direct communicators create urgency through assertion. Rachel is showing the trajectory, not demanding a response.",
          styleContext:
            "Analytical communicators believe that well-presented data creates its own urgency. They do not need to raise their voice when the trend line speaks loudly enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not discussed team morale, the frustration of dealing with bad data, or how the rework makes people feel. Her entire presentation is numerical and logical.",
          observation:
            "There are no stories about frustrated colleagues, no emotional appeals, and no references to team wellbeing. Rachel is presenting evidence, not feelings.",
          coachingTip:
            "Ask yourself: is this person making an emotional case or an evidence case? Rachel is entirely in the evidence space.",
          styleContext:
            "Analytical communicators present data quality issues the way a doctor presents test results: factually, with clear implications, and with a recommended course of action.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A colleague says the 847 data quality issues are minor and not worth fixing. Rachel has shown the error rate is increasing and approaching the ISO certification threshold. How do you support her position?",
      options: [
        {
          id: "s226-opt-a",
          text: "The error rate has gone from 2.8% to 4.2% in one quarter. At that trajectory, we cross the 5% ISO threshold by September. The remediation plan addresses the root cause now, before a certification issue costs far more.",
          score: 10,
          result: "strong",
          explanation:
            "You have reinforced Rachel's argument using her own trend data and connected the remediation to a specific, quantifiable risk. This is how to support an analytical communicator.",
        },
        {
          id: "s226-opt-b",
          text: "I agree with Rachel. We have all noticed the data issues getting worse, and it is frustrating for the team. We should fix it before it becomes a bigger problem.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive but vague. 'Getting worse' and 'bigger problem' are qualitative assessments that do not add to Rachel's quantitative case. Use her numbers to strengthen the argument.",
        },
        {
          id: "s226-opt-c",
          text: "All data sets have some level of error. A 4.2% rate is actually quite good compared to industry averages. I think we should focus our energy on higher-priority projects.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing Rachel's analysis with an unsubstantiated claim about industry averages will not hold up. Rachel will ask for the source of that benchmark, and if you do not have one, you have lost the argument and her respect.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to write meeting minutes where every decision is traceable to specific data findings. Include the numbers, not vague references. Write them in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Meeting Minutes: Data Quality Review - 14 March 2026\nAttendees: Rachel Finch, [names], [names]\n\nFindings presented:\n- Total records with quality issues: 847 (4.2% of data set, up from 2.8% last quarter).\n- Breakdown: Missing fields 525 (62%), Duplicates 203 (24%), Format issues 119 (14%).\n- Impact: 23 report corrections in Q4, averaging 90 mins each. Total rework: 34.5 hours.\n- Risk: Error rate trending toward 5% ISO certification threshold by September 2026.\n\nDecisions:\n1. Proceed with data remediation plan (unanimous). Basis: current error rate trajectory threatens ISO certification within two quarters (ref: trend analysis, slide 4).\n2. Prioritise missing fields first (largest category at 62% of total issues). Basis: highest-volume error type with greatest impact on report accuracy.\n3. Implement automated duplicate detection by end of April. Basis: duplicates account for 203 records and current manual detection catches approximately 60%.\n\nActions:\n- Rachel Finch: Deliver missing field remediation by 28 March. Report completion rate at next review.\n- [Name]: Configure duplicate detection rules by 18 April. Test against Q4 data set.\n- [Name]: Standardise format validation rules across all three input systems by 25 April.\n\nNext review: 11 April 2026. Rachel to present progress against all three workstreams with updated error rate.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every decision is linked to a specific finding, every action has an owner and deadline, and the next review has a defined reporting requirement. Rachel would approve these minutes as a complete record.",
          observation:
            "You included references to specific slides and data points, which makes the minutes traceable to the presentation materials. This is the standard analytical communicators expect.",
          coachingTip:
            "When writing minutes for analytical communicators, connect every decision to the evidence that informed it. The minutes should function as an audit trail, not just a summary.",
          styleContext:
            "Analytical communicators use meeting minutes as accountability documents. If the minutes cannot answer 'why did we decide this?', they are incomplete.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every decision references the specific data that informed it. If any decision says 'agreed to proceed' without stating the evidence, Rachel will ask for it to be added.",
          observation:
            "If your minutes list actions without linking them to findings, they record what was decided but not why. Rachel wants both.",
          coachingTip:
            "For each decision, add a 'basis' line that references the specific finding or data point. This turns minutes from a task list into an evidence-based record.",
          styleContext:
            "Analytical communicators see meeting minutes as the most important output of any meeting. If the minutes are incomplete, the meeting was incomplete.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your minutes either lack specific numbers, use vague language like 'data quality concerns were discussed', or do not link decisions to evidence. Rachel would not accept these as a record of her review.",
          observation:
            "If your minutes say 'the team agreed to address data quality issues' without specifying which issues, how many records, or what the timeline is, they are functionally useless.",
          coachingTip:
            "Go back to Rachel's presentation. Every number she shared should appear in the minutes. Every decision should reference at least one of those numbers.",
          styleContext:
            "Analytical communicators judge meeting minutes by one test: could someone who was not present understand exactly what was decided and why? If not, rewrite them.",
        },
      },
    },
  },

  // Scenario 227 - Owen Grant, meeting, intermediate
  {
    id: "scenario-227",
    title: "The Risk Assessment Workshop",
    context:
      "Owen is facilitating a risk assessment workshop for a new project. He has prepared a structured methodology and wants the team to identify, score, and prioritise risks using a consistent framework rather than relying on gut feeling.",
    chooseContext:
      "Owen has introduced a risk scoring matrix but a senior project manager argues that experienced people can identify the key risks intuitively without a formal matrix. Owen disagrees.",
    rewriteContext:
      "Owen has asked you to write the workshop output document, presenting the identified risks in a structured format with scores, owners, and mitigation plans.",
    characterId: "owen-grant",
    dialogue:
      "I have designed a scoring matrix with two dimensions: likelihood and impact, each scored one to five. A risk that scores four on likelihood and four on impact gets a combined score of sixteen, which puts it in the red zone. Every risk goes through the same matrix. That way we compare risks objectively rather than letting the loudest voice in the room determine what we worry about.",
    chooseDialogue:
      "I respect experience, and intuition has value. But it is not repeatable, it is not transparent, and it is subject to bias. Last year, the team intuitively dismissed a supply chain risk that later delayed the project by eight weeks. The matrix would have scored it fifteen out of twenty-five, which is amber. The framework exists to catch what intuition misses.",
    rewriteDialogue:
      "Write the output so every risk has five elements: description, likelihood score, impact score, combined score, and assigned owner with a mitigation plan. If a risk is listed without a score or without an owner, it is not a managed risk - it is just a worry on a whiteboard.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Owen has designed a risk scoring matrix, insisted on consistent evaluation criteria, and cited a past example where intuition missed a critical risk that his framework would have caught. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen argues for systematic, evidence-based risk assessment over intuitive judgement. He designs frameworks, cites historical evidence, and insists on transparency and repeatability. This is analytical communication applied to risk management.",
          observation:
            "Owen's critique of intuition is itself evidence-based: he cites a specific past failure. Analytical communicators do not argue against intuition philosophically; they show where it has measurably failed.",
          coachingTip:
            "When someone designs a scoring framework, insists on consistent criteria, and uses historical evidence to challenge intuitive approaches, they are communicating analytically. Engage with the framework.",
          styleContext:
            "Analytical communicators see risk assessment as a discipline, not a discussion. The framework ensures that every risk receives the same quality of evaluation, regardless of who raises it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive about his methodology, which can look direct. But he is not simply demanding compliance - he is explaining why the framework is superior through evidence. The assertion serves the argument.",
          observation:
            "A direct communicator would say 'use the matrix, end of discussion'. Owen explains why intuition fails, cites a historical example, and builds the case for the framework logically.",
          coachingTip:
            "Analytical communicators justify their methods. Direct communicators mandate them. Owen is building a case, not issuing an instruction.",
          styleContext:
            "Analytical communicators want people to understand why the framework exists, not just comply with it. Understanding produces better engagement than obedience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not discussed team anxiety about the project, emotional responses to risk, or how to make people feel comfortable raising concerns. His approach is entirely methodological.",
          observation:
            "There are no emotional check-ins, no stories about how risk makes people feel, and no discussion of team dynamics. Owen is managing a process, not managing feelings.",
          coachingTip:
            "Ask yourself: is this person creating a safe space for discussion or a structured framework for evaluation? Owen is firmly in the framework space.",
          styleContext:
            "Analytical communicators believe that a good framework creates psychological safety by removing the loudest-voice problem. The matrix treats every risk equally, which protects quieter team members' contributions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior project manager argues that experienced people can identify key risks intuitively without a formal matrix. Owen has cited a past example where intuition missed a critical risk. How do you support Owen's approach?",
      options: [
        {
          id: "s227-opt-a",
          text: "That supply chain risk was dismissed intuitively and cost us eight weeks. The framework is not replacing experience - it ensures nothing falls through the gaps. Can we run through the matrix together and see if it surfaces anything we might miss?",
          score: 10,
          result: "strong",
          explanation:
            "You have reinforced Owen's evidence, reframed the matrix as complementary to experience rather than replacing it, and proposed using it together. This supports the analytical approach while respecting the senior manager's expertise.",
        },
        {
          id: "s227-opt-b",
          text: "Why not combine both approaches? Let the experienced people identify risks first, then put them through the matrix for scoring. That way we get the benefit of intuition and the discipline of a framework.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Owen may see it as undermining the framework by making it secondary to intuition. He wants all risks scored consistently, whether they come from intuition or analysis.",
        },
        {
          id: "s227-opt-c",
          text: "I have to say, I agree with the project manager. We have done risk assessments for years without a matrix and the projects have been delivered. Adding bureaucracy to a process that already works feels unnecessary.",
          score: 0,
          result: "weak",
          explanation:
            "Owen has just shown that the intuitive process missed a risk that caused an eight-week delay. Claiming the current process 'already works' ignores the evidence he presented. This will deeply frustrate an analytical communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to write the workshop output document with every risk scored, owned, and mitigated. Write it in an analytical style with the five elements he specified for each risk.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Risk Assessment Output: Project Nexus - Workshop Date: 14 March 2026\n\nScoring methodology: Likelihood (1-5) x Impact (1-5) = Combined score (1-25).\nThresholds: Red (16-25), Amber (9-15), Green (1-8).\n\nRisk 1: Supply chain disruption\n- Description: Primary component supplier has a single manufacturing site with no redundancy.\n- Likelihood: 3 (medium - no current disruption but no backup source identified).\n- Impact: 5 (critical - 12-week lead time for alternative supplier).\n- Combined score: 15 (Amber).\n- Owner: Sarah Lim.\n- Mitigation: Identify and qualify a secondary supplier by 30 April. Negotiate standby supply agreement. Target: reduce impact score from 5 to 3 by securing alternative with 4-week lead time.\n\nRisk 2: Regulatory approval delay\n- Description: New compliance requirements introduced in January may extend the approval timeline.\n- Likelihood: 4 (high - two similar projects delayed in Q4 2025).\n- Impact: 3 (moderate - 4-6 week delay but no cost increase).\n- Combined score: 12 (Amber).\n- Owner: Owen Grant.\n- Mitigation: Engage regulatory contact by 21 March to confirm current timeline expectations. Prepare pre-submission package to accelerate review.\n\nRisk 3: Key person dependency\n- Description: Lead architect is the sole knowledge holder for the integration layer.\n- Likelihood: 2 (low - no indication of departure but no redundancy).\n- Impact: 5 (critical - no one else can complete the integration work).\n- Combined score: 10 (Amber).\n- Owner: Derek Walsh.\n- Mitigation: Begin knowledge transfer to junior architect by 28 March. Document integration architecture by 18 April.\n\nSummary: 0 red risks, 3 amber, 2 green (not shown). Next review: 11 April 2026.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every risk follows Owen's five-element structure, scores are justified with evidence, and mitigation plans include specific dates and targets. Owen would present this to stakeholders with confidence.",
          observation:
            "You included scoring justifications in parentheses, which makes the rationale transparent. Analytical communicators want readers to understand not just the score but why it was assigned.",
          coachingTip:
            "When writing risk assessments for analytical communicators, justify every score. A number without a rationale is just a guess. A number with a rationale is an assessment.",
          styleContext:
            "Analytical communicators believe that the quality of a risk assessment is determined by the quality of the scoring justifications, not the quality of the risk descriptions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every score has a justification and every mitigation has a deadline. If any risk says 'mitigation: monitor and review', it is too vague for Owen's standards.",
          observation:
            "If your output includes risks without combined scores or with mitigation plans that say 'address as needed', it does not meet Owen's five-element requirement.",
          coachingTip:
            "For each risk, verify: is the description specific? Is the likelihood justified? Is the impact justified? Is there an owner? Is the mitigation dated? All five must be present.",
          styleContext:
            "Analytical communicators test risk assessments by completeness, not by volume. Three well-scored risks beat ten vaguely described ones.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your output either lacks the scoring matrix, uses vague descriptions, or does not assign owners and deadlines to mitigation plans. Owen would send this back for completion.",
          observation:
            "If your risk register lists risks without scores, or scores without justification, it is what Owen described: 'worries on a whiteboard, not managed risks'.",
          coachingTip:
            "Return to Owen's five elements: description, likelihood, impact, combined score, owner with mitigation. If any element is missing for any risk, the document is incomplete.",
          styleContext:
            "Analytical communicators see incomplete risk registers as worse than no risk register at all. Incompleteness creates a false sense of security.",
        },
      },
    },
  },

  // Scenario 228 - Fiona Banks, meeting, advanced
  {
    id: "scenario-228",
    title: "The Strategic Planning Data Review",
    context:
      "Fiona has been asked to present market data at a strategic planning meeting to inform the leadership team's investment decisions. She has prepared a comprehensive analysis but is concerned the team will cherry-pick data to support pre-existing preferences.",
    chooseContext:
      "Fiona has presented data that contradicts the CEO's preferred investment direction. The CEO is pushing back, questioning the data sources rather than the findings. Fiona holds her ground.",
    rewriteContext:
      "Fiona has asked you to write the data appendix for the strategic plan, ensuring every data point cited in the plan is sourced, dated, and verifiable by anyone who reads the document.",
    characterId: "fiona-banks",
    dialogue:
      "I have compiled market data from four independent sources covering the last eighteen months. All four sources show the same trend: the segment the CEO wants to invest in is declining at 3.2% annually while the adjacent segment is growing at 7.8%. I am not making a recommendation yet - I am presenting data. But the data does not support the current direction, and I think the leadership team needs to see that clearly before they commit capital.",
    chooseDialogue:
      "I welcome scrutiny of my sources. Here they are: the ONS quarterly survey, the industry association's annual report, our own internal sales data, and an independent market study commissioned last September. All four are publicly verifiable except our internal data, which I can share in full. If anyone can identify a methodological issue with any of these sources, I genuinely want to hear it. But questioning the source because you dislike the finding is not the same as questioning the methodology.",
    rewriteDialogue:
      "Write the appendix so every data point in the strategic plan can be traced to its source, its collection date, and its methodology. If someone reads the plan in twelve months and asks 'where did this number come from?', the appendix should answer that question without anyone needing to call me. The data should outlive the meeting.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has cited four independent data sources showing a declining market segment, distinguished between questioning methodology and questioning findings, and designed her appendix for long-term traceability. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona communicates through multi-source evidence triangulation, methodological transparency, and a commitment to data traceability that outlasts any single meeting. This is analytical communication at its most principled.",
          observation:
            "The distinction between questioning methodology and questioning findings because you dislike them is profound. Analytical communicators defend intellectual integrity, not personal positions.",
          coachingTip:
            "When someone welcomes methodological scrutiny but challenges motivated reasoning, they are communicating analytically at the highest level. They are defending the integrity of the analytical process itself.",
          styleContext:
            "Analytical communicators at the senior level see themselves as custodians of evidence quality. They will challenge anyone - including the CEO - who tries to subordinate data to preference.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is bold in presenting data that contradicts the CEO's preference, which can look direct. But her boldness comes from confidence in her methodology, not from personal assertiveness. She is defending the data, not herself.",
          observation:
            "A direct communicator would say 'the data says you are wrong'. Fiona says 'the data does not support the current direction, and here are the four independent sources that confirm that'.",
          coachingTip:
            "Analytical communicators let evidence speak on their behalf. Direct communicators speak for themselves. Fiona is pointing at the data and stepping aside.",
          styleContext:
            "Analytical communicators in strategic meetings see themselves as translators between data and decision. They present the evidence and trust the leadership team to draw the right conclusions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not discussed the team's emotional readiness for bad news, the CEO's potential feelings about being contradicted, or how to manage the interpersonal dynamics. Her approach is purely evidence-based.",
          observation:
            "There is no softening, no relationship management, and no emotional framing. Fiona presents data because she believes the data is what matters most at this decision point.",
          coachingTip:
            "Ask yourself: is this person managing a room or managing a data set? Fiona is entirely focused on the data. She trusts the evidence to manage the room.",
          styleContext:
            "Analytical communicators at the advanced level believe that presenting inconvenient data is a form of loyalty to the organisation. Hiding it would be the disloyal act.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The CEO is questioning Fiona's data sources because the findings contradict his preferred investment direction. Fiona has offered to share all sources for verification. How do you support her?",
      options: [
        {
          id: "s228-opt-a",
          text: "Four independent sources show the same trend. To challenge the finding, we need counter-evidence, not a challenge to the messenger. What data supports the current direction? If we cannot produce it, Fiona's data should inform the decision.",
          score: 10,
          result: "strong",
          explanation:
            "You have shifted the burden of proof fairly, defended the principle of evidence-based decision-making, and supported Fiona without making it personal. This is how to back an analytical communicator under pressure.",
        },
        {
          id: "s228-opt-b",
          text: "I trust Fiona's analysis. She has been thorough, and the sources are credible. I think we should take the data seriously even if it is not what we were hoping to see.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive but appeals to trust rather than engaging with the evidence. Fiona does not want people to trust her - she wants them to verify her sources and reach the same conclusion independently.",
        },
        {
          id: "s228-opt-c",
          text: "Market data can be interpreted in many ways. Maybe the decline in this segment is temporary, and the CEO has a longer-term view that the data does not capture. Sometimes leadership vision matters more than quarterly statistics.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing eighteen months of multi-source data as 'quarterly statistics' and elevating unsubstantiated vision over evidence is exactly the motivated reasoning Fiona just warned against.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants you to write the data appendix for the strategic plan. Every data point must be traceable to its source, collection date, and methodology. Write it in an analytical style that ensures long-term verifiability.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Data Appendix: Strategic Plan 2026-2028\nPrepared by: Fiona Banks | Date: 14 March 2026\n\nPurpose: This appendix provides full source traceability for all market data cited in the strategic plan. Every figure can be independently verified using the references below.\n\nData Point 1: Segment A annual decline rate (3.2%)\n- Source 1: ONS Quarterly Business Survey, Q4 2025 (published January 2026). Table 7.3, Manufacturing subsector.\n- Source 2: Industry Association Annual Market Report 2025 (published February 2026). Section 4.2, page 41.\n- Source 3: Internal sales data, April 2024 - September 2025 (18-month rolling). CRM export, filtered by segment code A.\n- Source 4: Independent market study commissioned September 2025 (delivered December 2025). Conducted by [Research Firm], sample size 340 companies.\n- Methodology note: Decline rate calculated as compound annual growth rate across all four sources. Range: 2.9% to 3.6%. Central estimate: 3.2%.\n\nData Point 2: Segment B annual growth rate (7.8%)\n- Source 1: ONS Quarterly Business Survey, Q4 2025. Table 7.4, Services subsector.\n- Source 2: Industry Association Annual Market Report 2025. Section 5.1, page 58.\n- Source 3: Internal sales data, April 2024 - September 2025. CRM export, filtered by segment code B.\n- Source 4: Independent market study (as above). Chapter 3, adjacent market analysis.\n- Methodology note: Growth rate calculated as compound annual growth rate. Range: 7.1% to 8.4%. Central estimate: 7.8%.\n\nData Point 3: Investment payback period comparison\n- Segment A: Estimated 4.2 years at current trajectory (internal financial model, assumptions documented in Appendix C).\n- Segment B: Estimated 2.1 years at current trajectory (same model, same assumptions).\n- Sensitivity note: Payback periods tested at +/- 2% growth variation. Segment A range: 3.8-5.1 years. Segment B range: 1.8-2.5 years.\n\nVerification: All external sources are publicly available. Internal data available on request from the analytics team. The independent market study is held by the strategy office.\n\nThis appendix will be reviewed and updated at each quarterly strategy review.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your appendix provides full traceability for every data point, includes methodology notes, and specifies where each source can be verified. Fiona would attach this to the strategic plan without changes.",
          observation:
            "You included sensitivity analysis and ranges, not just central estimates. This demonstrates the kind of analytical rigour that makes the data resilient to challenge.",
          coachingTip:
            "When writing data appendices for analytical communicators, include ranges and methodology notes alongside headline figures. This shows that the central estimate is robust, not arbitrary.",
          styleContext:
            "Analytical communicators design data appendices to be self-sustaining documents. If the author leaves the organisation, the data should still be verifiable and interpretable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every data point includes all four elements: source, date, methodology, and verification path. If any figure says 'based on market data' without specifying which data, it is incomplete.",
          observation:
            "If your appendix lists sources but does not include page numbers, table references, or date ranges, it creates a traceability gap that Fiona would want closed.",
          coachingTip:
            "For each data point, ask: could someone with no prior knowledge find this exact figure using only the information I have provided? If not, add the missing detail.",
          styleContext:
            "Analytical communicators see data appendices as the foundation of institutional trust. If the numbers cannot be verified, the strategy built on them is sand.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your appendix either lacks specific source references, uses vague attribution like 'industry data suggests', or does not include methodology or verification information. Fiona would not approve this.",
          observation:
            "If your appendix says 'market research indicates a declining trend' without naming the research, the date, the sample size, or the methodology, it is not a data appendix - it is a claim.",
          coachingTip:
            "Replace every vague reference with a specific one. 'Market research' becomes 'ONS Quarterly Business Survey, Q4 2025, Table 7.3'. That is the standard Fiona demands.",
          styleContext:
            "Analytical communicators see unattributed data as worse than no data. At least the absence of evidence is honest. Vague attribution pretends to be rigorous while being impossible to verify.",
        },
      },
    },
  },
];
