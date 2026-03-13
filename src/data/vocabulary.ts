import {
  CommunicationStyle,
  WordSortChallenge,
  SentenceDetectionChallenge,
  LanguageMatchChallenge,
  VocabularyChallenge,
} from "@/types";

// ============================================
// Word Banks by Style
// ============================================

export const WORD_BANKS: Record<CommunicationStyle, string[]> = {
  direct: [
    "decision", "priority", "result", "move", "fix",
    "outcome", "bottom line", "now", "action", "deliver",
    "execute", "deadline", "efficient", "resolve", "lead",
  ],
  expressive: [
    "exciting", "opportunity", "idea", "imagine", "explore",
    "potential", "creative", "possibility", "interesting", "big picture",
    "vision", "brainstorm", "innovative", "energy", "inspire",
  ],
  supportive: [
    "together", "support", "help", "comfortable", "team",
    "appreciate", "understand", "collaborate", "everyone", "relationship",
    "trust", "care", "considerate", "harmony", "wellbeing",
  ],
  analytical: [
    "data", "evidence", "numbers", "details", "analysis",
    "accurate", "process", "clarify", "specific", "structure",
    "methodology", "logical", "benchmark", "metrics", "systematic",
  ],
};

// ============================================
// Coaching Feedback by Style
// ============================================

export const STYLE_LANGUAGE_TIPS: Record<CommunicationStyle, string> = {
  direct: "Direct communicators use action-oriented, results-focused language. They favour short, decisive words that move things forward.",
  expressive: "Expressive communicators use energetic, possibility-focused language. They favour words that inspire, excite, and paint a bigger picture.",
  supportive: "Supportive communicators use relationship-focused, inclusive language. They favour words that build trust, show care, and bring people together.",
  analytical: "Analytical communicators use precise, evidence-based language. They favour words that emphasise accuracy, structure, and data-driven thinking.",
};

// ============================================
// Word Sort Challenges (10)
// ============================================

const WORD_SORT_CHALLENGES: WordSortChallenge[] = [
  {
    id: "ws-01",
    type: "word-sort",
    words: [
      { word: "evidence", style: "analytical" },
      { word: "exciting", style: "expressive" },
      { word: "together", style: "supportive" },
      { word: "decision", style: "direct" },
    ],
  },
  {
    id: "ws-02",
    type: "word-sort",
    words: [
      { word: "deadline", style: "direct" },
      { word: "brainstorm", style: "expressive" },
      { word: "metrics", style: "analytical" },
      { word: "appreciate", style: "supportive" },
    ],
  },
  {
    id: "ws-03",
    type: "word-sort",
    words: [
      { word: "outcome", style: "direct" },
      { word: "collaborate", style: "supportive" },
      { word: "vision", style: "expressive" },
      { word: "process", style: "analytical" },
    ],
  },
  {
    id: "ws-04",
    type: "word-sort",
    words: [
      { word: "execute", style: "direct" },
      { word: "harmony", style: "supportive" },
      { word: "innovative", style: "expressive" },
      { word: "benchmark", style: "analytical" },
    ],
  },
  {
    id: "ws-05",
    type: "word-sort",
    words: [
      { word: "resolve", style: "direct" },
      { word: "imagine", style: "expressive" },
      { word: "trust", style: "supportive" },
      { word: "systematic", style: "analytical" },
    ],
  },
  {
    id: "ws-06",
    type: "word-sort",
    words: [
      { word: "deliver", style: "direct" },
      { word: "potential", style: "expressive" },
      { word: "wellbeing", style: "supportive" },
      { word: "clarify", style: "analytical" },
    ],
  },
  {
    id: "ws-07",
    type: "word-sort",
    words: [
      { word: "action", style: "direct" },
      { word: "inspire", style: "expressive" },
      { word: "care", style: "supportive" },
      { word: "logical", style: "analytical" },
    ],
  },
  {
    id: "ws-08",
    type: "word-sort",
    words: [
      { word: "efficient", style: "direct" },
      { word: "creative", style: "expressive" },
      { word: "understand", style: "supportive" },
      { word: "specific", style: "analytical" },
    ],
  },
  {
    id: "ws-09",
    type: "word-sort",
    words: [
      { word: "priority", style: "direct" },
      { word: "energy", style: "expressive" },
      { word: "considerate", style: "supportive" },
      { word: "methodology", style: "analytical" },
    ],
  },
  {
    id: "ws-10",
    type: "word-sort",
    words: [
      { word: "fix", style: "direct" },
      { word: "opportunity", style: "expressive" },
      { word: "relationship", style: "supportive" },
      { word: "analysis", style: "analytical" },
    ],
  },
];

