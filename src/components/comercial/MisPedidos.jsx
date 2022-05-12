import React from "react";
import DataPedidos from "../../data/DataPedidos";
import Pedido from "../pedido/Pedido";
function MisPedidos() {
  return (
    <div>
      <h1>MisPedidos</h1>
      {DataPedidos.map((pedido) => (
        <div className="pedido" key={pedido.id}>
          <Pedido pedido={pedido} />
        </div>
      ))}
    </div>
  );
}

export default MisPedidos;
