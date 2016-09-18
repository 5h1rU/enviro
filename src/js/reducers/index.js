import { combineReducers } from 'redux';
import screenA from './screenA';
import screenB from './screenB';
import score from './score';

export default combineReducers({
  screenA,
  screenB,
  score
});
