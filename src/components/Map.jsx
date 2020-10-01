import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map(props) {
  if (props.coords) {
    // If receives coords, shows the map component
    const { lat, lon } = props.coords.coord;
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: lat, lng: lon }}
      ></GoogleMap>
    );
  } else {
    // If not, shows a loading message
    return <div>Fetching map data...</div>;
  }
}

export default withScriptjs(withGoogleMap(Map));
