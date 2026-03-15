import { Scenario } from "@/types";

export const SCENARIOS_PART27: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (313-315) - remote
  // ============================================

  // Scenario 313 - Jordan Cole, remote, foundation
  {
    id: "scenario-313",
    title: "The Remote Stand-up Overhaul",
    context:
      "Your remote team's daily stand-up has drifted from 10 minutes to 35 minutes. Jordan has joined a call to observe and has strong views about fixing it. People are rambling, going off-topic, and treating the stand-up as a discussion forum.",
    chooseContext:
      "Jordan has proposed a strict three-question format - what you did, what you are doing, what is blocking you - with a 90-second limit per person. Some team members feel this is too rigid for a remote team that already struggles with connection.",
    rewriteContext:
      "Jordan has asked you to draft a team message announcing the new stand-up format, making it clear this is not optional and explaining why the change benefits everyone.",
    characterId: "jordan-cole",
    dialogue:
      "A 35-minute stand-up is not a stand-up. It is a meeting pretending to be efficient. Three questions, 90 seconds each, cameras on, no tangents. If something needs a deeper conversation, park it and book a separate call. We are a remote team, not a radio show.",
    chooseDialogue:
      "I hear the concern about connection, and I get it. But a bloated stand-up is not building connection - it is building resentment. The people who finish in two minutes are sitting through 30 minutes of other people's updates. Fix the format and use the time you save for actual team building.",
    rewriteDialogue:
      "Write the message to the team. State the new format, the time limit, and the start date. Do not ask for feedback - we have already decided. If people want to discuss it, they can raise it in the retrospective. But the format starts Monday.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan has observed a bloated remote stand-up and is imposing a strict three-question, 90-second-per-person format with no room for discussion. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan diagnoses the problem immediately, prescribes a specific fix, and implements it without seeking consensus. This is direct communication - decisive, efficient, and non-negotiable.",
          observation:
            "Notice how Jordan reframes the team's concern about connection as a consequence of the bloated format, not the proposed fix. Direct communicators redirect objections rather than accommodating them.",
          coachingTip:
            "When someone observes a problem and immediately moves to implement a solution without consultation, they are operating in a direct style. Match their pace with clear, concise responses.",
          styleContext:
            "Direct communicators see inefficient meetings as a symptom of weak leadership. Fixing the format is not just practical - it is a statement about standards.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan's format is structured, which can look analytical. But notice the structure serves speed, not thoroughness. Jordan is not analysing the problem - they are solving it immediately.",
          observation:
            "An analytical communicator would study the stand-up data over several weeks before proposing changes. Jordan watched one and acted.",
          coachingTip:
            "If someone imposes structure to save time, that is direct. If they impose structure to ensure accuracy, that is analytical. Jordan is in the time-saving camp.",
          styleContext:
            "Direct communicators use simple structures because simplicity enforces discipline. Complexity gives people room to drift.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not asked how people feel about the change, sought consensus, or acknowledged the emotional impact of imposing a new format. The approach is purely functional.",
          observation:
            "There is no invitation for input, no empathy for team members who value the longer format, and no suggestion of a transition period.",
          coachingTip:
            "Ask yourself: is this person prioritising feelings or efficiency? Jordan is entirely focused on reclaiming wasted time.",
          styleContext:
            "Direct communicators believe that people will appreciate the change once they experience the benefits. Feelings will catch up with results.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has proposed a strict 90-second stand-up format. Team members worry it is too rigid for a remote team. How do you respond?",
      options: [
        {
          id: "s313-opt-a",
          text: "The 90-second format makes sense. We can use the 25 minutes we save each day for proper collaboration or team check-ins that actually build connection, rather than pretending the stand-up serves that purpose.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Jordan's position while reframing the team's concern constructively. It agrees with the fix and proposes a better outlet for the need that was being poorly served.",
        },
        {
          id: "s313-opt-b",
          text: "Could we trial it for two weeks and then survey the team on whether the shorter format is working? That way people feel they have a voice in the change.",
          score: 5,
          result: "partial",
          explanation:
            "A trial is reasonable, but Jordan has already decided. Suggesting a survey introduces deliberation where Jordan wants implementation.",
        },
        {
          id: "s313-opt-c",
          text: "I think we need to be careful about stripping out the human element from our only daily touchpoint. Remote teams need more connection, not less.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Jordan's diagnosis. Jordan has argued that the bloated stand-up is not providing real connection - it is wasting time. This response ignores that reframe.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the team message announcing the new stand-up format. State the format, the time limit, and the start date. Direct style - no hedging, no request for feedback.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: New stand-up format - starts Monday\n\nFrom Monday, the daily stand-up moves to a strict format:\n\n1. What did you complete yesterday?\n2. What are you working on today?\n3. What is blocking you?\n\n90 seconds per person. Cameras on. No tangents. If something needs a longer conversation, note it in Slack and book a separate call.\n\nThis frees up 25 minutes a day that we are currently losing to drift. We will use that time better elsewhere.\n\nQuestions about the format can go in the next retrospective. The format itself starts Monday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Clear, authoritative, and action-oriented. The format is stated, the rationale is brief, and the start date is non-negotiable. Jordan would send this without changes.",
          observation:
            "You kept the announcement to one screen. Every sentence either states a rule or explains the benefit. No filler.",
          coachingTip:
            "Direct team announcements work when the reader knows exactly what is changing, when it starts, and what is expected of them. Your message covers all three.",
          styleContext:
            "Direct communicators announce changes rather than proposing them. The language of certainty - 'starts Monday', not 'we are thinking about' - sets the tone.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check for hedging. If your message includes phrases like 'we would like to try' or 'please let us know your thoughts', it is not matching Jordan's directive tone.",
          observation:
            "If your message invites discussion before implementation, it undermines the decisiveness Jordan specifically requested.",
          coachingTip:
            "Remove any sentence that positions this as a proposal rather than a decision. The team is being informed, not consulted.",
          styleContext:
            "Direct communicators lose credibility when they frame a decision as a discussion. If you have decided, say so.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message either softens the change too much, invites feedback that Jordan has already declined, or fails to specify the exact format and start date.",
          observation:
            "If your message reads like a suggestion rather than an announcement, or if it apologises for the change, it has missed the brief.",
          coachingTip:
            "Rewrite as a set of instructions, not a proposal. State the rules, state the date, state the benefit. That is the entire message.",
          styleContext:
            "Direct communicators see team announcements as an exercise in clarity. If someone reads it and does not know exactly what to do differently on Monday, the message has failed.",
        },
      },
    },
  },

  // Scenario 314 - Sam Hartley, remote, intermediate
  {
    id: "scenario-314",
    title: "The Remote Performance Review",
    context:
      "Sam is conducting a remote performance review with a team member whose output has been strong but whose communication with the wider team has been poor. The review is happening over video call.",
    chooseContext:
      "Sam has delivered the feedback about communication and the team member is defending themselves, saying remote work makes it harder to stay visible. Sam is not accepting that as an excuse.",
    rewriteContext:
      "Sam has asked you to draft a follow-up email summarising the performance review conversation, including the specific areas for improvement and the agreed next steps.",
    characterId: "sam-hartley",
    dialogue:
      "Your work is good. The numbers back that up. But nobody knows what you are doing until the work is finished. In a remote team, silence is not focus - it is invisibility. I need you updating the shared board daily, joining the stand-up with substance, and responding to Slack within two hours during core hours. That is not micromanagement. That is being part of a team.",
    chooseDialogue:
      "Remote work is not an excuse for going dark. Everyone on this team works remotely. The ones who communicate well are the ones who get trust and autonomy. The ones who disappear get questions and check-ins. I am telling you which category you are heading toward if this does not change.",
    rewriteDialogue:
      "Write the summary email. Lead with what is going well - the output quality. Then state the communication issue plainly. List the three specific changes I asked for and the timeline. No fluff, no softening. This needs to read as a clear record of what was agreed.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam is praising a remote team member's output quality but bluntly demanding better communication with specific behavioural expectations. Sam frames silence in a remote team as 'invisibility' and sets a clear consequence. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam acknowledges the positive ('your work is good') but moves immediately to the issue with specific, non-negotiable expectations. The feedback is clear, consequential, and leaves no room for ambiguity.",
          observation:
            "Notice how Sam reframes the team member's defence into a choice: communicate well and earn trust, or stay silent and get scrutinised. Direct communicators present clear cause-and-effect.",
          coachingTip:
            "When a manager delivers feedback with specific behavioural expectations and a stated consequence, they are communicating directly. Match their clarity in your response.",
          styleContext:
            "Direct communicators see performance reviews as accountability conversations. The feedback is precise because the expectations need to be unambiguous.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does mention specific tools and metrics (Slack response time, daily board updates), which can seem analytical. But the specifics serve a directive, not an analysis. Sam is telling, not exploring.",
          observation:
            "An analytical manager would present data on response times and communication patterns. Sam states the expectation and the consequence without building a statistical case.",
          coachingTip:
            "If someone uses specific requirements to set expectations, that is direct. If they use specific data to diagnose patterns, that is analytical.",
          styleContext:
            "Direct communicators use specifics to eliminate wiggle room, not to demonstrate thoroughness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how the team member feels about the feedback, explored underlying reasons for the communication gap, or offered emotional support. The conversation is purely performance-focused.",
          observation:
            "There is no acknowledgement of the team member's experience of remote work challenges. Sam treats the explanation as an excuse, not as context to explore.",
          coachingTip:
            "Ask yourself: is this manager exploring the problem or solving it? Sam has already diagnosed the issue and is prescribing specific changes.",
          styleContext:
            "Direct communicators in performance reviews separate the person from the behaviour. The work is praised; the communication is criticised. Both are stated factually.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member argues that remote work makes communication harder. Sam is not accepting that. How do you support the conversation?",
      options: [
        {
          id: "s314-opt-a",
          text: "Sam has a point. The rest of the team manages to stay visible in the same remote setup. The three expectations Sam outlined - daily board updates, stand-up participation, and two-hour Slack response - are practical and achievable. What specifically is making those difficult for you?",
          score: 10,
          result: "strong",
          explanation:
            "This validates Sam's expectations while giving the team member a chance to identify specific obstacles. It maintains the direct frame but opens a practical problem-solving thread.",
        },
        {
          id: "s314-opt-b",
          text: "I can see both sides. Remote work does make visibility harder, and communication expectations need to be explicitly stated. Perhaps we should create a team-wide communication charter so everyone has the same baseline.",
          score: 5,
          result: "partial",
          explanation:
            "A charter is a reasonable idea, but this is a performance review for one person. Broadening it to a team initiative dilutes the individual accountability Sam is establishing.",
        },
        {
          id: "s314-opt-c",
          text: "I think we should be more understanding of different working styles. Some people do their best work in deep focus mode, and constant updates can feel disruptive to that flow.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Sam's position and validates the team member's excuse. Sam has been clear that visibility is non-negotiable in a remote team.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the post-review email summarising the conversation. Lead with strengths, state the communication issue, list three changes with a timeline. Direct style, clear record.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Performance review summary - actions agreed\n\nThank you for the honest conversation today. Here is a summary of what we discussed.\n\nStrengths: Your output quality is consistently strong. You hit every delivery target last quarter and your technical work has been praised by clients. This is noted and valued.\n\nArea for improvement: Communication with the wider team. Your visibility within the team does not match the quality of your work. In a remote team, consistent communication is how trust and autonomy are earned.\n\nAgreed actions (effective immediately):\n1. Update the shared project board daily before end of core hours.\n2. Join the daily stand-up with a substantive update - not just 'same as yesterday.'\n3. Respond to Slack messages within two hours during core hours (9am to 5pm).\n\nWe will review progress at our next one-to-one on 28 March. If these changes are embedded by then, no further action is needed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Clean, fair, and unmistakable. Strengths are acknowledged, the issue is stated plainly, and the actions are specific with a review date. Sam would use this as the formal record.",
          observation:
            "You created a document that works as both a summary and a contract. The team member knows exactly what is expected and when it will be reviewed.",
          coachingTip:
            "Direct performance review summaries work best when they could stand alone as evidence. Anyone reading this email would understand the situation, the expectations, and the timeline.",
          styleContext:
            "Direct communicators use review summaries to create accountability. The document is a commitment, not just a record.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the actions are specific enough to be measured. If any action uses words like 'improve' or 'try to', replace them with observable behaviours.",
          observation:
            "If your email includes phrases like 'make an effort to communicate more', it is too vague for a direct performance record.",
          coachingTip:
            "Each action should answer: what, when, and how often. If any of those three are missing, the action is not specific enough.",
          styleContext:
            "Direct communicators write performance actions that can be audited. 'Communicate better' cannot be audited. 'Update the board daily' can.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either over-softens the feedback, buries the issue in praise, or fails to specify measurable actions with a review date.",
          observation:
            "If your email reads more like encouragement than accountability, it has missed Sam's intent. This is a formal record, not a pep talk.",
          coachingTip:
            "Structure the email as: what is going well, what needs to change, what specifically will change, and when it will be reviewed. That is the direct performance review format.",
          styleContext:
            "Direct communicators see vague review summaries as a failure of management. If the expectations are not clear, you cannot hold someone accountable for missing them.",
        },
      },
    },
  },

  // Scenario 315 - Alex Tran, remote, advanced
  {
    id: "scenario-315",
    title: "The Remote Team Restructure Announcement",
    context:
      "Alex is responsible for announcing a remote team restructure that will split a 12-person team into three pods of four, each with a pod lead. The change is designed to improve accountability, but some team members will see it as a loss of autonomy.",
    chooseContext:
      "Alex has announced the restructure and two senior team members are pushing back, arguing that the pod structure adds unnecessary hierarchy to a team that works well as a flat group.",
    rewriteContext:
      "Alex has asked you to draft the implementation plan for the pod structure, including roles, reporting lines, and the metrics that will determine whether the restructure is working.",
    characterId: "alex-tran",
    dialogue:
      "I know this is going to land differently for different people. But the flat structure is not working. We have twelve people and no one is accountable for anything specific. Three pods of four, each with a named lead. The leads report to me. Every pod owns a defined set of deliverables. If your pod delivers, you have full autonomy over how you work. If it does not, we have a conversation. This is not about control. It is about clarity.",
    chooseDialogue:
      "I hear the pushback. And I understand that for people who have operated with full independence, this feels like a step backwards. But here is the reality: three of our last five projects slipped, and when I asked who owned the delivery, I got three different answers. That is not flat - that is confused. Pods fix that.",
    rewriteDialogue:
      "Write the implementation plan. Three pods, four people each, pod lead named for each one. List the deliverables each pod owns. Include the reporting rhythm - weekly pod updates, fortnightly cross-pod sync. And define the success metric: if each pod hits its delivery targets for three consecutive months, the structure stays. If not, we iterate. Keep it to two pages.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Alex is restructuring a flat remote team into pods with named leads and defined deliverables. Pushback is met with project delivery data showing accountability failures. The restructure is framed as clarity, not control. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex makes a structural decision, announces it clearly, and counters pushback with practical evidence. The framing - 'this is not about control, it is about clarity' - is a direct communicator redefining the narrative.",
          observation:
            "Notice how Alex pre-empts the emotional objection and reframes it. Direct communicators anticipate resistance and address it proactively, without backing down.",
          coachingTip:
            "When a leader announces a structural change, provides evidence for why it is needed, and frames autonomy as something earned through delivery, they are communicating in an advanced direct style.",
          styleContext:
            "Direct communicators restructure when the current structure produces confusion. They see ambiguous accountability as a design flaw, not a cultural feature.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex references delivery data, which can seem analytical. But the data serves a decision already made, not an analysis still in progress. Alex is not studying the problem - they are solving it.",
          observation:
            "An analytical leader would present the delivery data, explore alternative structures, and invite the team to evaluate options. Alex presents one solution and defends it.",
          coachingTip:
            "If someone uses data to support a decision already taken, that is direct. If they use data to facilitate a decision still being made, that is analytical.",
          styleContext:
            "Direct communicators cite evidence to close debates, not to open them. The data is ammunition, not exploration.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not sought team input on the structure, explored how people feel about the change, or offered alternative models for discussion. The decision is made and the communication is about implementation, not consultation.",
          observation:
            "There is no facilitated discussion, no survey, and no consensus-building. Alex has moved from diagnosis to prescription in one step.",
          coachingTip:
            "Ask yourself: is this person involving the team in the decision or informing them of it? Alex is informing. The decision was made before the announcement.",
          styleContext:
            "Direct communicators believe that some decisions should not be democratic. Structural clarity is a leadership responsibility, not a team vote.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Two senior team members argue that pods add unnecessary hierarchy. Alex has cited delivery failures under the flat structure. How do you respond?",
      options: [
        {
          id: "s315-opt-a",
          text: "Alex is right that three of five projects slipped with unclear ownership. The pod model gives each group a defined scope and a named owner. If it works, everyone keeps their autonomy within the pod. I think the proof will be in the delivery data over the next quarter.",
          score: 10,
          result: "strong",
          explanation:
            "This backs Alex's position with the same evidence, acknowledges the concern about hierarchy, and reframes the pods as an enabler of autonomy rather than a constraint on it.",
        },
        {
          id: "s315-opt-b",
          text: "What if we let the team self-organise into pods rather than assigning them? That way we get the structure Alex wants but the team feels ownership over how the groups are formed.",
          score: 5,
          result: "partial",
          explanation:
            "Self-organisation sounds collaborative, but Alex has deliberately named the pod leads and assigned the groupings. Introducing choice at this stage undermines the decisiveness of the restructure.",
        },
        {
          id: "s315-opt-c",
          text: "I think we should give the flat structure more time. The project slippages might have been due to scope creep or resourcing, not the team structure itself.",
          score: 0,
          result: "weak",
          explanation:
            "Questioning Alex's diagnosis when the decision is already made undermines their authority. Alex has linked the delivery failures to accountability gaps and acted accordingly.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the pod structure implementation plan. Three pods, named leads, deliverables, reporting rhythm, and success metrics. Two pages maximum. Direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Remote Team Pod Structure - Implementation Plan\n\nEffective: 24 March 2026\n\nPod A - Client Delivery\nLead: Jamie Pearson\nMembers: Jamie, Aisha, Chris, Ravi\nOwns: All client-facing deliverables, project timelines, and client communication.\n\nPod B - Platform Development\nLead: Sonia Marks\nMembers: Sonia, Liam, Priti, Dan\nOwns: Product development, technical architecture, and release management.\n\nPod C - Operations and Enablement\nLead: Toby Drake\nMembers: Toby, Mei, Jordan, Faye\nOwns: Internal tooling, process documentation, and cross-pod dependencies.\n\nReporting Rhythm:\n- Weekly: Pod leads submit a one-page status update covering progress, blockers, and next-week priorities. Due every Friday by 4pm.\n- Fortnightly: Cross-pod sync meeting (30 minutes). Pod leads share updates, flag dependencies, escalate blockers.\n- Monthly: Alex reviews pod delivery data and adjusts priorities or resources.\n\nSuccess Metrics:\n- Each pod hits its delivery targets for three consecutive months.\n- Cross-pod dependencies are flagged and resolved within the reporting rhythm, not outside it.\n- Team engagement survey (run at month three) shows equal or improved scores on autonomy and clarity.\n\nIf pods meet these metrics, the structure stays. If not, we iterate at the three-month review.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Sharp, complete, and fits on two pages. Every pod has a named lead, a defined scope, and a clear reporting obligation. The success metrics make the restructure accountable to its own promises.",
          observation:
            "You included an engagement survey as a success metric, which is smart - it signals that Alex cares about autonomy even while imposing structure.",
          coachingTip:
            "Direct implementation plans work when they are specific enough to follow from day one. Your plan passes that test - anyone reading it knows what changes on Monday.",
          styleContext:
            "Direct communicators write implementation plans that function as operating manuals. If someone needs to ask what they should do differently, the plan has failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every element is specific enough to be actionable. If pod deliverables are described in general terms rather than named outputs, sharpen them.",
          observation:
            "If your reporting rhythm uses words like 'regular updates' instead of 'weekly by Friday at 4pm', it is too vague for a direct implementation plan.",
          coachingTip:
            "For each element, ask: does someone know exactly what to do and when? If not, add the missing specifics.",
          styleContext:
            "Direct implementation plans eliminate ambiguity. If there is room for interpretation, someone will interpret it differently from what you intended.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan either lacks named leads, specific deliverables, a reporting rhythm, or success metrics. A direct communicator needs all four to implement confidently.",
          observation:
            "If your plan reads like a set of principles rather than a set of instructions, it is too abstract for Alex's needs.",
          coachingTip:
            "Fill in every blank. Who leads each pod? What does each pod own? When do they report? What determines success? Answer all four and the plan is ready.",
          styleContext:
            "Direct communicators judge plans by whether they can be executed immediately. If any element requires a follow-up conversation to clarify, it is not finished.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (316-318) - meeting
  // ============================================

  // Scenario 316 - Priya Sharma, meeting, foundation
  {
    id: "scenario-316",
    title: "The Innovation Brainstorm",
    context:
      "Priya has been asked to kick off a brainstorming session for new product ideas. The room is a mix of enthusiastic creatives and cautious analysts. Priya's energy is filling the room as she sets up the session.",
    chooseContext:
      "Priya has generated a flood of ideas on the whiteboard and is now trying to get the quieter members of the group to contribute. One person has not spoken yet.",
    rewriteContext:
      "Priya has asked you to capture the session output in a way that preserves the creative energy while being organised enough for the product team to action.",
    characterId: "priya-sharma",
    dialogue:
      "Right, forget the rules for a minute. No idea is too wild, no thought is too half-baked. I want the stuff you would normally keep to yourself because you think someone might judge it. That is where the gold is. Who wants to go first? Or actually, I will - I think we should build a product that explains itself. Like, the product literally talks you through why it exists. Wild? Maybe. But let us start there.",
    chooseDialogue:
      "I notice a few of you have not jumped in yet, and I genuinely want to hear what you are thinking. Sometimes the quietest ideas are the best ones. You do not have to have a fully formed pitch - just give me a word, a feeling, a hunch. We will shape it together.",
    rewriteDialogue:
      "Capture what we came up with, but do not strip the life out of it. I want the product team to read this and feel the excitement we had in the room. Group the ideas by theme, but keep the original language. If someone said 'a product that hugs you', write that down, do not turn it into 'enhanced user comfort experience.'",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a brainstorm by encouraging wild ideas, sharing her own unfiltered thought first, and creating an atmosphere of creative permission. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with energy, models vulnerability by sharing a wild idea first, and creates a permission structure that values creativity over caution. This is expressive facilitation.",
          observation:
            "Notice how Priya goes first. Expressive communicators model the behaviour they want by demonstrating it, not by explaining it.",
          coachingTip:
            "When a facilitator sets the tone by sharing their own unfiltered idea and inviting others to match that energy, they are operating in an expressive style.",
          styleContext:
            "Expressive communicators believe that brainstorms succeed when people feel free to be playful. They create that freedom through their own example.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya does invite quieter people in, which can look supportive. But notice she is energising the room, not comforting it. The invitation is about creative contribution, not emotional safety.",
          observation:
            "A supportive facilitator would check whether quiet people feel safe. Priya assumes they have ideas and just need permission to share them.",
          coachingTip:
            "If the facilitator's warmth is designed to unlock creativity, that is expressive. If it is designed to create safety, that is supportive.",
          styleContext:
            "Expressive facilitators include people by making the room feel exciting to participate in. Supportive facilitators include people by making the room feel safe to participate in.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not set a structured framework, evaluation criteria, or systematic process for generating ideas. Her approach is spontaneous, energetic, and creatively open.",
          observation:
            "There is no prioritisation matrix, no voting system, and no evaluation stage mentioned. Priya wants the ideas flowing before anyone starts filtering.",
          coachingTip:
            "Ask yourself: is this facilitator optimising for creativity or for rigour? Priya is all about creative volume. The filtering comes later.",
          styleContext:
            "Expressive communicators believe that too much structure kills creativity. They prefer to generate freely and organise afterwards.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "One person has not spoken during the brainstorm. Priya is encouraging them to contribute. How do you help?",
      options: [
        {
          id: "s316-opt-a",
          text: "I had an idea earlier that I almost did not say because it sounded odd. But that is the point, right? So here it is... and actually, I would love to hear what you were thinking when Priya mentioned the self-explaining product. Did that spark anything for you?",
          score: 10,
          result: "strong",
          explanation:
            "This models the vulnerability Priya is encouraging, normalises hesitation, and creates a gentle on-ramp for the quiet person by connecting to a specific earlier idea.",
        },
        {
          id: "s316-opt-b",
          text: "If you would prefer, you could write your ideas on a sticky note rather than saying them aloud. That way we still capture your thinking without putting you on the spot.",
          score: 5,
          result: "partial",
          explanation:
            "Considerate, but it shifts the session format away from the verbal energy Priya is cultivating. It is a supportive solution to an expressive situation.",
        },
        {
          id: "s316-opt-c",
          text: "Let us keep the momentum going with the people who have ideas ready. We can circle back to anyone who wants to add something at the end.",
          score: 0,
          result: "weak",
          explanation:
            "This sidelines the quiet person, which contradicts Priya's explicit effort to include them. It also implies that not speaking means not having ideas.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Capture the brainstorm output in a way that preserves the creative energy while being organised enough to action. Group by theme but keep original language. Expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Brainstorm Output - Product Ideas Session\n\nWhat an incredible session. The energy in the room was electric and these ideas deserve to be taken seriously in their raw form.\n\nTheme 1: Products That Talk to You\n- 'A product that explains itself' (Priya) - literally walks you through why it exists as you use it\n- 'An onboarding experience that feels like a conversation, not a manual' (Dev)\n- 'What if the product asked YOU questions to get better?' (Jess)\n\nTheme 2: Emotional Design\n- 'A product that hugs you' (Marcus) - warmth built into every interaction\n- 'Colour and tone that change based on how the user is feeling' (Aisha)\n\nTheme 3: Radical Simplicity\n- 'One button. That is the whole product.' (Toby)\n- 'Kill every feature that less than 50% of users touch' (Liam)\n\nNext steps: The product team should read these ideas in context, not in isolation. Each theme has momentum and we should explore the two strongest in a follow-up workshop next week. Let us keep the energy going.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "You captured the energy, preserved the original language, and organised without sanitising. Priya would be proud to share this with the product team.",
          observation:
            "Attributing ideas to individuals honours their contributions and maintains the personal connection that expressive communicators value.",
          coachingTip:
            "Expressive brainstorm summaries work when they make the reader wish they had been in the room. If the document feels alive, you have captured the session.",
          styleContext:
            "Expressive communicators believe that the energy of a brainstorm is as important as the ideas. A flat summary kills both.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good organisation, but check whether the energy of the original session comes through. If the ideas have been reworded into corporate language, the life has been drained out of them.",
          observation:
            "If 'a product that hugs you' has become 'enhanced emotional user experience', Priya will feel betrayed by the summary.",
          coachingTip:
            "Keep the original words. The quirkiness is the point. A brainstorm summary should sound like the people who were in the room, not like a strategy document.",
          styleContext:
            "Expressive communicators value authenticity in documentation. If the summary sounds like it was written by someone who was not there, it has failed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either strips the energy, over-formalises the language, or fails to organise the ideas into actionable themes.",
          observation:
            "If your document reads like a clinical list of product features rather than a capture of creative energy, it misses Priya's brief entirely.",
          coachingTip:
            "Rewrite with this question in mind: would Priya recognise this as her session? If not, put the original words back in and add the warmth.",
          styleContext:
            "Expressive communicators lose trust in people who translate their ideas into bland language. Preserve the voice, preserve the trust.",
        },
      },
    },
  },

  // Scenario 317 - Marcus Webb, meeting, intermediate
  {
    id: "scenario-317",
    title: "The Client Pitch Rehearsal",
    context:
      "Marcus is leading a rehearsal for a high-stakes client pitch happening tomorrow. He wants the presentation to tell a compelling story, not just deliver information. The team is running through the slides and Marcus is giving live feedback.",
    chooseContext:
      "Marcus has stopped the rehearsal because the middle section of the pitch is too data-heavy and lacks narrative flow. He wants to restructure it around a story rather than statistics.",
    rewriteContext:
      "Marcus has asked you to rewrite the opening three minutes of the pitch to hook the client emotionally before the data is introduced.",
    characterId: "marcus-webb",
    dialogue:
      "Stop. Stop there. That slide has twelve numbers on it and no story. The client is not going to remember our market share percentage. They are going to remember how we made them feel about the opportunity. Give me a story. Give me a moment. Give me something they will repeat in their board meeting when they are selling this to their own team.",
    chooseDialogue:
      "I am not saying cut the data. The data matters. But it is act two, not act one. Act one is the story of why this matters. Act two is the proof. Act three is the future we build together. Right now you are leading with act two and the audience has already checked out.",
    rewriteDialogue:
      "Rewrite the opening three minutes. I want it to start with a question that makes the client lean in, followed by a story about a company like theirs that faced the same challenge. Then - and only then - we transition to the data. The opening should feel like the start of a conversation, not the start of a lecture.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus has stopped a pitch rehearsal because the slides are data-heavy and lack narrative. He wants the pitch restructured around story, emotion, and a three-act structure. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus thinks in narrative arcs, prioritises emotional engagement, and wants the client to feel something before they see the data. This is expressive communication applied to presentation design.",
          observation:
            "Notice how Marcus uses theatrical language - 'act one, act two, act three.' Expressive communicators naturally think in stories and structure communication as narrative.",
          coachingTip:
            "When someone critiques a presentation for lacking story rather than lacking data, they are operating expressively. Match their thinking by offering narrative, not numbers.",
          styleContext:
            "Expressive communicators believe the best pitches are the ones clients retell. If the story is not memorable, the data does not matter.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus cares about the audience's experience, which can look supportive. But his focus is on engagement and impact, not on making the audience feel safe or comfortable.",
          observation:
            "A supportive presenter would worry about whether the client feels overwhelmed. Marcus worries about whether they feel inspired.",
          coachingTip:
            "If someone wants the audience to lean in with excitement, that is expressive. If they want the audience to feel at ease, that is supportive.",
          styleContext:
            "Expressive communicators design pitches for emotional impact. They want the room buzzing at the end, not just nodding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has explicitly deprioritised data in favour of story. He values narrative structure over statistical rigour in the opening of a pitch.",
          observation:
            "There is no request for more data, better charts, or deeper analysis. Marcus wants fewer numbers and more feeling in the first three minutes.",
          coachingTip:
            "Ask yourself: is this person optimising for proof or for persuasion? Marcus believes persuasion comes from story, not statistics.",
          styleContext:
            "Expressive communicators see data as supporting material, not the main event. The story carries the pitch; the data confirms it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants to replace the data-heavy middle section with a narrative structure. How do you respond?",
      options: [
        {
          id: "s317-opt-a",
          text: "I agree - the data is stronger when it proves a story the client already believes. What if we opened with the challenge their industry is facing, told the story of how we solved it for a similar company, and then used the data as the punchline?",
          score: 10,
          result: "strong",
          explanation:
            "This matches Marcus's narrative thinking by proposing a story-first structure where data serves as proof rather than the opening argument. It builds on his three-act concept.",
        },
        {
          id: "s317-opt-b",
          text: "Could we keep the data slides but add a one-sentence story before each chart? That way we get the narrative without losing the evidence the client might need for their internal sign-off.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Marcus specifically wants to restructure, not just annotate. Adding a sentence before each chart is a patch, not the rewrite he is asking for.",
        },
        {
          id: "s317-opt-c",
          text: "I think the data speaks for itself. This client is quite analytical and they will want to see the numbers before they hear the story. Perhaps we should lead with our strongest metrics.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Marcus's direction. He has already diagnosed the problem as too much data too early. Arguing for more data in the opening will not land.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rewrite the opening three minutes of the client pitch. Start with a hook question, tell a relatable story, then transition to data. Expressive style - conversational, engaging, memorable.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Opening script - client pitch\n\nLet me start with a question. When was the last time one of your customers told someone else about you - not because you asked them to, but because they could not help themselves?\n\nThat is the question we asked ourselves two years ago when we started working with a retailer about your size, in a market just as competitive as yours. They were doing well - solid growth, loyal base, good product. But they were invisible. Their customers bought from them and moved on. Nobody talked about them.\n\nWe helped them change that. Not by spending more on advertising, but by rethinking the moments that matter - the ones customers remember and retell. Within 18 months, their referral rate doubled and their cost of acquisition dropped by a third.\n\nNow, here is the part where I show you the numbers behind that story, because the numbers are remarkable. But I wanted you to hear the story first, because the story is what your board will remember when they are deciding whether to say yes.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is a pitch opening Marcus would deliver with pride. The hook question lands, the story is relatable without being generic, and the transition to data is seamless and confident.",
          observation:
            "You made the data feel like a reward for listening to the story. That sequencing - earn attention, then deliver proof - is exactly what expressive presenters do.",
          coachingTip:
            "Expressive pitch openings work when the audience forgets they are being pitched to. If the first three minutes feel like a conversation, the rest of the pitch sells itself.",
          styleContext:
            "Expressive communicators believe the opening of a pitch determines whether the audience is listening or just present. Your opening earns attention.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the story is specific enough to be memorable. If the example is too generic - 'a company improved their results' - it will not stick.",
          observation:
            "If your opening could be used in any pitch for any client, it is too broad. Marcus wants something the client recognises as their world.",
          coachingTip:
            "Add one specific, surprising detail to the story. 'Their referral rate doubled' is good. 'One customer posted a video that got 2 million views' is better.",
          styleContext:
            "Expressive communicators remember details, not summaries. The specific moment is what makes a story retellable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening either leads with data, lacks a story, or fails to create the conversational tone Marcus specifically requested.",
          observation:
            "If your opening starts with 'We are delighted to present our capabilities' or 'The market is growing at 12% CAGR', it has missed the brief entirely.",
          coachingTip:
            "Start with a question the client actually cares about. Then tell a story that makes them think 'that could be us.' Then - and only then - show the numbers.",
          styleContext:
            "Expressive communicators believe that pitches fail when they open with credentials instead of curiosity. Lead with the question, not the answer.",
        },
      },
    },
  },

  // Scenario 318 - Nina Okafor, meeting, advanced
  {
    id: "scenario-318",
    title: "The Cross-Functional Alignment Meeting",
    context:
      "Nina has called a meeting between three department heads who have been working in silos on overlapping initiatives. There is tension in the room because each department feels the others are duplicating their work. Nina wants to turn competition into collaboration.",
    chooseContext:
      "Two department heads have started debating whose initiative should take priority. The conversation is getting territorial. Nina is stepping in to reframe the dynamic.",
    rewriteContext:
      "Nina has asked you to write a follow-up summary that reframes the three overlapping initiatives as a single collaborative programme, crediting each department's unique contribution.",
    characterId: "nina-okafor",
    dialogue:
      "I asked for this meeting because I think we are all working toward the same thing and do not even realise it. Each of you has built something brilliant, and it would be a shame if we spent more energy defending our territory than building something bigger together. I want us to leave this room with a shared vision, not three competing ones.",
    chooseDialogue:
      "I hear both of you, and I think you are both right. That is the point. Your initiative has the customer insight, yours has the technical capability, and the third has the operational reach. Separately, you each have a piece. Together, you have the whole picture. So let us stop arguing about priority and start talking about integration.",
    rewriteDialogue:
      "Write the summary as if this was always meant to be one programme. Give each department credit for what they bring - make it clear that no one's work is being taken away, it is being amplified. The summary should feel like an invitation to build something bigger, not a merger announcement.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Nina has brought three competing department heads together and is reframing their overlapping work as complementary rather than competitive. She uses phrases like 'something bigger together' and focuses on shared vision. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina uses vision, energy, and inclusive language to transform a territorial dispute into a collaborative opportunity. She appeals to ambition rather than logic or empathy - classic expressive leadership.",
          observation:
            "Notice how Nina reframes the conflict not by analysing it but by painting a bigger picture. Expressive communicators resolve tensions by offering a more exciting alternative.",
          coachingTip:
            "When someone de-escalates conflict by elevating the conversation to a shared vision rather than mediating between positions, they are operating expressively.",
          styleContext:
            "Expressive communicators believe that most turf wars dissolve when people see a bigger prize. The vision has to be more exciting than the territory.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina's warmth and inclusiveness can look supportive. But she is not primarily creating emotional safety - she is creating excitement about what the combined effort could achieve.",
          observation:
            "A supportive mediator would focus on ensuring each department head feels heard and valued. Nina acknowledges their work but pivots quickly to the future possibility.",
          coachingTip:
            "If someone resolves conflict by offering a vision, that is expressive. If they resolve it by ensuring everyone feels safe, that is supportive.",
          styleContext:
            "Expressive communicators in conflict situations are forward-looking optimists. They spend less time processing the tension and more time painting the alternative.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not proposed a structured integration plan, a priority matrix, or a governance framework. Her approach is about energy, vision, and reframing, not process design.",
          observation:
            "There is no Gantt chart, no RACI matrix, and no workstream allocation. Nina is working at the level of narrative and motivation.",
          coachingTip:
            "Ask yourself: is this person solving the structural problem or reframing the emotional one? Nina is reframing. The structure will follow the energy.",
          styleContext:
            "Expressive communicators believe that alignment happens at the level of vision, not process. Get people excited about the destination and they will figure out the route.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Two department heads are debating whose initiative should take priority. Nina is reframing it as integration. How do you support her?",
      options: [
        {
          id: "s318-opt-a",
          text: "Nina is right - this is not about priority, it is about combination. What if each department led the strand they are strongest in? You bring the customer insight, you bring the tech, and the operations team brings the delivery engine. One programme, three experts.",
          score: 10,
          result: "strong",
          explanation:
            "This builds on Nina's reframe by making it concrete. Each department keeps ownership of their strength, and the competition becomes collaboration with defined roles.",
        },
        {
          id: "s318-opt-b",
          text: "I think we should map the three initiatives against our strategic priorities and see which one delivers the most value. That will make the priority decision objective.",
          score: 5,
          result: "partial",
          explanation:
            "Analytical and reasonable, but Nina has explicitly reframed this away from prioritisation. Going back to a ranking exercise contradicts her integration approach.",
        },
        {
          id: "s318-opt-c",
          text: "I think we need to be honest that three overlapping initiatives is a governance failure. Someone needs to own this centrally and the others should fold their work in.",
          score: 0,
          result: "weak",
          explanation:
            "Framing this as a failure and suggesting departments fold in their work is exactly the territorial dynamic Nina is trying to dissolve. It would escalate, not resolve, the tension.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write the follow-up summary reframing three overlapping initiatives as one collaborative programme. Credit each department's unique contribution. Make it feel like an invitation, not a mandate. Expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Subject: One programme, three strengths - our shared plan forward\n\nWhat became clear in our meeting is that we are not running three competing initiatives - we are building three parts of the same thing. And when you see them side by side, the picture is much bigger than any one department imagined.\n\nHere is what each team brings to the table:\n\nCustomer Insight (Marketing): Deep understanding of what customers want, how they behave, and where the opportunities are. This is our compass.\n\nTechnical Capability (Product): The architecture, tools, and innovation that turn insight into reality. This is our engine.\n\nOperational Reach (Operations): The infrastructure to deliver at scale, consistently and reliably. This is our backbone.\n\nNo one's work is being replaced. It is being amplified. The initiative becomes a programme because the combination is stronger than the parts.\n\nNext step: A joint workshop in the next two weeks to map how these three strengths connect. I want each department to come with their best thinking and leave with a shared plan.\n\nThis is a chance to build something none of us could build alone. Let us make the most of it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This reads like an invitation to something exciting, not a corporate restructure memo. Each department's contribution is honoured, the tone is energising, and the call to action is collaborative.",
          observation:
            "Using metaphors - compass, engine, backbone - gives each department a distinctive identity within the shared programme. Expressive communicators make abstract concepts vivid.",
          coachingTip:
            "Expressive integration summaries work when each contributor reads their section and feels proud. If anyone feels diminished, revise.",
          styleContext:
            "Expressive communicators believe that the way you announce a collaboration determines whether people join with enthusiasm or reluctance. Your summary generates enthusiasm.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the summary feels exciting or administrative. If the language is functional rather than inspiring, it will not match Nina's vision.",
          observation:
            "If your summary reads like a programme initiation document rather than an energising narrative, it needs more of Nina's voice.",
          coachingTip:
            "Add a line about what this combined programme could achieve that none of the individual initiatives could. The vision of the bigger prize is what makes it expressive.",
          styleContext:
            "Expressive communicators need integration documents to feel like beginnings, not conclusions. The energy should be forward-looking.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either reads like a governance document, fails to credit individual departments, or lacks the collaborative energy Nina specifically requested.",
          observation:
            "If your document announces the integration as a decision rather than an invitation, it misses the expressive intent entirely.",
          coachingTip:
            "Rewrite with this question: would each department head read this and feel excited about what comes next? If not, add more vision and more credit.",
          styleContext:
            "Expressive communicators measure the success of integration documents by the energy they create, not the structure they impose.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (319-321) - feedback
  // ============================================

  // Scenario 319 - Tom Brennan, feedback, foundation
  {
    id: "scenario-319",
    title: "The First Performance Conversation",
    context:
      "Tom is giving feedback to a new team member who has been in the role for three months. The person is working hard but making avoidable mistakes due to rushing. Tom wants to address this without crushing their confidence.",
    chooseContext:
      "Tom has opened the conversation by asking how the team member feels they are settling in. The person says they are finding it overwhelming but does not want to admit they are struggling.",
    rewriteContext:
      "Tom has asked you to help him draft a development note that captures the feedback in a way that feels encouraging rather than critical.",
    characterId: "tom-brennan",
    dialogue:
      "First off, I want to say that the effort you are putting in has not gone unnoticed. You are clearly committed, and that matters a lot. I have noticed a few things that I think could help you feel more settled, and I want us to talk through them together - not as criticism, but as support.",
    chooseDialogue:
      "I think you are putting pressure on yourself to get everything right immediately, and that is actually causing some of the mistakes. What if we slowed things down a bit? Not because you are behind, but because taking a bit more time now will save you time later. How does that feel as an approach?",
    rewriteDialogue:
      "Write this up as a development note, not a performance warning. I want the opening line to be something they read and feel supported by. The areas for improvement should be framed as 'things that will help you grow' rather than 'things you are doing wrong.' And finish with something that shows I believe in them.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom is giving feedback to a new team member by leading with recognition, framing areas for improvement as support, and asking how the suggested approach feels. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with recognition, frames feedback as care, and checks in on how the person feels about the approach. Every element is designed to maintain confidence while addressing the issue.",
          observation:
            "Notice how Tom explicitly says 'not as criticism, but as support.' Supportive communicators name the intent of their feedback to prevent misinterpretation.",
          coachingTip:
            "When a manager opens feedback with recognition and explicitly frames the conversation as supportive, they are communicating in a supportive style. Match their warmth.",
          styleContext:
            "Supportive communicators believe that feedback only works when the recipient feels safe enough to hear it. They invest in emotional safety before delivering the content.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and encouraging, which can look expressive. But his warmth is protective rather than energising. He is creating safety, not excitement.",
          observation:
            "An expressive manager would share their own early-career struggles to build connection. Tom keeps the focus entirely on the team member's experience.",
          coachingTip:
            "If someone's warmth is designed to protect confidence, that is supportive. If it is designed to build enthusiasm, that is expressive.",
          styleContext:
            "Supportive communicators in feedback conversations are guardians of the other person's self-belief. Every word is chosen to build up, not just to inform.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented the feedback as a list of errors, a performance metric, or a corrective action plan. His approach is entirely relationship-centred.",
          observation:
            "There is no scoring, no benchmarking, and no comparison to peers. Tom treats feedback as a conversation about growth, not an assessment of performance.",
          coachingTip:
            "Ask yourself: is this manager measuring or nurturing? Tom is nurturing. The feedback is wrapped in care and delivered with emotional attentiveness.",
          styleContext:
            "Supportive communicators see feedback as a gift to be given gently, not a verdict to be delivered formally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member admits they are finding things overwhelming but does not want to seem like they are struggling. Tom has suggested slowing down. How do you respond?",
      options: [
        {
          id: "s319-opt-a",
          text: "That makes a lot of sense, Tom. And honestly, the first three months are meant to be a learning curve, not a performance sprint. There is no expectation that you should have everything figured out already. Let us look at the workload together and see where we can give you a bit more breathing room.",
          score: 10,
          result: "strong",
          explanation:
            "This normalises the struggle, removes the pressure to appear competent, and offers practical support. It aligns with Tom's supportive approach by building safety.",
        },
        {
          id: "s319-opt-b",
          text: "I think the key is to focus on the tasks that have the biggest impact and let the smaller things wait. If we prioritise, the volume becomes more manageable.",
          score: 5,
          result: "partial",
          explanation:
            "Practical advice, but it jumps to a solution before acknowledging the emotional experience. Tom has set a supportive tone and this response is more task-focused.",
        },
        {
          id: "s319-opt-c",
          text: "Everyone feels overwhelmed at the start. The best thing you can do is push through it. The confidence comes once you have handled a few wins.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the feelings with 'push through it' undermines the safe space Tom has created. Supportive conversations validate emotions rather than minimising them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the development note for Tom. Opening line should feel supportive, areas for improvement framed as growth, and a closing line that shows belief. Supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Development Note - Three-Month Review\n\nYou have made a genuinely strong start. Your commitment to the team and your willingness to take on new challenges have not gone unnoticed, and they are exactly the qualities that will carry you forward.\n\nAreas for growth:\n\n1. Pacing: You are working quickly, which shows great energy. The next step is to build in a brief review before submitting work - a quick check that catches the small errors before they reach anyone else. This is not about slowing down; it is about finishing with confidence.\n\n2. Asking for help: You have been trying to figure things out independently, which is admirable. But the team is here to support you, and asking a question is always better than making an assumption. Nobody expects you to know everything at three months.\n\n3. Prioritisation: When everything feels urgent, it is hard to know where to start. Let us set up a weekly 15-minute check-in where we look at your workload together and agree what matters most that week.\n\nI want to be clear: I am writing this because I believe in your potential, not because I have concerns about your ability. You are exactly where you should be, and with a few small adjustments, you are going to thrive here.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This note is warm, specific, and genuinely encouraging. Each area for growth is framed as a natural next step rather than a correction. The closing line would land beautifully.",
          observation:
            "You framed 'asking for help' as admirable independence rather than a weakness. Supportive communicators always find the strength inside the issue.",
          coachingTip:
            "Supportive development notes work when the recipient reads them and feels motivated rather than deflated. If every section starts with a positive reframe, the growth areas feel safe.",
          styleContext:
            "Supportive communicators write feedback documents that people keep and re-read when they need encouragement. Your note has that quality.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether the growth areas could be read as criticism despite the framing. If any point starts with what the person is doing wrong rather than what they could do next, soften it.",
          observation:
            "If your note includes phrases like 'you need to improve' or 'this is not meeting expectations', it has shifted away from the supportive register Tom requested.",
          coachingTip:
            "Replace 'you need to...' with 'the next step is...' throughout. That single change transforms criticism into coaching.",
          styleContext:
            "Supportive communicators frame growth as a journey, not a correction. The person should feel they are being guided, not fixed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note either reads as a performance warning, lacks the warmth Tom requested, or fails to demonstrate genuine belief in the team member's potential.",
          observation:
            "If your closing line is about expectations or consequences rather than belief and encouragement, it has missed Tom's brief completely.",
          coachingTip:
            "Rewrite the opening and closing first. If those two sections feel warm and genuine, the middle will follow. Start with 'you have made a strong start' and end with 'I believe in you.'",
          styleContext:
            "Supportive communicators believe the tone of a development note determines whether it becomes a source of motivation or a source of anxiety.",
        },
      },
    },
  },

  // Scenario 320 - Leah Morgan, feedback, intermediate
  {
    id: "scenario-320",
    title: "The Peer Feedback Circle",
    context:
      "Leah is facilitating a peer feedback circle where team members give and receive feedback from colleagues. The team has never done this before and some people are nervous about both giving and receiving honest feedback.",
    chooseContext:
      "One team member has received feedback that was more blunt than expected and is visibly hurt. Leah is stepping in to reframe the feedback and restore the person's confidence.",
    rewriteContext:
      "Leah has asked you to help her write the facilitation guide for future peer feedback circles, including ground rules that ensure feedback is honest but delivered with care.",
    characterId: "leah-morgan",
    dialogue:
      "I know this format is new and it takes courage to sit in this circle - both to give and to receive. I want to set a frame before we start: feedback is a gift when it is given with care. That means being honest, but also being thoughtful about how your honesty lands. If in doubt, lead with what you appreciate before you share what you would like to see more of.",
    chooseDialogue:
      "I can see that landed harder than it was meant to. And I want to acknowledge that - receiving direct feedback in front of peers is not easy, and your reaction is completely valid. Can I offer a reframe? I think what was being said is that your contribution is valued and the feedback is about how to make it even stronger. Does that feel fair?",
    rewriteDialogue:
      "Write the facilitation guide with care at its centre. I want ground rules that protect people without making the session superficial. The feedback should still be honest, but the delivery should be kind. Include example phrases people can use to start their feedback that feel warm and constructive.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Leah is facilitating a peer feedback circle by framing feedback as a gift given with care, leading with appreciation, and stepping in to protect someone who received blunt feedback. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah prioritises emotional safety throughout - setting caring ground rules, validating the hurt person's reaction, and reframing difficult feedback. This is supportive facilitation at its best.",
          observation:
            "Notice how Leah validates the hurt reaction before reframing. Supportive communicators never skip the acknowledgement step, even when they plan to move forward.",
          coachingTip:
            "When a facilitator steps in to protect someone's emotional experience and reframes criticism as care, they are operating supportively.",
          styleContext:
            "Supportive communicators believe that feedback sessions fail when people feel unsafe. The ground rules exist to protect the relationship, not just the process.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and engaging, which can look expressive. But her warmth serves protection, not energy. She is building safety nets, not building excitement.",
          observation:
            "An expressive facilitator would encourage people to be bold and creative with their feedback. Leah encourages them to be honest and kind.",
          coachingTip:
            "If warmth is used to protect, that is supportive. If warmth is used to energise, that is expressive. Leah's warmth is a shield, not a spotlight.",
          styleContext:
            "Supportive facilitators in feedback settings act as emotional guardians. Their role is to ensure nobody leaves the room feeling diminished.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not structured the session around data, metrics, or performance frameworks. Her approach is entirely relational and emotionally attuned.",
          observation:
            "There is no 360-degree feedback template, no scoring rubric, and no competency framework. Leah has built the session around human connection.",
          coachingTip:
            "Ask yourself: is this facilitator managing a process or managing emotions? Leah is managing emotions. The process serves the people, not the other way around.",
          styleContext:
            "Supportive communicators design feedback processes that feel human. If the process feels clinical, they would rather change the process than force people through it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has been visibly hurt by blunt peer feedback. Leah is reframing. How do you support the situation?",
      options: [
        {
          id: "s320-opt-a",
          text: "I think what was shared comes from a good place, and I know it can sting when it is said directly. For what it is worth, I have seen how hard you work and I think the feedback is about building on something strong, not tearing it down. You are doing more right than you might feel right now.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the hurt, reinforces the positive intent, and adds personal recognition. It supports Leah's reframe while adding an additional layer of reassurance.",
        },
        {
          id: "s320-opt-b",
          text: "This is exactly why peer feedback is tricky. Maybe we should introduce a written format so people can choose their words more carefully and receivers can process it privately.",
          score: 5,
          result: "partial",
          explanation:
            "A practical suggestion, but it redirects to process improvement when the immediate need is emotional repair. The person needs to feel better now, not to know the format will change.",
        },
        {
          id: "s320-opt-c",
          text: "Honestly, receiving direct feedback is a skill we all need to develop. It might feel uncomfortable now, but getting used to honest input makes you stronger in the long run.",
          score: 0,
          result: "weak",
          explanation:
            "Telling someone to toughen up when they are hurt dismisses their emotional experience. Leah has validated their feelings and this response invalidates them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the facilitation guide for future peer feedback circles. Include ground rules, example opening phrases, and guidance on receiving feedback. Supportive style - honest but kind.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Peer Feedback Circle - Facilitation Guide\n\nPurpose: To create a space where team members can share honest, caring feedback that helps everyone grow.\n\nGround Rules:\n1. Lead with appreciation. Before sharing what you would like to see more of, share what you value about the person's contribution.\n2. Speak from your own experience. Use 'I have noticed...' and 'What works well for me is...' rather than 'You always...' or 'You never...'\n3. Be specific and kind. Vague feedback is unhelpful; harsh feedback is harmful. Aim for specific and caring.\n4. It is okay to pause. If feedback lands hard, the receiver can ask for a moment before responding. There is no pressure to react immediately.\n5. What is shared stays here. Trust is the foundation of this exercise.\n\nExample Opening Phrases:\n- 'Something I really appreciate about working with you is...'\n- 'One thing that would make our collaboration even stronger is...'\n- 'I have noticed that when you do X, it has a really positive impact. I would love to see more of that in Y situations.'\n- 'This is meant with care - I think you could get even better results if...'\n\nGuidance for Receivers:\n- Breathe. You do not need to respond immediately.\n- Listen for the intent behind the words. Most feedback comes from a place of wanting you to succeed.\n- It is okay to feel something. You can say 'I need a moment to take that in' at any point.\n- Thank the giver. It takes courage to give honest feedback too.\n\nFacilitator Role: Watch for emotional temperature. If someone looks uncomfortable, check in gently. The session succeeds when everyone leaves feeling respected, not just reviewed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This guide balances honesty with kindness throughout. The ground rules protect without preventing real feedback, and the receiver guidance normalises emotional reactions.",
          observation:
            "The phrase 'It is okay to feel something' is powerful. Supportive facilitators give people permission to be human in professional settings.",
          coachingTip:
            "Supportive facilitation guides work when they read as if written by someone who genuinely cares about every person in the room.",
          styleContext:
            "Supportive communicators design feedback processes where the relationship is protected even when the content is challenging. Your guide achieves that balance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the ground rules are specific enough to prevent the kind of blunt feedback that caused hurt in the scenario. If the rules are too general, they will not protect.",
          observation:
            "If your guide says 'be respectful' without explaining what that looks like in practice, it is too vague to guide behaviour.",
          coachingTip:
            "Replace abstract principles with specific behaviours. 'Be kind' becomes 'lead with what you appreciate before sharing what you would change.'",
          styleContext:
            "Supportive facilitators know that vague ground rules do not protect people. Specific, caring guidance does.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your guide either focuses too much on the process and not enough on the people, lacks example phrases, or fails to address what happens when feedback lands badly.",
          observation:
            "If your guide reads like an HR policy rather than a caring facilitation resource, it has missed Leah's intent.",
          coachingTip:
            "Rewrite with this question: would a nervous team member read this guide and feel safer about the session? If not, add more warmth and more specific reassurance.",
          styleContext:
            "Supportive communicators write facilitation guides that feel like a reassuring hand on the shoulder. If the guide creates anxiety rather than reducing it, start again.",
        },
      },
    },
  },

  // Scenario 321 - David Chen, feedback, advanced
  {
    id: "scenario-321",
    title: "The Difficult Upward Feedback",
    context:
      "David has been asked by a senior leader to give them honest feedback on their management style. The leader's team is disengaged, and David - as a trusted peer - has been asked to say what others will not. David wants to be honest without damaging the relationship.",
    chooseContext:
      "David has shared that the team feels micromanaged and does not feel trusted to make decisions. The senior leader is becoming defensive, saying they are just being thorough.",
    rewriteContext:
      "David has asked you to help him draft a follow-up note summarising the feedback in a way that the leader can re-read privately without feeling attacked.",
    characterId: "david-chen",
    dialogue:
      "I want to start by saying that the fact you asked for this feedback says a lot about you. Not many leaders at your level would invite this kind of honesty. I am going to share what I have heard, and I want you to know it comes from a place of wanting to help, not to criticise. Your team respects you - and this feedback is about helping that respect grow into trust.",
    chooseDialogue:
      "I hear you - you are being thorough because you care about quality. That is a strength. What I am hearing from the team is that sometimes that thoroughness can feel like a lack of trust. It is not about your intention - it is about how it lands. And I think we can close that gap without you having to change who you are.",
    rewriteDialogue:
      "Write the note for them to read later. Do not repeat the feedback word-for-word - they will remember the conversation. Instead, frame it as observations and questions for reflection. Something they can sit with. End with what I genuinely believe: they are a good leader who is one adjustment away from being a great one.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "David is delivering upward feedback to a senior leader by first honouring their courage in asking, then separating intent from impact, and framing the gap as closeable. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David layers his feedback with care: honouring the leader's vulnerability, separating intent from impact, and positioning the feedback as a bridge from respect to trust. This is advanced supportive communication.",
          observation:
            "Notice how David reframes micromanagement as 'thoroughness that lands differently than intended.' Supportive communicators always find the generous interpretation before naming the issue.",
          coachingTip:
            "When someone delivers difficult feedback by finding the strength behind the behaviour and then gently naming the gap, they are communicating supportively at an advanced level.",
          styleContext:
            "Supportive communicators believe that people are more willing to change when they feel understood. David makes the leader feel understood before asking for change.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is emotionally intelligent and articulate, which can look expressive. But his goal is protection - of the leader's dignity, the relationship, and the team's concerns. Expressive communicators would be more likely to share their own feelings about the situation.",
          observation:
            "An expressive feedback-giver would say 'I find it frustrating when...' David says 'the team feels...' - keeping himself out of the frame and focusing on others.",
          coachingTip:
            "If someone delivers feedback while keeping the spotlight on others' experiences rather than their own, that is supportive. Self-expression is secondary to service.",
          styleContext:
            "Supportive communicators in upward feedback situations act as translators between the team and the leader. They carry the message without making themselves the story.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented engagement scores, team turnover data, or a structured assessment framework. His feedback is relational and carefully worded, not data-driven.",
          observation:
            "There is no performance dashboard, no comparative management assessment, and no scoring rubric. David's feedback is built on empathy and careful framing.",
          coachingTip:
            "Ask yourself: is this person presenting evidence or offering understanding? David is offering understanding. The evidence is the team's emotional experience, not a dataset.",
          styleContext:
            "Supportive communicators believe that the most honest feedback is also the most carefully delivered. Bluntness without care is not honesty - it is carelessness.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The senior leader is becoming defensive, saying their thoroughness is about maintaining quality. David has separated intent from impact. How do you support the conversation?",
      options: [
        {
          id: "s321-opt-a",
          text: "David's point is important. Your commitment to quality is clear and nobody is questioning that. The opportunity is in how that commitment is communicated. What if we explored one area where you could give the team more ownership and see how they respond? Small experiment, low risk.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the leader's intent, supports David's feedback, and offers a low-risk path forward. It makes the change feel safe rather than threatening.",
        },
        {
          id: "s321-opt-b",
          text: "I think the team engagement survey data might help here. If we can show the correlation between management style and engagement scores, it takes the subjectivity out of the feedback.",
          score: 5,
          result: "partial",
          explanation:
            "Data can help, but introducing it when the leader is already defensive shifts the conversation to a more clinical register. The emotional work needs to happen first.",
        },
        {
          id: "s321-opt-c",
          text: "I think the team needs to accept that senior leaders have to be hands-on. That is just the reality of working at this level.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the team's feedback and validating the micromanagement undermines David's carefully constructed conversation. It also signals that the leader does not need to change.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the follow-up note for the senior leader. Frame feedback as observations and reflection questions. End with genuine belief in their leadership potential. Supportive style - a note they can sit with.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "A Note Following Our Conversation\n\nThank you for inviting me into that conversation. It takes real confidence to ask for honest feedback, and I want you to know I do not take that trust lightly.\n\nHere are some observations for you to sit with - not instructions, just reflections.\n\nYour commitment to quality is one of your clearest strengths. The team sees it and respects it. The question worth exploring is: are there moments where demonstrating trust might achieve the same quality outcomes while also building your team's confidence?\n\nYou are thorough because you care. The team sometimes experiences that thoroughness as a lack of confidence in their ability. The intent and the impact are not aligned - and that gap is completely closeable.\n\nA question for reflection: if you stepped back from one area of oversight this month, which area would you choose? And what would it feel like to watch your team rise to it?\n\nI want to end where I started. You are a good leader. The fact that you asked for this conversation proves that. The step from good to great is often not about doing more - it is about trusting more. I believe you are ready for that step.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This note is a masterclass in supportive written feedback. It is honest without being harsh, reflective without being prescriptive, and ends with genuine belief. The leader could re-read this many times.",
          observation:
            "The reflection question is perfect - it invites self-discovery rather than imposing a solution. Supportive communicators know that people change more willingly when they arrive at the insight themselves.",
          coachingTip:
            "Supportive follow-up notes work when they feel like a letter from a trusted friend, not a report from a consultant. Your note passes that test.",
          styleContext:
            "Supportive communicators write feedback notes that the recipient can return to when they are ready. The note waits patiently for the reader to catch up with it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good tone, but check whether the reflection questions are open enough. If they feel like leading questions that push toward a predetermined answer, soften them.",
          observation:
            "If your note tells the leader what to do differently rather than inviting them to explore, it has crossed from supportive to directive.",
          coachingTip:
            "Replace instructions with questions. 'You should delegate more' becomes 'what would it feel like to let your team own this decision?'",
          styleContext:
            "Supportive feedback notes are at their best when the reader feels they are having a private conversation with a wise, caring colleague.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note either repeats the feedback too directly, feels prescriptive, or lacks the warmth and genuine belief that David specifically requested.",
          observation:
            "If your note reads like meeting minutes rather than a reflective letter, it has lost the supportive intent.",
          coachingTip:
            "Rewrite as if you are writing to a friend you deeply respect. The feedback should feel like it comes from care, not obligation.",
          styleContext:
            "Supportive communicators believe that the best feedback notes are the ones the reader chooses to keep. If your note would be filed and forgotten, add more heart.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (322-324) - sales
  // ============================================

  // Scenario 322 - Rachel Finch, sales, foundation
  {
    id: "scenario-322",
    title: "The Product Comparison Presentation",
    context:
      "Rachel is presenting your company's product to a potential client who is comparing three vendors. She has prepared a detailed feature-by-feature comparison with scoring criteria weighted to the client's stated priorities.",
    chooseContext:
      "The client has asked Rachel to explain why your product is more expensive than the cheapest alternative. Rachel is walking through the total cost of ownership calculation rather than simply defending the price.",
    rewriteContext:
      "Rachel has asked you to draft a follow-up document that presents the product comparison in a format the client's procurement team can use for their internal evaluation.",
    characterId: "rachel-finch",
    dialogue:
      "I have mapped each vendor's features against the twelve requirements you shared in your brief. Rather than telling you why we are the best choice, I want to show you the comparison and let the data speak. I have weighted each criterion according to the priority rankings your team gave us. Here is how the three options score.",
    chooseDialogue:
      "The sticker price is lower for Vendor B, that is true. But the total cost of ownership over three years tells a different story. When you factor in implementation time, integration costs, and the support hours their clients report needing, the gap closes. In some scenarios, they are actually more expensive. Let me show you the model.",
    rewriteDialogue:
      "Write the comparison document for their procurement team. Twelve criteria, three vendors, weighted scores. Include a methodology section explaining how the weights were derived from their brief. Add a total cost of ownership section with assumptions clearly stated. No sales language - this should read like an analyst prepared it, not a salesperson.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel is presenting a weighted feature comparison using the client's own priority criteria, and defending the price through a total cost of ownership model rather than persuasion. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel lets the data make the argument. She has built a structured comparison using the client's own criteria and presents a total cost model rather than a sales pitch. This is analytical selling.",
          observation:
            "Notice how Rachel says 'let the data speak.' Analytical communicators trust that a well-structured comparison is more persuasive than any sales technique.",
          coachingTip:
            "When a salesperson builds their pitch around the client's evaluation criteria and presents data rather than claims, they are selling analytically.",
          styleContext:
            "Analytical communicators in sales believe that the best sales tool is a spreadsheet, not a story. If the numbers are right, the sale follows.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is confident about the product, which can look direct. But her confidence comes from the analysis, not from assertion. She does not say 'we are the best' - she shows the comparison.",
          observation:
            "A direct salesperson would state the conclusion and challenge the client to disagree. Rachel presents the evidence and lets the client draw their own conclusion.",
          coachingTip:
            "If a salesperson's confidence comes from their data rather than their conviction, that is analytical. Rachel trusts her spreadsheet, not her charisma.",
          styleContext:
            "Analytical communicators sell by building a case so thorough that the conclusion becomes obvious. They never ask the client to trust them - they ask the client to trust the data.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not built the pitch around relationships, shared values, or emotional engagement with the product. Her approach is entirely evidence-based.",
          observation:
            "There is no storytelling, no testimonial narrative, and no emotional appeal. Rachel's pitch is a structured data presentation.",
          coachingTip:
            "Ask yourself: is this salesperson appealing to feelings or to logic? Rachel is entirely in the logic camp.",
          styleContext:
            "Analytical communicators in sales roles are often the most trusted by procurement teams because they present evidence rather than enthusiasm.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client asks why your product costs more than the cheapest vendor. Rachel is presenting a total cost of ownership model. How do you support her?",
      options: [
        {
          id: "s322-opt-a",
          text: "Rachel's model is worth examining closely. The implementation and support costs are often where the real expense sits. If we run your specific scenario through the model with your actual team size and integration requirements, the picture becomes clearer.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Rachel's analytical approach by offering to personalise the model to the client's specific situation, making the data even more relevant and credible.",
        },
        {
          id: "s322-opt-b",
          text: "I think what matters most is the relationship and the service you will receive over the lifetime of the contract. We invest heavily in client success and that is worth more than a lower price point.",
          score: 5,
          result: "partial",
          explanation:
            "Relationship value is real, but Rachel has deliberately avoided emotional selling. Shifting to a relationship argument undermines her data-driven approach.",
        },
        {
          id: "s322-opt-c",
          text: "You get what you pay for. The cheaper option might save money upfront, but you will spend more in the long run on workarounds and support. Trust me on that.",
          score: 0,
          result: "weak",
          explanation:
            "This is an assertion without evidence, which is exactly what Rachel is trying to avoid. 'Trust me' is the opposite of 'let me show you the data.'",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the product comparison document for the client's procurement team. Twelve weighted criteria, three vendors, total cost of ownership, and a methodology section. Analytical style - no sales language.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Vendor Comparison - Evaluation Report\n\nMethodology:\nTwelve evaluation criteria were identified from the client's requirements brief (dated 2 March 2026). Each criterion was assigned a weight based on the priority ranking provided by the client's project team. Scores are on a 1-5 scale, where 5 represents full capability alignment.\n\nWeighted Comparison Summary:\n\nCriterion (Weight) | Vendor A | Vendor B | Vendor C\nCore functionality (15%) | 5 | 4 | 3\nIntegration capability (12%) | 4 | 3 | 4\nScalability (10%) | 5 | 3 | 4\nSecurity compliance (10%) | 5 | 5 | 4\nUser experience (8%) | 4 | 4 | 3\nReporting and analytics (8%) | 5 | 3 | 4\nMobile access (7%) | 4 | 4 | 3\nAPI availability (7%) | 5 | 3 | 5\nVendor support SLA (7%) | 5 | 3 | 4\nImplementation timeline (6%) | 4 | 5 | 3\nTraining provision (5%) | 4 | 3 | 3\nCustomisation depth (5%) | 4 | 2 | 4\n\nWeighted Total: Vendor A: 4.52 | Vendor B: 3.54 | Vendor C: 3.67\n\nTotal Cost of Ownership (3 years):\nAssumptions: 50 users, standard integration, vendor-provided training.\nVendor A: 186,000 (licence 120k, implementation 36k, support 30k)\nVendor B: 198,000 (licence 95k, implementation 58k, support 45k)\nVendor C: 192,000 (licence 110k, implementation 42k, support 40k)\n\nNote: Vendor B's lower licence cost is offset by higher implementation and support costs based on published client data and vendor-disclosed average implementation timelines.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This document is what procurement teams dream of. Structured, transparent, auditable. Every score has a methodology behind it and the total cost model is clearly assumption-stated.",
          observation:
            "You included the methodology and stated the assumptions. Analytical procurement evaluators will trust this because they can verify it independently.",
          coachingTip:
            "Analytical sales documents work when the procurement team can run the numbers themselves and reach the same conclusion. Your document enables that.",
          styleContext:
            "Analytical communicators in sales know that the most persuasive document is the one that looks like it was written by the client's own analyst.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the methodology is transparent enough. If the weighting or scoring feels subjective, the procurement team will challenge it.",
          observation:
            "If any score is not clearly linked to a verifiable capability, it weakens the credibility of the entire comparison.",
          coachingTip:
            "For each score, be prepared to show the evidence. If a vendor scores 3 on support SLA, note the specific SLA terms that justify that rating.",
          styleContext:
            "Analytical procurement evaluators look for the weakest link in a comparison. Make sure every number can withstand scrutiny.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document either lacks structure, uses subjective language, or fails to include the methodology and assumptions that procurement teams require.",
          observation:
            "If your comparison says 'Vendor A is the best choice' without showing the workings, it is a sales pitch, not an evaluation. Rachel wanted the opposite.",
          coachingTip:
            "Remove all opinions and replace them with data. 'Best in class' becomes 'scored 5 on security compliance based on ISO 27001 certification.'",
          styleContext:
            "Analytical communicators never ask procurement teams to take their word for it. They show the evidence and let the evaluation speak for itself.",
        },
      },
    },
  },

  // Scenario 323 - Owen Grant, sales, intermediate
  {
    id: "scenario-323",
    title: "The Renewal Risk Assessment",
    context:
      "Owen has been asked to assess whether a key client is at risk of not renewing their contract. He has analysed usage data, support ticket trends, and engagement scores to build a risk profile, and is presenting his findings to the account team.",
    chooseContext:
      "Owen has identified three risk indicators and the account manager is pushing back, saying the client relationship is strong and the data does not capture the personal rapport they have built.",
    rewriteContext:
      "Owen has asked you to draft a client health report that presents the risk indicators alongside mitigation actions, formatted so the account team can use it as a working document.",
    characterId: "owen-grant",
    dialogue:
      "I have looked at three data points: platform usage has dropped 18% over two quarters, support tickets have increased 40% with an average resolution time of 4.2 days, and their NPS score went from 42 to 28. Individually, each one might not be alarming. Together, they tell a story of a client who is disengaging. I think we have a renewal risk.",
    chooseDialogue:
      "I do not doubt the relationship is strong. But strong relationships do not override poor product experience indefinitely. The usage drop and the support ticket increase are leading indicators. If we wait for the client to tell us they are leaving, we have already lost the conversation. I would rather act on the data now than react to a cancellation later.",
    rewriteDialogue:
      "The health report should present the three risk indicators with trend data, a risk rating for each, and a recommended mitigation action. Include a section for the account manager to add qualitative context - I want to integrate their relationship insights with the quantitative data, not ignore them. The final section should be a renewal probability score with the methodology shown.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has analysed usage data, support tickets, and NPS trends to build a client risk profile, and is arguing that data should drive the renewal strategy rather than relationship assumptions. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen has built his case on three quantitative indicators, identified a pattern across them, and is arguing for data-driven action. This is analytical communication applied to account management.",
          observation:
            "Notice how Owen says 'together, they tell a story.' Analytical communicators look for patterns across data points, not just individual metrics.",
          coachingTip:
            "When someone presents multiple data points, identifies a trend, and argues for pre-emptive action based on leading indicators, they are communicating analytically.",
          styleContext:
            "Analytical communicators in sales see renewal risk as a measurable phenomenon. They trust patterns in data more than assurances from relationships.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive about the risk, which can look direct. But his assertiveness is built on analysis, not authority. He is not saying 'I think they will leave' - he is saying 'the data suggests they are disengaging.'",
          observation:
            "A direct account manager would call the client and ask them directly. Owen builds a risk model and presents it to the team first.",
          coachingTip:
            "If someone's urgency comes from trend analysis rather than instinct, that is analytical. Owen acts because the data compels action, not because his gut tells him to.",
          styleContext:
            "Analytical communicators in account management see data as an early warning system. They act on leading indicators, not lagging ones.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not led with the emotional impact of losing the client, the team's feelings about the relationship, or the personal connection with the contact. The case is entirely quantitative.",
          observation:
            "There is no anecdote about the client, no mention of the account manager's rapport, and no emotional framing. Owen sees this as a data problem.",
          coachingTip:
            "Ask yourself: is this person leading with relationships or with metrics? Owen leads with metrics. The relationship is a variable in his model, not the foundation of his argument.",
          styleContext:
            "Analytical communicators value relationship data when it can be measured. Qualitative rapport is useful but insufficient as a basis for renewal predictions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The account manager argues that the client relationship is strong despite the data. Owen believes data should drive the strategy. How do you respond?",
      options: [
        {
          id: "s323-opt-a",
          text: "Both perspectives have value. What if we combine them? Owen's data identifies where the risk sits, and the account manager's relationship insights can help us understand why. Together, that gives us a fuller picture and a more targeted mitigation plan.",
          score: 10,
          result: "strong",
          explanation:
            "This integrates both views without dismissing either. It respects Owen's data-driven approach while validating the account manager's qualitative insights.",
        },
        {
          id: "s323-opt-b",
          text: "I trust the account manager on this. If the relationship is solid, the data might just reflect a seasonal dip or a temporary issue. Let us wait another quarter before escalating.",
          score: 5,
          result: "partial",
          explanation:
            "Trusting relationship insights is valid, but dismissing Owen's trend data and waiting another quarter risks losing time if the risk is real. Owen specifically warned against waiting.",
        },
        {
          id: "s323-opt-c",
          text: "Data can only tell you so much. At the end of the day, if the client likes us, they will renew. The numbers do not capture the full picture.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing data in favour of gut feeling is the opposite of Owen's analytical approach. His entire argument is that waiting for feelings to confirm what data already shows is too late.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the client health report with risk indicators, trend data, risk ratings, mitigation actions, and a renewal probability score. Include space for qualitative context. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Client Health Report - Meridian Solutions\nReport date: 14 March 2026 | Contract renewal: 1 September 2026\n\nRisk Indicator 1: Platform Usage\nMetric: Monthly active sessions\nTrend: Declined from 1,840 (Q3 2025) to 1,510 (Q1 2026) - an 18% reduction over two quarters.\nRisk rating: Amber\nMitigation: Schedule a product adoption review with the client's operations team. Identify unused features and provide targeted training.\n\nRisk Indicator 2: Support Volume and Resolution\nMetric: Support tickets per month and average resolution time\nTrend: Tickets increased from 15/month to 21/month (40% rise). Average resolution time: 4.2 days (SLA target: 2 days).\nRisk rating: Red\nMitigation: Escalate resolution SLA breach internally. Assign a dedicated support contact for this account.\n\nRisk Indicator 3: Client Satisfaction\nMetric: Net Promoter Score\nTrend: Declined from 42 to 28 over two survey cycles.\nRisk rating: Amber\nMitigation: Conduct a detailed satisfaction interview with the client's key stakeholders to identify specific drivers of the decline.\n\nQualitative Context (Account Manager input):\n[Space for the account manager to add relationship insights, recent conversations, and any qualitative factors not captured in the data.]\n\nRenewal Probability Score: 62% (Medium Risk)\nMethodology: Weighted composite of usage trend (30%), support performance (30%), NPS trajectory (20%), and contract tenure (20%). Score below 70% triggers a proactive retention plan.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This report is precisely what an analytical account team needs. Each indicator has a metric, a trend, a rating, and an action. The renewal probability methodology is transparent and auditable.",
          observation:
            "Including space for the account manager's qualitative input shows that Owen values relationship data - he just wants it structured alongside the quantitative data.",
          coachingTip:
            "Analytical health reports work when they can be updated quarterly and tracked over time. Your format enables that longitudinal view.",
          styleContext:
            "Analytical communicators design reports that function as living documents. Each update tells the next chapter of the story the data is revealing.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the mitigation actions are specific enough. If any action says 'improve support' without stating how, it is too vague.",
          observation:
            "If your risk ratings are not linked to defined thresholds, the rating system is subjective. Owen would want clear criteria for what constitutes amber versus red.",
          coachingTip:
            "Define the thresholds: 'Amber = 10-20% decline in any metric over two quarters. Red = greater than 20% decline or SLA breach.'",
          styleContext:
            "Analytical communicators want risk ratings that anyone could assign independently given the same data. If two people could disagree on the rating, the criteria need to be tighter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your report lacks the structured format, specific metrics, or transparent methodology that Owen requires for an analytical health report.",
          observation:
            "If your report describes the client risk in general terms without specific numbers, trends, or a scoring methodology, it does not meet the analytical standard.",
          coachingTip:
            "For each risk indicator, state the metric, the current number, the comparison number, and the percentage change. That is the minimum data an analytical report needs.",
          styleContext:
            "Analytical communicators see unquantified risk assessments as opinions, not analysis. Add the numbers and the report gains credibility.",
        },
      },
    },
  },

  // Scenario 324 - Fiona Banks, sales, advanced
  {
    id: "scenario-324",
    title: "The Competitive Displacement Strategy",
    context:
      "Fiona has been tasked with developing a strategy to win a client away from a competitor. She has spent two weeks analysing the competitor's product, pricing, client case studies, and known weaknesses. She is presenting her strategy to the sales leadership team.",
    chooseContext:
      "The sales director wants to lead with a relationship-building approach. Fiona argues that the competitor's product has specific, documentable weaknesses that should be the foundation of the pitch.",
    rewriteContext:
      "Fiona has asked you to draft the competitive displacement pitch deck outline, structured around the competitor's weaknesses mapped against the client's stated requirements.",
    characterId: "fiona-banks",
    dialogue:
      "I have reverse-engineered the competitor's product from their public documentation, client case studies, and three reference conversations. They have a strong position on onboarding speed, but their analytics module is significantly weaker than ours, their API coverage is 60% of ours, and their uptime last year was 99.2% against our 99.8%. Those gaps are exploitable, but only if we present them with evidence, not opinion.",
    chooseDialogue:
      "Relationship building has its place, but this client is not going to switch providers because they like us more. They will switch because we prove we are better where it matters to them. Their brief highlights analytics and integration as their top two priorities. Our competitor is weakest in both. That is not a coincidence - it is a strategy.",
    rewriteDialogue:
      "Build the pitch deck around their requirements, not our capabilities. For each of their top five priorities, show how we compare to the incumbent on specific, verifiable metrics. No claims we cannot back with data. Include a risk section that acknowledges where the competitor is stronger - onboarding speed - and show how we mitigate that. Credibility comes from honesty about weaknesses as much as proof of strengths.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has reverse-engineered a competitor's product through public data and reference conversations, identified exploitable weaknesses mapped to the client's priorities, and insists on evidence-based rather than relationship-based selling. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona has built a competitive strategy through systematic research, mapped weaknesses to client priorities, and insists on verifiable evidence. This is analytical selling at an advanced level.",
          observation:
            "Notice how Fiona includes acknowledging competitor strengths as part of the strategy. Analytical communicators build credibility through balanced analysis, not one-sided advocacy.",
          coachingTip:
            "When a salesperson builds their pitch by reverse-engineering a competitor and mapping gaps to client requirements with evidence, they are selling at an advanced analytical level.",
          styleContext:
            "Analytical communicators in competitive sales believe that the most credible pitch is the one that acknowledges the competitor's strengths. Honesty about weaknesses builds trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive about the strategy, which can look direct. But her assertiveness is earned through two weeks of research, not assumed through confidence. She has built a case, not declared a position.",
          observation:
            "A direct salesperson would say 'we are better and here is why.' Fiona says 'the data shows we are stronger in the areas that matter most to this client.'",
          coachingTip:
            "If someone's sales confidence comes from research depth rather than personal conviction, that is analytical.",
          styleContext:
            "Analytical communicators invest heavily in preparation because they believe a well-researched pitch is harder to dismiss than a well-delivered one.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not proposed building a personal relationship with the client, sharing success stories emotionally, or using testimonials as persuasion. Her approach is entirely evidence-based.",
          observation:
            "There is no mention of dinners, golf, or rapport-building. Fiona believes the pitch wins on evidence, not on chemistry.",
          coachingTip:
            "Ask yourself: is this salesperson's strategy built on relationships or on research? Fiona's strategy is a research project with a sales outcome.",
          styleContext:
            "Analytical communicators in competitive sales roles see the pitch as a proof exercise. The best proof is specific, verifiable, and mapped to what the client cares about most.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The sales director wants a relationship-first approach. Fiona argues for evidence-based competitive positioning. How do you weigh in?",
      options: [
        {
          id: "s324-opt-a",
          text: "Fiona's research gives us an edge that relationship building alone cannot deliver. The client's brief tells us what they care about, and the competitor is weak in exactly those areas. I think we lead with the evidence and let the relationship develop through credibility.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Fiona's evidence-based strategy while positioning relationship-building as something that follows from demonstrating competence, not something that replaces it.",
        },
        {
          id: "s324-opt-b",
          text: "Could we do both? Lead with Fiona's competitive analysis in the formal pitch, and have the account team build the relationship through informal touchpoints before and after.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable blend, but Fiona is specifically arguing that the pitch itself should be evidence-based. Splitting focus risks diluting the analytical rigour of the presentation.",
        },
        {
          id: "s324-opt-c",
          text: "At the end of the day, people buy from people they trust. If we build a strong relationship first, the product differences become secondary.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Fiona's analysis. She has identified specific, verifiable gaps where the competitor is weaker. Dismissing that research in favour of relationship building wastes the preparation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Draft the competitive displacement pitch deck outline. Structure it around the client's top five requirements, comparing your product to the incumbent with verifiable metrics. Include a risk section acknowledging competitor strengths. Analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Competitive Displacement Pitch - Deck Outline\n\nSlide 1: Client Requirements Alignment\nObjective: Show that our pitch is built around their brief, not our marketing.\nContent: Map of their five stated priorities (analytics, integration, uptime, scalability, cost) with our approach to each.\n\nSlide 2: Priority 1 - Analytics Capability\nClient requirement: Real-time dashboard with custom reporting.\nIncumbent: Basic reporting with 24-hour data lag. No custom report builder.\nOur position: Real-time analytics with drag-and-drop report builder. 47 pre-built templates. Custom API for data export.\nEvidence: Product demo recording, third-party review (G2, score 4.6 vs incumbent 3.8).\n\nSlide 3: Priority 2 - Integration\nClient requirement: Native integration with Salesforce, SAP, and Workday.\nIncumbent: Salesforce integration only. SAP and Workday require middleware.\nOur position: Native connectors for all three platforms. Average integration time: 12 days.\nEvidence: Integration documentation, two client references with confirmed timelines.\n\nSlide 4: Priority 3 - Platform Uptime\nClient requirement: 99.5% minimum uptime SLA.\nIncumbent: Published SLA 99.5%, actual uptime 99.2% (source: StatusPage public data).\nOur position: SLA 99.9%, actual uptime 99.8% over the past 12 months.\nEvidence: StatusPage public data, independent audit report.\n\nSlide 5: Priority 4 - Scalability\nClient requirement: Support for 500+ concurrent users.\nIncumbent: Published limit 300 concurrent users. Performance degradation reported above 200 (source: G2 reviews).\nOur position: Tested to 1,000 concurrent users with no performance impact.\nEvidence: Load test report, two enterprise client references.\n\nSlide 6: Priority 5 - Total Cost\nThree-year TCO comparison with assumptions stated and model available for client review.\n\nSlide 7: Risk and Honest Assessment\nIncumbent strength: Onboarding speed. Average time to go-live is 3 weeks vs our 5 weeks.\nOur mitigation: Dedicated onboarding team assigned from contract signature. Accelerated programme available (4 weeks) with additional resource allocation.\nWhy this matters: We trade 2 weeks of onboarding for significantly stronger analytics, integration, and uptime. The client recovers that time within the first quarter through efficiency gains.\n\nSlide 8: Recommendation and Next Steps\nSummary of comparative advantage across five priorities. Proposed timeline for proof of concept.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "This is an analytical pitch deck that would make Fiona proud. Every slide is structured around a client requirement, every claim is backed by evidence, and the risk section adds credibility by being honest.",
          observation:
            "The risk section is strategically brilliant. By acknowledging the competitor's onboarding advantage and showing a mitigation, you turn a weakness into a demonstration of self-awareness.",
          coachingTip:
            "Analytical pitch decks win when the client's procurement team can audit every claim. Your deck passes that test because every comparison cites a verifiable source.",
          styleContext:
            "Analytical communicators believe that the most persuasive pitch is the most honest one. Acknowledging weaknesses builds more trust than hiding them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every comparison cites a source. If any claim says 'we are better' without evidence, it reads as opinion, not analysis.",
          observation:
            "If your risk section is missing or only includes token weaknesses, it undermines the credibility of the rest of the deck.",
          coachingTip:
            "For each comparison, name the evidence source. 'G2 review data', 'published SLA', 'client reference' - these citations make the difference between a pitch and a proof.",
          styleContext:
            "Analytical communicators in competitive sales know that unsourced claims are the fastest way to lose credibility with a procurement team.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your pitch outline is either unstructured, lacks verifiable evidence, or fails to map claims to the client's specific requirements.",
          observation:
            "If your deck leads with your product's features rather than the client's requirements, it is a product pitch, not a competitive displacement strategy.",
          coachingTip:
            "Restructure every slide around a client requirement, not a product feature. The client does not care what you can do - they care what you can do for them.",
          styleContext:
            "Analytical communicators build pitches that feel like the client's own evaluation process. If the deck could serve as an internal assessment tool for the client, it is working.",
        },
      },
    },
  },
];
