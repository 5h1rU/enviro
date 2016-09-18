import 'rxjs';
import { SCREEN_A_COMPLETED, ADD_QUESTIONS_ATTEMPT } from '../constants/screenA';
import { addQuestionsSuccess } from '../actions/screenA';
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
