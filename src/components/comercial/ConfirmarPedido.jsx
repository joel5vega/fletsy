import React from "react";
import MapView from "../maps/MapView";
import Pedido from "../pedido/Pedido";
function ConfirmarPedido() {
const pedido = 
  {"id":1,"transporte_id":1,"comercio_id":1,"origen":"LP","destino":"SCZ"}

  return (
    <div className="comercial">
      <h1>Confirmar Pedido</h1>
      <Pedido pedido={pedido}/>
     
      <div className="dato">
      <label>Número de contacto</label>
        <input type="text" placeholder="Número de contacto" />
      </div><div className="dato">
       <label>Punto de recojo & entrega </label>  <MapView />
      </div>
    
      
      <div className="boton__secundario" type="submit">Confirmar</div>
    </div>
  );
}

export default ConfirmarPedido;
