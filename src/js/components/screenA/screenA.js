import React from 'react';
import { connect } from 'react-redux';
import Answers from './answers';
import MapContainer from '../map';

const ScreenA = (props) => {
  if (!props.question) {
    return null;
  }
  return (
    <div>
      <div className='pure-u-1-3'>
        <h2>{props.question.question}</h2>
        <Answers question={props.question} />
      </div>
      <MapContainer positions={props.positions} hasPopUp={true} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.screenA.questions,
    question: state.screenA.questions[state.screenA.currentIndexQuestion],
    positions: state.screenA.positionsScreenA

  }
}

export default connect(mapStateToProps)(ScreenA);
