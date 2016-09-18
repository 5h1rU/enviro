import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import ScreenA from '../components/screenA/screenA';
import ScreenB from '../components/screenB/screenB';
import ScreenC from '../components/screenC/screenC';
import DistanceDetector from '../components/screenB/distanceDetector';

import {
  geoLocationAttempt,
  geoLocationSuccess,
  geoLocationError
} from '../actions/screenB';

class App extends Component {
  componentDidUpdate() {
    if (this.props.completed) {
      this.activateGeolocation();
    }
  }

  activateGeolocation() {
    this.props.geoLocationAttempt()
    return navigator.geolocation.watchPosition((position) => {
      this.props.geoLocationSuccess({lat: position.coords.latitude, lgn: position.coords.longitude});
    }, (error) => this.props.geoLocationError(error), { enableHighAccuracy: true });
  }

  render() {
    const screenToShow = () => {
      if (!this.props.completedScreenB && this.props.startedScreenB) {
        return <ScreenB />;
      } else if (this.props.startedScreenB && this.props.completedScreenB) {
        return <ScreenC />;
      } else if (!this.props.startedScreenB) {
        return <ScreenA />;
      }
    }

    const dd = this.props.completed && !this.props.completedScreenB ? < DistanceDetector /> : null;
    const scoreInfo = `Score: ${this.props.score}`;
    return (
      <div className="App">
        <AppBar showMenuIconButton={false} title={scoreInfo} />
        {dd}
        {screenToShow()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.score.score,
    completed: state.screenA.completed,
    completedScreenB: state.screenB.completed,
    startedScreenB: state.screenB.started,
    questions: state.screenA.questions,
    quests: state.screenB.quests
  }
}

export default connect(mapStateToProps, {
  geoLocationAttempt,
  geoLocationSuccess,
  geoLocationError
})(App);
