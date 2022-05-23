import React from "react";

function Entrada(props) {
  const { label,name, type, placeholder, handleChange } = props;
  return (
    <div className="entrada">
      <label>{label}</label>
      <input
      name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Entrada;
