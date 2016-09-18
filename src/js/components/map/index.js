import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Pins from './pins';
import Hints from './hints';
// eslint-disable-next-line
import * as styles from '../../../css/Map.css';

const position = [51.975707, 7.4144906];

const MapContainer = (props) => {
  if(!props.positions) {
    return null;
  }
  const pos = props.location ? [props.location.lat, props.location.lgn] : [51.975707, 7.4144906];
  const userLocation = props.showHints ? <Marker position={pos} key={position.lat} /> : null;
  const markerToShow = props.hasPopUp ? <Pins positions={props.positions} /> : <Hints positions={props.positions} />;
  return (
    <Map center={pos} zoom={18} className='pure-u-2-3'>
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      />
      {markerToShow}
      {userLocation}
    </Map>
  );
}

function mapStateToProps(state) {
  return {
    location: state.screenB.location,
    showHints: state.screenB.showHints

  }
}

export default connect(mapStateToProps)(MapContainer);
