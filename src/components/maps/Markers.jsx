import React from "react";
import { Marker } from "react-leaflet";
import { IconMap } from "./IconMap";

const Markers = (props) => {
  const places = props.places;
  const markers = places.map((place) => (
    <Marker key={place.id} position={place.geometry} icon={IconMap} />
  ));
  return markers;
};

export default Markers;
