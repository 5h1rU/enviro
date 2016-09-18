import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addQuestionsAttempt, addPositionPointsScreenA } from './js/actions/screenA';
import { addScreenBquestsAttempt } from './js/actions/screenB';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './js/containers/App';
import questions from './js/api/screenAquestions';
import screenBquestions from './js/api/screenBquestions';
import positions from './js/api/mapPositionPointsScreenA';
import store from './js/store';

store.dispatch(addQuestionsAttempt());
store.dispatch(addScreenBquestsAttempt());
store.dispatch(addPositionPointsScreenA(positions));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
