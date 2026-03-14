import { SentenceDetectionChallenge } from "@/types";

export const SENTENCE_DETECTION_CHALLENGES_EXTRA: SentenceDetectionChallenge[] = [
  // ANALYTICAL (9 challenges: sd-13, sd-14, sd-15, sd-16, sd-17, sd-18, sd-19, sd-20, sd-21)
  {
    id: "sd-13",
    type: "sentence-detection",
    sentence:
      "Before we commit to this vendor, I need to cross-reference their uptime metrics against the SLA benchmarks from the last three quarters.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "The emphasis on cross-referencing metrics and benchmarks over multiple quarters reflects the analytical style's need for thorough, evidence-based evaluation before making decisions.",
  },
  {
    id: "sd-14",
    type: "sentence-detection",
    sentence:
      "I have mapped out a step-by-step migration plan with risk assessments at each stage - can we walk through the methodology together?",
    correctStyle: "analytical",
    adjacentStyle: "supportive",
    explanation:
      "Structuring a plan with defined stages, risk assessments, and a clear methodology is characteristic of the analytical style's systematic approach to complex tasks.",
  },
  {
    id: "sd-15",
    type: "sentence-detection",
    sentence:
      "The variance between our projected and actual figures this quarter is 12.3% - I want to understand the root cause before we adjust the forecast.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Citing precise figures and insisting on root-cause analysis before acting demonstrates the analytical communicator's commitment to accuracy and understanding underlying data.",
  },
  {
    id: "sd-16",
    type: "sentence-detection",
    sentence:
      "Could you send me the raw data behind that dashboard? I would like to validate the assumptions in the model before we present it to leadership.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Requesting raw data and wanting to validate assumptions shows the analytical style's preference for verifying information independently rather than accepting surface-level summaries.",
  },
  {
    id: "sd-17",
    type: "sentence-detection",
    sentence:
      "I have documented the three possible approaches with pros, cons, and estimated timelines for each - shall I circulate the comparison matrix?",
    correctStyle: "analytical",
    adjacentStyle: "supportive",
    explanation:
      "Creating a structured comparison matrix with documented pros and cons reflects the analytical communicator's systematic decision-making process and attention to detail.",
  },
  {
    id: "sd-18",
    type: "sentence-detection",
    sentence:
      "Let me review the audit trail on those transactions first - there may be a pattern we are missing that explains the discrepancy.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Focusing on audit trails, patterns, and discrepancies shows the analytical style's methodical approach to problem-solving and preference for evidence over assumptions.",
  },
  {
    id: "sd-19",
    type: "sentence-detection",
    sentence:
      "The sample size in that customer survey is too small to draw reliable conclusions - we should expand it before making any strategic changes.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Questioning statistical reliability and insisting on sufficient sample sizes before acting is a hallmark of the analytical communicator's evidence-based mindset.",
  },
  {
    id: "sd-20",
    type: "sentence-detection",
    sentence:
      "I have been tracking our sprint velocity over the past six iterations and the trend suggests we are consistently over-committing by roughly 15%.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Tracking performance metrics over time and identifying precise percentage trends demonstrates the analytical style's reliance on data to inform observations.",
  },
  {
    id: "sd-21",
    type: "sentence-detection",
    sentence:
      "Before we scale this pilot, I want to run a controlled comparison against the existing process so we have a proper baseline for measuring improvement.",
    correctStyle: "analytical",
    adjacentStyle: "supportive",
    explanation:
      "Insisting on controlled comparisons and proper baselines reflects the analytical communicator's need for rigorous, structured evaluation before making broader decisions.",
  },

  // DIRECT (8 challenges: sd-22, sd-23, sd-24, sd-25, sd-26, sd-27, sd-28, sd-29)
  {
    id: "sd-22",
    type: "sentence-detection",
    sentence:
      "We are losing market share every week we delay - I need a decision from this room by end of day.",
    correctStyle: "direct",
    adjacentStyle: "expressive",
    explanation:
      "The urgency, focus on market results, and demand for an immediate decision are characteristic of the direct style's action-oriented, no-nonsense approach.",
  },
  {
    id: "sd-23",
    type: "sentence-detection",
    sentence:
      "Skip the background - just tell me whether the project is on track or not, and what you need to fix it.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Cutting through detail to get straight to status and solutions reflects the direct communicator's preference for brevity and bottom-line information.",
  },
  {
    id: "sd-24",
    type: "sentence-detection",
    sentence:
      "Here is the plan: you own the client proposal, Jamie takes procurement, and I will handle the exec sign-off - any questions?",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Assigning clear ownership, stating a plan decisively, and moving quickly to execution shows the direct style's focus on accountability and swift action.",
  },
  {
    id: "sd-25",
    type: "sentence-detection",
    sentence:
      "The last two releases missed their deadlines. That stops now. I want a realistic timeline on my desk by tomorrow morning.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Confronting missed deadlines head-on with a firm demand and short turnaround reflects the direct communicator's results-driven, no-excuses mindset.",
  },
  {
    id: "sd-26",
    type: "sentence-detection",
    sentence:
      "I am not interested in why it went wrong - I want to know what we are doing differently starting Monday.",
    correctStyle: "direct",
    adjacentStyle: "expressive",
    explanation:
      "Dismissing retrospective analysis in favour of immediate corrective action is a classic direct style trait - forward-focused and solution-oriented.",
  },
  {
    id: "sd-27",
    type: "sentence-detection",
    sentence:
      "Bottom line - if this partnership does not deliver a 20% cost reduction within six months, we walk away.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Using 'bottom line' language, setting hard thresholds, and being willing to walk away demonstrates the direct communicator's decisive, outcome-focused approach.",
  },
  {
    id: "sd-28",
    type: "sentence-detection",
    sentence:
      "We have talked about this enough. Let us pick option B and move on - we can course-correct later if needed.",
    correctStyle: "direct",
    adjacentStyle: "expressive",
    explanation:
      "Shutting down prolonged discussion in favour of making a quick decision and iterating reflects the direct style's bias toward action over deliberation.",
  },
  {
    id: "sd-29",
    type: "sentence-detection",
    sentence:
      "I need you to cancel the non-essential meetings this week and focus entirely on closing the Henderson deal.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Issuing a clear, prioritised instruction with no room for ambiguity shows the direct communicator's commanding, results-first approach.",
  },

  // EXPRESSIVE (8 challenges: sd-30, sd-31, sd-32, sd-33, sd-34, sd-35, sd-36, sd-37)
  {
    id: "sd-30",
    type: "sentence-detection",
    sentence:
      "Imagine if we could turn this product launch into a live event that gets people genuinely buzzing - the PR alone would be incredible!",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Using 'imagine', painting a vivid picture, and showing excitement about potential impact are hallmarks of the expressive communicator's visionary, enthusiastic style.",
  },
  {
    id: "sd-31",
    type: "sentence-detection",
    sentence:
      "I know this sounds ambitious, but what if we completely reimagined the onboarding experience? We could be the company everyone talks about.",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "The big-picture thinking, use of 'what if', and aspiration to stand out reflect the expressive style's love of bold ideas and creative possibilities.",
  },
  {
    id: "sd-32",
    type: "sentence-detection",
    sentence:
      "This is exactly the kind of breakthrough moment we have been waiting for - let us ride this momentum and see how far we can take it!",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Celebrating a 'breakthrough moment' and wanting to ride momentum shows the expressive communicator's energetic, opportunity-seizing nature.",
  },
  {
    id: "sd-33",
    type: "sentence-detection",
    sentence:
      "I pitched the concept to a few people in the corridor and they absolutely loved it - I think we are onto something really special here.",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "Informally socialising ideas and feeding off others' enthusiasm reflects the expressive style's people-oriented, spontaneous approach to building momentum.",
  },
  {
    id: "sd-34",
    type: "sentence-detection",
    sentence:
      "Forget the slides for a minute - let me just paint you the picture of what this could look like when it all comes together.",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Setting aside formal materials to tell a compelling story shows the expressive communicator's preference for narrative, vision, and personal connection over structured formats.",
  },
  {
    id: "sd-35",
    type: "sentence-detection",
    sentence:
      "The potential here is massive - if we get the branding right, this could completely change how the market sees us.",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Focusing on potential, market perception, and transformative impact reflects the expressive style's big-picture, opportunity-driven communication.",
  },
  {
    id: "sd-36",
    type: "sentence-detection",
    sentence:
      "I was up half the night sketching ideas for the new campaign - I genuinely think this could be the most creative thing we have ever done.",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "The personal passion, creative energy, and superlative language demonstrate the expressive communicator's enthusiasm and emotional investment in ideas.",
  },
  {
    id: "sd-37",
    type: "sentence-detection",
    sentence:
      "Why play it safe when we have the chance to do something that really stands out? Let us be bold and see what happens.",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Challenging caution in favour of boldness and standing out reflects the expressive style's appetite for risk, creativity, and making a memorable impact.",
  },

  // SUPPORTIVE (8 challenges: sd-38, sd-39, sd-40, sd-41, sd-42, sd-43, sd-44, sd-45)
  {
    id: "sd-38",
    type: "sentence-detection",
    sentence:
      "Before we finalise the restructure, I want to make sure everyone on the team has had a chance to share their concerns.",
    correctStyle: "supportive",
    adjacentStyle: "analytical",
    explanation:
      "Prioritising team input and ensuring everyone feels heard before a major change reflects the supportive style's focus on inclusion and people's wellbeing.",
  },
  {
    id: "sd-39",
    type: "sentence-detection",
    sentence:
      "I noticed you seemed a bit quiet in the meeting earlier - is everything okay? I just want to check in and see how you are doing.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Noticing someone's emotional state and proactively checking in demonstrates the supportive communicator's attentiveness to relationships and individual wellbeing.",
  },
  {
    id: "sd-40",
    type: "sentence-detection",
    sentence:
      "I think we should hold off on announcing the changes until we have had one-to-ones with everyone who will be affected.",
    correctStyle: "supportive",
    adjacentStyle: "analytical",
    explanation:
      "Delaying an announcement to ensure personal conversations happen first shows the supportive style's priority of caring for individuals over speed of execution.",
  },
  {
    id: "sd-41",
    type: "sentence-detection",
    sentence:
      "How is everyone feeling about the new remote working arrangement? I want to make sure it is actually working for the whole team, not just on paper.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Asking about feelings and checking that arrangements genuinely work for everyone reflects the supportive communicator's people-first, consensus-seeking approach.",
  },
  {
    id: "sd-42",
    type: "sentence-detection",
    sentence:
      "I would rather we take a bit more time to get buy-in from all the stakeholders than push something through that leaves people feeling sidelined.",
    correctStyle: "supportive",
    adjacentStyle: "analytical",
    explanation:
      "Prioritising buy-in and worrying about people feeling sidelined over speed of delivery is characteristic of the supportive style's relationship-centred values.",
  },
  {
    id: "sd-43",
    type: "sentence-detection",
    sentence:
      "Great work pulling that presentation together under pressure - I know it was not easy with everything else on your plate right now.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Acknowledging effort, recognising pressure, and showing empathy for someone's workload demonstrates the supportive communicator's caring, people-aware approach.",
  },
  {
    id: "sd-44",
    type: "sentence-detection",
    sentence:
      "Can we find a compromise that works for both departments? I do not want this to turn into a situation where one team feels they have lost out.",
    correctStyle: "supportive",
    adjacentStyle: "analytical",
    explanation:
      "Seeking compromise and being concerned about teams feeling like they have lost reflects the supportive style's focus on harmony, fairness, and maintaining positive relationships.",
  },
  {
    id: "sd-45",
    type: "sentence-detection",
    sentence:
      "I appreciate you being honest about the workload issues - that takes courage, and I want you to know we will figure this out together.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Validating someone's honesty, acknowledging courage, and offering collaborative support are hallmarks of the supportive communicator's empathetic, trust-building style.",
  },
];
