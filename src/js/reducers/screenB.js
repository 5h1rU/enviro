import {
  ADD_SCREEN_B_QUESTS_ATTEMPT,
  ADD_SCREEN_B_QUESTS_SUCCESS,
  ADD_SCREEN_B_QUESTS_ERROR,
  COMPLETE_QUEST_SUCESS,
  COMPLETE_QUEST_ERROR,
  GET_CURRENT_QUEST,
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

const defaultState = {
  quests: []
}

const screenB = (state = defaultState, action) => {
  switch(action.type) {
    case SCREEN_B_STARTED:
      return {
        ...state,
        started: true,
        currentIndexQuest: action.currentIndexQuest,
        currentIndexQuestion: action.currentIndexQuestion
      }
    case SCREEN_B_COMPLETED:
      return {
        ...state,
        completed: true
      }
    case ADD_SCREEN_B_QUESTS_ATTEMPT:
      return {
        ...state,
      }
    case ADD_SCREEN_B_QUESTS_SUCCESS:
      return {
        ...state,
        quests: action.quests
      }
    case ADD_SCREEN_B_QUESTS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case SCREEN_B_NEXT_QUEST:
      return {
        ...state,
        currentIndexQuest: state.currentIndexQuest + 1,
        currentIndexQuestion: 0
      }
    case SCREEN_B_NEXT_QUESTION:
      return {
        ...state,
        currentIndexQuestion: state.currentIndexQuestion + 1
      }
    case COMPLETE_QUEST_SUCESS:
      return {
        ...state,
        questSuccess: true
      }
    case COMPLETE_QUEST_ERROR:
      return {
        ...state,
        questSuccess: false
    }
    case GET_CURRENT_QUEST:
      return {
        ...state,
        currentQuest: state.quests[state.randomNumber]
      }
    case GET_CURRENT_DISTANCE:
      return {
        ...state,
        currentDistance: action.distance
      }
    case GET_GEOLOCATION_ATTEMPT:
      return {
        ...state,
        fetchingLocation: true
      }
    case GET_GEOLOCATION_SUCCESS:
      return {
        ...state,
        fetchingLocation: false,
        location: action.location
      }
    case GET_GEOLOCATION_ERROR:
      return {
        ...state,
        fetchingLocation: false,
        locationError: action.error
      }
    case SHOW_HINTS:
      return {
        ...state,
        showHints: true
      }
    case HIDE_HINTS:
      return {
        ...state,
        showHints: false
      }
    default:
      return state;
  }
}

export default screenB;
