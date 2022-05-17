import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import DragMarker from "./DragMarker";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import {DataPlaces} from '../../data/DataPlaces'
// import "./map.css";
const position = [-17.38, -66.17];

const MapView = () => {
  return (
    <div className="mapa">
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DragMarker  />
        <Markers places={DataPlaces} />
      </MapContainer>
    </div>
  );
};
export default MapView;
