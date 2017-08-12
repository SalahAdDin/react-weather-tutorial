import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

export default (props) => {
  const lat = parseFloat(props.lat);
  const lon = parseFloat(props.lon);

  const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: lat, lng: lon}}
      />
  ));

  return (
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: `100%` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
    />
  );
}
