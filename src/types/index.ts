// ============================================
// Communication Style Types
// ============================================

export type CommunicationStyle = "direct" | "expressive" | "supportive" | "analytical";

export interface StyleDefinition {
  id: CommunicationStyle;
  name: string;
  shortName: string;
  colour: string;
  colourLight: string;
  icon: string; // Lucide icon name
  description: string;
  traits: string[];
  communicationPreferences: string[];
  frustratedBy: string[];
  bestApproach: string[];
  // Traits used for free-text scoring
  scoringTraits: ScoringTrait[];
}

export interface ScoringTrait {
  name: string;
  description: string;
  weight: number; // points out of total 10
  positivePatterns: RegExp[];
  negativePatterns: RegExp[];
}

// ============================================
// Character / Avatar Types
// ============================================

export interface Character {
  id: string;
  name: string;
  role: string;
  organisation?: string;
  style: CommunicationStyle;
  avatarSeed: string; // Used to generate consistent illustrated avatar
  personality: string; // Brief personality sketch for context
}

// ============================================
// Scenario Types
// ============================================

export type ScenarioCategory =
  | "meeting"
  | "feedback"
  | "sales"
  | "client"
  | "team"
  | "conflict"
  | "email"
  | "one-to-one";

export type Difficulty = "foundation" | "intermediate" | "advanced";

export type QuestionType = "spot" | "choose" | "rewrite" | "vocabulary";

// ============================================
// Vocabulary Challenge Types
// ============================================

export type VocabularyChallengeType = "word-sort" | "sentence-detection" | "language-match";

export interface WordSortChallenge {
  id: string;
  type: "word-sort";
  words: { word: string; style: CommunicationStyle }[];
}

export interface SentenceDetectionChallenge {
  id: string;
  type: "sentence-detection";
  sentence: string;
  correctStyle: CommunicationStyle;
  adjacentStyle?: CommunicationStyle;
  explanation: string;
}

export interface LanguageMatchChallenge {
  id: string;
  type: "language-match";
  characterSays: string;
  characterStyle: CommunicationStyle;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export type VocabularyChallenge = WordSortChallenge | SentenceDetectionChallenge | LanguageMatchChallenge;

export type SkillFocus =
  | "recognition"
  | "adaptation"
  | "de-escalation"
  | "persuasion"
  | "clarity"
  | "empathy"
  | "brevity";

export interface StyleOption {
  style: CommunicationStyle;
  explanation: string; // Shown in feedback
}

export interface ResponseOption {
  id: string;
  text: string;
  score: number; // 0, 5, or 10
  result: FeedbackResult;
  explanation: string;
}

export interface FeedbackContent {
  result: FeedbackResult;
  explanation: string;
  observation: string;
  coachingTip: string;
  styleContext: string;
}

export type FeedbackResult = "strong" | "partial" | "weak";

export interface Scenario {
  id: string;
  title: string;
  context: string; // Setting description for spot question
  chooseContext?: string; // Evolved context for choose question (conversation progresses)
  rewriteContext?: string; // Further evolved context for rewrite question
  characterId: string; // Links to Character
  dialogue: string; // What the character says initially (spot question)
  chooseDialogue?: string; // What the character says for the choose question (conversation progresses)
  rewriteDialogue?: string; // What the character says for the rewrite question (conversation progresses)
  targetStyle: CommunicationStyle;
  difficulty: Difficulty;
  category: ScenarioCategory;
  skillFocus: SkillFocus;

  // Spot the Style question data
  spotQuestion: {
    prompt: string;
    correctStyle: CommunicationStyle;
    adjacentStyle?: CommunicationStyle; // Partial credit
    feedbackByResult: Record<FeedbackResult, FeedbackContent>;
  };

  // Choose Best Response question data
  chooseQuestion: {
    prompt: string;
    options: ResponseOption[];
  };

