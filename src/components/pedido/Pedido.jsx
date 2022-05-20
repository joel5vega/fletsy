import React from "react";
import "./pedido.css";
function Pedido(props) {
  var { id, transporte_id, comercio_id,cotizacion, origen, destino,capacidad, tipo,estado } = props.pedido;
  return (
    <div className="pedido">
      <h3>Pedido #{id}</h3>
      <div className="pedidos_datos">
        <div className="dato">
          <label>Transportadora</label>
          {transporte_id}
        </div>
        <div className="dato">
            <label>Cotización</label>
            {cotizacion}
        </div>
        {/* <div className="dato">
          <label>Comercio</label>
          {comercio_id}
        </div> */}
        <div className="dato">
          <label>Origen</label> {origen}
        </div>
        <div className="dato">
          <label>Destino</label>
          {destino}
        </div>
        <div className="dato">
          <label>Tipo</label>
          {tipo}
        </div>
        <div className="dato">
          <label>Capacidad</label>
          {capacidad}
        </div>
        <div className="dato">
          <label>Estado:</label>
          {estado}
        </div>
      </div>
    </div>
  );
}

export default Pedido;
