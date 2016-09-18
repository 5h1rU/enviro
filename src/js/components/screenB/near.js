import React from 'react';
import { connect } from 'react-redux';
import { Modal, Effect, ModalManager } from 'react-dynamic-modal';
import { screenBnextQuestion, screenBnextQuest, screenBcompleted } from '../../actions/screenB';
import Result from '../result';
import { addScore } from '../../actions/score';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Near = ({ addScore, quests, questions, currentIndexQuestion, currentIndexQuest, screenBnextQuestion, screenBnextQuest, screenBcompleted }) => {
  const checkLimitQuest = (quests) => {
    return quests.length <= currentIndexQuest + 1 ? screenBcompleted() : screenBnextQuest();
  }

  const checkLimitQuestions = (questions)  => {
    return questions.length <= currentIndexQuestion + 1 ? checkLimitQuest(quests) : screenBnextQuestion();
  }

  const checkAnswer = (answer) => {
    checkLimitQuestions(questions);
    addScore(answer);
    return ModalManager.open(<MuiThemeProvider><Result correct={answer.correct}/></MuiThemeProvider>);
  }

  const currentQuestion = questions[currentIndexQuestion];
  const question = (currentQuestion) => currentQuestion.answers.map(answer => {
    const value = answer.isImage ? <img src={answer.value} role='presentation' /> : <div>{answer.value}</div>
    return (
      <li className='pure-u-1-2 answers' key={answer.value} onClick={() => checkAnswer(answer)}>
        {value}
      </li>
    );
  });

  return (
    <Modal effect={Effect.SuperScaled}>
      <div className='close-modal'>
        <h2>{currentQuestion.question}</h2>
        <ul>{question(currentQuestion)}</ul>
        <RaisedButton label='Close' primary={true} onClick={ModalManager.close} />
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    currentIndexQuestion: state.screenB.currentIndexQuestion,
    currentIndexQuest: state.screenB.currentIndexQuest,
    quests: state.screenB.quests
  };
}

export default connect(mapStateToProps, {
  screenBnextQuestion,
  screenBnextQuest,
  screenBcompleted,
  addScore
})(Near);
