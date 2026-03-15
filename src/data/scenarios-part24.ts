import { Scenario } from "@/types";

export const SCENARIOS_PART24: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (277-279) - negotiation
  // ============================================

  // Scenario 277 - Jordan Cole, negotiation, foundation
  {
    id: "scenario-277",
    title: "The Vendor Contract Renewal",
    context:
      "Jordan is leading the negotiation to renew a software vendor contract. The current deal expires in six weeks and the vendor has proposed a 15% price increase. Jordan believes the increase is unjustified given the service issues experienced over the past year.",
    chooseContext:
      "The vendor's account manager has justified the price increase by citing inflation and platform improvements. Jordan is pushing back with performance data from the last twelve months.",
    rewriteContext:
      "Jordan has asked you to draft a formal counter-offer email to the vendor, outlining the terms the company is willing to accept and the conditions for renewal.",
    characterId: "jordan-cole",
    dialogue:
      "A 15% increase after a year of downtime incidents and missed SLA targets is not a negotiation - it is an insult. We have documented every outage and every missed response window. I am going in with a flat renewal at the current rate, or we start the procurement process for alternatives today. They need to know we are serious.",
    chooseDialogue:
      "You are asking us to pay more for a service that underperformed. Here are the facts: four unplanned outages totalling 22 hours of downtime, and SLA response targets missed on 11 of 48 tickets. At the current price, we are overpaying. A 15% increase is off the table. Match the current rate or we issue the tender.",
    rewriteDialogue:
      "Send the counter-offer today. Current rate, twelve-month term, quarterly performance reviews with an exit clause if SLA compliance drops below 95%. Make it clear this is our final position. If they want a meeting to discuss, fine, but the terms do not change.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Jordan has responded to a vendor's price increase by citing documented service failures, demanding a flat renewal rate, and threatening to start procurement for alternatives immediately. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan uses evidence to support a firm position, sets a clear ultimatum, and signals readiness to walk away. This is a direct communicator negotiating from a position of informed strength.",
          observation:
            "Notice how Jordan treats the negotiation as binary: accept the current rate or lose the contract. Direct communicators create urgency by removing the middle ground.",
          coachingTip:
            "When a negotiator leads with data to support a non-negotiable position and includes a concrete consequence, they are operating in a direct style. Match their clarity with equally clear commitments.",
          styleContext:
            "Direct communicators use evidence as leverage, not as the basis for deliberation. The data justifies a decision already made, not a conversation to be had.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does cite specific performance data, which sounds analytical. But the data is deployed to win an argument, not to explore options. The conclusion came first; the evidence supports it.",
          observation:
            "An analytical negotiator would use the data to calculate a fair price adjustment. Jordan uses it to reject any price adjustment entirely.",
          coachingTip:
            "If someone uses data as a weapon to support a predetermined position, that is direct. If they use data to discover what the right position should be, that is analytical.",
          styleContext:
            "Direct communicators arrive at negotiations with their position decided. Analytical communicators arrive with their framework decided but the outcome open.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not tried to understand the vendor's perspective, build rapport with the account manager, or find a creative solution that works for both parties.",
          observation:
            "There is no relationship management, no empathy for the vendor's cost pressures, and no interest in a collaborative outcome. Jordan is negotiating to win.",
          coachingTip:
            "Ask yourself: is this person seeking a mutually beneficial outcome or the best possible deal for their side? Jordan is firmly focused on their own position.",
          styleContext:
            "Direct communicators believe that clear positions lead to faster resolutions. They see compromise as something that happens through pressure, not through understanding.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has presented the SLA data and demanded a flat renewal. The vendor's account manager says they need to discuss it internally. Jordan wants a response timeline. How do you support Jordan's position?",
      options: [
        {
          id: "s277-opt-a",
          text: "We need your response by close of business Friday. Our procurement team is ready to issue an alternative tender on Monday if we do not have agreed terms by then.",
          score: 10,
          result: "strong",
          explanation:
            "You set a clear deadline, stated the consequence of missing it, and ended with a firm but professional statement. This matches Jordan's approach of creating urgency through clarity.",
        },
        {
          id: "s277-opt-b",
          text: "Take the time you need to discuss internally. We are in no rush and we want to make sure both sides are comfortable with the outcome.",
          score: 5,
          result: "partial",
          explanation:
            "This removes all the pressure Jordan has carefully built. Giving the vendor unlimited time to respond weakens the negotiating position and contradicts Jordan's urgency.",
        },
        {
          id: "s277-opt-c",
          text: "Perhaps we could schedule a follow-up meeting next month to revisit this. That would give both sides time to explore options and come back with fresh perspectives.",
          score: 0,
          result: "weak",
          explanation:
            "This delays the resolution by a month, which is exactly what Jordan wants to avoid. The contract expires in six weeks and Jordan needs terms agreed now, not explored later.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to draft a counter-offer email to the vendor with the flat renewal rate, twelve-month term, quarterly reviews, and exit clause. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Contract Renewal - Counter-Offer\n\nFollowing our discussion today, here is our position on the renewal terms.\n\n1. Price: Flat renewal at the current annual rate. No increase.\n2. Term: Twelve months with quarterly performance reviews.\n3. SLA compliance: Minimum 95% across all agreed metrics. If compliance falls below 95% in any quarter, we reserve the right to exit with 30 days notice.\n4. Reporting: Monthly SLA compliance report submitted by the fifth working day of each month.\n\nThis is our final position. We value the partnership and would prefer to continue working together, but the service record over the past twelve months does not support a price increase.\n\nPlease confirm acceptance or arrange a call by close of business Friday. If we do not have agreed terms by Monday, we will begin the procurement process for alternative providers.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email states each term clearly, includes the exit clause, and sets a firm deadline. Jordan would send this without changes.",
          observation:
            "You included one sentence acknowledging the partnership, which prevents the email from being unnecessarily aggressive while maintaining its firmness. Direct communicators appreciate efficiency, not rudeness.",
          coachingTip:
            "When writing negotiation emails for direct communicators, one sentence of relationship acknowledgement is appropriate. More than that dilutes the message.",
          styleContext:
            "Direct communicators believe the best way to preserve a vendor relationship is to be honest about expectations. Vague dissatisfaction damages relationships more than clear demands.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your terms are stated as requirements or preferences. Phrases like 'we would appreciate' or 'ideally we would like' weaken a counter-offer.",
          observation:
            "If any term is presented as negotiable when Jordan intended it to be final, the vendor will test it. Every line should read as a condition, not a wish.",
          coachingTip:
            "Replace 'we would like' with 'our position is'. Replace 'we hope' with 'we require'. The language should reflect the finality Jordan demands.",
          styleContext:
            "Direct communicators know that in vendor negotiations, tentative language is an invitation to negotiate further. Firm language closes the loop faster.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too tentative, or spends too much time acknowledging the vendor's perspective. Jordan wants terms, conditions, and a deadline. Nothing else.",
          observation:
            "If your email opens with multiple sentences about the value of the partnership or understanding the vendor's cost pressures, it has become a relationship email rather than a counter-offer.",
          coachingTip:
            "Write the email, then remove every sentence that does not state a term, a condition, or a deadline. What remains is what Jordan needs.",
          styleContext:
            "Direct communicators view counter-offer emails as legal documents, not relationship letters. Every word should serve the commercial objective.",
        },
      },
    },
  },

  // Scenario 278 - Sam Hartley, negotiation, intermediate
  {
    id: "scenario-278",
    title: "The Salary Band Reclassification",
    context:
      "Sam is negotiating with HR to reclassify a team member's role to a higher salary band. The team member has been performing at a level above their current grade for over a year and Sam has documented evidence to support the case.",
    chooseContext:
      "HR has pushed back, saying the reclassification process is only run annually. Sam is challenging this policy because the team member has received an external offer and the timeline matters.",
    rewriteContext:
      "Sam has asked you to write the business case document that HR requires, framing it around evidence of performance at the higher level and the commercial risk of losing the team member.",
    characterId: "sam-hartley",
    dialogue:
      "The annual cycle is a policy convenience, not a commercial reality. We have someone performing at band six who is paid at band five, and they have an offer on the table. If we lose them because HR wanted to wait six months for a process, the cost of replacing them will be three times the salary adjustment. I need an exception and I need it this week.",
    chooseDialogue:
      "I understand the policy exists for a reason, but policies should have exception processes for exactly this situation. The evidence is clear: this person has been operating at the higher band for fourteen months. I have their project outcomes, their stakeholder feedback, and their line manager assessment. What more does HR need to make an out-of-cycle decision?",
    rewriteDialogue:
      "Write the business case. Lead with the commercial risk - replacement cost versus adjustment cost. Then show the evidence of higher-band performance. Keep it to two pages. HR needs to be able to approve this quickly, so make it easy for them to say yes.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam is challenging HR policy by framing a salary reclassification as a commercial risk, demanding an exception to the annual process, and insisting on a decision within the week. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam reframes a policy discussion as a commercial decision, uses cost-benefit language, and demands urgency. This is a direct communicator navigating bureaucracy by making the commercial case undeniable.",
          observation:
            "Notice how Sam positions the policy as the obstacle, not the team member's qualifications. Direct communicators attack systems that slow down obviously correct decisions.",
          coachingTip:
            "When someone frames an HR process as a commercial risk and demands an exception based on business impact, they are using a direct negotiation style. Support them with equally clear evidence.",
          styleContext:
            "Direct communicators see slow processes as business risks. When the right answer is obvious, they push to bypass the process rather than wait for it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam does present evidence, which sounds analytical. But Sam is not inviting a detailed review - she is demanding a fast decision based on evidence that she considers conclusive.",
          observation:
            "An analytical negotiator would build a comprehensive case and trust the process to reach the right conclusion. Sam is bypassing the process entirely because the timeline demands it.",
          coachingTip:
            "If someone presents evidence to expedite a decision, that is direct. If they present evidence to ensure the decision is thorough, that is analytical. Sam wants speed, not depth.",
          styleContext:
            "Direct communicators use evidence to close arguments, not to open them. The case is made; the decision is overdue.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not focused on how the team member feels, how the situation affects team morale, or how to manage the relationship with HR diplomatically.",
          observation:
            "There is no emotional language, no concern about the team member's feelings, and no attempt to build a collaborative relationship with HR. Sam is focused entirely on the commercial outcome.",
          coachingTip:
            "Ask yourself: is this person advocating for the team member's wellbeing or for the business case? Sam is making a commercial argument, not an emotional one.",
          styleContext:
            "Direct communicators advocate for their people by making the business case so strong that the decision becomes obvious. The emotion is implicit in the action.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has asked HR what evidence they need to make an out-of-cycle decision. HR says they need a business case with performance evidence and manager sign-off. How do you help Sam?",
      options: [
        {
          id: "s278-opt-a",
          text: "I will have the business case on your desk by tomorrow morning. Performance data, three stakeholder endorsements, and the replacement cost analysis. Manager sign-off is confirmed. What is the fastest approval route?",
          score: 10,
          result: "strong",
          explanation:
            "You committed to a specific deliverable with a tight deadline and immediately asked about the next step. This matches Sam's urgency and demonstrates that you are already ahead of the process.",
        },
        {
          id: "s278-opt-b",
          text: "I can start pulling the performance data together this week. It might take a few days to get the stakeholder feedback, but I should have a draft ready by next Friday.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful but too slow. Sam has said the decision is needed this week because of the external offer. A timeline that extends to next Friday may be too late.",
        },
        {
          id: "s278-opt-c",
          text: "Before we commit to a business case, should we check whether the team member would actually stay even if we match the offer? Sometimes it is not just about money and they might have other reasons for wanting to leave.",
          score: 0,
          result: "weak",
          explanation:
            "This introduces doubt at the worst possible moment. Sam has assessed the situation and decided to act. Questioning the premise delays the response and risks losing the team member while you deliberate.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to write a two-page business case leading with commercial risk, then performance evidence. Make it easy for HR to approve quickly. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Business Case: Salary Band Reclassification - Band 5 to Band 6\n\nCommercial Risk\nThe employee has received an external offer. If they leave:\n- Replacement cost (recruitment, onboarding, lost productivity): estimated 45,000 pounds.\n- Time to replace: 3-4 months based on current market conditions for this skill set.\n- Knowledge loss: sole owner of two critical client relationships and the lead on Project Atlas.\n\nCost of reclassification: 8,200 pounds annual salary adjustment.\nCost of inaction: 45,000 pounds minimum plus project disruption.\n\nPerformance Evidence\nThe employee has been operating at Band 6 level for 14 months:\n1. Led Project Atlas from scoping to delivery, a responsibility assigned at Band 6 (project value: 320,000 pounds, delivered on time and under budget).\n2. Managed three direct reports informally since September, a Band 6 responsibility. All three have improved performance ratings.\n3. Received 'exceeds expectations' in the last two formal reviews, with specific feedback noting they are performing above their current grade.\n4. Three stakeholder endorsements attached, each confirming Band 6 level contribution.\n\nManager sign-off: Confirmed by [Name], [Date].\n\nRecommendation: Approve immediate reclassification to Band 6 with effect from the first of next month.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your business case leads with the commercial argument, supports it with specific evidence, and closes with a clear recommendation. HR can approve this in a single reading.",
          observation:
            "You framed the decision as a comparison between two costs: the cost of acting versus the cost of not acting. Direct communicators love binary choices that make the right answer obvious.",
          coachingTip:
            "When writing business cases for direct communicators, always lead with what happens if you do nothing. The cost of inaction is the most persuasive argument for action.",
          styleContext:
            "Direct communicators structure business cases as decision documents, not discussion documents. The reader should reach the end knowing exactly what to approve and why.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good foundation, but check whether your commercial risk section is specific enough. If the replacement cost is described as 'significant' rather than a specific figure, HR cannot weigh it against the adjustment cost.",
          observation:
            "If your business case does not include a direct comparison between the cost of the reclassification and the cost of losing the employee, it is missing its strongest argument.",
          coachingTip:
            "Add a one-line summary: 'Cost of action: X. Cost of inaction: Y.' That single comparison is the business case in a sentence.",
          styleContext:
            "Direct communicators know that business cases succeed or fail on the clarity of the cost comparison. Make the numbers impossible to ignore.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your business case is either too long, too focused on the employee's feelings, or does not include the commercial risk comparison Sam specifically asked for.",
          observation:
            "If your document reads like a performance review rather than a commercial decision paper, it will not create the urgency Sam needs from HR.",
          coachingTip:
            "Ask yourself: could HR approve this in under five minutes? If not, it is too long or too complicated. Sam said two pages and easy to approve.",
          styleContext:
            "Direct communicators write business cases to make decisions easy, not to document everything they know. Brevity and clarity are more persuasive than comprehensiveness.",
        },
      },
    },
  },

  // Scenario 279 - Alex Tran, negotiation, advanced
  {
    id: "scenario-279",
    title: "The Partnership Terms Standoff",
    context:
      "Alex is negotiating a strategic partnership agreement with a competitor-turned-collaborator. Both companies want the deal, but neither wants to concede on revenue share terms. Alex has been given authority to close the deal but not to go below 55% share.",
    chooseContext:
      "The other company's negotiator has proposed a 50/50 split as 'fair'. Alex sees this as ignoring the fact that her company is bringing the established client base. The negotiation has reached a critical moment.",
    rewriteContext:
      "Alex has reached a compromise and asked you to draft the heads of terms email capturing the agreed structure before lawyers get involved.",
    characterId: "alex-tran",
    dialogue:
      "50/50 sounds fair if you ignore the fact that we are contributing the client relationships, the brand reputation, and the market access. They are contributing technology. Technology without clients is a product demo. Clients without technology is a business. I am not going below 55 and I have a clear rationale for why.",
    chooseDialogue:
      "Let me be specific. We are bringing a client base worth 2.4 million in annual recurring revenue. Your technology has not been commercially validated yet. The 55/45 split reflects the risk imbalance: we are giving you access to proven revenue, you are giving us access to unproven capability. When the technology is commercially proven, we revisit the split. That is the offer.",
    rewriteDialogue:
      "Draft the heads of terms. Revenue split, review mechanism, IP ownership, and termination rights. Keep it clean and precise. I want this in their inbox before the end of the day so the momentum does not stall. Lawyers can refine it, but the commercial terms need to be locked now.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Alex has rejected a 50/50 partnership split by quantifying the value her company brings, framing the split around risk imbalance, and offering a review mechanism tied to commercial validation. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex takes a firm position, supports it with a clear commercial rationale, and offers a structured path forward without conceding on the core term. This is advanced direct negotiation - firm on position, flexible on mechanics.",
          observation:
            "The phrase 'technology without clients is a product demo' is a direct communicator's way of establishing a power dynamic through a memorable, decisive statement.",
          coachingTip:
            "When a negotiator uses vivid, memorable language to establish their position and then supports it with commercial logic, they are combining directness with strategic persuasion.",
          styleContext:
            "Direct communicators in high-stakes negotiations use memorable phrases to anchor the conversation. The other side remembers the phrase long after the data is forgotten.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex uses specific revenue figures and proposes a structured review, which sounds analytical. But the data serves a position already determined, and the review mechanism is a concession tool, not an analytical framework.",
          observation:
            "An analytical negotiator would propose a revenue-share formula based on measurable contributions from both sides. Alex has decided on 55% and is using data to justify it.",
          coachingTip:
            "If someone uses data to defend a position, that is direct. If they use data to derive a position, that is analytical. Alex's 55% was decided before the conversation started.",
          styleContext:
            "Direct communicators prepare their position before the negotiation and use the negotiation to communicate it. The meeting is a delivery mechanism, not a discovery process.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not tried to understand the other company's concerns, build a collaborative vision, or create emotional buy-in for the partnership. The negotiation is entirely transactional.",
          observation:
            "There is no mention of shared purpose, mutual benefit beyond the financial terms, or the relationship between the two teams. Alex treats this as a commercial calculation.",
          coachingTip:
            "Ask yourself: is this person negotiating a relationship or a transaction? Alex is negotiating terms. The relationship is a consequence of getting the terms right.",
          styleContext:
            "Direct communicators believe that good deals create good relationships, not the other way around. Get the terms right and the partnership follows.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has proposed a 55/45 split with a review mechanism tied to commercial validation. The other company's negotiator says they cannot sell 45% internally. How does Alex respond?",
      options: [
        {
          id: "s279-opt-a",
          text: "The numbers justify the split. Here is what I can offer: the review at twelve months instead of eighteen, and if your technology hits the agreed revenue target, the split moves to 50/50 automatically. That gives your board a clear path to parity.",
          score: 10,
          result: "strong",
          explanation:
            "You held the core position while offering a meaningful concession on the review timeline. This gives the other side something to present internally without Alex giving up the initial split.",
        },
        {
          id: "s279-opt-b",
          text: "Perhaps we should explore a 52/48 split as a middle ground. It is closer to their position and still gives us the majority share we need.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but Alex has been given a floor of 55%. Moving to 52% exceeds her authority and gives up ground without getting anything in return. Concessions should be traded, not gifted.",
        },
        {
          id: "s279-opt-c",
          text: "Maybe we should step back from the numbers and talk about what this partnership could mean for both companies in the long term. If we focus on the bigger picture, the revenue split might feel less important.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts from concrete negotiation to abstract vision-building at the worst possible moment. Alex has the other side engaged on terms and you are suggesting they stop talking about terms.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to draft heads of terms covering revenue split, review mechanism, IP ownership, and termination rights. Write it in a direct style that locks the commercial terms clearly.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Heads of Terms - Strategic Partnership\n\nThe following terms are agreed in principle, subject to legal documentation.\n\n1. Revenue split: 55% [Company A] / 45% [Company B], applied to all joint revenue from the partnership.\n\n2. Review mechanism: Revenue split reviewed at twelve months. If [Company B]'s technology generates a minimum of 500,000 pounds in attributed revenue within that period, the split moves to 50/50 from month thirteen onward.\n\n3. IP ownership: Each company retains ownership of its pre-existing IP. Jointly developed IP is co-owned with equal rights to license independently.\n\n4. Termination: Either party may terminate with 90 days written notice. On termination, existing client contracts continue under the originating company. Revenue share on active contracts continues for 12 months post-termination.\n\n5. Exclusivity: Neither party enters a competing partnership in this market segment for the duration of the agreement.\n\nPlease confirm these terms in writing by close of business tomorrow. Legal documentation to follow within 14 days of confirmation.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your heads of terms are structured, precise, and cover all four areas Alex specified. Each term is unambiguous and the closing deadline maintains momentum.",
          observation:
            "You included the review trigger mechanism with a specific revenue threshold, which turns the review from a vague promise into a contractual milestone. Alex would approve this immediately.",
          coachingTip:
            "When writing heads of terms for direct communicators, every term should be self-explanatory. If someone needs to ask what a clause means, it is not clear enough.",
          styleContext:
            "Direct communicators use heads of terms to prevent scope creep in legal drafting. The clearer the commercial terms, the faster the lawyers can work.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your review mechanism has a specific trigger. If the review is described as 'based on mutual assessment', it is too vague and will create disputes later.",
          observation:
            "If any term requires further negotiation to be actionable, it is not a head of terms - it is a discussion point. Alex wants terms that can go straight to lawyers.",
          coachingTip:
            "For each clause, ask: could a lawyer draft a contract from this? If not, add the missing specifics.",
          styleContext:
            "Direct communicators see heads of terms as the commercial deal. Legal documentation should formalise, not renegotiate.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your heads of terms are either too vague, too lengthy, or include aspirational language that does not belong in a commercial document. Alex needs precision, not sentiment.",
          observation:
            "If your document includes phrases like 'both parties will endeavour to' or 'in the spirit of collaboration', it has become a partnership manifesto rather than a commercial agreement.",
          coachingTip:
            "Delete every sentence that describes an aspiration rather than a term. Heads of terms should contain only commitments, not intentions.",
          styleContext:
            "Direct communicators believe that clear commercial terms are the foundation of trust. Vague aspirations in legal documents are the foundation of disputes.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (280-282) - remote
  // ============================================

  // Scenario 280 - Priya Sharma, remote, foundation
  {
    id: "scenario-280",
    title: "The Virtual Team Welcome",
    context:
      "Priya is welcoming a new team member who will be working fully remote. She wants the first video call to feel warm, personal, and to set the tone for an inclusive team culture despite the physical distance.",
    chooseContext:
      "Priya has noticed that the new joiner seems quiet and a bit overwhelmed during the call. She is trying to draw them in without putting them on the spot.",
    rewriteContext:
      "Priya has asked you to write a welcome message for the team chat channel that introduces the new person and makes them feel part of the team from day one.",
    characterId: "priya-sharma",
    dialogue:
      "I know starting a new job remotely can feel strange - you do not get the watercooler introductions or the someone-shows-you-where-the-coffee-is moments. So let us create those digitally. I want everyone on this call to share one thing about themselves that has nothing to do with work. I will go first.",
    chooseDialogue:
      "You look like you might have a question but are not sure whether to ask. Please ask anything - there is genuinely no such thing as a silly question here, especially in your first week. We have all been the new person and we all remember what it felt like.",
    rewriteDialogue:
      "Write a welcome message for the team channel. Make it warm, make it personal, and include a fun fact about the new joiner that they shared during our call. I want the team to feel like they already know this person before they have even worked together.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has opened a remote onboarding call by acknowledging the awkwardness of starting remotely, creating a personal sharing exercise, and volunteering to go first. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya creates warmth and connection through shared personal stories, leads by example with vulnerability, and designs the call to build human connection rather than just transfer information. This is expressive communication in a remote context.",
          observation:
            "Notice how Priya frames the remote challenge as an opportunity to be intentional about culture-building rather than a limitation. Expressive communicators turn constraints into creative opportunities.",
          coachingTip:
            "When someone designs a meeting around personal connection and leads with their own openness, they are signalling an expressive style. Respond with genuine personal sharing, not corporate answers.",
          styleContext:
            "Expressive communicators see remote work as a reason to be more intentional about human connection, not less. They create the informal moments that physical offices provide naturally.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya's care for the new joiner's comfort sounds supportive. But the approach is energetic and creative - designing a sharing exercise, leading with personality, creating buzz - rather than quiet and protective.",
          observation:
            "A supportive communicator would privately check in with the new joiner before the call and ensure they felt comfortable. Priya creates a group experience that makes connection fun.",
          coachingTip:
            "If someone creates an interactive, personality-driven welcome experience, that is expressive. If they quietly ensure the new person feels safe and supported, that is supportive.",
          styleContext:
            "Expressive communicators build team culture through shared experiences. Supportive communicators build it through individual care. Both matter in remote teams.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not focused on the onboarding checklist, the systems access, or the training schedule. She has prioritised the human experience of joining a team remotely.",
          observation:
            "There are no process steps, no IT setup instructions, and no formal agenda. Priya is managing the emotional dimension of onboarding, not the operational one.",
          coachingTip:
            "Ask yourself: is this person trying to process the new joiner or to welcome them? Priya is creating belonging, not completing a checklist.",
          styleContext:
            "Expressive communicators believe that a new person's first experience sets the tone for their entire tenure. Getting the welcome right matters more than getting the laptop configured.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has noticed the new joiner seems quiet and overwhelmed. She has gently invited them to ask questions without pressure. What is the best way to respond as a team member on the call?",
      options: [
        {
          id: "s280-opt-a",
          text: "When I started six months ago, I was exactly where you are now. Priya did the same for me and within a week I felt like I had been here years. Ask anything, message anyone. We are glad you are here.",
          score: 10,
          result: "strong",
          explanation:
            "You shared your own experience to normalise the new joiner's feelings and reinforced Priya's welcoming message with a concrete personal example. This builds the inclusive culture Priya is creating.",
        },
        {
          id: "s280-opt-b",
          text: "If you need anything, my calendar is always open. Just book a slot and I am happy to help with whatever you need.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful and genuine, but it is a practical offer rather than an emotional connection. Priya is building warmth and belonging - your response should match that energy.",
        },
        {
          id: "s280-opt-c",
          text: "The onboarding wiki has everything you need. I would start with the team handbook section and work through the first-week checklist. It is very comprehensive.",
          score: 0,
          result: "weak",
          explanation:
            "This redirects to documentation when Priya is building human connection. It is the digital equivalent of pointing someone to a filing cabinet when they are trying to make friends.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a welcome message for the team chat channel that introduces the new joiner with warmth and a fun fact. Make the team feel like they already know this person. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team, meet Jamie Rivera - our newest member and officially the most interesting person on the team.\n\nJamie joins us from the product team at Greenfield and brings six years of experience in customer insight work. But here is the important stuff: Jamie is a competitive quizzer who has been on two televised quiz shows (and won both), makes their own pasta from scratch every Sunday, and has a rescue greyhound called Mango.\n\nI had a brilliant first call with Jamie this morning and I already know they are going to be a brilliant addition. If you see Jamie online, say hello. If you have quiz questions, even better.\n\nWelcome to the team, Jamie. We are glad you are here.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, personal, and makes Jamie feel like a person, not a hire. The team will want to reach out after reading this, which is exactly what Priya intended.",
          observation:
            "You balanced professional credentials with personal details, and the tone is enthusiastic without being forced. Expressive communicators create introductions people actually enjoy reading.",
          coachingTip:
            "When writing team introductions for expressive communicators, the personal details should take up more space than the professional ones. The CV is on LinkedIn - the welcome message should be human.",
          styleContext:
            "Expressive communicators use welcome messages to set cultural expectations. By introducing someone personally, they signal that the team values people, not just roles.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether your fun facts are specific enough to be memorable. If the personal details could describe anyone, they need more character.",
          observation:
            "If your introduction reads like a LinkedIn connection note, it is too professional and not personal enough for what Priya wants.",
          coachingTip:
            "Include at least one detail that makes people smile or want to ask a follow-up question. That is the conversation starter Priya is looking for.",
          styleContext:
            "Expressive communicators measure welcome messages by whether they generate conversation. If the team channel stays quiet after the introduction, it did not land.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too brief, or reads like a corporate announcement rather than a personal welcome. Priya wanted the team to feel like they know Jamie already.",
          observation:
            "If your message could appear in a company newsletter without modification, it lacks the personal touch Priya specifically asked for.",
          coachingTip:
            "Rewrite it as if you are introducing a friend to your other friends. That is the energy level and informality Priya is looking for.",
          styleContext:
            "Expressive communicators believe that how you introduce someone determines how quickly they belong. A warm introduction accelerates belonging by weeks.",
        },
      },
    },
  },

  // Scenario 281 - Marcus Webb, remote, intermediate
  {
    id: "scenario-281",
    title: "The Remote Team Morale Check",
    context:
      "Marcus is running a weekly remote team check-in and has noticed that energy levels have been dropping over the past few weeks. He wants to address it openly and collaboratively rather than ignoring it or forcing positivity.",
    chooseContext:
      "Marcus has asked the team how they are really doing and one person has been honest about feeling disconnected and struggling with the isolation of remote work. Others are nodding in agreement.",
    rewriteContext:
      "Marcus has asked you to write a follow-up message summarising what the team agreed to try over the next two weeks to improve remote team connection.",
    characterId: "marcus-webb",
    dialogue:
      "I can feel the energy dipping and I think we owe it to each other to talk about it rather than pretend everything is fine. Remote work is brilliant in many ways, but it can also be lonely. I do not want this to become one of those teams where everyone is fine on camera and struggling off camera. So let us be honest. How are we really doing?",
    chooseDialogue:
      "Thank you for saying that. I think a lot of us feel the same way but nobody wanted to be the first to say it. That takes courage and I appreciate it. So let us figure this out together. What would help? What small changes could we make that would make the remote experience feel more connected?",
    rewriteDialogue:
      "Write up what we agreed. Keep the tone warm and collaborative - this is not a directive, it is something the team designed together. Remind people that these are experiments, not rules. If something does not work, we change it. The point is that we are trying together.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Marcus has acknowledged declining team energy, invited honest conversation about remote work challenges, and specifically said he does not want a team where people pretend to be fine. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with emotional honesty, creates space for vulnerability, and frames the challenge as something the team will tackle together with energy and openness. This is an expressive communicator addressing morale through authentic connection.",
          observation:
            "Notice how Marcus normalises the struggle rather than pathologising it. He frames remote isolation as something natural that deserves attention, not as a problem someone has caused.",
          coachingTip:
            "When a leader names the emotional reality of the team and invites open conversation, they are demonstrating expressive leadership. Respond with matching honesty, not corporate optimism.",
          styleContext:
            "Expressive communicators believe that naming a problem openly is the first step to solving it. They create psychological safety through modelling vulnerability.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus's care for the team sounds supportive. But his approach is collective and energising - he is building a shared experience of tackling the challenge together, not individually supporting each person.",
          observation:
            "A supportive communicator would follow up with individual check-ins. Marcus is creating a group conversation where the team supports each other in the open.",
          coachingTip:
            "If someone addresses morale through group vulnerability and collective problem-solving, that is expressive. If they address it through private, individual care, that is supportive.",
          styleContext:
            "Expressive communicators heal teams through shared experiences. Supportive communicators heal teams through individual attention. Marcus is building collective resilience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not proposed a structured wellness programme, a data-driven engagement survey, or a formal process for monitoring morale. His approach is entirely human and conversational.",
          observation:
            "There are no metrics, no frameworks, and no formal follow-up processes. Marcus is managing energy and connection through authentic dialogue.",
          coachingTip:
            "Ask yourself: is this person trying to measure morale or to improve it through connection? Marcus believes the conversation itself is the intervention.",
          styleContext:
            "Expressive communicators see honest team conversations as more powerful than engagement surveys. The act of talking openly about how people feel is itself a morale improvement.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has been honest about feeling disconnected working remotely. Marcus has thanked them and asked the team to suggest small changes. What do you contribute?",
      options: [
        {
          id: "s281-opt-a",
          text: "What if we started each Monday with a 15-minute coffee call about our weekends? No agenda, just people being people. And on Thursdays, pair up for a virtual walk-and-talk on phones. It keeps the connection human.",
          score: 10,
          result: "strong",
          explanation:
            "You proposed two specific, human-centred activities that create informal connection. The tone matches Marcus's emphasis on genuine interaction over forced team-building.",
        },
        {
          id: "s281-opt-b",
          text: "We could set up a Slack channel for non-work chat. That way people can share things informally without feeling like they are interrupting.",
          score: 5,
          result: "partial",
          explanation:
            "A good starting point, but it is a passive solution. Marcus wants active connection - things that bring people together, not just a space where they could connect if they choose to.",
        },
        {
          id: "s281-opt-c",
          text: "I think we should be careful not to add more meetings to people's calendars. If people are feeling drained, more calls might not be the answer. Maybe we should survey the team first to understand what they actually want.",
          score: 0,
          result: "weak",
          explanation:
            "This caution stalls the momentum Marcus has created. The team is in the room, sharing honestly. Suggesting a survey replaces a live, authentic conversation with a bureaucratic process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a follow-up message summarising the team's agreed experiments for improving remote connection. Keep it warm and collaborative. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi everyone,\n\nThank you for such an honest conversation today. It takes courage to say 'I am struggling' in a group call, and the fact that we can do that says something really good about this team.\n\nHere is what we agreed to try over the next two weeks:\n\n1. Monday morning coffee call (15 mins, 9am). No agenda, no work talk. Just us catching up like humans. Marcus is bringing virtual biscuits.\n2. Thursday walk-and-talk pairs. Two people dial in on their phones and chat while walking. Random pairings each week so everyone connects with someone different.\n3. Friday wins thread. Everyone posts one thing that went well during the week in the team channel. Could be work, could be personal. One sentence is enough.\n\nThese are experiments, not policies. If something does not work, we change it. If something brilliant emerges, we keep it. The point is that we are doing this together.\n\nSee you at the coffee call on Monday.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, specific, and positions the initiatives as team-owned experiments. The tone perfectly matches Marcus's collaborative, human-first approach.",
          observation:
            "You acknowledged the courage shown in the conversation before listing the actions. This sequencing shows that the team's emotional bravery is valued as much as the practical outcomes.",
          coachingTip:
            "When writing for expressive communicators, always acknowledge the emotional moment before the practical actions. The feelings are the foundation; the actions are built on top.",
          styleContext:
            "Expressive communicators design team rituals that feel natural and fun, not mandated. The best remote team practices are the ones people look forward to, not the ones they endure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your tone is warm enough. If the message reads like meeting minutes, it needs more personality and emotional connection.",
          observation:
            "If your message jumps straight to the action items without acknowledging the conversation that led to them, it misses the emotional context Marcus values.",
          coachingTip:
            "Add a sentence that thanks the team for their honesty before you list the actions. That acknowledgement transforms minutes into a meaningful follow-up.",
          styleContext:
            "Expressive communicators see follow-up messages as opportunities to reinforce culture, not just record decisions. The tone is as important as the content.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too directive, or treats the team's ideas as tasks rather than experiments. Marcus specifically asked for a collaborative, non-prescriptive tone.",
          observation:
            "If your message uses phrases like 'the following has been agreed and will be implemented', it has become a management directive rather than a team commitment.",
          coachingTip:
            "Rewrite it as if you are texting friends about plans you made together at dinner. Professional enough for work, personal enough to feel real.",
          styleContext:
            "Expressive communicators know that the moment a team initiative feels mandated, it loses its magic. Keep the language voluntary, playful, and human.",
        },
      },
    },
  },

  // Scenario 282 - Nina Okafor, remote, advanced
  {
    id: "scenario-282",
    title: "The Remote Conflict Resolution",
    context:
      "Nina is mediating a conflict between two remote team members who have had a misunderstanding over a Slack message. One interpreted a curt message as hostile; the other had no idea their message landed badly. The tension has been building for two weeks.",
    chooseContext:
      "Nina has brought both team members onto a video call. The person who felt attacked has shared how the message made them feel. The sender looks genuinely shocked and wants to explain.",
    rewriteContext:
      "Nina has asked you to write a message to both team members after the call, summarising what was discussed and the agreed approach to preventing future misunderstandings.",
    characterId: "nina-okafor",
    dialogue:
      "Remote work strips away all the body language and tone that would normally stop a message from being misread. What happened here is not unusual and it is not either of your faults. It is a gap in how we communicate digitally. I brought you together because I believe you both care about this working relationship, and I want us to fix it openly, not let it fester.",
    chooseDialogue:
      "Thank you for sharing that. I can see how much that message affected you, and I appreciate you telling us. And I can see from your face that you had no idea it landed that way. That is the challenge of text-based communication - it strips out everything except the words, and words without tone can cut in ways we never intended.",
    rewriteDialogue:
      "Write a message to both of them after the call. Start by acknowledging that the conversation took courage. Then summarise the practical steps we agreed on for better digital communication. Keep it warm - I do not want it to feel like a disciplinary outcome. This was a team learning moment, not a performance issue.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Nina has framed a remote miscommunication conflict as a natural consequence of digital work, validated both sides without assigning blame, and brought the team members together for an open conversation. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina normalises the conflict, validates both emotional experiences, and brings people together for transparent resolution. This is an expressive communicator using emotional intelligence to heal a relationship openly rather than managing it behind the scenes.",
          observation:
            "Notice how Nina frames the problem as systemic (remote communication gaps) rather than personal (one person being rude). This depersonalisation allows both sides to engage without defensiveness.",
          coachingTip:
            "When a mediator normalises the conflict, validates both perspectives, and creates an open forum for resolution, they are using an expressive conflict resolution style. They believe transparency heals.",
          styleContext:
            "Expressive communicators resolve remote conflicts by bringing people together and making the invisible visible. They believe that what is discussed openly loses its power to damage.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's care for both parties sounds supportive. But she has chosen a group conversation rather than individual support. She wants the resolution to happen openly, not privately.",
          observation:
            "A supportive communicator would speak to each person individually first, then potentially bring them together only if both felt ready. Nina leads with the joint conversation.",
          coachingTip:
            "If someone brings conflicting parties together for an open, empathetic conversation, that is expressive. If they separately support each person and slowly build bridges, that is supportive.",
          styleContext:
            "Expressive communicators believe that shared vulnerability creates stronger bonds than private reassurance. They trust the group process to heal.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not proposed a communications policy, a tone-of-voice guide, or a formal process for flagging misunderstandings. Her approach is entirely relational and human.",
          observation:
            "There are no process documents, no training programmes, and no formal escalation procedures mentioned. Nina sees this as a human moment requiring a human response.",
          coachingTip:
            "Ask yourself: is this person building a process or healing a relationship? Nina is focused on the people, not the policy.",
          styleContext:
            "Expressive communicators see interpersonal conflicts as opportunities for deeper connection, not as problems requiring new procedures.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The sender of the misinterpreted message is visibly shocked and wants to explain their intent. Nina has acknowledged both sides. How do you support the conversation as a facilitator?",
      options: [
        {
          id: "s282-opt-a",
          text: "Take a moment. It might help if you shared what you were thinking when you wrote that message. Not to justify it, but so we can all see the gap between intent and impact. That is where the learning is.",
          score: 10,
          result: "strong",
          explanation:
            "You created space for the sender to share their intent while framing it as a team learning opportunity rather than a defence. This matches Nina's belief that open conversation heals better than private apology.",
        },
        {
          id: "s282-opt-b",
          text: "Perhaps you could message them privately after the call and explain what you meant. That might feel less pressured than doing it in front of everyone.",
          score: 5,
          result: "partial",
          explanation:
            "This might work in a supportive approach, but Nina has specifically chosen an open conversation as the format. Suggesting a private follow-up sidesteps the transparency she values.",
        },
        {
          id: "s282-opt-c",
          text: "I think we should move past the specifics of this message and focus on creating guidelines for digital communication. That way we prevent this from happening again without dwelling on who said what.",
          score: 0,
          result: "weak",
          explanation:
            "This bypasses the emotional resolution that Nina has carefully set up. Moving to policy before the relationship is repaired means the guidelines will be built on unresolved tension.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a follow-up message to both team members after the resolution call. Acknowledge the courage shown, summarise practical agreements, and keep it warm. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi both,\n\nI wanted to follow up on our conversation today - and start by saying thank you. What happened in that call took real courage from both of you. Being honest about how something made you feel, and being open to hearing that your words landed differently than you intended, are not easy things to do. You both showed up for each other and that says a lot about the kind of working relationship you are building.\n\nHere is what we agreed to try going forward:\n\n1. Tone check on sensitive messages. Before sending a message that could be read multiple ways, re-read it imagining you are having a bad day. If it could sting, add a line of context or pick up the phone instead.\n2. Assume positive intent first. If a message feels off, ask the sender about it before responding. A quick 'Hey, I want to make sure I am reading this right' can prevent two weeks of tension.\n3. Monthly connection call. A 20-minute video call between the two of you, no agenda, just to maintain the human connection that text alone cannot provide.\n\nThis was not a failure. It was a learning moment that will make your working relationship stronger. And if anything like this comes up again - with each other or with anyone else - please bring it to me early. I would always rather have a conversation than discover a problem too late.\n\nProud of you both.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message acknowledges the emotional courage, reframes the conflict as growth, and provides practical agreements in a warm, non-punitive tone. Nina would send this with pride.",
          observation:
            "You closed by inviting future openness and expressing genuine pride. Expressive communicators end difficult-topic messages with forward-looking warmth that reinforces the relationship.",
          coachingTip:
            "When writing resolution follow-ups for expressive communicators, balance emotional acknowledgement with practical next steps. Neither should overwhelm the other.",
          styleContext:
            "Expressive communicators see conflict resolution messages as relationship-building opportunities. The follow-up should strengthen the bond, not just document the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message adequately acknowledges the emotional dimension. If it jumps to practical steps without validating the courage shown, it feels transactional.",
          observation:
            "If your message reads like an action plan with a warm greeting, the emotional depth Nina values is missing. The acknowledgement section should be substantial, not a single line.",
          coachingTip:
            "Expand the emotional acknowledgement to at least a full paragraph. Name what each person did that was brave. Specificity in emotional recognition is what makes it feel genuine.",
          styleContext:
            "Expressive communicators believe that the emotional processing in a follow-up message is as important as the practical agreements. Rush the feelings and the actions will not stick.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too process-focused, or reads like a disciplinary outcome rather than a team learning moment. Nina specifically wanted warmth and collaboration.",
          observation:
            "If your message uses phrases like 'as discussed and agreed' or 'going forward, both parties will', it has become an HR document rather than a leadership message.",
          coachingTip:
            "Imagine you are writing to two friends who had a misunderstanding and worked through it beautifully. That tone - proud, warm, forward-looking - is what Nina wants.",
          styleContext:
            "Expressive communicators turn conflict resolutions into stories of growth and connection. The follow-up message should feel like the final chapter of a story that ends well.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (283-285) - meeting
  // ============================================

  // Scenario 283 - Tom Brennan, meeting, foundation
  {
    id: "scenario-283",
    title: "The Restructure Briefing",
    context:
      "Tom is leading a team meeting to share news about an upcoming departmental restructure. He knows the team will be anxious and wants to create space for questions while providing as much reassurance as the situation honestly allows.",
    chooseContext:
      "Tom has delivered the news and opened the floor for questions. A team member asks whether anyone will lose their job. Tom knows that some roles may be at risk but final decisions have not been made.",
    rewriteContext:
      "Tom has asked you to write a follow-up email to the team summarising what was shared and what the next steps are, keeping the tone honest but reassuring.",
    characterId: "tom-brennan",
    dialogue:
      "I wanted to bring you together to share this news face to face rather than you hearing it through the grapevine. I know restructures can be unsettling, and I am not going to pretend I have all the answers today. What I can promise is that I will share information as soon as I have it, and that nobody will hear news about their role from anyone other than me.",
    chooseDialogue:
      "I wish I could give you a definitive answer on that right now, but I would be lying if I said I knew for certain. What I can tell you honestly is that the leadership team is working to protect as many roles as possible. If any role is affected, the person in that role will hear from me first, privately, before any public announcement. You will not be blindsided.",
    rewriteDialogue:
      "Write the follow-up email. Be honest about what we know and what we do not. List the next steps clearly so people feel there is a process. And remind them that my door is open - literally and virtually - if anyone wants to talk one-to-one. Keep it human.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Tom has chosen to deliver restructure news face to face, promised to be the direct source of information for his team, and created space for questions while being transparent about what he does not yet know. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the team's emotional safety, commits to personal transparency, and creates a protective buffer between his team and uncertainty. This is supportive communication during organisational change.",
          observation:
            "Notice how Tom's key promise is about how the team will receive information, not what the information will be. Supportive communicators manage the process of communication as carefully as the content.",
          coachingTip:
            "When a leader promises to be the direct source of news for their team during uncertain times, they are demonstrating protective, supportive communication. This builds trust even when the news is difficult.",
          styleContext:
            "Supportive communicators believe that during restructures, people's primary need is to feel that someone is looking out for them personally. Tom positions himself as that person.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom's face-to-face approach and emotional openness sound expressive. But the energy is protective and calming, not enthusiastic or forward-looking. Tom is shielding his team, not energising them.",
          observation:
            "An expressive communicator would reframe the restructure as an opportunity and try to generate excitement about what comes next. Tom sits with the discomfort and offers steady reassurance.",
          coachingTip:
            "If someone creates a calm, protective space during uncertain news, that is supportive. If they reframe the news as exciting and generate positive energy, that is expressive.",
          styleContext:
            "Supportive communicators manage change by being a steady, reliable presence. Expressive communicators manage change by creating a compelling narrative about the future.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented the restructure data, the rationale behind the decision, or a detailed timeline. His focus is entirely on how his team experiences the news, not on the facts of the restructure itself.",
          observation:
            "There are no organisational charts, no efficiency metrics, and no strategic justifications. Tom is managing the human impact, not presenting the business case.",
          coachingTip:
            "Ask yourself: is this person explaining the decision or protecting the people affected by it? Tom is firmly focused on the people.",
          styleContext:
            "Supportive communicators in restructures become the emotional anchor for their teams. They may not have the answers, but they ensure people feel safe asking the questions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has asked Tom directly whether anyone will lose their job. Tom has been honest about not knowing for certain but promised that affected individuals will hear from him first. How do you respond as another team member?",
      options: [
        {
          id: "s283-opt-a",
          text: "Thank you for being straight with us, Tom. I trust that you will share answers when you have them. Knowing we will hear from you personally, not from an email or a rumour, makes a real difference.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged Tom's honesty, reinforced the trust he is building, and modelled the kind of measured, supportive response that helps the rest of the team feel calmer.",
        },
        {
          id: "s283-opt-b",
          text: "I appreciate the transparency. Could you share the timeline for when decisions will be finalised? It would help to know when we might hear something concrete.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable question that Tom would welcome. But it shifts the conversation from emotional reassurance to process detail, which slightly changes the tone Tom has established.",
        },
        {
          id: "s283-opt-c",
          text: "I think we deserve more detail than that. If the leadership team is making decisions about our jobs, we should know the criteria they are using and when the decisions will be made.",
          score: 0,
          result: "weak",
          explanation:
            "While the concern is valid, the confrontational tone undermines the safe space Tom has created. Demanding information Tom does not yet have puts him in an impossible position and increases anxiety for the group.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a follow-up email that honestly summarises what is known, lists next steps, and reminds people his door is open. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Following up on today's team meeting\n\nHi team,\n\nThank you for the way you handled today's conversation. I know restructure news is never easy to hear, and I appreciate the trust you showed in asking honest questions.\n\nHere is what we know:\n- The department is being restructured as part of a company-wide review.\n- The goal is to create a more streamlined structure. Final details are still being worked through by the leadership team.\n- No decisions about individual roles have been made yet.\n\nHere is what happens next:\n- I will receive more detail from leadership by the end of next week.\n- Once I have that information, I will brief the team again within 48 hours.\n- If any individual role is affected, that person will hear from me directly in a private one-to-one before any wider communication.\n\nWhat will not change: I will be honest with you. If I do not know something, I will say so. If I learn something new, I will share it as quickly as I can.\n\nIn the meantime, my door is open. If you want to talk - about the restructure, about how you are feeling, or about anything at all - just let me know. There is no question too small and no concern too early.\n\nWe will get through this together.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email balances honesty with reassurance, provides clear next steps, and ends with a genuine, personal invitation. Tom would send this knowing it would help his team feel supported.",
          observation:
            "You separated what is known from what happens next, which gives the team structure during uncertainty. Supportive communicators manage anxiety by providing clarity about the process, even when the outcome is unclear.",
          coachingTip:
            "When writing restructure follow-ups for supportive communicators, the key is: honest about the unknowns, clear about the process, and personal about the support available.",
          styleContext:
            "Supportive communicators know that during restructures, the follow-up email is read multiple times and shared with partners. Every word matters because it carries the team's emotional wellbeing.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email feels personal enough. If it reads like a corporate communications template, it will not carry the trust Tom has built in the meeting.",
          observation:
            "If your email uses phrases like 'the organisation' instead of 'I' and 'we', it has lost the personal connection Tom specifically asked for.",
          coachingTip:
            "Use first person throughout. 'I will share', 'my door is open', 'I will be honest'. Tom is the anchor for his team and the email should feel like it comes from him personally.",
          styleContext:
            "Supportive communicators in restructures are judged by whether their words match their actions. A personal email followed by personal follow-through is how trust is built.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too corporate, too brief, or fails to acknowledge the emotional dimension of the restructure. Tom asked for something human, not something from the communications department.",
          observation:
            "If your email could have been written by someone who was not in the room for the conversation, it has lost the personal connection Tom values.",
          coachingTip:
            "Reference something specific from the meeting - a question that was asked, a moment that mattered. That specificity proves the email is personal, not generic.",
          styleContext:
            "Supportive communicators write restructure emails knowing they will be the most carefully read emails their team receives all year. Generic language at this moment is a trust failure.",
        },
      },
    },
  },

  // Scenario 284 - Leah Morgan, meeting, intermediate
  {
    id: "scenario-284",
    title: "The Quiet Voices Meeting",
    context:
      "Leah has noticed that the same two or three people dominate team meetings while quieter team members rarely contribute. She wants to redesign the meeting format to ensure everyone has a chance to speak without putting shy colleagues on the spot.",
    chooseContext:
      "Leah has introduced a new format where each person writes their thoughts on a shared document before discussion begins. One of the usual dominant speakers is frustrated by the change.",
    rewriteContext:
      "Leah has asked you to write an email to the team explaining the new meeting format and why it is being introduced, in a way that does not make anyone feel targeted.",
    characterId: "leah-morgan",
    dialogue:
      "I have been thinking about how our meetings work, and I realised we are probably missing some of our best ideas because not everyone finds it easy to speak up in a group. That is not a criticism of anyone - some people just process differently. I want to try a format that gives everyone equal space to contribute, including people who think better in writing than on the spot.",
    chooseDialogue:
      "I understand this feels different and maybe slower at first. But think about it this way: we have six people in this meeting and usually hear from three. That means we are making decisions with half the input available to us. This format means I get all six perspectives before we discuss. That makes us better, not slower.",
    rewriteDialogue:
      "Write the email explaining the new format. Do not frame it as fixing a problem - frame it as trying something that could help us get better ideas from everyone. I do not want the vocal people to feel criticised or the quiet people to feel singled out. It should feel like a positive experiment.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Leah has redesigned a meeting format to include quieter team members, framed the change as a thinking-style difference rather than a confidence issue, and ensured no one feels targeted. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah identifies a systemic inclusion issue, reframes it as a difference in processing style, and designs a solution that protects everyone's dignity. This is supportive communication focused on creating psychological safety for the whole team.",
          observation:
            "Notice how Leah avoids labelling anyone as 'quiet' or 'dominant'. She frames it as a format issue, not a people issue. Supportive communicators protect feelings even when identifying problems.",
          coachingTip:
            "When someone changes a meeting structure to include more voices while carefully avoiding blame or labelling, they are demonstrating advanced supportive communication. The solution is systemic, not personal.",
          styleContext:
            "Supportive communicators believe that meeting formats either include or exclude, and the responsibility sits with the format designer, not the participants.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah's desire for everyone to contribute sounds expressive. But notice the approach is protective and systemic, not energetic and spontaneous. Leah is redesigning the structure, not injecting enthusiasm.",
          observation:
            "An expressive communicator would encourage quiet people to speak up through personal warmth and encouragement. Leah changes the format so they do not need to be encouraged - the structure does it for them.",
          coachingTip:
            "If someone changes the environment so participation is natural, that is supportive. If they use personal energy to draw people out, that is expressive. Leah prefers structural solutions.",
          styleContext:
            "Supportive communicators fix systems rather than coaching individuals. If the meeting format makes it hard to contribute, they change the format rather than telling people to be braver.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not analysed the meeting data, calculated the percentage of contributions by person, or presented a structured case for the change. Her approach is intuitive and empathy-driven.",
          observation:
            "There are no analytics, no contribution metrics, and no formal meeting assessment. Leah noticed the imbalance through observation and emotional attunement, not through data.",
          coachingTip:
            "Ask yourself: is this person responding to data or to observation? Leah noticed a human dynamic and designed a human solution. The analysis is emotional, not statistical.",
          styleContext:
            "Supportive communicators read rooms intuitively. They notice who speaks, who stays silent, and who looks like they want to contribute but cannot find an opening.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One of the usually dominant speakers is frustrated with the new write-first format. They say it slows things down. Leah has explained the rationale. How do you support Leah?",
      options: [
        {
          id: "s284-opt-a",
          text: "I get that it feels slower. But I have already seen ideas in the shared doc from people who normally stay quiet, and they are really good. Give it two more sessions and if it adds no value, we revisit. Fair?",
          score: 10,
          result: "strong",
          explanation:
            "You validated the frustrated person's concern, showed concrete evidence that the new format is working, and proposed a fair trial period. This supports Leah's approach while respecting the dominant speaker's perspective.",
        },
        {
          id: "s284-opt-b",
          text: "Change is always uncomfortable at first. I think if we stick with it for a while, it will become second nature and we will not even notice the difference.",
          score: 5,
          result: "partial",
          explanation:
            "Reassuring but generic. The frustrated person has a specific concern about speed, and a general 'change is hard' response does not address it directly enough.",
        },
        {
          id: "s284-opt-c",
          text: "Honestly, I agree. The old format worked fine and I think we should go back to it. If people want to contribute, they can just speak up.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines Leah's carefully designed intervention and dismisses the experience of quieter team members. 'Just speak up' ignores the systemic barrier Leah identified.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write an email explaining the new write-first meeting format without making anyone feel targeted. Frame it as a positive experiment. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Trying something new in our team meetings\n\nHi team,\n\nI have been thinking about how we can get even more from our meetings, and I want to try something different for the next few sessions.\n\nStarting next week, each meeting will begin with five minutes of silent writing. I will share the agenda and key questions in advance, and everyone writes their thoughts in a shared document before we discuss. Then we talk through what everyone has written.\n\nWhy are we doing this? Not because anything is wrong with our meetings. We have great discussions. But I think we might be missing some good ideas because not everyone processes best in the moment. Some people think better when they have a moment to reflect first, and this format gives everyone that space.\n\nWhat will not change: we will still have open discussion, debate, and decision-making in real time. The written portion is an addition, not a replacement.\n\nThis is an experiment. We will try it for four sessions and then review together. If it works, we keep it. If it does not, we change it. No one's voice is being turned down - we are just making sure every voice can be heard.\n\nLet me know if you have any thoughts or questions.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email introduces the change positively, avoids blaming anyone, and positions it as a team experiment with a clear review point. Leah would send this confidently.",
          observation:
            "You included 'not because anything is wrong' which pre-emptively addresses the concern that the change is a criticism. Supportive communicators anticipate anxiety and address it before it forms.",
          coachingTip:
            "When introducing meeting format changes for supportive communicators, explicitly state what is not changing and what is not being criticised. People need to know what stays the same.",
          styleContext:
            "Supportive communicators introduce change by protecting what is already good. They say 'we are adding to something that works' rather than 'we are fixing something that is broken'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your email could make anyone feel singled out. If the reason for the change is described as 'some people do not speak up enough', the quiet members may feel exposed.",
          observation:
            "If your email labels people as 'quiet' or 'reserved', it does exactly what Leah wanted to avoid. Frame it as a thinking-style difference, not a personality trait.",
          coachingTip:
            "Replace any reference to 'quiet team members' with 'different thinking styles' or 'people who process better in writing'. The reframing protects dignity.",
          styleContext:
            "Supportive communicators never solve an inclusion problem by creating a new one. The language must include everyone without labelling anyone.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either identifies specific people or behaviours, frames the change as fixing a problem, or does not feel like a genuine experiment. Leah wanted something that feels collaborative, not directive.",
          observation:
            "If your email reads like a management instruction rather than a team invitation, it will create resistance rather than buy-in.",
          coachingTip:
            "Rewrite it as an invitation, not an instruction. 'I want to try' instead of 'we are implementing'. 'Let us experiment' instead of 'the format is changing'.",
          styleContext:
            "Supportive communicators introduce change through invitation, not mandate. The team should feel they are choosing to try something new, not being told to.",
        },
      },
    },
  },

  // Scenario 285 - David Chen, meeting, advanced
  {
    id: "scenario-285",
    title: "The Team Disagreement Resolution",
    context:
      "David is chairing a team meeting where two subgroups have opposing views on the approach to a client project. The debate has become heated and personal, with both sides talking over each other. David needs to restore order without silencing anyone.",
    chooseContext:
      "David has paused the debate and asked each side to nominate one person to summarise their position in two minutes without interruption. The first summary has just been delivered.",
    rewriteContext:
      "David has asked you to write the meeting notes that capture both positions fairly and the agreed next steps for resolving the disagreement.",
    characterId: "david-chen",
    dialogue:
      "I am going to pause us for a moment because I do not think we are hearing each other any more. Both sides have strong views and I respect that. But when we start talking over each other, we stop listening. I would like each side to nominate a spokesperson. You get two minutes each, uninterrupted. Then we find the common ground.",
    chooseDialogue:
      "Thank you. That was clear and well-argued. Before we hear the other side, I want to check: does the second group feel that was a fair summary of the first group's position? If not, let us clarify now. I do not want anyone to feel misrepresented before we move on.",
    rewriteDialogue:
      "Write the meeting notes. Capture both positions accurately and without bias. I want each side to read the notes and feel their view was represented fairly. Then list the agreed next steps. If either side reads these notes and feels they were not heard, we have failed.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has paused a heated debate, acknowledged both sides' passion, and introduced a structured format where each side gets uninterrupted time to present their position. He then checked that the first position was accurately understood before moving on. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David de-escalates by creating structure that ensures everyone is heard, checks for fairness between opposing sides, and prioritises understanding over resolution speed. This is advanced supportive facilitation.",
          observation:
            "The fairness check - asking one side whether the other's position was accurately summarised - is a distinctly supportive technique. It ensures understanding before moving forward.",
          coachingTip:
            "When a facilitator pauses heated debate to ensure both sides feel accurately heard, they are demonstrating supportive conflict management. They believe fair process leads to better outcomes.",
          styleContext:
            "Supportive communicators in heated meetings believe that the quality of the listening determines the quality of the resolution. They slow down the process to speed up the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's acknowledgement of both sides' passion sounds expressive. But his approach is methodical and protective, not energetic and forward-looking. He is managing the process, not the energy.",
          observation:
            "An expressive facilitator would reframe the disagreement as creative tension and try to harness the energy. David manages the conflict by imposing fair process and checking for understanding.",
          coachingTip:
            "If someone de-escalates through structured fairness and understanding checks, that is supportive. If they de-escalate through reframing and enthusiasm, that is expressive.",
          styleContext:
            "Supportive communicators manage conflict through process design. The structure protects fairness; the fairness protects relationships.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not demanded a decision, imposed his own view, or cut the debate short. He has slowed things down and introduced a process that ensures everyone is heard before any resolution is attempted.",
          observation:
            "There is no urgency to decide, no imposed solution, and no dismissal of either position. David is managing the process, not driving toward an outcome.",
          coachingTip:
            "Ask yourself: is this person trying to resolve the disagreement or to ensure the disagreement is understood by both sides? David believes understanding must come first.",
          styleContext:
            "Supportive communicators know that rushed resolutions to team disagreements often create underground resentment. Taking time to ensure everyone feels heard prevents future conflicts.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has asked the second group whether the first group's position was fairly summarised. They say it was mostly fair but missed one key point. How does David handle this?",
      options: [
        {
          id: "s285-opt-a",
          text: "First group, could you briefly add the point that was missed? I want the summary complete before we hear the second position. Getting this right now saves us going in circles later.",
          score: 10,
          result: "strong",
          explanation:
            "You supported David's fairness process by allowing the missing point to be added before moving on. This demonstrates that accuracy of understanding matters more than speed of progress.",
        },
        {
          id: "s285-opt-b",
          text: "Noted. We can capture that nuance in the meeting notes. Let us move on to the second group's position so we do not run out of time.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but it sidesteps the live correction David's process is designed to enable. Capturing it in notes is less effective than hearing it in the room where both sides can confirm understanding.",
        },
        {
          id: "s285-opt-c",
          text: "I think we are spending too long on process. Both sides know what the other thinks. Let us just vote on the approach and move on.",
          score: 0,
          result: "weak",
          explanation:
            "This bypasses David's carefully designed process and risks a decision where one side feels unheard. A vote without mutual understanding creates winners and losers, not alignment.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write meeting notes that capture both positions fairly and list agreed next steps. Both sides should feel accurately represented. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Meeting Notes - Project Approach Discussion\n\nContext: The team holds two different views on the approach to the Henderson client project. Both positions were presented and discussed in today's meeting.\n\nPosition A (represented by Sarah and James):\nThe project should follow the phased rollout approach used successfully on the Barker account. Key arguments: lower risk to the client, proven methodology, allows for adjustments between phases. Concern: a big-bang approach risks overwhelming the client's internal team, who are already stretched.\n\nPosition B (represented by Dev and Nadia):\nThe project should be delivered in a single integrated launch. Key arguments: faster time to value for the client, avoids the coordination overhead of phased delivery, and the client has specifically asked for speed. Concern: a phased approach could cause the client to lose confidence in our ability to deliver at pace.\n\nCommon ground identified:\n- Both sides agree the client's internal capacity is a critical factor.\n- Both sides want to minimise risk to the client relationship.\n- Both sides agree that the client's stated preference for speed should carry significant weight.\n\nAgreed next steps:\n1. Sarah and Dev to meet by Thursday to draft a hybrid approach that phases the technical delivery but presents it to the client as a single integrated programme.\n2. David to schedule a follow-up meeting next Monday to review the hybrid proposal.\n3. If the hybrid approach does not satisfy both groups, David will facilitate a structured decision process with clear criteria.\n\nBoth positions are valued. The aim is to find an approach that combines the best of both perspectives.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your notes give equal weight to both positions, identify common ground, and propose a collaborative path forward. Both sides would read these and feel accurately represented.",
          observation:
            "You named the representatives of each position, which shows respect for the individuals while keeping the notes focused on ideas. You also identified common ground, which reframes the conflict as a difference of approach rather than a fundamental disagreement.",
          coachingTip:
            "When writing meeting notes for supportive communicators, always include a common ground section. It reminds both sides that they agree on more than they disagree about.",
          styleContext:
            "Supportive communicators use meeting notes as reconciliation tools. Fairly documented positions reduce the risk of misremembered or exaggerated disagreements after the meeting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether both positions receive equal depth and respectful framing. If one position is described more thoroughly or more positively, the balance is off.",
          observation:
            "If your notes present one position as the 'sensible' option and the other as the 'alternative', you have introduced bias. Both should be framed as legitimate professional perspectives.",
          coachingTip:
            "Read your notes from each side's perspective. Does each group see their position described as thoroughly and fairly as the other? If not, rebalance.",
          styleContext:
            "Supportive communicators know that biased meeting notes can reignite conflicts. Perfect balance in documentation is a form of conflict prevention.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your notes either favour one position, lack sufficient detail to feel fair, or do not include next steps that feel genuinely collaborative. David asked for notes that would pass a fairness test from both sides.",
          observation:
            "If your notes recommend a position rather than documenting both, they have crossed from record-keeping into advocacy. David wants documentation, not a recommendation.",
          coachingTip:
            "Remove any language that evaluates or ranks the positions. Meeting notes should describe and record, not judge or recommend.",
          styleContext:
            "Supportive communicators treat meeting notes as a trust instrument. If the notes are fair, the team trusts the process. If they are biased, the conflict deepens.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (286-288) - feedback
  // ============================================

  // Scenario 286 - Rachel Finch, feedback, foundation
  {
    id: "scenario-286",
    title: "The Report Quality Review",
    context:
      "Rachel is providing feedback to a team member on a client report that contains several unsupported claims, inconsistent data formatting, and a conclusion that does not follow from the analysis presented.",
    chooseContext:
      "Rachel has started the feedback conversation by asking the team member to walk through their methodology. The team member is becoming defensive, saying the client wanted it quickly.",
    rewriteContext:
      "Rachel has asked you to write a feedback summary document listing each issue, the standard it should meet, and the corrective action required.",
    characterId: "rachel-finch",
    dialogue:
      "I want to go through this report with you in detail because there are several areas where the evidence does not support the conclusions. This is not about speed versus quality - it is about credibility. If the client reads a claim that is not backed by the data presented, they will question everything else in the report, including the parts that are well evidenced.",
    chooseDialogue:
      "I understand the client wanted it quickly, but speed is not an excuse for stating that revenue grew 'significantly' when the data shows a 2.1% increase. Significance has a meaning. If we use it loosely, we lose the client's trust in our precision. Walk me through how you arrived at that conclusion.",
    rewriteDialogue:
      "Write a feedback document. List each issue I raised, the standard it should have met, and what the team member needs to do to fix it. Keep it factual and structured. This is not a telling-off - it is a development tool. But it needs to be specific enough that they can action every point without asking follow-up questions.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel is providing detailed feedback on a report by questioning specific claims, challenging vague language, and asking the team member to explain their methodology for reaching conclusions. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel focuses on evidence quality, methodological rigour, and precise language. She frames feedback around credibility and accuracy, not speed or relationships. This is analytical communication applied to quality assurance.",
          observation:
            "Notice how Rachel distinguishes between using the word 'significantly' casually and using it accurately. Analytical communicators treat language precision as a professional standard.",
          coachingTip:
            "When someone provides feedback by questioning the evidence behind specific claims and asking for methodological justification, they are operating in an analytical style. Respond with data and reasoning.",
          styleContext:
            "Analytical communicators give feedback by examining the logic chain: does the data support the analysis, and does the analysis support the conclusion? Breaks in the chain are the feedback points.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is firm in her feedback, which can sound direct. But the firmness comes from intellectual standards, not from urgency. Rachel wants the report to be accurate, not just done.",
          observation:
            "A direct communicator would say 'fix these three things and resubmit by Friday'. Rachel asks the team member to explain their methodology because she wants them to understand why the errors matter.",
          coachingTip:
            "If someone gives feedback by asking you to explain your reasoning, that is analytical. If they give feedback by telling you what to change, that is direct. Rachel wants understanding, not just compliance.",
          styleContext:
            "Analytical communicators believe that feedback should develop thinking, not just correct outputs. They ask questions because they want the team member to find the error themselves.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on how the team member feels, how the feedback affects their confidence, or how to deliver the message gently. Her focus is entirely on the quality of the work.",
          observation:
            "There is no emotional cushioning, no praise sandwich, and no concern about the team member's feelings. Rachel is focused on the evidence and the logic, not the person.",
          coachingTip:
            "Ask yourself: is this person managing the relationship or managing the quality? Rachel is managing quality. The relationship is a secondary concern.",
          styleContext:
            "Analytical communicators believe that honest, specific feedback is the most respectful form of development. Softening the message risks diluting the learning.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has challenged the use of the word 'significantly' to describe a 2.1% revenue increase and asked the team member to explain their reasoning. The team member says it felt like the right word. How should the team member respond instead?",
      options: [
        {
          id: "s286-opt-a",
          text: "You are right. 'Significantly' implies something larger or statistically tested. I should have written 'revenue grew 2.1% year-on-year, compared to 1.4% in the previous period'. That lets the reader judge.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted the feedback, explained why the original was wrong, and provided a specific correction that demonstrates understanding. Rachel will see this as a genuine learning response.",
        },
        {
          id: "s286-opt-b",
          text: "I see your point. I will change it to 'modestly' instead and add the percentage. Would that be more accurate?",
          score: 5,
          result: "partial",
          explanation:
            "Better, but 'modestly' is still a subjective adjective. Rachel would prefer the number to speak for itself without any qualitative label attached.",
        },
        {
          id: "s286-opt-c",
          text: "The client is not going to scrutinise individual word choices. They want the headline message, and the headline is that revenue went up. I do not think this level of detail matters to them.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Rachel's core concern about professional credibility. If the client does scrutinise the report - and clients often do - loose language undermines the entire document.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a feedback summary listing each issue, the standard it should meet, and the corrective action. Keep it factual and actionable. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Report Feedback Summary\n\nIssue 1: Unsupported claim on page 3\nCurrent text: 'Revenue grew significantly in Q3.'\nStandard: All claims must be supported by specific data points cited in the report.\nCorrective action: Replace with 'Revenue grew 2.1% year-on-year in Q3 (source: financial statements, 30 September close), compared to 1.4% growth in Q2.'\n\nIssue 2: Inconsistent data formatting\nCurrent state: Financial figures on pages 2-4 use a mix of 'K' shorthand and full figures.\nStandard: All financial figures must use a consistent format throughout the document.\nCorrective action: Convert all figures to full format with thousands separators. Example: 1,240,000 not 1.24M or 1,240K.\n\nIssue 3: Conclusion does not follow from analysis\nCurrent conclusion: 'The company is well-positioned for growth in the next financial year.'\nAnalysis presented: Three of four metrics declined in Q3. Only revenue showed marginal improvement.\nStandard: Conclusions must be directly supported by the analysis in the body of the report.\nCorrective action: Rewrite the conclusion to reflect the mixed performance picture. Acknowledge declining metrics and caveat the growth outlook with specific conditions that would need to be met.\n\nDeadline: Revised report to be submitted by end of day Thursday for review before client submission.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each issue is documented with the current state, the expected standard, and a specific corrective action. The team member can address every point without guessing what Rachel wants.",
          observation:
            "You showed the gap between what was written and what should have been written, which makes the feedback a learning tool, not just an error list.",
          coachingTip:
            "When writing feedback documents for analytical communicators, always include the standard as well as the error. Knowing what 'good' looks like is as important as knowing what went wrong.",
          styleContext:
            "Analytical communicators structure feedback as gap analysis: current state versus expected state, with a clear corrective action to close the gap.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether each issue includes all three elements: the current error, the standard, and the specific corrective action. If any element is missing, the feedback point is incomplete.",
          observation:
            "If any corrective action says 'improve this section' without specifying how, it is too vague for Rachel's standards.",
          coachingTip:
            "For each feedback point, provide a corrected example or a specific instruction. 'Make this more accurate' is not actionable. 'Replace this sentence with this data point' is.",
          styleContext:
            "Analytical communicators test feedback quality by asking: could the recipient fix every issue without asking a single follow-up question? If not, the feedback needs more detail.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your feedback document is either too general, lacks specific examples, or does not include corrective actions. Rachel asked for something actionable, not a set of general comments.",
          observation:
            "If your document uses phrases like 'overall the report needs more rigour' without specifying where and how, it fails Rachel's specificity test.",
          coachingTip:
            "Replace every general comment with a specific example. 'The data is inconsistent' becomes 'Page 2 uses K format while page 4 uses full figures. Standardise to full figures throughout'.",
          styleContext:
            "Analytical communicators believe that vague feedback is worse than no feedback. It identifies a problem without enabling a solution, which frustrates rather than develops.",
        },
      },
    },
  },

  // Scenario 287 - Owen Grant, feedback, intermediate
  {
    id: "scenario-287",
    title: "The Process Improvement Debrief",
    context:
      "Owen is debriefing a team on a project that was delivered on time but with several process inefficiencies. He wants the feedback to focus on what can be improved systematically, not on individual blame.",
    chooseContext:
      "Owen has asked the team to identify the three biggest process bottlenecks from the project. One team member keeps framing the issues as personality conflicts rather than process failures.",
    rewriteContext:
      "Owen has asked you to write a process improvement report documenting the bottlenecks identified, their root causes, and recommended system changes.",
    characterId: "owen-grant",
    dialogue:
      "The project was delivered on time, which is good. But we used 30% more hours than we budgeted, and two phases were only completed because people worked weekends. That is not sustainable. I want us to look at the process, not the people. Where did the system create unnecessary work, and what can we change structurally so the next project does not require heroics?",
    chooseDialogue:
      "I hear you saying that the handover between teams was slow because of a difficult personality. But let me reframe that. Why did the handover depend on one person's availability? If the process required a single point of failure, the process is the problem, not the person. What structural change would remove that dependency?",
    rewriteDialogue:
      "Write the improvement report. For each bottleneck, document what happened, what caused it at a system level, and what structural change we recommend. No names, no blame. If the recommendations are good enough, the problems do not recur regardless of who is involved in the next project.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Owen is debriefing a project by analysing process inefficiencies with specific metrics, reframing personality-based complaints as system failures, and looking for structural solutions. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen focuses on system-level analysis, specific metrics, and structural solutions. He deliberately reframes personal complaints into process questions. This is analytical communication applied to continuous improvement.",
          observation:
            "Notice how Owen uses the exact metric '30% more hours than budgeted' to ground the conversation in facts. Analytical communicators anchor feedback discussions in measurable data, not impressions.",
          coachingTip:
            "When someone reframes personality-based feedback into system-level analysis and asks for structural solutions, they are demonstrating analytical thinking. Respond with process-focused observations.",
          styleContext:
            "Analytical communicators believe that good systems do not rely on exceptional people. If the process only works when specific individuals perform heroically, the process is broken.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Owen is decisive about redirecting the conversation, which sounds direct. But the redirect is toward deeper analysis, not toward faster resolution. Owen wants to understand the root cause, not just fix the symptom.",
          observation:
            "A direct communicator would assign someone to fix the handover process and move on. Owen wants to understand why the process was vulnerable to a single point of failure before proposing a fix.",
          coachingTip:
            "If someone redirects from symptoms to root causes, that is analytical. If they redirect from discussion to action, that is direct. Owen is going deeper, not faster.",
          styleContext:
            "Analytical communicators invest time in diagnosis because they believe superficial fixes lead to repeated problems. Understanding the system is the prerequisite for changing it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on team morale, acknowledged the effort people put in during the weekends, or celebrated the on-time delivery before diving into the analysis.",
          observation:
            "The brief acknowledgement that on-time delivery is 'good' is the only positive note. Owen's focus is entirely on diagnosing what went wrong at a system level.",
          coachingTip:
            "Ask yourself: is this person trying to improve the system or to manage the team's feelings about the project? Owen is a systems thinker. Team feelings are important but not the focus of this debrief.",
          styleContext:
            "Analytical communicators approach debriefs as diagnostic exercises. The emotional experience of the project is relevant data but not the primary analytical focus.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has reframed a personality-based complaint about a slow handover as a system dependency issue. He has asked what structural change would remove the dependency. How do you respond?",
      options: [
        {
          id: "s287-opt-a",
          text: "Create a shared handover checklist in the project tracker that auto-assigns tasks to both team leads. Completion triggers a notification to the project manager. The handover proceeds regardless of any individual's availability.",
          score: 10,
          result: "strong",
          explanation:
            "You proposed a specific structural solution that removes the person-dependency Owen identified. The solution is systemic, automated, and creates visibility. This is exactly the kind of answer Owen is looking for.",
        },
        {
          id: "s287-opt-b",
          text: "We could create a handover guide that standardises the information that needs to transfer between teams. That would help, though someone would still need to own the process.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable step, but it still relies on a person to own the handover. Owen specifically asked for a structural change that removes the single-point-of-failure dependency.",
        },
        {
          id: "s287-opt-c",
          text: "Honestly, I think the real issue is that certain people need to be more responsive. If everyone just replied to handover requests within 24 hours, there would not be a bottleneck.",
          score: 0,
          result: "weak",
          explanation:
            "This returns to the personality-based framing Owen explicitly redirected away from. He asked for a structural solution and you offered a behavioural one. That does not solve the system problem.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a process improvement report documenting bottlenecks, root causes, and structural recommendations. No names, no blame. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Process Improvement Report - Project Caldera\n\nProject outcome: Delivered on time. Resource usage: 30% above budget (780 hours actual vs 600 hours planned). Two phases required weekend work to meet deadlines.\n\nBottleneck 1: Cross-team handover delays\nWhat happened: Handover between design and development phases took eight working days against a planned two-day window.\nRoot cause: Handover depended on a single person's availability and there was no documented checklist or escalation trigger.\nRecommendation: Implement a shared handover checklist in the project tracker with automatic task assignment and escalation after 48 hours of inactivity.\n\nBottleneck 2: Requirements changes during build phase\nWhat happened: Eleven requirement changes were submitted after design sign-off, each requiring rework averaging four hours.\nRoot cause: No formal change control process. Changes were accepted verbally without impact assessment.\nRecommendation: Introduce a change request form requiring estimated impact (hours, cost, timeline) before approval. Changes above a threshold require project sponsor sign-off.\n\nBottleneck 3: Testing environment availability\nWhat happened: Development team waited a combined 36 hours for access to the testing environment across the project.\nRoot cause: Testing environment shared across four concurrent projects with no booking system.\nRecommendation: Implement a booking system for testing environment slots. Allocate dedicated windows per project during active testing phases.\n\nEstimated efficiency gain if all three recommendations are implemented: 180-220 hours on a comparable project (23-28% reduction in resource overrun).",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each bottleneck follows a consistent structure with specific metrics, system-level root causes, and structural recommendations. Owen would present this to the leadership team with confidence.",
          observation:
            "You included an estimated efficiency gain at the bottom, which turns the report from a complaint log into a business case for investment in process improvement.",
          coachingTip:
            "When writing process improvement reports for analytical communicators, always quantify the expected benefit of the recommendations. Numbers make the case for change more compelling than descriptions.",
          styleContext:
            "Analytical communicators see process improvement reports as investment proposals. The bottleneck is the cost; the recommendation is the investment; the efficiency gain is the return.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framework, but check whether your root causes are genuinely system-level. If a root cause says 'the team did not prioritise the handover', it is still person-focused. Owen wants structural explanations.",
          observation:
            "If your recommendations could be replaced with 'people should try harder', they are behavioural, not structural. Owen wants changes to systems, not changes to effort levels.",
          coachingTip:
            "Test each recommendation by asking: would this fix the problem regardless of who is involved? If the recommendation depends on specific people behaving differently, it is not structural enough.",
          styleContext:
            "Analytical communicators design solutions that work regardless of personnel. Good processes compensate for human variation; they do not depend on human excellence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your report either names individuals, focuses on blame rather than systems, or lacks specific metrics. Owen asked for a system-level analysis with structural recommendations.",
          observation:
            "If your report reads like a performance review of the team rather than a diagnostic of the process, it has missed Owen's brief entirely.",
          coachingTip:
            "Remove every reference to what people did or did not do. Reframe each issue as: what did the system fail to provide? That reframing is the key to analytical process improvement.",
          styleContext:
            "Analytical communicators separate people from processes because they believe blaming people prevents learning. System-level analysis finds the fixes that prevent recurrence.",
        },
      },
    },
  },

  // Scenario 288 - Fiona Banks, feedback, advanced
  {
    id: "scenario-288",
    title: "The Research Peer Review",
    context:
      "Fiona is providing peer review feedback to a colleague on their research paper before it is submitted for publication. The paper has strong data but weak analysis, and several conclusions are not adequately supported by the findings presented.",
    chooseContext:
      "Fiona's colleague has responded defensively to the initial feedback, saying the reviewers will focus on the data quality, not the analytical framework, and that Fiona is being overly critical.",
    rewriteContext:
      "Fiona has asked you to write detailed written feedback on the paper, structured by section, with specific recommendations for strengthening the analysis.",
    characterId: "fiona-banks",
    dialogue:
      "The data in this paper is strong and the methodology is sound. Where it falls short is in the analysis. Three of your five conclusions are not directly supported by the data presented. A reviewer will catch that immediately, and it undermines the two conclusions that are well evidenced. I would rather give you this feedback now than have a journal reviewer give it in six months.",
    chooseDialogue:
      "I understand that feels harsh, and I want to be clear: the data collection is excellent work. But a reviewer will absolutely scrutinise the analytical framework. They will ask whether your conclusions follow logically from your findings, and right now, three of them do not. Would you rather address that now, with someone who wants the paper to succeed, or later, with someone who has no investment in your success?",
    rewriteDialogue:
      "Write the full written feedback. Go section by section. For each issue, quote the specific text from the paper, explain why it does not work analytically, and suggest what a stronger version would look like. I want this to be specific enough that the author can revise without needing to ask me what I meant.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona is providing detailed feedback on a research paper, distinguishing between strong methodology and weak analysis, identifying specific conclusions unsupported by the data, and framing her feedback as preparation for journal review. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona evaluates the paper through an analytical lens: methodology, evidence chains, and logical consistency between data and conclusions. She separates the strong elements from the weak ones with precision. This is advanced analytical peer review.",
          observation:
            "Notice how Fiona strategically frames her feedback as a preview of what journal reviewers will say. This positions her criticism as protective and helpful rather than personal.",
          coachingTip:
            "When someone provides feedback by dissecting the logic chain between evidence and conclusions, they are demonstrating an analytical feedback style. Respond with intellectual engagement, not emotional defence.",
          styleContext:
            "Analytical communicators provide the most valuable feedback because they separate what is strong from what is weak with precision. Blanket praise or blanket criticism are both less useful.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is direct in delivering the feedback, which can look like a direct style. But her focus is on analytical quality rather than speed of resolution. She wants the paper to be intellectually rigorous, not just finished.",
          observation:
            "A direct communicator would say 'fix these three conclusions and resubmit'. Fiona explains why each conclusion fails analytically and offers to help the author understand the gap.",
          coachingTip:
            "If feedback is focused on the logic and evidence quality, that is analytical. If it is focused on what needs to change quickly, that is direct. Fiona wants understanding, not just compliance.",
          styleContext:
            "Analytical communicators invest in explaining why something is wrong because they believe understanding the error prevents repetition. Direct communicators invest in specifying the fix.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on how the feedback will make her colleague feel, whether the timing of the feedback is appropriate, or how to deliver the message gently.",
          observation:
            "There is minimal emotional cushioning. Fiona acknowledges the strong data briefly and then spends the majority of the conversation on the analytical weaknesses.",
          coachingTip:
            "Ask yourself: is this person managing the person or managing the work? Fiona is managing the intellectual quality of the paper. The relationship is important but secondary to the analysis.",
          styleContext:
            "Analytical communicators believe that honest intellectual feedback is the highest form of professional respect. Softening the message risks the paper being submitted with addressable flaws.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona's colleague has said she is being overly critical and that journal reviewers will focus on data quality. Fiona has reframed her feedback as protective. How does the colleague best respond?",
      options: [
        {
          id: "s288-opt-a",
          text: "You are right. Let me go through the three conclusions you flagged and we can discuss what additional analysis is needed. If the data does not support them, I would rather remove them than have a reviewer reject the paper.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted the feedback intellectually, proposed a collaborative approach to addressing it, and showed willingness to revise rather than defend. Fiona will respond to this with detailed, helpful guidance.",
        },
        {
          id: "s288-opt-b",
          text: "I will take another look at the three conclusions you mentioned and see if I can strengthen the analytical connection. Can I send you a revised version next week for another review?",
          score: 5,
          result: "partial",
          explanation:
            "Cooperative and open to revision, but it defers the analytical discussion rather than engaging with it now. Fiona has offered to work through the issues together and this response postpones that opportunity.",
        },
        {
          id: "s288-opt-c",
          text: "I still think the data speaks for itself and the conclusions are reasonable inferences. But I will add a few more references to the discussion section to strengthen the case.",
          score: 0,
          result: "weak",
          explanation:
            "This misunderstands Fiona's feedback. The issue is not missing references but unsupported logical connections. Adding citations does not fix a gap between data and conclusions.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write section-by-section written feedback on the paper, quoting specific text and providing stronger alternatives. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Peer Review Feedback - Section by Section\n\nSection 3.2: Results\nStrengths: Data presentation is clear and the tables are well formatted. Statistical tests are appropriate for the sample size.\nIssue: The narrative in paragraph 3 states 'a clear trend towards increased adoption was observed'. However, Table 4 shows adoption rates of 34%, 36%, and 35% across three periods. A one-to-two percentage point variation does not constitute a clear trend.\nRecommendation: Replace with 'Adoption rates remained relatively stable across the three measurement periods (34-36%), with no statistically significant trend identified (p=0.42).'\n\nSection 4.1: Discussion\nStrengths: The contextual comparison with previous studies is well handled.\nIssue: Paragraph 2 concludes that 'the intervention was effective in changing practitioner behaviour'. The data in Section 3 shows changes in reported attitudes but no behavioural measures were collected. Reported attitudes and observed behaviour are distinct constructs.\nRecommendation: Revise to 'The intervention was associated with positive shifts in reported attitudes toward the practice change. Behavioural change was not measured in this study and would require direct observation or outcome data to confirm.'\n\nSection 4.3: Implications\nStrengths: The practical recommendations are specific and actionable.\nIssue: Recommendation 3 states 'organisations should adopt this intervention as standard practice'. The evidence base from a single exploratory study with 84 participants does not support a universal adoption recommendation.\nRecommendation: Revise to 'These findings suggest the intervention merits further investigation through a larger-scale study with behavioural outcome measures before adoption as standard practice can be recommended.'\n\nGeneral note: The paper would benefit from a limitations section that explicitly states the gap between attitudinal data and behavioural conclusions. Addressing this proactively will pre-empt the most likely reviewer objection.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your feedback quotes specific text, explains why it fails analytically, and provides a revised version that demonstrates what stronger analysis looks like. Fiona would endorse this feedback without reservation.",
          observation:
            "You consistently identified the gap between what the data shows and what the text claims, and provided alternatives that are academically sound. This is peer review at its most constructive.",
          coachingTip:
            "When writing analytical feedback, always show the better version alongside the criticism. It transforms feedback from 'this is wrong' into 'this is how to make it right'.",
          styleContext:
            "Analytical communicators give the most useful feedback when they provide specific alternatives. The corrected version teaches more than the identification of the error.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your feedback includes specific text quotes from the paper. General comments like 'the conclusions are too strong' need to be grounded in exact phrases from the manuscript.",
          observation:
            "If your feedback says 'Section 4 overstates the findings' without quoting the specific overstatement, the author cannot locate and fix the exact issue.",
          coachingTip:
            "Quote the problematic text, then provide the revised text. Side-by-side comparison is the most efficient feedback format for analytical revision.",
          styleContext:
            "Analytical communicators know that vague feedback creates vague revisions. The more specific the feedback, the more precise the improvement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your feedback is either too general, does not reference specific text from the paper, or provides criticism without alternatives. Fiona asked for feedback specific enough to act on without follow-up questions.",
          observation:
            "If your feedback says 'the analysis needs strengthening' without explaining where, why, and how, it is commentary rather than review.",
          coachingTip:
            "For each critical point, provide three things: the specific text that is problematic, the analytical reason it fails, and a revised version that addresses the issue.",
          styleContext:
            "Analytical communicators distinguish between criticism and feedback. Criticism identifies problems. Feedback identifies problems and provides solutions. Fiona asked for feedback.",
        },
      },
    },
  },
];
