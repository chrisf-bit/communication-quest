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
 * 5 assessment questions testing language pattern recognition.
 * These are harder than scenario-based questions because they test
 * whether users can identify style from isolated language patterns.
 */
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "assess-01",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "I hear what you're saying, and I think we should make sure everyone's comfortable before we move forward.",
    options: [
      { id: "a", text: "Direct", style: "direct" },
      { id: "b", text: "Expressive", style: "expressive" },
      { id: "c", text: "Supportive", style: "supportive" },
      { id: "d", text: "Analytical", style: "analytical" },
    ],
    correctOptionId: "c",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "The phrase prioritises consensus and comfort over speed. 'Make sure everyone's comfortable' is classic Supportive language. An Expressive communicator might say 'let's get everyone excited about this' instead.",
  },
  {
    id: "assess-02",
    type: "pattern-pick",
    prompt: "Which of these responses sounds most like an Analytical communicator?",
    targetStyle: "analytical",
    options: [
      { id: "a", text: "Let's just try it and see what happens - we can always adjust.", style: "expressive" },
      { id: "b", text: "Before we commit, can you walk me through the assumptions behind those figures?", style: "analytical" },
      { id: "c", text: "I trust your judgement on this - what do you think we should do?", style: "supportive" },
      { id: "d", text: "We need to make a call on this today. What's your recommendation?", style: "direct" },
    ],
    correctOptionId: "b",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "Analytical communicators want to understand the reasoning and evidence before decisions. 'Walk me through the assumptions' is a request for methodology, not just outcomes. Option D also sounds decisive but focuses on speed rather than understanding.",
  },
  {
    id: "assess-03",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Direct. Which one is NOT?",
    options: [
      { id: "a", text: "What's the bottom line?", style: "direct" },
      { id: "b", text: "Let's cut to the chase.", style: "direct" },
      { id: "c", text: "I want to make sure we've thought this through properly.", style: "analytical" },
      { id: "d", text: "Just give me the headline, we'll sort the detail later.", style: "direct" },
    ],
    correctOptionId: "c",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation:
      "'Thought this through properly' signals a need for thoroughness and careful analysis - that's Analytical. It can feel decisive, but the priority is rigour, not speed. Direct communicators want the answer now, not more thinking time.",
  },
  {
    id: "assess-04",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "This could be a real game-changer if we get the right people behind it - imagine the impact across the whole business!",
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
      "'Game-changer', 'imagine the impact', and the enthusiasm about scale are hallmarks of Expressive communication. They paint the big picture and generate energy. A Direct communicator might also talk about impact but would focus on specific results, not the vision.",
  },
  {
    id: "assess-05",
    type: "pattern-pick",
    prompt: "Which of these is how a Direct communicator would handle a disagreement?",
    targetStyle: "direct",
    options: [
      { id: "a", text: "Let's look at the data from both sides and see which approach has better evidence.", style: "analytical" },
      { id: "b", text: "I disagree. Here's why, and here's what I think we should do instead.", style: "direct" },
      { id: "c", text: "I can see your point, but what if we found a middle ground that works for everyone?", style: "supportive" },
      { id: "d", text: "I love the energy, but what if we took the best parts of both ideas and combined them?", style: "expressive" },
    ],
    correctOptionId: "b",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "Direct communicators state their position clearly and move to action. 'I disagree. Here's why.' is straightforward and solution-oriented. Option A sounds decisive but prioritises evidence over position. Option C seeks harmony (Supportive), and D seeks creative synthesis (Expressive).",
  },
  {
    id: "assess-06",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Expressive. Which one is NOT?",
    options: [
      { id: "a", text: "What if we completely rethought how this works?", style: "expressive" },
      { id: "b", text: "I love where this is going - let's keep the energy up!", style: "expressive" },
      { id: "c", text: "How is the team feeling about taking on something this ambitious?", style: "supportive" },
      { id: "d", text: "Picture this - we launch with a splash and get everyone talking.", style: "expressive" },
    ],
    correctOptionId: "c",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "'How is the team feeling' centres people's emotions, which is Supportive. It might sound enthusiastic, but the focus is on wellbeing, not vision. Expressive communicators talk about ideas and possibilities, while Supportive communicators check on people first.",
  },
  {
    id: "assess-07",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "I'd like to table this until we've had time to review the full report. There are a few inconsistencies I want to cross-reference before we commit.",
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
      "Wanting to pause for review, cross-reference, and check inconsistencies before committing is classic Analytical. They won't proceed until the evidence is solid. A Direct communicator might also raise concerns but would push for a decision today.",
  },
  {
    id: "assess-08",
    type: "pattern-pick",
    prompt: "Which of these is how a Supportive communicator would open a difficult conversation?",
    targetStyle: "supportive",
    options: [
      { id: "a", text: "We need to address the elephant in the room. Let's be straight about what's not working.", style: "direct" },
      { id: "b", text: "Before we get into the detail, I want to check in - how are you doing with everything that's been going on?", style: "supportive" },
      { id: "c", text: "I've been reflecting on this, and I think there's a creative way we could reframe the situation.", style: "expressive" },
      { id: "d", text: "I've mapped out the key issues and I'd like to walk through them systematically.", style: "analytical" },
    ],
    correctOptionId: "b",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation:
      "Supportive communicators lead with the person, not the problem. 'Check in' and 'how are you doing' show they prioritise the relationship before the task. Option A is Direct (straight to the issue), C is Expressive (reframing creatively), and D is Analytical (structured approach).",
  },
  {
    id: "assess-09",
    type: "phrase-match",
    prompt: "Which communication style would most naturally use this phrase?",
    phrase: "We've been talking about this for weeks. I say we pick a direction, commit to it, and learn as we go.",
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
      "The frustration with prolonged discussion and the push to 'pick a direction and commit' is textbook Direct. They value action and decisiveness over further analysis. An Expressive communicator might also push to move forward but would frame it around excitement and possibility rather than impatience.",
  },
  {
    id: "assess-10",
    type: "odd-one-out",
    prompt: "Three of these phrases are typically Analytical. Which one is NOT?",
    options: [
      { id: "a", text: "Can we revisit the methodology? I want to make sure we're comparing like for like.", style: "analytical" },
      { id: "b", text: "Based on the trend data, I'd suggest we hold off until Q3.", style: "analytical" },
      { id: "c", text: "I need the key takeaways by Friday - keep it to one page.", style: "direct" },
      { id: "d", text: "The variance between projected and actual is 8.3% - what's driving that gap?", style: "analytical" },
    ],
    correctOptionId: "c",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation:
      "'Key takeaways by Friday, one page' is about brevity and deadlines, which is Direct. It might reference information (like an Analytical person would) but the style is action-oriented and concise. Analytical communicators want depth and detail, not summaries.",
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
