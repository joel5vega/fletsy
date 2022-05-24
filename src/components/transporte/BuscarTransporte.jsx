import React, { useState } from "react";
import Select from "../formulario/Select";
import Entrada from "../formulario/Entrada";
import DataEmpresas from "../../data/DataEmpresas";
import InfoEmpresa from "./InfoEmpresa";
import ConfirmarPedido from "../comercial/ConfirmarPedido";
import "./transporte.css";

const BuscarTransporte = () => {
  const data = DataEmpresas;
  const [empresas, setEmpresas] = useState(DataEmpresas);
  const [options, setOptions] = useState({});
  const [transporte, setTransporte] = useState({});
  const [show, setShow] = useState(false);
  const tipos = ["normal", "granel", "refrigerado", "sobredimensionado"];
  function buscarEventos(key, value) {
    var filtro = [];
    if (options.carga) {
      filtro = data.filter((empresa) => empresa.carga === options.carga);
    } else {
      filtro = data;
    }
    filtro = filtro.filter((empresa) => empresa[key] === value);
    setEmpresas(filtro);
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setOptions({ ...options, [name]: value });
    switch (name) {
      case "carga":
        buscarEventos(name, value);
        break;
      case "origen":
        buscarEventos("departamento", value);
        break;
      default:
        break;
    }
    // console.log(buscarEventos(name, value));
  };
  const showDetails = (event) => {
    setShow(!show);
    setTransporte(event);
  };
  // const { carga, tipo, origen, destino, capacidad } = options;

  return (
    <section>
      {show && <ConfirmarPedido transporte={transporte} pedido={options} />}
      {!show && (
        <div className="buscar__transporte">
          <h1>Buscar Ofertas</h1>
          <div className="oferta__filtros">
            <Select
              name="carga"
              // value={options.carga}
              label="Tipo de carga"
              options={tipos}
              handleChange={handleChange}
            />
            {/* <Select label="Camión" options={["completo", "compartido"]} /> */}
            {/* <Select
            name="tipo"
            // value={options.tipo}
            label="Tipo de flete"
            options={["nacional", "internacional", "provincial", "local"]}
            handleChange={handleChange}
          /> */}
            {options.carga && (
              <Select
                label="Origen"
                options={[
                  "La Paz",
                  "Cochabamba",
                  "Santa Cruz",
                  "Oruro",
                  "Potosí",
                  "Tarija",
                  "Chuquisaca",
                  "Beni",
                  "Pando"
                ]}
                name="origen"
                // value={options.origen}
                handleChange={handleChange}
              />
            )}
            {options.origen && (
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
                name="destino"
                // value={options.destino}
                handleChange={handleChange}
              />
            )}
            {/* <Select
            label="Capacidad"
            options={["Volumen (m3)", "Peso (T)"]}
            name="tipo_capacidad"
            handleChange={handleChange}
          /> */}
            {options.destino && (
              <Entrada
                label="Capacidad (T)"
                type="number"
                placeholder="Capacidad (toneladas)"
                name="capacidad"
                // value={options.capacidad}
                handleChange={handleChange}
              />
            )}
          </div>
          {options.capacidad && (
            <div className="lista">
              <h3>Ofertas disponibles</h3>
              {empresas.map((empresa) => {
                return (
                  <div key={empresa.id}>
                    <InfoEmpresa empresa={empresa} showDetails={showDetails} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default BuscarTransporte;
