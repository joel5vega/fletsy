import React from "react";
import Select from "../formulario/Select";
import DataTransporte from "../../data/DataTransporte";
import InfoEmpresa from "./InfoEmpresa";
import "./transporte.css";

function OfertaTransporte() {
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
