import React from "react";
import MapView from "../maps/MapView";
import Pedido from "../pedido/Pedido";
import {Link} from "react-router-dom" 
import "./comercial.css"
function ConfirmarPedido() {
  const pedido = {
    id: 1,
    transporte_id: "Empresa 1",
    comercio_id: "Mi empresa",
    origen: "LP",
    destino: "SCZ"
  };

  return (
    <section>
      <div className="comercial">
        <h1>Confirmar Pedido</h1>
        <Pedido pedido={pedido} />
        <div className="dato">
          <label>Número de contacto</label>
          <input type="text" placeholder="Número de contacto" />
        </div>
        <div className="dato">
          <label>Punto de recojo & entrega </label> <MapView />
        </div>

        <div className="boton__secundario" type="submit">
          <Link to="comercio/confirmado">Confirmar</Link>
        </div>
      </div>
    </section>
  );
}

export default ConfirmarPedido;
