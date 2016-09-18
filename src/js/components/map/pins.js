import React from 'react';
import { Marker, Popup } from 'react-leaflet';
// eslint-disable-next-line
import * as styles from '../../../css/Map.css';

const Pins = ({positions}) => {
  const pins = positions.map(position => {
    const coords = [parseFloat(position.lat), parseFloat(position.lgn)];
    return (
      <Marker position={coords} key={position.lat}>
        <Popup>
          <div>
            <img className='marker-image' alt={position.text} src={position.img} />
            <span>{position.text}</span>
          </div>
        </Popup>
      </Marker>
    );
  });

  return <div>{pins}</div>
}

export default Pins;

// when click pin show the modal with the data associated
