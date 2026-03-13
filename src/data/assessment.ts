import { CommunicationStyle } from "@/types";

export interface AssessmentQuestion {
  id: string;
  context: string;
  characterName: string;
  characterRole: string;
  dialogue: string;
  correctStyle: CommunicationStyle;
  adjacentStyle: CommunicationStyle;
  explanation: string;
}

/**
 * 5 assessment questions — one per style + a fifth as tie-breaker.
 * Each is a self-contained mini-scenario with a clear style signal.
 * Order: direct, expressive, supportive, analytical, then a second direct/analytical.
 */
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "assess-01",
    context:
      "You're in a project kick-off meeting. The project sponsor opens the discussion.",
    characterName: "Marcus",
    characterRole: "Project Sponsor",
    dialogue:
      "Right, let's skip the introductions — everyone knows why we're here. I need the launch date confirmed by Friday, no excuses. Send me a one-page plan with the three biggest risks and your mitigation for each. If something's going to slip, I want to know today, not next week.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Marcus is clearly Direct — he's decisive, time-conscious, results-focused, and wants concise, action-oriented communication. He leads with outcomes and deadlines, not process.",
  },
  {
    id: "assess-02",
    context:
      "A colleague messages you after a brainstorming session about a new product feature.",
    characterName: "Priya",
    characterRole: "Product Designer",
    dialogue:
      "That session was brilliant! I love where this is heading — imagine if we combined the gamification idea with the onboarding flow? We could totally reinvent how users experience the first five minutes. Let's get the whole team together tomorrow and explore this further!",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation:
      "Priya is Expressive — she's enthusiastic, idea-driven, forward-looking, and uses energetic, collaborative language. She focuses on vision and momentum rather than detail.",
  },
  {
    id: "assess-03",
    context:
      "A team member comes to you after hearing about upcoming organisational restructuring.",
    characterName: "Sam",
    characterRole: "Customer Success Manager",
    dialogue:
      "I just wanted to check in — how are you feeling about the changes? I know it can be unsettling when things shift. If you need to talk through anything, I'm here. I think the most important thing is that we support each other through this and make sure nobody feels left behind.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Sam is Supportive — they lead with empathy, check in on feelings, offer reassurance, and prioritise relationships and team wellbeing over task outcomes.",
  },
  {
    id: "assess-04",
    context:
      "You receive a message from a colleague reviewing your proposal before it goes to the board.",
    characterName: "Dr. Okafor",
    characterRole: "Head of Strategy",
    dialogue:
      "I've reviewed the proposal. The financial projections on page 7 don't align with the Q3 actuals — specifically, the margin assumption of 34% should be 31.2% based on the latest report. I'd also recommend adding a sensitivity analysis for the two main risk variables. Could you share your methodology for the growth forecast? I want to ensure the board sees a fully evidenced case.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Dr. Okafor is Analytical — they focus on data accuracy, evidence, methodology, and structured reasoning. They want precision and thoroughness before decisions are made.",
  },
  {
    id: "assess-05",
    context:
      "You're on a call with a client who wants to discuss next quarter's deliverables.",
    characterName: "Janelle",
    characterRole: "VP of Operations",
    dialogue:
      "I've looked at the timeline and I have concerns about the dependency between workstream B and the vendor integration. The original estimate assumed a 3-week lead time but the latest vendor SLA shows 4.5 weeks. Can you run the numbers and come back with a revised critical path? I need confidence in the dates before I sign off.",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Janelle is Analytical — she references specific data points, timelines, and dependencies. She wants evidence-based confidence before making decisions, not gut feel.",
  },
];

/**
 * Calculate the style profile from assessment answers.
 * Returns scores per style (0-100) and the strongest/weakest.
 */
export function calculateAssessmentProfile(
  answers: { questionId: string; selectedStyle: CommunicationStyle }[]
): {
  styleScores: Record<CommunicationStyle, number>;
  strongestStyle: CommunicationStyle;
  weakestStyle: CommunicationStyle;
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

    if (answer.selectedStyle === question.correctStyle) {
      scores[question.correctStyle] += 100;
      correctCount++;
    } else if (answer.selectedStyle === question.adjacentStyle) {
      // Partial credit — they're close
      scores[question.adjacentStyle] += 50;
      scores[question.correctStyle] += 25;
    } else {
      // Wrong — but still shows they think in that style
      scores[answer.selectedStyle] += 10;
    }
  }

  // Normalise to 0-100 per style (max possible varies by question distribution)
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

  // Find strongest and weakest
  const sorted = (Object.entries(styleScores) as [CommunicationStyle, number][])
    .sort((a, b) => b[1] - a[1]);
  const strongestStyle = sorted[0][0];
  const weakestStyle = sorted[sorted.length - 1][0];

  return { styleScores, strongestStyle, weakestStyle, correctCount, totalQuestions: answers.length };
}
