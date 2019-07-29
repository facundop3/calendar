import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { handleEnterPress } from "../../utils/a11y";
import { textColor, hoverColor, backgroundColor } from "../../theme";
const uuidv1 = require("uuid/v1");

const SelectedOption = styled.a`
  color: ${textColor} !important;
  border-radius: 4px;
  &:hover {
    background-color: ${hoverColor} !important;
  }
  &:focus {
    background-color: ${hoverColor} !important;
  }
  &:focus-within {
    background-color: ${hoverColor} !important;
  }
`;

const OptionList = styled.div`
  background-color: ${hoverColor} !important;
`;
const OptionItem = styled.a`
  color: ${textColor} !important;
  &:hover {
    background-color: ${backgroundColor} !important;
  }
`;

const SelectContainer = styled.div`
  /* Shame-css */
  @media (max-width: 768px) {
    background-color: rebeccapurple;
    height: 40px !important;
    overflow: hidden;

    &:hover {
      height: 115px !important;
    }
    &:hover div {
      position: absolute;
    }
    &:active {
      height: 115px !important;
    }
    &:active div {
      position: absolute;
    }
  }
`;
const Select = (props: {
  options: string[];
  defaultValue: string;
  handleChange?: (p: string) => any;
}) => {
  const { defaultValue, options, handleChange } = props;
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(defaultValue);
  const handleSelect = (ev: any) => {
    setSelected(ev.target.innerText);
  };
  useEffect(() => {
    handleChange && handleChange(selected);
  }, [selected]);
  const handleClick = () => setShowOptions(!showOptions);
  return (
    <SelectContainer
      className="navbar-item has-dropdown is-hoverable"
      onClick={() => handleClick()}
      tabIndex={0}
      onKeyPress={ev => handleEnterPress(ev, handleClick)}
    >
      <SelectedOption className="navbar-link">{selected}</SelectedOption>
      <OptionList className="navbar-dropdown">
        {options.map(option => (
          <OptionItem
            className="navbar-item"
            key={uuidv1()}
            onClick={handleSelect}
            onKeyPress={ev => handleEnterPress(ev, handleSelect)}
            tabIndex={0}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </SelectContainer>
  );
};

export default Select;
