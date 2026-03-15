import { Scenario } from "@/types";

export const SCENARIOS_PART23: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (265-267) - conflict
  // ============================================

  // Scenario 265 - Jordan Cole, conflict, foundation
  {
    id: "scenario-265",
    title: "The Budget Dispute",
    context:
      "Two department heads are arguing over a shared budget allocation for the next quarter. Jordan has been asked to mediate the dispute because the deadlock is delaying project approvals. You are attending as the finance coordinator.",
    chooseContext:
      "Jordan has heard both sides and is now pushing for a resolution. One department wants 60% of the shared budget for a product launch, the other insists on a 50/50 split for ongoing operations.",
    rewriteContext:
      "Jordan has asked you to write a summary email to both department heads confirming the agreed budget split and the conditions attached to it.",
    characterId: "jordan-cole",
    dialogue:
      "We are not leaving this room without a decision. Both of you have had three weeks to sort this out and you have not. I have read both proposals. One is stronger. Let me walk you through what I have decided and why.",
    chooseDialogue:
      "The product launch gets 55%. Operations gets 45% with a guaranteed carry-over of any unspent funds into Q3. That is the deal. If either of you wants to challenge it, bring me a one-page case by end of day. Otherwise, we are done.",
    rewriteDialogue:
      "Send them both the summary today. Budget split, conditions, deadlines. No room for interpretation. If either side emails back with a different version of what we agreed, I want it in writing so I can shut it down immediately.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has taken charge of a budget dispute by stating that no one leaves without a decision and announcing a ruling based on the proposals submitted. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan sets a hard boundary on the meeting outcome, takes ownership of the decision, and removes ambiguity by announcing the resolution. This is textbook direct communication.",
          observation:
            "Notice how Jordan frames the conflict as a failure of decisiveness rather than a failure of understanding. The assumption is that both sides know enough - they just need someone to make the call.",
          coachingTip:
            "When a mediator opens by demanding a resolution and signalling they will impose one if needed, they are operating in a direct style. Respond with concise, position-based statements.",
          styleContext:
            "Direct communicators see prolonged conflict as a symptom of indecision. They resolve it by imposing clarity and moving on.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan has reviewed proposals, which can look analytical. But notice that the emphasis is on reaching a fast resolution, not on a thorough comparative analysis.",
          observation:
            "An analytical mediator would walk through each proposal line by line, scoring them against criteria. Jordan summarises and decides.",
          coachingTip:
            "If someone reads proposals to make a quick decision, that is direct. If they read proposals to build a detailed evaluation framework, that is analytical.",
          styleContext:
            "Direct communicators use information to support decisions. Analytical communicators use information to build understanding before deciding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not explored how either party feels, has not sought common ground through dialogue, and has not tried to preserve the relationship between the two departments.",
          observation:
            "There is no empathy, no exploration of underlying needs, and no invitation for emotional expression. Jordan treats this as a task to resolve, not a relationship to repair.",
          coachingTip:
            "Ask yourself: is this person trying to understand or trying to resolve? Jordan wants the conflict over, not understood.",
          styleContext:
            "Direct communicators believe the best way to fix a relationship is to remove the source of friction. The decision is the relationship repair.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has announced a 55/45 budget split with conditions and given both sides until end of day to challenge it in writing. How do you respond?",
      options: [
        {
          id: "s265-opt-a",
          text: "Clear. I will draft the summary email now with the exact figures and conditions so both sides have a single reference document by close of business.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Jordan's pace by immediately turning the decision into action. No debate, no second-guessing - just execution.",
        },
        {
          id: "s265-opt-b",
          text: "That seems fair, though I wonder if we should check in with both department heads privately first to make sure they feel heard before we formalise anything.",
          score: 5,
          result: "partial",
          explanation:
            "Thoughtful, but Jordan has already moved past the consultation phase. Suggesting more dialogue at this point risks being seen as stalling.",
        },
        {
          id: "s265-opt-c",
          text: "I am a bit uncomfortable with how quickly this has been decided. Both sides have valid concerns and I think we owe it to them to explore a few more options before locking anything in.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Jordan's approach. The decision has been made, and reopening the debate will frustrate a direct communicator who has already spent time reaching a conclusion.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to email both department heads confirming the budget split, conditions, and deadlines. Write it in a direct style with no ambiguity.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Budget Allocation - Q2 Confirmed\n\nFollowing today's meeting, here is the agreed allocation.\n\nProduct Launch: 55% of shared budget (confirmed figure to follow from finance by tomorrow).\nOperations: 45% with carry-over of unspent funds into Q3.\n\nConditions:\n1. Product launch spend is reviewed at the four-week mark. Any underspend is reallocated.\n2. Operations submits a revised forecast by Friday reflecting the 45% allocation.\n\nThis is final unless a written challenge is received by Jordan before 5pm today. No further meetings on this topic.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email states the decision, the conditions, and the deadline with no room for reinterpretation. Jordan would send this as written.",
          observation:
            "You included a clear closing statement that shuts down further debate. Direct communicators appreciate finality in written communications.",
          coachingTip:
            "When writing for direct communicators in conflict situations, end with a statement that closes the loop. No open-ended invitations for further discussion.",
          styleContext:
            "Direct communicators use emails as decision records, not conversation starters. The purpose is to confirm and close, not to invite further input.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email leaves any room for misinterpretation. Phrases like 'approximately' or 'we hope to' weaken the message.",
          observation:
            "If either department head could read your email and come away with a different understanding of the terms, it needs tightening.",
          coachingTip:
            "Read each sentence and ask: could someone argue this means something different? If yes, rewrite it with exact figures and dates.",
          styleContext:
            "Direct communicators know that vague agreements lead to repeat conflicts. Precision in writing prevents future disputes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too apologetic, or frames the decision as a suggestion rather than a conclusion. Jordan needs finality, not diplomacy.",
          observation:
            "If your email includes phrases like 'we appreciate everyone's patience' or 'we hope this feels fair', it has missed the purpose entirely.",
          coachingTip:
            "Strip out anything that softens the decision. The email should read like a contract, not a letter of understanding.",
          styleContext:
            "Direct communicators in conflict resolution want the written record to be bulletproof. Soft language creates openings for renegotiation.",
        },
      },
    },
  },

  // Scenario 266 - Sam Hartley, conflict, intermediate
  {
    id: "scenario-266",
    title: "The Process Ownership Clash",
    context:
      "Two team leads are both claiming ownership of the customer complaints process. Sam has been brought in by senior management to settle the dispute because it is causing delays in response times.",
    chooseContext:
      "Sam has reviewed the situation and both team leads are presenting their case. One argues that complaints should sit with customer service, the other says quality assurance should own them.",
    rewriteContext:
      "Sam has made a decision and asked you to draft a process document that assigns clear ownership, responsibilities, and escalation points.",
    characterId: "sam-hartley",
    dialogue:
      "This has been going back and forth for two months and our complaint response time has doubled. I do not care about territory. I care about the customer getting a response within 48 hours. One of you is going to own this. The other will support. I will decide based on who has the infrastructure to handle it today, not in six months.",
    chooseDialogue:
      "Customer service owns the process. You have the team, the systems, and the customer relationship. QA provides root cause analysis within five working days of each complaint closure. If either of you has a problem with that, tell me now, not in a month.",
    rewriteDialogue:
      "Write the process document. One page. Who owns what, who escalates to whom, and what the response timeframes are. If it does not fit on one page, it is too complicated.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Sam has intervened in a process ownership dispute by focusing on customer response times, dismissing territorial concerns, and committing to making the decision based on current capability. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam reframes the conflict around a measurable outcome, dismisses the political dimension, and signals a fast, capability-based decision. This is a direct communicator cutting through noise.",
          observation:
            "The phrase 'I do not care about territory' is a direct communicator's way of telling people to stop politicking and focus on results.",
          coachingTip:
            "When a mediator reframes a dispute around measurable outcomes and signals they will decide quickly, they are using a direct approach. Keep your contributions outcome-focused.",
          styleContext:
            "Direct communicators resolve territorial conflicts by making the decision for the parties involved. They see debate over ownership as wasted time when customers are affected.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam mentions infrastructure and capability, which sounds analytical. But Sam is not analysing these factors in depth - the assessment is already done and the decision is imminent.",
          observation:
            "An analytical mediator would request a detailed capability comparison, perhaps a RACI matrix, before deciding. Sam has already formed a view and is acting on it.",
          coachingTip:
            "Speed of assessment is the clue. Direct communicators gather just enough information to decide. Analytical communicators gather information until they are confident they have covered every angle.",
          styleContext:
            "Direct communicators treat conflict resolution as project management. Define the problem, assign ownership, set deadlines, move on.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not acknowledged how either team lead feels about losing control, has not explored the emotional dimensions of the turf war, and has not tried to build consensus.",
          observation:
            "There is no exploration of why each team lead feels ownership matters to them. Sam does not care about the 'why' behind the territorial behaviour - only the outcome.",
          coachingTip:
            "Ask yourself: is this person resolving the conflict or managing the people in it? Sam is resolving the conflict. The people management is secondary.",
          styleContext:
            "Direct communicators believe that clear decisions reduce conflict more effectively than empathetic conversations about feelings. Fix the structure and the relationships follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has assigned customer complaints to the customer service team with QA providing root cause analysis. You are the QA team lead. How do you respond?",
      options: [
        {
          id: "s266-opt-a",
          text: "Understood. We will set up a five-day turnaround for root cause reports. I will send you the template and the escalation criteria by tomorrow so we can start immediately.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted the decision without challenge and immediately moved to implementation with specific commitments. This matches Sam's pace and demonstrates reliability.",
        },
        {
          id: "s266-opt-b",
          text: "I can work with that, though I would like to discuss the resource implications. Five-day turnaround is tight with our current team size, so we might need to look at priorities.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but the timing is off. Sam wants agreement now. Raise the resourcing concern separately after you have accepted the decision and started delivering.",
        },
        {
          id: "s266-opt-c",
          text: "I am not sure this is the right call. We have deeper insight into complaint patterns and I think we would be better placed to own the whole process end to end.",
          score: 0,
          result: "weak",
          explanation:
            "Sam explicitly said to raise objections now or not at all, but reopening the ownership debate after the decision has been made signals that you are not willing to accept the outcome.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked for a one-page process document assigning complaints ownership, responsibilities, and escalation routes. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Customer Complaints - Process Ownership\n\nOwner: Customer Service Team\nSupport: Quality Assurance Team\n\nProcess:\n1. Customer service logs and acknowledges every complaint within 24 hours.\n2. Resolution provided to the customer within 48 hours.\n3. Complaint file sent to QA within one working day of closure.\n4. QA delivers root cause analysis within five working days.\n\nEscalation:\n- Complaints unresolved after 48 hours escalate to the CS team lead.\n- Systemic issues identified by QA escalate to the operations director.\n\nReview: Monthly complaint volume and resolution time reviewed in the ops meeting. First review: end of next month.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document is clean, specific, and fits on one page. Every responsibility has an owner and a timeframe. Sam would approve this immediately.",
          observation:
            "You kept the language functional and avoided preamble about why the process matters or how it was decided. Direct communicators want the 'what', not the 'why'.",
          coachingTip:
            "When writing process documents for direct communicators, use numbered steps with clear owners and timeframes. Skip the introduction and go straight to the content.",
          styleContext:
            "Direct communicators judge process documents by whether they can be used on day one. If someone needs to ask questions after reading it, it has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good foundation, but check whether every step has a clear owner and a specific timeframe. Phrases like 'as soon as possible' or 'when appropriate' need replacing with numbers.",
          observation:
            "If any responsibility is described without a named team and a deadline, it will create exactly the kind of ambiguity that caused the dispute in the first place.",
          coachingTip:
            "Go through each line and ask: who does this and by when? If the answer is not explicit, add it.",
          styleContext:
            "Direct communicators see unowned tasks as guaranteed failures. Every action must have a name and a date attached.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document is either too long, too vague, or includes background context that Sam did not ask for. One page means one page of actionable content, not one page of rationale.",
          observation:
            "If your document starts with a section explaining why clear process ownership matters, you have missed the brief. Sam wants the process, not the philosophy.",
          coachingTip:
            "Delete the first paragraph. If the document still makes sense, the first paragraph was unnecessary.",
          styleContext:
            "Direct communicators treat process documents like instruction manuals. They should tell you what to do, not why you should do it.",
        },
      },
    },
  },

  // Scenario 267 - Alex Tran, conflict, advanced
  {
    id: "scenario-267",
    title: "The Cross-Functional Blame Game",
    context:
      "A major client delivery has failed and three departments are blaming each other. Alex has been asked to lead the post-incident review because senior leadership trusts her to get to the facts without getting drawn into politics.",
    chooseContext:
      "Alex is chairing the review meeting. The sales director blames operations for missing the delivery window. Operations blames sales for overpromising. IT blames both for not flagging system constraints.",
    rewriteContext:
      "Alex has concluded the review and asked you to write the incident summary with root causes, accountable parties, and corrective actions.",
    characterId: "alex-tran",
    dialogue:
      "Stop. I am not interested in whose fault this is. I am interested in three things: what was promised to the client, what was actually delivered, and where the process broke down. We are going to walk through the timeline and I want facts, not opinions. Save the blame for after we have fixed it.",
    chooseDialogue:
      "Sales committed to a delivery date without checking capacity. Operations flagged the risk in an email that no one actioned. IT raised the system limitation in a meeting that was not minuted. All three of you failed. The question is what we change so this does not happen again.",
    rewriteDialogue:
      "Write the incident report. Timeline, root causes, who was accountable for each failure, and what changes we are making. No passive voice. I want names, not 'the team'. Send it to me before you send it to anyone else.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has halted a blame-shifting discussion, demanded a factual timeline, and insisted on separating facts from opinions during a post-incident review. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex takes control immediately, redirects the conversation from blame to facts, and imposes a structured approach focused on resolution. This is a direct communicator leading through a crisis.",
          observation:
            "The phrase 'save the blame for after we have fixed it' shows Alex's priority hierarchy: fix the problem first, then address accountability. Direct communicators sequence by impact.",
          coachingTip:
            "When a leader stops an emotional debate and demands a factual walkthrough, they are operating in a direct style. Respond with data points and specific events, not interpretations.",
          styleContext:
            "Direct communicators in post-incident reviews treat blame as a distraction from the real objective: preventing recurrence. They tolerate discomfort to get to the truth quickly.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex's demand for a timeline and facts sounds analytical. But notice that Alex is not asking for a deep investigation - she wants the headline facts in the room now, not a report later.",
          observation:
            "An analytical communicator would commission a detailed investigation with evidence gathering before the meeting. Alex wants the answers in real-time from the people in the room.",
          coachingTip:
            "If someone demands facts in the moment to make a fast decision, that is direct. If they request a structured analysis to be delivered later, that is analytical. Alex is firmly in the former camp.",
          styleContext:
            "Direct communicators use facts as tools for immediate resolution. Analytical communicators use facts as inputs for considered analysis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not acknowledged how stressful the situation is for the teams involved, has not created space for people to share their frustrations, and has not tried to rebuild trust between departments.",
          observation:
            "There is no emotional acknowledgement, no team-building language, and no attempt to make people feel safe. Alex is focused entirely on what happened and what changes next.",
          coachingTip:
            "Ask yourself: is this person managing emotions or managing outcomes? Alex is entirely outcome-focused and expects others to manage their own emotions.",
          styleContext:
            "Direct communicators believe that fixing the problem is the most respectful response to a failure. They see emotional processing as important but separate from the review itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has stated that all three departments failed and asked what changes will prevent a repeat. You are the operations lead. How do you respond?",
      options: [
        {
          id: "s267-opt-a",
          text: "Agreed. On our side, every delivery commitment now requires a signed capacity check from operations before sales can confirm with the client. I will have the new sign-off template ready by Friday.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted accountability without deflection and immediately proposed a specific, actionable change with a deadline. Alex will respect this because it matches her results-first approach.",
        },
        {
          id: "s267-opt-b",
          text: "I accept we should have escalated more forcefully, but in fairness, we did flag the risk. The issue was that nobody on the sales side responded to our email. Perhaps we need a shared escalation process.",
          score: 5,
          result: "partial",
          explanation:
            "Partially constructive, but the opening defence weakens your credibility. Alex has already said all three failed. Leading with 'in fairness' sounds like you are still protecting your position.",
        },
        {
          id: "s267-opt-c",
          text: "I think we need to be careful about assigning blame too quickly. These situations are always more complex than they appear on the surface and I would prefer a full investigation before we commit to changes.",
          score: 0,
          result: "weak",
          explanation:
            "Alex has explicitly rejected the blame-delay approach. Asking for more investigation at this stage tells Alex you are trying to avoid accountability rather than fix the problem.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write the incident report with a timeline, root causes, named accountabilities, and corrective actions. No passive voice. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Client Delivery Failure - Incident Report\n\nClient: Meridian Group\nDelivery date committed: 14 March\nActual delivery: 28 March (14 days late)\n\nTimeline:\n- 20 Feb: Sales confirmed delivery date without capacity sign-off from operations.\n- 3 Mar: Operations emailed sales flagging a likely two-week delay. No response received.\n- 7 Mar: IT raised system migration conflict in the weekly meeting. Meeting was not minuted and no action was logged.\n- 14 Mar: Delivery missed. Client notified on the day.\n\nRoot causes:\n1. Sales committed a delivery date without verifying operational capacity. Accountable: Sales Director.\n2. Operations identified the risk but did not escalate beyond a single email. Accountable: Operations Lead.\n3. IT flagged the constraint verbally but did not log it as a blocker. Accountable: IT Manager.\n\nCorrective actions:\n1. All delivery dates require a signed capacity check from operations before client confirmation. Owner: Sales Director. Deadline: 21 March.\n2. Risk flags require acknowledgement within 24 hours or automatic escalation to the project sponsor. Owner: Operations Lead. Deadline: 21 March.\n3. All meeting actions logged in the project tracker within one working day. Owner: IT Manager. Deadline: immediate.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your report is factual, names accountable individuals, and attaches corrective actions to owners and deadlines. Alex would approve this without edits.",
          observation:
            "You avoided passive voice entirely and named people rather than teams. This is exactly what Alex demanded and it creates real accountability.",
          coachingTip:
            "When writing incident reports for direct communicators, every failure should have a name attached and every corrective action should have an owner and a date.",
          styleContext:
            "Direct communicators believe that unnamed accountability is no accountability at all. The purpose of an incident report is to prevent recurrence, and that requires named ownership.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check for passive voice and unnamed responsibilities. Phrases like 'the team should have escalated' need replacing with 'the operations lead should have escalated'.",
          observation:
            "If any failure is attributed to 'the process' rather than a person, Alex will send it back. Processes do not fail - people operating them do.",
          coachingTip:
            "Search your report for every use of 'the team', 'it was', or 'should have been'. Replace each one with a named person and an active verb.",
          styleContext:
            "Direct communicators see vague accountability as the root cause of repeated failures. Naming people is uncomfortable but necessary.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your report either softens the accountability, uses passive voice, or focuses on context rather than actions. Alex asked for facts and names, not explanations and sympathy.",
          observation:
            "If your report includes phrases like 'in the context of competing priorities' or 'understandably, the team was stretched', it has become an apology rather than a report.",
          coachingTip:
            "Remove every qualifying statement. If a fact needs a qualifier to be acceptable, the qualifier is masking accountability.",
          styleContext:
            "Direct communicators want incident reports that make people uncomfortable enough to change their behaviour. Comfortable reports produce comfortable repetitions.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (268-270) - email
  // ============================================

  // Scenario 268 - Priya Sharma, email, foundation
  {
    id: "scenario-268",
    title: "The Product Launch Announcement",
    context:
      "Priya is drafting an internal email to announce a new product launch to the entire company. She wants the email to generate excitement and encourage cross-departmental collaboration for the launch event.",
    chooseContext:
      "Priya has received lukewarm responses to a draft that was factual but flat. She is now reworking the email to inject energy and inspire people to get involved.",
    rewriteContext:
      "Priya has asked you to write a follow-up email inviting people to volunteer for launch event roles, keeping the same enthusiastic tone.",
    characterId: "priya-sharma",
    dialogue:
      "This email reads like a memo from legal. We are launching something brilliant and the company needs to feel that. I want people to read this and immediately think about how they can contribute. Let us make it sound like something worth being part of.",
    chooseDialogue:
      "We need volunteers for five launch roles and I want people fighting to sign up, not feeling obligated. The email should make each role sound like an opportunity, not a chore. Think about what would make you want to raise your hand.",
    rewriteDialogue:
      "Write the volunteer email. Make each role sound genuinely exciting. I want people to picture themselves in the role and feel like they would be missing out if they did not sign up. Keep it warm, keep it energising.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has rejected a factual product launch email because it lacks energy and does not inspire people to contribute. She wants the email to make people feel the launch is worth being part of. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya is focused on generating excitement, creating a sense of opportunity, and making people want to be involved. This is expressive communication - energising others through enthusiasm and vision.",
          observation:
            "Notice how Priya evaluates the original email by how it makes people feel, not by whether the information is accurate. The emotional impact is the primary measure of quality.",
          coachingTip:
            "When someone rejects a factually correct communication because it lacks energy, they are revealing an expressive style. Match their focus on impact and inspiration.",
          styleContext:
            "Expressive communicators see internal emails as opportunities to build momentum and culture, not just to distribute information.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does care about people, which sounds supportive. But notice the focus is on excitement and opportunity, not on reassurance or comfort. She wants people inspired, not just included.",
          observation:
            "A supportive communicator would focus on making sure no one feels pressured or left out. Priya wants people competing to be involved.",
          coachingTip:
            "If someone wants to generate enthusiasm and friendly competition, that is expressive. If they want to ensure everyone feels safe and valued, that is supportive.",
          styleContext:
            "Expressive communicators create energy through aspiration. Supportive communicators create safety through reassurance. Both are people-focused but with different goals.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not asked for more data, clearer structure, or a more precise summary. She has asked for more emotion, more energy, and a stronger call to action.",
          observation:
            "There is no request for evidence, metrics, or logical justification. The entire feedback is about how the email makes people feel when they read it.",
          coachingTip:
            "Ask yourself: is this person trying to inform or to inspire? Priya is firmly in the inspiration camp.",
          styleContext:
            "Expressive communicators believe that facts alone do not motivate. They need to be wrapped in a narrative that makes people care.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya wants volunteers for five launch event roles and wants each role to sound like an exciting opportunity. How do you contribute?",
      options: [
        {
          id: "s268-opt-a",
          text: "How about framing each role with a tagline? Like 'Demo Lead - be the first person to show the world what we have built' or 'Event Coordinator - the person who makes the magic happen behind the scenes'.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Priya's energy by creating aspirational descriptions that make each role feel special. This is exactly how an expressive communicator wants to present opportunities.",
        },
        {
          id: "s268-opt-b",
          text: "I could list the roles with a brief description of responsibilities and a deadline for expressions of interest. That way people know exactly what they are signing up for.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and clear, but it misses the energy Priya is looking for. She does not just want people informed - she wants them excited. The structure is fine but the tone needs work.",
        },
        {
          id: "s268-opt-c",
          text: "I think we should be careful about overselling volunteer roles. If people sign up expecting something glamorous and it turns out to be hard work, that could backfire.",
          score: 0,
          result: "weak",
          explanation:
            "This is a risk-focused response that will deflate Priya's enthusiasm. She is trying to build momentum and you are applying the brakes. Raise practical concerns separately.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a volunteer recruitment email for the product launch event. Make each role sound exciting and make people want to sign up. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Five roles, five chances to be part of something brilliant\n\nHi everyone,\n\nOur new product launches in three weeks and we want you involved.\n\nWe are looking for five people who want to play a real part in one of the biggest moments of our year. These are not back-office tasks - these are front-and-centre roles where your contribution will be visible and valued.\n\nThe roles:\n1. Demo Lead - you will be the first person to show customers what we have built. If you love presenting, this is your moment.\n2. Event Coordinator - the person who makes the day run seamlessly. Organisers, this one is yours.\n3. Content Creator - capture the energy of the day in photos, videos, and stories for our channels.\n4. Client Host - welcome our VIP guests and make them feel like they are part of something special.\n5. Feedback Collector - the voice of the customer on launch day. Gather the insights that shape what we do next.\n\nReply to this email with your first choice by Friday. If you are not sure which role suits you, tell us what you are good at and we will match you.\n\nLet us make this one to remember.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm, energising, and makes each role sound like a genuine opportunity. Priya would forward this with pride.",
          observation:
            "You used inclusive language, aspirational descriptions, and a warm sign-off that builds team spirit. This is exactly how expressive communicators rally a team.",
          coachingTip:
            "When writing for expressive communicators, frame every task as an opportunity and every contributor as valued. The goal is to make people feel seen and excited.",
          styleContext:
            "Expressive communicators measure the success of an internal email by how many people respond with enthusiasm. Your email should generate replies, not just acknowledgements.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your role descriptions inspire or merely inform. If they read like job descriptions, they need more energy.",
          observation:
            "If your email lists responsibilities without conveying why each role matters or what makes it exciting, it will get polite interest rather than enthusiastic sign-ups.",
          coachingTip:
            "For each role, add one sentence about the experience or impact. 'You will manage logistics' becomes 'You will be the reason the day runs like clockwork'.",
          styleContext:
            "Expressive communicators want people to feel something when they read about a role. Information alone is not enough - it needs to come with energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too transactional, or lacks the warmth and excitement Priya is looking for. It reads like a task assignment rather than an invitation.",
          observation:
            "If your email could be sent by any manager in any company about any event, it lacks the personal touch and energy that define expressive communication.",
          coachingTip:
            "Rewrite it imagining you are personally inviting a friend to be part of something you are genuinely excited about. That is the tone Priya wants.",
          styleContext:
            "Expressive communicators see internal communications as culture-building moments. A flat volunteer email is a missed opportunity to energise the team.",
        },
      },
    },
  },

  // Scenario 269 - Marcus Webb, email, intermediate
  {
    id: "scenario-269",
    title: "The Client Thank-You Message",
    context:
      "Marcus has just closed a successful project with a long-standing client. He wants to send a thank-you email that goes beyond a standard sign-off and reinforces the relationship for future work.",
    chooseContext:
      "Marcus has seen a draft thank-you email from a colleague and thinks it is too transactional. He wants to add personal touches that reference specific moments from the project.",
    rewriteContext:
      "Marcus has asked you to write the final version of the thank-you email, incorporating personal references and a warm forward-looking message.",
    characterId: "marcus-webb",
    dialogue:
      "This email says 'thank you for your business' like we are a bank. These people worked alongside us for eight months. I remember the night before the pilot launch when their CEO called us personally to say she believed in the team. That is the kind of thing I want in this email. Make it real.",
    chooseDialogue:
      "I want to mention at least two specific moments that show we were paying attention. The workshop where their head of product had that breakthrough idea. The Friday evening when their team stayed late to test with us. Those moments matter and they should know we noticed.",
    rewriteDialogue:
      "Write the thank-you email. Reference the specific moments I mentioned. End with something that looks forward to working together again, but make it genuine, not a sales pitch. They should feel appreciated, not targeted.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has rejected a standard thank-you email as too transactional and wants to include personal, specific memories from the project to make the client feel genuinely appreciated. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus values personal connection, storytelling, and emotional authenticity in professional communication. He wants the email to feel human and memorable, not corporate. This is classic expressive communication.",
          observation:
            "Notice how Marcus evaluates the draft by how it will make the client feel, not by whether it conveys the right information. The emotional resonance is the primary criterion.",
          coachingTip:
            "When someone insists on personal stories and specific moments in a business communication, they are revealing an expressive style. Match their focus on authentic connection.",
          styleContext:
            "Expressive communicators see thank-you emails as relationship investments. A generic message wastes the opportunity to deepen the connection.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does care about the client's feelings, which sounds supportive. But notice his emphasis is on energy, storytelling, and making the email memorable, not on reassurance or safety.",
          observation:
            "A supportive communicator would focus on making the client feel valued and secure. Marcus wants them to feel celebrated and excited about the future.",
          coachingTip:
            "If someone wants to create a memorable, story-driven communication, that is expressive. If they want to create a reassuring, trust-building one, that is supportive.",
          styleContext:
            "Expressive communicators build relationships through shared stories and enthusiasm. Supportive communicators build relationships through reliability and care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not asked for data about the project's outcomes, a summary of deliverables, or a formal evaluation. He wants emotion, stories, and personal references.",
          observation:
            "There is no request for metrics, timelines, or structured information. Marcus is entirely focused on the human side of the project.",
          coachingTip:
            "Ask yourself: is this person trying to document or to connect? Marcus wants connection through shared memories, not documentation through facts.",
          styleContext:
            "Expressive communicators remember projects by the people and moments, not by the Gantt charts and milestones.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants to include two specific moments from the project in the thank-you email. He has mentioned the workshop breakthrough and the late Friday testing session. How do you help?",
      options: [
        {
          id: "s269-opt-a",
          text: "Great choices. For the workshop, we could write something like 'When Sarah's idea reshaped the entire product direction in that Wednesday session, we all knew this project was going to deliver something special.' That captures the moment and names the person.",
          score: 10,
          result: "strong",
          explanation:
            "You embraced Marcus's approach and provided a specific, personal, emotionally resonant example. Naming the individual and capturing the feeling of the moment is exactly what Marcus wants.",
        },
        {
          id: "s269-opt-b",
          text: "I could mention both moments briefly - maybe a line each. Something like 'from the productive workshops to the dedication your team showed during testing, it was a genuine partnership.'",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the moments but keeps them generic. Marcus specifically wants to name people and describe what happened. The sentiment is right but the detail is missing.",
        },
        {
          id: "s269-opt-c",
          text: "I would keep the email focused on outcomes and deliverables. Personal anecdotes in a professional email can feel unprofessional, especially if we are hoping for repeat business.",
          score: 0,
          result: "weak",
          explanation:
            "This contradicts Marcus's entire approach. He specifically asked for personal moments because he believes they strengthen, not weaken, professional relationships.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a thank-you email to the client referencing specific project moments and ending with a genuine forward-looking message. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Eight months well spent - thank you\n\nHi Claire,\n\nI wanted to take a moment to say a proper thank you - not the standard project-close email, but something that reflects how much this partnership has meant to us.\n\nThere are two moments I keep coming back to. The first was that Wednesday workshop when Sarah completely reframed the product approach. The room went quiet for about five seconds and then everyone started building on her idea. That was the turning point. The second was the Friday evening before the pilot launch, when your team stayed late to run through the final tests with ours. Nobody asked them to. They just cared that much.\n\nThose moments tell you everything about the kind of team you have built. It has been a privilege to work alongside them.\n\nWe would love to keep this going. Not because it is good business - though it is - but because working with people who care this much makes our work better. If there is a next chapter, we are ready for it.\n\nWith genuine thanks,\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is personal, specific, and emotionally authentic without being sentimental. Marcus would be proud to send this.",
          observation:
            "You named real people, described real moments, and ended with a forward-looking message that feels genuine rather than commercial. This is expressive communication at its best.",
          coachingTip:
            "When writing for expressive communicators, the test is: would this email make someone smile and save it? If yes, you have hit the right note.",
          styleContext:
            "Expressive communicators believe that the most powerful business emails are the ones that feel human. Personal specificity is what separates a memorable email from a forgettable one.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether your specific moments are detailed enough. Saying 'the workshops were great' is not the same as describing a particular moment that happened.",
          observation:
            "If your anecdotes could apply to any project, they are too generic. Marcus wants moments that only this team, on this project, would recognise.",
          coachingTip:
            "Add a sensory detail to each moment. What happened? Who said what? What was the reaction? Specificity creates authenticity.",
          styleContext:
            "Expressive communicators know that generic praise feels hollow. The more specific the memory, the more genuine the gratitude feels.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too generic, or reads like a standard project closure template. Marcus wanted something the client would remember and share with their team.",
          observation:
            "If your email could be sent to any client after any project, it has missed the brief entirely. Marcus asked for something personal and unique.",
          coachingTip:
            "Imagine you are writing to a friend you collaborated with, not a client you invoiced. That shift in tone is what Marcus is looking for.",
          styleContext:
            "Expressive communicators judge professional communications by whether they deepen the relationship. A template email maintains the relationship at best and erodes it at worst.",
        },
      },
    },
  },

  // Scenario 270 - Nina Okafor, email, advanced
  {
    id: "scenario-270",
    title: "The Difficult News Announcement",
    context:
      "Nina has to email the team about a project being scaled back due to budget cuts. She wants to deliver the news honestly while maintaining morale and showing appreciation for the work already done.",
    chooseContext:
      "Nina has seen two draft approaches - one bluntly factual, one overly optimistic. She wants something that sits between: honest about the situation but warm about the team's contribution.",
    rewriteContext:
      "Nina has asked you to write the final email that acknowledges the setback, celebrates what the team achieved, and reframes the path forward.",
    characterId: "nina-okafor",
    dialogue:
      "I am not going to pretend this is good news, because it is not. But I am also not going to let this email make people feel like their work did not matter. The last four months were some of the best collaboration I have seen on this team. The budget decision does not erase that. I want the email to be honest and human at the same time.",
    chooseDialogue:
      "The blunt version sounds like a redundancy notice. The optimistic version sounds like we are pretending nothing happened. I want something that says: this is disappointing, your work was exceptional, and here is what we are going to do with what we have built so far.",
    rewriteDialogue:
      "Write the email. Start with the truth - the project has been scaled back. Then acknowledge what the team achieved specifically. Then lay out what happens next in a way that gives people something to feel positive about. Do not sugarcoat and do not catastrophise.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina is crafting an email about a project being scaled back. She rejects both a blunt factual approach and an overly optimistic one, wanting honesty combined with warmth and appreciation for the team's work. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina wants the email to carry emotional weight while being authentic. She is looking for honesty wrapped in warmth and acknowledgement. This is an expressive communicator navigating difficult news with emotional intelligence.",
          observation:
            "Notice how Nina balances two concerns: the team should feel valued for their contribution, and they should hear the truth clearly. Expressive communicators refuse to sacrifice either.",
          coachingTip:
            "When someone rejects both sterile facts and false optimism, they are looking for an emotionally authentic middle ground. That is the hallmark of an expressive communicator handling bad news.",
          styleContext:
            "Expressive communicators believe that difficult messages require more emotional care, not less. They invest extra effort in tone because they know the team will remember how the news made them feel.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's concern for the team's feelings sounds supportive. But notice that Nina wants to celebrate and energise, not just comfort. She is looking for a way to make people proud, not just reassured.",
          observation:
            "A supportive communicator would focus primarily on making people feel safe and supported through the change. Nina also wants to make them feel proud and forward-looking.",
          coachingTip:
            "If someone wants the team to feel celebrated and inspired despite bad news, that is expressive. If they want the team to feel protected and cared for, that is supportive.",
          styleContext:
            "Expressive communicators turn setbacks into stories of resilience. Supportive communicators turn setbacks into moments of solidarity.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not asked for a detailed breakdown of the budget decision, a risk analysis of the scaled-back project, or a data-driven justification. She is focused on how the message will land emotionally.",
          observation:
            "There is no request for numbers, timelines, or analytical rigour. Nina's criteria for a good email are entirely about its emotional impact on the team.",
          coachingTip:
            "Ask yourself: is this person prioritising accuracy or impact? Nina has the facts already - she is now focused on delivering them in a way that honours the team.",
          styleContext:
            "Expressive communicators see the delivery of bad news as a leadership moment that defines culture. How you say it matters as much as what you say.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina wants the email to be honest about the budget cut, celebrate the team's work, and offer a positive path forward. She has asked for your input. How do you contribute?",
      options: [
        {
          id: "s270-opt-a",
          text: "I think we should open with the facts clearly, then pivot to something like: 'What you built in four months would take most teams a year. The budget changed, but the quality of your work did not.' Then close with the specific next steps that show the work lives on.",
          score: 10,
          result: "strong",
          explanation:
            "You provided a structure that honours Nina's three requirements: honesty, celebration, and forward direction. The language is warm and specific without being sentimental.",
        },
        {
          id: "s270-opt-b",
          text: "I could list the key achievements from the project so we have concrete examples to reference. That way the appreciation feels specific rather than generic.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful and practical, but Nina is looking for more than a list. She wants the tone and emotional arc of the email shaped, not just the content populated.",
        },
        {
          id: "s270-opt-c",
          text: "Honestly, I think we should keep the email short and factual. People see through over-emotional messages and it can feel patronising when leaders try too hard to spin bad news.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Nina's core belief that emotional authenticity is essential in difficult communications. She has explicitly rejected the blunt approach and you are recommending it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write the email announcing the project scale-back. Be honest about the situation, celebrate the team's achievements, and provide a forward-looking message. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: An update on Project Horizon - and a thank you\n\nHi team,\n\nI am going to be straightforward with you because you deserve that. The budget for Project Horizon has been reduced and we are scaling back the scope to phase one only. I know that is not what any of us wanted to hear.\n\nBut before we talk about what happens next, I want to talk about what you achieved. In four months, you built a working prototype that three senior stakeholders described as the most impressive internal demo they have seen. You solved the integration challenge that two previous teams had given up on. And you did it while supporting each other through some genuinely long weeks.\n\nThe budget decision does not erase any of that. The work you did is the reason phase one is being kept. It proved the concept and it proved the team.\n\nHere is what happens next: phase one goes live on schedule. The features you built will reach customers. And the lessons, relationships, and capability you developed over these four months will shape everything we do next.\n\nI am proud of what this team delivered. That has not changed.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email balances honesty, celebration, and forward direction exactly as Nina requested. It will make people feel valued while being clear about the reality.",
          observation:
            "You included specific achievements that make the appreciation feel genuine, and you reframed the path forward as a continuation of the team's impact rather than a consolation prize.",
          coachingTip:
            "When writing difficult messages for expressive communicators, the emotional arc matters: acknowledge the disappointment, celebrate the work, then redirect energy forward.",
          styleContext:
            "Expressive communicators believe that how a team receives bad news determines how they perform in the next chapter. A well-crafted message is not spin - it is leadership.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good emotional intent, but check whether your specific achievements are detailed enough to feel genuine. Generic praise in the middle of bad news can feel hollow.",
          observation:
            "If your celebration section uses phrases like 'you all did a great job', it needs specific examples. Nina wants people to recognise themselves in the acknowledgement.",
          coachingTip:
            "Add at least two concrete achievements that only this team on this project would recognise. Specificity is what turns appreciation from polite to powerful.",
          styleContext:
            "Expressive communicators know that generic praise during difficult moments feels performative. Specificity proves you were paying attention.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either leans too heavily into the bad news without celebrating the team, or swings too far into positivity without being honest. Nina asked for both.",
          observation:
            "If your email reads like either a termination notice or a motivational poster, it has missed the balance Nina was looking for.",
          coachingTip:
            "Read your email twice: once checking for honesty, once checking for warmth. If either reading makes you uncomfortable, adjust until both feel authentic.",
          styleContext:
            "Expressive communicators navigate difficult moments by being genuinely honest and genuinely appreciative in the same message. Neither should be sacrificed for the other.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (271-273) - one-to-one
  // ============================================

  // Scenario 271 - Tom Brennan, one-to-one, foundation
  {
    id: "scenario-271",
    title: "The Return from Leave",
    context:
      "Tom is having a one-to-one with a team member who has just returned from four weeks of sick leave. He wants to check in on how they are feeling and ease them back into work without overwhelming them.",
    chooseContext:
      "Tom's team member has said they are fine and ready to get back to full speed, but Tom can sense they are pushing themselves too hard too soon.",
    rewriteContext:
      "Tom has asked you to draft a brief follow-up email summarising what was discussed and the gradual return-to-work plan they agreed.",
    characterId: "tom-brennan",
    dialogue:
      "Before we talk about work, I just want to check in with you properly. Four weeks is a long time and there is no pressure to jump straight back in. We have managed fine and your only job this week is to get comfortable being here again. Tell me honestly, how are you feeling?",
    chooseDialogue:
      "I hear you saying you are ready for full duties, and I believe you want to be. But let us build up gradually. This week, focus on catching up with emails and sitting in on meetings as an observer. Next week we can look at taking on projects again. There is no rush and no one is counting.",
    rewriteDialogue:
      "Send them a short email after our meeting. Nothing formal, just a friendly summary of what we agreed. Remind them of the phased plan and let them know they can adjust the pace at any time. Keep it warm. I do not want it to feel like a policy document.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has opened a return-to-work one-to-one by prioritising the team member's wellbeing over work tasks, removing pressure, and asking them to share how they genuinely feel. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with care, removes pressure, and creates a safe space for honest conversation. This is supportive communication - prioritising the person's emotional readiness before addressing tasks.",
          observation:
            "Notice how Tom pre-empts the team member's likely instinct to say they are fine by explicitly removing the pressure to perform. Supportive communicators anticipate emotional needs.",
          coachingTip:
            "When a manager opens a meeting by explicitly saying there is no pressure and asking how someone genuinely feels, they are demonstrating a supportive style. Match their pace and openness.",
          styleContext:
            "Supportive communicators believe that a person's emotional readiness determines their professional performance. Addressing feelings first is not soft - it is strategic.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom's warmth could be mistaken for expressive. But notice the focus is on safety and reassurance, not on energy and enthusiasm. Tom wants the team member to feel secure, not inspired.",
          observation:
            "An expressive communicator would welcome the person back with celebration and excitement about what lies ahead. Tom's approach is quieter and more protective.",
          coachingTip:
            "If someone creates a calm, safe space and focuses on gradual adjustment, that is supportive. If they create an energetic, enthusiastic welcome-back, that is expressive.",
          styleContext:
            "Supportive communicators show care through patience and protection. Expressive communicators show care through warmth and celebration. Both are genuine, but the energy is different.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not set targets, asked for a productivity plan, or outlined expectations for the first week. His entire focus is on the team member's comfort and readiness.",
          observation:
            "There are no deadlines, no deliverables, and no performance metrics mentioned. Tom is managing the person, not the workload.",
          coachingTip:
            "Ask yourself: is this person focused on output or on wellbeing? Tom is entirely focused on ensuring the team member feels safe and supported.",
          styleContext:
            "Supportive communicators believe that rushing someone back to full capacity risks a longer-term setback. Patience now prevents problems later.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom's team member insists they are ready for full duties, but Tom wants to build up gradually. The team member says they do not want to feel like they are being treated differently. How do you support Tom's approach?",
      options: [
        {
          id: "s271-opt-a",
          text: "I understand that, and no one is treating you differently. This is how we would handle it for anyone. The phased plan is about setting you up to succeed, not holding you back. Let us try this week at a lighter pace and review on Friday - you are in control of the timeline.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the team member's concern, normalised the phased approach, and gave them control over the timeline. This matches Tom's supportive approach while respecting the person's autonomy.",
        },
        {
          id: "s271-opt-b",
          text: "Tom is right that a gradual return is best practice. Most companies have a formal policy for this. We are actually being quite flexible by keeping it informal.",
          score: 5,
          result: "partial",
          explanation:
            "Factually correct but emotionally flat. Citing policy does not address the team member's underlying concern about being singled out. Tom would want more warmth.",
        },
        {
          id: "s271-opt-c",
          text: "If you are saying you are ready, then let us get you back to full duties this week. There is plenty to catch up on and we could really use the help.",
          score: 0,
          result: "weak",
          explanation:
            "This completely undermines Tom's supportive approach. It prioritises the team's workload over the individual's recovery and ignores the signs that Tom has already picked up on.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a brief, warm follow-up email summarising the phased return plan. It should feel friendly, not like a policy document. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Good to have you back\n\nHi Jamie,\n\nIt was really good to see you today. Thank you for being so open about how you are feeling.\n\nJust to capture what we discussed:\n- This week: catch up on emails and sit in on team meetings. No action items, no deadlines.\n- Next week: we will review together and, if you are feeling ready, start picking up a project or two.\n- Ongoing: we check in every Friday for the first month, just to make sure the pace feels right for you.\n\nThis is your plan, not mine. If anything feels too much or too little, just let me know and we will adjust. There is no wrong answer here.\n\nGlad to have you back on the team.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm, reassuring, and gives the team member control. It feels like a message from a caring manager, not a corporate return-to-work policy.",
          observation:
            "You framed the plan as the team member's to own and adjust, which gives them agency while maintaining the supportive structure Tom wants.",
          coachingTip:
            "When writing for supportive communicators, make the recipient feel empowered rather than managed. The plan should feel like a partnership, not a prescription.",
          styleContext:
            "Supportive communicators build trust through flexibility and care. An email that says 'this is your plan' communicates respect and trust simultaneously.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email feels warm enough. If it reads like a summary of actions without emotional connection, it needs more personal touches.",
          observation:
            "If your email jumps straight into the plan without acknowledging how the conversation went, it loses the human element Tom values.",
          coachingTip:
            "Open with a personal acknowledgement before getting into the plan. 'It was good to see you' matters more than you might think.",
          styleContext:
            "Supportive communicators prioritise the relationship over the record. The email should strengthen the connection, not just document the agreement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too directive, or lacks the warmth Tom specifically requested. If it reads like an HR template, it will undo the trust built in the meeting.",
          observation:
            "If your email includes phrases like 'as per our discussion' or 'in accordance with the agreed plan', it has become exactly the policy document Tom wanted to avoid.",
          coachingTip:
            "Write it as if you are texting a colleague you care about, then add just enough structure to capture the key points. That is the balance Tom wants.",
          styleContext:
            "Supportive communicators know that the tone of a follow-up email can reinforce or undermine the trust built in a face-to-face conversation. Warmth is not optional.",
        },
      },
    },
  },

  // Scenario 272 - Leah Morgan, one-to-one, intermediate
  {
    id: "scenario-272",
    title: "The Confidence Crisis",
    context:
      "Leah is meeting with a team member who has been making mistakes on routine tasks and has visibly lost confidence. Leah suspects the issue is not capability but anxiety following a public error in a team meeting last month.",
    chooseContext:
      "The team member has admitted they have been second-guessing everything since the meeting incident and are worried about making another visible mistake.",
    rewriteContext:
      "Leah has asked you to draft a development note that captures the supportive plan they discussed, focusing on rebuilding confidence through small, safe wins.",
    characterId: "leah-morgan",
    dialogue:
      "I have noticed you have been a bit quieter lately and I wanted to create some space for us to talk about it. There is nothing wrong with your work, by the way. I have reviewed everything from the last two weeks and it is solid. But I can tell something is weighing on you and I would rather we talk about it than let it build up.",
    chooseDialogue:
      "That meeting incident was one moment. It does not define you or your ability. But I understand why it shook your confidence, and I am not going to pretend it did not happen. Let us talk about how we rebuild from here. What would help you feel more secure?",
    rewriteDialogue:
      "Write up a short development note - nothing heavy, just a few steps we are going to take together over the next few weeks. Frame it around building confidence, not fixing problems. I want them to read it and feel supported, not assessed.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has proactively created space for a team member to discuss a confidence issue, reassured them about their work quality, and invited them to share what is weighing on them without pressure. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with observation, reassurance, and an open invitation to talk. She has already reviewed their work to remove anxiety about performance. This is a supportive communicator creating psychological safety.",
          observation:
            "Notice how Leah pre-emptively addresses the worry about work quality before the team member has to ask. Supportive communicators anticipate anxiety and address it before it is raised.",
          coachingTip:
            "When a manager proactively removes a source of worry and then creates space for an open conversation, they are operating in a supportive style. Respond with honesty - they have earned your trust.",
          styleContext:
            "Supportive communicators believe that most performance issues are confidence issues in disguise. They fix the person's belief in themselves, and the performance follows.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah's warmth and openness might look expressive. But notice the energy is calm and protective, not enthusiastic and forward-looking. Leah is creating safety, not excitement.",
          observation:
            "An expressive communicator would reframe the mistake as a learning moment and enthusiastically encourage the team member to bounce back. Leah sits with the difficulty rather than rushing past it.",
          coachingTip:
            "If someone creates a quiet, safe space and says 'let us talk about it', that is supportive. If they create an energetic space and say 'let us move forward together', that is expressive.",
          styleContext:
            "Supportive communicators hold space for difficulty. Expressive communicators reframe difficulty into opportunity. Both are caring but the approach is different.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not presented an action plan, set improvement targets, or asked the team member to justify their recent performance. She is entirely focused on understanding and reassurance.",
          observation:
            "There are no KPIs, no performance metrics, and no structured development objectives. Leah is managing the emotional dimension, not the task dimension.",
          coachingTip:
            "Ask yourself: is this person trying to fix the performance or fix the person's relationship with their own ability? Leah is working on the latter.",
          styleContext:
            "Supportive communicators know that confidence and competence are linked. A capable person who has lost confidence will underperform until the confidence is restored.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah's team member has admitted that the meeting incident shook their confidence and they have been second-guessing everything. Leah has asked what would help them feel more secure. How do you respond as the team member?",
      options: [
        {
          id: "s272-opt-a",
          text: "Honestly, I think it would help if I could work on a couple of smaller tasks first where the stakes are lower. Just to get some wins under my belt before I take on anything client-facing again. And maybe check in with you before I present anything internally, just until I find my feet.",
          score: 10,
          result: "strong",
          explanation:
            "You were honest about what you need, asked for a graduated approach, and requested a safety net. This is exactly the kind of response Leah was hoping to hear - it gives her something concrete to support.",
        },
        {
          id: "s272-opt-b",
          text: "I think I just need to push through it. The longer I avoid presenting, the worse it will get. Maybe just give me a small presentation slot next week and I will make myself do it.",
          score: 5,
          result: "partial",
          explanation:
            "Brave, but it skips the confidence-building steps Leah was gently guiding toward. Forcing yourself back into the deep end might reinforce the anxiety rather than resolve it.",
        },
        {
          id: "s272-opt-c",
          text: "I am fine, honestly. I just need to stop overthinking. Can we move on to the actual work agenda? I have a few questions about the Henderson project.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the conversation Leah carefully created. Dismissing the issue and changing the subject leaves the confidence problem unaddressed and wastes the safe space Leah built.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a short development note focused on rebuilding confidence through small wins. It should feel supportive, not like a performance improvement plan. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Confidence Rebuilding Plan\n\nThis is not a formal performance document. It is a shared plan to help you get back to feeling like yourself at work.\n\nWeeks 1-2: Focus on internal tasks with lower visibility. Complete two smaller deliverables where you can build momentum without external pressure.\n\nWeek 3: Present a brief update at the team meeting. Leah will review the content with you beforehand and sit next to you during the session.\n\nWeek 4: Take on a client-facing task of your choosing. You decide the scope and timing.\n\nThroughout: Friday check-ins with Leah. These are not assessments - they are conversations about how you are feeling and what you need.\n\nYou can adjust this plan at any point. If something feels too much or too soon, we slow down. If you feel ready to move faster, we speed up. This is your timeline.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your note is warm, graduated, and gives the team member control. It reads like a partnership document, not a management directive.",
          observation:
            "You explicitly stated this is not a formal performance document, which removes the anxiety of being 'on a plan'. Supportive communicators understand the power of framing.",
          coachingTip:
            "When writing development notes for supportive communicators, label what it is not before saying what it is. Removing the fear of formal processes is half the battle.",
          styleContext:
            "Supportive communicators know that the label attached to a plan matters as much as the content. Calling it a 'shared plan' rather than a 'development plan' changes how it is received.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your plan feels graduated enough and whether the team member has genuine control. If the milestones feel imposed rather than collaborative, the supportive tone weakens.",
          observation:
            "If your plan reads like a list of tasks with dates, it might feel like a performance timeline in disguise. Add language that gives the team member ownership of the pace.",
          coachingTip:
            "After each milestone, add a sentence like 'you decide when you are ready for the next step'. That single phrase transforms a plan from directive to collaborative.",
          styleContext:
            "Supportive communicators believe that recovery plans should feel like a hand on the shoulder, not a finger pointing at a target.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note either feels too formal, too structured, or too focused on outcomes rather than the person's emotional readiness. Leah specifically asked for something that feels supportive, not assessed.",
          observation:
            "If your note includes phrases like 'by the end of week two, you should be able to' or 'success criteria', it has become the performance improvement plan Leah wanted to avoid.",
          coachingTip:
            "Remove any language that implies measurement or assessment. Replace it with language about feelings, readiness, and choice.",
          styleContext:
            "Supportive communicators see confidence rebuilding as an emotional process, not a project management exercise. The plan should track feelings, not deliverables.",
        },
      },
    },
  },

  // Scenario 273 - David Chen, one-to-one, advanced
  {
    id: "scenario-273",
    title: "The Unspoken Promotion Disappointment",
    context:
      "David is meeting with a team member who was passed over for a promotion last week. The team member has not raised it directly but David has noticed a change in their engagement and wants to address it sensitively.",
    chooseContext:
      "David has gently raised the topic and the team member has opened up, saying they feel they were overlooked despite doing everything asked of them. They are hurt but trying not to show it.",
    rewriteContext:
      "David has asked you to write a development plan email that acknowledges the disappointment, explains what they can work on, and makes a genuine commitment to supporting their next promotion attempt.",
    characterId: "david-chen",
    dialogue:
      "I wanted to talk about the promotion decision. I know you have not raised it, but I also know it matters to you, and I would rather we had an honest conversation about it than let it sit between us. There is nothing wrong with feeling disappointed. I would be disappointed too.",
    chooseDialogue:
      "I hear you, and I want you to know that your frustration is completely valid. You have done excellent work and it would be unfair of me to pretend the decision was easy or obvious. The gap between you and the successful candidate was small, and I want to be specific about what would close it. But only if you are ready to hear that today.",
    rewriteDialogue:
      "Write the follow-up email. Acknowledge the disappointment first - do not jump straight to the development plan. Then outline the two or three areas that would strengthen their case next time. End with a personal commitment from me. I want them to feel that I am genuinely in their corner, not just ticking a box.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has proactively raised a sensitive promotion decision with a team member who was visibly affected but had not spoken up. He normalised the disappointment and opened space for an honest conversation. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David reads the unspoken emotional signals, raises the issue himself to remove the burden from the team member, and normalises the feeling of disappointment. This is advanced supportive communication.",
          observation:
            "The phrase 'I would be disappointed too' is powerful. It validates the emotion without patronising the person. Supportive communicators share vulnerability to create connection.",
          coachingTip:
            "When a manager names an emotion their team member has not expressed and then validates it, they are demonstrating deep supportive communication. This level of emotional attunement builds lasting trust.",
          styleContext:
            "Supportive communicators believe that unspoken disappointments are more damaging than expressed ones. By raising it first, David prevents resentment from solidifying into disengagement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's warmth and willingness to share his own feelings might look expressive. But notice the energy is calm, protective, and patient - not enthusiastic or forward-looking.",
          observation:
            "An expressive communicator would reframe the rejection as a stepping stone and enthusiastically talk about the future. David sits with the disappointment first because he knows it needs to be processed.",
          coachingTip:
            "If someone holds space for difficult emotions without rushing to reframe them, that is supportive. If they quickly pivot to an optimistic future narrative, that is expressive.",
          styleContext:
            "Supportive communicators understand that premature optimism can feel dismissive. They let the emotion breathe before introducing the path forward.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented a competency gap analysis, a structured development programme, or data about the promotion criteria. He is entirely focused on the emotional dimension of the conversation.",
          observation:
            "There are no spreadsheets, no scoring rubrics, and no comparative assessments. David is managing a person's feelings, not their development metrics.",
          coachingTip:
            "Ask yourself: is this person leading with data or with empathy? David's first priority is ensuring the team member feels heard and valued. The development conversation comes later.",
          styleContext:
            "Supportive communicators believe that a person who feels dismissed will not engage with a development plan. The emotional foundation must be laid before the practical conversation can happen.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has acknowledged that the promotion gap was small and offered to share specific development areas, but only if the team member is ready to hear it. The team member says they want to hear it. How does David continue?",
      options: [
        {
          id: "s273-opt-a",
          text: "Thank you for being open to this. There are two areas. The first is stakeholder visibility - your work is excellent but it does not always reach the people who make promotion decisions. The second is leading through ambiguity - the successful candidate demonstrated this on the restructure project. Both are completely buildable and I will help you with both.",
          score: 10,
          result: "strong",
          explanation:
            "You gave specific, honest feedback while framing both gaps as addressable. The closing commitment to help personally matches David's supportive approach and gives the team member confidence in the partnership.",
        },
        {
          id: "s273-opt-b",
          text: "The main area is visibility. Your work speaks for itself in terms of quality, but the people making the decisions do not always see it. We could think about some ways to address that over the coming months.",
          score: 5,
          result: "partial",
          explanation:
            "Partially helpful, but it only covers one area and the suggestion to 'think about ways' is vague. David offered to be specific, and this response stops short of the commitment the team member needs.",
        },
        {
          id: "s273-opt-c",
          text: "Honestly, I think you just need more time in the role. These things take time and the right opportunity will come around again. You are doing all the right things.",
          score: 0,
          result: "weak",
          explanation:
            "This is vague and potentially dishonest. David said the gap was specific and small. Telling the team member to just wait dismisses their need for actionable guidance and may erode trust in David's promise to help.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a follow-up email that acknowledges the promotion disappointment, outlines development areas, and includes a personal commitment to support the next attempt. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Following up on our conversation\n\nHi Sam,\n\nThank you for being so honest with me today. I know that conversation was not easy and I appreciate your trust.\n\nI want to put in writing what I said face to face: the decision was close, your work is valued, and I believe you will get there.\n\nHere is what we discussed as areas to focus on:\n\n1. Stakeholder visibility: Your work quality is not in question. What we need is for the right people to see more of it. Over the next three months, I will create opportunities for you to present at senior-level meetings and I will brief you beforehand on what each audience values.\n\n2. Leading through ambiguity: When projects are unclear, stepping forward to shape the direction is what separates a strong performer from a promotion-ready leader. I will look for a project where you can practise this with my support.\n\nMy commitment: We review progress together every two weeks. I will give you honest feedback and I will advocate for you when the next opportunity arises. That is not a formality - it is a promise.\n\nYou have every reason to feel disappointed, and you have every reason to feel confident about what comes next.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email acknowledges the emotion, provides specific development guidance, and makes a personal commitment. It will make the team member feel genuinely supported and hopeful.",
          observation:
            "You opened with emotional acknowledgement, moved to practical guidance, and closed with a personal promise. This three-part structure is how supportive communicators handle difficult follow-ups.",
          coachingTip:
            "When writing post-disappointment development emails for supportive communicators, the sequence matters: feelings first, then facts, then future commitment.",
          styleContext:
            "Supportive communicators know that a well-timed, genuine follow-up email can transform a disappointment into a deepened trust relationship. The effort to write it personally is the message itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your emotional acknowledgement feels genuine or perfunctory. A single sentence saying 'I understand your frustration' is not enough after a conversation this important.",
          observation:
            "If your email jumps to the development plan within the first two sentences, the team member may feel the emotional conversation was just a precursor to a task list.",
          coachingTip:
            "Spend at least a full paragraph on the emotional acknowledgement before transitioning to the development areas. The team member needs to feel heard before they can engage with next steps.",
          styleContext:
            "Supportive communicators invest in the emotional preamble because they know it determines how the practical content is received. Skip it and the whole email falls flat.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either skips the emotional dimension, reads like a standard development plan, or makes commitments that sound corporate rather than personal.",
          observation:
            "If your email could be sent by any manager to any employee after any promotion round, it lacks the personal touch David specifically asked for.",
          coachingTip:
            "Rewrite the closing commitment as something you would say to someone you genuinely care about, not something you would put in an HR template.",
          styleContext:
            "Supportive communicators see follow-up emails after difficult conversations as the most important emails they send. Generic language in these moments is a relationship failure.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (274-276) - presentation
  // ============================================

  // Scenario 274 - Rachel Finch, presentation, foundation
  {
    id: "scenario-274",
    title: "The Quarterly Data Review",
    context:
      "Rachel is preparing a presentation for the senior leadership team reviewing quarterly performance data. She wants every claim supported by evidence and every chart to have a clear interpretation noted beneath it.",
    chooseContext:
      "Rachel has seen a colleague's draft slides and is concerned about unsupported claims and misleading chart formatting that could lead to incorrect conclusions.",
    rewriteContext:
      "Rachel has asked you to write the executive summary slide that distils the quarter's performance into a structured, evidence-based narrative.",
    characterId: "rachel-finch",
    dialogue:
      "Slide four says 'customer satisfaction improved significantly'. What does significantly mean? Is it a 2% increase or a 20% increase? And compared to what baseline? I need every statement in this deck to be backed by a number and a source. If we cannot evidence it, we remove it.",
    chooseDialogue:
      "That bar chart is misleading. The y-axis starts at 85 instead of zero, which makes a 3% improvement look like a 40% jump. Fix the axis or add a footnote explaining the truncated scale. I am not presenting anything that could be misread.",
    rewriteDialogue:
      "Write the executive summary slide. Three to four bullet points, each with a headline finding, the supporting data point, and the source. No adjectives without numbers. If something improved, I want to see by how much and measured how.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has questioned vague language in a presentation, demanded that every claim be supported by a specific number and source, and insisted on removing anything that cannot be evidenced. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel demands precision, evidence, and intellectual rigour in every slide. She evaluates presentations by their accuracy and defensibility, not by their impact or persuasiveness. This is classic analytical communication.",
          observation:
            "Notice how Rachel treats vague positive language as a problem to solve, not a minor issue to overlook. For analytical communicators, imprecision is a credibility risk.",
          coachingTip:
            "When someone questions the evidence behind every positive claim and insists on numerical backing, they are operating in an analytical style. Respond with data, sources, and precise language.",
          styleContext:
            "Analytical communicators see presentations as evidence submissions. Every claim is either supported or it is a liability. There is no middle ground.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about removing unsupported claims, which can look direct. But notice the motivation is accuracy, not speed. Rachel wants to get it right, not get it done fast.",
          observation:
            "A direct communicator would say 'cut the fluff and get to the point'. Rachel says 'show me the evidence or remove the claim'. The underlying value is different.",
          coachingTip:
            "If someone removes content because it lacks evidence, that is analytical. If they remove content because it wastes time, that is direct. Rachel is driven by rigour, not efficiency.",
          styleContext:
            "Analytical communicators and direct communicators both prefer concise presentations, but for different reasons. Analytical wants precision. Direct wants speed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not asked for the presentation to be more engaging, more inspiring, or better at connecting with the audience emotionally. Her criteria are entirely about accuracy and evidence.",
          observation:
            "There is no mention of storytelling, audience engagement, or emotional impact. Rachel measures presentation quality by intellectual rigour, not by how it makes people feel.",
          coachingTip:
            "Ask yourself: is this person trying to engage or to prove? Rachel wants every slide to be defensible under scrutiny. That is an analytical priority.",
          styleContext:
            "Analytical communicators prepare for presentations by imagining the toughest questions the audience could ask. Every slide should pre-answer those questions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has flagged that a bar chart has a misleading truncated y-axis that exaggerates a small improvement. How do you respond?",
      options: [
        {
          id: "s274-opt-a",
          text: "Good catch. I will reset the axis to start at zero. I will also add the actual percentage change as a data label on each bar so the audience can see the precise improvement regardless of the visual scale.",
          score: 10,
          result: "strong",
          explanation:
            "You fixed the core issue and added an extra layer of precision with data labels. This demonstrates the analytical thoroughness Rachel values.",
        },
        {
          id: "s274-opt-b",
          text: "I see what you mean. I will add a footnote explaining that the axis is truncated to show the trend more clearly. That way the audience knows the scale.",
          score: 5,
          result: "partial",
          explanation:
            "A footnote is better than nothing, but Rachel has already suggested this as a minimum. Fixing the axis entirely would be the stronger response. Footnotes are a compromise, not a solution.",
        },
        {
          id: "s274-opt-c",
          text: "I think the current formatting actually helps tell the story better. If we start at zero, the improvement will barely be visible and the leadership team might miss the positive trend.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly what Rachel is trying to prevent. Making a small improvement look larger through chart formatting is the kind of misrepresentation she considers a credibility risk.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write the executive summary slide with three to four bullet points, each with a headline finding, supporting data, and source. No vague adjectives. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Executive Summary - Q3 Performance\n\n1. Revenue grew 7.2% quarter-on-quarter, reaching 4.1M (source: finance ledger, 30 Sept close). This exceeds the 5% target set in the Q2 review.\n\n2. Customer satisfaction score rose from 78 to 81 (NPS survey, n=1,240, Sept). The three-point increase was driven primarily by reduced response times in the support team.\n\n3. Employee attrition fell from 14% to 11% annualised (HR data, rolling 12 months). Exit interview data attributes this to the flexible working policy introduced in Q2.\n\n4. Project delivery rate held steady at 88% on time (PMO tracker, 47 projects closed). This is below the 92% target and root cause analysis is underway.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every finding is specific, evidenced, and sourced. Rachel could present this slide without adding a single word of explanation because the data speaks for itself.",
          observation:
            "You included sample sizes, date ranges, and comparisons to targets. This level of specificity is what analytical communicators consider baseline quality for a leadership presentation.",
          coachingTip:
            "When writing for analytical communicators, treat every bullet point as a mini research finding. Claim, evidence, source. If any element is missing, the bullet is incomplete.",
          styleContext:
            "Analytical communicators believe that well-sourced data is more persuasive than any amount of narrative. The numbers do the talking.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether every finding has a specific number, a comparison point, and a source. If any bullet says 'improved' without saying by how much, it needs tightening.",
          observation:
            "If your bullet points include phrases like 'showed strong improvement' or 'continued to trend positively', they are too vague for Rachel's standards.",
          coachingTip:
            "Replace every adjective with a number. 'Strong improvement' becomes '7.2% increase'. 'Positive trend' becomes 'three consecutive months of growth'.",
          styleContext:
            "Analytical communicators treat adjectives as the enemy of clarity. Every descriptive word should be replaced with a specific measurement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either lacks specific numbers, relies on vague positive language, or does not include sources. Rachel would reject this and ask you to start again.",
          observation:
            "If your summary reads like a press release rather than a data review, it has missed the analytical style entirely.",
          coachingTip:
            "Before submitting, check each bullet: does it have a number? A comparison? A source? If any answer is no, fix it before Rachel sees it.",
          styleContext:
            "Analytical communicators see unsourced claims in presentations as a sign that the presenter has not done the work. Evidence is not optional - it is the foundation.",
        },
      },
    },
  },

  // Scenario 275 - Owen Grant, presentation, intermediate
  {
    id: "scenario-275",
    title: "The Risk Assessment Briefing",
    context:
      "Owen is preparing a risk assessment presentation for the project steering committee. He wants the presentation to systematically categorise risks, quantify their potential impact, and propose evidence-based mitigations.",
    chooseContext:
      "Owen has reviewed the first draft and found that risks are listed without severity ratings, probability estimates, or mitigation costs. He wants the presentation restructured around a proper risk matrix.",
    rewriteContext:
      "Owen has asked you to write the summary slide that presents the top five risks with their probability, impact, and recommended mitigation, in a format the steering committee can use to make investment decisions.",
    characterId: "owen-grant",
    dialogue:
      "This is a list of worries, not a risk assessment. A risk needs three things: a probability rating, an impact estimate in financial terms, and a proposed mitigation with a cost. Without all three, we are just guessing. Restructure this around a proper framework before we show it to anyone.",
    chooseDialogue:
      "Risk number three says 'potential system failure during migration'. Potential means nothing. What is the likelihood based on our last three migrations? What is the financial exposure if it happens? And what would it cost to add a parallel running period? Give me the numbers, not the narrative.",
    rewriteDialogue:
      "Write the top five risks slide. Each risk needs a one-line description, a probability rating from one to five, an impact estimate in pounds, and the recommended mitigation with its cost. I want the committee to see the cost of action versus the cost of inaction on one slide.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has rejected a risk list because it lacks probability ratings, financial impact estimates, and costed mitigations. He wants every risk quantified using a structured framework. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen demands a systematic framework with quantified data points for every risk. He evaluates the presentation by its analytical rigour, not its persuasiveness or brevity. This is analytical communication applied to risk management.",
          observation:
            "Notice how Owen defines what makes a risk assessment complete: probability, impact, mitigation cost. Without all three, it fails his quality test. Analytical communicators think in frameworks.",
          coachingTip:
            "When someone rejects a presentation for lacking a systematic framework and quantified evidence, they are revealing an analytical style. Respond with structured data, not opinions.",
          styleContext:
            "Analytical communicators see risk assessment as a mathematical exercise. Every risk should be reducible to a probability multiplied by an impact, compared against a mitigation cost.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Owen is decisive in rejecting the draft, which can look direct. But notice he is not saying 'cut this and get to the point'. He is saying 'restructure this around a proper framework'. He wants more rigour, not less content.",
          observation:
            "A direct communicator would strip the list down to the top three risks and make a decision. Owen wants all risks properly categorised and quantified before any decisions are made.",
          coachingTip:
            "If someone wants more data and a better framework, that is analytical. If they want less data and a faster decision, that is direct. Owen wants depth and structure.",
          styleContext:
            "Analytical communicators expand the information base before deciding. Direct communicators compress it. Both want clarity but through different means.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not asked for the presentation to be more engaging or for the risks to be framed in a way that motivates the team. His criteria are entirely about data quality and methodological soundness.",
          observation:
            "There is no concern about audience engagement, emotional impact, or team morale. Owen evaluates presentations purely on their analytical integrity.",
          coachingTip:
            "Ask yourself: is this person trying to inform accurately or to influence effectively? Owen is focused on accuracy. The influence comes from the quality of the evidence.",
          styleContext:
            "Analytical communicators believe that a well-structured, properly evidenced presentation is inherently persuasive. The data should convince; the presenter should merely present.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has asked for specific probability and financial impact data for a system migration risk. He wants numbers, not narrative. How do you respond?",
      options: [
        {
          id: "s275-opt-a",
          text: "Based on our last three migrations, we experienced partial failures in two out of three. That gives us a probability rating of four out of five. The financial exposure from the last failure was 120,000 pounds in lost productivity over two weeks. A parallel running period would cost approximately 35,000 pounds. The cost-benefit case for the mitigation is clear.",
          score: 10,
          result: "strong",
          explanation:
            "You provided exactly what Owen asked for: historical probability data, a financial impact figure, and a costed mitigation. The comparison between cost and exposure allows Owen to make an evidence-based recommendation.",
        },
        {
          id: "s275-opt-b",
          text: "Migrations are always risky. I would rate this as high probability and high impact. We should definitely consider a parallel running period as a precaution.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally correct but lacking the specific numbers Owen demanded. 'High probability' and 'high impact' are qualitative assessments, not quantified ones. Owen wants figures, not adjectives.",
        },
        {
          id: "s275-opt-c",
          text: "I think we are overcomplicating this. The IT team is confident the migration will go smoothly. We should trust their expertise rather than building complex risk models around something they have done before.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Owen's entire framework. He specifically asked for evidence-based assessment, and you have offered opinion-based reassurance. Owen will interpret this as intellectual laziness.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write the top five risks slide with probability, financial impact, and costed mitigations. The steering committee needs to see cost of action versus cost of inaction. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Top Five Project Risks - Quantified Assessment\n\n1. System migration failure\n   Probability: 4/5 (based on 2/3 historical partial failures)\n   Impact: 120,000 pounds (lost productivity, two-week recovery)\n   Mitigation: Parallel running period - cost 35,000 pounds\n   Net risk reduction: 85,000 pounds\n\n2. Key supplier contract delay\n   Probability: 3/5 (supplier has missed two of last five deadlines)\n   Impact: 200,000 pounds (project delay of four weeks at current burn rate)\n   Mitigation: Secondary supplier on standby - cost 15,000 pounds retainer\n   Net risk reduction: 185,000 pounds\n\n3. Staff turnover in delivery team\n   Probability: 3/5 (two of six team members have flagged external offers)\n   Impact: 90,000 pounds (recruitment and onboarding per replacement)\n   Mitigation: Retention bonuses for critical roles - cost 20,000 pounds\n   Net risk reduction: 70,000 pounds\n\n4. Regulatory change affecting scope\n   Probability: 2/5 (consultation paper expected Q4, no confirmed timeline)\n   Impact: 150,000 pounds (estimated rework of compliance module)\n   Mitigation: Modular architecture to isolate compliance components - cost 25,000 pounds\n   Net risk reduction: 125,000 pounds\n\n5. Client requirements change post-sign-off\n   Probability: 3/5 (occurred in two of last four comparable projects)\n   Impact: 80,000 pounds (average scope increase from historical data)\n   Mitigation: Change control process with financial cap per change - cost 5,000 pounds to implement\n   Net risk reduction: 75,000 pounds\n\nTotal mitigation investment: 100,000 pounds\nTotal risk exposure mitigated: 540,000 pounds\nReturn on mitigation: 5.4 to 1",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every risk is quantified with consistent formatting, historical evidence for probability ratings, and a clear cost-benefit calculation. Owen would present this with confidence.",
          observation:
            "You included a total mitigation investment versus total risk exposure calculation at the bottom, which gives the steering committee a single number to anchor their decision. Analytical communicators love summary ratios.",
          coachingTip:
            "When writing risk slides for analytical communicators, consistency of format matters as much as accuracy of data. Every risk should follow the same structure so comparisons are easy.",
          styleContext:
            "Analytical communicators present risks as investment decisions. The steering committee should be able to approve mitigations by looking at the numbers alone, without needing narrative persuasion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framework, but check whether every risk has all four elements: probability with evidence, impact in financial terms, mitigation with cost, and net risk reduction. If any are missing, the slide is incomplete.",
          observation:
            "If any probability rating is not supported by historical data or a clear rationale, Owen will question it. 'High' is not a number.",
          coachingTip:
            "For each probability rating, add one sentence explaining the basis. 'Based on two failures in three attempts' is more credible than 'based on team assessment'.",
          styleContext:
            "Analytical communicators want probability ratings to be defensible, not just plausible. Every number should have a story behind it that can withstand scrutiny.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your slide either lacks quantified data, uses qualitative risk ratings instead of numbers, or does not include costed mitigations. Owen's framework requires all three for every risk.",
          observation:
            "If your risks are described as 'high', 'medium', or 'low' without financial figures, the steering committee cannot make an investment decision.",
          coachingTip:
            "Convert every qualitative assessment to a quantitative one. 'High risk' becomes '4/5 probability with 200,000 pound exposure'. The numbers are what make it actionable.",
          styleContext:
            "Analytical communicators reject qualitative risk assessments because they rely on interpretation. Quantified risks leave no room for ambiguity.",
        },
      },
    },
  },

  // Scenario 276 - Fiona Banks, presentation, advanced
  {
    id: "scenario-276",
    title: "The Methodology Defence",
    context:
      "Fiona is presenting her team's research methodology to an academic advisory board. The board will challenge the approach and Fiona needs every methodological choice to be defensible with clear reasoning.",
    chooseContext:
      "A board member has challenged Fiona's sample size as too small to draw meaningful conclusions. Fiona needs to defend her approach with statistical reasoning.",
    rewriteContext:
      "Fiona has asked you to write the methodology justification section of the presentation, explaining each key methodological choice with its rationale and limitations.",
    characterId: "fiona-banks",
    dialogue:
      "Every methodological choice in this presentation needs a rationale. Why this sample size? Why this time period? Why qualitative over quantitative for the second phase? If I cannot explain the reasoning behind each decision, the board will, rightly, question the validity of the findings. I would rather over-prepare than under-defend.",
    chooseDialogue:
      "The sample size is 84, which I know sounds small. But for this population - specialist practitioners in a niche field - 84 represents a 68% response rate. The confidence interval at 95% is plus or minus 5.2%. That is within acceptable bounds for an exploratory study. I am not claiming generalisability. I am claiming indicative findings with a clear path to a larger study.",
    rewriteDialogue:
      "Write the methodology section. For each choice - sample, method, timeframe, analysis approach - include the rationale, the alternative we considered, and the limitation we are transparent about. The board will respect rigour. They will not respect gaps.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona is preparing to defend every methodological choice in her research presentation, insisting on clear rationale for sample size, time period, and analytical approach, and preferring to over-prepare rather than under-defend. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona approaches the presentation as an intellectual defence, where every choice must withstand scrutiny. She values rigour, transparency about limitations, and methodological defensibility. This is advanced analytical communication.",
          observation:
            "The phrase 'I would rather over-prepare than under-defend' reveals Fiona's core value: thoroughness as a form of respect for the audience and the subject matter.",
          coachingTip:
            "When someone prepares for a presentation by anticipating every possible challenge and preparing an evidence-based defence, they are operating in a deeply analytical style.",
          styleContext:
            "Analytical communicators see presentations to expert audiences as intellectual exercises. Being challenged is expected and welcomed - what matters is the quality of the response.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Fiona's decisiveness about preparation standards could look direct. But notice that she is not trying to save time or cut to the conclusion. She wants more preparation, not less.",
          observation:
            "A direct communicator would focus on presenting the findings concisely and handling challenges in the moment. Fiona wants every possible challenge pre-answered in the slides themselves.",
          coachingTip:
            "If someone wants to add more supporting evidence to a presentation, that is analytical. If they want to strip a presentation back to key messages, that is direct. Fiona is building depth, not brevity.",
          styleContext:
            "Analytical communicators prepare for expert presentations by building layers of evidence. Direct communicators prepare by sharpening the headline message.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not asked for the presentation to tell a compelling story, connect with the board emotionally, or build enthusiasm for the research. Her focus is entirely on intellectual credibility.",
          observation:
            "There is no mention of engagement, rapport, or making the research feel exciting. Fiona measures success by whether the methodology survives scrutiny, not by whether the audience enjoys the presentation.",
          coachingTip:
            "Ask yourself: is this person trying to persuade through evidence or through connection? Fiona wants the evidence to be so rigorous that persuasion is automatic.",
          styleContext:
            "Analytical communicators believe that with expert audiences, the quality of the evidence is the presentation. Storytelling is secondary to substance.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A board member has challenged Fiona's sample size of 84 as too small. Fiona has defended it with response rate and confidence interval data. The board member asks why she did not pursue a larger sample. How do you support Fiona?",
      options: [
        {
          id: "s276-opt-a",
          text: "The population of specialist practitioners in this field is 124 in total. Our 84 responses represent a 68% capture rate. We attempted to reach all 124 through three contact methods over a six-week period. The remaining 40 were non-responsive after two follow-ups. A larger sample was not achievable within the study parameters without compromising response quality through incentive-driven participation.",
          score: 10,
          result: "strong",
          explanation:
            "You provided the full context that explains why the sample is actually strong relative to the available population. The detail about methodology for reaching non-respondents shows rigour that the board will respect.",
        },
        {
          id: "s276-opt-b",
          text: "We did try to get a larger sample but the response rate plateaued after four weeks. We felt that 84 was a solid number for an exploratory study and decided to proceed rather than delay further.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally helpful but lacks the specific detail Fiona would provide. How many were contacted? Through what methods? What was the total population? The board needs these specifics.",
        },
        {
          id: "s276-opt-c",
          text: "I think the quality of the responses matters more than the quantity. We spoke to experienced practitioners who gave us rich, detailed insights. A larger sample of less experienced people would not have been as valuable.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts from quantitative to qualitative justification, which does not answer the board's statistical concern. Fiona has already positioned this as a quantitative study with confidence intervals. Changing the frame undermines her defence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write the methodology justification section. For each choice, include the rationale, the alternative considered, and the acknowledged limitation. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Methodology Justification\n\n1. Sample selection\n   Choice: Census approach targeting all 124 identified specialist practitioners.\n   Rationale: Population is small enough for a census rather than a sample. This eliminates sampling bias and maximises representativeness.\n   Alternative considered: Stratified random sample of 60. Rejected because the small population size made a census achievable and more defensible.\n   Limitation: 40 non-respondents may hold systematically different views. Non-response bias analysis conducted; no significant demographic differences found between respondents and non-respondents.\n\n2. Data collection method\n   Choice: Structured online survey with 15 closed questions and 5 open-response items.\n   Rationale: Standardised format enables statistical analysis while open responses capture nuance. Completion rate was monitored and held at 92%, suggesting the length was appropriate.\n   Alternative considered: Semi-structured interviews. Rejected for phase one due to resource constraints and the need for quantifiable baseline data. Retained for phase two.\n   Limitation: Survey responses lack the depth of interviews. Mitigated by the inclusion of open-response items and the planned phase two qualitative follow-up.\n\n3. Analysis approach\n   Choice: Descriptive statistics with thematic analysis of open responses using a pre-defined coding framework.\n   Rationale: The exploratory nature of the study does not support inferential claims. Descriptive statistics provide an accurate picture of the respondent population without overstating generalisability.\n   Alternative considered: Regression analysis to identify predictors. Rejected because the sample size does not support reliable multivariate modelling.\n   Limitation: Findings are indicative, not generalisable. This is stated explicitly in the conclusions and recommendations sections.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each methodological choice follows a consistent structure: choice, rationale, alternative, limitation. This demonstrates the intellectual rigour the board expects and Fiona demands.",
          observation:
            "You were transparent about limitations without being apologetic. Analytical communicators know that acknowledging limitations strengthens credibility rather than weakening it.",
          coachingTip:
            "When writing methodology sections for analytical communicators, always include the alternative you rejected and why. It shows the choice was deliberate, not default.",
          styleContext:
            "Analytical communicators believe that the strongest defence of a method is showing you considered the alternatives and made an informed choice. Unchallenged decisions look unconsidered.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each choice includes all four elements: the decision, the rationale, the alternative considered, and the acknowledged limitation. If any are missing, the section is incomplete.",
          observation:
            "If any methodological choice is presented without a considered alternative, Fiona will worry the board will ask 'why not X?' and there will be no prepared answer.",
          coachingTip:
            "For each choice, imagine a sceptical board member asking 'why did you not do it differently?' Your alternative-considered section should pre-answer that question.",
          styleContext:
            "Analytical communicators pre-empt challenges by showing their working. Every decision should look deliberate, considered, and defensible.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your methodology section either lacks structure, does not include alternatives and limitations, or reads as a description of what was done rather than a defence of why it was done.",
          observation:
            "If your section reads like a methods chapter from a textbook rather than a justified defence of specific choices, it will not survive the board's scrutiny.",
          coachingTip:
            "Rewrite each paragraph by starting with the question: 'Why did we choose this approach over the alternatives?' That reframes description into justification.",
          styleContext:
            "Analytical communicators see the difference between describing a method and defending it. The board does not need to know what you did - they need to know why it was the right choice.",
        },
      },
    },
  },
];
