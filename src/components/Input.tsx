import React from "react";
import "./styles/Input.css";
const Input = (props: {
  label: string;
  placeholder?: string;
  type: string;
}) => {
  const { label, placeholder, type } = props;
  return (
    <label className="input-container">
      <small>{label}</small>
      <input placeholder={placeholder} type={type} />
    </label>
  );
};

export default Input;
