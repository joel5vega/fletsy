import React from "react";
import Select from "../formulario/Select";
import Entrada from "../formulario/Entrada";
import DataTransporte from "../../data/DataTransporte";
import InfoEmpresa from "./InfoEmpresa";
import "./transporte.css";

function BuscarTransporte() {
  const empresas = DataTransporte.empresas;
  const tipos = ["normal", "granel", "refrigerado", "sobredimensionado"];
  return (
    <section>
      <div className="buscar__transporte">
        <h1>Buscar Ofertas</h1>
        <div className="oferta__filtros">
          <Select label="Tipo de carga" options={tipos} />
          <Select label="Camión" options={["completo", "compartido"]} />
          <Select
            label="Tipo de flete"
            options={["nacional", "internacional", "provincial", "local"]}
          />
          <Select
            label="Origen"
            options={[
              "La Paz",
              "Cochabamba",
              "Santa Cruz",
              "Oruro",
              "Potosi",
              "Tarija",
              "Chuquisaca",
              "Beni",
              "Pando"
            ]}
          />
          <Select
            label="Destino"
            options={[
              "La Paz",
              "Cochabamba",
              "Santa Cruz",
              "Oruro",
              "Potosi",
              "Tarija",
              "Chuquisaca",
              "Beni",
              "Pando"
            ]}
          />
          <Select label="Capacidad" options={["Volumen (m3)", "Peso (T)"]} />
          <Entrada label="capacidad" type="text" placeholder="Capacidad" />
        </div>
        <div className="lista">
          <h3>Ofertas disponibles</h3>
          {empresas.map((empresa) => {
            return (
              <div key={empresa.id}>
                <InfoEmpresa empresa={empresa} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BuscarTransporte;
