import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
  SAVE_FETCHED_QUESTIONS,
} from "../actions/actionTypes";

const initialState = {
  questions: [],
  correct_answers: 0,
  total_questions: 0,
};

export const totalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FETCHED_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case INCREMENT_TOTAL_CORRECT:
      return {
        ...state,
        correct_answers: state.correct_answers + 1,
      };
    case TOTAL_QUESTIONS_NUMBER:
      return {
        ...state,
        total_questions: action.payload,
      };
    case RESET_CORRECT_NUMBER:
      return {
        ...state,
        correct_answers: 0,
      };
    default:
      return state;
  }
};
