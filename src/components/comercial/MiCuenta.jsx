import React from "react";
import DataComercio from "../../data/DataComercio";

function MiCuenta() {
  var comercio = DataComercio.empresas[1];
  return (
    <section>
      <div className="profile">
        <h1>Mi cuenta</h1>
        <label>Nombre:</label>
        <div className="dato">{comercio.nombre}</div>
        <img
          className="foto-portada"
          alt="imagen"
          src="https://www.volvotrucks.es/content/dam/volvo-trucks/markets/master/home/transport-needs/volvo-trucks-transport-needs-regional-haul-hero-link-img.jpg"
        />
        <label>Número de contacto</label>
        <div className="dato">{comercio.telefono}</div>
      </div>
    </section>
  );
}

export default MiCuenta;
