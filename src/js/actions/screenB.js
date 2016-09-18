import {
  ADD_SCREEN_B_QUESTS_ATTEMPT,
  ADD_SCREEN_B_QUESTS_SUCCESS,
  ADD_SCREEN_B_QUESTS_ERROR,
  COMPLETE_QUEST_SUCESS,
  COMPLETE_QUEST_ERROR,
  GET_CURRENT_QUEST,
  GET_CURRENT_POSITION,
  GET_CURRENT_DISTANCE,
  GET_GEOLOCATION_ATTEMPT,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_ERROR,
  SCREEN_B_STARTED,
  SCREEN_B_NEXT_QUEST,
  SCREEN_B_NEXT_QUESTION,
  SCREEN_B_COMPLETED,
  SHOW_HINTS,
  HIDE_HINTS
} from '../constants/screenB';

export function addScreenBquestsAttempt() {
  return {
    type: ADD_SCREEN_B_QUESTS_ATTEMPT,
  }
}

export function addScreenBquestsSuccess(quests) {
  return {
    type: ADD_SCREEN_B_QUESTS_SUCCESS,
    quests
  }
}

export function addScreenBquestsError(error) {
  return {
    type: ADD_SCREEN_B_QUESTS_ERROR,
    error
  }
}

export function completeQuestSucess(quest) {
  return {
    type: COMPLETE_QUEST_SUCESS,
    quest
  }
}

export function completeQuestError(quest) {
  return {
    type: COMPLETE_QUEST_ERROR,
    quest
  }
}

export function getCurrentQuest() {
  return {
    type: GET_CURRENT_QUEST
  }
}

export function getCurrentPosition(position) {
  return {
    type: GET_CURRENT_POSITION,
    position
  }
}

export function getCurrentDistance(distance) {
  return {
    type: GET_CURRENT_DISTANCE,
    distance
  }
}

export function geoLocationAttempt() {
  return {
    type: GET_GEOLOCATION_ATTEMPT
  }
}

export function geoLocationSuccess(location) {
  return {
    type: GET_GEOLOCATION_SUCCESS,
    location
  }
}

export function geoLocationError(error) {
  return {
    type: GET_GEOLOCATION_ERROR,
    error
  }
}

export function screenBstarted() {
  return {
    type: SCREEN_B_STARTED,
    currentIndexQuest: 0,
    currentIndexQuestion: 0
  }
}

export function screenBnextQuest() {
  return {
    type: SCREEN_B_NEXT_QUEST
  }
}

export function screenBnextQuestion() {
  return {
    type: SCREEN_B_NEXT_QUESTION
  }
}

export function screenBcompleted() {
  return {
    type: SCREEN_B_COMPLETED
  }
}

export function showHints() {
  return {
    type: SHOW_HINTS
  }
}

export function hideHints() {
  return {
    type: HIDE_HINTS
  }
}
