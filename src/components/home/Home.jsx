import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/fletsy-logo.png";
import "./home.css";

function Home(props) {
  return (
    <section>
      <div className="container">
        <img className="logo" src={Logo} alt="Fletsy Logo" />
        <div className="botones">
          <Link to="/transporte/oferta">
            <button className="boton__principal">Buscar flete</button>
          </Link>
          <Link to="/comercio/pedidos">
            <button className="boton__secundario">Explorar pedidos</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
