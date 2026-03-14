import { CommunicationStyle, EvaluationResult, Scenario } from "@/types";

// Evaluator interface - swap heuristic for AI later
export interface TextEvaluator {
  evaluate(
    text: string,
    targetStyle: CommunicationStyle,
    scenario: Scenario
  ): EvaluationResult;
}
