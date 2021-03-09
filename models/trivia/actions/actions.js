import { ActionCreator } from "../../../libs";
import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
} from "./actionTypes";

export const incrementAction = ActionCreator(INCREMENT_TOTAL_CORRECT);

export const totalQuestionsAction = ActionCreator(TOTAL_QUESTIONS_NUMBER);

export const resetAction = ActionCreator(RESET_CORRECT_NUMBER);
