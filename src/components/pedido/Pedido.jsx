import React from "react";
import "./pedido.css";
function Pedido(props) {
  const { carga, origen, destino, capacidad } = props.pedido;

  // var { id, cotizacion,estado } = {1,2,3}
  return (
    <div className="pedido">
      <h3>Pedido </h3>
      <div className="pedidos_datos">
        <div className="dato">
          <label>Carga</label>
          {carga}
        </div>
        <div className="dato">
          <label>Estado:</label>
          {props.estado}
        </div>
        <div className="dato">
          <label>Origen</label> {origen}
        </div>
        <div className="dato">
          <label>Destino</label>
          {destino}
        </div>
        <div className="dato">
          <label>Capacidad</label>
          {capacidad}
        </div>{" "}
        <div className="dato">
          <label>Cotización</label>
          {capacidad * 1000}
        </div>
      </div>
    </div>
  );
}

export default Pedido;
