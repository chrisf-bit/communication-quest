import {
  CommunicationStyle,
  EvaluationResult,
  FeedbackResult,
  Scenario,
} from "@/types";
import { STYLES } from "@/data/styles";
import { TextEvaluator } from "./types";

export class HeuristicEvaluator implements TextEvaluator {
  evaluate(
    text: string,
    targetStyle: CommunicationStyle,
    scenario: Scenario
  ): EvaluationResult {
    const style = STYLES[targetStyle];
    const traits = style.scoringTraits;
    const trimmed = text.trim();

    // Minimum length check
    if (trimmed.length < 10) {
      return {
        score: 0,
        maxScore: 10,
        result: "weak",
        feedback: scenario.rewriteQuestion.feedbackByResult.weak,
        detectedTraits: [],
        missingTraits: traits.map((t) => t.name),
      };
    }

    let totalScore = 0;
    const detectedTraits: string[] = [];
    const missingTraits: string[] = [];

    for (const trait of traits) {
      let traitDetected = false;

      // Check positive patterns
      if (trait.positivePatterns.length > 0) {
        const hasPositive = trait.positivePatterns.some((pattern) =>
          pattern.test(trimmed)
        );
        if (hasPositive) {
          traitDetected = true;
        }
      }

      // Check negative patterns (trait detected if NONE match)
      if (trait.negativePatterns.length > 0) {
        const hasNegative = trait.negativePatterns.some((pattern) =>
          pattern.test(trimmed)
        );
        if (hasNegative) {
          traitDetected = false;
        } else if (trait.positivePatterns.length === 0) {
          // For traits that only have negative patterns (like "no-hedging"),
          // the trait is detected if no negative patterns match
          traitDetected = true;
        }
      }

      if (traitDetected) {
        totalScore += trait.weight;
        detectedTraits.push(trait.name);
      } else {
        missingTraits.push(trait.name);
      }
    }

    // Cap at 10
    const score = Math.min(totalScore, 10);

    // Determine result
    let result: FeedbackResult;
    if (score >= 7) {
      result = "strong";
    } else if (score >= 4) {
      result = "partial";
    } else {
      result = "weak";
    }

    return {
      score,
      maxScore: 10,
      result,
      feedback: scenario.rewriteQuestion.feedbackByResult[result],
      detectedTraits,
      missingTraits,
    };
  }
}

// Singleton instance
export const heuristicEvaluator = new HeuristicEvaluator();
