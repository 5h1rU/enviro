import {
  ADD_QUESTIONS_ATTEMPT,
  ADD_QUESTIONS_SUCCESS,
  ADD_QUESTIONS_ERROR,
  RESQUEST_POINTS_POSITION_SCREEN_A,
  SCREEN_A_COMPLETED,
  SCREEN_A_NEXT_QUESTION
} from '../constants/screenA';

const defaultState = {
  currentIndexQuestion: 0,
  questions: []
}

const screenA = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_QUESTIONS_ATTEMPT:
      return {
        ...state,
      }
    case ADD_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions
      }
    case ADD_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case RESQUEST_POINTS_POSITION_SCREEN_A:
      return {
        ...state,
        positionsScreenA: action.positions
      }
    case SCREEN_A_COMPLETED:
      return {
        ...state,
        completed: action.completed
      }
    case SCREEN_A_NEXT_QUESTION:
      return {
        ...state,
        currentIndexQuestion: state.currentIndexQuestion + 1
      }
    default:
      return state;
  }
}

export default screenA;