// ============================================
// Sentence Detection Challenges (12)
// ============================================

const SENTENCE_DETECTION_CHALLENGES: SentenceDetectionChallenge[] = [
  {
    id: "sd-01",
    type: "sentence-detection",
    sentence: "Can we review the numbers before deciding?",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation: "The focus on reviewing numbers and data before making a decision is characteristic of analytical communication.",
  },
  {
    id: "sd-02",
    type: "sentence-detection",
    sentence: "Let's just make a call and move on.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation: "The urgency to make a decision and move forward quickly is typical of direct communicators.",
  },
  {
    id: "sd-03",
    type: "sentence-detection",
    sentence: "I think this could be a really exciting opportunity for the whole team!",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation: "The enthusiasm, use of 'exciting', and focus on possibility signals expressive communication.",
  },
  {
    id: "sd-04",
    type: "sentence-detection",
    sentence: "How is everyone feeling about the changes so far?",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation: "Checking in on how people feel and showing concern for the team's comfort is classic supportive language.",
  },
  {
    id: "sd-05",
    type: "sentence-detection",
    sentence: "What does the data tell us about last quarter's performance?",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation: "Requesting specific data and referencing measurable performance is analytical communication.",
  },
  {
    id: "sd-06",
    type: "sentence-detection",
    sentence: "We need to hit this target by Friday. No excuses.",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation: "Setting a firm deadline with a results-focused, no-nonsense tone is distinctly direct.",
  },
  {
    id: "sd-07",
    type: "sentence-detection",
    sentence: "Imagine if we could completely reimagine how we approach onboarding.",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation: "Using 'imagine' and proposing a creative reimagining shows expressive, visionary language.",
  },
  {
    id: "sd-08",
    type: "sentence-detection",
    sentence: "I want to make sure nobody feels left out of this decision.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation: "Prioritising inclusion and ensuring everyone is considered reflects supportive communication.",
  },
  {
    id: "sd-09",
    type: "sentence-detection",
    sentence: "Can you walk me through the methodology step by step?",
    correctStyle: "analytical",
    adjacentStyle: "direct",
    explanation: "Requesting a structured, step-by-step breakdown of methodology is strongly analytical.",
  },
  {
    id: "sd-10",
    type: "sentence-detection",
    sentence: "Bottom line — what's our return on this?",
    correctStyle: "direct",
    adjacentStyle: "analytical",
    explanation: "'Bottom line' and focusing on return demonstrates results-driven, direct communication.",
  },
  {
    id: "sd-11",
    type: "sentence-detection",
    sentence: "This has so much potential — let's brainstorm some ideas together!",
    correctStyle: "expressive",
    adjacentStyle: "supportive",
    explanation: "The combination of 'potential', 'brainstorm', and enthusiasm is quintessential expressive language.",
  },
  {
    id: "sd-12",
    type: "sentence-detection",
    sentence: "Let's take our time and make sure the team is comfortable before we proceed.",
    correctStyle: "supportive",
    adjacentStyle: "expressive",
    explanation: "Emphasising patience, comfort, and team readiness is characteristic of supportive communication.",
  },
];

// ============================================
// Language Match Challenges (10)
// ============================================

