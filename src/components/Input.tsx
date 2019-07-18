import React from "react";
import "./styles/Input.css";
const Input = (props: {
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  value?: string;
  handleChange?: (ev: any) => any;
}) => {
  const handleInputClick = (ev: any) => {
    ev.target.focus();
  };
  const { label, placeholder, type, required, value, handleChange } = props;
  const onChange = (ev: any) => {
    handleChange && handleChange(ev.target.value);
  };
  return (
    <label className="input-container">
      <small>{label}</small>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        aria-required={required}
        onClick={handleInputClick}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
