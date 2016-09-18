import { ADD_SCORE, SEND_SCORE } from '../constants/score';

export function addScore(answer) {
  return {
    type: ADD_SCORE,
    answer
  }
}

export function sendScore(register) {
  return {
    type: SEND_SCORE,
    register
  }
}
