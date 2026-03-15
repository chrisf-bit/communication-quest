import { Scenario } from "@/types";

export const SCENARIOS_PART29: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (337-339) - feedback
  // ============================================

  // Scenario 337 - Jordan Cole, feedback, foundation
  {
    id: "scenario-337",
    title: "The Late Deliverables Review",
    context:
      "A team member has missed three consecutive deadlines on a project that feeds into your department's quarterly targets. Jordan has called a short feedback meeting to address the pattern directly.",
    chooseContext:
      "Jordan has laid out the three missed deadlines and asked the team member for one concrete action to prevent a fourth. The team member has offered a vague commitment to 'try harder'.",
    rewriteContext:
      "Jordan has asked you to draft a follow-up email to the team member summarising the agreed actions from the feedback session, with clear deadlines attached to each one.",
    characterId: "jordan-cole",
    dialogue:
      "Three deadlines missed in a row is not a blip. It is a pattern. I am not here to talk about how busy you are - everyone is busy. I need to know what changes today so this does not happen a fourth time.",
    chooseDialogue:
      "'Try harder' is not a plan. Tell me one specific thing you will do differently this week. Something I can check on Friday.",
    rewriteDialogue:
      "Send the follow-up before end of day. List what was agreed, who owns each action, and when it is due. No preamble, no softening - just the commitments.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened a feedback conversation by naming the pattern of missed deadlines and asking for a specific plan to fix it. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with facts, names the problem without softening, and demands a concrete action. This is direct communication at its clearest.",
          observation:
            "Notice Jordan does not ask how the team member feels or explore root causes. The focus is entirely on what changes now.",
          coachingTip:
            "When someone opens feedback by stating the problem and immediately asking for solutions, they are signalling a direct style. Respond with specifics, not explanations.",
          styleContext:
            "Direct communicators treat feedback as a course correction, not a conversation about feelings. They want to hear what will be different going forward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does reference data - three missed deadlines - which can look analytical. But the goal is not thorough analysis; it is immediate action.",
          observation:
            "An analytical communicator would want to examine why each deadline was missed. Jordan skips the diagnosis and goes straight to the remedy.",
          coachingTip:
            "If someone uses data to drive urgency rather than to investigate causes, they are direct. The data serves the demand, not the other way round.",
          styleContext:
            "Direct communicators cite facts to establish the case quickly, then pivot to action. Analytical communicators cite facts to build a comprehensive picture.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. There is no warmth, no invitation to share feelings, and no collaborative exploration of the issue. Jordan is entirely focused on results.",
          observation:
            "Jordan explicitly dismisses the idea of discussing how busy the team member is. Empathy is not the tool being used here.",
          coachingTip:
            "Ask yourself: is this person seeking to understand or seeking to fix? Jordan wants a fix, delivered immediately.",
          styleContext:
            "Direct communicators see extended discussion during feedback as delay. They believe clarity about expectations is the kindest thing you can offer.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has rejected 'try harder' and asked for one specific action you can check on Friday. How do you respond?",
      options: [
        {
          id: "s337-opt-a",
          text: "I will block out two hours every morning for this project before anything else gets my attention. You can check the output at Friday standup.",
          score: 10,
          result: "strong",
          explanation:
            "Specific, time-bound, and checkable. This matches exactly what Jordan asked for - a concrete change with a verification point.",
        },
        {
          id: "s337-opt-b",
          text: "I think part of the problem is competing priorities from other teams. Could we look at how to protect my time on this project?",
          score: 5,
          result: "partial",
          explanation:
            "This raises a valid point but does not answer the question. Jordan wants an action you control, not a broader conversation about workload management.",
        },
        {
          id: "s337-opt-c",
          text: "I appreciate the feedback and I want you to know I am committed to this project. I will make sure it gets the attention it deserves going forward.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the vague commitment Jordan just rejected. There is nothing specific to check on Friday, which will frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a follow-up email listing the agreed actions from the feedback session. Write it in a direct style - commitments only, no softening.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Agreed actions - deadline performance\n\nFollowing today's meeting, here are the commitments:\n\n1. Morning project block: Two hours reserved daily (8-10am) starting tomorrow. No meetings booked in this slot.\n2. Friday progress update: Written update submitted to Jordan by 3pm each Friday.\n3. Escalation trigger: If any dependency threatens a deadline, flag it within 24 hours - not after the deadline passes.\n\nNext review: Friday 21 March.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email lists clear actions, names who is responsible, and attaches deadlines. Jordan would read this in 30 seconds and know exactly what was agreed.",
          observation:
            "You avoided phrases like 'I hope to' or 'I will aim to'. Every commitment is stated as a fact, not an aspiration.",
          coachingTip:
            "When writing for direct communicators, treat every sentence as a promise. If it does not commit to something specific, cut it.",
          styleContext:
            "Direct communicators use follow-up emails as accountability tools. The clearer the commitments, the easier the next conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have the right idea but check for hedging language. Words like 'aim', 'hope', or 'where possible' weaken the commitments.",
          observation:
            "If your email opens with 'Thank you for the constructive conversation', that preamble is unnecessary for a direct reader.",
          coachingTip:
            "Remove any sentence that does not contain an action, a name, or a date. What remains is what a direct communicator wants to read.",
          styleContext:
            "Direct communicators judge follow-up emails by whether they can be used to hold someone accountable at the next check-in.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too soft, too wordy, or lacks specific commitments. A direct communicator would read this and still not know what was agreed.",
          observation:
            "If your email focuses on feelings about the conversation rather than outcomes from it, it has missed the purpose entirely.",
          coachingTip:
            "Rewrite by answering three questions: What will change? By when? How will we check? Everything else is filler.",
          styleContext:
            "Direct communicators want follow-up emails they can forward to their manager as evidence of a clear plan. Vague reassurances do not serve that purpose.",
        },
      },
    },
  },

  // Scenario 338 - Sam Hartley, feedback, intermediate
  {
    id: "scenario-338",
    title: "The Presentation Standards Gap",
    context:
      "A junior colleague delivered a client presentation that was disorganised and ran over time. Sam has been asked to give feedback before the next client session, which is in two days.",
    chooseContext:
      "Sam has pointed out that the presentation lacked a clear structure and the client lost interest halfway through. The colleague has responded by saying they did not have enough preparation time.",
    rewriteContext:
      "Sam has asked you to rewrite the opening two minutes of the colleague's presentation script so it models the directness and structure Sam expects.",
    characterId: "sam-hartley",
    dialogue:
      "I watched the client check their phone three times in the first ten minutes. That tells you everything. The content was fine - the delivery buried it. You need a clear structure: problem, solution, proof, next steps. Anything else is noise.",
    chooseDialogue:
      "Preparation time is not the issue. I have seen people deliver strong presentations with an hour's notice because they had a framework. You do not have a framework yet. Let us fix that before Thursday.",
    rewriteDialogue:
      "Rewrite the opening. The client should know within 90 seconds what the problem is, what you are proposing, and why it works. If they are still guessing at minute two, you have lost them.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has given feedback by referencing a specific client behaviour - checking their phone - and prescribing a four-part structure. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam uses a concrete observation to make the case, then prescribes a clear framework. The focus is on fixing the problem quickly, not exploring why it happened.",
          observation:
            "Sam dismisses the preparation time excuse immediately and redirects to the solution. Direct communicators are impatient with reasons that do not lead to action.",
          coachingTip:
            "When someone gives feedback by naming the observable impact and then prescribing a fix, they are operating in direct mode. Match with actions, not explanations.",
          styleContext:
            "Direct communicators believe that frameworks solve most presentation problems. They see structure as the shortcut to credibility.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. The four-part framework sounds analytical, but notice Sam is not asking the colleague to research or analyse anything. The framework is handed over as a directive.",
          observation:
            "An analytical communicator would discuss why each element of the framework matters. Sam simply states it and moves on.",
          coachingTip:
            "If someone provides a framework as a command rather than a recommendation, they are being direct. The structure serves speed, not depth.",
          styleContext:
            "Direct communicators borrow analytical tools when they serve efficiency. The difference is in how they are delivered - as instructions, not suggestions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how the colleague felt about the presentation, nor offered encouragement about what went well. The feedback is entirely problem-focused.",
          observation:
            "There is no sandwich technique here - no positive opener or gentle close. Sam leads with the problem and stays there until a solution is agreed.",
          coachingTip:
            "Ask whether the feedback prioritises the person's feelings or the outcome. Sam is entirely focused on the next presentation being better.",
          styleContext:
            "Direct communicators believe honest, unpadded feedback is more respectful than softened feedback that leaves room for misunderstanding.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has dismissed your preparation time concern and offered to help you build a framework before Thursday. How do you respond?",
      options: [
        {
          id: "s338-opt-a",
          text: "Understood. I will restructure around problem, solution, proof, next steps and send you a draft by tomorrow morning for a quick review.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the framework, committed to a timeline, and built in a review checkpoint. This matches Sam's pace and expectations perfectly.",
        },
        {
          id: "s338-opt-b",
          text: "That framework makes sense. Could we sit down together and work through the restructure so I can learn how you would approach it?",
          score: 5,
          result: "partial",
          explanation:
            "Willing to learn, but requesting a joint session adds time Sam may not want to spend. A direct communicator would prefer you attempt it first and bring a draft to review.",
        },
        {
          id: "s338-opt-c",
          text: "I think the content was actually quite strong - the client seemed engaged during the demo section. Maybe I just need to tighten up the intro and close.",
          score: 0,
          result: "weak",
          explanation:
            "This pushes back on feedback Sam has already delivered clearly. Defending the existing approach when a direct communicator has diagnosed the problem will stall the conversation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to rewrite the opening 90 seconds of a client presentation so the problem, proposal, and evidence are immediately clear. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Your customer churn rate has increased by 18% over the past two quarters. That is costing you roughly 2.4 million in annual recurring revenue.\n\nWe are proposing a targeted retention programme that addresses the three main drivers of churn we identified in our analysis.\n\nCompanies using this approach have reduced churn by an average of 30% within six months. Here is how it works for your business.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You opened with the problem in concrete terms, stated the proposal clearly, and provided evidence - all within 90 seconds. Sam would approve this immediately.",
          observation:
            "You avoided the common trap of opening with background context or company introductions. The client knows who you are - they want to know what you can do.",
          coachingTip:
            "When writing for direct communicators, open with the number that hurts. That earns attention faster than any introduction.",
          styleContext:
            "Direct communicators judge presentations by how quickly they get to the point. If the client is still waiting for the 'so what' after two minutes, the presentation has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your opening line grabs attention with a specific, quantified problem. Vague openings like 'many businesses face challenges with retention' lack punch.",
          observation:
            "If your proposal section uses phrases like 'we believe' or 'we think', replace them with 'we are proposing' or 'we recommend'. Certainty sells.",
          coachingTip:
            "Test your opening by asking: would a busy executive keep listening after the first sentence? If not, sharpen it.",
          styleContext:
            "Direct communicators present recommendations, not options. Save the alternatives for the Q&A.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening is too slow, too general, or buries the key message under background information. Sam would stop you after 30 seconds.",
          observation:
            "If you opened with 'Thank you for having us today' or 'Let me start with a bit about our company', you have already lost the direct communicator's attention.",
          coachingTip:
            "Delete your first paragraph entirely. Your real opening is probably hiding in paragraph two.",
          styleContext:
            "Direct communicators believe a presentation that starts slow never recovers. The opening line should make the client lean forward, not check the agenda.",
        },
      },
    },
  },

  // Scenario 339 - Alex Tran, feedback, advanced
  {
    id: "scenario-339",
    title: "The Underperforming Senior Hire",
    context:
      "A senior hire who joined six months ago has not met expectations. Their technical skills are strong but they struggle to influence stakeholders and drive decisions. Alex has been brought in to give candid feedback before a formal review.",
    chooseContext:
      "Alex has told the senior hire that their inability to close decisions in meetings is undermining confidence in their appointment. The hire has responded that the organisation's consensus culture makes it difficult to push for decisions.",
    rewriteContext:
      "Alex has asked you to draft talking points for a follow-up conversation where the senior hire will be given three months to demonstrate measurable improvement or face a role reassessment.",
    characterId: "alex-tran",
    dialogue:
      "You were hired to drive change, not to observe it. Six months in, your stakeholders still do not know where you stand on key issues. That is not a culture problem - that is a credibility problem. If people leave your meetings without a decision, the meeting failed.",
    chooseDialogue:
      "Every organisation has a consensus culture until someone earns the right to challenge it. You earn that right by being clear about what you recommend and backing it with evidence. Right now, you are presenting options when people need direction.",
    rewriteDialogue:
      "Write up three talking points for the follow-up. Be explicit about what 'improvement' looks like in measurable terms. Do not hide behind phrases like 'demonstrate more presence'. Name the behaviours.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has told a senior hire that their inability to close decisions is a credibility problem, not a culture problem. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex rejects the external excuse, reframes the problem as a personal accountability issue, and links behaviour directly to credibility. This is advanced direct communication.",
          observation:
            "Notice how Alex does not sympathise with the consensus culture challenge. Direct communicators believe individuals shape culture through their behaviour, not the other way round.",
          coachingTip:
            "When someone reframes a systemic excuse as a personal accountability issue, they are operating in direct mode. Respond by owning the problem, not explaining it.",
          styleContext:
            "Direct communicators at senior levels expect people to influence their environment, not adapt to its limitations. Citing culture as a barrier signals passivity to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does mention evidence, which can sound analytical. But the purpose is not to investigate - it is to prescribe what the senior hire must do differently.",
          observation:
            "An analytical communicator would explore the consensus culture claim and assess whether it has merit. Alex dismisses it outright as irrelevant to the core issue.",
          coachingTip:
            "If someone dismisses a contextual factor and refocuses on individual behaviour, they are being direct. Analytical communicators would weigh the contextual factor first.",
          styleContext:
            "Direct communicators at senior levels distinguish between explanations and excuses. They expect senior hires to solve environmental challenges, not report them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex shows no interest in how the senior hire feels about the feedback or the cultural challenges they face. The conversation is entirely outcome-driven.",
          observation:
            "There is no acknowledgement of how difficult it is to join a new organisation and influence established stakeholders. Alex focuses on results, not experience.",
          coachingTip:
            "Ask whether the feedback is designed to support the person emotionally or to change their behaviour. Alex is firmly in the behaviour-change camp.",
          styleContext:
            "Direct communicators believe the most supportive thing you can do for a struggling senior hire is tell them exactly what needs to change, without ambiguity.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has said you present options when people need direction, and that earning the right to challenge consensus requires clarity and evidence. How do you respond?",
      options: [
        {
          id: "s339-opt-a",
          text: "You are right. From next week, every paper I bring to the leadership team will open with my recommendation and the three strongest reasons to support it. I will stop presenting menus.",
          score: 10,
          result: "strong",
          explanation:
            "This accepts the feedback, names a specific change, and commits to a timeline. The 'stop presenting menus' phrase shows you have internalised the core message.",
        },
        {
          id: "s339-opt-b",
          text: "I take that on board. Could you give me an example of someone here who does this well, so I can see what good looks like in this specific culture?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable request, but it delays action and suggests you still need to study the environment before acting. Alex wants to see a change in your next meeting, not after further research.",
        },
        {
          id: "s339-opt-c",
          text: "I hear the feedback. I do think there is a balance between being directive and respecting the way decisions are made here. I do not want to alienate the people I need to influence.",
          score: 0,
          result: "weak",
          explanation:
            "This restates the excuse Alex has already dismissed. A direct communicator will read this as resistance to change rather than thoughtful navigation of organisational dynamics.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to draft three talking points for a follow-up meeting with the senior hire, defining measurable improvement expectations over the next three months. Write them in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "1. Decision closure: Every meeting you chair must end with a documented decision or a named owner and deadline for the decision. We will track this across all leadership meetings for the next 12 weeks.\n\n2. Recommendation clarity: All papers submitted to the leadership team must open with a single clear recommendation, supported by no more than three evidence points. No more option papers without a stated preference.\n\n3. Stakeholder confidence: By the end of the three months, at least three of your five key stakeholders must confirm in a brief feedback survey that they are clear on your position on strategic priorities.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each talking point names a specific behaviour, attaches a measurable standard, and defines how progress will be tracked. This leaves no room for ambiguity.",
          observation:
            "You avoided subjective language like 'demonstrate more executive presence'. Every expectation can be objectively assessed at the three-month review.",
          coachingTip:
            "When writing performance expectations for direct communicators, ask: could two reasonable people disagree about whether this was met? If yes, it is not specific enough.",
          styleContext:
            "Direct communicators believe that vague improvement targets are unfair because they allow subjective judgement to determine the outcome. Specificity protects everyone.",
        },
        partial: {
          result: "partial",
          explanation:
            "You are heading in the right direction but check whether your expectations are truly measurable. Phrases like 'show more confidence' or 'be more decisive' are still subjective.",
          observation:
            "If any of your talking points could be interpreted differently by the senior hire and their manager, they are not specific enough.",
          coachingTip:
            "Replace adjectives with numbers. Instead of 'more decisive', say 'every meeting ends with a documented decision'. That is checkable.",
          styleContext:
            "Direct communicators want performance conversations that can be resolved with evidence, not debate. Measurable targets make that possible.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points are too vague, too soft, or focus on effort rather than outcomes. Alex would send these back for a complete rewrite.",
          observation:
            "If your expectations include phrases like 'work on building relationships' or 'continue to develop influencing skills', they fail the measurability test.",
          coachingTip:
            "For each expectation, write down how you would know if it had been met. If you cannot answer that clearly, the expectation is not ready.",
          styleContext:
            "Direct communicators see vague improvement plans as a failure of management, not a kindness to the employee. Clarity is accountability.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (340-342) - sales
  // ============================================

  // Scenario 340 - Priya Sharma, sales, foundation
  {
    id: "scenario-340",
    title: "The Product Launch Pitch",
    context:
      "Your company is launching a new wellness platform aimed at mid-sized employers. Priya is leading the sales pitch to a potential client and has opened by sharing a story about why the product was created.",
    chooseContext:
      "Priya has built rapport with the client's HR director by connecting the product's origin story to a challenge the client mentioned earlier. She is now transitioning to the product demonstration.",
    rewriteContext:
      "Priya has asked you to write a follow-up email to the client that maintains the warm, forward-looking tone of the meeting while confirming the next steps.",
    characterId: "priya-sharma",
    dialogue:
      "This platform started because our founder's best friend burned out and left a job she loved. That stuck with us. When you mentioned earlier that your employee survey flagged wellbeing as the top concern, I thought - this is exactly the kind of organisation we built this for.",
    chooseDialogue:
      "Before I show you the platform, I want you to picture what it would look like if every manager in your business had a simple way to check in on their team's wellbeing - not through surveys, but through genuine conversations. That is what we are going to walk through together.",
    rewriteDialogue:
      "Send a follow-up that feels like a continuation of the conversation, not a sales template. Reference something personal from the meeting, confirm what we agreed, and give them something to look forward to.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya opened a sales pitch with a personal origin story and connected it to the client's own concerns. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with a story, creates an emotional connection, and links the product to the client's world. This is expressive communication - warm, engaging, and vision-driven.",
          observation:
            "Notice how Priya does not open with product features or data. She opens with a human story that makes the client feel understood before any selling begins.",
          coachingTip:
            "When someone opens a sales conversation with a story rather than a specification, they are signalling an expressive style. Engage with the narrative before asking technical questions.",
          styleContext:
            "Expressive communicators believe people buy from people, not from slide decks. The relationship is the foundation of the sale.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and personal, which can look supportive. But notice the energy and forward momentum - Priya is not just empathising, she is selling a vision.",
          observation:
            "A supportive communicator would spend more time listening and validating. Priya listens, then immediately weaves what she hears into a compelling narrative.",
          coachingTip:
            "Expressive communicators use empathy as a tool for persuasion. Supportive communicators use empathy as an end in itself. Priya is building towards a pitch.",
          styleContext:
            "Expressive communicators in sales are storytellers first. They create emotional momentum that makes the product feel inevitable rather than optional.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented data, a structured argument, or a results-focused business case. The approach is entirely story-driven and relational.",
          observation:
            "There are no metrics, timelines, or ROI figures in Priya's opening. The appeal is emotional and personal, not analytical or direct.",
          coachingTip:
            "Ask whether the communicator is leading with facts or feelings. Priya is leading with a human story designed to create connection.",
          styleContext:
            "Expressive communicators believe the strongest sales tool is a story the client can see themselves in. Data comes later, once the emotional buy-in is established.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has asked you to picture every manager having a simple way to check in on their team's wellbeing. How do you respond before the product demo begins?",
      options: [
        {
          id: "s340-opt-a",
          text: "That is exactly what we have been trying to achieve. Our managers want those conversations but do not know where to start. I am excited to see how the platform supports that.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Priya's warmth, validated the vision, and expressed genuine enthusiasm. This keeps the emotional momentum building into the demo.",
        },
        {
          id: "s340-opt-b",
          text: "That sounds promising. Can you show me the data on how this approach compares to traditional survey-based wellbeing tools?",
          score: 5,
          result: "partial",
          explanation:
            "A valid question, but jumping to data comparison before the demo breaks the narrative flow Priya is building. She will get to the evidence - let the story unfold first.",
        },
        {
          id: "s340-opt-c",
          text: "Let us skip the vision and go straight to the platform. I need to see the features and pricing before I can assess whether this is worth pursuing.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the relational approach Priya has carefully built. An expressive communicator will feel shut down and the rapport established so far will be lost.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a follow-up email that continues the warm tone of the meeting, references something personal, and gives the client something to look forward to. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Sarah,\n\nIt was genuinely lovely to meet you and the team today. The passion you all have for getting wellbeing right - not just ticking a box - really came through, especially when you shared the story about the manager who changed how she runs her Monday check-ins.\n\nAs promised, I have attached the case study from a similar-sized organisation that saw a 40% increase in manager-led wellbeing conversations within three months.\n\nI would love to set up a short session next week where we can explore how the platform would look with your branding and team structure built in. How does Wednesday or Thursday afternoon work for you?\n\nLooking forward to the next conversation.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email feels personal, references a specific moment from the meeting, and creates forward momentum with a clear next step. Priya would send this as-is.",
          observation:
            "You struck the right balance between warmth and purpose. The email is friendly but still moves the sale forward with a specific call to action.",
          coachingTip:
            "When writing for expressive communicators, always reference something unique to the conversation. Generic follow-ups feel transactional to them.",
          styleContext:
            "Expressive communicators judge follow-up emails by whether they feel like a continuation of a relationship or a process step. Yours feels like the former.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email references anything specific and personal from the meeting. Generic warmth is not the same as genuine connection.",
          observation:
            "If your email could be sent to any client after any meeting without changes, it is too templated for an expressive communicator.",
          coachingTip:
            "Add one specific detail from the conversation - a name, a story, a moment that stood out. That transforms a form letter into a personal message.",
          styleContext:
            "Expressive communicators remember the moments, not the agenda items. Your follow-up should reflect that.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too transactional, or lacks the warmth that defined the meeting. It reads like a different person wrote it.",
          observation:
            "If your email opens with 'Further to our meeting' or 'Please find attached', it has lost the personal tone entirely.",
          coachingTip:
            "Imagine you are writing to someone you genuinely enjoyed meeting. Let that warmth come through in your language choices.",
          styleContext:
            "Expressive communicators build loyalty through personal connection. A cold follow-up after a warm meeting creates a jarring disconnect that can lose the client.",
        },
      },
    },
  },

  // Scenario 341 - Marcus Webb, sales, intermediate
  {
    id: "scenario-341",
    title: "The Reluctant Prospect",
    context:
      "Marcus is running a sales call with a prospect who has been burned by a previous vendor and is sceptical about new partnerships. Marcus needs to rebuild trust through the conversation before discussing the product.",
    chooseContext:
      "Marcus has spent ten minutes listening to the prospect's bad experience and has validated their frustration. He is now pivoting to share how his team handles things differently, using a client success story.",
    rewriteContext:
      "Marcus has asked you to draft a proposal introduction that acknowledges the prospect's past experience and positions your approach as fundamentally different - without criticising the previous vendor.",
    characterId: "marcus-webb",
    dialogue:
      "I am really glad you told me that story because it explains a lot about why you are cautious. Honestly, I would be cautious too. What happened with your previous vendor is not how we operate, and rather than just saying that, let me tell you about a client who came to us in a very similar situation.",
    chooseDialogue:
      "They had been let down twice before they found us. What changed was not the technology - it was the relationship. We assigned a dedicated account lead who met with them fortnightly, not quarterly. Within six months, they told us it was the first time they felt like a partner, not a contract number.",
    rewriteDialogue:
      "The proposal introduction needs to land with someone who has been hurt before. Acknowledge what they went through without naming the old vendor. Show them what is different about working with us. Make them feel like we get it.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has spent time listening to a prospect's bad experience, validated their caution, and pivoted to a client success story. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus listens with empathy, validates the emotion, and then uses a story to rebuild confidence. This is expressive communication - relational, narrative-driven, and emotionally intelligent.",
          observation:
            "Notice how Marcus does not jump to facts or features to counter the scepticism. He uses a human story to demonstrate trust, knowing that data alone would not persuade a burned prospect.",
          coachingTip:
            "When someone responds to scepticism with a story rather than a rebuttal, they are using an expressive approach. They are rebuilding the emotional foundation before making any claims.",
          styleContext:
            "Expressive communicators understand that trust is rebuilt through stories, not specifications. A prospect who has been hurt needs to feel understood before they can hear solutions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is empathetic, which can look supportive. But notice the strategic purpose - Marcus is using empathy as a bridge to a sales narrative, not as an end in itself.",
          observation:
            "A supportive communicator would stay in the listening phase longer. Marcus validates and then pivots to a story designed to move the conversation forward.",
          coachingTip:
            "Expressive communicators use empathy as a launchpad for storytelling. Supportive communicators use empathy as the destination. Marcus is headed somewhere with his warmth.",
          styleContext:
            "In sales, expressive communicators listen to earn the right to tell a story. The story is the tool that rebuilds trust and creates momentum.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not presented data, a formal comparison, or a structured argument. The entire approach is relational and story-based.",
          observation:
            "There are no product specifications, pricing comparisons, or feature lists in Marcus's approach. The sale is being built on emotional trust, not technical merit.",
          coachingTip:
            "Ask whether the communicator is winning trust through evidence or through connection. Marcus is firmly in the connection camp.",
          styleContext:
            "Expressive communicators believe that a sceptical prospect will not even read the proposal unless they trust the person sending it. The relationship comes first.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has shared a story about a client who came to you after being let down twice, and how the dedicated account lead changed everything. How do you build on this?",
      options: [
        {
          id: "s341-opt-a",
          text: "That resonates. We have felt like a contract number for two years. I would want that same dedicated relationship. Can you talk me through how that looks for us?",
          score: 10,
          result: "strong",
          explanation:
            "You have connected personally with the story, echoed the prospect's own language, and moved the conversation forward with a natural, open question. This rewards Marcus's approach perfectly.",
        },
        {
          id: "s341-opt-b",
          text: "That is a nice story. Can you send me the reference details so I can verify it independently before we go further?",
          score: 5,
          result: "partial",
          explanation:
            "Due diligence is fair, but asking to verify the story immediately can feel transactional and signal distrust. Marcus has just built a bridge - this response puts a toll gate on it.",
        },
        {
          id: "s341-opt-c",
          text: "Everyone says they are different from the last vendor. What I need is a side-by-side feature comparison and a guaranteed SLA before I consider anything else.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the relational approach entirely and reduces the conversation to a procurement exercise. Marcus will feel that his storytelling effort was wasted.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a proposal introduction that acknowledges the prospect's bad experience with a previous vendor and positions your approach as different. Write it in an expressive style - empathetic, forward-looking, and personal.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "We know this is not your first time exploring a partnership like this, and we know the last experience left marks. That matters to us - not as a selling point, but because it tells us exactly what you need from a partner going forward.\n\nWhat we heard in our conversation was a team that wants to trust again but needs to see proof, not promises. That is a fair ask, and it is one we are ready to meet.\n\nThis proposal is built around the things you told us matter most: a named contact who picks up the phone, fortnightly check-ins that you set the agenda for, and transparent reporting that shows you exactly what you are getting for your investment.\n\nWe would love to build something together that makes the last experience feel like a distant memory.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your introduction acknowledges the past without dwelling on it, uses language that feels personal and genuine, and points towards a hopeful future. Marcus would send this with confidence.",
          observation:
            "You avoided criticising the previous vendor while still making it clear that your approach is different. That is a sophisticated balance that expressive communicators handle well.",
          coachingTip:
            "When writing for expressive communicators in sales, lead with acknowledgement, follow with understanding, and close with vision. The prospect should feel heard, understood, and hopeful.",
          styleContext:
            "Expressive communicators build proposals around the relationship, not the product. The features are important, but the trust framework comes first.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your opening genuinely acknowledges the prospect's past experience or glosses over it. Surface-level empathy can feel performative.",
          observation:
            "If your introduction jumps to your differentiators without first sitting with the prospect's frustration, it will feel like every other sales pitch they have received.",
          coachingTip:
            "Spend at least two sentences on what you heard before you say anything about what you offer. That ratio signals genuine listening.",
          styleContext:
            "Expressive communicators know that prospects who have been burned are scanning for sincerity. Your opening sets the tone for whether they will trust the rest of the document.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your introduction is either too corporate, too product-focused, or fails to acknowledge the prospect's history. It reads like a standard proposal, not a response to a specific conversation.",
          observation:
            "If your opening could be sent to any prospect regardless of their history, it has missed the brief. Marcus asked for something personal and empathetic.",
          coachingTip:
            "Rewrite as if you are speaking directly to a person who is nervous about trusting again. What would you want to hear in their position?",
          styleContext:
            "Expressive communicators lose sales when proposals feel generic. A prospect who shared their story in a meeting expects to see that story reflected in the proposal.",
        },
      },
    },
  },

  // Scenario 342 - Nina Okafor, sales, advanced
  {
    id: "scenario-342",
    title: "The Executive Sponsor Buy-In",
    context:
      "Nina is presenting to a board-level executive who can approve a six-figure deal but has only given her fifteen minutes. The champion within the organisation has warned Nina that this executive values energy and big-picture thinking over detail.",
    chooseContext:
      "Nina has used her first five minutes to paint a vision of what the client's business could look like in 12 months. The executive is engaged and leaning forward. Nina now needs to ask for the commitment.",
    rewriteContext:
      "Nina has asked you to draft a one-page executive summary that captures the energy of her presentation in a format the executive can share with the board.",
    characterId: "nina-okafor",
    dialogue:
      "Imagine your team walks into next year's strategy meeting and instead of debating whether to invest in development, they are already showing results. The programme is running, the numbers are up, and the conversation has moved from 'should we' to 'what is next'. That is the 12-month picture I want to paint for you today.",
    chooseDialogue:
      "I can see this lands with you. So here is what I am asking: give us the green light this month, and by Q3 you will have data to present to the board that shows this was the best investment decision of the year. We handle everything - you just need to say yes.",
    rewriteDialogue:
      "Write the executive summary like you are talking to someone who makes decisions on gut and vision, not spreadsheets. One page. Big picture first, then the three things they need to know. Close with something that makes them want to pick up the phone.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina has opened a 15-minute executive pitch by painting a vivid picture of the client's future success and asking the executive to imagine themselves presenting results at next year's strategy meeting. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina uses vivid future-casting, emotional language, and an invitation to imagine success. This is expressive communication at its most persuasive - vision-led, energetic, and designed to inspire action.",
          observation:
            "Nina does not open with data or a structured business case. She opens with a story the executive can see themselves in. That is the expressive communicator's most powerful tool.",
          coachingTip:
            "When someone opens a senior pitch with 'imagine' and paints a future state, they are using expressive persuasion. They are selling the feeling of success before the mechanics of delivery.",
          styleContext:
            "Expressive communicators understand that executives with limited time respond to vision, not detail. A compelling picture of the future can do more in five minutes than a 40-page deck.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is warm and inclusive, which can look supportive. But the energy level and the scale of the vision distinguish this as expressive. Nina is not comforting - she is inspiring.",
          observation:
            "A supportive communicator would focus on how the decision would make the executive feel safe. Nina focuses on how it would make them look brilliant. That is expressive ambition.",
          coachingTip:
            "Expressive communicators in sales sell the glory of the outcome. Supportive communicators sell the security of the process. Nina is selling glory.",
          styleContext:
            "At board level, expressive communicators match the appetite for bold thinking. They understand that executives who allocate 15 minutes want inspiration, not information.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented data, referenced past performance metrics, or built a structured argument. The pitch is entirely built on vision and emotional engagement.",
          observation:
            "There are no spreadsheets, comparison tables, or risk assessments in Nina's opening. The appeal is to the executive's ambition and imagination.",
          coachingTip:
            "Ask whether the communicator is trying to prove a case or inspire a decision. Nina is inspiring. The proof comes later, after the emotional commitment is made.",
          styleContext:
            "Expressive communicators know that executives who give you 15 minutes have already read the brief. They are in the room to feel something, not to learn something.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has asked for the green light this month, promising board-ready data by Q3. The executive is engaged but hesitant about committing without seeing more detail. How do you respond to keep the momentum?",
      options: [
        {
          id: "s342-opt-a",
          text: "I completely understand wanting to see more. Let us schedule a 30-minute deep dive with your team next week where we answer every question, so you can make the call with full confidence.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated the hesitation, offered a clear next step, and kept the energy positive. The timeline is tight enough to maintain momentum without pressuring the executive.",
        },
        {
          id: "s342-opt-b",
          text: "I can send over a detailed proposal with full costings and implementation timelines by end of week. Would that give you what you need?",
          score: 5,
          result: "partial",
          explanation:
            "Practical and helpful, but it shifts the energy from a live conversation to a document review. Nina would prefer to keep the relationship warm and the discussion face-to-face.",
        },
        {
          id: "s342-opt-c",
          text: "Perhaps we should involve procurement at this stage. They will want to see the commercial terms and run a comparison against other providers before any commitment.",
          score: 0,
          result: "weak",
          explanation:
            "This kills the momentum entirely by introducing process at the moment of decision. An expressive communicator has built emotional buy-in - routing it through procurement deflates everything.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a one-page executive summary for a board member who decides on vision, not spreadsheets. Big picture first, three key points, and a close that compels action. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "THE OPPORTUNITY\n\nYour team is ready for this. The appetite for change is there, the infrastructure can support it, and the market is not going to wait. This is the moment to move from planning to doing.\n\nTHREE THINGS TO KNOW\n\n1. Speed to impact: The programme launches within six weeks of sign-off. Your first results data lands before the Q3 board meeting.\n\n2. Zero disruption: We integrate with your existing systems and work alongside your team - no restructuring, no secondments, no downtime.\n\n3. Proven at scale: Three organisations of comparable size and complexity have run this programme in the last 18 months. All three renewed.\n\nTHE ASK\n\nGive us the green light and we will give you a story to tell at the next board meeting - not a plan, a result. Let us make this happen together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary reads like a call to action, not a report. The language is confident, the structure is clean, and the closing line creates urgency without pressure. Nina would present this with pride.",
          observation:
            "You balanced vision with enough substance to be credible. The three key points are concrete but delivered with energy, not dryness.",
          coachingTip:
            "When writing for expressive communicators at board level, every sentence should make the reader feel something. If a sentence is purely informational, rewrite it.",
          styleContext:
            "Expressive communicators know that board members read dozens of proposals. The ones that get approved are the ones that feel alive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your language has enough energy. If it reads like a report rather than a rallying cry, it will not land with a vision-driven executive.",
          observation:
            "If your closing line is 'Please let us know if you would like to proceed', it lacks the bold confidence Nina's approach demands.",
          coachingTip:
            "End with a statement, not a question. 'Let us make this happen' is stronger than 'Would you like to explore this further?'",
          styleContext:
            "Expressive communicators close with confidence because they believe in what they are selling. Tentative closes undermine the entire pitch.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too detailed, too cautious, or too flat. Nina asked for a page that makes someone want to pick up the phone - yours makes them want to file it.",
          observation:
            "If your document reads like it was written by procurement rather than a passionate advocate, it has missed the audience entirely.",
          coachingTip:
            "Read your summary out loud. If it sounds like a contract appendix, start again. It should sound like someone who cannot wait to get started.",
          styleContext:
            "Expressive communicators lose deals when proposals drain the energy from a great meeting. The document must match the conversation.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (343-345) - client
  // ============================================

  // Scenario 343 - Tom Brennan, client, foundation
  {
    id: "scenario-343",
    title: "The Worried New Client",
    context:
      "A new client has just signed a contract but is visibly anxious about the onboarding process. Tom is leading the first kickoff meeting and can sense the client needs reassurance before diving into the project plan.",
    chooseContext:
      "Tom has asked the client what they are most concerned about, and they have admitted they are worried about the disruption to their team during implementation. Tom is now responding.",
    rewriteContext:
      "Tom has asked you to write a welcome email to the new client that makes them feel supported and sets a reassuring tone for the partnership.",
    characterId: "tom-brennan",
    dialogue:
      "Before we look at timelines or deliverables, I want to make sure you feel comfortable with how this whole process works. There is no rush. We have done this with a lot of organisations and the first few weeks are always about finding what works best for your team, not about following a rigid plan.",
    chooseDialogue:
      "That is a completely valid concern, and you are not the first client to raise it. What we have found works best is starting small - we introduce the changes gradually so your team has time to adapt. We are not going to drop a new system on them overnight.",
    rewriteDialogue:
      "Write a welcome email that makes them feel like they are in safe hands. Acknowledge that starting something new can feel daunting. Let them know we will go at their pace and that they can reach out to us any time.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "client",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom opened a client kickoff meeting by pausing before the agenda to check the client's comfort level and reassuring them there is no rush. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the client's emotional comfort before any task-related discussion. He reassures, normalises anxiety, and offers flexibility. This is classic supportive communication.",
          observation:
            "Notice Tom explicitly says 'there is no rush' and frames the early weeks as exploratory, not prescriptive. Supportive communicators create safety before structure.",
          coachingTip:
            "When someone pauses the agenda to check how people are feeling, they are signalling a supportive style. Respond by sharing your concerns openly - they are creating space for that.",
          styleContext:
            "Supportive communicators believe that a client who feels safe will engage more honestly and productively. The relationship investment at the start saves time later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and personable, which can look expressive. But notice the focus is on the client's comfort, not on building excitement or painting a vision.",
          observation:
            "An expressive communicator would use this moment to energise the client about the journey ahead. Tom is calming them, not exciting them.",
          coachingTip:
            "Supportive communicators lower the temperature. Expressive communicators raise it. Tom is deliberately creating calm, not enthusiasm.",
          styleContext:
            "Supportive communicators in client management prioritise psychological safety. They know that anxious clients make poor decisions and hold back important information.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not jumped into the project plan, set targets, or presented data. He has put the client's feelings at the centre of the conversation.",
          observation:
            "There is no urgency, no performance metrics, and no structured framework in Tom's opening. The focus is entirely on how the client feels.",
          coachingTip:
            "Ask whether the communicator's priority is moving the project forward or making the client feel comfortable. Tom is firmly in the comfort camp.",
          styleContext:
            "Supportive communicators believe that how a partnership starts determines how it runs. A client who feels heard from day one becomes a collaborative partner.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has acknowledged your concern about disruption and suggested starting small with gradual changes. How do you respond?",
      options: [
        {
          id: "s343-opt-a",
          text: "That is really reassuring. A gradual approach would go down much better with my team. Could we start with one department as a pilot so people can see how it works first?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the reassurance, built on the gradual approach, and suggested a practical next step that keeps the collaborative tone. Tom will appreciate this engaged, trust-building response.",
        },
        {
          id: "s343-opt-b",
          text: "That sounds sensible. What does the typical implementation timeline look like for organisations our size?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable question, but jumping to timelines moves past the supportive moment Tom has created. He would prefer to explore your concerns more before shifting to logistics.",
        },
        {
          id: "s343-opt-c",
          text: "I appreciate the flexibility, but we actually need to move fast. Can we accelerate the rollout and aim for full implementation within four weeks?",
          score: 0,
          result: "weak",
          explanation:
            "This contradicts the careful, gradual approach Tom has offered. A supportive communicator will worry that rushing will overwhelm your team and damage the partnership.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a welcome email to a new client that is warm, reassuring, and makes them feel supported as they begin the onboarding process. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Claire,\n\nWelcome - we are so glad to be working with you and the team.\n\nI know that starting a new partnership can feel like a lot, especially when your team is already busy with day-to-day priorities. I want you to know that we will take this at whatever pace feels right for you. There is no pressure to have everything figured out straight away.\n\nOver the next couple of weeks, I will be your main point of contact. If anything comes up - whether it is a question, a concern, or just a thought you want to talk through - please reach out. I am here for exactly that.\n\nWe will start with a short call next week to get to know your team and understand what matters most to you. No preparation needed from your side.\n\nLooking forward to building something great together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm without being vague, reassuring without being passive, and sets a clear next step without creating pressure. Tom would send this word for word.",
          observation:
            "You acknowledged the client's likely feelings, offered yourself as a point of contact, and framed the next step as low-effort. Every element reduces anxiety.",
          coachingTip:
            "When writing for supportive communicators, include at least one sentence that explicitly names a potential feeling and normalises it. That creates instant psychological safety.",
          styleContext:
            "Supportive communicators measure the success of a welcome email by whether the client feels calmer after reading it than before.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good warmth, but check whether your email truly acknowledges how the client might be feeling. Simply being friendly is not the same as being reassuring.",
          observation:
            "If your email lists what the client needs to prepare or do before the first meeting, it may inadvertently create the pressure Tom is trying to avoid.",
          coachingTip:
            "Add a sentence that says 'no preparation needed' or 'nothing to worry about before we speak'. Removing tasks removes anxiety.",
          styleContext:
            "Supportive communicators actively reduce the client's to-do list in early communications. Every ask you remove is trust you build.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too task-focused, or fails to acknowledge the emotional experience of starting a new partnership.",
          observation:
            "If your email reads like a project plan or an onboarding checklist, it will increase the client's anxiety rather than reduce it.",
          coachingTip:
            "Rewrite as if you are welcoming someone to a home, not a project. Warmth, reassurance, and availability are the priorities.",
          styleContext:
            "Supportive communicators know that the first email sets the emotional tone for the entire partnership. Get it right and trust builds quickly.",
        },
      },
    },
  },

  // Scenario 344 - Leah Morgan, client, intermediate
  {
    id: "scenario-344",
    title: "The Scope Change Conversation",
    context:
      "A long-standing client has requested a significant scope change midway through a project. The change will affect timelines and costs. Leah needs to have an honest conversation about the implications without damaging the relationship.",
    chooseContext:
      "Leah has acknowledged that the client's request makes sense from their perspective and has asked to walk through the impact together. The client is starting to worry that the changes will blow the budget.",
    rewriteContext:
      "Leah has asked you to draft a scope change summary that is transparent about the implications but maintains the collaborative, supportive tone of the relationship.",
    characterId: "leah-morgan",
    dialogue:
      "I completely understand why this change matters to you - it is clear your stakeholders are asking for something different from what was originally planned. That happens, and it is nothing to worry about. What I want us to do together is look at what this means for the timeline and the budget, so there are no surprises down the line.",
    chooseDialogue:
      "I can see you are concerned about the cost. Let us not jump to worst-case scenarios. Some of the new requirements can be absorbed within the existing scope if we reprioritise. Let me show you a few options so we can find something that works for everyone.",
    rewriteDialogue:
      "Write the scope change summary as a collaborative document, not a change order. Frame it as 'here is what we have explored together' rather than 'here is what it will cost you'. Keep the tone warm and the detail transparent.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Leah has responded to a scope change request by normalising it, reassuring the client, and suggesting they explore the implications together. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah normalises the situation, reassures the client, and frames the difficult conversation as a collaborative exercise. This is supportive communication - protective of the relationship while still being honest.",
          observation:
            "Notice how Leah says 'together' and 'no surprises'. Supportive communicators make the client feel like a partner in solving the problem, not a recipient of bad news.",
          coachingTip:
            "When someone responds to a difficult client conversation by normalising and collaborating, they are using a supportive approach. Match by being open about your concerns.",
          styleContext:
            "Supportive communicators handle scope changes by protecting the relationship first and the project plan second. They know that trust survives scope changes but does not survive surprises.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and engaging, which can look expressive. But the focus is on reducing the client's anxiety, not on building excitement about the new direction.",
          observation:
            "An expressive communicator would reframe the scope change as an exciting opportunity. Leah frames it as a manageable challenge that they will handle together.",
          coachingTip:
            "Supportive communicators calm. Expressive communicators energise. Leah is deliberately lowering the emotional temperature, not raising it.",
          styleContext:
            "Supportive communicators in client management treat every difficult conversation as an opportunity to deepen trust. How you handle problems matters more than how you handle successes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not led with costs, timelines, or contractual implications. She has led with reassurance and collaboration.",
          observation:
            "There is no mention of change order processes, penalty clauses, or risk registers. Leah's priority is the client's emotional state, not the project mechanics.",
          coachingTip:
            "Ask whether the communicator's first instinct is to protect the client's feelings or protect the project. Leah is protecting feelings.",
          styleContext:
            "Supportive communicators know that a calm client makes better decisions. Reducing anxiety is not just kind - it is strategically sound.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has reassured you that some changes can be absorbed and has offered to show you options. How do you respond?",
      options: [
        {
          id: "s344-opt-a",
          text: "That is a relief. I was dreading this conversation. Let us look at the options together - I want something that works without putting too much pressure on your team.",
          score: 10,
          result: "strong",
          explanation:
            "You have been honest about your feelings, expressed relief at Leah's approach, and shown consideration for her team as well. This reciprocal care deepens the supportive dynamic.",
        },
        {
          id: "s344-opt-b",
          text: "Good to know there is some flexibility. Can you put together a revised project plan with costings for each option and send it over by Friday?",
          score: 5,
          result: "partial",
          explanation:
            "Practical and reasonable, but it skips past the collaborative moment Leah has created and turns it into a document request. She would prefer to work through the options together.",
        },
        {
          id: "s344-opt-c",
          text: "We need the full scope change delivered within the original budget and timeline. That is what the contract allows for, and I need you to make it work.",
          score: 0,
          result: "weak",
          explanation:
            "This is confrontational and dismisses the collaborative approach Leah has offered. A supportive communicator will feel that the trust they invested in has been exploited.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a scope change summary that is transparent about costs and timeline impacts but maintains a collaborative, supportive tone. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "SCOPE CHANGE SUMMARY - Prepared together with the Riverside team\n\nFollowing our conversation on Tuesday, we explored how to incorporate the new stakeholder requirements into the existing project plan. Here is what we found.\n\nWhat can be absorbed within the current scope:\n- User interface updates to the dashboard (reprioritised from Phase 3)\n- Revised reporting templates (using existing design framework)\n\nWhat requires additional investment:\n- New data integration module - estimated at 3 additional weeks and an investment of 12,000 pounds\n- Extended user testing phase - estimated at 1 additional week and an investment of 3,500 pounds\n\nOur recommendation:\nWe suggest absorbing the first two items immediately and scheduling a brief call to discuss the additional investment items together. There is no pressure to decide now - we want to make sure the approach feels right for your team and your budget.\n\nWe are here to make this work in whatever way suits you best.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is honest about costs while maintaining a warm, collaborative tone throughout. The language frames the changes as something explored together, not imposed unilaterally.",
          observation:
            "You included 'no pressure to decide now', which is a hallmark of supportive communication. It gives the client space to process without feeling cornered.",
          coachingTip:
            "When writing scope change documents for supportive communicators, use 'we' language throughout. The client should never feel like they are reading demands.",
          styleContext:
            "Supportive communicators believe that transparent, warm communication about difficult topics strengthens relationships rather than straining them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good transparency, but check whether your tone stays warm throughout. If the cost section reads like an invoice, it will jar against the collaborative opening.",
          observation:
            "If your document shifts from friendly language to formal contractual language halfway through, it creates an uncomfortable tonal mismatch.",
          coachingTip:
            "Maintain the same warmth in the cost section as in the opening. 'An additional investment of' is warmer than 'an additional charge of'.",
          styleContext:
            "Supportive communicators are consistent in tone. A document that starts warm and turns cold midway through signals that the warmth was performative.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary reads like a formal change order rather than a collaborative document. The tone does not match the relationship Leah has built.",
          observation:
            "If your document uses phrases like 'the client is advised that' or 'additional charges will apply', it has missed the brief entirely.",
          coachingTip:
            "Rewrite as if you are explaining the situation to a friend who happens to be your client. The honesty stays; the formality goes.",
          styleContext:
            "Supportive communicators know that how you deliver difficult news matters as much as the news itself. A warm document protects the relationship.",
        },
      },
    },
  },

  // Scenario 345 - David Chen, client, advanced
  {
    id: "scenario-345",
    title: "The Client Complaint Resolution",
    context:
      "A valued long-term client has escalated a complaint after a project deliverable fell below their expected standard. David has been asked to lead the recovery conversation and rebuild the client's confidence in the team.",
    chooseContext:
      "David has listened to the client describe their disappointment in detail and has acknowledged each point without defending or deflecting. The client is now calming down and asking what happens next.",
    rewriteContext:
      "David has asked you to draft a formal response to the complaint that takes full ownership while reassuring the client about the steps being taken to prevent a recurrence.",
    characterId: "david-chen",
    dialogue:
      "I hear you, and I want you to know that everything you have described is completely valid. This is not the standard we set for ourselves and it is not the standard you should expect from us. Before we talk about next steps, I want to make sure I have understood every part of your concern - because getting this right matters more to me than getting it fixed quickly.",
    chooseDialogue:
      "Thank you for being so open about how this affected your team. That takes trust, and I do not take it lightly. Here is what I would like to propose: we redo the deliverable at our cost, we assign a senior reviewer to every output going forward, and we schedule a fortnightly check-in so nothing slips without you knowing.",
    rewriteDialogue:
      "Write the complaint response as someone who genuinely cares about this relationship. Take full ownership, do not blame anyone internally or externally, and make the client feel that their experience has changed how we operate - because it should.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "client",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has responded to a client complaint by listening without defending, validating every concern, and prioritising understanding over speed of resolution. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads with validation, prioritises understanding over action, and explicitly says that getting it right matters more than getting it fixed quickly. This is supportive communication at its most skilled.",
          observation:
            "Notice how David thanks the client for their trust in sharing the complaint. Supportive communicators recognise that complaints are acts of trust - the client could have simply left.",
          coachingTip:
            "When someone responds to a complaint by thanking the person for raising it and prioritising understanding, they are using an advanced supportive approach. This de-escalates and deepens trust simultaneously.",
          styleContext:
            "Supportive communicators see complaints as relationship-defining moments. How you respond when things go wrong reveals more about your values than how you behave when things go right.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is warm and empathetic, which can look expressive. But the pace is deliberately slow and the focus is on the client's experience, not on inspiring confidence through energy.",
          observation:
            "An expressive communicator would acknowledge the complaint and quickly pivot to a positive vision of how things will be different. David stays in the acknowledgement phase longer because that is where the healing happens.",
          coachingTip:
            "Supportive communicators in complaint resolution spend more time listening than solving. They know that a client who feels fully heard is more receptive to solutions.",
          styleContext:
            "Supportive communicators resist the urge to fix too quickly. Premature solutions can feel dismissive - as if the problem was not serious enough to sit with.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented a root cause analysis, a process improvement plan, or a data-driven response. The approach is entirely relational and emotionally grounded.",
          observation:
            "There are no process diagrams, escalation matrices, or contractual references in David's response. The focus is on the human impact, not the operational failure.",
          coachingTip:
            "Ask whether the communicator is trying to fix the process or fix the relationship. David is fixing the relationship first, trusting that process fixes will follow.",
          styleContext:
            "Supportive communicators believe that operational failures are symptoms of relational failures. Fix the relationship and the operations improve naturally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has proposed redoing the deliverable at your cost, assigning a senior reviewer going forward, and scheduling fortnightly check-ins. How do you respond?",
      options: [
        {
          id: "s345-opt-a",
          text: "I really appreciate that, David. You listened to everything before jumping to solutions, and that means a lot. The plan sounds right - let us start with the redo and add the senior review step.",
          score: 10,
          result: "strong",
          explanation:
            "You have acknowledged David's approach, expressed genuine appreciation for the listening, and accepted the plan collaboratively. This rewards the supportive style and rebuilds the partnership.",
        },
        {
          id: "s345-opt-b",
          text: "That sounds fair. Can you put the remediation plan in writing with timelines and send it over by end of day? I need something I can share with my leadership team.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and understandable, but moving immediately to documentation shifts the tone from relational to transactional. David would prefer a moment of mutual commitment before formalising.",
        },
        {
          id: "s345-opt-c",
          text: "Honestly, I am not sure redoing the deliverable is enough. I think we need to review the entire contract terms, including the penalty clauses, before we agree to anything.",
          score: 0,
          result: "weak",
          explanation:
            "This escalates the situation after David has worked to de-escalate it. Introducing contractual penalties after a supportive recovery conversation signals that the trust-building effort has failed.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a formal complaint response that takes full ownership, reassures the client, and demonstrates that their feedback has genuinely changed how you operate. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Dear Claire,\n\nThank you for taking the time to share your experience with us. I want to start by saying that what happened was not acceptable, and I take full responsibility for the shortfall in the deliverable your team received.\n\nYour feedback has already prompted changes in how we work. Specifically:\n\n- The deliverable will be redone at our cost, with a senior reviewer assigned to ensure it meets the standard you deserve. We will share a revised draft within ten working days for your review before finalising.\n\n- Going forward, every output on your account will go through an additional quality review before it reaches you. This is not a temporary fix - it is a permanent change to our process.\n\n- I will personally join a fortnightly check-in with your team to make sure you always know where things stand. If anything feels off at any point, I want to hear about it directly.\n\nYour trust matters more to us than any single deliverable. We are committed to earning it back, and I am grateful that you have given us the opportunity to do so.\n\nPlease do not hesitate to reach out to me at any time.\n\nWarm regards,\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response takes complete ownership, details concrete changes, and closes with genuine warmth. The client would finish reading this feeling that their complaint was not just heard but acted upon.",
          observation:
            "You avoided blaming individuals, citing mitigating circumstances, or qualifying the apology. Full ownership without caveats is the hallmark of a skilled supportive communicator.",
          coachingTip:
            "When writing complaint responses in a supportive style, never use the word 'but' after an apology. It undoes everything that came before it.",
          styleContext:
            "Supportive communicators know that a complaint response is a relationship-defining document. Get it right and the client becomes more loyal than they were before the problem occurred.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good ownership, but check whether your response includes any subtle deflection. Phrases like 'unfortunately due to circumstances' or 'while we normally' can undermine the apology.",
          observation:
            "If your response explains why the failure happened before addressing what you are doing about it, the explanation can feel like an excuse.",
          coachingTip:
            "Lead with ownership and action. Save the explanation for a conversation if the client asks for it. In writing, excuses always read worse than they sound.",
          styleContext:
            "Supportive communicators in complaint resolution strip out anything that could be read as self-serving. The document should centre the client's experience, not your explanation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response is either too defensive, too corporate, or fails to take genuine ownership. The client would read this and feel that their complaint was managed, not heard.",
          observation:
            "If your response includes phrases like 'we regret any inconvenience' or 'rest assured that processes are in place', it sounds like a template rather than a genuine response.",
          coachingTip:
            "Delete any sentence that could appear in any company's complaint response without modification. What remains should be specific to this client, this problem, and this relationship.",
          styleContext:
            "Supportive communicators reject corporate language in complaint responses because it signals that the client is a case number, not a valued partner.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (346-348) - team
  // ============================================

  // Scenario 346 - Rachel Finch, team, foundation
  {
    id: "scenario-346",
    title: "The Resource Allocation Discussion",
    context:
      "The team has more work than capacity and needs to decide which projects to prioritise for the coming quarter. Rachel has proposed using a scoring matrix to evaluate each project against five criteria.",
    chooseContext:
      "Rachel has presented the scoring matrix and two team members have pushed back, saying it feels overly bureaucratic for a simple prioritisation discussion. Rachel is defending the approach.",
    rewriteContext:
      "Rachel has asked you to write a summary of the prioritisation outcomes using the scoring data, including the rationale for each decision.",
    characterId: "rachel-finch",
    dialogue:
      "I know a matrix might feel like overkill, but last quarter we prioritised based on gut feeling and ended up resourcing two projects that delivered almost no impact. I have scored each project against revenue potential, strategic alignment, resource requirement, client commitment, and deadline urgency. Let me walk you through the numbers before we decide.",
    chooseDialogue:
      "I understand the frustration, but the alternative is another quarter of subjective decisions. The matrix takes ten minutes to review and it gives us an evidence base we can point to when leadership asks why we chose Project A over Project B. That is worth ten minutes.",
    rewriteDialogue:
      "Write up the outcomes. For each project, include its total score, the top two contributing criteria, and a one-line rationale for why it ranked where it did. If anyone challenges the priorities, this document should answer their questions.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has proposed a five-criteria scoring matrix for project prioritisation and defended it by referencing last quarter's poor outcomes from subjective decision-making. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel uses data, structured evaluation criteria, and evidence from past performance to justify a systematic approach. This is analytical communication - thorough, evidence-based, and methodical.",
          observation:
            "Notice how Rachel references last quarter's poor outcomes as evidence for why the matrix is needed. Analytical communicators build their case on data, not opinion.",
          coachingTip:
            "When someone proposes a structured framework and defends it with evidence from past performance, they are operating in analytical mode. Engage with the data, not the emotion.",
          styleContext:
            "Analytical communicators believe that good decisions require good data. They see structured evaluation as a protection against bias, not as bureaucracy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about using the matrix, which can look direct. But notice the emphasis is on evidence and methodology, not on speed or efficiency.",
          observation:
            "A direct communicator would pick the top three projects based on instinct and move on. Rachel insists on working through the scoring because the process itself matters.",
          coachingTip:
            "If someone insists on the process even when others want to skip it, they value rigour over speed. That is analytical, not direct.",
          styleContext:
            "Analytical communicators are willing to spend time on process because they believe it saves time on correction later. The ten minutes spent scoring saves hours of rework.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not appealed to feelings, shared a personal story, or focused on team morale. The entire approach is structured, data-driven, and evidence-based.",
          observation:
            "There is no warmth or emotional appeal in Rachel's argument. She is defending a process with logic and past performance data.",
          coachingTip:
            "Ask whether the communicator is trying to build consensus through connection or through evidence. Rachel is building her case entirely on evidence.",
          styleContext:
            "Analytical communicators trust data over intuition. When others want to go with gut feeling, an analytical communicator will always push for a more structured approach.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has defended the scoring matrix by pointing out that last quarter's gut-feeling prioritisation led to poor outcomes. How do you respond?",
      options: [
        {
          id: "s346-opt-a",
          text: "Fair point about last quarter. Can you show me how each project scored against the five criteria? I want to understand the methodology before we finalise rankings.",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the evidence-based approach, engaged with the methodology, and asked to understand the detail. This is exactly how an analytical communicator wants the conversation to proceed.",
        },
        {
          id: "s346-opt-b",
          text: "I can see the value in having some structure. Could we simplify it to three criteria instead of five to speed things up?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Rachel has chosen five criteria for a reason. Reducing them without understanding why each was included may remove important distinctions.",
        },
        {
          id: "s346-opt-c",
          text: "I think we all know which projects matter most. We do not need a spreadsheet to tell us what is obvious. Let us just agree on the top three and move on.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the entire analytical approach and repeats the subjective decision-making that Rachel has just shown led to poor outcomes last quarter. She will find this frustrating.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a prioritisation summary showing each project's total score, top two contributing criteria, and a one-line rationale. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Q2 PROJECT PRIORITISATION - Scoring Summary\n\nMethodology: Each project scored against five criteria (revenue potential, strategic alignment, resource requirement, client commitment, deadline urgency) on a 1-5 scale. Maximum possible score: 25.\n\n1. Project Atlas - Score: 22/25\n   Top criteria: Revenue potential (5), Client commitment (5)\n   Rationale: Highest revenue opportunity with a signed client commitment and a hard deadline of 30 June.\n\n2. Project Beacon - Score: 19/25\n   Top criteria: Strategic alignment (5), Deadline urgency (4)\n   Rationale: Directly supports the new market expansion strategy and has a regulatory deadline in Q2.\n\n3. Project Catalyst - Score: 14/25\n   Top criteria: Revenue potential (4), Resource requirement (3)\n   Rationale: Moderate revenue potential but requires significant cross-team resource; recommended for Q3 start.\n\n4. Project Delta - Score: 11/25\n   Top criteria: Strategic alignment (3), Client commitment (3)\n   Rationale: Low urgency and limited client commitment. Defer to Q3 or Q4 pending resource availability.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, data-rich, and every ranking is justified by the scoring criteria. Rachel could present this to leadership without adding anything.",
          observation:
            "You included the methodology at the top, which means anyone reading the document can understand and challenge the basis of the decisions. That transparency is valued by analytical communicators.",
          coachingTip:
            "When writing for analytical communicators, always show your working. The methodology section turns an opinion into an evidence-based recommendation.",
          styleContext:
            "Analytical communicators value documents that can withstand scrutiny. If someone questions the rankings, the scoring data provides the answer.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every ranking is supported by specific data. If any rationale uses words like 'important' or 'significant' without quantifying, it is too vague.",
          observation:
            "If you listed projects without scores or criteria breakdowns, the document becomes a prioritised list rather than a justified prioritisation. The justification is the point.",
          coachingTip:
            "For each project, ask: could someone disagree with this ranking based on the data I have provided? If the data does not settle the debate, you need more detail.",
          styleContext:
            "Analytical communicators see a prioritisation document as a decision audit trail. Every ranking should be traceable back to the scoring criteria.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary lacks the data, structure, or methodological transparency that Rachel requires. It reads like a list of preferences rather than an evidence-based prioritisation.",
          observation:
            "If your document says 'Project A is the most important' without explaining why, it is making the same subjective judgement Rachel was trying to avoid.",
          coachingTip:
            "Go back to the scoring matrix and ensure every claim in your document is supported by a number. Data is the language analytical communicators trust.",
          styleContext:
            "Analytical communicators will not defend a prioritisation they cannot justify with data. Vague rationales make them vulnerable to exactly the challenges they are trying to prevent.",
        },
      },
    },
  },

  // Scenario 347 - Owen Grant, team, intermediate
  {
    id: "scenario-347",
    title: "The Process Improvement Proposal",
    context:
      "Owen has noticed that the team's quality assurance process has a bottleneck that delays delivery by an average of three days per project. He has analysed six months of data and prepared a proposal to restructure the review workflow.",
    chooseContext:
      "Owen has presented the data showing the bottleneck and proposed a two-stage review process to replace the current single-stage approach. A colleague has suggested they simply hire an additional reviewer instead.",
    rewriteContext:
      "Owen has asked you to write a brief to the operations director explaining the proposed process change, including the data that supports it and the expected impact on delivery times.",
    characterId: "owen-grant",
    dialogue:
      "Over the past six months, 78% of our delivery delays have originated at the QA stage. The average wait time for a single review is 3.2 days because everything queues behind one reviewer. I am proposing we split the review into two stages - a technical check and a client readiness check - so they can run in parallel. Based on my modelling, this reduces average wait time to 1.1 days.",
    chooseDialogue:
      "Hiring another reviewer solves the capacity problem but not the process problem. Even with two reviewers doing the same single-stage check, you still get serial delays when both are busy. Two parallel stages with different owners means the work flows continuously. The data supports the structural change over the headcount increase.",
    rewriteDialogue:
      "Write the brief so the operations director can see exactly what the problem is, what the solution is, and what the data says. Include the six-month performance figures and the projected improvement. No opinions - just the evidence and the recommendation.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has analysed six months of delivery data, identified a specific bottleneck, and proposed a structural process change supported by modelling projections. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen builds his entire argument on data - six months of performance figures, a specific percentage, average wait times, and modelling projections. This is analytical communication at its core.",
          observation:
            "Notice how Owen counters the alternative proposal (hiring a reviewer) not with opinion but with structural logic. He explains why the process change is superior to the headcount increase using cause-and-effect reasoning.",
          coachingTip:
            "When someone supports every claim with a number and counters alternatives with structural analysis rather than preference, they are deeply analytical. Engage with the evidence, not the conclusion.",
          styleContext:
            "Analytical communicators do not propose changes based on frustration. They identify problems through data, design solutions through modelling, and justify recommendations through evidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive about the proposed change, which can look direct. But the decision is driven by analysis, not instinct. The data leads the recommendation, not the other way round.",
          observation:
            "A direct communicator would say 'the QA process is too slow, let us fix it.' Owen says 'here is the data showing the QA process is too slow, here is the root cause, and here is the projected impact of the fix.'",
          coachingTip:
            "If someone walks you through the data before stating the recommendation, they are analytical. If they state the recommendation and reference data to support it, they are direct.",
          styleContext:
            "Analytical communicators let the data build the argument. Direct communicators use data to back up an argument they have already made.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not appealed to team morale, shared personal frustrations, or built consensus through connection. The entire proposal is evidence-driven.",
          observation:
            "There are no stories, analogies, or emotional appeals in Owen's pitch. Every sentence contains either a number or a logical connection between numbers.",
          coachingTip:
            "Ask whether the communicator is persuading through evidence or through connection. Owen is persuading entirely through evidence.",
          styleContext:
            "Analytical communicators believe that a well-supported proposal should not need emotional reinforcement. The data speaks for itself.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has explained why a structural process change is more effective than hiring an additional reviewer, using data to support the argument. How do you respond?",
      options: [
        {
          id: "s347-opt-a",
          text: "The data on serial versus parallel processing is convincing. Before we commit, can you show me the sensitivity analysis for what happens if the technical check takes longer than projected?",
          score: 10,
          result: "strong",
          explanation:
            "You have engaged with the analytical framework, accepted the logic, and asked a sophisticated follow-up question that strengthens the proposal. Owen will appreciate this rigour.",
        },
        {
          id: "s347-opt-b",
          text: "That makes sense on paper. Let us try it for a month and see how it works in practice before we commit to a permanent change.",
          score: 5,
          result: "partial",
          explanation:
            "A pilot is reasonable, but Owen has already done extensive modelling. Suggesting a trial without engaging with the data may feel like you are not trusting his analysis.",
        },
        {
          id: "s347-opt-c",
          text: "I think the team just needs to work faster. Adding more process stages will slow people down further. Let us focus on individual performance instead.",
          score: 0,
          result: "weak",
          explanation:
            "This ignores the data entirely and reframes a structural problem as an individual performance issue. Owen will find this frustrating because the evidence clearly shows the bottleneck is systemic.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a brief to the operations director explaining the QA process change, including six-month data and projected improvements. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "BRIEF: QA Process Restructure Proposal\n\nPrepared by: Owen Grant\nDate: 14 March 2026\n\nPROBLEM STATEMENT\nOver the past six months (September 2025 to February 2026), 78% of project delivery delays originated at the QA review stage. The average wait time per review was 3.2 working days, contributing an estimated 19.2 days of cumulative delay per month across the team's active projects.\n\nROOT CAUSE\nThe current single-stage review process creates a serial queue. All deliverables wait for the same reviewer regardless of the nature of the check required. When the reviewer is handling multiple projects, wait times compound.\n\nPROPOSED SOLUTION\nReplace the single-stage review with two parallel stages:\n- Stage 1: Technical accuracy check (owned by the technical lead)\n- Stage 2: Client readiness check (owned by the account manager)\n\nBoth stages run concurrently, with a final sign-off when both are complete.\n\nPROJECTED IMPACT\n- Average wait time reduction: 3.2 days to 1.1 days (66% improvement)\n- Estimated monthly delay reduction: 19.2 days to 6.6 days\n- No additional headcount required\n\nRECOMMENDATION\nImplement the two-stage process from 1 April 2026 with a 12-week measurement period. Review performance data at week 6 and week 12 against the baseline metrics above.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your brief is structured, evidence-based, and every claim is supported by specific data. The operations director can read this in three minutes and understand both the problem and the proposed solution.",
          observation:
            "You included a clear measurement period, which shows the operations director that the change will be evaluated with the same rigour it was proposed with.",
          coachingTip:
            "When writing for analytical communicators, always close with a measurement plan. It signals that you are committed to evidence-based evaluation, not just evidence-based proposals.",
          styleContext:
            "Analytical communicators value proposals that include their own success criteria. A change that cannot be measured cannot be validated.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every number is specific and sourced. If you have used approximate language like 'around three days' instead of '3.2 days', the precision is missing.",
          observation:
            "If your projected impact section uses percentages without the underlying figures, the operations director cannot verify the calculation.",
          coachingTip:
            "Always show the baseline figure, the projected figure, and the percentage change. All three are needed for an analytical reader to trust the projection.",
          styleContext:
            "Analytical communicators expect to be able to check the maths. If they cannot, they will question the recommendation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your brief lacks the data, structure, or specificity that Owen requires. It reads like a proposal based on common sense rather than evidence.",
          observation:
            "If your brief says 'the QA process is too slow and needs to change' without quantifying the problem, it is an opinion, not an analysis.",
          coachingTip:
            "Start with the data. What does the current process cost in time? What would the proposed process save? If you cannot answer those questions with numbers, the brief is not ready.",
          styleContext:
            "Analytical communicators will not present a proposal they cannot defend with data. Every claim needs a number behind it.",
        },
      },
    },
  },

  // Scenario 348 - Fiona Banks, team, advanced
  {
    id: "scenario-348",
    title: "The Cross-Team Dependency Audit",
    context:
      "Fiona has been asked to investigate why projects involving multiple teams consistently overrun. She has mapped every cross-team dependency over the past year and identified three structural patterns causing delays.",
    chooseContext:
      "Fiona has presented her dependency map to the senior leadership team. The head of engineering has pushed back, arguing that the delays are caused by unclear requirements from the product team, not structural dependencies.",
    rewriteContext:
      "Fiona has asked you to write an executive summary of the dependency audit findings that presents the three patterns, the supporting data, and the recommended interventions.",
    characterId: "fiona-banks",
    dialogue:
      "I have mapped 47 cross-team handoffs across 12 projects delivered in the last 12 months. Three patterns account for 83% of the delays. Pattern one: sequential approval chains where three or more teams must sign off before work continues. Pattern two: shared resources allocated to multiple projects simultaneously with no prioritisation framework. Pattern three: late-stage requirement changes that trigger rework across dependent teams.",
    chooseDialogue:
      "I appreciate the perspective, and unclear requirements is certainly a factor - it shows up in pattern three. But the data shows that even projects with stable requirements still overran when they hit the sequential approval chain. That tells me the structural issue is independent of requirement quality. Both need addressing, but the structure problem will persist even if requirements improve.",
    rewriteDialogue:
      "Write the executive summary so it stands on its own. Include the sample size, the three patterns with their data, and a clear intervention for each one. This document will be circulated beyond the people who attended the presentation, so it needs to be self-explanatory.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "team",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has mapped 47 cross-team handoffs, identified three delay patterns accounting for 83% of overruns, and responded to a pushback by separating structural issues from requirement issues using data. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's entire approach is built on systematic data collection, pattern identification, and evidence-based reasoning. Even her response to pushback is structured around what the data shows, not what she believes.",
          observation:
            "Notice how Fiona does not dismiss the engineering head's point. She incorporates it into her framework - acknowledging it as pattern three - while using data to show the structural problem is independent. This is analytical diplomacy.",
          coachingTip:
            "When someone responds to a challenge by integrating the challenger's point into their framework and then showing where the data diverges, they are operating at an advanced analytical level.",
          styleContext:
            "Analytical communicators handle disagreement by expanding the analysis, not by defending their position. If the data supports the challenger's point, they incorporate it. If it does not, they show why.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive in defending her findings, which can look direct. But the defence is built entirely on evidence, not on authority or conviction.",
          observation:
            "A direct communicator would say 'the data is clear, let us move on'. Fiona walks through the logic showing why the challenger's point, while valid, does not invalidate the structural finding.",
          coachingTip:
            "If someone responds to a challenge by showing their working rather than asserting their conclusion, they are analytical. The process of reasoning matters as much as the answer.",
          styleContext:
            "Analytical communicators earn credibility by being willing to engage with counter-arguments on their merits. Dismissing challenges without data would undermine their own approach.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not used emotional appeals, team solidarity, or personal conviction to make her case. Every point is supported by specific data from a systematic audit.",
          observation:
            "There are no qualitative judgements in Fiona's presentation. She does not describe the delays as 'frustrating' or 'unacceptable' - she describes them as patterns with measurable frequencies.",
          coachingTip:
            "Ask whether the communicator is building a case through evidence or through persuasion. Fiona is building through evidence alone.",
          styleContext:
            "Analytical communicators at advanced levels let the data carry the emotional weight. If 83% of delays come from three patterns, the urgency is in the number, not in how they describe it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has shown that the structural dependency issue persists even when requirements are stable, separating it from the requirements quality problem. How do you respond?",
      options: [
        {
          id: "s348-opt-a",
          text: "That distinction is helpful. If approval chain delays exist independently of requirement quality, they need a separate workstream. Can you share which chains cause the longest delays so we target the highest-impact change first?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the analytical distinction, asked for deeper data, and proposed a targeted approach based on impact. This engages with Fiona's methodology and advances the discussion productively.",
        },
        {
          id: "s348-opt-b",
          text: "I see your point. Let us set up a working group to look at both the structural and requirements issues and come back with a combined plan in four weeks.",
          score: 5,
          result: "partial",
          explanation:
            "A constructive response, but bundling both issues into one working group may dilute the focus Fiona's analysis has created. She has shown they are independent problems requiring independent solutions.",
        },
        {
          id: "s348-opt-c",
          text: "With respect, I have been running engineering projects for fifteen years and the root cause is always the same - bad requirements. The approval chains are a symptom, not the cause.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses a year of systematic data in favour of personal experience. An analytical communicator will find this deeply frustrating because the evidence directly contradicts the claim.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a self-explanatory executive summary of the dependency audit: sample size, three patterns with data, and one intervention per pattern. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "EXECUTIVE SUMMARY: Cross-Team Dependency Audit\n\nScope: 12 projects delivered between March 2025 and February 2026, involving 47 cross-team handoffs across five departments.\n\nKey finding: Three structural patterns account for 83% of all recorded delivery delays.\n\nPATTERN 1 - Sequential Approval Chains (39% of delays)\nProjects requiring sign-off from three or more teams before work continues experienced an average delay of 4.7 working days per approval cycle. 9 of 12 projects included at least one such chain.\nIntervention: Replace sequential approvals with a parallel review window of 48 hours. Any team that does not respond within the window is deemed to have approved.\n\nPATTERN 2 - Shared Resource Contention (27% of delays)\n14 of the 47 handoffs involved shared resources allocated to two or more projects simultaneously. In these cases, the average delay was 3.1 working days compared to 0.8 days for dedicated resources.\nIntervention: Implement a quarterly resource allocation framework that assigns shared resources to a primary project with a defined percentage split, reviewed monthly.\n\nPATTERN 3 - Late-Stage Requirement Changes (17% of delays)\nRequirement changes introduced after the 60% completion mark triggered rework across an average of 2.3 dependent teams per change.\nIntervention: Introduce a requirements freeze at the 50% completion mark. Any changes after this point require a documented impact assessment and sign-off from all affected team leads before proceeding.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is self-explanatory, data-rich, and each pattern is paired with a specific, actionable intervention. Someone reading this without attending the presentation would understand the problem and the proposed solution completely.",
          observation:
            "You quantified every claim - percentages, averages, counts. An analytical communicator reading this can verify the logic and assess the interventions against the data.",
          coachingTip:
            "When writing executive summaries for analytical communicators, ensure the document can survive without a presenter. Every claim should be supported within the text itself.",
          styleContext:
            "Analytical communicators design documents to withstand scrutiny from people who were not in the room. Self-explanatory means self-defending.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your interventions are as specific as your problem statements. If you have quantified the patterns but proposed vague solutions, the document is lopsided.",
          observation:
            "If an intervention says 'improve coordination between teams' without specifying how, it does not meet the standard Fiona has set with her analysis.",
          coachingTip:
            "Match the specificity of your solutions to the specificity of your problems. Vague fixes for precise diagnoses undermine the entire analysis.",
          styleContext:
            "Analytical communicators lose credibility when their recommendations are less rigorous than their findings. The whole document must meet the same evidentiary standard.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either lacks sufficient data, presents patterns without evidence, or proposes interventions that cannot be measured. Fiona would not circulate this.",
          observation:
            "If your document says 'projects often overrun due to cross-team issues' without specifying which issues, how often, or by how much, it is a narrative, not an analysis.",
          coachingTip:
            "Start again with the numbers. How many projects? How many handoffs? What percentage of delays per pattern? Build the document from the data up, not the conclusion down.",
          styleContext:
            "Analytical communicators will not put their name on a document that substitutes description for evidence. Every sentence must earn its place with data.",
        },
      },
    },
  },
];
