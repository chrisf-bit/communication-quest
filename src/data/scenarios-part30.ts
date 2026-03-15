import { Scenario } from "@/types";

export const SCENARIOS_PART30: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (349-351) - conflict
  // ============================================

  // Scenario 349 - Jordan Cole, conflict, foundation
  {
    id: "scenario-349",
    title: "The Turf War Between Teams",
    context:
      "Two teams are disputing ownership of a new client account. Both believe they are best placed to lead the relationship. Jordan has been asked to mediate the discussion and reach a decision within the meeting.",
    chooseContext:
      "Jordan has heard both sides and identified that the real issue is unclear account ownership criteria. He is now cutting through the argument to propose a resolution.",
    rewriteContext:
      "Jordan has asked you to draft a brief email confirming the account ownership decision and the criteria that will apply to future disputes.",
    characterId: "jordan-cole",
    dialogue:
      "We have spent twenty minutes listening to both sides and the arguments are circular. Neither team has a stronger claim based on what I have heard. So here is what we are going to do: I am making the call. The account goes to Team B because they have existing capacity and a relationship with the client's procurement lead. That is the decision.",
    chooseDialogue:
      "I know Team A feels this is unfair. But fair is not the same as equal. The criteria are capacity and existing relationships. Team B wins on both. If you want to win the next one, build the relationships now. That is how this works going forward.",
    rewriteDialogue:
      "Write the email. State the decision, the criteria used, and how future disputes will be handled. Keep it factual. Do not apologise for the decision - explain it.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has ended a dispute between two teams by making a unilateral decision based on capacity and existing relationships, and told the losing team to build relationships for next time. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan cuts through the circular argument, makes a decisive call, and explains the criteria without apology. This is direct conflict resolution - clear, fast, and outcome-focused.",
          observation:
            "Notice Jordan does not seek consensus or try to make both teams feel good. The priority is ending the dispute with a clear decision that can be referenced in the future.",
          coachingTip:
            "When someone resolves a conflict by making the call rather than facilitating agreement, they are using a direct approach. Accept the decision and focus on the forward-looking criteria.",
          styleContext:
            "Direct communicators see unresolved disputes as productivity drains. A clear decision - even an imperfect one - is better than an ongoing argument.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does use criteria, which can look analytical. But the criteria are applied as a justification for a swift decision, not as the basis of a thorough evaluation.",
          observation:
            "An analytical communicator would score both teams against multiple criteria before deciding. Jordan applies two simple criteria and makes the call immediately.",
          coachingTip:
            "If someone uses criteria to justify a quick decision, they are being direct. If they use criteria to build a comprehensive evaluation, they are being analytical.",
          styleContext:
            "Direct communicators use just enough criteria to make the decision defensible. They do not over-analyse because the cost of delay outweighs the benefit of precision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not facilitated a collaborative discussion, sought to understand feelings, or tried to find a solution that satisfies both parties.",
          observation:
            "There is no attempt at compromise, no acknowledgement of Team A's disappointment, and no invitation to discuss the decision further. Jordan has closed the matter.",
          coachingTip:
            "Ask whether the communicator prioritises resolving the conflict quickly or resolving it in a way that everyone feels good about. Jordan prioritises speed.",
          styleContext:
            "Direct communicators believe that lingering conflicts are more damaging than decisive ones. A clear winner and clear criteria prevent the same argument from recurring.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has awarded the account to Team B based on capacity and relationships, and told Team A that building relationships is how to win future accounts. How do you respond as Team A's lead?",
      options: [
        {
          id: "s349-opt-a",
          text: "Understood. We do not agree with the outcome but we accept the criteria. Give us the list of upcoming accounts and we will start building the relationships now so we are in a stronger position next time.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the decision without rehashing the argument and immediately focused on how to win next time. This matches Jordan's forward-looking, action-oriented approach.",
        },
        {
          id: "s349-opt-b",
          text: "Can we at least have a supporting role on the account? We have market knowledge that Team B does not, and it would be a shame to lose that.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable suggestion, but it risks reopening a dispute Jordan has just closed. The time for negotiation was during the discussion, not after the decision.",
        },
        {
          id: "s349-opt-c",
          text: "I do not think this was a fair process. We should have had a formal scoring system and both teams should have been evaluated equally before a decision was made.",
          score: 0,
          result: "weak",
          explanation:
            "This challenges the legitimacy of Jordan's decision after it has been made. A direct communicator will see this as undermining the resolution rather than improving the process.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write an email confirming the account ownership decision, the criteria used, and the process for future disputes. Write it in a direct style - factual, not apologetic.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Account ownership decision - Meridian Group\n\nThe Meridian Group account has been assigned to Team B, effective immediately.\n\nDecision criteria:\n- Available capacity to onboard within the required timeframe\n- Existing relationship with the client's procurement lead\n\nTeam B met both criteria. Team A did not have an existing procurement relationship.\n\nFuture account disputes:\nAll disputed accounts will be assessed against two criteria: team capacity and strength of existing client relationships. Where both teams are equal, the decision will go to the team with the most recent relevant sector experience.\n\nThis process applies from today. If you have questions, raise them with me directly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email states the decision, explains the criteria, and sets the rules for future disputes - all without hedging or apologising. Jordan would send this immediately.",
          observation:
            "You avoided softening language like 'we appreciate Team A's disappointment' or 'this was a difficult decision'. The facts speak for themselves.",
          coachingTip:
            "When writing decisions for direct communicators, state the outcome first, the rationale second, and the forward-looking process third. Do not open with context or caveats.",
          styleContext:
            "Direct communicators want decision communications to be referenceable. If someone challenges the decision in six months, this email should settle the matter.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check for unnecessary softening. If your email includes phrases like 'after careful consideration' or 'we recognise this may be disappointing', they add length without adding value.",
          observation:
            "If you positioned the criteria as suggestions rather than rules, future disputes will not be resolved any faster.",
          coachingTip:
            "State criteria as facts, not preferences. 'All disputed accounts will be assessed against' is stronger than 'we suggest assessing disputed accounts against'.",
          styleContext:
            "Direct communicators want decision frameworks that leave no room for interpretation. The clearer the rules, the fewer the disputes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too apologetic, too vague about the criteria, or fails to establish a clear process for future disputes. Jordan would rewrite it.",
          observation:
            "If your email spends more words on managing feelings than on communicating the decision, it has missed the purpose.",
          coachingTip:
            "Remove every sentence that does not contain a fact, a decision, or a rule. What remains is what a direct communicator needs.",
          styleContext:
            "Direct communicators see conflict resolution emails as governance documents. They should prevent the next dispute, not just resolve the current one.",
        },
      },
    },
  },

  // Scenario 350 - Sam Hartley, conflict, intermediate
  {
    id: "scenario-350",
    title: "The Budget Standoff",
    context:
      "Two department heads are locked in a disagreement over how to allocate a shared budget. Both have submitted proposals that exceed the total available funding. Sam has been asked to facilitate the resolution and ensure a decision is reached today.",
    chooseContext:
      "Sam has reviewed both proposals and identified that 60% of the requested items overlap. She is now challenging both department heads to merge their proposals and cut the redundancies.",
    rewriteContext:
      "Sam has asked you to write a decision memo confirming the final budget allocation, noting what was cut and why.",
    characterId: "sam-hartley",
    dialogue:
      "You have both asked for more than exists. That is not a negotiation - that is a wish list. I have gone through both proposals and 60% of the line items are duplicates. You are asking for the same things in different language. So step one is obvious: merge the duplicates. Step two is harder - we cut what is left until it fits the budget.",
    chooseDialogue:
      "I am not interested in which department 'deserves' more. Deserve is not a budget category. The question is: which items deliver the most impact this quarter? Rank your remaining items by expected return and I will make the final call on anything you cannot agree on.",
    rewriteDialogue:
      "Write the decision memo. List every item that was approved, every item that was cut, and one sentence explaining the rationale for each cut. No ambiguity. If someone reads this in three months, they should know exactly what was decided and why.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Sam has called both budget proposals 'wish lists', identified 60% duplication, and demanded both department heads merge and cut until the numbers work. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam names the problem bluntly, rejects emotional arguments about 'deserving', and drives towards a pragmatic resolution. This is direct conflict resolution - forceful, clear, and results-oriented.",
          observation:
            "Notice how Sam dismisses the concept of 'deserve' as irrelevant to budgeting. Direct communicators strip away subjective arguments to focus on measurable impact.",
          coachingTip:
            "When someone reframes an emotional conflict as a practical problem, they are using a direct approach. Respond with impact data, not justifications.",
          styleContext:
            "Direct communicators in budget conflicts focus on what delivers results, not on historical precedent or departmental pride. The numbers decide, not the arguments.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam references data and asks for items to be ranked by return, which can look analytical. But the purpose is to force a quick decision, not to conduct a thorough analysis.",
          observation:
            "An analytical communicator would build a detailed cost-benefit model. Sam asks for a rough ranking and reserves the right to make the final call. That is direct decision-making with analytical inputs.",
          coachingTip:
            "If someone asks for data to speed up a decision rather than to inform a study, they are being direct. The data serves action, not investigation.",
          styleContext:
            "Direct communicators borrow analytical tools when they accelerate decisions. They abandon them when they slow things down.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not explored how the department heads feel about losing budget items, nor sought a consensus that both sides are comfortable with.",
          observation:
            "There is no mediation, no empathy, and no attempt to make both parties feel heard. Sam is solving a maths problem, not managing a relationship.",
          coachingTip:
            "Ask whether the communicator prioritises feelings or figures. Sam is entirely focused on making the numbers work.",
          styleContext:
            "Direct communicators treat budget disputes as arithmetic problems with human complications. Solve the arithmetic first; manage the humans after.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has asked both department heads to rank remaining items by expected return and has said she will make the final call on anything they cannot agree on. How do you respond?",
      options: [
        {
          id: "s350-opt-a",
          text: "Fine. Here are my top three items ranked by quarterly revenue impact: the CRM upgrade at 45,000 in projected return, the training programme at 28,000, and the recruitment tool at 22,000. Cut the rest.",
          score: 10,
          result: "strong",
          explanation:
            "You have responded with exactly what Sam asked for - ranked items with quantified returns. This gives her the data she needs to make a fast, defensible decision.",
        },
        {
          id: "s350-opt-b",
          text: "I can rank them, but I want to flag that cutting our market research budget will have long-term consequences that are hard to quantify in one quarter.",
          score: 5,
          result: "partial",
          explanation:
            "A fair point, but Sam has framed the decision around quarterly impact. Introducing long-term, hard-to-quantify arguments shifts the conversation away from her framework.",
        },
        {
          id: "s350-opt-c",
          text: "I think both departments should get an equal share. Splitting it down the middle is the fairest approach and avoids anyone feeling short-changed.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the approach Sam rejected by dismissing 'deserve' as a budget category. Equal is not the same as optimal, and Sam is optimising for impact.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to write a decision memo listing every approved and cut budget item with a one-sentence rationale for each cut. Write it in a direct style - no ambiguity.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "DECISION MEMO: Q2 Shared Budget Allocation\n\nTotal budget: 180,000 pounds\nTotal requested: 294,000 pounds\nDuplicates removed: 72,000 pounds\nRemaining cuts required: 42,000 pounds\n\nAPPROVED ITEMS:\n- CRM upgrade (Marketing): 52,000 - Highest projected quarterly return at 45,000 in new pipeline.\n- Sales training programme (Sales): 34,000 - Directly supports Q2 revenue target.\n- Data analytics platform (shared): 48,000 - Serves both departments; duplicate requests merged.\n- Graduate recruitment tool (HR liaison): 18,000 - Approved at reduced scope.\n- Client event series (Marketing): 28,000 - Supports three active enterprise pursuits.\n\nCUT ITEMS:\n- Market research study (Marketing): 24,000 - Return is long-term and not measurable within Q2.\n- Team away day (Sales): 8,000 - Discretionary spend; deferred to Q3 if budget allows.\n- Additional contractor hire (Sales): 10,000 - Covered by the training programme's capacity uplift.\n\nThis allocation is final. Any reallocation requests must be submitted with a written business case showing changed circumstances.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every item is listed with its cost and a one-sentence rationale. The cuts are explained without apology, and the document closes with a clear finality statement. Sam would circulate this immediately.",
          observation:
            "You showed the maths at the top - total budget, total requested, duplicates removed, remaining cuts. That transparency prevents anyone from claiming the process was opaque.",
          coachingTip:
            "When writing budget decisions for direct communicators, show the arithmetic first. It frames the cuts as mathematical necessities, not personal choices.",
          styleContext:
            "Direct communicators want decision memos that end debates, not start new ones. The more transparent the rationale, the harder it is to challenge.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every cut has a specific rationale. If any cut explanation says 'not a priority at this time' without quantifying why, it invites challenge.",
          observation:
            "If your approved items lack cost figures or impact projections, the document cannot be audited against the criteria Sam established.",
          coachingTip:
            "Treat each line item as a mini-business case. Cost, expected return, and the reason it was approved or cut. Three data points per item.",
          styleContext:
            "Direct communicators use decision memos as governance tools. Incomplete rationales create governance gaps.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your memo lacks the specificity, transparency, or finality that Sam requires. It reads like a summary of a discussion rather than a record of a decision.",
          observation:
            "If your memo says 'the following items were discussed' rather than 'the following items were approved', it has not done its job.",
          coachingTip:
            "Replace every passive construction with an active one. 'It was decided' becomes 'I have decided'. 'Items were considered' becomes 'Items were approved or cut'. Decisions need ownership.",
          styleContext:
            "Direct communicators sign their decisions. A memo that hides behind passive voice suggests the decision-maker is not confident in their own call.",
        },
      },
    },
  },

  // Scenario 351 - Alex Tran, conflict, advanced
  {
    id: "scenario-351",
    title: "The Strategic Direction Clash",
    context:
      "The leadership team is split on whether to pursue a new market opportunity or double down on the existing business. The debate has become personal, with two senior leaders openly criticising each other's judgement in meetings. Alex has been asked to resolve the impasse.",
    chooseContext:
      "Alex has told both leaders that their behaviour is damaging the team's confidence and demanded they present their cases on merit, not personality. One leader has responded that the other's proposal is 'reckless'.",
    rewriteContext:
      "Alex has asked you to draft a decision framework that both leaders must use to present their strategic cases, ensuring the debate stays on evidence rather than opinion.",
    characterId: "alex-tran",
    dialogue:
      "I am going to be direct with both of you. The personal attacks stop today. I do not care who started it. Your teams are watching two senior leaders behave like they are competing instead of leading, and it is eroding trust across the business. From now on, you argue with data or you do not argue at all.",
    chooseDialogue:
      "Calling a proposal 'reckless' is not analysis. It is an insult dressed up as strategy. If you think the new market entry is too risky, show me the risk assessment. Quantify the downside. Give me something I can evaluate. Otherwise, your objection is just noise.",
    rewriteDialogue:
      "Build a decision framework that forces both of them to present on equal terms. Same criteria, same format, same time limit. The framework eliminates the personality contest and makes the decision about evidence. No room for rhetoric.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Alex has confronted two senior leaders about their personal attacks, demanded they stop immediately, and insisted that all future arguments must be evidence-based. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex confronts the behaviour head-on, sets a non-negotiable standard, and demands evidence over opinion. This is direct conflict resolution at the most senior level - unflinching and unambiguous.",
          observation:
            "Notice how Alex says 'I do not care who started it'. Direct communicators in conflict resolution are not interested in backstory. They care about what stops now and what changes going forward.",
          coachingTip:
            "When someone shuts down a conflict by naming the behaviour, stating the consequence, and prescribing the alternative, they are operating in advanced direct mode.",
          styleContext:
            "Direct communicators believe that senior-level conflicts are resolved by setting standards, not by mediating feelings. The standard here is: argue with data or do not argue.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex demands data and evidence, which can look analytical. But the delivery is forceful and confrontational - this is a direct communicator using analytical standards as a weapon against poor behaviour.",
          observation:
            "An analytical communicator would calmly propose a framework for evaluation. Alex is angry, decisive, and commanding. The evidence demand serves the confrontation, not the other way round.",
          coachingTip:
            "If someone demands data as a way to shut down emotional arguments, they are being direct. If they request data to begin an investigation, they are being analytical.",
          styleContext:
            "Direct communicators use evidence requirements as a discipline tool. If you cannot back your claim with data, you have lost the right to make the claim.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not sought to understand the emotions behind the conflict, build bridges between the leaders, or create a safe space for dialogue.",
          observation:
            "There is no mediation, no empathy, and no acknowledgement of how difficult the strategic disagreement might be. Alex is commanding a change in behaviour, not facilitating understanding.",
          coachingTip:
            "Ask whether the communicator's goal is to resolve the underlying tension or to stop the unacceptable behaviour. Alex is focused entirely on stopping the behaviour.",
          styleContext:
            "Direct communicators at leadership level believe that personal conflicts in strategic discussions are a failure of professionalism, not a natural consequence of passionate disagreement.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has demanded that you quantify the risk rather than calling the proposal 'reckless'. How do you respond?",
      options: [
        {
          id: "s351-opt-a",
          text: "You are right - that was not helpful. I will put together a risk assessment by Thursday covering market size uncertainty, capital requirements, and opportunity cost of diverting resources from the core business. Three scenarios: best case, expected case, worst case.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the challenge, dropped the rhetoric, and committed to a structured, evidence-based response with a clear timeline. This is exactly what Alex demanded.",
        },
        {
          id: "s351-opt-b",
          text: "Fair enough. But I still believe the new market entry carries more risk than anyone is acknowledging. Can we at least agree to commission an independent market assessment?",
          score: 5,
          result: "partial",
          explanation:
            "Better than the original 'reckless' claim, but outsourcing the analysis delays the decision. Alex wants you to do the work, not delegate it.",
        },
        {
          id: "s351-opt-c",
          text: "I have twenty years of experience in this market and my instinct tells me this is a mistake. Sometimes experience matters more than spreadsheets.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Alex's demand for evidence over opinion. Appealing to experience after being told to bring data will escalate the conflict, not resolve it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to create a decision framework that forces both leaders to present their strategic cases on equal terms with the same criteria and format. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "STRATEGIC DECISION FRAMEWORK\n\nBoth proposals must be presented using this format. No additions, no variations.\n\nFormat: Written brief (maximum 3 pages) plus 15-minute verbal presentation. No slides.\n\nEvaluation criteria (each scored 1-10 by the leadership panel):\n\n1. Revenue impact: Projected revenue contribution over 12 and 24 months, with assumptions stated.\n2. Risk profile: Three-scenario analysis (best, expected, worst) with probability-weighted outcomes.\n3. Resource requirement: Total investment required in people, capital, and opportunity cost.\n4. Strategic alignment: How the proposal supports the three-year business plan.\n5. Speed to impact: Time from approval to first measurable result.\n\nRules of engagement:\n- No reference to the opposing proposal. Present your own case on its merits.\n- No qualitative judgements without supporting data. 'I believe' is not evidence.\n- Questions from the panel only. No cross-examination between presenters.\n\nDecision timeline: Presentations on Monday. Decision communicated by Wednesday. No appeals.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your framework eliminates personality, enforces structure, and creates clear rules that both leaders must follow. Alex would adopt this immediately because it makes the decision about evidence, not ego.",
          observation:
            "The 'rules of engagement' section is particularly strong. Banning references to the opposing proposal and requiring data behind every claim removes the two main weapons used in the personal conflict.",
          coachingTip:
            "When designing decision frameworks for direct communicators, include explicit rules about what is not allowed. Constraints are as important as criteria.",
          styleContext:
            "Direct communicators resolve leadership conflicts by changing the structure of the debate. If the framework eliminates the bad behaviour, the conflict resolves itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your framework has teeth. If it lacks rules of engagement or a firm decision timeline, it is a template, not a resolution mechanism.",
          observation:
            "If your framework allows cross-examination or subjective judgements, it leaves room for the personal conflict to re-enter the process.",
          coachingTip:
            "Add constraints. Ban specific behaviours. Set a non-negotiable timeline. The framework must feel like a set of rules, not a set of suggestions.",
          styleContext:
            "Direct communicators want frameworks that constrain behaviour. If the framework is optional, it will be ignored by the people who need it most.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your framework is either too loose, too long, or fails to address the personal conflict that prompted it. Alex would see this as inadequate.",
          observation:
            "If your framework does not explicitly ban the behaviours Alex has objected to, it does not solve the problem it was designed to solve.",
          coachingTip:
            "Go back to Alex's core complaint: personal attacks disguised as strategy. Every element of your framework should make that behaviour impossible.",
          styleContext:
            "Direct communicators design frameworks to prevent problems, not to manage them. If the framework works, the conflict never has a chance to resurface.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (352-354) - email
  // ============================================

  // Scenario 352 - Priya Sharma, email, foundation
  {
    id: "scenario-352",
    title: "The Team Celebration Email",
    context:
      "The team has just completed a major project ahead of schedule. Priya wants to send a team-wide email celebrating the achievement and recognising individual contributions.",
    chooseContext:
      "Priya has drafted the email and shared it with you for feedback. She wants to make sure it captures the energy of the achievement without feeling generic or corporate.",
    rewriteContext:
      "Priya has asked you to rewrite a bland congratulatory email she received from another manager, transforming it into something that feels genuine and personal.",
    characterId: "priya-sharma",
    dialogue:
      "We did something special this week and I want everyone to know it. I am not talking about hitting a deadline - I am talking about how we hit it. The late nights, the creative problem-solving when the tech went down, the way Amir redesigned the whole dashboard in 48 hours because he knew the client would love it. That is what makes this team different.",
    chooseDialogue:
      "The email needs to feel like it was written by a human being who was actually there. I do not want 'on behalf of the management team, congratulations on a successful delivery'. I want people to read it and remember why they stayed late.",
    rewriteDialogue:
      "Take this email that says 'well done team, great effort' and turn it into something people will actually screenshot and keep. Name names. Tell stories. Make it feel real.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "email",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya wants to celebrate a team achievement by highlighting specific stories and individual contributions rather than sending a generic congratulations. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya wants to tell stories, name individuals, and capture the energy of the achievement. This is expressive communication - personal, vivid, and emotionally engaging.",
          observation:
            "Notice how Priya distinguishes between 'hitting a deadline' and 'how we hit it'. Expressive communicators care about the journey, not just the destination.",
          coachingTip:
            "When someone insists on making recognition personal and story-driven rather than procedural, they are signalling an expressive style. Engage with the emotion, not just the outcome.",
          styleContext:
            "Expressive communicators believe recognition only works if it feels genuine. A generic email is worse than no email because it signals that the achievement was routine.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and people-focused, which can look supportive. But the energy level and the desire to tell stories distinguish this as expressive rather than supportive.",
          observation:
            "A supportive communicator would focus on how people felt during the project. Priya focuses on what they did - the creative moments, the heroic efforts, the individual contributions.",
          coachingTip:
            "Expressive communicators celebrate achievements by storytelling. Supportive communicators celebrate by acknowledging effort and wellbeing. Priya is a storyteller.",
          styleContext:
            "Expressive communicators turn achievements into narratives. The stories become part of the team's identity and are retold long after the project is forgotten.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not focused on metrics, process improvements, or structured reflections. The celebration is entirely about people and their stories.",
          observation:
            "There are no KPIs, lessons learned, or process evaluations in Priya's approach. The focus is on the human experience, not the operational outcome.",
          coachingTip:
            "Ask whether the communicator is celebrating the result or the people who delivered it. Priya is celebrating the people.",
          styleContext:
            "Expressive communicators believe that how you celebrate shapes what people do next. A heartfelt email inspires more than a performance dashboard.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has asked for feedback on her celebration email and wants it to capture the energy of the achievement without feeling corporate. What do you suggest?",
      options: [
        {
          id: "s352-opt-a",
          text: "The part about Amir and the dashboard is brilliant - that is the kind of detail that makes it real. Could you add one more story, maybe about the moment the team rallied when the tech went down? That would give it even more heart.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated what works, suggested adding more of the same personal storytelling, and used language that matches Priya's expressive energy. This is exactly the feedback she wants.",
        },
        {
          id: "s352-opt-b",
          text: "It is good, but maybe we should also include the project metrics - the timeline saved, the client satisfaction score - so the achievement is quantified as well as celebrated.",
          score: 5,
          result: "partial",
          explanation:
            "Adding metrics is not wrong, but it shifts the tone towards analytical. Priya is deliberately avoiding that - she wants feelings and stories, not numbers.",
        },
        {
          id: "s352-opt-c",
          text: "I think we should tone it down a bit. Not everyone is comfortable with public recognition. Maybe just say 'great team effort' and leave it at that.",
          score: 0,
          result: "weak",
          explanation:
            "This strips out everything Priya is trying to achieve. An expressive communicator will feel that generic praise devalues the achievement and insults the effort people put in.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to transform a bland 'well done team' email into something personal and memorable. Name names, tell stories, and make it feel real. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: This week was one for the books\n\nTeam,\n\nI need to take a moment to say something that a standard 'well done' email will never capture.\n\nThis week, you did not just deliver a project ahead of schedule. You showed what this team is made of.\n\nWhen the integration platform went down on Tuesday afternoon, most teams would have panicked. You lot made coffee, gathered around Amir's desk, and figured it out. Amir - the fact that you rebuilt that entire dashboard flow in 48 hours, and it ended up being better than the original, still blows my mind.\n\nSophie, your call to the client on Wednesday morning to keep them informed before they even knew there was a problem - that is the kind of proactive thinking that builds relationships for years.\n\nAnd Tom, I know you stayed until midnight on Thursday to run the final tests. The rest of us came in on Friday morning to everything working perfectly and a message from you saying 'all clear'. That is quiet brilliance.\n\nI am proud of every single one of you. Not because we hit the deadline, but because of how we hit it - together, creatively, and without ever losing our sense of humour.\n\nHere is to whatever comes next. I already know we will be brilliant at it.\n\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email reads like it was written by someone who was there, who noticed the details, and who genuinely cares about the people involved. Priya would send this with pride.",
          observation:
            "You named specific people, told specific stories, and made the email feel like a celebration of individuals, not a corporate announcement.",
          coachingTip:
            "When writing celebration emails for expressive communicators, every paragraph should make someone smile because they recognise themselves or a colleague in it.",
          styleContext:
            "Expressive communicators believe that the best recognition emails become team folklore. People save them, share them, and reference them in future conversations.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether you named specific people and told specific stories. A warm email without names is still generic.",
          observation:
            "If your email says 'the team showed great resilience' without describing a specific moment of resilience, it feels hollow to an expressive communicator.",
          coachingTip:
            "Replace every general compliment with a specific story. 'Great teamwork' becomes 'the moment Sophie called the client before they even knew there was an issue'.",
          styleContext:
            "Expressive communicators measure recognition by its specificity. The more detailed the praise, the more genuine it feels.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too generic, too formal, or lacks the personal stories and individual recognition Priya specifically asked for.",
          observation:
            "If your email could be sent about any project by any team, it has not captured what made this achievement special.",
          coachingTip:
            "Start with one specific moment from the project that stood out. Build the email around that moment and the people who made it happen.",
          styleContext:
            "Expressive communicators will not send recognition emails they do not believe in. A generic email under their name damages their personal brand more than no email at all.",
        },
      },
    },
  },

  // Scenario 353 - Marcus Webb, email, intermediate
  {
    id: "scenario-353",
    title: "The Partnership Renewal Pitch",
    context:
      "A key partnership is up for renewal and Marcus needs to send a compelling email to the partner's CEO making the case for continuing the relationship. The partnership has been successful but the partner has received approaches from competitors.",
    chooseContext:
      "Marcus has drafted an email that opens with a shared memory from the partnership launch event and transitions into the results they have achieved together. He is asking for input on the closing ask.",
    rewriteContext:
      "Marcus has asked you to rewrite the closing section of his email so it creates urgency without pressure and makes the CEO feel excited about the next chapter of the partnership.",
    characterId: "marcus-webb",
    dialogue:
      "This email has to remind her why she chose us in the first place. Not with a spreadsheet - with a story. I want to open with that moment at the launch event when she pulled me aside and said 'I think this is going to change everything for us.' And then I want to show her that it did.",
    chooseDialogue:
      "The results section is strong, but the close needs to feel like an invitation, not a contract renewal notice. I want her to read the last paragraph and think 'I want to be part of what comes next', not 'I need to review the terms'.",
    rewriteDialogue:
      "Rewrite the close. Make it feel like the start of something, not the continuation of something. She should finish reading and want to call me, not reply with a legal caveat.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "email",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus wants to renew a partnership by opening with a personal memory from the launch event and showing results through storytelling rather than a spreadsheet. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with a personal memory, uses storytelling to present results, and wants the closing to feel like an invitation to an exciting future. This is expressive communication at its most strategic.",
          observation:
            "Notice how Marcus explicitly rejects the spreadsheet approach. Expressive communicators believe that at this level, the relationship is the product. Data supports, but story sells.",
          coachingTip:
            "When someone frames a business renewal as a story with a beginning, middle, and next chapter, they are operating in expressive mode. Engage with the narrative.",
          styleContext:
            "Expressive communicators in partnership management treat renewals as relationship milestones, not contract events. The email is a love letter to the partnership, not a procurement document.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is warm and relational, which can look supportive. But the ambition and energy behind the approach - wanting to create excitement about the future - distinguish this as expressive.",
          observation:
            "A supportive communicator would focus on the trust and safety of the partnership. Marcus is focused on the excitement and momentum. He wants the CEO to feel thrilled, not just comfortable.",
          coachingTip:
            "Expressive communicators sell the future with enthusiasm. Supportive communicators sell the present with reliability. Marcus is firmly in the future camp.",
          styleContext:
            "Expressive communicators treat every renewal as an opportunity to re-energise the relationship. Standing still is not an option - the next chapter must be more exciting than the last.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has explicitly rejected a data-driven approach and is building the entire renewal case on personal connection and storytelling.",
          observation:
            "There are no contract terms, benchmarking comparisons, or formal renewal procedures in Marcus's approach. The email is designed to create emotional momentum.",
          coachingTip:
            "Ask whether the communicator is trying to convince through evidence or through connection. Marcus is building connection.",
          styleContext:
            "Expressive communicators believe that at CEO level, the decision to renew is already made emotionally before it is made commercially. The email must win the heart, not the head.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants the closing of his partnership renewal email to feel like an invitation to something exciting, not a contract renewal notice. What do you suggest?",
      options: [
        {
          id: "s353-opt-a",
          text: "Close with a vision of where the partnership could go next - something specific that would excite her. Then end with a personal invitation: 'I would love to sit down over coffee and map out what the next two years could look like together.'",
          score: 10,
          result: "strong",
          explanation:
            "This gives Marcus what he wants - a forward-looking, personal, and exciting close that feels like the start of something new rather than the extension of something old.",
        },
        {
          id: "s353-opt-b",
          text: "I think we should include the renewal terms as an attachment so she has everything she needs to make a decision. The email can be warm, but the commercial details should be available.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but attaching commercial terms shifts the tone from relationship-building to transactional. Marcus specifically wants the email to inspire, not inform.",
        },
        {
          id: "s353-opt-c",
          text: "We should close by noting that we have been approached by other potential partners and that we would hate to lose this relationship. A bit of urgency will help.",
          score: 0,
          result: "weak",
          explanation:
            "Creating urgency through implied threats is the opposite of what Marcus wants. An expressive communicator builds urgency through excitement about the future, not fear of loss.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to rewrite the closing of a partnership renewal email so it feels like the beginning of an exciting new chapter. Write it in an expressive style - forward-looking, personal, and compelling.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Here is what I keep coming back to: we have not even scratched the surface of what this partnership can do.\n\nThe first two years were about proving the concept. We did that - the numbers speak for themselves. But the next two years? That is where it gets really interesting. I have three ideas I have been saving for this exact conversation, and I think at least one of them will make you smile the way you did at that launch event.\n\nI would love to sit down with you - properly, not over a video call - and map out what the next chapter looks like. Not the contract. The vision. The contract is just the thing we sign so we can get to the good stuff.\n\nHow does the week of the 24th work for you? I will come to you. Coffee is on me.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing creates anticipation, references shared history, and positions the renewal as the start of something rather than the continuation of something. Marcus would send this without changing a word.",
          observation:
            "The line about the contract being 'the thing we sign so we can get to the good stuff' perfectly captures the expressive communicator's view of partnership renewals.",
          coachingTip:
            "When writing renewals for expressive communicators, always end with a human ask - a meeting, a coffee, a conversation. Never end with 'please review the attached terms'.",
          styleContext:
            "Expressive communicators believe that the best partnerships are renewed over coffee, not over email. The closing should create the moment for that conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your close creates genuine excitement or just warmth. Marcus wants the CEO to feel like she is missing out if she does not renew.",
          observation:
            "If your close says 'we hope to continue working together', it is too passive. Marcus wants something that pulls the reader towards the future.",
          coachingTip:
            "Replace 'we hope' with 'here is what I have been saving for this conversation'. Create anticipation, not obligation.",
          styleContext:
            "Expressive communicators close with hooks, not summaries. The CEO should finish reading and immediately want to know what comes next.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your close is either too formal, too transactional, or lacks the personal energy Marcus specifically asked for.",
          observation:
            "If your close mentions contract terms, renewal deadlines, or competitor comparisons, it has missed the brief entirely.",
          coachingTip:
            "Imagine you are writing to someone you genuinely admire and want to keep working with. Let that enthusiasm drive the language.",
          styleContext:
            "Expressive communicators lose partnerships when renewal communications feel routine. Every renewal must feel like a choice, not a default.",
        },
      },
    },
  },

  // Scenario 354 - Nina Okafor, email, advanced
  {
    id: "scenario-354",
    title: "The Crisis Communication Email",
    context:
      "A significant service disruption has affected several key clients. Nina needs to send an email to all affected clients that is honest about the problem, reassuring about the response, and maintains the trust the team has built over years.",
    chooseContext:
      "Nina has drafted the email and is debating whether to lead with the apology or lead with the action being taken. She believes leading with action shows strength; her colleague believes leading with the apology shows accountability.",
    rewriteContext:
      "Nina has asked you to write the client communication so it acknowledges the disruption honestly while demonstrating that the team's response has been immediate, organised, and client-focused.",
    characterId: "nina-okafor",
    dialogue:
      "This email has to do three things at once: be honest about what happened, show that we moved immediately to fix it, and remind people why they trust us. I am not going to hide behind corporate language. If we let people down, we say so. But we also show them that the same team they trust was on this within minutes.",
    chooseDialogue:
      "I want to lead with accountability, not action. If the first thing they read is 'we deployed a fix', they will think we are trying to skip past the apology. Start with 'we let you down'. Then show them how we responded. The honesty earns the right to talk about the fix.",
    rewriteDialogue:
      "Write this email like you are talking to someone you have a real relationship with. Not a customer - a partner. Be honest, be human, and make them feel like the disruption mattered to us personally, not just operationally.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "email",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina wants to write a crisis communication email that is honest, human, and personal rather than corporate and defensive. She insists on leading with accountability before action. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina prioritises honesty, personal connection, and emotional authenticity over corporate crisis management language. This is expressive communication applied to a crisis - vulnerable, genuine, and trust-building.",
          observation:
            "Notice how Nina frames clients as 'partners, not customers'. Expressive communicators treat every communication as a relationship interaction, even in a crisis.",
          coachingTip:
            "When someone insists on leading with honesty and personal accountability in a crisis rather than deflecting to technical fixes, they are using an expressive approach.",
          styleContext:
            "Expressive communicators believe that crises are relationship-defining moments. How you communicate when things go wrong reveals your true character as an organisation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is empathetic and accountable, which can look supportive. But the desire to be honest, authentic, and personal - rather than just reassuring - marks this as expressive.",
          observation:
            "A supportive communicator would focus on making the client feel safe and cared for. Nina wants them to feel that the disruption hurt the team personally, not just that it is being managed.",
          coachingTip:
            "Expressive communicators in crisis show vulnerability. Supportive communicators show stability. Nina is choosing to be vulnerable because she believes it deepens trust.",
          styleContext:
            "Expressive communicators take risks in crisis communications that other styles would not. Saying 'we let you down' is a risk - but it is one that builds extraordinary trust when done well.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has explicitly rejected corporate language and defensive framing. The entire approach is built on human connection and emotional honesty.",
          observation:
            "There are no technical root cause analyses, incident timelines, or SLA references in Nina's approach. The communication is designed to connect, not to inform.",
          coachingTip:
            "Ask whether the communicator is managing the crisis or managing the relationship. Nina is managing the relationship.",
          styleContext:
            "Expressive communicators know that clients forgive disruptions when they trust the people behind the service. The email is not about the incident - it is about the relationship.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina believes leading with 'we let you down' earns the right to talk about the fix. Her colleague suggests leading with the technical response. How do you weigh in?",
      options: [
        {
          id: "s354-opt-a",
          text: "I agree with you, Nina. If the first thing they read is the fix, it feels like we are managing the message rather than owning the problem. Leading with honesty shows we respect them enough to say it plainly. The fix lands harder after the apology because they trust it is genuine.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated Nina's instinct and articulated why the sequencing matters emotionally. This engages with the expressive logic and strengthens the approach.",
        },
        {
          id: "s354-opt-b",
          text: "Could we do both? Open with a brief acknowledgement and then move quickly to the response. That way we show accountability without dwelling on the negative.",
          score: 5,
          result: "partial",
          explanation:
            "A fair compromise, but Nina wants to sit with the accountability, not rush past it. A 'brief acknowledgement' may feel like a token gesture rather than genuine ownership.",
        },
        {
          id: "s354-opt-c",
          text: "I think we should focus on the technical facts. What happened, when it was resolved, and what we are doing to prevent it happening again. Emotion has no place in incident communications.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Nina's entire philosophy. An expressive communicator believes that emotion is exactly what belongs in a crisis communication - it is what makes the response human.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a client crisis communication email that leads with honest accountability, shows the team's immediate response, and makes clients feel that the disruption mattered personally. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: We let you down - and here is what we are doing about it\n\nDear partners,\n\nI want to be straight with you: yesterday's service disruption should not have happened, and I am sorry that it did.\n\nYour team relies on our platform to do their jobs, and for four hours yesterday afternoon, we made that harder than it should be. That matters to us - not as a line on an incident report, but because we know the real impact it had on real people trying to get their work done.\n\nHere is what happened and how we responded:\n\nAt 2:14pm, a configuration update caused an unexpected cascade failure in our processing queue. Within 12 minutes, our engineering team had identified the cause. By 6:20pm, full service was restored. No data was lost or compromised at any point.\n\nWhat we are changing:\n\nWe have already implemented a staged deployment process that prevents configuration changes from affecting the live environment without a parallel test run. This is not a patch - it is a structural change to how we deploy, and it is live now.\n\nI also want you to know that this incident has prompted a broader review of our resilience architecture, led by our CTO. We will share the findings with you directly within 30 days.\n\nYou chose to work with us because you trust us. Yesterday, we fell short of that trust, and we take that seriously. We are committed to earning it back through action, not just words.\n\nIf you have any questions or concerns, please contact me directly. My door - and my inbox - is always open.\n\nWith genuine appreciation for your patience,\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with honest accountability, provides enough technical detail to be credible, and closes with a personal commitment. Nina would send this knowing it strengthens the relationship even through the crisis.",
          observation:
            "You balanced vulnerability with competence. The apology is genuine, but the response section shows a team that acted decisively. That combination builds trust.",
          coachingTip:
            "When writing crisis communications for expressive communicators, let the honesty carry the weight. If the apology is genuine, the technical response becomes evidence of character, not just competence.",
          styleContext:
            "Expressive communicators turn crises into trust-building moments. An email this honest can make clients more loyal than they were before the disruption.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good accountability, but check whether your email feels personal enough. If it reads like it was written by a committee, it loses the individual voice Nina wants to project.",
          observation:
            "If your email uses 'the company regrets' instead of 'I am sorry', it has shifted from personal to corporate. Nina specifically asked for a human voice.",
          coachingTip:
            "Use 'I' instead of 'we' in the accountability sections. Personal ownership is more powerful than organisational ownership.",
          styleContext:
            "Expressive communicators put their name and their reputation behind crisis communications. The email should feel signed by a person, not a brand.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too corporate, too defensive, or fails to lead with genuine accountability. Nina would not put her name on this.",
          observation:
            "If your email opens with 'we experienced a service disruption' rather than 'we let you down', it has chosen corporate language over honesty.",
          coachingTip:
            "Delete the first paragraph and see if the second one is more honest. Corporate language often lives in the opening because that is where defensiveness starts.",
          styleContext:
            "Expressive communicators reject crisis templates because they sound like every other crisis email clients have received. The power is in being different - being human.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (355-357) - one-to-one
  // ============================================

  // Scenario 355 - Tom Brennan, one-to-one, foundation
  {
    id: "scenario-355",
    title: "The First Week Check-In",
    context:
      "A new team member is having their first one-to-one with Tom after their initial week. Tom wants to focus on how they are settling in rather than on tasks or targets.",
    chooseContext:
      "Tom has asked the new starter how they are finding the team, and they have admitted they feel a bit overwhelmed by the amount of information to absorb. Tom is responding.",
    rewriteContext:
      "Tom has asked you to write a short follow-up message after the one-to-one that reinforces the supportive tone and gives the new starter one simple focus for their second week.",
    characterId: "tom-brennan",
    dialogue:
      "I am not going to ask you about deliverables today. It is your first week and the most important thing is that you feel like you belong here. How are you finding things? Have you found people you feel comfortable asking questions to? Because the best thing about this team is the people, and I want you to experience that before anything else.",
    chooseDialogue:
      "That is completely normal and I would be worried if you were not feeling a bit overwhelmed. Everyone feels that way in week one. You are not expected to know everything yet - you are expected to ask questions and settle in. That is your only job right now.",
    rewriteDialogue:
      "Send a follow-up that makes them feel like the conversation was genuine, not a process step. Give them one simple thing to focus on next week - something achievable that will build their confidence without adding pressure.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has opened a first-week check-in by explicitly setting aside task discussions to focus on how the new starter is settling in and whether they feel they belong. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises belonging over performance, normalises early-stage overwhelm, and reduces pressure by redefining the new starter's job as 'ask questions and settle in'. This is supportive communication at its purest.",
          observation:
            "Notice how Tom explicitly says 'I am not going to ask you about deliverables'. He is removing the most common source of first-week anxiety before the new starter even raises it.",
          coachingTip:
            "When someone opens a one-to-one by removing expectations rather than setting them, they are using a supportive approach. Respond by being honest about how you are feeling.",
          styleContext:
            "Supportive communicators believe that a new starter who feels safe will learn faster than one who feels pressured. Investment in belonging pays dividends in performance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and people-focused, which can look expressive. But the focus is on safety and belonging, not on energy and excitement. Tom is calming, not inspiring.",
          observation:
            "An expressive communicator would welcome the new starter with enthusiasm about the team's mission. Tom welcomes them by making them feel safe to be uncertain.",
          coachingTip:
            "Supportive communicators create calm. Expressive communicators create energy. Tom is deliberately lowering the temperature, not raising it.",
          styleContext:
            "Supportive communicators in onboarding focus on reducing anxiety first. They know that a new starter who feels overwhelmed will not absorb training, regardless of quality.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not discussed targets, performance expectations, or task priorities. The entire conversation is about the new starter's emotional experience.",
          observation:
            "There are no KPIs, probation milestones, or learning objectives in Tom's opening. The focus is entirely on how the person feels.",
          coachingTip:
            "Ask whether the communicator is prioritising performance or wellbeing. Tom is prioritising wellbeing because he believes it enables performance.",
          styleContext:
            "Supportive communicators trust that a person who feels valued will perform well without being pressured. The relationship foundation comes before the performance expectations.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has told you that feeling overwhelmed in week one is normal and that your only job right now is to ask questions and settle in. How do you respond?",
      options: [
        {
          id: "s355-opt-a",
          text: "That is really good to hear. I was worried I should be further along by now. Knowing that I can just focus on getting to know people and asking questions takes a lot of pressure off. Thank you for saying that.",
          score: 10,
          result: "strong",
          explanation:
            "You have been honest about your anxiety, accepted the reassurance, and expressed genuine gratitude. This rewards Tom's supportive approach and deepens the trust he is building.",
        },
        {
          id: "s355-opt-b",
          text: "Thanks, Tom. Actually, could you share the team's priorities for this quarter? I want to start understanding where I can contribute as soon as possible.",
          score: 5,
          result: "partial",
          explanation:
            "Keen and proactive, but Tom has specifically set aside task discussions for this meeting. Jumping to priorities may signal that the wellbeing conversation did not land.",
        },
        {
          id: "s355-opt-c",
          text: "I am actually fine - I like hitting the ground running. Can you give me a project to work on? I learn best by doing, not by sitting around.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the supportive space Tom has created and implies his approach is unnecessary. A supportive communicator will worry that you are masking your feelings to appear strong.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a follow-up message after the one-to-one that feels genuine, reinforces the supportive tone, and gives the new starter one simple focus for week two. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Jamie,\n\nReally enjoyed our chat today. I meant what I said - there is no rush, and the fact that you are asking good questions already tells me you are going to do brilliantly here.\n\nFor next week, here is one thing to focus on: pick one person from a different team and have a coffee with them. Not about work - just to get to know them. That is it. No targets, no reports, no deadlines.\n\nIf anything comes up between now and our next one-to-one that you want to talk about - whether it is a work question or just a 'is this normal?' moment - send me a message. That is exactly what I am here for.\n\nGlad you are on the team.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message feels personal, reinforces the low-pressure tone of the one-to-one, and gives a single achievable focus that builds connection. Tom would send this without changing a word.",
          observation:
            "The 'one coffee with one person' focus is perfect - it is achievable, social, and builds the network Tom values. No new starter will feel overwhelmed by that ask.",
          coachingTip:
            "When writing follow-ups for supportive communicators, make the action small enough that it feels like a gift, not a task. Reducing asks builds confidence.",
          styleContext:
            "Supportive communicators measure the success of a follow-up by whether the recipient feels more confident after reading it than before.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether you have kept the ask simple enough. If you have given more than one focus for the second week, it risks reintroducing the overwhelm Tom just resolved.",
          observation:
            "If your follow-up includes a reading list, a schedule, or a set of goals, it has added pressure that contradicts the one-to-one's message.",
          coachingTip:
            "Remove everything except the one simplest thing. If the new starter achieves that one thing, week two is a success.",
          styleContext:
            "Supportive communicators build confidence through small, guaranteed wins. One achievable focus is always better than three ambitious ones.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too task-heavy, or fails to reinforce the supportive tone of the one-to-one.",
          observation:
            "If your follow-up reads like a task assignment rather than a friendly message, it has undone the work Tom did in the meeting.",
          coachingTip:
            "Rewrite as if you are texting a friend who just started a new job. Keep it warm, keep it simple, keep it short.",
          styleContext:
            "Supportive communicators know that tone consistency matters. If the meeting was warm but the follow-up is corporate, the new starter will trust the email, not the conversation.",
        },
      },
    },
  },

  // Scenario 356 - Leah Morgan, one-to-one, intermediate
  {
    id: "scenario-356",
    title: "The Career Anxiety Conversation",
    context:
      "A mid-level team member has requested an unscheduled one-to-one with Leah. When they arrive, they seem nervous and admit they are questioning whether they are in the right role. Leah needs to create space for an honest conversation.",
    chooseContext:
      "Leah has listened as the team member explained that they feel stuck - they enjoy parts of the role but worry they are not progressing. Leah is now responding without jumping to solutions.",
    rewriteContext:
      "Leah has asked you to draft a development plan summary that reflects the conversation and feels like a partnership document, not a performance improvement plan.",
    characterId: "leah-morgan",
    dialogue:
      "Thank you for telling me this. Honestly, it takes courage to say you are not sure if you are in the right place, and I want you to know that is a completely normal thing to feel. Before we talk about what to do, let us just sit with what you have told me. What parts of the role do you enjoy? Because we should start there, not with the parts that worry you.",
    chooseDialogue:
      "It sounds like the core of what you enjoy is still here - the client work and the creative problem-solving. The parts that drain you are the admin and the reporting. That is useful information because it tells me this might not be a role problem. It might be a role-shaping conversation. Let me think about how we can adjust things so you spend more time on what energises you.",
    rewriteDialogue:
      "Write the development summary as something they will want to revisit, not something they file away. Frame it around what they love doing, what drains them, and what we are going to try changing. Keep it warm - this is a partnership, not a prescription.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has responded to a career anxiety confession by thanking the team member for their courage, slowing down the conversation, and asking about the enjoyable parts before the worrying parts. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah validates the courage it took to speak up, deliberately slows the pace, and redirects towards strengths before addressing concerns. This is supportive communication at its most skilful.",
          observation:
            "Notice how Leah says 'let us just sit with what you have told me' before suggesting anything. Supportive communicators resist the urge to solve immediately because they know that feeling heard is the first step.",
          coachingTip:
            "When someone responds to vulnerability by slowing down and validating before problem-solving, they are using a supportive approach. Match by being open and honest.",
          styleContext:
            "Supportive communicators believe that career anxiety conversations are won or lost in the first two minutes. If the person feels judged, they will shut down. If they feel safe, they will share what really matters.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and encouraging, which can look expressive. But the pace is deliberately slow and the focus is on understanding, not energising.",
          observation:
            "An expressive communicator would respond with enthusiasm about the possibilities. Leah responds with calm validation and careful questions. She is exploring, not inspiring.",
          coachingTip:
            "Supportive communicators in difficult conversations prioritise understanding over encouragement. They want to hear the full picture before they respond with direction.",
          styleContext:
            "Supportive communicators treat career conversations as listening exercises. The quality of the advice depends on the quality of the listening that precedes it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not jumped to solutions, presented career frameworks, or set performance targets. The entire response is about creating emotional safety.",
          observation:
            "There are no development plans, career ladders, or skills assessments in Leah's response. The focus is on understanding how the person feels before discussing what to do.",
          coachingTip:
            "Ask whether the communicator is trying to solve the problem or understand the person. Leah is firmly in the understanding phase.",
          styleContext:
            "Supportive communicators know that most career anxiety is not about the career. It is about feeling valued, challenged, and seen. Address the feeling first.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has reframed your concern from 'wrong role' to 'role-shaping conversation' and offered to adjust how you spend your time. How do you respond?",
      options: [
        {
          id: "s356-opt-a",
          text: "That is actually a relief. I had not thought about it that way. I think you are right - it is the admin and reporting that drain me, not the role itself. I would really appreciate exploring how to shift the balance.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the reframe, been honest about what drains you, and shown willingness to explore adjustments together. This deepens the collaborative conversation Leah has created.",
        },
        {
          id: "s356-opt-b",
          text: "That makes sense. Could I see a list of other roles in the organisation? Even if this is a role-shaping conversation, I want to understand what else is out there.",
          score: 5,
          result: "partial",
          explanation:
            "A fair request, but it jumps past the exploration Leah is offering. She would prefer to work through the current role's possibilities before looking elsewhere.",
        },
        {
          id: "s356-opt-c",
          text: "I appreciate the thought, but I think I have already made up my mind. I am going to start looking for something new. I just wanted to let you know as a courtesy.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the supportive conversation Leah has carefully opened. Presenting a final decision when Leah is offering exploration makes the conversation feel pointless.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a development plan summary framed around what the team member loves, what drains them, and what you are going to try changing. Write it in a supportive style - a partnership document, not a prescription.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "DEVELOPMENT CONVERSATION SUMMARY - Prepared with Alex\n\nThis summary reflects our conversation on 14 March. It is not a performance plan - it is a record of what we explored together and what we are going to try.\n\nWhat energises you:\n- Client-facing work, especially problem-solving in live sessions\n- Creative project design and brainstorming new approaches\n- Mentoring junior team members\n\nWhat drains you:\n- Weekly reporting and admin tasks that feel disconnected from impact\n- Process-heavy internal meetings with no clear outcome\n\nWhat we are going to try:\n- Redistribute 60% of your reporting tasks to the team coordinator for three months and assess how this affects your energy and output\n- Protect Wednesday afternoons for creative project work - no meetings booked in this slot\n- Pair you with the new graduate starter for a structured mentoring arrangement\n\nHow we will check in:\nWe will revisit this summary together in six weeks. No formal review - just an honest conversation about whether the changes are making a difference. If they are not, we will try something else.\n\nThis is a starting point, not a fixed plan. You can change your mind about any of it at any time.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary feels like a partnership document - collaborative, warm, and explicitly open to adjustment. The team member would read this and feel that their concerns were genuinely heard and acted upon.",
          observation:
            "You framed the changes as experiments rather than mandates. 'What we are going to try' is fundamentally different from 'what you must do'. That framing preserves the team member's agency.",
          coachingTip:
            "When writing development summaries for supportive communicators, use 'we' language and frame everything as exploratory. People engage more fully with plans they co-created.",
          styleContext:
            "Supportive communicators believe that development plans should feel like invitations, not instructions. The team member should want to revisit this document, not dread it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your plan feels prescriptive. If it lists objectives and timelines without acknowledging the team member's feelings, it has shifted from partnership to performance management.",
          observation:
            "If your summary uses phrases like 'the following actions are required' or 'progress will be reviewed', it has lost the collaborative tone.",
          coachingTip:
            "Replace mandatory language with exploratory language. 'Required' becomes 'we are going to try'. 'Reviewed' becomes 'revisited together'.",
          styleContext:
            "Supportive communicators know that language shapes how a document feels. The same content in directive language feels like a warning; in supportive language, it feels like a gift.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan reads like a performance improvement document rather than a partnership summary. The team member would feel managed, not supported.",
          observation:
            "If your summary has the word 'expectations' or 'performance' in it, it has missed the brief. This is about energy and fulfilment, not output.",
          coachingTip:
            "Start over with the question: what does this person need to feel excited about coming to work? Build the plan around the answer.",
          styleContext:
            "Supportive communicators reject development documents that feel punitive. The goal is to help someone thrive, not to manage them into compliance.",
        },
      },
    },
  },

  // Scenario 357 - David Chen, one-to-one, advanced
  {
    id: "scenario-357",
    title: "The Burnout Warning Signs",
    context:
      "David has noticed that one of his highest performers has been withdrawing from the team - arriving late, leaving early, and declining optional meetings. He suspects burnout and has scheduled a one-to-one to check in without making the person feel scrutinised.",
    chooseContext:
      "David has gently raised his observations and the team member has broken down, admitting they are exhausted and feel like they cannot say no to anything. David is responding in the moment.",
    rewriteContext:
      "David has asked you to draft a short email to the team member's project leads, asking them to reduce the team member's commitments for the next four weeks without revealing the personal conversation.",
    characterId: "david-chen",
    dialogue:
      "I have noticed a few things over the past couple of weeks and I wanted to check in - not as your manager, but as someone who cares about how you are doing. There is no agenda today. I just want to hear how things are, and whatever you tell me stays between us.",
    chooseDialogue:
      "Thank you for trusting me with that. I want you to know that what you are feeling is not a weakness - it is a signal. And the fact that you have told me means we can do something about it together. You do not have to fix this on your own. Let us work out what needs to come off your plate, starting today.",
    rewriteDialogue:
      "Write the email to the project leads carefully. I need to reduce their workload without explaining why. Frame it as a resource rebalancing, not a personal issue. Protect their privacy while protecting their wellbeing.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has approached a potential burnout conversation by removing the managerial frame, offering confidentiality, and focusing on care rather than performance. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David explicitly separates the conversation from his managerial role, promises confidentiality, and centres the team member's wellbeing. This is advanced supportive communication - protective, trustworthy, and deeply human.",
          observation:
            "Notice how David says 'not as your manager, but as someone who cares'. He is deliberately lowering the power dynamic to create space for honesty. This is a technique supportive communicators use to access difficult truths.",
          coachingTip:
            "When someone removes their authority from a conversation to make it safer, they are operating at the highest level of supportive communication. Respond with the honesty they have earned.",
          styleContext:
            "Supportive communicators understand that burnout conversations fail when they feel like performance reviews. Removing the managerial frame is essential for creating genuine openness.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is warm and emotionally present, which can look expressive. But the restraint and the focus on safety distinguish this as supportive. David is not energising - he is protecting.",
          observation:
            "An expressive communicator would validate the feelings with enthusiasm and energy. David validates with calm and quiet steadiness. The emotional temperature is deliberately low.",
          coachingTip:
            "Supportive communicators in sensitive conversations lower their energy to match the vulnerability in the room. High energy can feel overwhelming when someone is fragile.",
          styleContext:
            "Supportive communicators modulate their presence. In a burnout conversation, they become quieter, slower, and smaller - creating space for the other person to fill.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not discussed performance, set expectations, or proposed a structured recovery plan. The entire interaction is about creating emotional safety.",
          observation:
            "There are no targets, deadlines, or action plans in David's opening. He has created a conversation with no agenda because the agenda would make it unsafe.",
          coachingTip:
            "Ask whether the communicator is trying to solve the problem or hold space for it to be named. David is holding space.",
          styleContext:
            "Supportive communicators know that burnout conversations must begin with trust. Solutions come later, after the person feels safe enough to be completely honest about their situation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has told you that your exhaustion is not a weakness but a signal, and that you do not have to fix it alone. How do you respond?",
      options: [
        {
          id: "s357-opt-a",
          text: "I did not expect to react like that. Thank you for making it safe to say it. I think the biggest thing is I cannot say no when people ask me to take on work. Could you help me work out what to drop? I do not think I can do it on my own right now.",
          score: 10,
          result: "strong",
          explanation:
            "You have been vulnerable, accepted the support, and asked for specific help. This is exactly the outcome David hoped for - honest disclosure leading to collaborative action.",
        },
        {
          id: "s357-opt-b",
          text: "I appreciate that. I think I just need a couple of days off and I will be fine. I do not want to make a big thing of it.",
          score: 5,
          result: "partial",
          explanation:
            "Understandable, but minimising burnout with a quick fix concerns David. He would want to explore the underlying pattern, not put a plaster on the symptoms.",
        },
        {
          id: "s357-opt-c",
          text: "Honestly, I am fine. I have just had a bad couple of weeks. I do not need any adjustments - I will sort myself out.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the conversation David has carefully created. He has just witnessed a breakdown and heard an admission of exhaustion - denying it now signals that the trust he built was not enough.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write an email to project leads reducing the team member's commitments for four weeks, framed as resource rebalancing without revealing the personal conversation. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Resource rebalancing - next four weeks\n\nHi all,\n\nI am making some adjustments to how we allocate capacity across the team for the next four weeks. This is part of a broader look at how we distribute work to make sure we are sustainable as we head into a busy quarter.\n\nSpecifically, I would like to redistribute some of Jamie's current commitments across the team. This is not a reflection of any performance concern - it is about ensuring the team's workload is balanced and that no one person is carrying a disproportionate share.\n\nHere is what I am proposing:\n- Project Horizon: Sarah to take lead on the remaining deliverables for the next four weeks\n- Thursday stakeholder calls: Rotating chair rather than Jamie leading each one\n- Monthly reporting: Shared responsibility across the team on a rota basis\n\nI will be in touch individually to discuss how this affects your workload and to make sure the transition is smooth.\n\nThanks for your flexibility on this. It is the kind of adjustment that keeps us strong as a team in the longer term.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email protects the team member's privacy completely while making the workload adjustment feel routine and positive. No one reading this would suspect a personal conversation prompted it.",
          observation:
            "You framed the change as forward-looking sustainability rather than reactive crisis management. That protects the team member and makes the redistribution feel strategic.",
          coachingTip:
            "When writing protective communications for supportive communicators, the skill is in what you do not say. The email should be so natural that no one asks questions about the reason.",
          styleContext:
            "Supportive communicators protect their people even when those people are not in the room. This email is an act of care disguised as a management update.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framing, but check whether your email inadvertently draws attention to the team member. If it focuses too heavily on one person, colleagues may speculate about the reason.",
          observation:
            "If your email says 'Jamie has been working very hard and needs some relief', it reveals too much. The adjustment should feel routine, not reactive.",
          coachingTip:
            "Distribute the focus. Mention the team member's changes alongside broader team adjustments so nothing looks unusual.",
          styleContext:
            "Supportive communicators design communications that protect privacy as the highest priority. Any hint that the change is personal undermines the trust built in the one-to-one.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either reveals too much about the personal situation, draws attention to the team member, or fails to make the workload change feel natural.",
          observation:
            "If your email mentions wellbeing, stress, or personal circumstances, it has breached the confidentiality David promised.",
          coachingTip:
            "Rewrite without mentioning the team member's name more than once. Frame it as a team-level change, not an individual accommodation.",
          styleContext:
            "Supportive communicators would rather take criticism for an unexplained decision than breach someone's confidence. Privacy is non-negotiable.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (358-360) - presentation
  // ============================================

  // Scenario 358 - Rachel Finch, presentation, foundation
  {
    id: "scenario-358",
    title: "The Quarterly Performance Review Presentation",
    context:
      "Rachel has been asked to present the team's quarterly performance to senior leadership. She has prepared a data-rich presentation with trend analysis and benchmarking against industry standards.",
    chooseContext:
      "Rachel has finished presenting the data and a senior leader has asked her to summarise the key takeaway in one sentence. Rachel finds this difficult because she believes the data tells a nuanced story.",
    rewriteContext:
      "Rachel has asked you to write an executive summary slide that distils the 20-slide presentation into five key data points with brief interpretations.",
    characterId: "rachel-finch",
    dialogue:
      "I have broken the quarter into three performance segments: client delivery, internal efficiency, and team development. For each, I have compared our results against the same quarter last year, the industry benchmark, and our own target. The data tells a consistent story, but I want to walk you through each segment so you can see the evidence behind the headline.",
    chooseDialogue:
      "I understand the request, but a single sentence risks oversimplifying. If I had to distil it, I would say: we outperformed on client delivery and team development but fell short on internal efficiency due to two process failures that have since been addressed. That is technically one sentence, but I would prefer you also see the data.",
    rewriteDialogue:
      "Write the executive summary slide. Five data points, each with a one-line interpretation. No adjectives - let the numbers do the talking. If someone reads only this slide, they should understand the quarter accurately.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has structured a quarterly presentation around three performance segments with year-on-year, benchmark, and target comparisons, and resisted summarising in a single sentence because it oversimplifies. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's presentation is data-rich, multi-dimensional, and she resists oversimplification because she values accuracy over brevity. This is analytical communication - thorough, evidence-based, and respectful of nuance.",
          observation:
            "Notice how Rachel reluctantly provides a summary but immediately adds 'I would prefer you also see the data'. Analytical communicators trust the evidence more than the headline.",
          coachingTip:
            "When someone resists summarising because they believe the summary loses important nuance, they are operating analytically. Engage with their detail before asking for the headline.",
          styleContext:
            "Analytical communicators see oversimplification as a form of inaccuracy. They would rather present ten slides of data than one slide that misrepresents the story.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is structured and decisive in her presentation format, which can look direct. But the resistance to simplification and the insistence on walking through evidence distinguish this as analytical.",
          observation:
            "A direct communicator would lead with the headline and offer the data as backup. Rachel leads with the data and resists being forced into a headline.",
          coachingTip:
            "If someone builds the presentation around the evidence rather than around the conclusion, they are analytical. Direct communicators do the reverse.",
          styleContext:
            "Analytical communicators believe the audience should reach the conclusion through the evidence, not receive the conclusion and then see the evidence that supports it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not told stories, shared personal reflections, or focused on how the team felt about their performance. The presentation is entirely data-driven.",
          observation:
            "There are no anecdotes, team celebrations, or emotional highlights in Rachel's approach. Every slide serves the evidence.",
          coachingTip:
            "Ask whether the presenter is trying to tell a story or prove a case. Rachel is proving a case with data.",
          styleContext:
            "Analytical communicators present to inform and to provide evidence for decisions. They are uncomfortable when presentations prioritise narrative over accuracy.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has reluctantly provided a one-sentence summary but stressed that the data behind it is more nuanced. How do you respond as a senior leader?",
      options: [
        {
          id: "s358-opt-a",
          text: "Thank you for the summary, Rachel. I would like to see the internal efficiency data in more detail - specifically the two process failures you mentioned. Can you walk us through the root cause and the corrective actions?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the summary and then engaged with the detail Rachel values. Asking about specific data points shows you respect the nuance she was trying to protect.",
        },
        {
          id: "s358-opt-b",
          text: "Good summary. Can you send us the full deck after the meeting? We will review it in our own time and come back with any questions.",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but Rachel has prepared to present the data live and answer questions in context. Deferring to an offline review denies her the chance to guide the interpretation.",
        },
        {
          id: "s358-opt-c",
          text: "Perfect. That one sentence is all we need. Let us move on to the next agenda item.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the work Rachel has done and reinforces the oversimplification she was resisting. An analytical communicator will feel that the leadership team is not interested in the evidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write an executive summary slide with five key data points and one-line interpretations. No adjectives - let the numbers speak. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Q4 PERFORMANCE - EXECUTIVE SUMMARY\n\n1. Client delivery score: 94% (target: 90%, industry benchmark: 87%)\n   Interpretation: Fourth consecutive quarter above target; 7 points above industry average.\n\n2. On-time delivery rate: 91% (target: 95%, Q3 result: 88%)\n   Interpretation: Three-point improvement quarter-on-quarter but still 4 points below target due to two delayed enterprise projects.\n\n3. Internal efficiency index: 72% (target: 85%, Q3 result: 79%)\n   Interpretation: Decline driven by two process failures in the QA workflow; both resolved in Week 10.\n\n4. Team development hours per person: 18.4 hours (target: 15 hours, industry benchmark: 12 hours)\n   Interpretation: Exceeded target by 22%; reflects investment in the new skills framework launched in Q3.\n\n5. Employee engagement score: 81% (target: 78%, Q3 result: 76%)\n   Interpretation: Five-point quarter-on-quarter improvement; highest score in 18 months.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each data point includes the actual result, the target, the comparator, and a one-line interpretation that avoids adjectives. Rachel could present this slide and the numbers would do the talking.",
          observation:
            "You included multiple comparators - target, benchmark, and previous quarter - which gives the audience context for every number. That is exactly how analytical communicators want data presented.",
          coachingTip:
            "When writing for analytical communicators, every number needs context. A result without a comparator is meaningless because the audience cannot judge whether it is good or bad.",
          styleContext:
            "Analytical communicators believe that well-presented data eliminates the need for opinion. If the numbers are clear, the conclusion is obvious.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every data point includes enough context. If you have listed results without targets or benchmarks, the audience cannot assess performance.",
          observation:
            "If any interpretation uses evaluative language like 'strong result' or 'disappointing performance', it is adding opinion where Rachel wants objectivity.",
          coachingTip:
            "Replace adjectives with comparisons. 'Strong result' becomes '7 points above benchmark'. The comparison is the interpretation.",
          styleContext:
            "Analytical communicators want executive summaries that inform, not persuade. The data should lead the reader to their own conclusion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary lacks the specificity, comparators, or objectivity that Rachel requires. It reads like a narrative summary rather than a data-driven executive slide.",
          observation:
            "If your summary says 'the team performed well this quarter' without numbers, it is exactly the oversimplification Rachel was trying to avoid.",
          coachingTip:
            "Start with the numbers. Write each data point as: metric, result, target, comparator, one-line interpretation. Follow that formula for all five.",
          styleContext:
            "Analytical communicators will not present a summary that relies on judgement rather than evidence. Every claim must be traceable to a number.",
        },
      },
    },
  },

  // Scenario 359 - Owen Grant, presentation, intermediate
  {
    id: "scenario-359",
    title: "The Technology Investment Case",
    context:
      "Owen has been asked to present a business case for a significant technology investment to the board. He has spent three weeks building a comprehensive analysis including cost modelling, risk assessment, and ROI projections over three scenarios.",
    chooseContext:
      "Owen has presented his three-scenario ROI model and a board member has asked whether he personally recommends the investment. Owen is navigating the line between presenting evidence and offering a recommendation.",
    rewriteContext:
      "Owen has asked you to write the recommendation section of the business case document, making clear how the evidence supports the recommendation without overstating certainty.",
    characterId: "owen-grant",
    dialogue:
      "I have modelled three scenarios: conservative, expected, and optimistic. The conservative scenario shows payback in 28 months. The expected scenario shows payback in 19 months with a five-year ROI of 340%. The optimistic scenario assumes adoption rates we have not yet validated. My analysis covers all three, but the expected scenario is built on assumptions I can defend.",
    chooseDialogue:
      "My role is to present the evidence as accurately as I can. Based on the expected scenario, which uses validated assumptions, the investment pays back within 19 months and generates significant long-term value. I would recommend proceeding, but I want to be transparent: the conservative scenario shows a 28-month payback, and the board should be comfortable with that timeline as a realistic lower bound.",
    rewriteDialogue:
      "Write the recommendation section. State what the evidence supports, acknowledge the range of outcomes, and make the recommendation contingent on the assumptions holding. No overselling. The board should trust this recommendation because it is honest about what we do not know.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has presented three scenario models with transparent assumptions and offered a recommendation while being honest about the conservative downside. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen presents multiple scenarios, states which assumptions are validated, and offers a recommendation while being transparent about uncertainty. This is analytical communication - rigorous, honest, and evidence-led.",
          observation:
            "Notice how Owen distinguishes between 'assumptions I can defend' and assumptions 'we have not yet validated'. Analytical communicators grade their own evidence and are transparent about its limitations.",
          coachingTip:
            "When someone offers a recommendation while explicitly stating the range of possible outcomes, they are being analytical. They trust the board to make a better decision with complete information.",
          styleContext:
            "Analytical communicators see intellectual honesty as their greatest credibility tool. A recommendation that acknowledges uncertainty is more trustworthy than one that claims certainty.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen does make a recommendation, which can look direct. But notice how carefully he qualifies it with ranges and caveats. A direct communicator would say 'do it' without the sensitivity analysis.",
          observation:
            "A direct communicator would present the expected scenario and recommend action. Owen presents all three scenarios because he believes the board needs the full picture to make a sound decision.",
          coachingTip:
            "If someone offers a recommendation but insists you also see the downside scenarios, they are being analytical. They want the decision to survive scrutiny.",
          styleContext:
            "Analytical communicators make recommendations they can defend in hindsight. If the conservative scenario materialises, they want the board to know they were warned.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not used emotional appeals, stories, or enthusiasm to sell the investment. The entire case is built on models, scenarios, and validated assumptions.",
          observation:
            "There are no references to industry excitement, competitive pressure, or fear of missing out. Owen is selling with evidence, not emotion.",
          coachingTip:
            "Ask whether the presenter is trying to excite the board or inform the board. Owen is informing.",
          styleContext:
            "Analytical communicators believe that a well-constructed business case should not need emotional reinforcement. If the numbers are compelling, the decision makes itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has recommended proceeding based on the expected scenario but asked the board to be comfortable with the conservative 28-month payback as a lower bound. How do you respond as a board member?",
      options: [
        {
          id: "s359-opt-a",
          text: "I appreciate the transparency. The 28-month lower bound is within our acceptable range. Can you walk us through the key assumptions in the expected scenario so we can assess how likely those assumptions are to hold?",
          score: 10,
          result: "strong",
          explanation:
            "You have engaged with the analytical framework, accepted the range, and asked to stress-test the assumptions. This is exactly how Owen wants the board to interrogate the case.",
        },
        {
          id: "s359-opt-b",
          text: "Good work, Owen. Let us approve the investment and move forward. The expected ROI is strong and I am confident in the team's ability to deliver.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive, but Owen has asked the board to engage with the range of outcomes. Approving without examining the assumptions may concern him that the decision is not fully informed.",
        },
        {
          id: "s359-opt-c",
          text: "Can you just tell us whether this is a good investment or not? We do not need three scenarios. We need a yes or no.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the analytical rigour Owen has brought to the business case. An analytical communicator will feel that the board is making a decision without understanding the evidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write the recommendation section of a technology business case. State what the evidence supports, acknowledge the range, and make the recommendation contingent on assumptions. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "RECOMMENDATION\n\nBased on the analysis of three modelled scenarios, the evidence supports proceeding with the technology investment.\n\nBasis for recommendation:\nThe expected scenario, built on validated assumptions (current adoption rates of 65%, implementation timeline of 14 weeks, and projected efficiency gains from comparable deployments), projects a payback period of 19 months and a five-year ROI of 340%.\n\nRange of outcomes:\n- Conservative scenario (adoption rate drops to 45%): Payback in 28 months, five-year ROI of 180%\n- Expected scenario (adoption rate holds at 65%): Payback in 19 months, five-year ROI of 340%\n- Optimistic scenario (adoption rate reaches 80%): Payback in 14 months, five-year ROI of 520%\n\nKey assumptions requiring validation:\n1. User adoption rate maintains above 60% after initial 90-day period\n2. Integration with existing systems completes within 14 weeks\n3. Vendor pricing remains fixed for the 36-month contract term\n\nContingency: If adoption falls below 50% at the 90-day review point, the board should reassess continued investment against the conservative scenario projections.\n\nThis recommendation is contingent on the above assumptions holding. A 90-day checkpoint is built into the implementation plan to verify performance against the expected scenario before Phase 2 investment is committed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your recommendation is evidence-based, transparent about uncertainty, and includes a built-in checkpoint for validation. The board can approve this knowing exactly what they are committing to and what would trigger a reassessment.",
          observation:
            "You included a contingency clause, which shows the board that the recommendation is not blind. If the assumptions fail, there is a predefined response. That is analytical governance at its best.",
          coachingTip:
            "When writing recommendations for analytical communicators, always include the conditions under which the recommendation would change. That is what makes it trustworthy.",
          styleContext:
            "Analytical communicators build exit ramps into their recommendations. They want the board to know that the plan has a self-correcting mechanism.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your recommendation includes clear conditions for reassessment. If it simply recommends proceeding without defining what would change the recommendation, it is incomplete.",
          observation:
            "If your range of outcomes lacks specific numbers for each scenario, the board cannot assess the downside. Analytical communicators need the full picture.",
          coachingTip:
            "Add a 'what would change our recommendation' section. It signals confidence in the evidence while acknowledging that evidence can evolve.",
          styleContext:
            "Analytical communicators want recommendations that are robust enough to survive a change in circumstances. A recommendation without conditions is a gamble, not an analysis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your recommendation lacks the evidence, range, or conditions that Owen requires. It reads like an opinion rather than an evidence-based assessment.",
          observation:
            "If your recommendation says 'we believe this is a good investment' without specifying why, on what basis, and under what conditions, it is not analytical.",
          coachingTip:
            "Remove the word 'believe' and replace it with 'the evidence supports'. Then show the evidence. That transformation turns opinion into analysis.",
          styleContext:
            "Analytical communicators will not present recommendations they cannot defend with data. Every claim of value must be traceable to a number and a validated assumption.",
        },
      },
    },
  },

  // Scenario 360 - Fiona Banks, presentation, advanced
  {
    id: "scenario-360",
    title: "The Organisational Restructure Proposal",
    context:
      "Fiona has been asked to present a restructure proposal to the executive committee. The proposal is based on 18 months of performance data, a skills audit, and benchmarking against three competitor organisations. The restructure affects 200 people.",
    chooseContext:
      "Fiona has presented the data and the CEO has asked her whether she has considered the human impact of the restructure. Fiona needs to show that she has thought about people while staying anchored in the evidence that supports the change.",
    rewriteContext:
      "Fiona has asked you to write the implementation section of the restructure proposal, including the phased timeline, the success metrics, and the risk mitigation measures.",
    characterId: "fiona-banks",
    dialogue:
      "The current structure was designed for a business that was 40% smaller. We have grown into it rather than redesigning it, and the data shows the consequences: decision latency has increased by 35%, cross-functional handoffs have doubled, and three of our five most critical roles have spans of control that exceed industry norms by a factor of two. The restructure addresses each of these findings systematically.",
    chooseDialogue:
      "Absolutely, and I am glad you raised it. The human impact is covered in section four of the proposal. We have modelled the transition in three phases specifically to minimise disruption. 85% of affected roles are lateral moves with enhanced scope, not reductions. The 15% that are redundancies have a 12-week transition programme with outplacement support. I have the data on comparable restructures if you would like to see redeployment success rates.",
    rewriteDialogue:
      "Write the implementation section with the same rigour as the analysis. Three phases, each with defined success metrics and a review gate before the next phase begins. Include risk mitigations for the three highest-probability risks. This section needs to show the executive committee that the plan is as thorough as the diagnosis.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has presented a restructure proposal built on 18 months of performance data and benchmarking, and responded to a question about human impact with specific percentages and a phased transition model. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona builds her entire proposal on data, responds to an emotional question with evidence, and has pre-prepared detailed modelling for every aspect of the restructure. This is analytical communication at the most senior level.",
          observation:
            "Notice how Fiona responds to the human impact question not with empathy but with data - 85% lateral moves, 15% redundancies, 12-week programme. She has quantified even the people dimension.",
          coachingTip:
            "When someone responds to an emotional challenge with prepared data rather than emotional reassurance, they are operating analytically. They believe the data addresses the concern more effectively than words.",
          styleContext:
            "Analytical communicators prepare for emotional questions by building the human impact into their data model. They show care through thoroughness, not through sentiment.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is decisive and assertive in presenting the restructure, which can look direct. But the depth of preparation - 18 months of data, benchmarking, phased modelling - marks this as analytical.",
          observation:
            "A direct communicator would propose the restructure based on a clear strategic vision. Fiona proposes it based on a systematic diagnosis with quantified evidence for every recommendation.",
          coachingTip:
            "If someone has spent 18 months building the evidence base before proposing a change, they are analytical. Direct communicators would have proposed the change and gathered evidence to support it.",
          styleContext:
            "Analytical communicators let the evidence build the case. The restructure is not Fiona's idea - it is the conclusion the data points to.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not appealed to the team's wellbeing, shared personal concerns about the restructure, or focused on how people will feel during the transition.",
          observation:
            "Even when asked about human impact, Fiona responds with data rather than empathy. The care is in the preparation, not in the emotional register.",
          coachingTip:
            "Ask whether the presenter addresses the human question through feelings or through evidence. Fiona addresses it through evidence because that is what she trusts to be convincing.",
          styleContext:
            "Analytical communicators at executive level show care through rigour. A phased plan with redeployment data is their version of empathy - it protects people through preparation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has shown that 85% of affected roles are lateral moves and the 15% redundancies have a 12-week transition programme. A board member asks whether the team can handle the uncertainty during the transition. How do you respond to support Fiona's analytical approach?",
      options: [
        {
          id: "s360-opt-a",
          text: "Fiona, have you modelled the productivity impact during the transition period? If we can show the board that Phase 1 has a defined performance floor and recovery timeline, that might address the concern about team uncertainty.",
          score: 10,
          result: "strong",
          explanation:
            "You have reframed an emotional concern as a data question, which supports Fiona's analytical approach. Asking for the productivity model keeps the conversation in evidence-based territory.",
        },
        {
          id: "s360-opt-b",
          text: "I think we should communicate the restructure with a strong emphasis on the opportunities for people. If the 85% lateral moves come with enhanced scope, that is a positive story to tell.",
          score: 5,
          result: "partial",
          explanation:
            "A valid communication point, but it shifts the conversation from evidence to messaging. Fiona would prefer to address the uncertainty concern with data before discussing communication strategy.",
        },
        {
          id: "s360-opt-c",
          text: "I think we need to pause and consider whether the organisation is emotionally ready for a restructure of this scale. The data may support it, but the timing might not be right for the people involved.",
          score: 0,
          result: "weak",
          explanation:
            "This introduces a subjective criterion - 'emotionally ready' - that cannot be measured. An analytical communicator will struggle with a postponement based on a factor that has no data behind it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write the implementation section of the restructure proposal: three phases with success metrics, review gates, and risk mitigations for the three highest-probability risks. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "IMPLEMENTATION PLAN\n\nThe restructure will be implemented in three phases over 26 weeks. Each phase has defined success metrics and a review gate that must be passed before the next phase begins.\n\nPHASE 1 - Weeks 1 to 8: Leadership layer restructure\nScope: Restructure of the senior leadership team from 12 roles to 9, with revised reporting lines.\nSuccess metrics:\n- All new roles confirmed and communicated by Week 3\n- 100% of affected leaders placed in new or transition roles by Week 6\n- Leadership team decision latency reduced by 15% by Week 8 (measured against current 14-day average)\nReview gate: Phase 2 proceeds only if all leadership appointments are confirmed and baseline decision latency measurement is complete.\n\nPHASE 2 - Weeks 9 to 18: Middle management and team restructure\nScope: Consolidation of 14 teams into 10, with revised spans of control.\nSuccess metrics:\n- Revised team structures communicated by Week 10\n- 85% of lateral moves completed by Week 14\n- Cross-functional handoff count reduced by 20% by Week 18 (measured against current quarterly average)\nReview gate: Phase 3 proceeds only if lateral move completion exceeds 80% and no critical role remains unfilled for more than 10 working days.\n\nPHASE 3 - Weeks 19 to 26: Transition support and performance stabilisation\nScope: Outplacement support for redundant roles, performance monitoring, and structural adjustment.\nSuccess metrics:\n- 100% of redundancy transitions completed with outplacement support by Week 22\n- Team productivity returns to within 90% of pre-restructure baseline by Week 26\n- Employee engagement survey conducted at Week 24 with results benchmarked against restructure norms\n\nRISK MITIGATIONS\n\nRisk 1: Key person departure during transition (probability: high)\nMitigation: Retention agreements for the 15 highest-risk individuals, identified through flight risk assessment. Agreements include a 6-month retention bonus and guaranteed role clarity by Week 6.\n\nRisk 2: Productivity decline exceeding 15% during Phase 2 (probability: medium-high)\nMitigation: Temporary resource allocation of 4 contractors to the three highest-volume teams during Weeks 9 to 18. Cost budgeted at 48,000.\n\nRisk 3: Manager resistance to revised spans of control (probability: medium)\nMitigation: One-to-one transition coaching for all affected managers during Weeks 9 to 14. Coaching provided by external partner with restructure specialism.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your implementation plan is phased, measured, and gated - each phase has clear success criteria and the next phase depends on the previous one being verified. The risk mitigations are specific and costed. Fiona would present this to the executive committee with full confidence.",
          observation:
            "You included review gates between phases, which is the analytical communicator's way of building accountability into the plan. The restructure cannot advance on hope - it advances on evidence.",
          coachingTip:
            "When writing implementation plans for analytical communicators, every phase must have a measurable exit criterion. Without gates, plans become schedules rather than governed processes.",
          styleContext:
            "Analytical communicators design implementation plans that can be audited. Every decision point, every metric, and every risk response should be traceable and verifiable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good phasing, but check whether your success metrics are specific enough to serve as genuine gates. If a metric says 'restructure progressing well', it cannot function as a decision criterion.",
          observation:
            "If your risk mitigations identify risks without specifying the response, cost, or timeline, they are observations, not mitigations.",
          coachingTip:
            "For each risk, specify: what you will do, how much it will cost, and when it activates. A mitigation without these three elements is just a worry.",
          styleContext:
            "Analytical communicators expect risk mitigations to be as rigorous as the analysis that identified the risks. Vague responses to precise diagnoses undermine the entire plan.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your implementation section lacks the structure, metrics, or risk detail that Fiona requires. It reads like a timeline rather than a governed implementation plan.",
          observation:
            "If your plan lists activities by week without defining what success looks like or what would trigger a pause, it is a schedule, not a plan.",
          coachingTip:
            "Add three elements to every phase: what will be done, how you will know it worked, and what must be true before the next phase starts. Those elements transform a timeline into a plan.",
          styleContext:
            "Analytical communicators will not present implementation plans they cannot defend. Every phase must be as evidence-based as the diagnosis that justified the restructure.",
        },
      },
    },
  },
];
