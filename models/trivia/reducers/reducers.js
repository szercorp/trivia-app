import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
} from "../actions/actionTypes";

const initialState = {
  answers_total: 0,
  total_questions: 0,
};

export const totals = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL_CORRECT:
      return {
        ...state,
        answers_total: state.answers_total + 1,
      };
    case TOTAL_QUESTIONS_NUMBER:
      return {
        ...state,
        total_questions: action.payload,
      };
    case RESET_CORRECT_NUMBER:
      return {
        ...state,
        answers_total: 0,
      };
    default:
      return state;
  }
};
