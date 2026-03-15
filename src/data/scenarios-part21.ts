import { Scenario } from "@/types";

export const SCENARIOS_PART21: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (241-243)
  // ============================================

  // Scenario 241 - Jordan Cole, one-to-one, foundation
  {
    id: "scenario-241",
    title: "The Performance Expectations Meeting",
    context:
      "Jordan has scheduled a one-to-one with a team member whose output has been inconsistent over the past quarter. Jordan wants to set clear expectations and agree a plan to get performance back on track.",
    chooseContext:
      "The team member has responded by saying they feel overwhelmed and are not sure what is expected of them. Jordan needs to provide clarity without softening the message too much.",
    rewriteContext:
      "Jordan has asked you to write a follow-up email summarising the performance expectations discussed, the support offered, and the review date agreed.",
    characterId: "jordan-cole",
    dialogue:
      "I want to be straight with you. Your output over the last three months has been below where I need it. That is not a judgement on you as a person - it is about the work. I want to fix this, and I think we can, but I need us to agree exactly what 'good' looks like so there is no ambiguity.",
    chooseDialogue:
      "I hear that you feel overwhelmed, and we will address that. But the first thing I need is for you to know exactly what I expect. Here are the three deliverables I need from you each week, the quality standard for each, and when they are due. If anything on this list is unclear, tell me now.",
    rewriteDialogue:
      "Send them a follow-up email today. Three sections: what we agreed the expectations are, what support I am providing, and when we review progress. Keep it factual and clear - I do not want them rereading it in two weeks wondering what I meant.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has opened a performance conversation by stating directly that output has been below expectations, separating the issue from the person, and asking for agreement on what 'good' looks like. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan names the performance gap immediately, frames it as a work issue rather than a personal one, and drives toward a clear definition of expectations. This is direct communication applied to a sensitive conversation.",
          observation:
            "Notice Jordan says 'I want to fix this, and I think we can.' The directness includes confidence that the situation is solvable - it is not punitive, but it is unambiguous.",
          coachingTip:
            "When someone opens a performance conversation by naming the gap and immediately proposing a path to resolution, they are using a direct style. Meet them with specifics, not emotions.",
          styleContext:
            "Direct communicators believe that vague performance feedback is more damaging than blunt feedback. Clarity, even when uncomfortable, is an act of respect.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan is structured and specific, which can look analytical. But the emphasis is on setting clear expectations quickly, not on analysing the root cause of the performance dip.",
          observation:
            "An analytical communicator would ask 'What factors contributed to the inconsistency?' before setting expectations. Jordan sets expectations first and addresses causes as a secondary concern.",
          coachingTip:
            "Direct communicators in performance conversations lead with 'here is what I need.' Analytical communicators lead with 'let us understand what happened.' Jordan is firmly in the 'what I need' camp.",
          styleContext:
            "Direct communicators see performance conversations as forward-looking. The past is relevant only insofar as it defines what needs to change.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not asked about the team member's wellbeing, explored their feelings about the situation, or prioritised making them feel comfortable. The focus is entirely on expectations and outcomes.",
          observation:
            "There is no emotional check-in, no exploration of personal circumstances, and no extended reassurance. Jordan acknowledges the human element in one sentence and then moves to the work.",
          coachingTip:
            "Ask yourself: is this person leading with empathy or with expectations? Jordan leads with expectations while briefly acknowledging the human behind them.",
          styleContext:
            "Direct communicators believe the most empathetic thing you can do in a performance conversation is to be clear. Ambiguity creates anxiety; clarity creates agency.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member says they feel overwhelmed and unsure of expectations. Jordan has responded with a specific list of three weekly deliverables, quality standards, and deadlines. How do you support this approach?",
      options: [
        {
          id: "s241-opt-a",
          text: "That list is really clear, and having it written down should help. I would add one thing: let us agree a 10-minute check-in on Wednesday mornings so you can flag anything that is blocking you before it becomes a problem.",
          score: 10,
          result: "strong",
          explanation:
            "You reinforce the clarity of Jordan's expectations and add a practical support mechanism with a specific time. This matches the direct approach of turning plans into scheduled actions.",
        },
        {
          id: "s241-opt-b",
          text: "I think we should also explore what has been causing the overwhelm. Understanding the root causes might help us prevent the same thing from happening again.",
          score: 5,
          result: "partial",
          explanation:
            "Valid, but Jordan has chosen to address expectations first and causes second. Shifting to root cause analysis at this point redirects the conversation away from the clarity Jordan has just established.",
        },
        {
          id: "s241-opt-c",
          text: "I want you to know that everyone goes through periods like this. Do not be too hard on yourself. We are here to support you, and things will get better with time.",
          score: 0,
          result: "weak",
          explanation:
            "Well-intentioned but contradicts Jordan's approach. Jordan is providing specific, actionable clarity. General reassurance without concrete actions leaves the team member in the same ambiguous position they started in.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a follow-up email covering agreed expectations, support offered, and the review date. Write it in a direct style that leaves no room for ambiguity.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Performance Expectations - Agreed Actions\n\nThank you for the conversation today. Below is a summary of what we agreed.\n\nWeekly expectations:\n1. Client status reports submitted by 5pm every Friday. Each report must include progress against milestones, risks flagged, and next-week priorities.\n2. All client queries responded to within 4 hours during working hours.\n3. Team stand-up update prepared and delivered every Monday - no longer than 3 minutes, covering last week's outputs and this week's priorities.\n\nSupport:\n- Weekly 10-minute check-in on Wednesdays at 9:30am to flag blockers early\n- Access to the project management training module (link below)\n- Reduced involvement in the internal audit project for the next 6 weeks to free up capacity\n\nReview date: 25 April. We will assess progress against these expectations and decide next steps.\n\nIf any of this is unclear, come back to me today. I want you to succeed at this, and clarity is the first step.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is specific, measurable, and leaves nothing to interpretation. Jordan would send this without edits and reference it at the review meeting.",
          observation:
            "You included both expectations and support in equal detail, which signals that this is a partnership, not a disciplinary action. The tone is firm but fair.",
          coachingTip:
            "When writing performance follow-ups for direct communicators, make every expectation measurable. 'Improve client communication' is vague. 'Respond within 4 hours' is clear.",
          styleContext:
            "Direct communicators use follow-up emails as contracts. If it is not in writing, it was not agreed. If it is not specific, it cannot be measured.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether every expectation includes a measurable standard and a deadline. Phrases like 'improve the quality of reports' need defining.",
          observation:
            "If the team member could read your email and still be unsure what 'good' looks like, the email has not done its job.",
          coachingTip:
            "For each expectation, ask: how would I know if this has been met? If you cannot answer in one sentence, the expectation needs tightening.",
          styleContext:
            "Direct communicators believe that unmeasurable expectations are unfair expectations. The clearer the standard, the easier it is for everyone.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too vague, too soft, or focuses more on encouragement than on specific expectations and accountability.",
          observation:
            "If your email includes sentences like 'I have every confidence you will turn this around', it is offering reassurance rather than clarity. Jordan wants the opposite.",
          coachingTip:
            "Remove every sentence that contains encouragement without an action. Replace it with a specific expectation, a support mechanism, or a date.",
          styleContext:
            "Direct communicators in performance situations believe that kindness without clarity is not kind at all. The greatest support you can offer is to be specific about what success looks like.",
        },
      },
    },
  },

  // Scenario 242 - Sam Hartley, one-to-one, intermediate
  {
    id: "scenario-242",
    title: "The Career Progression Conversation",
    context:
      "A high-performing team member has requested a one-to-one with Sam to discuss their career progression. They want a promotion and have been hinting at it for months. Sam thinks they are not ready yet and needs to deliver that message honestly.",
    chooseContext:
      "The team member has listed their achievements and asked directly why they have not been promoted. Sam needs to explain the gap between where they are and where they need to be without demotivating them.",
    rewriteContext:
      "Sam has asked you to draft a development plan that clearly outlines the three areas the team member needs to strengthen before being considered for promotion, with specific evidence of what 'ready' looks like.",
    characterId: "sam-hartley",
    dialogue:
      "I respect that you have asked for this conversation directly. You deserve an equally direct answer. You are not ready for promotion yet. That is not a reflection of your talent - it is about three specific gaps that I can help you close. Do you want to hear them?",
    chooseDialogue:
      "You have listed your achievements, and they are real. I am not disputing them. But the role you want requires three things you have not demonstrated yet: leading a cross-functional project, managing stakeholder conflict, and presenting to senior leadership. Those are not opinions - they are the criteria the panel uses.",
    rewriteDialogue:
      "Write the development plan. Three gaps, each with a definition of what 'ready' looks like, one or two actions to close the gap, and a realistic timeline. I do not want this to feel like a punishment. I want it to feel like a roadmap.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has opened a career progression conversation by stating directly that the team member is not ready for promotion, separating the judgement from the person, and offering to explain the specific gaps. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam delivers the difficult message immediately, frames it constructively, and offers specifics. There is no hedging, no softening with excessive empathy, and no delay in getting to the point.",
          observation:
            "Notice Sam says 'You deserve an equally direct answer.' This frames directness as a form of respect, which is a core belief of direct communicators.",
          coachingTip:
            "When someone delivers difficult career feedback immediately and frames honesty as respect, they are operating in a direct style. Respond with questions about the specifics, not with emotional reactions.",
          styleContext:
            "Direct communicators believe that delaying honest feedback is more harmful than delivering it. The sooner someone knows the gap, the sooner they can close it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam references specific criteria, which looks analytical. But the approach is assertive and immediate - Sam delivers the verdict first and offers the evidence second.",
          observation:
            "An analytical communicator would say 'Let me walk you through the promotion criteria and show you where you currently sit against each one.' Sam says 'You are not ready' and then explains why.",
          coachingTip:
            "Direct communicators give the conclusion first and the reasoning second. Analytical communicators build the reasoning first and let the conclusion emerge. Sam is firmly conclusion-first.",
          styleContext:
            "Direct communicators in career conversations believe that people handle honest conclusions better than drawn-out analysis. The directness itself is the kindness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not spent time exploring the team member's feelings, building them up before delivering the message, or framing the conversation around their emotional needs.",
          observation:
            "There is no extended praise before the difficult message, no checking how the team member is feeling, and no attempt to soften the blow with relationship language.",
          coachingTip:
            "Ask yourself: is this person managing the message or managing the emotions? Sam is managing the message and trusting the team member to handle it.",
          styleContext:
            "Direct communicators respect high performers by giving them the truth unfiltered. They believe that talented people can handle direct feedback and prefer it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member has listed their achievements and asked why they have not been promoted. Sam has named three specific gaps using promotion panel criteria. How do you contribute?",
      options: [
        {
          id: "s242-opt-a",
          text: "Sam is right about the criteria. And the good news is that all three gaps are closable. I can think of at least one project currently running that would give you cross-functional leadership experience if you want to put your hand up for it.",
          score: 10,
          result: "strong",
          explanation:
            "You validate Sam's assessment and immediately offer a concrete opportunity to close one of the gaps. This is the direct approach of turning feedback into action.",
        },
        {
          id: "s242-opt-b",
          text: "I think it is also worth saying that your work this year has been outstanding. The promotion gap does not diminish that. Maybe we should also talk about how to get more visibility for what you have already achieved.",
          score: 5,
          result: "partial",
          explanation:
            "Positive and partially relevant, but Sam has already acknowledged the achievements. Returning to them risks diluting the focus on the three gaps that need to be closed.",
        },
        {
          id: "s242-opt-c",
          text: "This must be really disappointing to hear. I know how hard you have worked, and I can imagine how frustrating it must be to feel like it is not being recognised. Take some time to process this.",
          score: 0,
          result: "weak",
          explanation:
            "This focuses entirely on the emotional response rather than the actionable path forward. Sam has deliberately framed this as a solvable problem - reframing it as a disappointment to be processed undermines that.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to write a development plan covering three gaps with definitions of 'ready', actions to close each gap, and timelines. Write it in a direct style that feels like a roadmap, not a punishment.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Development Plan - Promotion Readiness\n\nThis plan outlines the three areas to strengthen before the next promotion review. Each includes what 'ready' looks like, the actions to get there, and a target date.\n\n1. Cross-Functional Leadership\nReady looks like: You have led a project involving at least two other departments from scoping to delivery, with documented stakeholder feedback.\nAction: Take the lead on the Q3 systems migration project. You will coordinate with IT, finance, and operations.\nTarget: Complete by September.\n\n2. Stakeholder Conflict Management\nReady looks like: You have navigated a disagreement between senior stakeholders and reached a resolution without escalating to your line manager.\nAction: Attend the stakeholder management workshop in May, then apply the techniques in real situations. We will review two specific examples in our one-to-ones.\nTarget: Two documented examples by October.\n\n3. Senior Leadership Presentation\nReady looks like: You have presented a business case or project update to a director-level audience, fielded questions confidently, and received positive feedback.\nAction: Present the Q2 results to the leadership team in July. I will help you prepare and do a dry run the week before.\nTarget: Complete by July.\n\nReview date: November. If all three gaps are closed with evidence, I will put you forward for the next panel.\n\nThis is a roadmap, not a barrier. You have the talent. These are the experiences you need to prove it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your plan is specific, measurable, and ends with a clear commitment about what happens when the gaps are closed. Sam would hand this over with confidence.",
          observation:
            "The final line - 'You have the talent. These are the experiences you need to prove it' - is a direct communicator's version of encouragement. It is affirming without being soft.",
          coachingTip:
            "When writing development plans for direct communicators, define 'ready' in observable terms. If you cannot see it, you cannot assess it.",
          styleContext:
            "Direct communicators believe that the best development plans are the ones that make the promotion decision feel inevitable once the work is done. The plan should be a contract, not a conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each 'ready' definition is observable and evidence-based. Phrases like 'demonstrate improved confidence' are too subjective for Sam.",
          observation:
            "If the team member could complete every action on your plan and still be told they are not ready, the definitions are not specific enough.",
          coachingTip:
            "For each gap, write the assessment question the promotion panel would ask. Then write the answer you want this person to be able to give. That defines 'ready'.",
          styleContext:
            "Direct communicators see promotion readiness as a binary: either you can demonstrate the evidence or you cannot. The plan should make that binary clear.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan is either too vague, too long, or reads like a generic development framework rather than a specific roadmap for this person.",
          observation:
            "If your plan includes generic actions like 'seek opportunities to develop leadership skills', it gives the team member nothing concrete to act on.",
          coachingTip:
            "Name the specific project, the specific date, and the specific outcome for each action. Generalities are the enemy of progress.",
          styleContext:
            "Direct communicators believe that a development plan with generic actions is worse than no plan at all. It creates the illusion of progress without the substance.",
        },
      },
    },
  },

  // Scenario 243 - Alex Tran, one-to-one, advanced
  {
    id: "scenario-243",
    title: "The Difficult Exit Conversation",
    context:
      "A senior team member has handed in their resignation. Alex has been asked to conduct the exit conversation to understand why they are leaving and whether there is anything that could change their mind.",
    chooseContext:
      "The departing team member has said their decision is final and cites a lack of growth opportunities. Alex suspects there is a deeper issue and wants to uncover it without being intrusive.",
    rewriteContext:
      "Alex has asked you to write a confidential summary of the exit conversation for the leadership team, capturing the key reasons for departure and recommending specific changes to prevent similar losses.",
    characterId: "alex-tran",
    dialogue:
      "I appreciate you being here for this. I am not going to try to talk you out of it - you have made your decision and I respect that. What I would like is your honest assessment of what we could have done differently. Not what you think I want to hear. The real version.",
    chooseDialogue:
      "You have said it is about growth opportunities, and I believe that is part of it. But you stayed through two years of limited growth before deciding to leave now. Something else shifted. I am not asking to be nosy - I am asking because if we have a problem I am not seeing, I need to know.",
    rewriteDialogue:
      "Write the exit summary for leadership. Do not soften it. If they said something uncomfortable, include it. If there is a pattern here that connects to other departures, flag it. Recommend two or three specific changes with a clear business case for each.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Alex has opened an exit conversation by respecting the decision, explicitly not trying to change it, and asking for the 'real version' of why the person is leaving rather than the polished version. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex establishes respect for the decision immediately, removes the pressure of a retention pitch, and demands honesty rather than diplomacy. This is direct communication used to create space for truth.",
          observation:
            "The phrase 'not what you think I want to hear' is a direct communicator's way of giving permission to be brutally honest. They are signalling that they value truth over comfort.",
          coachingTip:
            "When someone opens a difficult conversation by removing pressure and explicitly requesting unfiltered honesty, they are using a direct style. Give them the honesty they are asking for.",
          styleContext:
            "Direct communicators in exit conversations want actionable intelligence, not comfortable farewells. They see the departure as a data point that should inform change.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is probing for deeper causes, which looks analytical. But the approach is confrontational rather than investigative - Alex challenges the stated reason and pushes for the real one.",
          observation:
            "An analytical communicator would ask systematic questions about each aspect of the role. Alex makes an observation - 'you stayed through two years of limited growth' - and uses it as leverage to get to the truth.",
          coachingTip:
            "Direct communicators probe by challenging. Analytical communicators probe by questioning. Alex's approach is to state what does not add up and let the person fill in the gap.",
          styleContext:
            "Direct communicators use logic as a crowbar in exit conversations. They find the inconsistency in the polished answer and pry it open.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not focused on making the departing person feel valued, explored their emotional experience of leaving, or tried to maintain the relationship for its own sake.",
          observation:
            "There is no extended expression of sadness, no reminiscing about shared achievements, and no focus on the personal relationship. Alex is mining for organisational intelligence.",
          coachingTip:
            "Ask yourself: is this person trying to understand the person or the problem? Alex is trying to understand the organisational problem that caused the departure.",
          styleContext:
            "Direct communicators treat exit conversations as diagnostic tools. The person is leaving regardless - the question is what the organisation can learn from it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member says the decision is about growth, but Alex has pointed out they stayed through two years of the same issue. Alex suspects there is a deeper reason. How do you contribute?",
      options: [
        {
          id: "s243-opt-a",
          text: "Alex makes a fair point. If you are comfortable sharing, we would genuinely benefit from knowing what changed recently. Was it a specific event, a conversation, or something that built up over time? Whatever you say stays in this room unless you tell us otherwise.",
          score: 10,
          result: "strong",
          explanation:
            "You support Alex's probe with a direct but respectful invitation to go deeper. Offering confidentiality and framing the options shows that you want truth, not just answers.",
        },
        {
          id: "s243-opt-b",
          text: "Growth is a really common reason for leaving. Perhaps we should look at our development programme more broadly and see if there are systemic gaps affecting other people too.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable systemic point, but Alex is in the middle of trying to uncover the specific trigger for this departure. Broadening to the system right now loses the moment.",
        },
        {
          id: "s243-opt-c",
          text: "I think we should respect their stated reasons. Not everyone wants to go into detail about why they are leaving, and pushing too hard might make this conversation uncomfortable.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down Alex's attempt to get to the truth. Alex has explicitly created a safe space for honesty - suggesting they stop asking undermines the entire purpose of the conversation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a confidential exit summary for leadership that captures the real reasons for departure and recommends specific changes. Do not soften it. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Confidential Exit Summary\n\nDeparting employee: Senior Product Manager, 3.5 years tenure\n\nStated reason: Lack of growth opportunities\nActual reason: Stated reason is a contributing factor, but the trigger was being passed over for the Head of Product role in January without explanation. The employee learned about the appointment through a company-wide announcement rather than a direct conversation.\n\nKey quote: 'I could have lived with not getting the role. What I could not live with was finding out the same way the intern did.'\n\nPattern: This is the third senior departure in 12 months where the individual cited lack of communication about career decisions. The previous two also referenced feeling blindsided by promotion decisions.\n\nRecommendations:\n1. Mandate direct conversations with internal candidates before external announcements for any role at senior manager level and above. Estimated effort: zero cost, one hour per hiring decision.\n2. Introduce a formal feedback loop for unsuccessful internal candidates within 48 hours of the decision, including specific reasons and a development pathway. Estimated effort: HR process change, implementable within one month.\n3. Review the last 12 months of senior departures to determine whether this pattern extends further than these three cases.\n\nThis departure was preventable. The issue is not career progression - it is how career decisions are communicated.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is honest, identifies the real issue, connects it to a pattern, and recommends specific, actionable changes. Alex would present this to leadership without softening a word.",
          observation:
            "Including the direct quote is powerful. It gives leadership the departing employee's actual words, which are more compelling than any summary could be.",
          coachingTip:
            "When writing exit summaries for direct communicators, include the uncomfortable truths. If the summary makes leadership uncomfortable, it is doing its job.",
          styleContext:
            "Direct communicators write exit summaries to drive change, not to close a file. The summary should make inaction feel irresponsible.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your summary identifies the pattern and makes specific recommendations. A summary that only captures one departure's reasons misses the systemic opportunity.",
          observation:
            "If your recommendations are general - 'improve internal communications' - they will be noted and ignored. Specific actions with implementation details drive change.",
          coachingTip:
            "For each recommendation, add an estimated effort and timeline. This transforms a suggestion into a proposal that leadership can say yes or no to.",
          styleContext:
            "Direct communicators know that vague recommendations die in committee. Specific, low-effort, high-impact changes are the ones that actually get implemented.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too diplomatic, avoids the uncomfortable truth, or fails to connect this departure to a broader pattern.",
          observation:
            "If your summary says 'the employee felt there were limited growth opportunities' without mentioning the specific trigger, it gives leadership permission to do nothing.",
          coachingTip:
            "Write the version that would make leadership slightly uncomfortable. That is the version that drives change. The comfortable version drives filing.",
          styleContext:
            "Direct communicators believe that softened exit summaries are a form of organisational dishonesty. If you know the real reason and do not share it, you are complicit in the next departure.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (244-246)
  // ============================================

  // Scenario 244 - Priya Sharma, presentation, foundation
  {
    id: "scenario-244",
    title: "The Quarterly Achievements Showcase",
    context:
      "Priya has been asked to present the team's quarterly achievements to the wider department. She wants the presentation to feel celebratory and energising rather than like a dry status update.",
    chooseContext:
      "During the presentation, Priya notices that the audience is disengaged - people are checking their phones. She needs to recapture their attention and bring energy back into the room.",
    rewriteContext:
      "Priya has asked you to write the closing slide narrative that celebrates the team's work, thanks contributors by name, and gets people excited about next quarter.",
    characterId: "priya-sharma",
    dialogue:
      "Good afternoon, everyone! Before I show you a single number, I want to tell you a story about something that happened in week three of this quarter that completely changed how our team thinks about client delivery. It involves a last-minute client call, a very broken spreadsheet, and someone on this team who turned the whole thing around in 45 minutes.",
    chooseDialogue:
      "I can see some of you drifting, and I do not blame you - we have all sat through too many quarterly updates that feel like reading a spreadsheet out loud. So let me skip ahead to the part that actually matters: the three things this team did that no other team in this building could have done.",
    rewriteDialogue:
      "Write the closing section for me. I want people to leave the room feeling proud. Name the people who went above and beyond, say what they did, and then paint a picture of what next quarter could look like if we keep this momentum going.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a quarterly presentation by telling a story instead of showing data, deliberately building suspense, and focusing on a human moment rather than metrics. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with a story, builds suspense, and makes the presentation about people rather than numbers. This is expressive communication used to turn a status update into an experience.",
          observation:
            "Notice Priya says 'Before I show you a single number.' She is deliberately delaying the data to create emotional engagement first. Expressive communicators know that data lands better when people are already emotionally invested.",
          coachingTip:
            "When a presenter opens with a story and delays the data, they are using an expressive style to build engagement. Lean into their energy rather than asking for the numbers.",
          styleContext:
            "Expressive communicators believe that presentations should change how people feel, not just what they know. Data is the proof; the story is the persuasion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does centre the presentation on a person's contribution, which shows care. But the emphasis is on energy, storytelling, and audience engagement - not on quiet acknowledgement.",
          observation:
            "A supportive communicator would say 'I want to take a moment to recognise someone who worked really hard this quarter.' Priya builds a whole narrative arc around the moment, complete with suspense.",
          coachingTip:
            "Expressive communicators celebrate through stories. Supportive communicators celebrate through quiet, sincere recognition. The energy level is the key difference.",
          styleContext:
            "Expressive communicators use presentations as performances. They believe that the way you deliver information is as important as the information itself.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not opened with metrics, a structured agenda, or a summary of key findings. The entire opening is designed to create an emotional connection before any data appears.",
          observation:
            "There are no charts, no percentages, and no bullet-pointed achievements in the opening. Priya is selling the team's story, not reporting their numbers.",
          coachingTip:
            "Ask yourself: is this person presenting data or presenting a narrative? Priya is firmly in the narrative camp, with data supporting the story rather than the other way around.",
          styleContext:
            "Expressive communicators see quarterly presentations as opportunities to build team pride and departmental reputation. A dry data review wastes that opportunity.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The audience is disengaged and checking their phones. Priya has acknowledged this directly and offered to skip to the most impressive achievements. How do you help re-energise the room?",
      options: [
        {
          id: "s244-opt-a",
          text: "And I want to add to what Priya is about to share. I was there when this happened, and honestly, I have never seen a team respond to a crisis like that. You are about to hear something that will change how you think about what is possible in 45 minutes.",
          score: 10,
          result: "strong",
          explanation:
            "You build on Priya's narrative energy with your own eyewitness enthusiasm. This adds credibility to her story while matching the expressive tone she has set.",
        },
        {
          id: "s244-opt-b",
          text: "For those of you who want the full data breakdown, we have a detailed report that we can share after the session. For now, let us focus on the highlights.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and helpful, but it introduces a factual, administrative note when Priya is trying to rebuild energy. It is not wrong, but it does not add to the momentum.",
        },
        {
          id: "s244-opt-c",
          text: "I think we should just go through the slides in order. People can check the data later but we should present it properly while we have everyone together.",
          score: 0,
          result: "weak",
          explanation:
            "This contradicts Priya's deliberate decision to skip the dry content and focus on what will engage the room. Going back to the standard format will lose the audience entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write the closing slide narrative that celebrates the team, thanks specific contributors, and builds excitement for next quarter. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "And that brings us to the part of this presentation that matters most: the people.\n\nThis quarter would not have happened without a few individuals who went beyond what anyone expected.\n\nKatie redesigned the client onboarding flow in three days when the original developer was out sick. She did not wait to be asked. She just did it.\n\nRaj stayed late four nights running to make sure the data migration went live on time. When I thanked him, he said 'The team was counting on me.' That tells you everything about who he is.\n\nAnd Sophie, who took on two extra clients when we were short-staffed and still hit every single deadline. If there is a definition of quiet excellence, she is it.\n\nSo what comes next? Next quarter, we have the chance to do something this team has never done before: lead the company-wide product launch. I genuinely believe we are the only team in this building that could pull it off. And after what I have seen this quarter, I know we will.\n\nThank you, everyone. Let us make next quarter even better.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing celebrates individuals with specific stories, ends with forward-looking energy, and makes the whole room feel proud. Priya would deliver this with genuine excitement.",
          observation:
            "You gave each person a specific moment rather than a generic thank-you. That personalisation is what makes recognition feel real.",
          coachingTip:
            "When writing celebratory content for expressive communicators, name the person, tell their story, and let the audience feel what makes them special. Generic praise falls flat.",
          styleContext:
            "Expressive communicators believe that recognition is most powerful when it is specific and public. A name, a story, and a moment of applause can change someone's entire experience of work.",
        },
        partial: {
          result: "partial",
          explanation:
            "Heading in the right direction, but check whether your closing tells stories or lists achievements. 'Raj worked extra hours' is a fact. 'When I thanked him, he said the team was counting on me' is a story.",
          observation:
            "If your closing reads like an awards ceremony script - 'And the award for best client delivery goes to...' - it needs more personality and less formula.",
          coachingTip:
            "Add one human detail per person. What did they say? How did they react? What made their contribution uniquely them? That detail transforms recognition into storytelling.",
          styleContext:
            "Expressive communicators remember moments, not metrics. Your closing should be full of moments that people will recall when they think about this quarter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing is either too brief, too generic, or reads like a corporate thank-you rather than a genuine celebration of individual contributions.",
          observation:
            "If your closing says 'Thank you to the whole team for a great quarter', it is polite but forgettable. Priya wants people to leave the room smiling.",
          coachingTip:
            "Imagine you are giving a speech at a friend's birthday party, not closing a board meeting. The warmth, specificity, and personality should match that setting.",
          styleContext:
            "Expressive communicators see generic group thank-yous as missed opportunities. Every person who went above and beyond deserves their own sentence.",
        },
      },
    },
  },

  // Scenario 245 - Marcus Webb, presentation, intermediate
  {
    id: "scenario-245",
    title: "The Innovation Pitch",
    context:
      "Marcus has been given 15 minutes to pitch a new product idea to the senior leadership team. He believes passionately in the concept and wants to make it impossible for them to say no.",
    chooseContext:
      "A sceptical board member has interrupted Marcus's pitch to challenge the market assumptions. Marcus needs to handle the objection without losing the energy of his presentation.",
    rewriteContext:
      "Marcus has asked you to write the follow-up email after the pitch, capturing the excitement from the room and proposing concrete next steps to move the idea from concept to pilot.",
    characterId: "marcus-webb",
    dialogue:
      "I am not going to start with a market analysis slide. I am going to start with a customer. Her name is Jess, she runs a small business in Leeds, and right now she spends four hours every week doing something that our product could do in ten minutes. Jess is not a persona. She is a real person I spoke to last Thursday. And there are 200,000 people like her.",
    chooseDialogue:
      "Great question, and I am glad you asked it because it means you are taking this seriously. The market data supports the assumption - I have it in the appendix and I am happy to walk through it after. But let me tell you what the data does not capture: the 12 conversations I have had with people like Jess who told me, unprompted, that they would pay for this tomorrow.",
    rewriteDialogue:
      "Send the follow-up while the energy is still high. Open with the Jess story because that is what people will remember. Then list the three next steps we proposed: customer validation sprint, prototype build, and pilot with five real users. Make it feel like momentum is already building.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus has opened a product pitch by telling a specific customer's story instead of showing market data, making the audience care about a real person before introducing the business case. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with a human story, names a real person, and creates emotional investment before presenting any data. He is selling a vision through empathy and narrative, which is the hallmark of expressive pitching.",
          observation:
            "Notice Marcus says 'Jess is not a persona. She is a real person.' He is explicitly rejecting the abstracted, data-driven approach and anchoring his pitch in a specific human experience.",
          coachingTip:
            "When a presenter deliberately opens with a person rather than a slide, they are using an expressive style. Their pitch succeeds through emotional connection, not through data volume.",
          styleContext:
            "Expressive communicators believe that people fund ideas they care about, not ideas they understand. The story creates the caring; the data confirms the opportunity.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does show care for the customer, which looks supportive. But the energy is high, the delivery is confident, and the intent is to persuade, not to empathise. This is a sales performance, not a caring conversation.",
          observation:
            "A supportive communicator would say 'I want to make sure we really understand Jess's situation.' Marcus uses Jess's story as a hook to sell his idea. The intent is persuasion, not understanding.",
          coachingTip:
            "Expressive communicators use stories to persuade. Supportive communicators use stories to connect. The difference is in what comes after the story - a pitch or a pause.",
          styleContext:
            "Expressive communicators in pitches use customer stories as emotional evidence. The story does the work that graphs and charts do for analytical pitchers.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not opened with a market sizing slide, a competitive analysis, or a financial model. The entire opening is designed to make the audience feel something, not know something.",
          observation:
            "There are no numbers in the opening (except '200,000' at the end, used for emotional scale rather than analytical precision). Marcus is building desire, not proving viability.",
          coachingTip:
            "Ask yourself: is this person proving an opportunity or selling a vision? Marcus is selling a vision, and the proof is in the appendix.",
          styleContext:
            "Expressive communicators believe that the best pitches make people want to say yes before they have seen the numbers. The numbers confirm a decision already emotionally made.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A sceptical board member has challenged Marcus's market assumptions mid-pitch. Marcus has acknowledged the question, pointed to the data in the appendix, and pivoted to customer conversations as evidence. How do you support him?",
      options: [
        {
          id: "s245-opt-a",
          text: "I was on three of those customer calls, and the consistent theme was urgency. These people are not passively interested - they are actively looking for a solution and told us they would switch from their current workaround immediately. That demand signal is stronger than any market report.",
          score: 10,
          result: "strong",
          explanation:
            "You add personal testimony that reinforces Marcus's narrative approach. By sharing what you heard directly from customers, you build on the expressive style with credible, human evidence.",
        },
        {
          id: "s245-opt-b",
          text: "The market data is in Appendix C - I can pull it up now if you would like to see the TAM breakdown and the competitive landscape analysis.",
          score: 5,
          result: "partial",
          explanation:
            "Helpful and addresses the concern directly, but it pulls the presentation into an analytical register. Marcus has deliberately kept the data in the appendix to maintain narrative momentum.",
        },
        {
          id: "s245-opt-c",
          text: "Market assumptions are always uncertain at this stage. I think we should run a proper feasibility study before committing any further time to this idea.",
          score: 0,
          result: "weak",
          explanation:
            "This validates the objection and proposes delay, which kills the momentum Marcus has built. It also suggests the idea is not ready for discussion, undermining the entire pitch.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write the follow-up email after his pitch, opening with the Jess story and listing three next steps. Write it in an expressive style that sustains momentum.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: Next Steps - The Jess Problem (and Our Solution)\n\nThank you to everyone who was in the room today. The energy was exactly what this idea needed.\n\nIf you remember one thing from the pitch, I hope it is Jess: a small business owner in Leeds spending four hours a week on something we could solve in ten minutes. She is real, and there are 200,000 people just like her.\n\nHere is where we go from here:\n\n1. Customer validation sprint (next two weeks): Five more in-depth conversations with potential users to pressure-test the core assumption. We already have three booked.\n2. Prototype build (weeks 3-6): A working demo that we can put in front of real users. Not a polished product - a proof of concept that lets us learn fast.\n3. Pilot with five users (weeks 7-10): Real people using the real thing. If it works for them, we have our green light.\n\nTotal investment to reach pilot stage: four people, ten weeks, and a modest development budget. The payoff if this works: a new revenue stream and a product that genuinely changes people's working lives.\n\nI would love to keep the momentum going. If you have questions, ideas, or want to be involved, please reach out. This is the kind of project that gets better with more voices around the table.\n\nLet us build something brilliant.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email sustains the pitch energy, anchors on the customer story, and makes the next steps feel exciting rather than administrative. Marcus would send this within an hour of the meeting.",
          observation:
            "You balanced emotional momentum with practical specifics. The three next steps have timelines and outcomes, but they are wrapped in language that sustains excitement.",
          coachingTip:
            "When writing follow-ups for expressive pitchers, lead with the emotional hook from the pitch, then make the next steps feel like an adventure rather than a process.",
          styleContext:
            "Expressive communicators know that pitch momentum dies within 48 hours. The follow-up email is not a summary - it is the next chapter of the story.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your email sustains the energy or just records the actions. If it reads like meeting notes, it loses the momentum Marcus built in the room.",
          observation:
            "If your email starts with 'Following today's meeting, please find the agreed next steps below', it has already lost the energy. Open with what made people care.",
          coachingTip:
            "Put the story before the steps. Remind people why they were excited before you tell them what happens next. That order sustains momentum.",
          styleContext:
            "Expressive communicators see follow-up emails as momentum tools, not record-keeping. The email should make people more excited than when they left the room.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too dry, or treats the follow-up as an administrative task rather than a continuation of the pitch narrative.",
          observation:
            "If your email could have been written by someone who was not in the room, it has missed the point. The follow-up should feel like it was written by someone who is still buzzing.",
          coachingTip:
            "Write the email as if you are texting a friend immediately after something exciting happened. Then add the professional next steps. That energy is what Marcus wants.",
          styleContext:
            "Expressive communicators believe that the best follow-up emails make people reply with 'I am in.' If the email only prompts a 'noted', it has failed.",
        },
      },
    },
  },

  // Scenario 246 - Nina Okafor, presentation, advanced
  {
    id: "scenario-246",
    title: "The Culture Change Keynote",
    context:
      "Nina has been asked to deliver a keynote at the company's annual conference on the theme of culture change. She has 20 minutes to inspire 400 people to embrace a new way of working.",
    chooseContext:
      "Halfway through the keynote, Nina has shared a vulnerable personal story about a time she resisted change herself. An audience member has publicly challenged whether leaders should admit to weakness. Nina needs to respond without losing the room.",
    rewriteContext:
      "Nina has asked you to write the closing section of the keynote - the final three minutes - that ties together her personal story, the company's journey, and a call to action that people will remember.",
    characterId: "nina-okafor",
    dialogue:
      "I could stand up here and show you a change management framework. I could give you the five steps, the seven habits, the twelve principles. But you have seen those slides before, and if frameworks changed cultures, we would have changed ours by now. So instead, I want to tell you something that happened to me.",
    chooseDialogue:
      "I appreciate the challenge, and I think it is exactly the kind of honesty we need more of. You are asking whether leaders should admit to weakness. Here is my answer: I am not admitting to weakness. I am admitting to being human. And I think the day we stop pretending leaders have all the answers is the day we start actually changing.",
    rewriteDialogue:
      "Write my closing three minutes. I want it to land. Bring back the personal story, connect it to what the company is going through, and end with something they will quote to each other in the corridor afterwards. Do not give me a generic call to action. Give me something specific and human.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has opened a keynote by deliberately rejecting frameworks and slides in favour of a personal story, arguing that human connection drives culture change more effectively than models. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina explicitly rejects the analytical approach (frameworks, steps, principles) and chooses storytelling and vulnerability instead. She is using expressive communication to create an emotional shift in a large audience.",
          observation:
            "Notice Nina's self-awareness: 'If frameworks changed cultures, we would have changed ours by now.' She is not just choosing a different method - she is arguing that the traditional method does not work. This is expressive confidence.",
          coachingTip:
            "When a speaker deliberately rejects conventional presentation formats in favour of personal narrative, they are operating at an advanced expressive level. They believe the story is the argument.",
          styleContext:
            "Expressive communicators at their most advanced use vulnerability as a leadership tool. Sharing a personal story in front of 400 people requires confidence and the belief that authenticity is more powerful than authority.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's willingness to be vulnerable looks supportive. But notice the scale and intent - she is performing vulnerability on a stage to inspire 400 people, not sharing quietly with a colleague. The energy is expressive.",
          observation:
            "A supportive communicator would share a personal story in a small group to build trust. Nina is sharing on stage to shift a culture. Same tool, different intent and scale.",
          coachingTip:
            "Expressive communicators use vulnerability strategically and publicly. Supportive communicators use vulnerability naturally and privately. The setting and intent reveal the style.",
          styleContext:
            "Expressive communicators see keynotes as opportunities to change the emotional weather of an entire organisation. They use every tool available, including their own story.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has explicitly rejected frameworks, data, and structured models. She believes that culture change happens through connection and inspiration, not through process and evidence.",
          observation:
            "There are no slides referenced, no statistics cited, and no models explained. Nina is arguing that the feeling in the room matters more than the content on the screen.",
          coachingTip:
            "Ask yourself: is this person trying to inform or to inspire? Nina is entirely focused on creating an emotional shift, not a knowledge transfer.",
          styleContext:
            "Expressive communicators believe that the best keynotes leave people feeling differently, not thinking differently. If the audience leaves with a fact, they might forget it. If they leave with a feeling, they carry it forward.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "An audience member has publicly challenged whether leaders should admit weakness. Nina has reframed it as admitting to being human rather than being weak. How do you support her from the audience?",
      options: [
        {
          id: "s246-opt-a",
          text: "I want to build on that. The most impactful leader I have ever worked for once told me she had no idea how to handle a situation and asked for my help. That single moment of honesty did more for my trust in her than two years of polished presentations ever did.",
          score: 10,
          result: "strong",
          explanation:
            "You add your own story that reinforces Nina's argument with personal evidence. This builds the emotional weight of her point and shows the audience that vulnerability is not just her approach - it is an effective leadership pattern.",
        },
        {
          id: "s246-opt-b",
          text: "Research actually supports this. Studies on psychological safety show that teams where leaders admit mistakes outperform teams where they do not. There is good evidence behind what Nina is saying.",
          score: 5,
          result: "partial",
          explanation:
            "True and relevant, but it shifts to an analytical register. Nina has deliberately chosen story over data. Adding research risks undermining her argument that frameworks and evidence are not enough.",
        },
        {
          id: "s246-opt-c",
          text: "I think there is a difference between being vulnerable in a keynote and being vulnerable with your team. Leaders still need to project confidence in day-to-day situations.",
          score: 0,
          result: "weak",
          explanation:
            "This partially sides with the challenger and introduces a caveat that undermines Nina's core argument. She is arguing for authenticity as a leadership principle, not just a keynote technique.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write the final three minutes of her keynote. Bring back the personal story, connect it to the company's journey, and end with a specific, human call to action. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "So let me bring you back to where I started. Three years ago, I sat in a meeting where someone proposed a change that scared me. Not a small tweak - a fundamental rethink of how my team worked. And my first instinct was to resist it. I found reasons it would not work. I picked holes in the logic. I was polite about it, but I was blocking it.\n\nAnd then a colleague said something that I have never forgotten. She said: 'Nina, you are not arguing against the idea. You are arguing against the discomfort of not knowing if it will work.'\n\nShe was right. And the moment I admitted that, everything changed. Not the process, not the strategy - me. I changed. And that made space for everyone around me to change too.\n\nThat is what this company is going through right now. We are not struggling with the plan. The plan is good. We are struggling with the discomfort of not knowing if it will work.\n\nSo here is my challenge to every person in this room. Before the end of this week, have one honest conversation with someone on your team. Not about KPIs. Not about deadlines. About how this change actually feels. Ask them what they are worried about. And then tell them what you are worried about.\n\nOne conversation. That is all. Because culture does not change in keynotes. It changes in corridors, in one-to-ones, in the moments where someone chooses honesty over performance.\n\nLet us choose honesty. Starting this week. Thank you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing brings back the personal story, connects it to the company's current moment, and ends with a specific, human call to action. Nina would deliver this and know the room felt it.",
          observation:
            "The call to action - one honest conversation before the end of the week - is specific enough to act on and human enough to feel meaningful. That is the sweet spot for expressive closings.",
          coachingTip:
            "When writing keynote closings for expressive communicators, the call to action must be specific and human. 'Be the change' is generic. 'Have one honest conversation this week' is actionable.",
          styleContext:
            "Expressive communicators end keynotes with moments, not messages. The test is whether people will remember how the closing made them feel, not what it said.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good energy, but check whether your closing has a specific call to action. If it ends with 'let us all commit to embracing change', it is inspiring but not actionable.",
          observation:
            "If people leave the room feeling good but not knowing what to do differently on Monday morning, the closing has entertained but not changed anything.",
          coachingTip:
            "Give people one specific thing to do. Not five things, not a framework - one human action that they can take within the week. That is how keynotes become culture shifts.",
          styleContext:
            "Expressive communicators know that inspiration without action is entertainment. The best closings give people both the feeling and the first step.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your closing is either too generic, too corporate, or fails to bring back the emotional thread that made the keynote powerful in the first place.",
          observation:
            "If your closing could be copied from any change management presentation, it does not belong in Nina's keynote. Her whole argument is that generic approaches do not work.",
          coachingTip:
            "Bring back the personal story. The audience connected with Nina the human, not Nina the executive. The closing should feel like the most honest two minutes in the entire conference.",
          styleContext:
            "Expressive communicators believe that the last words of a keynote are the ones people carry with them. If those words feel corporate, the whole presentation is forgotten by the car park.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (247-249)
  // ============================================

  // Scenario 247 - Tom Brennan, negotiation, foundation
  {
    id: "scenario-247",
    title: "The Flexible Working Request",
    context:
      "A team member has asked Tom to help them negotiate a flexible working arrangement with HR. The team member is anxious about the conversation and worried about being seen as less committed.",
    chooseContext:
      "During the meeting with HR, the HR representative has quoted policy that limits remote working to two days per week. The team member looks deflated. Tom needs to advocate without creating conflict.",
    rewriteContext:
      "Tom has asked you to draft a follow-up email to HR summarising the agreed arrangement and expressing gratitude for their flexibility, in a tone that preserves the relationship for future conversations.",
    characterId: "tom-brennan",
    dialogue:
      "Before we go in, I want you to know that whatever happens in this meeting, asking for flexibility is not a sign of weakness. It takes courage to say what you need. I will be right there with you, and if you need me to step in at any point, just give me a nod.",
    chooseDialogue:
      "I understand the policy, and I appreciate you explaining it so clearly. What I would love to explore is whether there is any room for a trial period. This is someone who consistently delivers above expectations, and I think a short pilot - say three months - would let us test whether an adapted arrangement works without anyone committing to a permanent change.",
    rewriteDialogue:
      "Write the follow-up to HR. Thank them genuinely - they did bend on the pilot idea, and I want them to know we appreciate it. Confirm the three-month trial terms, and make it clear that we are committed to making it work. Keep it warm and collaborative.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has prepared a team member for a difficult meeting by reassuring them that asking for flexibility is courageous, promising to be present throughout, and offering to step in if needed. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom focuses entirely on the team member's emotional readiness. He validates their anxiety, reframes their request as courageous, and offers quiet, steady support. This is classic supportive communication.",
          observation:
            "Notice Tom says 'just give me a nod' - he is giving the team member control over when support is needed. Supportive communicators empower rather than take over.",
          coachingTip:
            "When someone prepares a colleague for a difficult meeting by addressing their emotional state first and offering to follow their lead, they are using a supportive style.",
          styleContext:
            "Supportive communicators believe that people perform best in difficult conversations when they feel emotionally safe. They invest in that safety before the conversation even starts.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom does show warmth, which can look expressive. But notice the energy is calm and reassuring, not enthusiastic. Tom is not generating excitement - he is creating safety.",
          observation:
            "An expressive communicator would say 'You are going to be brilliant in there!' Tom says 'I will be right there with you.' The difference is between cheerleading and anchoring.",
          coachingTip:
            "Supportive communicators offer presence rather than praise. 'I am with you' is more supportive than 'You have got this.' The first is about them; the second is about you.",
          styleContext:
            "Supportive communicators in pre-meeting moments focus on reducing anxiety, not building confidence. They believe that when anxiety drops, natural competence emerges.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not coached the team member on their negotiating position, prepared counter-arguments, or strategised about how to handle objections. The focus is entirely emotional.",
          observation:
            "There is no discussion of tactics, policy wording, or fallback positions. Tom is managing the person's emotional state, not their negotiation strategy.",
          coachingTip:
            "Ask yourself: is this person preparing someone to perform or preparing them to cope? Tom is preparing them to cope, trusting that a calm person will negotiate better than an anxious one.",
          styleContext:
            "Supportive communicators believe that emotional preparation is more important than tactical preparation. A person who feels safe and valued will find the right words in the moment.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "HR has quoted a policy limiting remote work to two days. The team member looks deflated. Tom has proposed a three-month trial as a compromise. How do you support this approach?",
      options: [
        {
          id: "s247-opt-a",
          text: "I think a trial is a really thoughtful way to approach this. It shows that we respect the policy while also recognising that one size does not always fit every situation. And it gives everyone - including HR - a chance to see the data before making a permanent decision.",
          score: 10,
          result: "strong",
          explanation:
            "You validate both the policy and the person, frame the trial as respectful of everyone's position, and use collaborative language. This perfectly mirrors Tom's supportive negotiation style.",
        },
        {
          id: "s247-opt-b",
          text: "If the policy says two days, then two days is what we work with. We can always revisit the policy at the next review cycle if we want to push for broader changes.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic but deflating. Tom has just found a creative middle ground, and deferring entirely to the existing policy closes the door he has opened. It also leaves the team member feeling unsupported.",
        },
        {
          id: "s247-opt-c",
          text: "Honestly, this policy is outdated. Most modern companies offer full flexibility. We should be challenging this at a senior level rather than trying to work around it case by case.",
          score: 0,
          result: "weak",
          explanation:
            "This escalates the conversation into a policy challenge that HR did not ask for and Tom did not set up. It risks alienating the HR representative and making the team member's individual request feel like a political statement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a follow-up email to HR confirming the three-month trial arrangement and thanking them for their flexibility. Write it in a supportive style that preserves the relationship.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Flexible Working Trial - Thank You and Confirmation\n\nHi Sarah,\n\nThank you so much for the conversation today and for being so open to exploring a trial arrangement. We really appreciate your willingness to find a solution that works within the policy framework.\n\nJust to confirm what we agreed:\n- Three-month trial of an adapted working pattern (three days remote, two days in office)\n- Trial period: 1 April to 30 June\n- A review meeting at the end of June to assess how it has worked for the team, the individual, and the business\n- During the trial, all existing performance standards and availability expectations remain unchanged\n\nWe are fully committed to making this work, and we will be happy to share feedback at any point during the trial if that is helpful for your records.\n\nThank you again for your flexibility. It means a great deal, and it reflects well on how HR approaches these conversations.\n\nBest wishes,\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email confirms the practical arrangement while expressing genuine gratitude and maintaining the collaborative relationship with HR. Tom would send this immediately.",
          observation:
            "You thanked HR both at the start and end, offered to share feedback proactively, and included a personal note about how the approach reflects on them. This builds goodwill for future conversations.",
          coachingTip:
            "When writing follow-ups for supportive negotiators, always thank the other party for their flexibility, not just for the outcome. Acknowledging the effort preserves the relationship.",
          styleContext:
            "Supportive communicators see every negotiation as a relationship investment. How you close one conversation determines how the next one opens.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email feels genuinely grateful or just politely confirmatory. If it reads like a contract, it misses the relationship-building purpose Tom intended.",
          observation:
            "If your email confirms the terms but does not express warmth toward the HR representative personally, it functions as a record but not as a relationship tool.",
          coachingTip:
            "Add one sentence that acknowledges the HR person's effort or approach specifically. 'Your willingness to explore this creative solution made all the difference' turns a confirmation into a connection.",
          styleContext:
            "Supportive communicators use follow-up emails to strengthen relationships, not just to confirm decisions. The tone of the email is as important as its content.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too transactional, too demanding, or fails to acknowledge the flexibility HR showed in agreeing to the trial.",
          observation:
            "If your email reads like a legal confirmation of agreed terms without any warmth, it signals that the relationship was instrumental rather than genuine.",
          coachingTip:
            "Imagine you are writing to a colleague who did you a favour, not to a department that processed a request. That shift in framing changes everything.",
          styleContext:
            "Supportive communicators know that the tone of a confirmation email determines whether the other party feels like a partner or a service provider. Partners are more helpful next time.",
        },
      },
    },
  },

  // Scenario 248 - Leah Morgan, negotiation, intermediate
  {
    id: "scenario-248",
    title: "The Budget Reallocation Discussion",
    context:
      "Two project teams are competing for the same pool of budget. Leah has been asked to facilitate a discussion between both project leads to find a fair allocation that both can support.",
    chooseContext:
      "One project lead has become frustrated and accused the other of inflating their budget estimates to secure a larger share. The atmosphere has turned tense. Leah needs to restore trust and move the conversation forward.",
    rewriteContext:
      "Leah has asked you to write a summary of the agreed budget allocation that acknowledges both teams' constraints and positions the outcome as a shared decision rather than a compromise.",
    characterId: "leah-morgan",
    dialogue:
      "I know this feels competitive, and I understand why. When there is not enough budget for everything, it is natural to feel protective of your project. But I want us to approach this differently. Instead of each of you arguing for your share, I would like us to look at both projects together and work out what gives the organisation the best outcome overall.",
    chooseDialogue:
      "I can hear the frustration, and I want to address it before we go any further. Accusing someone of inflating numbers is a serious claim, and it is also understandable when you feel your own project is at risk. Can we take a step back? Both of you put genuine effort into your estimates. Let us look at them side by side with the same assumptions and see where the numbers align and where they diverge.",
    rewriteDialogue:
      "Write the summary so both leads feel it was fair. Acknowledge that neither team got everything they wanted, explain why the allocation serves the organisation, and make it clear this was a shared decision, not one team winning and one losing.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Leah has opened a budget allocation discussion by acknowledging the competitive pressure both teams feel, validating that protectiveness is natural, and reframing the conversation from competitive to collaborative. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah validates both teams' emotions, normalises the competitive feeling, and then gently redirects toward a collaborative frame. She manages the emotional temperature before engaging with the content.",
          observation:
            "Notice Leah says 'it is natural to feel protective.' She does not tell people to stop feeling competitive - she validates the feeling and then offers a different approach. This is supportive facilitation.",
          coachingTip:
            "When a facilitator opens by normalising emotions and then redirecting toward collaboration without dismissing the original feeling, they are using a supportive style.",
          styleContext:
            "Supportive communicators in budget discussions believe that if people feel their concerns are dismissed, they will fight harder. Validating first creates space for flexibility later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does show warmth and care, which can look expressive. But her energy is measured and calm, focused on lowering tension rather than building enthusiasm. She is stabilising, not energising.",
          observation:
            "An expressive communicator would say 'Imagine what we could achieve if we combined our resources!' Leah is more measured: 'Let us look at both projects together and work out the best outcome.'",
          coachingTip:
            "Supportive communicators in negotiations create calm. Expressive communicators create excitement. Leah is deliberately lowering the emotional temperature to enable rational discussion.",
          styleContext:
            "Supportive communicators believe that the best negotiation outcomes come from calm rooms, not energised ones. They invest in reducing tension before exploring solutions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not imposed an allocation, demanded that both sides accept a number, or treated this as a decision to be made quickly. She is managing the process through emotional awareness.",
          observation:
            "There is no predetermined outcome, no authority being exercised, and no pressure to decide quickly. Leah is creating conditions for a fair outcome, not imposing one.",
          coachingTip:
            "Ask yourself: is this person making the decision or enabling the decision? Leah is enabling both parties to reach a decision they can own.",
          styleContext:
            "Supportive communicators believe that budget decisions stick when both sides feel they were part of making them. Imposed allocations create resentment and workarounds.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One project lead has accused the other of inflating estimates. Leah has validated the frustration, reframed the accusation as understandable, and proposed a side-by-side review of estimates. How do you contribute?",
      options: [
        {
          id: "s248-opt-a",
          text: "I think Leah is right to pause here. Both of you clearly care deeply about your projects, and that is a good thing. Looking at the numbers together with shared assumptions is a fair way to address the concern without anyone feeling accused.",
          score: 10,
          result: "strong",
          explanation:
            "You validate both people, reframe their passion positively, and support Leah's proposed process. This maintains the collaborative atmosphere without dismissing the accusation.",
        },
        {
          id: "s248-opt-b",
          text: "Let us just look at the actual numbers. If the estimates are fair, they will stand up to scrutiny. If they are inflated, the data will show it. We do not need to guess.",
          score: 5,
          result: "partial",
          explanation:
            "Practical but blunt. It addresses the factual question without managing the emotional damage of the accusation. Leah has paused to address the relationship before returning to the data.",
        },
        {
          id: "s248-opt-c",
          text: "Accusing someone of inflating numbers is unprofessional. I think we should address that behaviour before we continue with the budget discussion.",
          score: 0,
          result: "weak",
          explanation:
            "This escalates the conflict by labelling the behaviour as unprofessional. Leah has deliberately reframed the accusation as an understandable reaction to pressure. Calling it out as a behaviour issue contradicts her approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a budget allocation summary that acknowledges both teams' constraints, explains the rationale, and positions the outcome as a shared decision. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Budget Allocation Summary - Joint Decision\n\nThank you both for the honest and constructive discussion today. This was not an easy conversation, and the fact that you engaged so openly speaks well of both teams.\n\nAgreed allocation:\n- Project Alpha: GBP 85,000 (original request: GBP 110,000)\n- Project Beta: GBP 75,000 (original request: GBP 90,000)\n\nHow we reached this:\nBoth teams reviewed their estimates using shared cost assumptions. The reductions reflect areas where phasing could spread costs across two quarters without impacting delivery quality. Both leads agreed that the phased approach was preferable to cutting scope.\n\nWhat this means:\n- Neither project received its full request, but both received enough to deliver their core objectives on time\n- The phased elements will be revisited at the Q3 budget review with priority consideration\n- Both project leads shaped this outcome together, and both have confirmed they can deliver within these parameters\n\nThis was a shared decision, not a compromise imposed from above. Thank you both for approaching it with such professionalism and goodwill.\n\nNext review: 1 July. If anything changes before then, please flag it early so we can adapt together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary acknowledges the difficulty, frames the outcome as jointly owned, and ensures neither team feels like they lost. Leah would share this with confidence.",
          observation:
            "The phrase 'a shared decision, not a compromise imposed from above' is exactly the framing Leah wanted. It reinforces that both teams had agency in the outcome.",
          coachingTip:
            "When writing allocation summaries for supportive facilitators, always make clear that both parties shaped the outcome. The language of shared ownership prevents resentment.",
          styleContext:
            "Supportive communicators believe that how a decision is described affects whether people support it. Framing matters as much as the numbers.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your summary frames the outcome as shared or imposed. If it reads like a directive from above, the collaborative spirit of the meeting is lost.",
          observation:
            "If your summary says 'the following allocation has been agreed' without explaining how both teams contributed to it, it feels imposed rather than co-created.",
          coachingTip:
            "Add language that credits both teams for their flexibility. 'Both leads agreed' is more powerful than 'it was decided' because it attributes ownership.",
          styleContext:
            "Supportive communicators know that the same budget split can feel like a fair outcome or an unfair imposition depending entirely on how it is communicated.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either takes sides, feels punitive, or fails to acknowledge the emotional effort both teams invested in reaching agreement.",
          observation:
            "If your summary simply lists numbers without context, it reduces a difficult human conversation to a spreadsheet line. Both teams deserve to see their experience reflected.",
          coachingTip:
            "Add one sentence acknowledging the difficulty of the conversation and the professionalism both teams showed. This transforms a record into a relationship document.",
          styleContext:
            "Supportive communicators write summaries that both parties can read and feel respected by. If either team feels reduced to a budget line, the summary has failed.",
        },
      },
    },
  },

  // Scenario 249 - David Chen, negotiation, advanced
  {
    id: "scenario-249",
    title: "The Merger Integration Terms",
    context:
      "Two companies are merging, and David has been asked to facilitate the negotiation of integration terms between both leadership teams. Tensions are high because each side fears losing autonomy and key personnel.",
    chooseContext:
      "The acquiring company's CEO has said they expect the target company to adopt their systems within six months. The target company's leadership team feels this is too aggressive and risks losing key talent. David needs to bridge the gap.",
    rewriteContext:
      "David has asked you to draft a joint statement from both leadership teams outlining the agreed integration principles, timelines, and commitments to staff - in a tone that reassures employees on both sides.",
    characterId: "david-chen",
    dialogue:
      "I want to start by acknowledging something that is in the room but no one has said out loud: both teams are afraid of losing what made their company special. That is not weakness - it is a sign that you built something worth protecting. My job today is to help us find an integration path that protects the best of both.",
    chooseDialogue:
      "I hear the urgency on the systems timeline, and I understand the business logic behind it. I also hear genuine concern about talent retention, and that is a risk we cannot afford to ignore. What if we agree on the destination - full systems integration - but negotiate the journey? A phased approach that starts with the least disruptive systems and gives people time to adapt.",
    rewriteDialogue:
      "Write the joint statement together with both teams' input. It needs to feel honest about the change ahead while also being reassuring about what will not change. Mention people first, systems second. And make it clear that both leadership teams endorsed this together.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has opened a merger integration negotiation by naming the unspoken fear in the room - that both sides are afraid of losing what made their company special - and framing that fear as a sign of strength. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David names the unspoken emotion, validates it, and reframes it positively before any business discussion begins. He creates psychological safety in a high-stakes negotiation by making it safe to admit fear.",
          observation:
            "Notice David says 'that is not weakness - it is a sign that you built something worth protecting.' He transforms a potential vulnerability into a point of pride. This is advanced supportive facilitation.",
          coachingTip:
            "When a negotiator opens by naming the emotional undercurrent and validating it before discussing terms, they are operating in a supportive style at an advanced level.",
          styleContext:
            "Supportive communicators in merger negotiations understand that the biggest risk is not in the terms - it is in the emotions. If people feel their identity is threatened, they will resist even fair terms.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David does show warmth and emotional awareness, which can look expressive. But notice the intent is to create safety, not to generate enthusiasm. David is calming the room, not energising it.",
          observation:
            "An expressive communicator would say 'Imagine what we can build together!' David says 'I want to help us protect the best of both.' The focus is on preservation and safety, not vision and excitement.",
          coachingTip:
            "In high-stakes negotiations, supportive communicators lower the emotional temperature. Expressive communicators raise it. David is deliberately creating calm.",
          styleContext:
            "Supportive communicators in mergers believe that people need to feel safe before they can be creative about solutions. Fear prevents flexibility; safety enables it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not imposed a timeline, demanded concessions, or treated the negotiation as a transaction. He is managing the human dynamics that will determine whether the integration succeeds or fails.",
          observation:
            "There is no discussion of synergy targets, cost savings, or operational efficiencies. David is addressing the fear that sits underneath all of those conversations.",
          coachingTip:
            "Ask yourself: is this person negotiating terms or managing the relationship between the parties? David is firmly managing the relationship, knowing that trust determines the quality of the terms.",
          styleContext:
            "Supportive communicators in mergers know that the integration terms matter less than whether both sides trust each other enough to implement them in good faith.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The acquiring CEO wants systems integration in six months. The target company fears losing talent. David has proposed agreeing the destination but negotiating the journey. How do you contribute?",
      options: [
        {
          id: "s249-opt-a",
          text: "I think David has found the right frame here. Both sides want integration to work - the question is pace, not direction. If we start with the systems that have the least impact on daily workflows, we give people time to adjust while still showing progress toward the goal.",
          score: 10,
          result: "strong",
          explanation:
            "You reinforce David's bridging approach, validate both positions, and add a practical suggestion that respects both the urgency and the concern. This is collaborative negotiation.",
        },
        {
          id: "s249-opt-b",
          text: "Six months is ambitious but achievable if we commit the resources. Perhaps we should focus on what is needed to hit that timeline rather than whether the timeline is right.",
          score: 5,
          result: "partial",
          explanation:
            "Practical but dismissive of the talent concern. David specifically flagged talent retention as a risk that cannot be ignored. Moving straight to execution planning bypasses that.",
        },
        {
          id: "s249-opt-c",
          text: "I think the target company needs to accept that integration is happening and focus on making the best of it. Resisting the timeline just delays the inevitable.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the target company's concerns entirely and frames them as resistance. David has worked to validate both sides - telling one side to accept and comply destroys the trust he has built.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to draft a joint statement from both leadership teams about the integration, putting people first and systems second. Write it in a supportive style that reassures employees on both sides.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "A Message from Both Leadership Teams\n\nWe know that mergers create uncertainty, and we want to be honest about that. Change is coming, and some of it will feel uncomfortable. But we also want you to know what is not changing: our commitment to the people who built both companies.\n\nHere is what we have agreed together:\n\nPeople first:\n- No involuntary redundancies in the first 12 months\n- All existing employment terms and benefits are protected during the integration period\n- Every team member will have a named contact for questions about how the merger affects their role\n\nHow integration will work:\n- We are taking a phased approach over 18 months, starting with shared finance and HR systems\n- Customer-facing teams will be the last to change, giving us time to get the foundations right\n- Both companies' ways of working will be evaluated on merit, not on which company originated them\n\nWhat we ask of you:\n- Ask questions. If something concerns you, raise it. Your line manager, your HR contact, or either leadership team is available.\n- Be patient with each other. Everyone is adjusting, and grace goes a long way during transitions.\n- Judge this process by what happens, not by what you fear might happen.\n\nThis statement was endorsed by both leadership teams. We are in this together, and we are committed to getting it right.\n\nWith thanks and respect,\n[Both CEO signatures]",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your statement puts people first, acknowledges the uncertainty honestly, makes specific commitments, and reads as a genuine joint message. David would share this with pride.",
          observation:
            "The line 'judge this process by what happens, not by what you fear might happen' is powerful. It acknowledges the fear without dismissing it and redirects attention toward observable reality.",
          coachingTip:
            "When writing joint statements for supportive communicators, always acknowledge the difficulty before presenting the commitments. The credibility of the reassurance depends on the honesty of the acknowledgement.",
          styleContext:
            "Supportive communicators know that merger communications are judged by their honesty, not their optimism. Employees can smell corporate spin instantly. Genuine acknowledgement builds trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your statement feels genuinely co-authored or whether it reads like one company's message with the other's name attached. Both leadership teams need to see themselves in it.",
          observation:
            "If your statement uses language like 'our new colleagues' for one company's employees, it creates an in-group and out-group dynamic that the joint framing is supposed to prevent.",
          coachingTip:
            "Use 'we' and 'both' consistently. Avoid any language that positions one company's employees differently from the other's. The statement should feel like it was written by one team, not two.",
          styleContext:
            "Supportive communicators in mergers know that language creates reality. If the statement talks about two groups, people will feel like two groups. If it talks about one group, people will start to feel that way.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your statement is either too corporate, too one-sided, or fails to acknowledge the genuine uncertainty employees are feeling.",
          observation:
            "If your statement starts with 'We are excited to announce our merger' without acknowledging that many employees are not excited at all, it will be received with cynicism.",
          coachingTip:
            "Open with the truth: mergers are unsettling. Then say what is being done about it. Then say what will not change. This sequence builds trust through honesty.",
          styleContext:
            "Supportive communicators believe that merger communications fail when they prioritise corporate messaging over human truth. Employees need to see their reality reflected before they can hear the plan.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (250-252)
  // ============================================

  // Scenario 250 - Rachel Finch, remote, foundation
  {
    id: "scenario-250",
    title: "The Remote Onboarding Checklist",
    context:
      "Rachel has been asked to design and communicate a structured onboarding process for new team members joining remotely. She wants every step documented, timed, and accountable.",
    chooseContext:
      "A new joiner has messaged Rachel saying they feel lost in their first week because they do not know who to contact for different types of questions. Rachel needs to address this gap in the onboarding process.",
    rewriteContext:
      "Rachel has asked you to draft a revised onboarding email that includes a detailed week-one schedule, a contact matrix showing who handles what, and clear success criteria for the first 30 days.",
    characterId: "rachel-finch",
    dialogue:
      "The current onboarding process has 23 steps across five days, but no one has mapped who owns each step or how the new joiner knows when they have completed it successfully. I want to build a checklist where every item has an owner, a completion criterion, and a time estimate.",
    chooseDialogue:
      "That should not have happened, and the fact that it did tells me there is a gap in the documentation. I am going to build a contact matrix - a single-page reference showing the five most common question types and exactly who to go to for each. No more guessing.",
    rewriteDialogue:
      "Rewrite the onboarding email from scratch. Day-by-day schedule for week one, with time slots, meeting links, and pre-reading. A contact matrix as an attachment. And a 30-day success criteria section so the new joiner knows exactly what 'good' looks like by the end of month one.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has responded to a remote onboarding gap by analysing the existing 23-step process, identifying that no step has an owner or completion criterion, and proposing a structured checklist with accountability and time estimates. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's response to a process gap is to analyse the existing process, identify what is missing, and build a more rigorous version. She focuses on documentation, ownership, and measurable completion criteria. This is analytical communication applied to process design.",
          observation:
            "Notice Rachel does not say 'onboarding needs to be better.' She identifies that 23 steps exist but none has an owner, a criterion, or a time estimate. The diagnosis is specific and the solution is systematic.",
          coachingTip:
            "When someone responds to a problem by analysing the existing process and proposing structured improvements with measurable criteria, they are using an analytical style.",
          styleContext:
            "Analytical communicators see process gaps as evidence of missing documentation, not missing effort. They fix problems by building better systems, not by asking people to try harder.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about what needs to happen, which looks direct. But the focus is on building a rigorous system rather than driving a quick fix. She wants completeness, not speed.",
          observation:
            "A direct communicator would say 'Assign an onboarding buddy and move on.' Rachel wants a 23-step checklist with owners, criteria, and time estimates. The thoroughness is the distinguishing feature.",
          coachingTip:
            "Direct communicators fix process problems with quick decisions. Analytical communicators fix process problems with better documentation. Rachel is firmly in the documentation camp.",
          styleContext:
            "Analytical communicators believe that well-documented processes prevent recurring problems. A quick fix solves today's issue; a documented process prevents tomorrow's.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on the new joiner's feelings, checked in on their emotional experience, or prioritised making them feel welcome. Her focus is on fixing the system that let them down.",
          observation:
            "There is no empathetic outreach, no reassurance, and no relationship-building. Rachel is solving the problem at the process level, not the personal level.",
          coachingTip:
            "Ask yourself: is this person addressing the person or the process? Rachel is fixing the process so that no future joiner has the same experience.",
          styleContext:
            "Analytical communicators show care by building better systems. A new joiner who has a clear checklist, a contact matrix, and documented criteria feels supported even without a warm phone call.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A new joiner has said they feel lost because they do not know who to contact. Rachel is building a contact matrix. How do you help?",
      options: [
        {
          id: "s250-opt-a",
          text: "I have pulled together the five most common question categories from the last three new joiners' Slack messages. IT setup, HR admin, project access, team introductions, and tool training. I can map each to a named contact with response time expectations if that helps.",
          score: 10,
          result: "strong",
          explanation:
            "You provide categorised, evidence-based input that directly feeds into Rachel's contact matrix. Using historical data from previous joiners makes the categories reliable rather than assumed.",
        },
        {
          id: "s250-opt-b",
          text: "I think the most important thing right now is to call the new joiner and make sure they are okay. The matrix can wait - they need to feel supported.",
          score: 5,
          result: "partial",
          explanation:
            "Caring and appropriate in the short term, but Rachel is trying to fix the systemic issue, not just the immediate one. Both can happen in parallel, but suggesting the matrix can wait misreads her priority.",
        },
        {
          id: "s250-opt-c",
          text: "Honestly, most people figure out who to contact within a week or two. A formal matrix might be overkill for something that usually resolves itself.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the need for documentation and suggests that confusion is normal. Rachel sees the confusion as a process failure that should be eliminated, not accepted.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to rewrite the onboarding email with a day-by-day week-one schedule, a contact matrix, and 30-day success criteria. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Your Week One Schedule, Contacts, and 30-Day Success Criteria\n\nWelcome to the team. Below is everything you need to navigate your first week and your first month.\n\nWeek One Schedule:\n\nMonday:\n- 09:00-09:30: Welcome call with line manager (Teams link attached)\n- 09:30-10:30: IT setup - follow the checklist in Appendix A. Contact: IT helpdesk (response within 1 hour)\n- 11:00-12:00: HR induction (pre-reading: Employee Handbook, pages 1-15)\n- 14:00-15:00: Team introductions - informal video call with immediate team\n\nTuesday:\n- 09:00-10:00: Platform training session 1 of 3 (link attached)\n- 10:30-11:30: Project overview with project lead (pre-reading: Project Brief v2.1)\n- 14:00-15:00: Buddy check-in with assigned onboarding buddy\n\n[Wednesday-Friday follows same structured format]\n\nContact Matrix:\n| Question Type | Contact | Response Time |\n|---|---|---|\n| IT/access issues | IT helpdesk | Within 1 hour |\n| HR/payroll/benefits | Sarah Chen, HR | Within 4 hours |\n| Project-specific | Your project lead | Within 2 hours |\n| Team/social | Your onboarding buddy | Same day |\n| Process/tools | Rachel Finch | Within 4 hours |\n\n30-Day Success Criteria:\nBy day 30, you should be able to:\n1. Navigate all core platforms independently (verified by completing the platform certification quiz with 80%+)\n2. Attend and contribute to team stand-ups without prompting\n3. Complete one small task end-to-end with documented feedback from your reviewer\n4. Identify your key stakeholders and have had an introductory conversation with each\n\nIf anything on this list is unclear or if you are falling behind on any criterion, raise it with your line manager or your buddy immediately. There is no penalty for asking for help - there is only a penalty for staying stuck in silence.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured, every item has a time, owner, and criterion, and the 30-day success criteria are measurable. Rachel would send this as the new standard onboarding email.",
          observation:
            "You included response time expectations in the contact matrix, which removes ambiguity about how quickly new joiners can expect help. This level of detail is exactly what analytical communicators build.",
          coachingTip:
            "When writing onboarding documentation for analytical communicators, every element should answer: what, when, who, and how do I know it is done. Missing any of those creates a gap.",
          styleContext:
            "Analytical communicators believe that well-documented onboarding processes reduce anxiety more effectively than warm welcomes. When people know exactly what to expect, they feel in control.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your schedule includes all four elements: time, topic, pre-reading, and contact. Missing any one creates a gap the new joiner will have to fill by asking.",
          observation:
            "If your Monday schedule says '09:00 - Welcome call' without a link or contact name, the new joiner's first experience is figuring out how to join a call they cannot find.",
          coachingTip:
            "For each calendar item, include the meeting link, the preparation required, and who to contact if something goes wrong. Completeness prevents confusion.",
          styleContext:
            "Analytical communicators know that the quality of an onboarding schedule is tested by whether a new joiner can follow it without asking a single question. That is the standard to aim for.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either lacks sufficient detail, uses vague language, or provides a schedule so high-level that the new joiner would still feel lost following it.",
          observation:
            "If your email says 'You will meet the team this week' without specifying when, where, and with whom, it recreates the exact problem Rachel is trying to solve.",
          coachingTip:
            "Every vague statement is a question the new joiner will have to ask. Replace 'you will receive access to systems' with 'IT will grant access by 10am Monday - contact helpdesk if not received.'",
          styleContext:
            "Analytical communicators see vague onboarding emails as the root cause of new joiner confusion. The email is the process - if the email is incomplete, the process is broken.",
        },
      },
    },
  },

  // Scenario 251 - Owen Grant, remote, intermediate
  {
    id: "scenario-251",
    title: "The Remote Meeting Effectiveness Audit",
    context:
      "Owen has been asked to review the team's remote meeting practices and propose improvements. He has spent two weeks observing meetings, collecting data on duration, agenda usage, attendance, and action tracking.",
    chooseContext:
      "Owen has presented his findings to the team lead, showing that 40% of meetings run over time, 60% have no agenda, and only 25% produce documented actions. The team lead is defensive, saying the team is too busy for meeting admin.",
    rewriteContext:
      "Owen has asked you to draft a proposal email to the team outlining three specific changes to remote meeting practices, with evidence from the audit supporting each recommendation.",
    characterId: "owen-grant",
    dialogue:
      "I have observed 32 remote meetings over the past two weeks and tracked five metrics for each: whether an agenda was shared in advance, whether the meeting started and ended on time, whether actions were documented, whether all attendees contributed, and whether a follow-up was sent. The patterns are clear and they point to three specific changes we should make.",
    chooseDialogue:
      "I understand the concern about time, and that is exactly the point. The audit shows that meetings without agendas run 35% longer on average. Introducing a two-line agenda template - which takes less than a minute to complete - would save the team an estimated four hours per week. The data does not support the idea that meeting admin creates additional work. It reduces it.",
    rewriteDialogue:
      "Write the proposal email. Three recommendations, each with the audit data that supports it and an estimate of time saved. Include a one-month trial period so the team can test the changes before committing permanently. I want the email to feel evidence-based, not prescriptive.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has observed 32 meetings over two weeks, tracked five specific metrics for each, and identified patterns that support three evidence-based recommendations. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's approach is defined by systematic observation, quantified metrics, and data-driven conclusions. He has spent two weeks collecting evidence before making a single recommendation. This is textbook analytical communication.",
          observation:
            "Notice Owen lists the five specific metrics he tracked. Analytical communicators make their methodology transparent because they know that the credibility of the conclusion depends on the rigour of the measurement.",
          coachingTip:
            "When someone shares their methodology alongside their findings, they are using an analytical style. Engage with the data first, then the recommendations.",
          styleContext:
            "Analytical communicators believe that recommendations without supporting data are just opinions. They invest heavily in evidence collection so their proposals are hard to dismiss.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Owen is proposing clear changes, which looks direct. But notice the approach: two weeks of observation, five tracked metrics, and 32 data points. A direct communicator would have proposed the changes after attending three bad meetings.",
          observation:
            "A direct communicator would say 'Our meetings are wasting time. Here are three rules, starting Monday.' Owen builds the case through data, not authority.",
          coachingTip:
            "Direct communicators propose changes based on experience. Analytical communicators propose changes based on evidence. Owen has evidence for every recommendation.",
          styleContext:
            "Analytical communicators see patience in evidence-gathering as the foundation of credibility. Rushing to recommendations without data undermines the entire approach.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on how people feel about meetings, whether the team enjoys the current format, or how changes might affect morale. His approach is entirely data-driven.",
          observation:
            "There is no survey about meeting satisfaction, no conversation about preferences, and no attempt to understand the team's emotional relationship with their meeting culture.",
          coachingTip:
            "Ask yourself: is this person measuring feelings or measuring outcomes? Owen is measuring outcomes - duration, agenda usage, action tracking - not satisfaction or engagement.",
          styleContext:
            "Analytical communicators believe that meeting effectiveness is an objective, measurable quality. How people feel about meetings matters, but what meetings produce matters more.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team lead has pushed back, saying the team is too busy for meeting admin. Owen has shown that meetings without agendas run 35% longer. How do you support his position?",
      options: [
        {
          id: "s251-opt-a",
          text: "Owen's data matches what I have seen too. Last Thursday's project sync had no agenda, ran 25 minutes over, and we still left without clear actions. Compare that to Tuesday's sprint review, which had a two-line agenda and finished five minutes early with documented next steps.",
          score: 10,
          result: "strong",
          explanation:
            "You provide a specific, concrete example from the team's own experience that validates Owen's data. Using real meetings the team lead will recognise makes the evidence personal and undeniable.",
        },
        {
          id: "s251-opt-b",
          text: "I think we should try it for a couple of weeks and see if it actually makes a difference. Theory is one thing, but the team needs to experience the improvement to believe it.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable suggestion, but Owen has already proposed a one-month trial. More importantly, framing the evidence as 'theory' undervalues the two weeks of data collection Owen has completed.",
        },
        {
          id: "s251-opt-c",
          text: "Not everyone works the same way. Some people find agendas restrictive and prefer more organic conversations. We should be careful about imposing too much structure on a team that is used to flexibility.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the data in favour of preferences. Owen has shown that the current flexible approach costs four hours per week. Defending the status quo without engaging with the evidence is exactly the response his audit was designed to counter.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to draft a proposal email with three recommendations, supporting audit data for each, estimated time savings, and a one-month trial period. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Subject: Remote Meeting Improvements - Evidence-Based Proposal\n\nFollowing the two-week meeting audit (32 meetings observed, 5 metrics tracked per meeting), I am proposing three changes to our remote meeting practices. Each recommendation is supported by audit data and includes an estimated time saving.\n\nRecommendation 1: Mandatory two-line agenda for all meetings\nFinding: 60% of meetings had no agenda. Meetings without agendas ran 35% longer on average (42 minutes vs 31 minutes).\nProposal: A two-line agenda template (objective + expected outcome) shared at least 30 minutes before the meeting.\nEstimated weekly saving: 4 hours across the team.\n\nRecommendation 2: Documented actions within 10 minutes of meeting close\nFinding: Only 25% of meetings produced documented actions. Of those that did, 85% of actions were completed on time. Of those that did not, only 40% were completed on time.\nProposal: The meeting organiser captures actions in a shared document and posts them in the relevant Slack channel within 10 minutes of the meeting ending.\nEstimated weekly saving: 2 hours (reduced follow-up chasing).\n\nRecommendation 3: Default meeting length of 25 minutes (not 30) and 50 minutes (not 60)\nFinding: 40% of meetings ran over their scheduled time. Analysis showed that most overruns occurred in the final 5 minutes due to late-emerging topics that should have been separate conversations.\nProposal: Shorten default durations to build in transition time and force tighter agendas.\nEstimated weekly saving: 1.5 hours.\n\nTotal estimated weekly saving: 7.5 hours across the team.\n\nProposed trial period: 1 April to 30 April. At the end of the trial, I will re-run the audit using the same five metrics and compare results.\n\nI am happy to walk through the raw data with anyone who would like to see it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal is structured, every recommendation has supporting data, and the trial period includes a clear measurement plan. Owen would circulate this to the team with confidence.",
          observation:
            "The commitment to re-run the audit using the same metrics is particularly strong. It shows scientific rigour - the same methodology applied before and after to measure the actual impact of the changes.",
          coachingTip:
            "When writing proposals for analytical communicators, always include a measurement plan. Showing how you will evaluate the change is as important as proposing it.",
          styleContext:
            "Analytical communicators see proposals without measurement plans as incomplete. If you cannot prove the change worked, you have not finished the job.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every recommendation has quantified supporting evidence. If any recommendation relies on 'best practice' or 'common sense' rather than audit data, it weakens the whole proposal.",
          observation:
            "If one of your recommendations says 'agendas are widely recognised as good practice' instead of citing the 35% duration difference, it undermines the evidence-based approach Owen has built.",
          coachingTip:
            "Replace every appeal to common sense with a reference to audit data. The whole point of collecting data for two weeks is to replace assumptions with evidence.",
          styleContext:
            "Analytical communicators see appeals to best practice as a substitute for evidence. If the data supports the recommendation, cite the data. If it does not, reconsider the recommendation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal either lacks data, relies on assertions rather than evidence, or presents recommendations without showing how they connect to the audit findings.",
          observation:
            "If your proposal says 'meetings should have agendas because they are more productive' without citing the specific duration and action-completion data, it has wasted the entire audit.",
          coachingTip:
            "Every recommendation should follow the pattern: finding, proposal, estimated impact. If any element is missing, the recommendation is incomplete.",
          styleContext:
            "Analytical communicators judge proposals by the strength of the evidence behind each recommendation. Unsupported proposals, no matter how sensible, are treated as opinions.",
        },
      },
    },
  },

  // Scenario 252 - Fiona Banks, remote, advanced
  {
    id: "scenario-252",
    title: "The Remote Team Performance Framework",
    context:
      "Fiona has been asked to design a performance measurement framework for a fully remote team where traditional observation-based management is not possible. She needs to propose metrics that are fair, measurable, and acceptable to the team.",
    chooseContext:
      "Fiona has presented her draft framework to the team. One team member has objected, saying that measuring output feels like surveillance and erodes trust. Fiona needs to address the concern without weakening the framework.",
    rewriteContext:
      "Fiona has asked you to draft the final version of the framework document, incorporating the team's feedback and including a clear explanation of why each metric was chosen, how it will be measured, and what safeguards exist against misuse.",
    characterId: "fiona-banks",
    dialogue:
      "I have designed a framework around four measurement categories: output quality, deadline adherence, collaboration contribution, and professional development. Each category has two to three specific metrics, each metric has a data source, and each data source is something the team already produces - I have not added any new tracking or monitoring.",
    chooseDialogue:
      "I hear the concern, and I want to address it directly. This framework does not track your activity, your keystrokes, or your hours online. It measures four things you are already doing. The data sources are your own work outputs, your own project trackers, and your own peer feedback. Nothing is being observed that you are not already choosing to share. If any metric feels like surveillance, I want to know which one and I will explain the reasoning or remove it.",
    rewriteDialogue:
      "Write the framework document with the team's feedback incorporated. For each metric, explain why it was chosen, where the data comes from, and what safeguards prevent misuse. Include the team's right to challenge any metric they feel is unfair. I want this to feel transparent, not imposed.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has designed a remote performance framework with four categories, specific metrics for each, identified data sources, and deliberately used existing outputs rather than adding new tracking. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's framework is systematic, evidence-based, and deliberately designed to be transparent and measurable. She has thought through not just what to measure but how each metric is sourced and why no new tracking is needed. This is advanced analytical communication applied to a sensitive topic.",
          observation:
            "Notice Fiona explicitly states that all data sources are things the team already produces. She anticipated the surveillance concern before it was raised and designed the framework to address it. This is analytical thinking applied proactively.",
          coachingTip:
            "When someone designs a measurement system that anticipates objections and builds safeguards into the structure itself, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators believe that the best frameworks are the ones that answer every question before it is asked. Transparency of methodology is not a nice-to-have - it is the foundation of credibility.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is decisive about the framework design, which looks direct. But the depth of her methodology - four categories, specific metrics, identified data sources, and proactive safeguards - goes well beyond directness into analytical territory.",
          observation:
            "A direct communicator would say 'Here are four things we are measuring. Questions?' Fiona explains the methodology, sources, and rationale for each. The thoroughness is the distinguishing feature.",
          coachingTip:
            "Direct communicators implement measurement systems. Analytical communicators design them with transparent methodology. Fiona is designing, not implementing.",
          styleContext:
            "Analytical communicators see performance frameworks as scientific instruments. The methodology must be as rigorous as the measurements themselves, or the results are meaningless.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on how the team feels about being measured, whether the framework supports their wellbeing, or how it affects team dynamics. Her focus is on fairness through methodology, not through emotional consideration.",
          observation:
            "There is no discussion of how measurement affects morale, no empathetic framing of the change, and no acknowledgement of the emotional impact of being assessed remotely.",
          coachingTip:
            "Ask yourself: is this person designing for feelings or for fairness? Fiona is designing for fairness through rigorous methodology, trusting that a fair system will feel fair.",
          styleContext:
            "Analytical communicators believe that the best way to address concerns about measurement is to make the methodology transparent, not to soften the message about being measured.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has said that measuring output feels like surveillance. Fiona has explained that the framework uses existing outputs and offered to explain or remove any specific metric. How do you support her?",
      options: [
        {
          id: "s252-opt-a",
          text: "Fiona is right that nothing new is being tracked. I have reviewed the data sources and they are all things we already produce: delivery reports, project tracker updates, and quarterly peer feedback. If anything, this framework gives us more visibility into how our work is valued, not less.",
          score: 10,
          result: "strong",
          explanation:
            "You verify Fiona's claim independently, which adds credibility, and you reframe the framework as a benefit to the team. This supports the analytical approach with additional evidence.",
        },
        {
          id: "s252-opt-b",
          text: "I understand the concern. Maybe we should vote as a team on whether to adopt the framework or not. That way everyone has a say in whether this goes ahead.",
          score: 5,
          result: "partial",
          explanation:
            "Democratic, but Fiona has been asked to design a framework, not to seek consensus on whether performance should be measured. A vote risks derailing a well-researched proposal based on one person's concern.",
        },
        {
          id: "s252-opt-c",
          text: "I agree with the concern. Remote workers should be trusted to deliver without being monitored. If we trust people, we do not need metrics to prove they are working.",
          score: 0,
          result: "weak",
          explanation:
            "This conflates performance measurement with monitoring, which is exactly the misunderstanding Fiona has addressed. It also ignores the fact that even trusted professionals benefit from clear, fair performance criteria.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write the final performance framework document with rationale for each metric, data sources, safeguards against misuse, and the team's right to challenge. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Remote Team Performance Framework - Final Version\n\nPurpose: To provide fair, transparent, and measurable performance criteria for a fully remote team, using only data the team already produces.\n\nDesign principle: No new tracking, monitoring, or surveillance tools have been introduced. All metrics are derived from existing work outputs.\n\n1. Output Quality (weight: 35%)\nMetrics:\n- Peer review scores on deliverables (source: quarterly peer feedback, existing process)\n- Client satisfaction ratings where applicable (source: post-project client surveys, existing process)\nRationale: Quality of output is the most direct measure of individual contribution and is already captured through existing review processes.\nSafeguard: Peer review scores are anonymised and averaged across a minimum of three reviewers to prevent individual bias.\n\n2. Deadline Adherence (weight: 25%)\nMetrics:\n- Percentage of assigned tasks completed by agreed deadline (source: project tracker, updated by the individual)\n- Average lead time on time-sensitive requests (source: project tracker timestamps)\nRationale: In a remote environment, reliability is a core professional standard. This metric uses self-reported data from tools the team already manages.\nSafeguard: Deadlines must be mutually agreed, not unilaterally assigned. Any deadline disputed as unreasonable can be flagged before it is counted.\n\n3. Collaboration Contribution (weight: 25%)\nMetrics:\n- Participation in team meetings (attendance and documented contribution, source: meeting notes)\n- Support provided to colleagues (source: quarterly peer feedback, specific question on collaboration)\nRationale: Remote working can reduce visibility of collaborative behaviour. This metric ensures that supporting others is valued alongside individual output.\nSafeguard: Attendance alone is not sufficient. The metric assesses documented contribution, not mere presence. Peer feedback is anonymised.\n\n4. Professional Development (weight: 15%)\nMetrics:\n- Completion of agreed development actions from previous review (source: development plan, jointly agreed)\n- Knowledge sharing with the team (source: team log of presentations, training sessions, or shared resources)\nRationale: Continuous development is essential in a remote environment where informal learning from observation is limited.\nSafeguard: Development actions are jointly agreed with the line manager. No one is assessed against objectives they did not help set.\n\nTeam Right to Challenge:\nAny team member may formally challenge any metric they believe is unfair, inappropriate, or being misapplied. Challenges are reviewed by the team lead and HR within 10 working days. The metric in question is suspended from individual assessments during the review period.\n\nReview cycle: The framework will be reviewed after 6 months. Metrics that do not produce meaningful differentiation or that generate consistent challenges will be revised or removed.\n\nThis framework was developed with input from the full team. Changes to any metric require team consultation before implementation.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your framework is rigorous, transparent, and includes safeguards that address every reasonable concern about fairness. Fiona would present this to leadership and the team with full confidence.",
          observation:
            "The challenge mechanism is particularly well-designed. By suspending disputed metrics during review, you prevent unfair assessment while maintaining the overall framework. This is analytical thinking applied to fairness.",
          coachingTip:
            "When writing performance frameworks for analytical communicators, every metric needs a rationale, a source, and a safeguard. Missing any element creates a vulnerability the framework cannot afford.",
          styleContext:
            "Analytical communicators believe that the credibility of a performance framework depends on its transparency. A framework that cannot explain why each metric exists should not include it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every metric has all three elements: rationale, data source, and safeguard. Missing the safeguard leaves the metric vulnerable to the surveillance objection Fiona has already faced.",
          observation:
            "If any metric relies on a data source that is not already produced by the team, it violates the design principle and will be challenged.",
          coachingTip:
            "For each metric, verify that the data source exists, that the team already produces it, and that there is a mechanism to prevent misuse. All three must be present.",
          styleContext:
            "Analytical communicators design frameworks like engineers design bridges - every element must bear scrutiny under load. A framework with a weak metric fails the whole structure.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your framework either lacks safeguards, uses vague metrics, or fails to explain the methodology behind each measurement.",
          observation:
            "If your framework includes a metric like 'demonstrates commitment to the team' without specifying how it is measured, it is subjective and open to bias - exactly what the framework is supposed to prevent.",
          coachingTip:
            "Replace every subjective metric with an observable, measurable one. 'Shows initiative' becomes 'number of process improvements proposed and implemented.' If you cannot measure it, it does not belong in the framework.",
          styleContext:
            "Analytical communicators see subjective metrics as the weakest point in any performance framework. Subjectivity invites bias, and bias destroys trust - especially in remote teams where visibility is already limited.",
        },
      },
    },
  },
];
