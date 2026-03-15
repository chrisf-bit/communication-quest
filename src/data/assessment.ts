import { CommunicationStyle } from "@/types";

/**
 * Assessment question types:
 * - "phrase-match": Given a phrase/sentence fragment, identify which style typically uses it
 * - "pattern-pick": Given 4 phrases, pick the one that belongs to a specific style
 * - "odd-one-out": Given 4 phrases from the same style, pick the one that doesn't belong
 */
export type AssessmentQuestionType = "phrase-match" | "pattern-pick" | "odd-one-out";

export interface AssessmentQuestion {
  id: string;
  type: AssessmentQuestionType;
  prompt: string;
  /** For phrase-match: the phrase to classify */
  phrase?: string;
  /** For pattern-pick: the target style to find */
  targetStyle?: CommunicationStyle;
  /** The 4 options */
  options: {
    id: string;
    text: string;
    style: CommunicationStyle;
  }[];
  correctOptionId: string;
  correctStyle: CommunicationStyle;
  adjacentStyle: CommunicationStyle;
  explanation: string;
}

/**
 * 15 assessment questions designed to be genuinely difficult.
 *
 * Target: most untrained users score 0-30% (0-4 correct out of 15).
 *
 * Difficulty techniques used:
 * - Phrases that blend two styles (e.g. task-focused but methodical)
 * - Context that makes the wrong style seem obvious
 * - Odd-one-out where the outlier sounds very similar to the group
 * - Subtle differences between adjacent styles (direct/analytical, expressive/supportive)
 */
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // Q1: Sounds direct but is actually analytical - the "why" is the giveaway
  {
    id: "assess-01",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "I need to understand why the numbers shifted before I can sign off on the revised plan.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "d",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "The phrase sounds decisive ('I need', 'before I can sign off') which tempts people toward Direct. But the core driver is understanding why - needing to comprehend the cause before acting. A Direct communicator would say 'Just give me the revised plan.' Analytical communicators need the reasoning first.",
  },

  // Q2: Sounds supportive but is actually expressive - enthusiasm disguised as warmth
  {
    id: "assess-02",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "I really believe in what you're building here, and I think if we get the whole team rallied around it, this could transform how we work.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "b",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "The personal affirmation ('I really believe in what you're building') sounds Supportive. But the focus is on rallying the team and transforming the business - that is vision and momentum, not care for individuals. Supportive would say 'How are you feeling about the workload this will create?' Expressive communicators inspire through big-picture thinking.",
  },

  // Q3: Very tricky odd-one-out - all sound analytical
  {
    id: "assess-03",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Analytical. Which one is NOT?",
    options: [
      { id: "a", text: "I want to see the data segmented by region before we draw any conclusions.", style: "analytical" },
      { id: "b", text: "We should pressure-test these assumptions against last year's actuals.", style: "analytical" },
      { id: "c", text: "Let's be precise about what we're committing to - I don't want scope creep.", style: "direct" },
      { id: "d", text: "The correlation between those two variables looks weak - can we run a deeper analysis?", style: "analytical" },
    ],
    correctOptionId: "c",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Option C uses precise language ('precise about what we're committing to') which sounds Analytical. But the underlying driver is commitment and scope control - that is about action and boundaries, not understanding. 'I don't want scope creep' is a Direct communicator protecting outcomes. Analytical communicators would want more analysis, not firmer boundaries.",
  },

  // Q4: Pattern pick where the supportive option sounds analytical
  {
    id: "assess-04",
    type: "pattern-pick",
    prompt: "Which of these responses is most likely from a Supportive communicator?",
    targetStyle: "supportive",
    options: [
      { id: "a", text: "I've noticed you've been quieter than usual in meetings lately. Is everything alright, or is there something I can help with?", style: "supportive" },
      { id: "b", text: "Your meeting participation has dropped 40% over the last month. Can we discuss what's behind that?", style: "analytical" },
      { id: "c", text: "I need you more engaged in meetings. What do I need to do to make that happen?", style: "direct" },
      { id: "d", text: "Meetings feel flat without your energy. What would make them more exciting for you?", style: "expressive" },
    ],
    correctOptionId: "a",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "All four options address the same concern but through different lenses. Option B quantifies the problem (Analytical). Option C demands a solution (Direct). Option D focuses on energy and excitement (Expressive). Only Option A leads with personal concern and offers help without pressure. The trap is Option D, which sounds warm but is actually focused on making things more exciting - that is Expressive energy, not Supportive care.",
  },

  // Q5: Phrase that sounds expressive but is direct - action disguised as enthusiasm
  {
    id: "assess-05",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "Right, we've talked enough. Let's pick the boldest option and go for it - we can course-correct later if we need to.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "a",
    correctStyle: "direct",
    adjacentStyle: "expressive",
    explanation:
      "'Boldest option' and the energetic tone tempt people toward Expressive. But the core message is frustration with discussion and a push to act now. 'We've talked enough' and 'course-correct later' signal someone who prioritises speed over perfection. An Expressive communicator would say 'imagine what this could become' - they'd be excited about the vision, not impatient with the process.",
  },

  // Q6: Odd-one-out where the outlier blends with the group
  {
    id: "assess-06",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Supportive. Which one is NOT?",
    options: [
      { id: "a", text: "I want to make sure you feel confident about this before we move forward.", style: "supportive" },
      { id: "b", text: "Let's take a step back and think about how this affects the wider team.", style: "supportive" },
      { id: "c", text: "I know this is a big change, and I want you to know we'll figure it out together.", style: "supportive" },
      { id: "d", text: "Let's take a step back and think about whether the evidence actually supports this direction.", style: "analytical" },
    ],
    correctOptionId: "d",
    correctStyle: "analytical",
    adjacentStyle: "supportive",
    explanation:
      "Options B and D both start with 'Let's take a step back and think about...' which makes them look identical. The difference is what follows: B considers the team (people), D examines the evidence (data). Supportive communicators pause to check on people. Analytical communicators pause to check on facts. The phrasing is nearly identical but the intent is completely different.",
  },

  // Q7: Pattern pick where all options sound plausible for analytical
  {
    id: "assess-07",
    type: "pattern-pick",
    prompt: "Which of these is how an Analytical communicator would respond to a proposal they disagree with?",
    targetStyle: "analytical",
    options: [
      { id: "a", text: "I don't think this will work. Here's what I'd do instead.", style: "direct" },
      { id: "b", text: "I can see some gaps in the methodology. Can you walk me through how you controlled for seasonal variation in the comparison data?", style: "analytical" },
      { id: "c", text: "I appreciate the effort, but I'm worried this could put the team under a lot of pressure. Can we talk about the human side?", style: "supportive" },
      { id: "d", text: "What if we flipped the whole approach? Instead of optimising what we have, we could reimagine it entirely.", style: "expressive" },
    ],
    correctOptionId: "b",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "The trap is Option A - it sounds decisive and clear, which people associate with being 'analytical' about something. But Option A states a position without evidence (Direct). Option B challenges the methodology specifically - asking about controlled variables and data quality. Analytical communicators don't say 'this won't work'; they ask 'can you prove it works?'",
  },

  // Q8: Email that blends direct and analytical
  {
    id: "assess-08",
    type: "phrase-match",
    prompt: "Which communication style would most naturally write this email opening?",
    phrase: "Following up on our discussion. I've attached three options with cost-benefit breakdowns for each. Happy to walk through the detail, but the executive summary is on page one if you need the headline first.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "d",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "This is deliberately misleading. The executive summary and 'headline first' language sounds Direct. But the person prepared three options with cost-benefit breakdowns and offered to walk through the detail - that is thoroughness and structured thinking. A Direct communicator would send one recommendation, not three options with analysis. The Analytical communicator anticipated the reader's style and adapted - but their natural approach (multiple options, detailed breakdowns) reveals their own style.",
  },

  // Q9: Tricky phrase that sounds analytical but is supportive
  {
    id: "assess-09",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "Before we announce the restructure, I think we need to carefully consider how each team will receive this news and what support they'll need during the transition.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "c",
    correctStyle: "supportive",
    adjacentStyle: "analytical",
    explanation:
      "'Carefully consider' sounds Analytical. But what they want to consider is how people will feel and what support they need - that is people-focused, not data-focused. An Analytical communicator would say 'let's map out the operational impact and risk factors.' A Supportive communicator thinks about human impact first, even when they use methodical-sounding language.",
  },

  // Q10: Odd-one-out where the direct phrase sounds expressive
  {
    id: "assess-10",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Expressive. Which one is NOT?",
    options: [
      { id: "a", text: "This is our moment - let's make it count and show everyone what this team can do.", style: "expressive" },
      { id: "b", text: "I want us to own this market within 18 months. No excuses, no delays.", style: "direct" },
      { id: "c", text: "What if we partnered with their design team? Together we could create something neither of us could do alone.", style: "expressive" },
      { id: "d", text: "I've got a feeling this could be the project that puts us on the map.", style: "expressive" },
    ],
    correctOptionId: "b",
    correctStyle: "direct",
    adjacentStyle: "expressive",
    explanation:
      "Option B has ambitious language ('own this market') that sounds Expressive. But 'no excuses, no delays' is a command, not an inspiration. Expressive communicators paint possibilities; Direct communicators set targets and deadlines. The ambition is similar but the delivery is completely different - one inspires, the other demands.",
  },

  // Q11: Pattern pick - subtle distinction between supportive and expressive in conflict
  {
    id: "assess-11",
    type: "pattern-pick",
    prompt: "Two colleagues are in a heated disagreement. Which response is most likely from an Expressive communicator?",
    targetStyle: "expressive",
    options: [
      { id: "a", text: "OK, time out. You're both making valid points. Let's park the emotion and look at what the data tells us.", style: "analytical" },
      { id: "b", text: "I can see this matters to both of you. Let's slow down and make sure everyone feels heard before we go further.", style: "supportive" },
      { id: "c", text: "Hold on - I think you're actually closer to agreement than you realise. What if we combined both ideas and tested something new?", style: "expressive" },
      { id: "d", text: "We're wasting time. You've both made your case. I'll make the call and we'll move on.", style: "direct" },
    ],
    correctOptionId: "c",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "The trap is Option B - it sounds warm and caring, which people confuse with Expressive energy. But B focuses on feelings and slowing down (Supportive). Option C reframes the conflict as an opportunity to create something new - combining ideas and testing. Expressive communicators find creative synthesis where others see opposition. They don't mediate emotions; they redirect energy toward possibilities.",
  },

  // Q12: Phrase that mixes analytical and supportive language
  {
    id: "assess-12",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "I've reviewed the engagement scores and there's a clear pattern - the teams with the lowest scores all had manager changes in the last quarter. We should investigate what's driving that.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "d",
    correctStyle: "analytical",
    adjacentStyle: "supportive",
    explanation:
      "The subject matter (engagement scores, team wellbeing) sounds like a Supportive communicator's concern. But the approach is entirely Analytical: reviewing data, identifying patterns, correlating variables, and proposing investigation. A Supportive communicator would say 'I'm worried about those teams - let's check in with them.' The Analytical communicator cares about the pattern in the data, not the feelings behind it.",
  },

  // Q13: Tricky odd-one-out with direct phrases
  {
    id: "assess-13",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Direct. Which one is NOT?",
    options: [
      { id: "a", text: "Stop overthinking it. Pick one and commit.", style: "direct" },
      { id: "b", text: "I want a decision by end of play. No more discussion.", style: "direct" },
      { id: "c", text: "We need to move fast. Let's get everyone energised and sprint toward the launch.", style: "expressive" },
      { id: "d", text: "The priority is clear. Execute the plan and report back on Friday.", style: "direct" },
    ],
    correctOptionId: "c",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "Option C has urgency ('move fast', 'sprint') which sounds Direct. But 'get everyone energised' shifts the focus from task execution to team energy and momentum. Direct communicators don't care about energy levels - they care about deadlines and deliverables. An Expressive communicator motivates through excitement; a Direct communicator motivates through clarity and accountability.",
  },

  // Q14: Pattern pick - all options involve structure
  {
    id: "assess-14",
    type: "pattern-pick",
    prompt: "A team needs to decide between two strategies. Which response is most likely from a Direct communicator?",
    targetStyle: "direct",
    options: [
      { id: "a", text: "Let's build a scoring matrix and evaluate both options against our key criteria before deciding.", style: "analytical" },
      { id: "b", text: "Both have merit. Why don't we pilot both on a small scale and see which one the team prefers?", style: "supportive" },
      { id: "c", text: "Strategy B has the higher ceiling. Let's go with B. If it doesn't work, we pivot.", style: "direct" },
      { id: "d", text: "What if we merged the best elements of both? We could create a hybrid approach that captures everything.", style: "expressive" },
    ],
    correctOptionId: "c",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "The trap is Option A - building a scoring matrix sounds like a thorough, decisive approach. But it is adding process before action (Analytical). Option C picks a direction, states a rationale in one sentence, and accepts the risk of pivoting. Direct communicators make decisions quickly with incomplete information. They would rather course-correct than over-analyse.",
  },

  // Q15: Very subtle phrase-match - looks direct but is expressive
  {
    id: "assess-15",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "We have a massive opportunity here, but only if we act now. I want us to be the team that made it happen, not the team that played it safe.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "b",
    correctStyle: "expressive",
    adjacentStyle: "direct",
    explanation:
      "'Act now' and the urgency sound Direct. But the core message is about identity and legacy - 'the team that made it happen' versus 'the team that played it safe.' This is storytelling and vision, not task management. A Direct communicator would say 'We need to move on this by Friday. Here's the plan.' Expressive communicators frame decisions as narratives about who the team wants to be.",
  },
];

/**
 * Calculate the style profile from assessment answers.
 * Accepts option ID selections and derives scores from the question data.
 */
export function calculateAssessmentProfile(
  answers: { questionId: string; selectedOptionId: string }[]
): {
  styleScores: Record<CommunicationStyle, number>;
  strongestStyle: CommunicationStyle | null;
  weakestStyle: CommunicationStyle | null;
  correctCount: number;
  totalQuestions: number;
} {
  const scores: Record<CommunicationStyle, number> = {
    direct: 0,
    expressive: 0,
    supportive: 0,
    analytical: 0,
  };

  let correctCount = 0;

  for (const answer of answers) {
    const question = ASSESSMENT_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const selectedOption = question.options.find((o) => o.id === answer.selectedOptionId);
    if (!selectedOption) continue;

    const isCorrect = answer.selectedOptionId === question.correctOptionId;
    const selectedStyle = selectedOption.style;

    if (isCorrect) {
      scores[question.correctStyle] += 100;
      correctCount++;
    } else if (selectedStyle === question.adjacentStyle) {
      // Partial credit - close but not quite
      scores[question.adjacentStyle] += 50;
      scores[question.correctStyle] += 25;
    } else {
      // Wrong - reveals which style they default to
      scores[selectedStyle] += 10;
    }
  }

  // Normalise to 0-100 per style
  // Count how many questions test each style (correct answer's style)
  const maxPerStyle: Record<CommunicationStyle, number> = {
    direct: 0,
    expressive: 0,
    supportive: 0,
    analytical: 0,
  };
  for (const q of ASSESSMENT_QUESTIONS) {
    maxPerStyle[q.correctStyle] += 100;
  }

  const styleScores: Record<CommunicationStyle, number> = {
    direct: maxPerStyle.direct > 0 ? Math.round((scores.direct / maxPerStyle.direct) * 100) : 0,
    expressive: maxPerStyle.expressive > 0 ? Math.round((scores.expressive / maxPerStyle.expressive) * 100) : 0,
    supportive: maxPerStyle.supportive > 0 ? Math.round((scores.supportive / maxPerStyle.supportive) * 100) : 0,
    analytical: maxPerStyle.analytical > 0 ? Math.round((scores.analytical / maxPerStyle.analytical) * 100) : 0,
  };

  // Find strongest and weakest (null if all scores are equal)
  const sorted = (Object.entries(styleScores) as [CommunicationStyle, number][])
    .sort((a, b) => b[1] - a[1]);
  const allEqual = sorted[0][1] === sorted[sorted.length - 1][1];
  const strongestStyle = allEqual ? null : sorted[0][0];
  const weakestStyle = allEqual ? null : sorted[sorted.length - 1][0];

  return { styleScores, strongestStyle, weakestStyle, correctCount, totalQuestions: answers.length };
}
