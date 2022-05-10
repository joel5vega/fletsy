import React from "react";
import Select from "../formulario/Select";
import DataBolivia from "../../data/DataBolivia";
import DataTransporte from "../../data/DataTransporte";
import InfoEmpresa from "./InfoEmpresa";
import { Link } from "react-router-dom";
import "./transporte.css";
import { FaTruck } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

function OfertaTransporte() {
  const departamentos = DataBolivia.departamentos;
  const empresas = DataTransporte.empresas;
  const tipos = ["normal", "granel"];
  return (
    <section>
      <h1>Buscar Ofertas</h1>
      <div className="oferta__filtros">
        <Select label="Tipo de carga" options={tipos} />
        {/* <Select  label="Origen" options={departamentos.map((departamento)=>{return departamento  })} /> */}
      </div>
      <div className="lista">
        <h3>Ofertas disponibles</h3>
        {empresas.map((empresa) => {
          return(
            <div key={empresa.id}>
           <InfoEmpresa empresa={empresa} />;
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default OfertaTransporte;
