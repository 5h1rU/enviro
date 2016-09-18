import 'rxjs';
import { GET_GEOLOCATION_SUCCESS, SCREEN_B_NEXT_QUEST, SHOW_HINTS } from '../constants/screenB';
import { getCurrentDistance, hideHints } from '../actions/screenB';

const getDistanceInMeters = (state) => {
  const quest = state.screenB.quests[state.screenB.currentIndexQuest];
  // eslint-disable-next-line
  return L.latLng([quest.lat, quest.lgn])
    .distanceTo([state.screenB.location.lat, state.screenB.location.lgn]);
}

const getRoundedDistanceInMeters = (meters) => {
  return Math.round( meters * 10 ) / 10;
}

const composeDistance = (state) => {
  const distance = getRoundedDistanceInMeters(getDistanceInMeters(state));
  return getCurrentDistance(distance);
}

export function distance(action$, state) {
  return action$.ofType(GET_GEOLOCATION_SUCCESS).map(() => composeDistance(state.getState()));
}

export function distanceNewQuestion(action$, state) {
  return action$.ofType(SCREEN_B_NEXT_QUEST).map(() => composeDistance(state.getState()));
}

export function showHintsTemporal(action$, state) {
  return action$.ofType(SHOW_HINTS).delay(5000).mapTo(hideHints());
}
