import React from "react";
import { FaTruck } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { GiThermometerCold } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import "./transporte.css";

function InfoEmpresa(props) {
  const { id, departamento, estado, nombre, carga } = props.empresa;
  // console.log(props.empresa)
  const showDetails=(event)=>{
    props.showDetails(props.empresa)
  }
  return (
    <div className="oferta" key={id}>
      <div className="oferta__imagen">
        {carga === "refrigerado" ? <GiThermometerCold /> : <FaTruck />}
      </div>
      <div className="oferta__datos">
        <h4>{estado === "verificado" && <MdVerified />}</h4>
        <h4>{nombre}</h4>
        <p>{departamento}</p>
        {/* <small>{carga}</small> */}
      </div>
      <div className="oferta__CTA" >
        <button onClick={showDetails} >
          <RiSendPlane2Fill />
          </button>
      </div>
    </div>
  );
}

export default InfoEmpresa;