const LANGUAGE_MATCH_CHALLENGES: LanguageMatchChallenge[] = [
  {
    id: "lm-01",
    type: "language-match",
    characterSays: "I just want clarity on the data.",
    characterStyle: "analytical",
    options: [
      { id: "a", text: "Let's brainstorm some ideas.", isCorrect: false },
      { id: "b", text: "I've summarised the key numbers in the report.", isCorrect: true },
      { id: "c", text: "Let's talk about how everyone feels.", isCorrect: false },
      { id: "d", text: "This is an exciting opportunity.", isCorrect: false },
    ],
    explanation: "An analytical communicator asking for data clarity expects a precise, evidence-based response with specific information.",
  },
  {
    id: "lm-02",
    type: "language-match",
    characterSays: "We need to move fast on this.",
    characterStyle: "direct",
    options: [
      { id: "a", text: "I've drafted three options — here are the trade-offs.", isCorrect: false },
      { id: "b", text: "How does the team feel about rushing this?", isCorrect: false },
      { id: "c", text: "Done. I'll have it resolved by end of day.", isCorrect: true },
      { id: "d", text: "What if we explored a completely new approach?", isCorrect: false },
    ],
    explanation: "Direct communicators value speed and decisiveness. Matching their urgency with a clear commitment to action works best.",
  },
  {
    id: "lm-03",
    type: "language-match",
    characterSays: "I'm worried some people might not be on board with this change.",
    characterStyle: "supportive",
    options: [
      { id: "a", text: "The numbers show it's the right call.", isCorrect: false },
      { id: "b", text: "Let's get it done and people will come around.", isCorrect: false },
      { id: "c", text: "That's a fair concern — shall we check in with the team first?", isCorrect: true },
      { id: "d", text: "Think of the possibilities though!", isCorrect: false },
    ],
    explanation: "A supportive communicator expressing concern needs acknowledgement and a collaborative, people-first response.",
  },
  {
    id: "lm-04",
    type: "language-match",
    characterSays: "I've been thinking — what if we completely redesigned the customer journey?",
    characterStyle: "expressive",
    options: [
      { id: "a", text: "That's a bold idea — what's your vision for it?", isCorrect: true },
      { id: "b", text: "We'd need to see the cost-benefit analysis first.", isCorrect: false },
      { id: "c", text: "Let's just fix what's broken.", isCorrect: false },
      { id: "d", text: "How would the team feel about such a big change?", isCorrect: false },
    ],
    explanation: "Expressive communicators sharing big ideas want enthusiasm and engagement with their vision, not caution or constraint.",
  },
  {
    id: "lm-05",
    type: "language-match",
    characterSays: "Can you break down exactly how you arrived at that figure?",
    characterStyle: "analytical",
    options: [
      { id: "a", text: "I used three data sources — let me walk you through each one.", isCorrect: true },
      { id: "b", text: "Trust me, the number is right.", isCorrect: false },
      { id: "c", text: "The team worked really hard on it.", isCorrect: false },
      { id: "d", text: "It's a really exciting result!", isCorrect: false },
    ],
    explanation: "When an analytical communicator asks for a breakdown, they expect structured, specific detail — not reassurance or enthusiasm.",
  },
  {
    id: "lm-06",
    type: "language-match",
    characterSays: "What's the priority here? I need to know what to tackle first.",
    characterStyle: "direct",
    options: [
      { id: "a", text: "Let's explore all the angles before deciding.", isCorrect: false },
      { id: "b", text: "Focus on the client delivery — everything else can wait.", isCorrect: true },
      { id: "c", text: "Maybe we should ask the team what they think?", isCorrect: false },
      { id: "d", text: "There are so many interesting options to consider.", isCorrect: false },
    ],
    explanation: "Direct communicators asking for priorities want a clear, decisive answer — not exploration or consensus-building.",
  },
  {
    id: "lm-07",
    type: "language-match",
    characterSays: "I just want to make sure everyone's voice is heard before we commit.",
    characterStyle: "supportive",
    options: [
      { id: "a", text: "We don't have time for that — let's decide.", isCorrect: false },
      { id: "b", text: "The data already supports one clear direction.", isCorrect: false },
      { id: "c", text: "Agreed — let's set up a round-table so everyone can share their perspective.", isCorrect: true },
      { id: "d", text: "I have a great idea for how to handle it!", isCorrect: false },
    ],
    explanation: "Supportive communicators value inclusion. Matching their approach by facilitating group input shows you understand their priority.",
  },
  {
    id: "lm-08",
    type: "language-match",
    characterSays: "This project has incredible potential — I can already see where it could go!",
    characterStyle: "expressive",
    options: [
      { id: "a", text: "Let's ground this in the numbers first.", isCorrect: false },
      { id: "b", text: "I love that energy — let's sketch out the vision together.", isCorrect: true },
      { id: "c", text: "What's the immediate deliverable?", isCorrect: false },
      { id: "d", text: "Is everyone comfortable with this direction?", isCorrect: false },
    ],
    explanation: "Expressive communicators sharing enthusiasm want you to match their energy and build on their vision collaboratively.",
  },
  {
    id: "lm-09",
    type: "language-match",
    characterSays: "I'd like to see a detailed comparison of both approaches before we proceed.",
    characterStyle: "analytical",
    options: [
      { id: "a", text: "Let's just go with option A — it feels right.", isCorrect: false },
      { id: "b", text: "I'll prepare a side-by-side analysis with the key metrics.", isCorrect: true },
      { id: "c", text: "How does the team feel about both options?", isCorrect: false },
      { id: "d", text: "Both options are exciting — let's explore the possibilities!", isCorrect: false },
    ],
    explanation: "An analytical communicator requesting a comparison expects a structured, data-driven response — not intuition or enthusiasm.",
  },
  {
    id: "lm-10",
    type: "language-match",
    characterSays: "I appreciate everyone's input, but I think we need to consider how this affects the newer team members.",
    characterStyle: "supportive",
    options: [
      { id: "a", text: "Good point — let's pair each new starter with a buddy during the transition.", isCorrect: true },
      { id: "b", text: "They'll adapt — let's not slow down.", isCorrect: false },
      { id: "c", text: "What do the onboarding metrics look like?", isCorrect: false },
      { id: "d", text: "Maybe we could reimagine the whole onboarding experience!", isCorrect: false },
    ],
    explanation: "A supportive communicator raising concern about newer members wants a caring, practical response that puts people first.",
  },
];

