import React from "react";
import DataPedidos from "../../data/DataPedidos";
import Pedido from "../pedido/Pedido";
import "../pedido/pedido.css";
function MisPedidos() {
  return (
    <section>
      <div className="mispedidos">
        <h1>MisPedidos</h1>
        {DataPedidos.map((pedido) => (
          <div className="pedido" key={pedido.id}>
            <Pedido pedido={pedido} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MisPedidos;
