import { Scenario } from "@/types";

export const SCENARIOS_PART16: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (181-183)
  // ============================================

  // Scenario 181 - Jordan Cole, team, foundation
  {
    id: "scenario-181",
    title: "The Team Values Workshop",
    context:
      "Your team has been asked to define a set of shared values to guide how you work together. Jordan has been brought in to facilitate the session and has arrived with a clear agenda.",
    chooseContext:
      "Jordan has listened to two rounds of suggestions from the group and is now cutting through the noise to narrow the list down to three actionable values.",
    rewriteContext:
      "Jordan has asked you to draft a one-page summary of the agreed team values, including a single-sentence definition for each and one observable behaviour that demonstrates it.",
    characterId: "jordan-cole",
    dialogue:
      "We have 45 minutes. The goal is three values, not ten. I have seen teams spend whole away days on this and end up with a poster no one reads. We are going to agree three, define what they look like in practice, and move on.",
    chooseDialogue:
      "Half of these overlap. 'Integrity' and 'honesty' are the same thing. Pick one. 'Innovation' means nothing without a behaviour attached to it. Give me something I can actually observe in a meeting.",
    rewriteDialogue:
      "Write up the three values. One sentence each, no fluff. Under each one, list one specific behaviour that proves someone is living it. If it reads like a motivational poster, start again.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened a team values workshop by setting a strict time limit, demanding only three values, and dismissing lengthy processes. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan immediately imposes constraints, dismisses drawn-out approaches, and focuses on getting to an actionable outcome quickly. This is classic direct communication.",
          observation:
            "Notice how Jordan frames values in terms of observable behaviour, not abstract ideals. Direct communicators want outputs they can measure and hold people to.",
          coachingTip:
            "When a facilitator opens by setting tight boundaries and dismissing lengthy alternatives, they are signalling a direct style. Match their pace with concise contributions.",
          styleContext:
            "Direct communicators see values workshops as a risk for wasted time. They bring structure and urgency to keep the discussion productive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan is structured, which can look analytical. But notice the emphasis is on speed and decisiveness, not on thorough analysis or evidence-based reasoning.",
          observation:
            "An analytical facilitator would ask the group to evaluate each value against criteria. Jordan simply tells the group to cut the list and move on.",
          coachingTip:
            "If someone imposes structure to save time, that is direct. If they impose structure to ensure rigour, that is analytical. Jordan is firmly in the time-saving camp.",
          styleContext:
            "Direct communicators use structure as a tool for efficiency. Analytical communicators use structure as a tool for accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not invited personal stories, emotional reflections, or open-ended exploration. The entire session is framed around efficiency and concrete outputs.",
          observation:
            "There is no warmth or encouragement to share feelings about what values matter most. Jordan treats this as a task to complete, not an experience to savour.",
          coachingTip:
            "Ask yourself: is this person trying to build connection or drive results? Jordan is entirely focused on producing a usable output in minimum time.",
          styleContext:
            "Direct communicators believe values only matter if they translate into observable behaviour. Abstract statements feel like wasted effort to them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has challenged the group to stop listing overlapping values and instead offer something observable. How do you respond?",
      options: [
        {
          id: "s181-opt-a",
          text: "Fair point. Let us go with 'ownership'. The observable behaviour: every task has a single named person responsible, and they update the team without being asked.",
          score: 10,
          result: "strong",
          explanation:
            "Concise, specific, and immediately actionable. You have matched Jordan's demand for a value tied to a concrete, observable behaviour.",
        },
        {
          id: "s181-opt-b",
          text: "I think we need to explore what innovation means to each of us before we dismiss it. Perhaps we could go round the table and share examples.",
          score: 5,
          result: "partial",
          explanation:
            "This shows thoughtfulness, but Jordan has already signalled that open-ended exploration is not the approach for this session. It risks slowing the group down.",
        },
        {
          id: "s181-opt-c",
          text: "I feel like rushing this might mean we miss something important. Values should come from the heart, and that takes time to surface properly.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Jordan's approach. A direct communicator will see this as resistance to progress rather than a meaningful contribution.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write up the three agreed team values with a one-sentence definition and one observable behaviour each. Write it in a direct style with no filler.",
      targetTraits: ["concise", "action-oriented", "observable-behaviours", "no-fluff"],
      exampleStrongResponse:
        "Team Values\n\n1. Ownership: Every task has a single named owner who delivers without chasing.\n   Behaviour: You update the team on progress before anyone asks.\n\n2. Candour: We say what needs to be said, directly and respectfully.\n   Behaviour: You raise concerns in the meeting, not in the corridor afterwards.\n\n3. Pace: We prioritise speed of decision over perfection of analysis.\n   Behaviour: You make a call with 80% of the information rather than waiting for 100%.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your write-up is tight, specific, and each value is grounded in something observable. Jordan would approve this without edits.",
          observation:
            "You avoided abstract language and tied every value to a behaviour someone could actually witness in a meeting or project update.",
          coachingTip:
            "When writing for direct communicators, test each sentence by asking: could I see this happening? If not, it is too vague.",
          styleContext:
            "Direct communicators judge values documents by whether they can be used to hold people accountable. Vague aspirations fail that test.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your behaviours are truly observable. Phrases like 'be committed' or 'show respect' are still abstract.",
          observation:
            "If your definitions use words like 'strive', 'aspire', or 'embrace', they are too soft for a direct communicator's taste.",
          coachingTip:
            "Replace every abstract verb with a concrete action. 'Embrace feedback' becomes 'act on feedback within 48 hours'.",
          styleContext:
            "Direct communicators want values they can point to in a performance conversation. The more specific, the more useful.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your write-up is either too wordy, too abstract, or reads like a corporate mission statement rather than a practical guide.",
          observation:
            "If your document includes phrases like 'we believe in creating an environment where everyone can thrive', it has missed the brief entirely.",
          coachingTip:
            "Delete any sentence that could appear on any company's website without modification. What remains should be specific to this team.",
          styleContext:
            "Direct communicators dismiss generic values statements as performative. They want language that commits the team to specific actions.",
        },
      },
    },
  },

  // Scenario 182 - Sam Hartley, negotiation, intermediate
  {
    id: "scenario-182",
    title: "The Office Relocation Terms",
    context:
      "Your company is relocating to a new building and Sam has been tasked with negotiating the lease terms with the landlord's agent. You are in the meeting as the finance representative.",
    chooseContext:
      "The landlord's agent has proposed a five-year break clause with a six-month notice period. Sam thinks that is too restrictive and is pushing back hard.",
    rewriteContext:
      "Sam has asked you to draft a counter-proposal email to the landlord's agent, outlining your preferred lease terms with clear justification for each point.",
    characterId: "sam-hartley",
    dialogue:
      "Five years with no break clause is not happening. We need a three-year break with 90 days notice. The market is moving too fast to lock ourselves in for half a decade. What is your best position on this?",
    chooseDialogue:
      "Six months notice on a break clause defeats the purpose. If we decide to leave, we need to move within a quarter, not sit around paying rent on a building we have outgrown. Drop it to 90 days or we walk.",
    rewriteDialogue:
      "Send the agent our counter-proposal today. Three-year break, 90 days notice, rent review capped at CPI. No fluff, just terms and reasoning. One page maximum.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has opened a lease negotiation by immediately rejecting the landlord's proposal and stating a firm counter-position with a clear deadline demand. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam rejects the offer immediately, states a clear counter-position, and applies pressure with 'or we walk'. This is a direct negotiator setting the terms of engagement.",
          observation:
            "Notice how Sam frames the negotiation as binary: accept these terms or we leave. Direct communicators use urgency and clarity to force a decision.",
          coachingTip:
            "When a negotiator leads with a firm position and a consequence for refusal, they are operating in a direct style. Match their clarity, even if you soften the delivery.",
          styleContext:
            "Direct communicators negotiate by stating what they want and what happens if they do not get it. They see ambiguity as a weakness in negotiation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Sam does reference market conditions, which can seem analytical. But the reasoning is brief and serves to justify a position already taken, not to explore options.",
          observation:
            "An analytical negotiator would present market data, comparables, and a detailed risk assessment. Sam mentions the market in one sentence and moves straight to the demand.",
          coachingTip:
            "If someone uses evidence to support a decision already made, that is direct. If they present evidence to help reach a decision, that is analytical.",
          styleContext:
            "Direct communicators use data as a weapon, not a discovery tool. The conclusion comes first; the evidence is there to back it up.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not tried to build a relationship with the agent, explore shared interests, or find creative win-win solutions. The approach is positional and firm.",
          observation:
            "There is no attempt to understand the landlord's perspective or to frame the negotiation as a partnership. Sam is focused entirely on getting the terms that work for the company.",
          coachingTip:
            "Ask yourself: is this person seeking agreement through connection or through pressure? Sam is firmly in the pressure camp.",
          styleContext:
            "Direct communicators negotiate to win, not to bond. They see negotiation as a transaction where clarity of position is the fastest route to resolution.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has told the agent that six months notice on the break clause is unacceptable and threatened to walk. How do you support Sam's position?",
      options: [
        {
          id: "s182-opt-a",
          text: "To be clear, 90 days is our maximum. Anything beyond that creates a financial exposure we are not prepared to carry. The numbers do not support six months.",
          score: 10,
          result: "strong",
          explanation:
            "You reinforce Sam's position with a clear, concise financial justification. The tone matches Sam's directness without repeating the threat, which adds credibility.",
        },
        {
          id: "s182-opt-b",
          text: "Perhaps we could meet in the middle at four months? That gives both sides a bit of flexibility and shows good faith on our part.",
          score: 5,
          result: "partial",
          explanation:
            "Compromise is reasonable, but Sam has drawn a clear line at 90 days. Offering four months without checking with Sam first may undermine the negotiating position.",
        },
        {
          id: "s182-opt-c",
          text: "I appreciate this is a big decision for both sides. Maybe we should take some time to reflect and come back with fresh perspectives next week.",
          score: 0,
          result: "weak",
          explanation:
            "This kills the momentum Sam has built. A direct negotiator wants to close, not pause. Suggesting a cooling-off period signals weakness in this context.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to draft a one-page counter-proposal email to the landlord's agent covering the three-year break clause, 90-day notice period, and CPI-capped rent review. Write it in a direct style.",
      targetTraits: ["concise", "structured", "firm-position", "clear-reasoning"],
      exampleStrongResponse:
        "Subject: Counter-Proposal, Office Lease Terms\n\nFollowing our meeting today, please find our revised position on the lease terms.\n\n1. Break clause: Three years, not five. Our growth trajectory means we cannot commit beyond this without flexibility.\n2. Notice period: 90 days. Six months creates an unacceptable financial exposure during any transition.\n3. Rent review: Capped at CPI annually. We will not accept open-market reviews that introduce unpredictable cost increases.\n\nThese terms are firm. We are ready to sign within two weeks if agreed. Please confirm your client's position by Friday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your counter-proposal is structured, firm, and each point includes a clear reason. Sam would send this without changes.",
          observation:
            "You stated positions, gave brief justifications, and included a deadline. This is exactly how direct communicators handle written negotiations.",
          coachingTip:
            "In written negotiations for direct communicators, every paragraph should contain a position and a reason. Nothing else is needed.",
          styleContext:
            "Direct communicators see counter-proposals as a chance to demonstrate clarity and resolve. Ambiguous language invites the other side to push back.",
        },
        partial: {
          result: "partial",
          explanation:
            "Heading in the right direction, but check whether your email states clear positions or leaves room for interpretation. Direct communicators want certainty, not options.",
          observation:
            "If your email includes phrases like 'we would prefer' or 'ideally we would like', it is too soft for Sam's approach.",
          coachingTip:
            "Replace 'we would like' with 'we require'. Replace 'ideally' with nothing. State what you want as a fact, not a wish.",
          styleContext:
            "Direct communicators in negotiations treat their position as non-negotiable until proven otherwise. The language should reflect that confidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too tentative, or focused on preserving the relationship rather than securing the terms Sam needs.",
          observation:
            "If your email opens with several sentences about valuing the partnership, the agent will read it as a signal that you are willing to compromise.",
          coachingTip:
            "Write the email, then remove anything that does not state a term or justify it. What remains is what Sam wants to send.",
          styleContext:
            "Direct communicators believe that in negotiations, warmth is interpreted as weakness. They build relationships through fair dealing, not through friendly language.",
        },
      },
    },
  },

  // Scenario 183 - Alex Tran, one-to-one, advanced
  {
    id: "scenario-183",
    title: "The Succession Planning Discussion",
    context:
      "You are in a private meeting with Alex to discuss succession planning for a senior role that will open up in six months. Alex has been identified as a potential successor and wants to understand the timeline and expectations.",
    chooseContext:
      "Alex has asked you directly whether she is the only candidate or whether this is a competitive process. She wants a straight answer before committing additional effort.",
    rewriteContext:
      "Alex has asked you to put the development expectations in writing so she can track her own progress and hold you accountable for the support you have promised.",
    characterId: "alex-tran",
    dialogue:
      "I want to know exactly what I need to demonstrate in the next six months to get this role. Not vague competency frameworks. Specific deliverables, specific outcomes. If there are gaps in my profile, tell me now so I can close them.",
    chooseDialogue:
      "Am I the only candidate? Because if this is a development exercise disguised as succession planning, I would rather know now. I am not interested in competing for something that has already been decided.",
    rewriteDialogue:
      "Put the expectations in an email. What I need to deliver, what support you are providing, and how we measure progress. I want something I can refer back to when we review this in three months.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has responded to a succession planning discussion by demanding specific deliverables, rejecting vague frameworks, and asking for gaps to be named immediately. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex wants specifics, rejects ambiguity, and frames development as a transaction with clear inputs and outputs. This is an advanced direct communicator managing their own career trajectory.",
          observation:
            "The phrase 'tell me now so I can close them' is revealing. Alex treats development gaps as problems to solve immediately, not as areas for gradual growth.",
          coachingTip:
            "When someone demands a clear success criteria for a role, they are thinking like a direct communicator. Respond with equally precise expectations.",
          styleContext:
            "Direct communicators approach career development as a project with milestones. They want to know the finish line and the fastest route to it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Alex is asking for detailed criteria, which can seem analytical. But notice that Alex is not asking for the reasoning behind the criteria. She wants the list, not the methodology.",
          observation:
            "An analytical communicator would ask why certain competencies matter for the role and how the assessment framework was designed. Alex just wants to know what to do.",
          coachingTip:
            "The distinction is intent. Analytical asks 'why these criteria?' Direct asks 'what are the criteria?' Alex is firmly in the 'what' camp.",
          styleContext:
            "Direct communicators want criteria so they can act on them. Analytical communicators want criteria so they can evaluate whether they are fair and comprehensive.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not expressed excitement about the opportunity, concern about how the process affects colleagues, or a desire to discuss her feelings about the potential promotion.",
          observation:
            "There is no emotional language, no relationship concern, and no interest in how others might perceive the process. This is purely outcome-focused.",
          coachingTip:
            "Ask yourself: is this person focused on the opportunity or on the relationship? Alex is entirely focused on what she needs to deliver to secure the outcome.",
          styleContext:
            "Direct communicators see succession planning as a contract. They commit effort in exchange for a clear path to the role. Ambiguity breaks that contract.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has asked you directly whether she is the only candidate and whether the process is genuine. How do you respond?",
      options: [
        {
          id: "s183-opt-a",
          text: "You are the strongest internal candidate. One external candidate is being benchmarked. The decision will be made on the criteria I outlined, and I will be transparent about where you stand at each stage.",
          score: 10,
          result: "strong",
          explanation:
            "Honest, specific, and respectful of Alex's need for transparency. You have answered the question directly without being evasive or over-promising.",
        },
        {
          id: "s183-opt-b",
          text: "I cannot share the full details of the process, but I can tell you that you are being seriously considered and we are investing in your development for a reason.",
          score: 5,
          result: "partial",
          explanation:
            "This is reassuring but vague. Alex has asked a specific question and you have answered with implication rather than facts. She will push back.",
        },
        {
          id: "s183-opt-c",
          text: "Let us not get too focused on the competition. What matters is your own growth journey. If we focus on development, the right outcome will follow naturally.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the kind of evasion Alex warned about. She asked a direct question and you have responded with a platitude. This will erode trust immediately.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to email her the succession development expectations, including deliverables, support, and progress measures. Write it in a direct style that she can hold you accountable to.",
      targetTraits: ["specific-deliverables", "measurable-outcomes", "mutual-accountability", "concise"],
      exampleStrongResponse:
        "Subject: Succession Development Plan, Next Six Months\n\nAlex, here is what we agreed.\n\nYour deliverables:\n1. Lead the Q3 operational review and present findings to the board by 30 September.\n2. Complete the finance for non-finance leaders programme by end of August.\n3. Resolve the ongoing supplier dispute with a signed agreement by 15 October.\n\nMy commitments:\n1. Monthly one-to-one reviews on your progress against these deliverables.\n2. Introduction to two board members for informal relationship-building by end of July.\n3. Written feedback after each milestone, within five working days.\n\nWe review formally at the three-month mark. If anything changes, I will tell you directly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured around mutual accountability with specific deliverables and dates. Alex would trust this as a genuine commitment.",
          observation:
            "You included both sides of the deal: what Alex must deliver and what you will provide. Direct communicators respect reciprocal accountability.",
          coachingTip:
            "When writing development plans for direct communicators, make your own commitments as specific as theirs. It builds trust through demonstrated fairness.",
          styleContext:
            "Direct communicators hold others accountable most effectively when they hold themselves to the same standard. Mutual specificity is the foundation of trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good framework, but check whether your deliverables include dates and whether your own commitments are equally specific. Alex will notice any asymmetry.",
          observation:
            "If your email lists Alex's obligations in detail but describes your support in general terms, it reads as a one-sided contract.",
          coachingTip:
            "Apply the same test to your commitments as to hers. If Alex can hold you to account using your own words, the email works.",
          styleContext:
            "Direct communicators test written agreements by asking: could I use this to challenge someone who did not follow through? If yes, it is specific enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email lacks the specificity Alex requested. If it reads more like an encouraging note than a development contract, it has missed the mark.",
          observation:
            "If your email includes phrases like 'we will work together to identify opportunities' or 'I am confident in your potential', Alex will see it as evasion.",
          coachingTip:
            "Replace every promise with a deliverable. 'I will support you' becomes 'I will provide written feedback within five working days of each milestone'.",
          styleContext:
            "Direct communicators do not want encouragement in place of commitment. They want specifics they can track and refer back to.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (184-186)
  // ============================================

  // Scenario 184 - Priya Sharma, one-to-one, foundation
  {
    id: "scenario-184",
    title: "The Burnout Conversation",
    context:
      "You are having a one-to-one with Priya, who has been visibly exhausted in recent weeks. She has agreed to an informal catch-up to talk about how she is feeling and what might help.",
    chooseContext:
      "Priya has opened up about feeling overwhelmed and is now describing the emotional toll of carrying too many projects at once. She is looking for empathy before solutions.",
    rewriteContext:
      "Priya has asked you to help her draft a message to her manager explaining that she needs to step back from one of her projects, framing it in a way that feels honest but not defeatist.",
    characterId: "priya-sharma",
    dialogue:
      "Honestly, I have been running on fumes. Every morning I wake up already behind, and by the end of the day I feel like I have achieved nothing meaningful. I used to love this work, and right now I am just surviving it. Something has to change.",
    chooseDialogue:
      "I know the logical answer is to drop a project, but it feels like admitting defeat. I poured so much of myself into the community engagement work, and walking away from it would break my heart. I just want someone to understand how hard this is.",
    rewriteDialogue:
      "Help me write something to my manager that is real but not dramatic. I want her to understand this is not a complaint; it is me being honest about what I can and cannot sustain. I want it to sound like me, not like a policy document.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has described her burnout using emotional language, referencing how she used to love the work and now feels she is just surviving. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya expresses her experience through emotion and narrative. She describes how burnout feels, not just what it means practically. This is expressive communication at its most personal.",
          observation:
            "The contrast between 'I used to love this work' and 'I am just surviving it' is a storytelling device. Expressive communicators make their point through emotional contrast.",
          coachingTip:
            "When someone describes a work problem through how it makes them feel rather than what it costs the business, they are communicating expressively. Acknowledge the emotion first.",
          styleContext:
            "Expressive communicators process stress by talking about it openly. They need to feel heard emotionally before they can engage with practical solutions.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does show vulnerability, which can look supportive. But notice she is centring her own emotional experience, not focusing on how her burnout affects others.",
          observation:
            "A supportive communicator might say 'I am worried I am letting the team down'. Priya says 'I feel like I have achieved nothing meaningful'. The focus is on her own sense of purpose.",
          coachingTip:
            "Expressive communicators talk about their own feelings. Supportive communicators talk about how situations affect relationships. Listen for where the emotional focus lands.",
          styleContext:
            "Expressive communicators are comfortable being the centre of an emotional conversation. Supportive communicators tend to redirect attention to others.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented data, metrics, or a logical framework for her workload. She has not asked for a structured analysis of capacity. This is an emotional disclosure, not a factual report.",
          observation:
            "There are no numbers, no project names, and no process suggestions. The entire message is built around feeling.",
          coachingTip:
            "Ask yourself: is this person describing a situation or describing how a situation makes them feel? Priya is entirely in the feelings space.",
          styleContext:
            "Expressive communicators lead with emotion because that is where their experience lives. Responding with logic before acknowledging the emotion will feel dismissive.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has said that dropping a project feels like admitting defeat and she wants someone to understand how hard this is. How do you respond?",
      options: [
        {
          id: "s184-opt-a",
          text: "I can hear how much the community work means to you. Stepping back from something you care about deeply is not defeat; it is protecting the passion that made you brilliant at it. That takes courage.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated Priya's emotional experience, reframed stepping back as strength, and used language that mirrors her expressive style. This is exactly what she needs to hear.",
        },
        {
          id: "s184-opt-b",
          text: "You are right that something needs to change. Let us look at your project list and work out which one has the least strategic impact so we can build a case for your manager.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and helpful, but Priya asked to be understood emotionally before moving to solutions. Jumping straight to the project list skips the step she needs most.",
        },
        {
          id: "s184-opt-c",
          text: "Everyone goes through phases like this. It usually passes once the workload settles down. Try to take a few early finishes this week and see if that helps.",
          score: 0,
          result: "weak",
          explanation:
            "This minimises Priya's experience. Telling an expressive communicator that their feelings are temporary and common is the fastest way to shut the conversation down.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants help drafting a message to her manager about stepping back from a project. She wants it to sound honest and personal, not formal or like a policy document. Write it in an expressive style.",
      targetTraits: ["personal-tone", "emotionally-honest", "narrative-driven", "authentic"],
      exampleStrongResponse:
        "Hi Sarah, I wanted to be honest with you about where I am right now. Over the past few months, I have been stretched across too many projects, and I can feel it affecting the quality of my work and my energy. The community engagement programme means a huge amount to me, but I have reached a point where I cannot do it justice alongside everything else. I would like to step back from the vendor review project so I can give my best to the work that matters most. This is not me checking out; it is me trying to protect the standard I hold myself to. I would love to talk this through with you when you have a moment.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message sounds genuinely like Priya: honest, personal, and emotionally grounded without being dramatic. It tells a story rather than filing a request.",
          observation:
            "You framed stepping back as a choice driven by values, not by inability. Expressive communicators respond well to language that honours their sense of purpose.",
          coachingTip:
            "When writing for expressive communicators, let the message sound like a conversation. If it reads like it could be spoken aloud naturally, you have the right tone.",
          styleContext:
            "Expressive communicators want their written communication to carry the same warmth and authenticity as their spoken words. Formal templates feel inauthentic to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "The content is right, but check whether the tone feels personal. If it reads more like a formal request than a candid conversation, it does not match Priya's voice.",
          observation:
            "If your message uses phrases like 'I am writing to inform you' or 'I would like to formally request', it is too corporate for Priya.",
          coachingTip:
            "Read your message aloud. If it sounds like something Priya would actually say in a face-to-face conversation, you are close. If not, soften the formality.",
          styleContext:
            "Expressive communicators judge written messages by whether they sound human. A perfectly structured but impersonal email will feel wrong to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too brief, or too focused on process rather than the personal reality Priya wants to convey.",
          observation:
            "If your message reads like a bullet-pointed capacity report, it has missed Priya's brief entirely. She wants her manager to understand how she feels, not just what she needs.",
          coachingTip:
            "Start with how Priya feels, then move to what she is asking for. The emotion is the message; the request is the action that follows it.",
          styleContext:
            "Expressive communicators use personal disclosure as a trust-building tool. A message that hides the emotion behind process language undermines that trust.",
        },
      },
    },
  },

  // Scenario 185 - Marcus Webb, team, intermediate
  {
    id: "scenario-185",
    title: "The Cross-Team Dependency Planning",
    context:
      "Two teams need to coordinate on a shared platform migration. Marcus has been asked to co-facilitate a planning session and is bringing his characteristic energy to what could be a dry logistics meeting.",
    chooseContext:
      "Marcus is trying to get both teams excited about the shared goal rather than focusing on territorial disputes over who owns which component. One team lead is being resistant.",
    rewriteContext:
      "Marcus has asked you to write a short kick-off message to both teams that sets the tone for collaboration, making people feel part of something bigger than a technical migration.",
    characterId: "marcus-webb",
    dialogue:
      "I know platform migrations are not exactly glamorous, but think about what we are actually building here. Two teams who have never worked together, creating something neither could deliver alone. This is the project people will talk about at the end of the year. Let us make it count.",
    chooseDialogue:
      "I get that there are ownership questions, but can we park the turf wars for a second? We are all here because this matters. Instead of fighting over who owns the API layer, let us talk about what the end product looks like when it works beautifully. That is what gets me excited.",
    rewriteDialogue:
      "Write something that makes both teams feel like they are joining a mission, not attending a coordination meeting. I want people to read it and think, 'this is going to be something special'.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus has reframed a dry platform migration as an exciting cross-team achievement and is trying to generate enthusiasm for the shared goal. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus uses vision, energy, and storytelling to transform a logistics exercise into an inspiring mission. This is classic expressive facilitation, creating meaning and momentum through enthusiasm.",
          observation:
            "The phrase 'this is the project people will talk about at the end of the year' is quintessentially expressive. Marcus motivates through narrative and significance, not through process.",
          coachingTip:
            "When a facilitator reframes a routine task as a meaningful story, they are communicating expressively. Feed their vision with contributions that build on the narrative.",
          styleContext:
            "Expressive communicators believe that how people feel about a project determines how well they deliver it. They invest in emotion because it drives performance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Marcus does care about team harmony, which can look supportive. But notice he is not focused on individual wellbeing or relationship maintenance. He is focused on collective excitement.",
          observation:
            "A supportive facilitator would check in on how each person feels about the change. Marcus is painting a picture of what success looks like and inviting everyone to get excited.",
          coachingTip:
            "Expressive communicators energise groups through shared vision. Supportive communicators steady groups through individual care. Marcus is energising, not steadying.",
          styleContext:
            "Expressive communicators use enthusiasm as a leadership tool. They believe that if people are excited about the destination, they will figure out the route.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not laid out a detailed plan, assigned specific responsibilities, or provided a structured timeline. The entire opening is about creating buy-in, not about logistics.",
          observation:
            "There are no deadlines, no role assignments, and no process steps. The focus is entirely on building emotional commitment to the outcome.",
          coachingTip:
            "Ask yourself: is this person trying to organise the work or inspire the people? Marcus is firmly in the inspiration camp.",
          styleContext:
            "Expressive communicators start with why before moving to what. If the energy is not right, they believe the plan will not matter.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has asked the group to stop debating ownership and instead visualise the finished product. A resistant team lead says, 'Vision is nice, but someone needs to own the API layer.' How do you bridge the gap?",
      options: [
        {
          id: "s185-opt-a",
          text: "You are both right. What if we sketch out the finished product together first, then assign components based on who is best placed to deliver each piece? That way, ownership follows vision.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated both perspectives and proposed an approach that honours Marcus's expressive need for vision while addressing the practical concern. This is skilled bridging.",
        },
        {
          id: "s185-opt-b",
          text: "Let us just assign the API layer now so we can move on. Marcus, we can come back to the vision piece once the logistics are sorted.",
          score: 5,
          result: "partial",
          explanation:
            "This solves the immediate tension but dismisses Marcus's approach. Telling an expressive facilitator to park the vision undermines their entire method.",
        },
        {
          id: "s185-opt-c",
          text: "I think we should focus on the governance model first. Who reports to whom, what the escalation path looks like, and how decisions get made across teams.",
          score: 0,
          result: "weak",
          explanation:
            "This completely ignores Marcus's framing and doubles down on process. It will drain the energy from the room and make Marcus feel his approach has been dismissed.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a kick-off message to both teams that makes people feel part of something special, not just a technical migration. Write it in an expressive style.",
      targetTraits: ["vision-driven", "energising", "inclusive", "narrative"],
      exampleStrongResponse:
        "Hi everyone, next week we are kicking off something that has never been done here before: two teams, two different skill sets, one shared platform that will change how we deliver for our customers.\n\nThis is not just a migration. It is a chance to prove what happens when we stop working in silos and start building together. Every one of you has been chosen because you bring something this project cannot succeed without.\n\nOur first session is on Tuesday at 10am. Come ready to think big. We will sort the details, but first, let us agree on what 'brilliant' looks like.\n\nLooking forward to this one.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message builds excitement, creates a sense of significance, and makes people feel personally valued. Marcus would read this aloud in the meeting.",
          observation:
            "You framed the project as a first, made each person feel chosen, and ended with genuine enthusiasm. This is expressive writing at its best.",
          coachingTip:
            "When writing for expressive communicators, think about how the message makes the reader feel. If it creates a spark of excitement, you have hit the right note.",
          styleContext:
            "Expressive communicators measure communication by its emotional impact. A technically perfect but flat message is a failure in their eyes.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but check whether your message creates genuine excitement or just lists logistics with a friendly tone. There is a difference between being warm and being inspiring.",
          observation:
            "If your message reads more like a meeting invitation than a rallying call, it needs more narrative energy.",
          coachingTip:
            "Add one sentence that makes the reader feel personally significant, and one that paints a picture of what success looks like. Those two elements lift flat messages into expressive territory.",
          styleContext:
            "Expressive communicators want kick-off messages that people screenshot and share. If it sounds like every other project email, it has missed the mark.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a standard project announcement. It covers the facts but misses the emotional invitation Marcus was looking for.",
          observation:
            "If your message could be sent by any project manager for any project, it is not specific or inspiring enough for Marcus.",
          coachingTip:
            "Start with why this project is different, not what the project is. Marcus wants people to feel something when they read the message.",
          styleContext:
            "Expressive communicators believe that the first communication sets the culture of the entire project. A flat kick-off leads to a flat delivery.",
        },
      },
    },
  },

  // Scenario 186 - Nina Okafor, negotiation, advanced
  {
    id: "scenario-186",
    title: "The Training Budget Allocation",
    context:
      "Nina is leading a negotiation with the finance director to secure a larger share of the annual training budget. She believes passionately in people development and is making the case with characteristic energy.",
    chooseContext:
      "The finance director has pushed back, saying training spend is hard to measure. Nina is countering with a blend of conviction and storytelling to shift the conversation from cost to value.",
    rewriteContext:
      "Nina has asked you to help draft a proposal that captures the spirit of her argument: that training is an investment in people, not a line on a spreadsheet.",
    characterId: "nina-okafor",
    dialogue:
      "I know the spreadsheet says training is a cost, but that spreadsheet has never seen a junior analyst grow into a team leader in 18 months because someone invested in them. We are not asking for more money; we are asking for permission to build the next generation of leaders. That is what this budget is really about.",
    chooseDialogue:
      "Hard to measure? Tell that to the three people we promoted last year who all went through the leadership programme. Tell that to the retention numbers in teams that receive development versus those that do not. The evidence is there; you just have to look beyond the quarterly report.",
    rewriteDialogue:
      "Help me write a proposal that does not read like a procurement request. I want the finance director to finish reading it and think, 'I want to fund this'. Make it compelling, not clinical.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "negotiation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina is arguing for a larger training budget by telling stories of individual growth and framing the request as investing in people rather than spending money. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina leads with passion, uses storytelling to illustrate her argument, and reframes the negotiation from financial cost to human value. This is an expressive communicator in full advocacy mode.",
          observation:
            "The phrase 'that spreadsheet has never seen a junior analyst grow into a team leader' is a classic expressive move. Nina personifies abstract data to make her point emotionally compelling.",
          coachingTip:
            "When a negotiator uses stories and emotional reframing instead of data tables, they are operating expressively. Engage with their vision, not just their numbers.",
          styleContext:
            "Expressive communicators negotiate by shifting the emotional frame. They believe that if you change how someone feels about an issue, you change how they decide.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does care about people, which can look supportive. But notice she is not focused on how individuals feel; she is advocating for a vision of organisational transformation through passion and narrative.",
          observation:
            "A supportive negotiator would emphasise how cutting the budget would hurt specific individuals. Nina is painting a picture of what the organisation could become with proper investment.",
          coachingTip:
            "Expressive communicators advocate for ideas and visions. Supportive communicators advocate for people and relationships. Nina is selling a vision, not protecting individuals.",
          styleContext:
            "Expressive communicators in negotiations are storytellers. They know that a compelling narrative is often more persuasive than a compelling spreadsheet.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a detailed cost-benefit analysis, ROI calculation, or structured comparison of training methodologies. Her argument is built on conviction and narrative.",
          observation:
            "There are no financial models, no benchmark data, and no risk assessments. Nina is persuading through emotion and belief, not through evidence.",
          coachingTip:
            "Ask yourself: is this person building a case through data or through story? Nina is firmly in story territory, even when she references results.",
          styleContext:
            "Expressive communicators use results as plot points in a narrative, not as entries in a spreadsheet. The story is the argument; the data supports it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The finance director says training ROI is hard to measure. Nina has countered with promotion and retention examples. The finance director remains sceptical. How do you support Nina?",
      options: [
        {
          id: "s186-opt-a",
          text: "Nina is right that the impact shows up in people, not just percentages. I can map those three promotions to the revenue those individuals now generate. The story writes itself when you follow the people.",
          score: 10,
          result: "strong",
          explanation:
            "You bridge Nina's expressive approach with the finance director's need for evidence, without abandoning the narrative frame. You honour both styles simultaneously.",
        },
        {
          id: "s186-opt-b",
          text: "I think we should commission a formal ROI study before making a decision. That way we have hard numbers to base the allocation on.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but this delays the decision and implicitly suggests Nina's argument is not strong enough on its own. It may feel like a dismissal of her passionate case.",
        },
        {
          id: "s186-opt-c",
          text: "Perhaps we should benchmark against industry average training spend per head and align our budget accordingly. That removes the need for subjective judgements.",
          score: 0,
          result: "weak",
          explanation:
            "This strips all personality and conviction from the negotiation. Nina has made an impassioned case and you have responded with a benchmarking exercise. It kills the energy entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a training budget proposal that is compelling rather than clinical. She wants the finance director to want to fund it after reading it. Write it in an expressive style.",
      targetTraits: ["narrative-driven", "emotionally-compelling", "vision-focused", "specific-examples"],
      exampleStrongResponse:
        "Training Budget Proposal: Investing in Our Next Generation\n\nLast year, three people were promoted into leadership roles. All three came through our development programme. One of them now leads a team that delivered the highest client satisfaction scores in the company's history.\n\nThat is what training does. Not in theory, but in practice, in this organisation, with these people.\n\nWe are asking for a 15% increase to the training budget. Here is what it buys: 20 more people through the leadership pipeline, a mentoring programme for new joiners, and a dedicated skills academy for technical staff.\n\nThis is not a cost. It is the most reliable investment we make in our own future. The only question is whether we want to keep building on what is working, or risk losing it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal tells a story, uses real examples, and frames the budget as an investment in people. Nina would present this with pride.",
          observation:
            "You opened with a success story, connected it to the ask, and closed with a challenge. This is expressive proposal writing at its most persuasive.",
          coachingTip:
            "When writing proposals for expressive communicators, lead with impact, not with cost. The story of what the money achieves is more powerful than the number itself.",
          styleContext:
            "Expressive communicators believe that proposals should move people emotionally. If the reader feels something, they are more likely to act.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether your proposal tells a story or just lists benefits. There is a difference between an inspiring narrative and a feature list with warm language.",
          observation:
            "If your proposal reads like a business case with friendly adjectives, it is not quite expressive enough. It needs a narrative arc.",
          coachingTip:
            "Try opening with a specific person's story, then zooming out to the bigger picture. Expressive proposals move from the individual to the universal.",
          styleContext:
            "Expressive communicators think in stories, not in structures. A proposal that follows a narrative arc will resonate more than one that follows a template.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal reads like a standard budget request. It may contain the right information, but it lacks the emotional energy Nina was looking for.",
          observation:
            "If your proposal could be submitted by any department for any budget line, it is not specific or compelling enough for Nina's approach.",
          coachingTip:
            "Start again with a single story about one person who was transformed by training. Build the entire proposal outward from that story.",
          styleContext:
            "Expressive communicators see budget proposals as a chance to inspire, not just to inform. If the reader is not moved, the proposal has failed regardless of the data it contains.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (187-189)
  // ============================================

  // Scenario 187 - Tom Brennan, negotiation, foundation
  {
    id: "scenario-187",
    title: "The Service Contract Penalty Clause",
    context:
      "You are in a negotiation meeting about renewing a service contract. Tom, the relationship manager, is discussing the penalty clause for late delivery. He is trying to find a fair arrangement that protects both sides without damaging the partnership.",
    chooseContext:
      "The client has proposed steep penalties for any missed SLA. Tom is concerned this will create a fear-based relationship and is trying to negotiate a more balanced approach.",
    rewriteContext:
      "Tom has asked you to draft a response to the client's penalty proposal that suggests a fairer alternative, framed around partnership rather than punishment.",
    characterId: "tom-brennan",
    dialogue:
      "I completely understand why you want penalty clauses. You need to know we are committed to delivering on time. But I wonder if there is a way to build in accountability that does not start from a place of punishment. What if we agreed on a service credit model instead, something that protects you but keeps the relationship healthy?",
    chooseDialogue:
      "I worry that steep penalties create the wrong dynamic. If our teams are afraid of financial consequences, they focus on compliance rather than quality. I would rather build a structure where we are both invested in getting it right, not just in avoiding getting it wrong.",
    rewriteDialogue:
      "Can you draft something that acknowledges their concern but proposes the service credit alternative? I want them to feel heard, not dismissed. The tone matters as much as the terms here.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "negotiation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom is negotiating a penalty clause by focusing on preserving the relationship, proposing a gentler alternative, and expressing concern about creating a fear-based dynamic. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the health of the relationship over the terms of the contract. He proposes an alternative that protects the client while preserving trust and collaboration. This is a supportive negotiator.",
          observation:
            "The phrase 'keeps the relationship healthy' is the key signal. Tom measures contract terms by their impact on the working relationship, not just their financial implications.",
          coachingTip:
            "When a negotiator frames terms through the lens of relationship impact, they are operating supportively. Engage with their concern for partnership before discussing specifics.",
          styleContext:
            "Supportive communicators believe that the quality of the relationship determines the quality of the delivery. Punitive terms undermine both.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Tom does show passion about the partnership, which can look expressive. But notice he is not trying to inspire or create excitement. He is trying to protect a relationship from damage.",
          observation:
            "An expressive negotiator would paint a vision of what the partnership could achieve. Tom is focused on preventing harm, not creating excitement.",
          coachingTip:
            "Expressive communicators advocate for possibility. Supportive communicators advocate for protection. Tom is protecting the relationship, not promoting a vision.",
          styleContext:
            "Supportive communicators in negotiations act as relationship guardians. Their primary concern is that the deal creates a foundation for trust, not tension.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not taken a hard position, issued an ultimatum, or demanded specific terms. His approach is collaborative and empathetic, not combative or data-driven.",
          observation:
            "There are no demands, no threats, and no detailed financial analysis. The entire negotiation approach is centred on mutual care.",
          coachingTip:
            "Ask yourself: is this person trying to win the negotiation or to build a partnership through it? Tom is building, not winning.",
          styleContext:
            "Supportive communicators see negotiation as a relationship-building exercise. The terms matter, but how those terms make both parties feel matters more.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has expressed concern that steep penalties will create a fear-based relationship. The client pushes back, saying, 'We need teeth in the contract.' How do you support Tom's position?",
      options: [
        {
          id: "s187-opt-a",
          text: "We share your need for accountability. Tom's proposal still has consequences for underperformance, but frames them as service credits that keep both sides invested in resolution. The protection is the same; the relationship is better.",
          score: 10,
          result: "strong",
          explanation:
            "You validate the client's concern, support Tom's relational approach, and show that the alternative still provides protection. This is skilled negotiation in a supportive style.",
        },
        {
          id: "s187-opt-b",
          text: "We could accept the penalty clause with a cap on the maximum exposure. That way you have your teeth and we have a limit on our risk.",
          score: 5,
          result: "partial",
          explanation:
            "This is a practical compromise, but it abandons Tom's relational framing. He was trying to change the dynamic, not just limit the damage.",
        },
        {
          id: "s187-opt-c",
          text: "If you insist on penalties, we will need to price that risk into the contract, which means the overall cost goes up. Is that really what you want?",
          score: 0,
          result: "weak",
          explanation:
            "This is a veiled threat dressed as logic. It is the opposite of Tom's approach and would undermine his credibility as a relationship-focused negotiator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to draft a response to the client's penalty proposal that acknowledges their concern and proposes a service credit alternative. Write it in a supportive style where the tone matters as much as the terms.",
      targetTraits: ["empathetic", "collaborative", "protective-of-relationship", "fair-minded"],
      exampleStrongResponse:
        "Thank you for sharing your thoughts on the penalty clause. We completely understand why accountability matters to you, and we want to get this right in a way that works for both of us.\n\nRather than a financial penalty model, we would like to propose a service credit approach. If we miss an agreed SLA, you receive a credit against future invoices. This gives you the same financial protection while keeping our teams focused on resolution rather than risk avoidance.\n\nWe believe this approach builds a stronger foundation for the partnership, one where both sides are working towards quality rather than away from consequences.\n\nWe are happy to discuss the specifics of the credit structure at your convenience.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response validates the client's concern, proposes a fair alternative, and frames everything through the lens of partnership. Tom would be delighted to send this.",
          observation:
            "You acknowledged the client's position before offering an alternative, which is the hallmark of supportive communication in negotiations.",
          coachingTip:
            "When writing for supportive negotiators, always validate the other side's concern before proposing your alternative. It shows respect and builds trust.",
          styleContext:
            "Supportive communicators believe that how you say no matters as much as the no itself. Acknowledging the other side's perspective first makes the alternative easier to accept.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is right, but check whether your tone genuinely acknowledges the client's concern or just pays lip service to it before pushing your alternative.",
          observation:
            "If your response moves too quickly to 'here is what we want instead', it may feel dismissive rather than collaborative.",
          coachingTip:
            "Spend at least two sentences genuinely validating the client's perspective before introducing your alternative. Supportive communicators earn the right to propose by first demonstrating understanding.",
          styleContext:
            "Supportive communicators know that people are more open to alternatives when they feel genuinely heard first. Rushing to the counter-proposal undermines that.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response either dismisses the client's concern, takes a confrontational tone, or presents the alternative as a demand rather than a suggestion.",
          observation:
            "If your response starts with why penalties are wrong, you have skipped the empathy that Tom considers essential.",
          coachingTip:
            "Rewrite your opening to start with what you understand about the client's position. Then transition to your alternative with language like 'what if we tried' rather than 'instead, we require'.",
          styleContext:
            "Supportive communicators never open negotiations by telling the other side they are wrong. They open by showing they have listened.",
        },
      },
    },
  },

  // Scenario 188 - Leah Morgan, one-to-one, intermediate
  {
    id: "scenario-188",
    title: "The Lateral Move Discussion",
    context:
      "You are having a one-to-one with Leah, who has been approached about a lateral move to a different department. She is conflicted and wants to talk through her feelings about the opportunity without being pressured either way.",
    chooseContext:
      "Leah has shared that she is worried about how her current team will react if she leaves. She does not want anyone to feel abandoned, and this concern is weighing heavily on her decision.",
    rewriteContext:
      "Leah has decided to accept the lateral move and has asked you to help her draft a message to her current team explaining the decision in a way that feels caring and honest.",
    characterId: "leah-morgan",
    dialogue:
      "I am genuinely torn. The new role sounds exciting, but I keep thinking about the people here. We have built something really good together, and I would hate for anyone to think I am walking away from that. I want to make a decision that is right for me without hurting the people I care about.",
    chooseDialogue:
      "What if they feel like I am choosing something else over them? I know that sounds irrational, but these relationships matter to me. I have been the one they come to when things get tough. Who steps into that space if I leave?",
    rewriteDialogue:
      "I want to write something to the team that is honest about why I am moving but also tells them how much they have meant to me. I do not want it to feel like a corporate announcement. I want it to feel personal.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is agonising over a lateral move because she is worried about how her departure will affect her team emotionally. She is prioritising their feelings alongside her own career decision. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's primary concern is the emotional impact of her decision on others. She frames her career choice through the lens of relationships, not ambition or opportunity. This is supportive communication.",
          observation:
            "The phrase 'I want to make a decision that is right for me without hurting the people I care about' captures the supportive dilemma perfectly: balancing personal needs with relational responsibility.",
          coachingTip:
            "When someone processes a career decision primarily through its impact on others, they are communicating supportively. Acknowledge the relational concern before discussing the opportunity.",
          styleContext:
            "Supportive communicators carry the emotional weight of their decisions on behalf of others. They need reassurance that their relationships will survive the change.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is emotionally open, which can look expressive. But notice she is not sharing her feelings for their own sake; she is sharing them because she is worried about other people's feelings.",
          observation:
            "An expressive communicator would talk about how excited or conflicted they feel about the opportunity itself. Leah's focus is on how her team will feel, not on her own experience.",
          coachingTip:
            "Expressive communicators centre their own emotional experience. Supportive communicators centre the emotional experience of others. Leah is firmly centred on her team.",
          styleContext:
            "Supportive communicators often struggle to make decisions that benefit themselves if they perceive it might cause discomfort for others. This is both their strength and their challenge.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not analysing the career implications, comparing benefits packages, or assessing the strategic value of the move. Her entire decision-making process is relational.",
          observation:
            "There is no mention of career progression, salary, or professional development. The conversation is entirely about relationships and emotional impact.",
          coachingTip:
            "Ask yourself: is this person weighing up pros and cons or weighing up emotional consequences? Leah is entirely in the emotional territory.",
          styleContext:
            "Supportive communicators evaluate career decisions through a relational lens. The best opportunity in the world can feel wrong if it damages important relationships.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah is worried that her team will feel abandoned if she takes the lateral move. She has asked who will step into the support role she currently fills. How do you respond?",
      options: [
        {
          id: "s188-opt-a",
          text: "The fact that you are thinking about this shows why your team values you. The care you have shown them has built something lasting. They will carry it forward because you taught them how, and you can still be there for them in a different way.",
          score: 10,
          result: "strong",
          explanation:
            "You validate Leah's concern, reframe her departure as a legacy rather than a loss, and reassure her that the relationships will endure. This is exactly the emotional support she needs.",
        },
        {
          id: "s188-opt-b",
          text: "We can put a transition plan together so your responsibilities are covered. I will make sure someone is identified to take on the people support role before you move.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and responsible, but it does not address Leah's emotional concern. She did not ask who will do the work; she asked who will care the way she cares.",
        },
        {
          id: "s188-opt-c",
          text: "You cannot let other people's feelings dictate your career decisions. This is a great opportunity and you should take it. The team will adjust.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses everything that matters to Leah. Telling a supportive communicator to ignore other people's feelings is the fastest way to shut down trust.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has decided to accept the lateral move and wants to write a personal message to her team. She wants it to be honest about why she is moving and to convey how much the team means to her. Write it in a supportive style.",
      targetTraits: ["warm", "personal", "relationship-honouring", "reassuring"],
      exampleStrongResponse:
        "Hi everyone, I wanted to share some news with you personally rather than letting you hear it through the grapevine.\n\nI have accepted a role in the customer insights team, starting next month. This was not an easy decision, and honestly, the hardest part was thinking about stepping away from this group.\n\nWhat we have built together over the past two years means more to me than I can easily put into words. The way you look out for each other, the way you show up when things get difficult, that is rare and it is something I will always be proud to have been part of.\n\nI am not disappearing. I will still be in the building, still available for a chat, and still cheering you on. You have taught me as much as I have ever offered you.\n\nThank you for being the team that made this a hard decision to make.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, personal, and honours the relationship. Leah would feel this captures exactly what she wanted to say.",
          observation:
            "You acknowledged the difficulty of leaving, celebrated what the team built together, and reassured them of your ongoing presence. This is supportive writing at its most genuine.",
          coachingTip:
            "When writing for supportive communicators, make the reader feel valued and reassured. Every sentence should either honour the relationship or promise continuity.",
          styleContext:
            "Supportive communicators want departure messages that strengthen relationships, not just announce changes. The message is a final act of care.",
        },
        partial: {
          result: "partial",
          explanation:
            "The intent is right, but check whether your message feels genuinely personal or just politely warm. Supportive communicators want depth of feeling, not just pleasant words.",
          observation:
            "If your message could be sent to any team without modification, it is not personal enough for Leah.",
          coachingTip:
            "Add one specific detail about what this team meant to you. Specificity turns a nice message into a meaningful one.",
          styleContext:
            "Supportive communicators judge messages by emotional authenticity. A warm but generic message feels hollow to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too formal, or focused on the new role rather than the team you are leaving. Leah wanted the focus on the people, not the opportunity.",
          observation:
            "If your message spends more time explaining the new role than thanking the current team, it has missed the point entirely.",
          coachingTip:
            "Flip the balance. Spend 80% of the message on the team and 20% on the move. For Leah, the relationships are the story.",
          styleContext:
            "Supportive communicators believe that how you leave matters as much as where you go. The departure message is a reflection of their values.",
        },
      },
    },
  },

  // Scenario 189 - David Chen, team, advanced
  {
    id: "scenario-189",
    title: "The Post-Mortem Facilitation",
    context:
      "A major project has gone significantly over budget and missed its deadline. David has been asked to facilitate the post-mortem session. He is determined to keep the session constructive and blame-free.",
    chooseContext:
      "During the session, one team member has started pointing fingers at another for a critical error. David needs to redirect the conversation without silencing legitimate feedback or protecting anyone from accountability.",
    rewriteContext:
      "David has asked you to draft a summary of the post-mortem findings that acknowledges what went wrong without assigning individual blame, focusing instead on systemic improvements.",
    characterId: "david-chen",
    dialogue:
      "Before we begin, I want to set one ground rule: we are here to learn, not to blame. Everyone in this room did their best with what they had. If the project went sideways, it is because our processes, communications, or assumptions let us down, not because anyone failed individually. Let us find out what we can do better together.",
    chooseDialogue:
      "I hear the frustration, and it is valid. But naming individuals will not fix the underlying problem. If that decision was wrong, let us ask why the information available at the time led to that decision. That tells us something useful. Pointing at someone does not.",
    rewriteDialogue:
      "Write the post-mortem summary so that anyone reading it feels safe and respected. I want people to see themselves reflected in the lessons, not singled out for the failures. If we get this right, people will actually read it and change their behaviour.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has opened a post-mortem by establishing a blame-free ground rule and framing failures as systemic rather than individual. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David's primary concern is psychological safety. He sets a ground rule that protects individuals, reframes failure as a system problem, and invites collective learning. This is advanced supportive facilitation.",
          observation:
            "The phrase 'everyone did their best with what they had' is a protective statement. David is creating a safe environment before any difficult truths are discussed.",
          coachingTip:
            "When a facilitator opens by establishing emotional safety before addressing content, they are operating supportively. Respect their ground rules and contribute to the safe environment.",
          styleContext:
            "Supportive communicators believe that people only share honestly when they feel safe. The ground rule is not soft; it is strategic.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. David does focus on systemic analysis, which can look analytical. But notice his primary motivation is protecting people, not ensuring thoroughness. The system framing serves emotional safety, not intellectual rigour.",
          observation:
            "An analytical facilitator would open by describing the review methodology. David opens by describing the emotional contract for the session.",
          coachingTip:
            "If someone frames a review around safety first and methodology second, they are supportive. If methodology comes first, they are analytical. David leads with safety.",
          styleContext:
            "Supportive communicators use systemic framing as a protective tool. By making it about processes rather than people, they remove the threat that shuts down honest participation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not demanded accountability, set performance targets, or pushed for quick conclusions. His approach is deliberately slow, safe, and relationship-preserving.",
          observation:
            "There are no deadlines, no demands, and no competitive framing. The entire session is designed to feel collaborative and non-threatening.",
          coachingTip:
            "Ask yourself: is this person trying to get answers quickly or to create a space where honest answers can emerge? David is creating the space.",
          styleContext:
            "Supportive communicators understand that the fastest route to honest feedback is through psychological safety, not through pressure.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member is pointing fingers at a colleague for a critical error. David has redirected the conversation towards systemic causes. The finger-pointer insists, saying, 'But it was their decision.' How do you support David's approach?",
      options: [
        {
          id: "s189-opt-a",
          text: "You are right that it was a key decision point. What David is asking is valuable: what information was available at that moment, and what would we need to change so anyone in that position makes a better call next time?",
          score: 10,
          result: "strong",
          explanation:
            "You validate the concern, reinforce David's systemic framing, and redirect towards collective improvement without silencing the legitimate feedback. This is skilled de-escalation.",
        },
        {
          id: "s189-opt-b",
          text: "Let us capture that as an action item and move on to the next phase of the project timeline.",
          score: 5,
          result: "partial",
          explanation:
            "This defuses the moment but does not address the underlying tension. Parking it as an action item avoids the conversation David is trying to facilitate constructively.",
        },
        {
          id: "s189-opt-c",
          text: "If there was a mistake, we should name it clearly so we can hold people accountable. Dancing around it does not help anyone.",
          score: 0,
          result: "weak",
          explanation:
            "This directly undermines David's ground rule and the safe environment he has built. It will shut down honest contribution from everyone else in the room.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write a post-mortem summary that acknowledges what went wrong without singling out individuals. It should focus on systemic improvements and make people feel safe and respected. Write it in a supportive style.",
      targetTraits: ["blame-free", "systemic-focus", "constructive", "respectful"],
      exampleStrongResponse:
        "Post-Mortem Summary: Project Aurora\n\nWhat happened:\nThe project exceeded its budget by 22% and delivered three weeks late. The primary causes were systemic, not individual.\n\nKey findings:\n1. Scope changes were approved without corresponding timeline adjustments. Our change control process did not require impact assessments for scope additions under a certain threshold. This needs to change.\n2. Dependencies between the design and development teams were not mapped at the start. Both teams made reasonable assumptions that turned out to be incompatible.\n3. Early warning signals were present but were not escalated because the reporting structure did not make it clear who was responsible for raising them.\n\nWhat we are changing:\n1. All scope changes, regardless of size, will require a documented timeline and budget impact assessment.\n2. Cross-team dependency mapping will be a mandatory step in project kick-off.\n3. A weekly risk flag process will be introduced so that concerns can be raised without waiting for a formal review.\n\nThis review is about improving our systems, not judging our people. Everyone involved gave significant effort under difficult circumstances, and these lessons will make our next project stronger.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary addresses the failures honestly while protecting individuals. It focuses on systemic improvements and closes with a statement that honours the team's effort.",
          observation:
            "You named specific process failures without naming the people involved. This is exactly the balance David was looking for.",
          coachingTip:
            "When writing post-mortems for supportive leaders, always separate the what from the who. Describe what happened and what changes are needed without identifying who made each mistake.",
          styleContext:
            "Supportive communicators believe that blame-free post-mortems produce better outcomes because people contribute honestly when they are not afraid of being singled out.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your summary inadvertently identifies individuals through overly specific descriptions of decisions. Even without naming someone, describing a decision in too much detail can feel like finger-pointing.",
          observation:
            "If a reader can easily work out who made a particular mistake from your description, the summary is not blame-free enough.",
          coachingTip:
            "Read each finding and ask: would the person involved feel safe reading this? If not, abstract the description one level further.",
          styleContext:
            "Supportive communicators test written feedback by imagining how each person mentioned would feel reading it. If anyone would feel exposed, the language needs adjusting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either assigns blame directly, uses language that implies individual fault, or lacks the constructive focus David requested.",
          observation:
            "If your summary includes phrases like 'the decision to proceed was poorly judged' or 'the team lead should have escalated sooner', it has crossed into blame territory.",
          coachingTip:
            "Rewrite any sentence that implies someone should have done something differently. Replace it with a description of the systemic gap that allowed the issue to occur.",
          styleContext:
            "Supportive communicators see blame in post-mortems as a failure of facilitation. The document should make everyone feel safe enough to apply the lessons willingly.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (190-192)
  // ============================================

  // Scenario 190 - Rachel Finch, one-to-one, foundation
  {
    id: "scenario-190",
    title: "The Probation Review",
    context:
      "You are conducting a probation review with Rachel, who joined the team three months ago. Rachel has prepared thoroughly and has brought a self-assessment document with detailed evidence for each of her objectives.",
    chooseContext:
      "Rachel has asked you to walk through each objective systematically, providing your assessment alongside hers so she can calibrate her own judgement against yours.",
    rewriteContext:
      "Rachel has asked you to provide your written assessment in the same format she used for her self-assessment, so the two documents can be compared side by side.",
    characterId: "rachel-finch",
    dialogue:
      "I have prepared a self-assessment against each of the six probation objectives. For each one, I have included what was expected, what I delivered, and any variance with an explanation. I would like to go through them one by one so I can understand where your assessment aligns with mine and where it differs.",
    chooseDialogue:
      "Could we take each objective in order? I would like you to give your rating first, then I will share mine. That way, neither of us is influenced by the other. If there is a gap, we can discuss the evidence and agree a final position.",
    rewriteDialogue:
      "If you could use the same format for your assessment, that would be really helpful. Expected outcome, actual outcome, variance, and your rating. That way I can compare them directly and identify the areas where my self-perception differs from your observation.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has arrived at her probation review with a structured self-assessment, requested a systematic walkthrough of each objective, and proposed a method for comparing assessments without bias. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel has prepared meticulously, proposed a structured process, and introduced a method to reduce bias in the comparison. This is analytical communication applied to professional development.",
          observation:
            "The suggestion to share ratings independently before comparing is a research methodology technique. Rachel is applying rigorous thinking to a routine HR process.",
          coachingTip:
            "When someone brings a structured self-assessment and proposes a systematic review method, they are communicating analytically. Match their preparation with equally detailed feedback.",
          styleContext:
            "Analytical communicators approach probation reviews as calibration exercises. They want to understand where their self-perception aligns with external observation and why it differs.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Rachel is organised and efficient, which can look direct. But notice she is not trying to speed through the review. She is trying to ensure thoroughness and accuracy.",
          observation:
            "A direct communicator would want the outcome quickly: pass or fail. Rachel wants to understand the detail behind each assessment, not just the result.",
          coachingTip:
            "The distinction is purpose. Direct communicators use structure to save time. Analytical communicators use structure to ensure completeness. Rachel is after completeness.",
          styleContext:
            "Analytical communicators see structure as a quality assurance tool. Direct communicators see structure as an efficiency tool. The outcome looks similar, but the motivation differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not expressed how she feels about the review, built personal rapport, or shared any emotional context about her first three months. The entire approach is methodical.",
          observation:
            "There is no mention of relationships, team dynamics, or personal feelings. The conversation is framed entirely around evidence, structure, and calibration.",
          coachingTip:
            "Ask yourself: is this person processing the review through feelings or through frameworks? Rachel is firmly in the framework camp.",
          styleContext:
            "Analytical communicators treat probation reviews as objective assessments, not personal conversations. They want data, not reassurance.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has asked you to share your rating for each objective before she shares hers, to avoid influencing each other. How do you begin?",
      options: [
        {
          id: "s190-opt-a",
          text: "Good approach. Objective one: stakeholder communication. Expected outcome was weekly updates to three key stakeholders. You delivered consistently - the project log shows 12 out of 12 weeks completed. Fully met.",
          score: 10,
          result: "strong",
          explanation:
            "You mirror Rachel's structured approach, reference specific evidence, and provide a clear rating. This is exactly the calibration exercise she proposed.",
        },
        {
          id: "s190-opt-b",
          text: "Overall, I think you have had a really strong start. The team likes working with you and your work quality has been impressive. Shall we go through the specifics?",
          score: 5,
          result: "partial",
          explanation:
            "Warm and positive, but Rachel asked for objective-by-objective ratings with evidence. Starting with a general impression does not match her requested method.",
        },
        {
          id: "s190-opt-c",
          text: "To be honest, I think the probation review is a formality at this point. You are clearly performing well. Let us sign it off and I can give you more detailed feedback in our regular one-to-ones.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the process Rachel has carefully prepared for. An analytical communicator values thorough review, even when the outcome is positive. Skipping the detail feels disrespectful.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write your probation assessment in the same structured format she used: expected outcome, actual outcome, variance, and rating. Write the assessment for one objective in an analytical style.",
      targetTraits: ["structured", "evidence-based", "precise", "calibrated"],
      exampleStrongResponse:
        "Objective 3: Process Documentation\n\nExpected outcome: Create and maintain documentation for three core workflows by end of month two.\n\nActual outcome: Documentation completed for all three workflows (client onboarding, invoice processing, escalation management) by week seven. Documentation was peer-reviewed by two team members and incorporated their feedback.\n\nVariance: Delivered one week ahead of schedule. Quality exceeded expectations due to the addition of a peer-review step not specified in the original objective.\n\nRating: Exceeded. The documentation has since been adopted as the team standard and is referenced in new starter induction materials.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your assessment follows Rachel's format precisely, includes specific evidence, and provides a calibrated rating with supporting context. She would find this highly credible.",
          observation:
            "You named specific deliverables, referenced timelines, and noted quality indicators. This is the kind of evidence-based feedback analytical communicators trust.",
          coachingTip:
            "When writing assessments for analytical communicators, every claim should be supported by observable evidence. Opinions without evidence feel arbitrary to them.",
          styleContext:
            "Analytical communicators trust feedback that shows its working. If they can trace the logic from evidence to conclusion, they accept the assessment. If not, they question it.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is close, but check whether your assessment includes specific evidence or relies on general impressions. Rachel will notice the difference.",
          observation:
            "If your assessment says 'documentation was good quality' without specifying how that quality was measured, it is too subjective for Rachel.",
          coachingTip:
            "Replace every adjective with a fact. 'Good quality' becomes 'peer-reviewed by two team members with zero revisions required'. Let the evidence speak.",
          styleContext:
            "Analytical communicators distrust qualitative judgements without quantitative or observational backing. Show the evidence; let Rachel draw the conclusion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your assessment either does not follow the requested format, lacks evidence, or relies too heavily on subjective opinion.",
          observation:
            "If your assessment reads like a performance conversation rather than a structured review, it has not met Rachel's expectations.",
          coachingTip:
            "Go back to Rachel's format: expected, actual, variance, rating. Fill in each section with facts, not feelings. This is an exercise in precision.",
          styleContext:
            "Analytical communicators designed the format for a reason. Deviating from it suggests you have not taken their method seriously, which erodes trust.",
        },
      },
    },
  },

  // Scenario 191 - Owen Grant, negotiation, intermediate
  {
    id: "scenario-191",
    title: "The Technology Vendor Lock-In",
    context:
      "Your organisation is reviewing its technology contracts. Owen has raised concerns about vendor lock-in with a major software provider and is leading the renegotiation to improve data portability and contract flexibility.",
    chooseContext:
      "The vendor has argued that migration costs make switching impractical, implying that the organisation has no real alternative. Owen is dismantling that argument methodically.",
    rewriteContext:
      "Owen has asked you to draft a position paper for the steering committee outlining the risks of vendor lock-in and the negotiation strategy for securing better terms.",
    characterId: "owen-grant",
    dialogue:
      "The vendor is betting on our switching costs being too high. I have run the numbers. Migration to an alternative platform costs roughly 340,000 pounds over 18 months. But if we stay on current terms, the five-year total cost of ownership is 1.2 million more than the nearest competitor. The break-even point on migration is 14 months. That is a fact, not an opinion.",
    chooseDialogue:
      "They say migration is impractical, but that claim only holds if you ignore the three-year projection. Current annual cost growth is 12% compound. The alternative vendor locks at 4%. By year three, we are saving 180,000 per year. Their argument collapses under any time horizon beyond 18 months.",
    rewriteDialogue:
      "I need a position paper that lays out the vendor lock-in risk with hard numbers. Total cost of ownership comparison, migration cost analysis, and break-even timeline. The steering committee will not act on opinions; they need data.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "negotiation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen is countering a vendor's argument by presenting detailed cost comparisons, break-even analysis, and time-horizon projections. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen builds his negotiation position entirely on data: specific costs, percentages, timelines, and comparisons. Every claim is supported by a number. This is analytical negotiation at its most rigorous.",
          observation:
            "The phrase 'that is a fact, not an opinion' is revealing. Owen draws a clear line between evidence-based claims and subjective positions. Analytical communicators insist on this distinction.",
          coachingTip:
            "When a negotiator builds their case on detailed calculations and explicitly distinguishes fact from opinion, they are communicating analytically. Engage with their data, not with rhetoric.",
          styleContext:
            "Analytical communicators believe that negotiations should be won on evidence. They distrust emotional appeals and see data as the ultimate persuasion tool.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive and decisive, which can look direct. But notice that his confidence comes from the data, not from personal authority. He is not saying 'I want better terms'; he is saying 'the numbers demand better terms'.",
          observation:
            "A direct negotiator would state their position and apply pressure. Owen dismantles the vendor's argument with evidence. The assertiveness comes from the analysis, not from the person.",
          coachingTip:
            "If someone is confident because they have done the research, that is analytical confidence. If someone is confident because that is their personality, that is direct confidence.",
          styleContext:
            "Analytical communicators derive authority from their preparation. Their assertiveness is earned through evidence, not assumed through personality.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not tried to build rapport with the vendor, share stories of partnership, or appeal to shared values. The entire argument is constructed from financial evidence.",
          observation:
            "There is no relational language, no emotional appeal, and no attempt to find common ground through personal connection. Owen is negotiating with a spreadsheet.",
          coachingTip:
            "Ask yourself: is this person persuading through data or through connection? Owen is entirely data-driven.",
          styleContext:
            "Analytical communicators see negotiations as problem-solving exercises. The right answer is whatever the evidence supports, regardless of how either party feels about it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has demonstrated that the vendor's lock-in argument collapses under a three-year projection. The vendor responds, 'We have been a trusted partner for seven years. Surely that counts for something.' How do you respond?",
      options: [
        {
          id: "s191-opt-a",
          text: "The partnership is valued, which is why we are having this conversation rather than simply switching. But trust should be reflected in competitive terms. The data shows a 12% annual cost gap. Closing that gap demonstrates the partnership is mutual.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledge the relationship without letting it override the evidence. You redirect the conversation back to data while giving the vendor a constructive path forward. This supports Owen's analytical approach.",
        },
        {
          id: "s191-opt-b",
          text: "Seven years is a long time, and we have had a good run. But business decisions have to be based on value, not just history.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally right, but too general. Owen has been building a case on specific numbers. A vague reference to 'value' does not match the precision of his argument.",
        },
        {
          id: "s191-opt-c",
          text: "You are absolutely right, the relationship matters enormously. Let us find a way to make this work that keeps both sides happy.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons Owen's evidence-based position entirely. The vendor has used an emotional appeal to sidestep the data, and you have let them succeed.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to draft a position paper for the steering committee on vendor lock-in risk, including total cost of ownership comparison, migration cost analysis, and break-even timeline. Write it in an analytical style.",
      targetTraits: ["data-driven", "structured", "evidence-based", "precise"],
      exampleStrongResponse:
        "Position Paper: Vendor Lock-In Risk and Negotiation Strategy\n\n1. Current position\nWe are in year seven of a contract with our primary software vendor. Annual costs have grown at 12% compound, reaching 480,000 in the current year.\n\n2. Total cost of ownership comparison (five-year projection)\nCurrent vendor: 3.4 million (assuming continued 12% annual growth).\nAlternative vendor: 2.2 million (4% annual growth, locked for three years).\nDifference: 1.2 million over five years.\n\n3. Migration cost analysis\nOne-off migration cost: 340,000 (includes data transfer, retraining, and parallel running for three months).\nTimeline: 18 months from decision to full transition.\n\n4. Break-even analysis\nMigration investment is recovered within 14 months of full transition. From month 15 onwards, the organisation saves approximately 180,000 per year.\n\n5. Recommendation\nNegotiate revised terms with the current vendor using the alternative as a credible benchmark. If terms cannot be brought within 5% of the alternative provider, initiate formal migration planning.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your position paper is structured, data-driven, and leads logically to a recommendation. Owen would present this to the steering committee with confidence.",
          observation:
            "You presented the numbers clearly, included a break-even analysis, and offered a decision framework based on evidence. This is exactly how analytical communicators build a business case.",
          coachingTip:
            "When writing for analytical communicators, let the data build the argument. The recommendation should feel like the only logical conclusion given the evidence presented.",
          styleContext:
            "Analytical communicators believe that good decisions are the inevitable result of good data. A position paper that shows its working earns immediate credibility.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is reasonable, but check whether your numbers are specific and your comparisons are clear. Analytical communicators will question any gap in the evidence.",
          observation:
            "If your paper includes phrases like 'significant cost savings' without specifying the amount, it is not precise enough for Owen.",
          coachingTip:
            "Replace every qualitative claim with a quantitative one. 'Significant savings' becomes '1.2 million over five years'. Precision is credibility.",
          styleContext:
            "Analytical communicators read position papers looking for the evidence behind every claim. If a claim is unsupported, the entire paper loses authority.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your position paper lacks the numerical detail and structured analysis Owen requested. If it reads more like a strategy summary than a data-driven business case, it has missed the brief.",
          observation:
            "If your paper does not include specific cost figures, comparison tables, or a clear break-even calculation, the steering committee will ask for the numbers anyway.",
          coachingTip:
            "Go back to Owen's brief: total cost of ownership, migration costs, break-even timeline. Each one needs a specific number. Without them, the paper is incomplete.",
          styleContext:
            "Analytical communicators see unnumbered position papers as opinions. The steering committee needs data to make a decision, and Owen will not present anything less.",
        },
      },
    },
  },

  // Scenario 192 - Fiona Banks, team, advanced
  {
    id: "scenario-192",
    title: "The Team Capacity Planning",
    context:
      "The team is being asked to take on additional responsibilities without additional headcount. Fiona has been asked to lead a capacity planning exercise to determine what is realistic and what trade-offs are required.",
    chooseContext:
      "Fiona has presented a detailed capacity model and the data shows the team is already at 94% utilisation. A senior manager is pushing for the team to absorb the work anyway. Fiona is holding her ground with evidence.",
    rewriteContext:
      "Fiona has asked you to draft a capacity summary for the leadership team that clearly shows current utilisation, projected demand, and the specific trade-offs required if new work is absorbed without additional resource.",
    characterId: "fiona-banks",
    dialogue:
      "I have mapped every team member's current workload against contracted hours. We are at 94% utilisation across the team, with two people already above 100% when you factor in unplanned work. Adding this scope without removing something else means we either miss deadlines, reduce quality, or burn people out. Those are the only three options. I can show you exactly where the capacity gap is.",
    chooseDialogue:
      "I understand the pressure to absorb this, but the model does not lie. If you add 320 hours of new work per quarter to a team that has 45 hours of spare capacity, you need to tell me which 275 hours of existing work we stop doing. I can provide options, but the maths is non-negotiable.",
    rewriteDialogue:
      "Write the capacity summary with the data front and centre. Current utilisation by person, projected demand including the new scope, and a clear table showing the gap. I want the leadership team to see the numbers and understand that this is not a motivation problem; it is a maths problem.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "team",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has mapped team utilisation to 94%, identified the exact capacity gap, and presented the situation as a mathematical problem with only three possible outcomes. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona has built an evidence-based model, quantified the problem precisely, and presented it as a logical equation. The phrase 'the maths is non-negotiable' encapsulates the analytical approach: data determines the conclusion, not opinion.",
          observation:
            "Fiona does not argue against the new work emotionally. She demonstrates mathematically that the capacity does not exist. The argument is constructed from evidence, not from feeling.",
          coachingTip:
            "When someone presents a work challenge as a maths problem with quantified inputs and outputs, they are communicating analytically. Engage with the data, not with platitudes about working harder.",
          styleContext:
            "Analytical communicators believe that workload problems are solved by evidence, not by motivation. Telling them the team should 'step up' will be met with a spreadsheet.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Fiona is assertive and clear, which can look direct. But notice that her confidence comes from the data model, not from personal authority. She is not demanding; she is demonstrating.",
          observation:
            "A direct communicator would say 'we cannot take this on' and expect the conversation to end. Fiona says 'here is why we cannot take this on' and invites scrutiny of the evidence.",
          coachingTip:
            "Direct communicators state positions. Analytical communicators prove positions. Fiona is proving, not stating.",
          styleContext:
            "Analytical communicators show their working because they believe that transparent methodology is more persuasive than personal authority.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not expressed concern for team wellbeing, shared stories about how overwork affects individuals, or tried to build emotional buy-in for her position.",
          observation:
            "The mention of burnout is a data point, not an emotional appeal. Fiona lists it alongside missed deadlines and reduced quality as a logical consequence, not as a plea for sympathy.",
          coachingTip:
            "Ask yourself: is this person describing a human concern or a capacity constraint? Fiona frames everything, including burnout, as a measurable outcome.",
          styleContext:
            "Analytical communicators depersonalise problems to make them solvable. Even people-related issues are framed as variables in a capacity model.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has shown that the team has only 45 spare hours per quarter and the new work requires 320 hours. The senior manager says, 'The team just needs to be more efficient.' How do you respond?",
      options: [
        {
          id: "s192-opt-a",
          text: "Fiona's model already accounts for reasonable efficiency. The 94% utilisation figure is above the industry benchmark of 85%. This is a capacity gap of 275 hours, not an efficiency gap. The question is which work we deprioritise.",
          score: 10,
          result: "strong",
          explanation:
            "You defend Fiona's analysis with additional evidence, reframe efficiency as already optimised, and redirect to the real decision. This is analytical advocacy at its best.",
        },
        {
          id: "s192-opt-b",
          text: "I think there might be some efficiency gains we could explore. Let us do a time audit and see where the opportunities are.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned, but this implies Fiona's model might be wrong without providing evidence. It could undermine her credibility and delay a decision that needs data-driven resolution.",
        },
        {
          id: "s192-opt-c",
          text: "The team is already working incredibly hard. Asking them to be more efficient when they are at breaking point is not fair on anyone.",
          score: 0,
          result: "weak",
          explanation:
            "This is an emotional response to a data-driven conversation. While the sentiment is valid, it abandons Fiona's analytical framing and gives the senior manager no evidence to reconsider.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a capacity summary showing current utilisation, projected demand, and trade-offs. She wants the leadership team to understand this is a maths problem, not a motivation problem. Write it in an analytical style.",
      targetTraits: ["data-driven", "precise", "structured", "trade-off-focused"],
      exampleStrongResponse:
        "Team Capacity Summary: Q3 Projection\n\n1. Current utilisation\nTeam of eight, contracted for 1,200 hours per quarter collectively.\nCurrent committed work: 1,128 hours (94% utilisation).\nTwo team members are above 100% when unplanned work is factored in.\nSpare capacity: 72 hours (adjusted to 45 hours after accounting for leave and training commitments).\n\n2. Projected new demand\nProposed additional scope: 320 hours per quarter.\nNet capacity gap: 275 hours per quarter.\n\n3. Trade-off options\nOption A: Defer the data quality project (estimated at 180 hours) and reduce reporting frequency from weekly to fortnightly (saving 96 hours). Residual gap: zero. Impact: data quality improvements delayed by one quarter; leadership receives less frequent updates.\nOption B: Add one contract resource at 160 hours per quarter. Residual gap: 115 hours, requiring one further deprioritisation.\nOption C: Absorb without adjustment. Projected outcome: 15% increase in missed deadlines, measurable quality reduction, and elevated attrition risk within six months.\n\n4. Recommendation\nOption A provides the lowest risk resolution without additional cost. The deferred work can be scheduled into Q4 when two planned projects complete.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary presents the situation as a clear mathematical equation with specific numbers, defined trade-offs, and a logical recommendation. Fiona would present this with confidence.",
          observation:
            "You quantified every claim, presented options with measurable impacts, and made a recommendation based on the data. This is how analytical communicators build trust with leadership.",
          coachingTip:
            "When writing capacity summaries for analytical communicators, every trade-off should include a quantified impact. Leaders cannot make decisions without knowing what each option costs.",
          styleContext:
            "Analytical communicators believe that presenting clear trade-offs is more respectful than presenting a single recommendation. It gives decision-makers the data to choose, not just a conclusion to accept.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your trade-offs include specific numbers and measurable impacts. Without them, the options are just descriptions, not decisions.",
          observation:
            "If your options say 'defer some work' without specifying which work and how many hours, the leadership team cannot evaluate the trade-off.",
          coachingTip:
            "Name the specific work that would be deferred, quantify the hours it frees up, and state the consequence of deferring it. Each option should be a fully costed decision.",
          styleContext:
            "Analytical communicators expect trade-off analyses to be specific enough to act on immediately. If the leadership team needs to ask follow-up questions, the analysis is incomplete.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary lacks the numerical precision and structured trade-off analysis Fiona requested. If it reads more like a narrative about team pressure than a data-driven capacity model, it has missed the brief.",
          observation:
            "If your summary includes phrases like 'the team is stretched' without quantifying by how much, it does not meet Fiona's standard of evidence.",
          coachingTip:
            "Return to the three elements Fiona specified: utilisation, demand, and trade-offs. Each one needs specific numbers. The document should be a model, not a memo.",
          styleContext:
            "Analytical communicators present capacity challenges as equations because equations demand mathematical solutions. Narrative descriptions invite subjective responses, which is exactly what Fiona is trying to avoid.",
        },
      },
    },
  },
];
