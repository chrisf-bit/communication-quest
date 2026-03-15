import { Scenario } from "@/types";

export const SCENARIOS_PART28: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (325-327) - client
  // ============================================

  // Scenario 325 - Jordan Cole, client, foundation
  {
    id: "scenario-325",
    title: "The Scope Creep Pushback",
    context:
      "A client has been gradually adding requests outside the original project scope without acknowledging the impact on timeline or budget. Jordan has been brought in to reset the boundary and get the project back on track.",
    chooseContext:
      "Jordan has told the client that the additional requests require a formal change request with revised costs and timeline. The client is pushing back, saying these are 'minor tweaks' that should be included.",
    rewriteContext:
      "Jordan has asked you to draft an email to the client documenting the scope changes, their impact, and the process for approving them going forward.",
    characterId: "jordan-cole",
    dialogue:
      "I want to be straight with you. We scoped this project in January and agreed on deliverables, timeline, and budget. Since then, we have absorbed fourteen additional requests without a single change order. That stops today. Every new request goes through a change process with a cost and timeline impact. This is not about being difficult - it is about delivering what we agreed to.",
    chooseDialogue:
      "I understand you see these as minor, but fourteen minor tweaks is a major scope change. Each one took time, required decisions, and pushed other work back. Going forward, any request that was not in the original brief gets a change request form, a cost estimate, and your sign-off before we start. No exceptions.",
    rewriteDialogue:
      "Write the email. List the fourteen additional requests with the date each was raised. Show the cumulative impact on timeline and budget. Then state the new process: change request, cost estimate, sign-off. Make it factual, not emotional. We are not complaining - we are clarifying.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has told a client directly that scope creep stops today, listing fourteen undocumented changes and implementing a mandatory change request process. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan confronts the issue head-on, states the boundary clearly, and implements an immediate process change. There is no softening, no negotiation on the principle, and no apology for being firm.",
          observation:
            "Notice how Jordan reframes the conversation from 'being difficult' to 'delivering what we agreed.' Direct communicators control the narrative by choosing the frame.",
          coachingTip:
            "When someone sets a hard boundary with a client and implements an immediate process to enforce it, they are communicating directly. Match their clarity when responding.",
          styleContext:
            "Direct communicators see unmanaged scope creep as a failure of communication, not a failure of goodwill. Fixing the process protects both parties.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan references specific numbers - fourteen requests - which can look analytical. But the data serves the boundary-setting, not a deeper analysis. Jordan is using the count to prove a point, not to explore a pattern.",
          observation:
            "An analytical communicator would categorise the fourteen requests by type and impact. Jordan just uses the total to establish that the problem is real.",
          coachingTip:
            "If someone cites a number to close a discussion, that is direct. If they cite a number to open an analysis, that is analytical.",
          styleContext:
            "Direct communicators use data as punctuation - a full stop at the end of an argument, not an invitation to explore further.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not acknowledged the client's feelings, explored why the scope crept, or suggested a collaborative conversation about how to handle it. The approach is purely boundary-setting.",
          observation:
            "There is no empathy for the client's perspective, no exploration of underlying needs, and no softening of the message.",
          coachingTip:
            "Ask yourself: is this person managing a relationship or managing a boundary? Jordan is managing a boundary. The relationship will follow.",
          styleContext:
            "Direct communicators believe clear boundaries improve relationships. Fuzzy boundaries create resentment on both sides.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client says the additional requests are 'minor tweaks' that should be included. Jordan has drawn the line. How do you respond?",
      options: [
        {
          id: "s325-opt-a",
          text: "Jordan is right. Fourteen requests, regardless of size, represent a significant cumulative impact. The change request process protects both of us - you get transparency on cost and timeline, and we can plan our resources properly.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Jordan's boundary while reframing the process as mutually beneficial. It validates the principle without being confrontational toward the client.",
        },
        {
          id: "s325-opt-b",
          text: "Perhaps we could categorise the requests as 'minor' and 'major' and only require change orders for the major ones. That gives you flexibility on the small stuff while keeping the bigger changes formal.",
          score: 5,
          result: "partial",
          explanation:
            "A pragmatic middle ground, but Jordan has explicitly said 'no exceptions.' Introducing a category exemption undermines the clean boundary that was just set.",
        },
        {
          id: "s325-opt-c",
          text: "I think we should absorb the existing requests as a goodwill gesture and implement the change process going forward. That way the client does not feel like we are retroactively billing them.",
          score: 0,
          result: "weak",
          explanation:
            "Absorbing fourteen undocumented changes rewards the behaviour Jordan is trying to stop. It signals that scope creep has no consequences if you do it gradually enough.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the email to the client listing scope changes, cumulative impact, and the new change request process. Direct style - factual, not emotional.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Scope clarification and change request process\n\nI want to ensure we are aligned on where the project stands and how we handle changes going forward.\n\nSince the project kicked off in January, we have received and completed fourteen requests that fall outside the original scope. A full list with dates is attached. The cumulative impact has been an estimated three-week delay and approximately 18,000 pounds in unbudgeted work.\n\nTo protect the quality and timeline of the remaining deliverables, we are implementing a formal change request process effective immediately:\n\n1. Any new request not in the original scope must be submitted via the change request form (attached).\n2. We will respond within two working days with a cost and timeline impact assessment.\n3. Work on the change begins only after your written sign-off.\n\nThis process ensures full transparency for both sides. We want to deliver exactly what you need - and this is how we make sure that happens without compromising what was already agreed.\n\nPlease let me know if you have any questions about the process.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Factual, professional, and firm without being aggressive. The scope changes are documented, the impact is quantified, and the new process is crystal clear.",
          observation:
            "You framed the process as protecting both parties. Direct communicators land boundary-setting emails best when the frame is 'this helps us both,' not 'you caused a problem.'",
          coachingTip:
            "Direct client emails work when they state facts, state consequences, and state the new process. Your email covers all three without emotional charge.",
          styleContext:
            "Direct communicators see scope clarification emails as an investment in the relationship. Clear boundaries prevent the resentment that fuzzy ones create.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the impact is quantified. If you wrote 'significant impact' instead of 'three weeks and 18,000 pounds', sharpen it.",
          observation:
            "If your email apologises for implementing the process or hedges with phrases like 'we hope this is okay', it is not matching Jordan's direct register.",
          coachingTip:
            "Remove any language that positions the change process as optional or negotiable. It is being implemented, not proposed.",
          styleContext:
            "Direct communicators state processes as facts, not proposals. 'We are implementing' is direct. 'We would like to suggest' is not.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either softens the boundary, fails to quantify the impact, or positions the change process as a suggestion rather than a requirement.",
          observation:
            "If your email could be read as an apology for being structured, or if the fourteen requests are not listed, it has missed Jordan's brief.",
          coachingTip:
            "Lead with the facts, state the impact in numbers, and describe the new process as already decided. That is the direct email formula.",
          styleContext:
            "Direct communicators believe that scope clarification emails should be kept on file as project records. If yours would not stand up as documentation, make it more specific.",
        },
      },
    },
  },

  // Scenario 326 - Sam Hartley, client, intermediate
  {
    id: "scenario-326",
    title: "The Missed Deadline Accountability",
    context:
      "Your team missed a client deadline due to a resource gap that was flagged internally but not communicated to the client in time. Sam has to deliver the bad news and take responsibility without making excuses.",
    chooseContext:
      "Sam has told the client about the missed deadline and offered a revised delivery date. The client is frustrated and asking why they were not warned earlier. Sam is taking accountability without deflecting.",
    rewriteContext:
      "Sam has asked you to draft a formal apology and remediation plan to the client, keeping it short, owning the failure, and committing to specific preventative actions.",
    characterId: "sam-hartley",
    dialogue:
      "I am not going to dress this up. We missed the deadline. We knew three weeks ago that we had a resource gap, and we should have told you then. We did not, and that is on us. The revised delivery date is 28 March. Here is what we are doing to make sure it does not happen again.",
    chooseDialogue:
      "You are right to be frustrated, and I am not going to argue with that. You deserved to know three weeks ago, not today. I own that failure. What I can tell you is that the work itself is strong, the revised date is firm, and we have already put measures in place to prevent a repeat. Do you want me to walk you through them?",
    rewriteDialogue:
      "Write the apology. Own the failure in the first line - do not bury it. State the revised date, list the three preventative actions, and commit to a weekly status update until the project is delivered. No excuses, no context that sounds like an excuse. One page.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Sam is delivering bad news to a client by immediately owning the failure, stating the revised date, and listing preventative actions - all without making excuses. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam takes accountability immediately, states the facts, and moves to remediation. There is no deflection, no lengthy explanation, and no attempt to minimise the failure. This is direct communication in a difficult situation.",
          observation:
            "Notice how Sam separates the apology from the plan. The failure is owned, then the solution is presented. Direct communicators do not let explanations dilute accountability.",
          coachingTip:
            "When someone delivers bad news by stating the failure first, owning it without caveats, and immediately presenting a solution, they are communicating directly.",
          styleContext:
            "Direct communicators believe that the fastest way to rebuild trust after a failure is to own it completely and show what has changed. Excuses slow that process down.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam is factual and specific about the remediation, which can look analytical. But the approach leads with accountability, not analysis. Sam is not explaining why - they are stating what happened and what changes.",
          observation:
            "An analytical communicator would present a root cause analysis with a timeline of decisions. Sam keeps it to: we failed, here is the new date, here is how we prevent it.",
          coachingTip:
            "If someone apologises and moves straight to action, that is direct. If they apologise and move to analysis, that is analytical.",
          styleContext:
            "Direct communicators believe clients want accountability and a plan, not a detailed explanation of what went wrong internally.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not focused on the client's feelings, the impact on the relationship, or how the team feels about the failure. The response is purely operational - own it, fix it, move on.",
          observation:
            "There is no extended empathy, no exploration of the client's emotional reaction, and no suggestion that the team needs time to reflect.",
          coachingTip:
            "Ask yourself: is this person managing feelings or managing the situation? Sam is managing the situation. Feelings are acknowledged briefly and then the focus shifts to action.",
          styleContext:
            "Direct communicators process failures through action, not reflection. The apology is genuine, but it is quick because the remediation is urgent.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client asks why they were not warned earlier about the resource gap. Sam is taking accountability. How do you support the conversation?",
      options: [
        {
          id: "s326-opt-a",
          text: "Sam is right - the internal escalation should have reached you sooner and it did not. One of the preventative actions is a weekly client status update that flags any risks as they emerge, not after they have materialised. You will see the first one this Friday.",
          score: 10,
          result: "strong",
          explanation:
            "This backs Sam's accountability, names a specific preventative action, and commits to a concrete date. It reinforces the direct approach by offering proof of change, not more words.",
        },
        {
          id: "s326-opt-b",
          text: "In fairness, the resource gap was flagged internally and we did try to resolve it before it became critical. The escalation process just was not fast enough to reach you in time.",
          score: 5,
          result: "partial",
          explanation:
            "This adds context but risks sounding like an excuse - exactly what Sam wanted to avoid. The client does not need to know about internal processes that failed.",
        },
        {
          id: "s326-opt-c",
          text: "These things happen on complex projects. The important thing is that the quality of the work has not been affected and we are still on track for a strong outcome.",
          score: 0,
          result: "weak",
          explanation:
            "Minimising the failure with 'these things happen' undermines Sam's clear accountability. The client has a right to be frustrated and this dismisses their concern.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the formal apology to the client. Own the failure in the first line, state the revised date, list three preventative actions, and commit to weekly updates. Direct style, one page.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Missed deadline - apology, revised date, and preventative actions\n\nWe missed the 14 March delivery date. That is our responsibility and I want to apologise without qualification.\n\nThe revised delivery date is 28 March. The work is on track and the quality has not been compromised.\n\nTo prevent this from happening again, we have implemented three changes:\n\n1. Weekly client status update every Friday, flagging any risks to timeline or scope as they emerge.\n2. Internal escalation protocol requiring client notification within 48 hours of any identified risk to delivery.\n3. Named backup resource allocated to every project milestone, eliminating single points of failure.\n\nYou will receive the first weekly update this Friday. If at any point you feel we are not delivering on these commitments, I want to hear about it directly.\n\nWe value this partnership and we know trust is rebuilt through actions, not words. These actions start now.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Clean, accountable, and action-oriented. You owned the failure immediately, gave a firm date, and listed specific, measurable preventative actions. Sam would send this without edits.",
          observation:
            "The line 'trust is rebuilt through actions, not words' is perfectly direct. It acknowledges the damage and signals that the focus is on doing, not talking.",
          coachingTip:
            "Direct apology emails work when they are shorter than the client expects. A one-page apology that owns the failure and lists the changes is more credible than a three-page explanation.",
          styleContext:
            "Direct communicators believe that the length of an apology is inversely proportional to its sincerity. Say less, do more.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether the apology is immediate and unqualified. If the first paragraph explains what happened before apologising, restructure.",
          observation:
            "If your email includes phrases like 'due to unforeseen circumstances' or 'despite our best efforts', those are qualifications that weaken the apology.",
          coachingTip:
            "The first sentence should be the apology. The second should be the revised date. Everything else is either preventative action or unnecessary.",
          styleContext:
            "Direct communicators write apologies that lead with the failure, not with the context. Context sounds like excuse-making, even when it is not intended that way.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either buries the apology, includes excuses, or fails to commit to specific preventative actions with dates.",
          observation:
            "If your email spends more time explaining what went wrong than what you are doing about it, the balance is off.",
          coachingTip:
            "Restructure as: one sentence of apology, one sentence with the new date, three specific actions, one commitment to weekly updates. That is the entire email.",
          styleContext:
            "Direct communicators judge apology emails by their ratio of accountability to explanation. Aim for 80% action, 20% acknowledgement.",
        },
      },
    },
  },

  // Scenario 327 - Alex Tran, client, advanced
  {
    id: "scenario-327",
    title: "The Contract Renegotiation Under Pressure",
    context:
      "A major client is threatening to end the contract unless you reduce your fees by 25%. Alex has been brought in to lead the renegotiation. The client is your largest account, but Alex believes the fee reduction would make the contract unsustainable.",
    chooseContext:
      "The client has made their position clear: 25% reduction or they walk. Alex is countering with a restructured scope that maintains the fee but reduces deliverables to match what the client actually uses.",
    rewriteContext:
      "Alex has asked you to draft the counter-proposal with a restructured scope that delivers the same value to the client at a sustainable fee for your team.",
    characterId: "alex-tran",
    dialogue:
      "I understand you are looking to reduce costs, and I respect that. But I am not going to agree to a 25% fee reduction that makes this contract undeliverable for us. That helps neither of us. What I can do is restructure the scope so you are paying for exactly what you use, and we are delivering what we can sustain. That is a better deal for both sides.",
    chooseDialogue:
      "If we cut our fee by 25%, the quality drops. Not because we want it to, but because the economics force it. I would rather lose this contract honestly than keep it by delivering work I am not proud of. So here is my counter: same fee, reduced scope to match your actual usage, and a quarterly review where we adjust up or down based on what you need. That is fair.",
    rewriteDialogue:
      "Write the counter-proposal. Open with the principle: we want this partnership to work for both sides. Then show the restructured scope - what stays, what goes, and why. Tie every change to the client's own usage data. Close with the quarterly review mechanism. Make it clear this is a better deal, not a compromise.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "client",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Alex is refusing a 25% fee cut but offering a restructured scope that matches the client's actual usage. Alex frames the counter as mutually beneficial and states willingness to lose the contract rather than deliver poor work. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex refuses the client's demand, states a clear alternative, and is transparent about the willingness to walk away. This is direct communication at its most advanced - principled, firm, and solutions-oriented.",
          observation:
            "Notice how Alex reframes the negotiation. Instead of defending the fee, Alex restructures the scope. Direct communicators change the terms of the debate rather than arguing within the existing frame.",
          coachingTip:
            "When a negotiator refuses a demand, offers a clear alternative, and is transparent about their walk-away point, they are communicating at an advanced direct level.",
          styleContext:
            "Direct communicators believe that the strongest negotiating position is the willingness to lose the deal. That transparency often saves it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex references usage data and economic sustainability, which can look analytical. But the data serves a position already decided - Alex is not analysing, they are negotiating from principle.",
          observation:
            "An analytical negotiator would present a detailed cost breakdown and usage analysis before proposing. Alex states the principle first and supports it with data second.",
          coachingTip:
            "If someone leads with a position and supports it with data, that is direct. If they lead with data and let it suggest a position, that is analytical.",
          styleContext:
            "Direct communicators in high-stakes negotiations are principle-first, data-second. The data confirms the principle; it does not determine it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not explored the client's emotional state, sought to understand the pressure they are under, or built empathy into the response. The negotiation is purely principled and transactional.",
          observation:
            "There is no attempt to understand why the client needs a 25% reduction, no exploration of their budget pressures, and no emotional acknowledgement.",
          coachingTip:
            "Ask yourself: is this person managing a relationship or managing a negotiation? Alex is managing a negotiation. The relationship is important but secondary to the principle.",
          styleContext:
            "Direct communicators in renegotiations believe that sustainable partnerships require honest economics. A bad deal saves the relationship temporarily and destroys it eventually.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client has said 25% reduction or they walk. Alex has countered with a scope restructure. How do you respond?",
      options: [
        {
          id: "s327-opt-a",
          text: "Alex's proposal protects the partnership. A 25% fee cut puts our delivery quality at risk, which hurts both of us. The restructured scope gives you the same value for the services you actually use, and the quarterly review means you are never locked into something that does not work.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Alex's position by framing the scope restructure as superior to a fee cut. It emphasises mutual benefit and the flexibility of the quarterly review.",
        },
        {
          id: "s327-opt-b",
          text: "What if we offered a 10% reduction as a middle ground? That shows flexibility without making the contract unsustainable.",
          score: 5,
          result: "partial",
          explanation:
            "A common negotiation move, but Alex has specifically rejected fee reduction as a path. Offering 10% undermines the restructured scope proposal that Alex spent time preparing.",
        },
        {
          id: "s327-opt-c",
          text: "This is our biggest account. I think we need to find a way to make the 25% work, even if it means absorbing the cost temporarily. Losing this client would be worse than a margin hit.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Alex's stated principle. Alex has said they would rather lose the contract honestly than deliver work they are not proud of. Suggesting absorption undermines that position.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the counter-proposal. Open with the partnership principle, show the restructured scope with changes tied to usage data, and close with a quarterly review mechanism. Direct style - clear, fair, and firm.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Counter-proposal - restructured scope for sustainable partnership\n\nWe want this partnership to continue, and we want it to work for both sides. A 25% fee reduction would compromise our ability to deliver the quality you expect. Instead, we are proposing a restructured scope that aligns your investment with your actual usage.\n\nWhat stays:\n- Core platform access and configuration (used by 92% of your team)\n- Dedicated account management with monthly reviews\n- Priority support with 4-hour SLA\n- Quarterly business reviews with strategic recommendations\n\nWhat is removed:\n- Advanced analytics module (accessed by 3 users in the past 6 months)\n- Custom integration support for systems you have since decommissioned\n- Bi-weekly training sessions (attendance has averaged 2 people per session)\n\nFee: Current rate maintained. The scope reduction means you are paying the same for a tighter, more relevant package - not subsidising services you do not use.\n\nQuarterly review: At the end of each quarter, we review usage together. If you need to add or remove services, we adjust the scope and fee accordingly. You are never locked into something that does not serve you.\n\nThis is a better deal than a blanket reduction. It gives you full value for every pound spent and gives us the sustainability to keep delivering at the standard you expect.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This counter-proposal is direct, fair, and strategically sound. Every scope change is tied to usage data, the fee is defended with logic, and the quarterly review provides flexibility.",
          observation:
            "Framing the removed items as things the client barely uses turns a scope reduction into a decluttering exercise. The client gets a cleaner, more relevant package.",
          coachingTip:
            "Direct counter-proposals work when the client can see that every change is in their interest. Your proposal passes that test.",
          styleContext:
            "Direct communicators in renegotiations reframe the conversation from 'how much less can we charge' to 'how can we deliver the right scope at the right price.' Your proposal achieves that reframe.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the scope changes are clearly justified by usage data. If any removal feels arbitrary, the client will push back.",
          observation:
            "If your proposal does not show the specific usage figures for removed items, the client has no evidence base for accepting the changes.",
          coachingTip:
            "For each removed item, state the usage: '3 users in 6 months' or 'average attendance of 2.' That data makes the removal feel reasonable, not punitive.",
          styleContext:
            "Direct communicators tie every change to a fact. If a scope reduction is not backed by usage data, it looks like a cost-saving exercise rather than a value-alignment exercise.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your counter-proposal either accepts the fee reduction, fails to restructure the scope with evidence, or does not include the quarterly review mechanism.",
          observation:
            "If your proposal reads like a defensive response rather than a confident alternative, it has not captured Alex's direct style.",
          coachingTip:
            "Rewrite as if you are offering the client something better than what they asked for. They asked for a cheaper deal. You are offering a smarter one.",
          styleContext:
            "Direct communicators win renegotiations by changing the question. The client asked 'will you reduce your fee?' Alex answered 'I will give you a better deal.' Those are different conversations.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (328-330) - team
  // ============================================

  // Scenario 328 - Priya Sharma, team, foundation
  {
    id: "scenario-328",
    title: "The New Starter Welcome",
    context:
      "A new team member is joining on Monday and Priya has taken it upon herself to organise the welcome. She wants the person to feel immediately part of the team, not just oriented to the systems and processes.",
    chooseContext:
      "Priya has organised a welcome lunch and a 'getting to know you' session where each team member shares something about themselves. One colleague thinks this is over the top and wants to just point the new starter at the documentation.",
    rewriteContext:
      "Priya has asked you to help her write a welcome message from the team to the new starter, capturing the personality of the team and making the person feel like they belong before they have even logged in.",
    characterId: "priya-sharma",
    dialogue:
      "First days matter. I still remember mine, and the thing that made the difference was not the laptop setup or the HR handbook - it was the person who said 'we have been excited about you joining.' That one sentence changed my whole first week. I want to create that for every new person who walks through our door.",
    chooseDialogue:
      "I hear you - documentation matters. But so does belonging. Nobody ever left a company because the welcome lunch was too warm. People leave because they never felt like they were part of something. This costs us two hours and a pizza. The return is immeasurable.",
    rewriteDialogue:
      "Write the message from the whole team. I want it to feel personal, not corporate. Include something fun about each team member - their go-to lunch order, their hidden talent, their favourite meeting room. Make the new person laugh and feel like they already know us.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya is organising a new starter welcome focused on belonging and personal connection, citing her own first-day memory. She argues that the emotional experience matters more than the administrative onboarding. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with personal narrative, prioritises emotional experience, and creates opportunities for the team to show personality. This is expressive communication - warm, personal, and experience-driven.",
          observation:
            "Notice how Priya references her own first-day memory. Expressive communicators use personal stories as evidence because they trust emotional data as much as factual data.",
          coachingTip:
            "When someone organises team activities based on how they want people to feel rather than what they need to know, they are operating expressively.",
          styleContext:
            "Expressive communicators believe that belonging is the foundation of performance. If someone feels welcome, they will learn the systems. If they do not feel welcome, the systems do not matter.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya's focus on making someone feel they belong can look supportive. But notice she is creating energy and excitement, not just safety. The welcome is designed to be fun and memorable, not just comforting.",
          observation:
            "A supportive welcome would focus on making the new person feel safe and supported. Priya's welcome focuses on making them feel excited and included.",
          coachingTip:
            "If the welcome is designed to energise, that is expressive. If it is designed to reassure, that is supportive. Priya wants the new starter to feel thrilled, not just comfortable.",
          styleContext:
            "Expressive communicators create onboarding experiences that people talk about afterwards. The goal is a story, not just a good first day.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not focused on the documentation, the process checklist, or the structured onboarding plan. Her approach is entirely about the human experience.",
          observation:
            "There is no mention of login credentials, system access, or compliance training. Priya is designing a welcome, not an onboarding workflow.",
          coachingTip:
            "Ask yourself: is this person optimising for efficiency or for experience? Priya is all about the experience. The efficiency can come later.",
          styleContext:
            "Expressive communicators believe that the first impression of a team sets the tone for everything that follows. A warm welcome pays dividends for months.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A colleague thinks the welcome activities are over the top and wants to just point the new starter at documentation. How do you respond?",
      options: [
        {
          id: "s328-opt-a",
          text: "I think Priya has a point. The documentation will get done regardless, but the chance to make a strong first impression is a one-time thing. Two hours of personal connection on day one pays off for months. And honestly, it is good for us too - it reminds us what kind of team we want to be.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Priya's approach, frames the investment as strategic, and adds the insight that welcome activities benefit the whole team, not just the new starter.",
        },
        {
          id: "s328-opt-b",
          text: "Could we split the morning? First half for the welcome activities Priya has planned, second half for the practical setup and documentation. That covers both bases.",
          score: 5,
          result: "partial",
          explanation:
            "A fair compromise, but Priya has already planned the welcome and the colleague's objection is to its existence, not its length. Splitting the time implicitly concedes that the welcome is too much.",
        },
        {
          id: "s328-opt-c",
          text: "I think the new person would prefer to just get set up and get started. Most people find forced social activities on day one awkward, not welcoming.",
          score: 0,
          result: "weak",
          explanation:
            "Calling the welcome 'forced social activities' dismisses Priya's intent and assumes the new starter would dislike personal connection. It projects resistance onto someone who has not expressed it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the team welcome message for the new starter. Include fun personal details about each team member. Make it warm, personal, and distinctly expressive - the new person should feel like they belong before day one.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Welcome to the team!\n\nWe have been looking forward to this. Seriously - your name has come up in about twelve conversations over the past two weeks, and all of them were some version of 'I cannot wait for them to start.'\n\nBefore you walk in on Monday, here is who you are walking in to:\n\nPriya - Team lead. Fuelled by oat milk lattes and big ideas. Will almost certainly suggest a brainstorm before lunch. Go with it - the ideas are always worth the energy.\n\nJack - The quiet genius. He will not say much in your first meeting, but when he does, write it down. Also makes the best tea in the building. No one knows how.\n\nSophie - The organiser. If you need something, she has it. Stationery, a meeting room, a pep talk. She also has very strong feelings about fonts, so be warned.\n\nDev - The storyteller. He will have you laughing within the first hour. Do not challenge him to a pub quiz - he will win and he will not be gracious about it.\n\nWe are a team that works hard, laughs a lot, and genuinely looks out for each other. You are going to fit right in.\n\nSee you Monday. First coffee is on us.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is the kind of welcome message that makes someone screenshot it and send it to their friends. Warm, funny, personal, and genuinely inviting. The new person already feels like part of the team.",
          observation:
            "Each team description has personality without being a formal bio. The new starter learns who people are, not what they do - which is exactly what an expressive communicator values.",
          coachingTip:
            "Expressive welcome messages work when they sound like they were written by real people who actually like each other. Your message passes that test.",
          styleContext:
            "Expressive communicators believe that the best way to welcome someone is to show them the personality of the team, not the organogram.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether the personal details are genuinely fun and distinctive. If the team descriptions are generic - 'loves coffee, works hard' - they will not create the connection Priya wants.",
          observation:
            "If the message could describe any team in any company, add more specificity. The quirks are what make it memorable.",
          coachingTip:
            "For each person, include one detail that only someone who actually works with them would know. That insider knowledge is what makes the new person feel welcomed into the inner circle.",
          styleContext:
            "Expressive communicators value authenticity in welcome messages. Generic warmth is worse than no message at all, because it signals that nobody thought about it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too corporate, or lacks the personal details that make a welcome feel genuine.",
          observation:
            "If your message reads like an HR template or a LinkedIn post, it has missed Priya's brief entirely.",
          coachingTip:
            "Rewrite as if you are texting a friend who is about to meet your favourite people. That tone - excited, personal, insider - is what an expressive welcome message sounds like.",
          styleContext:
            "Expressive communicators believe welcome messages should make the new person feel like they have already been talked about with affection. If the message is impersonal, it communicates indifference.",
        },
      },
    },
  },

  // Scenario 329 - Marcus Webb, team, intermediate
  {
    id: "scenario-329",
    title: "The Team Celebration Design",
    context:
      "Your team has just delivered a major project ahead of schedule. Marcus wants to organise a celebration that properly acknowledges everyone's contribution and tells the story of the project to the wider business.",
    chooseContext:
      "Marcus has proposed creating a short video montage featuring clips from each team member talking about their proudest moment from the project. A colleague thinks a simple email congratulating the team would be sufficient.",
    rewriteContext:
      "Marcus has asked you to write the script for a two-minute team celebration video that captures the journey of the project and highlights individual contributions.",
    characterId: "marcus-webb",
    dialogue:
      "We did something special here and I am not going to let it disappear into a Slack message. The wider business needs to see what this team built, how they built it, and how they felt doing it. I want every person on this project to have a moment where they see themselves recognised, not just as part of a team, but as a named individual who made it happen.",
    chooseDialogue:
      "An email is fine if you want to tick a box. But we have a chance to do something that people remember. A two-minute video where each person shares their proudest moment - that is something they show their families. That is something the company talks about for months. Why would we settle for less?",
    rewriteDialogue:
      "Write the script. Open with the challenge we faced, then move through the journey - the tough moments, the breakthroughs, the late nights. Feature each team member by name with one line about what they contributed. Close with the result and what it means for the business. Make it feel like a story, not a status update.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus wants to create a video montage celebrating each team member's individual contribution, arguing that the team deserves named recognition, not just a congratulatory email. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus wants celebration that tells a story, names individuals, and creates an emotional legacy. He sees recognition as an art form, not an administrative task. This is expressive communication at its most characteristic.",
          observation:
            "Notice how Marcus frames the video as something 'they show their families.' Expressive communicators think about the emotional ripple effect of recognition beyond the workplace.",
          coachingTip:
            "When someone insists on a recognition format that has narrative, personality, and emotional impact, they are operating expressively.",
          styleContext:
            "Expressive communicators believe that how you celebrate matters as much as whether you celebrate. A flat acknowledgement is almost worse than none because it signals that the achievement was unremarkable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus's focus on individual recognition can look supportive. But the intent is not comfort - it is celebration and storytelling. He wants people to feel proud and visible, not just safe and acknowledged.",
          observation:
            "A supportive celebration would focus on making sure everyone feels included and nobody is overlooked. Marcus wants everyone to have a starring moment.",
          coachingTip:
            "If the celebration is designed to make people feel seen and proud, that is expressive. If it is designed to make people feel safe and valued, that is supportive.",
          styleContext:
            "Expressive communicators create celebrations that amplify people's contributions. Supportive communicators create celebrations that acknowledge people's efforts.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not suggested a data-driven retrospective, a project metrics review, or a structured lessons-learned session. His focus is entirely on emotional recognition.",
          observation:
            "There is no mention of KPIs, delivery metrics, or cost savings. Marcus measures success by how people feel about what they built.",
          coachingTip:
            "Ask yourself: is this person measuring the project's output or celebrating its story? Marcus is telling a story. The outputs are part of it, but the people are the headline.",
          styleContext:
            "Expressive communicators believe that the best projects are remembered for the people who built them, not the numbers they produced.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A colleague thinks a congratulatory email would be sufficient for the team celebration. Marcus wants a video montage. How do you weigh in?",
      options: [
        {
          id: "s329-opt-a",
          text: "Marcus is right that this deserves more than an email. A two-minute video is not much time to ask for, but the impact of named, personal recognition is huge - both for the team and for how the wider business sees what we are capable of.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's vision and adds the strategic benefit of demonstrating team capability to the wider business. It positions the video as high-impact for low investment.",
        },
        {
          id: "s329-opt-b",
          text: "Could we start with the email and then follow up with the video once it is ready? That way the team gets immediate recognition and then a more meaningful celebration later.",
          score: 5,
          result: "partial",
          explanation:
            "Not unreasonable, but the email dilutes the impact of the video. Marcus wants the celebration to feel special, and sending a bland email first lowers the bar.",
        },
        {
          id: "s329-opt-c",
          text: "I think the team would prefer a quiet thank you and maybe a team dinner. A video might make some people uncomfortable - not everyone wants to be on camera.",
          score: 0,
          result: "weak",
          explanation:
            "Projecting discomfort onto the team without checking dismisses Marcus's idea based on assumptions. Marcus specifically wants each person to have a moment of visible recognition.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the script for a two-minute team celebration video. Open with the challenge, move through the journey, feature each person by name, and close with the result. Expressive style - make it feel like a story.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Video Script - Project Horizon Celebration\n\n[Opening - 15 seconds]\nThree months ago, we were told it could not be done in the timeline. Too ambitious, too many unknowns, too much risk. This is the story of the team that did it anyway.\n\n[The Challenge - 15 seconds]\nProject Horizon started as a whiteboard sketch and a tight deadline. The brief was clear: redesign the customer platform from scratch, launch by March, and do not break anything in the process. No pressure.\n\n[The Journey - 45 seconds]\nThe first two weeks were chaos in the best possible way. Sarah mapped every user journey until the whiteboard ran out of space. Rahul rewrote the backend in half the time anyone expected, and when we asked how, he just shrugged. That is Rahul.\n\nWeek four brought the first setback - a critical integration that nobody saw coming. Priya fixed it in a weekend. She says it was no big deal. It was a very big deal.\n\nBy month two, the momentum was real. Jen led user testing with a patience that the rest of us could not match. Mike kept the stakeholders informed and calm, which might have been the hardest job of all.\n\n[The Result - 20 seconds]\nWe launched a week early. Not because we rushed, but because we were ready. User satisfaction is up 34%. Complaints are down by half. And the team that was told it could not be done is the same team sitting in this room right now.\n\n[Close - 15 seconds]\nThis is what happens when talented people trust each other. Project Horizon is not just a product launch - it is proof of what this team can do. And we are just getting started.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This script is cinema-worthy in a workplace context. Every person is named with a distinctive contribution, the narrative arc is compelling, and the closing line creates momentum for the future.",
          observation:
            "You gave each person a moment that captures their personality, not just their output. 'He just shrugged. That is Rahul' is the kind of detail that makes people feel truly seen.",
          coachingTip:
            "Expressive celebration scripts work when every person featured would feel proud watching it. If any name feels like a token mention, add a specific moment.",
          styleContext:
            "Expressive communicators design celebrations as stories. Your script has a beginning, a middle, and an end - with real people as the heroes.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each person's moment is distinctive. If the contributions are described generically - 'worked hard', 'did a great job' - the recognition loses its power.",
          observation:
            "If you remove a person's name and the sentence still works for anyone, the recognition is not specific enough.",
          coachingTip:
            "For each person, include one detail that only they would recognise. The specificity is what makes it personal.",
          styleContext:
            "Expressive communicators believe that recognition is only meaningful when it is specific. Generic praise is background noise.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your script lacks a narrative arc, does not name individuals with specific contributions, or reads like a project report rather than a celebration.",
          observation:
            "If your script could be read at any project completion ceremony for any team, it is too generic for Marcus's standards.",
          coachingTip:
            "Start with the specific challenge this team faced, tell the story of how specific people overcame it, and end with what it means. That is the structure of a celebration, not a summary.",
          styleContext:
            "Expressive communicators see celebration scripts as legacy documents. If the video is still being referenced a year later, it did its job.",
        },
      },
    },
  },

  // Scenario 330 - Nina Okafor, team, advanced
  {
    id: "scenario-330",
    title: "The Team Identity Rebuild",
    context:
      "Nina has inherited a team that has been through three managers in two years and has lost its sense of identity and purpose. She wants to rebuild the team culture from the ground up by creating a shared narrative about who they are and what they stand for.",
    chooseContext:
      "Nina has asked the team to each share one word that describes how they feel about the team right now. The words are mostly negative - 'tired', 'confused', 'forgotten.' Nina is using these as the starting point for a new narrative.",
    rewriteContext:
      "Nina has asked you to help her write a team charter that captures the identity they want to build together, starting from where they are now and painting a picture of where they are going.",
    characterId: "nina-okafor",
    dialogue:
      "I know this team has been through a lot. Three managers in two years is not a leadership strategy - it is a survival exercise. And the fact that you are all still here, still delivering, still showing up - that tells me everything I need to know about who you are. You are not a team that gave up. You are a team that endured. And now we are going to build something worth staying for.",
    chooseDialogue:
      "Thank you for those words. 'Tired', 'confused', 'forgotten.' I hear every one of them and I am not going to pretend they do not sting. But here is what I also see: a team that is honest enough to say those words out loud. That is not weakness - that is courage. And we are going to use that honesty as the foundation for what comes next.",
    rewriteDialogue:
      "The charter should start with where we are, not where we wish we were. Acknowledge the journey - the three managers, the instability, the resilience. Then paint the picture of where we are going. Not a corporate vision statement - a promise from us to each other. If someone reads this in six months, they should feel like they are reading the opening chapter of a comeback story.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Nina is rebuilding a demoralised team's identity by honouring their difficult past, reframing negative feelings as courage, and painting a narrative of comeback. She uses phrases like 'a survival exercise' and 'a team that endured.' Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina uses narrative, emotional reframing, and vision-casting to transform the team's self-perception. She takes their pain and turns it into a story of resilience and potential. This is expressive leadership at its most powerful.",
          observation:
            "Notice how Nina reframes 'tired, confused, forgotten' as 'honest enough to say those words out loud.' Expressive communicators transform negative emotions into narrative assets.",
          coachingTip:
            "When a leader takes a team's pain and reframes it as the beginning of a comeback story, they are operating at an advanced expressive level.",
          styleContext:
            "Expressive communicators believe that every team has a story, and the leader's job is to help them tell a better one. Nina is not ignoring the past - she is recasting it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina deeply acknowledges the team's emotional state, which can look supportive. But she is not just creating safety - she is creating momentum. The feelings are honoured as a launchpad, not a resting place.",
          observation:
            "A supportive leader would spend more time sitting with the difficult feelings. Nina acknowledges them and then immediately pivots to 'what comes next.'",
          coachingTip:
            "If someone acknowledges pain as a stepping stone to a new narrative, that is expressive. If they acknowledge pain as something to be processed and healed, that is supportive.",
          styleContext:
            "Expressive communicators in team-building situations are forward-looking optimists. They honour the past but refuse to live in it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented employee engagement data, management turnover statistics, or a structured team development framework. Her approach is entirely narrative and emotional.",
          observation:
            "There is no SWOT analysis, no team assessment tool, and no benchmarking. Nina is working at the level of story and identity, not process and measurement.",
          coachingTip:
            "Ask yourself: is this leader diagnosing a problem or rewriting a story? Nina is rewriting the team's story. The diagnosis is implicit in the narrative.",
          styleContext:
            "Expressive communicators rebuild teams through shared narrative, not shared metrics. If the team believes in a new story about themselves, the metrics will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team has shared words like 'tired', 'confused', and 'forgotten.' Nina is reframing them as courage. How do you build on her approach?",
      options: [
        {
          id: "s330-opt-a",
          text: "Nina is right - those words take guts to say. And if I can add one: 'ready.' I think this team is ready for something different. We have survived the hard part. Now we get to choose what comes next. What would we each want the word to be in six months?",
          score: 10,
          result: "strong",
          explanation:
            "This builds beautifully on Nina's reframe by adding a new word - 'ready' - that bridges from the past to the future. The question about six months invites the team to co-create the new narrative.",
        },
        {
          id: "s330-opt-b",
          text: "I appreciate the honesty in the room. Should we capture these feelings formally and share them with senior leadership? They need to understand the impact of the management changes.",
          score: 5,
          result: "partial",
          explanation:
            "Escalating the feelings to leadership shifts the conversation from team-building to organisational complaint. Nina is using the feelings internally, not externally.",
        },
        {
          id: "s330-opt-c",
          text: "I think we need to move past the negativity and focus on the work. The best way to rebuild the team is to deliver something we are proud of, not to dwell on what went wrong.",
          score: 0,
          result: "weak",
          explanation:
            "Labelling the honesty as 'negativity' and suggesting the team should 'move past it' dismisses the emotional work Nina has carefully set up. It shuts down the very vulnerability she is cultivating.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the team charter. Start with where the team is now, acknowledge the journey, and paint the picture of where they are going. Not a corporate statement - a promise from the team to each other. Expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Our Team Charter\n\nWhere we have been:\nWe have had three managers in two years. We have been reorganised, reprioritised, and at times overlooked. Through all of it, we kept showing up, kept delivering, and kept looking out for each other. We did not choose the instability, but we chose to stay. That says something about who we are.\n\nWho we are:\nWe are the team that endured. We are honest when things are hard, reliable when things are uncertain, and loyal to each other even when the organisation has not been loyal to us. We are not perfect and we do not pretend to be. But we are real, and we are here.\n\nWhat we stand for:\nHonesty over politics. We say what we mean, even when it is uncomfortable.\nOwnership over blame. When something goes wrong, we fix it together.\nPeople over process. Systems serve us; we do not serve systems.\nProgress over perfection. We move forward, learn, and adjust.\n\nWhere we are going:\nThis is the beginning of a new chapter. We are going to build a team culture that people want to join, not just one they happen to be assigned to. We are going to create work we are proud of and a dynamic that makes Monday mornings feel different.\n\nOur promise to each other:\nWe will be honest. We will have each other's backs. We will celebrate the wins and sit with the losses. And when someone new joins this team, they will feel what we are building before anyone explains it to them.\n\nThis is our team. This is our story. And we are just getting started.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This charter reads like a manifesto written by a team that has been through fire and emerged stronger. It is honest, personal, and forward-looking - exactly the comeback story Nina envisioned.",
          observation:
            "The values are expressed as choices - 'honesty over politics', 'people over process' - which gives them the conviction of lived experience rather than corporate aspiration.",
          coachingTip:
            "Expressive team charters work when they sound like the team's collective voice, not a leader's vision statement. Your charter sounds like a group of people who trust each other.",
          styleContext:
            "Expressive communicators write charters that people want to read aloud. If the closing line gives you goosebumps, the style is working.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the charter captures the team's specific journey. If it could apply to any team in any organisation, add more of their particular story.",
          observation:
            "If the values sound like they came from a corporate playbook rather than a team conversation, they will not resonate with people who have been through genuine difficulty.",
          coachingTip:
            "Add one reference to a specific shared experience. The more concrete the reference, the more the charter feels like it belongs to this team alone.",
          styleContext:
            "Expressive communicators value charters that are unmistakably theirs. Generic values are forgettable; specific commitments are binding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your charter either reads like a corporate template, fails to acknowledge the team's difficult history, or lacks the emotional conviction Nina specifically requested.",
          observation:
            "If the charter could be posted on any company's intranet without modification, it has missed the brief entirely.",
          coachingTip:
            "Start again with this question: what has this team survived, and what does that tell us about who they are? Build the charter from that foundation.",
          styleContext:
            "Expressive communicators believe that team charters should be stories, not statements. If the charter does not tell a story, it will not inspire action.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (331-333) - conflict
  // ============================================

  // Scenario 331 - Tom Brennan, conflict, foundation
  {
    id: "scenario-331",
    title: "The Workload Dispute",
    context:
      "Two team members have come to Tom because they feel the workload distribution is unfair. One person is handling three projects while the other has one. The overloaded team member is frustrated but not hostile. Tom wants to resolve this without anyone feeling blamed.",
    chooseContext:
      "Tom has listened to both sides and is now proposing a redistribution. The person with one project feels they have been singled out as underperforming, even though Tom has not said that.",
    rewriteContext:
      "Tom has asked you to help him draft a workload redistribution plan that frames the change as a team improvement, not a correction of any individual.",
    characterId: "tom-brennan",
    dialogue:
      "I want to thank both of you for coming to me with this. It takes trust to raise something like workload when it could easily be misread. I have looked at the distribution and I agree it is not balanced. That is not a reflection on either of you - it is a planning gap on my part. Let us fix it together.",
    chooseDialogue:
      "I want to be clear: nobody is underperforming and nobody is being singled out. This is about making sure the load is spread fairly so that everyone can do their best work without burning out. If anything, the fact that you have handled one project so well tells me you are ready for more - and that is a compliment, not a criticism.",
    rewriteDialogue:
      "Write the redistribution plan as a team document, not a management directive. Frame it as 'we reviewed the workload as a team and agreed...' rather than 'I have decided...' I do not want anyone reading it to feel corrected. I want them to feel that we solved this together.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Tom is resolving a workload dispute by taking responsibility for the imbalance himself, reframing a redistribution as a compliment rather than criticism, and insisting the solution feels collaborative. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom absorbs the blame, protects both parties' dignity, and frames the solution as collective. Every aspect of his approach is designed to prevent anyone from feeling criticised.",
          observation:
            "Notice how Tom takes ownership of the planning gap rather than asking either person to justify their workload. Supportive communicators deflect blame away from others and onto systems or themselves.",
          coachingTip:
            "When a manager resolves conflict by taking personal responsibility and reframing the outcome as a positive for everyone, they are operating supportively.",
          styleContext:
            "Supportive communicators in conflict situations prioritise dignity above all else. The solution must feel fair and the process must feel safe.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and affirming, which can look expressive. But his warmth is protective rather than energising. He is preventing hurt, not creating excitement.",
          observation:
            "An expressive manager might share their own experience of feeling overloaded. Tom keeps the focus entirely on the two team members and their experience.",
          coachingTip:
            "If someone's warmth in conflict is designed to prevent pain, that is supportive. If it is designed to build connection through shared experience, that is expressive.",
          styleContext:
            "Supportive communicators in disputes are emotional shields. They position themselves between the parties to absorb the friction.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented a data-driven workload analysis, a capacity planning model, or a structured allocation framework. His approach is entirely relational.",
          observation:
            "There is no spreadsheet of hours, no project complexity scoring, and no formal capacity assessment. Tom is managing feelings, not metrics.",
          coachingTip:
            "Ask yourself: is this manager solving a resource problem or a relationship problem? Tom sees the workload dispute as a relationship issue first. The redistribution is the output; the emotional resolution is the goal.",
          styleContext:
            "Supportive communicators resolve disputes at the emotional level because they believe that is where the real problem sits. The practical solution follows naturally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The person with one project feels singled out. Tom is clarifying that the redistribution is a compliment, not a criticism. How do you support?",
      options: [
        {
          id: "s331-opt-a",
          text: "Tom is right. Taking on more work is a sign of trust, not a correction. And honestly, the fact that you handled your current project so well is exactly why this makes sense. You have proved you can take more on - and we want to give you that opportunity.",
          score: 10,
          result: "strong",
          explanation:
            "This reinforces Tom's reframe and adds personal recognition. It transforms the redistribution from something that happened to the person into something they earned.",
        },
        {
          id: "s331-opt-b",
          text: "I think we should make this decision based on skills and capacity data rather than feelings. If we map project requirements against individual strengths, the allocation becomes objective.",
          score: 5,
          result: "partial",
          explanation:
            "Objective allocation has value, but in this moment the person feels emotionally targeted. Shifting to data ignores the feelings Tom is carefully managing.",
        },
        {
          id: "s331-opt-c",
          text: "To be fair, the workload was always transparent and nobody raised it until now. We are all adults - if the distribution felt unfair, it should have been flagged earlier.",
          score: 0,
          result: "weak",
          explanation:
            "Blaming the team for not speaking up earlier creates exactly the kind of shame Tom is trying to prevent. It punishes the honesty that Tom explicitly praised.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the workload redistribution plan as a collaborative team document. Frame it as a group decision, protect everyone's dignity, and ensure nobody feels corrected. Supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Workload Redistribution - Team Agreement\n\nFollowing an open conversation as a team, we reviewed how projects are currently distributed and agreed to rebalance for the rest of the quarter. This is not a response to any individual's performance - everyone on this team is delivering well. It is about making sure the workload is fair, sustainable, and plays to each person's strengths.\n\nUpdated allocation:\n- Alex: continues to lead Project Alpha and picks up Project Gamma, which aligns with their technical strengths.\n- Sam: continues Project Beta and transfers Project Delta to Alex, freeing up capacity for the new client brief arriving in April.\n- Jordan: continues Project Epsilon with added support from Sam on the stakeholder engagement workstream.\n\nWhy this works:\n- Each person has a manageable, meaningful workload.\n- The allocation reflects individual strengths, not a judgment on capacity.\n- No one is losing ownership of work they care about - transfers are to better-suited team members, not away from underperformers.\n\nWe agreed to check in as a team in four weeks to see how the new distribution feels. If anything needs adjusting, we will do it together.\n\nThis plan reflects a decision we made as a team. It belongs to all of us.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This plan is a masterclass in supportive documentation. It frames every change positively, explains the rationale without blame, and positions the redistribution as a team decision.",
          observation:
            "The 'why this works' section is excellent - it proactively addresses the concern about being singled out by explicitly stating that transfers are about fit, not performance.",
          coachingTip:
            "Supportive redistribution plans work when every person named in the document would feel good reading their section. Your plan passes that test.",
          styleContext:
            "Supportive communicators write team documents that no one would feel embarrassed for others to read. If any section could cause a wince, revise it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether any allocation implicitly signals underperformance. If a transfer is explained as 'freeing up capacity', ensure it does not read as 'you were not busy enough.'",
          observation:
            "If any section of the plan could be read as a correction, soften the framing. Supportive documents protect dignity through careful word choice.",
          coachingTip:
            "For each transfer, frame it as moving toward something good, not away from something bad. 'Picks up Project Gamma to develop technical skills' is better than 'receives additional work.'",
          styleContext:
            "Supportive communicators frame workload changes as opportunities, not corrections. The language determines whether someone feels promoted or punished.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan either reads as a management directive, fails to explain the rationale positively, or could cause someone to feel singled out.",
          observation:
            "If your plan says 'the workload was unbalanced and has been corrected' without framing the change positively for each person, it has missed Tom's brief.",
          coachingTip:
            "Rewrite as if you are writing a letter to the team member who is most at risk of feeling blamed. If they read it and feel supported, the plan is ready.",
          styleContext:
            "Supportive communicators believe that how a change is communicated determines how it is received. A poorly framed redistribution creates more resentment than the original imbalance.",
        },
      },
    },
  },

  // Scenario 332 - Leah Morgan, conflict, intermediate
  {
    id: "scenario-332",
    title: "The Communication Breakdown",
    context:
      "Two senior team members have stopped communicating directly and are routing everything through Leah. The underlying issue is a disagreement about project direction that was never resolved. Leah wants to bring them together to restore the relationship.",
    chooseContext:
      "Leah has got both people in a room and opened the conversation. One person has expressed frustration; the other has gone quiet and is visibly shutting down. Leah is managing both dynamics simultaneously.",
    rewriteContext:
      "Leah has asked you to help her draft a relationship repair agreement - a short document both parties can sign off on that commits them to specific communication behaviours going forward.",
    characterId: "leah-morgan",
    dialogue:
      "I have asked you both here because I care about this team and I care about both of you. The fact that you are communicating through me instead of with each other tells me something is unresolved, and I think you both deserve better than that. I am not here to judge who is right. I am here to help you find a way forward that works for both of you.",
    chooseDialogue:
      "I can see this is landing differently for each of you. One of you is ready to talk and the other needs a moment - and that is completely fine. We are not on a timer. I want to suggest something: rather than debating what happened, can we each share what we need from this conversation? Not what went wrong, but what would make things better going forward.",
    rewriteDialogue:
      "Write the agreement as a shared commitment, not a peace treaty. I want it to feel like something they chose together, not something I imposed. Include three specific communication behaviours they agreed to, a check-in date, and a statement that this is about building something better, not just stopping something bad.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is mediating between two silent senior colleagues by prioritising care, managing different emotional responses simultaneously, and redirecting from blame to needs. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with care, manages both parties' emotional states with equal attention, and reframes the conversation from 'what went wrong' to 'what do you need.' This is supportive conflict resolution.",
          observation:
            "Notice how Leah acknowledges that the two people are experiencing the conversation differently. Supportive communicators read the room and adjust their approach to each individual.",
          coachingTip:
            "When a mediator prioritises emotional safety for both parties and redirects from blame to needs, they are operating in a supportive style.",
          styleContext:
            "Supportive communicators believe that conflict resolution starts with emotional regulation. Until both parties feel safe, no productive conversation can happen.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and emotionally attuned, which can look expressive. But her warmth is serving protection, not energy. She is creating safety, not excitement about reconciliation.",
          observation:
            "An expressive mediator would share how the breakdown has affected them personally. Leah keeps her own feelings out of the room to create space for theirs.",
          coachingTip:
            "If a mediator's emotional intelligence is directed at protecting others, that is supportive. If it is directed at sharing their own feelings, that is expressive.",
          styleContext:
            "Supportive mediators are emotionally invisible by design. They manage the room without drawing attention to their own emotional experience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not proposed a structured mediation framework, a timeline of incidents, or a formal conflict resolution process. Her approach is entirely relational and emotionally attuned.",
          observation:
            "There is no conflict log, no HR procedure, and no formal documentation. Leah is managing human dynamics, not following a process.",
          coachingTip:
            "Ask yourself: is this mediator following a process or reading a room? Leah is reading the room. The process serves the people, not the other way around.",
          styleContext:
            "Supportive mediators believe that most workplace conflicts are emotional problems wearing professional masks. Address the emotion and the professional issue often resolves itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One person is ready to talk while the other is shutting down. Leah has suggested focusing on needs rather than blame. How do you help?",
      options: [
        {
          id: "s332-opt-a",
          text: "Leah's suggestion is a good one. If I can share first: what I need from this team is to feel like I can go directly to anyone without worrying about how it will land. I imagine that is true for both of you too. Would it help to start there - with what we each need, rather than what happened?",
          score: 10,
          result: "strong",
          explanation:
            "Going first with a personal vulnerability models the behaviour Leah is encouraging. It gives the shut-down person a low-stakes template and shifts the room from adversarial to collaborative.",
        },
        {
          id: "s332-opt-b",
          text: "Maybe it would help to take a break and come back to this when everyone feels ready. Sometimes these conversations work better after people have had time to process.",
          score: 5,
          result: "partial",
          explanation:
            "Considerate, but Leah has already created the space and taking a break might lose the progress. The shut-down person may never feel ready - sometimes they need the conversation to start gently, not to be delayed.",
        },
        {
          id: "s332-opt-c",
          text: "I think we need to address the elephant in the room. You both know what the issue is. Let us name it and deal with it so we can all move on.",
          score: 0,
          result: "weak",
          explanation:
            "Forcing the issue when one person is already shutting down escalates the dynamic Leah is carefully managing. It prioritises resolution over safety, which is the opposite of supportive mediation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the relationship repair agreement. Three specific communication behaviours, a check-in date, and a framing that positions this as building something better. Supportive style - chosen, not imposed.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Our Communication Agreement\n\nThis agreement was shaped by both of us, with Leah's support. It reflects what we each need to rebuild trust and work together effectively. It is not about fixing blame for the past - it is about choosing how we want to communicate going forward.\n\nWe commit to:\n\n1. Direct communication first. If we have a concern about each other's work, we raise it with each other directly before involving anyone else. If it feels too difficult to do face-to-face, a short written message is an acceptable first step.\n\n2. Assuming good intent. Before reacting to something the other person has said or done, we will pause and consider the most generous interpretation. If we are unsure of the intent, we will ask rather than assume.\n\n3. Checking in monthly. On the first Monday of each month, we will have a 15-minute coffee chat - not about projects, but about how our working relationship feels. If either of us notices tension building, we raise it in that space.\n\nFirst check-in date: 7 April 2026\n\nThis agreement exists because we both value this team and each other enough to do the work. We are not signing a contract - we are making a choice. And we can revisit these commitments anytime they need adjusting.\n\nSigned by both of us, willingly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This agreement feels chosen, not imposed. The three behaviours are specific enough to follow and gentle enough to feel safe. The monthly check-in builds in a maintenance rhythm that prevents future silence.",
          observation:
            "The phrase 'we are not signing a contract - we are making a choice' captures the supportive spirit perfectly. It frames commitment as an act of care, not obligation.",
          coachingTip:
            "Supportive agreements work when both parties feel they authored them. Your document reads as if two people wrote it together, which is exactly what Leah wanted.",
          styleContext:
            "Supportive communicators design conflict resolution documents as relationship tools, not compliance tools. The goal is restored trust, not enforced behaviour.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the commitments feel imposed or chosen. If any point reads as a rule rather than a shared agreement, soften the language.",
          observation:
            "If the agreement includes phrases like 'you must' or 'failure to comply', it has shifted from supportive to directive.",
          coachingTip:
            "Replace 'you must' with 'we commit to.' The first-person plural is what makes it a shared commitment rather than a management instruction.",
          styleContext:
            "Supportive agreements lose their power when they feel like HR documents. Keep the language personal and the tone collaborative.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your agreement either reads like a formal HR mediation outcome, lacks specific behaviours, or does not frame the commitment as mutual and voluntary.",
          observation:
            "If the document could have been written by HR without either party's input, it has failed the supportive test.",
          coachingTip:
            "Rewrite as if both people wrote it together in the room with Leah. The language should sound like them, not like policy.",
          styleContext:
            "Supportive communicators believe that conflict resolution documents should feel personal. If the agreement does not reflect the specific conversation that produced it, start again.",
        },
      },
    },
  },

  // Scenario 333 - David Chen, conflict, advanced
  {
    id: "scenario-333",
    title: "The Values Clash Mediation",
    context:
      "Two team members have a fundamental disagreement about work ethic. One believes in strict boundaries and leaving on time; the other stays late regularly and feels the first person is not pulling their weight. The tension is affecting the whole team. David has been asked to mediate.",
    chooseContext:
      "David has created a space where both people have shared their perspectives. The person who stays late is struggling to understand how someone can leave at 5pm and still be committed. David is helping them see that different approaches can coexist.",
    rewriteContext:
      "David has asked you to draft a team working agreement that honours both approaches without requiring either person to change their values. The agreement should create mutual respect as the baseline.",
    characterId: "david-chen",
    dialogue:
      "I want to be honest with both of you: this is not a conflict with a winner. You each have a deeply held belief about what commitment looks like, and neither one is wrong. The question is not 'who works harder?' - it is 'how do we respect each other's approach while delivering as a team?' That is what I want us to solve today.",
    chooseDialogue:
      "I hear you saying that leaving at 5pm feels like a lack of commitment. And I hear you saying that staying late feels like a lack of boundaries. Both of those feelings are valid. What I want to explore is whether we can define commitment by what we deliver, not by how long we sit at a desk. If the output is equal, does the method really matter?",
    rewriteDialogue:
      "The working agreement needs to be values-neutral. It should not say 'flexible working is best' or 'long hours show dedication.' It should say: 'we agree that commitment is measured by output and collaboration, not by hours.' Then define what good collaboration looks like regardless of when someone is online. If both people read it and feel respected, we have got it right.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "David is mediating a values clash about work ethic by declaring there is no winner, validating both perspectives equally, and reframing commitment as output-based rather than hours-based. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David creates a space where both values can coexist without either being judged. He reframes the conflict from a binary disagreement to a shared question about how to define commitment. This is advanced supportive mediation.",
          observation:
            "Notice how David validates both feelings before proposing a reframe. Supportive mediators never ask someone to abandon their values - they find a frame large enough to hold both.",
          coachingTip:
            "When a mediator treats a values clash as a design problem rather than a right-wrong problem, they are operating at an advanced supportive level.",
          styleContext:
            "Supportive communicators believe that most workplace conflicts are not about who is right but about whose values feel threatened. Address the threat and the conflict dissolves.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is articulate and emotionally intelligent, which can look expressive. But his goal is mutual safety, not mutual inspiration. He is building a bridge, not painting a vision.",
          observation:
            "An expressive mediator would paint a picture of what great teamwork looks like. David focuses on removing the tension that is blocking it.",
          coachingTip:
            "If a mediator's primary goal is to make both parties feel respected and safe, that is supportive. If it is to inspire them toward a shared vision, that is expressive.",
          styleContext:
            "Supportive mediators in values clashes work like translators. They help each party understand the other's language without requiring either to change their vocabulary.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented productivity data, time-tracking analysis, or a performance comparison. His mediation is entirely values-based and emotionally managed.",
          observation:
            "There is no attempt to prove who is more productive or who works more efficiently. David explicitly avoids measuring the dispute.",
          coachingTip:
            "Ask yourself: is this mediator resolving a performance issue or a relationship issue? David treats this as a relationship issue about mutual respect, not a performance issue about hours worked.",
          styleContext:
            "Supportive communicators in values clashes resist the temptation to use data to determine a winner. Data creates winners and losers; supportive mediation creates coexistence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The person who stays late cannot understand how leaving at 5pm shows commitment. David is reframing commitment as output-based. How do you support?",
      options: [
        {
          id: "s333-opt-a",
          text: "David's reframe is important. I work differently from some of you, and what I have learned is that commitment shows up in how reliably someone delivers, not in how late their light is on. If we can agree on what 'delivered' looks like, we can stop watching each other's clocks.",
          score: 10,
          result: "strong",
          explanation:
            "This shares a personal perspective without judging either party, reinforces David's output-based reframe, and offers a practical path forward that both values systems can accept.",
        },
        {
          id: "s333-opt-b",
          text: "I think we should look at the actual output data. If both people are delivering to the same standard, the hours question becomes irrelevant. The numbers will settle this.",
          score: 5,
          result: "partial",
          explanation:
            "Data might support the reframe, but David is deliberately avoiding a measurement approach because it creates a winner. Using data to 'settle this' contradicts his values-neutral mediation.",
        },
        {
          id: "s333-opt-c",
          text: "I think there is a middle ground. Everyone should be willing to stay late sometimes when the team needs it. That is just being a team player.",
          score: 0,
          result: "weak",
          explanation:
            "This implicitly sides with the person who stays late and asks the other to compromise their boundaries. David is explicitly trying to avoid declaring one approach more valid than the other.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft a values-neutral team working agreement that measures commitment by output, defines good collaboration regardless of hours, and respects both approaches. Supportive style - both people should feel respected.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Team Working Agreement - How We Define Commitment\n\nThis agreement reflects a conversation about what commitment means on our team. We recognised that people show commitment in different ways, and that is a strength, not a problem.\n\nOur shared definition:\nCommitment is measured by the quality and reliability of what we deliver, and by how well we support each other as a team. It is not measured by hours at a desk or time online.\n\nWhat we agree on:\n\n1. Output first. We each own our deliverables and are accountable for completing them on time and to standard. How and when we do the work is a personal choice, provided the team is not left waiting.\n\n2. Responsive collaboration. During core hours (10am to 3pm), we are all available for team communication. Outside those hours, response times are flexible. Urgent matters are flagged clearly so the right person can respond in good time.\n\n3. No judgment on methods. Working late is a valid choice. Leaving on time is a valid choice. Neither is evidence of commitment or lack of it. We respect each other's approach without requiring everyone to follow the same pattern.\n\n4. Cover and communication. If a deadline requires extra effort, we discuss as a team how to share the load. Nobody is expected to stay late alone, and nobody is shamed for leaving on time.\n\nOur commitment to each other:\nWe will judge each other by what we deliver, not by when we deliver it. We will ask for help when we need it and offer it when we can. And we will revisit this agreement if either approach starts to feel disrespected.\n\nThis is a living document. It works only as long as we all feel represented by it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This agreement is values-neutral, specific, and respectful. Both the person who leaves at 5pm and the person who stays late would feel their approach is validated without the other being criticised.",
          observation:
            "The phrase 'neither is evidence of commitment or lack of it' is the key sentence. It removes the moral judgment that was fuelling the conflict.",
          coachingTip:
            "Supportive working agreements in values clashes succeed when they make the conflict feel unnecessary. If both parties read it and think 'I can live with this,' the agreement works.",
          styleContext:
            "Supportive communicators design agreements that dissolve opposition rather than managing it. Your agreement removes the adversarial frame entirely.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether any clause implicitly favours one approach. If the core hours requirement feels like a concession by the boundary-setter, or if 'extra effort' always implies late hours, the agreement is not neutral.",
          observation:
            "If one party reads the agreement and feels they have compromised more than the other, the neutrality has been lost.",
          coachingTip:
            "Read the agreement from each person's perspective separately. If either reading reveals a bias, adjust the language.",
          styleContext:
            "Supportive agreements in values clashes must pass the dual-perspective test. Each person should feel the document was written with their values in mind.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your agreement either favours one approach, uses judgmental language about work styles, or fails to define commitment in output-based terms.",
          observation:
            "If your agreement says 'flexibility is important' or 'dedication means going the extra mile,' it has taken a side. David wanted values-neutral language.",
          coachingTip:
            "Remove every word that could be read as favouring one work style. Replace with language that describes shared expectations about deliverables and collaboration.",
          styleContext:
            "Supportive communicators know that values-neutral language is the hardest to write but the most important in a values clash. Every word must be audited for bias.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (334-336) - one-to-one
  // ============================================

  // Scenario 334 - Rachel Finch, one-to-one, foundation
  {
    id: "scenario-334",
    title: "The Skill Gap Assessment",
    context:
      "Rachel has requested a one-to-one with her manager to discuss a skill gap she has identified in her own performance. She has already completed a self-assessment, benchmarked herself against the role requirements, and prepared a development plan with specific milestones.",
    chooseContext:
      "Rachel's manager is impressed by the preparation but suggests that Rachel might be being too hard on herself. Rachel pushes back with the data, arguing that the gap is real and should be addressed, not minimised.",
    rewriteContext:
      "Rachel has asked you to review and refine her development plan, ensuring each milestone is measurable, time-bound, and aligned with the competency framework for her target role.",
    characterId: "rachel-finch",
    dialogue:
      "I have mapped my current capabilities against the competency framework for the senior analyst role. I meet or exceed the standard on seven of ten competencies. The three gaps are in stakeholder management, presentation skills, and strategic forecasting. I have rated myself on a 1-5 scale for each, benchmarked against the role requirements, and prepared a development plan with quarterly milestones.",
    chooseDialogue:
      "I appreciate you saying I am being hard on myself, but the data does not support that conclusion. I scored myself a 2 on presentation skills. The role requires a 4. That is not perfectionism - it is a measurable gap. I would rather address it now with a plan than pretend it does not exist and fail the promotion interview.",
    rewriteDialogue:
      "Review my development plan. For each of the three gaps, I want a baseline score, a target score, specific actions to close the gap, and a date by which I expect to reach the target. If any action is vague, make it specific. If any timeline is unrealistic, adjust it. I want this plan to be something I can audit against in six months.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has prepared a self-assessment benchmarked against a competency framework, scored herself on a 1-5 scale, and created a development plan with quarterly milestones. She rejects reassurance in favour of data. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel approaches her own development as a data problem. She has benchmarked, scored, and planned with measurable milestones. Even her manager's encouragement is rejected because it does not align with the evidence.",
          observation:
            "Notice how Rachel rejects 'you are being too hard on yourself' with a specific number: 'I scored a 2, the role needs a 4.' Analytical communicators trust their data over other people's reassurance.",
          coachingTip:
            "When someone approaches self-development with benchmarks, scoring frameworks, and measurable milestones, they are communicating analytically.",
          styleContext:
            "Analytical communicators see skill gaps as measurable problems with structured solutions. Encouragement without evidence feels dismissive to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about addressing the gap, which can look direct. But her decisiveness comes from analysis, not instinct. She has scored, benchmarked, and planned before acting.",
          observation:
            "A direct communicator would say 'I know I need to get better at presentations.' Rachel says 'I scored a 2 and the role requires a 4.' The specificity is the difference.",
          coachingTip:
            "If someone's self-awareness is expressed through numbers rather than feelings, that is analytical.",
          styleContext:
            "Analytical communicators express self-awareness through measurement. 'I am not good at X' becomes 'I am at level 2 of 5 on X, and the target is 4.'",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not shared how she feels about the gaps, how the assessment affects her confidence, or what support she needs emotionally. Her approach is entirely metric-driven.",
          observation:
            "There is no expression of anxiety, frustration, or self-doubt. Rachel treats the gaps as data points to be addressed, not feelings to be processed.",
          coachingTip:
            "Ask yourself: is this person sharing feelings or sharing findings? Rachel is sharing findings. The emotional dimension is not absent - it is just not her starting point.",
          styleContext:
            "Analytical communicators process emotions privately and present conclusions publicly. Rachel's development plan is the output of her emotional processing, not a substitute for it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel's manager suggests she is being too hard on herself. Rachel pushes back with specific scores. How do you respond?",
      options: [
        {
          id: "s334-opt-a",
          text: "Rachel's self-assessment is thorough and the gaps she has identified are real. I think the most helpful thing we can do is take the plan seriously and help her refine the milestones. She has done the hard work of diagnosing - now she needs support with the prescription.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Rachel's analytical approach, respects her self-assessment, and offers to help improve the plan rather than dismiss the diagnosis.",
        },
        {
          id: "s334-opt-b",
          text: "I think Rachel is right to identify the gaps, but maybe a 2 out of 5 is harsh. Could we calibrate the scores by getting feedback from colleagues who have seen her present? That might give a more balanced picture.",
          score: 5,
          result: "partial",
          explanation:
            "Calibration is reasonable in analytical terms, but it implicitly questions Rachel's assessment, which she has already defended. If you suggest it, frame it as adding data, not correcting hers.",
        },
        {
          id: "s334-opt-c",
          text: "I think you are overthinking this. You are already performing well above average and most people in your position would not even notice these gaps. Give yourself some credit.",
          score: 0,
          result: "weak",
          explanation:
            "Telling an analytical communicator they are overthinking dismisses their entire methodology. Rachel has specifically rejected reassurance in favour of evidence-based development.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Refine Rachel's development plan. For each of three gaps, include a baseline score, target score, specific actions, and target dates. Make every element measurable and auditable. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Development Plan - Rachel Finch\nTarget role: Senior Analyst | Review date: September 2026\n\nGap 1: Stakeholder Management\nBaseline: 2/5 | Target: 4/5 | Timeline: 6 months\nActions:\n- Shadow two senior colleagues in stakeholder meetings (one per month, April and May). Document observations and discuss with mentor.\n- Lead stakeholder communication on one project independently by June. Seek structured feedback from stakeholders using a 5-point satisfaction survey.\n- Complete the internal stakeholder engagement course by end of April. Apply frameworks in at least two live situations by July.\nSuccess measure: Stakeholder feedback survey average of 4/5 or above on the independently led project.\n\nGap 2: Presentation Skills\nBaseline: 2/5 | Target: 4/5 | Timeline: 6 months\nActions:\n- Deliver one team presentation per month (April to September). Record each one and self-review against the presentation rubric.\n- Attend external presentation skills workshop by end of May.\n- Present to senior leadership at the quarterly business review in July. Collect structured feedback using the rubric.\nSuccess measure: Rubric score of 4/5 or above on the July presentation, assessed by two independent reviewers.\n\nGap 3: Strategic Forecasting\nBaseline: 3/5 | Target: 4/5 | Timeline: 6 months\nActions:\n- Complete the financial modelling and forecasting certification by end of June.\n- Build a rolling 12-month forecast model for one business unit, presenting monthly updates to the finance team.\n- Request peer review of forecast accuracy quarterly, comparing predictions to actuals.\nSuccess measure: Forecast accuracy within 5% variance on three consecutive monthly reviews.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This plan is precisely what Rachel asked for. Every gap has a baseline, a target, specific actions with dates, and a measurable success criterion. She can audit this in six months and know exactly where she stands.",
          observation:
            "The success measures are auditable - survey scores, rubric ratings, forecast accuracy percentages. Rachel can track progress objectively without relying on subjective judgment.",
          coachingTip:
            "Analytical development plans work when progress can be measured without a conversation. If the numbers tell the story, the plan is working.",
          styleContext:
            "Analytical communicators treat development plans as experiments. The hypothesis is 'these actions will close the gap,' and the success measures determine whether the hypothesis was correct.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every success measure is truly measurable. If any measure uses words like 'improved' or 'better', replace with a specific threshold.",
          observation:
            "If Rachel cannot audit the plan in six months without asking someone's opinion, the measures are not specific enough.",
          coachingTip:
            "For each success measure, ask: could two independent people assess this and reach the same conclusion? If not, add more specificity.",
          styleContext:
            "Analytical communicators design development plans that function as scorecards. Subjectivity is the enemy of accountability.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan lacks specific dates, measurable success criteria, or clear baselines. Rachel needs a plan she can audit, not a list of good intentions.",
          observation:
            "If your plan includes actions like 'improve presentation skills' without specifying how improvement will be measured, it fails the analytical standard.",
          coachingTip:
            "For each gap: state the current score, the target score, the actions, the dates, and the measure. If any of those five elements is missing, the plan is incomplete.",
          styleContext:
            "Analytical communicators see vague development plans as worse than no plan at all. Vagueness creates an illusion of progress without actual accountability.",
        },
      },
    },
  },

  // Scenario 335 - Owen Grant, one-to-one, intermediate
  {
    id: "scenario-335",
    title: "The Process Improvement Proposal",
    context:
      "Owen has requested a one-to-one with his manager to present a process improvement proposal he has been developing independently. He has mapped the current workflow, identified inefficiencies, and modelled the time and cost savings of his proposed changes.",
    chooseContext:
      "Owen's manager is interested but concerned about the disruption of implementing the changes. Owen is methodically addressing each concern with data from his analysis.",
    rewriteContext:
      "Owen has asked you to format his proposal into a business case document that can be shared with the operations director for approval.",
    characterId: "owen-grant",
    dialogue:
      "I have spent three weeks mapping our current invoicing workflow from end to end. There are 14 steps, 3 handoffs, and 2 manual data-entry points that account for 82% of our errors. I am proposing we reduce the process to 9 steps, eliminate one handoff through system integration, and automate the two manual entry points. The projected saving is 16 hours per week and a 70% reduction in error rate.",
    chooseDialogue:
      "I understand the concern about disruption. I have modelled three implementation approaches: full rollout, phased by team, and pilot with one team. The pilot approach has the lowest disruption risk and generates enough data in eight weeks to validate the full rollout. Here is the comparison with estimated disruption scores for each approach.",
    rewriteDialogue:
      "Format the business case with five sections: current state analysis, proposed changes, projected savings, implementation options, and risk assessment. Every number needs a source or a calculation methodology. The operations director will scrutinise this, so assume nothing and prove everything.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has independently mapped a 14-step workflow, identified error sources, modelled three implementation approaches with disruption scores, and is presenting projected savings with full methodology. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen has done exhaustive independent research, modelled multiple approaches, and presents his proposal with full data backing. This is analytical communication at its most thorough.",
          observation:
            "Notice how Owen addresses concerns with pre-prepared data models. Analytical communicators anticipate objections and build counter-evidence before the conversation happens.",
          coachingTip:
            "When someone presents a proposal with mapped workflows, error analyses, and implementation models complete with disruption scoring, they are communicating at an advanced analytical level.",
          styleContext:
            "Analytical communicators invest heavily in preparation because they believe the quality of the proposal determines the quality of the decision.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is confident about his proposal, which can look direct. But his confidence is built on three weeks of analysis, not on authority or instinct.",
          observation:
            "A direct communicator would say 'the process is broken, here is how to fix it.' Owen says 'I have mapped the process, here is where the errors occur, and here are three options for improvement with comparative risk analysis.'",
          coachingTip:
            "If someone's proposal earns credibility through depth of research rather than force of personality, that is analytical.",
          styleContext:
            "Analytical communicators build proposals that are difficult to dismiss because the workings are transparent and the methodology is sound.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not approached this through team consultation, emotional appeal, or relationship dynamics. His proposal is a solo research project presented with mathematical precision.",
          observation:
            "There is no mention of how the team feels about the current process, no stories of frustration, and no appeal to shared values. Owen's case is built entirely on numbers.",
          coachingTip:
            "Ask yourself: is this person presenting findings or sharing feelings? Owen is presenting findings from a systematic analysis.",
          styleContext:
            "Analytical communicators see process improvement as an engineering problem. The current state is measured, the proposed state is modelled, and the gap is the business case.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen's manager is concerned about implementation disruption. Owen has modelled three approaches with disruption scores. How do you respond?",
      options: [
        {
          id: "s335-opt-a",
          text: "The pilot approach makes strong sense. Eight weeks of data with one team gives us evidence to validate the full rollout without committing the entire operation. Owen, could you outline the specific metrics you would track during the pilot to determine success?",
          score: 10,
          result: "strong",
          explanation:
            "This engages with Owen's analysis, supports the lowest-risk option, and asks for additional detail that strengthens the case. It speaks Owen's language - metrics and evidence.",
        },
        {
          id: "s335-opt-b",
          text: "I like the idea but I think we need to get the team's buy-in first. If people feel the process is being changed without their input, implementation will be harder regardless of which approach we choose.",
          score: 5,
          result: "partial",
          explanation:
            "Team buy-in matters, but Owen has done three weeks of analysis independently. Suggesting team consultation now may feel like moving the goalposts on a well-researched proposal.",
        },
        {
          id: "s335-opt-c",
          text: "Honestly, the current process works well enough. Sixteen hours a week is a nice saving on paper, but the disruption of changing a system everyone knows could cost more in the short term.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing a three-week analysis with 'works well enough' is deeply frustrating for an analytical communicator. Owen has quantified the waste - 'well enough' is not a data-driven response.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Format Owen's proposal as a business case with five sections: current state, proposed changes, projected savings, implementation options, and risk assessment. Every number needs a source. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Business Case: Invoicing Process Optimisation\nPrepared by: Owen Grant | Date: 14 March 2026\n\nSection 1: Current State Analysis\nThe invoicing workflow comprises 14 sequential steps involving 3 team handoffs and 2 manual data-entry points. Over the past 90 days, manual entry errors accounted for 82% of all processing errors (source: error log analysis, December 2025 to February 2026). Average processing time per invoice: 47 minutes. Weekly volume: 120 invoices.\n\nSection 2: Proposed Changes\n- Reduce workflow from 14 steps to 9 by consolidating approval stages and removing redundant verification.\n- Eliminate one handoff through direct system integration between the order management and finance platforms.\n- Automate both manual data-entry points using existing API connectivity (confirmed with IT as technically feasible).\n\nSection 3: Projected Savings\n- Time: 16 hours per week (based on 120 invoices at 8 minutes saved per invoice).\n- Error reduction: 70% (eliminating the 2 manual entry points that cause 82% of errors).\n- Annual cost saving: Approximately 41,600 pounds (16 hours/week x 50 weeks x average processing cost of 52 pounds/hour).\n\nSection 4: Implementation Options\nOption A - Full rollout: 4-week implementation, all teams simultaneously. Disruption score: High.\nOption B - Phased by team: 8-week implementation, one team at a time. Disruption score: Medium.\nOption C - Pilot (recommended): 8-week pilot with one team (Accounts Receivable). Disruption score: Low. Generates validation data for full rollout decision.\n\nSection 5: Risk Assessment\nRisk 1: System integration failure. Mitigation: IT has confirmed API feasibility; parallel running for first 2 weeks of pilot.\nRisk 2: Team resistance to new workflow. Mitigation: Pilot team volunteers only; feedback collected weekly.\nRisk 3: Savings projections are overstated. Mitigation: Pilot tracks actual time savings against projections; full rollout only proceeds if pilot validates within 10% of estimate.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This business case is exactly what Owen would produce. Every number has a source or methodology, every risk has a mitigation, and the recommended option is clearly justified.",
          observation:
            "The risk assessment includes 'savings projections are overstated' with a 10% validation threshold. Analytical communicators build credibility by anticipating scepticism.",
          coachingTip:
            "Analytical business cases succeed when the reader cannot find an unsubstantiated claim. Your document passes that scrutiny test.",
          styleContext:
            "Analytical communicators see business cases as proof documents. If the operations director can challenge any number without finding a source, the document has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every projected saving has a clear calculation methodology. If the 41,600 pounds figure appears without showing the working, it loses credibility.",
          observation:
            "Analytical business cases need to show their workings. A number without a calculation is an assertion, not evidence.",
          coachingTip:
            "For every projected figure, include the formula: 16 hours/week x 50 weeks x 52 pounds/hour = 41,600 pounds. Transparency builds trust.",
          styleContext:
            "Analytical communicators include calculations in business cases because they want the reader to verify, not trust. Verification is a higher form of agreement than trust.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your business case lacks the structural rigour, sourced data, or calculation methodology that Owen requires. An analytical business case must be auditable.",
          observation:
            "If your document uses phrases like 'significant savings' or 'substantial improvement' without specific numbers, it is not analytical.",
          coachingTip:
            "Replace every adjective with a number. 'Significant' becomes '41,600 pounds per year.' 'Substantial' becomes '70% reduction.' That is the analytical standard.",
          styleContext:
            "Analytical communicators see unsourced business cases as opinions dressed up as proposals. Every claim needs evidence or it undermines the entire document.",
        },
      },
    },
  },

  // Scenario 336 - Fiona Banks, one-to-one, advanced
  {
    id: "scenario-336",
    title: "The Strategic Career Pivot",
    context:
      "Fiona has requested a one-to-one with her director to propose a strategic pivot in her career - moving from a purely analytical role into a hybrid position that combines data analysis with strategic advisory. She has prepared a detailed case with market research, internal competency mapping, and a proposed transition timeline.",
    chooseContext:
      "The director is supportive but questions whether the organisation has a precedent for this kind of hybrid role. Fiona has researched three comparable companies that have created similar positions and presents the evidence.",
    rewriteContext:
      "Fiona has asked you to draft a formal role proposal document that defines the hybrid position, maps the competencies required, and includes a phased transition plan with measurable milestones.",
    characterId: "fiona-banks",
    dialogue:
      "I have been thinking about this for six months, and I have done the research to back it up. The market is moving toward hybrid analytical-advisory roles. Deloitte, McKinsey, and BCG have all created similar positions in the past two years. Internally, our strategy team and analytics team overlap on 40% of their deliverables but never collaborate formally. I am proposing a role that bridges that gap, and I am proposing that I fill it.",
    chooseDialogue:
      "I anticipated the precedent question. Here are three case studies from comparable organisations. In each case, the hybrid role was created by someone who proposed it, not by the organisation identifying the need independently. That is the model I am following. I am not asking you to create a new position - I am showing you that the position already exists in practice, we just have not named it yet.",
    rewriteDialogue:
      "The proposal needs to be rigorous enough for the HR leadership team and the strategy director to approve. Define the role with a job description-level specification. Map the competencies required against my current capabilities and identify any gaps with a development plan. Include the three external case studies as evidence of market precedent. And propose a phased transition: three months shadowing, three months co-leading, three months autonomous. Each phase should have clear success criteria.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has spent six months researching a career pivot, benchmarked against three competitor firms, mapped internal competency overlaps at 40%, and is proposing a phased transition with measurable milestones. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona treats her career development as a strategic research project. She has benchmarked externally, analysed internal overlaps, and built a phased transition plan with success criteria. This is analytical career management at its most sophisticated.",
          observation:
            "Notice how Fiona pre-researched the precedent question. Analytical communicators anticipate objections and build evidence before the conversation, not during it.",
          coachingTip:
            "When someone presents a career proposal with market research, competency mapping, and external case studies, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators treat career conversations as business cases. The proposal must stand on evidence, not ambition alone.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive about what she wants, which can look direct. But her assertiveness is earned through six months of research. She is not demanding a new role - she is proving one should exist.",
          observation:
            "A direct communicator would say 'I want a new role and here is why I deserve it.' Fiona says 'here is the market evidence for this role, the internal data that supports it, and my plan for transitioning into it.'",
          coachingTip:
            "If someone's career ambition is expressed through research rather than assertion, that is analytical. Fiona's confidence comes from her data, not her personality.",
          styleContext:
            "Analytical communicators propose career moves the way consultants propose strategic initiatives - with evidence, benchmarks, and a phased implementation plan.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not led with her passion for the role, her personal growth story, or her feelings about the current position. The conversation is entirely evidence-based.",
          observation:
            "There is no emotional appeal, no personal narrative, and no mention of fulfilment or purpose. Fiona's case is built on market data, internal analysis, and external precedent.",
          coachingTip:
            "Ask yourself: is this person sharing a dream or presenting a thesis? Fiona is presenting a thesis. The dream exists, but it is expressed through evidence, not emotion.",
          styleContext:
            "Analytical communicators express career ambition through preparation. Six months of research is how Fiona says 'this matters to me.'",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The director questions whether a hybrid role has organisational precedent. Fiona presents three external case studies. How do you respond?",
      options: [
        {
          id: "s336-opt-a",
          text: "Fiona's research is compelling. The three case studies show this is a market trend, not an experiment. And the internal data - 40% deliverable overlap between analytics and strategy - suggests the need already exists. I think the question is not whether to create the role, but how quickly we can transition.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Fiona's evidence, connects the external case studies to the internal data, and reframes the conversation from 'should we' to 'how fast.' It advances the proposal analytically.",
        },
        {
          id: "s336-opt-b",
          text: "The case studies are interesting, but those are consulting firms. Our context is different. I would want to see whether any organisations in our specific industry have created similar roles before committing.",
          score: 5,
          result: "partial",
          explanation:
            "A fair analytical challenge, but Fiona has already spent six months researching. Requesting more evidence without engaging with what she has presented risks moving the goalposts.",
        },
        {
          id: "s336-opt-c",
          text: "I think career moves should come from opportunity, not from proposals. The best roles are the ones that find you because you are already doing the work. Maybe focus on demonstrating the capability first.",
          score: 0,
          result: "weak",
          explanation:
            "Telling an analytical communicator to wait for opportunity rather than create it dismisses their entire methodology. Fiona's point is that the role already exists informally - she is simply proposing to formalise it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the formal role proposal: job-description-level specification, competency mapping against Fiona's current capabilities, gaps with development plan, three external case studies, and a phased transition plan with success criteria. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Role Proposal: Strategic Analytics Advisor\nPrepared by: Fiona Banks | Date: 14 March 2026\n\nSection 1: Role Specification\nTitle: Strategic Analytics Advisor\nReporting to: Director of Strategy\nPurpose: Bridge the gap between data analytics and strategic advisory, translating quantitative insights into actionable strategic recommendations for senior leadership.\nKey responsibilities:\n- Lead analytical projects with strategic implications (revenue modelling, market positioning, competitive analysis)\n- Present data-driven recommendations directly to the executive team\n- Co-develop strategic plans with the strategy team, providing analytical rigour\n- Mentor junior analysts in strategic thinking and communication\n\nSection 2: Competency Mapping\nCompetency | Required Level | Fiona's Current Level | Gap\nData Analysis | 5/5 | 5/5 | None\nStatistical Modelling | 5/5 | 5/5 | None\nStrategic Thinking | 4/5 | 3/5 | -1\nExecutive Communication | 4/5 | 3/5 | -1\nStakeholder Influence | 4/5 | 3/5 | -1\nProject Leadership | 4/5 | 4/5 | None\nBusiness Acumen | 4/5 | 4/5 | None\n\nSection 3: Gap Development Plan\nStrategic Thinking: Shadow strategy director on two strategic projects (April to June). Complete strategic management certification by August.\nExecutive Communication: Present to executive team quarterly starting Q2. Engage presentation coach for six sessions (April to July).\nStakeholder Influence: Lead one cross-functional initiative with direct stakeholder accountability by September.\n\nSection 4: Market Precedent\nCase Study 1: Deloitte created 'Analytics Strategy Lead' roles in 2024, bridging their data practice and consulting teams. Result: 30% increase in cross-sold engagements.\nCase Study 2: McKinsey introduced 'Insight-to-Strategy Advisors' in 2024, drawing from their analytics division. Result: Improved strategic output speed by 40%.\nCase Study 3: BCG piloted hybrid roles in their London office in 2025, converting three senior analysts to advisory positions. Result: Client satisfaction scores increased by 18% on projects involving hybrid advisors.\n\nSection 5: Phased Transition Plan\nPhase 1 - Shadow (April to June): Fiona shadows the strategy team on two projects while maintaining 50% analytical workload. Success criteria: Completes two strategy project contributions rated 4/5 or above by the strategy director.\n\nPhase 2 - Co-lead (July to September): Fiona co-leads one strategic project with a strategy team member while maintaining 30% analytical workload. Success criteria: Project delivered on time with executive feedback of 4/5 or above.\n\nPhase 3 - Autonomous (October to December): Fiona leads one strategic advisory project independently. Success criteria: Project completed, executive recommendation accepted, and stakeholder satisfaction of 4/5 or above.\n\nReview point: December 2026. If all three phases meet success criteria, the role is formalised permanently.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This proposal is boardroom-ready. Every section is structured, every claim is evidenced, and the transition plan has measurable success criteria at each phase. Fiona would submit this with confidence.",
          observation:
            "The competency mapping with specific gap scores and development actions is especially strong. It shows self-awareness expressed through data, which is Fiona's signature approach.",
          coachingTip:
            "Analytical role proposals succeed when the reader can audit every element independently. Your proposal passes that test at every level.",
          styleContext:
            "Analytical communicators create career proposals that function as strategic business cases. If the proposal is rigorous enough for the board, it is rigorous enough for the individual.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each phase's success criteria is truly measurable. If any criterion uses language like 'demonstrates competence' without a specific measure, tighten it.",
          observation:
            "If the case studies lack specific outcomes (percentages, timelines), they function as anecdotes rather than evidence. Fiona needs evidence, not examples.",
          coachingTip:
            "For each case study, include a measurable outcome. 'The role was successful' is a claim. '30% increase in cross-sold engagements' is evidence.",
          styleContext:
            "Analytical communicators use case studies as data points, not stories. Each one should include a measurable result that supports the proposal.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal lacks the structural rigour, competency mapping, or phased transition plan that Fiona requires.",
          observation:
            "If your proposal reads like a cover letter rather than a business case, it does not meet the analytical standard Fiona has set.",
          coachingTip:
            "Structure the proposal as five distinct sections, each with its own evidence base. If any section relies on assertion rather than data, strengthen it.",
          styleContext:
            "Analytical communicators see career proposals as proof-of-concept documents. If the concept cannot be proved, the proposal is not ready.",
        },
      },
    },
  },
];
