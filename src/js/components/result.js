import React from 'react';
import { Modal, Effect, ModalManager } from 'react-dynamic-modal';
import RaisedButton from 'material-ui/RaisedButton';
import star from '../../img/star.png';
import sadface from '../../img/sadface.png';

const Correct = () => {
  return (
    <div className='modal-correct'>
      <h1>Awesome! Correct answer</h1>
      <img src={star} role='presentation'/>
      <RaisedButton label="Close" primary={true} onClick={ModalManager.close} />
    </div>
  );
}

const Incorrect = () => {
  return (
    <div className='modal-incorrect'>
      <h1>Sorry :( </h1>
      <img src={sadface} role='presentation' />
      <RaisedButton label="Close" primary={true} onClick={ModalManager.close} />
    </div>
  );
}

const showResult = (correct) =>  correct ?  <Correct /> : <Incorrect />
const Result = (props) => <Modal effect={Effect.SuperScaled}>{showResult(props.correct)}</Modal>

export default Result;
