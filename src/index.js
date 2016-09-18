import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addQuestionsAttempt, addPositionPointsScreenAattempt } from './js/actions/screenA';
import { addScreenBquestsAttempt } from './js/actions/screenB';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './js/containers/App';
import store from './js/store';

store.dispatch(addQuestionsAttempt());
store.dispatch(addScreenBquestsAttempt());
store.dispatch(addPositionPointsScreenAattempt());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
