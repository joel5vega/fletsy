import React from "react";

function Pedido(props) {
  var { id, transporte_id, comercio_id, origen, destino } = props.pedido;
  return (
    <>
      <h3>Pedido #{id}</h3>
      <label>Transportadora</label>
      <div className="dato">{transporte_id}</div>
      <label>Comercio</label>
      <div className="dato">{comercio_id}</div>
      <label>Origen</label>
      <div className="dato"> {origen}</div>
      <label>Destino</label>
      <div className="dato">{destino}</div>
    </>
  );
}

export default Pedido;
