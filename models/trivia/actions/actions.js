import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
} from "./actionTypes";

export const increment = () => ({ type: INCREMENT_TOTAL_CORRECT });
export const total_questions = (total) => ({
  type: TOTAL_QUESTIONS_NUMBER,
  total_questions: total,
});
export const reset = () => ({ type: RESET_CORRECT_NUMBER });
