import { combineEpics } from 'redux-observable';
import { screenB, addQuestions } from './screenA';
import { distance, distanceNewQuestion, showHintsTemporal } from './distance';
import { addQuests, register } from './screenB';

export default combineEpics(
  register,
  screenB,
  addQuestions,
  addQuests,
  distance,
  distanceNewQuestion,
  showHintsTemporal
);