// ============================================
// Aggregated Challenges
// ============================================

export const ALL_VOCABULARY_CHALLENGES: VocabularyChallenge[] = [
  ...WORD_SORT_CHALLENGES,
  ...SENTENCE_DETECTION_CHALLENGES,
  ...LANGUAGE_MATCH_CHALLENGES,
];

// Utility: shuffle array
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate a vocabulary practice set.
 * Returns a mix of challenge types, shuffled.
 */
export function generateVocabularySet(count: number = 5): VocabularyChallenge[] {
  // Ensure a mix of types
  const wordSorts = shuffle(WORD_SORT_CHALLENGES);
  const sentences = shuffle(SENTENCE_DETECTION_CHALLENGES);
  const matches = shuffle(LANGUAGE_MATCH_CHALLENGES);

  const mixed: VocabularyChallenge[] = [];

  // Round-robin from each type to ensure variety
  let ws = 0, sd = 0, lm = 0;
  while (mixed.length < count) {
    if (ws < wordSorts.length && mixed.length < count) {
      mixed.push(wordSorts[ws++]);
    }
    if (sd < sentences.length && mixed.length < count) {
      mixed.push(sentences[sd++]);
    }
    if (lm < matches.length && mixed.length < count) {
      mixed.push(matches[lm++]);
    }
  }

  return shuffle(mixed.slice(0, count));
}

/**
 * Get a single random vocabulary challenge related to a specific style.
 * Used for "vocab moment" in workout flow after each scenario.
 * Prefers sentence-detection or language-match (they're style-specific),
 * falls back to word-sort (which tests multiple styles).
 */
export function getVocabMoment(style: CommunicationStyle): VocabularyChallenge {
  // Filter sentence detection challenges by style
  const matchingSentences = SENTENCE_DETECTION_CHALLENGES.filter(
    (c) => c.correctStyle === style
  );
  // Filter language match challenges by style
  const matchingLanguage = LANGUAGE_MATCH_CHALLENGES.filter(
    (c) => c.characterStyle === style
  );

  const styleSpecific = shuffle([...matchingSentences, ...matchingLanguage]);

  if (styleSpecific.length > 0) {
    return styleSpecific[0];
  }

  // Fallback to a random word sort
  return shuffle(WORD_SORT_CHALLENGES)[0];
}
