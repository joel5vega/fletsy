import React from "react";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import './transporte.css'
function InfoEmpresa(props) {
  const { id, departamento, estado, nombre, carga } = props.empresa;
  return (
    <div className="oferta" key={id}>
      <div className="oferta__imagen">
        <FaTruck />
      </div>
      <div className="oferta__datos">
        <h4>{estado === "verificado" && <MdVerified />}</h4>
        <h4>{nombre}</h4>
        <p>{departamento}</p>
        <small>{carga}</small>
      </div>
      <div className="oferta__CTA">
         <div className="boton__secundario">
        <Link to="/comercio/confirmar">
          <RiSendPlane2Fill />
        </Link>
      </div>
      </div>
     
    </div>
  );
}

export default InfoEmpresa;
