import { Scenario } from "@/types";

export const SCENARIOS_PART33: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (385-387) - presentation
  // ============================================

  // Scenario 385 - Jordan Cole, presentation, foundation
  {
    id: "scenario-385",
    title: "The Investor Pitch Prep",
    context:
      "Your startup is preparing for a Series A pitch to three venture capital firms. Jordan has been brought in to coach the founding team on their presentation delivery.",
    chooseContext:
      "Jordan has watched the team's practice run and is giving blunt feedback. The presentation is 45 slides and runs over the allotted time.",
    rewriteContext:
      "Jordan has asked you to rewrite the opening slide's script - the first 60 seconds of the pitch - to grab attention immediately and state the ask clearly.",
    characterId: "jordan-cole",
    dialogue:
      "You have 20 minutes with people who see 15 pitches a week. They will decide in the first 90 seconds whether to pay attention. Your current opening is three slides of market context. Cut it to one. Lead with the problem, your solution, and what you are asking for. In that order. Nothing else.",
    chooseDialogue:
      "Slide 12 is a team bio page with headshots and hobbies. Delete it. Investors do not care that your CTO enjoys rock climbing. They care about exits, revenue, and whether you can scale. Move your traction slide to position three and make the numbers twice as large.",
    rewriteDialogue:
      "Rewrite the opening. Problem, solution, ask. Sixty seconds. If the investors do not know exactly what you want by slide two, you have already lost them. No build-up, no preamble. Hit them with it.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Jordan is coaching a pitch presentation by demanding the team cut slides, lead with the ask, and eliminate anything that does not directly serve the investors' decision-making. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan demands ruthless brevity, focuses entirely on what drives the investor decision, and dismisses anything that does not serve that outcome. This is direct communication applied to presentation design.",
          observation:
            "Notice how Jordan frames the pitch in terms of the audience's attention span and decision process. Direct communicators always start with what the audience needs, not what the presenter wants to say.",
          coachingTip:
            "When someone strips a presentation down to its decision-driving core and eliminates everything else, they are using a direct style. Match their clarity with tight, purposeful content.",
          styleContext:
            "Direct communicators see presentations as decision tools, not information tools. Every slide must earn its place by moving the audience toward a yes or no.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Jordan is structured in the feedback, which can look analytical. But notice the priority is speed and impact, not thoroughness. An analytical coach would review each slide against a scoring rubric.",
          observation:
            "An analytical presentation coach would say 'let us evaluate each slide against the investor decision criteria'. Jordan simply says 'delete it' or 'move it'. The approach is decisive, not evaluative.",
          coachingTip:
            "If the feedback is about cutting and simplifying, that is direct. If it is about optimising and refining with data, that is analytical.",
          styleContext:
            "Direct communicators coach presentations by subtraction - what can be removed. Analytical communicators coach by optimisation - what can be improved.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not focused on making the presentation emotionally compelling, telling a personal founding story, or connecting with investors on a human level.",
          observation:
            "There is no mention of narrative arc, personal authenticity, or building rapport with the audience. Jordan is engineering a decision outcome, not crafting an experience.",
          coachingTip:
            "Is this person coaching for emotional connection or for decision clarity? Jordan is firmly focused on getting to a clear ask as fast as possible.",
          styleContext:
            "Direct communicators believe the best pitch is the shortest one that gets to yes. Storytelling is only valuable if it accelerates the decision.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has told the team to delete the team bio slide. The CEO wants to keep it because investors invest in people. How do you respond?",
      options: [
        {
          id: "s385-opt-a",
          text: "Keep the people element but condense it. One slide: names, relevant experience, and one key credential each. Let the credentials do the talking.",
          score: 10,
          result: "strong",
          explanation:
            "You honoured the CEO's point about people mattering while stripping the slide to its decision-relevant core. This matches Jordan's demand for brevity without losing the substance.",
        },
        {
          id: "s385-opt-b",
          text: "Maybe we could add a brief personal story about why the founders started the company. Investors often respond to passion and authenticity.",
          score: 5,
          result: "partial",
          explanation:
            "This has merit but adds time to a presentation Jordan is trying to shorten. A personal story needs to be justified against the 20-minute time limit.",
        },
        {
          id: "s385-opt-c",
          text: "I think showing the team's personality helps investors feel a connection. People buy from people, and the bio slide humanises us.",
          score: 0,
          result: "weak",
          explanation:
            "This generic argument does not address Jordan's point about time and decision-driving content. Investors seeing 15 pitches a week are not moved by hobbies.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to rewrite the opening 60 seconds of the pitch: problem, solution, ask. No preamble. Write it in a direct style - punchy, clear, and focused on the investor decision.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "UK small businesses lose 14 billion pounds a year to late payments. Existing solutions chase invoices after they are overdue. We prevent late payments before they happen using automated payment scheduling integrated directly into accounting software.\n\nWe launched nine months ago. 1,200 paying customers. Monthly recurring revenue at 180K and growing 22% month on month.\n\nWe are raising 3 million at a 15 million pre-money valuation to triple our sales team and expand into three European markets by Q2 next year.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Problem, solution, traction, ask - all within 60 seconds. An investor knows exactly what you do, why it works, and what you need. Jordan would approve this opening.",
          observation:
            "You used specific numbers throughout - 14 billion, 1,200 customers, 22% growth. Direct communicators respect precision that serves speed.",
          coachingTip:
            "When writing pitch openings for direct communicators, every sentence should either define the opportunity or quantify the traction. Delete anything that does neither.",
          styleContext:
            "Direct communicators measure pitch quality by how quickly an investor can form a view. If the opening does the job, the rest of the pitch is a conversation, not a performance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether you have included all three elements clearly: the problem, your solution, and the specific ask. If any of the three is vague, the opening loses its punch.",
          observation:
            "If your opening talks about the market opportunity without specifying what you are asking for and at what valuation, it is incomplete.",
          coachingTip:
            "State the ask with numbers. 'We are raising capital' is too vague. 'We are raising 3 million at a 15 million valuation' is actionable for an investor.",
          styleContext:
            "Direct communicators want the ask stated with the same precision as the problem. Vague asks signal that the founder has not done their homework.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening is either too long, too vague, or buries the ask behind too much context. Jordan wanted 60 seconds of impact, not a warm-up.",
          observation:
            "If your opening starts with 'imagine a world where' or 'let me tell you why we started this company', it has missed the brief.",
          coachingTip:
            "Delete every sentence that is not the problem, the solution, the traction, or the ask. What remains should take under 60 seconds to deliver.",
          styleContext:
            "Direct communicators believe that pitch openings should function like headlines. If you cannot summarise it in three lines, you do not understand it well enough.",
        },
      },
    },
  },

  // Scenario 386 - Sam Hartley, presentation, intermediate
  {
    id: "scenario-386",
    title: "The Board Strategy Update",
    context:
      "Sam has been asked to present the quarterly strategy update to the board of directors. The board has signalled they want fewer slides, clearer recommendations, and less hedging.",
    chooseContext:
      "Sam is reviewing the presentation with you before the board meeting. The current draft has 30 slides and three 'areas for further exploration'. Sam wants to cut it to 15 slides with clear positions on each topic.",
    rewriteContext:
      "Sam has asked you to rewrite the executive summary slide - the one the board sees first - so it states the three key recommendations without qualification.",
    characterId: "sam-hartley",
    dialogue:
      "The board told me last quarter that they want positions, not options. They do not want me to present three scenarios and ask them to choose. They want me to say 'I recommend this, for these reasons, and here is what I need from you to make it happen.' That is what we are going to do.",
    chooseDialogue:
      "This slide says 'we are exploring the possibility of entering the Nordic market'. That is not a recommendation, it is a placeholder. Either we are entering the Nordic market or we are not. Which is it? If the answer is yes, say so and tell the board what it costs. If the answer is we are not ready, say that and state what needs to happen first.",
    rewriteDialogue:
      "Rewrite the executive summary. Three recommendations, each in one sentence. Under each one, the key supporting fact and what you need the board to approve. No maybes, no 'subject to further analysis'. Give them a decision to make.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam is preparing a board presentation by replacing exploratory language with firm recommendations, demanding clear positions on each topic, and eliminating hedging. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam is converting ambiguity into clear positions, demanding specific recommendations over options, and eliminating qualifiers. This is direct communication tailored for a board audience that wants decisions, not discussions.",
          observation:
            "Notice how Sam reframes 'exploring the possibility' as a binary choice: yes or no. Direct communicators force clarity by rejecting the middle ground.",
          coachingTip:
            "When someone demands clear recommendations over open questions, eliminates hedging language, and focuses on what they need the audience to decide, they are using a direct style.",
          styleContext:
            "Direct communicators present to boards as decision-makers, not information-sharers. Every slide should lead to a yes, a no, or an approval of resources.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam's focus on evidence and structure can look analytical. But notice the emphasis is on taking positions, not on providing exhaustive analysis. An analytical presenter would offer more data, not less hedging.",
          observation:
            "An analytical presenter would add supporting evidence to make each recommendation bulletproof. Sam is removing qualifiers to make each recommendation decisive.",
          coachingTip:
            "If someone is cutting analysis to strengthen positions, that is direct. If they are adding analysis to strengthen positions, that is analytical.",
          styleContext:
            "Direct communicators know that boards respect certainty. They would rather defend a strong position than present a balanced view and let the board decide.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not focused on making the presentation inspiring, building enthusiasm for the strategy, or connecting the recommendations to the company's mission and values.",
          observation:
            "There is no reference to narrative, vision, or emotional engagement. Sam is engineering a decision-making instrument, not crafting an inspiring story.",
          coachingTip:
            "Is this person designing a presentation to inspire or to decide? Sam is firmly focused on getting board approvals, not standing ovations.",
          styleContext:
            "Direct communicators see board presentations as mechanisms for extracting decisions. Inspiration is a bonus, not a requirement.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has demanded that 'exploring the Nordic market' be replaced with a clear recommendation. You are not confident the data supports a firm yes. How do you respond?",
      options: [
        {
          id: "s386-opt-a",
          text: "The data does not support a launch recommendation yet. Tell the board: 'We need three months and 50K for a market validation study. We return with a go or no-go in Q3.' Clear position, no premature commitment.",
          score: 10,
          result: "strong",
          explanation:
            "You gave a clear position - 'not ready yet' - with a specific action, timeline, and cost. Sam wants positions, and 'not yet, here is what we need first' is a valid position.",
        },
        {
          id: "s386-opt-b",
          text: "What if we present it as a conditional recommendation? Something like 'we recommend Nordic entry subject to positive results from a validation study'.",
          score: 5,
          result: "partial",
          explanation:
            "This is still hedging. Sam has explicitly said the board does not want conditions and qualifiers. A recommendation with a caveat is not a recommendation.",
        },
        {
          id: "s386-opt-c",
          text: "I think we should present the data we have and let the board decide. They have the strategic context that we might not have visibility of.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly what the board said they do not want. Sam has been told to bring positions, not options. Asking the board to decide for you signals a lack of leadership.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to rewrite the executive summary slide with three firm recommendations, each supported by one key fact and one board approval needed. Write it in a direct style - no hedging, no qualifiers.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Executive Summary - Three Recommendations\n\n1. Expand the enterprise sales team by four headcount in Q2.\n   Why: Enterprise pipeline has grown 40% but close rate has dropped from 35% to 22% due to capacity constraints.\n   Board approval needed: 320K incremental headcount budget.\n\n2. Pause Nordic market entry until Q3. Commission a 50K market validation study.\n   Why: Current data is insufficient for a launch decision. Competitor analysis shows two incumbents with 70% market share.\n   Board approval needed: 50K research budget and revised timeline.\n\n3. Accelerate the product integration with Salesforce. Ship by end of Q2.\n   Why: 60% of enterprise prospects cite Salesforce integration as a requirement. Current timeline is Q3.\n   Board approval needed: Reallocate two engineers from the mobile roadmap for eight weeks.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Three clear recommendations, each with a single supporting fact and a specific board ask. Sam would present this slide knowing the board can make decisions immediately.",
          observation:
            "You stated positions, not options. Even the 'pause' recommendation is framed as a decision, not a deferral. That takes confidence.",
          coachingTip:
            "When writing board summaries for direct communicators, make every recommendation something the board can vote on. If it needs further discussion, it is not ready for the summary.",
          styleContext:
            "Direct communicators earn board respect by taking positions and defending them. A summary that requires the board to interpret or choose between options is incomplete.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether each recommendation is truly a position. If any of them include phrases like 'we suggest considering' or 'it may be worth exploring', they are not firm enough.",
          observation:
            "If the board approval needed is vague - 'additional resources' rather than '320K headcount budget' - the recommendation cannot be actioned.",
          coachingTip:
            "Quantify every ask. 'More budget' becomes '320K'. 'Additional time' becomes 'eight weeks'. Boards approve numbers, not concepts.",
          styleContext:
            "Direct communicators know that vague asks get deferred. Specific asks get approved or rejected, and both are better than limbo.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too wordy, lacks clear recommendations, or does not specify what the board needs to approve.",
          observation:
            "If your summary reads like a status update rather than a decision document, it has missed Sam's brief.",
          coachingTip:
            "Each recommendation should follow the same pattern: what you want to do, why, and what you need from the board. If any element is missing, add it.",
          styleContext:
            "Direct communicators design board slides to be self-contained decision points. The summary alone should give the board enough to act.",
        },
      },
    },
  },

  // Scenario 387 - Alex Tran, presentation, advanced
  {
    id: "scenario-387",
    title: "The Crisis Communications Briefing",
    context:
      "A data breach has affected 50,000 customer records. Alex has been asked to present the incident response plan to the executive team within two hours. There is no time for polish - only clarity.",
    chooseContext:
      "Alex has five slides and is walking the executive team through the immediate actions, the communication timeline, and the regulatory obligations. Questions are coming fast.",
    rewriteContext:
      "Alex has asked you to draft the customer-facing incident notification that will go out within 24 hours. It must be clear about what happened, what is being done, and what customers need to do.",
    characterId: "alex-tran",
    dialogue:
      "Here is what we know. At 03:14 this morning, an unauthorised access event exposed personal data for approximately 50,000 customers. Names, email addresses, and hashed passwords. No financial data. We isolated the breach by 04:30 and the vulnerability is patched. I have five slides. Let us move through them fast.",
    chooseDialogue:
      "The regulator must be notified within 72 hours. We are filing today. Customer notification goes out within 24 hours. Legal has reviewed the template. PR is holding all media enquiries until the notification is sent. Do not let anyone get ahead of the official communication. Questions on the timeline?",
    rewriteDialogue:
      "Write the customer notification. What happened, when, what data was affected, what we have done about it, and what they need to do. No corporate apology waffle. Clear, factual, and actionable. If a customer reads it in 60 seconds, they should know exactly what to do next.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex is briefing the executive team on a data breach by presenting facts with timestamps, stating regulatory deadlines, issuing clear instructions about communications, and moving through five slides at pace. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex leads with facts, provides a clear timeline, issues directives about communication control, and moves at high speed. This is direct communication in crisis mode - no ambiguity, no deliberation, just decisions and deadlines.",
          observation:
            "Notice how Alex says 'do not let anyone get ahead of the official communication'. In a crisis, direct communicators take control of the information flow immediately.",
          coachingTip:
            "When someone briefs in bullet points, sets non-negotiable deadlines, and issues clear instructions under pressure, they are using a direct style. Respond with execution, not questions about approach.",
          styleContext:
            "Direct communicators excel in crisis situations because they prioritise speed, clarity, and control. Ambiguity in a crisis is more dangerous than a wrong decision.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex provides specific timestamps and data, which looks analytical. But notice that the data serves immediate action, not investigation. Alex is not analysing the breach - they are executing the response.",
          observation:
            "An analytical communicator would present a root cause analysis and forensic timeline. Alex presents the facts needed for the executive team to make decisions now.",
          coachingTip:
            "If data is used to drive immediate action, that is direct. If data is used to build understanding before acting, that is analytical. Alex is firmly in the action camp.",
          styleContext:
            "Direct communicators use data in a crisis as ammunition for decision-making, not as the basis for further investigation. The investigation comes later - right now, decisions need to be made.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not paused to consider how the team is feeling about the breach, checked on wellbeing, or offered reassurance about job security. The focus is entirely operational.",
          observation:
            "There is no reference to team stress, emotional support, or the human impact on employees managing the response. Alex is in full operational command mode.",
          coachingTip:
            "In a crisis, is this person managing feelings or managing the response? Alex is entirely focused on executing the incident plan.",
          styleContext:
            "Direct communicators in a crisis do not pause for emotional check-ins. They believe that executing the plan well is the best form of care for everyone affected.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has stated that customer notification goes out within 24 hours. The head of marketing suggests waiting 48 hours to craft a more empathetic message. How do you respond?",
      options: [
        {
          id: "s387-opt-a",
          text: "We cannot wait. If a customer finds out from the media before hearing from us, the trust damage is far worse. We send within 24 hours and follow up with more detail later.",
          score: 10,
          result: "strong",
          explanation:
            "You prioritised speed and regulatory compliance while acknowledging the concern about tone with a follow-up option. This matches Alex's crisis management approach.",
        },
        {
          id: "s387-opt-b",
          text: "Could we compromise and send a brief initial notification today confirming the breach, then follow up tomorrow with a more detailed message?",
          score: 5,
          result: "partial",
          explanation:
            "This adds complexity to the communications plan during a crisis. Alex wants one clear notification, not a multi-part drip. Simplicity matters under pressure.",
        },
        {
          id: "s387-opt-c",
          text: "I think the tone of the message matters more than the speed. Customers will judge us on how we communicate, not just how quickly.",
          score: 0,
          result: "weak",
          explanation:
            "This creates a false choice between speed and quality. Alex has already said legal has reviewed the template. The message can be clear and factual within 24 hours without sacrificing professionalism.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to draft the customer-facing breach notification. What happened, when, what data, what you have done, what they should do. Write it in a direct style - clear, factual, and readable in 60 seconds.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Important security notice about your account\n\nWhat happened\nOn 12 March, we detected unauthorised access to a part of our system that stores customer account information. The access occurred at 03:14 and was contained by 04:30 the same morning.\n\nWhat data was affected\nYour name, email address, and hashed (encrypted) password may have been accessed. No financial data, payment information, or identity documents were affected.\n\nWhat we have done\n- Identified and patched the vulnerability within 90 minutes\n- Reported the incident to the Information Commissioner's Office\n- Engaged an independent cybersecurity firm to conduct a full review\n- Implemented additional monitoring on all affected systems\n\nWhat you should do\n1. Change your password on our platform today\n2. If you use the same password on other services, change those too\n3. Be cautious of any emails claiming to be from us - we will never ask for your password\n\nIf you have questions, contact our dedicated support line: 0800 XXX XXXX (open 8am-8pm, seven days a week).",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your notification is factual, structured, and a customer can read it in under 60 seconds and know exactly what to do. Alex would approve this for immediate distribution.",
          observation:
            "You used clear section headers, numbered actions, and avoided corporate apology language. Every sentence serves a purpose.",
          coachingTip:
            "When writing crisis communications for direct communicators, structure for scanning. Headers, bullets, and numbered steps ensure people absorb the key information even if they are anxious.",
          styleContext:
            "Direct communicators believe that in a crisis, clear communication is caring communication. A notification that people can act on immediately is more compassionate than one that apologises at length.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the customer actions are truly specific and numbered. If your 'what to do' section says 'remain vigilant' without concrete steps, it is not actionable enough.",
          observation:
            "If your notification includes a lengthy apology paragraph before getting to the facts, it delays the information customers need most.",
          coachingTip:
            "Lead with facts, not feelings. Customers can decide how they feel once they know what happened and what to do. Do not curate their emotional response.",
          styleContext:
            "Direct communicators write breach notifications that empower customers to act, not to feel reassured. Action is the best form of reassurance.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your notification is either too long, too vague about the actions customers should take, or spends more time apologising than informing.",
          observation:
            "If your notification opens with 'we deeply regret to inform you' and spends three paragraphs on how much the company values security before explaining what happened, it has failed the 60-second test.",
          coachingTip:
            "Cut every sentence that is not a fact, an action, or a contact point. What remains is the notification Alex wants.",
          styleContext:
            "Direct communicators in a crisis measure communications by utility, not empathy. A customer who knows what to do is better served than one who feels apologised to.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (388-390) - negotiation
  // ============================================

  // Scenario 388 - Priya Sharma, negotiation, foundation
  {
    id: "scenario-388",
    title: "The Partnership Proposal",
    context:
      "Priya is negotiating a co-marketing partnership with a complementary brand. Both sides see the potential but are cautious about commitment. Priya wants to build excitement about the shared opportunity.",
    chooseContext:
      "The other brand's marketing director is hesitant about a 12-month commitment. Priya is focusing on the vision of what they could achieve together rather than the contractual terms.",
    rewriteContext:
      "Priya has asked you to draft a partnership proposal email that leads with the shared vision and makes the opportunity feel exciting rather than transactional.",
    characterId: "priya-sharma",
    dialogue:
      "I do not want this to feel like a vendor agreement. We are two brands that share the same audience and the same values. Imagine what we could do if we stopped thinking about who gets more logo space and started thinking about the campaign we could run together that neither of us could pull off alone.",
    chooseDialogue:
      "I hear the concern about 12 months, and I respect that. But think about where we could be a year from now if we commit to this. A joint event series, co-branded content that both audiences love, and a case study that makes every other partnership in our space look boring. That is worth a bit of courage, is it not?",
    rewriteDialogue:
      "Write the proposal email. I want them to read it and feel excited, not cautious. Lead with what we can build together, paint the picture of the first campaign, and then cover the practical terms. The vision comes first, the contract comes second.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Priya is negotiating a partnership by focusing on shared vision, painting a picture of joint success, and framing the commitment as courageous rather than risky. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with vision, uses vivid language to paint the future, and reframes risk as courage. This is expressive negotiation - selling the dream before discussing the details.",
          observation:
            "Notice how Priya says 'imagine what we could do' and 'a case study that makes every other partnership look boring'. Expressive communicators negotiate by making the future feel irresistible.",
          coachingTip:
            "When a negotiator leads with a compelling vision of joint success rather than terms and conditions, they are using an expressive style. Engage with their enthusiasm.",
          styleContext:
            "Expressive communicators believe that if both parties are excited about the vision, the terms will work themselves out. Excitement precedes agreement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and relationship-focused, which can look supportive. But notice the energy and forward momentum. A supportive negotiator would focus more on making the other party feel safe and heard, with less push toward the exciting future.",
          observation:
            "A supportive negotiator would say 'I want to make sure you feel comfortable with this'. Priya says 'that is worth a bit of courage, is it not?' The approach is energising, not reassuring.",
          coachingTip:
            "If someone negotiates by painting an exciting future, that is expressive. If they negotiate by creating a safe, comfortable process, that is supportive.",
          styleContext:
            "Expressive communicators sell opportunity. Supportive communicators sell safety. Both build relationships, but through different emotional registers.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented ROI projections, audience overlap analysis, or a structured comparison of partnership models. The pitch is emotional, not analytical.",
          observation:
            "There is no reference to data, metrics, or evidence-based justification. Priya is negotiating with vision and energy, not spreadsheets.",
          coachingTip:
            "Is this person selling with data or with enthusiasm? Priya is firmly in the enthusiasm camp.",
          styleContext:
            "Expressive communicators know that data can support a decision, but excitement drives one. They lead with the feeling and back it up with facts only when asked.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has painted an exciting vision of the partnership. The other brand's director says they love the idea but need to see projected numbers before committing. How do you respond?",
      options: [
        {
          id: "s388-opt-a",
          text: "Absolutely - and I want the numbers to be as exciting as the vision. Let us sketch the first joint campaign, estimate the reach, and build the case together. I would love us both presenting this to leadership.",
          score: 10,
          result: "strong",
          explanation:
            "You embraced the need for numbers while keeping the collaborative, enthusiastic tone. Making the business case a shared project maintains the expressive partnership spirit.",
        },
        {
          id: "s388-opt-b",
          text: "Of course. I will put together a detailed projection with audience overlap data, estimated reach, and cost per acquisition targets. You will have it by Friday.",
          score: 5,
          result: "partial",
          explanation:
            "This is responsive but shifts to a transactional, analytical mode. Priya would want the business case to feel collaborative and exciting, not like a report delivered unilaterally.",
        },
        {
          id: "s388-opt-c",
          text: "Numbers are important, but I think sometimes you need to trust the energy between two brands. The best partnerships are not built on spreadsheets - they are built on shared belief.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses a reasonable request and comes across as naive. Even expressive negotiators need to back their vision with substance when asked.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to draft a partnership proposal email that leads with the shared vision, paints the first campaign, and then covers practical terms. Write it in an expressive style - exciting, collaborative, and forward-looking.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Claire,\n\nI have not stopped thinking about our conversation last week. The more I consider what our two brands could create together, the more convinced I am that this is one of those partnerships that just makes sense.\n\nHere is what I keep coming back to: our audiences overlap, our values align, and neither of us could pull off alone what we could build together. Imagine a joint autumn campaign - a co-branded content series that tells a story about sustainable living, amplified across both our channels. Your community trusts your voice on product quality; ours trusts us on lifestyle. Together, we own the full conversation.\n\nFirst campaign concept: a four-part video series launching in September, hosted on both platforms, with a joint live event to close it out. Both brands share production costs and creative input equally.\n\nOn the practical side, I am thinking a 12-month framework agreement with quarterly reviews, so neither of us is locked in without the chance to shape how things evolve. I want this to feel like a partnership, not a contract.\n\nI would love to set up a call this week to explore this further. I genuinely believe we could create something special.\n\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with genuine excitement, paints a vivid first campaign, and makes the practical terms feel collaborative rather than contractual. Priya would send this with confidence.",
          observation:
            "You balanced vision with substance. The campaign concept is specific enough to feel real, and the terms are framed as a partnership, not a transaction.",
          coachingTip:
            "When writing partnership proposals for expressive communicators, make the vision tangible. A specific campaign concept is more exciting than a general statement about 'synergies'.",
          styleContext:
            "Expressive communicators want proposals that make people feel something. If the reader finishes the email and feels excited to say yes, the proposal has worked.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your email genuinely creates excitement or just describes the partnership in neutral terms. The difference between a good and great proposal email is emotional energy.",
          observation:
            "If your email reads like a business summary rather than an enthusiastic invitation, it needs more warmth and vision.",
          coachingTip:
            "Add personal touches - what excites you about the partnership, why you think it is special, what you keep coming back to. Make it feel like a conversation, not a pitch.",
          styleContext:
            "Expressive communicators write proposals as if they are inviting someone to join an adventure, not asking them to review a commercial arrangement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too focused on terms, or fails to create any emotional energy around the partnership opportunity.",
          observation:
            "If your email opens with 'further to our meeting, please find below a partnership proposal' or leads with contractual terms, it has missed Priya's brief entirely.",
          coachingTip:
            "Start with what excites you. Paint the first campaign. Then mention the terms. If the order is reversed, the emotional impact is lost.",
          styleContext:
            "Expressive communicators believe that if a proposal does not make the reader feel excited, it will not matter how good the terms are.",
        },
      },
    },
  },

  // Scenario 389 - Marcus Webb, negotiation, intermediate
  {
    id: "scenario-389",
    title: "The Talent Retention Counter-Offer",
    context:
      "Marcus's top performer has received an external offer and is considering leaving. Marcus needs to have a retention conversation that goes beyond salary and connects with what genuinely motivates this person.",
    chooseContext:
      "Marcus has learned that the external offer is 15% more in salary, but the employee's real frustration is feeling undervalued and overlooked for a recent promotion. Marcus wants to address the whole picture.",
    rewriteContext:
      "Marcus has asked you to draft a follow-up email after the retention conversation, summarising the commitments made and reinforcing how much the employee is valued.",
    characterId: "marcus-webb",
    dialogue:
      "I am glad you told me about the offer, and I am not going to pretend I am not worried about losing you. But before we talk numbers, I want to talk about what you actually need. Because if you leave for 15% more money but the same frustrations, nothing has really changed. What would make you wake up on Monday and feel genuinely excited to be here?",
    chooseDialogue:
      "I heard you about the promotion. You were ready for it, and I should have fought harder for you. That is on me, and I am owning it. Here is what I want to do - let us build a development plan that puts you in the strongest possible position for the next opportunity, and I will personally sponsor you for it. The money matters, and we will address that too. But I want to fix the thing that actually hurt.",
    rewriteDialogue:
      "Write the follow-up email. It should feel personal, not HR-generated. Restate what I committed to - the development plan, my sponsorship, the salary review. But also remind them what they mean to this team. I want them to read it and remember why they belong here.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus is handling a retention conversation by looking beyond salary, acknowledging where he personally fell short, committing to sponsorship, and trying to reconnect the employee with their sense of purpose. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus goes beyond the transactional counter-offer to address emotional needs, takes personal accountability, and frames the retention around purpose and excitement. This is expressive communication - connecting with what genuinely motivates someone.",
          observation:
            "Notice how Marcus asks 'what would make you wake up on Monday and feel genuinely excited to be here?' Expressive communicators frame retention in terms of passion and belonging, not just compensation.",
          coachingTip:
            "When someone handles retention by addressing emotional needs alongside practical ones and takes personal responsibility for past mistakes, they are using an expressive style.",
          styleContext:
            "Expressive communicators retain talent by rebuilding the emotional connection to the work. They know that people leave managers and cultures, not just salaries.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is empathetic and caring, which looks supportive. But notice the energy and personal initiative - sponsorship, fighting harder, building a plan together. A supportive communicator would focus more on listening and less on forward action.",
          observation:
            "A supportive communicator would say 'I want to understand how you are feeling'. Marcus says 'I should have fought harder - that is on me, and here is what I am going to do about it'. The pace is expressive.",
          coachingTip:
            "If someone takes personal ownership of the problem and immediately proposes an energetic path forward, that is expressive. If they linger on understanding the feelings, that is supportive.",
          styleContext:
            "Expressive communicators in retention conversations combine vulnerability with momentum. They own the mistake and then charge forward with a plan.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not benchmarked the salary against market data, presented a structured career progression framework, or run a cost-benefit analysis of the counter-offer.",
          observation:
            "There is no reference to compensation bands, market rates, or total reward packages. Marcus is working with emotion and relationship, not data and structure.",
          coachingTip:
            "Is this person retaining with data or with connection? Marcus is firmly in the connection camp.",
          styleContext:
            "Expressive communicators believe that if you fix the emotional disconnect, the salary negotiation becomes much easier. They solve the heart problem first.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has acknowledged missing the promotion opportunity and committed to sponsoring the employee for the next one. The employee says they appreciate it but are still drawn to the certainty of the external offer. How do you respond?",
      options: [
        {
          id: "s389-opt-a",
          text: "I understand the pull of certainty. But certainty of what? A new title where nobody knows your work? Here, you have a track record, a team that respects you, and a manager openly saying he got it wrong. That is rare. Let us make the next year undeniable.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the appeal of the external offer while painting a compelling picture of what staying offers. The reframe is emotional, honest, and forward-looking - classic expressive persuasion.",
        },
        {
          id: "s389-opt-b",
          text: "What if I can match the salary and confirm the promotion timeline in writing? Would that give you the certainty you need to stay?",
          score: 5,
          result: "partial",
          explanation:
            "This addresses the practical concern but turns the conversation transactional. Marcus was trying to reconnect on a deeper level than salary matching.",
        },
        {
          id: "s389-opt-c",
          text: "You need to do what is best for your career. I do not want you to stay out of guilt or loyalty if the other opportunity is genuinely better.",
          score: 0,
          result: "weak",
          explanation:
            "While respectful, this essentially concedes the negotiation. Marcus is fighting to retain this person - giving them permission to leave is not the approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a follow-up email after the retention conversation. Restate commitments, reinforce the employee's value, and make it feel personal. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Jamie,\n\nThank you for the conversation today. I know it took courage to be that honest, and I respect you for it.\n\nI want to put in writing what I committed to, because words only matter if they lead to action:\n\n1. Salary review: I am submitting a request for a market adjustment this week. You will have the outcome by the 28th.\n2. Development plan: We will co-create a six-month plan focused on the capabilities needed for senior leadership. I want you shaping this, not just receiving it.\n3. Promotion sponsorship: When the next opportunity opens, I will sponsor you personally. Not as a gesture - because I genuinely believe you are ready.\n\nBut here is what I want you to remember beyond the commitments. You have built something here. The way you lead your team, the standards you set, the trust people place in you - that did not happen by accident. This team is better because you are in it, and I should have told you that more often.\n\nI am asking you to stay, and I am asking because it matters to me.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is personal, honest, and balances practical commitments with genuine emotional appeal. Marcus would send this knowing it represents exactly how he feels.",
          observation:
            "You moved from commitments to appreciation seamlessly. The closing line - asking them to stay and saying why - is vulnerable and powerful.",
          coachingTip:
            "When writing retention follow-ups for expressive communicators, include the commitments but also say what the person means to you. The emotional truth is as important as the practical promises.",
          styleContext:
            "Expressive communicators see retention emails as love letters to talent. They are personal, vulnerable, and unambiguous about how much the person matters.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the email genuinely feels personal or just lists the commitments professionally. Marcus wants this to be a human message, not an HR document.",
          observation:
            "If the email reads like a meeting summary with a nice closing line, it needs more personal investment throughout.",
          coachingTip:
            "Add sentences that could only be written by someone who knows this person well. Reference their specific contributions, not just their general value.",
          styleContext:
            "Expressive communicators personalise everything. A retention email should be impossible to forward to another employee because it is so specifically about this one person.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too brief, or reads like a standard counter-offer letter rather than a personal appeal from a leader who cares.",
          observation:
            "If the email starts with 'following our discussion' or ends with 'please confirm your decision by Friday', it has missed Marcus's intent entirely.",
          coachingTip:
            "Start with gratitude for their honesty. State commitments clearly. Then tell them what they mean to you and the team. Close by asking them to stay - directly.",
          styleContext:
            "Expressive communicators would never send a retention email that could have been written by a stranger. The personal connection is the entire point.",
        },
      },
    },
  },

  // Scenario 390 - Nina Okafor, negotiation, advanced
  {
    id: "scenario-390",
    title: "The Contract Renewal Negotiation",
    context:
      "A major client is renegotiating their annual contract and has requested a 20% fee reduction. Nina believes the relationship is strong enough to negotiate from a position of added value rather than discounting.",
    chooseContext:
      "Nina is in the negotiation meeting. The client's procurement lead has pushed hard on price. Nina is redirecting the conversation toward the value delivered and the cost of switching providers.",
    rewriteContext:
      "Nina has asked you to draft a proposal that reframes the negotiation around expanded value rather than reduced fees, making the client feel like they are getting more rather than paying too much.",
    characterId: "nina-okafor",
    dialogue:
      "I completely understand the pressure to reduce costs - every organisation is feeling it. But I want us to think about this differently. Instead of cutting 20% and getting less, what if we kept the investment level and I showed you how we deliver 30% more value? I would rather find a way to give you more than take something away.",
    chooseDialogue:
      "You mentioned switching providers as an option, and I respect that honesty. But let us be real for a moment - in four years, we have never missed a deadline, your NPS scores have climbed 15 points since we started working together, and I personally know your business better than anyone on our bench. That is hard to replace, and I think you know that.",
    rewriteDialogue:
      "Write the proposal. Frame it as 'enhanced partnership' not 'contract renewal'. Lead with what we have delivered over four years, propose three additional services at the current price point, and close with what this partnership means for their strategic goals. Make them feel like staying is the exciting choice, not the safe one.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina is responding to a discount request by reframing the negotiation around added value, referencing the personal relationship and track record, and making continued partnership feel like the exciting option. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina reframes a price negotiation as a value conversation, uses the personal relationship as leverage, and makes staying feel exciting rather than merely sensible. This is expressive negotiation at an advanced level.",
          observation:
            "Notice how Nina says 'I would rather find a way to give you more than take something away'. Expressive negotiators reframe constraints as creative opportunities.",
          coachingTip:
            "When a negotiator pivots from discussing price to discussing value, uses personal credibility, and makes the status quo feel exciting, they are operating in an expressive style.",
          styleContext:
            "Expressive communicators refuse to negotiate on their back foot. They take a discount request and turn it into a conversation about expanded partnership.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is warm and relationship-focused, which can seem supportive. But notice the confidence and strategic reframing. A supportive negotiator would focus on making the client feel heard and comfortable, not on redirecting the negotiation entirely.",
          observation:
            "A supportive negotiator would say 'I want to make sure we find something that works for both of us'. Nina says 'what if we kept the investment and I showed you 30% more value?' That is a bold counter-move, not a collaborative exploration.",
          coachingTip:
            "If someone uses warmth to redirect a negotiation strategically, that is expressive. If they use warmth to create a safe space for mutual exploration, that is supportive.",
          styleContext:
            "Expressive communicators use relationships as negotiation tools. Their warmth is genuine, but it also serves a strategic purpose.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a detailed cost comparison, benchmarked fees against competitors, or offered a structured analysis of the ROI her team delivers.",
          observation:
            "Nina mentions NPS scores and track record, but as relationship evidence, not as a formal ROI analysis. The persuasion is emotional and relational, not data-driven.",
          coachingTip:
            "Is this person negotiating with data or with relationship? Nina uses a few key facts, but the primary tool is personal credibility and vision.",
          styleContext:
            "Expressive communicators reference results but do not build their case around spreadsheets. They trust that a strong relationship is more persuasive than a strong business case.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has reframed the negotiation around added value. The procurement lead says they appreciate the creativity but their CFO has mandated a 20% cost reduction across all suppliers - no exceptions. How do you respond?",
      options: [
        {
          id: "s390-opt-a",
          text: "I would never ask you to go against your CFO. But what if I show a 20% increase in deliverables at the same price? That is a 20% reduction in unit cost - your CFO gets the saving, you get more value.",
          score: 10,
          result: "strong",
          explanation:
            "You honoured the constraint, found a creative reframe that satisfies the CFO's mandate, and kept the positive, collaborative energy. This is expressive negotiation at its best.",
        },
        {
          id: "s390-opt-b",
          text: "Could we reduce the scope by 20% to match the budget, and then add services back in as optional extras? That way the base contract meets the mandate.",
          score: 5,
          result: "partial",
          explanation:
            "This solves the problem technically but loses the spirit of Nina's approach. Reducing scope feels like giving something up, not creating something new.",
        },
        {
          id: "s390-opt-c",
          text: "If every supplier is being cut by 20%, that is a procurement decision, not a negotiation. Perhaps we should accept the reduction and adjust our service level accordingly.",
          score: 0,
          result: "weak",
          explanation:
            "This concedes without attempting to find a creative solution. Nina's entire approach is about reframing constraints as opportunities - accepting defeat is the opposite.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to draft an 'enhanced partnership' proposal that leads with four years of results, proposes three additional services at the current price, and closes with strategic vision. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Enhanced Partnership Proposal\n\nFour Years of Shared Success\nWhen we started working together, your customer satisfaction score was 62. Today it is 77. Your campaign turnaround time has dropped from 15 days to 6. And together, we have launched 14 campaigns that exceeded their target KPIs. This is not just our work - it is our partnership in action.\n\nWhat We Are Proposing\nRather than reducing the scope of what we do together, we want to expand it. At your current investment level, we are adding three new services:\n\n1. Quarterly brand health reporting - a pulse check on how your brand is performing against three key competitors\n2. A dedicated creative strategist for your team - someone who knows your brand and is available for reactive briefs within 24 hours\n3. Annual campaign planning workshop - a full-day session where our senior team and yours co-create the year's strategy together\n\nThe unit cost of our partnership drops by over 20%, but what you receive goes up significantly.\n\nLooking Ahead\nYour strategic plan talks about becoming the most trusted brand in your category by 2028. We want to be the partner that helps you get there. Everything we deliver is in service of that goal, and we are more invested in your success today than we were four years ago.\n\nLet us build the next chapter together.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal reframes the negotiation entirely - the client gets more, the unit cost drops, and the vision for the future is compelling. Nina would present this knowing it changes the conversation.",
          observation:
            "You turned a price negotiation into a value proposition. The additional services make the current price feel like a bargain rather than an expense.",
          coachingTip:
            "When writing proposals for expressive negotiators, lead with the relationship story, propose more rather than less, and close with a shared vision. Make staying the exciting choice.",
          styleContext:
            "Expressive communicators never concede ground in a negotiation without adding ground elsewhere. They expand the pie rather than arguing about slices.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your proposal genuinely creates excitement or just presents a reasonable business alternative. Nina wants the client to feel inspired to say yes.",
          observation:
            "If the additional services feel like add-ons rather than genuine enhancements, the proposal loses its persuasive energy.",
          coachingTip:
            "Make each additional service connect to the client's strategic goals. If the client can see how each service moves them closer to their ambition, the proposal becomes irresistible.",
          styleContext:
            "Expressive communicators design proposals that tell a story. The narrative arc should be: look what we have built, imagine what we could build next, here is how we get there.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal is either too transactional, too focused on defending the current price, or fails to create any excitement about the expanded partnership.",
          observation:
            "If the proposal reads like a pricing justification or a scope reduction document, it has missed Nina's entire strategy.",
          coachingTip:
            "Start with results, not prices. Propose additions, not reductions. Close with vision, not terms. Reverse the typical procurement proposal structure.",
          styleContext:
            "Expressive communicators refuse to let negotiations become a race to the bottom. They compete on value, vision, and relationship - never on price alone.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (391-393) - remote
  // ============================================

  // Scenario 391 - Tom Brennan, remote, foundation
  {
    id: "scenario-391",
    title: "The New Remote Starter",
    context:
      "A new team member is starting their first week remotely. Tom wants to make sure they feel welcomed, supported, and connected despite not being in the office.",
    chooseContext:
      "It is the end of the new starter's first day. Tom is checking in via video call to see how they are settling in and whether they need anything.",
    rewriteContext:
      "Tom has asked you to write a welcome message that the team posts in the group chat for the new starter, making them feel genuinely included from day one.",
    characterId: "tom-brennan",
    dialogue:
      "I wanted to check in before you finish your first day. Starting a new job remotely is not easy - you do not get the corridor conversations or the chance to pick up the culture by osmosis. So I want you to know that if anything feels unclear or you are not sure who to ask, that is completely normal. Just reach out to me. There are no silly questions, especially in week one.",
    chooseDialogue:
      "How are you feeling about everything? And I mean honestly, not the polished answer. I know first days can be overwhelming, and it is even harder when you are sitting at home without anyone to have a casual chat with. If it felt a bit lonely today, that is completely understandable, and it will get better.",
    rewriteDialogue:
      "Write a welcome message from the team. Nothing corporate - make it warm and personal. Mention something about us looking forward to working with them, and include a line about how we know starting remotely can feel isolating, but they are already part of the team.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom is welcoming a new remote starter by acknowledging the difficulty of starting remotely, normalising their uncertainty, and proactively offering personal support. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom anticipates the emotional challenges of remote onboarding, normalises uncertainty, and offers personal availability. This is supportive communication - making someone feel safe and cared for during a vulnerable moment.",
          observation:
            "Notice how Tom says 'there are no silly questions, especially in week one'. Supportive communicators remove barriers to asking for help by normalising the need.",
          coachingTip:
            "When someone proactively names the challenges a new person might face and offers personal support before being asked, they are using a supportive style.",
          styleContext:
            "Supportive communicators see the first week of a new job as an emotional event, not just an operational one. They invest in how the person feels, not just what they learn.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and welcoming, which can look expressive. But notice the focus is on safety and reassurance, not on excitement and energy. An expressive manager would say 'we are so thrilled to have you - this is going to be amazing!'",
          observation:
            "An expressive manager would celebrate the new start with enthusiasm. Tom is checking in on how the person feels and normalising their struggles. The tone is gentle, not energetic.",
          coachingTip:
            "If someone welcomes a new starter by making them feel safe, that is supportive. If they welcome them by making them feel excited, that is expressive.",
          styleContext:
            "Supportive communicators know that new starters need to feel safe before they can feel excited. Security comes before enthusiasm.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not run through the onboarding checklist, checked whether system access is working, or reviewed the first week's learning objectives.",
          observation:
            "There is no reference to tasks, milestones, or operational readiness. Tom is managing the emotional experience of starting, not the practical one.",
          coachingTip:
            "Is this person checking that the new starter is set up or that they are coping? Tom is firmly focused on the emotional dimension.",
          styleContext:
            "Supportive communicators believe that a new starter who feels welcomed will figure out the systems. But a new starter who feels alone will struggle regardless of the tools.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has asked the new starter how they are honestly feeling at the end of day one. They say they felt a bit lost and spent most of the afternoon not sure what to do. How do you respond?",
      options: [
        {
          id: "s391-opt-a",
          text: "Thank you for telling me that. Feeling lost on day one is completely normal, especially remotely. Let us map out tomorrow together right now so you know what to expect, and I will pair you with someone for a virtual coffee first thing.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the feeling, normalised it, and offered immediate practical support without making them feel like they failed. The buddy pairing adds the social connection Tom values.",
        },
        {
          id: "s391-opt-b",
          text: "That is really helpful feedback. I will update the onboarding schedule so day one has more structure. Can you send me your thoughts on what would have helped?",
          score: 5,
          result: "partial",
          explanation:
            "This is constructive but turns the new starter's vulnerability into a process improvement exercise. Tom would want to address their feelings first, not the system.",
        },
        {
          id: "s391-opt-c",
          text: "Do not worry - the first day is always a bit chaotic. By the end of the week you will be up to speed. Just keep working through the onboarding pack and let me know if you get stuck on anything.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the feeling ('do not worry') and sends them back to the same unstructured situation that left them feeling lost. Tom would see this as a missed opportunity to provide real support.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a warm welcome message from the team for the group chat. Acknowledge that starting remotely can feel isolating, and make the new starter feel like they are already part of the team. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Sam - welcome to the team! We are genuinely glad you are here.\n\nWe know that starting a new role remotely can feel a bit strange - you miss the handshakes, the office tour, and the chance to ask the person next to you a quick question. We want you to know that we have all been through it, and it gets much easier very quickly.\n\nIn the meantime, please treat this chat as your open door. No question is too small, and there is always someone around who is happy to help. We are a team that looks out for each other, and that includes you from day one.\n\nLooking forward to getting to know you properly over the coming weeks. Welcome aboard.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, acknowledges the specific challenges of remote starting, and makes inclusion feel immediate and genuine. Tom would approve this with a smile.",
          observation:
            "You named the things they are missing - handshakes, the office tour, the person next to them - which shows empathy for the specific experience, not just a generic welcome.",
          coachingTip:
            "When writing welcome messages for supportive communicators, name the specific challenges of the situation. Generic warmth is good; specific empathy is better.",
          styleContext:
            "Supportive communicators see welcome messages as an act of inclusion. The goal is to make someone feel like they belong before they have had a chance to prove themselves.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message truly acknowledges the challenge of remote starting or just offers a standard welcome. The specificity of the empathy matters.",
          observation:
            "If your message could apply equally to someone starting in the office, it has not addressed the unique challenge of being remote.",
          coachingTip:
            "Add a sentence that names what is hard about starting remotely - feeling isolated, not knowing who to ask, missing the casual conversations. Make them feel understood.",
          styleContext:
            "Supportive communicators tailor their warmth to the specific situation. A welcome message for a remote starter should feel different from one for an office starter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too corporate, or fails to address the emotional reality of starting a new role remotely.",
          observation:
            "If your message says 'welcome aboard, here is the onboarding pack' without any personal warmth, it has missed Tom's brief.",
          coachingTip:
            "Start with genuine warmth, acknowledge what might feel hard, and close with a clear message: you are one of us already.",
          styleContext:
            "Supportive communicators believe that the first message a new person receives sets the tone for their entire experience. Make it count.",
        },
      },
    },
  },

  // Scenario 392 - Leah Morgan, remote, intermediate
  {
    id: "scenario-392",
    title: "The Remote Wellbeing Check-In",
    context:
      "Leah has noticed that one of her remote team members has become quieter in meetings, slower to respond to messages, and has declined two optional team socials. She wants to check in without making assumptions.",
    chooseContext:
      "Leah has arranged a private video call. She wants to open a door for the team member to share what is going on, without pressuring them to disclose anything they are not ready to talk about.",
    rewriteContext:
      "Leah has asked you to draft a follow-up message after the call that gently reinforces the support available without being intrusive.",
    characterId: "leah-morgan",
    dialogue:
      "I wanted to have a chat - not about work, just about you. I have noticed you have been a bit quieter recently, and I want to make sure you are okay. There is no agenda here, and you do not have to share anything you are not comfortable with. I just want you to know that I have noticed, and I care.",
    chooseDialogue:
      "If there is something going on, whether it is work-related or personal, I want you to know that you can talk to me. And if now is not the right time, that is absolutely fine too. I am not going anywhere, and this conversation is always available whenever you need it.",
    rewriteDialogue:
      "Send a follow-up message after the call. Keep it gentle. Reiterate that I am here if they need anything, mention the employee assistance programme without making it feel like a referral, and let them know there is no pressure. I want them to feel supported, not watched.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has noticed changes in a remote team member's behaviour and arranged a private check-in, leading with care rather than concern, and explicitly removing any pressure to share. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah notices behavioural changes, initiates a caring conversation, explicitly removes pressure, and keeps the door open without forcing it. This is supportive communication at its most sensitive.",
          observation:
            "Notice how Leah says 'you do not have to share anything you are not comfortable with'. Supportive communicators create space for vulnerability without demanding it.",
          coachingTip:
            "When someone checks in by leading with care, removing pressure, and offering ongoing availability, they are using a deeply supportive style.",
          styleContext:
            "Supportive communicators know that forcing someone to talk can be as harmful as not checking in at all. They open doors and let people walk through them at their own pace.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and personally invested, which can look expressive. But notice the restraint - there is no attempt to energise or reframe. Leah is simply being present and available.",
          observation:
            "An expressive communicator would say 'I am here for you and we are going to get through this together'. Leah says 'there is no pressure, and this conversation is always available'. The approach is patient, not energetic.",
          coachingTip:
            "If someone opens a door and steps back, that is supportive. If they open a door and encourage you through it with enthusiasm, that is expressive.",
          styleContext:
            "Supportive communicators in sensitive situations prioritise the other person's control over the conversation. They never assume they know what someone needs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not flagged the performance impact, discussed the missed meetings in terms of team obligations, or set expectations for improvement.",
          observation:
            "There is no reference to productivity metrics, attendance records, or performance standards. Leah is checking on the person, not the output.",
          coachingTip:
            "Is this person managing performance or managing wellbeing? Leah is entirely focused on the human being, not the employee.",
          styleContext:
            "Supportive communicators separate wellbeing conversations from performance conversations. Mixing the two makes the person feel managed, not cared for.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has opened the conversation gently. The team member says they are fine and thanks her for checking in, but their tone suggests otherwise. How do you respond?",
      options: [
        {
          id: "s392-opt-a",
          text: "Okay, I hear you. I am glad you are alright. This offer stands - today, next week, whenever. If anything changes, I am here. No judgement, no agenda.",
          score: 10,
          result: "strong",
          explanation:
            "You accepted their answer without pushing, reinforced the ongoing offer of support, and kept the door open for the future. This respects their autonomy while maintaining the safety net.",
        },
        {
          id: "s392-opt-b",
          text: "I am glad to hear it. But I have to be honest - I have noticed you have been quieter in meetings and declined a couple of socials, which is unlike you. If something is going on, I would rather we talked about it now.",
          score: 5,
          result: "partial",
          explanation:
            "This pushes past their stated boundary. Leah explicitly said she does not want to pressure the person. Pointing out the evidence may feel like surveillance rather than care.",
        },
        {
          id: "s392-opt-c",
          text: "Good to hear. Let us talk about the upcoming project then - I wanted to get your thoughts on the timeline before the team meeting tomorrow.",
          score: 0,
          result: "weak",
          explanation:
            "This pivots immediately to work, signalling that the wellbeing check-in was a formality. Leah would see this as a missed opportunity to reinforce that the support is genuine.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a gentle follow-up message after the wellbeing check-in. Reiterate support, mention the employee assistance programme without making it feel clinical, and remove any pressure. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Alex,\n\nThank you for chatting with me today. I appreciate you giving me the time, and I hope it felt okay.\n\nI just wanted to reiterate what I said - if there is ever anything I can do, whether it is adjusting your workload for a bit, being a sounding board, or just having a chat, I am always here for that.\n\nAlso, just as a reminder, the company's employee assistance programme is available if you ever want to speak to someone confidentially about anything at all. The details are on the intranet under 'wellbeing'. No one is notified if you use it, and it is completely separate from work.\n\nNo need to reply to this. I just wanted you to have it in writing so you know where things stand. Take care of yourself.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is gentle, reiterates support without pressure, and mentions the EAP naturally without making it feel like a referral. Leah would send this knowing it lands softly.",
          observation:
            "You included 'no need to reply', which removes the obligation to respond and signals that the message is for their benefit, not yours.",
          coachingTip:
            "When writing wellbeing follow-ups for supportive communicators, include explicit permission not to act. 'No need to reply' or 'only if you want to' removes pressure and builds trust.",
          styleContext:
            "Supportive communicators know that the follow-up message is as important as the conversation. It confirms that the care was genuine, not performative.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your message truly removes pressure or subtly adds it. If the tone implies 'I know something is wrong and I am keeping an eye on you', it crosses from supportive to surveillance.",
          observation:
            "If your message asks them to 'let me know how you are doing' or suggests a follow-up meeting, it may feel like monitoring rather than support.",
          coachingTip:
            "The best wellbeing follow-ups make people feel held, not watched. Offer support, mention resources, and then step back.",
          styleContext:
            "Supportive communicators trust people to come forward when they are ready. The follow-up message plants a seed; it does not dig it up to check if it is growing.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too formal, or makes the EAP referral feel clinical rather than natural.",
          observation:
            "If your message reads like an HR template or lists the EAP like a mandatory step, it will make the person feel processed rather than cared for.",
          coachingTip:
            "Write the message as if you are sending it to a friend who is going through something. Warm, brief, and genuinely caring. The EAP mention should feel like 'by the way, this exists' not 'you should use this'.",
          styleContext:
            "Supportive communicators see wellbeing resources as tools to mention gently, not prescriptions to issue. The tone of the mention matters as much as the information itself.",
        },
      },
    },
  },

  // Scenario 393 - David Chen, remote, advanced
  {
    id: "scenario-393",
    title: "The Remote Team Fracture",
    context:
      "David's remote team has split into two informal groups - those in the UK time zone and those in the US time zone. Collaboration between the groups has deteriorated, and both sides feel the other is not pulling their weight.",
    chooseContext:
      "David has scheduled a team-wide video call to address the tension. He wants to acknowledge the divide without assigning blame and create a path back to unity.",
    rewriteContext:
      "David has asked you to draft a message to the team after the call, summarising what was discussed and reinforcing the commitments to reconnect across time zones.",
    characterId: "david-chen",
    dialogue:
      "I want to start by being honest about something we have all felt but nobody has said out loud. We have become two teams instead of one. The UK side and the US side have drifted apart, and I know both groups feel let down by the other. Nobody is at fault here - time zones are hard, and remote work makes it harder. But I care about this team too much to watch it fracture.",
    chooseDialogue:
      "I have spoken to people on both sides, and the frustrations are real. The UK team feels their morning work gets overridden by US decisions made in their afternoon. The US team feels excluded from planning that happens in UK mornings. Both of those feelings are valid. What I want us to do today is find a rhythm that works for everyone, not just the majority.",
    rewriteDialogue:
      "Write the follow-up message. Acknowledge that the conversation was not easy. Summarise the three things we agreed to try. And close by reminding everyone that we are one team, not two halves. Make it warm but honest - do not pretend the problem is solved, just that we have taken the first step.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has addressed a remote team fracture by naming the divide openly, validating both sides' frustrations equally, removing blame, and expressing personal investment in the team's unity. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David names the problem honestly, validates both perspectives equally, removes blame from individuals, and expresses personal care for the team. This is supportive communication managing a deeply human challenge.",
          observation:
            "Notice how David says 'both of those feelings are valid'. Supportive communicators in conflicts validate all sides before proposing solutions, which prevents anyone from feeling dismissed.",
          coachingTip:
            "When a leader names a team divide, validates every perspective equally, and expresses personal investment in unity, they are operating in a deeply supportive mode.",
          styleContext:
            "Supportive communicators manage team fractures by making every person feel heard and respected. They believe that solutions only work if everyone feels included in creating them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is emotionally honest and personally invested, which can look expressive. But notice the measured pace and focus on validation rather than inspiration. An expressive leader would rally the team around an exciting shared goal.",
          observation:
            "An expressive leader would say 'imagine what we could achieve if we reconnected as one team'. David says 'I care about this team too much to watch it fracture'. The tone is protective, not visionary.",
          coachingTip:
            "If someone addresses a team divide by protecting and validating, that is supportive. If they address it by inspiring and energising, that is expressive.",
          styleContext:
            "Supportive communicators in team crises focus on safety and inclusion. They rebuild unity through care, not through excitement.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not proposed a structural solution based on collaboration metrics, analysed meeting attendance data across time zones, or designed an objective workflow system.",
          observation:
            "There is no reference to data, process design, or operational restructuring. David is managing the relationship dimension of the problem, not the structural one.",
          coachingTip:
            "Is this person fixing a process or healing a relationship? David is firmly focused on making people feel reconnected and valued.",
          styleContext:
            "Supportive communicators believe that structural fixes only work if the team trusts each other first. They fix the relationship, then fix the system.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has validated both groups' frustrations. A US team member says they feel like the UK team treats them as an afterthought. How do you respond?",
      options: [
        {
          id: "s393-opt-a",
          text: "I hear that, and I am sorry it has felt that way. You are not an afterthought. Let us adjust the planning process so your input is built in from the start, not bolted on afterwards.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the feeling, apologised for the experience without assigning blame, and proposed a concrete change framed as inclusion. This is exactly how David would want you to respond.",
        },
        {
          id: "s393-opt-b",
          text: "That is a fair point. Let us set a rule that no planning decisions are finalised until both time zones have had input. We can use an async approval process in Slack.",
          score: 5,
          result: "partial",
          explanation:
            "This offers a practical fix but skips the emotional validation. David would want you to acknowledge the hurt before jumping to the process solution.",
        },
        {
          id: "s393-opt-c",
          text: "The UK team does most of the planning in their morning because that is when most stakeholders are available. It is not intentional, it is just practical.",
          score: 0,
          result: "weak",
          explanation:
            "This explains away the feeling rather than acknowledging it. Telling someone their frustration is just a misunderstanding of logistics is dismissive, regardless of whether it is true.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a follow-up message after the team call. Acknowledge the difficulty, summarise three agreed actions, and close by reinforcing unity. Be honest that the problem is not solved yet. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nThank you for today's conversation. I know it was not easy, and I appreciate every one of you for showing up honestly. It takes trust to say what you really feel, and this team clearly has that, even when things are tough.\n\nHere is what we agreed to try over the next four weeks:\n\n1. Overlap hour: We are protecting 3-4pm UK / 10-11am US as a shared collaboration window. All cross-team decisions will be discussed during this hour before they are finalised.\n2. Async input rule: Any planning document shared for input must remain open for 24 hours so both time zones can contribute before a decision is made.\n3. Monthly cross-zone pairing: Each month, one person from each time zone will co-lead a project or initiative together, rotating across the team.\n\nI am not going to pretend that one conversation and three actions fix everything. Rebuilding trust takes time, and we will need to keep talking honestly about what is working and what is not. But today felt like a genuine first step, and I am proud of us for taking it.\n\nWe are one team. Different time zones, same purpose. I am committed to making that feel real for every single person.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is honest about the difficulty, specific about the actions, and realistic about the journey ahead. David would send this knowing every team member feels included and respected.",
          observation:
            "You resisted the temptation to declare the problem solved. Saying 'today felt like a genuine first step' is more trustworthy than 'we are back on track', and the team will respect the honesty.",
          coachingTip:
            "When writing post-conflict follow-ups for supportive communicators, be honest about what was hard, specific about what was agreed, and realistic about the road ahead. False optimism damages trust.",
          styleContext:
            "Supportive communicators earn long-term trust by being honest about short-term difficulty. A team that is told 'this will take time' trusts the leader more than a team that is told 'problem solved'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your message sounds genuinely warm or just professionally adequate. Also check whether you are honest about the ongoing nature of the challenge.",
          observation:
            "If your message implies the problem is resolved or skips the emotional acknowledgement of how hard the call was, it misses the supportive tone David wants.",
          coachingTip:
            "Add a sentence thanking the team for their honesty and courage. Acknowledge that the conversation was not easy. That validation reinforces that being open is safe.",
          styleContext:
            "Supportive communicators always acknowledge the emotional cost of difficult conversations. If the team does not hear 'that was brave of you', they may not be brave again next time.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too corporate, or treats the follow-up as a meeting summary rather than a moment of team care.",
          observation:
            "If your message lists the actions without acknowledging the difficulty of the conversation, it signals that the leader cares more about the outputs than the people.",
          coachingTip:
            "Start with gratitude and acknowledgement. Then list the actions. Then be honest about the journey. Close with a personal statement of commitment. All four elements matter.",
          styleContext:
            "Supportive communicators see post-conflict follow-ups as the most important message they will send all month. It either rebuilds trust or confirms that the conversation was performative.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (394-396) - meeting
  // ============================================

  // Scenario 394 - Rachel Finch, meeting, foundation
  {
    id: "scenario-394",
    title: "The Decision Log",
    context:
      "Rachel has noticed that her team's meetings produce decisions that are later contradicted or forgotten. She wants to introduce a formal decision log to create accountability and traceability.",
    chooseContext:
      "Rachel is proposing the decision log format to her team. Some members think it is unnecessary bureaucracy. Rachel is explaining why structured record-keeping prevents wasted effort.",
    rewriteContext:
      "Rachel has asked you to create the decision log template, including fields for the decision, the rationale, the owner, the date, and the review trigger.",
    characterId: "rachel-finch",
    dialogue:
      "In the last quarter, we made 14 decisions in team meetings. Five of them were revisited within three weeks because nobody could confirm what we actually agreed. That is a 36% rework rate on decisions. A simple log would have prevented all five instances. I am proposing a format that takes 60 seconds to complete after each meeting.",
    chooseDialogue:
      "I understand the concern about bureaucracy. But the time we spend filling in a decision log is a fraction of the time we waste re-debating the same issues. The data supports this - five revisited decisions cost us approximately 12 hours of meeting time. The log would cost us approximately 30 minutes per quarter.",
    rewriteDialogue:
      "Create the template. Six fields: decision number, date, the decision in one sentence, the rationale in one sentence, the owner, and the conditions under which the decision should be reviewed. Nothing more, nothing less. If we keep it tight, people will actually use it.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has identified a meeting inefficiency by tracking the number of revisited decisions, calculating the rework rate, quantifying the time cost, and proposing a structured solution with a measurable time commitment. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel has quantified the problem - 14 decisions, 36% rework rate, 12 hours wasted - and proposed a structured fix with a known time cost. This is analytical communication solving a process problem with data.",
          observation:
            "Notice how Rachel converts the business case into precise numbers: 30 minutes of logging versus 12 hours of rework. Analytical communicators justify changes by making the maths undeniable.",
          coachingTip:
            "When someone quantifies a problem and proposes a structured solution with specific time and effort estimates, they are using an analytical style.",
          styleContext:
            "Analytical communicators believe that process improvements should be justified with data. If the numbers do not support the change, it should not be made.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Rachel's proposal is decisive, which can look direct. But notice the depth of evidence - 14 decisions tracked, five revisited, 12 hours quantified. A direct communicator would have just mandated the log.",
          observation:
            "A direct communicator would say 'we are keeping a decision log from now on because we keep forgetting what we agreed'. Rachel proves why with specific data.",
          coachingTip:
            "If the proposal is backed by data and the argument is built on evidence, that is analytical. If the proposal is backed by authority and the argument is 'because I said so', that is direct.",
          styleContext:
            "Analytical communicators earn buy-in through evidence. They do not demand compliance; they demonstrate that the change makes logical sense.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not explored how the team feels about decisions being revisited, asked whether the issue is trust rather than process, or checked whether people feel heard in meetings.",
          observation:
            "There is no reference to team dynamics, feelings about being overruled, or the interpersonal dimensions of decision revisiting. Rachel is fixing a system, not a relationship.",
          coachingTip:
            "Is this person treating the problem as a process failure or a people failure? Rachel is firmly in the process camp.",
          styleContext:
            "Analytical communicators address meeting dysfunction through systems and records. They trust that a good process creates good dynamics, not the other way around.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has proposed the decision log. A team member says it feels like we do not trust each other to remember what was agreed. How do you respond?",
      options: [
        {
          id: "s394-opt-a",
          text: "It is not about trust - five decisions revisited in one quarter, costing 12 hours. A written record protects everyone, including people whose decisions were overturned without them knowing. It is a tool for fairness, not suspicion.",
          score: 10,
          result: "strong",
          explanation:
            "You reframed the log as a fairness tool using Rachel's data, separating the process from the trust question. This matches the analytical approach of solving with evidence, not emotion.",
        },
        {
          id: "s394-opt-b",
          text: "I can see how it might feel that way. Maybe we could trial it for one month and then review whether it has been useful? That way it does not feel permanent until we know it works.",
          score: 5,
          result: "partial",
          explanation:
            "A trial is reasonable, but Rachel has already provided the evidence. An analytical communicator would want the commitment based on the data, not a trial period driven by feelings.",
        },
        {
          id: "s394-opt-c",
          text: "You are right that trust is important. Perhaps instead of a log, we should focus on being more present in meetings and holding each other accountable verbally.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the evidence-based solution in favour of a vague behavioural aspiration. Rachel has data showing that memory and verbal accountability are not working.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to create a decision log template with six fields: decision number, date, the decision, the rationale, the owner, and the review trigger. Write it in an analytical style - precise, structured, and unambiguous.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Team Decision Log\n\nInstructions: Complete within 24 hours of any meeting where a decision is made. Each decision gets one row. Keep entries to one sentence per field.\n\n| Field | Description | Example |\n|---|---|---|\n| Decision # | Sequential number (D-001, D-002, etc.) | D-001 |\n| Date | Date the decision was made (DD/MM/YYYY) | 14/03/2026 |\n| Decision | What was decided, in one sentence | Migrate to new CRM by end of Q2 |\n| Rationale | Why this decision was made, in one sentence | Current CRM does not support the new reporting requirements |\n| Owner | The single person accountable for execution | Sarah Thompson |\n| Review Trigger | The specific condition under which this decision should be revisited | If migration costs exceed 50K or timeline slips past 30 June |",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your template is precise, includes clear instructions and examples, and each field is defined in a way that prevents misinterpretation. Rachel would adopt this immediately.",
          observation:
            "You included examples for each field, which eliminates ambiguity about how to fill it in. Analytical communicators value templates that are self-explanatory.",
          coachingTip:
            "When creating templates for analytical communicators, always include field descriptions and examples. If someone could fill in the template incorrectly, the template is not clear enough.",
          styleContext:
            "Analytical communicators design templates to be used consistently by anyone. The template should produce the same quality of output regardless of who completes it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each field is defined precisely enough. If the 'Review Trigger' field does not explain what kind of conditions to include, people will fill it in inconsistently.",
          observation:
            "If your template lists fields without descriptions or examples, it requires interpretation. Rachel wants a template that is self-explanatory.",
          coachingTip:
            "Add a one-line description and an example for every field. If someone asks 'what goes here?', the template has failed.",
          styleContext:
            "Analytical communicators test templates by imagining the least experienced team member using them. If it works for them, it works for everyone.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your template is either missing fields, lacking descriptions, or too loose in its structure to produce consistent entries.",
          observation:
            "If your template has fields like 'notes' or 'comments' without clear parameters, it will become a dumping ground for unstructured information.",
          coachingTip:
            "Every field should have a name, a description, a format, and an example. Remove any field that is not one of the six Rachel specified.",
          styleContext:
            "Analytical communicators see templates as precision tools. A template that allows free-form input defeats the purpose of structured record-keeping.",
        },
      },
    },
  },

  // Scenario 395 - Owen Grant, meeting, intermediate
  {
    id: "scenario-395",
    title: "The Meeting Audit",
    context:
      "Owen has been asked to review the team's meeting culture after multiple complaints about too many meetings, unclear agendas, and decisions that could have been made via email. He has conducted a two-week audit.",
    chooseContext:
      "Owen is presenting his audit findings to the leadership team. The data shows that 40% of meetings lack an agenda, 55% end without documented actions, and 30% of attendees are optional but attend anyway.",
    rewriteContext:
      "Owen has asked you to draft a new meeting policy based on his findings, including rules for when a meeting is justified, what the agenda must contain, and how actions are recorded.",
    characterId: "owen-grant",
    dialogue:
      "Over two weeks, I tracked 47 meetings across the department. Here is what I found. 40% had no written agenda sent in advance. 55% ended without a single action being documented. And 30% of attendees were people who did not need to be there but attended because the invite went to the whole team. We are spending approximately 120 hours per week in meetings - and my estimate is that 40 of those hours are not producing any value.",
    chooseDialogue:
      "The fix is not fewer meetings. It is better meetings. I am proposing three rules: no meeting without an agenda sent 24 hours in advance, every meeting ends with documented actions and owners, and invites must distinguish between required and optional attendees. The goal is to recover those 40 hours per week without losing any of the collaboration value.",
    rewriteDialogue:
      "Draft the meeting policy. Base it on the three rules. Include the data from the audit as justification. Add a decision tree for 'does this need to be a meeting?' - if it is an information share, it should be an email or a recording. If it requires a decision, it needs an agenda and the right people in the room.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has conducted a two-week audit tracking 47 meetings, calculated specific percentages for three problems, estimated wasted hours, and proposed three evidence-based rules. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen conducted a systematic audit, quantified three problems with specific percentages, estimated the waste in hours, and proposed structured rules. This is analytical communication solving an organisational problem with evidence.",
          observation:
            "Notice how Owen presents '47 meetings', '40%', '55%', '30%', and '120 hours per week'. Every claim is backed by a specific number. Analytical communicators make their case undeniable through data density.",
          coachingTip:
            "When someone audits a problem systematically, presents findings with percentages, and proposes rules based on the evidence, they are using an analytical style. Engage with the data.",
          styleContext:
            "Analytical communicators do not complain about too many meetings. They measure the problem, quantify the waste, and propose evidence-based improvements.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen's three rules are decisive, which can look direct. But notice the two-week audit, the specific metrics, and the careful distinction between 'fewer meetings' and 'better meetings'. A direct communicator would have just mandated fewer meetings.",
          observation:
            "A direct communicator would say 'we are cutting meetings by 30%'. Owen says 'we are not cutting meetings - we are making them better, based on this evidence'. The nuance is analytical.",
          coachingTip:
            "If someone diagnoses a problem with data and proposes rules that address the specific issues identified, that is analytical. If they impose a change based on instinct, that is direct.",
          styleContext:
            "Analytical communicators resist simple solutions to complex problems. Cutting meetings sounds direct and decisive, but Owen knows the problem is quality, not quantity.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not explored how people feel about the meeting culture, whether the excess meetings serve a social function, or whether people feel unable to decline invitations.",
          observation:
            "There is no reference to meeting fatigue, social dynamics, or the pressure people feel to attend. Owen is fixing a system, not addressing a feeling.",
          coachingTip:
            "Is this person measuring the problem or feeling the problem? Owen is firmly in the measuring camp.",
          styleContext:
            "Analytical communicators believe that if you fix the process, the feelings improve automatically. Better meetings will lead to happier people, not the other way around.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has proposed three meeting rules. A senior manager argues that rigid rules kill spontaneity and some of the best ideas come from unstructured conversations. How do you respond?",
      options: [
        {
          id: "s395-opt-a",
          text: "Unstructured conversations are valuable, but they do not need to be meetings. 40% of meetings have no agenda - those produce no value. The rules protect structured decisions while freeing time for spontaneous conversations outside meeting format.",
          score: 10,
          result: "strong",
          explanation:
            "You distinguished between structured meetings and informal conversations, used Owen's data to support the argument, and reframed the rules as enablers of spontaneity, not opponents of it.",
        },
        {
          id: "s395-opt-b",
          text: "Perhaps we could exempt brainstorming sessions from the agenda requirement and just apply the rules to decision meetings.",
          score: 5,
          result: "partial",
          explanation:
            "This creates an exception that could be abused. Owen's data-driven approach would prefer consistent rules with clear criteria, not category-based exemptions.",
        },
        {
          id: "s395-opt-c",
          text: "You make a good point. Creativity does not follow rules. Maybe we should focus on training people to run better meetings rather than imposing a rigid framework.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the evidence-based approach for a vague alternative. Owen has data showing that without rules, 55% of meetings produce no documented actions. Training alone will not fix a structural problem.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to draft a meeting policy including the three rules, the audit data as justification, and a decision tree for whether something needs to be a meeting. Write it in an analytical style - structured, evidence-based, and actionable.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Meeting Policy - Effective Immediately\n\nBackground: A two-week audit of 47 departmental meetings identified three systemic issues: 40% lacked a pre-circulated agenda, 55% ended without documented actions, and 30% of attendees were optional. An estimated 40 hours per week are spent in meetings that produce no measurable output.\n\nThree Rules:\n\n1. Agenda requirement: Every meeting must have a written agenda circulated at least 24 hours in advance. The agenda must state the purpose (decision, discussion, or update) and list the specific items for discussion.\n\n2. Action documentation: Every meeting must end with a documented list of actions, each with a named owner and a deadline. Actions are posted to the team channel within one hour of the meeting ending.\n\n3. Attendee clarity: Every meeting invite must distinguish between required and optional attendees. Optional attendees may decline without explanation and will receive the action summary.\n\nDoes This Need to Be a Meeting?\n\n- Is the purpose to share information one-way? - No. Send an email or record a video.\n- Is the purpose to get input from more than two people? - Yes. Schedule a meeting with an agenda.\n- Is the purpose to make a decision? - Yes, if the decision requires real-time discussion. No, if the decision can be made via async vote or written input.\n- Is the purpose social or team-building? - Yes. But label it as social, make attendance optional, and do not book it during peak work hours.\n\nReview: This policy will be reviewed after 90 days. Success metrics: reduction in meetings without agendas to below 10%, action documentation rate above 90%.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your policy is grounded in audit data, the rules are clear and enforceable, and the decision tree gives people a practical tool for judging whether a meeting is necessary. Owen would implement this immediately.",
          observation:
            "You included success metrics and a review date, which shows that the policy itself is subject to evidence-based evaluation. Analytical communicators apply the same rigour to their solutions as they do to the problems.",
          coachingTip:
            "When writing policies for analytical communicators, include the evidence that justifies the policy, the rules themselves, a practical tool for application, and the metrics for evaluating success.",
          styleContext:
            "Analytical communicators design policies as living systems. They include review mechanisms because they know that even evidence-based solutions need to be tested and refined.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the decision tree is truly usable and whether the rules are specific enough to enforce. If any rule leaves room for interpretation, it needs tightening.",
          observation:
            "If your decision tree uses vague criteria like 'if the topic is important enough', it needs more specific conditions.",
          coachingTip:
            "Test each rule and decision point by asking: could two people apply this differently? If yes, add more specificity.",
          styleContext:
            "Analytical communicators want policies that produce consistent outcomes regardless of who applies them. Ambiguity in a policy is a design flaw.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your policy lacks the audit data justification, the decision tree, or the specificity needed to change meeting behaviour.",
          observation:
            "If your policy says 'meetings should be well-organised and purposeful' without defining what that means in practice, it is an aspiration, not a policy.",
          coachingTip:
            "Start with the data that proves the problem. State the rules with specific parameters. Add a decision tool. Include review metrics. All four elements are essential.",
          styleContext:
            "Analytical communicators reject policies that could be interpreted multiple ways. Every clause should have one meaning and one application.",
        },
      },
    },
  },

  // Scenario 396 - Fiona Banks, meeting, advanced
  {
    id: "scenario-396",
    title: "The Strategic Planning Methodology",
    context:
      "Fiona has been tasked with redesigning the company's annual strategic planning process. Previous years have produced strategy documents that are too vague to execute and too disconnected from operational reality.",
    chooseContext:
      "Fiona is presenting her proposed methodology to the senior leadership team. She has analysed three years of strategic plans and mapped the gap between what was planned and what was delivered.",
    rewriteContext:
      "Fiona has asked you to write the methodology document that will guide every department through the strategic planning cycle, including templates, timelines, and quality criteria for each output.",
    characterId: "fiona-banks",
    dialogue:
      "I reviewed the strategic plans from the last three years against actual delivery. In 2023, 68% of strategic initiatives were delivered. In 2024, it dropped to 52%. In 2025, it was 41%. The plans are getting more ambitious, but execution is declining. The common factor across all three years is the same: the strategic objectives are too vague to translate into operational plans. 'Improve customer experience' appeared in all three years. Not once was it defined in a way that a department head could build a workplan from.",
    chooseDialogue:
      "My proposed methodology has four stages. Stage one: each department submits strategic objectives using the SMART framework - no objective is accepted without a measurable target and a deadline. Stage two: objectives are cross-referenced against resource availability and dependencies. Stage three: a challenge panel reviews each objective for feasibility. Stage four: approved objectives are translated into quarterly delivery milestones.",
    rewriteDialogue:
      "Write the methodology document. Four stages, each with a defined input, process, output, and timeline. Include quality criteria for what constitutes an acceptable strategic objective. Add a rejection protocol for objectives that do not meet the criteria. I want this to be a system that produces executable strategy, not aspirational prose.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has analysed three years of strategic plans against delivery data, identified a declining execution rate with a specific root cause, and proposed a four-stage methodology with structured quality criteria. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona analysed three years of longitudinal data, identified a specific trend with percentages, diagnosed the root cause, and proposed a multi-stage methodology with defined criteria. This is analytical communication applied to organisational strategy.",
          observation:
            "Notice how Fiona tracks the delivery rate year by year - 68%, 52%, 41%. Analytical communicators show trends, not snapshots, because trends reveal systemic problems.",
          coachingTip:
            "When someone presents multi-year data, identifies a declining trend, diagnoses the structural cause, and proposes a staged system to address it, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators see strategic planning failures as system design problems, not leadership problems. They fix the process that produces the strategy, not just the strategy itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona's methodology is decisive and structured, which can look direct. But notice the three years of evidence, the root cause analysis, and the four-stage system. A direct communicator would have just demanded better objectives.",
          observation:
            "A direct communicator would say 'our strategy documents are too vague - make them specific'. Fiona proves they are too vague with data, explains why, and builds a system to prevent it.",
          coachingTip:
            "If someone diagnoses a problem over multiple years and builds a system to prevent recurrence, that is analytical. If they identify the problem and demand a fix, that is direct.",
          styleContext:
            "Analytical communicators invest in prevention systems because they know that demanding better outputs without changing the process produces the same results.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not explored why leaders write vague objectives, whether the strategic planning process feels meaningful to participants, or whether the culture discourages specificity.",
          observation:
            "There is no reference to how people experience the planning process, whether they find it valuable, or whether political dynamics drive vagueness. Fiona is engineering a system, not managing a culture.",
          coachingTip:
            "Is this person fixing the system that produces strategy or the culture that shapes it? Fiona is firmly in the system camp.",
          styleContext:
            "Analytical communicators believe that a well-designed process produces good strategy regardless of individual behaviour. They trust systems over culture change.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has proposed a challenge panel that reviews objectives for feasibility. A VP argues that strategy should be aspirational and that too much rigour kills ambition. How do you respond?",
      options: [
        {
          id: "s396-opt-a",
          text: "Ambition and rigour are not opposites. 59% of last year's initiatives were never delivered - that is a wish list, not strategy. The challenge panel makes ambition executable by forcing it through a feasibility filter before resources are committed.",
          score: 10,
          result: "strong",
          explanation:
            "You used Fiona's data to reframe rigour as the enabler of ambition, not the opponent. You made the case that unrealistic strategy is worse than no strategy, which is the analytical position.",
        },
        {
          id: "s396-opt-b",
          text: "What if the challenge panel scored objectives on both ambition and feasibility? That way we keep the aspirational element while still testing whether it can be delivered.",
          score: 5,
          result: "partial",
          explanation:
            "This adds a dimension to the panel's work that is hard to measure objectively. Fiona's methodology focuses on feasibility because that is what the data shows is missing. Scoring ambition is subjective.",
        },
        {
          id: "s396-opt-c",
          text: "That is a valid perspective. Maybe we should keep the challenge panel as optional rather than mandatory, so leaders can choose whether to use it.",
          score: 0,
          result: "weak",
          explanation:
            "Making the quality control step optional defeats its purpose. Fiona's data shows that without structured scrutiny, strategy execution rates decline year on year. Optional rigour produces the same result as no rigour.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write the strategic planning methodology document with four stages, each including input, process, output, timeline, quality criteria, and a rejection protocol. Write it in an analytical style - systematic, precise, and evidence-based.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Strategic Planning Methodology\n\nContext: Analysis of 2023-2025 strategic plans shows a declining delivery rate (68% to 41%). Root cause: strategic objectives lack the specificity required for operational translation. This methodology addresses that gap.\n\nStage 1: Objective Submission (Weeks 1-2)\nInput: Each department submits up to five strategic objectives.\nProcess: Objectives must follow the SMART framework. Each must include a measurable target, a deadline, and a named executive sponsor.\nOutput: Departmental objective submissions in the standardised template.\nQuality criteria: An objective is acceptable if (a) the target is quantified, (b) the deadline is a specific date or quarter, (c) the sponsor is named, and (d) the objective could be translated into quarterly milestones without further clarification.\nRejection protocol: Objectives that fail any criterion are returned with specific feedback. Departments have five working days to revise and resubmit.\n\nStage 2: Cross-Reference Review (Week 3)\nInput: Approved objectives from all departments.\nProcess: Map dependencies between departments. Identify resource conflicts. Flag objectives that depend on the same team or budget.\nOutput: Dependency map and resource conflict report.\nQuality criteria: Every dependency must name both the upstream and downstream department and the specific resource or deliverable involved.\nRejection protocol: Objectives with unresolved dependencies are escalated to the sponsoring executives for resolution within 48 hours.\n\nStage 3: Challenge Panel (Week 4)\nInput: Cross-referenced objectives and dependency report.\nProcess: A panel of three senior leaders (rotating quarterly) reviews each objective for feasibility, resource realism, and alignment with company strategy.\nOutput: Approved objective list with panel comments.\nQuality criteria: An objective passes if at least two of three panellists rate it feasible given current resources and timeline.\nRejection protocol: Rejected objectives are returned with panel rationale. Sponsors may appeal with additional evidence within five working days.\n\nStage 4: Quarterly Milestone Translation (Weeks 5-6)\nInput: Approved objectives.\nProcess: Each objective is broken into quarterly milestones with specific deliverables, owners, and success criteria.\nOutput: Quarterly delivery plan per department.\nQuality criteria: Each milestone must have a single owner, a deliverable defined in one sentence, and a measurable success criterion.\nRejection protocol: Milestones that cannot be defined to this standard indicate the objective is not yet specific enough. Return to Stage 1.\n\nReview: Methodology effectiveness reviewed annually. Key metric: year-on-year improvement in strategic objective delivery rate.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your methodology is comprehensive, each stage has clear inputs, processes, outputs, criteria, and rejection protocols. Fiona would implement this knowing it transforms strategy from aspiration to execution.",
          observation:
            "You included a feedback loop - Stage 4 milestones that cannot be defined return to Stage 1. Analytical communicators build self-correcting systems that catch quality issues before they become delivery failures.",
          coachingTip:
            "When writing methodology documents for analytical communicators, include feedback loops and rejection protocols. A system without quality gates is not a system - it is a hope.",
          styleContext:
            "Analytical communicators design systems that produce consistent outputs regardless of who operates them. The methodology should work identically across every department.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every stage has all six elements: input, process, output, timeline, quality criteria, and rejection protocol. Missing any one of these leaves a gap in the system.",
          observation:
            "If your rejection protocol says 'objectives may be returned for revision' without specifying the criteria for rejection or the timeline for resubmission, it is too vague.",
          coachingTip:
            "Test each stage by asking: could a new department head follow this process without calling Fiona? If they need to ask for clarification, add more detail.",
          styleContext:
            "Analytical communicators build methodologies to be self-sufficient. If the document requires verbal explanation to operate, it is not finished.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your methodology lacks the stage-by-stage structure, the quality criteria, or the rejection protocols that Fiona specified.",
          observation:
            "If your document describes a general approach to strategic planning without specific stages, criteria, and feedback mechanisms, it is guidance, not a methodology.",
          coachingTip:
            "A methodology should be a machine: inputs go in, processes happen, outputs come out, quality is checked, and failures are caught. If any part relies on judgement without criteria, add structure.",
          styleContext:
            "Analytical communicators see the difference between a methodology and a set of guidelines. Guidelines suggest; methodologies prescribe. Fiona wants prescription.",
        },
      },
    },
  },
];
