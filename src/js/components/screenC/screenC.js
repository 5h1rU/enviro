import React from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { sendScore } from '../../actions/score';
import store from '../../store';

const ScreenC = React.createClass({

  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      score: store.getState().score.score
    };
  },

  componentDidMount: function() {
    console.log(this.state);
  },

  updateFirstNameValue: function(evt) {
    this.setState({
      firstName: evt.target.value,
    });
  },

  updateLastNameValue: function(evt) {
    this.setState({
      lastName: evt.target.value,
    });
  },

  updateAgeValue: function(evt) {
    this.setState({
      age: evt.target.value,
    });
  },

  updateGenderValue: function(evt) {
    this.setState({
      gender: evt.target.value
    })
  },

  register: function() {
    store.dispatch(sendScore(this.state));
  },

  render: function() {
    return (
      <form className="register-form">
        <div>
          <h1>You are finished! please fill the form!</h1>
          <TextField
            fullWidth={true}
            hintText="First name"
            floatingLabelText="First name"
            onChange={this.updateFirstNameValue}
            required={true}
          />
          <TextField
            fullWidth={true}
            hintText="Last name"
            floatingLabelText="Last name"
            onChange={this.updateLastNameValue}
            required={true}
          />
          <TextField
            fullWidth={true}
            hintText="Age"
            floatingLabelText="Age"
            onChange={this.updateAgeValue}
            required={true}
          />
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.updateGenderValue}>
            <RadioButton
              value="male"
              label="male"
              labelPosition="left"
            />
            <RadioButton
              value="female"
              label="female"
              labelPosition="left"
            />
          </RadioButtonGroup>
          <RaisedButton label="Finish" primary={true} fullWidth={true} onClick={this.register} />
        </div>
      </form>
    )
  }
});

export default ScreenC;
