import React from 'react'

import Entrada from "../formulario/Entrada";
import Select from "../formulario/Select";
import Checklist from "../formulario/Checklist";
import DataBolivia from "../../data/DataBolivia";
import "./transporte.css";

function RegistroTransporte() {
  const departamentos = DataBolivia.departamentos;
  return (
    <section>
      <div className="transporte">
        <h1>Registrar</h1>

        <Entrada
          label="Nombre de la empresa"
          name="nombre"
          type="text"
          placeholder="Nombre de la empresa"
        />
        <Entrada
          label="Email corporativo"
          name="email"
          type="email"
          placeholder="email"
        />
        <Entrada label="NIT" name="nit" type="text" placeholder="NIT" />
        <Select
          label="Razón social"
          name="social"
          type="text"
          placeholder="Razón social"
          options={[1, 2, 3]}
        />
        <Entrada
          label="Celular"
          name="celular"
          type="text"
          placeholder="Celular"
        />
        <Entrada
          label="Dirección"
          name="direccion"
          type="text"
          placeholder="Dirección"
        />
        <Checklist label="Sucursales/Paradas" options={departamentos} />
        <Entrada label="#OEA" name="oea" type="text" placeholder="OEA" />
        <div className="boton__secundario" type="submit">Guardar</div>
      </div>
    </section>
  );
}

export default RegistroTransporte