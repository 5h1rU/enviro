import React from 'react';
import { connect } from 'react-redux'
import { addScore } from '../../actions/score';
import { nextQuestion } from '../../actions/screenA';
import { ModalManager } from 'react-dynamic-modal';
import RaisedButton from 'material-ui/RaisedButton';
import { screenAcompleted } from '../../actions/screenA';
import { screenBstarted } from '../../actions/screenB';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Result from '../result';

const Answers = (props) => {

  const finish = ({questions, currentIndexQuestion, screenAcompleted, screenBstarted}) => {
    return questions.length === currentIndexQuestion + 1 ? screenAcompleted(true) : false;
  }

  const handleResult = (answer) => {
    // this is not the best way to do, but lets move forward another things.
    props.addScore(answer);
    props.nextQuestion();
    finish(props);
    return ModalManager.open(
      <MuiThemeProvider>
        <Result correct={answer.correct} onRequestClose={() => true}/>
      </MuiThemeProvider>
    )
  }

  const answers = props.question.answer.map(answer => {
    return (
      <li key={answer.value} onClick={() => handleResult(answer)}>
        <RaisedButton
          label={answer.value}
          secondary={true}
          labelPosition='before'
          fullWidth={true}
        />
      </li>
    )
  });

  return <ul>{answers}</ul>
}

function mapStateToProps(state) {
  return {
    answer: state.screenA,
    questions: state.screenA.questions,
    currentIndexQuestion: state.screenA.currentIndexQuestion
  }
}

export default connect(mapStateToProps, {
  addScore,
  nextQuestion,
  screenAcompleted,
  screenBstarted
})(Answers);
