import React from "react";

const TextInput = ({ inputProps, onChange, value, label }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input onChange={onChange} value={value} {...inputProps} />
    </div>
  );
};

export default TextInput;
