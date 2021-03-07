import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  RESET_CORRECT_NUMBER,
} from "../actions/actionTypes";

const initialState = {
  total_answers: 0,
  total_questions: 0,
};

export const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL_CORRECT:
      return {
        ...state,
        total_answers: state.total_answers + 1,
      };
    case TOTAL_QUESTIONS_NUMBER:
      return {
        ...state,
        total_questions: action.total_questions,
      };
    case RESET_CORRECT_NUMBER:
      return {
        ...state,
        total_answers: 0,
      };
    default:
      return state;
  }
};
