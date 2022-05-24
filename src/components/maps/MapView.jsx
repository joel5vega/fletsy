import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import DragMarker from "./DragMarker";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import {DataPlaces} from '../../data/DataPlaces'
const position =[-17.38, -66.17];

const MapView = (props) => {
  var lugares=[]
  const start=DataPlaces.find(place=>place.id===props.origen)
  const end = DataPlaces.find(place=>place.id===props.destino)
  console.log(start,end)
  lugares= lugares.concat(start,end)
  console.log(lugares)
  return (
    <div className="mapa">
      <MapContainer center={position} zoom={5} scrollWheelZoom={false} boxZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <DragMarker  /> */}
        <Markers places={lugares} />
      </MapContainer>
    </div>
  );
};
export default MapView;
