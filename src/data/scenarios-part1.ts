import { Scenario } from "@/types";

export const SCENARIOS_PART1: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (1-6)
  // ============================================

  // Scenario 01 - Jordan Cole, meeting, foundation
  {
    id: "scenario-01",
    title: "Cutting Through the Agenda",
    context:
      "You are midway through a weekly operations meeting. The discussion has drifted into background context and Jordan wants to refocus the group.",
    chooseContext:
      "Jordan has refocused the meeting and is now pressing you directly for a recommendation. The rest of the team is watching to see how you handle the pressure.",
    rewriteContext:
      "The meeting is wrapping up. Jordan has moved on to the logistics review and expects a concise, no-nonsense update from you.",
    characterId: "jordan-cole",
    dialogue:
      "We've spent fifteen minutes on context. I need the three options on the table and a recommendation by the end of this meeting.",
    chooseDialogue:
      "Right, so give me the options. What have we got and which one are you backing?",
    rewriteDialogue:
      "Good. Now, while we're here, I need a status update on the logistics review. Keep it tight.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has interrupted the discussion to refocus the group. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Jordan's insistence on options and a recommendation, combined with impatience for lengthy context, is classic direct-style behaviour.",
          observation:
            "Notice how Jordan skipped pleasantries and went straight to what was needed: options and a decision.",
          coachingTip:
            "When you spot someone cutting through discussion to demand outcomes, that is a strong signal of a direct communicator.",
          styleContext:
            "Direct communicators value efficiency and results. They want to know the bottom line, not the backstory.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both direct and analytical styles are task-focused, but an analytical communicator would more likely ask for data or evidence rather than demanding a recommendation under time pressure.",
          observation:
            "Jordan's emphasis is on speed and decision-making, not on thoroughness or detail.",
          coachingTip:
            "If someone is pushing for a quick decision, they are likely direct. If they are asking for more data before deciding, they are probably analytical.",
          styleContext:
            "Direct and analytical styles can look similar because both are task-oriented, but they differ in pace. Direct wants speed; analytical wants depth.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan's behaviour here is far from people-focused or relationship-driven. The focus is entirely on outcomes and efficiency.",
          observation:
            "There is no warmth, consensus-seeking, or concern for how others feel in Jordan's statement.",
          coachingTip:
            "Look for the core driver: is the person focused on results (direct), ideas (expressive), people (supportive), or accuracy (analytical)?",
          styleContext:
            "Direct communicators prioritise getting things done. They can seem blunt, but their intent is efficiency, not rudeness.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has demanded three options and a recommendation before the meeting ends. How do you respond?",
      options: [
        {
          id: "s01-opt-a",
          text: "Three options: A cuts cost by 12%, B improves turnaround by two days, C does both but needs more budget. I recommend B for the fastest impact.",
          score: 10,
          result: "strong",
          explanation:
            "This is concise, structured, and leads with a clear recommendation. It mirrors Jordan's direct style perfectly.",
        },
        {
          id: "s01-opt-b",
          text: "Sure, I can pull those together. I think there are probably a few angles we could look at, and I'll try to have something ready soon.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the request but is vague on timing and content. A direct communicator wants specifics now, not promises for later.",
        },
        {
          id: "s01-opt-c",
          text: "I appreciate you want to move forward, but I think it's important we hear from everyone first so the team feels included in the decision.",
          score: 0,
          result: "weak",
          explanation:
            "While inclusive, this response ignores Jordan's need for speed and outcomes. It risks being perceived as stalling.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked for a status update on the logistics review. Write your response in a way that matches Jordan's direct communication style. Be concise, lead with outcomes, and include a clear recommendation.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "The logistics review is complete. We can cut delivery times by 18% if we switch to regional hubs. I recommend we pilot the change in the North region next quarter.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response is tight, outcome-focused, and includes a clear next step. Jordan would appreciate this.",
          observation:
            "You led with the result and followed with a specific recommendation, which is exactly what a direct communicator wants.",
          coachingTip:
            "With direct communicators, always front-load the outcome. Save the reasoning for follow-up questions.",
          styleContext:
            "Direct communicators process information best when it starts with the conclusion and works backwards if needed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your response could be tighter. Look for hedging words or unnecessary preamble you could trim.",
          observation:
            "You included some useful content but may have buried the key message under extra context.",
          coachingTip:
            "Try the 'newspaper headline' test: could someone read just your first sentence and know the outcome? If not, restructure.",
          styleContext:
            "Direct communicators often stop listening after the first sentence if it does not contain the key point.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too long, too tentative, or lacks a clear recommendation. Direct communicators need you to lead with the answer.",
          observation:
            "Phrases like 'I think perhaps' or 'we could maybe' signal uncertainty, which frustrates a direct communicator.",
          coachingTip:
            "Strip out hedging language. Replace 'I think we could possibly' with 'I recommend we'. Be bold and specific.",
          styleContext:
            "Direct communicators interpret hedging as a lack of confidence or preparation. State your position clearly.",
        },
      },
    },
  },

  // Scenario 02 - Jordan Cole, one-to-one, intermediate
  {
    id: "scenario-02",
    title: "The Quarterly Review",
    context:
      "You are in a one-to-one with Jordan to discuss your team's quarterly performance. Jordan has a packed schedule and has already glanced at the clock twice.",
    chooseContext:
      "You have shared the headline and Jordan now knows you are behind target. Jordan has cut off your explanation and wants the gap identified and the fix laid out immediately.",
    rewriteContext:
      "Jordan is about to leave for the next meeting but has one final question about the software rollout. You have about thirty seconds of attention left.",
    characterId: "jordan-cole",
    dialogue:
      "Give me the headline. Are we on track or not? And if not, what's the fix?",
    chooseDialogue:
      "So we're behind. Fine. I don't need the backstory. Just tell me where the gap is and what you're doing about it.",
    rewriteDialogue:
      "One more thing. The software rollout. Is it ready to go or not? Yes or no, then next steps.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Jordan has asked for the headline and wants to know whether targets are on track. What communication style is this?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan wants the bottom line immediately, with a solution already in hand if there is a problem. That is textbook direct behaviour.",
          observation:
            "The phrase 'give me the headline' is a classic cue. Jordan does not want a narrative; Jordan wants the verdict.",
          coachingTip:
            "When someone asks you to 'cut to the chase' or 'give me the headline', they are telling you they communicate in a direct style.",
          styleContext:
            "Direct communicators often feel that long explanations waste time. They trust you to have done the thinking and just want the conclusion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but not quite. An analytical communicator would want to see the data behind the headline, not just the headline itself.",
          observation:
            "Jordan is not asking for evidence or methodology. Jordan is asking for a binary answer and a solution.",
          coachingTip:
            "The distinguishing factor is what they ask for next. Direct people want the fix. Analytical people want the root cause analysis.",
          styleContext:
            "Both direct and analytical communicators are task-focused, but they process information differently. Direct wants speed; analytical wants certainty.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not the right style here. Jordan's behaviour shows no interest in relationships, feelings, or collaborative brainstorming.",
          observation:
            "There are no relational cues, no warmth, and no invitation for discussion. This is purely outcome-driven communication.",
          coachingTip:
            "Ask yourself: is this person focused on people and feelings, or on tasks and results? Jordan is clearly in the latter camp.",
          styleContext:
            "Direct communicators do care about people, but they show it through action and results rather than words and warmth.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants the headline on quarterly performance. How do you respond?",
      options: [
        {
          id: "s02-opt-a",
          text: "We're behind by 8% on the revenue target. The gap is in enterprise sales. I've already restructured the pipeline and we'll close it within six weeks.",
          score: 10,
          result: "strong",
          explanation:
            "Direct, honest, and solution-ready. You gave the headline, identified the gap, and presented the fix. This is exactly what Jordan needs.",
        },
        {
          id: "s02-opt-b",
          text: "Overall things are going reasonably well. There are a few areas where we're a bit behind, but the team has been working really hard and I think we'll get there.",
          score: 5,
          result: "partial",
          explanation:
            "This is vague and hedging. Jordan does not want reassurance; Jordan wants numbers and a plan. The sentiment is fine but the delivery is wrong for this style.",
        },
        {
          id: "s02-opt-c",
          text: "Before I answer that, I think it's important to acknowledge how much pressure the team has been under. They've dealt with a lot of change this quarter and I want to make sure we recognise their effort.",
          score: 0,
          result: "weak",
          explanation:
            "While empathetic, this dodges the question entirely. Jordan will interpret this as stalling. Save the people context for after you have delivered the headline.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked whether a new software rollout is ready to launch. Write a concise, direct-style response that gives a clear answer and next step.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "The rollout is ready. Testing is complete and all teams are trained. I recommend we launch on Monday and review adoption rates after two weeks.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. You answered the question immediately, confirmed readiness, and proposed a clear timeline. Jordan would be satisfied with this.",
          observation:
            "Your response has no filler, no hedging, and a firm recommendation with a measurable follow-up.",
          coachingTip:
            "This is the pattern to follow with direct communicators: answer, evidence, recommendation, timeline.",
          styleContext:
            "Direct communicators make faster decisions when you remove ambiguity. A clear 'yes, here's the plan' is far more effective than 'it depends'.",
        },
        partial: {
          result: "partial",
          explanation:
            "You addressed the question but could sharpen the recommendation or remove some softening language.",
          observation:
            "Look for places where you qualified your answer unnecessarily. Direct communicators read qualifiers as doubt.",
          coachingTip:
            "Challenge yourself: can you cut your response by a third and still keep the meaning? If so, do it.",
          styleContext:
            "Direct communicators often equate brevity with confidence. Shorter, clearer answers build trust with this style.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response did not clearly answer the question or lacked a firm recommendation. Direct communicators need certainty.",
          observation:
            "Avoid starting with caveats or context. Lead with the answer, then add detail only if asked.",
          coachingTip:
            "Practice the 'yes or no first' rule. Start with the verdict, then explain. Never make a direct communicator wait for the answer.",
          styleContext:
            "When a direct communicator asks a yes/no question, they expect a yes/no answer first. Everything else is supporting detail.",
        },
      },
    },
  },

  // Scenario 03 - Sam Hartley, sales, foundation
  {
    id: "scenario-03",
    title: "Closing the Deal",
    context:
      "You are on a sales call with Sam, who is evaluating your proposal for a new service contract. Sam has been direct from the start and wants to know what makes your offer different.",
    chooseContext:
      "You have delivered your opening pitch and Sam is unimpressed. Sam is comparing you against three other providers and wants a concrete reason to choose you over the competition.",
    rewriteContext:
      "Sam is still on the call but you can tell the window is closing. Sam wants the commercial benefit distilled into a single paragraph before making a decision.",
    characterId: "sam-hartley",
    dialogue:
      "I've seen four proposals this week. Tell me in thirty seconds why yours is the one I should sign.",
    chooseDialogue:
      "Alright, that's your pitch. But everyone claims they're different. Why should I pick you over the other three?",
    rewriteDialogue:
      "OK, I'm still listening. Summarise the commercial benefit in one paragraph. No fluff.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Sam has given you thirty seconds to differentiate your proposal. What communication style is Sam using?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's time constraint and competitive framing are hallmarks of a direct communicator who values speed and results.",
          observation:
            "Sam is not asking for a relationship, a detailed breakdown, or a brainstorm. Sam wants the differentiator, fast.",
          coachingTip:
            "When someone sets a tight time limit and frames the conversation competitively, they are almost certainly direct.",
          styleContext:
            "Direct communicators respect people who can make a compelling case quickly. Waffle loses their attention and their trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Not quite. While analytical communicators also evaluate proposals carefully, they would ask for data and evidence, not a thirty-second pitch.",
          observation:
            "Sam's approach is about speed and impact, not depth and detail.",
          coachingTip:
            "An analytical buyer would say 'walk me through the methodology'. A direct buyer says 'tell me why in thirty seconds'. The pace is the clue.",
          styleContext:
            "In sales situations, the buyer's style often shows through in how they frame their questions. Direct buyers want the headline; analytical buyers want the detail.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match here. Sam's behaviour is task-focused and competitive, with no emphasis on relationships or collaboration.",
          observation:
            "There is no warmth, no team language, and no concern for how you feel. Sam is purely evaluating your proposition.",
          coachingTip:
            "Focus on what the person is asking for. Sam wants a competitive differentiator, not rapport or consensus.",
          styleContext:
            "Direct communicators in sales situations are often the most challenging to engage because they give you very little time. But they are also the fastest to decide when convinced.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants to know why your proposal stands out from four competitors. How do you respond?",
      options: [
        {
          id: "s03-opt-a",
          text: "Three reasons: 20% faster delivery than the industry average, a performance guarantee in the contract, and a dedicated account lead from day one.",
          score: 10,
          result: "strong",
          explanation:
            "Punchy, structured, and outcome-focused. You gave Sam exactly what was asked for: a clear, concise differentiator with proof points.",
        },
        {
          id: "s03-opt-b",
          text: "That's a great question. We pride ourselves on building strong relationships with our clients and really getting to know what makes their business tick. We'd love the chance to learn more about yours.",
          score: 0,
          result: "weak",
          explanation:
            "This is relationship-focused and vague. Sam did not ask about your culture; Sam asked why your proposal is the best. This misses the mark entirely.",
        },
        {
          id: "s03-opt-c",
          text: "We have a strong track record and I'm confident we can meet your needs. I'd be happy to send over some case studies and references so you can see our work in more detail.",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but not sharp enough. Sam wants the differentiator now, not a follow-up. The response is too passive for a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to summarise the commercial benefit of your proposal in one paragraph. Write a response that matches Sam's direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Our proposal delivers a 15% cost reduction in year one, guaranteed. We achieve this through automated workflows and a dedicated delivery team. The result is faster output with lower overhead.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You led with the commercial benefit, backed it with the mechanism, and stated the result. This is exactly how to communicate with a direct buyer.",
          observation:
            "Your response is confident, specific, and free of hedging language. Sam would engage with this immediately.",
          coachingTip:
            "In sales conversations with direct communicators, always lead with the number or the outcome. Make the value obvious in the first sentence.",
          styleContext:
            "Direct buyers make decisions based on impact and confidence. If you sound certain and the numbers are strong, you will hold their attention.",
        },
        partial: {
          result: "partial",
          explanation:
            "You touched on the right themes but could be more specific or more confident in your language.",
          observation:
            "Check whether your response includes vague phrases like 'we believe' or 'we hope to'. Replace them with certainties.",
          coachingTip:
            "Swap 'we aim to reduce costs' for 'we reduce costs by X%'. Specificity builds credibility with direct communicators.",
          styleContext:
            "Direct communicators are more persuaded by concrete outcomes than by aspirational language.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too vague or too long for a direct communicator. Sam would lose interest before the end.",
          observation:
            "Look for filler phrases, excessive context, or a missing bottom-line statement.",
          coachingTip:
            "Ask yourself: 'What is the one number or outcome Sam cares about?' Lead with that and build outward.",
          styleContext:
            "In commercial conversations, direct communicators respect specificity. Vague promises signal that you have not done the work.",
        },
      },
    },
  },

  // Scenario 04 - Sam Hartley, conflict, intermediate
  {
    id: "scenario-04",
    title: "The Deadline Dispute",
    context:
      "Sam has called you into a meeting because a project deadline was missed. Sam is visibly frustrated and wants to know what went wrong and how it will be fixed.",
    chooseContext:
      "Sam has heard your initial explanation but is not interested in the backstory. Sam wants the root cause and the corrective action laid out right now.",
    rewriteContext:
      "Sam has accepted your fix for the first issue but has now raised a second late deliverable from the same week. Sam expects the same level of clarity on what happened and what has changed.",
    characterId: "sam-hartley",
    dialogue:
      "We missed the deadline. I don't want excuses. Tell me what happened and how you're going to make sure it doesn't happen again.",
    chooseDialogue:
      "Right. So what's the cause and what's the fix? I need both, right now.",
    rewriteDialogue:
      "And while we're at it, there's the client deliverable that was also late last week. Same question. What happened and what have you changed?",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Sam is visibly frustrated about a missed deadline and has demanded answers. What communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's frustration is channelled into a demand for facts and a fix. There is no interest in feelings or process; just accountability and a solution.",
          observation:
            "The phrase 'I don't want excuses' is a strong direct-style marker. Sam wants ownership and a plan, not an explanation of circumstances.",
          coachingTip:
            "When a direct communicator is frustrated, they become even more results-focused. Match their energy with clarity and solutions, not empathy.",
          styleContext:
            "Under pressure, direct communicators often become more blunt. This is not personal; it is their way of regaining control of the situation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An analytical communicator might also want to know what went wrong, but they would ask for a root cause analysis rather than demanding a fix on the spot.",
          observation:
            "Sam's focus is on preventing recurrence, not on understanding every detail of what happened.",
          coachingTip:
            "Notice the difference: 'tell me what happened and how to fix it' (direct) versus 'walk me through the timeline so we can identify the failure point' (analytical).",
          styleContext:
            "Both styles want answers, but direct wants them fast and forward-looking, while analytical wants them thorough and evidence-based.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not the right style. Sam is not seeking emotional connection, consensus, or a collaborative brainstorm. This is a demand for accountability.",
          observation:
            "There is no softening, no checking in on how you feel, and no invitation to explore options together.",
          coachingTip:
            "When someone is being blunt and solution-focused under pressure, they are direct. When someone is checking how you feel, they are supportive or expressive.",
          styleContext:
            "Direct communicators handle conflict by confronting it head-on. They want the problem acknowledged and solved, not discussed at length.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam is frustrated about a missed deadline and wants to know what happened and how you will prevent it recurring. How do you respond?",
      options: [
        {
          id: "s04-opt-a",
          text: "I understand your frustration, and I think it's important that we take some time to talk about how the team is feeling. This has been a really tough period for everyone.",
          score: 0,
          result: "weak",
          explanation:
            "This redirects to feelings when Sam has explicitly asked for facts and a fix. It will be perceived as deflecting from the issue.",
        },
        {
          id: "s04-opt-b",
          text: "A supplier hold-up was flagged too late. I've put a weekly supplier checkpoint in place and we'll hit the revised deadline of the 28th.",
          score: 10,
          result: "strong",
          explanation:
            "This takes ownership, explains the cause briefly, and presents a concrete fix with a new deadline. It matches Sam's direct style perfectly.",
        },
        {
          id: "s04-opt-c",
          text: "It's a complex situation and there were a number of contributing factors. I could put together a detailed report covering everything that led to the delay if that would be helpful.",
          score: 5,
          result: "partial",
          explanation:
            "This is too slow and too analytical for Sam. A report might be useful later, but right now Sam wants the answer and the fix in the room.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to explain why a client deliverable was late. Write a direct-style response that takes ownership, states the cause, and provides a clear corrective action.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "The deliverable was late because we underestimated the review cycle. I've added a two-day buffer to all future timelines and assigned a single owner for sign-off. The revised version goes to the client tomorrow.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. You owned the issue, explained the cause concisely, and committed to a specific corrective action. This is exactly how to handle conflict with a direct communicator.",
          observation:
            "Your response is accountable and forward-looking, which builds trust with a direct communicator even when delivering bad news.",
          coachingTip:
            "When things go wrong, direct communicators respect honesty and a fix. They lose trust when they hear excuses or vague promises.",
          styleContext:
            "Direct communicators handle mistakes pragmatically. Acknowledge it, fix it, move on. Dwelling on the problem frustrates them.",
        },
        partial: {
          result: "partial",
          explanation:
            "You addressed the issue but could be more specific about the fix or more confident in your language.",
          observation:
            "Check whether you included unnecessary caveats or failed to commit to a specific timeline.",
          coachingTip:
            "A strong direct-style response always ends with a concrete commitment: what you will do and by when.",
          styleContext:
            "Direct communicators track commitments. If you say 'soon' or 'shortly', they will push back. Give them a date.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response does not take clear ownership or provide a specific fix. This will not satisfy a direct communicator under pressure.",
          observation:
            "Look for blame-shifting, vague language, or a missing action plan in your response.",
          coachingTip:
            "Use this formula: 'Here's what happened. Here's what I've changed. Here's the new deadline.' Keep it to three sentences if you can.",
          styleContext:
            "In conflict situations, direct communicators want to see that you can handle pressure. A clear, accountable response demonstrates that.",
        },
      },
    },
  },

  // Scenario 05 - Alex Tran, email, advanced
  {
    id: "scenario-05",
    title: "The Executive Summary",
    context:
      "Alex has asked you to draft an email to the senior leadership team summarising the outcome of a programme review. The email needs to be concise and focused on decisions, not background.",
    chooseContext:
      "Alex has shared the programme review outcome with you and is waiting for your draft. Alex has stressed that the email must lead with the recommendation and contain no preamble.",
    rewriteContext:
      "Alex has approved your first draft and now needs a separate stakeholder email confirming the project decision. The same rules apply: five lines maximum, decision first.",
    characterId: "alex-tran",
    dialogue:
      "I need this in their inbox by 5pm. Keep it to five lines maximum. Lead with the decision, not the journey.",
    chooseDialogue:
      "Here's the programme review outcome. Draft something that leads with the recommendation. No background, no preamble. Go.",
    rewriteDialogue:
      "Good. Now I need you to write a separate email to stakeholders confirming the project decision. Same rules. Five lines, decision first.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "email",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Alex has asked you to write a five-line email that leads with the decision. What communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Alex's instruction to lead with the decision and keep it to five lines is a textbook direct-style communication brief.",
          observation:
            "Notice the constraint: 'five lines maximum' and 'lead with the decision, not the journey'. Alex values impact per word.",
          coachingTip:
            "Direct communicators often give writing instructions that reveal their style. If they say 'keep it short', they mean shorter than you think.",
          styleContext:
            "Direct communicators read emails quickly. If the key message is not in the first line, they may not reach it at all.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. An analytical communicator would also want a structured email, but they would likely ask for supporting data or a methodology section, not just five lines.",
          observation:
            "Alex is prioritising brevity and decision-focus, which is more direct than analytical.",
          coachingTip:
            "Analytical communicators want completeness. Direct communicators want conciseness. The instruction 'five lines maximum' is a direct cue.",
          styleContext:
            "Both styles value precision, but they express it differently. Direct means fewer words with more impact. Analytical means more detail with more structure.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Alex's instruction is entirely about efficiency and impact. There is no mention of people, feelings, or collaboration.",
          observation:
            "An expressive or supportive communicator would be more likely to ask you to include context, acknowledgements, or team contributions.",
          coachingTip:
            "Focus on what the person is asking you to prioritise. Alex wants the decision front and centre, with no padding.",
          styleContext:
            "Direct communicators believe that the best communication is the shortest communication that gets the job done.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex needs you to draft a five-line email to senior leaders about a programme review outcome. How do you approach it?",
      options: [
        {
          id: "s05-opt-a",
          text: "I'd write: 'We recommend Option B, delivering a 22% efficiency gain at no additional cost. Implementation begins 1 April, go-live 1 July. No further approvals needed.'",
          score: 10,
          result: "strong",
          explanation:
            "This is tight, decision-led, and action-oriented. It respects Alex's constraints and gives senior leaders exactly what they need.",
        },
        {
          id: "s05-opt-b",
          text: "I'd want to include some background context so the leadership team understands how we arrived at the recommendation. Maybe a paragraph on the review process and the options we considered.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Alex's instruction. Alex said 'lead with the decision, not the journey'. Adding background defeats the purpose.",
        },
        {
          id: "s05-opt-c",
          text: "I'll keep it short and focus on the recommendation. I might stretch to six or seven lines to include the key metrics, but I'll make sure the decision is clear at the top.",
          score: 5,
          result: "partial",
          explanation:
            "Good instinct to lead with the decision, but Alex said five lines. Pushing to seven shows you have not fully adapted to the brief. Tighten it up.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a short email to stakeholders confirming a project decision. Write the email body in five lines or fewer, leading with the decision. Use a direct communication style throughout.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "We have approved the consolidation of the three regional offices into a single hub. This will reduce operating costs by 30% annually. The transition begins on 1 May and completes by 31 August. All affected teams will receive individual briefings next week. No action is required from you at this stage.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your email is concise, decision-led, and leaves no ambiguity. Alex would be confident sending this to senior leaders without changes.",
          observation:
            "Every sentence carries weight. There is no filler, no hedging, and a clear call to action (or confirmation that none is needed).",
          coachingTip:
            "When writing for direct communicators, draft your email, then challenge every sentence: does this add value or is it padding?",
          styleContext:
            "Direct communicators judge emails by their signal-to-noise ratio. Every sentence should earn its place.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email covers the right ground but could be tighter. Check for unnecessary words, qualifiers, or context that could be cut.",
          observation:
            "You may have included background that belongs in a follow-up document rather than the headline email.",
          coachingTip:
            "Read your email aloud. If you find yourself saying 'I could cut that', cut it. Direct communicators always prefer less.",
          styleContext:
            "In executive communications, every word matters. Direct communicators appreciate emails they can read in under ten seconds.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too long, too vague, or does not lead with the decision. It does not meet Alex's brief.",
          observation:
            "Check whether your first sentence contains the decision. If it starts with context or background, restructure it.",
          coachingTip:
            "Use the inverted pyramid: most important information first, supporting detail second, background last (or not at all).",
          styleContext:
            "Senior leaders reading an email from a direct communicator expect to know the decision by the end of the first sentence.",
        },
      },
    },
  },

  // Scenario 06 - Alex Tran, feedback, intermediate
  {
    id: "scenario-06",
    title: "Post-Presentation Feedback",
    context:
      "Alex has just watched your team present a programme update to a client. The presentation ran over time and the client looked disengaged. Alex pulls you aside afterwards.",
    chooseContext:
      "Alex has told you the presentation was too long and the client lost interest. Alex now wants to know your specific plan for fixing the deck and your timeline for delivering the revised version.",
    rewriteContext:
      "Alex has accepted your restructuring plan and now needs you to send a follow-up email to the client. The email should acknowledge the overrun and confirm next steps in a professional tone.",
    characterId: "alex-tran",
    dialogue:
      "That presentation lost them after slide four. Next time, cut the first ten slides and start with the outcomes. I want a revised deck by Thursday.",
    chooseDialogue:
      "So what's your plan? How are you going to restructure it, and when will I see the new version?",
    rewriteDialogue:
      "One more thing. I need you to send a follow-up to the client. Acknowledge it ran long, confirm next steps. Keep it short and professional.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has given you blunt, specific feedback about a presentation and set a deadline for the revised version. What communication style is this?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's feedback is specific, unpadded, and action-oriented. There is no softening, no question about how you feel, and a clear deadline.",
          observation:
            "Alex told you exactly what was wrong ('lost them after slide four'), exactly what to change ('cut the first ten slides'), and when ('by Thursday').",
          coachingTip:
            "Direct feedback from a direct communicator is efficient, not unkind. They assume you can handle it and move on.",
          styleContext:
            "Direct communicators give feedback the way they want to receive it: specific, fast, and actionable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Analytical communicators also give specific feedback, but they would typically reference data or client feedback rather than their own observation.",
          observation:
            "Alex is giving a personal assessment based on reading the room, not a structured analysis of engagement metrics.",
          coachingTip:
            "If feedback includes phrases like 'the data suggests' or 'the feedback forms show', it is analytical. If it is 'I saw this, fix it', it is direct.",
          styleContext:
            "Direct feedback tends to be observational and prescriptive. Analytical feedback tends to be evidence-based and diagnostic.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Alex's feedback has no warmth, no emotional check-in, and no collaborative reframing. It is task-focused and directive.",
          observation:
            "An expressive communicator might say 'I felt the energy drop'. A supportive communicator might ask 'how do you think it went?' Alex simply tells you what to fix.",
          coachingTip:
            "Pay attention to whether the person invites your perspective or tells you theirs. Direct communicators typically tell, then move on.",
          styleContext:
            "Direct communicators believe that clear feedback is a kindness. They would rather tell you straight than let you repeat the mistake.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has told you the presentation lost the client after slide four and wants a revised deck by Thursday. How do you respond?",
      options: [
        {
          id: "s06-opt-a",
          text: "Noted. I'll restructure the deck to lead with outcomes and cut the background section. I'll have the revised version to you by Wednesday for review before Thursday.",
          score: 10,
          result: "strong",
          explanation:
            "Concise, action-oriented, and even beats the deadline by building in a review window. This shows you heard the feedback and will act on it.",
        },
        {
          id: "s06-opt-b",
          text: "Thanks for the feedback. I wonder if it might be worth discussing what the client was expecting. Perhaps we could set up a meeting to go through the deck together and work out the best approach.",
          score: 5,
          result: "partial",
          explanation:
            "This is collaborative and thoughtful, but it is too slow for Alex. Alex has already told you the fix. Proposing a meeting to discuss it further will feel like unnecessary delay.",
        },
        {
          id: "s06-opt-c",
          text: "I felt the presentation was actually quite thorough. The client might have been distracted for other reasons. I think the content was solid and we should consider keeping most of it.",
          score: 0,
          result: "weak",
          explanation:
            "This pushes back on clear feedback without offering an alternative plan. Alex will see this as defensiveness and a failure to adapt.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to send a follow-up message to the client acknowledging that the presentation ran long and confirming next steps. Write it in a direct style that is concise and action-focused.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Thank you for your time today. We recognise the presentation ran longer than planned. We are sending a streamlined summary focused on outcomes and next steps by end of day Friday. Please let us know if there are specific areas you would like us to prioritise.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message acknowledges the issue without over-apologising, and commits to a clear next step with a deadline.",
          observation:
            "The tone is professional and confident. You did not dwell on the problem; you moved straight to the solution.",
          coachingTip:
            "In client communications, direct style means acknowledging issues factually and pivoting to action. Avoid lengthy apologies.",
          styleContext:
            "Direct communicators believe that fixing the problem is more valuable than apologising for it. Show the client what you are doing next.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the basics but may include unnecessary apology or lack a specific deadline.",
          observation:
            "Check whether you committed to a date and a deliverable. Vague promises like 'we'll follow up soon' do not land with direct communicators.",
          coachingTip:
            "Replace 'we'll get back to you shortly' with 'we'll send the revised summary by Friday at 5pm'. Specificity shows control.",
          styleContext:
            "Clients, like colleagues, respond better to concrete commitments than to vague assurances.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too apologetic, too vague, or does not include a clear next step. It would not satisfy Alex's expectations.",
          observation:
            "Over-apologising can undermine confidence. A direct communicator would want you to own the issue briefly and move forward.",
          coachingTip:
            "Follow this structure: acknowledge, commit, deliver. One sentence for each. That is all you need.",
          styleContext:
            "Direct-style client communication builds trust through action, not through elaborate apologies or explanations.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (7-12)
  // ============================================

  // Scenario 07 - Priya Sharma, team, foundation
  {
    id: "scenario-07",
    title: "The Brainstorm Kickoff",
    context:
      "Priya has gathered the team for a brainstorming session about a new campaign concept. She is buzzing with energy and wants to get everyone involved.",
    chooseContext:
      "The brainstorm is in full swing and Priya has just shared a bold opening idea. The energy in the room is high and Priya is looking around for someone to build on it.",
    rewriteContext:
      "The session has been flowing freely and Priya has just landed on a new campaign angle she is excited about. She is turning to you for an honest, enthusiastic reaction.",
    characterId: "priya-sharma",
    dialogue:
      "I've been thinking about this all weekend and I've got so many ideas. But I want to hear yours first because the best campaigns come from the whole team, not just one person.",
    chooseDialogue:
      "I love where this is going. The energy in this room is exactly what we need. So come on, who's got an idea they want to throw in?",
    rewriteDialogue:
      "You know what, I just had a thought about the campaign angle. What do you think? I'd love your honest reaction.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a brainstorm by sharing her excitement and inviting the whole team to contribute. Which communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Priya's enthusiasm, collaborative energy, and desire to involve everyone are classic expressive-style traits.",
          observation:
            "Notice how Priya leads with her own excitement but immediately invites others in. Expressive communicators thrive on shared energy.",
          coachingTip:
            "When someone opens a conversation with visible enthusiasm and invites collective creativity, they are usually expressive.",
          styleContext:
            "Expressive communicators believe the best outcomes come from energised collaboration. They value ideas, momentum, and inclusion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive styles are people-oriented, but Priya's energy and idea-focus lean more expressive than supportive.",
          observation:
            "A supportive communicator would focus more on making people feel safe to contribute. Priya is focused on generating excitement and ideas.",
          coachingTip:
            "The distinguishing factor is energy level. Expressive communicators bring visible enthusiasm. Supportive communicators bring calm reassurance.",
          styleContext:
            "Expressive and supportive styles both value people, but expressive leads with inspiration and supportive leads with care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Priya's behaviour is the opposite of task-focused or data-driven. She is leading with energy, ideas, and people.",
          observation:
            "There are no demands for efficiency, no requests for data, and no rigid structure. This is an open, energetic invitation.",
          coachingTip:
            "Ask yourself: is this person energised by ideas and people, or by results and data? Priya is clearly in the first camp.",
          styleContext:
            "Expressive communicators create momentum through enthusiasm. They want the room to feel alive with possibilities before narrowing down.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has kicked off a brainstorm with enthusiasm and invited your ideas. How do you respond?",
      options: [
        {
          id: "s07-opt-a",
          text: "Love that energy, Priya. What if we explored a customer storytelling angle? Real users telling their own stories to drive the campaign.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy, acknowledges her contribution, builds on her idea, and uses inclusive, forward-looking language. It is a perfect expressive-style response.",
        },
        {
          id: "s07-opt-b",
          text: "Before we brainstorm, I think we should define the campaign objectives, target audience, and success metrics. That way we have a framework for evaluating ideas.",
          score: 0,
          result: "weak",
          explanation:
            "While logical, this kills the energy Priya has created. In a brainstorm with an expressive communicator, structure should come after ideas, not before.",
        },
        {
          id: "s07-opt-c",
          text: "Sure, I've got a couple of ideas. I was thinking maybe we could do something with social media. I'll send over some thoughts later.",
          score: 5,
          result: "partial",
          explanation:
            "This contributes but lacks energy and specificity. Priya wants ideas in the room now, not promised for later. Match her enthusiasm to keep the momentum going.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has shared an idea for a campaign and asked for your reaction. Write a response that matches her expressive style. Be warm, acknowledge her idea, look forward, and use inclusive language.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "That's a brilliant idea, Priya. I really like how your suggestion connects the brand to real customer stories. What if we took that further and created a whole series? We could involve the wider team to bring different perspectives and make it even stronger.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response opens warmly, acknowledges Priya's idea specifically, builds forward, and uses collaborative language. This is exactly how to engage an expressive communicator.",
          observation:
            "You matched Priya's energy without dominating the conversation. That is the sweet spot with expressive communicators.",
          coachingTip:
            "With expressive communicators, always acknowledge before adding. They need to feel heard before they are open to building.",
          styleContext:
            "Expressive communicators thrive when their ideas are validated and extended, not replaced or critiqued immediately.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good effort, but your response may lack warmth in the opening or miss an opportunity to build on Priya's specific idea.",
          observation:
            "Check whether you acknowledged what Priya said before adding your own thoughts. Jumping straight to your idea can feel dismissive.",
          coachingTip:
            "Try the 'yes, and' approach: affirm their idea, then extend it. This keeps the creative energy flowing.",
          styleContext:
            "Expressive communicators feel frustrated when their ideas are skipped over. Even brief acknowledgement makes a big difference.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too flat, too critical, or too task-focused for an expressive communicator. It risks shutting down the creative energy.",
          observation:
            "Look for warmth, enthusiasm, and collaboration in your language. If your response reads like a project update, it needs more energy.",
          coachingTip:
            "Start with something positive: 'Great idea', 'Love that', or 'That's really exciting'. Then build from there.",
          styleContext:
            "Expressive communicators need emotional connection before they engage with logic. Open warm, then move to substance.",
        },
      },
    },
  },

  // Scenario 08 - Priya Sharma, client, intermediate
  {
    id: "scenario-08",
    title: "The Client Pitch",
    context:
      "Priya is presenting a creative campaign concept to a new client. She has just finished an enthusiastic overview and is inviting questions, but the client seems unsure about the approach.",
    chooseContext:
      "The client has expressed hesitation but Priya is reading it as curiosity rather than rejection. She is trying to draw them in emotionally and wants you to back her up.",
    rewriteContext:
      "The meeting has ended on a positive note. Priya wants you to send a warm follow-up email that keeps the momentum alive and invites the client into the next conversation.",
    characterId: "priya-sharma",
    dialogue:
      "I know this is a bold direction, but imagine the impact. Your brand could be the one everyone is talking about. What do you think? I'd love to explore this together.",
    chooseDialogue:
      "I can tell you're thinking about it, and honestly, that's exciting. The fact that you're considering it means we could build something really special together.",
    rewriteDialogue:
      "This was such a great conversation. Would you mind sending them a follow-up that keeps the momentum going? Something warm that invites the next step.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya is painting a vision for the client and inviting them to explore the idea collaboratively. What communication style is this?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya uses visionary language ('imagine the impact'), enthusiasm ('bold direction'), and an invitation to collaborate ('explore this together'). This is classic expressive communication.",
          observation:
            "Priya is selling the vision, not the data. She wants the client to feel excited about the possibility, not just understand the logic.",
          coachingTip:
            "Expressive communicators pitch with energy and imagination. They want you to share their excitement before getting into the detail.",
          styleContext:
            "Expressive communicators believe that if you can see the vision, the detail will follow. They lead with inspiration.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive styles are people-oriented, but Priya's focus is on vision and excitement, not on comfort and reassurance.",
          observation:
            "A supportive communicator would focus on how the client feels. Priya is focused on how the client could feel once the campaign launches.",
          coachingTip:
            "Expressive looks forward with energy. Supportive looks inward with care. Both value people, but they engage them differently.",
          styleContext:
            "In client situations, expressive communicators inspire, while supportive communicators reassure. Priya is clearly in inspiration mode.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Priya's language is emotional, visionary, and collaborative. There are no demands for efficiency or requests for data.",
          observation:
            "Direct and analytical communicators would focus on outcomes and evidence. Priya is painting a picture of possibility.",
          coachingTip:
            "Listen for visionary language: 'imagine', 'picture this', 'what if'. These are strong expressive markers.",
          styleContext:
            "Expressive communicators in client-facing roles often lead with the big picture to create buy-in before diving into specifics.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has pitched a bold creative concept to a client who seems unsure. She is inviting you to support the pitch. How do you respond?",
      options: [
        {
          id: "s08-opt-a",
          text: "I think we need to see the numbers before committing. Can we look at projected reach and ROI before going any further?",
          score: 0,
          result: "weak",
          explanation:
            "This undercuts Priya's pitch in front of the client. While the numbers matter, raising them now kills the creative momentum Priya is building. Save the detail for the follow-up.",
        },
        {
          id: "s08-opt-b",
          text: "Priya's right, this could be exciting for your brand. We could start with a small pilot to test the concept and shape it together.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Priya's idea, builds forward, and gives the cautious client a comfortable way in. It uses inclusive language and maintains the energy of the pitch.",
        },
        {
          id: "s08-opt-c",
          text: "It's an interesting concept. I think there could be something in it, but we'd probably need to think about it a bit more before moving forward.",
          score: 5,
          result: "partial",
          explanation:
            "This is lukewarm. It does not shut down the idea but does not add energy either. Priya needs you to amplify the pitch, not dampen it with hesitation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a follow-up message to the client after the pitch, reinforcing the creative concept and inviting them to take the next step. Write it in an expressive style that is warm, forward-looking, and collaborative.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "Thanks so much for your time today. We loved hearing your thoughts on the concept and your suggestion about involving your regional teams was a great addition. We think there is real potential here to create something special together. As a next step, we'd love to set up a workshop where we can explore the idea further with your team and start shaping the campaign together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, acknowledges the client's contribution, looks forward with enthusiasm, and uses collaborative language throughout.",
          observation:
            "You struck the right balance between enthusiasm and professionalism. The client will feel valued and excited about what comes next.",
          coachingTip:
            "In follow-up communications, expressive style means keeping the energy alive. Reference something specific from the meeting to show you were listening.",
          styleContext:
            "Expressive communicators build relationships through shared enthusiasm. A warm, specific follow-up strengthens the connection.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message is professional but may lack the warmth or forward-looking energy that an expressive communicator would bring.",
          observation:
            "Check whether your opening feels warm and whether you referenced something the client contributed. These details matter to expressive communicators.",
          coachingTip:
            "Add a specific acknowledgement of something the client said or did. It shows you value their input, which is key for expressive-style rapport.",
          styleContext:
            "Expressive communicators notice when their contributions are acknowledged. It builds trust and deepens the relationship.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too transactional or too flat for an expressive communicator. It reads more like a task update than a relationship-building message.",
          observation:
            "Look for warmth, enthusiasm, and collaboration. If your message could have been written by anyone, it needs more personality.",
          coachingTip:
            "Think about how the client should feel after reading your message. Expressive communication aims to leave people feeling energised and valued.",
          styleContext:
            "Expressive communicators view every touchpoint as a chance to strengthen the relationship. Even a follow-up email should carry warmth.",
        },
      },
    },
  },

  // Scenario 09 - Marcus Webb, meeting, foundation
  {
    id: "scenario-09",
    title: "The Innovation Showcase",
    context:
      "Marcus is leading a cross-functional meeting to introduce a new innovation initiative. He is clearly excited and wants to get the room energised about the possibilities.",
    chooseContext:
      "Marcus has painted a vivid picture of the opportunity and the energy in the room is building. He is now looking for volunteers to jump in and help bring the vision to life.",
    rewriteContext:
      "The meeting has wrapped up and Marcus wants you to send a message to your team that captures the excitement of the initiative and makes them want to get involved.",
    characterId: "marcus-webb",
    dialogue:
      "This is going to change the way we work. Picture this: automated workflows, real-time dashboards, and teams collaborating across time zones without friction. Who wants to be part of it?",
    chooseDialogue:
      "That's what I'm talking about. I can already see this coming together. So who wants to jump in and help us make it happen?",
    rewriteDialogue:
      "I need you to get your team excited about this. Write them something that captures the energy of what we're building. Make them want to be involved.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Marcus has painted a vision of the future and invited the room to get involved. What communication style is he using?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus's visionary language ('picture this'), infectious enthusiasm, and open invitation to participate are hallmarks of an expressive communicator.",
          observation:
            "Marcus is selling a vision, not a plan. He wants people to feel the possibility before he gets into the detail.",
          coachingTip:
            "When someone uses 'picture this' or 'imagine if', they are painting a future state. That is expressive communication in action.",
          styleContext:
            "Expressive communicators lead with vision and energy. They believe that if you can get people excited, the execution will follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also involve others, but they do so through care and consensus, not through vision and excitement.",
          observation:
            "Marcus is not checking how people feel about the change. He is rallying them to join something exciting.",
          coachingTip:
            "The key difference: expressive invites with energy ('who wants to be part of it?'), supportive invites with safety ('how does everyone feel about this?').",
          styleContext:
            "Expressive communicators assume enthusiasm is contagious. Supportive communicators assume people need reassurance before they engage.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Marcus's behaviour is the opposite of task-focused or analytical. He is leading with inspiration and emotion, not data or efficiency.",
          observation:
            "There are no metrics, no timelines, and no structured analysis. This is pure vision and energy.",
          coachingTip:
            "If someone is describing a future state with excitement and asking who wants to join, they are expressive. If they are asking for data, they are analytical.",
          styleContext:
            "Expressive communicators are at their best when they are launching something new. They create momentum through enthusiasm and inclusion.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has described an exciting innovation initiative and asked who wants to be part of it. How do you respond?",
      options: [
        {
          id: "s09-opt-a",
          text: "I love that vision, Marcus. What if we got a small group together to prototype one of those workflows and show the business what's possible?",
          score: 10,
          result: "strong",
          explanation:
            "This matches Marcus's energy, acknowledges his vision, and builds forward with a practical next step that keeps the momentum going. It also uses inclusive language.",
        },
        {
          id: "s09-opt-b",
          text: "It sounds interesting, but I'd need to see a detailed business case before committing any resource. What's the projected ROI and what are the risks?",
          score: 0,
          result: "weak",
          explanation:
            "While valid questions, this response kills the energy Marcus has created. An expressive communicator in visioning mode will feel shut down by an immediate demand for ROI.",
        },
        {
          id: "s09-opt-c",
          text: "Yeah, could be good. I'll have a think about it and let you know if there's anything my team could contribute.",
          score: 5,
          result: "partial",
          explanation:
            "This is polite but passive. Marcus wants engagement now, not a deferred maybe. Match his energy to keep the conversation alive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to introduce the innovation initiative to your team. Write a message that matches Marcus's expressive style. Be enthusiastic, forward-looking, and inclusive.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "Really exciting news from Marcus and the innovation team. They have launched a new initiative to transform the way we collaborate, and I think it could be a real game-changer for us. What if we put forward a couple of ideas from our team? I'd love for us to be involved early and help shape what this looks like. Let's discuss at our next team meeting.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message captures the enthusiasm, references Marcus's initiative positively, looks forward, and invites the team to get involved. This is exactly how to cascade an expressive message.",
          observation:
            "You kept the energy high while making it relevant to your own team. That is effective expressive communication.",
          coachingTip:
            "When sharing an expressive communicator's message with others, preserve the enthusiasm. If you flatten it, you lose the momentum they created.",
          styleContext:
            "Expressive communicators want their ideas to spread with energy. When you relay their message, carry the enthusiasm forward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the basics but could use more warmth or a stronger invitation for the team to get involved.",
          observation:
            "Check whether you conveyed excitement or just relayed information. Expressive communication is about energy, not just content.",
          coachingTip:
            "Add an element of possibility: 'imagine if', 'what if we', 'this could be'. These phrases create forward-looking energy.",
          styleContext:
            "Expressive messages lose their power when reduced to bullet points. Keep the sense of excitement alive.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads more like a memo than an invitation. It lacks the warmth and energy that an expressive communicator would expect.",
          observation:
            "If your message could be described as 'informational', it is missing the expressive element. It should feel inspiring.",
          coachingTip:
            "Start with enthusiasm, connect the initiative to something your team cares about, and end with an invitation to participate.",
          styleContext:
            "Expressive communicators are energised by possibility. Your message should help people see what could be, not just what is being planned.",
        },
      },
    },
  },

  // Scenario 10 - Marcus Webb, sales, advanced
  {
    id: "scenario-10",
    title: "Pitching the Big Idea",
    context:
      "Marcus is in a pitch meeting with a prospective client who has been resistant to change. Marcus believes his innovation platform could transform their business but needs to win them over.",
    chooseContext:
      "The client is starting to warm up and Marcus can see the shift in their body language. He wants you to help him paint a compelling picture of what the partnership could look like.",
    rewriteContext:
      "The pitch meeting went well and Marcus is buzzing. He wants you to write a follow-up that keeps the excitement alive and positions the next conversation as a partnership rather than a sales call.",
    characterId: "marcus-webb",
    dialogue:
      "I know change is uncomfortable, but what if I told you we could cut your product development cycle in half? Imagine launching twice as fast as your competitors. That's what we're offering. Let's build something extraordinary together.",
    chooseDialogue:
      "I can see you're starting to picture it. That's the reaction we were hoping for. Help me show them what this could really look like.",
    rewriteDialogue:
      "That went really well. Can you write the follow-up? Keep that excitement alive and invite them to the next conversation. Make it feel like a partnership, not a pitch.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus is using visionary language and emotional appeal to win over a resistant client. What communication style is he using?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with vision ('imagine launching twice as fast'), uses emotional appeal ('something extraordinary'), and invites collaboration ('let's build together'). This is expressive persuasion at its finest.",
          observation:
            "Notice how Marcus acknowledges the resistance ('change is uncomfortable') but immediately pivots to an exciting possibility. That is a key expressive technique.",
          coachingTip:
            "Expressive communicators overcome resistance by painting a compelling future. They acknowledge concern and then reframe it as opportunity.",
          styleContext:
            "Expressive communicators are natural persuaders. They use energy, vision, and emotional connection to move people from doubt to enthusiasm.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also acknowledge discomfort, but they would focus more on reassurance than on vision and excitement.",
          observation:
            "Marcus acknowledged the discomfort but did not dwell on it. He pivoted immediately to the exciting outcome. A supportive communicator would spend more time on the feelings.",
          coachingTip:
            "If someone acknowledges concern and then pivots to possibility, they are expressive. If they stay with the concern and offer reassurance, they are supportive.",
          styleContext:
            "Both styles acknowledge emotions, but expressive uses emotion as a springboard to vision, while supportive uses emotion as a signal to slow down and care.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Marcus's approach is the opposite of data-driven or efficiency-focused. He is selling a dream, not a spreadsheet.",
          observation:
            "There are no numbers, no detailed timelines, and no structured argument. This is pure visionary persuasion.",
          coachingTip:
            "When someone says 'imagine' and 'let's build something together', they are expressive. When they say 'the data shows' and 'here's the plan', they are analytical or direct.",
          styleContext:
            "Expressive communicators believe that facts tell but stories sell. They lead with the vision because they know that is what moves people.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus is trying to win over a resistant client with an ambitious vision. How do you support his pitch?",
      options: [
        {
          id: "s10-opt-a",
          text: "Marcus is spot on. One of our clients went from 12-month cycles to six months in under a year. Imagine what that could mean for your team.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus, adds a real example that supports the vision, maintains the forward-looking energy, and uses inclusive language. It amplifies the pitch perfectly.",
        },
        {
          id: "s10-opt-b",
          text: "Marcus makes a good point. If you'd like, I can put together a detailed proposal with timelines, costs, and projected returns so you can evaluate the opportunity properly.",
          score: 5,
          result: "partial",
          explanation:
            "This is helpful but shifts the energy from vision to evaluation. In an expressive pitch, you want to build excitement first and handle the detail later.",
        },
        {
          id: "s10-opt-c",
          text: "To be honest, cutting development cycles in half is quite an ambitious claim. I think we should be more measured in what we promise until we've assessed the client's current processes.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines Marcus's pitch in front of the client. Even if the caution is warranted, raising it publicly kills the momentum and damages trust with both Marcus and the client.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a follow-up to the prospective client after the pitch meeting. Write it in an expressive style that reinforces the vision, acknowledges their interest, and invites the next step.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "Fantastic meeting today, and thanks for the great conversation. We were really inspired by your ambition to lead your sector in product innovation. Building on the ideas we discussed, we think there is an incredible opportunity to accelerate your development cycle and get ahead of the competition. We'd love to set up a deeper dive session with your leadership team so we can start exploring what this could look like together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your follow-up is warm, specific, and forward-looking. It acknowledges the client, reinforces the vision, and proposes a clear collaborative next step.",
          observation:
            "You maintained Marcus's enthusiasm while grounding the message in something the client said. That combination of energy and specificity is very effective.",
          coachingTip:
            "In follow-up messages for expressive pitches, always reference something specific from the conversation. It shows you were engaged, not just performing.",
          styleContext:
            "Expressive communicators build momentum through follow-through. A warm, energetic follow-up keeps the door open and the excitement alive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message is professional but could carry more enthusiasm or a stronger reference to the client's own contributions.",
          observation:
            "Check whether your message feels warm and collaborative. If it reads like a standard follow-up, it needs more expressive energy.",
          coachingTip:
            "Reference a specific moment from the meeting: 'when you mentioned X, that really resonated'. It makes the follow-up feel personal and genuine.",
          styleContext:
            "Expressive communicators notice when follow-ups are generic. A personalised message builds the relationship; a template does not.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too flat or too transactional for an expressive pitch follow-up. It does not carry the energy of the meeting forward.",
          observation:
            "If your message reads like a confirmation of next steps without any warmth or vision, it has missed the expressive mark.",
          coachingTip:
            "Think about the feeling you want to create. The client should finish reading your message and think 'I want to work with these people'. That takes warmth and vision.",
          styleContext:
            "Expressive communicators close deals through connection, not just content. Your follow-up should make the client feel excited about what comes next.",
        },
      },
    },
  },

  // Scenario 11 - Nina Okafor, feedback, advanced
  {
    id: "scenario-11",
    title: "The Recognition Conversation",
    context:
      "Nina has pulled you aside after a successful client event to give you feedback. She is warm and enthusiastic about how the event went and wants to celebrate the team's effort.",
    chooseContext:
      "Nina has praised the team's effort and is now asking how you think the success should be shared more widely. She wants the team to get the recognition they deserve.",
    rewriteContext:
      "Nina has asked you to write a message to the wider business celebrating what the team achieved. She wants it to feel genuine and celebratory, not corporate.",
    characterId: "nina-okafor",
    dialogue:
      "That was absolutely brilliant. The client loved it, the team were amazing, and your planning made the whole thing run beautifully. We should find a way to celebrate this properly and share what worked with the wider business.",
    chooseDialogue:
      "Seriously, the team deserves to be recognised for this. How do you think we should share the news and give them their moment?",
    rewriteDialogue:
      "Actually, would you write something to the wider business about it? I want people to feel the energy of what the team achieved. Make it celebratory.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina is giving enthusiastic, people-focused feedback and suggesting the team celebrates and shares their success. What communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's warmth, enthusiasm, focus on people, and desire to celebrate and share success are all classic expressive behaviours.",
          observation:
            "Notice how Nina praised the client reaction, the team, and your individual contribution. Expressive communicators give feedback that is personal, specific, and energising.",
          coachingTip:
            "When someone gives feedback that is enthusiastic, people-focused, and includes a desire to share and celebrate, they are expressive.",
          styleContext:
            "Expressive communicators see success as something to be shared and amplified. They do not just acknowledge good work; they want to create a moment around it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Supportive communicators also give warm feedback, but they tend to be quieter and more private about it. Nina wants to celebrate publicly and share the success widely.",
          observation:
            "The desire to 'celebrate properly' and 'share with the wider business' is expressive, not supportive. Supportive feedback is usually one-to-one and understated.",
          coachingTip:
            "If the feedback comes with energy and a desire to amplify, it is expressive. If it comes with quiet appreciation and personal warmth, it is supportive.",
          styleContext:
            "Expressive communicators celebrate loudly. Supportive communicators appreciate quietly. Both are genuine, but the expression differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Nina's feedback is entirely people-focused and emotionally warm. There are no demands, no data, and no efficiency focus.",
          observation:
            "A direct communicator would say 'good result, let's move on'. An analytical communicator would say 'let's debrief what worked'. Nina says 'let's celebrate'.",
          coachingTip:
            "The emotional temperature is the clue. Expressive feedback runs warm and enthusiastic. Direct feedback runs cool and efficient.",
          styleContext:
            "Expressive communicators use positive feedback as a way to build team energy and culture. It is not just recognition; it is fuel for the next challenge.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina is celebrating a successful client event and suggesting the team shares their approach with the wider business. How do you respond?",
      options: [
        {
          id: "s11-opt-a",
          text: "Thanks, Nina, that really means a lot. What if we put together a short showcase for the next all-hands so the whole team gets the recognition they deserve?",
          score: 10,
          result: "strong",
          explanation:
            "This acknowledges Nina's feedback warmly, builds on her idea, and uses inclusive language to keep the team at the centre. It is a perfect expressive-style response.",
        },
        {
          id: "s11-opt-b",
          text: "Thanks, appreciate that. I'll put together a quick debrief document with lessons learnt so we can reference it for future events.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical but misses the expressive moment. Nina wants celebration and energy, not documentation. The intent is good but the delivery is too flat.",
        },
        {
          id: "s11-opt-c",
          text: "It went well, yes. I think we should be careful not to overstate it though. There were a few things that could have gone better and I think we should focus on those before celebrating.",
          score: 0,
          result: "weak",
          explanation:
            "This deflects praise and shifts to criticism, which will feel like a rejection to an expressive communicator. There is a time for improvement feedback, but this is not it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a message to the wider business celebrating the successful client event and recognising the team's contribution. Write it in an expressive style that is warm, acknowledges the team, and looks forward.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "Fantastic news from the team. Our client event last week was a huge success, and the feedback from the client has been overwhelmingly positive. A massive thank you to everyone who contributed. Your creativity, teamwork, and attention to detail made it happen. Building on what worked so well, we are already exploring how we can bring this approach to future events. If you have ideas, we would love to hear them.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message opens with energy, celebrates the team specifically, and invites the wider business to contribute ideas. This is exactly the kind of message Nina would want to see.",
          observation:
            "You balanced celebration with forward momentum, which is key for expressive communication. It is not just about looking back; it is about building on the success.",
          coachingTip:
            "When writing celebration messages for expressive communicators, always include a forward-looking element. It turns recognition into momentum.",
          styleContext:
            "Expressive communicators see celebration as a springboard, not an end point. The best recognition messages inspire the next achievement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message acknowledges the success but could be warmer in tone or more specific about the team's contributions.",
          observation:
            "Check whether you named specific contributions or kept it generic. Expressive communicators value personal recognition.",
          coachingTip:
            "Be specific about what the team did well. 'Great work, team' is fine, but 'your creativity and teamwork made this happen' is better.",
          styleContext:
            "Specific recognition lands harder than general praise. Expressive communicators notice the difference.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too formal or too flat to serve as a celebration. It reads more like a report than a recognition moment.",
          observation:
            "If your message could be mistaken for a status update, it needs more warmth and energy.",
          coachingTip:
            "Start with something celebratory: 'Fantastic news', 'Brilliant result', 'Really proud to share this'. Set the tone from the first word.",
          styleContext:
            "Expressive communicators want celebration messages that feel genuine and energising. If the tone is flat, the message misses its purpose.",
        },
      },
    },
  },

  // Scenario 12 - Nina Okafor, one-to-one, intermediate
  {
    id: "scenario-12",
    title: "The Relationship Check-In",
    context:
      "Nina has scheduled a one-to-one with you because she has noticed you have been quieter than usual in recent meetings. She wants to understand what is going on and see how she can help.",
    chooseContext:
      "You have opened up to Nina about feeling overwhelmed and she has responded with genuine warmth. She is now asking what she can do to make things better for you.",
    rewriteContext:
      "Nina has made it clear she is fully in your corner. She is inviting you to put your thoughts into words so you can work through the situation together.",
    characterId: "nina-okafor",
    dialogue:
      "I just wanted to check in because I've noticed you've been a bit quieter lately. I really value what you bring to the team and I want to make sure you're feeling good about things. What's on your mind?",
    chooseDialogue:
      "Thank you for being honest with me. That takes courage, and I'm glad you trust me enough to share. So how can we make things better for you?",
    rewriteDialogue:
      "I really appreciate you opening up. I want you to know I'm here for you. Why don't you put your thoughts into words for me? Tell me what you need and how we can work through this together.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has noticed a change in your behaviour and has proactively checked in with warmth and genuine concern. What communication style is she displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's warmth, proactive check-in, and personal affirmation ('I really value what you bring') are expressive traits. She is relationship-driven and wants to maintain connection.",
          observation:
            "Nina does not just ask what is wrong; she affirms your value first. Expressive communicators lead with positive intent before exploring concerns.",
          coachingTip:
            "When someone proactively checks in with warmth and personal affirmation, they are likely expressive. They invest in relationships and notice when energy shifts.",
          styleContext:
            "Expressive communicators are attuned to group energy. When someone goes quiet, they notice and they reach out, because connection matters to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Very close. This is the hardest distinction to make because supportive communicators also check in on people. The difference is in the energy and framing.",
          observation:
            "Nina affirms your contribution and uses warm, energetic language. A supportive communicator might say 'I'm here if you need to talk' more quietly.",
          coachingTip:
            "Expressive check-ins come with energy and affirmation. Supportive check-ins come with calm and patience. Both are caring, but the delivery differs.",
          styleContext:
            "Expressive communicators check in by affirming value and inviting openness. Supportive communicators check in by creating a safe, quiet space.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Nina's behaviour is deeply people-focused and emotionally engaged. There is no task focus, no demand for output, and no analysis.",
          observation:
            "A direct communicator might say 'you've been quiet in meetings, is something affecting your performance?' Nina's approach is entirely relational.",
          coachingTip:
            "Pay attention to what drives the check-in. If it is about performance, it is direct. If it is about the person, it is expressive or supportive.",
          styleContext:
            "Expressive communicators care about how people feel because they believe that energy and connection drive performance. The relationship comes first.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has checked in with you warmly because she has noticed you have been quieter recently. How do you respond?",
      options: [
        {
          id: "s12-opt-a",
          text: "Thanks, Nina, I appreciate you noticing. I've been feeling a bit overwhelmed but didn't want to make a fuss. It would help to talk through priorities together.",
          score: 10,
          result: "strong",
          explanation:
            "This is open, warm, and collaborative. You acknowledged Nina's care, shared honestly, and invited a collaborative solution. This matches her expressive style perfectly.",
        },
        {
          id: "s12-opt-b",
          text: "I'm fine, thanks. Just been busy. Nothing to worry about.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the conversation that Nina has opened with genuine care. Expressive communicators value openness, and a closed response feels like a rejection of their concern.",
        },
        {
          id: "s12-opt-c",
          text: "Thanks for asking. Things have been a bit hectic. I could probably do with some help prioritising a few things if you've got time.",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but a bit flat for the moment Nina has created. She opened with warmth and personal care; matching that energy with a bit more openness would strengthen the connection.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has checked in with you and you want to respond openly and warmly. Write a response that matches her expressive style. Acknowledge her care, share honestly, and suggest a way forward together.",
      targetTraits: [
        "warm-opener",
        "acknowledges-ideas",
        "forward-looking",
        "inclusive-language",
      ],
      exampleStrongResponse:
        "Thanks so much for checking in, Nina. It really means a lot that you noticed and took the time to ask. To be honest, I've been finding it hard to juggle everything and I think I lost a bit of confidence along the way. I would love to sit down together and work out how to refocus my energy on the things that matter most. Your support makes a huge difference.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your response is warm, honest, and collaborative. You acknowledged Nina's care, shared openly, and invited a joint way forward. This is exactly how to engage with an expressive communicator in a personal conversation.",
          observation:
            "You matched Nina's emotional register without oversharing. That balance of openness and direction is very effective.",
          coachingTip:
            "When an expressive communicator creates a safe space for you, honour it by being genuine. They can tell when you are holding back.",
          styleContext:
            "Expressive communicators invest in people. When they check in, they want authentic connection, not surface-level reassurance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your response is honest but could be warmer or more appreciative of Nina's effort in reaching out.",
          observation:
            "Check whether you acknowledged Nina's care explicitly. A simple 'it means a lot that you asked' goes a long way with expressive communicators.",
          coachingTip:
            "Start by acknowledging the person before addressing the topic. Expressive communicators value being seen as people, not just managers.",
          styleContext:
            "Expressive communicators remember how you responded when they reached out. Make that first response count.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is too closed or too task-focused for this moment. Nina has opened a relational conversation and your reply should match that register.",
          observation:
            "If your response could be an email subject line, it is too short. Nina has invested care and deserves a thoughtful reply.",
          coachingTip:
            "Think about what Nina needs to hear: that her concern was welcomed, that you trust her, and that you want to work through it together.",
          styleContext:
            "Expressive communicators feel rejected by closed responses. Even if you are not comfortable sharing deeply, show appreciation for the gesture.",
        },
      },
    },
  },
];
