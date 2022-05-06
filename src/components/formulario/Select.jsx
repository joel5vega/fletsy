import React from "react";

function Select(props) {
  const { label, value, name, options } = props;
  return (
    <div className="entrada">
      <label>{label}</label>
      <select  name={name}>
        {options.map((option, id) => (
          <option  key={option} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
