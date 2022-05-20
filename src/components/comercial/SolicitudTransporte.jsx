import React from "react";
import Solicitud from "./Solicitud";
function SolicitudTransporte() {
  return (
    <section>
      <h1>Solicitudes vigentes</h1>
      <Solicitud
        nombre="Solicitud 1"
        capacidad="2"
        requerimiento="Transporte"
        origen="LP"
        destino="OR"
      />
      <Solicitud
        nombre="Solicitud 2"
        capacidad="2"
        requerimiento="Transporte"
        origen="SCZ"
        destino="LP"
      />
    </section>
  );
}

export default SolicitudTransporte;
