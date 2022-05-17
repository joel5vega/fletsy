import React,{useState,useRef,useMemo,useCallback} from "react";
import { Marker,Popup } from "react-leaflet";
import {IconMap} from "./IconMap";
const center = [-16.4897, -68.1193];
const Markers = (props) => {

  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return (
    <Marker
    draggable={draggable}
    eventHandlers={eventHandlers}
    position={position}
    ref={markerRef}
    icon={IconMap}>
    <Popup minWidth={90}>
      <span onClick={toggleDraggable}>
        {draggable
          ? 'Puede cambiar la posición'
          : 'Seleccione para cambiar la posición'}
      </span>
    </Popup>
  </Marker>
  );
};

export default Markers;
