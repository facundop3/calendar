import React from "react";
import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
`;
const InputDescription = styled.small`
  color: gray;
`;
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
    <InputContainer>
      <InputDescription>{label}</InputDescription>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        aria-required={required}
        onClick={handleInputClick}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
