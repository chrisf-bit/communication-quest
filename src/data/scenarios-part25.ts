import { Scenario } from "@/types";

export const SCENARIOS_PART25: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (289-291) - sales
  // ============================================

  // Scenario 289 - Jordan Cole, sales, foundation
  {
    id: "scenario-289",
    title: "The Stalled Deal",
    context:
      "Jordan is reviewing a sales opportunity that has been sitting in the pipeline for three months without progress. The client keeps requesting more information but has not committed to a decision timeline. Jordan wants to force clarity.",
    chooseContext:
      "Jordan has called the client contact directly and is pushing for a definitive answer on whether the deal is moving forward or needs to be closed out.",
    rewriteContext:
      "Jordan has asked you to write a follow-up email to the client that creates urgency without being aggressive, making the cost of indecision clear.",
    characterId: "jordan-cole",
    dialogue:
      "This deal has been in the pipeline since January. We have sent four proposals, answered two rounds of technical questions, and done a product demo. At some point, requesting more information stops being due diligence and starts being a way to avoid making a decision. I am calling them today to get a yes, a no, or a timeline. Any of those is better than silence.",
    chooseDialogue:
      "I appreciate that this is a significant investment for you. But we have been in discussions for three months and I want to make sure we are not wasting your time or ours. Can you tell me honestly: is this going to happen in the next 30 days, or should we pause and revisit when you have budget clarity?",
    rewriteDialogue:
      "Write a follow-up email. Be respectful but make it clear that we need a decision direction within the next two weeks. Include the cost of the current delay - the pricing we quoted expires at the end of the month, and implementation timelines extend with every week of delay. Give them a reason to act now.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Jordan has decided to call a stalled client directly, demanding a clear yes, no, or timeline after three months of delays and unanswered requests. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan identifies the stall pattern, rejects further information-gathering as avoidance, and pushes for a definitive answer. This is a direct communicator cutting through indecision to force a resolution.",
          observation:
            "Notice how Jordan frames any answer - even a no - as better than continued silence. Direct communicators value clarity over positive outcomes. A closed deal is better than a zombie one.",
          coachingTip:
            "When a salesperson stops accommodating delay and demands a clear decision direction, they are operating in a direct style. Match their clarity with honest answers.",
          styleContext:
            "Direct communicators in sales believe that stalled deals consume resources that could be deployed on active opportunities. Forcing clarity is a form of pipeline hygiene.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan has tracked the deal timeline and counts the proposals sent, which sounds analytical. But the purpose is not analysis - it is to build a case for forcing a decision immediately.",
          observation:
            "An analytical salesperson would review the deal data and propose a strategy. Jordan has already decided the strategy: call them and demand an answer today.",
          coachingTip:
            "If someone uses deal data to justify an immediate confrontation, that is direct. If they use it to design a multi-step engagement strategy, that is analytical.",
          styleContext:
            "Direct communicators use data as ammunition for action, not as input for deliberation. The analysis is done; the call is happening today.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not tried to understand the client's internal dynamics, build deeper relationships with other stakeholders, or explore what is causing the delay emotionally.",
          observation:
            "There is no interest in why the client is stalling, only in ending the stall. Jordan treats the delay as a behaviour to change, not a situation to understand.",
          coachingTip:
            "Ask yourself: is this person trying to understand the delay or end it? Jordan wants the delay over, regardless of the underlying reason.",
          styleContext:
            "Direct communicators in sales accept that some deals die. They would rather know early and reallocate resources than nurse a stalled opportunity indefinitely.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has asked the client directly whether the deal will happen in the next 30 days or should be paused. The client says they are still interested but their internal approval process is slow. How does Jordan respond?",
      options: [
        {
          id: "s289-opt-a",
          text: "I understand internal processes take time. But I need something concrete. Who is the final decision-maker, and can we get 30 minutes with them this week? If we can address their questions directly, we can cut weeks off the approval timeline.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the client's constraint while pushing for direct access to the decision-maker. This maintains momentum without being dismissive of their process.",
        },
        {
          id: "s289-opt-b",
          text: "I understand. Is there anything else we can provide to help move the internal process along? We are happy to put together additional materials if that would help.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned but this is exactly what has been happening for three months - providing more materials. Jordan has already identified that more information is not the solution.",
        },
        {
          id: "s289-opt-c",
          text: "No problem at all. Take the time you need and come back to us when you are ready. We will be here whenever you are ready to move forward.",
          score: 0,
          result: "weak",
          explanation:
            "This removes all urgency and returns the deal to exactly the stalled state Jordan is trying to break. Open-ended patience is the opposite of what this situation needs.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a follow-up email that creates urgency through pricing expiry and implementation timeline impacts. Write it in a direct style that is respectful but firm.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Next steps on your proposal - timing update\n\nHi Sarah,\n\nThank you for our conversation earlier. I understand the internal process takes time, and I want to make sure you have what you need to move forward.\n\nTwo things to be aware of:\n\n1. Pricing: The proposal we sent is valid until 31 March. After that date, we would need to re-quote based on current rates, which have increased by approximately 8%.\n\n2. Implementation: Every week of delay extends the go-live date by the same period. If we receive sign-off by 28 March, we can deliver by the end of Q2. After that, we are looking at July at the earliest.\n\nI am not trying to create pressure. I am trying to give you the information you need to make the case internally. If a call with your decision-maker would help, I am available any day this week.\n\nPlease let me know how you would like to proceed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email creates urgency through facts - pricing expiry and timeline impact - without being aggressive. Jordan would send this knowing it gives the client a genuine reason to act.",
          observation:
            "The line 'I am not trying to create pressure' is clever because it simultaneously removes perceived aggression while the facts themselves create the urgency. Direct communicators let facts do the persuading.",
          coachingTip:
            "When writing urgency emails for direct communicators, use facts (price changes, timeline impacts) rather than pressure language ('act now'). Facts create urgency that feels helpful rather than pushy.",
          styleContext:
            "Direct communicators in sales create urgency through transparency about real consequences, not through artificial deadlines or pressure tactics.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your urgency drivers are specific enough. If the email says 'pricing may change' instead of 'pricing increases by 8% after 31 March', it lacks the specificity that drives action.",
          observation:
            "Vague urgency is easy to ignore. Specific urgency with dates and numbers demands a response because the cost of waiting becomes tangible.",
          coachingTip:
            "Replace every 'may' and 'could' with a specific date and number. 'Prices may increase' becomes 'prices increase by 8% after 31 March'.",
          styleContext:
            "Direct communicators know that specificity creates accountability. A vague timeline creates no urgency; a dated deadline demands a response.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too gentle, or fails to include the concrete urgency drivers Jordan specified. Without specific pricing and timeline consequences, the client has no reason to act differently.",
          observation:
            "If your email ends with 'we look forward to hearing from you at your convenience', it has removed the urgency entirely.",
          coachingTip:
            "End with a specific ask and a date. 'Please let me know by Friday' is more effective than 'at your earliest convenience'.",
          styleContext:
            "Direct communicators believe that every sales email should contain a specific next step and a timeframe. Without both, the email is a conversation, not a close.",
        },
      },
    },
  },

  // Scenario 290 - Sam Hartley, sales, intermediate
  {
    id: "scenario-290",
    title: "The Competitive Displacement",
    context:
      "Sam is pitching to a prospect who is currently using a competitor's product. The prospect is cautiously interested but loyal to their existing provider. Sam needs to differentiate without badmouthing the competition.",
    chooseContext:
      "The prospect has asked Sam directly why they should switch when their current provider 'does the job well enough'. Sam sees an opening to reframe 'good enough' as a strategic risk.",
    rewriteContext:
      "Sam has asked you to write a follow-up email summarising the key differentiators discussed in the meeting, keeping the focus on value delivered rather than competitor weaknesses.",
    characterId: "sam-hartley",
    dialogue:
      "I am not going to tell you your current provider is bad. They are not. But 'good enough' is a dangerous position in a market that is moving this fast. The question is not whether your current solution works today. It is whether it will keep up with what you need in eighteen months. I think the answer to that is no, and I can show you why.",
    chooseDialogue:
      "When you say it does the job well enough, what I hear is that it meets your current requirements but does not exceed them. That means you are running at exactly the pace of your tools, not the pace of your ambition. We built our platform for where the market is going, not where it was. Let me show you the three capabilities your current provider cannot match.",
    rewriteDialogue:
      "Write the follow-up email. Lead with the three differentiators I walked through. Do not mention the competitor by name - just show what we do that they cannot. End with a clear next step: a 30-minute technical demo with their head of operations. Make it easy to say yes.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam has reframed a prospect's satisfaction with their current provider as a strategic risk, challenged 'good enough' as a dangerous position, and offered to demonstrate specific capabilities the competitor cannot match. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam takes the prospect's stated satisfaction and reframes it as complacency, using competitive language like 'pace of your ambition' to create urgency. This is a direct salesperson shifting the prospect's frame of reference without attacking the competitor.",
          observation:
            "Notice how Sam respects the competitor while undermining the case for staying. The phrase 'good enough is a dangerous position' challenges without insulting. Direct communicators are strategic in their directness.",
          coachingTip:
            "When a salesperson reframes satisfaction as risk and challenges the prospect to think bigger, they are using a direct persuasion style. It works because it respects the prospect's intelligence.",
          styleContext:
            "Direct communicators in competitive sales do not attack competitors. They make the case for change so compelling that staying still looks like the riskier option.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam references market trends and future capability gaps, which sounds analytical. But the argument is deployed as a challenge, not as an analysis. Sam is provoking action, not presenting data.",
          observation:
            "An analytical salesperson would present a detailed comparison matrix showing capability gaps across fifteen dimensions. Sam boils it down to a single provocative insight and three proof points.",
          coachingTip:
            "If someone uses market insight to provoke a decision, that is direct. If they use it to build a comprehensive case for considered evaluation, that is analytical. Sam is provoking, not analysing.",
          styleContext:
            "Direct communicators simplify complex competitive landscapes into clear choice moments. 'Good enough or leading?' is the kind of binary that forces action.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not focused on building a personal relationship, understanding the prospect's emotional attachment to their current provider, or exploring what change feels like for their organisation.",
          observation:
            "There is no empathy for the effort of switching providers, no acknowledgement of the relationship with the existing vendor, and no exploration of how change might affect the team emotionally.",
          coachingTip:
            "Ask yourself: is this person managing the relationship or driving the decision? Sam is creating the business case for change, not managing the emotional journey of switching.",
          styleContext:
            "Direct communicators in sales focus on the rational case for change. They trust that a strong enough business case overcomes emotional inertia.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The prospect asks why they should switch when their current provider does the job well enough. Sam has reframed 'good enough' as a strategic risk. How do you support Sam's pitch?",
      options: [
        {
          id: "s290-opt-a",
          text: "To put it concretely: three of your competitors switched to platforms like ours in the last twelve months. They did it because 'good enough' meant they were falling behind on automation, reporting speed, and integration capability. You do not have to switch, but your competitors already have.",
          score: 10,
          result: "strong",
          explanation:
            "You provided competitive market evidence that makes the cost of inaction tangible. Referencing competitor moves creates urgency without attacking the current provider.",
        },
        {
          id: "s290-opt-b",
          text: "We could arrange a side-by-side comparison of our platform against your current setup. That would give you concrete data on where the gaps are.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but it adds another step rather than creating urgency now. Sam is trying to compress the sales cycle, not extend it with more evaluation stages.",
        },
        {
          id: "s290-opt-c",
          text: "If it is working for you, that is a valid reason to stay. We can always revisit this conversation in a year when your contract is up for renewal.",
          score: 0,
          result: "weak",
          explanation:
            "This validates the prospect's inertia and gives them permission to defer the decision indefinitely. Sam has specifically framed delay as a risk and you are normalising it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to write a follow-up email with three differentiators, no competitor mentions, and a clear next step of a 30-minute technical demo. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Three capabilities worth 30 minutes of your time\n\nHi David,\n\nGood to speak today. Here is a summary of the three capabilities I walked through.\n\n1. Real-time reporting: Your dashboards update every 15 minutes. Ours update in real time. For a business making time-sensitive decisions, those 15 minutes are the difference between reacting and leading.\n\n2. Integration depth: We connect natively to 140 platforms. That means your team spends time using tools, not configuring them. Based on what you told me about your current integration workload, this could save your operations team 20 hours per month.\n\n3. Predictive analytics: We do not just report what happened. We flag what is about to happen. Your current setup is a rear-view mirror. Ours is a windshield.\n\nNext step: I would like to arrange a 30-minute technical demo with your head of operations so they can see these capabilities with your actual data. I have availability on Tuesday or Thursday next week.\n\nLet me know what works.\n\nSam",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email presents three clear differentiators without mentioning the competitor, uses concrete metrics where possible, and closes with a specific next step. Sam would send this immediately.",
          observation:
            "You framed each differentiator in terms of business impact rather than feature specification. 'Saves 20 hours per month' is more persuasive than 'connects to 140 platforms' on its own.",
          coachingTip:
            "When writing competitive sales emails for direct communicators, translate every feature into a business outcome. Features inform; outcomes persuade.",
          styleContext:
            "Direct communicators in sales know that prospects do not buy features. They buy outcomes. Every capability should be expressed as a benefit the prospect can measure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your differentiators are expressed as outcomes or as features. If your email lists what the product does without saying what the prospect gains, it needs reframing.",
          observation:
            "If your differentiators could appear on a product brochure without modification, they need to be customised to this specific prospect's needs.",
          coachingTip:
            "For each differentiator, add 'which means...' and complete the sentence with a specific benefit for this prospect. That connecting phrase transforms features into value.",
          styleContext:
            "Direct communicators in sales personalise every pitch. Generic capability statements do not create the urgency needed to displace an existing provider.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, mentions the competitor by name, or fails to close with a specific next step. Sam was clear: three differentiators and a call to action. Nothing more.",
          observation:
            "If your email includes a paragraph about partnership values or your company's mission, it has lost the direct, outcome-focused approach Sam wants.",
          coachingTip:
            "Write the email, then count the paragraphs. If there are more than five, cut until there are five or fewer. Brevity is persuasion in a sales follow-up.",
          styleContext:
            "Direct communicators write sales follow-ups that can be read in under 60 seconds. If the prospect has to scroll, you have lost their attention.",
        },
      },
    },
  },

  // Scenario 291 - Alex Tran, sales, advanced
  {
    id: "scenario-291",
    title: "The C-Suite Close",
    context:
      "Alex is meeting the CEO of a prospect company to close a deal that has been championed by the prospect's head of operations. The CEO has final sign-off authority and is known for being sceptical of vendor promises. Alex has one meeting to secure the deal.",
    chooseContext:
      "The CEO has opened the meeting by saying they have heard the pitch from their own team and want to hear one thing: why this vendor and not the two alternatives on the shortlist.",
    rewriteContext:
      "Alex has asked you to write a one-page executive summary that the CEO can use to justify the decision to their board.",
    characterId: "alex-tran",
    dialogue:
      "I am not going to repeat the deck your team has already seen. You have a shortlist of three vendors. All three can do the job. The question is which one gives you the highest return with the lowest risk. I can answer that in under five minutes. If I have not convinced you by then, we are not the right choice.",
    chooseDialogue:
      "You asked why us. One reason: speed to value. Your operations director told us you need this live before the end of Q3. Vendor A quoted a sixteen-week implementation. Vendor B quoted twelve. We will do it in eight. We have done it in eight for three companies in your sector in the last year. I can give you their names and you can call them today.",
    rewriteDialogue:
      "Write a one-page executive summary. Not a sales brochure - a decision paper. The CEO needs to take this to the board and justify choosing us over two alternatives. Lead with the commercial case. Include the implementation timeline comparison. End with client references. One page, no marketing language.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has opened a CEO meeting by refusing to repeat the pitch, framing the decision as a risk-return calculation, and setting a five-minute self-imposed deadline to make the case. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex demonstrates supreme confidence, respects the CEO's time, and frames the entire conversation around a single commercial decision. Setting a five-minute deadline shows a direct communicator at the peak of their craft - total confidence in the clarity of their case.",
          observation:
            "The phrase 'if I have not convinced you by then, we are not the right choice' is a high-stakes gambit that only a confident direct communicator would deploy. It signals that Alex trusts the strength of the proposition entirely.",
          coachingTip:
            "When a salesperson imposes a time limit on their own pitch, they are signalling extreme confidence in the clarity and strength of their value proposition. This is advanced direct communication.",
          styleContext:
            "Direct communicators at the C-suite level earn respect through brevity and confidence. A long pitch signals uncertainty. A short, certain one signals that the case is bulletproof.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex mentions risk-return analysis, which sounds analytical. But she is not proposing an analytical framework - she is using the language of analysis to deliver a decisive, confident close.",
          observation:
            "An analytical salesperson would present a detailed comparison across multiple evaluation criteria. Alex reduces the entire decision to one factor: speed to value. That is direct simplification, not analytical thoroughness.",
          coachingTip:
            "If someone reduces a complex decision to a single, decisive factor, that is direct. If they present multiple factors for comprehensive evaluation, that is analytical. Alex has chosen the one argument that wins.",
          styleContext:
            "Direct communicators in C-suite sales know that senior leaders make decisions on one or two factors, not fifteen. They identify the decisive factor and build the entire pitch around it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not tried to build a personal relationship with the CEO, explore the company's vision, or create an emotional connection to the partnership. The pitch is entirely transactional and evidence-based.",
          observation:
            "There is no warmth, no vision-sharing, and no attempt to make the CEO feel emotionally invested. Alex treats the meeting as a decision point, not a relationship-building opportunity.",
          coachingTip:
            "Ask yourself: is this person selling a partnership or a product? Alex is selling a commercial outcome. The partnership is a consequence of delivering results, not a precondition.",
          styleContext:
            "Direct communicators at the C-suite level believe that CEOs respect vendors who save their time, present clear evidence, and ask for the decision. Relationship-building follows the close, not the other way around.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The CEO has asked why Alex's company and not the two alternatives. Alex has answered with speed to value and offered verifiable client references. The CEO asks what happens if the eight-week timeline slips. How does Alex respond?",
      options: [
        {
          id: "s291-opt-a",
          text: "If we miss the eight-week target, we will cover our professional services costs for every additional week until we deliver. That commitment is in the contract. We can afford to make that offer because in the three implementations I referenced, the longest took seven weeks and two days.",
          score: 10,
          result: "strong",
          explanation:
            "You backed the timeline claim with a contractual guarantee and evidence from previous implementations. This eliminates the risk the CEO was probing and demonstrates total confidence in delivery.",
        },
        {
          id: "s291-opt-b",
          text: "Timeline slippage is always possible on complex projects. We would work closely with your team to identify any risks early and adjust the plan accordingly.",
          score: 5,
          result: "partial",
          explanation:
            "Honest but it undermines the confidence Alex has built. The CEO is testing whether Alex's claim is genuine, and a hedged answer suggests it might not be.",
        },
        {
          id: "s291-opt-c",
          text: "Let us cross that bridge if we come to it. For now, I think the important thing is to focus on the value we deliver rather than worrying about hypothetical delays.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses a legitimate concern from the decision-maker. CEOs probe risks because they are accountable for the outcome. Deflecting the question erodes trust at the worst possible moment.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a one-page decision paper for the CEO to take to the board. Commercial case, implementation comparison, and client references. No marketing language. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Executive Summary - Vendor Selection Decision\n\nRecommendation: [Company Name]\n\nCommercial case:\n- Annual licence cost: 85,000 pounds (Vendor A: 92,000 pounds, Vendor B: 88,000 pounds).\n- Implementation cost: 40,000 pounds (Vendor A: 55,000 pounds, Vendor B: 48,000 pounds).\n- Total first-year cost: 125,000 pounds (lowest of three shortlisted vendors).\n- Projected ROI based on operational efficiency gains: 210,000 pounds in year one (2.4 months payback).\n\nImplementation timeline:\n- [Company Name]: 8 weeks to go-live (guaranteed contractually, with cost penalties for overrun).\n- Vendor A: 16 weeks estimated.\n- Vendor B: 12 weeks estimated.\n- Faster implementation means earlier access to operational savings and Q3 readiness.\n\nRisk mitigation:\n- Contractual guarantee: professional services costs covered for any week beyond the 8-week target.\n- Dedicated implementation lead assigned from day one.\n- Parallel running with existing system for two weeks at no additional cost.\n\nClient references (same sector, same implementation model):\n1. [Company X] - implemented in 7 weeks, live since March 2025. Contact: [Name], Operations Director.\n2. [Company Y] - implemented in 8 weeks, live since November 2024. Contact: [Name], CTO.\n3. [Company Z] - implemented in 7.5 weeks, live since June 2025. Contact: [Name], Head of Operations.\n\nNext step: Contract review and sign-off within 14 days to meet Q3 go-live target.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your decision paper gives the CEO everything needed to justify the choice to the board: cost comparison, timeline advantage, risk mitigation, and verifiable references. One page, no filler.",
          observation:
            "You positioned the recommendation at the top and supported it with comparative data throughout. The CEO reads the conclusion first and then validates it with the evidence below.",
          coachingTip:
            "When writing decision papers for direct communicators, lead with the recommendation. The reader should know what to decide on line one and spend the rest of the page understanding why.",
          styleContext:
            "Direct communicators structure board papers as conclusion-first documents. Busy executives want the answer immediately and the justification afterwards.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framework, but check whether your comparisons include specific figures for all three vendors. If the CEO cannot see a clear cost or timeline advantage in the numbers, the case is not strong enough.",
          observation:
            "If your paper presents your company's strengths without comparing them to the alternatives, the CEO cannot use it to justify choosing one over the others.",
          coachingTip:
            "A decision paper must show why this option beats the alternatives, not just why this option is good. Comparative data is the foundation of a board-ready recommendation.",
          styleContext:
            "Direct communicators know that boards decide between options, not on single proposals. The paper must make the comparison obvious and the conclusion inevitable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paper is either too long, uses marketing language, or does not include competitive comparison data. Alex specifically asked for a decision document, not a sales brochure.",
          observation:
            "If your paper includes phrases like 'industry-leading', 'best-in-class', or 'innovative solution', it reads like marketing, not a board paper. CEOs dismiss marketing language instantly.",
          coachingTip:
            "Remove every adjective and replace it with a number. 'Best-in-class implementation speed' becomes '8 weeks versus industry average of 14 weeks'. Numbers persuade; adjectives do not.",
          styleContext:
            "Direct communicators at the C-suite level judge vendor documents by whether they can be handed to a board without embarrassment. Marketing language fails that test. Data passes it.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (292-294) - client
  // ============================================

  // Scenario 292 - Priya Sharma, client, foundation
  {
    id: "scenario-292",
    title: "The New Client Welcome",
    context:
      "Priya is running the first kick-off meeting with a new client. She wants the meeting to set the tone for a collaborative, energised partnership rather than a standard vendor-client transaction.",
    chooseContext:
      "Priya has opened the meeting with personal introductions and is now transitioning to the project discussion. She wants to frame the work as a shared adventure, not a service delivery.",
    rewriteContext:
      "Priya has asked you to write the kick-off meeting follow-up email that reinforces the collaborative tone and confirms the first milestone with warmth.",
    characterId: "priya-sharma",
    dialogue:
      "Before we get into the project plan, I want to set the tone for how we are going to work together. This is not a them-and-us arrangement. We are one team for the next six months. Your challenges are our challenges. Your wins are our wins. I want this to be a partnership you actually enjoy, not one you endure.",
    chooseDialogue:
      "I love that your team is already thinking about the launch event. That tells me you are as excited about this as we are. Let us capture that energy and build it into the project plan. What if the first milestone was not just a deliverable but a moment we could celebrate together?",
    rewriteDialogue:
      "Write the follow-up email. Make it feel like the start of something exciting. Reference the energy in the room today and confirm the first milestone in a way that makes people want to hit it. This is the email that sets the relationship tone for the entire project.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "client",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has opened a client kick-off by reframing the vendor relationship as a shared team, emphasising enjoyment alongside delivery, and framing project milestones as celebrations. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya frames the entire client relationship around energy, shared purpose, and enjoyment. She elevates milestones from deliverables to celebrations. This is an expressive communicator creating a relationship culture from the very first meeting.",
          observation:
            "Notice how Priya does not separate the work from the experience of doing the work. For expressive communicators, how the project feels is as important as what it delivers.",
          coachingTip:
            "When someone frames a client kick-off around partnership energy and shared celebration, they are setting an expressive tone. Match their enthusiasm with genuine engagement.",
          styleContext:
            "Expressive communicators believe that the tone set in the first meeting determines the quality of the entire partnership. A transactional start leads to a transactional relationship.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya's emphasis on the client's comfort and inclusion sounds supportive. But the energy is outward and celebratory, not inward and protective. Priya wants excitement, not just safety.",
          observation:
            "A supportive communicator would focus on making the client feel secure and well-cared-for. Priya wants them to feel excited and invested in something special.",
          coachingTip:
            "If someone creates energy and enthusiasm in a kick-off, that is expressive. If they create reassurance and structure, that is supportive. Priya is building momentum, not building safety.",
          styleContext:
            "Expressive communicators kick off client relationships with vision and energy. Supportive communicators kick them off with reliability and care. Both build trust, but through different means.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented the project plan, the governance framework, or the risk register. Her focus is entirely on the relationship dynamic and the emotional experience of working together.",
          observation:
            "There are no Gantt charts, no RACI matrices, and no contractual terms discussed. Priya is setting the human foundation before the operational one.",
          coachingTip:
            "Ask yourself: is this person trying to organise the project or to inspire the team? Priya is inspiring first. The organisation comes next.",
          styleContext:
            "Expressive communicators believe that inspired teams deliver better outcomes than organised-but-uninspired teams. They invest in the emotional engine of the project before the operational machinery.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has suggested making the first milestone a celebratory moment rather than just a deliverable. How do you contribute to this idea?",
      options: [
        {
          id: "s292-opt-a",
          text: "What if we turned the first milestone review into a 'show and tell' where both teams present their favourite part of what we have built so far? We could record it and share it with both companies' leadership teams. It gives the work visibility and makes the milestone feel like an achievement, not a checkbox.",
          score: 10,
          result: "strong",
          explanation:
            "You built on Priya's idea with a specific, creative suggestion that creates visibility and celebration. This matches her vision of milestones as shared moments of pride.",
        },
        {
          id: "s292-opt-b",
          text: "We could mark it with a brief team lunch or virtual coffee. Something informal to acknowledge the progress without taking too much time away from the project.",
          score: 5,
          result: "partial",
          explanation:
            "A nice gesture, but it is modest for what Priya is envisioning. She wants the milestone to feel significant and memorable, not just acknowledged with a casual lunch.",
        },
        {
          id: "s292-opt-c",
          text: "I think we should keep the milestones focused on deliverables and quality checks. Turning them into celebrations risks distracting from the work and blurring the line between professional and social.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Priya's approach. She specifically wants to blur the line between delivery and celebration because she believes energised teams deliver better work.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write the kick-off follow-up email that captures the energy of the first meeting and confirms the first milestone warmly. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Day one done - this is going to be brilliant\n\nHi everyone,\n\nWhat a way to start. Today felt less like a kick-off meeting and more like the beginning of something genuinely exciting, and I think that is because of the energy both teams brought to the table.\n\nA few highlights: the way your product team immediately started building on our design ideas showed us that this is going to be a true collaboration, not a handover. And the conversation about the launch event already has our creative team buzzing with possibilities.\n\nFirst milestone: Design concept review, two weeks from today. We will bring three initial directions and we want your honest, unfiltered reactions. This is our first 'show and tell' moment and it should feel like one.\n\nIn the meantime, our project lead will share the working timeline and communication plan by end of day tomorrow. But the most important thing from today is not the plan - it is the partnership. We are one team now, and that starts with this email.\n\nHere is to the next six months.\n\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email captures the energy of the meeting, references specific moments, and frames the first milestone as an exciting event. The client team will forward this and feel proud to be part of the project.",
          observation:
            "You balanced warmth with practical next steps, which shows the client that the energy is backed by structure. Expressive communicators are not disorganised - they wrap organisation in enthusiasm.",
          coachingTip:
            "When writing kick-off follow-ups for expressive communicators, reference specific moments from the meeting that demonstrate genuine attention. Generic enthusiasm feels hollow; specific enthusiasm feels real.",
          styleContext:
            "Expressive communicators use the first follow-up email to cement the culture of the partnership. Whatever tone this email sets, the project will follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether you referenced specific moments from the meeting. If the email could be sent after any kick-off with any client, it needs more personal detail.",
          observation:
            "If your email says 'it was a great meeting' without explaining what made it great, the client will appreciate the politeness but not feel the connection.",
          coachingTip:
            "Add at least one sentence that could only apply to this client and this meeting. That specificity is what makes the difference between a form email and a relationship-building moment.",
          styleContext:
            "Expressive communicators know that first impressions in writing are as important as first impressions in person. A generic follow-up wastes the energy built in the meeting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too focused on logistics, or lacks the warmth and excitement Priya specifically asked for. It reads like a project update rather than the start of a partnership.",
          observation:
            "If your email opens with 'Please find below a summary of today's meeting', it has become exactly the transactional communication Priya wanted to avoid.",
          coachingTip:
            "Rewrite the opening line as if you are texting a friend about something exciting that just happened. That energy is what Priya wants in a professional format.",
          styleContext:
            "Expressive communicators believe that the best client relationships start with emails that make people smile. A transactional opening leads to a transactional partnership.",
        },
      },
    },
  },

  // Scenario 293 - Marcus Webb, client, intermediate
  {
    id: "scenario-293",
    title: "The Difficult Client Conversation",
    context:
      "Marcus is managing a client relationship where a delivery delay has caused frustration. The client's project lead has sent a strongly worded email criticising the team's communication. Marcus wants to address it openly and rebuild trust.",
    chooseContext:
      "Marcus has called the client's project lead to discuss the email. The client is still frustrated but has calmed down enough to talk. Marcus wants to acknowledge the failure, take ownership, and rebuild confidence.",
    rewriteContext:
      "Marcus has asked you to write a follow-up email that acknowledges what went wrong, outlines what changes will be made, and reaffirms the team's commitment to the partnership.",
    characterId: "marcus-webb",
    dialogue:
      "I read your email and I want to start by saying: you are right. We dropped the ball on communication. The delay itself was manageable, but the fact that you heard about it late and from the wrong person - that is on us, and I take personal responsibility for it. I called you because I think this relationship is too important for email tennis.",
    chooseDialogue:
      "I know trust is earned in drops and lost in buckets. What happened last week cost us trust we had been building for months. I am not going to make excuses. What I am going to do is tell you exactly what we are changing so this does not happen again, and then I am going to prove it over the next four weeks. Actions, not words.",
    rewriteDialogue:
      "Write the follow-up email. Lead with acknowledgement - do not bury it. Then outline the three changes we discussed. End with something personal - I want them to feel that I genuinely care about this relationship, not that I am managing a client complaint. This is Marcus apologising, not the company apologising.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Marcus has called a frustrated client to personally acknowledge a communication failure, take individual ownership, and chosen a call over email because the relationship is 'too important for email tennis'. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with personal ownership, emotional honesty, and relationship-first language. He chooses the more personal medium (a call) because he values the human connection over the convenience of email. This is an expressive communicator repairing trust through authentic vulnerability.",
          observation:
            "The metaphor 'trust is earned in drops and lost in buckets' reveals Marcus's expressive style - he communicates through memorable, emotionally resonant language that makes his sincerity tangible.",
          coachingTip:
            "When someone personally calls to acknowledge a failure rather than sending a corporate apology email, they are prioritising the relationship over the process. That is expressive communication in a crisis.",
          styleContext:
            "Expressive communicators repair trust through personal vulnerability and authentic commitment. They believe that the sincerity of the apology matters more than the formality of the response plan.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus's concern for the client's feelings sounds supportive. But his approach is bold, personal, and emotionally charged - not quiet and protective. He takes centre stage in the apology rather than working behind the scenes.",
          observation:
            "A supportive communicator would quietly fix the problem and check in gently to make sure the client felt cared for. Marcus puts himself forward, takes personal blame, and commits to visible change.",
          coachingTip:
            "If someone takes personal ownership publicly and uses emotionally resonant language, that is expressive. If they work quietly to rebuild trust through reliable actions, that is supportive.",
          styleContext:
            "Expressive communicators repair relationships by being visibly, authentically accountable. Supportive communicators repair them through steady, quiet reliability. Both work, but the energy is different.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not presented a root cause analysis, a process improvement plan, or a data-driven timeline for resolving the issue. His response is entirely relational and emotional.",
          observation:
            "There is no mention of KPIs, SLA compliance, or process documentation. Marcus is managing the human relationship, not the contractual one.",
          coachingTip:
            "Ask yourself: is this person fixing the process or fixing the relationship? Marcus believes the relationship must be repaired before the process conversation can be productive.",
          styleContext:
            "Expressive communicators in client management believe that a client who trusts you will forgive a process failure, but a client who does not trust you will weaponise it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has acknowledged the communication failure and promised to outline specific changes. The client says they appreciate the honesty but need to see action, not just words. How does Marcus respond?",
      options: [
        {
          id: "s293-opt-a",
          text: "Absolutely. Here is what changes starting today. First, you get a weekly status call with me directly - not a delegate, me. Second, any risk to timeline is communicated to you within 24 hours of us identifying it. Third, I am giving you my direct mobile number. If you ever feel out of the loop, you call me and I will fix it in real time. Judge me on the next four weeks.",
          score: 10,
          result: "strong",
          explanation:
            "You made three specific, personal commitments and invited the client to hold you accountable over a defined period. This matches Marcus's approach of rebuilding trust through visible, personal action.",
        },
        {
          id: "s293-opt-b",
          text: "We are updating our communication process to include weekly status reports and a risk escalation protocol. You should start seeing those improvements from next week.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and constructive, but it sounds like a process change, not a personal commitment. Marcus wants the client to feel that he personally is stepping up, not that the company is updating a policy.",
        },
        {
          id: "s293-opt-c",
          text: "We will put together a detailed improvement plan and send it over for your review. Once you have approved the changes, we can start implementing them.",
          score: 0,
          result: "weak",
          explanation:
            "This creates more process and more delay in a situation that requires immediate, visible action. The client has said they want action, not more documents to review.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a follow-up email that leads with acknowledgement, outlines three changes, and ends with a personal commitment. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: What changes from today\n\nHi Rebecca,\n\nThank you for taking my call and for being so honest. You deserved better communication from us last week, and I take personal responsibility for the fact that you did not get it.\n\nHere is what changes from today:\n\n1. Weekly call with me. Every Monday at 10am, you and I review the week ahead. Not a delegate - me. If there is a risk, you hear it from me before it becomes a problem.\n2. 24-hour risk notification. Any risk to timeline or quality is communicated to you within 24 hours of us identifying it. No surprises, no late discoveries.\n3. Direct access. You now have my mobile number. If you ever feel out of the loop or concerned about anything, call me directly. I mean that.\n\nI know that words are easy and trust is hard. So I am asking for four weeks. Judge us on what happens between now and then. If we have not earned back your confidence by that point, that is a conversation worth having too.\n\nThis partnership matters to me personally, not just professionally. I intend to prove that.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with genuine accountability, makes specific personal commitments, and closes with an emotionally honest statement about the partnership. Marcus would send this knowing it demonstrates exactly the kind of authenticity that rebuilds trust.",
          observation:
            "You framed the email as Marcus speaking personally, not the company communicating. The distinction between 'I take responsibility' and 'we apologise' is what makes expressive apologies land.",
          coachingTip:
            "When writing client recovery emails for expressive communicators, use 'I' more than 'we'. Personal ownership is more credible and more emotionally resonant than corporate accountability.",
          styleContext:
            "Expressive communicators rebuild client trust by making themselves personally vulnerable. The willingness to be judged individually is what distinguishes a genuine apology from a corporate one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the emotional tone feels genuine or formulaic. If the acknowledgement reads like a template apology, it will not carry the weight Marcus intends.",
          observation:
            "If your email says 'we apologise for any inconvenience' instead of 'you deserved better and I am responsible', it has become corporate rather than personal.",
          coachingTip:
            "Replace any corporate apology language with personal, specific acknowledgements. 'We regret the delay' becomes 'I should have called you the moment I knew the timeline was at risk'.",
          styleContext:
            "Expressive communicators know that generic apologies feel hollow. Specificity in what went wrong and personal ownership of why it happened are what make an apology meaningful.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too corporate, too process-focused, or lacks the personal, emotional tone Marcus specifically asked for. It reads like a client complaint response template.",
          observation:
            "If your email could have been written by someone who was not on the call and does not know the client personally, it has missed the brief entirely.",
          coachingTip:
            "Imagine you are writing to someone you have personally let down and genuinely want to make it right. That emotional honesty is what separates a recovery email from a complaint acknowledgement.",
          styleContext:
            "Expressive communicators treat client recovery as a relationship moment, not a process step. The email should feel like a personal letter, not a corporate communication.",
        },
      },
    },
  },

  // Scenario 294 - Nina Okafor, client, advanced
  {
    id: "scenario-294",
    title: "The Contract Renewal Pitch",
    context:
      "Nina is meeting with a long-standing client to discuss contract renewal. The client has hinted that they are considering other providers. Nina wants to remind them of the value of the relationship while being honest about areas where service could improve.",
    chooseContext:
      "The client has been open about receiving competitive pitches and says they owe it to their board to evaluate alternatives. Nina respects this but wants to make the case for continuity based on relationship depth, not just price.",
    rewriteContext:
      "Nina has asked you to write a retention proposal that goes beyond pricing and demonstrates the unique value of the existing partnership through specific shared achievements.",
    characterId: "nina-okafor",
    dialogue:
      "I am not going to pretend I am not nervous about this conversation. I am. This relationship means a lot to us and I think it means a lot to you too. But I also understand your responsibility to the board. So instead of a sales pitch, I want to have an honest conversation about what has worked, what could be better, and what the next two years could look like if we continue to build on what we have together.",
    chooseDialogue:
      "I know a competitor can come in with a lower price. They always can on year one. But what they cannot replicate is three years of context, the relationships our team has built with yours, and the institutional knowledge that means we solve problems in hours that would take a new provider weeks. That is not a line - that is maths.",
    rewriteDialogue:
      "Write the retention proposal. Do not make it a price sheet. Make it a partnership story. Reference specific projects, specific people, specific results. Then show what the next two years look like if we stay together. I want them to read it and feel the weight of what they would be giving up.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "client",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina has opened a contract renewal discussion by admitting her nervousness, acknowledging the client's obligation to evaluate alternatives, and proposing an honest conversation about the relationship's past and future rather than a sales pitch. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina leads with emotional vulnerability, honours the relationship's history, and reframes the renewal as a partnership decision rather than a procurement exercise. This is an expressive communicator at their most authentic and persuasive.",
          observation:
            "Admitting nervousness in a commercial conversation is a calculated expressive technique. It signals that the relationship has personal meaning, which makes the case for continuity emotionally compelling.",
          coachingTip:
            "When someone opens a renewal conversation with personal vulnerability and a request for honest dialogue, they are using an expressive retention strategy. The authenticity is the differentiation.",
          styleContext:
            "Expressive communicators retain clients by making the relationship feel too valuable to replace. They compete on depth of connection, not on price or features.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's care for the client's position and her honest, gentle approach sound supportive. But the underlying strategy is emotionally bold and forward-looking, not quiet and protective.",
          observation:
            "A supportive communicator would reassure the client that the relationship is secure and focus on removing any anxiety about continuity. Nina leans into the uncertainty and uses it to deepen the conversation.",
          coachingTip:
            "If someone uses vulnerability and emotional honesty to strengthen a commercial relationship, that is expressive. If they use steady reassurance and quiet reliability, that is supportive.",
          styleContext:
            "Expressive communicators navigate retention conversations by making the emotional case for continuity. The commercial case supports it but does not lead it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a pricing comparison, a service-level benchmark, or a competitive analysis. Her approach is entirely relational and emotionally grounded.",
          observation:
            "There are no spreadsheets, no ROI calculations, and no feature comparisons. Nina is making the case for the relationship, not for the product.",
          coachingTip:
            "Ask yourself: is this person selling a service or a relationship? Nina is selling the irreplaceability of three years of shared context and trust.",
          styleContext:
            "Expressive communicators in retention situations know that price-based competitors can always undercut on year one. The defence against that is making the relationship feel too valuable to restart.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client says they owe it to their board to evaluate alternatives. Nina respects this but wants to make the case for continuity. How does Nina make that case?",
      options: [
        {
          id: "s294-opt-a",
          text: "I completely respect that. And here is what I would say to your board: in three years, we have delivered nine projects, resolved 140 support tickets with an average four-hour response time, and our team knows your systems well enough to solve problems before they escalate. A new provider would spend their first year learning what we already know. The cost of that learning curve is real.",
          score: 10,
          result: "strong",
          explanation:
            "You combined respect for the board's process with a compelling case based on specific, quantifiable achievements and the tangible cost of switching. This gives the client ammunition to advocate for continuity.",
        },
        {
          id: "s294-opt-b",
          text: "I understand. Would it help if I put together a comparison document showing our service levels against industry benchmarks? That way you have something objective to present alongside the competitor proposals.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful and practical, but it shifts to a data-driven approach rather than the relationship-depth argument Nina is making. The benchmarks are useful but secondary to the partnership story.",
        },
        {
          id: "s294-opt-c",
          text: "Of course. Take whatever time you need to evaluate. We are confident in our service and we will be here whenever you are ready to make a decision.",
          score: 0,
          result: "weak",
          explanation:
            "This is passive and cedes the conversation to competitors. Nina has identified this as a critical moment for the relationship and you are suggesting they wait and see. That is not how you retain a client at risk.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a retention proposal that tells the partnership story through specific projects, people, and results, and paints a picture of the next two years. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Three years in, and here is what we have built together\n\nHi Claire,\n\nThank you for being so open with us. I want to respond with equal honesty and give you something you can take to your board that goes beyond pricing.\n\nWhat we have built together in three years:\n- Nine projects delivered, including the CRM migration that your head of sales called 'the smoothest technology change in ten years'. That was not luck. It was 14 months of our team learning your systems inside out.\n- 140 support tickets resolved with an average response time of four hours. Our lead engineer, James, knows your infrastructure well enough to diagnose issues before your team has finished describing them.\n- The onboarding framework we designed together is now used by three of your regional teams. That was a co-creation - your insight combined with our technical expertise.\n\nWhat a new provider would need to rebuild:\n- Six to twelve months of learning your systems, your team's preferences, and your business context.\n- A new relationship between their support team and your operations team - the kind of trust that took James and your head of IT two years to build.\n- The institutional memory that means we can say 'we tried that in 2024 and here is why it did not work' instead of repeating expensive mistakes.\n\nWhat the next two years could look like:\n- Phase two of the automation project, which we have already scoped and can begin within six weeks of renewal.\n- A dedicated innovation session every quarter where our technical leads and your product team explore emerging capabilities together.\n- A pricing structure that rewards loyalty: a 5% reduction in year four, with an additional 3% in year five if we hit agreed performance targets.\n\nI am not asking you not to evaluate alternatives. I am asking you to weigh what you would be giving up against what a new provider would need to build from scratch. Some things take years to create and cannot be replicated by a competitive pitch.\n\nWe want to be here for year four and beyond. Let us talk about how to make that happen.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal tells the partnership story through specific, memorable examples and makes the cost of switching tangible without being aggressive. Nina would present this with pride.",
          observation:
            "You named specific people, specific projects, and specific outcomes. This transforms the proposal from a vendor pitch into a relationship document that the client would feel personally connected to.",
          coachingTip:
            "When writing retention proposals for expressive communicators, name people and tell stories. The human specificity is what makes the case for continuity emotionally compelling.",
          styleContext:
            "Expressive communicators retain clients by making the partnership feel irreplaceable. Specific stories and named individuals create emotional weight that pricing alone cannot overcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your specific examples are detailed enough to feel genuine. If the achievements are described generically, the client cannot point to them in a board meeting and say 'this is why we stay'.",
          observation:
            "If your proposal says 'we have delivered excellent service' without naming the projects, the people, or the measurable outcomes, it reads like a vendor testimonial rather than a partnership story.",
          coachingTip:
            "For each achievement, add a name, a project, and a result. 'We delivered the CRM migration' becomes 'we delivered the CRM migration that your head of sales called the smoothest in ten years'. Specificity persuades.",
          styleContext:
            "Expressive communicators know that in retention situations, generic claims compete poorly against specific competitor promises. The more detailed your partnership story, the harder it is to walk away from.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal is either too focused on pricing, too generic in its achievement claims, or reads like a standard contract renewal document rather than a partnership story.",
          observation:
            "If your proposal could be sent to any client by any vendor, it lacks the personal, specific, emotional depth Nina asked for.",
          coachingTip:
            "Imagine you are writing to convince a friend not to leave a relationship that has been genuinely good for both sides. That personal conviction is the tone Nina wants in a professional format.",
          styleContext:
            "Expressive communicators see retention proposals as love letters to partnerships, not as commercial documents. The emotional case for staying should be at least as strong as the commercial one.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (295-297) - team
  // ============================================

  // Scenario 295 - Tom Brennan, team, foundation
  {
    id: "scenario-295",
    title: "The New Team Member Integration",
    context:
      "Tom is managing the integration of a new team member who joined from a different department. The existing team is welcoming but the new person is struggling to find their place in an established group dynamic.",
    chooseContext:
      "Tom has noticed the new person sitting quietly in meetings and eating lunch alone. He wants to create natural connection opportunities without making it obvious that he is intervening.",
    rewriteContext:
      "Tom has asked you to write a brief message to the team suggesting a few informal activities that would help the new person integrate, without singling them out.",
    characterId: "tom-brennan",
    dialogue:
      "Moving into an established team is harder than people think. Everyone else has their routines, their in-jokes, their lunch groups. The new person has none of that, and it takes courage to insert yourself into something that is already formed. I want to create some gentle openings without making it feel forced or singling anyone out.",
    chooseDialogue:
      "I was thinking about pairing people up for a few tasks this week. If I pair the new person with someone who is naturally welcoming, it creates a connection without it feeling like an intervention. The buddy does not need to know it is deliberate. It just needs to feel natural.",
    rewriteDialogue:
      "Write a message to the team suggesting a couple of informal things we can do together this week. A team coffee, a walk, something like that. Make it about the whole team, not about the new person. I do not want them to feel like a project. I want them to feel like they belong.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has observed a new team member struggling to integrate into an established group. He wants to create natural connection opportunities that help without singling the person out or making the intervention obvious. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom reads the emotional situation with sensitivity, designs an indirect intervention that preserves the new person's dignity, and prioritises natural belonging over visible management. This is supportive communication at its most thoughtful.",
          observation:
            "Notice how Tom explicitly wants the intervention to be invisible. Supportive communicators often work behind the scenes to create the conditions for belonging without drawing attention to the problem.",
          coachingTip:
            "When a manager designs invisible interventions to help someone integrate, they are demonstrating advanced supportive communication. The skill is in making help feel like coincidence.",
          styleContext:
            "Supportive communicators believe that the best interventions are the ones nobody notices. If the new person never realises the pairing was deliberate, Tom has succeeded.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom's desire to create social opportunities sounds expressive. But his approach is quiet and strategic, not energetic and public. He is engineering situations rather than creating events.",
          observation:
            "An expressive communicator would organise a visible team welcome - a lunch, a celebration, a public introduction exercise. Tom creates quiet, one-to-one connections through natural task pairing.",
          coachingTip:
            "If someone creates invisible connection opportunities, that is supportive. If they create visible, energetic welcome experiences, that is expressive. Tom works behind the scenes.",
          styleContext:
            "Supportive communicators help through design, not performance. They arrange the circumstances for connection rather than directing the connection itself.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not set performance objectives for the new person, created a formal onboarding schedule, or asked them to present their background to the team. His focus is entirely on the emotional experience of joining.",
          observation:
            "There are no competency assessments, no 30-60-90 day plans, and no formal integration milestones. Tom is managing belonging, not onboarding.",
          coachingTip:
            "Ask yourself: is this person focused on the new person's performance or their sense of belonging? Tom believes that belonging comes first and performance follows.",
          styleContext:
            "Supportive communicators know that a person who feels they belong will perform. A person who performs but does not belong will eventually leave.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has suggested pairing the new person with a naturally welcoming team member for a few tasks. How do you help implement this idea?",
      options: [
        {
          id: "s295-opt-a",
          text: "Good idea. I think pairing them with Emma on the Henderson report would work well. Emma is naturally inclusive and the task is collaborative enough that they will have to work closely for a few days. It will feel like a work pairing, not a buddy system, which keeps it natural.",
          score: 10,
          result: "strong",
          explanation:
            "You identified a specific person and a specific task that makes the pairing feel organic. This matches Tom's desire for the intervention to be invisible and natural.",
        },
        {
          id: "s295-opt-b",
          text: "Should we set up a formal buddy system? We could assign everyone a buddy and that way the new person does not feel singled out.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned, but a formal buddy system makes the intervention visible and structural. Tom specifically wanted something that feels natural and does not draw attention to the new person's integration challenge.",
        },
        {
          id: "s295-opt-c",
          text: "I think the new person just needs time. Everyone settles in at their own pace and if we try too hard to help, it might actually make them more self-conscious.",
          score: 0,
          result: "weak",
          explanation:
            "Waiting and hoping is not a strategy. Tom has observed a problem and wants to act. Suggesting inaction risks the new person spending weeks feeling isolated when a small intervention could help.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a team message suggesting a couple of informal activities this week. Make it about the whole team, not about the new person. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nIt has been a busy few weeks and I think we could all do with a bit of time together that is not about deadlines.\n\nTwo ideas for this week:\n\n1. Team coffee walk on Wednesday at 2pm. 15 minutes, fresh air, no agenda. Just a chance to catch up outside the office.\n\n2. Friday lunch together. Nothing fancy - the canteen, the sandwich shop, wherever. The only rule is no work talk until someone breaks it (and someone always does).\n\nBoth are completely optional. If you are in, just say so. If not, no pressure at all.\n\nWould be good to spend some time together.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message creates informal connection opportunities for the whole team without mentioning the new person or making anyone feel targeted. Tom would send this knowing it achieves the goal invisibly.",
          observation:
            "You framed both activities as optional and low-pressure, which ensures the new person can join without feeling obligated and the rest of the team does not feel managed.",
          coachingTip:
            "When writing team messages for supportive communicators, the goal is often invisible. If the true purpose of the message is not detectable from the text, you have written it well.",
          styleContext:
            "Supportive communicators create environments where belonging happens naturally. The best team activities feel spontaneous even when they are carefully designed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message could inadvertently spotlight the new person. If it mentions welcoming new team members or helping people settle in, it may single out the person Tom is trying to protect.",
          observation:
            "If your message says 'let us all make an effort to include everyone', the new person will feel like the subject of a management initiative rather than a natural member of the team.",
          coachingTip:
            "Remove any reference to new starters or integration. Frame the activities as something the team is doing for its own benefit, not for anyone in particular.",
          styleContext:
            "Supportive communicators know that the moment a wellbeing initiative is visible as an initiative, it loses its naturalness. Keep it casual and undirected.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either mentions the new person specifically, frames the activities as mandatory, or reads like a management directive rather than a casual team suggestion.",
          observation:
            "If your message says 'it is important that we all attend' or 'please make time for this', it has become compulsory rather than inviting. Tom wanted optional and organic.",
          coachingTip:
            "Write it as if you are suggesting plans to friends, not scheduling team events. The tone should be 'who is in?' not 'please attend'.",
          styleContext:
            "Supportive communicators create belonging through invitation, never through mandate. The activity must feel chosen, not assigned.",
        },
      },
    },
  },

  // Scenario 296 - Leah Morgan, team, intermediate
  {
    id: "scenario-296",
    title: "The Workload Imbalance",
    context:
      "Leah has noticed that one person on her team consistently takes on more than their share of work because they struggle to say no. Other team members have started relying on this pattern, and it is becoming unsustainable.",
    chooseContext:
      "Leah has spoken to the overloaded team member privately. They have admitted they feel unable to push back because they worry about letting the team down. Leah wants to address the workload imbalance without shaming anyone.",
    rewriteContext:
      "Leah has asked you to write an email to the team introducing a new workload visibility system that naturally prevents the imbalance without calling anyone out.",
    characterId: "leah-morgan",
    dialogue:
      "This is not a performance issue - it is a kindness issue. Someone on this team is drowning because they are too generous to say no, and the rest of the team has gotten used to it without realising. I need to fix the system, not blame the people. If the workload was visible and fairly distributed by design, no one would need to say no because no one would be asked to take on more than their share.",
    chooseDialogue:
      "I know you feel responsible for the team's output, and I appreciate that more than you know. But you are not responsible for everything. Your job is to do your work well, not to do everyone's work adequately. I want to take some of that pressure off you by making the distribution more visible. You do not need to be the one who always steps up. That is my job.",
    rewriteDialogue:
      "Write the email introducing the new workload board. Frame it as a positive change for the whole team - better visibility, fairer distribution, fewer bottlenecks. Do not reference the imbalance. If anyone reads this email and thinks 'oh, this is because of me', I have failed. It should feel like a team improvement, not a correction.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Leah has identified a workload imbalance caused by one person's inability to say no. She has framed it as a system problem rather than a people problem and wants to fix the structure without shaming anyone. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah protects the dignity of every person involved by reframing a behavioural issue as a structural one. She designs a solution that prevents the problem without requiring anyone to change their personality. This is advanced supportive management.",
          observation:
            "The phrase 'fix the system, not blame the people' captures Leah's supportive philosophy. She sees individual behaviour as a response to environmental conditions, and changes the environment rather than the person.",
          coachingTip:
            "When a manager addresses a team dynamic by changing the system rather than coaching the individuals, they are demonstrating a supportive approach that protects relationships while solving problems.",
          styleContext:
            "Supportive communicators believe that good systems make good behaviour easy. If someone is overworked because they cannot say no, the system should remove the need for them to say no.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah's concern for the team and desire for a positive reframing sounds expressive. But her approach is protective and structural, not energetic and celebratory. She is quietly redesigning the system, not rallying the team around a new initiative.",
          observation:
            "An expressive communicator would use the workload issue as an opportunity to have an open team conversation about values and mutual support. Leah solves it invisibly to protect the overloaded person.",
          coachingTip:
            "If someone designs an invisible structural fix to protect a vulnerable team member, that is supportive. If they create a visible team conversation about shared values, that is expressive.",
          styleContext:
            "Supportive communicators often solve team problems in ways the team never fully recognises. The best interventions are the ones that simply make things work better without anyone noticing the design.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not set individual workload targets, implemented capacity tracking metrics, or conducted a time-and-motion study. Her approach is empathy-driven, not data-driven.",
          observation:
            "There are no utilisation rates, no capacity models, and no resource allocation formulas. Leah has diagnosed the problem through emotional observation, not through data analysis.",
          coachingTip:
            "Ask yourself: is this person fixing a measurement problem or a people problem? Leah sees this as a human dynamic that needs a structural solution, not a data gap that needs analytics.",
          styleContext:
            "Supportive communicators approach workload management as an emotional wellbeing issue first and a resource allocation issue second. The person's experience matters more than the spreadsheet.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has told the overloaded team member that it is not their job to take on everyone's work and that she will create a system to distribute work more fairly. The team member says they worry the rest of the team will think they complained. How does Leah respond?",
      options: [
        {
          id: "s296-opt-a",
          text: "Nobody will know we had this conversation. The workload board is something I have been planning for the whole team, not because of any one person. When it launches, it will look like a general improvement, not a response to a problem. Your name will not be attached to this in any way.",
          score: 10,
          result: "strong",
          explanation:
            "You reassured the team member that their privacy is protected and positioned the change as something already planned. This removes the fear of being seen as a complainer, which is exactly what Leah would do.",
        },
        {
          id: "s296-opt-b",
          text: "I understand that concern, but I think the team would actually respect you for raising it. Most of them probably do not realise how much you are carrying.",
          score: 5,
          result: "partial",
          explanation:
            "Reassuring in intent, but it suggests the team might find out, which is the team member's primary fear. Leah would prioritise absolute privacy over positive reframing.",
        },
        {
          id: "s296-opt-c",
          text: "If the team finds out, that is fine. It is a legitimate issue and there is nothing wrong with raising it. You should not feel ashamed of asking for fair treatment.",
          score: 0,
          result: "weak",
          explanation:
            "While technically true, this ignores the team member's emotional reality. They have said they are worried about being seen as complaining, and you have told them not to worry about something they clearly do worry about. Leah would never dismiss a genuine concern.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write an email introducing a workload visibility board. Frame it as a team improvement, not a correction. Nobody should feel targeted. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nI have been thinking about how we manage our workload as a team, and I want to try something that should make things smoother for everyone.\n\nStarting next week, we are going to use a shared workload board. It is simple: each person's current tasks and capacity are visible in one place. The idea is that when new work comes in, we can see at a glance who has space and distribute it fairly rather than it landing on whoever happens to respond first.\n\nWhy this matters:\n- It stops anyone from accidentally taking on more than their share.\n- It makes it easier for me to distribute work evenly.\n- It gives everyone visibility of what the team is working on, which helps with planning and collaboration.\n\nThis is not a monitoring tool. I am not tracking hours or measuring productivity. It is a team tool designed to make our work life a bit more balanced and a bit less chaotic.\n\nI will walk through the board in our Monday meeting. If you have thoughts or suggestions on how to make it work best for us, bring them along.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email introduces the workload board as a positive team tool without referencing any specific problem or person. Nobody reading this would feel targeted. Leah would send this confidently.",
          observation:
            "You proactively addressed the potential concern about monitoring by explicitly stating it is not a surveillance tool. Supportive communicators anticipate anxiety and address it before it forms.",
          coachingTip:
            "When introducing new systems for supportive communicators, always state what the system is not as well as what it is. Removing fear is as important as generating buy-in.",
          styleContext:
            "Supportive communicators introduce new tools by highlighting the benefit to every individual, not the problem they solve. If the email makes everyone feel this is for them, not about them, it has succeeded.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framing, but check whether any sentence could be read as identifying a specific person or problem. If the email says 'some people are carrying more than others', the overloaded team member may feel exposed.",
          observation:
            "If your email references an imbalance even in general terms, the person who is overloaded will read it and know it is about them. Keep it purely positive and forward-looking.",
          coachingTip:
            "Remove any reference to problems, imbalances, or concerns. Frame everything as improvement and opportunity. The email should read as proactive, not reactive.",
          styleContext:
            "Supportive communicators know that even general references to a problem can feel personal to the person most affected. Complete neutrality is the safest approach.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either references the workload imbalance, singles out a behaviour, or frames the change as a solution to a problem. Leah wanted something that feels like a positive experiment, not a corrective measure.",
          observation:
            "If your email could be read by the overloaded team member and make them think 'this is because of me', it has failed Leah's test.",
          coachingTip:
            "Write the email as if the team is already working perfectly and this is simply a tool to make something good even better. That framing protects everyone.",
          styleContext:
            "Supportive communicators introduce structural changes by making them feel additive, not corrective. The team should see a better future, not a problem being fixed.",
        },
      },
    },
  },

  // Scenario 297 - David Chen, team, advanced
  {
    id: "scenario-297",
    title: "The Team Trust Rebuild",
    context:
      "David is managing a team where trust has broken down following a project failure that was publicly attributed to the team by senior management. The team feels scapegoated and morale is at an all-time low. David was not involved in the attribution and disagrees with it privately.",
    chooseContext:
      "David has gathered the team and acknowledged that the situation is unfair. The team is emotional - some are angry, some are withdrawn. David needs to validate their feelings while redirecting energy toward rebuilding.",
    rewriteContext:
      "David has asked you to write a message to the team after the meeting, reinforcing the commitments made and providing a sense of direction for the weeks ahead.",
    characterId: "david-chen",
    dialogue:
      "I know how you are feeling because I feel it too. What happened in that leadership meeting was not fair to this team. I was not in the room, but I should have been, and that is something I am going to address directly with my own manager. I am not going to pretend this is fine. It is not. But I also know that the best response to being treated unfairly is to prove, beyond any doubt, that this team is exceptional. And you are.",
    chooseDialogue:
      "Right now, being angry is completely understandable. But I am asking you to channel that energy into something productive. Not for them - for us. For the pride we take in our own work. I am going to fight for this team at every level. But I need you to give me something to fight with. Let us use the next project to show everyone what we are capable of when we are at our best.",
    rewriteDialogue:
      "Write the follow-up message. Start by acknowledging what was said in the meeting - do not dilute it. Then lay out three things I am going to do for the team and three things I need from them. End with something that reminds them why they are good at this. I want them to close the message feeling like a team that has been through something together, not a group of individuals who got blamed.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has acknowledged that his team was treated unfairly by senior management, validated their anger, committed to advocating for them, and asked them to channel their frustration into proving their capability. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David validates the team's emotions, takes personal responsibility for future advocacy, and redirects frustration into a constructive purpose while never dismissing the injustice. This is advanced supportive leadership in a crisis of trust.",
          observation:
            "Notice how David says 'I feel it too', which creates solidarity without competing with the team's experience. Supportive communicators share vulnerability to strengthen connection, not to centre themselves.",
          coachingTip:
            "When a leader validates unfair treatment, commits to fighting for their team, and redirects emotion without dismissing it, they are demonstrating the deepest level of supportive communication.",
          styleContext:
            "Supportive communicators in trust crises serve as both shield and anchor. They protect the team from further harm while providing the emotional stability needed to move forward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's rallying language and emotional energy sound expressive. But his approach is protective and anchoring rather than enthusiastic and forward-charging. He validates before he redirects.",
          observation:
            "An expressive communicator would immediately reframe the situation as an opportunity to prove doubters wrong with energetic enthusiasm. David sits with the pain first and then carefully redirects.",
          coachingTip:
            "If someone holds space for difficult emotions before redirecting energy, that is supportive. If they quickly reframe the situation with enthusiasm and forward momentum, that is expressive. David processes before progressing.",
          styleContext:
            "Supportive communicators believe that emotional acknowledgement must happen before emotional redirection. Skipping the validation makes the rally feel hollow.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented a data-driven case for why the blame was misattributed, a formal complaint process, or a structured defence document. His approach is entirely relational and emotional.",
          observation:
            "There are no evidence packages, no formal escalation procedures, and no analytical rebuttals. David is managing the team's emotional state, not building a case.",
          coachingTip:
            "Ask yourself: is this person fighting the injustice or healing the team? David is doing both, but the healing comes first because a fractured team cannot fight effectively.",
          styleContext:
            "Supportive communicators address injustice by first ensuring their people are emotionally whole. A team that feels supported will fight harder than a team that feels abandoned.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has asked the team to channel their anger into proving their capability through the next project. One team member says they do not feel motivated to prove anything to people who scapegoated them. How does David respond?",
      options: [
        {
          id: "s297-opt-a",
          text: "I hear you, and that is a completely fair reaction. You do not owe them anything. But think about it this way: this is not about proving something to them. It is about reminding yourselves of what you are capable of. The best teams I have ever been part of came back from moments like this stronger because they decided to be excellent for each other, not for anyone else.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the resistance, reframed the motivation from external to internal, and appealed to team identity and pride. This matches David's approach of honouring emotions while gently redirecting purpose.",
        },
        {
          id: "s297-opt-b",
          text: "I understand. But the reality is that the leadership team is watching, and the best way to protect ourselves is to deliver something undeniable. It is strategic, not emotional.",
          score: 5,
          result: "partial",
          explanation:
            "Strategically sound but emotionally flat. The team member expressed a feeling and you responded with a strategy. David would validate the emotion before introducing the pragmatic argument.",
        },
        {
          id: "s297-opt-c",
          text: "We do not really have a choice. The project needs to be delivered regardless of how we feel about the situation. Let us focus on the work and deal with the politics separately.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the team's emotional experience and frames the work as an obligation rather than a choice. David would never minimise the team's feelings by telling them to compartmentalise.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a follow-up message acknowledging the meeting, listing his three commitments and three asks, and ending with a reminder of why the team is good. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nThank you for today. That was not an easy conversation and I am grateful for how honest everyone was. What you said in that room matters, and I heard every word.\n\nHere is what I am going to do:\n\n1. I am meeting with my manager this week to address how the project failure was attributed. I will advocate for a fair review that includes the resource constraints and timeline changes we faced. You will know the outcome of that conversation.\n2. I am requesting a debrief with the leadership team where our team gets to present its perspective. You deserve to be heard by the people who made the judgement.\n3. I am protecting this team's capacity for the next quarter. No additional projects accepted until I am confident we have the space to deliver to our standard.\n\nWhat I need from you:\n\n1. Stay together. Talk to each other, not about each other. This team is strongest when it trusts itself.\n2. Give the next project everything you have. Not for them - for us. For the standard we hold ourselves to.\n3. Come to me if you are struggling. Privately, publicly, however you need to. My door does not close on this team.\n\nI want to finish by saying something I should have said in the meeting. This team is not defined by one project or one leadership conversation. You are defined by three years of consistent, excellent work that I have watched up close. One unfair moment does not erase that. Do not let it.\n\nWe go forward together.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message balances emotional validation, concrete commitments, and an inspiring close. The team would read this and feel both supported and motivated. David would send this as the foundation for the rebuild.",
          observation:
            "You structured the message as a contract of mutual commitment: what David will do and what he needs from the team. This creates partnership rather than dependency.",
          coachingTip:
            "When writing post-crisis messages for supportive communicators, balance commitments to the team with requests from the team. Mutual investment creates the strongest recovery foundation.",
          styleContext:
            "Supportive communicators rebuild team trust through visible personal commitment and genuine emotional connection. The message should feel like a leader standing with their team, not managing them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your emotional acknowledgement is substantial enough to carry the weight of the situation. A single sentence of validation before a list of actions may feel perfunctory after such an important conversation.",
          observation:
            "If your message jumps to action items within the first two sentences, the emotional processing feels rushed. David wanted the meeting's honesty to be honoured before moving to commitments.",
          coachingTip:
            "Spend the first full paragraph on emotional acknowledgement. Name what happened, validate how people feel, and thank them for their honesty. Then transition to the commitments.",
          styleContext:
            "Supportive communicators know that post-crisis messages are read emotionally first and practically second. If the emotional resonance is not right, the practical commitments will not land.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either minimises the team's experience, jumps straight to action without emotional acknowledgement, or reads like a management directive rather than a leader standing with their people.",
          observation:
            "If your message could be sent by any manager after any setback, it lacks the personal, specific, emotional depth this moment requires.",
          coachingTip:
            "Reference the specific meeting, the specific feelings expressed, and your personal emotional response. Generic leadership messaging will not rebuild trust after a specific injustice.",
          styleContext:
            "Supportive communicators invest their deepest emotional energy in their most difficult messages. This is the most important message David has sent to this team, and it should read that way.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (298-300) - conflict
  // ============================================

  // Scenario 298 - Rachel Finch, conflict, foundation
  {
    id: "scenario-298",
    title: "The Data Interpretation Dispute",
    context:
      "Rachel is mediating a disagreement between two analysts who have reached opposite conclusions from the same dataset. One argues that customer retention has improved; the other argues it has declined. Rachel suspects the difference is methodological.",
    chooseContext:
      "Rachel has asked both analysts to present their methodology. She has identified that they are using different time periods and different definitions of 'retained customer'.",
    rewriteContext:
      "Rachel has asked you to write a resolution document that standardises the definitions, presents the corrected analysis, and establishes guidelines to prevent future interpretation disputes.",
    characterId: "rachel-finch",
    dialogue:
      "Both of you are looking at the same numbers and reaching opposite conclusions. That tells me the problem is not the data - it is the methodology. Before we debate the answer, we need to agree on the question. What time period are you using? What is your definition of a retained customer? Once those are aligned, the data will give us one answer, not two.",
    chooseDialogue:
      "Here is the issue. Analyst one is measuring retention over twelve months and counting any customer who made at least one purchase. Analyst two is measuring over six months and counting only customers who made three or more purchases. Both are valid methods, but they answer different questions. We need to agree which question we are answering before the analysis means anything.",
    rewriteDialogue:
      "Write the resolution document. Start with the agreed definitions: what we mean by 'retained customer', what time period we are using, and what the threshold is. Then present the corrected analysis using those definitions. End with a set of guidelines that prevent this kind of methodological dispute from happening again.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has paused a data interpretation dispute to examine the underlying methodology, identified that both analysts are using different definitions and time periods, and insisted on aligning assumptions before debating conclusions. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel identifies the root cause as methodological disagreement rather than data disagreement. She insists on aligning definitions and assumptions before allowing any discussion of conclusions. This is analytical conflict resolution at its purest.",
          observation:
            "The phrase 'before we debate the answer, we need to agree on the question' captures the analytical approach to conflict. The disagreement is not personal - it is structural. Fix the structure and the conflict resolves itself.",
          coachingTip:
            "When someone resolves a dispute by examining the assumptions and definitions underlying each position, they are applying analytical conflict resolution. Respond with your methodology, not your opinion.",
          styleContext:
            "Analytical communicators see most professional conflicts as definitional disagreements in disguise. If two smart people reach opposite conclusions from the same data, the assumptions are the problem.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive in pausing the debate, which looks direct. But she is pausing it to go deeper into the methodology, not to impose a quick resolution. She wants understanding before decision.",
          observation:
            "A direct communicator would pick the more convincing analysis and move on. Rachel refuses to judge the outputs until the inputs are aligned. She wants the right answer, not the fastest one.",
          coachingTip:
            "If someone pauses a debate to examine underlying assumptions, that is analytical. If they pause it to make a decision, that is direct. Rachel is investigating, not deciding.",
          styleContext:
            "Analytical communicators believe that debates about conclusions are pointless when the assumptions differ. Aligning the foundation is the prerequisite for any meaningful comparison.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not asked how the dispute is affecting the analysts' working relationship, whether anyone feels disrespected, or how to rebuild trust between the two. Her focus is entirely on the methodology.",
          observation:
            "There is no exploration of feelings, no mediation of personal tensions, and no concern about team dynamics. Rachel treats this as an intellectual problem, not a relational one.",
          coachingTip:
            "Ask yourself: is this person resolving a relationship issue or an analytical issue? Rachel sees the conflict as a methodology problem that happens to involve two people, not a people problem that happens to involve methodology.",
          styleContext:
            "Analytical communicators resolve data disputes by removing the ambiguity that caused them. They believe that when the methodology is clear, the personal disagreement dissolves.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has identified that the two analysts are using different time periods and different retention definitions. She wants to align them before any further analysis. How do you contribute?",
      options: [
        {
          id: "s298-opt-a",
          text: "I suggest we use the twelve-month window because it captures full seasonal cycles, and define retention as customers who made at least two purchases with a minimum of 60 days between first and last purchase. That distinguishes genuinely retained customers from one-time returners.",
          score: 10,
          result: "strong",
          explanation:
            "You proposed a specific, reasoned definition that addresses the methodological gap Rachel identified. The rationale is logical and the definition is measurable. Rachel will evaluate this on its merits.",
        },
        {
          id: "s298-opt-b",
          text: "Could we run the analysis using both definitions and present both results? That way the stakeholders can see how the methodology affects the conclusion.",
          score: 5,
          result: "partial",
          explanation:
            "Intellectually interesting, but Rachel has asked for standardisation, not pluralism. Presenting two answers to a single question may confuse stakeholders rather than inform them.",
        },
        {
          id: "s298-opt-c",
          text: "I think we should just use whichever definition the senior stakeholders prefer. At the end of the day, they are the ones who need to make decisions based on this data.",
          score: 0,
          result: "weak",
          explanation:
            "This lets political preference determine analytical standards. Rachel specifically wants the methodology to be driven by what is analytically sound, not by what senior people prefer to hear.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a resolution document with standardised definitions, the corrected analysis, and guidelines to prevent future disputes. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Customer Retention Analysis - Standardised Framework\n\n1. Agreed Definitions\n\nRetained customer: A customer who made at least two purchases within the measurement window, with a minimum of 60 days between first and last transaction.\nRationale: This excludes one-time repeat purchases (e.g. immediate returns/exchanges) while capturing genuine ongoing engagement.\n\nMeasurement window: Twelve months (rolling).\nRationale: Twelve months captures full seasonal purchasing cycles. Shorter windows risk conflating seasonal variation with retention trends.\n\nBaseline period: April 2025 to March 2026.\nComparison period: April 2024 to March 2025.\n\n2. Corrected Analysis\n\nUsing the standardised definitions above:\n- Baseline retention rate: 62.4% (3,120 of 5,000 active customers met the retention criteria).\n- Comparison period retention rate: 59.1% (2,955 of 5,000).\n- Change: +3.3 percentage points year-on-year.\n- Statistical significance: p=0.03 (chi-square test). The improvement is statistically significant at the 95% confidence level.\n\nConclusion: Customer retention improved by 3.3 percentage points using the standardised definition. The previous dispute arose from inconsistent definitions, not from data quality issues.\n\n3. Guidelines for Future Analyses\n\n- All retention analyses must use the definitions documented in this framework.\n- Any analyst proposing a different definition must document the rationale and obtain approval before presenting results.\n- Presentations must state the definition and time period used on the first slide of any retention analysis.\n- Annual review: definitions are reviewed each April to ensure they remain appropriate as business models evolve.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document standardises definitions with rationale, presents the corrected analysis with statistical testing, and establishes clear guidelines for future work. Rachel would adopt this as the team's standard reference.",
          observation:
            "You included the rationale behind each definition choice, which means future analysts can understand why the standard was set, not just what it is. Analytical communicators value the reasoning as much as the rule.",
          coachingTip:
            "When writing standardisation documents for analytical communicators, always include the 'why' behind each definition. Rules without rationale are harder to maintain and easier to challenge.",
          styleContext:
            "Analytical communicators create standards that are self-documenting. Every rule should carry its own justification so that future questions can be answered by reading the document, not by finding the author.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your definitions include both the criteria and the rationale. If the document says 'use twelve months' without explaining why twelve months is the appropriate window, the standard is vulnerable to challenge.",
          observation:
            "If any guideline says 'analysts should use consistent definitions' without specifying what those definitions are, it does not prevent the dispute from recurring.",
          coachingTip:
            "For each standard, include the specific definition and the reason it was chosen. Specificity prevents ambiguity; rationale prevents arbitrary overrides.",
          styleContext:
            "Analytical communicators design standards that prevent future disputes by being so precise that there is no room for interpretation. Vague standards create new disputes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document either lacks specific definitions, does not include the corrected analysis, or provides guidelines that are too vague to be enforceable. Rachel asked for precision that would prevent this dispute from recurring.",
          observation:
            "If your document says 'analysts should agree on definitions before starting work', it describes good practice without actually establishing the standard definitions.",
          coachingTip:
            "A resolution document must resolve, not advise. Include the exact definitions, the exact analysis, and the exact rules. Advisory language does not prevent disputes; prescriptive language does.",
          styleContext:
            "Analytical communicators write standards documents as definitive references. If two analysts could read your document and still disagree, it has not done its job.",
        },
      },
    },
  },

  // Scenario 299 - Owen Grant, conflict, intermediate
  {
    id: "scenario-299",
    title: "The Resource Allocation Disagreement",
    context:
      "Owen is mediating a conflict between two project managers who both need the same specialist resource for overlapping critical path activities. The organisation does not have a formal resource prioritisation framework, which is the root cause of the recurring conflict.",
    chooseContext:
      "Owen has gathered both project managers and the resource in question. He wants to establish a transparent, criteria-based approach to resource allocation rather than letting politics or seniority determine the outcome.",
    rewriteContext:
      "Owen has asked you to write a resource allocation framework document that establishes clear, objective criteria for resolving future resource conflicts.",
    characterId: "owen-grant",
    dialogue:
      "This is the third time this quarter we have had a resource conflict, and every time it gets resolved by whoever shouts loudest or has the most senior sponsor. That is not a system - it is politics. I want to establish a set of criteria that we apply consistently, so the allocation decision is evidence-based and transparent. If people disagree with the outcome, they should disagree with the criteria, not the person making the call.",
    chooseDialogue:
      "Here is what I propose. We score each competing request against four criteria: client impact, revenue at risk, deadline flexibility, and availability of alternative resources. Each criterion is scored one to five. The higher total score gets the resource. If there is a tie, the earlier deadline takes priority. This removes opinion from the decision and makes it auditable.",
    rewriteDialogue:
      "Write the framework document. Define each criterion clearly enough that two different managers would score the same situation the same way. Include worked examples. The document needs to be robust enough that I can hand it to anyone in the organisation and they can apply it without asking me for interpretation.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Owen has analysed a recurring resource conflict and concluded that the root cause is the absence of a criteria-based framework. He is proposing a scoring system to make allocation decisions transparent, evidence-based, and auditable. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen identifies the systemic cause, proposes a structured framework, and insists on criteria that produce consistent, auditable outcomes. This is analytical conflict resolution through system design.",
          observation:
            "The phrase 'they should disagree with the criteria, not the person making the call' shows Owen's analytical philosophy: good systems make decisions; people should debate the system, not each other.",
          coachingTip:
            "When someone resolves conflict by building a system that prevents future occurrences rather than making a one-time judgement call, they are applying analytical conflict resolution.",
          styleContext:
            "Analytical communicators see recurring conflicts as system design failures. If the same conflict keeps happening, the solution is a better system, not better people management.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive about implementing a framework, which sounds direct. But his goal is not speed - it is systematisation. He wants a reusable tool, not a one-off decision.",
          observation:
            "A direct communicator would allocate the resource to the most commercially important project and move on. Owen builds a framework so every future allocation is consistent.",
          coachingTip:
            "If someone resolves a conflict by creating a reusable decision framework, that is analytical. If they resolve it by making a quick, firm call, that is direct. Owen is building infrastructure.",
          styleContext:
            "Analytical communicators invest more time in the first resolution because they are designing a system that eliminates the need for future resolutions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not explored how the conflict is affecting the project managers' relationship, whether anyone feels undervalued, or how to rebuild collaboration between the competing teams.",
          observation:
            "There is no emotional dimension to Owen's intervention. He treats this as a system problem with a system solution. The people are affected by the system, not the cause of the conflict.",
          coachingTip:
            "Ask yourself: is this person managing the conflict or redesigning the system that creates it? Owen is an architect, not a mediator.",
          styleContext:
            "Analytical communicators believe that well-designed systems prevent the interpersonal conflicts that arise from ambiguous processes. Fix the system and the relationship issues resolve themselves.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has proposed a four-criteria scoring system for resource allocation. One project manager argues that some criteria should be weighted more heavily than others. How does Owen respond?",
      options: [
        {
          id: "s299-opt-a",
          text: "Fair point. Let us weight them. I suggest revenue at risk gets a multiplier of two because it directly affects the company's financial position. Client impact gets 1.5 because it affects retention. Deadline flexibility and alternative resources stay at one. That gives us a weighted score that better reflects business priority. We test it on the last three resource conflicts to see if the outcomes feel right.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted the valid criticism, proposed specific weights with clear rationale, and suggested backtesting against historical data. This is exactly how Owen would refine a framework - through evidence and iteration.",
        },
        {
          id: "s299-opt-b",
          text: "That is a good thought. We could spend some time debating the right weights, but I think for now equal weighting is simpler and we can always adjust later if it does not feel right.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic, but Owen values getting the framework right over getting it done quickly. Deferring the weighting question to a vague future adjustment does not meet his standard of rigour.",
        },
        {
          id: "s299-opt-c",
          text: "I think weighting overcomplicates it. The whole point is to make this simple enough that anyone can apply it. If we start weighting criteria, people will argue about the weights instead of the scores.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises simplicity over accuracy. Owen would rather have a slightly more complex framework that produces better decisions than a simple one that misallocates resources.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a resource allocation framework with clearly defined criteria, scoring guidance, and worked examples. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Resource Allocation Framework - Priority Scoring Model\n\nPurpose: To provide a transparent, consistent method for resolving resource conflicts when two or more projects require the same specialist resource for overlapping periods.\n\nCriteria and Scoring (1-5 scale, weighted):\n\n1. Revenue at risk (weight: 2x)\n   1 = No direct revenue impact.\n   3 = Moderate revenue impact (under 50,000 pounds).\n   5 = Significant revenue impact (over 100,000 pounds or contract penalty clause triggered).\n\n2. Client impact (weight: 1.5x)\n   1 = Internal project, no client dependency.\n   3 = Client aware of the project but no contractual deadline.\n   5 = Client-facing deliverable with a contractual or reputational deadline.\n\n3. Deadline flexibility (weight: 1x)\n   1 = Deadline can be moved by four or more weeks without consequence.\n   3 = Deadline can be moved by one to two weeks with minor consequence.\n   5 = Deadline is fixed and cannot be moved.\n\n4. Alternative resources (weight: 1x)\n   1 = Three or more alternative resources available with the required skill.\n   3 = One alternative available but with a ramp-up period of one to two weeks.\n   5 = No alternative resource available. The specialist is the only qualified person.\n\nDecision process:\n- Both project managers score their request against all four criteria.\n- Scores are multiplied by the weight for each criterion.\n- The higher total weighted score receives the resource.\n- In the event of a tie, the project with the earlier fixed deadline takes priority.\n- All scores and rationale are documented and available for audit.\n\nWorked example:\nProject A scores: Revenue (4 x 2 = 8), Client (3 x 1.5 = 4.5), Deadline (5 x 1 = 5), Alternatives (4 x 1 = 4). Total: 21.5.\nProject B scores: Revenue (2 x 2 = 4), Client (5 x 1.5 = 7.5), Deadline (3 x 1 = 3), Alternatives (5 x 1 = 5). Total: 19.5.\nDecision: Project A receives the resource (21.5 vs 19.5).\n\nEscalation: If either project manager disagrees with the outcome, they may escalate to the resource committee with a written case challenging a specific criterion score. The committee reviews the score against the defined scale and adjusts if warranted.\n\nReview: This framework is reviewed quarterly. Feedback on scoring clarity and decision quality is collected from all users.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your framework defines each criterion with a clear scale, applies consistent weighting, includes a worked example, and establishes an escalation process. Owen would implement this immediately.",
          observation:
            "The scoring descriptions at each level (1, 3, 5) ensure that two different managers would score the same situation the same way. This consistency is what makes the framework auditable.",
          coachingTip:
            "When writing frameworks for analytical communicators, define what each score means with specific, observable criteria. If 'high impact' can be interpreted differently by different people, the framework fails.",
          styleContext:
            "Analytical communicators design frameworks that work without the framework designer being present. The document should be self-sufficient - no interpretation required.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your scoring definitions are specific enough. If the difference between a score of 3 and a score of 4 is not clear, managers will argue about scores rather than outcomes.",
          observation:
            "If your framework says 'score 1-5 based on impact level' without defining what each number means, you have created a new source of disagreement rather than eliminating one.",
          coachingTip:
            "Define at least three points on each scale (1, 3, 5) with specific, measurable descriptions. Intermediate scores (2, 4) can be interpolated if the anchor points are clear.",
          styleContext:
            "Analytical communicators know that scoring frameworks without defined anchors become subjective opinion tools. The precision of the definitions determines the value of the framework.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your framework either lacks specific scoring definitions, does not include a worked example, or relies on subjective judgement without guidance. Owen asked for something robust enough that anyone in the organisation could apply it independently.",
          observation:
            "If your framework says 'consider the relative importance of each project', it is a set of principles, not a decision tool. Owen wants a tool, not advice.",
          coachingTip:
            "A framework must produce a decision, not facilitate a conversation. If two managers can follow your framework and still need to negotiate, it is not a framework - it is a discussion guide.",
          styleContext:
            "Analytical communicators judge frameworks by whether they eliminate the need for human judgement in routine decisions. The framework should decide; people should execute.",
        },
      },
    },
  },

  // Scenario 300 - Fiona Banks, conflict, advanced
  {
    id: "scenario-300",
    title: "The Methodology Standards Disagreement",
    context:
      "Fiona is chairing a heated debate within her research team about whether to adopt a new statistical methodology for their upcoming studies. Half the team wants to modernise; the other half argues the traditional approach is more widely accepted by peer reviewers and should be retained.",
    chooseContext:
      "Fiona has let both sides present their case. The modernisers cite improved accuracy and computational power. The traditionalists cite peer reviewer familiarity and cross-study comparability. Fiona sees merit in both positions.",
    rewriteContext:
      "Fiona has asked you to write a position paper that evaluates both methodologies against defined criteria and makes a recommendation with clear conditions.",
    characterId: "fiona-banks",
    dialogue:
      "This is exactly the kind of debate a research team should be having. But we cannot resolve it with opinions. We need to evaluate both approaches against a common set of criteria. I suggest five: statistical power, robustness of assumptions, peer reviewer acceptance, computational feasibility, and cross-study comparability. We score both methods against those criteria and let the evidence determine the outcome.",
    chooseDialogue:
      "Both sides have valid arguments, which is why this is difficult. The modern approach is demonstrably more accurate when assumptions hold, but it is unfamiliar to most peer reviewers in our field. The traditional approach is less precise but more widely understood and accepted. This is not a quality debate - it is a trade-off between accuracy and acceptance. We need to decide which trade-off best serves our research goals.",
    rewriteDialogue:
      "Write the position paper. Evaluate both methodologies against the five criteria I outlined. Score each one objectively. Then make a recommendation, but include the conditions under which the recommendation would change. I want the team to see that this decision was made transparently and can be revisited if the landscape shifts.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has reframed a heated team debate about methodology as an evidence-based evaluation exercise, proposing five specific criteria to score both approaches and letting the data determine the outcome. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona transforms an emotional debate into a structured evaluation by defining criteria, insisting on evidence-based scoring, and removing opinion from the decision process. This is analytical conflict resolution applied to intellectual disagreement.",
          observation:
            "Notice how Fiona validates the debate itself as healthy before imposing structure. Analytical communicators respect intellectual disagreement - they just insist on a rigorous method for resolving it.",
          coachingTip:
            "When someone resolves an intellectual conflict by defining evaluation criteria and scoring competing options against them, they are using a pure analytical approach. Engage with the framework, not the personalities.",
          styleContext:
            "Analytical communicators welcome disagreement because it surfaces important trade-offs. But they insist that disagreements are resolved through structured evaluation, not through persuasion or authority.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is decisive in proposing a resolution framework, which sounds direct. But the goal is not speed - it is rigour. She wants the team to trust the process, not just accept the outcome.",
          observation:
            "A direct communicator would review both options, pick one, and announce the decision. Fiona wants the team to participate in the evaluation so the outcome has intellectual legitimacy.",
          coachingTip:
            "If someone designs a transparent evaluation process for team participation, that is analytical. If they evaluate privately and announce the decision, that is direct. Fiona values collective analytical rigour.",
          styleContext:
            "Analytical communicators in team disagreements believe that the quality of the decision process determines the quality of team buy-in. A well-structured evaluation earns more trust than a well-argued opinion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not tried to find a compromise that keeps everyone happy, explored how each side feels about the other's position, or focused on maintaining team harmony.",
          observation:
            "There is no emotional mediation, no relationship management, and no attempt to ensure everyone feels heard on a personal level. Fiona is managing the intellectual content, not the emotional dynamics.",
          coachingTip:
            "Ask yourself: is this person resolving a disagreement between people or between ideas? Fiona is focused entirely on the ideas. The people are participants in the evaluation, not subjects of mediation.",
          styleContext:
            "Analytical communicators separate the intellectual disagreement from the interpersonal dynamics. They believe that if the evaluation is fair, the team relationships will survive regardless of the outcome.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has framed the methodology debate as a trade-off between accuracy and peer acceptance. Both sides acknowledge the trade-off but disagree on which factor should dominate. How do you help resolve it?",
      options: [
        {
          id: "s300-opt-a",
          text: "What if we apply the modern methodology but present it with a parallel traditional analysis in an appendix? That gives us the accuracy advantage while providing peer reviewers with a familiar reference point. We can track reviewer feedback over the next three papers and revisit if acceptance becomes a barrier to publication.",
          score: 10,
          result: "strong",
          explanation:
            "You proposed a practical solution that addresses both concerns: accuracy in the main analysis and reviewer familiarity in the appendix. The built-in review mechanism matches Fiona's preference for evidence-based iteration.",
        },
        {
          id: "s300-opt-b",
          text: "I think we should go with whichever approach the principal investigator prefers. At some point, someone has to make a call and they have the most experience.",
          score: 5,
          result: "partial",
          explanation:
            "This defers to authority rather than evidence, which is the opposite of what Fiona has proposed. She specifically wants the criteria to determine the outcome, not seniority or preference.",
        },
        {
          id: "s300-opt-c",
          text: "I think we are overthinking this. Both methods produce valid results. Let us just pick one and be consistent. The methodology section of the paper can justify whichever approach we choose.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the genuine intellectual trade-off Fiona has identified. Both methods produce results, but they are not equivalent in accuracy or acceptance. Treating them as interchangeable undermines the rigour Fiona demands.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a position paper evaluating both methodologies against five criteria with a conditional recommendation. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Position Paper: Methodology Selection for 2026-27 Research Programme\n\nObjective: To evaluate the traditional (frequentist) and modern (Bayesian) statistical methodologies against five criteria and recommend an approach for the upcoming research cycle.\n\nEvaluation Criteria and Scores (1-5 scale):\n\n1. Statistical power\n   Traditional: 3/5. Adequate for large samples but limited in small-sample precision.\n   Modern: 5/5. Superior handling of small samples and prior information integration. Demonstrated 15-20% reduction in Type II errors in comparable studies (Chen et al., 2024).\n\n2. Robustness of assumptions\n   Traditional: 4/5. Well-understood assumptions with established diagnostic tests.\n   Modern: 3/5. Prior specification introduces subjectivity. Sensitivity analysis required to demonstrate robustness.\n\n3. Peer reviewer acceptance\n   Traditional: 5/5. Standard in the field. No reviewer education required.\n   Modern: 2/5. Unfamiliar to approximately 60% of reviewers in our target journals based on editorial board survey (2025).\n\n4. Computational feasibility\n   Traditional: 4/5. Standard software, minimal processing time.\n   Modern: 4/5. Computational demands have reduced significantly with current hardware. No longer a practical barrier.\n\n5. Cross-study comparability\n   Traditional: 5/5. Results directly comparable with 90% of published studies in the field.\n   Modern: 2/5. Limited comparability with existing literature unless parallel traditional results are provided.\n\nTotal scores:\n   Traditional: 21/25\n   Modern: 16/25\n\nRecommendation: Adopt a hybrid approach. Use the modern methodology as the primary analysis for its superior statistical power. Include a parallel traditional analysis in supplementary materials to maintain peer reviewer accessibility and cross-study comparability.\n\nConditions for revision:\n- If peer reviewer acceptance of the modern methodology reaches 50% (measured by adoption in target journals), the parallel traditional analysis can be discontinued.\n- If three or more papers are rejected on methodological grounds within the first year, revert to traditional as primary with modern as supplementary.\n- Review this position annually against updated acceptance data.\n\nThis recommendation was developed through a structured evaluation involving the full research team. Scoring was discussed collectively and finalised by consensus on each criterion.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your position paper evaluates both methodologies transparently, provides a nuanced recommendation, and includes specific conditions under which the recommendation would change. Fiona would endorse this as a model of evidence-based decision-making.",
          observation:
            "You included conditions for reversing the decision, which demonstrates intellectual honesty and builds team trust. Analytical communicators know that recommendations are stronger when they specify their own expiration conditions.",
          coachingTip:
            "When writing position papers for analytical communicators, always include the conditions under which the recommendation would change. This transforms a decision into a hypothesis with built-in review.",
          styleContext:
            "Analytical communicators make decisions they can defend and revise. A recommendation with explicit revision triggers is more credible than one presented as permanent.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framework, but check whether your scoring includes evidence for each rating. If a methodology scores 4/5 on a criterion without a cited reason, the score is an opinion, not an assessment.",
          observation:
            "If your paper presents scores without justification, team members who disagree can challenge the numbers. Cited evidence makes scores defensible and the process transparent.",
          coachingTip:
            "For each score, add one piece of supporting evidence: a reference, a statistic, or a specific observation. This elevates scores from judgement to evidence.",
          styleContext:
            "Analytical communicators expect every score in an evaluation to be defensible. Unsupported scores invite challenges; supported scores invite constructive discussion about the evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your paper either presents a recommendation without a structured evaluation, lacks specific scores, or does not include conditions for revision. Fiona asked for transparent, evidence-based decision-making - not a conclusion with supporting arguments.",
          observation:
            "If your paper reads like an essay arguing for one approach rather than an evaluation comparing both, it has become advocacy rather than analysis.",
          coachingTip:
            "Structure the paper as a comparison, not an argument. Present both options with equal rigour and let the criteria determine the outcome. If you know the recommendation before completing the scoring, you are not evaluating - you are justifying.",
          styleContext:
            "Analytical communicators distinguish between evidence-led recommendations and conclusion-led arguments. The evaluation must genuinely determine the outcome, not rationalise a predetermined choice.",
        },
      },
    },
  },
];
