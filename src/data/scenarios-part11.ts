import { Scenario } from "@/types";

export const SCENARIOS_PART11: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (121-123)
  // ============================================

  // Scenario 121 - Jordan Cole, presentation, foundation
  {
    id: "scenario-121",
    title: "Lessons from a Failed Project",
    context:
      "You are in a company-wide retrospective meeting. Jordan is presenting the lessons learned from a product launch that missed every key milestone and was ultimately cancelled.",
    chooseContext:
      "Jordan has finished outlining the three root causes of the failure and is now fielding questions from the audience. A senior leader has asked what should have been done differently.",
    rewriteContext:
      "Jordan has asked you to draft a summary slide listing the top five lessons learned, which will be shared with the wider business after the session.",
    characterId: "jordan-cole",
    dialogue:
      "This project failed. Not 'underperformed', not 'fell short of expectations'. It failed. Three reasons: unclear ownership, no decision rights, and a scope that changed seven times in four months. Let me walk you through each one.",
    chooseDialogue:
      "What should we have done differently? Simple. Assign one owner, give them authority to say no, and lock the scope after sign-off. We knew this by week three but nobody acted.",
    rewriteDialogue:
      "Write the summary slide. Five lessons, five bullet points. No spin, no softening. If people cannot handle honest feedback about what went wrong, they will repeat the same mistakes.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened a lessons-learned presentation by bluntly stating the project failed, identifying three root causes, and refusing to soften the language. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan opens with an unvarnished declaration that the project failed and immediately lists three causes. There is no diplomatic framing or consensus-building; just facts and accountability.",
          observation:
            "Notice how Jordan corrects softer language upfront: 'Not underperformed, not fell short. It failed.' This insistence on calling things what they are is a hallmark of the direct style.",
          coachingTip:
            "When a presenter opens by rejecting euphemisms and listing causes without preamble, they are signalling a direct approach. Match their candour in any follow-up.",
          styleContext:
            "Direct communicators believe that honest language accelerates learning. Softening failure makes it easier to repeat.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does structure the information clearly, which can look analytical. But notice that the focus is on accountability and speed of delivery, not on the methodology behind the analysis.",
          observation:
            "An analytical presenter would walk through evidence, data, and frameworks before naming root causes. Jordan names them immediately and then offers to explain.",
          coachingTip:
            "If someone lists root causes to drive action, it is direct. If they list root causes to demonstrate rigorous thinking, it is analytical.",
          styleContext:
            "Direct communicators use structure as a tool for speed. Analytical communicators use structure as a tool for accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not acknowledged how the failure made people feel, nor has he tried to celebrate what went well alongside what went wrong. This is a purely outcome-focused review.",
          observation:
            "There is no warmth, no team appreciation, and no attempt to protect anyone's feelings. Jordan treats the retrospective as a diagnosis, not a healing exercise.",
          coachingTip:
            "Ask yourself: is this person focused on fixing the problem or on supporting the people affected by it? Jordan is entirely focused on fixing.",
          styleContext:
            "Direct communicators view retrospectives as opportunities to prevent future failures, not as spaces for emotional processing.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior leader has asked Jordan what should have been done differently. Jordan has answered bluntly. How do you respond to build on the conversation?",
      options: [
        {
          id: "s121-opt-a",
          text: "Agreed. For the next project, I propose we assign a single decision-maker before kick-off, set a scope-lock deadline, and treat any scope change after that as a new project. I will draft the governance framework this week.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Jordan's directness by proposing concrete actions with clear ownership and a specific timeline. This is exactly the kind of response a direct communicator values.",
        },
        {
          id: "s121-opt-b",
          text: "Those are valid points. I think we should set up a working group to explore how we can improve our governance processes. I will circulate an invitation for a brainstorming session.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally right, but 'explore' and 'brainstorming session' are too open-ended for Jordan. He has already identified the fixes; he wants commitment, not more discussion.",
        },
        {
          id: "s121-opt-c",
          text: "Before we jump to solutions, I think it is worth acknowledging that the team worked incredibly hard on this project. The failure was not about effort; it was about circumstances beyond our control.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan explicitly rejected this kind of softening. Attributing failure to 'circumstances beyond our control' contradicts the three specific causes he has just named. A direct communicator will see this as deflection.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a five-point summary slide of lessons learned from the failed project. Write it in a direct style with no spin or softening.",
      targetTraits: ["blunt-language", "actionable", "ownership-focused", "concise"],
      exampleStrongResponse:
        "Lessons Learned: Project Atlas\n\n1. Assign one owner per project. Shared ownership means no ownership.\n2. Decision-makers must have authority to reject scope changes.\n3. Lock scope after sign-off. Seven changes in four months made delivery impossible.\n4. Escalate blockers within 48 hours. Silence cost us three months.\n5. Cancel earlier. We knew by week three this was failing; we waited until month five.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is blunt, specific, and action-oriented. Each lesson names a concrete change rather than a vague aspiration. Jordan would present this without editing.",
          observation:
            "You avoided softening phrases like 'we could consider' or 'in future it may be helpful to'. Every bullet is a directive.",
          coachingTip:
            "When writing for direct communicators, treat each bullet as a decision that has already been made, not a suggestion for future discussion.",
          styleContext:
            "Direct communicators believe that lessons learned should be expressed as rules to follow, not insights to reflect on.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but your summary may include hedging language or miss the specificity Jordan expects. Check whether each bullet names a concrete action.",
          observation:
            "If any bullet reads as an observation rather than a directive, it will not meet Jordan's standard. 'Communication could have been better' is too vague.",
          coachingTip:
            "Replace every observation with an instruction. 'Communication was poor' becomes 'Escalate blockers within 48 hours'. Direct communicators want rules, not reflections.",
          styleContext:
            "Direct communicators test lessons learned by asking: 'If I followed these exactly, would the same failure be prevented?' If the answer is unclear, the lesson is too vague.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either softens the failures, avoids naming accountability, or reads as a diplomatic overview rather than a set of corrective actions.",
          observation:
            "If your bullets start with 'We should consider' or 'It might be worth', you are hedging. Jordan asked for five lessons, not five suggestions.",
          coachingTip:
            "Write the slide, then read each bullet aloud. If it sounds like a recommendation in a consultant's report, rewrite it as a command. That is what Jordan wants.",
          styleContext:
            "Direct communicators view softened lessons learned as a failure of courage. If you cannot say what went wrong plainly, the organisation will not learn.",
        },
      },
    },
  },

  // Scenario 122 - Sam Hartley, presentation, intermediate
  {
    id: "scenario-122",
    title: "Emergency Stakeholder Briefing",
    context:
      "You are in an emergency briefing with senior stakeholders after a data breach has affected customer records. Sam is leading the incident response and has called this meeting to communicate the situation.",
    chooseContext:
      "Sam has outlined the breach, the immediate containment actions, and the regulatory notification timeline. A stakeholder is now asking about long-term reputational risk.",
    rewriteContext:
      "Sam has asked you to write a two-minute talking-points script he can use when briefing the board chair in fifteen minutes.",
    characterId: "sam-hartley",
    dialogue:
      "At 14:32 today we identified unauthorised access to our customer database. 12,400 records were exposed. We contained the breach at 15:10. The ICO must be notified within 72 hours; I have already instructed legal to begin that process. Here is what we are doing now.",
    chooseDialogue:
      "Reputational risk is a valid concern but it is not the priority right now. The priority is containment, notification, and remediation. I will address reputation once we have those three under control. What else?",
    rewriteDialogue:
      "I need talking points for the board chair in fifteen minutes. What happened, what we have done, what we are doing next, and what we need from the board. Nothing else. Keep it factual.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has opened an emergency stakeholder briefing with precise times, numbers, and immediate actions, and has explicitly deprioritised reputational discussion. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam leads with facts and actions in a tightly sequenced briefing. He dismisses a secondary concern to maintain focus on the immediate priorities. This is direct crisis communication at its clearest.",
          observation:
            "Notice how Sam acknowledges the reputational question but explicitly defers it. He does not dismiss the person; he redirects the conversation to what matters most right now.",
          coachingTip:
            "In a crisis, direct communicators will sequence priorities ruthlessly. If someone raises a concern they consider secondary, they will acknowledge it and move on rather than explore it.",
          styleContext:
            "Direct communicators thrive in crisis because their style naturally aligns with what emergencies require: clarity, speed, and decisive action.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. The precision of the timeline (14:32, 15:10, 72 hours) can look analytical. But Sam is not exploring the data; he is using it to drive urgency and action. The focus is on what to do, not on understanding why it happened.",
          observation:
            "An analytical communicator in this situation would likely want to understand the root cause before communicating actions. Sam acts first and investigates later.",
          coachingTip:
            "If someone uses precise data to drive decisions, that is direct. If they use precise data to build understanding, that is analytical. The intent behind the data matters.",
          styleContext:
            "Direct communicators treat data as ammunition for action. Analytical communicators treat data as the foundation for understanding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not reassured the team, acknowledged anxiety, or invited people to share how they are feeling about the situation. This is an action-oriented briefing, not a supportive one.",
          observation:
            "There is no emotional check-in, no acknowledgement of the stress the team may be under, and no attempt to build consensus about the response plan.",
          coachingTip:
            "In a crisis, ask yourself: is this person focused on action or on people? Sam is entirely focused on action. That signals a direct style.",
          styleContext:
            "Direct communicators believe that the most supportive thing you can do in a crisis is fix the problem quickly. Action is their form of care.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A stakeholder has raised concerns about long-term reputational risk. Sam has deferred the topic. How do you contribute to the briefing?",
      options: [
        {
          id: "s122-opt-a",
          text: "Understood. On remediation: the security team has isolated the compromised server and is running a full audit. We will have a preliminary root-cause report by 09:00 tomorrow. I recommend we schedule a follow-up briefing for 10:00 to review it.",
          score: 10,
          result: "strong",
          explanation:
            "You have stayed within Sam's stated priorities (containment, notification, remediation), provided a specific timeline, and proposed a concrete next step. This matches the urgency and structure Sam has set.",
        },
        {
          id: "s122-opt-b",
          text: "I think we should also consider how this will land with our customers. Even if we contain it technically, the trust impact could be significant. Should we loop in the communications team?",
          score: 5,
          result: "partial",
          explanation:
            "Valid point, but Sam has explicitly deferred reputational and communications discussions. Raising it now, even gently, signals that you are not aligned with his stated priorities.",
        },
        {
          id: "s122-opt-c",
          text: "Before we go further, I want to acknowledge that this is a stressful situation for everyone involved. The team has done a great job responding quickly, and I think we should recognise that effort before we move on to next steps.",
          score: 0,
          result: "weak",
          explanation:
            "In an emergency briefing led by a direct communicator, pausing to acknowledge emotions will be seen as a distraction from the critical task at hand. Sam needs actions, not affirmations.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam needs talking points for a board chair briefing in fifteen minutes. Write a direct, factual script covering what happened, what has been done, what is being done next, and what is needed from the board.",
      targetTraits: ["factual", "time-stamped", "action-focused", "concise"],
      exampleStrongResponse:
        "Board Chair Briefing: Data Incident\n\nWhat happened: At 14:32 today, unauthorised access was detected on our customer database. 12,400 records were exposed.\n\nWhat we have done: Breach contained at 15:10. Compromised server isolated. Legal instructed to begin ICO notification (72-hour deadline).\n\nWhat we are doing next: Full security audit underway, preliminary root-cause report due by 09:00 tomorrow. Customer notification plan being drafted.\n\nWhat we need from the board: Approval of external forensics spend (estimated 45,000 pounds) and authorisation to engage crisis communications support if needed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your talking points are factual, time-stamped, and structured exactly as Sam requested. Each section answers one question clearly and moves on.",
          observation:
            "You included a specific ask for the board, which is critical. Sam does not want a briefing that ends without a decision point.",
          coachingTip:
            "When writing crisis talking points for direct communicators, always end with a specific ask. They view briefings without decisions as wasted time.",
          styleContext:
            "Direct communicators treat board briefings as decision-making forums. Every briefing should end with a clear request for action or approval.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but your talking points may lack specific times, numbers, or a clear ask for the board. Check whether every claim is grounded in a fact.",
          observation:
            "If your script includes phrases like 'a significant number of records' or 'we are working on it', it lacks the precision Sam expects in a board briefing.",
          coachingTip:
            "Replace every vague reference with a specific one. 'A significant number' becomes '12,400'. 'Soon' becomes 'by 09:00 tomorrow'. Precision builds confidence in a crisis.",
          styleContext:
            "Direct communicators believe that vague crisis communication signals incompetence. Specificity demonstrates control.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points are either too long, too vague, or too focused on reassurance rather than facts. Sam needs a script he can deliver in two minutes to a board chair who wants answers.",
          observation:
            "If your script opens with context about how committed the organisation is to data security, you have started in the wrong place. Start with what happened.",
          coachingTip:
            "Write the script, then time yourself reading it. If it takes longer than two minutes, cut everything that is not a fact, an action, or a request.",
          styleContext:
            "Direct communicators in crisis mode have no tolerance for preamble. The board chair wants facts and decisions, not reassurance.",
        },
      },
    },
  },

  // Scenario 123 - Alex Tran, presentation, advanced
  {
    id: "scenario-123",
    title: "Product Demo to Sceptical Buyers",
    context:
      "You are observing a product demo to a group of procurement professionals who have already rejected two competing solutions. Alex is presenting your platform and knows the audience is sceptical.",
    chooseContext:
      "A buyer has interrupted Alex mid-demo to say that your product looks similar to one they have already rejected. Alex has responded and is waiting for a follow-up question.",
    rewriteContext:
      "Alex has asked you to write a one-paragraph closing statement for the demo that directly addresses the buyers' scepticism and asks for a decision.",
    characterId: "alex-tran",
    dialogue:
      "You have seen two platforms and rejected both. I am not going to pretend ours is completely different. What I am going to do is show you the three things those platforms could not do, and then you can decide whether those three things matter enough to change your mind.",
    chooseDialogue:
      "I hear you. It looks similar on the surface. But open your rejected vendor's platform and try to run a cross-portfolio reconciliation in under four clicks. You cannot. Watch me do it now.",
    rewriteDialogue:
      "We need a closing statement that does not waffle. Acknowledge their scepticism, name the three differentiators, and ask them for a decision date. Do not beg for the sale; let the product speak.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Alex has opened a product demo by acknowledging the buyers' scepticism, refusing to oversell, and challenging the audience to evaluate three specific differentiators. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex acknowledges the challenge head-on, refuses to use hyperbole, and frames the demo as a simple decision: do these three things matter to you or not? This is direct persuasion through honesty rather than charm.",
          observation:
            "Notice how Alex does not try to build excitement or create a vision. The pitch is transactional: here are three facts, now decide. This is confidence without performance.",
          coachingTip:
            "When a presenter acknowledges objections upfront and frames the pitch as a binary choice, they are using a direct style. They trust the product over the performance.",
          styleContext:
            "Direct communicators believe the most persuasive thing you can do is tell the truth plainly. Overselling signals insecurity to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex's confidence and challenge to the audience could seem expressive. But notice there is no storytelling, no energy, and no attempt to win the room emotionally. The persuasion is entirely logical and confrontational.",
          observation:
            "An expressive presenter would build energy and excitement around the demo. Alex is calm, factual, and almost provocative in his simplicity.",
          coachingTip:
            "If someone persuades through challenge and candour, it is direct. If they persuade through energy and narrative, it is expressive. Alex is daring the audience to disagree.",
          styleContext:
            "Direct communicators in sales situations earn trust by being the person who does not try too hard. Their restraint signals confidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not asked how the buyers feel about previous rejections, nor has he tried to understand their concerns emotionally. The approach is entirely transactional.",
          observation:
            "There is no relationship-building, no empathy for the frustration of evaluating multiple platforms, and no attempt to align with their values.",
          coachingTip:
            "Ask yourself: is this person trying to win the audience over or simply presenting a choice? Alex is presenting a choice and leaving the decision to them.",
          styleContext:
            "Direct communicators believe buyers respect sellers who do not waste their time. The pitch should be as efficient as the product.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A buyer has said your product looks like one they already rejected. Alex has challenged them to test a specific feature. How do you support the demo?",
      options: [
        {
          id: "s123-opt-a",
          text: "To add to Alex's point: the reconciliation engine processes 50,000 transactions in under 90 seconds. Your rejected vendor's benchmark was over seven minutes. I have the test results here if you want to see them side by side.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Alex's approach by providing specific, verifiable data that directly addresses the buyer's objection. No overselling, just evidence.",
        },
        {
          id: "s123-opt-b",
          text: "I understand your concern. A lot of platforms look similar on the surface, and it can be frustrating going through multiple evaluations. What would help us understand is which specific features led you to reject the other two.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable question, but it slows the demo down at the moment Alex is building momentum. He has already identified the differentiators; opening a discovery conversation now undermines his approach.",
        },
        {
          id: "s123-opt-c",
          text: "What makes us different is our people. We have an incredible support team, a dedicated account manager for every client, and a real passion for helping organisations succeed. The product is great, but it is the partnership that sets us apart.",
          score: 0,
          result: "weak",
          explanation:
            "Alex has deliberately avoided this kind of relationship-based selling. Pivoting to 'our people' and 'passion' contradicts the factual, product-led approach he has established and will confuse the audience.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a closing statement for the demo that acknowledges the buyers' scepticism, names three differentiators, and asks for a decision date. Keep it direct and confident.",
      targetTraits: ["acknowledges-scepticism", "specific-differentiators", "asks-for-decision", "no-overselling"],
      exampleStrongResponse:
        "You came in sceptical, and I respect that. Here is what you have seen today: cross-portfolio reconciliation in four clicks, real-time exception handling that no other platform offers, and an integration layer that connects to your existing systems without custom development. If those three things solve the problems that led you to reject the other two vendors, I would like a decision date. We can have a pilot environment ready within ten working days.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing acknowledges the scepticism without apologising for it, names specific differentiators, and closes with a clear ask. This is confident, product-led communication.",
          observation:
            "You avoided the temptation to oversell or add flattery. The statement trusts the product to do the convincing.",
          coachingTip:
            "When writing closing statements for direct communicators, end with a specific request rather than an open-ended invitation. 'I would like a decision date' is stronger than 'let us know what you think'.",
          styleContext:
            "Direct communicators close by making it easy for the buyer to say yes or no. They do not leave conversations open-ended.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your closing may lack specificity in the differentiators or may soften the ask at the end. Check that you have named exactly what makes the product different.",
          observation:
            "If your closing says 'we believe our platform offers significant advantages', it is too vague. Name the advantages explicitly.",
          coachingTip:
            "Replace 'significant advantages' with the specific features you demonstrated. Direct communicators want proof, not promises.",
          styleContext:
            "Direct communicators judge a closing statement by whether it makes the next step obvious. If the buyer has to ask 'so what now?', the close was too weak.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing either oversells, avoids asking for a decision, or relies on relationship language rather than product evidence.",
          observation:
            "If your statement ends with 'we would love the opportunity to work with you', you have written a plea, not a close. Alex wants confidence, not hope.",
          coachingTip:
            "Write the closing, then ask yourself: does this sound like someone who knows their product is the best option, or someone who hopes it is? Rewrite until it sounds like the former.",
          styleContext:
            "Direct communicators believe that asking for a decision is a sign of respect. It shows you value the buyer's time and trust your own product.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (124-126)
  // ============================================

  // Scenario 124 - Priya Sharma, presentation, foundation
  {
    id: "scenario-124",
    title: "Presenting the Cost-Reduction Plan",
    context:
      "You are in a leadership meeting where Priya is presenting a cost-reduction plan that will affect several departments. She has framed the presentation around a vision of a leaner, more agile organisation.",
    chooseContext:
      "Priya has finished the vision section and is now moving to the specifics. A finance director has asked for the exact savings figures, and Priya is responding.",
    rewriteContext:
      "Priya has asked you to write an email to all department heads introducing the cost-reduction initiative, setting the tone before detailed plans are shared next week.",
    characterId: "priya-sharma",
    dialogue:
      "I know 'cost reduction' sounds like bad news, but I want us to think of this differently. This is our chance to strip away the things that slow us down and double down on what actually creates value. Imagine an organisation where every pound spent is a pound that moves us forward. That is what this plan delivers.",
    chooseDialogue:
      "The exact figures are coming, do not worry. But before we get lost in spreadsheets, I want everyone to understand the story behind the numbers. We are not cutting for the sake of it. We are reshaping ourselves to win in a market that is changing faster than we are.",
    rewriteDialogue:
      "Write something that gets people excited rather than scared. I want department heads to see this as an opportunity, not a threat. Paint the picture of where we are going, not just what we are leaving behind.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a cost-reduction presentation by reframing cuts as an opportunity and asking the audience to imagine a leaner, more agile future. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with a narrative reframe, turning a potentially negative topic into an aspirational vision. She uses language designed to inspire rather than inform, which is a classic expressive approach.",
          observation:
            "Notice how Priya delays the numbers in favour of establishing an emotional context. She wants the audience to feel differently about the topic before they see the data.",
          coachingTip:
            "When a presenter reframes a negative topic as an opportunity and uses phrases like 'imagine an organisation where', they are communicating expressively. They lead with vision, not data.",
          styleContext:
            "Expressive communicators believe that how people feel about a plan determines whether they will execute it. Vision before detail is their standard approach.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya's concern for how people receive the news could look supportive. But notice she is not checking in on feelings or offering reassurance. She is actively trying to reshape how people think, which is persuasion, not empathy.",
          observation:
            "A supportive communicator would ask how people are feeling and acknowledge the anxiety. Priya is telling them how to feel: excited rather than scared.",
          coachingTip:
            "If someone shapes the emotional tone of a room deliberately, that is expressive. If someone responds to the emotional tone, that is supportive.",
          styleContext:
            "Expressive communicators manage energy. Supportive communicators respond to it. Priya is actively setting the tone, not reading it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented any data, methodology, or detailed analysis. Her opening is entirely about narrative and vision, which is the opposite of an analytical or direct approach.",
          observation:
            "There are no numbers, no timelines, and no specific actions in Priya's opening. Everything is framed as a story about transformation.",
          coachingTip:
            "If a presenter spends the first few minutes on 'why' and 'where we are going' rather than 'what' and 'how much', they are likely expressive.",
          styleContext:
            "Expressive communicators believe that data without narrative is meaningless. They always establish context and meaning before sharing specifics.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The finance director has asked for exact savings figures. Priya has deferred the detail in favour of the bigger picture. How do you respond?",
      options: [
        {
          id: "s124-opt-a",
          text: "Priya, I love the vision. To build on it, what if we showed people the 'before and after' of where our spend goes? A visual that shows money moving from overhead into growth areas would make the story really tangible.",
          score: 10,
          result: "strong",
          explanation:
            "You have supported Priya's narrative approach while offering a concrete way to bring the vision to life. Suggesting a visual story aligns perfectly with her expressive style.",
        },
        {
          id: "s124-opt-b",
          text: "I think we need to share the savings figures now. People will not buy into the vision if they are worried about their budgets being cut without detail.",
          score: 5,
          result: "partial",
          explanation:
            "A fair point, but jumping to the numbers now works against Priya's deliberate strategy of building emotional buy-in first. You could achieve the same result by framing the numbers within her narrative.",
        },
        {
          id: "s124-opt-c",
          text: "I have prepared a detailed breakdown of projected savings by department, including a quarterly phasing schedule and risk-adjusted forecasts. Shall I walk through it now?",
          score: 0,
          result: "weak",
          explanation:
            "This completely overrides Priya's approach. She has deliberately held back the detail to build the vision first. Launching into a spreadsheet now will flatten the energy she has worked to create.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write an email to department heads introducing the cost-reduction initiative. She wants it to excite rather than alarm, painting a picture of where the organisation is heading.",
      targetTraits: ["visionary-tone", "reframes-negatives", "aspirational-language", "energising"],
      exampleStrongResponse:
        "Subject: Building a Faster, Sharper Organisation\n\nTeam,\n\nOver the coming weeks, we will be sharing a plan to reshape how we invest our resources. This is not about doing less; it is about doing what matters most, better.\n\nWe have a real opportunity to strip away complexity, reinvest in the areas driving growth, and build an organisation that moves at the speed our market demands. The details will follow next week, but I wanted you to hear the intent first: we are choosing to get leaner so we can get stronger.\n\nI am genuinely excited about what this makes possible. More to follow soon.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email reframes cost reduction as investment and growth, uses aspirational language, and creates anticipation rather than anxiety. Priya would send this immediately.",
          observation:
            "You avoided any language that sounds like a warning or apology. The tone is forward-looking and confident.",
          coachingTip:
            "When writing for expressive communicators, lead with 'what this makes possible' rather than 'what is changing'. They want people to look forward, not back.",
          styleContext:
            "Expressive communicators use language to shape perception. A well-written email from them does not just inform; it transforms how people think about the topic.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your email may be too cautious or too detailed for Priya's purposes. Check whether it reads as an announcement or an invitation to be excited.",
          observation:
            "If your email includes phrases like 'there will be some difficult decisions' or 'we understand this may cause concern', it has introduced anxiety that Priya wants to avoid at this stage.",
          coachingTip:
            "Save the caution for the detailed follow-up. This email is about setting the emotional tone. Keep it aspirational.",
          styleContext:
            "Expressive communicators believe the first communication sets the mood for everything that follows. If the opening email is anxious, every subsequent message will be received through that lens.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either reads as a corporate announcement, includes too much detail, or fails to reframe the initiative positively.",
          observation:
            "If your email opens with 'As part of our annual budget review, we have identified areas for cost reduction', you have written a memo, not a message. Priya wants to inspire, not inform.",
          coachingTip:
            "Rewrite the email as if you were telling a story about the future. What does the organisation look like after this plan succeeds? Start there.",
          styleContext:
            "Expressive communicators judge communication by the energy it creates. If your email does not make someone want to be part of the plan, it has failed.",
        },
      },
    },
  },

  // Scenario 125 - Marcus Webb, presentation, intermediate
  {
    id: "scenario-125",
    title: "Annual Results to Shareholders",
    context:
      "You are at the annual shareholders meeting. Marcus is presenting the company's results for the year, which include strong revenue growth but a decline in profit margin due to strategic investment.",
    chooseContext:
      "A shareholder has challenged Marcus on the declining margins, asking whether the board has lost financial discipline. Marcus is responding.",
    rewriteContext:
      "Marcus has asked you to draft the opening two minutes of his keynote for the shareholder meeting, setting the tone before the financial slides.",
    characterId: "marcus-webb",
    dialogue:
      "What a year it has been. Revenue up 18 per cent, three new markets entered, and a product portfolio that has never been stronger. Yes, margins dipped, and I will explain exactly why in a moment. But here is the headline: we invested in the future, and the future is already paying back.",
    chooseDialogue:
      "Lost discipline? Far from it. We made a deliberate choice to invest 12 million in infrastructure that will generate returns for the next decade. Discipline is not about cutting everything; it is about knowing when to spend. This was the year to spend.",
    rewriteDialogue:
      "The opening needs to land with energy. I want shareholders to walk away feeling like their money is in the hands of people who know where they are going. Start strong, paint the big picture, and make the numbers feel like a story, not a spreadsheet.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus has opened the annual results by celebrating growth, reframing the margin decline as strategic investment, and using phrases like 'the future is already paying back'. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with a celebratory tone, reframes a weakness as a strength, and uses narrative language to turn financial results into a compelling story. This is classic expressive presenting.",
          observation:
            "Notice how Marcus acknowledges the margin decline but sandwiches it between positive statements. He controls the narrative rather than letting the numbers speak for themselves.",
          coachingTip:
            "When a presenter turns financial results into a narrative with heroes, choices, and a positive arc, they are communicating expressively. The story matters more than the spreadsheet.",
          styleContext:
            "Expressive communicators in shareholder settings believe that confidence and vision drive share price as much as the numbers do. They present results as a story of strategic intent.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus's confidence and willingness to address the challenge head-on could look direct. But notice that he wraps the response in narrative and vision rather than simply stating facts. The reframe is the key: he is not just answering the question; he is reshaping how shareholders think about the numbers.",
          observation:
            "A direct communicator would say 'Margins dropped because we invested 12 million. Next question.' Marcus turns it into a story about strategic courage.",
          coachingTip:
            "If someone reframes a challenge as a narrative of deliberate choice and future reward, that is expressive. If they state the facts without framing, that is direct.",
          styleContext:
            "Expressive communicators add meaning to data. Direct communicators let data speak for itself. Marcus is adding meaning.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not presented detailed analysis of the margin decline, nor has he checked in on how shareholders are feeling. His approach is about storytelling and confidence, not about data or empathy.",
          observation:
            "There are no charts, no breakdowns, and no invitations to discuss concerns. Marcus is performing, not analysing or supporting.",
          coachingTip:
            "Ask yourself: is this person telling a story or presenting data? Marcus is clearly telling a story. The numbers serve the narrative, not the other way around.",
          styleContext:
            "Expressive communicators view shareholder meetings as performances. The audience should leave feeling confident and inspired, not just informed.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A shareholder has accused the board of losing financial discipline over declining margins. Marcus has reframed the investment as deliberate strategy. How do you support him?",
      options: [
        {
          id: "s125-opt-a",
          text: "To build on Marcus's point: the 12 million we invested this year has already secured contracts worth 28 million over the next three years. We did not just spend; we planted seeds that are already growing. The margin story next year will look very different.",
          score: 10,
          result: "strong",
          explanation:
            "You have extended Marcus's narrative by adding a forward-looking return story with specific numbers. The language ('planted seeds', 'already growing') matches his expressive style perfectly.",
        },
        {
          id: "s125-opt-b",
          text: "If it helps, I can share a slide breaking down the 12 million investment by category, showing projected ROI for each line item over a five-year horizon.",
          score: 5,
          result: "partial",
          explanation:
            "Useful information, but the shift from narrative to spreadsheet undermines the momentum Marcus has built. The data would be better delivered after the story lands.",
        },
        {
          id: "s125-opt-c",
          text: "I appreciate the shareholder's concern. Declining margins are a legitimate worry, and I think we owe the room a more detailed explanation of where the 12 million went before we move on.",
          score: 0,
          result: "weak",
          explanation:
            "By validating the challenge and requesting more detail, you have undermined Marcus's reframe. He has already positioned the investment as a strength; reopening it as a concern contradicts his strategy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write the opening two minutes of his shareholder keynote. He wants energy, a big picture, and numbers that feel like a story rather than a spreadsheet.",
      targetTraits: ["celebratory-opening", "narrative-framing", "forward-looking", "confident-tone"],
      exampleStrongResponse:
        "Good morning, everyone. A year ago, I stood here and told you we were going to invest in growth. Today, I am here to tell you it worked.\n\nRevenue is up 18 per cent. We have entered three new markets. Our product portfolio is the strongest it has ever been. And yes, we spent money to get here, deliberately, strategically, and with conviction.\n\nIn the next twenty minutes, I will show you exactly where that investment went and why it is already generating returns. But first, I want you to understand the choice we made. We chose to build rather than to protect. And that choice is why this organisation is in the best shape it has been in for a decade.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your opening is confident, narrative-driven, and turns financial results into a story of strategic courage. Marcus would deliver this with real energy.",
          observation:
            "You framed the margin decline as a deliberate choice rather than a problem, which is exactly how Marcus wants shareholders to receive it.",
          coachingTip:
            "When writing for expressive communicators in formal settings, use short, punchy sentences that build momentum. Each sentence should feel like a step forward in the story.",
          styleContext:
            "Expressive communicators in shareholder settings believe that the opening two minutes determine whether the audience trusts the rest of the presentation. Energy and conviction are everything.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good elements, but your opening may lack the confidence or narrative arc Marcus is looking for. Check whether it builds momentum or simply states facts.",
          observation:
            "If your opening reads as a summary of results rather than a story of choices made, it needs more narrative framing.",
          coachingTip:
            "Try starting with a reference to last year's promise and then showing how you delivered. This 'promise and payoff' structure works well for expressive presenters.",
          styleContext:
            "Expressive communicators want their audience to feel the trajectory of the story. Numbers alone do not create that feeling; narrative does.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening either starts with caveats, leads with the margin decline, or reads as a dry summary of financial results.",
          observation:
            "If your opening begins with 'This year presented some challenges' or 'Despite headwinds', you have set a defensive tone that Marcus wants to avoid.",
          coachingTip:
            "Rewrite the opening by answering one question: what should shareholders feel in the first thirty seconds? Marcus wants them to feel confident. Start there.",
          styleContext:
            "Expressive communicators never open with weakness. They acknowledge challenges, but only after establishing strength and momentum.",
        },
      },
    },
  },

  // Scenario 126 - Nina Okafor, presentation, advanced
  {
    id: "scenario-126",
    title: "Pitch to Venture Capital",
    context:
      "You are in a boardroom where Nina is pitching to a venture capital panel for Series A funding. The panel has already heard three pitches today and Nina knows she needs to stand out.",
    chooseContext:
      "A panellist has asked Nina what makes her team different from the dozens of founders they see every month. Nina is responding.",
    rewriteContext:
      "Nina has asked you to write the closing 60 seconds of the pitch, the part that makes the panel want to write a cheque before she leaves the room.",
    characterId: "nina-okafor",
    dialogue:
      "Forget the slides for a moment. Let me tell you a story. Six months ago, a hospital in Lagos could not track its medicine supply. Patients were dying because drugs were sitting in the wrong warehouse. We built a platform in twelve weeks that fixed that. Today, that hospital has not lost a single patient to a supply failure. That is not a market opportunity. That is a mission.",
    chooseDialogue:
      "What makes us different? We have lived the problem. Half my team grew up in communities where the healthcare system failed them personally. We are not building this because we spotted a gap in the market. We are building it because we have felt the gap in our lives.",
    rewriteDialogue:
      "The closing has to make them feel something. I do not want a polite 'we will be in touch'. I want them leaning forward. End with the impact, the scale of what is possible, and make the ask feel like an invitation to be part of something that matters.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has opened a VC pitch by setting aside slides, telling a personal story about a hospital in Lagos, and framing the business as a mission rather than a market opportunity. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina opens with story, emotion, and mission rather than data, market size, or financial projections. She asks the panel to feel the problem before they analyse the solution. This is expressive communication at its most powerful.",
          observation:
            "Notice how Nina literally says 'forget the slides'. She is signalling that the story is more important than the data, which is a defining expressive trait.",
          coachingTip:
            "When a presenter chooses story over slides and frames a business as a mission, they are communicating expressively. The data supports the story; it does not replace it.",
          styleContext:
            "Expressive communicators in pitch settings believe that investors fund people, not spreadsheets. They lead with why the founder cares, not why the market is large.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's focus on patients dying and communities being failed has strong emotional elements that could seem supportive. But notice she is not inviting the panel to share their feelings or checking in on their comfort. She is performing, persuading, and storytelling. That is expressive.",
          observation:
            "A supportive communicator would create space for the audience to process the emotional content. Nina is using emotion as a tool of persuasion, not as a space for connection.",
          coachingTip:
            "If someone uses emotional content to persuade, that is expressive. If they use it to connect and support, that is supportive. Nina is performing, not facilitating.",
          styleContext:
            "Expressive communicators deploy emotion strategically. They are aware of its impact and use it deliberately to move an audience towards a decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented market data, competitive analysis, or financial projections. Her opening is entirely about narrative and emotional resonance, which is the opposite of an analytical approach.",
          observation:
            "There are no figures, no frameworks, and no methodology in Nina's opening. Everything serves the story.",
          coachingTip:
            "Ask yourself: is this person building a case or telling a story? Nina is telling a story. The case will come later, supported by the emotional foundation she is laying now.",
          styleContext:
            "Expressive communicators believe that a VC panel hears hundreds of pitches with good numbers. What they remember is the founder who made them feel something.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A panellist has asked Nina what makes her team different. She has answered with a personal story about her team's lived experience. How do you contribute to the pitch?",
      options: [
        {
          id: "s126-opt-a",
          text: "And that lived experience translates directly into product decisions. Our supply-chain algorithm was designed by someone who spent her childhood watching medicine go missing. She did not read about the problem in a report; she solved it because she had lived it. That is an insight no competitor can replicate.",
          score: 10,
          result: "strong",
          explanation:
            "You have extended Nina's narrative with a specific, human example that reinforces the 'lived experience' advantage. The language is story-driven and emotionally compelling, matching her expressive style.",
        },
        {
          id: "s126-opt-b",
          text: "To quantify that: our team's domain expertise has reduced our product development cycle by 40 per cent compared to competitors who are learning the market from scratch. That translates to a significant cost advantage.",
          score: 5,
          result: "partial",
          explanation:
            "Useful data, but it flattens the emotional impact of Nina's story. She chose to make this personal; shifting to percentages and cost advantages changes the register.",
        },
        {
          id: "s126-opt-c",
          text: "I would add that our team has strong academic credentials. Three of our engineers have PhDs in supply chain logistics, and our CTO previously worked at a major consulting firm specialising in healthcare operations.",
          score: 0,
          result: "weak",
          explanation:
            "Nina deliberately positioned the team's advantage as lived experience, not credentials. Listing PhDs and consulting backgrounds contradicts her narrative and makes the pitch sound like every other one the panel has heard today.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write the closing 60 seconds of the VC pitch. She wants it to make the panel feel something, end with impact and scale, and make the funding ask feel like an invitation to be part of a mission.",
      targetTraits: ["emotional-resonance", "mission-driven", "scalable-vision", "compelling-ask"],
      exampleStrongResponse:
        "One hospital in Lagos. That is where we started. Today, we serve fourteen facilities across three countries, and every single one has eliminated supply-related patient harm.\n\nBut here is what keeps me up at night: there are 50,000 hospitals in sub-Saharan Africa alone. Fifty thousand buildings full of doctors who want to save lives but cannot because the system around them is broken.\n\nWe are asking for 4 million to reach five hundred of them in the next eighteen months. That is not just a return on investment. That is a return on humanity. And I would love for you to be part of it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing builds from a single story to a massive vision, uses emotional language that feels authentic rather than manipulative, and frames the funding ask as a partnership in a mission. Nina would deliver this with real conviction.",
          observation:
            "You scaled from one hospital to 50,000, which creates a sense of enormous possibility. And the phrase 'return on humanity' reframes the investment in mission terms.",
          coachingTip:
            "When writing for expressive communicators in high-stakes pitches, use a 'small to big' structure: start with one story, then zoom out to show the scale of impact. This creates both emotional connection and business ambition.",
          styleContext:
            "Expressive communicators close pitches by making the audience feel that saying no would mean missing something important. The ask is not for money; it is for participation in a story.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but your closing may lack the emotional escalation or the compelling reframe of the funding ask. Check whether it builds to a peak or stays level throughout.",
          observation:
            "If your closing states the funding ask without connecting it to impact, it reads as transactional rather than missional.",
          coachingTip:
            "Try connecting every pound of investment to a specific outcome. '4 million reaches 500 hospitals' is more powerful than '4 million funds our expansion'.",
          styleContext:
            "Expressive communicators want the funding ask to feel inevitable, like the natural conclusion of a story the panel is already invested in.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing either reads as a standard funding request, lacks emotional resonance, or fails to connect the money to a mission.",
          observation:
            "If your closing says 'we are seeking 4 million in Series A funding to scale operations across sub-Saharan Africa', you have written a business plan, not a pitch close.",
          coachingTip:
            "Rewrite the close by answering: if the panel could only remember one sentence from this pitch, what should it be? Build everything around that sentence.",
          styleContext:
            "Expressive communicators believe the last thirty seconds of a pitch determine whether the audience acts. If those seconds are forgettable, the pitch has failed.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (127-129)
  // ============================================

  // Scenario 127 - Tom Brennan, presentation, foundation
  {
    id: "scenario-127",
    title: "Internal Training on a New System",
    context:
      "You are in a training session where Tom is introducing a new project management system to a team that has been using the old system for five years. Many team members are anxious about the change.",
    chooseContext:
      "A team member has expressed frustration, saying the old system worked fine and they do not understand why it needs to change. Tom is responding.",
    rewriteContext:
      "Tom has asked you to write a follow-up email to attendees after the training session, reinforcing the key messages and offering ongoing support.",
    characterId: "tom-brennan",
    dialogue:
      "I know change is hard, especially when the current system feels like second nature. Before I show you anything, I want to say this: your frustration is completely valid. You have built real expertise in the old system, and that expertise is not wasted. A lot of what you already know will transfer directly. Let us take this step by step together.",
    chooseDialogue:
      "I hear you, and I appreciate you saying that out loud. You are not the only one feeling that way. The old system did work, and nobody is saying you were doing anything wrong. This change is about giving you better tools, not replacing your skills. Let me show you something that I think will help.",
    rewriteDialogue:
      "The email should feel like a warm handshake after the session. I want people to know that it is okay to struggle with this, that there is no pressure to master it overnight, and that support is always available. Make it personal, not corporate.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has opened a training session by acknowledging the team's anxiety, validating their frustration, and promising to go step by step. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with empathy, validates existing expertise, and promises a gentle pace. Every element of his opening is designed to make people feel safe rather than pressured. This is textbook supportive communication.",
          observation:
            "Notice how Tom addresses emotions before content. He does not start with the new system's features; he starts with how people feel about losing the old one.",
          coachingTip:
            "When a presenter opens by validating feelings and promising a collaborative pace, they are signalling a supportive style. They believe people learn best when they feel safe.",
          styleContext:
            "Supportive communicators in training settings prioritise psychological safety. They know that anxious people do not absorb information, so they address the anxiety first.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom's warmth and energy could look expressive. But notice he is not trying to excite the room or reframe the change as an opportunity. He is simply making space for people's feelings and promising support.",
          observation:
            "An expressive communicator would try to generate enthusiasm about the new system. Tom is content to let people feel uncertain and promises to walk alongside them.",
          coachingTip:
            "If someone validates feelings and offers to go at the group's pace, that is supportive. If they try to shift the group's mood towards excitement, that is expressive.",
          styleContext:
            "Supportive communicators meet people where they are emotionally. Expressive communicators try to move people to where they want them to be.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented any data about why the new system is better, nor has he set firm expectations about when the transition must be complete. His opening is entirely about people, not process.",
          observation:
            "There are no timelines, no efficiency metrics, and no directives. Tom is focused on how people feel, not on what they need to do.",
          coachingTip:
            "Ask yourself: is this person focused on the task or on the people doing the task? Tom is firmly focused on the people.",
          styleContext:
            "Supportive communicators believe that if you take care of the people, the task takes care of itself. They invest in emotional readiness before technical readiness.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has said the old system worked fine and questioned why it needs to change. Tom has validated their feelings. How do you contribute?",
      options: [
        {
          id: "s127-opt-a",
          text: "I felt the same way when I first heard about the switch. It took me a couple of weeks to get comfortable, but I found that the new system actually handles the things that used to frustrate me about the old one. I am happy to sit with anyone who wants a walkthrough at their own pace.",
          score: 10,
          result: "strong",
          explanation:
            "You have shared your own experience, normalised the adjustment period, and offered personal support. This extends Tom's supportive approach by adding peer-to-peer reassurance.",
        },
        {
          id: "s127-opt-b",
          text: "The new system is objectively better. It reduces report generation time by 60 per cent and has automated three manual processes. Once you see the efficiency gains, you will understand why we made the switch.",
          score: 5,
          result: "partial",
          explanation:
            "Factually accurate, but the phrase 'once you see, you will understand' can feel dismissive of the team member's concern. Tom has set a supportive tone; jumping to efficiency metrics changes the register.",
        },
        {
          id: "s127-opt-c",
          text: "The decision has been made and the old system is being decommissioned in six weeks. Rather than debating whether we should change, let us focus on how to make the transition as smooth as possible.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the team member's concern rather than acknowledging it. Tom has created a safe space for people to express frustration; this response closes that space and imposes a deadline.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a follow-up email after the training session. He wants it to feel like a warm handshake, reassuring people that it is okay to struggle and that support is always available.",
      targetTraits: ["warm-tone", "normalises-struggle", "offers-support", "personal-not-corporate"],
      exampleStrongResponse:
        "Subject: Thanks for Today, and a Reminder That You Are Not on Your Own\n\nHi everyone,\n\nThank you for giving the new system a go today. I know it was a lot to take in, and I want you to know that nobody expects you to have it all figured out.\n\nLearning something new takes time, and it is completely normal to feel frustrated or uncertain for the first few weeks. That is not a sign that you are struggling; it is a sign that you are learning.\n\nIf you need help, I am here. Drop me a message, book a 15-minute slot, or just grab me for a coffee. There is no such thing as a silly question.\n\nYou have got this, and you do not have to do it alone.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm, personal, and normalises the learning curve. It offers multiple ways to access support without making anyone feel singled out. Tom would send this word for word.",
          observation:
            "You avoided corporate language and spoke directly to the reader as a person. 'There is no such thing as a silly question' is exactly the reassurance a supportive communicator would offer.",
          coachingTip:
            "When writing for supportive communicators, use 'you' more than 'we' and make the offer of help feel personal rather than procedural.",
          styleContext:
            "Supportive communicators measure the success of training by how safe people feel asking for help afterwards. The follow-up email is as important as the session itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but your email may be too formal or too focused on the system rather than the people. Check whether it reads as a reassurance or as a summary of what was covered.",
          observation:
            "If your email lists the features demonstrated today rather than acknowledging how people felt, it has missed Tom's brief.",
          coachingTip:
            "Mention the system only in the context of how it connects to people's experience. The email should be about them, not the software.",
          styleContext:
            "Supportive communicators write follow-ups that say 'I see you and I am here' rather than 'here is what we covered'. The content is secondary to the connection.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email reads as a corporate training follow-up rather than a personal message. It may include phrases like 'please ensure you complete the online modules by Friday' or 'adoption rates will be reviewed monthly'.",
          observation:
            "If your email includes deadlines, compliance language, or performance expectations, it will undo the safe space Tom created in the session.",
          coachingTip:
            "Delete any sentence that a training department would write. Replace it with something a trusted colleague would say. That is the voice Tom wants.",
          styleContext:
            "Supportive communicators believe that pressure kills learning. If the follow-up email feels like a deadline, people will associate the new system with stress rather than support.",
        },
      },
    },
  },

  // Scenario 128 - Leah Morgan, presentation, intermediate
  {
    id: "scenario-128",
    title: "Competitive Analysis for Leadership",
    context:
      "You are in a leadership meeting where Leah is presenting a competitive analysis. Several competitors have gained market share, and the leadership team is tense about the findings.",
    chooseContext:
      "A senior leader has reacted defensively to the data, suggesting the competitors are only winning because they are undercutting on price. Leah is responding.",
    rewriteContext:
      "Leah has asked you to write a one-page summary of the competitive analysis that she can share with the wider leadership team, framing it constructively rather than alarmingly.",
    characterId: "leah-morgan",
    dialogue:
      "I want to be upfront: some of these findings are uncomfortable. But I think the best thing we can do is face them honestly and together. Our competitors are doing some things well, and understanding why does not mean we are failing. It means we are paying attention. Let me walk you through it, and I would really value your thoughts as we go.",
    chooseDialogue:
      "I understand why it feels that way, and price is definitely part of the picture. But I think if we look a bit deeper, there are some other factors at play too. I have spoken to a few of our clients who switched, and their feedback was really constructive. Shall I share what they said?",
    rewriteDialogue:
      "The summary needs to feel balanced. I do not want people to read it and panic, but I also do not want to sugarcoat the findings. Frame it as 'here is what we can learn' rather than 'here is where we are losing'. Make it feel like a conversation starter, not a verdict.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Leah has opened a competitive analysis by acknowledging the findings are uncomfortable, framing the exercise as a collective learning opportunity, and inviting input throughout. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with transparency about the difficulty of the findings, reframes the analysis as a shared learning exercise, and invites collaboration. She is managing the room's emotions while delivering honest information.",
          observation:
            "Notice how Leah says 'face them honestly and together'. The word 'together' is doing significant work; it signals that this is a collective challenge, not an individual failing.",
          coachingTip:
            "When a presenter acknowledges discomfort, uses inclusive language, and invites input, they are signalling a supportive style. They prioritise the relationship over the information.",
          styleContext:
            "Supportive communicators deliver difficult findings by creating a sense of shared ownership. Nobody feels blamed, and everyone feels involved in the response.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah's warmth and openness could seem expressive. But notice she is not trying to reframe the findings as exciting or generate enthusiasm. She is creating a safe space for honest discussion, which is distinctly supportive.",
          observation:
            "An expressive communicator would turn the competitive threat into a rallying cry. Leah is inviting a calm, collaborative conversation instead.",
          coachingTip:
            "If someone creates space for difficult emotions and invites collective processing, that is supportive. If they try to shift the energy towards excitement, that is expressive.",
          styleContext:
            "Supportive communicators in leadership settings believe that psychological safety enables better strategic thinking. They lower defences before sharing challenging data.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not jumped straight to actions, demanded accountability, or presented the data without emotional context. Her approach is relationship-first, which rules out direct and analytical styles.",
          observation:
            "There is no urgency, no blame, and no request for immediate decisions. Leah is creating conditions for good thinking, not pushing for rapid action.",
          coachingTip:
            "Ask yourself: is this person more concerned with how the room feels or with what the room decides? Leah is clearly concerned with how people feel about the data before asking them to act on it.",
          styleContext:
            "Supportive communicators believe that decisions made under emotional stress are poor decisions. They invest time in emotional readiness to improve the quality of strategic thinking.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior leader has responded defensively, suggesting competitors are only winning on price. Leah has gently suggested other factors may be at play. How do you support the conversation?",
      options: [
        {
          id: "s128-opt-a",
          text: "That is a fair point about price. And Leah, the client feedback you mentioned sounds really valuable. I think hearing directly from clients who switched could help us understand the full picture. Would the room be comfortable hearing some of those quotes?",
          score: 10,
          result: "strong",
          explanation:
            "You have validated the senior leader's point while steering the conversation towards Leah's client feedback. Asking whether the room is 'comfortable' mirrors Leah's supportive approach of checking in before proceeding.",
        },
        {
          id: "s128-opt-b",
          text: "Actually, our pricing analysis shows that competitors are only 3 to 5 per cent cheaper on average. The real differentiator is their onboarding speed, which is something we can fix. Let me pull up the data.",
          score: 5,
          result: "partial",
          explanation:
            "Accurate and useful, but 'actually' at the start directly contradicts the senior leader, which could escalate defensiveness. Leah was carefully managing the emotional temperature; this cools it too abruptly.",
        },
        {
          id: "s128-opt-c",
          text: "We need to stop making excuses. The data is clear: we are losing share because we have not invested in product development for two years. Blaming price is easier than admitting we have fallen behind.",
          score: 0,
          result: "weak",
          explanation:
            "This is confrontational and blame-heavy. It directly attacks the senior leader's position and ignores the safe space Leah has been carefully building. It will shut down open dialogue.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a one-page competitive analysis summary that feels constructive rather than alarming. Frame it as 'what we can learn' rather than 'where we are losing'.",
      targetTraits: ["balanced-tone", "learning-framed", "non-blaming", "collaborative-language"],
      exampleStrongResponse:
        "Competitive Landscape: What We Can Learn\n\nOur analysis of key competitors over the past twelve months has revealed several insights that can help us strengthen our position.\n\nCustomer onboarding: Two competitors have reduced their onboarding time to under five days. Clients who switched cited speed of setup as a key factor. There is an opportunity for us to review our own onboarding process with fresh eyes.\n\nProduct experience: Competitor B has introduced a self-service dashboard that clients value highly. Our product team may find it useful to explore similar functionality.\n\nPricing: Our pricing remains competitive overall, though some clients perceive greater value elsewhere. Understanding what 'value' means to different segments could be a worthwhile exercise.\n\nThis analysis is intended as a starting point for conversation, not a conclusion. I would welcome input from across the leadership team on where we see the greatest opportunities.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is balanced, constructive, and uses language like 'opportunity' and 'worthwhile exercise' rather than 'failure' or 'problem'. Leah would share this confidently.",
          observation:
            "You framed each finding as something to explore rather than something to fix. This invites curiosity rather than defensiveness.",
          coachingTip:
            "When writing for supportive communicators, use phrases like 'there is an opportunity to' and 'it could be worthwhile to explore'. These create space for engagement without creating pressure.",
          styleContext:
            "Supportive communicators present competitive analysis as a tool for growth, not as evidence of failure. The language determines whether leaders engage or withdraw.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but your summary may include language that feels more critical than constructive. Check whether each finding is framed as a learning opportunity.",
          observation:
            "If any section reads as 'we are behind on X' rather than 'there is an opportunity in X', it may trigger the defensiveness Leah wants to avoid.",
          coachingTip:
            "Replace every problem statement with an opportunity statement. 'We are slow at onboarding' becomes 'There is an opportunity to explore faster onboarding approaches'.",
          styleContext:
            "Supportive communicators believe that how you frame a problem determines whether people engage with it or resist it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either reads as a harsh critique, lists failures without framing, or uses alarming language that will put leadership on the defensive.",
          observation:
            "If your summary includes phrases like 'we are significantly behind', 'our market position is eroding', or 'urgent action is required', it contradicts Leah's brief entirely.",
          coachingTip:
            "Rewrite the summary as if you were writing to a friend whose business you wanted to help, not a failing company you were auditing. Warmth and honesty can coexist.",
          styleContext:
            "Supportive communicators believe that alarming people into action is counterproductive. Sustainable change comes from understanding, not from fear.",
        },
      },
    },
  },

  // Scenario 129 - David Chen, presentation, advanced
  {
    id: "scenario-129",
    title: "Client Case Study at a Conference",
    context:
      "You are at an industry conference where David is presenting a client case study. The case involves a sensitive transformation project, and the client is in the audience. David is balancing transparency with discretion.",
    chooseContext:
      "An audience member has asked a pointed question about what went wrong during the project. David is aware that the client, sitting in the front row, is watching his response closely.",
    rewriteContext:
      "David has asked you to write the closing remarks for the case study presentation, thanking the client and summarising the journey in a way that honours both the challenges and the achievements.",
    characterId: "david-chen",
    dialogue:
      "Before I begin, I want to acknowledge that the client is here with us today, and I am grateful for their trust in allowing us to share this story. Transformation is never smooth, and this project was no exception. What made it work was not the methodology or the technology. It was the relationship, the willingness on both sides to be honest when things got difficult and to keep going when it would have been easier to stop.",
    chooseDialogue:
      "That is a great question, and I want to answer it carefully because the client is here and their trust matters to me. Yes, there were moments when the project was at risk. What I can say is that every time we hit a wall, we had an honest conversation about it, and that honesty is what kept us on track.",
    rewriteDialogue:
      "The closing needs to feel genuine. I want the client to hear it and feel proud, not exposed. Acknowledge the difficulty, celebrate the outcome, and thank them in a way that feels personal rather than performative. They trusted us with their story; the least we can do is handle it with care.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David has opened a conference case study by thanking the client for their trust, acknowledging that transformation is never smooth, and attributing success to the relationship rather than the methodology. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads with gratitude, acknowledges vulnerability, and centres the relationship as the key success factor. He is acutely aware of the client's presence and prioritises their comfort over his own performance.",
          observation:
            "Notice how David says 'their trust matters to me'. This personal, relational language is a hallmark of supportive communication. The focus is on the bond, not the achievement.",
          coachingTip:
            "When a presenter attributes project success to the relationship rather than the method, and shows visible concern for how their words affect someone in the room, they are communicating supportively.",
          styleContext:
            "Supportive communicators in public settings are always aware of who might be affected by what they say. They will sacrifice a great story to protect a real relationship.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's storytelling and emotional warmth could look expressive. But notice he is not trying to create a dramatic narrative or generate energy. He is carefully managing trust and discretion, which is a supportive concern.",
          observation:
            "An expressive communicator would lean into the drama of the transformation journey. David is deliberately underplaying it out of respect for the client.",
          coachingTip:
            "If someone holds back a better story to protect a relationship, that is supportive. If they tell the best possible story to captivate the audience, that is expressive.",
          styleContext:
            "Supportive communicators will always choose trust over impact. They would rather give a quieter presentation than risk making someone uncomfortable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented project metrics, timelines, or methodologies. His opening is entirely about the human elements of the engagement: trust, honesty, and perseverance.",
          observation:
            "There are no KPIs, no process diagrams, and no ROI figures. David's presentation is about people and relationships, not systems and outcomes.",
          coachingTip:
            "Ask yourself: what is this presenter most proud of? David is most proud of the relationship, not the results. That tells you his style is supportive.",
          styleContext:
            "Supportive communicators measure project success by the quality of the relationships that survived it. The deliverables matter, but the trust matters more.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "An audience member has asked what went wrong during the project. The client is in the front row. David has answered carefully, emphasising honest conversations. How do you contribute?",
      options: [
        {
          id: "s129-opt-a",
          text: "I would add that the moments that went wrong were actually the moments that strengthened the partnership. The client's willingness to have those difficult conversations early meant we could course-correct before small issues became big ones. That kind of openness is rare and valuable.",
          score: 10,
          result: "strong",
          explanation:
            "You have reframed the difficulties as a strength of the relationship, honoured the client's courage, and kept the tone respectful and genuine. This extends David's supportive approach perfectly.",
        },
        {
          id: "s129-opt-b",
          text: "Specifically, the biggest risk was a data migration that ran three weeks behind schedule. We resolved it by bringing in additional resource and running a parallel workstream. The project still delivered on time.",
          score: 5,
          result: "partial",
          explanation:
            "Factually useful, but David deliberately avoided specifics to protect the client. Naming a three-week delay in front of the client audience may make them uncomfortable, even if the outcome was positive.",
        },
        {
          id: "s129-opt-c",
          text: "Honestly, the biggest issue was that the client's internal stakeholders kept changing requirements. We managed it, but it would have gone much more smoothly if expectations had been set properly from the start.",
          score: 0,
          result: "weak",
          explanation:
            "This puts blame on the client while they are sitting in the audience. It directly violates the trust David has been carefully protecting and would damage the relationship he values most.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write closing remarks for the conference case study that thank the client, honour the challenges and achievements, and feel genuine rather than performative.",
      targetTraits: ["genuine-gratitude", "honours-challenges", "celebrates-relationship", "personal-tone"],
      exampleStrongResponse:
        "I want to close by saying something to our client directly. Thank you. Not just for the results we achieved together, but for the trust you placed in us when things were uncertain. There were moments in this project when the easy thing would have been to step back, and you did not. You leaned in, you challenged us, and you made the work better because of it.\n\nThis case study is not really about a transformation project. It is about what becomes possible when two organisations choose to be honest with each other, even when that honesty is uncomfortable. I am proud of what we built together, and I am grateful you allowed us to share the story.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing speaks directly to the client, acknowledges the difficulty without exposing specifics, and celebrates the relationship as the real achievement. David would deliver this with visible emotion.",
          observation:
            "You addressed the client directly, which creates an intimate moment in a public setting. This is brave and genuine, exactly what David asked for.",
          coachingTip:
            "When writing for supportive communicators in public settings, create moments of direct, personal connection. Speaking to someone in the room rather than about them transforms a presentation into a relationship moment.",
          styleContext:
            "Supportive communicators view public presentations as opportunities to strengthen relationships, not just to share information. The audience sees a case study; the client sees a partner who values them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but your closing may feel too generic or too focused on the outcomes rather than the relationship. Check whether it speaks to the client personally or about the project generally.",
          observation:
            "If your closing thanks 'the client team' rather than addressing them directly, it feels corporate rather than personal.",
          coachingTip:
            "Try addressing the client directly in at least one sentence. 'Thank you' spoken to someone is more powerful than 'we would like to thank' spoken about them.",
          styleContext:
            "Supportive communicators believe that the most meaningful moments in public speaking are the personal ones. A direct 'thank you' to someone in the room carries more weight than a polished paragraph about partnership.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing either reads as a standard conference wrap-up, focuses on metrics and outcomes, or fails to acknowledge the client's contribution personally.",
          observation:
            "If your closing says 'the project delivered a 30 per cent efficiency improvement and came in under budget', you have summarised the deliverables, not honoured the relationship.",
          coachingTip:
            "Delete any sentence about outcomes and replace it with a sentence about the people. David does not want a scorecard; he wants a tribute.",
          styleContext:
            "Supportive communicators close presentations by honouring the people who made the work possible. If the closing feels like a project summary, it has missed the point.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (130-132)
  // ============================================

  // Scenario 130 - Rachel Finch, presentation, foundation
  {
    id: "scenario-130",
    title: "Presenting the Restructuring Plan",
    context:
      "You are in a town hall meeting where Rachel is presenting a restructuring plan to the teams that will be directly affected. She has prepared a detailed breakdown of the changes, the rationale, and the timeline.",
    chooseContext:
      "A team member has asked how the decision was reached, suggesting it feels arbitrary. Rachel is responding with the methodology behind the restructure.",
    rewriteContext:
      "Rachel has asked you to write a Q&A document that answers the ten most likely questions from affected employees, using clear, factual language.",
    characterId: "rachel-finch",
    dialogue:
      "I want to walk you through exactly how we arrived at this plan. We analysed headcount against workload data for each function over the past eighteen months. We mapped every role against our strategic priorities for the next three years. And we benchmarked our structure against four comparable organisations in our sector. The result is a plan based on evidence, not assumption.",
    chooseDialogue:
      "I understand why it might feel arbitrary, so let me show you the methodology. We used a three-factor model: workload volume, strategic alignment, and capability coverage. Each function was scored against all three. The functions with the lowest combined scores are the ones being consolidated. Here are the scores.",
    rewriteDialogue:
      "The Q&A needs to be precise. People will be anxious and they deserve clear, factual answers. Do not use vague phrases like 'we are exploring options'. If we know the answer, state it. If we do not, say 'this will be confirmed by' and give a date.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has opened a restructuring presentation by walking through the methodology, citing eighteen months of workload data, strategic mapping, and sector benchmarking. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel leads with methodology, data, and evidence. She explicitly states that the plan is 'based on evidence, not assumption', which is a defining analytical trait. Every element of her opening is designed to demonstrate rigour.",
          observation:
            "Notice how Rachel names her data sources and timeframes (eighteen months, three years, four organisations). She is building credibility through transparency of method.",
          coachingTip:
            "When a presenter opens by explaining how they reached a conclusion rather than what the conclusion is, they are signalling an analytical style. The method matters as much as the outcome.",
          styleContext:
            "Analytical communicators believe that trust in a decision comes from trust in the process that produced it. They show their working before showing their answer.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel's clarity and decisiveness could look direct. But notice she is not pushing for immediate action or demanding agreement. She is building a case through evidence, inviting the audience to follow her logic.",
          observation:
            "A direct communicator would state the restructure plan and move to implementation. Rachel spends time explaining why the plan is structured this way.",
          coachingTip:
            "If someone explains the reasoning behind a decision to build confidence, that is analytical. If they state the decision and expect compliance, that is direct.",
          styleContext:
            "Analytical communicators earn buy-in through evidence. Direct communicators earn buy-in through conviction. Rachel is showing her evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not checked in on how people are feeling, nor has she tried to reframe the restructure as an exciting opportunity. Her presentation is entirely methodological.",
          observation:
            "There is no emotional language, no vision for the future, and no invitation to share feelings. Rachel is presenting a process, not managing a mood.",
          coachingTip:
            "Ask yourself: is this person leading with data or with people? Rachel is leading with data. The human impact is acknowledged through factual transparency, not through emotional connection.",
          styleContext:
            "Analytical communicators believe that the most respectful thing you can do in a restructure is show people the evidence. They treat transparency as a form of care.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has said the restructuring feels arbitrary. Rachel has explained the three-factor scoring model. How do you respond?",
      options: [
        {
          id: "s130-opt-a",
          text: "Rachel, would it be helpful to share the scoring criteria and weightings with the team? If people can see how each function was assessed, it might address concerns about fairness. I can prepare a summary document with the methodology by tomorrow.",
          score: 10,
          result: "strong",
          explanation:
            "You have supported Rachel's evidence-based approach by offering to make the methodology even more transparent. Proposing a documented summary with a specific timeline matches her analytical style perfectly.",
        },
        {
          id: "s130-opt-b",
          text: "I think what people really need to hear right now is that their jobs are safe, or at least understand what support is available if they are affected. Can we address the human side of this?",
          score: 5,
          result: "partial",
          explanation:
            "A valid concern, but Rachel has deliberately chosen to address the 'arbitrary' challenge with evidence and methodology. Shifting to the emotional dimension now may feel like avoiding the question that was asked.",
        },
        {
          id: "s130-opt-c",
          text: "Honestly, the restructure makes strategic sense and the leadership team is fully behind it. Rather than getting into the weeds of scoring models, we should focus on implementation and moving forward.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses both the team member's concern and Rachel's methodological approach. Rachel chose to show the working precisely because she believes transparency builds trust. Skipping it undermines her strategy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a Q&A document answering the ten most likely restructuring questions. Use clear, factual language. State what is known and give dates for what is not yet confirmed.",
      targetTraits: ["precise-language", "factual", "no-hedging", "dates-for-unknowns"],
      exampleStrongResponse:
        "Restructuring Q&A\n\n1. Why is the restructure happening?\nWorkload analysis over the past eighteen months showed that three functions are operating at below 60 per cent capacity, while two are consistently above 110 per cent. The restructure rebalances resources to match actual demand.\n\n2. How were the affected functions identified?\nEach function was scored against three criteria: workload volume, strategic alignment, and capability coverage. Functions with the lowest combined scores were selected for consolidation.\n\n3. Will there be redundancies?\nSome roles will be consolidated. Affected individuals will be notified by 28 March and will enter a formal consultation period of 30 days.\n\n4. What support is available?\nAll affected employees will have access to one-to-one career coaching, CV support, and internal redeployment opportunities. Details will be shared by 1 April.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your Q&A is precise, factual, and avoids hedging. Each answer gives specific information, and where details are pending, you have provided a date. Rachel would approve this for distribution.",
          observation:
            "You used specific numbers and dates rather than vague reassurances. This is exactly the kind of transparency an analytical communicator values.",
          coachingTip:
            "When writing for analytical communicators, treat every vague phrase as a gap to fill. 'Soon' becomes a date. 'Some' becomes a number. Precision is a form of respect.",
          styleContext:
            "Analytical communicators believe that vague answers to important questions are worse than honest uncertainty. Saying 'this will be confirmed by 28 March' is more reassuring than saying 'we are working on it'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but some answers may include hedging language or lack specific dates. Check whether every answer is as precise as it could be.",
          observation:
            "If any answer says 'we hope to have clarity soon' or 'we are exploring options', it falls short of Rachel's standard. Replace it with a date or a specific commitment.",
          coachingTip:
            "For each answer, ask: could someone act on this information today? If not, it is too vague for an analytical communicator.",
          styleContext:
            "Analytical communicators test communication quality by asking whether it reduces uncertainty. If a Q&A leaves people with the same questions they started with, it has failed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your Q&A either uses vague language, avoids answering directly, or includes emotional reassurances instead of factual responses.",
          observation:
            "If any answer says 'we understand this is a difficult time and we are committed to supporting everyone through the transition', it is a sentiment, not an answer. Rachel wants facts.",
          coachingTip:
            "Rewrite every answer as if you were answering a factual query in a court of law. What do you know, what do you not know, and when will you know it? That is what Rachel expects.",
          styleContext:
            "Analytical communicators view emotional language in factual documents as evasion. If someone asks 'will there be redundancies?' they want a clear answer, not a hug.",
        },
      },
    },
  },

  // Scenario 131 - Owen Grant, presentation, intermediate
  {
    id: "scenario-131",
    title: "Technical Architecture Review",
    context:
      "You are in a technical review meeting where Owen is presenting the proposed architecture for a new platform to a panel of engineers and the CTO. The architecture involves trade-offs that Owen wants to be fully transparent about.",
    chooseContext:
      "The CTO has asked Owen whether the proposed architecture can handle ten times the current load. Owen is responding with benchmarking data and stress-test results.",
    rewriteContext:
      "Owen has asked you to write a technical decision document that records the architecture choices, the alternatives considered, and the rationale for each decision.",
    characterId: "owen-grant",
    dialogue:
      "I want to be upfront about the trade-offs in this architecture. We evaluated three approaches: microservices, modular monolith, and event-driven. I have prepared a comparison matrix covering scalability, operational complexity, team capability, and cost. Each approach scores differently depending on which criteria you prioritise. Let me walk you through the data and then we can discuss which trade-offs the organisation is most comfortable accepting.",
    chooseDialogue:
      "Good question. Our stress tests simulated up to fifteen times current load. The architecture handles ten times comfortably with current provisioning. Beyond that, we would need to add two additional processing nodes, which adds approximately 8,000 pounds per month in infrastructure cost. I have the full benchmark report here if you want the detail.",
    rewriteDialogue:
      "The decision document needs to be thorough. Anyone reading it in twelve months should be able to understand not just what we chose, but why we chose it and what we explicitly decided against. Include the alternatives, the evaluation criteria, and the data that informed each decision.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has opened a technical architecture review by disclosing trade-offs upfront, presenting a comparison matrix across four criteria, and inviting the group to discuss which trade-offs are acceptable. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen leads with transparency about trade-offs, presents a structured comparison across multiple criteria, and frames the decision as data-dependent rather than opinion-driven. This is analytical communication at its most rigorous.",
          observation:
            "Notice how Owen does not recommend an approach. He presents the data and invites the group to decide based on their priorities. This neutrality is a defining analytical trait.",
          coachingTip:
            "When a presenter shows multiple options with structured evaluation criteria and defers the final decision to the group's priorities, they are communicating analytically. They trust the data to guide the choice.",
          styleContext:
            "Analytical communicators believe that the best decisions come from transparent evaluation of trade-offs. They present the evidence and let the group apply their own judgement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen's clarity and structure could look direct. But notice he is not advocating for a particular approach. A direct communicator would state their recommendation and defend it. Owen is presenting options and letting the data guide the conversation.",
          observation:
            "A direct communicator would say 'we should go with microservices because it scales better'. Owen says 'here are three options, here is how they compare, you decide'.",
          coachingTip:
            "If someone presents options with equal weight and lets the audience decide, that is analytical. If someone advocates for one option and expects agreement, that is direct.",
          styleContext:
            "Analytical communicators separate the presentation of evidence from the act of decision-making. Direct communicators combine them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not tried to build excitement about the architecture, nor has he checked in on how the team feels about the complexity. His presentation is entirely methodological and evidence-based.",
          observation:
            "There is no narrative, no emotional framing, and no relationship-building. Owen is presenting data and trade-offs in a structured, neutral manner.",
          coachingTip:
            "Ask yourself: is this person more interested in being right or in being thorough? Owen is interested in being thorough. He would rather show all the options than push one answer.",
          styleContext:
            "Analytical communicators in technical settings believe that incomplete analysis leads to poor architecture decisions. They would rather slow down and be thorough than rush to a conclusion.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The CTO has asked whether the architecture handles ten times current load. Owen has provided stress-test data showing it does, with additional costs beyond that threshold. How do you contribute?",
      options: [
        {
          id: "s131-opt-a",
          text: "Owen, could you also share the latency metrics at each load level? I would like to understand whether the user experience degrades gradually or whether there is a cliff edge at a particular threshold. That would help us set realistic SLAs.",
          score: 10,
          result: "strong",
          explanation:
            "You have asked a precisely scoped follow-up question that deepens the technical analysis and connects it to a practical outcome (SLA setting). This mirrors Owen's thorough, evidence-based approach.",
        },
        {
          id: "s131-opt-b",
          text: "Ten times sounds good enough for now. Let us move on to the deployment strategy.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic, but Owen has deliberately created space for detailed examination. Moving on too quickly signals that you do not value the depth of analysis he has prepared.",
        },
        {
          id: "s131-opt-c",
          text: "I think we are overcomplicating this. We should just go with the approach that most of the team is already familiar with. The learning curve matters more than the benchmarks.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Owen's entire evaluation framework in favour of a single criterion (familiarity). He has already included team capability in his comparison matrix; reducing the decision to one factor contradicts his analytical approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a technical decision document recording architecture choices, alternatives considered, and the rationale for each decision. It should be understandable to someone reading it in twelve months.",
      targetTraits: ["thorough", "alternatives-documented", "criteria-explicit", "rationale-clear"],
      exampleStrongResponse:
        "Architecture Decision Record: Platform Infrastructure\n\nDecision: Modular monolith with event-driven integration for high-throughput components.\n\nAlternatives considered:\n1. Full microservices: Scored highest on scalability (9/10) but lowest on operational complexity (4/10) and team capability (5/10). Rejected due to current team size and operational maturity.\n2. Event-driven throughout: Strong scalability (8/10) but introduced debugging complexity that the team flagged as a significant risk. Cost was 40 per cent higher than the chosen approach.\n3. Modular monolith with event-driven integration (selected): Balanced scalability (7/10), operational simplicity (8/10), team capability (8/10), and cost (7/10). Provides a migration path to full microservices if demand exceeds projections.\n\nKey trade-off: We accepted slightly lower peak scalability in exchange for operational simplicity and faster time to market. This trade-off should be revisited if transaction volume exceeds 10x current baseline.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your decision document records not just what was chosen, but what was rejected and why. The scoring, trade-off acknowledgement, and revisit trigger are exactly what Owen expects.",
          observation:
            "You included a clear statement of the key trade-off and a condition for revisiting the decision. This shows analytical maturity.",
          coachingTip:
            "When writing for analytical communicators, always document the alternatives you rejected and why. Future readers need to understand the full decision landscape, not just the final choice.",
          styleContext:
            "Analytical communicators believe that undocumented decisions are unreviewable decisions. If someone cannot reconstruct your reasoning, the decision record has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but your document may lack the alternatives analysis or the scoring detail Owen expects. Check whether someone unfamiliar with the project could understand why you rejected each option.",
          observation:
            "If your document only describes the chosen approach without explaining what was considered and rejected, it is incomplete by Owen's standards.",
          coachingTip:
            "For each alternative, include what it scored well on, what it scored poorly on, and why it was ultimately rejected. This creates a complete picture.",
          styleContext:
            "Analytical communicators test decision documents by asking: could someone disagree with this decision using only the information provided? If yes, the document is honest. If no, it is advocacy disguised as analysis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document either lacks alternatives, omits scoring criteria, or reads as a justification for a pre-made decision rather than a transparent record of evaluation.",
          observation:
            "If your document says 'we chose microservices because it is the industry standard', you have offered an assertion, not an analysis. Owen wants evidence, not opinion.",
          coachingTip:
            "Rewrite the document by starting with the question that was asked, listing every option considered, and showing your scoring for each. The recommendation should emerge from the data, not precede it.",
          styleContext:
            "Analytical communicators view decision documents as institutional memory. If the document does not record the full evaluation, the organisation will repeat the same analysis next time instead of building on it.",
        },
      },
    },
  },

  // Scenario 132 - Fiona Banks, presentation, advanced
  {
    id: "scenario-132",
    title: "Presenting Survey Results to the Whole Company",
    context:
      "You are at a company-wide all-hands meeting where Fiona is presenting the results of the annual employee engagement survey. The results are mixed, with strong scores in some areas and significant declines in others.",
    chooseContext:
      "A manager has challenged one of the survey findings, arguing that the questions were poorly worded and the results do not reflect reality. Fiona is responding.",
    rewriteContext:
      "Fiona has asked you to write a company-wide email summarising the key survey findings and next steps, maintaining the same rigour and transparency she used in the presentation.",
    characterId: "fiona-banks",
    dialogue:
      "I want to present these results with full transparency. The overall engagement score is 71 per cent, which is 4 points above the sector benchmark but 3 points below last year. Rather than celebrate the benchmark comparison or worry about the year-on-year decline, I think we should look at both in context. I have broken the results down by function, tenure, and seniority so we can see where the patterns actually are.",
    chooseDialogue:
      "That is a fair challenge, and I appreciate you raising it. The survey methodology was reviewed by an external firm before deployment, and we used validated question scales that are consistent across our sector. However, I do take your point about wording. If you can identify specific questions you believe were ambiguous, I will include that feedback in the methodology review for next year's survey. The data stands, but the instrument can always be improved.",
    rewriteDialogue:
      "The email needs to present the data honestly. Share the headline score, the benchmark comparison, and the year-on-year change. Then break it down by the three areas with the strongest scores and the three with the most significant declines. End with the concrete next steps and the timeline for follow-up. No spin in either direction.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has opened an engagement survey presentation by sharing the headline score with benchmark and year-on-year context, refusing to spin the results in either direction, and offering a multi-dimensional breakdown. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona presents the data with full context, refuses to cherry-pick positive or negative narratives, and offers a granular breakdown to enable accurate interpretation. This is analytical communication at its most disciplined.",
          observation:
            "Notice how Fiona explicitly warns against both celebrating and worrying prematurely. She wants the audience to understand the data before they react to it. This is a signature analytical trait.",
          coachingTip:
            "When a presenter resists the urge to spin data and instead offers multiple lenses for interpretation, they are communicating analytically. They trust the audience to draw conclusions from good data.",
          styleContext:
            "Analytical communicators believe that presenting data honestly is more important than presenting it favourably. They would rather share an uncomfortable truth than a comfortable distortion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona's directness about the decline could look like a direct style. But notice she is not pushing for action or demanding change. She is creating conditions for informed interpretation, which is analytical.",
          observation:
            "A direct communicator would highlight the decline and demand a fix. Fiona says 'let us look at both in context', which is an invitation to analyse rather than a call to act.",
          coachingTip:
            "If someone presents data and says 'let us understand this before we react', that is analytical. If they present data and say 'here is what we need to do about it', that is direct.",
          styleContext:
            "Analytical communicators separate data presentation from action planning. They believe that premature action based on incomplete understanding causes more harm than patient analysis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not acknowledged how employees might feel about the results, nor has she tried to generate excitement about the strong scores. Her approach is entirely evidence-focused.",
          observation:
            "There is no empathy, no storytelling, and no attempt to manage emotions. Fiona is presenting numbers and inviting analysis.",
          coachingTip:
            "Ask yourself: is this person trying to help the audience feel something or understand something? Fiona is firmly focused on understanding.",
          styleContext:
            "Analytical communicators believe that emotions about data should follow understanding of data. They present the evidence first and let the response emerge naturally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A manager has challenged the survey results, arguing the questions were poorly worded. Fiona has defended the methodology while acknowledging the feedback is valid for future surveys. How do you contribute?",
      options: [
        {
          id: "s132-opt-a",
          text: "Fiona, would it be useful to publish the methodology note alongside the results? If people can see the validation process, the question design principles, and the benchmarking approach, it might address concerns about rigour before they arise.",
          score: 10,
          result: "strong",
          explanation:
            "You have proposed increasing transparency by sharing the methodology documentation, which directly supports Fiona's evidence-based approach and pre-empts future challenges.",
        },
        {
          id: "s132-opt-b",
          text: "I think the results speak for themselves. Rather than debating methodology, we should focus on what the data is telling us and what we are going to do about it.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic, but Fiona chose to engage with the methodology challenge thoughtfully rather than dismiss it. Shutting down the discussion with 'the results speak for themselves' is more direct than analytical.",
        },
        {
          id: "s132-opt-c",
          text: "I agree with the manager. Some of those questions were confusing, and I am not sure we can draw reliable conclusions from the data. Maybe we should re-run the survey with better questions before making any decisions.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines the entire presentation by questioning the data without evidence. Fiona has explained that the survey was externally validated. Suggesting a re-run based on a feeling contradicts her evidence-based approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a company-wide email summarising the engagement survey results with full transparency. Include the headline score with context, top three strengths, three areas of decline, and concrete next steps with a timeline.",
      targetTraits: ["data-transparent", "balanced-presentation", "concrete-next-steps", "no-spin"],
      exampleStrongResponse:
        "Subject: Employee Engagement Survey Results 2025\n\nThank you to the 84 per cent of you who completed this year's engagement survey. Here are the results, presented with full transparency.\n\nHeadline: Our overall engagement score is 71 per cent. This is 4 points above the sector benchmark of 67 per cent, but 3 points below last year's score of 74 per cent.\n\nStrongest areas:\n- Team collaboration: 82 per cent (up 5 points)\n- Manager support: 79 per cent (up 3 points)\n- Role clarity: 77 per cent (stable)\n\nAreas of decline:\n- Career development: 58 per cent (down 9 points)\n- Workload sustainability: 61 per cent (down 7 points)\n- Senior leadership visibility: 63 per cent (down 6 points)\n\nNext steps:\n- Detailed function-level results will be shared with each department head by 28 March.\n- Each function will hold a feedback session with their teams by 11 April.\n- An action plan addressing the three areas of decline will be published by 30 April.\n\nThe full methodology and raw data (anonymised) are available on the intranet for anyone who wants to explore the results in more detail.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email presents the data with full context, balances strengths against declines without spin, and provides a concrete timeline for follow-up. Fiona would send this as written.",
          observation:
            "You included the benchmark comparison and year-on-year change side by side, which allows readers to form their own interpretation. This is the kind of balanced presentation Fiona values.",
          coachingTip:
            "When writing for analytical communicators, present good and bad data with equal specificity. If you give precise scores for strengths but vague language for declines, the audience will notice the asymmetry.",
          styleContext:
            "Analytical communicators believe that trust in survey results depends on how honestly they are communicated. Selective presentation of data destroys credibility faster than bad results do.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but your email may emphasise the positives more than the negatives, or may lack the specific scores and dates Fiona expects. Check that both sides of the story have equal detail.",
          observation:
            "If your email celebrates the benchmark comparison in a full paragraph but summarises the declines in one sentence, it is unbalanced.",
          coachingTip:
            "Apply the same level of detail to every data point. If you give a percentage and a comparison for strengths, do the same for declines. Consistency signals integrity.",
          styleContext:
            "Analytical communicators judge communication integrity by its symmetry. If the good news is detailed and the bad news is vague, something is being hidden.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either spins the results positively, omits the areas of decline, or lacks the concrete next steps and timeline Fiona specified.",
          observation:
            "If your email opens with 'We are delighted to share that our engagement score exceeds the sector benchmark', you have started with spin. Fiona explicitly asked for no spin in either direction.",
          coachingTip:
            "Rewrite the email by imagining you are a journalist reporting on the results. Present the facts without advocacy. Let the data inform the reader without telling them how to feel about it.",
          styleContext:
            "Analytical communicators believe that the moment you spin survey data, you lose the trust of the people who completed it. Honesty is the only acceptable approach.",
        },
      },
    },
  },
];
