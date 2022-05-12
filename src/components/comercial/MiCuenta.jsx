import React from "react";
import DataComercio from "../../data/DataComercio";

function MiCuenta() {
  var comercio=DataComercio.empresas[1]
  return (
    <div className="profile">
      <h1>Mi cuenta</h1>
      <label>Nombre:</label>
      <div className="dato">{comercio.nombre}</div>
      <label>Número de contacto</label>
      <div className="dato">{comercio.telefono}</div>
    </div>
  );
}

export default MiCuenta;
