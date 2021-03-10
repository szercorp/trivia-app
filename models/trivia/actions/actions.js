import { ActionCreator } from "../../../libs";
import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  SAVE_FETCHED_QUESTIONS,
  SAVE_ANSWER,
  RESET_QUIZ,
} from "./actionTypes";

export const incrementAction = ActionCreator(INCREMENT_TOTAL_CORRECT);
export const totalQuestionsAction = ActionCreator(TOTAL_QUESTIONS_NUMBER);
export const saveFetchedQuestionsAction = ActionCreator(SAVE_FETCHED_QUESTIONS);
export const saveAnswerAction = ActionCreator(SAVE_ANSWER);
export const resetQuizAction = ActionCreator(RESET_QUIZ);
