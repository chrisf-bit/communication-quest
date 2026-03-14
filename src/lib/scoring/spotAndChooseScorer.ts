import {
  CommunicationStyle,
  FeedbackContent,
  FeedbackResult,
  Scenario,
} from "@/types";
import { STYLE_ADJACENCY } from "@/data/styles";

export interface SpotResult {
  score: number;
  maxScore: number;
  result: FeedbackResult;
  feedback: FeedbackContent;
}

export function scoreSpotTheStyle(
  selectedStyle: CommunicationStyle,
  scenario: Scenario
): SpotResult {
  const { correctStyle, adjacentStyle, feedbackByResult } =
    scenario.spotQuestion;

  if (selectedStyle === correctStyle) {
    return {
      score: 10,
      maxScore: 10,
      result: "strong",
      feedback: feedbackByResult.strong,
    };
  }

  // Check adjacency - either the scenario-specific adjacent style
  // or the general adjacency map
  const isAdjacent =
    selectedStyle === adjacentStyle ||
    selectedStyle === STYLE_ADJACENCY[correctStyle];

  if (isAdjacent) {
    return {
      score: 5,
      maxScore: 10,
      result: "partial",
      feedback: feedbackByResult.partial,
    };
  }

  return {
    score: 0,
    maxScore: 10,
    result: "weak",
    feedback: feedbackByResult.weak,
  };
}

export interface ChooseResult {
  score: number;
  maxScore: number;
  result: FeedbackResult;
  feedback: FeedbackContent;
}

export function scoreChooseBestResponse(
  selectedOptionId: string,
  scenario: Scenario
): ChooseResult {
  const option = scenario.chooseQuestion.options.find(
    (o) => o.id === selectedOptionId
  );

  if (!option) {
    return {
      score: 0,
      maxScore: 10,
      result: "weak",
      feedback: {
        result: "weak",
        explanation: "No option selected.",
        observation: "",
        coachingTip: "Try selecting a response next time.",
        styleContext: "",
      },
    };
  }

  return {
    score: option.score,
    maxScore: 10,
    result: option.result,
    feedback: {
      result: option.result,
      explanation: option.explanation,
      observation:
        scenario.spotQuestion.feedbackByResult[option.result].observation,
      coachingTip:
        scenario.spotQuestion.feedbackByResult[option.result].coachingTip,
      styleContext:
        scenario.spotQuestion.feedbackByResult[option.result].styleContext,
    },
  };
}
