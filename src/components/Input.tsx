import React from "react";
import "./styles/Input.css";
const Input = (props: {
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
}) => {
  const handleInputClick = (ev: any) => {
    ev.target.focus();
  };
  const { label, placeholder, type, required } = props;
  return (
    <label className="input-container">
      <small>{label}</small>
      <input
        placeholder={placeholder}
        type={type}
        aria-required={required}
        onClick={handleInputClick}
      />
    </label>
  );
};

export default Input;
