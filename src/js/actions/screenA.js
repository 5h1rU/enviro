import {
  ADD_QUESTIONS_ATTEMPT,
  ADD_QUESTIONS_SUCCESS,
  ADD_QUESTIONS_ERROR,
  RESQUEST_POINTS_POSITION_SCREEN_A,
  SCREEN_A_COMPLETED,
  SCREEN_A_NEXT_QUESTION
} from '../constants/screenA';

export function addQuestionsAttempt(questions) {
  return {
    type: ADD_QUESTIONS_ATTEMPT
  }
}

export function addQuestionsSuccess(questions) {
  return {
    type: ADD_QUESTIONS_SUCCESS,
    questions
  }
}

export function addQuestionsError(error) {
  return {
    type: ADD_QUESTIONS_ERROR,
    error
  }
}

export function addPositionPointsScreenA(positions) {
  return {
    type: RESQUEST_POINTS_POSITION_SCREEN_A,
    positions
  }
}

export function nextQuestion() {
  return {
    type: SCREEN_A_NEXT_QUESTION,
  }
}

export function screenAcompleted(completed) {
  return {
    type: SCREEN_A_COMPLETED,
    completed
  }
}
