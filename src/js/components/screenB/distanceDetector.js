import React from 'react';
import { connect } from 'react-redux';
import Slider from 'material-ui/Slider';

const DistanceDetector = ({distance}) => {
  return (
    <Slider
      disabled={true}
      defaultValue={0}
      value={distance}
      min={0}
      max={100}
      step={10}
    />
  );
}

function mapStateToProps(state) {
  return {
    distance: state.screenB.currentDistance
  }
}

export default connect(mapStateToProps, {
})(DistanceDetector);
