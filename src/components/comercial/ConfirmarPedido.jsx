import React from "react";
import MapView from "../maps/MapView";
import Pedido from "../pedido/Pedido";
import { Link } from "react-router-dom";
import { GiThermometerCold } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import "./comercial.css";
function ConfirmarPedido(props) {
  const { carga, origen, destino } = props.pedido;
  const { nombre, web, telefono, direccion } = props.transporte;
  return (
    <section>
      <div className="comercial">
        <h1>
          Confirmar Pedido{" "}
            {carga === "refrigerado" ? <GiThermometerCold /> : <FaTruck />}
        </h1>
        <div className="transporte__datos">
          <h3>Empresa de transporte</h3>
          <a href={web}>{nombre}</a>
          <p>
            {telefono} - {direccion}
          </p>
        </div>
        <Pedido pedido={props.pedido} />
        <label>Punto de recojo & entrega </label>
        <div className="mapa">
          <MapView origen={origen} destino={destino} />
        </div>

        <div className="boton__secundario" onClick={()=>alert("Pedido confirmado")}type="submit">
          <Link to="/">Confirmar</Link>
        </div>
        <div className="boton__primario" onClick={()=>alert("Pedido cancelado")}type="submit">
          <Link to="/">Cancelar</Link>
        </div>
      </div>
    </section>
  );
}

export default ConfirmarPedido;
