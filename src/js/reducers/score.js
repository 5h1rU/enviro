import { ADD_SCORE, SEND_SCORE } from '../constants/score';

const defaultState = {
  score: 0,
  attempts: 0
}

const score = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + parseInt(action.answer.points, 0),
        attempts: state.attempts + 1
      }
    case SEND_SCORE:
      return {
        ...state,
        register: action.register
      }
    default:
      return state;
  }
}

export default score;