  // Rewrite Response question data
  rewriteQuestion: {
    prompt: string;
    targetTraits: string[];
    exampleStrongResponse: string;
    feedbackByResult: Record<FeedbackResult, FeedbackContent>;
  };
}

// ============================================
// Workout Types
// ============================================

export interface WorkoutConfig {
  questionCount: number;
  mixTypes: QuestionType[];
  difficulty?: Difficulty;
  focusStyle?: CommunicationStyle;
}

export interface WorkoutQuestion {
  scenarioId: string;
  questionType: QuestionType;
  questionIndex: number; // Position in workout
}

export interface WorkoutState {
  id: string;
  questions: WorkoutQuestion[];
  currentIndex: number;
  answers: QuestionAnswer[];
  status: "intro" | "in-progress" | "feedback" | "summary";
  startedAt: string;
}

export interface QuestionAnswer {
  scenarioId: string;
  questionType: QuestionType;
  userAnswer: string; // style id, option id, or free text
  score: number;
  maxScore: number;
  result: FeedbackResult;
  feedback: FeedbackContent;
  answeredAt: string;
}

// ============================================
// Scoring / Evaluator Types
// ============================================

export interface EvaluationResult {
  score: number;
  maxScore: number;
  result: FeedbackResult;
  feedback: FeedbackContent;
  detectedTraits: string[];
  missingTraits: string[];
}

// Evaluator interface - swap heuristic for AI later
export interface TextEvaluator {
  evaluate(
    text: string,
    targetStyle: CommunicationStyle,
    scenario: Scenario
  ): EvaluationResult;
}

// ============================================
// XP & Proficiency Level Types
// ============================================

export type ProficiencyLevel = "rookie" | "rising-star" | "sharp-shooter" | "ninja" | "jedi";

export interface ProficiencyTier {
  level: ProficiencyLevel;
  label: string;
  xpRequired: number;
}

export const PROFICIENCY_TIERS: ProficiencyTier[] = [
  { level: "rookie", label: "Rookie", xpRequired: 0 },
  { level: "rising-star", label: "Rising Star", xpRequired: 100 },
  { level: "sharp-shooter", label: "Sharp Shooter", xpRequired: 300 },
  { level: "ninja", label: "Ninja", xpRequired: 600 },
  { level: "jedi", label: "Jedi", xpRequired: 1000 },
];

export interface StyleXP {
  xp: number;
  level: ProficiencyLevel;
}

// ============================================
// Demo Mode Types
// ============================================

export type AppMode = "demo" | "authenticated";

export interface LevelUpEvent {
  style: CommunicationStyle | "overall";
  oldLevel: ProficiencyLevel;
  newLevel: ProficiencyLevel;
}

export interface SessionResult {
  progress: UserProgress;
  xpEarned: number;
  levelUps: LevelUpEvent[];
}

// ============================================
// Progress / Persistence Types
// ============================================

export interface StyleScore {
  attempts: number;
  correctIdentifications: number;
  totalScore: number;
  totalPossible: number;
}

export interface SessionRecord {
  id: string;
  date: string;
  type: "workout" | "practice";
  mode?: QuestionType;
  questions: QuestionAnswer[];
  totalScore: number;
  maxScore: number;
}

export interface UserProgress {
  workoutsCompleted: number;
  totalScore: number;
  totalPossibleScore: number;
  totalXP: number;
  styleScores: Record<CommunicationStyle, StyleScore>;
  styleXP: Record<CommunicationStyle, StyleXP>;
  sessions: SessionRecord[];
  completedScenarioIds: string[];
  lastSessionDate: string | null;
  currentStreak: number;
  longestStreak: number;
  completedDailyChallenges: string[];
  isDemo: boolean;
  hasCompletedAssessment: boolean;
  assessmentProfile?: {
    styleScores: Record<CommunicationStyle, number>;
    strongestStyle: CommunicationStyle | null;
    weakestStyle: CommunicationStyle | null;
    correctCount: number;
    completedAt: string;
  };
}
