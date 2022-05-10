import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/fletsy-logo.png";
import "././sidebar.css";
function Sidebar(props) {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={Logo} alt="Fletsy Logo" />
      <div className="opcion" onClick={props.onClick}>
        <Link to="/comercio/micuenta">
          <div className="opcion">Mi cuenta</div>
        </Link>
      </div>
      {/* <div className="opcion">Ofertas</div> */}
      <div className="opcion" onClick={props.onClick}>
        <Link to="/comercio/mispedidos">
          <div className="opcion">Mis pedidos</div>
        </Link>
      </div>
      {/* <div className="opcion">Centros de distribución</div> */}
    </div>
  );
}

export default Sidebar;
