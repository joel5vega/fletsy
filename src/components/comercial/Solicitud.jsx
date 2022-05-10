import React from "react";

function Solicitud(props) {
  var { nombre, capacidad, origen, destino } = props;
  return (
    <div className="solicitud">
        <h3>{nombre}</h3>
        <label>Ruta</label>
        <li>{origen} - {destino}</li>
      <label>Capacidad requerida:</label><li>{capacidad} T</li>
    </div>
  );
}

export default Solicitud;
