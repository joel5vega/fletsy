import React from "react";
import Logo from "../../assets/fletsy-logo.png";
import "./home.css";
function Home(props) {
  return (
    <section>
      <div className="container">
        <img className="logo" src={Logo} alt="Fletsy Logo" />
        <div className="botones">
          <button className="boton__principal">Transporte</button>
          <button className="boton__secundario">Compras</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
