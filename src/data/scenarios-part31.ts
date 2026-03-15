import { Scenario } from "@/types";

export const SCENARIOS_PART31: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (361-363) - negotiation
  // ============================================

  // Scenario 361 - Jordan Cole, negotiation, foundation
  {
    id: "scenario-361",
    title: "The Vendor Price Renegotiation",
    context:
      "Your company's primary software vendor has proposed a 20% price increase at renewal. Jordan has been asked to lead the renegotiation and has opened by stating the company's position clearly.",
    chooseContext:
      "Jordan has told the vendor that a 20% increase is unacceptable and asked them to present a revised offer within 48 hours. The vendor has pushed back, citing rising infrastructure costs.",
    rewriteContext:
      "Jordan has asked you to draft a follow-up email to the vendor summarising the company's position and the deadline for a revised proposal.",
    characterId: "jordan-cole",
    dialogue:
      "Twenty percent is not a negotiation starting point - it is a reason to look elsewhere. We have been a reliable client for four years and our usage has grown 30% in that time. If anything, the conversation should be about a volume discount, not an increase. Here is what we are willing to accept: flat renewal at current rates with a two-year commitment. That is the offer.",
    chooseDialogue:
      "Infrastructure costs are your problem, not ours. Every business has rising costs. We manage ours by negotiating hard with our suppliers - and that is what we are doing now. You have 48 hours to come back with a number that works. If it does not, we start the procurement process with your competitors on Monday.",
    rewriteDialogue:
      "Write the email. State our position, name the deadline, and make it clear what happens if they miss it. No threats - just facts. They should read it and understand exactly where they stand.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Jordan has rejected a vendor's 20% price increase, countered with a flat renewal offer, and given a 48-hour deadline with a clear consequence for missing it. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with a clear position, rejects the vendor's framing, and sets a non-negotiable deadline with consequences. This is direct negotiation - decisive, positional, and time-bound.",
          observation:
            "Notice how Jordan reframes the conversation entirely. Instead of negotiating the size of the increase, Jordan shifts to arguing for a flat rate. Direct communicators set the terms, not respond to them.",
          coachingTip:
            "When someone rejects the other party's framing and substitutes their own, they are negotiating in a direct style. Respond to their terms, not your original ones.",
          styleContext:
            "Direct communicators in negotiation control the agenda. They decide what is being discussed, on what terms, and by when. Accepting someone else's frame means losing the negotiation before it starts.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan references usage growth data, which can look analytical. But the data serves the demand, not the analysis. Jordan is not exploring options - he is stating a position.",
          observation:
            "An analytical negotiator would model different pricing scenarios and present the most favourable one. Jordan simply states the price he will accept and dares the vendor to refuse.",
          coachingTip:
            "If someone uses data to support a fixed position rather than to explore options, they are being direct. The data is ammunition, not investigation.",
          styleContext:
            "Direct negotiators use data as leverage. Analytical negotiators use data as a foundation for collaborative problem-solving. Jordan is leveraging.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not explored the vendor's perspective, sought a mutually beneficial outcome, or expressed concern about the relationship. The negotiation is purely positional.",
          observation:
            "There is no interest in understanding why the vendor needs the increase or finding creative solutions that work for both sides. Jordan has one goal: a better price.",
          coachingTip:
            "Ask whether the negotiator is seeking to understand or seeking to win. Jordan is seeking to win.",
          styleContext:
            "Direct negotiators believe that clarity about your position is more respectful than ambiguity. The vendor knows exactly where they stand, which lets them make an informed decision.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has given the vendor 48 hours to present a revised offer and threatened to begin procurement with competitors if the deadline is missed. How do you respond as the vendor?",
      options: [
        {
          id: "s361-opt-a",
          text: "Understood. We value this partnership and we will have a revised proposal on your desk by Thursday morning. The flat rate is challenging, but let us see what we can do with a two-year commitment in place.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the deadline, acknowledged the counter-offer framework, and signalled willingness to negotiate within Jordan's terms. This matches the direct approach without conceding everything.",
        },
        {
          id: "s361-opt-b",
          text: "We would prefer to discuss this in person. Could we schedule a meeting next week to walk through our cost structure and find a solution that works for both sides?",
          score: 5,
          result: "partial",
          explanation:
            "Collaborative, but it ignores the 48-hour deadline Jordan has set. Requesting a meeting next week signals that you have not taken the urgency seriously.",
        },
        {
          id: "s361-opt-c",
          text: "We believe the 20% increase is fair and reflects the true cost of the service. We are confident that a market comparison will confirm our pricing is competitive.",
          score: 0,
          result: "weak",
          explanation:
            "This calls Jordan's bluff and invites him to shop the market - which is exactly what he said he would do. A direct negotiator who has stated a consequence will follow through.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a follow-up email to the vendor stating the company's position, the deadline, and the consequence of missing it. Write it in a direct style - facts, not threats.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Contract renewal - revised proposal required by Thursday 5pm\n\nFollowing our call today, I am confirming our position on the contract renewal.\n\nOur offer: Flat renewal at current rates with a two-year commitment, effective from the current contract end date.\n\nContext: Our usage has grown 30% over the four-year partnership. A price increase in this context is not aligned with the value trajectory of the relationship.\n\nDeadline: We require a revised proposal by Thursday 16 March at 5pm. The proposal should confirm whether you can meet the flat renewal rate or present your closest alternative.\n\nNext steps: If we do not receive a viable proposal by the deadline, we will begin a formal procurement review with alternative providers on Monday 20 March.\n\nWe value the partnership and would prefer to continue it. This email outlines the terms under which that is possible.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email states the position, the context, the deadline, and the consequence - all without aggression or ambiguity. Jordan would send this knowing it is professional, clear, and leaves no room for misinterpretation.",
          observation:
            "You closed with 'we value the partnership and would prefer to continue it', which is firm but not hostile. It signals that the relationship matters while making clear it has conditions.",
          coachingTip:
            "When writing negotiation emails for direct communicators, end with the relationship statement after the business terms. It softens the close without weakening the position.",
          styleContext:
            "Direct negotiators separate the relationship from the terms. They can value a partnership and still negotiate hard on price because they see those as independent concerns.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your deadline is specific enough. If you said 'as soon as possible' instead of a date and time, it is not a deadline - it is a request.",
          observation:
            "If your consequence section uses phrases like 'we may need to consider alternatives', it is a suggestion, not a boundary. Direct communicators state what will happen, not what might.",
          coachingTip:
            "Replace 'may' with 'will'. Replace 'soon' with a date. Replace 'consider' with 'begin'. Every word should close a loophole.",
          styleContext:
            "Direct negotiators write emails that function as commitments. If they say they will start procurement on Monday, they will start procurement on Monday.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too soft, too vague, or fails to state a clear position with a specific deadline and consequence.",
          observation:
            "If your email says 'we would appreciate a revised proposal at your earliest convenience', it has no teeth. Jordan needs the vendor to feel urgency.",
          coachingTip:
            "Rewrite by answering four questions: What do we want? By when? What happens if we do not get it? Why should they care? Each answer is one paragraph.",
          styleContext:
            "Direct negotiators measure email effectiveness by whether the recipient knows exactly what to do and by when after reading it once. Ambiguity is the enemy.",
        },
      },
    },
  },

  // Scenario 362 - Sam Hartley, negotiation, intermediate
  {
    id: "scenario-362",
    title: "The Partnership Terms Standoff",
    context:
      "Sam is negotiating partnership terms with a potential collaborator. The collaborator wants equal revenue share despite Sam's team doing 70% of the delivery work. Sam needs to secure fair terms without losing the partnership entirely.",
    chooseContext:
      "Sam has presented a revenue split based on delivery contribution and the collaborator has responded that equal partnership means equal share. Sam is pushing back.",
    rewriteContext:
      "Sam has asked you to draft the key commercial terms for the partnership agreement, reflecting the contribution-based split that Sam has proposed.",
    characterId: "sam-hartley",
    dialogue:
      "Equal partnership does not mean equal revenue when the work split is 70-30. Partnership means fair, and fair means proportional. I am not asking for a favour - I am asking for maths. If you want 50% of the revenue, show me how you deliver 50% of the work. Otherwise, we price based on contribution.",
    chooseDialogue:
      "I hear you, and I understand why equal share feels right in principle. But principles do not pay for the team I need to deliver 70% of this project. Here is my counter: 65-35 in our favour, with a clause that adjusts the split if your delivery contribution exceeds 40% in any quarter. That gives you a path to the equal share you want - you just have to earn it.",
    rewriteDialogue:
      "Draft the key commercial terms. Revenue split at 65-35 with the quarterly adjustment clause. Keep it clean - no ambiguity about what triggers the adjustment or how it is measured.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam has countered a 50-50 revenue split request with a contribution-based model and told the collaborator that equal share must be earned through equal work. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam rejects the principle of equal share, substitutes a contribution-based model, and offers a path to the desired outcome contingent on performance. This is direct negotiation - logical, firm, and outcome-driven.",
          observation:
            "Notice how Sam offers a concession that is conditional on performance. Direct negotiators give ground strategically, not emotionally. The 65-35 with an adjustment clause gives the collaborator a reason to say yes without giving Sam a reason to lose money.",
          coachingTip:
            "When someone offers a concession that is contingent on future performance, they are negotiating directly. They are not softening their position - they are creating a performance incentive.",
          styleContext:
            "Direct negotiators design deals that reward contribution. They see performance-based splits as fairer than equal splits because they align incentives with effort.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam uses logic and data to justify the split, which can look analytical. But the delivery is assertive and the framing is positional - Sam is negotiating, not modelling.",
          observation:
            "An analytical negotiator would present a detailed cost model showing why 65-35 is the correct split. Sam states it as a position and dares the collaborator to challenge the logic.",
          coachingTip:
            "If someone presents a position with enough logic to defend it but not enough detail to prove it, they are being direct. The logic serves the position, not the analysis.",
          styleContext:
            "Direct negotiators use just enough logic to make their position defensible. They do not over-prove because over-proving signals uncertainty about the position.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not sought to understand the collaborator's underlying needs, explored creative alternatives, or focused on preserving the relationship above the terms.",
          observation:
            "There is no exploration of why equal share matters to the collaborator or whether there are non-financial ways to address their concerns. Sam is negotiating on price, period.",
          coachingTip:
            "Ask whether the negotiator is optimising for the relationship or the terms. Sam is optimising for fair terms.",
          styleContext:
            "Direct negotiators believe that fair terms are the foundation of good relationships. A deal that is financially unfair will poison the partnership eventually.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has offered 65-35 with a quarterly adjustment clause that increases the collaborator's share if their delivery contribution exceeds 40%. How do you respond as the collaborator?",
      options: [
        {
          id: "s362-opt-a",
          text: "That is a fair structure. If the adjustment clause is clear and measurable, I can work with 65-35 as the starting point. Let us define exactly what counts as delivery contribution so there is no ambiguity at the quarterly review.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the framework, engaged with the mechanism, and asked for the right kind of detail. This moves the negotiation forward without conceding your aspirations.",
        },
        {
          id: "s362-opt-b",
          text: "I appreciate the flexibility, but I would like to start at 60-40 instead. That feels closer to the spirit of partnership even if the work split does not quite match yet.",
          score: 5,
          result: "partial",
          explanation:
            "A counter-offer, which is reasonable in negotiation. But Sam has already moved from her original position. Counter-offering without new justification may stall the discussion.",
        },
        {
          id: "s362-opt-c",
          text: "I think we need to step back and have a broader conversation about what partnership means to both of us. Revenue split is just one dimension of a much bigger relationship.",
          score: 0,
          result: "weak",
          explanation:
            "This tries to escape the negotiation into a philosophical discussion. Sam has put a specific, fair offer on the table. Deflecting to abstract concepts will frustrate a direct negotiator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to draft the key commercial terms for the partnership: 65-35 revenue split with a quarterly adjustment clause. Write it in a direct style - clean, unambiguous, and measurable.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "KEY COMMERCIAL TERMS\n\n1. Revenue split: 65% to Party A (Sam's team), 35% to Party B (collaborator), applied to all net revenue generated by the partnership.\n\n2. Quarterly adjustment clause:\n   - If Party B's verified delivery contribution exceeds 40% of total project hours in any quarter, the revenue split adjusts to 60-40 for that quarter.\n   - If Party B's verified delivery contribution exceeds 50% of total project hours in any quarter, the revenue split adjusts to 55-45 for that quarter.\n   - Delivery contribution is measured by tracked project hours, verified by both parties at the quarterly review.\n\n3. Measurement: Both parties submit time records by the 5th working day of each new quarter. Any disputed hours are resolved within 10 working days using project management system records as the source of truth.\n\n4. Review: The base split is reviewed annually. Any permanent adjustment requires agreement from both parties based on the trailing four-quarter average contribution data.\n\n5. Term: Initial 12-month agreement with automatic renewal unless either party gives 90 days written notice.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your terms are specific, measurable, and leave no room for interpretation. Sam would present these knowing that both parties can reference them at any future dispute point.",
          observation:
            "You included a dispute resolution mechanism for tracked hours, which prevents the most likely source of disagreement from becoming a relationship problem.",
          coachingTip:
            "When writing commercial terms for direct communicators, anticipate the most likely dispute and build the resolution mechanism into the terms. Prevention is cheaper than arbitration.",
          styleContext:
            "Direct negotiators want terms that function as self-enforcing contracts. If the terms are clear enough, disputes resolve themselves against the documented criteria.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the adjustment triggers are specific enough. If the clause says 'if contribution increases significantly', that is not measurable.",
          observation:
            "If your terms lack a defined measurement method or dispute resolution process, they will create problems at the first quarterly review.",
          coachingTip:
            "For every adjustment clause, answer three questions: What triggers it? How is it measured? Who decides if there is a dispute?",
          styleContext:
            "Direct negotiators write terms that eliminate the need for future negotiation. Every ambiguity is a future argument waiting to happen.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your terms are too vague, too general, or lack the specificity needed to function as a working agreement.",
          observation:
            "If your terms say 'revenue will be shared fairly based on contribution' without defining what fair means or how contribution is measured, they are a statement of intent, not commercial terms.",
          coachingTip:
            "Replace every adjective with a number. 'Fair' becomes '65-35'. 'Significant contribution' becomes 'exceeding 40% of total project hours'. Numbers are unambiguous.",
          styleContext:
            "Direct negotiators reject terms that require goodwill to interpret. Goodwill is a relationship asset, not a contractual tool.",
        },
      },
    },
  },

  // Scenario 363 - Alex Tran, negotiation, advanced
  {
    id: "scenario-363",
    title: "The Acquisition Terms Negotiation",
    context:
      "Alex is leading negotiations for the acquisition of a smaller company. The target company's founder wants to stay on as CEO for two years post-acquisition. Alex believes the integration requires a different leadership structure and needs to negotiate the founder's role without losing the deal.",
    chooseContext:
      "Alex has proposed that the founder take a Chief Strategy Officer role instead of CEO, with a guaranteed two-year contract and an advisory board seat after that. The founder has pushed back, saying the title change signals a demotion to their team.",
    rewriteContext:
      "Alex has asked you to draft the leadership transition terms for the acquisition agreement, defining the founder's role, reporting line, and the conditions under which the arrangement would be reviewed.",
    characterId: "alex-tran",
    dialogue:
      "I understand why the CEO title matters to you, and I respect what you have built. But I have to be honest: two CEOs in one organisation does not work. It confuses the team, slows decisions, and creates competing priorities. What I am offering is real influence - a seat at the strategy table with a guaranteed contract and board access. That is not a demotion. That is a different kind of power.",
    chooseDialogue:
      "Your team will follow your lead. If you walk in on day one as Chief Strategy Officer and you are excited about it, they will be excited about it. If you walk in looking like you lost a fight, they will think you did. The title is not what defines how your team sees you - your energy is. Own the role and it becomes the most powerful position in the new structure.",
    rewriteDialogue:
      "Write the leadership transition terms. Make them clear and fair - the founder needs to read them and feel respected, not managed. Include the role definition, the reporting line, the contract duration, and what happens at the two-year mark. No ambiguity.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has told the founder that two CEOs do not work, reframed the proposed Chief Strategy Officer role as 'a different kind of power', and advised the founder to own the transition rather than resist it. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex is honest about the structural impossibility, reframes the alternative as powerful rather than lesser, and challenges the founder to lead the narrative. This is advanced direct communication - confrontational honesty paired with a compelling reframe.",
          observation:
            "Notice how Alex turns the founder's objection about perception into a challenge about leadership. Direct communicators believe that how you carry a title matters more than what the title says.",
          coachingTip:
            "When someone acknowledges a concern and then reframes it as a leadership challenge rather than a concession, they are negotiating in an advanced direct style.",
          styleContext:
            "Direct communicators in high-stakes negotiations confront uncomfortable truths while offering a path that preserves dignity. They believe honesty and respect can coexist.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is logical about why two CEOs do not work, which can look analytical. But the delivery is assertive and the reframe is motivational, not evidence-based.",
          observation:
            "An analytical communicator would present case studies of failed dual-CEO structures. Alex simply states it does not work as an established fact and moves to the solution.",
          coachingTip:
            "If someone states a structural truth without proving it and then reframes the alternative as an opportunity, they are being direct. Analytical communicators would prove the truth first.",
          styleContext:
            "Direct communicators in acquisition negotiations rely on authority and logic rather than evidence libraries. Their confidence in the position is the evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not explored the founder's emotional attachment to the CEO title, sought to understand their deeper concerns, or offered a gradual transition.",
          observation:
            "There is no empathetic exploration of what the CEO title means to the founder personally. Alex addresses the practical reality and offers a practical alternative.",
          coachingTip:
            "Ask whether the negotiator is addressing the emotion or the structure. Alex is addressing the structure and expecting the founder to manage their own emotions.",
          styleContext:
            "Direct communicators in acquisitions believe that the best thing you can do for a founder is be honest about the new reality. Soft-pedalling creates false expectations.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has reframed the Chief Strategy Officer role as a position of real influence and challenged you to own the transition. How do you respond as the founder?",
      options: [
        {
          id: "s363-opt-a",
          text: "You are right that two CEOs would be a mess. If the Chief Strategy Officer role has genuine strategic authority and I report directly to you, I can make this work. Let us define the scope clearly so my team sees it as a promotion to influence, not a step down.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the logic, set conditions that protect your authority, and committed to owning the narrative. This matches Alex's direct style and moves the negotiation to terms.",
        },
        {
          id: "s363-opt-b",
          text: "I need some time to think about this. Can we revisit the leadership structure discussion next week once I have spoken to my team about how they might react?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but consulting your team before deciding signals uncertainty. Alex would prefer you make the decision and then manage the communication yourself.",
        },
        {
          id: "s363-opt-c",
          text: "I built this company from nothing and the CEO title is non-negotiable. If it is not on the table, the deal is off.",
          score: 0,
          result: "weak",
          explanation:
            "This ultimatum forces Alex to choose between the deal and the structure. A direct negotiator has already explained why the structure cannot accommodate two CEOs. Drawing a line on title risks losing a deal that works for everyone else.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to draft the leadership transition terms for the acquisition: role definition, reporting line, contract duration, and post-contract arrangements. Write it in a direct style - clear, fair, and respectful.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "LEADERSHIP TRANSITION TERMS\n\n1. Role: Chief Strategy Officer, reporting directly to the Group CEO.\n\n2. Scope: Full strategic authority over product direction, market positioning, and innovation pipeline. The CSO chairs the Strategy Advisory Board and has veto authority on strategic decisions affecting the acquired business unit's market focus.\n\n3. Contract: Two-year guaranteed contract from completion date. Compensation package equivalent to current CEO remuneration plus acquisition performance bonus tied to Year 1 and Year 2 integration milestones.\n\n4. Team communication: The role transition will be announced jointly by the Group CEO and the founder. Messaging will position the CSO role as a strategic appointment, not a structural consequence of the acquisition.\n\n5. Post-contract: At the two-year mark, the founder transitions to a non-executive Advisory Board seat with a three-year term. Advisory compensation and meeting schedule to be agreed six months before the transition.\n\n6. Review clause: If either party believes the arrangement is not working, a formal review can be triggered at any point after month six. The review process takes no longer than 30 days and results in either a role adjustment or an agreed exit package.\n\n7. Non-compete: Standard 12-month non-compete applies from the date of departure from any role within the group.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your terms are clear, fair, and respectful of the founder's contribution while establishing the structural reality of the acquisition. Alex would present these knowing they honour the founder without compromising the integration.",
          observation:
            "You included a joint announcement and positioning strategy, which shows the founder that their public perception has been considered. That is direct communication with diplomatic awareness.",
          coachingTip:
            "When writing transition terms for direct communicators in acquisitions, include the communication plan alongside the commercial terms. How the change is announced matters as much as what changes.",
          styleContext:
            "Direct communicators in acquisitions balance honesty with respect. The terms must be structurally sound, but they must also leave the founder feeling valued, not discarded.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the role scope is defined clearly enough. If the CSO role lacks defined authority, the founder will feel sidelined within months.",
          observation:
            "If your terms define the title but not the decision-making authority, the role becomes honorary. The founder needs to see specific powers in the terms.",
          coachingTip:
            "Define what the CSO can decide without approval. That is the real measure of the role's power, and it is what the founder will scrutinise most carefully.",
          styleContext:
            "Direct communicators in acquisitions know that title without authority is a demotion regardless of what you call it. The terms must define real power.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your terms are too vague, too corporate, or fail to define the role with enough specificity for the founder to evaluate whether it is genuinely influential.",
          observation:
            "If your terms say 'the CSO will contribute to strategic discussions' without specifying authority or reporting lines, the founder will rightly see it as a consolation prize.",
          coachingTip:
            "Rewrite by answering: What can the CSO decide? Who do they report to? What happens if they disagree with the CEO? Those answers define whether the role has teeth.",
          styleContext:
            "Direct communicators reject vague role definitions because they create exactly the kind of confusion and competing priorities that the restructure was designed to eliminate.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (364-366) - remote
  // ============================================

  // Scenario 364 - Priya Sharma, remote, foundation
  {
    id: "scenario-364",
    title: "The Remote Team Welcome",
    context:
      "A new team member is joining a fully remote team. Priya is leading the virtual welcome session and wants to make it feel personal and warm despite the lack of physical presence.",
    chooseContext:
      "Priya has opened the welcome call by asking each team member to share one non-work fact about themselves and the new starter has visibly relaxed. Priya is now transitioning to introduce the team's working style.",
    rewriteContext:
      "Priya has asked you to write a welcome message for the team's shared channel that introduces the new starter to the team culture and makes them feel included from day one.",
    characterId: "priya-sharma",
    dialogue:
      "I know starting a new role remotely can feel isolating - you do not get the corridor chats or the coffee run introductions. So we are going to fix that right now. Everyone on this call is going to tell us one thing about themselves that has nothing to do with work. I will go first: I have an embarrassing number of houseplants and I have named every single one of them.",
    chooseDialogue:
      "You can already see what this team is like - we do not take ourselves too seriously, but we take the work seriously. The thing that makes remote work actually work for us is that we treat every call like a chance to connect, not just a chance to update. You will never join a meeting here where someone does not ask how you are doing first.",
    rewriteDialogue:
      "Write a welcome message that feels like the team is opening the door to a new friend, not processing a new hire. Reference the welcome call, share something personal, and make them feel like they already belong.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has opened a remote welcome session by acknowledging the isolation of remote onboarding, sharing a personal fact about herself, and asking the team to do the same. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with vulnerability, uses personal storytelling, and creates an inclusive atmosphere through shared human moments. This is expressive communication - warm, personal, and designed to build connection quickly.",
          observation:
            "Notice how Priya goes first with her own personal fact. Expressive communicators model the behaviour they want from others - they do not ask for vulnerability without offering it first.",
          coachingTip:
            "When someone shares something personal to make others feel safe to do the same, they are using an expressive approach. The vulnerability is deliberate and strategic.",
          styleContext:
            "Expressive communicators believe that remote teams need more connection, not less, because the informal bonding moments of office life are absent. They actively create those moments.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and people-focused, which can look supportive. But the energy, the humour, and the initiative to create a shared experience distinguish this as expressive.",
          observation:
            "A supportive communicator would quietly check in with the new starter one-to-one. Priya creates a group experience where everyone participates and connection happens publicly.",
          coachingTip:
            "Expressive communicators build connection through shared experiences. Supportive communicators build connection through private reassurance. Priya is a group connector.",
          styleContext:
            "Expressive communicators in remote settings compensate for the lack of physical presence by being more intentionally personal in virtual spaces.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not discussed tasks, targets, or the new starter's responsibilities. The entire session is about building human connection.",
          observation:
            "There are no role descriptions, performance expectations, or team structures in Priya's opening. She believes connection must come before content.",
          coachingTip:
            "Ask whether the communicator is trying to onboard a role or welcome a person. Priya is welcoming a person.",
          styleContext:
            "Expressive communicators believe that a remote team member who feels connected will perform better than one who was thoroughly briefed but feels like a stranger.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has described the team's culture as one where every call starts with a human check-in before any work discussion. How do you respond as the new starter?",
      options: [
        {
          id: "s364-opt-a",
          text: "I love that. My last team went straight into agendas and I always felt like I was just a name on a screen. The fact that you all actually care about each other as people - I can already feel that. I am really excited to be here.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Priya's energy, shared something honest about your past experience, and expressed genuine excitement. This validates the culture Priya has built and signals you will thrive in it.",
        },
        {
          id: "s364-opt-b",
          text: "That sounds great. I am also keen to understand the team's workflows and how tasks are assigned. Could we cover that next?",
          score: 5,
          result: "partial",
          explanation:
            "Practical and understandable, but shifting to task logistics during the welcome session moves past the connection moment Priya has created. The workflows will come - the welcome only happens once.",
        },
        {
          id: "s364-opt-c",
          text: "I appreciate the welcome but I am more of a get-down-to-business person. Could we skip the personal stuff and walk through the project I will be working on?",
          score: 0,
          result: "weak",
          explanation:
            "This rejects the culture Priya has deliberately built. An expressive communicator will feel that you are dismissing the values that make the team work, especially in a remote setting.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a welcome message for the team channel that introduces the new starter, references the welcome call, and makes them feel like they belong. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team - huge welcome to Jamie, who officially joined us today and has already survived the 'tell us something non-work' round on the welcome call. (Jamie, for the record, the fact that you once accidentally adopted three cats in one week is now team legend.)\n\nFor those who could not make the call: Jamie is joining us from the client delivery team at Westbrook and brings a brilliant mix of creative problem-solving and calm under pressure - two things we are going to benefit from massively.\n\nJamie, here is what you need to know about this team: we work hard, we laugh a lot, and we have a Friday afternoon tradition of sharing the most ridiculous thing that happened during the week. You will fit right in.\n\nIf you have not already, drop Jamie a message and say hello. Bonus points if you include a houseplant recommendation - Priya's collection is getting competitive and Jamie has expressed interest in joining the rivalry.\n\nWelcome to the team, Jamie. We are genuinely thrilled to have you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, funny, personal, and references specific moments from the welcome call. Jamie would read this and feel like they are already part of the team culture.",
          observation:
            "You included an inside joke from the welcome call, a team tradition, and a call to action for team members to reach out. Every element builds belonging.",
          coachingTip:
            "When writing welcome messages for expressive communicators, include at least one reference to something personal from the welcome session. That transforms a channel post into a shared memory.",
          styleContext:
            "Expressive communicators use team channels to build culture, not just to communicate. A welcome message is a cultural moment that sets the tone for how the new person will be treated.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether your message references anything specific from the welcome call or the new starter's personality. Generic welcome messages feel impersonal even when they are friendly.",
          observation:
            "If your message could be posted for any new starter without changes, it lacks the personal touch that makes it memorable.",
          coachingTip:
            "Add one specific detail about the new starter that came from the welcome conversation. That detail is what makes the message feel genuine rather than procedural.",
          styleContext:
            "Expressive communicators personalise everything. A welcome message without personal details is like a birthday card without a name on it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too brief, or lacks the personality and warmth that Priya specifically asked for.",
          observation:
            "If your message says 'Please join me in welcoming Jamie to the team', it reads like an HR announcement, not a team welcome.",
          coachingTip:
            "Rewrite as if you are introducing a new friend to your group chat. Let the personality come through in the language, the humour, and the specific details.",
          styleContext:
            "Expressive communicators will not post welcome messages that feel corporate. The message must match the energy of the welcome call, or it will undermine everything the call achieved.",
        },
      },
    },
  },

  // Scenario 365 - Marcus Webb, remote, intermediate
  {
    id: "scenario-365",
    title: "The Remote Team Energy Dip",
    context:
      "Marcus has noticed that his remote team's energy has dropped over the past month. Meetings are camera-off, Slack messages are transactional, and the creative brainstorming that used to define the team has disappeared. He wants to re-energise the team without making it feel forced.",
    chooseContext:
      "Marcus has opened a team call by being honest about what he has noticed and has asked the team what they need. The initial responses have been polite but surface-level. Marcus is trying to go deeper.",
    rewriteContext:
      "Marcus has asked you to write a team message that acknowledges the energy dip, shares a personal reflection, and proposes one change the team can try together.",
    characterId: "marcus-webb",
    dialogue:
      "I am going to be honest with you all. Something has shifted over the past month and I think we all feel it. The cameras are off more often, the brainstorms feel flat, and we are not having the conversations we used to have. I am not blaming anyone - I am part of it too. But I want us to talk about it because this team at its best is something special, and I miss that.",
    chooseDialogue:
      "I know 'what do you need' is a big question and it is hard to answer on a group call. So let me try something different. Instead of asking what is wrong, let me ask: what is one thing we used to do that made you excited to log on in the morning? Just one thing. Because if we can find that, we can rebuild from there.",
    rewriteDialogue:
      "Write a message that does not pretend everything is fine. Acknowledge the dip. Share something personal about how it has affected me. Then suggest one small experiment we can try next week - something that brings back the energy without adding to people's plates.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Marcus has opened a team call by honestly naming the energy dip, including himself in the problem, and asking the team to recall what used to make them excited to log on. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with vulnerability, names the problem openly, includes himself in it, and asks a question designed to reconnect the team with their best version. This is expressive leadership - honest, emotionally generous, and inspiring.",
          observation:
            "Notice how Marcus reframes the problem from 'what is wrong' to 'what made us great'. Expressive communicators energise by looking towards the positive, not by diagnosing the negative.",
          coachingTip:
            "When someone names a team problem while including themselves in it and redirecting towards positive memories, they are using expressive leadership. The vulnerability makes it safe to engage.",
          styleContext:
            "Expressive communicators believe that team energy is contagious - in both directions. If the leader shows vulnerability and optimism, the team will follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is caring and empathetic, which can look supportive. But the energy and the desire to rebuild something exciting distinguish this as expressive. Marcus is not just checking in - he is rallying.",
          observation:
            "A supportive communicator would focus on individual wellbeing. Marcus is focused on the collective energy and what the team could be at its best.",
          coachingTip:
            "Expressive communicators in remote leadership address the group's spirit, not individual wellbeing. They want the team to reconnect with a shared identity.",
          styleContext:
            "Expressive communicators see remote team energy as a shared responsibility. The solution is collective - rediscovering what made the team special - not individual.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not proposed process improvements, analysed productivity data, or set new performance targets. The entire approach is about emotional reconnection.",
          observation:
            "There are no metrics, KPIs, or engagement survey results in Marcus's approach. He is diagnosing the energy through observation and feeling, not data.",
          coachingTip:
            "Ask whether the leader is trying to fix a process or rekindle a feeling. Marcus is rekindling a feeling.",
          styleContext:
            "Expressive communicators in remote leadership know that no amount of process improvement will fix a team that has lost its spark. The spark is the priority.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has asked the team to name one thing they used to do that made them excited to log on. How do you respond?",
      options: [
        {
          id: "s365-opt-a",
          text: "Honestly? The Friday creative sessions where we would throw around wild ideas with no pressure. Some of them went nowhere, but a few turned into our best projects. I miss that energy - and I miss seeing everyone's faces when someone had a ridiculous idea that somehow worked.",
          score: 10,
          result: "strong",
          explanation:
            "You have been genuine, specific, and emotionally engaged. Naming a specific ritual and the feeling it created gives Marcus something to rebuild around.",
        },
        {
          id: "s365-opt-b",
          text: "I think clearer priorities would help. I have been feeling pulled in too many directions and that is probably why my energy is low. If we could simplify the workload, that would make a big difference.",
          score: 5,
          result: "partial",
          explanation:
            "A valid point about workload, but Marcus asked about what excited you, not what is draining you. Shifting to logistics moves away from the emotional reconnection he is seeking.",
        },
        {
          id: "s365-opt-c",
          text: "I am not sure it is anything specific. People just get tired. Maybe we should accept that energy fluctuates and not try to force it.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Marcus's entire effort to re-energise the team. An expressive communicator will feel that this response signals resignation rather than participation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a team message that acknowledges the energy dip, shares a personal reflection, and proposes one small experiment. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team,\n\nI have been thinking about something since our call on Monday, and I wanted to share it honestly.\n\nOver the past few weeks, I have noticed myself doing the thing I always said I would never do: treating our calls like a to-do list instead of a conversation. Camera off, muted until I need to speak, gone before the small talk starts. And if I am doing it, I imagine some of you are too.\n\nHere is the thing - I remember when this team felt different. I remember the Friday sessions where someone would pitch an idea so ridiculous we would all laugh, and then somehow it would become our best project. I miss that. Not as your manager - as someone who genuinely loves being part of this team.\n\nSo here is what I want to try. Next Tuesday at 10am, I am blocking 30 minutes for a 'no agenda' call. Cameras on, coffees in hand, no slides. The only rule is: no work talk for the first 15 minutes. After that, if work comes up naturally, great. If we spend the whole time talking about weekend plans, also great.\n\nOne call. One experiment. Let us see if we can find that spark again.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is vulnerable, specific, and proposes a low-effort experiment that feels inviting rather than obligatory. Marcus would post this and the team would feel something shift.",
          observation:
            "You included Marcus's own contribution to the problem, which models the vulnerability he wants from the team. Leaders who include themselves in the diagnosis earn more trust.",
          coachingTip:
            "When writing team messages for expressive communicators, always include the leader's own vulnerability. It signals that the message is a genuine reflection, not a management intervention.",
          styleContext:
            "Expressive communicators lead by sharing their own experience first. If the leader is honest about their part in the problem, the team has permission to be honest about theirs.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message includes enough personal vulnerability. If it reads like a management observation rather than a personal reflection, it will not land the same way.",
          observation:
            "If your experiment feels mandatory or structured - 'attendance is expected' or 'please prepare a talking point' - it contradicts the low-pressure spirit Marcus wants.",
          coachingTip:
            "Frame the experiment as an invitation, not an event. 'Let us see if this works' is more inviting than 'please join the team reconnection session'.",
          styleContext:
            "Expressive communicators propose experiments, not initiatives. The language of experimentation gives the team permission to try without pressure to succeed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too managerial, or lacks the personal vulnerability and warmth Marcus asked for.",
          observation:
            "If your message proposes a team-building activity without acknowledging the energy dip or sharing Marcus's own experience, it will feel tone-deaf.",
          coachingTip:
            "Start with an honest statement about how you feel. Then name what you miss. Then propose one small thing to try. That sequence is the structure of an expressive team message.",
          styleContext:
            "Expressive communicators reject team-building that does not start with honesty. A paintball day does not fix a disconnected team. An honest conversation might.",
        },
      },
    },
  },

  // Scenario 366 - Nina Okafor, remote, advanced
  {
    id: "scenario-366",
    title: "The Remote Conflict Mediation",
    context:
      "Two remote team members have been in an escalating disagreement that has spilled into public Slack channels. Nina needs to mediate the conflict virtually, rebuild the professional relationship, and restore the team's confidence that remote disagreements can be handled constructively.",
    chooseContext:
      "Nina has brought both team members onto a private video call and opened by acknowledging that online disagreements feel different from in-person ones. One team member has admitted they let the public channel argument get out of hand.",
    rewriteContext:
      "Nina has asked you to write a brief team message after the mediation that addresses the public argument without naming individuals, reinforces the team's values around disagreement, and moves forward positively.",
    characterId: "nina-okafor",
    dialogue:
      "Thank you both for being here. I want to start by saying something important: disagreements are healthy. What happened in the public channel was not the disagreement - it was the venue. When we are remote, everything we say is written down, visible to everyone, and permanent. That changes how conflict lands. What I want to do today is separate the issue from the medium and help you both say what you actually meant to say.",
    chooseDialogue:
      "I appreciate you owning that. The truth is, both of you care deeply about this project and that passion came through - just in a way that felt confrontational in writing. If you had been standing next to each other in an office, this would have been a healthy debate. The screen made it feel like an attack. Let us use this call to have the conversation you actually wanted to have.",
    rewriteDialogue:
      "Write a team message that closes the chapter on the public disagreement. Do not name anyone. Acknowledge that the team saw something uncomfortable, reaffirm that disagreement is welcome but public escalation is not, and end with something that makes people feel good about being on this team.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Nina has mediated a remote conflict by acknowledging that online communication changes how disagreements land, normalising the passion behind the argument, and offering to help both parties say what they actually meant. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina normalises the emotion, reframes the conflict as a communication medium problem rather than a people problem, and creates space for authentic expression. This is expressive conflict resolution - empathetic, human, and focused on genuine communication.",
          observation:
            "Notice how Nina says 'what you actually meant to say'. She is assuming positive intent and creating an opportunity for both parties to communicate authentically rather than defensively.",
          coachingTip:
            "When someone reframes a conflict as a communication problem rather than a character problem, they are using an expressive approach. They believe the intention was good but the delivery was damaged by the medium.",
          styleContext:
            "Expressive communicators in remote mediation understand that written conflict escalates faster than spoken conflict because tone, body language, and real-time feedback are absent.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is caring and protective, which can look supportive. But the focus on authentic expression and the reframe of passion as positive energy distinguish this as expressive.",
          observation:
            "A supportive communicator would focus on making both parties feel safe and heard. Nina goes further - she wants them to express what they genuinely believe, not just feel comfortable.",
          coachingTip:
            "Expressive mediators want authentic communication. Supportive mediators want emotional safety. Nina creates safety as a means to authenticity, not as the end goal.",
          styleContext:
            "Expressive communicators believe that conflict resolved through authentic expression is stronger than conflict resolved through compromise. They want the real conversation to happen.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not established ground rules, proposed a structured mediation process, or focused on the factual content of the disagreement. The approach is entirely relational.",
          observation:
            "There is no process, no agenda, and no evaluation framework. Nina is creating a space for human connection, not managing a formal mediation.",
          coachingTip:
            "Ask whether the mediator is managing a process or facilitating a conversation. Nina is facilitating a genuine conversation.",
          styleContext:
            "Expressive communicators in mediation trust that genuine conversation resolves conflict more effectively than structured process. The process can come later if needed.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has reframed your public Slack argument as a passionate debate that was damaged by the written medium and has offered to facilitate the conversation you actually wanted to have. How do you respond?",
      options: [
        {
          id: "s366-opt-a",
          text: "You are right - I was frustrated and I typed things I would never have said face to face. What I actually wanted to say was that I think we are approaching the project brief from different angles and I did not feel heard when I raised my concerns in the last meeting. Can we talk about that?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the reframe, been honest about what drove the behaviour, and named the real underlying issue. Nina will be delighted because this is the authentic conversation she was trying to create.",
        },
        {
          id: "s366-opt-b",
          text: "I understand the point about the medium. Maybe we should set up a team policy about how we handle disagreements in Slack so this does not happen again.",
          score: 5,
          result: "partial",
          explanation:
            "A constructive suggestion, but it shifts from the personal conversation to a policy discussion. Nina wants to resolve the relationship first, then consider process changes.",
        },
        {
          id: "s366-opt-c",
          text: "I stand by what I said. The medium did not change my message - I meant every word. The project approach is wrong and someone needed to say it publicly.",
          score: 0,
          result: "weak",
          explanation:
            "This rejects Nina's reframe entirely and doubles down on the public confrontation. An expressive communicator has offered a graceful path to resolution - refusing it escalates the conflict.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a brief team message after the mediation: acknowledge the public argument without naming anyone, reaffirm values around disagreement, and close positively. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team,\n\nYou might have noticed some tension in the project channel earlier this week. I want to address it openly because ignoring it would feel dishonest, and this team deserves better than that.\n\nHere is what I believe: disagreement is one of our strengths. The fact that people on this team care enough to challenge each other's thinking is something I would never want to lose. It is how we produce our best work.\n\nWhat I also believe is that written channels are a terrible place for heated debates. Without tone, facial expressions, and the ability to read the room, messages can land much harder than they were intended. We have all experienced that - I certainly have.\n\nSo here is the team agreement going forward: if a disagreement starts heating up in a channel, take it to a call. Not because the disagreement is wrong, but because the conversation deserves a better venue. Voice carries nuance that text never will.\n\nThe people involved have spoken, it is resolved, and I am proud of how they handled it. No lasting damage - just two passionate people who needed a better medium.\n\nThis team is brilliant because you care. Let us keep caring - just with cameras on and microphones unmuted when it matters most.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message acknowledges the incident without embarrassing anyone, reframes disagreement as a strength, and proposes a practical norm that prevents future public escalation. Nina would post this with complete confidence.",
          observation:
            "You protected the individuals while addressing the team's concern. The line 'no lasting damage - just two passionate people who needed a better medium' closes the chapter with warmth and dignity.",
          coachingTip:
            "When writing post-conflict team messages for expressive communicators, always end on a note of pride in the team. The message should leave people feeling stronger, not chastened.",
          styleContext:
            "Expressive communicators use post-conflict communications to reinforce team identity. The message is not about the conflict - it is about what the team values and how it will handle disagreement going forward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message might inadvertently identify the individuals or focus too heavily on the negative. If it reads like a warning, it will make people anxious rather than reassured.",
          observation:
            "If your message includes phrases like 'this behaviour is unacceptable' or 'there will be consequences for future incidents', it has crossed from expressive resolution into managerial enforcement.",
          coachingTip:
            "Remove any punitive language. The message should feel like a community agreement, not a disciplinary memo.",
          styleContext:
            "Expressive communicators build team norms through inspiration, not enforcement. People follow norms they believe in more faithfully than rules they fear.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too punitive, too vague, or fails to close the chapter positively. The team would read it and feel anxious rather than reassured.",
          observation:
            "If your message pretends nothing happened or conversely makes a dramatic intervention out of a resolved conflict, it has misjudged the tone.",
          coachingTip:
            "Find the middle ground: acknowledge it happened, say it is resolved, propose a simple norm, and close with warmth. That four-step structure is the template for post-conflict team messages.",
          styleContext:
            "Expressive communicators know that silence after a public conflict is worse than addressing it. The team needs to hear from their leader, and what they hear should make them feel safe.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (367-369) - meeting
  // ============================================

  // Scenario 367 - Tom Brennan, meeting, foundation
  {
    id: "scenario-367",
    title: "The First Team Meeting After Restructure",
    context:
      "The team has just been through a restructure. Some colleagues have moved to different teams and two new members have joined. Tom is chairing the first full team meeting and wants to set a tone that acknowledges the disruption while building confidence in the new group.",
    chooseContext:
      "Tom has opened the meeting by acknowledging that change is hard and asking each person to share one thing they are hoping the new team will bring. A team member has responded with visible scepticism.",
    rewriteContext:
      "Tom has asked you to write a short message to the team after the meeting that reinforces the collaborative tone and gives everyone a shared focus for the first two weeks.",
    characterId: "tom-brennan",
    dialogue:
      "Before we get into any of the practical stuff, I want to take a moment. Some of you have been moved from teams you loved, and that is not easy. Some of you are new here and might be wondering what you have walked into. Both of those things are completely valid. What I want us to do today is not pretend everything is normal - it is start building something together that we can all feel good about.",
    chooseDialogue:
      "I can see some of you are not sure about this, and that is fine. You do not have to be excited about a restructure on day one. What I am asking is that you give it a chance. Not a blind one - a fair one. Let us see what this team can become over the next few weeks before we decide how we feel about it.",
    rewriteDialogue:
      "Write a follow-up message that does not sugarcoat the change but gives people something to hold onto. Acknowledge the mixed feelings. Set one simple shared goal for the next two weeks - something we can achieve together that builds early momentum without adding pressure.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has opened a post-restructure meeting by acknowledging that some team members are grieving their old teams, welcoming the scepticism, and asking people to give the new group a fair chance. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom names the emotional reality, validates the discomfort, and asks for patience rather than enthusiasm. This is supportive leadership - honest, gentle, and focused on creating psychological safety during change.",
          observation:
            "Notice how Tom does not ask people to be excited. He asks them to 'give it a fair chance'. Supportive communicators set realistic emotional expectations rather than demanding positivity.",
          coachingTip:
            "When someone acknowledges that negative feelings are valid and asks for patience rather than enthusiasm, they are using a supportive approach. Respond with honest engagement, not forced positivity.",
          styleContext:
            "Supportive communicators know that people cannot be told how to feel about change. They can only be given space to process it at their own pace.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and human, which can look expressive. But the energy is deliberately low and the emotional range acknowledged is wide - including scepticism and grief. Expressive communicators would energise; Tom is calming.",
          observation:
            "An expressive communicator would try to inspire excitement about the new team's potential. Tom validates the sadness about the old team first because that is the emotional reality in the room.",
          coachingTip:
            "Supportive communicators meet people where they are. Expressive communicators try to take people somewhere new. In a restructure, meeting people where they are comes first.",
          styleContext:
            "Supportive communicators in times of change prioritise emotional honesty over inspirational messaging. People need to feel heard before they can feel hopeful.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented the restructure rationale, shared performance targets for the new team, or focused on operational priorities. The meeting is entirely about emotions.",
          observation:
            "There are no org charts, new responsibilities, or KPIs in Tom's opening. He is creating emotional ground before any operational structure is laid.",
          coachingTip:
            "Ask whether the leader is building a team or building a plan. Tom is building a team first because he knows plans fail without team trust.",
          styleContext:
            "Supportive communicators believe that a team that trusts each other will figure out the work. A team that does not trust each other will struggle regardless of how good the plan is.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has asked the team to give the new group a fair chance and acknowledged that scepticism is understandable. How do you respond as the sceptical team member?",
      options: [
        {
          id: "s367-opt-a",
          text: "I appreciate you not pretending this is easy. I left a team I had been with for three years, and it is hard. But you are right - it is fair to give this a proper chance. I will commit to the first two weeks with an open mind.",
          score: 10,
          result: "strong",
          explanation:
            "You have been honest about the difficulty, accepted Tom's invitation, and made a realistic commitment. This rewards the supportive approach without forcing false positivity.",
        },
        {
          id: "s367-opt-b",
          text: "I understand the restructure happened for business reasons. Can you share more about the rationale so I can understand why this team was formed the way it was?",
          score: 5,
          result: "partial",
          explanation:
            "A fair question, but Tom has deliberately set aside the practical rationale to focus on the emotional adjustment. The rationale will come, but this meeting is about feelings.",
        },
        {
          id: "s367-opt-c",
          text: "Honestly, I think this restructure was a mistake. We had a great team and now we have been split up for no good reason. I am not going to pretend I am happy about it.",
          score: 0,
          result: "weak",
          explanation:
            "Tom has created space for honesty, but this response goes beyond honest into hostile. It makes it harder for new team members to feel welcome and undermines the fragile trust Tom is trying to build.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a follow-up message that acknowledges mixed feelings about the restructure and sets one simple shared goal for the first two weeks. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nThank you for today's meeting. I know it was not the easiest conversation, and I want you to know that the honesty in that room - even the scepticism - is exactly what a healthy team looks like. No one was pretending, and that matters.\n\nFor the next two weeks, I want us to focus on one thing: getting to know each other. Not through a spreadsheet of roles and responsibilities - that will come - but through the conversations that happen when you reach out to someone you have not worked with before.\n\nHere is your one ask for the next fortnight: have a 15-minute chat with someone on the team you do not know well yet. No agenda. Just a conversation about who you are and what you care about. That is it.\n\nIf it feels awkward, that is fine. Awkward is where trust starts.\n\nI am here if you want to talk about anything - the restructure, the new team, or anything else that is on your mind. My door is always open, even when that door is a Teams call.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message validates the meeting's emotional reality, sets a simple and achievable goal, and closes with an open invitation. Tom would post this knowing it honours the team's feelings while gently moving forward.",
          observation:
            "The line 'awkward is where trust starts' is particularly effective. It normalises the discomfort of building new relationships and gives people permission to not have it all figured out.",
          coachingTip:
            "When writing post-meeting messages for supportive communicators, normalise the difficult emotions. People engage more when they know their feelings are expected, not problematic.",
          styleContext:
            "Supportive communicators measure the success of a transition by how safe people feel, not how fast people adapt. A team that feels safe will adapt naturally.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether your shared goal is simple enough. If you have proposed multiple activities or a structured team-building programme, it may feel like pressure rather than support.",
          observation:
            "If your message includes a list of tasks, deadlines, or expectations for the first two weeks, it has added pressure that contradicts Tom's approach.",
          coachingTip:
            "Keep the ask to one thing. One conversation. One connection. That is all anyone should need to do in the first two weeks to feel like they are contributing.",
          styleContext:
            "Supportive communicators build momentum through small, achievable asks. One genuine conversation is worth more than ten structured team activities.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too positive, too task-focused, or fails to acknowledge the emotional reality of the restructure.",
          observation:
            "If your message says 'I am excited about what this new team can achieve', it is out of step with the scepticism Tom acknowledged and validated in the meeting.",
          coachingTip:
            "Match the emotional register of the meeting. If the meeting was honest and a little tender, the follow-up should be too.",
          styleContext:
            "Supportive communicators maintain emotional consistency. If the meeting acknowledged pain, the follow-up cannot pretend there is none.",
        },
      },
    },
  },

  // Scenario 368 - Leah Morgan, meeting, intermediate
  {
    id: "scenario-368",
    title: "The Quiet Voices Meeting",
    context:
      "Leah has noticed that two or three team members dominate every meeting while others sit silently. She wants to redesign how the next team meeting runs so that quieter voices are heard without singling anyone out.",
    chooseContext:
      "Leah has introduced a new meeting format where everyone writes their thoughts on a shared board before any verbal discussion. One of the dominant voices has complained that it slows things down.",
    rewriteContext:
      "Leah has asked you to draft a short meeting facilitation guide that the team can use going forward, embedding the principle that all voices matter without making it feel like a restriction on confident speakers.",
    characterId: "leah-morgan",
    dialogue:
      "I want to try something different today. Before we discuss anything, I would like everyone to take three minutes to write their thoughts on the shared board - no names attached. Then we will talk through what is there. The reason is simple: some of the best ideas in this team come from people who do not always speak first, and I want to make sure we are hearing all of them.",
    chooseDialogue:
      "I understand it might feel slower, and I appreciate that you are someone who thinks on your feet. But not everyone does, and that does not mean their ideas are less valuable. This format gives everyone equal space. I think you might be surprised by what comes out of it - and your ideas will still be there, I promise.",
    rewriteDialogue:
      "Write a facilitation guide that feels inviting, not regulatory. Frame it as 'how we make sure everyone contributes' rather than 'rules for meetings'. Include the written board idea and two other techniques that support quieter contributors.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has introduced anonymous written contributions before verbal discussion to ensure quieter team members are heard, and responded to a dominant voice's complaint by validating their style while protecting the new format. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah redesigns the meeting to protect quieter voices, validates the dominant voice without conceding, and frames the change as inclusive rather than restrictive. This is supportive facilitation - protective, equitable, and carefully worded.",
          observation:
            "Notice how Leah does not criticise the dominant speakers. She frames the change as unlocking hidden value rather than correcting bad behaviour. That protects everyone's dignity.",
          coachingTip:
            "When someone redesigns a process to include marginalised voices without criticising the people who currently dominate, they are using a supportive approach. The change is framed as addition, not correction.",
          styleContext:
            "Supportive communicators believe that meeting formats shape who gets heard. Changing the format is kinder and more effective than asking confident speakers to hold back.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and inclusive, which can look expressive. But the focus is on protecting the quiet voices, not on energising the room. The approach is protective, not inspirational.",
          observation:
            "An expressive communicator would encourage the quiet voices directly. Leah changes the structure so they do not need encouragement - the format does the work.",
          coachingTip:
            "Supportive communicators change systems rather than expecting people to change behaviour. The shared board removes the need for shy people to speak up in front of dominant voices.",
          styleContext:
            "Supportive communicators design environments that protect people without requiring those people to advocate for themselves. The system does the advocating.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not analysed meeting productivity data, proposed a structured decision-making framework, or focused on efficiency. The change is entirely about inclusion.",
          observation:
            "There is no meeting efficiency metric or decision quality analysis in Leah's approach. The motivation is entirely about making people feel valued and heard.",
          coachingTip:
            "Ask whether the change is designed to improve outcomes or improve experiences. Leah is improving experiences, trusting that better experiences lead to better outcomes.",
          styleContext:
            "Supportive communicators believe that if everyone feels safe to contribute, the quality of decisions improves naturally. Inclusion is not just kind - it is smart.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has told you that the new format gives everyone equal space and that your ideas will still be heard. How do you respond as the dominant speaker?",
      options: [
        {
          id: "s368-opt-a",
          text: "Fair enough. I had not thought about it that way. I am used to thinking out loud, but I can see how that might crowd others out. Let us try it - I am curious to see what the board surfaces.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the feedback gracefully, shown self-awareness, and expressed genuine curiosity about the new approach. This validates Leah's supportive intervention and models adaptability.",
        },
        {
          id: "s368-opt-b",
          text: "I am happy to try it, but can we time-limit the writing phase? I worry that three minutes of silence will kill the energy in the room.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable practical suggestion, but framing silence as negative may reinforce the idea that fast talking is the default. Leah would want you to experience the silence before judging it.",
        },
        {
          id: "s368-opt-c",
          text: "I think people who want to be heard need to speak up. That is how meetings work. Changing the format to accommodate people who are not willing to contribute verbally is not the right approach.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the experience of quieter team members and rejects Leah's inclusive intervention. A supportive communicator will see this as the exact attitude the format change was designed to address.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a meeting facilitation guide that feels inviting and frames inclusive practices as value-adding rather than restrictive. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "HOW WE MAKE SURE EVERYONE CONTRIBUTES\n\nThis is not a set of meeting rules - it is a shared commitment to making sure our best thinking comes from the whole team, not just the people who happen to speak first.\n\nThree practices we use:\n\n1. Write before you speak\nBefore any discussion topic, take three minutes to write your thoughts on the shared board. No names - just ideas. This gives everyone equal space to contribute, regardless of how comfortable they are speaking in a group.\n\nWhy it works: Research shows that people generate better ideas when they think independently before group discussion. This is not about slowing confident speakers down - it is about capturing the ideas that would otherwise stay unspoken.\n\n2. Round the room\nFor important decisions, we do a quick round where each person shares one thought in turn. There is no pressure to say something groundbreaking - 'I agree with what Sarah said' is perfectly fine.\n\nWhy it works: It removes the social cost of interrupting or waiting for a gap. Everyone gets a moment, and the people who are still thinking when the conversation moves on get a chance to catch up.\n\n3. Check in at the close\nBefore we wrap up, the facilitator asks: 'Is there anything we have not heard that someone wants to add?' This is not a formality - it is a genuine invitation. Sometimes the most important point arrives at the end because someone needed the whole meeting to formulate it.\n\nWhy it works: It signals that we value late contributions as much as early ones. Not everyone processes at the same speed, and that is fine.\n\nA note for confident speakers: These practices are not designed to hold you back. Your ideas and energy are essential. What we are doing is making space alongside you for contributions that might otherwise be missed. The team gets stronger when everyone is heard.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your guide is warm, inclusive, and addresses confident speakers directly without criticising them. Leah would share this knowing it protects quiet voices while honouring loud ones.",
          observation:
            "You included a specific note for confident speakers, which prevents them from feeling targeted. Inclusive practices must include everyone - even the people who were already included.",
          coachingTip:
            "When writing facilitation guides for supportive communicators, always address the people who might feel the change is aimed at them. Make them feel valued, not managed.",
          styleContext:
            "Supportive communicators design inclusive practices that protect everyone's dignity. The confident speakers should feel appreciated, not constrained.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good practices, but check whether your guide feels inviting or regulatory. If it reads like a set of rules rather than a shared commitment, it will create resistance rather than buy-in.",
          observation:
            "If your guide uses phrases like 'speakers must' or 'contributors are required to', it has shifted from supportive to directive.",
          coachingTip:
            "Replace 'must' with 'we'. Replace 'required' with 'we commit to'. The language of shared agreement is more powerful than the language of enforcement.",
          styleContext:
            "Supportive communicators write guides that people want to follow, not guides they have to follow. The difference is in the language.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your guide is either too prescriptive, too focused on what people should not do, or fails to frame the practices positively.",
          observation:
            "If your guide opens with 'do not dominate meetings' or 'stop talking over colleagues', it has created exactly the hostile environment Leah is trying to prevent.",
          coachingTip:
            "Reframe every 'do not' as a 'do'. Instead of 'do not dominate', say 'make space for others'. The positive frame invites participation rather than creating resentment.",
          styleContext:
            "Supportive communicators never solve an inclusion problem by creating an exclusion problem. Everyone must feel that the guide was written for them, not against them.",
        },
      },
    },
  },

  // Scenario 369 - David Chen, meeting, advanced
  {
    id: "scenario-369",
    title: "The Emotionally Charged Strategy Meeting",
    context:
      "The team is meeting to discuss potential redundancies following a budget cut. Emotions are running high and David has been asked to chair the meeting. He needs to facilitate an honest discussion without letting fear dominate the conversation.",
    chooseContext:
      "David has opened by acknowledging the anxiety in the room and committing to full transparency about the situation. A team member has asked directly: 'Am I going to lose my job?'",
    rewriteContext:
      "David has asked you to draft a follow-up email to the team after the meeting that summarises what was discussed, what is known, what is not yet known, and what the next steps are.",
    characterId: "david-chen",
    dialogue:
      "I am not going to pretend this is a normal meeting. It is not. I can see the worry on your faces and I want to be honest about what I know and what I do not know. What I know is that the budget has been reduced and changes will happen. What I do not know yet is exactly what those changes look like. What I promise is that you will hear the truth from me before you hear it from anyone else.",
    chooseDialogue:
      "I hear you, and I wish I could give you a definitive answer right now. What I can tell you is this: no decisions have been made about individual roles. When they are, you will hear from me personally before any announcement. I will not let you find out through an email or a rumour. That is my commitment to you.",
    rewriteDialogue:
      "Write the follow-up so that people feel informed, not more anxious. Be clear about what is known and what is not. Do not make promises we cannot keep, but do make commitments about how we will communicate. People need to trust the process even if they cannot control the outcome.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has chaired a meeting about potential redundancies by acknowledging the team's anxiety, being transparent about what he knows and does not know, and promising they will hear truth from him first. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads with empathy, acknowledges the fear, is transparent about uncertainty, and makes personal commitments about communication. This is advanced supportive leadership - honest, protective, and deeply human in the most difficult circumstances.",
          observation:
            "Notice how David distinguishes between what he knows and what he does not know. Supportive communicators in crisis are honest about uncertainty because false reassurance is more damaging than uncomfortable truth.",
          coachingTip:
            "When someone responds to crisis anxiety with structured honesty - separating known from unknown and making specific commitments about communication - they are using advanced supportive leadership.",
          styleContext:
            "Supportive communicators know that in redundancy conversations, people's primary need is not information - it is trust. They need to trust that their leader will be honest, timely, and human.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is honest and emotionally present, which can look expressive. But the restraint, the careful boundary between known and unknown, and the focus on trust distinguish this as supportive.",
          observation:
            "An expressive communicator might share their own fear about the situation. David stays focused on the team's experience and what he can commit to. His feelings are secondary to theirs.",
          coachingTip:
            "Supportive communicators in crisis hold their own emotions to create space for others. David's calm is not absence of feeling - it is a deliberate choice to be the steady presence the team needs.",
          styleContext:
            "Supportive communicators believe that in times of fear, the leader's job is to be the calmest person in the room. Not because they feel calm, but because the team needs them to be.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented the budget analysis, discussed the restructure options, or focused on operational continuity. The meeting is entirely about emotional management and trust.",
          observation:
            "There are no spreadsheets, scenarios, or cost-cutting options on the table. David is managing how people feel about the uncertainty, not solving the budget problem.",
          coachingTip:
            "Ask whether the leader's priority in this meeting is the business problem or the people problem. David is addressing the people problem because he knows scared people cannot contribute to business solutions.",
          styleContext:
            "Supportive communicators in redundancy situations know that trust must be established before any practical decisions can be discussed. A team that does not trust the process will not engage with it constructively.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has promised that you will hear from him personally before any announcement about your role. A colleague beside you whispers: 'That is just what managers say.' How do you respond?",
      options: [
        {
          id: "s369-opt-a",
          text: "I understand why you might think that, but David has been straight with us today in a way that most managers would not be. He admitted what he does not know instead of spinning it. I think we should take him at his word and see if he follows through.",
          score: 10,
          result: "strong",
          explanation:
            "You have acknowledged the scepticism without dismissing it, pointed to specific evidence of David's honesty, and advocated for giving the supportive approach a chance.",
        },
        {
          id: "s369-opt-b",
          text: "Maybe. But what else can we do? I would rather trust the process and be wrong than spend the next month panicking about something that might not happen.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic, but it frames trust as a coping mechanism rather than an earned response. David has specifically tried to earn trust through transparency, and this response does not quite honour that.",
        },
        {
          id: "s369-opt-c",
          text: "You are probably right. We should start looking for other jobs now. If the budget is cut, we are all at risk regardless of what David says.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines the trust David has worked to build and spreads anxiety to a colleague. David has been transparent about the situation - this response ignores that transparency entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a follow-up email after a meeting about potential redundancies: what is known, what is not, and what the communication commitments are. Write it in a supportive style - honest but not anxiety-inducing.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nThank you for your honesty and courage in today's meeting. I know it was not easy, and I want you to know that the openness in that room is something I do not take for granted.\n\nHere is a clear summary of where things stand:\n\nWhat we know:\n- The department budget has been reduced by 15% for the next financial year\n- Changes to team structure will be necessary to operate within the new budget\n- No decisions about individual roles have been made at this point\n\nWhat we do not know yet:\n- Exactly which roles will be affected\n- The timeline for any changes\n- Whether voluntary measures (reduced hours, redeployment) could reduce the need for compulsory changes\n\nOur commitments to you:\n- No one will learn about a change to their role through an email or a rumour. I will speak to each affected person individually before any wider communication\n- I will provide an update to the full team every Friday at 10am, even if the update is 'nothing has changed'. No news will be communicated as no news, not left as silence\n- If you want to talk privately at any point - about facts, fears, or anything else - my calendar is open. Reach out and I will make time\n\nI know this is a difficult period. I am not going to tell you not to worry, because that would not be honest. What I will tell you is that you will always hear the truth from me, delivered with respect and as much notice as possible.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is transparent without being alarmist, separates known from unknown clearly, and makes specific, verifiable commitments about communication. David would send this knowing it builds trust even in the most difficult circumstances.",
          observation:
            "The weekly Friday update commitment is particularly strong. It transforms silence from a source of anxiety into a predictable communication rhythm. People can cope with bad news; they cannot cope with no news.",
          coachingTip:
            "When writing crisis communications for supportive communicators, always include a communication schedule. Regular updates - even when there is nothing to report - reduce anxiety more than any reassurance.",
          styleContext:
            "Supportive communicators in redundancy situations know that the greatest source of suffering is not the potential job loss - it is the uncertainty. Structured, honest communication is the most powerful anxiety-reducing tool available.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good transparency, but check whether your commitments are specific enough to be verifiable. If you have said 'I will keep you updated' without specifying when and how, the promise lacks teeth.",
          observation:
            "If your email promises things you cannot control - 'no one will be made redundant' or 'your jobs are safe' - it will damage trust more than the uncertainty itself when those promises break.",
          coachingTip:
            "Only commit to things you can control: how you communicate, when you communicate, and how you treat people. Do not commit to outcomes you cannot guarantee.",
          styleContext:
            "Supportive communicators make commitments about process, not outcomes. They know they cannot control the budget decision, but they can control how they lead through it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too reassuring (making promises about outcomes), too vague (failing to separate known from unknown), or too corporate (lacking the personal warmth the situation demands).",
          observation:
            "If your email says 'the organisation remains committed to its people' without making specific personal commitments from David, it reads like an HR template.",
          coachingTip:
            "Replace 'the organisation' with 'I'. Replace 'committed to its people' with specific actions you will personally take. People trust people, not organisations.",
          styleContext:
            "Supportive communicators reject corporate language in crisis communications because it signals distance when people need closeness. The email must feel like it was written by a human who cares, not a department that is managing risk.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (370-372) - feedback
  // ============================================

  // Scenario 370 - Rachel Finch, feedback, foundation
  {
    id: "scenario-370",
    title: "The Report Quality Review",
    context:
      "A team member has submitted a report that contains several factual errors and unsupported claims. Rachel needs to give feedback that addresses the quality issues without discouraging future effort.",
    chooseContext:
      "Rachel has identified five specific errors in the report and walked the team member through each one with the correct data. The team member has become defensive, saying they were under time pressure.",
    rewriteContext:
      "Rachel has asked you to draft a quality checklist the team member can use before submitting future reports, so the errors are caught before they reach Rachel.",
    characterId: "rachel-finch",
    dialogue:
      "I have reviewed the report and I need to flag five issues before it goes to the client. Page three cites a market growth rate of 12% but the source data shows 8.4%. Page seven claims 'most companies' have adopted the new standard without specifying a percentage or a source. I have annotated each issue with the correct figure or a note on what evidence is needed. Let me walk you through them.",
    chooseDialogue:
      "I understand time pressure, and I appreciate the effort you put in. But the client reads our reports as authoritative. If they find an error we missed, it undermines every other number in the document. The fix is not more time - it is a better checking process. I would rather receive a report a day late than one with unchecked figures.",
    rewriteDialogue:
      "Write a quality checklist the team can use before submitting any report. Five to seven checks, each with a clear pass-fail criterion. If someone follows this checklist, the errors I found today should be impossible to miss.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has given feedback by identifying five specific factual errors with the correct data, walking through each one, and proposing a checking process to prevent recurrence. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's feedback is specific, data-referenced, and process-oriented. She identifies exact errors, provides corrections, and proposes a systemic fix. This is analytical feedback at its clearest.",
          observation:
            "Notice how Rachel does not say 'the report was sloppy'. She names each error with the page number, the incorrect figure, and the correct figure. Analytical communicators give feedback you can act on immediately.",
          coachingTip:
            "When someone gives feedback by listing specific errors with corrections rather than making general quality judgements, they are being analytical. Respond with specifics, not promises.",
          styleContext:
            "Analytical communicators believe the most helpful feedback is the most specific feedback. Vague observations like 'needs more rigour' leave the person guessing about what to fix.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is firm about the quality standard, which can look direct. But the detail of the error identification and the focus on process improvement distinguish this as analytical.",
          observation:
            "A direct communicator would say 'the report is not good enough, fix it'. Rachel says 'here are the five specific things that are wrong and here is the correct data for each one'.",
          coachingTip:
            "If someone walks you through errors one by one with corrections, they are being analytical. If they tell you the output is unacceptable and expect you to find the errors yourself, they are being direct.",
          styleContext:
            "Analytical communicators invest time in detailed feedback because they believe it reduces the likelihood of repeat errors. The specificity is an investment in future quality.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on how the team member feels, offered encouragement, or softened the feedback. The conversation is entirely about accuracy and process.",
          observation:
            "There are no compliment sandwiches or reassuring statements in Rachel's feedback. Every sentence either identifies an error or proposes a fix.",
          coachingTip:
            "Ask whether the feedback is designed to make the person feel better or make the output better. Rachel is entirely focused on the output.",
          styleContext:
            "Analytical communicators see detailed, specific feedback as a form of respect. They trust the recipient to handle the truth and improve from it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has said she would rather receive a report a day late than one with unchecked figures, and has proposed building a better checking process. How do you respond?",
      options: [
        {
          id: "s370-opt-a",
          text: "That makes sense. The errors you found were avoidable and I should have caught them. Can we build a checklist together so I have a systematic way to verify the figures before submitting? I do not want this to happen again.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the feedback, taken ownership, and engaged with the process solution Rachel has proposed. This matches her analytical approach and shows you are committed to systematic improvement.",
        },
        {
          id: "s370-opt-b",
          text: "I appreciate the detailed feedback. Could you share the checklist you use when you review reports? That would save us building one from scratch.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but slightly passive. Rachel would prefer you take ownership of building the checklist with her input, rather than asking her to provide her own process wholesale.",
        },
        {
          id: "s370-opt-c",
          text: "I think the report was 95% accurate and the five errors were minor. I would rather spend time on new work than build a checking process for a handful of mistakes.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the quality standard Rachel has set. An analytical communicator will not accept that factual errors are minor - accuracy is the foundation of credibility.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a quality checklist with five to seven checks, each with a clear pass-fail criterion, that would catch the errors she found. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "REPORT QUALITY CHECKLIST - Complete before submission\n\n1. Source verification\nCheck: Every statistic in the report has a named, dated source.\nPass: Source name, publication date, and page/URL are cited for every figure.\nFail: Any figure lacks a traceable source.\n\n2. Figure accuracy\nCheck: Every cited figure has been verified against the original source.\nPass: The figure in the report matches the source document exactly.\nFail: Any discrepancy between the reported figure and the source data.\n\n3. Quantified claims\nCheck: No vague quantifiers ('most', 'many', 'significant') appear without a supporting figure.\nPass: Every quantity claim includes a specific percentage, number, or range.\nFail: Any vague quantifier without supporting data.\n\n4. Recency check\nCheck: All data sources are from the past 24 months unless historical comparison is intended.\nPass: Every source date falls within the acceptable range.\nFail: Any source is outdated without an explicit justification in the text.\n\n5. Calculation verification\nCheck: Any derived figures (percentages, averages, growth rates) have been recalculated independently.\nPass: Independent calculation matches the reported figure.\nFail: Any derived figure cannot be verified through independent calculation.\n\n6. Consistency check\nCheck: Figures referenced in multiple sections of the report are consistent.\nPass: The same data point is reported identically wherever it appears.\nFail: Any inconsistency between sections.\n\n7. Client readiness\nCheck: A colleague who has not seen the report can identify the key findings within two minutes of reading.\nPass: The colleague correctly identifies the top three findings without guidance.\nFail: The colleague misidentifies or cannot locate the key findings.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each check has a clear definition, a specific pass criterion, and a specific fail criterion. Someone following this checklist would catch every error Rachel identified, and the process is repeatable.",
          observation:
            "You included a client readiness check at the end, which broadens the checklist from accuracy to effectiveness. Rachel would appreciate the analytical thinking that connects data quality to reader experience.",
          coachingTip:
            "When writing checklists for analytical communicators, make every criterion binary. Pass or fail, with no room for interpretation. That eliminates subjectivity from the quality process.",
          styleContext:
            "Analytical communicators value checklists that can be followed by anyone and produce consistent results. The checklist should work regardless of who uses it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every criterion is truly binary. If any check says 'ensure quality is adequate' without defining what adequate means, it cannot function as a reliable gate.",
          observation:
            "If your pass criteria use subjective words like 'appropriate', 'sufficient', or 'reasonable', they leave too much room for interpretation.",
          coachingTip:
            "Replace every subjective criterion with a measurable one. 'Sufficient sources' becomes 'at least one named, dated source per statistic'.",
          styleContext:
            "Analytical communicators design checklists to eliminate judgement calls. If the checker has to decide whether something is 'good enough', the checklist has failed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your checklist is either too vague, too short, or lacks the binary pass-fail structure Rachel requires.",
          observation:
            "If your checklist says 'check the data is correct' without specifying how to verify or what constitutes a pass, it is a reminder, not a quality process.",
          coachingTip:
            "For each check, answer: What exactly should the person look for? What does good look like? What does bad look like? Those three answers are the check, the pass, and the fail.",
          styleContext:
            "Analytical communicators reject checklists that rely on the checker's judgement. The whole point of a checklist is to remove variability from the quality process.",
        },
      },
    },
  },

  // Scenario 371 - Owen Grant, feedback, intermediate
  {
    id: "scenario-371",
    title: "The Methodology Disagreement",
    context:
      "Owen has reviewed a colleague's research methodology and believes the sample size is too small to support the conclusions drawn. He needs to give feedback that challenges the methodology without dismissing the work.",
    chooseContext:
      "Owen has explained the statistical limitation and the colleague has responded that the client only gave them three weeks to complete the study, making a larger sample impossible within the constraints.",
    rewriteContext:
      "Owen has asked you to draft a methodology note that can be appended to the report, transparently stating the limitations of the sample size and how they should affect the reader's interpretation of the findings.",
    characterId: "owen-grant",
    dialogue:
      "The research itself is well-designed and the questions are strong. My concern is the sample size. With 47 respondents across six segments, you are averaging fewer than 8 per segment. That is below the threshold where you can draw segment-level conclusions with any confidence. The findings are indicative, not conclusive - and the report needs to reflect that distinction.",
    chooseDialogue:
      "I understand the time constraint, and I am not criticising the decision you made given those limits. But the report as written presents the findings as conclusive when the data supports something weaker. The fix is not more research - it is accurate labelling. Call the findings 'indicative' rather than 'conclusive' and add a methodology note explaining the sample limitation. That protects both you and the client.",
    rewriteDialogue:
      "Write a methodology note that is transparent without being apologetic. State the sample size, explain why it limits segment-level conclusions, and recommend how the reader should interpret the findings. If the client reads this note, they should trust the research more, not less, because we were honest about its boundaries.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Owen has praised the research design while flagging that the sample size does not support segment-level conclusions, and proposed relabelling findings as 'indicative' rather than 'conclusive'. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen separates the quality of the research design from the validity of the conclusions, identifies a specific statistical threshold, and proposes a precise labelling change. This is analytical feedback - rigorous, fair, and evidence-based.",
          observation:
            "Notice how Owen does not say 'the research is wrong'. He says the conclusions exceed what the data supports. Analytical communicators distinguish between bad work and over-interpreted good work.",
          coachingTip:
            "When someone praises the methodology while challenging the interpretation, they are being analytical. They respect the work but insist on honest representation of what the data actually shows.",
          styleContext:
            "Analytical communicators believe that the most damaging thing a researcher can do is overclaim. A well-designed study with honest limitations is more valuable than a study that pretends certainty where none exists.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is clear and decisive about the change needed, which can look direct. But the specificity of the statistical reasoning and the focus on accurate labelling mark this as analytical.",
          observation:
            "A direct communicator would say 'tone down the conclusions'. Owen explains exactly why the conclusions need toning down, citing the statistical threshold that the sample fails to meet.",
          coachingTip:
            "If someone explains the methodology behind their feedback, they are being analytical. If they simply state that the output needs to change, they are being direct.",
          styleContext:
            "Analytical communicators show their working in feedback because they want the recipient to understand the reasoning, not just comply with the instruction.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on how the colleague feels about the feedback, offered emotional reassurance, or softened the critique. The feedback is entirely about methodological accuracy.",
          observation:
            "There is no encouragement, no praise beyond acknowledging the research design, and no attempt to make the colleague feel good about the work. Owen is focused on accuracy.",
          coachingTip:
            "Ask whether the feedback is designed to protect the person's feelings or protect the quality of the output. Owen is protecting the output.",
          styleContext:
            "Analytical communicators express care through rigour. Their feedback protects the colleague's professional reputation by ensuring the work is defensible.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has suggested relabelling findings as 'indicative' and adding a methodology note about sample limitations. How do you respond?",
      options: [
        {
          id: "s371-opt-a",
          text: "You are right about the sample threshold. I will relabel the segment findings as indicative and draft a methodology note that explains the limitation. Can you review the note before I submit to make sure the statistical framing is accurate?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the statistical logic, committed to the specific changes, and asked for a review to ensure accuracy. This engages with Owen's analytical approach and shows you take methodological integrity seriously.",
        },
        {
          id: "s371-opt-b",
          text: "I see the point about segment-level conclusions. But the overall findings across all 47 respondents are still valid, right? Could we keep those as conclusive and only caveat the segment breakdowns?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable distinction, and Owen would likely agree. But it shifts the conversation to a negotiation about which findings survive rather than fully addressing the limitation he has raised.",
        },
        {
          id: "s371-opt-c",
          text: "The client is expecting conclusive findings and if we caveat everything, they will question the value of the entire study. I think we should present the data confidently and let them draw their own conclusions.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises client expectation over methodological honesty. An analytical communicator will view this as a professional integrity issue - presenting indicative findings as conclusive is misleading.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a methodology note explaining the sample size limitation and how the reader should interpret the findings. Write it in an analytical style - transparent, not apologetic.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "METHODOLOGY NOTE\n\nThis study surveyed 47 respondents across six market segments, with an average of 7.8 respondents per segment (range: 5 to 12).\n\nImplications for interpretation:\n\nAt the aggregate level (all 47 respondents), the findings provide a reliable indication of overall trends and attitudes within the target population. The margin of error at this sample size is approximately plus or minus 14% at a 95% confidence level.\n\nAt the segment level, the sub-sample sizes (ranging from 5 to 12 per segment) are below the generally accepted minimum of 30 for quantitative comparison between groups. Segment-level findings should therefore be treated as indicative rather than conclusive. They suggest patterns that warrant further investigation but should not be used as the sole basis for segment-specific strategic decisions.\n\nRecommendation: Where segment-level findings inform decision-making, we recommend validating them through a targeted follow-up survey with a minimum of 30 respondents per segment of interest, or through qualitative interviews to confirm the patterns observed.\n\nThis note is included in the interest of transparency and to support informed use of the research findings.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your note is transparent, specific, and educational without being apologetic. A client reading this would trust the research more because the limitations are honestly stated and contextualised.",
          observation:
            "You included a recommendation for validating the segment findings, which turns the limitation into a constructive next step rather than just a caveat.",
          coachingTip:
            "When writing methodology notes for analytical communicators, always include a recommendation for how to address the limitation. It transforms a weakness into a roadmap for further work.",
          styleContext:
            "Analytical communicators believe that honest limitation statements increase credibility. A researcher who names the boundaries of their data is more trustworthy than one who hides them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good transparency, but check whether your note specifies the exact sample sizes and the threshold they fall below. If the numbers are missing, the reader cannot independently assess the limitation.",
          observation:
            "If your note says 'the sample may be too small for some analyses' without specifying which analyses or what 'too small' means, it is a warning, not a methodology note.",
          coachingTip:
            "Include the numbers. How many respondents? How many per segment? What is the accepted minimum? Those three figures allow the reader to make their own judgement.",
          styleContext:
            "Analytical communicators provide enough information for the reader to form their own opinion. Withholding the numbers forces the reader to trust the author's judgement rather than the data.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note is either too brief, too apologetic, or fails to state the specific limitation clearly enough for the reader to adjust their interpretation.",
          observation:
            "If your note says 'we acknowledge limitations in the data' without specifying what they are, it fails the transparency test.",
          coachingTip:
            "Start with the numbers, then explain what they mean for interpretation. 'Forty-seven respondents across six segments means an average of 7.8 per segment, which is below the threshold of 30 for segment comparison.' That is the foundation of a good methodology note.",
          styleContext:
            "Analytical communicators see methodology notes as acts of professional integrity. A vague note is worse than no note because it acknowledges a problem without helping the reader understand it.",
        },
      },
    },
  },

  // Scenario 372 - Fiona Banks, feedback, advanced
  {
    id: "scenario-372",
    title: "The Strategic Plan Peer Review",
    context:
      "Fiona has been asked to peer review a colleague's strategic plan before it is presented to the board. The plan has a compelling narrative but the financial projections contain assumptions that Fiona believes are unrealistic.",
    chooseContext:
      "Fiona has walked through three assumptions she considers unrealistic and the colleague has responded that the projections reflect the board's growth expectations and that challenging them would be politically unwise.",
    rewriteContext:
      "Fiona has asked you to draft a peer review summary that is fair, specific, and gives the colleague a way to strengthen the plan without feeling that their work has been dismantled.",
    characterId: "fiona-banks",
    dialogue:
      "The narrative is strong and the strategic direction is well-argued. Where I have concerns is the financial model. Assumption one: you have projected a 25% year-on-year revenue increase, but the market you are entering has grown at an average of 9% over the past five years. Assumption two: your cost model assumes no additional headcount until year three, despite projecting a 300% increase in customer volume. Assumption three: your churn rate of 2% is half the industry average of 4.1%. Each of these needs either a stronger justification or a revision.",
    chooseDialogue:
      "I hear you on the political dynamics, and I am not unsympathetic. But consider the alternative: the board approves the plan based on these projections, and in year one, the numbers do not materialise. At that point, the political cost is significantly higher than the discomfort of presenting honest assumptions today. I am trying to protect the plan, not undermine it.",
    rewriteDialogue:
      "Write the peer review summary. For each assumption I flagged, state the issue, the evidence that supports my concern, and a constructive suggestion for how to address it. The tone should be collegial but the content should be rigorous. This is not a courtesy review - it is a quality gate.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has praised the strategic narrative while flagging three specific financial assumptions with market data showing they are unrealistic, and argued that honest projections protect the plan's credibility better than optimistic ones. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona separates the quality of the narrative from the validity of the financial assumptions, provides market data to support each concern, and frames the feedback as protective rather than critical. This is analytical peer review at its most sophisticated.",
          observation:
            "Notice how Fiona counters the political argument with a risk analysis: the cost of presenting honest assumptions today is lower than the cost of missed targets in year one. She uses the colleague's own logic against them.",
          coachingTip:
            "When someone challenges assumptions by providing external evidence and reframes the feedback as protecting the plan's survival, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators see peer review as a quality protection service, not a critical exercise. They believe that the most helpful thing you can do for a colleague is find the weaknesses before the board does.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive about the need for change, which can look direct. But the depth of the evidence, the comparison to market benchmarks, and the structured presentation of each concern mark this as analytical.",
          observation:
            "A direct communicator would say 'the projections are unrealistic, fix them'. Fiona says 'here is the market data that shows why each assumption needs either justification or revision'.",
          coachingTip:
            "If someone provides external benchmarks to challenge internal assumptions, they are being analytical. The feedback is about data quality, not about the colleague's judgement.",
          styleContext:
            "Analytical communicators in peer review separate the person from the data. Challenging an assumption is not the same as challenging the person who made it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on how the colleague feels about the feedback or softened the critique to protect their confidence. The review is entirely about the quality of the assumptions.",
          observation:
            "There is no reassurance about the colleague's abilities, no encouragement to keep going, and no attempt to make the feedback feel comfortable. Fiona is rigorous, not gentle.",
          coachingTip:
            "Ask whether the reviewer is trying to make the colleague feel good or make the plan survive scrutiny. Fiona is protecting the plan.",
          styleContext:
            "Analytical communicators in peer review believe that the highest form of respect is honest, evidence-based feedback. Softening the message to spare feelings would be a disservice to the colleague.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has argued that presenting honest assumptions today carries less political risk than missing targets in year one. How do you respond?",
      options: [
        {
          id: "s372-opt-a",
          text: "You have a point about the year-one risk. Let me revise the three assumptions. I will use the market data you cited to build a more conservative base case and present the original projections as an upside scenario. That way the board sees both possibilities.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the evidence, proposed a specific revision approach, and found a way to present both cases. This engages with Fiona's analytical framework while preserving the ambitious vision.",
        },
        {
          id: "s372-opt-b",
          text: "I take the point. Could you help me build a sensitivity analysis showing how the plan performs under different assumption sets? That might give the board the full picture without me having to abandon the growth projections entirely.",
          score: 5,
          result: "partial",
          explanation:
            "A constructive response, but asking Fiona to do the work shifts the burden. She would prefer you build the sensitivity analysis and bring it to her for review.",
        },
        {
          id: "s372-opt-c",
          text: "The board wants to see ambition, not caution. If I present conservative projections, they will think I do not believe in the strategy. Sometimes you have to sell the vision and worry about the details later.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the argument Fiona has already dismantled. Prioritising the board's appetite for ambition over the accuracy of the financial model is the risk she is trying to prevent.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a peer review summary covering the three flagged assumptions with evidence, concerns, and constructive suggestions. Write it in an analytical style - collegial but rigorous.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "PEER REVIEW SUMMARY - Strategic Plan FY27-FY29\n\nReviewer: Fiona Banks\nDate: 14 March 2026\n\nOverall assessment: The strategic narrative is compelling and the market opportunity is well-articulated. The three concerns below relate to financial assumptions that may not withstand board scrutiny. Addressing them will strengthen the plan's credibility.\n\nASSUMPTION 1: Revenue growth rate (25% year-on-year)\nConcern: The target market has grown at an average of 9% per annum over the past five years (source: Industry Report 2025, p.14). A 25% growth projection implies capturing significant market share from established competitors in a market growing at less than half that rate.\nSuggestion: Present the 9% market growth rate as the base case and model the 25% projection as an upside scenario contingent on three named competitive advantages. This gives the board an honest baseline while preserving the growth ambition.\n\nASSUMPTION 2: Headcount requirements (no additions until year three)\nConcern: The plan projects customer volume increasing from 500 to 2,000 by end of year two - a 300% increase - without any additional headcount. Industry benchmarks suggest a customer-to-staff ratio of 150:1 for this service category (source: Operational Benchmarking Study 2024). At 2,000 customers, this implies a team of 13, versus the current team of 5.\nSuggestion: Model headcount requirements using the industry ratio and include the associated costs in the financial projection. If technology or automation reduces the ratio, state the assumption explicitly and provide evidence from comparable deployments.\n\nASSUMPTION 3: Customer churn rate (2%)\nConcern: The industry average churn rate for comparable subscription services is 4.1% (source: SaaS Metrics Report 2025). A 2% assumption has no stated justification and represents a best-in-class performance that typically requires significant investment in customer success infrastructure.\nSuggestion: Use 4.1% as the base case and model 2% as a target achieved through a specified retention programme with costed customer success investment.\n\nCONCLUSION\nThe plan's strategy is sound. Adjusting these three assumptions will not weaken the case - it will make it resilient to challenge. A board that approves a plan with honest assumptions is more likely to support it through difficult quarters than one that approved projections that do not materialise.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your review is specific, evidenced, and constructive. Each concern is paired with external data and a practical suggestion that strengthens the plan rather than attacking it. Fiona would submit this knowing it exemplifies rigorous, collegial peer review.",
          observation:
            "Your conclusion reframes the whole review as protective rather than critical. The final sentence - about boards supporting honest plans through difficult quarters - is a powerful argument for transparency.",
          coachingTip:
            "When writing peer reviews for analytical communicators, always close by explaining why the feedback serves the plan's success. This prevents the colleague from reading the review as an attack.",
          styleContext:
            "Analytical communicators design peer reviews that make the recipient want to revise, not retreat. The tone is collegial because the goal is improvement, not judgement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each concern includes external evidence. If you have flagged an assumption as unrealistic without citing a benchmark or source, it is opinion, not analysis.",
          observation:
            "If your suggestions say 'consider revising the growth rate' without proposing a specific alternative or methodology, they are too vague to be actionable.",
          coachingTip:
            "For each concern, provide three things: what the plan assumes, what the evidence shows, and what you suggest instead. That trio makes every piece of feedback constructive.",
          styleContext:
            "Analytical communicators expect peer reviews to be as rigorous as the work being reviewed. Vague feedback in a peer review undermines the reviewer's credibility.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your review is either too general, too harsh, or lacks the evidence needed to support the concerns raised.",
          observation:
            "If your review says 'the financial projections seem optimistic' without specifying which projections, why they are optimistic, and what alternative is suggested, it is not a useful peer review.",
          coachingTip:
            "Start with the specific number in the plan. Then state the relevant benchmark. Then propose a revision. That three-step structure turns a concern into a constructive recommendation.",
          styleContext:
            "Analytical communicators will not submit peer reviews that lack evidence. Unsupported opinions in a review damage the reviewer's reputation more than they help the plan.",
        },
      },
    },
  },
];
