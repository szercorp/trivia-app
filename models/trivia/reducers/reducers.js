import {
  INCREMENT_TOTAL_CORRECT,
  TOTAL_QUESTIONS_NUMBER,
  SAVE_FETCHED_QUESTIONS,
  SAVE_ANSWER,
  RESET_QUIZ,
} from "../actions/actionTypes";

const initialState = {
  questions: [],
  correctAnswers: 0,
  totalQuestions: 0,
};

export const totalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FETCHED_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SAVE_ANSWER:
      const newQuestions = [...state.questions];
      newQuestions[action.payload.currentQuestion].user_answer =
        action.payload.answer;
      return {
        ...state,
        questions: [...newQuestions],
      };
    case INCREMENT_TOTAL_CORRECT:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    case TOTAL_QUESTIONS_NUMBER:
      return {
        ...state,
        totalQuestions: action.payload,
      };
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};
