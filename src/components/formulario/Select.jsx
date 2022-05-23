import React from "react";

function Select(props) {
  const { label, value, name, options, handleChange } = props;
  return (
    <div className="entrada">
      <label>{label}</label>
      <select name={name} onChange={handleChange} value={value}>
        <option>Seleccione</option>
        {options.map((option, id) => (
          <option key={option} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
