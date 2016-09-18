import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import combineEpics from '../epics';

const epicMiddleware = createEpicMiddleware(combineEpics);
const middleware = applyMiddleware(epicMiddleware);

const store = createStore(rootReducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
