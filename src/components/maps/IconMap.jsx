import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa";
import L from "leaflet";
export const IconMap = L.icon({
  iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  iconRetinaUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconAnchor: [12, 41],  
  shadowurl: null,
  shadowsize: null,
  shadowAnchor: null,
//   iconsize: [35, 35],
  className: "Leaflet-venue-icon"
});

