import React from "react";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import {RiSendPlane2Fill} from "react-icons/ri"
import { MdVerified } from "react-icons/md";

function InfoEmpresa(props) {
  const { id, estado, nombre } = props.empresa;
  return (
    <div className="oferta" key={id}>
      <div className="oferta__imagen">
        <FaTruck />
      </div>
      <div className="oferta__datos">
        <h4>
          {estado == "verificado" && <MdVerified />}

          {nombre}
        </h4>
      </div>
      <div className="boton__secundario">
        <Link to="/comercio/confirmar">
          <RiSendPlane2Fill />
        </Link>
      </div>
    </div>
  );
}

export default InfoEmpresa;
