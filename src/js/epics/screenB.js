import 'rxjs';
import { ADD_SCREEN_B_QUESTS_ATTEMPT } from '../constants/screenB';
import { SEND_SCORE } from '../constants/score';
import { addScreenBquestsSuccess } from '../actions/screenB';

export function addQuests(action$, state) {
  return action$.ofType(ADD_SCREEN_B_QUESTS_ATTEMPT).mergeMap(action => {
    return fetch('https://backend-ooiijjpkqj.now.sh/screenB').then(function(response) {
    	return response.json();
    }).then(function(j) {
      return j;
    })
  }).map(addScreenBquestsSuccess);
}

export function register(action$, state) {
  return action$.ofType(SEND_SCORE).mergeMap(action => {
    const request = new Request('https://backend-ooiijjpkqj.now.sh/register', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: JSON.stringify(action.register),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request);
  }).map(addScreenBquestsSuccess);
}
