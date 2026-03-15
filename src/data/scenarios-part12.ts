import { Scenario } from "@/types";

export const SCENARIOS_PART12: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (133-135)
  // ============================================

  // Scenario 133 - Jordan Cole, negotiation, foundation
  {
    id: "scenario-133",
    title: "The Lease Renegotiation",
    context:
      "You are meeting with Jordan to renegotiate the lease on your company's main office space. The landlord has proposed a 20% rent increase and Jordan wants to push back hard before the renewal deadline.",
    chooseContext:
      "Jordan has reviewed the landlord's counter-offer and is not satisfied. She believes you can secure better terms by threatening to relocate and wants to escalate the pressure.",
    rewriteContext:
      "Jordan has reached a verbal agreement with the landlord and wants you to draft a summary of the new lease terms to send to the property management company today.",
    characterId: "jordan-cole",
    dialogue:
      "Twenty per cent is a non-starter. I have two alternative sites lined up and both are cheaper. Tell the landlord we will walk unless they hold the rate flat. I want their answer by Friday.",
    chooseDialogue:
      "Their counter-offer is still too high. Tell them we are ready to sign with the Docklands site. If they want to keep us, they need to match that rate or come within 5%. No more back and forth.",
    rewriteDialogue:
      "We have a deal. Write up the terms: rent, break clause, service charge cap, and the fit-out contribution. One page. Send it before close of business.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has rejected the landlord's rent increase, named alternative sites, and set a Friday deadline for a response. Which communication style is she displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with a flat rejection, cites her leverage, and sets a hard deadline. This is classic direct negotiation: clear position, explicit consequences, fast timeline.",
          observation:
            "Notice how Jordan frames the negotiation as a binary choice for the landlord: match the rate or lose the tenant. There is no invitation to explore creative solutions together.",
          coachingTip:
            "When someone opens with 'non-starter' and backs it up with alternatives and a deadline, they are signalling a direct style. Match their pace and precision.",
          styleContext:
            "Direct communicators in lease negotiations treat property decisions like any other commercial deal. They value speed and leverage over relationship-building with landlords.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does reference specific facts like alternative sites, which can seem analytical. However, she uses those facts as leverage to force a quick decision, not as the basis for careful comparison.",
          observation:
            "An analytical communicator would want to compare the total cost of each site, review the lease terms in detail, and build a spreadsheet before making any demands.",
          coachingTip:
            "Direct communicators use data as a weapon to accelerate decisions. Analytical communicators use data as a foundation for thorough evaluation. Notice which purpose the facts serve.",
          styleContext:
            "Both direct and analytical styles value evidence, but direct communicators deploy it to close conversations while analytical communicators use it to open deeper ones.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan shows no interest in maintaining a warm relationship with the landlord or exploring how everyone might benefit. Her focus is entirely on securing the best commercial outcome quickly.",
          observation:
            "There is no collaborative language, no concern for the landlord's perspective, and no desire to take time. Jordan wants a result, not a relationship.",
          coachingTip:
            "Ask yourself: is this person focused on results, relationships, ideas, or process? Jordan's demand for a fast, favourable outcome points clearly to direct.",
          styleContext:
            "Direct communicators can appear aggressive in property negotiations, but they often respect landlords who respond with equal clarity and commercial confidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants you to tell the landlord you are ready to sign elsewhere unless they match the competing rate. How do you respond?",
      options: [
        {
          id: "s133-opt-a",
          text: "I will call the landlord's agent now and give them until Wednesday to match the Docklands rate. If they cannot get within 5%, I will confirm the alternative site and start the move plan.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Jordan's directness perfectly. You have set a specific deadline, named the condition, and outlined the consequence. Direct communicators respect decisive action.",
        },
        {
          id: "s133-opt-b",
          text: "I think we should keep our options open. Maybe we could ask the landlord to propose some creative alternatives, like a phased increase or a longer lease with a discount.",
          score: 5,
          result: "partial",
          explanation:
            "This introduces flexibility, which Jordan has not asked for. She wants pressure applied, not options explored. A direct communicator sees this as diluting the negotiation position.",
        },
        {
          id: "s133-opt-c",
          text: "We have been in this building for a long time and the landlord has been good to us. I would hate to damage that relationship over a few percentage points. Could we find a middle ground that keeps everyone happy?",
          score: 0,
          result: "weak",
          explanation:
            "This is relationship-focused and avoids the commercial pressure Jordan wants applied. A direct communicator will see this as weakness and may lose confidence in your ability to negotiate on their behalf.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants the agreed lease terms written up on one page: rent, break clause, service charge cap, and fit-out contribution. Write the summary in a direct style.",
      targetTraits: ["concise", "outcome-led", "specific-numbers", "no-hedging"],
      exampleStrongResponse:
        "Lease Renewal Summary\n\nProperty: Unit 4, Riverside Business Park\nTenant: Orion Consulting Ltd\nAnnual rent: GBP 185,000 (held flat, no increase)\nLease term: 5 years from 1 May 2026\nBreak clause: Tenant break at month 36 with 6 months' notice\nService charge cap: GBP 28,000 per annum\nFit-out contribution: GBP 15,000 (landlord funded)\n\nPlease confirm acceptance by return.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is clean, specific, and contains only the terms that matter. Jordan will appreciate the lack of filler.",
          observation:
            "You led with the key commercial terms and kept the format scannable. That is exactly what a direct communicator wants.",
          coachingTip:
            "When writing for a direct communicator, every word must earn its place. If it does not add factual value, cut it.",
          styleContext:
            "Direct communicators judge written communication by how quickly they can extract the key information. Lists and tables beat paragraphs every time.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have included the right information but wrapped it in too much narrative. Jordan asked for terms, not context.",
          observation:
            "Look at where you have added background or qualifiers. A direct communicator would see those as padding.",
          coachingTip:
            "Try reducing your response to just the data points. If it reads like a checklist, you are heading in the right direction.",
          styleContext:
            "In negotiations with direct communicators, brevity signals competence. Lengthy explanations can suggest you are unsure of the terms.",
        },
        weak: {
          result: "weak",
          explanation:
            "This response includes too much narrative and not enough hard detail. Jordan wants numbers, dates, and conditions, not a covering letter.",
          observation:
            "Your response reads more like a relationship-maintenance email than a commercial summary. Direct communicators want structure, not sentiment.",
          coachingTip:
            "Go back to Jordan's brief: rent, break clause, service charge cap, fit-out contribution. Use those as your headings and strip everything else away.",
          styleContext:
            "Direct communicators measure trust by precision. A tight, factual summary builds more credibility than a warm, wordy message.",
        },
      },
    },
  },

  // Scenario 134 - Sam Hartley, negotiation, intermediate
  {
    id: "scenario-134",
    title: "The Merger Timeline",
    context:
      "Sam is leading the integration planning for a recent merger. The board wants a 90-day integration but Sam believes certain workstreams can be completed faster. He has called a meeting to push for an accelerated schedule.",
    chooseContext:
      "Sam has heard the integration team's concerns about the accelerated timeline. He is not persuaded and wants commitments, not caveats.",
    rewriteContext:
      "Sam has agreed to a phased approach but wants you to draft a one-page integration timeline that the board can approve immediately.",
    characterId: "sam-hartley",
    dialogue:
      "Ninety days is too slow. IT migration can be done in 45, finance in 60. I do not want to hear about risks until someone shows me why a faster timeline is impossible. Give me your committed dates, not your comfortable ones.",
    chooseDialogue:
      "I have heard the concerns. Now I want solutions. Tell me what you need to hit the accelerated dates. Resources, approvals, whatever. But 'it is too fast' is not an answer I will accept.",
    rewriteDialogue:
      "Good. Write the phased plan: what completes at 30 days, 60 days, and 90 days. Name the owner for each workstream. The board meets Thursday, so I need it tomorrow morning.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has rejected the proposed 90-day integration timeline, pushed for faster committed dates, and dismissed risk concerns. Which communication style is he displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam challenges the timeline, rejects cautious estimates, and demands committed dates. He is driving for speed and accountability, which is hallmark direct behaviour in a negotiation.",
          observation:
            "Notice Sam's distinction between 'committed dates' and 'comfortable ones'. Direct communicators push people to stretch beyond safe estimates.",
          coachingTip:
            "When someone rejects cautious timelines and demands commitments rather than estimates, they are operating in a direct style. Respond with specific, confident dates.",
          styleContext:
            "Direct communicators view merger integrations as execution challenges, not planning exercises. They want pace and ownership, not detailed risk registers.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference specific timeframes, which can look analytical. However, he is not interested in detailed analysis; he is using those numbers to force a faster commitment.",
          observation:
            "An analytical communicator would ask for the methodology behind the 90-day estimate, not simply reject it. Sam has already decided it is too slow.",
          coachingTip:
            "Direct communicators set the pace and expect others to keep up. Analytical communicators set the standard of evidence and expect others to meet it.",
          styleContext:
            "The difference is in the demand: direct communicators want committed timelines, while analytical communicators want validated ones.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam is not interested in how the team feels about the timeline or in building consensus. His focus is on accelerating delivery, not on maintaining harmony.",
          observation:
            "There is no collaborative language and no acknowledgement of the team's workload or concerns. Sam wants results, not reassurance.",
          coachingTip:
            "Consider whether the speaker is focused on outcomes, ideas, people, or process. Sam's relentless drive for faster delivery clearly signals a direct style.",
          styleContext:
            "Direct communicators in merger negotiations prioritise momentum over comfort. They believe speed reduces uncertainty more effectively than caution.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants solutions, not concerns, and will not accept 'it is too fast' as an answer. How do you respond?",
      options: [
        {
          id: "s134-opt-a",
          text: "I can hit 45 days on IT migration if I get two contractors approved by Monday and access to the legacy systems team. Finance can do 60 days if we bring the audit forward. Here is what I need signed off today.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Sam's direct style perfectly. You have accepted the challenge, named your conditions, and specified what you need. Direct communicators respect people who commit and state their requirements clearly.",
        },
        {
          id: "s134-opt-b",
          text: "I understand the urgency and I will do my best. Let me take a closer look at the plan and come back to you with some options by the end of the week.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague for Sam. 'Do my best' and 'end of the week' are hedges. He wants commitments and conditions now, not promises to think about it later.",
        },
        {
          id: "s134-opt-c",
          text: "I think we need to be careful here. Rushing the integration could damage morale and lead to mistakes. Can we bring the wider team together to discuss what is realistic?",
          score: 0,
          result: "weak",
          explanation:
            "Sam has explicitly said he does not want to hear about risks or have a group discussion. This response ignores his stated expectations and will frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a one-page phased integration plan showing what completes at 30, 60, and 90 days, with named owners. Write the plan in a direct style for board approval.",
      targetTraits: ["concise", "structured", "action-oriented", "specific-names"],
      exampleStrongResponse:
        "Merger Integration Plan, Phased Timeline\n\n30 days (complete by 15 April 2026):\n- IT systems migration: Lee Park\n- Payroll consolidation: Sarah Dunn\n- Brand alignment communications: Raj Patel\n\n60 days (complete by 15 May 2026):\n- Finance and reporting merge: Claire Hobbs\n- Customer database integration: Lee Park\n- Supplier contract review: Jordan Cole\n\n90 days (complete by 14 June 2026):\n- Full operational alignment: Sam Hartley\n- Post-merger performance review: Claire Hobbs\n- Staff restructure finalised: HR Director\n\nBoard approval requested: Thursday 13 March 2026.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your plan is structured in clear phases with named owners and specific dates. Sam will be able to present this to the board without any editing.",
          observation:
            "You kept each line to one deliverable and one owner. That level of clarity is exactly what direct communicators value in planning documents.",
          coachingTip:
            "When writing for a direct communicator, structure is everything. Use phases, milestones, and names. Avoid narratives, caveats, and explanatory paragraphs.",
          styleContext:
            "Direct communicators use documents as decision-making tools, not discussion starters. A plan they can approve on sight is the goal.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your plan includes the right phases but lacks specificity. Sam wants named owners and concrete dates, not team names and approximate windows.",
          observation:
            "Look at where you have used phrases like 'the IT team' instead of a named individual, or 'around mid-April' instead of a specific date.",
          coachingTip:
            "Replace every team reference with a person's name and every time window with an exact date. That is what turns a draft into a board-ready plan.",
          styleContext:
            "Direct communicators equate vague ownership with no ownership. Naming individuals creates the accountability they need.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads more like a discussion document than an action plan. Sam needs something the board can approve in five minutes, not something that opens further debate.",
          observation:
            "Your response includes too much context and not enough commitment. Sam did not ask for background; he asked for a timeline.",
          coachingTip:
            "Start again with three headings: 30 days, 60 days, 90 days. Under each, list the deliverable and the owner. Nothing else.",
          styleContext:
            "Direct communicators in integration scenarios want execution plans, not strategy documents. Keep it tight and actionable.",
        },
      },
    },
  },

  // Scenario 135 - Alex Tran, negotiation, advanced
  {
    id: "scenario-135",
    title: "The Payment Dispute",
    context:
      "Alex has discovered that a long-standing supplier has overcharged your company by GBP 47,000 over the past two quarters. He has called an urgent meeting with the supplier's account director to resolve the dispute and recover the funds.",
    chooseContext:
      "The supplier's account director has offered a credit note for half the amount and blamed a billing system error. Alex is not satisfied and is pushing for full reimbursement plus a contractual safeguard.",
    rewriteContext:
      "Alex has secured agreement for a full refund and a revised billing process. He wants you to draft the formal resolution letter to the supplier's finance director.",
    characterId: "alex-tran",
    dialogue:
      "You have overbilled us by forty-seven thousand pounds. I have the invoices, the contract rates, and the discrepancy breakdown. I want a full refund processed within 14 days and a written explanation of how this happened. This is not a discussion point; it is a correction.",
    chooseDialogue:
      "Half is not acceptable. The error is yours, the overcharge is documented, and the contract is clear. I want the full amount credited within 14 days, plus a quarterly audit clause added to the contract. If that does not work, we will be reviewing the entire supplier relationship.",
    rewriteDialogue:
      "Good. Draft the resolution letter to their finance director. State the overcharge amount, the agreed refund, the new audit clause, and the deadline. Keep it factual and firm. No diplomatic softening.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has presented documented evidence of a GBP 47,000 overcharge and demanded a full refund within 14 days, calling it 'a correction, not a discussion point'. Which communication style is he displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex has prepared his evidence but uses it to demand immediate corrective action, not to open a negotiation. The phrase 'this is not a discussion point; it is a correction' is quintessentially direct.",
          observation:
            "Notice how Alex frames the meeting as a demand for resolution, not an investigation. He has already done the analysis and now wants the outcome.",
          coachingTip:
            "When someone presents evidence alongside an ultimatum and a deadline, they are using an analytical foundation to drive a direct outcome. The dominant style is direct.",
          styleContext:
            "Advanced direct communicators often prepare thoroughly before a confrontation, but they lead with the demand, not the data. The evidence backs the position; it does not replace it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex has clearly done detailed analysis, which can look analytical. However, he is not inviting the supplier to review the data together; he is presenting conclusions and demanding action.",
          observation:
            "An analytical communicator would lay out the discrepancies and ask the supplier to verify them. Alex has already verified everything and wants a refund, not a review.",
          coachingTip:
            "Look at how the evidence is being used. If it supports a demand, the style is direct. If it supports an inquiry, the style is analytical.",
          styleContext:
            "The distinction between prepared-direct and analytical is about purpose. Direct communicators prepare to win. Analytical communicators prepare to be certain.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex shows no interest in preserving the relationship or exploring how the supplier feels about the error. His language is confrontational and outcome-focused.",
          observation:
            "There is no empathy, no collaborative language, and no willingness to compromise. Alex wants a full refund and a systemic fix, not a conversation.",
          coachingTip:
            "Consider whether the speaker is prioritising the outcome or the relationship. Alex's sole focus on recovery and correction signals a direct style.",
          styleContext:
            "Direct communicators in dispute situations view the facts as settled. They are not negotiating whether there is a problem; they are dictating the solution.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The supplier has offered half the refund and blamed a system error. Alex wants the full amount, a quarterly audit clause, and has threatened to review the entire relationship. How do you respond?",
      options: [
        {
          id: "s135-opt-a",
          text: "Agreed. I will send a formal letter today requiring the full GBP 47,000 credited within 14 days and a quarterly billing audit in the next contract amendment. Failure to comply triggers a formal supplier review.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Alex's directness perfectly. You have committed to immediate action, specified the exact terms, and included the consequence. Direct communicators want execution, not deliberation.",
        },
        {
          id: "s135-opt-b",
          text: "The half-refund offer is not ideal but it might be worth considering as a compromise. We could push for the audit clause separately and avoid damaging the relationship.",
          score: 5,
          result: "partial",
          explanation:
            "Alex has already rejected the half-refund offer. Suggesting he consider it undermines his position. A direct communicator wants you to back the demand, not soften it.",
        },
        {
          id: "s135-opt-c",
          text: "I think we should be careful about threatening the supplier relationship. They have been reliable partners for years and everyone makes mistakes. Perhaps we could arrange a joint review meeting to understand what went wrong.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises the relationship over the commercial outcome, which directly contradicts Alex's stated position. He views this as a factual error requiring correction, not a relationship issue requiring diplomacy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants a formal resolution letter to the supplier's finance director. It must state the overcharge amount, the agreed refund, the new audit clause, and the deadline. Write it in a direct, factual style with no diplomatic softening.",
      targetTraits: ["formal-but-direct", "specific-numbers", "no-hedging", "consequence-driven"],
      exampleStrongResponse:
        "Dear Ms Thornton,\n\nFollowing our meeting on 10 March 2026, this letter confirms the resolution of the billing discrepancy identified on your account.\n\nOvercharge: GBP 47,000 across invoices INV-4417 to INV-4438 (Q3 and Q4 2025)\nAgreed refund: GBP 47,000 to be credited within 14 calendar days of this letter\nContract amendment: A quarterly billing audit clause will be added to the service agreement, effective immediately\n\nPlease confirm receipt and processing of the refund by 24 March 2026. If the refund is not received by that date, we will initiate a formal review of the supplier relationship.\n\nYours sincerely,",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your letter is precise, factual, and includes a clear consequence. Alex will approve this without edits because it says exactly what needs to be said and nothing more.",
          observation:
            "You included specific invoice references, exact amounts, and a firm deadline. That level of precision backed by directness is exactly what this situation demands.",
          coachingTip:
            "In formal dispute correspondence for a direct communicator, lead with the facts, state the remedy, and include the consequence. Avoid phrases like 'we hope' or 'we would appreciate'.",
          styleContext:
            "Direct communicators want dispute letters that could serve as evidence in a formal review. Clarity and precision are not just stylistic choices; they are strategic ones.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your letter covers the right ground but includes too much softening language. Phrases like 'we would appreciate' or 'at your earliest convenience' weaken the position Alex has established.",
          observation:
            "Check for any language that gives the supplier room to delay or reinterpret the terms. Alex wants certainty, not politeness.",
          coachingTip:
            "Replace 'we would appreciate' with 'we require'. Replace 'at your earliest convenience' with a specific date. Direct language in formal letters signals confidence.",
          styleContext:
            "Direct communicators view diplomatic language in dispute letters as a sign of weakness. Firm, factual language commands more respect.",
        },
        weak: {
          result: "weak",
          explanation:
            "This letter is too conciliatory for the situation Alex has described. He specifically asked for no diplomatic softening, and your response reads more like a relationship-maintenance letter than a demand for correction.",
          observation:
            "Your response prioritises the ongoing relationship over the immediate resolution. Alex has already decided this is a correction, not a negotiation.",
          coachingTip:
            "Rewrite with this structure: state the problem, state the agreed remedy, state the deadline, state the consequence. Remove everything else.",
          styleContext:
            "In dispute resolution, direct communicators want letters that leave no room for interpretation. If the supplier could read it as optional, it is too soft.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (136-138)
  // ============================================

  // Scenario 136 - Priya Sharma, negotiation, foundation
  {
    id: "scenario-136",
    title: "The Flexible Working Deal",
    context:
      "You are working with Priya to negotiate flexible working arrangements for her team. Priya has been championing remote and hybrid options and wants to present a compelling case to senior leadership.",
    chooseContext:
      "Priya has just heard that HR is hesitant about approving full flexibility. She is rallying support and wants you to help her build momentum before the next leadership meeting.",
    rewriteContext:
      "Priya has secured provisional approval for a pilot programme and wants you to write an announcement to the team that captures the excitement and energy of the win.",
    characterId: "priya-sharma",
    dialogue:
      "This is going to be transformational for our people. Imagine the boost in morale, the creativity that comes from trusting your team to work where they are most productive. I have already had half the department message me saying this would change their lives. We have to make this happen.",
    chooseDialogue:
      "HR are being so cautious. They are missing the bigger picture. This is not just about logistics; it is about showing our people that we trust them. I want to get the team leaders on board first and build a wave of support that leadership cannot ignore.",
    rewriteDialogue:
      "We did it! The pilot is approved. I want an announcement that makes the team feel like this is a genuine milestone, not just another policy update. Make it warm, make it personal, and make people feel seen.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya is championing flexible working by focusing on morale, trust, and the emotional impact on her team. She cites personal messages from colleagues and speaks with high energy. Which communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with vision, emotion, and enthusiasm. She frames the negotiation as a transformational moment and uses personal stories to build momentum. This is classic expressive communication.",
          observation:
            "Notice how Priya talks about what the change will mean for people's lives, not about the policy mechanics. Expressive communicators sell the vision first and work out the details later.",
          coachingTip:
            "When someone frames a negotiation in terms of excitement, impact, and personal stories, they are signalling an expressive style. Engage with their energy before discussing logistics.",
          styleContext:
            "Expressive communicators negotiate by building enthusiasm and coalition. They believe that if enough people want something passionately, the details will follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators care about people, but the energy is different. Priya is enthusiastic and visionary, not quietly empathetic. She wants to create a movement, not provide comfort.",
          observation:
            "A supportive communicator would focus on individual wellbeing and proceed cautiously. Priya wants to build a wave of momentum and make a bold statement.",
          coachingTip:
            "Expressive communicators are loud advocates. Supportive communicators are quiet allies. The volume and ambition of the message tells you which style you are seeing.",
          styleContext:
            "Expressive communicators use people's feelings as fuel for change. Supportive communicators use people's feelings as a reason for care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not focused on data, process, or quick decisions. Her language is emotional, visionary, and designed to inspire action through enthusiasm.",
          observation:
            "There are no spreadsheets, no ultimatums, and no risk assessments in Priya's approach. She is leading with passion and personal impact.",
          coachingTip:
            "Ask yourself: is this person trying to inspire, inform, comfort, or command? Priya is clearly trying to inspire, which is the hallmark of an expressive style.",
          styleContext:
            "Expressive communicators in negotiations focus on the 'why' and the human impact. They leave the 'how' and 'what' to others, which can frustrate more detail-oriented colleagues.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya is frustrated that HR is being cautious and wants to build a wave of support from team leaders. How do you respond?",
      options: [
        {
          id: "s136-opt-a",
          text: "I love the momentum. Let us organise a session with the team leaders this week where you can share the vision and get their buy-in. The whole department backing this sends a powerful message to leadership.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's expressive style by validating her energy, supporting her coalition-building approach, and helping her amplify the message. Expressive communicators thrive when others match their enthusiasm.",
        },
        {
          id: "s136-opt-b",
          text: "I understand your frustration. Perhaps we could put together a business case with some data on productivity and retention to help persuade HR.",
          score: 5,
          result: "partial",
          explanation:
            "A business case might be useful, but leading with data does not match Priya's energy. She wants to build a movement, not a spreadsheet. Acknowledge the vision before suggesting analytical support.",
        },
        {
          id: "s136-opt-c",
          text: "I think HR have a point. We should be cautious about promising flexibility before we have worked out the practical details. Let us slow down and think this through properly.",
          score: 0,
          result: "weak",
          explanation:
            "Telling an expressive communicator to slow down and be more cautious is the fastest way to lose their engagement. This dismisses Priya's energy and aligns you with the resistance she is fighting.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a team announcement about the flexible working pilot that feels like a milestone, not a policy update. Write it in an expressive style that is warm, personal, and celebratory.",
      targetTraits: ["enthusiastic", "people-focused", "visionary", "celebratory"],
      exampleStrongResponse:
        "Team, I am thrilled to share some brilliant news. Thanks to your voices, your feedback, and your trust in each other, we have secured approval for a flexible working pilot starting next month.\n\nThis is more than a policy change. This is us proving that great work happens when people are trusted and empowered. You asked for flexibility and you made the case for it. Now we get to show everyone what this team can do when we work on our own terms.\n\nMore details coming soon, but for now, take a moment to feel proud. You made this happen.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your announcement captures the energy, warmth, and sense of achievement that Priya wanted. It celebrates the team and frames the pilot as a collective victory.",
          observation:
            "You focused on the people and the meaning of the change, not the mechanics. That is exactly what an expressive communicator wants in a milestone announcement.",
          coachingTip:
            "When writing for an expressive communicator, lead with emotion and vision. The details can come later in a follow-up message.",
          styleContext:
            "Expressive communicators use announcements to build culture and energy. A flat, factual update would feel like a missed opportunity to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your announcement covers the news but lacks the emotional warmth Priya asked for. It reads more like an update than a celebration.",
          observation:
            "Look at where you defaulted to factual language. Priya wanted people to 'feel seen', which means acknowledging their contribution and expressing genuine enthusiasm.",
          coachingTip:
            "Add phrases that celebrate the team's role in making it happen. Use 'we' language and express personal pride. That lifts the tone from informational to inspirational.",
          styleContext:
            "Expressive communicators want announcements that people remember and talk about. If it could be mistaken for an HR circular, it needs more energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a standard HR notice, not the personal, warm announcement Priya requested. It lacks enthusiasm, celebration, and any acknowledgement of the team's efforts.",
          observation:
            "Priya specifically asked you to make people feel seen. A flat, policy-style announcement does the opposite.",
          coachingTip:
            "Rewrite as if you are speaking to the team in person with a smile. Start with how you feel, acknowledge what the team did, and paint a picture of what comes next.",
          styleContext:
            "Expressive communicators view internal communications as an extension of leadership. A lifeless announcement undermines the very energy they are trying to build.",
        },
      },
    },
  },

  // Scenario 137 - Marcus Webb, negotiation, intermediate
  {
    id: "scenario-137",
    title: "The Cross-Border Deal",
    context:
      "Marcus is negotiating a partnership deal with a Japanese firm. He is aware of cultural differences in negotiation style and wants to build strong personal rapport before discussing commercial terms. You are joining the call as his support.",
    chooseContext:
      "The Japanese partners have been polite but reserved, and Marcus feels the relationship needs more warmth before he can push for the terms he wants. He is looking for ways to deepen the personal connection.",
    rewriteContext:
      "Marcus has made good progress in the relationship and is now ready to propose commercial terms. He wants a proposal email that balances warmth and professionalism, respecting the cultural context.",
    characterId: "marcus-webb",
    dialogue:
      "This partnership is going to be something special. I have been reading about their company's founding story and it is incredible. Before we get into numbers, I want to spend time understanding their vision and showing them we genuinely care about their culture and values. That is how you build a deal that lasts.",
    chooseDialogue:
      "They are holding back and I think it is because they do not feel the personal connection yet. I want to share something about our own story, our values, and what this partnership means to us beyond the financials. If we get the relationship right, the terms will follow.",
    rewriteDialogue:
      "I think we are ready to talk terms now. Write the proposal email but keep it warm. Reference the conversations we have had, acknowledge their values, and then lay out the commercial structure. I want them to feel respected, not sold to.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus wants to spend time on the partner's founding story and values before discussing numbers, and believes personal connection is the key to a lasting deal. Which communication style is he displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with vision, story, and relationship-building. He sees the deal as a narrative, not a transaction, and wants the personal connection to drive the commercial outcome. That is classic expressive behaviour.",
          observation:
            "Notice how Marcus talks about the partner's founding story, values, and the emotional meaning of the deal. Expressive communicators frame business relationships as partnerships with shared purpose.",
          coachingTip:
            "When someone prioritises storytelling and personal rapport over immediate commercial discussion, they are signalling an expressive style. Match their energy with genuine interest.",
          styleContext:
            "Expressive communicators believe that the quality of the relationship determines the quality of the deal. They invest in rapport because they see it as the foundation of trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators value relationships, but Marcus is not being quiet or cautious. He is enthusiastic, visionary, and wants to create an emotional connection, not just provide comfort.",
          observation:
            "A supportive communicator would focus on making the partners feel safe and heard. Marcus wants to create excitement and shared purpose.",
          coachingTip:
            "Expressive communicators are proactive relationship-builders. Supportive communicators are responsive carers. Marcus is clearly leading with energy and vision.",
          styleContext:
            "The difference is in the energy. Expressive communicators create connections through enthusiasm and storytelling. Supportive communicators create connections through listening and empathy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not focused on data, deadlines, or getting straight to the point. His priority is the human side of the deal, not the commercial mechanics.",
          observation:
            "There are no numbers, no demands, and no process questions in Marcus's approach. He is focused entirely on building a meaningful connection first.",
          coachingTip:
            "Ask yourself: is this person leading with enthusiasm and vision, or with facts and structure? Marcus is clearly leading with the former.",
          styleContext:
            "Expressive communicators in cross-border negotiations often outperform other styles because their focus on relationship mirrors the values of many international business cultures.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus believes the Japanese partners are holding back because the personal connection is not strong enough. He wants to share your company's story and values. How do you respond?",
      options: [
        {
          id: "s137-opt-a",
          text: "Great idea. I will put together a short narrative about our journey, our values, and what this partnership means to us. We open the next call with that and invite them to share their story. That bridge will make the commercial conversation much more natural.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Marcus's expressive style by embracing the storytelling approach and building on his instinct that personal connection precedes commercial progress. You are amplifying his vision, not redirecting it.",
        },
        {
          id: "s137-opt-b",
          text: "I can see the value in building rapport, but we also need to keep the deal moving. Could we allocate the first 15 minutes to relationship-building and then transition to the terms?",
          score: 5,
          result: "partial",
          explanation:
            "This is practical but feels transactional to an expressive communicator. Marcus wants relationship-building to be organic, not time-boxed. The suggestion has merit but clashes with his style.",
        },
        {
          id: "s137-opt-c",
          text: "I think we should focus on the commercial terms. They are a professional firm and they will respect us more if we come prepared with a strong proposal rather than spending time on personal stories.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Marcus's reading of the situation and dismisses his relationship-first approach. An expressive communicator will feel unheard and may lose trust in your support.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants a proposal email that references your conversations, acknowledges the partner's values, and then lays out commercial terms. Write it in an expressive style that feels respectful and warm, not transactional.",
      targetTraits: ["warm", "story-driven", "relationship-first", "culturally-aware"],
      exampleStrongResponse:
        "Dear Takeshi and team,\n\nThank you for the wonderful conversations over the past few weeks. Learning about Hayashi Industries' founding principles and your commitment to long-term partnerships has only strengthened our belief that our two companies share something special.\n\nWe are genuinely excited about the possibilities ahead. With that in mind, we would like to propose the following framework for our partnership:\n\n- Revenue share: 60/40 in favour of Hayashi for the first 12 months, moving to 50/50 thereafter\n- Joint product development budget: GBP 200,000 for year one\n- Quarterly partnership reviews to ensure alignment on goals and values\n\nWe see this as the start of a long and meaningful collaboration. We would welcome your thoughts and look forward to continuing this conversation.\n\nWith warmest regards,",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email opens with genuine warmth, references the relationship, acknowledges cultural values, and then presents the commercial terms in a respectful, non-aggressive way. Marcus will love this.",
          observation:
            "You balanced the personal and commercial elements beautifully. The terms are clear but wrapped in language that shows respect and genuine enthusiasm for the partnership.",
          coachingTip:
            "When writing for an expressive communicator in a cross-cultural context, always lead with the relationship. The commercial terms should feel like a natural next step, not a hard pivot.",
          styleContext:
            "Expressive communicators want proposals that feel like invitations, not demands. The warmth of the language signals respect and creates space for genuine dialogue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email includes the commercial terms clearly but lacks the warmth and personal touch Marcus requested. It reads more like a standard proposal than a continuation of a meaningful conversation.",
          observation:
            "Look at your opening and closing. Are they warm and personal, or formal and generic? Marcus wanted the email to feel like it came from someone who cares about the relationship.",
          coachingTip:
            "Add specific references to conversations you have had. Mention something the partners shared that resonated with you. That personalisation transforms a proposal into a relationship gesture.",
          styleContext:
            "Expressive communicators judge proposals by how they make the reader feel, not just by what they contain. Warmth and specificity create emotional buy-in.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a standard commercial proposal with no personal warmth or cultural sensitivity. Marcus specifically asked you to make the partners feel respected, not sold to.",
          observation:
            "Your email jumps straight to terms without acknowledging the relationship or the cultural context. That approach could feel abrupt to the Japanese partners and disappoint Marcus.",
          coachingTip:
            "Rewrite with this structure: warm personal opening, acknowledgement of shared values, commercial terms presented as a framework for discussion, warm close. The relationship wraps around the business.",
          styleContext:
            "Expressive communicators in international negotiations view the proposal as a relationship document, not a legal one. If it lacks warmth, it lacks credibility.",
        },
      },
    },
  },

  // Scenario 138 - Nina Okafor, negotiation, advanced
  {
    id: "scenario-138",
    title: "The IP Rights Negotiation",
    context:
      "Nina is negotiating intellectual property rights with a technology partner who co-developed a software platform with your company. Both sides have contributed code and design, and Nina wants a fair arrangement that protects creativity and future innovation.",
    chooseContext:
      "The partner's legal team has proposed a restrictive IP agreement that limits your company's ability to build on the shared codebase. Nina is concerned this will stifle innovation and wants to push back with a more open, collaborative framework.",
    rewriteContext:
      "Nina has reached a breakthrough in the negotiation and wants you to draft a joint statement that celebrates the partnership and outlines the agreed IP framework in a way that inspires both teams.",
    characterId: "nina-okafor",
    dialogue:
      "This platform exists because two teams believed in something bigger than their own interests. If we lock the IP down too tightly, we kill the very creativity that made it possible. I want a framework that protects both sides but, more importantly, one that keeps the door open for what we can build next. Let us think bigger than legal clauses.",
    chooseDialogue:
      "Their legal team is thinking small. They want to carve up the code like it is a pie. But innovation is not a fixed resource; it grows when you share it. I want us to propose an open co-development model where both teams can build on the shared platform freely, with clear attribution and revenue sharing. That is how you turn a contract into a partnership.",
    rewriteDialogue:
      "We have cracked it. Both sides are excited again. Write a joint statement that captures what this partnership is about: shared creativity, mutual trust, and the freedom to innovate together. Include the IP framework but make it feel like a manifesto, not a legal document.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina frames the IP negotiation as a question of protecting creativity and future innovation, urging both sides to 'think bigger than legal clauses'. Which communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina frames a technical IP discussion in terms of creativity, vision, and shared purpose. She sees legal frameworks as secondary to the spirit of collaboration. That is advanced expressive communication in a negotiation setting.",
          observation:
            "Notice how Nina elevates the conversation from legal mechanics to creative philosophy. She wants the IP agreement to reflect values, not just protect interests.",
          coachingTip:
            "When someone reframes a legal or technical negotiation in terms of vision and shared purpose, they are signalling an expressive style. Engage with the vision before addressing the detail.",
          styleContext:
            "Expressive communicators often struggle with restrictive legal frameworks because they see them as barriers to creativity. Understanding this helps you frame protective clauses as enablers rather than constraints.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does care about fairness, which can look supportive. However, her focus is on vision and creative freedom, not on making sure everyone feels comfortable. She wants to inspire, not to nurture.",
          observation:
            "A supportive communicator would focus on ensuring neither side feels taken advantage of. Nina is focused on ensuring neither side's creativity is constrained.",
          coachingTip:
            "Expressive communicators advocate for ideas and vision. Supportive communicators advocate for people and wellbeing. Nina is clearly championing creativity, not care.",
          styleContext:
            "The distinction is in what they are protecting. Expressive communicators protect creative freedom. Supportive communicators protect emotional safety.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not focused on data, deadlines, or commercial precision. Her language is visionary and values-driven, framing the IP discussion as a philosophical question about innovation.",
          observation:
            "There are no spreadsheets, no ultimatums, and no process concerns. Nina is thinking about what the partnership could become, not what the contract should say.",
          coachingTip:
            "Ask yourself: is this person focused on the vision, the outcome, the people, or the process? Nina's focus on creative possibility signals an expressive style.",
          styleContext:
            "Expressive communicators bring energy and imagination to negotiations that might otherwise become dry and adversarial. They reframe constraints as opportunities.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina wants to propose an open co-development model with shared access, clear attribution, and revenue sharing. The partner's legal team has proposed a restrictive approach. How do you respond?",
      options: [
        {
          id: "s138-opt-a",
          text: "The open model is exactly right. Let me draft a proposal framing co-development as the competitive advantage, with attribution and revenue sharing as safeguards. We present it as 'the framework that makes innovation possible' rather than restrictions.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Nina's expressive style by embracing her vision, using aspirational framing, and positioning the proposal as an enabler of creativity. You are speaking her language.",
        },
        {
          id: "s138-opt-b",
          text: "The open model has merit but we need to be careful about protecting our core IP. Could we propose shared access on the co-developed code but retain exclusive rights on anything we built independently?",
          score: 5,
          result: "partial",
          explanation:
            "This is a reasonable commercial position but it leads with caution, which clashes with Nina's desire to think bigger. Acknowledge the vision first, then introduce the safeguards.",
        },
        {
          id: "s138-opt-c",
          text: "I think we should accept their legal team's framework. It is cleaner and protects us better. We can always renegotiate later if the partnership proves successful.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Nina's position and accepts the restrictive approach she is fighting against. An expressive communicator will see this as a failure of imagination and ambition.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants a joint statement that reads like a manifesto, celebrating shared creativity and mutual trust while including the agreed IP framework. Write it in an expressive style.",
      targetTraits: ["visionary", "collaborative", "inspiring", "values-driven"],
      exampleStrongResponse:
        "A Shared Vision for Innovation\n\nThis partnership was born from a simple belief: that the best technology is built when talented teams trust each other enough to create together.\n\nOver the past twelve months, our two companies have proven that belief. The platform we have built together is not just a product; it is a testament to what happens when organisations choose collaboration over competition.\n\nTo protect and nurture this shared creation, we have agreed the following framework:\n\n- All co-developed code remains jointly owned, with full access for both teams to build, adapt, and improve\n- Independent contributions are attributed and protected, with clear documentation maintained by both sides\n- Revenue from the shared platform is split equally, reviewed annually\n- A joint innovation board will meet quarterly to set the creative direction\n\nThis is not a contract. It is a commitment to keep building together, with trust, transparency, and a shared passion for what comes next.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your statement captures the visionary, values-driven tone Nina wanted while clearly outlining the IP framework. It reads like a manifesto, not a legal document, which is exactly what she requested.",
          observation:
            "You wove the commercial terms into a narrative about shared purpose and trust. The framework feels like a natural expression of the partnership's values, not an afterthought.",
          coachingTip:
            "When writing for an expressive communicator, embed the practical details inside a compelling narrative. The story gives the details meaning and makes them memorable.",
          styleContext:
            "Expressive communicators want joint statements that both teams can feel proud of. If it reads like a press release, it is too corporate. If it reads like a love letter to collaboration, it is just right.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your statement includes the IP framework but lacks the inspirational tone Nina wanted. It reads more like a well-structured agreement than a manifesto.",
          observation:
            "Look at your opening and closing. Do they inspire and celebrate, or do they simply inform? Nina wanted people to feel something when they read this.",
          coachingTip:
            "Add a visionary opening that explains why the partnership matters and a closing that looks forward to what you will build together. The framework sits in the middle.",
          styleContext:
            "Expressive communicators judge documents by the feeling they create, not just the information they contain. If both teams do not feel excited after reading it, it needs more energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a standard legal summary, not the manifesto Nina envisioned. There is no celebration, no vision, and no sense of shared purpose.",
          observation:
            "Nina specifically asked for something that captures creativity and mutual trust. A dry listing of terms misses the entire point of the exercise.",
          coachingTip:
            "Start over with the question: 'What do we believe?' Build the statement around that belief and then layer in the framework as evidence of your commitment to it.",
          styleContext:
            "Expressive communicators use joint statements as cultural artefacts. They want something that could be pinned on the wall and quoted in team meetings. Aim for that standard.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (139-141)
  // ============================================

  // Scenario 139 - Tom Brennan, negotiation, foundation
  {
    id: "scenario-139",
    title: "The Franchise Fee Negotiation",
    context:
      "You are working with Tom to negotiate franchise fees with a new franchisee who is nervous about the financial commitment. Tom wants to ensure the franchisee feels supported and confident throughout the process.",
    chooseContext:
      "The prospective franchisee has expressed concerns about the upfront costs and is considering walking away. Tom wants to find a way to ease their anxiety without undermining the commercial terms.",
    rewriteContext:
      "Tom has agreed a reduced initial fee with a graduated payment plan. He wants you to write a confirmation letter that reassures the franchisee and makes them feel welcomed into the network.",
    characterId: "tom-brennan",
    dialogue:
      "I can tell they are worried about the money. Starting a franchise is a huge step and I remember how daunting it felt when I was in their shoes. I do not want to lose them over a fee structure. Let us find a way to make the numbers work that does not leave them feeling overwhelmed from day one.",
    chooseDialogue:
      "They have gone quiet and I think they are panicking. I would rather reduce the upfront fee and build it into the first year's royalties than push them into a commitment they are not comfortable with. People perform better when they feel secure, not when they feel cornered.",
    rewriteDialogue:
      "We have found a structure that works. Write them a letter that feels like a welcome, not an invoice. I want them to read it and think 'these people have got my back', not 'these people are squeezing me'.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom is focused on the franchisee's anxiety, recalls his own experience starting out, and wants to find fee terms that avoid overwhelming them. Which communication style is he displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with empathy, shares a personal memory to show understanding, and prioritises the franchisee's emotional comfort alongside the commercial outcome. This is classic supportive communication.",
          observation:
            "Notice how Tom's primary concern is not the fee amount but how the fee makes the franchisee feel. Supportive communicators prioritise emotional safety in negotiations.",
          coachingTip:
            "When someone frames a commercial negotiation in terms of how the other party feels, they are signalling a supportive style. Acknowledge the emotional dimension before discussing numbers.",
          styleContext:
            "Supportive communicators believe that trust and comfort lead to better long-term business outcomes. They see empathy as a negotiation strategy, not a weakness.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators are people-focused, but Tom is quietly empathetic, not enthusiastic or visionary. He is not trying to inspire the franchisee; he is trying to reassure them.",
          observation:
            "An expressive communicator would paint an exciting picture of what the franchise could become. Tom is focused on making sure the franchisee does not feel overwhelmed right now.",
          coachingTip:
            "Supportive communicators lower the emotional temperature. Expressive communicators raise it. Tom is clearly calming, not energising.",
          styleContext:
            "The energy tells you the style. Supportive communicators create safety. Expressive communicators create excitement. Both care about people, but in different ways.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not focused on speed, data, or commercial advantage. His priority is the franchisee's emotional state and sense of security.",
          observation:
            "There are no demands, no deadlines, and no competitive tactics. Tom is negotiating through care and understanding, not pressure.",
          coachingTip:
            "Ask yourself: is this person trying to make the other party feel safe, excited, informed, or pressured? Tom's focus on safety and comfort signals a supportive style.",
          styleContext:
            "Supportive communicators in fee negotiations often achieve better retention rates because franchisees feel genuinely valued from the start.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The franchisee has gone quiet and Tom thinks they are panicking. He would rather reduce the upfront fee than push them into an uncomfortable commitment. How do you respond?",
      options: [
        {
          id: "s139-opt-a",
          text: "Agreed. Let us lower the upfront cost and recover the balance through first-year royalties. I will also draft a personal note from you to the franchisee, letting them know you understand their concerns and are here to support them.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Tom's supportive style by addressing both the financial structure and the emotional reassurance. The personal note adds exactly the kind of human touch a supportive communicator values.",
        },
        {
          id: "s139-opt-b",
          text: "We could offer a small discount on the upfront fee but I think we need to be careful not to set a precedent. Let us keep the conversation commercial and professional.",
          score: 5,
          result: "partial",
          explanation:
            "This addresses the financial concern but misses the emotional dimension. Tom does not want a cold commercial adjustment; he wants the franchisee to feel genuinely cared for.",
        },
        {
          id: "s139-opt-c",
          text: "If they cannot afford the fees, maybe they are not the right fit for our franchise. We should not water down our terms for someone who is already wavering.",
          score: 0,
          result: "weak",
          explanation:
            "This is the opposite of Tom's approach. He sees the franchisee's anxiety as something to address with empathy, not as a reason to walk away. A supportive communicator would find this response callous.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants a confirmation letter that feels like a welcome, not an invoice. It should reassure the franchisee and make them feel they are joining a supportive network. Write it in a supportive style.",
      targetTraits: ["warm", "reassuring", "personal", "relationship-focused"],
      exampleStrongResponse:
        "Dear Hannah,\n\nI am delighted to confirm your place in the Greenfield franchise network. I know this has been a big decision and I want you to know that we are genuinely here to support you every step of the way.\n\nHere are the agreed terms:\n- Initial franchise fee: GBP 8,000 (reduced from GBP 12,000)\n- Remaining GBP 4,000 built into your first year's royalty payments\n- Monthly royalty: 6% of revenue\n- Full onboarding support for your first 90 days, including a dedicated mentor\n\nStarting a franchise can feel daunting, but you will not be doing this alone. Our network is full of people who were in your shoes not long ago and are now thriving. I will personally check in with you during your first month to make sure you have everything you need.\n\nWelcome aboard, Hannah. We are glad to have you with us.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your letter combines clear terms with genuine warmth and personal reassurance. Tom will feel this is exactly the tone that will put the franchisee at ease.",
          observation:
            "You included the commercial details but wrapped them in care and personal commitment. The mention of a personal check-in is a particularly strong supportive touch.",
          coachingTip:
            "When writing for a supportive communicator, the terms are important but the tone matters more. Every paragraph should make the reader feel valued and safe.",
          styleContext:
            "Supportive communicators judge letters by the emotional response they create. If the reader feels relieved and welcomed, the letter has done its job.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your letter includes the terms clearly but lacks the personal warmth Tom wanted. It reads more like a confirmation than a welcome.",
          observation:
            "Look at your opening and closing. Do they create a sense of genuine care, or are they standard business formalities?",
          coachingTip:
            "Add a personal touch: mention your own experience, offer a specific form of support, or name a real person the franchisee can turn to. That transforms a letter into a relationship.",
          styleContext:
            "Supportive communicators want correspondence that builds trust and connection. If it could be sent to anyone without changing a word, it is too generic.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a standard commercial confirmation with no personal warmth or reassurance. Tom specifically asked for a letter that feels like a welcome, not an invoice.",
          observation:
            "There is no empathy, no personal commitment, and no acknowledgement of the franchisee's anxiety. This is exactly the kind of letter Tom was trying to avoid.",
          coachingTip:
            "Start by imagining you are speaking to the franchisee in person. What would you say to put them at ease? Write that down and then add the terms afterwards.",
          styleContext:
            "Supportive communicators view correspondence as an extension of the relationship. A cold, transactional letter undermines the trust they have worked hard to build.",
        },
      },
    },
  },

  // Scenario 140 - Leah Morgan, negotiation, intermediate
  {
    id: "scenario-140",
    title: "The Sponsorship Deal",
    context:
      "Leah is negotiating a sponsorship deal with a local sports club. The club is keen but their commercial manager is pushing for a high fee. Leah wants to find an arrangement that supports the club's community mission while staying within budget.",
    chooseContext:
      "The club's commercial manager has rejected your initial offer and is pushing for double the sponsorship fee. Leah does not want to walk away but also cannot overcommit the budget.",
    rewriteContext:
      "Leah has agreed a deal that includes a reduced cash sponsorship plus in-kind support for the club's youth programme. She wants you to write a partnership announcement that highlights the community impact.",
    characterId: "leah-morgan",
    dialogue:
      "I have met the people who run this club and they are doing incredible work in the community. The kids in their youth programme, the volunteers, it matters. I do not want this to be a logo-on-a-shirt deal. I want us to genuinely support what they are building. Let us find a way to make it work for everyone.",
    chooseDialogue:
      "I know the budget is tight but I do not want to let this one go. The club means so much to the local community and walking away feels wrong. Could we offer something beyond cash? Maybe we could provide mentoring for their youth programme or donate equipment. That might bridge the gap and show we are committed to the relationship, not just the branding.",
    rewriteDialogue:
      "This is going to be a wonderful partnership. Write the announcement so it leads with the community impact, the youth programme, and what it means for the people involved. The sponsorship details can follow, but the heart of the story is the people.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah focuses on the club's community work, the youth programme, and wants a genuine partnership rather than a branding exercise. She is motivated by the human impact, not the commercial return. Which communication style is she displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah is driven by care for the community and a desire to create a partnership that genuinely helps people. Her motivation is empathetic and relationship-focused, which is the core of supportive communication.",
          observation:
            "Notice how Leah mentions the kids, the volunteers, and the people behind the club. She is not talking about brand visibility or return on investment; she is talking about making a difference.",
          coachingTip:
            "When someone frames a commercial deal in terms of community impact and genuine care for the people involved, they are signalling a supportive style.",
          styleContext:
            "Supportive communicators in sponsorship negotiations prioritise the relationship and the social impact over the commercial metrics. They want partnerships that feel meaningful.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators are people-focused, but Leah is not high-energy or visionary. She is quietly passionate and driven by empathy, not enthusiasm.",
          observation:
            "An expressive communicator would talk about the exciting possibilities and paint a bold vision. Leah talks about the people and what the partnership means to them personally.",
          coachingTip:
            "Supportive communicators express care through action and quiet commitment. Expressive communicators express care through energy and vision. Leah's tone is warm, not electric.",
          styleContext:
            "The distinction is in the emotional register. Supportive communicators feel deeply but express it gently. Expressive communicators feel deeply and express it loudly.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not focused on the numbers, the branding ROI, or the speed of the deal. Her priority is the human dimension of the sponsorship.",
          observation:
            "There are no demands, no deadlines, and no competitive positioning. Leah is negotiating from a place of genuine care, not commercial ambition.",
          coachingTip:
            "Consider what is motivating the speaker. If it is care for people and community, that signals a supportive style.",
          styleContext:
            "Supportive communicators bring a human perspective to commercial negotiations that can transform transactional deals into genuine partnerships.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah does not want to walk away from the sponsorship despite the budget gap. She is suggesting in-kind support like mentoring and equipment donations to bridge the difference. How do you respond?",
      options: [
        {
          id: "s140-opt-a",
          text: "Lovely idea. I will put together a package combining cash sponsorship with in-kind contributions: mentoring sessions, equipment, and a skills workshop for the volunteers. I will frame it as a partnership commitment so the club feels genuinely valued.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Leah's supportive style by building on her in-kind idea, adding personal touches, and framing it in a way that honours the relationship. The emphasis on making the club feel valued is exactly right.",
        },
        {
          id: "s140-opt-b",
          text: "We could offer some in-kind support but we need to make sure we are getting fair value. Let us calculate what the mentoring and equipment is worth and present it as a total package value to justify the lower cash figure.",
          score: 5,
          result: "partial",
          explanation:
            "This is commercially sensible but feels transactional to Leah. She is not trying to justify a number; she is trying to show genuine care for the club's mission.",
        },
        {
          id: "s140-opt-c",
          text: "Honestly, if the club wants double our budget, we should look at other sponsorship opportunities. There are plenty of clubs that would be grateful for our support at the price we can afford.",
          score: 0,
          result: "weak",
          explanation:
            "This completely disregards Leah's emotional connection to the club and treats the sponsorship as a purely commercial decision. A supportive communicator would find this approach cold and dismissive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants a partnership announcement that leads with community impact, the youth programme, and the people involved. The sponsorship details should follow, but the heart of the story must be the people. Write it in a supportive style.",
      targetTraits: ["community-focused", "warm", "people-first", "genuine"],
      exampleStrongResponse:
        "We are proud to announce a new partnership with Riverside Athletic Club, a club that has been at the heart of our local community for over 30 years.\n\nThis partnership is about much more than sponsorship. It is about supporting the incredible work that Riverside does with young people in our area. Their youth programme gives over 200 children a safe, positive space to develop confidence, teamwork, and resilience, and we are honoured to play a part in that.\n\nAs part of our commitment, we will be providing:\n- Financial sponsorship to support the club's running costs\n- Mentoring sessions for young people in the youth programme\n- Equipment and resources for the volunteer coaching team\n\nWe believe that the best partnerships are built on shared values, and Riverside's dedication to their community mirrors everything we stand for. We look forward to growing this relationship and making a real difference together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your announcement leads with the community impact and the people, just as Leah requested. The sponsorship details are woven in naturally without dominating the message.",
          observation:
            "You captured the warmth and genuine care that defines Leah's approach. The focus on the youth programme and volunteers gives the announcement real heart.",
          coachingTip:
            "When writing for a supportive communicator, always lead with the human story. The commercial details should feel like a natural expression of your commitment, not the main event.",
          styleContext:
            "Supportive communicators want announcements that make everyone involved feel proud and valued. If it could run as a community news story, it is hitting the right tone.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your announcement mentions the community angle but leads with the sponsorship details. Leah wanted the people and the impact to come first.",
          observation:
            "Check the order of your content. If the first paragraph is about the deal rather than the people, the balance is wrong for a supportive communicator.",
          coachingTip:
            "Restructure so the youth programme and community impact come first. Move the sponsorship terms to the second half. That simple reorder changes the tone entirely.",
          styleContext:
            "Supportive communicators read announcements from top to bottom and judge them by what comes first. Lead with what matters most to them: the people.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a corporate press release focused on brand visibility and commercial terms. Leah specifically asked for a story about people and community impact.",
          observation:
            "There is no mention of the youth programme, the volunteers, or the human story behind the club. This is the kind of announcement Leah was trying to avoid.",
          coachingTip:
            "Forget the sponsorship for a moment. Write about why the club matters and who benefits from its work. Then add the sponsorship details as evidence of your commitment.",
          styleContext:
            "Supportive communicators view sponsorship announcements as relationship statements, not marketing materials. If it feels corporate, it has missed the point.",
        },
      },
    },
  },

  // Scenario 141 - David Chen, negotiation, advanced
  {
    id: "scenario-141",
    title: "The Insurance Claim",
    context:
      "David is negotiating an insurance claim following a workplace incident that injured a colleague. The insurer is pushing for a lower settlement. David is focused on ensuring the injured colleague feels supported and that the outcome is fair and compassionate.",
    chooseContext:
      "The insurer's claims adjuster has offered a settlement that David considers inadequate. She has suggested the incident was partly due to employee error. David wants to push back firmly but without losing sight of the human impact.",
    rewriteContext:
      "David has negotiated a fair settlement and wants you to write a letter to the injured colleague explaining the outcome and expressing the company's ongoing support.",
    characterId: "david-chen",
    dialogue:
      "This is not about a claim number or a liability percentage. This is about a person who got hurt at work and deserves to be looked after properly. I want the insurer to understand that we are not going to accept a settlement that leaves our colleague feeling like a line item on a spreadsheet.",
    chooseDialogue:
      "The adjuster says it was partly employee error. Even if that is technically true, it does not change the fact that someone was injured in our workplace and we have a duty of care. I will not let them reduce the settlement based on blame. Our colleague needs rehabilitation support, not a legal argument about fault percentages.",
    rewriteDialogue:
      "We have a fair settlement and that is a relief. Now write to our colleague. I want them to know that this was never just about money. Tell them what the settlement covers, but more importantly, tell them we care and that we are here for whatever they need going forward.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David reframes the insurance negotiation as a duty of care issue, insisting the injured colleague should not be treated as 'a line item on a spreadsheet'. Which communication style is he displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David's entire approach is centred on the wellbeing of the injured colleague. He reframes a commercial negotiation as a moral obligation, which is advanced supportive communication at its most powerful.",
          observation:
            "Notice how David humanises the claim by focusing on the person, not the policy. He pushes back against the insurer's financial framing with an empathetic, care-based argument.",
          coachingTip:
            "When someone challenges a commercial negotiation by centring the human impact, they are operating in a deeply supportive style. Meet them on that ground before discussing logistics.",
          styleContext:
            "Advanced supportive communicators use empathy as a negotiation tool. By reframing the discussion in human terms, they create moral pressure that is difficult to resist.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's passion could look expressive, but his focus is not on vision or excitement. He is driven by quiet conviction and duty of care, not enthusiasm.",
          observation:
            "An expressive communicator might turn this into a rallying call for workplace safety reform. David is focused specifically on one person's wellbeing and recovery.",
          coachingTip:
            "Supportive communicators are advocates for individuals. Expressive communicators are advocates for causes. David is clearly focused on one colleague, not a broader movement.",
          styleContext:
            "The scale tells you the style. Supportive communicators zoom in on the individual. Expressive communicators zoom out to the bigger picture.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not concerned with the speed of the settlement, the data behind the claim, or the commercial implications. His sole focus is on the injured person.",
          observation:
            "There are no demands for quick resolution, no requests for detailed breakdowns, and no competitive positioning. David is negotiating from a place of care.",
          coachingTip:
            "Consider the emotional centre of the speaker's argument. If it is a person's wellbeing, the style is supportive.",
          styleContext:
            "Supportive communicators in insurance negotiations often secure better outcomes because their genuine concern for the individual creates a moral imperative that adjusters find hard to dismiss.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The insurer's adjuster has suggested the incident was partly employee error and is using that to reduce the settlement. David refuses to accept blame-based reductions and wants full rehabilitation support. How do you respond?",
      options: [
        {
          id: "s141-opt-a",
          text: "Agreed. I will respond to the adjuster stating that our priority is our colleague's full recovery, regardless of contributory factors. I will request the settlement covers all rehabilitation and support costs, and make clear we stand behind our duty of care.",
          score: 10,
          result: "strong",
          explanation:
            "This matches David's supportive style by centring the colleague's recovery, rejecting blame-based reductions, and reinforcing the duty of care. You are speaking from the same values David holds.",
        },
        {
          id: "s141-opt-b",
          text: "We should push back on the employee error argument but we also need to be realistic about what the policy covers. Let me review the terms and see what we can reasonably claim for.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical but too focused on policy mechanics for David. He wants the response to lead with care for the colleague, not with a policy review.",
        },
        {
          id: "s141-opt-c",
          text: "If there is evidence of employee error, we might need to accept a reduced settlement. Fighting the insurer on this could cost us more in legal fees than we would gain.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises cost over care, which is exactly what David is fighting against. Accepting the blame argument undermines the colleague and contradicts David's values entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants a letter to the injured colleague explaining the settlement outcome and expressing the company's ongoing support. He wants it to feel genuinely caring, not corporate. Write it in a supportive style.",
      targetTraits: ["compassionate", "personal", "reassuring", "commitment-focused"],
      exampleStrongResponse:
        "Dear James,\n\nI wanted to write to you personally to let you know that the insurance settlement has been agreed and I hope it gives you some peace of mind.\n\nThe settlement covers your full rehabilitation costs, including physiotherapy for as long as you need it, as well as compensation for the time you have been away from work. The details are enclosed, but I want you to know that the numbers are only part of the story.\n\nWhat matters most to us is your recovery and your wellbeing. You are a valued member of this team and we want you back when you are ready, not before. There is no pressure and no rush.\n\nIf there is anything you need in the meantime, whether it is practical support, someone to talk to, or just a check-in, please do not hesitate to reach out. I will be in touch next week, but you are welcome to call me any time.\n\nTake care of yourself, James. We are here for you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your letter is compassionate, personal, and reassuring. It covers the settlement details but leads with genuine care and ongoing commitment. David will feel this captures exactly what he wanted to say.",
          observation:
            "You made the letter feel like it came from a person, not a department. The offer to call, the reassurance about no pressure, and the personal tone all create a sense of genuine support.",
          coachingTip:
            "When writing on behalf of a supportive communicator, imagine you are speaking to the person face to face. If it sounds warm and genuine out loud, it will read well on paper.",
          styleContext:
            "Supportive communicators want correspondence that strengthens the relationship and provides comfort. The facts are necessary, but the care is what matters.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your letter covers the settlement clearly but lacks the personal warmth David wanted. It reads more like an HR notification than a caring message from a colleague.",
          observation:
            "Look at your tone. Does it feel like a person writing, or a company? David wanted the colleague to feel genuinely cared for, not just informed.",
          coachingTip:
            "Add personal touches: use the colleague's name, offer specific support, and include a personal commitment to check in. Those details transform a formal letter into a genuine one.",
          styleContext:
            "Supportive communicators measure letters by whether they would feel comforted receiving them. If it feels procedural, it needs more heart.",
        },
        weak: {
          result: "weak",
          explanation:
            "This reads like a standard claims notification with no personal warmth or genuine care. David specifically asked for a letter that feels caring, not corporate.",
          observation:
            "There is no empathy, no personal commitment, and no acknowledgement of what the colleague has been through. This is the kind of letter David was determined to avoid.",
          coachingTip:
            "Start by writing what you would say to the colleague if you were sitting next to them. That human voice is what David wants on the page.",
          styleContext:
            "Supportive communicators view post-incident correspondence as a critical moment of trust. A cold letter can undo all the goodwill built during the negotiation.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (142-144)
  // ============================================

  // Scenario 142 - Rachel Finch, negotiation, foundation
  {
    id: "scenario-142",
    title: "The Outsourcing Terms",
    context:
      "You are working with Rachel to negotiate outsourcing terms for the company's payroll function. Rachel has conducted a detailed comparison of three providers and wants to ensure the contract terms are watertight before any commitment is made.",
    chooseContext:
      "The preferred provider has submitted a draft contract. Rachel has identified several clauses that lack specificity and wants them tightened before she will recommend proceeding.",
    rewriteContext:
      "Rachel has finalised the contract terms and wants you to write a summary report for the board that presents the decision rationale with full supporting evidence.",
    characterId: "rachel-finch",
    dialogue:
      "I have compared the three providers across 14 criteria including cost per payslip, error rates, data security certifications, and SLA response times. Provider B scores highest overall but their penalty clause for missed SLAs is too vague. I need that tightened before I can recommend them. Here is my comparison matrix.",
    chooseDialogue:
      "Their draft contract has three issues. First, the SLA breach penalty is described as 'reasonable compensation', which is not measurable. I need a fixed percentage. Second, the data retention clause does not specify the deletion timeline post-contract. Third, the transition support period is listed as 'up to 8 weeks' but I need a guaranteed minimum. I will not sign off until all three are resolved.",
    rewriteDialogue:
      "The terms are agreed. Write the board summary. I want the decision rationale, the scoring methodology, the key differentiators, and the risk mitigations. Include the comparison matrix as an appendix. This needs to withstand scrutiny.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has compared three providers across 14 criteria, built a scoring matrix, and identified a specific clause that lacks precision. Which communication style is she displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's approach is methodical, evidence-based, and precision-focused. She has built a structured comparison, scored against defined criteria, and identified specific gaps in the contract language. This is textbook analytical communication.",
          observation:
            "Notice how Rachel does not express a preference based on instinct. Her recommendation is entirely driven by data and she will not proceed until the contract language meets her standards of precision.",
          coachingTip:
            "When someone presents a structured evaluation with defined criteria and identifies specific gaps in precision, they are signalling an analytical style. Respond with equally detailed evidence.",
          styleContext:
            "Analytical communicators negotiate by ensuring every term is measurable, documented, and defensible. They see vague language as risk, not flexibility.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about what she needs, which can look direct. However, her decision-making is driven by methodology and evidence, not speed or instinct.",
          observation:
            "A direct communicator would choose the provider that offers the best deal and push for a fast close. Rachel wants to verify every detail before recommending.",
          coachingTip:
            "Direct communicators make fast decisions based on headline outcomes. Analytical communicators make careful decisions based on detailed evidence. Rachel is clearly in the latter camp.",
          styleContext:
            "Both styles can be assertive, but the basis differs. Direct assertiveness comes from conviction. Analytical assertiveness comes from evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on relationships, team morale, or creative vision. Her entire approach is structured around data, criteria, and contractual precision.",
          observation:
            "There is no mention of how the team feels about the change, no enthusiasm about the partnership, and no concern for the provider's feelings. Rachel wants accuracy, not warmth.",
          coachingTip:
            "Ask yourself: is this person leading with data, speed, empathy, or enthusiasm? Rachel's methodical, criteria-driven approach clearly signals an analytical style.",
          styleContext:
            "Analytical communicators in outsourcing negotiations protect the organisation through rigorous evaluation. They view thoroughness as their primary contribution.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has identified three specific issues with the draft contract and will not sign off until all three are resolved. How do you respond?",
      options: [
        {
          id: "s142-opt-a",
          text: "Understood. I will draft amendments for all three clauses: fixed penalty for SLA breaches, specific deletion timeline for data retention, and guaranteed minimum transition period. I will reference industry standards and send the redline by Thursday.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Rachel's analytical style perfectly. You have addressed each issue specifically, committed to evidence-based amendments, and provided a clear timeline. Analytical communicators respect structured, thorough responses.",
        },
        {
          id: "s142-opt-b",
          text: "I will push the provider to tighten those clauses. Let me set up a call with their legal team to get it sorted as quickly as possible.",
          score: 5,
          result: "partial",
          explanation:
            "This shows willingness to act but lacks the specificity Rachel expects. She wants to see the amendments drafted and evidenced, not just hear that you will 'push' for them.",
        },
        {
          id: "s142-opt-c",
          text: "I think we are overthinking this. Provider B is clearly the best option and these are minor contractual details. Let us get the deal done and iron out the fine print later.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing Rachel's concerns as 'overthinking' is the worst approach with an analytical communicator. She views contractual precision as essential, not optional, and will lose confidence in anyone who treats it casually.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a board summary presenting the outsourcing decision rationale, scoring methodology, key differentiators, and risk mitigations. Write it in an analytical style that will withstand scrutiny.",
      targetTraits: ["evidence-based", "structured", "methodical", "precise"],
      exampleStrongResponse:
        "Board Summary: Payroll Outsourcing Recommendation\n\n1. Decision Rationale\nFollowing a structured evaluation of three shortlisted providers, Provider B (Apex Payroll Services) is recommended based on the highest aggregate score across 14 weighted criteria.\n\n2. Scoring Methodology\nEach provider was assessed against 14 criteria grouped into four categories: cost efficiency (30%), service quality (25%), data security (25%), and transition support (20%). Scores were assigned on a 1 to 5 scale with category weightings applied.\n\n3. Key Differentiators\n- Cost per payslip: GBP 3.20 (lowest of all three)\n- Error rate: 0.02% (industry average: 0.08%)\n- ISO 27001 and Cyber Essentials Plus certified\n- Guaranteed 4-hour SLA response with a 2% monthly fee rebate for breaches\n\n4. Risk Mitigations\n- Fixed penalty clause for SLA breaches replaces original vague wording\n- Data deletion within 30 days of contract termination, verified by independent audit\n- Minimum 8-week transition period guaranteed with a named transition manager\n\nAppendix: Full comparison matrix attached.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, evidence-based, and precise. Rachel will be able to present this to the board with confidence because every claim is supported by data.",
          observation:
            "You included the scoring methodology, quantified the differentiators, and documented the risk mitigations with specific contractual terms. That is exactly the level of rigour Rachel expects.",
          coachingTip:
            "When writing for an analytical communicator, structure is not optional. Use numbered sections, quantified evidence, and specific references. If a claim cannot be supported, do not include it.",
          styleContext:
            "Analytical communicators present board papers as evidence packs, not narratives. Every statement should be traceable to a data point or a contractual term.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary covers the right topics but lacks the quantified detail Rachel needs. She wants specific numbers, percentages, and contractual references, not general statements.",
          observation:
            "Check for any claim that is not backed by a number or a specific reference. Rachel will challenge anything that relies on assertion rather than evidence.",
          coachingTip:
            "Go through each paragraph and ask: could I put a number here? If the answer is yes, add the number. Analytical communicators trust data more than prose.",
          styleContext:
            "Analytical communicators view board papers as their professional reputation in document form. Vague or unsupported claims undermine their credibility.",
        },
        weak: {
          result: "weak",
          explanation:
            "This summary lacks the structure, evidence, and precision Rachel requested. It reads more like a general overview than a decision-support document.",
          observation:
            "Rachel asked for scoring methodology, key differentiators, and risk mitigations. If any of those are missing or vague, the document is not ready for the board.",
          coachingTip:
            "Use Rachel's brief as your template: decision rationale, scoring methodology, key differentiators, risk mitigations. Fill each section with quantified, verifiable evidence.",
          styleContext:
            "Analytical communicators will not present a document to the board unless they are confident it will withstand challenge. Give them the evidence they need to feel that confidence.",
        },
      },
    },
  },

  // Scenario 143 - Owen Grant, negotiation, intermediate
  {
    id: "scenario-143",
    title: "The Supply Chain Renegotiation",
    context:
      "Owen is renegotiating delivery schedules with a key supplier following a major supply chain disruption. The supplier has missed several deadlines and Owen wants to restructure the terms based on performance data and risk analysis.",
    chooseContext:
      "The supplier has blamed the disruption on force majeure and is resisting any changes to the contract. Owen has prepared a detailed performance log and is ready to challenge their position with evidence.",
    rewriteContext:
      "Owen has secured revised delivery terms including tighter SLAs and a penalty mechanism. He wants you to draft the contract amendment with precise language and measurable benchmarks.",
    characterId: "owen-grant",
    dialogue:
      "Over the past six months, they have missed 23 out of 58 scheduled deliveries. That is a 39.7% failure rate. The average delay was 4.2 working days, with the longest being 14. I have mapped every missed delivery against their claimed force majeure events and only 7 of the 23 correlate with documented disruptions. The remaining 16 are operational failures. I want the contract rewritten with measurable SLAs and automatic penalties.",
    chooseDialogue:
      "They are hiding behind force majeure but the data tells a different story. I have a timeline showing that 70% of their missed deliveries occurred outside any documented disruption window. I want them to acknowledge the operational failures and agree to a revised SLA with a clear penalty escalation: 1% fee reduction for the first breach in any quarter, 3% for the second, and contract review for the third.",
    rewriteDialogue:
      "Good. Draft the amendment. I want the SLA thresholds defined in exact terms: on-time delivery rate of 95% or above, measured monthly. The penalty structure must be automatic, not discretionary. Include the performance data as a schedule to the amendment so the basis for the change is documented.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has compiled detailed performance data, cross-referenced missed deliveries with force majeure claims, and calculated a precise failure rate. He is using this evidence to demand measurable SLAs. Which communication style is he displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's approach is entirely data-driven. He has built a detailed performance log, cross-referenced claims with evidence, and calculated precise failure rates. Every demand is rooted in verified data. This is analytical communication at its most rigorous.",
          observation:
            "Notice how Owen distinguishes between genuine force majeure events and operational failures using documented evidence. He does not make accusations; he presents findings.",
          coachingTip:
            "When someone leads a negotiation with detailed data analysis and demands measurable, evidence-based contract terms, they are signalling an analytical style. Respond with equal rigour.",
          styleContext:
            "Analytical communicators in supply chain negotiations use data as their primary tool. They believe that performance should be measured, documented, and contractually enforced.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive about what he wants, which can look direct. However, his assertiveness is built on a foundation of detailed evidence, not on instinct or urgency.",
          observation:
            "A direct communicator would say 'fix the deliveries or we switch suppliers'. Owen says 'here is the data showing exactly where you have failed, and here is the mechanism to prevent it'.",
          coachingTip:
            "Direct communicators demand outcomes. Analytical communicators demand evidence-based mechanisms. Owen's approach is clearly the latter.",
          styleContext:
            "The difference is in the foundation. Direct assertiveness says 'do it'. Analytical assertiveness says 'the evidence shows you must do it, and here is how we will measure it'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not focused on relationships, team dynamics, or creative vision. His entire approach is structured around data, evidence, and contractual precision.",
          observation:
            "There is no concern for the supplier's feelings, no enthusiasm about the future, and no attempt to build rapport. Owen wants measurable accountability, not a better relationship.",
          coachingTip:
            "Consider what drives the speaker's negotiation position. If it is data and evidence, the style is analytical.",
          styleContext:
            "Analytical communicators view supply chain negotiations as exercises in evidence and accountability. They trust contracts that measure, not contracts that describe.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has proved that 70% of missed deliveries were operational failures, not force majeure. He wants a tiered penalty structure. The supplier is resisting. How do you respond?",
      options: [
        {
          id: "s143-opt-a",
          text: "I will draft the revised SLA with your penalty escalation: 1% for the first breach, 3% for the second, formal review for the third. I will attach your performance analysis as evidence and include a clause requiring monthly verified SLA reporting.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Owen's analytical style precisely. You have adopted his penalty structure, committed to evidence-based documentation, and added a reporting mechanism for ongoing accountability. Analytical communicators value this level of structured follow-through.",
        },
        {
          id: "s143-opt-b",
          text: "I will push the supplier to accept the penalties and get the revised terms agreed as quickly as possible. Let me set up a call to get this over the line.",
          score: 5,
          result: "partial",
          explanation:
            "This shows urgency but lacks the structured, evidence-based approach Owen expects. He wants the amendment drafted with precision, not just pushed through quickly.",
        },
        {
          id: "s143-opt-c",
          text: "I understand the frustration but the supplier has been a reliable partner for years. Maybe we should give them a chance to improve before imposing penalties. A conversation about mutual expectations might be more productive.",
          score: 0,
          result: "weak",
          explanation:
            "Owen has already done the analysis and proved the failures are operational, not exceptional. Suggesting we give them 'a chance' ignores the evidence and will frustrate an analytical communicator who has built a rigorous case.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a contract amendment with exact SLA thresholds, an automatic penalty structure, and the performance data included as a schedule. Write it in an analytical style with precise, measurable language.",
      targetTraits: ["precise", "measurable", "evidence-referenced", "structured"],
      exampleStrongResponse:
        "Contract Amendment: Delivery Performance Standards\n\nAmendment to Service Agreement ref. SA-2024-0117\nEffective date: 1 April 2026\n\n1. Service Level Agreement\nThe Supplier shall maintain an on-time delivery rate of 95% or above, measured on a calendar month basis. On-time delivery is defined as receipt at the designated location within 1 working day of the scheduled delivery date.\n\n2. Penalty Structure\nBreaches of the SLA threshold will be subject to the following automatic fee adjustments:\n- First breach in any calendar quarter: 1% reduction in the quarterly service fee\n- Second breach in any calendar quarter: 3% reduction in the quarterly service fee\n- Third breach in any calendar quarter: formal contract review triggered within 14 working days\n\n3. Reporting\nThe Supplier shall provide a monthly delivery performance report, verified against the Buyer's goods-in records, within 5 working days of month end.\n\n4. Evidentiary Basis\nSchedule A (attached) contains the delivery performance analysis for the period September 2025 to February 2026, which forms the basis for this amendment.\n\nSigned: _______________ Date: _______________",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your amendment is precise, measurable, and structured exactly as Owen requested. Every term is defined, every threshold is quantified, and the evidence base is documented.",
          observation:
            "You included definitions for key terms like 'on-time delivery', specified exact timeframes for reporting and review, and referenced the performance data as a formal schedule. That is analytical precision at its best.",
          coachingTip:
            "When drafting for an analytical communicator, define every term, quantify every threshold, and reference every evidence source. If it cannot be measured, it cannot be enforced.",
          styleContext:
            "Analytical communicators view contract amendments as engineering documents. Every clause should be precise enough that compliance can be objectively verified.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your amendment covers the right areas but lacks the precision Owen needs. Terms like 'timely delivery' or 'reasonable notice' are too vague for an analytical communicator.",
          observation:
            "Check for any language that could be interpreted in more than one way. Owen wants definitions and numbers, not descriptions and approximations.",
          coachingTip:
            "Replace every subjective term with a measurable one. 'Timely' becomes '1 working day'. 'Reasonable' becomes '14 working days'. Precision eliminates ambiguity.",
          styleContext:
            "Analytical communicators draft contracts to eliminate dispute, not to allow flexibility. If a clause can be argued over, it is not precise enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "This amendment lacks the structure, precision, and measurability Owen requested. It reads more like a letter of intent than a contractual clause.",
          observation:
            "Owen specified exact SLA thresholds, an automatic penalty structure, and an evidence schedule. If any of those are missing or loosely defined, the document is not fit for purpose.",
          coachingTip:
            "Use Owen's brief as your structure: SLA threshold, penalty escalation, reporting requirement, evidence reference. Fill each section with quantified, unambiguous language.",
          styleContext:
            "Analytical communicators will not sign a document that lacks precision. They view vague contract language as a future liability, not a current convenience.",
        },
      },
    },
  },

  // Scenario 144 - Fiona Banks, negotiation, advanced
  {
    id: "scenario-144",
    title: "The Joint Venture Agreement",
    context:
      "Fiona is negotiating a joint venture agreement with a partner firm to develop a new product line. Both companies are contributing different capabilities and Fiona wants the agreement to reflect precise valuations, governance structures, and exit mechanisms.",
    chooseContext:
      "The partner firm's CEO has proposed a 50/50 equity split based on the argument that both sides are contributing equally. Fiona disagrees and has prepared a detailed asset valuation showing your company's contribution is worth more.",
    rewriteContext:
      "Fiona has negotiated a 55/45 split in your favour, along with a detailed governance framework. She wants you to draft the heads of terms document with exact definitions, valuation methodologies, and dispute resolution procedures.",
    characterId: "fiona-banks",
    dialogue:
      "A 50/50 split sounds fair on the surface but it is not supported by the valuations. Our IP portfolio is valued at GBP 2.4 million based on an independent assessment. Their manufacturing capability, using the same methodology, comes in at GBP 1.9 million. I have also modelled the projected revenue contribution and our sales channels account for 62% of the addressable market. I want the equity split to reflect the actual value each party brings, not an arbitrary sense of fairness.",
    chooseDialogue:
      "Their CEO says 50/50 feels right. Feelings are not a valuation methodology. I have three independent data points that support a 55/45 split: the IP valuation, the revenue channel analysis, and the capital investment ratio. If they can provide equivalent evidence for a different split, I will review it. But I will not agree to a number based on gut instinct.",
    rewriteDialogue:
      "The split is agreed at 55/45. Now write the heads of terms. I want exact definitions for the IP valuation methodology, the governance structure including voting rights and board composition, the profit distribution mechanism, and the exit provisions including buyout triggers and valuation floors. This document needs to be precise enough to serve as the foundation for the full agreement.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona rejects a 50/50 split by citing independent IP valuations, revenue channel analysis, and capital investment ratios. She insists the equity split must reflect actual value, not instinct. Which communication style is she displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's negotiation position is entirely built on quantified evidence. She uses independent valuations, market analysis, and financial modelling to support her argument and explicitly rejects instinct-based decision-making. This is advanced analytical communication.",
          observation:
            "Notice how Fiona does not simply assert that 55/45 is fair. She builds the case from three independent data points and invites the partner to present equivalent evidence. She is negotiating with methodology, not authority.",
          coachingTip:
            "When someone constructs a negotiation position from multiple independent data sources and explicitly rejects subjective arguments, they are operating at an advanced analytical level. Match their evidence standard.",
          styleContext:
            "Advanced analytical communicators in JV negotiations treat equity splits as mathematical outcomes, not political compromises. Their persuasion comes from the quality of their evidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is firm and clear, which can look direct. However, her firmness comes from evidence, not from personality or urgency. She is willing to adjust her position if presented with equivalent data.",
          observation:
            "A direct communicator would say 'we are worth more and we deserve more'. Fiona says 'the data shows we contribute more and the split should reflect that'. The distinction is crucial.",
          coachingTip:
            "Direct communicators negotiate from conviction. Analytical communicators negotiate from evidence. Fiona's willingness to review counter-evidence proves she is analytical.",
          styleContext:
            "The tell is in the openness to counter-evidence. Direct communicators defend their position. Analytical communicators defend their methodology and welcome challenges to the data.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not focused on relationships, creative vision, or team morale. Her entire approach is built on quantified valuations and structured analysis.",
          observation:
            "There is no warmth, no enthusiasm, and no attempt to make the partner feel good about the deal. Fiona wants precision and evidence, not rapport.",
          coachingTip:
            "Consider what the speaker is using to support their position. If it is data and methodology, the style is analytical.",
          styleContext:
            "Analytical communicators in JV negotiations can seem cold because they separate the relationship from the arithmetic. Understanding this helps you engage without taking their directness personally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has presented three independent data points supporting a 55/45 split. The partner's CEO insists 50/50 'feels right'. How do you respond?",
      options: [
        {
          id: "s144-opt-a",
          text: "I will prepare a one-page summary showing three data points side by side: IP valuation, revenue channel contribution, and capital investment ratio. The methodology will show how the 55/45 figure was derived. If they want to challenge the split, they challenge the data.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Fiona's analytical style perfectly. You are reinforcing the evidence-based approach, providing transparent methodology, and inviting scrutiny of the data rather than the conclusion. Analytical communicators respect this level of rigour.",
        },
        {
          id: "s144-opt-b",
          text: "I think we should push for the 55/45 split and not back down. We have the stronger position and we should use our leverage to close this quickly.",
          score: 5,
          result: "partial",
          explanation:
            "This supports Fiona's position but for the wrong reasons. She does not want to use leverage; she wants to use evidence. A direct approach undermines her analytical methodology.",
        },
        {
          id: "s144-opt-c",
          text: "Maybe 50/50 is simpler and it keeps the relationship strong. The difference between 50/50 and 55/45 might not be worth the conflict.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons Fiona's evidence-based position in favour of simplicity and relationship harmony. She has specifically rejected instinct-based arguments and will view this as intellectually lazy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants heads of terms with exact definitions for IP valuation methodology, governance structure, profit distribution, and exit provisions. Write it in an analytical style with precise, measurable language.",
      targetTraits: ["precise", "comprehensive", "methodology-driven", "legally-structured"],
      exampleStrongResponse:
        "Heads of Terms: Joint Venture Agreement\n\nParties: Orion Consulting Ltd (55%) and Beacon Manufacturing Ltd (45%)\nEffective date: 1 May 2026\n\n1. Equity Split\nEquity is allocated 55/45 in favour of Orion, based on the following independently assessed valuations:\n- Orion IP portfolio: GBP 2.4 million (assessed by Deloitte, January 2026)\n- Beacon manufacturing capability: GBP 1.9 million (assessed by Deloitte, January 2026)\n- Revenue channel contribution: Orion 62%, Beacon 38% (based on 2025 addressable market analysis)\n\n2. Governance\n- Board composition: 3 Orion nominees, 2 Beacon nominees\n- Chair rotates annually, starting with Orion\n- Reserved matters (requiring 75% board approval): capital expenditure above GBP 100,000, new debt facilities, changes to the product roadmap\n\n3. Profit Distribution\n- Distributed quarterly, pro rata to equity holdings\n- Minimum 60% of net profit distributed; remainder retained for reinvestment by board approval\n\n4. Exit Provisions\n- Either party may trigger a buyout after 36 months with 6 months' written notice\n- Buyout valuation: independent assessment using discounted cash flow methodology, with a floor of 1.2x the original investment\n- Right of first refusal: 60 calendar days from receipt of a third-party offer\n\n5. Dispute Resolution\n- Mediation within 30 days of a formal dispute notice\n- If unresolved, binding arbitration under LCIA rules\n\nThis document is non-binding and subject to the execution of a definitive joint venture agreement.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your heads of terms are precisely structured, comprehensively detailed, and include the exact definitions and methodologies Fiona requested. This is a document she can present with full confidence.",
          observation:
            "You included valuation sources, governance mechanics, distribution formulas, exit triggers, and dispute procedures, all with quantified thresholds and defined timelines. That is the level of precision analytical communicators require.",
          coachingTip:
            "When drafting for an analytical communicator at an advanced level, every clause must be self-contained and measurable. If a third party could interpret a clause differently, it needs tightening.",
          styleContext:
            "Analytical communicators view heads of terms as the architectural blueprint for the full agreement. If the foundations are imprecise, the entire structure is at risk.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your document covers the main areas but several clauses lack the precision Fiona demands. Phrases like 'fair market value' or 'reasonable period' need to be replaced with specific methodologies and timeframes.",
          observation:
            "Check each clause for subjective language. Fiona wants every term to be objectively verifiable. If two people could interpret a clause differently, it is not precise enough.",
          coachingTip:
            "For each clause, ask: how would this be measured in a dispute? If the answer is unclear, add a definition, a methodology, or a number.",
          styleContext:
            "Analytical communicators draft heads of terms to prevent future disagreements, not just to record current ones. Precision now saves conflict later.",
        },
        weak: {
          result: "weak",
          explanation:
            "This document lacks the structure, precision, and completeness Fiona specified. It reads more like a summary of intentions than a framework for a legally binding agreement.",
          observation:
            "Fiona asked for IP valuation methodology, governance structure, profit distribution, and exit provisions, each with exact definitions. If any are missing or loosely described, the document is incomplete.",
          coachingTip:
            "Return to Fiona's brief and use each requirement as a section heading. Within each section, define every term, quantify every threshold, and specify every methodology.",
          styleContext:
            "Analytical communicators at an advanced level view imprecise heads of terms as a professional failure. The document must demonstrate the same rigour that underpins the negotiation itself.",
        },
      },
    },
  },
];
