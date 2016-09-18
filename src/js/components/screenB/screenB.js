import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import MapContainer from '../map';
import { ModalManager } from 'react-dynamic-modal';
import Near from './near';
import Far from'./far';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  getCurrentQuest,
  getCurrentDistance,
  showHints
} from '../../actions/screenB';

const ScreenB = (props) => {
  if (!props.quests) {
    return null;
  }
  const quest = props.quests[props.currentIndexQuest]
  const answerToshow = ({ distance }) => {
    if (distance <= 5) {
      return ModalManager.open(
        <MuiThemeProvider>
          <Near store={store} questions={quest.questions} onRequestClose={() => true}/>
        </MuiThemeProvider>
      );
    } else {
      return ModalManager.open(
        <MuiThemeProvider>
          <Far store={store} onRequestClose={() => true}/>
        </MuiThemeProvider>
      );
    }
  }

  return (
    <div>
      <div className='pure-u-1-3'>
        <ul>
          <li><h2>{quest.title}</h2></li>
          <li>
            <RaisedButton
              label='This is what Im looking for'
              onClick={() => answerToshow(props)}
              secondary={true}
              fullWidth={true}
            />
          </li>
          <li>
            <RaisedButton
              label='Hint'
              onClick={() => props.showHints()}
              primary={true}
              fullWidth={true}
            />
          </li>
        </ul>
      </div>
      <MapContainer positions={props.quests} hasPopUp={false} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentIndexQuest: state.screenB.currentIndexQuest,
    quests: state.screenB.quests,
    currentPosition: state.screenB.location,
    distance: state.screenB.currentDistance
  }
}

export default connect(mapStateToProps, {
  getCurrentQuest,
  getCurrentDistance,
  showHints
})(ScreenB);
