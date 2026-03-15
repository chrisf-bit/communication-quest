import { Scenario } from "@/types";

export const SCENARIOS_PART20: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (229-231)
  // ============================================

  // Scenario 229 - Jordan Cole, client, foundation
  {
    id: "scenario-229",
    title: "The Client Onboarding Call",
    context:
      "A new enterprise client has just signed a 12-month contract. Jordan is leading the kickoff call to establish timelines, deliverables, and ways of working. The client team has five people on the call.",
    chooseContext:
      "The client's project lead has suggested a fortnightly check-in meeting to keep things on track. Jordan thinks that is too frequent for the scope of work and wants to propose a leaner cadence.",
    rewriteContext:
      "Jordan has asked you to draft a follow-up email to the client confirming the agreed onboarding milestones, owners, and deadlines from the kickoff call.",
    characterId: "jordan-cole",
    dialogue:
      "Thank you for joining. We have 30 minutes and three things to agree: the delivery timeline, who owns what, and how we communicate. I do not want to leave this call without all three nailed down.",
    chooseDialogue:
      "Fortnightly is overkill for a project this size. Monthly is enough, with a shared tracker updated in real time. If something goes wrong between meetings, pick up the phone. We do not need a standing call to tell each other things are on track.",
    rewriteDialogue:
      "Send the client a summary today. Three sections: milestones with dates, named owners for each deliverable, and the communication plan. Keep it to one page. If they have to scroll, it is too long.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "client",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened a client kickoff call by setting a 30-minute limit and listing exactly three outcomes that must be agreed before the call ends. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan immediately sets a time boundary, lists exactly what needs to happen, and makes it clear that leaving without agreement is not an option. This is textbook direct communication.",
          observation:
            "Notice there is no small talk, no relationship-building preamble, and no open-ended questions. Jordan treats the kickoff as a decision-making session, not a getting-to-know-you exercise.",
          coachingTip:
            "When someone opens a client call with a numbered list of required outcomes and a strict time limit, they are signalling a direct style. Come prepared with answers, not questions.",
          styleContext:
            "Direct communicators believe the best way to start a client relationship is by demonstrating efficiency and decisiveness, not warmth.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan is structured, which can appear analytical. But the emphasis is on speed and commitment to decisions, not on thoroughness or evidence-gathering.",
          observation:
            "An analytical communicator would open with a detailed agenda and time allocations for each topic. Jordan simply names the three outcomes and drives toward them.",
          coachingTip:
            "If someone uses structure to reach decisions quickly, that is direct. If they use structure to ensure nothing is overlooked, that is analytical. Jordan prioritises speed.",
          styleContext:
            "Direct communicators see a structured kickoff as a tool for momentum, not for completeness. They want commitment, not consensus.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not asked the client how they prefer to work, explored team dynamics, or spent time building rapport. The entire opening is task-focused.",
          observation:
            "There are no open questions about the client's expectations, no acknowledgement of how the team is feeling about the project, and no attempt to create a collaborative atmosphere.",
          coachingTip:
            "Ask yourself: is this person prioritising the relationship or the outcome? Jordan is entirely focused on leaving the call with clear agreements.",
          styleContext:
            "Direct communicators build client trust through delivery, not through conversation. Getting things agreed quickly is their version of making a good first impression.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has pushed back on fortnightly check-ins and proposed monthly meetings with a live tracker instead. The client looks hesitant. How do you support Jordan's position?",
      options: [
        {
          id: "s229-opt-a",
          text: "Monthly works if the tracker is live. We update it every Friday and you have full visibility. If something needs attention sooner, we call you directly.",
          score: 10,
          result: "strong",
          explanation:
            "You reinforce Jordan's proposal with a practical mechanism that addresses the client's concern about losing visibility. The tone is confident and solution-oriented.",
        },
        {
          id: "s229-opt-b",
          text: "We could start with fortnightly for the first two months and then move to monthly once the relationship is established. That way both sides feel comfortable.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but it softens Jordan's position before the client has even objected formally. Jordan may see this as backing down prematurely.",
        },
        {
          id: "s229-opt-c",
          text: "I think regular check-ins are really valuable for building trust, especially at the start. Perhaps we should keep fortnightly and revisit in a few months when we know each other better.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Jordan's position in front of the client. A direct communicator will see this as undermining the internal team's stance during a negotiation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to send the client a one-page summary of the kickoff outcomes covering milestones, owners, and the communication plan. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Kickoff Summary - Agreed Actions\n\nThank you for today's call. Below is what we agreed.\n\nMilestones:\n- Discovery complete: 14 March\n- First prototype delivered: 11 April\n- User testing round 1: 2 May\n- Final delivery: 30 May\n\nOwners:\n- Discovery and requirements: Jordan Cole (our side), Sarah Lin (your side)\n- Design and build: Dev team, led by Marcus Webb\n- Testing coordination: Your QA lead, TBC by Friday\n\nCommunication:\n- Monthly check-in, first Tuesday of each month\n- Live tracker shared via link (updated every Friday)\n- Urgent items: direct call, no waiting for scheduled meetings\n\nPlease confirm this matches your understanding by end of day Thursday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, specific, and every item has a date or a named owner. Jordan would send this without edits.",
          observation:
            "You avoided filler phrases and went straight to the content. Each section answers a clear question: what, who, when, how.",
          coachingTip:
            "When writing client summaries for direct communicators, treat every sentence as a commitment. If it does not commit someone to something, cut it.",
          styleContext:
            "Direct communicators use follow-up emails as accountability tools. The clearer the commitments, the harder they are to renegotiate later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every item has a specific date and owner. Phrases like 'in the coming weeks' or 'to be discussed' weaken the summary.",
          observation:
            "If your milestones lack dates or your owners are described as 'the team' rather than named individuals, the email loses its accountability function.",
          coachingTip:
            "Replace every vague reference with a specific one. 'Soon' becomes a date. 'The team' becomes a name. Precision is the currency of direct communication.",
          styleContext:
            "Direct communicators judge follow-up emails by whether they can be used to hold people accountable three months later. Vagueness fails that test.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too vague, or spends too much time on relationship-building language rather than confirming specific commitments.",
          observation:
            "If your email opens with two paragraphs about how excited you are to work together, the actual content gets buried and the client has to work to find the commitments.",
          coachingTip:
            "Write the email, then delete everything that is not a date, a name, or a deliverable. What remains is what Jordan wants to send.",
          styleContext:
            "Direct communicators believe that the fastest way to build client confidence is to demonstrate organisation, not to express enthusiasm.",
        },
      },
    },
  },

  // Scenario 230 - Sam Hartley, client, intermediate
  {
    id: "scenario-230",
    title: "The Scope Creep Confrontation",
    context:
      "A long-standing client has been gradually adding requirements outside the original scope without adjusting the budget. Sam has decided to address this head-on in the next review meeting.",
    chooseContext:
      "Sam has laid out the additional work completed outside scope and asked the client to agree a change request. The client is pushing back, saying these were always implied in the original brief.",
    rewriteContext:
      "Sam has asked you to prepare a scope comparison document showing the original brief versus the work actually delivered, with a clear line between what was contracted and what was added.",
    characterId: "sam-hartley",
    dialogue:
      "We need to talk about scope. In the last eight weeks, we have delivered four features that were not in the original brief. I am not complaining about the work - it is good work - but we cannot keep absorbing it. Today we agree how to handle this going forward.",
    chooseDialogue:
      "I hear you that it felt implied, but the signed brief does not mention any of these four items. If we had quoted for them, the project would be 20% more expensive. I am not asking you to pay retrospectively. I am asking you to approve a change request for the next phase.",
    rewriteDialogue:
      "Put together a one-page scope comparison. Left column: original brief. Right column: what we actually delivered. Highlight the additions. Do not editorialize - let the facts make the case.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has opened a client meeting by stating that four out-of-scope features have been delivered without budget adjustment and demanding an agreement on how to proceed. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam names the issue immediately, quantifies the problem, and frames the meeting around a required decision. There is no softening or apology for raising an uncomfortable topic.",
          observation:
            "Notice Sam says 'we agree how to handle this' rather than 'we should discuss this'. The language assumes a decision will be made, not that a conversation will be had.",
          coachingTip:
            "When someone raises a difficult client issue by quantifying it and demanding a resolution in the same breath, they are operating in a direct style. Respond with specifics, not platitudes.",
          styleContext:
            "Direct communicators treat scope conversations as business discussions, not awkward confrontations. They believe that being upfront about money protects the relationship long term.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam references specific numbers and comparisons, which can appear analytical. But the intent is to force a decision, not to invite a detailed review of each item.",
          observation:
            "An analytical communicator would walk through each of the four features, explain why each falls outside scope, and present a costing model. Sam summarises and moves to the ask.",
          coachingTip:
            "Direct communicators use data to support a position they have already taken. Analytical communicators use data to help reach a position. Sam has already decided what needs to happen.",
          styleContext:
            "Direct communicators in scope discussions want agreement on the principle first, then the detail. Analytical communicators want to establish the detail first, then agree the principle.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not tried to smooth over the issue, check how the client is feeling, or frame the conversation around the relationship. This is a business discussion about money and commitments.",
          observation:
            "There is no empathetic preamble, no acknowledgement of the client's pressures, and no attempt to make the client comfortable before raising the issue.",
          coachingTip:
            "Ask yourself: is this person prioritising the relationship or the commercial reality? Sam is protecting the business position, not the emotional connection.",
          styleContext:
            "Direct communicators believe that avoiding difficult commercial conversations damages relationships more than having them. Honesty about money builds trust.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client says the extra features were always implied in the brief. Sam has pushed back with evidence and proposed a change request for the next phase. How do you support Sam?",
      options: [
        {
          id: "s230-opt-a",
          text: "Sam is right. The signed brief is specific, and these four items are not in it. A change request is standard practice and protects both sides. We can have it drafted by tomorrow with costs attached.",
          score: 10,
          result: "strong",
          explanation:
            "You back Sam's position clearly, reinforce the process, and offer a concrete next step with a timeline. This matches the direct approach of moving to resolution.",
        },
        {
          id: "s230-opt-b",
          text: "Maybe we could absorb two of the smaller items as goodwill and formalise the bigger two as a change request. That way neither side feels like they have lost.",
          score: 5,
          result: "partial",
          explanation:
            "A pragmatic compromise, but Sam has already framed this as a principle about scope management, not a negotiation about individual items. This may dilute the message.",
        },
        {
          id: "s230-opt-c",
          text: "I understand this feels uncomfortable. These things happen on complex projects and no one is at fault. Perhaps we should schedule a separate session to go through each item in detail and find a resolution everyone is happy with.",
          score: 0,
          result: "weak",
          explanation:
            "This delays the decision Sam is trying to reach and frames the conversation as a conflict to be managed rather than a business matter to be resolved. Sam will see this as stalling.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to create a one-page scope comparison document showing original brief versus actual delivery. Write the email that accompanies it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Scope Comparison - Original Brief vs Delivered Work\n\nAttached is the scope comparison document we discussed.\n\nLeft column: the 12 deliverables listed in the signed brief.\nRight column: the 16 deliverables actually completed.\n\nThe four additional items are highlighted. Combined, they represent roughly 20% of the total project effort.\n\nWe are not seeking retrospective payment. We are asking for a formal change request to cover equivalent additions in Phase 2.\n\nPlease review and confirm whether you are happy to proceed on that basis by Friday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is factual, structured, and includes a clear ask with a deadline. Sam would attach the document and hit send.",
          observation:
            "You let the data speak for itself and kept the ask simple. No editorialising, no blame, just facts and a proposed way forward.",
          coachingTip:
            "When writing scope emails for direct communicators, present the evidence briefly and make the ask explicit. The document does the heavy lifting; the email just points to the conclusion.",
          styleContext:
            "Direct communicators handle scope disputes by making the facts undeniable and the ask reasonable. They do not need to win the argument - they need to win the decision.",
        },
        partial: {
          result: "partial",
          explanation:
            "Getting there, but check whether your email makes a clear ask or leaves the next step ambiguous. Phrases like 'let us know your thoughts' are too open-ended for Sam.",
          observation:
            "If your email presents the comparison but does not state what you want the client to do about it, you have given them information without a call to action.",
          coachingTip:
            "Every scope email should end with a specific request and a date. 'Please confirm by Friday' is direct. 'Let us discuss when convenient' is not.",
          styleContext:
            "Direct communicators see scope emails as decision prompts, not discussion starters. If the email does not end with an action, it has failed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too apologetic, too long, or focuses more on preserving the relationship than resolving the commercial issue.",
          observation:
            "If your email includes phrases like 'we completely understand how this happened' or 'we value our partnership enormously', it is burying the business message in relationship language.",
          coachingTip:
            "Write the email, then remove every sentence that does not contain a fact or a request. What remains is what Sam wants to send.",
          styleContext:
            "Direct communicators believe that clear, factual communication about money is a sign of professionalism, not aggression. Softening the message suggests you are uncomfortable with the truth.",
        },
      },
    },
  },

  // Scenario 231 - Alex Tran, client, advanced
  {
    id: "scenario-231",
    title: "The Client Retention Crisis",
    context:
      "A major client has informed your account team that they are considering moving to a competitor at the end of the current contract. Alex has been asked to lead the retention conversation and has 48 hours to prepare a response.",
    chooseContext:
      "Alex is in the retention meeting. The client has listed three reasons for considering a move: slow response times, lack of innovation, and a competitor offering a lower price. Alex is addressing each point directly.",
    rewriteContext:
      "Alex has asked you to draft a retention proposal that addresses the client's three concerns with specific commitments, not promises. The document needs to be ready for the client's board meeting tomorrow.",
    characterId: "alex-tran",
    dialogue:
      "Let me be honest. Losing you would hurt our revenue. But more importantly, I think you are about to make a decision based on incomplete information. Give me 20 minutes to address your three concerns with specifics, and then you can make a fully informed call.",
    chooseDialogue:
      "Response times - you are right, they slipped in Q3. We have already restructured the support team and your average response time this month is down to four hours. Innovation - I have a roadmap here showing three features launching in the next quarter that directly address your brief from September. Price - the competitor is cheaper because they are not offering the same service level. If you want, I can show you the comparison line by line.",
    rewriteDialogue:
      "Write the retention proposal tonight. Three sections matching their three complaints. Each section: what went wrong, what we have already fixed, and what we commit to going forward. Numbers, not adjectives. If it reads like a sales pitch, start again.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "client",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Alex has responded to a client retention crisis by acknowledging the commercial impact honestly, challenging the client's decision-making process, and demanding 20 minutes to present specific counter-arguments. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex leads with honesty about the commercial stakes, challenges the client's process rather than their feelings, and sets a tight time frame to make the case. This is advanced direct communication under pressure.",
          observation:
            "The phrase 'based on incomplete information' reframes the client's decision as premature rather than wrong. It is a direct challenge disguised as a favour - giving them better data to decide with.",
          coachingTip:
            "When a direct communicator faces a crisis, they acknowledge reality, challenge the narrative, and demand space to present their case. Match that energy with evidence and specifics.",
          styleContext:
            "Direct communicators in retention situations believe the best defence is a factual offence. They do not plead for loyalty - they prove their value.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does present structured arguments and data, which looks analytical. But notice the overall approach is assertive persuasion, not measured analysis. Alex is fighting for a decision, not conducting a review.",
          observation:
            "An analytical communicator would ask for time to prepare a thorough comparison document. Alex walks in ready to argue on the spot with 20 minutes and three pre-prepared counter-points.",
          coachingTip:
            "The distinction is pace and intent. Analytical communicators want to present evidence for consideration. Direct communicators present evidence to win an argument.",
          styleContext:
            "Direct communicators use data as ammunition in retention conversations. The goal is not to inform - it is to convince.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not appealed to the length of the relationship, expressed hurt at the potential departure, or asked the client how they feel about the situation.",
          observation:
            "There is no emotional appeal, no mention of shared history, and no attempt to connect on a personal level. Alex treats this as a business problem with a business solution.",
          coachingTip:
            "Ask yourself: is this person trying to save the relationship through connection or through evidence? Alex is firmly in the evidence camp.",
          styleContext:
            "Direct communicators believe that in retention situations, emotion signals desperation. Facts and commitments signal strength.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has systematically addressed the client's three concerns with data and is now challenging the competitor's pricing on a like-for-like basis. The client asks for time to think. How do you respond?",
      options: [
        {
          id: "s231-opt-a",
          text: "Of course. The retention proposal with all three commitments will be in your inbox by 9am tomorrow, ahead of your board meeting. You will have everything you need.",
          score: 10,
          result: "strong",
          explanation:
            "You respect the request for time while maintaining momentum. Committing to a written proposal with a specific deadline keeps the process moving and demonstrates reliability.",
        },
        {
          id: "s231-opt-b",
          text: "That makes sense. These are big decisions. Would it help if we set up a follow-up call later this week to answer any remaining questions your team might have?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but it introduces delay without a clear output. Alex has already presented the case - a follow-up call risks reopening issues that have been addressed.",
        },
        {
          id: "s231-opt-c",
          text: "We completely understand and respect whatever decision you make. We just want you to know how much we value this partnership and how much your business means to us personally.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the direct approach entirely. It signals acceptance of the potential loss rather than confidence in the case just presented. Alex would see this as surrendering ground that was hard won.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a retention proposal with three sections covering response times, innovation, and pricing. Each section must show what went wrong, what has been fixed, and what you commit to. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Retention Proposal - Confidential\n\n1. Response Times\nProblem: Average response time in Q3 was 12 hours against a target of 4 hours.\nAction taken: Support team restructured in October. Dedicated account manager assigned.\nCommitment: 4-hour average response time, measured monthly. If we miss the target in any month, we credit 5% of that month's invoice.\n\n2. Innovation\nProblem: No new features aligned to your September brief were delivered in Q3 or Q4.\nAction taken: Three features from your brief are now in development.\nCommitment: All three features live by end of Q2. Quarterly roadmap reviews with your product team to ensure ongoing alignment.\n\n3. Pricing\nProblem: Competitor has offered a lower headline price.\nAction taken: We have prepared a line-by-line comparison showing service scope differences.\nCommitment: We will match the competitor's price for equivalent scope. The attached comparison shows what is included and excluded in each offer.\n\nWe are asking for a 12-month renewal on these terms. The commitments above are contractual, not aspirational.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal is structured, specific, and every commitment is measurable. Alex would present this to the client's board with confidence.",
          observation:
            "You included accountability mechanisms like credits for missed targets. This is what separates a direct commitment from a vague promise.",
          coachingTip:
            "When writing retention proposals for direct communicators, every commitment must be measurable and have a consequence. If you cannot measure it, it is not a commitment.",
          styleContext:
            "Direct communicators retain clients by making specific, accountable promises. They know that vague assurances of improvement ring hollow when trust has been damaged.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your commitments are measurable. Phrases like 'we will improve response times' or 'we will focus on innovation' are too vague for a retention proposal.",
          observation:
            "If your commitments do not include numbers, dates, or consequences for failure, the client has no way to hold you accountable and no reason to believe things will change.",
          coachingTip:
            "For each commitment, add a number and a date. 'We will improve' becomes 'We will achieve X by Y.' That is the difference between a promise and a plan.",
          styleContext:
            "Direct communicators know that in retention situations, the client has heard promises before. Only specific, measurable commitments rebuild trust.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal either reads like a sales pitch, lacks specific commitments, or focuses too heavily on the relationship rather than the operational improvements needed.",
          observation:
            "If your document includes phrases like 'we truly value your partnership' or 'we are committed to going above and beyond', it is not a retention proposal - it is a greeting card.",
          coachingTip:
            "Delete every sentence that does not contain a number, a date, or a named action. The document should read like a service level agreement, not a love letter.",
          styleContext:
            "Direct communicators in crisis situations know that emotion-laden language signals a lack of substance. The client wants evidence of change, not expressions of regret.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (232-234)
  // ============================================

  // Scenario 232 - Priya Sharma, team, foundation
  {
    id: "scenario-232",
    title: "The Team Welcome Lunch",
    context:
      "Three new joiners have started this week and Priya has organised a team lunch to help them settle in. She wants to make the event feel warm and inclusive rather than like a formal induction.",
    chooseContext:
      "Priya has asked each new joiner to share something about themselves. One of them is visibly shy and struggling to speak in front of the group. Priya needs to help without putting them on the spot.",
    rewriteContext:
      "Priya has asked you to send a welcome message to the team Slack channel introducing the three new joiners and setting the tone for how the team should make them feel at home.",
    characterId: "priya-sharma",
    dialogue:
      "I am so glad we could all get together for this! Starting a new job can feel overwhelming, so I wanted us to have a relaxed lunch where you can meet everyone properly. No awkward icebreakers, I promise - just good food and good company.",
    chooseDialogue:
      "You know what, you do not have to say anything right now. How about I share a fun fact about each of you that you told me during onboarding - and you can correct me if I get it wrong? That way the pressure is off and everyone still gets to learn something about you.",
    rewriteDialogue:
      "Can you write something for the team channel? I want it to feel warm and personal, not like a corporate announcement. Mention each person by name, say something genuine about what they bring to the team, and invite everyone to say hello.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has organised an informal team lunch for new joiners, explicitly avoiding formal icebreakers and focusing on making the event feel warm and relaxed. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya's focus is on energy, warmth, and making the event feel enjoyable. She is creating an experience, not just a meeting. This is expressive communication in a team setting.",
          observation:
            "Notice Priya says 'I am so glad we could all get together' - she leads with her own enthusiasm. Expressive communicators set the emotional tone for the group.",
          coachingTip:
            "When someone organises a social event and explicitly designs it for energy and enjoyment rather than efficiency, they are operating in an expressive style.",
          styleContext:
            "Expressive communicators believe that people work better when they feel connected. Social events are not a break from work - they are an investment in team performance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does show care for the new joiners' comfort, which looks supportive. But the emphasis is on creating a positive, energetic atmosphere rather than quietly ensuring everyone feels safe.",
          observation:
            "A supportive communicator would check in privately with each new joiner beforehand. Priya creates a group experience designed to generate collective warmth and excitement.",
          coachingTip:
            "Expressive communicators show care through enthusiasm and group energy. Supportive communicators show care through quiet, individual attention. Notice which approach Priya takes.",
          styleContext:
            "Expressive communicators build belonging through shared positive experiences. Supportive communicators build belonging through one-to-one connection.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not structured the lunch around deliverables, set an agenda, or used the time to communicate team objectives. This is entirely about connection and warmth.",
          observation:
            "There are no action items, no time limits, and no performance-related content. Priya is investing in relationships, not in productivity.",
          coachingTip:
            "Ask yourself: is this person creating an experience or completing a task? Priya is firmly in the experience camp.",
          styleContext:
            "Expressive communicators see team events as opportunities to build the emotional foundation that makes collaboration possible later.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One of the new joiners is too shy to share in front of the group. Priya has offered to share fun facts about them instead. How do you help?",
      options: [
        {
          id: "s232-opt-a",
          text: "Great idea. I will go first - I once accidentally replied all to a company-wide email meant for my manager. Now everyone knows I cannot cook.",
          score: 10,
          result: "strong",
          explanation:
            "You match Priya's energy by volunteering your own vulnerability first. Sharing something light and self-deprecating lowers the stakes for everyone and supports the warm, inclusive atmosphere.",
        },
        {
          id: "s232-opt-b",
          text: "No pressure at all. If you would prefer, you could just tell us your name and role and we can get to know each other naturally over the next few weeks.",
          score: 5,
          result: "partial",
          explanation:
            "Kind and considerate, but it shifts to a more supportive register. Priya has already found a creative solution - she is looking for people to build on the energy, not dial it down.",
        },
        {
          id: "s232-opt-c",
          text: "Perhaps we should move on to the agenda items. We have a lot to cover and can always do introductions another time.",
          score: 0,
          result: "weak",
          explanation:
            "This completely misreads the purpose of the lunch. There is no agenda - Priya designed this as a social event. Redirecting to business undermines the connection she is building.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a warm, personal welcome message to the team Slack channel introducing the three new joiners. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hey team! Exciting news - we have three brilliant new people joining us this week and I could not be happier about it.\n\nMeet Aisha, who joins us from the Manchester office and brings five years of client management experience (and apparently makes the best brownies in the north of England).\n\nMeet Callum, our new data analyst, who has already impressed everyone in his first two days with his curiosity and energy.\n\nMeet Deepa, who is joining the design team and has a background in architecture that I think is going to bring a completely fresh perspective to our work.\n\nPlease take a moment to say hello and make them feel welcome. If you remember what your first week felt like, you know how much a friendly message means. Let us make this a great start for all three of them!",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, personal, and celebrates each individual. Priya would post this immediately and follow it with a string of reactions.",
          observation:
            "You mentioned each person by name, highlighted something specific and positive about them, and invited the team to participate. That is expressive communication at its best.",
          coachingTip:
            "When writing welcome messages for expressive communicators, make each person feel individually celebrated. Generic group welcomes fall flat.",
          styleContext:
            "Expressive communicators believe that first impressions set the tone for someone's entire experience at a company. They invest heavily in making those moments special.",
        },
        partial: {
          result: "partial",
          explanation:
            "Heading in the right direction, but check whether your message feels personal or corporate. If you could swap in any three names and the message still works, it is not personal enough.",
          observation:
            "If your welcome message reads like an HR template with names inserted, it misses the warmth Priya is looking for.",
          coachingTip:
            "Add one specific, human detail about each person that shows you have actually met them. A shared joke, a distinctive skill, or a personal interest makes it real.",
          styleContext:
            "Expressive communicators judge welcome messages by whether they make the new joiner smile. Facts about their role are less important than making them feel wanted.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too brief, or reads like an organisational announcement rather than a personal welcome.",
          observation:
            "If your message starts with 'Please be advised that three new colleagues have joined the department', Priya would delete it and write her own.",
          coachingTip:
            "Imagine you are introducing a friend at a party, not announcing a hire at a board meeting. That shift in tone is what Priya wants.",
          styleContext:
            "Expressive communicators see corporate language in team channels as a sign that the culture is too rigid. They want warmth, humour, and personality.",
        },
      },
    },
  },

  // Scenario 233 - Marcus Webb, team, intermediate
  {
    id: "scenario-233",
    title: "The Cross-Team Collaboration Kickoff",
    context:
      "Two teams that have never worked together are being paired on a joint project. Marcus has been asked to run the first combined session to build rapport and establish ways of working.",
    chooseContext:
      "There is visible tension between the two teams. One team feels the other was imposed on them. Marcus needs to acknowledge the elephant in the room and get everyone focused on the shared goal.",
    rewriteContext:
      "Marcus has asked you to write a message to both teams after the session, capturing the energy from the meeting and reinforcing the commitments they made to each other.",
    characterId: "marcus-webb",
    dialogue:
      "Listen, I know some of you are wondering why two perfectly good teams need to be mashed together. I get it. But I have worked with both of you, and honestly, what this team can do together is way more exciting than what either team can do alone. So let us figure out how to make this brilliant.",
    chooseDialogue:
      "I am not going to pretend there is no awkwardness here. There is. And that is completely normal when you throw two groups of talented people together and say 'go collaborate'. But I have seen what happens when teams get past this bit - and it is always worth it. So let us name what is bothering us and move forward.",
    rewriteDialogue:
      "Send both teams a message tonight while the energy is still fresh. Remind them what they agreed, what got people excited, and what the first shared milestone looks like. Make it feel like we are already a team, not two groups pretending.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Marcus has opened a cross-team session by acknowledging scepticism, expressing genuine excitement about the combined potential, and framing the collaboration as an opportunity rather than an obligation. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with energy and optimism, acknowledges the discomfort without dwelling on it, and reframes the situation as exciting. This is expressive communication used to inspire and unite.",
          observation:
            "Notice phrases like 'way more exciting' and 'let us figure out how to make this brilliant'. Marcus is selling the vision, not managing the logistics.",
          coachingTip:
            "When someone addresses team tension by painting an optimistic picture and generating enthusiasm, they are using an expressive approach. Feed their energy with your own.",
          styleContext:
            "Expressive communicators believe that enthusiasm is contagious and that the fastest way to overcome resistance is to make people excited about what comes next.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does acknowledge people's feelings, which looks supportive. But notice that he moves quickly from acknowledgement to enthusiasm. A supportive communicator would spend longer in the acknowledgement phase.",
          observation:
            "A supportive communicator would say 'I understand this feels unsettling and I want to make sure everyone feels heard.' Marcus says 'I get it' and immediately pivots to the opportunity.",
          coachingTip:
            "Expressive communicators acknowledge feelings as a stepping stone to energy. Supportive communicators acknowledge feelings as the destination. Marcus is already looking forward.",
          styleContext:
            "Expressive communicators use acknowledgement to clear the path for enthusiasm. Supportive communicators use acknowledgement to build emotional safety.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not presented a structured plan, distributed a RACI matrix, or outlined specific deliverables. The entire opening is about energy, connection, and shared purpose.",
          observation:
            "There are no timelines, no process details, and no reference to governance structures. Marcus is building morale, not building a project plan.",
          coachingTip:
            "Ask yourself: is this person trying to organise the team or to inspire it? Marcus is entirely focused on creating the emotional conditions for collaboration.",
          styleContext:
            "Expressive communicators know that the best project plans fail if people are not emotionally invested. They build buy-in before they build structure.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has named the tension between the two teams and challenged everyone to voice their concerns so the group can move forward. One person says they feel the merger was decided without consultation. How do you respond?",
      options: [
        {
          id: "s233-opt-a",
          text: "Honestly, I felt something similar when I first heard about it. But once I saw what the combined team could achieve, my frustration turned into curiosity. The same might happen here.",
          score: 10,
          result: "strong",
          explanation:
            "You validate the concern with your own experience, then redirect toward optimism. This matches Marcus's approach of acknowledging before inspiring.",
        },
        {
          id: "s233-opt-b",
          text: "That is a fair point. Perhaps we should ask leadership to explain the rationale so everyone understands why this decision was made.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but it defers to leadership rather than building energy in the room. Marcus is trying to create momentum now, not escalate to a separate conversation.",
        },
        {
          id: "s233-opt-c",
          text: "The decision has been made, so there is not much point rehashing it. Let us focus on the work plan and assign responsibilities.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the person's feelings entirely and jumps to task management. Marcus specifically created space for concerns to be voiced - shutting them down undermines that.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to send a post-session message to both teams while the energy is fresh. Capture what was agreed, what excited people, and what comes next. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi everyone - what a session that was! Honestly, I walked in hoping for cautious optimism and walked out feeling genuinely excited about what this combined team is going to achieve.\n\nHere is what we agreed:\n- Shared stand-up every Monday morning, 15 minutes, no screens\n- One joint Slack channel for the project (already set up - jump in!)\n- First shared milestone: combined discovery document delivered by 28 March\n\nWhat got me most excited was the conversation about combining your different approaches to client research. That moment when Jade and Tom realised they had been solving the same problem from opposite angles was exactly why this collaboration matters.\n\nLet us keep that energy going. See you all on Monday morning!",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message captures the session's energy, names specific moments that mattered, and ends with forward momentum. Marcus would share this proudly.",
          observation:
            "You balanced practical commitments with emotional highlights. That combination - what we decided plus what excited us - is the signature of expressive team communication.",
          coachingTip:
            "When writing recap messages for expressive communicators, lead with energy, include the commitments, and close with enthusiasm. The order matters.",
          styleContext:
            "Expressive communicators use recap messages to reinforce the emotional high from a good session. If the message reads like minutes, it misses the point.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your message captures energy or just records decisions. If it reads like meeting notes, it needs more personality and enthusiasm.",
          observation:
            "If your message lists action items but does not mention any moment that felt exciting or meaningful, it misses the emotional purpose Marcus intended.",
          coachingTip:
            "Add one specific moment from the session that felt like a breakthrough. Name the people involved. That human detail turns notes into a story.",
          styleContext:
            "Expressive communicators remember sessions by their emotional highlights, not their action items. A recap that only covers decisions feels incomplete to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too dry, or reads like official meeting minutes rather than a team message designed to sustain momentum.",
          observation:
            "If your message starts with 'Action items from today's session' and ends with 'Please confirm receipt', it has completely missed Marcus's brief.",
          coachingTip:
            "Imagine you are texting a group of friends after a great night out, not filing a report. That shift in tone is what Marcus wants.",
          styleContext:
            "Expressive communicators see formal recap emails as energy killers. They want messages that make people smile and feel proud of what they achieved together.",
        },
      },
    },
  },

  // Scenario 234 - Nina Okafor, team, advanced
  {
    id: "scenario-234",
    title: "The Team Identity Rebuild",
    context:
      "After a difficult restructure that saw several popular team members leave, morale is low. Nina has stepped up to help the remaining team find a new sense of identity and purpose.",
    chooseContext:
      "During the session, a long-serving team member becomes emotional and says the team will never be the same. Nina needs to honour that grief while also creating space for hope.",
    rewriteContext:
      "Nina has asked you to write a message to the team summarising the new vision they shaped together, acknowledging the loss while celebrating the fresh start.",
    characterId: "nina-okafor",
    dialogue:
      "I know this is hard. We have lost people we care about, and pretending that does not matter would be dishonest. But here is what I also know: every single person still in this room chose to stay. That says something powerful about who we are and what we can build together from here.",
    chooseDialogue:
      "You are absolutely right - it will not be the same. And honestly, that is okay. It does not have to be the same to be something we are proud of. The people who left shaped us, and we carry that forward. But the story is not over. We get to write the next chapter, and I think it could be something special.",
    rewriteDialogue:
      "Write something for the team that captures what we talked about today. I want it to feel honest - acknowledge the loss, honour the people who left, but also celebrate what this group decided to build together. Do not make it sound like we are trying to replace what we had. We are creating something new.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has addressed a demoralised team by acknowledging grief, reframing the fact that people stayed as a source of strength, and painting an optimistic picture of what comes next. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina validates the emotion, then pivots to inspiration and possibility. She uses storytelling language - 'write the next chapter' - and creates a narrative arc from loss to renewal. This is advanced expressive communication.",
          observation:
            "Notice how Nina reframes staying as a powerful choice rather than a passive outcome. This transforms the narrative from 'we were left behind' to 'we chose to be here'. That reframing is a hallmark of expressive leadership.",
          coachingTip:
            "When someone addresses grief by honouring it briefly and then redirecting energy toward a compelling future narrative, they are using an expressive style. Follow their lead by adding your own vision.",
          styleContext:
            "Expressive communicators handle team grief by creating a story that includes the loss but does not end with it. They believe that how you frame the past determines what the future feels like.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does show genuine care, which looks supportive. But notice that she spends more time on the forward-looking vision than on the emotional processing. A supportive communicator would sit with the grief longer.",
          observation:
            "A supportive communicator would say 'Take all the time you need to feel this.' Nina says 'I know this is hard' and moves within one breath to 'here is what I also know.' The pivot is faster.",
          coachingTip:
            "Expressive communicators acknowledge pain as a launching pad for hope. Supportive communicators acknowledge pain as something that needs to be fully felt before moving on.",
          styleContext:
            "Expressive communicators believe that the fastest way through grief is to give people something meaningful to move toward. Supportive communicators believe it is to ensure people feel fully heard first.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a restructure plan, outlined new roles, or discussed operational changes. The entire session is about narrative, identity, and emotional renewal.",
          observation:
            "There are no process documents, no org charts, and no performance targets. Nina is rebuilding the team's story, not its structure.",
          coachingTip:
            "Ask yourself: is this person managing logistics or managing meaning? Nina is entirely focused on what the team's experience means and what it could become.",
          styleContext:
            "Expressive communicators during restructures focus on the human narrative first. They believe that people need a reason to care before they can be asked to perform.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A long-serving team member has become emotional and said the team will never be the same. Nina has honoured that feeling while creating space for hope. How do you contribute?",
      options: [
        {
          id: "s234-opt-a",
          text: "I feel that too. It will not be the same. But what makes this group special is not the org chart - it is how we show up for each other. That will not change as long as we keep choosing it.",
          score: 10,
          result: "strong",
          explanation:
            "You validate the emotion, align with Nina's narrative, and add your own forward-looking perspective. This builds on the expressive tone without dismissing the grief.",
        },
        {
          id: "s234-opt-b",
          text: "I think we should give everyone space to process this. Maybe we could set up some one-to-one conversations over the next week for anyone who wants to talk through how they are feeling.",
          score: 5,
          result: "partial",
          explanation:
            "Thoughtful and caring, but it shifts to a supportive register. Nina has already created space for emotion in this session - she is now trying to move the group toward collective hope.",
        },
        {
          id: "s234-opt-c",
          text: "The restructure happened for good business reasons. We need to accept it, focus on the new team structure, and start delivering against the updated targets.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the emotional work Nina has carefully built. Jumping to business rationale and targets in a moment of grief will alienate the team further.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a message to the team that honours the loss, acknowledges the people who left, and celebrates the new vision the remaining team shaped together. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team - today was one of the most honest conversations I have been part of in a long time. Thank you for showing up and being real.\n\nWe talked about what we have lost. We named the people who shaped this team and acknowledged that their absence changes things. That matters, and we should never pretend it does not.\n\nBut we also talked about what we still have - and what we want to build. Here is what this group decided today:\n- We carry forward the best of what this team has always been: honest, creative, and fiercely supportive of each other\n- We create new traditions that belong to this version of the team, not copies of what came before\n- We commit to one shared project in the next quarter that proves to ourselves what we are capable of together\n\nThis is not about replacing what we had. It is about building something new that we can be equally proud of. I already am.\n\nLet us keep going.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message balances grief and hope, names specific commitments, and ends with forward energy. Nina would read this to the team with genuine pride.",
          observation:
            "You honoured the past without getting stuck in it, and you framed the future as something the team is actively choosing, not something being imposed on them.",
          coachingTip:
            "When writing emotional team messages for expressive communicators, the structure is: acknowledge, honour, look forward. All three elements matter.",
          styleContext:
            "Expressive communicators believe that the best team messages make people feel seen and inspired in the same breath. Your message does both.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your message feels genuinely emotional or politely upbeat. If it skips the grief and jumps straight to optimism, it will feel inauthentic.",
          observation:
            "If your message does not explicitly name the loss or acknowledge the people who left, it will feel like it is glossing over something the team needs to hear.",
          coachingTip:
            "Expressive communicators need the sad part before the hopeful part. Skipping the acknowledgement makes the optimism feel hollow.",
          styleContext:
            "Expressive communicators earn the right to be hopeful by first being honest about what hurts. The credibility of the hope depends on the authenticity of the acknowledgement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either ignores the emotional weight of the situation, reads like an HR communication, or jumps straight to business objectives without honouring what the team has been through.",
          observation:
            "If your message opens with 'Following the recent restructure, I wanted to outline the team's updated priorities', Nina would not send it.",
          coachingTip:
            "Write the message as if you are speaking to friends who have been through something difficult together, not as if you are briefing colleagues on a change programme.",
          styleContext:
            "Expressive communicators believe that the moment after a loss is the moment that defines a team's character. The message needs to match the weight of that moment.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (235-237)
  // ============================================

  // Scenario 235 - Tom Brennan, conflict, foundation
  {
    id: "scenario-235",
    title: "The Desk Dispute",
    context:
      "Two team members are in a disagreement about desk allocation after a recent office move. One feels they were given a worse spot unfairly. Tom has offered to mediate the conversation.",
    chooseContext:
      "The person who feels wronged has become upset and is accusing the other person of going to the manager behind their back to secure the better desk. The other person denies this. Tom needs to lower the temperature.",
    rewriteContext:
      "Tom has asked you to send a gentle follow-up email to both parties after the mediation, summarising what was agreed and reinforcing that both perspectives were heard.",
    characterId: "tom-brennan",
    dialogue:
      "I appreciate you both being willing to sit down and talk about this. I know desk allocation might seem like a small thing, but I understand it matters to both of you, and that is reason enough to sort it out properly.",
    chooseDialogue:
      "I can see this has really got to you, and I want you to know that your frustration is completely valid. Before we go any further, can we just take a moment? I want to make sure we are all in a place where we can hear each other properly.",
    rewriteDialogue:
      "Can you send them both a short email? I want it to feel reassuring - remind them that we heard both sides, that no one was in the wrong, and that the agreed solution works for everyone. Keep it warm and fair.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Tom has opened a mediation about desk allocation by validating both people's feelings, acknowledging the issue matters to them, and committing to sorting it out properly. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom starts by validating feelings, refuses to minimise the issue, and focuses on making both people feel heard. This is classic supportive communication in a conflict setting.",
          observation:
            "Notice Tom says 'that is reason enough to sort it out properly' - he validates the importance of the issue based on how the people feel about it, not on its objective significance.",
          coachingTip:
            "When someone opens a mediation by validating feelings before addressing facts, they are using a supportive style. Match their pace and avoid rushing to solutions.",
          styleContext:
            "Supportive communicators believe that conflicts cannot be resolved until everyone feels heard. They prioritise emotional acknowledgement before problem-solving.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom does show warmth, which can look expressive. But notice the energy is calm and careful, not enthusiastic or forward-looking. Tom is creating safety, not generating excitement.",
          observation:
            "An expressive communicator would say something like 'Let us fix this so we can all move on and enjoy the new office!' Tom's approach is quieter and more focused on the emotional state of each person.",
          coachingTip:
            "Supportive communicators create calm. Expressive communicators create energy. In conflict situations, the difference is especially visible. Tom is lowering the temperature, not raising spirits.",
          styleContext:
            "Supportive communicators in conflict situations act as emotional anchors. Their calm, measured tone gives others permission to step back from heightened emotions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not proposed a solution, set a deadline for resolution, or treated the desk allocation as a logistical problem to be solved. He is focused entirely on the people, not the problem.",
          observation:
            "There is no reference to office layout plans, desk booking systems, or fairness criteria. Tom is managing emotions, not managing logistics.",
          coachingTip:
            "Ask yourself: is this person solving the problem or creating the conditions for the problem to be solved? Tom is doing the latter.",
          styleContext:
            "Supportive communicators believe that jumping to solutions before people feel heard creates resentment, even if the solution itself is fair.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One person is upset and accusing the other of going behind their back. Tom has asked everyone to pause and make sure they can hear each other. How do you support Tom's approach?",
      options: [
        {
          id: "s235-opt-a",
          text: "I can see how strongly you feel about this. Before we talk about what happened, is there anything you need from us right now to feel comfortable continuing?",
          score: 10,
          result: "strong",
          explanation:
            "You validate the emotion, check in on the person's comfort, and create space for them to say what they need. This perfectly mirrors Tom's supportive approach.",
        },
        {
          id: "s235-opt-b",
          text: "Let us look at this objectively. Can both of you walk me through what actually happened, step by step, so we can separate facts from assumptions?",
          score: 5,
          result: "partial",
          explanation:
            "Structured and fair, but it jumps to fact-finding before the emotional temperature has dropped. Tom asked for a pause specifically to avoid rushing into the content too soon.",
        },
        {
          id: "s235-opt-c",
          text: "Honestly, at the end of the day it is just a desk. We should be able to sort this out in five minutes if we focus on the practical issue rather than how everyone feels about it.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses both people's feelings and contradicts Tom's explicit statement that the issue matters because it matters to them. Minimising the concern will escalate, not resolve, the conflict.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to send a follow-up email to both parties after the desk mediation. It should reassure them both that they were heard and confirm the agreed solution. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi both,\n\nThank you for being so open in our conversation earlier. I know it was not easy, and I appreciate the honesty and willingness you both showed.\n\nJust to confirm what we agreed:\n- Jamie will move to the desk by the window, which gives them the quieter space they need for focused work\n- Sam keeps the current desk near the kitchen, which they prefer for the natural light and team proximity\n- We will check in again in two weeks to make sure the arrangement is working well for both of you\n\nI want you both to know that there were no villains in this conversation. You each had legitimate preferences, and I am glad we found a solution that respects both. If anything feels off in the meantime, my door is always open.\n\nThanks again for handling this so well.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email acknowledges the emotional effort involved, confirms the practical agreement, and reassures both parties. Tom would send this without hesitation.",
          observation:
            "The line 'there were no villains' is particularly strong. It addresses the underlying accusation without taking sides and gives both parties permission to move on.",
          coachingTip:
            "When writing follow-up emails for supportive communicators, always acknowledge the effort people put into the conversation, not just the outcome they reached.",
          styleContext:
            "Supportive communicators use follow-up emails to reinforce safety. The message says: you were brave to be honest, and that bravery was rewarded with a fair outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your email addresses the emotional dimension or only the practical agreement. If it reads like a facilities management confirmation, it misses the point.",
          observation:
            "If your email does not acknowledge how the conversation felt for both parties, it reduces the mediation to a desk swap rather than a relationship repair.",
          coachingTip:
            "Add a sentence that names the emotional effort involved. 'I know that conversation took courage' or 'I appreciate you both being vulnerable' signals that the human side mattered.",
          styleContext:
            "Supportive communicators believe that the way you close a conflict determines whether it stays closed. A warm follow-up prevents lingering resentment.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too cold, too transactional, or fails to reassure both parties that their feelings were taken seriously.",
          observation:
            "If your email reads like a facilities notification - 'Please note the following desk changes have been agreed' - it completely misses the emotional context of the conversation.",
          coachingTip:
            "Rewrite the email imagining you are writing to two friends after helping them resolve an argument. The warmth and care should be obvious in every line.",
          styleContext:
            "Supportive communicators see conflict resolution follow-ups as emotional care, not administrative record-keeping. The tone matters as much as the content.",
        },
      },
    },
  },

  // Scenario 236 - Leah Morgan, conflict, intermediate
  {
    id: "scenario-236",
    title: "The Workload Imbalance Grievance",
    context:
      "A team member has raised a formal grievance claiming their workload is significantly heavier than their colleagues' and that their manager is not addressing it. Leah has been asked to facilitate a resolution meeting.",
    chooseContext:
      "The team member has become emotional during the meeting, saying they feel taken advantage of because they never say no. The manager looks defensive. Leah needs to keep both parties engaged.",
    rewriteContext:
      "Leah has asked you to draft a summary of the meeting that acknowledges the team member's concerns, captures the manager's commitments, and sets a clear follow-up date - all in a tone that feels fair to both sides.",
    characterId: "leah-morgan",
    dialogue:
      "Before we start, I want both of you to know that this meeting is not about finding fault. It is about understanding each other's experience and finding a way forward that works. There is no winner or loser here - just two people who want things to be better.",
    chooseDialogue:
      "I can hear how exhausted you are, and I want you to know that saying that here took real courage. And I can see this is difficult for you too - no manager wants to hear that someone on their team is struggling. Let us take a moment before we talk about what happens next.",
    rewriteDialogue:
      "Write the summary carefully. I need it to feel balanced - the team member needs to see their concerns reflected honestly, and the manager needs to see fair commitments, not punishments. End with a follow-up date so both parties know this is not just words.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has opened a grievance meeting by explicitly removing blame from the process, framing it as mutual understanding, and reassuring both parties that there are no winners or losers. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah removes the adversarial framing, reassures both parties, and creates emotional safety before any content is discussed. This is supportive communication in its most essential form.",
          observation:
            "Notice Leah explicitly says 'no winner or loser'. She is dismantling the grievance framework's implicit adversarial structure before it shapes the conversation.",
          coachingTip:
            "When a facilitator opens by removing blame and creating psychological safety for all parties, they are using a supportive style. Respect the space they are building.",
          styleContext:
            "Supportive communicators believe that formal processes like grievances can damage relationships if handled with too much rigidity. They soften the process without weakening the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does show warmth and care, which can appear expressive. But notice the energy is measured and calm, not enthusiastic. Leah is not generating excitement - she is creating safety.",
          observation:
            "An expressive communicator would say 'I know we can sort this out and come out stronger!' Leah's tone is quieter and more focused on making both people feel secure.",
          coachingTip:
            "Supportive communicators in conflict situations lower the energy to create calm. Expressive communicators raise the energy to create optimism. Leah is firmly lowering.",
          styleContext:
            "Supportive communicators believe that in grievance situations, the most helpful thing is to make people feel safe enough to be honest, not excited enough to be hopeful.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not set a strict agenda, demanded specific outcomes, or treated the grievance as a problem to be solved quickly. She is focused entirely on creating the right emotional conditions.",
          observation:
            "There are no deadlines, no action items, and no reference to policy or procedure. Leah is facilitating a human conversation, not managing a formal process.",
          coachingTip:
            "Ask yourself: is this person managing the process or managing the people? Leah is managing the people first, trusting that the process will follow.",
          styleContext:
            "Supportive communicators know that formal processes only work when people trust the facilitator. They invest in that trust before they invest in the agenda.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member has become emotional, saying they feel taken advantage of. The manager looks defensive. Leah has validated both experiences and asked for a pause. How do you contribute?",
      options: [
        {
          id: "s236-opt-a",
          text: "Thank you for sharing that. The fact that you are both here shows you care about making this right. That is a really strong starting point.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledge the emotion, normalise the difficulty for both sides, and frame their presence as a positive sign. This matches Leah's balanced, reassuring approach.",
        },
        {
          id: "s236-opt-b",
          text: "Let us look at the actual workload data. If we can see the numbers side by side, we can have an objective conversation about whether the distribution is fair.",
          score: 5,
          result: "partial",
          explanation:
            "Logical and potentially useful, but Leah has just called a pause to manage the emotional temperature. Jumping to data right now risks dismissing the team member's feelings.",
        },
        {
          id: "s236-opt-c",
          text: "Look, everyone feels overworked sometimes. The important thing is whether you have actually raised this with your manager before going straight to a formal grievance.",
          score: 0,
          result: "weak",
          explanation:
            "This minimises the team member's experience and implies they should not have raised a grievance. It directly contradicts the safe, non-judgmental space Leah has worked to create.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a meeting summary that acknowledges the team member's concerns, captures the manager's commitments, and sets a follow-up date. Write it in a supportive style that feels fair to both sides.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Meeting Summary - Workload Review\n\nThank you both for engaging so openly today. This was not an easy conversation, and you both handled it with real honesty.\n\nWhat we heard:\n- You feel that your workload has been disproportionately heavy for several months, and that raising it informally did not lead to change. That frustration is understandable and your willingness to speak up is appreciated.\n- Your manager acknowledged that the distribution may have been uneven and expressed genuine concern about the impact on your wellbeing. They were clear that this was not intentional.\n\nWhat was agreed:\n- A full workload review will be completed within two weeks, looking at task allocation across the whole team\n- Fortnightly one-to-ones will be introduced to check in on capacity and priorities\n- Both parties agreed to approach each other directly if concerns arise before the next review\n\nFollow-up meeting: 28 March at 2pm, same room.\n\nThis process is about making things better for everyone. If either of you needs to talk before then, please reach out to me directly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary balances both perspectives, acknowledges the emotional weight of the conversation, and sets clear next steps without feeling punitive. Leah would share this confidently.",
          observation:
            "You validated the team member's experience and the manager's intent separately, which prevents either party feeling blamed while ensuring both feel heard.",
          coachingTip:
            "When writing conflict summaries for supportive communicators, validate each person's experience independently. Never frame one person's gain as the other person's fault.",
          styleContext:
            "Supportive communicators write summaries that both parties can read and think 'that was fair'. If either side feels like the summary takes a position, it has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your summary acknowledges the emotional experience alongside the practical outcomes. If it only captures what was agreed, it misses the human element.",
          observation:
            "If your summary does not mention how the conversation felt or acknowledge the courage it took to have it, the team member may feel their experience was reduced to bullet points.",
          coachingTip:
            "Add one sentence acknowledging the emotional effort involved. This transforms a record of decisions into a record of a meaningful conversation.",
          styleContext:
            "Supportive communicators see meeting summaries as relationship documents, not just action trackers. The tone carries as much weight as the content.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either takes sides, feels too formal, or reduces a deeply personal conversation to an administrative record.",
          observation:
            "If your summary reads like an HR incident report rather than a collaborative summary of a difficult but productive conversation, Leah would not share it.",
          coachingTip:
            "Read your summary and ask: would both parties feel respected? If the team member would feel reduced to a complainant or the manager to a defendant, rewrite with warmth.",
          styleContext:
            "Supportive communicators know that how a grievance is documented affects whether the relationship recovers. Clinical language signals that the process mattered more than the people.",
        },
      },
    },
  },

  // Scenario 237 - David Chen, conflict, advanced
  {
    id: "scenario-237",
    title: "The Cross-Departmental Blame Game",
    context:
      "A product launch failed to hit its deadline, and two departments are blaming each other. David has been asked to facilitate a post-mortem that focuses on learning rather than blame.",
    chooseContext:
      "The engineering lead has accused the marketing team of changing requirements at the last minute. The marketing lead has fired back that engineering never flagged the timeline risk. David needs to redirect both parties.",
    rewriteContext:
      "David has asked you to write a post-mortem summary that focuses on systemic issues rather than individual failures, and proposes process improvements both departments can support.",
    characterId: "david-chen",
    dialogue:
      "Thank you for being here. I know tensions are running high, and I want to start by saying something important: this meeting is not about blame. Every project that misses a deadline has systemic reasons, not just individual ones. Our job today is to find those systemic issues so we can prevent this happening again.",
    chooseDialogue:
      "I hear you both, and I think you are both right - from your own perspective. That is the problem. You each had different information and different pressures, and neither of you had full visibility of the other's situation. Before we talk about who did what, can we map out what each team was dealing with during those final two weeks?",
    rewriteDialogue:
      "Write the post-mortem so that neither team feels attacked. Focus on the gaps between the teams - the communication breakdowns, the missing handoff points, the assumptions that were never checked. Propose two or three process changes that both sides would actually support.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has opened a tense post-mortem by explicitly removing blame from the process, framing failures as systemic rather than individual, and asking both sides to share their experiences before drawing conclusions. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David removes the adversarial framing, validates both perspectives equally, and creates a collaborative process for understanding what happened. This is advanced supportive facilitation.",
          observation:
            "The phrase 'you are both right - from your own perspective' is a masterful supportive technique. It validates without agreeing with either specific claim, creating space for both parties to feel heard.",
          coachingTip:
            "When a facilitator explicitly reframes conflict from 'who is at fault' to 'what system failed', they are using a supportive style to protect relationships while still addressing the problem.",
          styleContext:
            "Supportive communicators in post-mortems believe that blame destroys the psychological safety needed for honest reflection. They build safety first, then truth emerges naturally.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David does show warmth and care about the emotional temperature, which can look expressive. But notice the energy is deliberately calm and measured, designed to lower tension rather than raise spirits.",
          observation:
            "An expressive communicator would say 'We are going to learn something amazing from this and come out stronger!' David's approach is quieter - he is creating safety, not enthusiasm.",
          coachingTip:
            "Supportive communicators in high-conflict settings act as emotional stabilisers. They absorb tension rather than redirecting it into positive energy. David is absorbing.",
          styleContext:
            "Supportive communicators believe that in post-mortems, the facilitator's job is to make it safe to be honest, not to make people feel good about what happened.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not assigned action items, demanded accountability for specific failures, or set performance expectations. He is managing the emotional dynamics before addressing the operational ones.",
          observation:
            "There is no timeline review, no root cause analysis template, and no demand for individual explanations. David is creating the conditions for honest dialogue, not conducting an investigation.",
          coachingTip:
            "Ask yourself: is this person investigating or facilitating? David is facilitating understanding, not investigating fault. The difference defines the communication style.",
          styleContext:
            "Supportive communicators believe that the best post-mortems happen when people feel safe enough to admit their own mistakes. Fear-based processes produce defensiveness, not learning.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Engineering has accused marketing of last-minute changes. Marketing has accused engineering of hiding risks. David has asked both sides to map out their pressures before assigning blame. How do you help?",
      options: [
        {
          id: "s237-opt-a",
          text: "We all experienced those final two weeks differently. I suspect both teams were making reasonable decisions with incomplete information. Can I help map out the timeline from our side?",
          score: 10,
          result: "strong",
          explanation:
            "You validate David's approach, normalise the different perspectives, and offer to contribute constructively. This supports the collaborative framing without taking sides.",
        },
        {
          id: "s237-opt-b",
          text: "The facts should speak for themselves. If we pull up the project tracker and the change log, we can see exactly when requirements changed and when risks were flagged.",
          score: 5,
          result: "partial",
          explanation:
            "Factual and potentially useful, but jumping to evidence before both sides feel heard may feel like a rush to judgement. David has specifically asked for experiences first, data second.",
        },
        {
          id: "s237-opt-c",
          text: "I think we just need to accept that marketing changed the brief too late and engineering should have escalated sooner. The lessons are obvious. Let us agree the fixes and move on.",
          score: 0,
          result: "weak",
          explanation:
            "This assigns blame to both sides in exactly the way David has tried to prevent. It shuts down the reflective process and will leave both teams feeling accused rather than heard.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a post-mortem summary that focuses on systemic gaps rather than individual failures and proposes process improvements both departments would support. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Post-Mortem Summary - Product Launch Delay\n\nThis document captures what we learned from an honest and constructive conversation between both teams. Thank you to everyone who contributed with such openness.\n\nWhat we found:\nThe delay was not caused by one decision or one team. It resulted from gaps in the communication between teams during a period of high pressure.\n\nKey systemic issues identified:\n1. Requirement changes were communicated via email without a formal impact assessment process. Both teams assumed the other understood the implications.\n2. Timeline risks were visible within engineering but were not surfaced to the joint project board until the final week.\n3. Neither team had a shared view of the critical path. Each was working to their own internal timeline.\n\nProposed improvements:\n1. All requirement changes above a defined threshold require a joint impact review before approval (48-hour turnaround)\n2. Weekly shared risk register, updated by both teams, reviewed in a 15-minute joint stand-up\n3. Single shared project timeline visible to both departments, maintained by a named coordinator\n\nThese proposals were shaped by both teams and reflect a shared commitment to working better together. We will review progress at the next cross-departmental meeting on 4 April.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary focuses on systemic gaps without pointing fingers, and the proposals feel collaborative rather than punitive. David would circulate this with confidence.",
          observation:
            "You framed every issue as a gap between teams, not a failure within one team. That framing is essential for maintaining both departments' buy-in to the improvements.",
          coachingTip:
            "When writing post-mortems for supportive communicators, always frame problems as 'between' rather than 'within'. This keeps the focus on the system, not the people.",
          styleContext:
            "Supportive communicators know that post-mortems only drive change if both sides feel the document is fair. A document that assigns blame, however subtly, will be resisted.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your language subtly assigns blame. Phrases like 'marketing failed to communicate' or 'engineering did not flag' point fingers even when framed as observations.",
          observation:
            "If either team could read your summary and feel singled out, it needs reframing. Every issue should be described as a gap in the system, not a failure by a group.",
          coachingTip:
            "Replace 'Team A did not do X' with 'The process did not include a mechanism for X.' This shifts accountability from people to systems.",
          styleContext:
            "Supportive communicators believe that people do their best within the systems they are given. If the system has gaps, the system needs fixing, not the people.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either assigns blame, reads like an investigation report, or proposes changes that feel like punishments rather than improvements.",
          observation:
            "If your summary includes phrases like 'failure to deliver' or 'lack of accountability', it will trigger defensiveness and undermine the collaborative spirit David built.",
          coachingTip:
            "Read your summary through the eyes of each team. If either side would feel attacked, soften the language until both sides would nod and say 'that is fair'.",
          styleContext:
            "Supportive communicators write post-mortems that protect relationships while driving improvement. If the document damages trust, the improvements will never be implemented.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (238-240)
  // ============================================

  // Scenario 238 - Rachel Finch, email, foundation
  {
    id: "scenario-238",
    title: "The Budget Approval Request",
    context:
      "Rachel needs to send an email to the finance director requesting approval for additional budget to cover an unexpected cost overrun on a technology project. She wants the email to be data-driven and impossible to refuse.",
    chooseContext:
      "The finance director has replied asking for more detail on how the overrun occurred and what alternatives were considered before requesting additional funds. Rachel is preparing her response.",
    rewriteContext:
      "Rachel has asked you to draft the follow-up email providing the detailed breakdown the finance director requested, with evidence supporting each line item.",
    characterId: "rachel-finch",
    dialogue:
      "I need this email to be bulletproof. The finance director will want to know exactly how the overrun happened, what the original estimate was based on, where the gap is, and why we cannot absorb it within the existing budget. Give them numbers, not narratives.",
    chooseDialogue:
      "Good - they are asking the right questions. That means they are considering it, not refusing it. I need to show them three things: a root cause analysis of the overrun, two alternatives we evaluated and rejected with clear reasoning, and a line-by-line breakdown of the additional spend required.",
    rewriteDialogue:
      "Draft the response. Start with the root cause, then the alternatives we ruled out, then the detailed breakdown. Every number needs a source reference. If we quote a vendor cost, cite the quote. If we reference utilisation rates, cite the report. No unsupported claims.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel is preparing a budget approval email by demanding numbers over narratives, insisting on source references for every figure, and structuring the request around root cause analysis and rejected alternatives. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's approach is entirely evidence-based. She wants every claim supported, every number sourced, and the argument built on logic rather than persuasion. This is textbook analytical communication.",
          observation:
            "Notice Rachel says 'numbers, not narratives'. Analytical communicators see unsupported claims as vulnerabilities in an argument, not as communication choices.",
          coachingTip:
            "When someone insists that every figure has a source and every claim has evidence, they are operating in an analytical style. Respond with the same rigour.",
          styleContext:
            "Analytical communicators build requests like legal cases. Every element must be supported, every alternative must be addressed, and the conclusion must feel inevitable given the evidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is concise and outcome-focused, which looks direct. But notice the emphasis is on evidence quality and analytical rigour, not on speed or decisiveness.",
          observation:
            "A direct communicator would say 'We need this budget approved by Friday. Here is the number.' Rachel wants to build an irrefutable case, not demand a quick decision.",
          coachingTip:
            "Direct communicators use data to support decisions they have already made. Analytical communicators build their case so thoroughly that the decision makes itself.",
          styleContext:
            "Analytical communicators believe that the best budget requests are the ones where the finance director cannot find a reason to say no. They win through preparation, not pressure.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on relationships, team morale, or the impact of the budget situation on people. She is entirely focused on building a data-driven case.",
          observation:
            "There is no mention of how the team feels about the overrun, no appeal to shared goals, and no attempt to build personal rapport with the finance director.",
          coachingTip:
            "Ask yourself: is this person building a relationship or building a case? Rachel is building a case, and the evidence is the foundation.",
          styleContext:
            "Analytical communicators believe that in financial conversations, the quality of the data matters more than the quality of the relationship. Good numbers speak louder than good rapport.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The finance director has asked for more detail on the overrun and what alternatives were considered. Rachel is preparing a response with root cause analysis, rejected alternatives, and a line-by-line breakdown. How do you help?",
      options: [
        {
          id: "s238-opt-a",
          text: "The variance is in two areas: vendor costs came in 15% above Q2 quotes, and testing required 40 additional hours due to scope changes approved in August. Both figures are in the project tracker.",
          score: 10,
          result: "strong",
          explanation:
            "You provide specific, sourced data that directly addresses the finance director's question. The breakdown is precise and the figures are traceable. Rachel would include this verbatim.",
        },
        {
          id: "s238-opt-b",
          text: "I think the key message is that this overrun was unavoidable given the scope changes. If we position it as a consequence of approved changes, the finance director is more likely to approve the additional spend.",
          score: 5,
          result: "partial",
          explanation:
            "Strategically reasonable, but Rachel wants evidence, not positioning. 'How we frame it' is a persuasion approach. Rachel wants the facts to make the case on their own.",
        },
        {
          id: "s238-opt-c",
          text: "Maybe we should set up a meeting rather than trying to do this over email. It would be easier to explain the situation in person and answer questions in real time.",
          score: 0,
          result: "weak",
          explanation:
            "Rachel specifically chose email because it allows her to present a thorough, evidence-based case. A meeting introduces ambiguity and makes it harder to control the precision of the information shared.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to draft the follow-up email with root cause analysis, rejected alternatives, and a line-by-line breakdown of the additional spend. Every figure must have a source. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Re: Additional Budget Request - Detailed Breakdown\n\nThank you for your questions. Please find the requested detail below.\n\n1. Root Cause Analysis\nThe overrun of GBP 34,200 is driven by two factors:\n- Vendor costs: The infrastructure provider revised their pricing in July, increasing our hosting costs by 15% against the Q2 quote (see attached quote comparison, Appendix A)\n- Testing effort: Scope changes approved by the steering committee on 14 August (ref: SC-2024-08-14, item 3) required 40 additional hours of QA testing at GBP 85/hour\n\n2. Alternatives Considered\n- Option A: Absorb within existing budget by deferring the accessibility audit. Rejected because the audit is a regulatory requirement with a compliance deadline of 31 March (ref: Compliance Calendar 2024-25, item 17)\n- Option B: Negotiate vendor pricing down. Attempted in August; vendor confirmed the revised rate is final (email from vendor dated 22 August, attached as Appendix B)\n\n3. Line-by-Line Breakdown\n- Additional hosting costs (Jul-Mar): GBP 18,000 (Appendix A)\n- Additional QA testing (40 hrs x GBP 85): GBP 3,400 (timesheet extract, Appendix C)\n- Contingency at 10%: GBP 2,140\n- Vendor migration support: GBP 10,660 (quote ref: VM-2024-09, Appendix D)\n\nTotal additional budget requested: GBP 34,200\n\nI am happy to provide further detail on any line item. Please let me know if you would like to discuss before approving.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured, every figure has a source reference, and the alternatives section shows thorough evaluation. Rachel would send this with full confidence.",
          observation:
            "You included reference numbers for steering committee decisions, vendor quotes, and compliance requirements. This level of traceability is exactly what analytical communicators demand.",
          coachingTip:
            "When writing financial emails for analytical communicators, treat every number as a claim that needs a source. If you cannot cite where a figure came from, do not include it.",
          styleContext:
            "Analytical communicators believe that unsourced figures in budget requests invite challenge. Every reference you include reduces the finance director's ability to push back.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every figure has a source. If any numbers appear without a reference, Rachel will send the email back for revision before forwarding it.",
          observation:
            "If your breakdown includes round numbers or estimates without explaining how they were calculated, it will undermine the precision of the rest of the email.",
          coachingTip:
            "For each figure, add a parenthetical source: a quote reference, a report name, or a calculation method. This transforms estimates into evidence.",
          styleContext:
            "Analytical communicators judge budget emails by their weakest data point. One unsupported figure can make the finance director question everything else.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too vague, lacks source references, or relies on persuasive language rather than evidence to make the case.",
          observation:
            "If your email includes phrases like 'we believe this is a reasonable amount' or 'the overrun was largely unavoidable', it is making assertions rather than presenting evidence.",
          coachingTip:
            "Delete every sentence that contains an opinion and replace it with a sentence that contains a fact and a source. That is the standard Rachel is working to.",
          styleContext:
            "Analytical communicators see opinion-based budget requests as unprofessional. They believe that if the data is strong enough, the request does not need to be 'sold'.",
        },
      },
    },
  },

  // Scenario 239 - Owen Grant, email, intermediate
  {
    id: "scenario-239",
    title: "The Process Change Proposal",
    context:
      "Owen has identified inefficiencies in the team's quality assurance process and wants to propose a revised workflow via email to the operations director. He has been collecting data for three weeks.",
    chooseContext:
      "The operations director has responded positively but wants to understand the risk of the proposed changes before approving a pilot. Owen needs to address this with a structured risk assessment.",
    rewriteContext:
      "Owen has asked you to draft the risk assessment email covering the three main risks he has identified, along with mitigation strategies and evidence from comparable process changes in other teams.",
    characterId: "owen-grant",
    dialogue:
      "I have spent three weeks mapping the current QA workflow and measuring where time is lost. The data shows that 34% of review cycles are redundant - the same document gets checked by two people who apply identical criteria. I want to propose a single-reviewer model with a spot-check audit layer.",
    chooseDialogue:
      "Good question on risk. I have identified three: reviewer fatigue in a single-reviewer model, potential quality drop during transition, and team resistance to role changes. For each one, I have data from two other teams that made similar changes and I can show how they mitigated each risk.",
    rewriteDialogue:
      "Draft the risk assessment. Three risks, each with a description, a likelihood rating, an impact rating, a mitigation strategy, and evidence from the comparable teams. Format it as a table if that makes it clearer. No qualitative judgements without supporting data.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has spent three weeks collecting process data, identified that 34% of review cycles are redundant with a specific metric, and structured his proposal around evidence from comparable teams. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen has invested weeks in data collection before making a proposal, quantified the problem precisely, and built his case on comparable evidence. This is analytical communication at its most thorough.",
          observation:
            "Notice Owen does not say 'the process feels inefficient' - he says '34% of review cycles are redundant.' Analytical communicators convert observations into measurable facts before presenting them.",
          coachingTip:
            "When someone spends weeks gathering data before proposing a change, they are operating in an analytical style. Engage with their evidence, not their conclusion.",
          styleContext:
            "Analytical communicators believe that proposals without data are just opinions. They invest time in evidence collection because they know it makes their case harder to refuse.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Owen is proposing a clear change, which looks direct. But notice the approach: weeks of preparation, specific metrics, and comparable evidence. A direct communicator would have proposed the change after a day and pushed for approval.",
          observation:
            "A direct communicator would say 'The QA process has too many steps. Let us cut it in half.' Owen has mapped the entire workflow and measured each step before suggesting which ones to remove.",
          coachingTip:
            "Direct communicators propose changes based on instinct backed by some data. Analytical communicators propose changes only when the data makes the case unarguable.",
          styleContext:
            "Analytical communicators see thoroughness as the foundation of credibility. A proposal that has been researched for three weeks carries more weight than one dashed off in an afternoon.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on how the team feels about the current process, built enthusiasm for the change, or framed the proposal around people. His focus is entirely on evidence and efficiency.",
          observation:
            "There is no mention of team morale, no appeal to shared values, and no attempt to make the proposal exciting. Owen is selling with data, not with vision.",
          coachingTip:
            "Ask yourself: is this person leading with evidence or emotion? Owen is leading with three weeks of carefully collected data. That is analytical communication.",
          styleContext:
            "Analytical communicators believe that the most persuasive proposals are the ones where the data does the talking. Personal appeals feel like a substitute for rigour.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The operations director wants to understand the risks before approving a pilot. Owen has identified three risks with evidence from comparable teams. How do you contribute?",
      options: [
        {
          id: "s239-opt-a",
          text: "The logistics team trialled a single-reviewer model last year. Errors increased 8% in weeks 5 to 8 but dropped to baseline after they introduced rotation. I have the data if you want to include it.",
          score: 10,
          result: "strong",
          explanation:
            "You provide specific, time-bound, comparable evidence that directly supports one of Owen's identified risks. This is exactly the type of contribution an analytical communicator values.",
        },
        {
          id: "s239-opt-b",
          text: "I think the biggest risk is team morale. People do not like having their roles changed without being consulted. We should probably talk to the team first before we send this to the operations director.",
          score: 5,
          result: "partial",
          explanation:
            "A valid concern, but Owen is building a data-driven case for the operations director. Adding a qualitative concern about morale without evidence shifts the register away from analytical.",
        },
        {
          id: "s239-opt-c",
          text: "I do not think we need a full risk assessment. The improvement is obvious from the data. Let us just propose the change and deal with any issues as they come up.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the rigour Owen has invested in. Analytical communicators do not skip risk assessments - they see them as essential to a credible proposal. Suggesting otherwise undermines the entire approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to draft a risk assessment email covering three risks with descriptions, ratings, mitigations, and evidence from comparable teams. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Re: QA Process Change - Risk Assessment\n\nThank you for the opportunity to address your risk concerns. Below is a structured assessment of the three main risks, with mitigation strategies and comparable evidence.\n\nRisk 1: Reviewer Fatigue\n- Description: A single-reviewer model increases cognitive load per reviewer, potentially leading to reduced attention over time\n- Likelihood: Medium | Impact: Medium\n- Mitigation: Introduce a weekly rotation schedule and cap individual review load at 12 documents per day\n- Evidence: The logistics team implemented this model in Q1 2024. Error rates rose 8% in weeks 5-8 but returned to baseline after a rotation schedule was introduced (source: Logistics QA Report, June 2024)\n\nRisk 2: Transition Quality Drop\n- Description: During the changeover period, unfamiliarity with the new workflow may temporarily increase error rates\n- Likelihood: High | Impact: Low\n- Mitigation: Run a 4-week parallel process where both old and new workflows operate simultaneously, comparing output quality\n- Evidence: The customer service team ran a parallel process for 3 weeks during their 2023 workflow change. Error rates during transition were 5% above baseline, within the acceptable threshold (source: CS Process Change Report, October 2023)\n\nRisk 3: Team Resistance\n- Description: Team members currently in dual-reviewer roles may perceive the change as a reduction in responsibility\n- Likelihood: Medium | Impact: Medium\n- Mitigation: Involve affected team members in the pilot design and reframe the role change as a shift to quality auditing, which carries greater responsibility\n- Evidence: Both comparable teams reported initial resistance that reduced significantly after team members were included in the design phase (source: interviews with logistics and CS team leads, September 2024)\n\nOverall risk rating: Medium. All identified risks have proven mitigations from comparable implementations.\n\nHappy to discuss any element in more detail.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your risk assessment is structured, every risk has a rating and a mitigation, and comparable evidence is cited for each. Owen would attach this to his proposal without changes.",
          observation:
            "You included source references, time periods, and specific metrics for each comparable case. This level of rigour makes the assessment genuinely useful for decision-making.",
          coachingTip:
            "When writing risk assessments for analytical communicators, every risk needs four elements: what could happen, how likely it is, what you would do about it, and proof that the mitigation works.",
          styleContext:
            "Analytical communicators see risk assessments as the credibility test for any proposal. If the risks are well-understood and the mitigations are evidence-based, the proposal is hard to refuse.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your mitigations have supporting evidence. If you propose a mitigation without showing it has worked elsewhere, it is a suggestion, not a plan.",
          observation:
            "If your risk assessment includes mitigations like 'we will monitor closely' without specifying what you will monitor, how often, and what thresholds trigger action, it lacks the precision Owen requires.",
          coachingTip:
            "For each mitigation, add a comparable example. 'Team X did this and it worked' transforms a theoretical mitigation into a proven strategy.",
          styleContext:
            "Analytical communicators judge risk assessments by the quality of the mitigations, not just the identification of risks. Everyone can list risks - the value is in the evidence-based response.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your assessment either lacks structure, relies on qualitative judgements without data, or treats risk assessment as a formality rather than a genuine analytical exercise.",
          observation:
            "If your assessment includes phrases like 'we are confident the risks are manageable' without explaining why, it reads like reassurance rather than analysis.",
          coachingTip:
            "Replace every confidence statement with evidence. 'We are confident' becomes 'comparable implementations show'. Data is more convincing than assurance.",
          styleContext:
            "Analytical communicators see vague risk assessments as a red flag, not a green light. If the risks have not been rigorously assessed, the proposal is not ready.",
        },
      },
    },
  },

  // Scenario 240 - Fiona Banks, email, advanced
  {
    id: "scenario-240",
    title: "The Vendor Evaluation Report",
    context:
      "Fiona has been asked to evaluate three software vendors and recommend one to the leadership team via a formal written report. She has conducted structured evaluations over four weeks, including demos, reference calls, and cost modelling.",
    chooseContext:
      "The leadership team has pushed back on Fiona's recommendation, arguing that the cheapest vendor should be selected to control costs. Fiona believes the mid-priced vendor offers better long-term value and needs to defend her recommendation with data.",
    rewriteContext:
      "Fiona has asked you to draft the rebuttal email to leadership, showing the total cost of ownership comparison over three years and the risk-adjusted value assessment that supports her original recommendation.",
    characterId: "fiona-banks",
    dialogue:
      "I have evaluated all three vendors against 14 criteria across five categories: functionality, scalability, support quality, integration complexity, and total cost of ownership. The scoring is weighted based on the priorities the leadership team defined at the start of the process. My recommendation is Vendor B, the mid-priced option, and I can show you exactly why.",
    chooseDialogue:
      "I expected this pushback, which is why I built the three-year total cost of ownership model before submitting. The cheapest vendor has lower licensing fees, but their implementation costs are 40% higher and their support model charges per incident. Over three years, they are actually GBP 47,000 more expensive than Vendor B. I have the spreadsheet here.",
    rewriteDialogue:
      "Write the rebuttal. Open with the three-year TCO comparison, then show the risk-adjusted value analysis. Include a sensitivity table showing what happens to the cost comparison under three different usage scenarios. Cite every source. If leadership is going to override me, I want it to be despite the evidence, not because of missing information.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "email",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has conducted a four-week structured evaluation of three vendors using 14 weighted criteria across five categories and built a three-year total cost of ownership model to defend her recommendation against cost-focused pushback. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's approach is defined by rigour: structured criteria, weighted scoring, multi-year modelling, and pre-built rebuttals. She anticipated the objection and prepared the evidence in advance. This is advanced analytical communication.",
          observation:
            "Notice Fiona's final comment: 'I want it to be despite the evidence, not because of missing information.' This reveals the analytical mindset - they believe that if the evidence is complete, the right decision is obvious.",
          coachingTip:
            "When someone builds rebuttals into their original analysis because they anticipate objections, they are thinking like an advanced analytical communicator. Engage with their data, not their conclusion.",
          styleContext:
            "Analytical communicators at an advanced level do not just build cases - they build cases that account for every likely counter-argument. They see objections as data gaps to be filled, not opinions to be overcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Fiona is defending a clear recommendation, which looks direct. But notice that her defence is entirely evidence-based, not assertive. She is not demanding agreement - she is making disagreement harder.",
          observation:
            "A direct communicator would say 'Vendor B is the right choice and here is why.' Fiona says 'Here is a 14-criteria evaluation, a TCO model, and a sensitivity analysis - and they all point to Vendor B.'",
          coachingTip:
            "Direct communicators defend recommendations with conviction. Analytical communicators defend recommendations with evidence. Fiona lets the evidence carry the argument.",
          styleContext:
            "Analytical communicators believe that the strength of a recommendation is proportional to the rigour of the analysis behind it. Conviction without evidence is just opinion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on vendor relationships, team preferences, or the emotional impact of the decision. Her entire approach is structured around evidence and methodology.",
          observation:
            "There is no mention of which vendor the team liked best in demos, how the vendors made people feel, or which account manager was most responsive. Fiona's criteria are all measurable.",
          coachingTip:
            "Ask yourself: is this person evaluating based on experience or on evidence? Fiona has built a structured framework that removes subjectivity from the decision.",
          styleContext:
            "Analytical communicators believe that vendor decisions should be made on data, not relationships. Personal preferences introduce bias that structured evaluation is designed to eliminate.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leadership wants the cheapest vendor. Fiona has shown that the cheapest vendor is actually more expensive over three years when implementation and support costs are included. How do you support her position?",
      options: [
        {
          id: "s240-opt-a",
          text: "I have verified the implementation costs against two similar projects last year - the estimates are conservative. The per-incident support charges alone add 18,000 pounds annually at our current ticket volume.",
          score: 10,
          result: "strong",
          explanation:
            "You validate the model with independent verification and add specific supporting data. This strengthens Fiona's analytical case without repeating her arguments.",
        },
        {
          id: "s240-opt-b",
          text: "I also think Vendor B felt like a better cultural fit during the demos. Their team seemed more aligned with how we work, and I think that matters for long-term partnership.",
          score: 5,
          result: "partial",
          explanation:
            "A valid perspective, but Fiona is making a data-driven case. Introducing subjective criteria like 'cultural fit' shifts the conversation away from the evidence-based approach she has built.",
        },
        {
          id: "s240-opt-c",
          text: "At the end of the day, leadership will decide based on what they think is right. Perhaps we should just present all three options neutrally and let them choose.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the analytical case entirely. Fiona has invested four weeks in a structured evaluation specifically to inform the decision. Presenting options neutrally wastes that work and abdicates professional responsibility.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to draft a rebuttal email showing the three-year TCO comparison, risk-adjusted value analysis, and a sensitivity table under three usage scenarios. Write it in an analytical style with full source citations.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Re: Vendor Recommendation - TCO and Risk Analysis\n\nThank you for the feedback. I understand the focus on cost control. Below is additional analysis demonstrating why Vendor B represents the lowest total cost of ownership over the contract period.\n\n1. Three-Year Total Cost of Ownership\n| Cost Element | Vendor A (cheapest) | Vendor B (recommended) | Vendor C |\n|---|---|---|---|\n| Licensing (3 years) | GBP 72,000 | GBP 96,000 | GBP 132,000 |\n| Implementation | GBP 45,000 | GBP 28,000 | GBP 22,000 |\n| Annual support | GBP 0 (per-incident) | GBP 12,000/yr | GBP 15,000/yr |\n| Estimated incident costs | GBP 54,000 | GBP 0 (included) | GBP 0 (included) |\n| Total (3 years) | GBP 171,000 | GBP 160,000 | GBP 199,000 |\n\nSources: Vendor quotes dated 15 Feb (Appendix A); incident volume based on 12-month average of 15 tickets/month (IT Service Desk Report, Jan 2025)\n\n2. Risk-Adjusted Value Assessment\nVendor A carries two additional risks not reflected in headline pricing:\n- Implementation risk: Vendor A's quoted timeline is 60% longer than Vendor B's, based on reference calls with three existing clients (Appendix B)\n- Support risk: Per-incident charging creates unpredictable costs. A 20% increase in ticket volume would add GBP 10,800/year\n\n3. Sensitivity Analysis\n| Scenario | Vendor A TCO | Vendor B TCO | Difference |\n|---|---|---|---|\n| Low usage (10 tickets/month) | GBP 153,000 | GBP 160,000 | Vendor A saves GBP 7,000 |\n| Base case (15 tickets/month) | GBP 171,000 | GBP 160,000 | Vendor B saves GBP 11,000 |\n| High usage (22 tickets/month) | GBP 196,200 | GBP 160,000 | Vendor B saves GBP 36,200 |\n\nVendor A is only cheaper under the low-usage scenario, which is below our 12-month average.\n\nRecommendation: Vendor B remains the lowest-risk, lowest-cost option under realistic usage assumptions. I am happy to walk through any element of this analysis in person.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your rebuttal is structured, every figure is sourced, and the sensitivity analysis anticipates the next round of questions. Fiona would present this to leadership with complete confidence.",
          observation:
            "The sensitivity table is particularly effective. By showing that Vendor A is only cheaper in a scenario below actual usage, you have made the counter-argument nearly impossible to sustain.",
          coachingTip:
            "When writing rebuttals for analytical communicators, anticipate the next objection and address it proactively. The sensitivity table does this by asking 'what if usage is lower?' before leadership can.",
          styleContext:
            "Analytical communicators at an advanced level build rebuttals that close every escape route. The goal is not to argue - it is to make the evidence so complete that the conclusion is unavoidable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your sensitivity analysis covers enough scenarios. If leadership can think of a usage scenario you have not modelled, they still have room to challenge the recommendation.",
          observation:
            "If your analysis only shows the base case, it leaves the door open for 'but what if' objections. Sensitivity tables close those doors systematically.",
          coachingTip:
            "Add at least three scenarios: optimistic, base case, and pessimistic. Show that your recommendation holds in the majority of plausible scenarios.",
          styleContext:
            "Analytical communicators know that the strength of a recommendation is tested by how well it holds under different assumptions. Sensitivity analysis is the ultimate stress test.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your rebuttal either lacks supporting data, relies on qualitative arguments, or fails to address the specific cost concern leadership raised.",
          observation:
            "If your email says 'Vendor B is better value' without showing the numbers that prove it, leadership has no reason to change their position.",
          coachingTip:
            "Replace every claim with a calculation. 'Better value' becomes 'GBP 11,000 cheaper over three years under base case assumptions.' Numbers persuade; adjectives do not.",
          styleContext:
            "Analytical communicators believe that if you cannot quantify the difference, you have not proven it exists. In vendor evaluations, the spreadsheet is the argument.",
        },
      },
    },
  },
];
