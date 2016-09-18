import React from 'react';
import { ModalManager } from 'react-dynamic-modal';
import { Modal, Effect } from 'react-dynamic-modal';
import RaisedButton from 'material-ui/RaisedButton';

const Far = () => {
  return (
    <Modal effect={Effect.SuperScaled}>
      <div className='close-modal'>
        <h1>You are not enough near, keep moving!</h1>
        <RaisedButton label="Close" primary={true} onClick={ModalManager.close} />
      </div>
    </Modal>

  );
}

export default Far;
