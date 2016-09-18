import React from 'react';
import { connect } from 'react-redux';
import { Circle } from 'react-leaflet';

const Hints = ({positions, quest, showHints}) => {
  const pins = positions.map(position => {
    const coords = [position.lat, position.lgn];
    return (
      <Circle
        center={coords}
        opacity='0'
        fill={showHints}
        fillOpacity='0.7'
        radius={5}
        key={position.lgn}
      />
    );
  });

  return <div>{pins}</div>
}

function mapStateToProps(state) {
  return {
    showHints: state.screenB.showHints
  }
}

export default connect(mapStateToProps)(Hints);
