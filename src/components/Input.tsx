import React from "react";
import "./styles/Input.css";
const Input = (props: {
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
}) => {
  const { label, placeholder, type, required } = props;
  return (
    <label className="input-container">
      <small>{label}</small>
      <input placeholder={placeholder} type={type} aria-required={required} />
    </label>
  );
};

export default Input;
