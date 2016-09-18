import 'rxjs';
import { SCREEN_A_COMPLETED, ADD_QUESTIONS_ATTEMPT, RESQUEST_POINTS_POSITION_SCREEN_A_ATTEMPT } from '../constants/screenA';
import { addQuestionsSuccess, addPositionPointsScreenAsuccess } from '../actions/screenA';
import { screenBstarted } from '../actions/screenB';

export function screenB(action$, state) {
  return action$.ofType(SCREEN_A_COMPLETED).mapTo(screenBstarted());
}

export function addQuestions(action$, state) {
  return action$.ofType(ADD_QUESTIONS_ATTEMPT).mergeMap(action => {
    return fetch('https://backend-ooiijjpkqj.now.sh/screenA').then(function(response) {
    	return response.json();
    }).then(function(j) {
      return j;
    })
  }).map(addQuestionsSuccess);
}

export function addPositions(action$, state) {
  return action$.ofType(RESQUEST_POINTS_POSITION_SCREEN_A_ATTEMPT).mergeMap(action => {
    return fetch('https://backend-ooiijjpkqj.now.sh/pinsA').then(function(response) {
    	return response.json();
    }).then(function(j) {
      return j;
    })
  }).map(addPositionPointsScreenAsuccess);
}
