import React from "react";

function Checklist(props) {
  const { label, options } = props;

  return (
    <div className="entrada">
      <label>{label}</label>
      <div className="checkbox">
        {options.map((option) => (
          <div key={option.id} className="checklist">
            <input type="checkbox" name={option.id}></input>
            <div>{option.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checklist;
