import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
} from "./actionTypes";

export const incrementAction = () => ({ type: INCREMENT_TOTAL_CORRECT });
export const totalQuestionsAction = (total) => ({
  type: TOTAL_QUESTIONS_NUMBER,
  payload: total,
});
export const resetAction = () => ({ type: RESET_CORRECT_NUMBER });
