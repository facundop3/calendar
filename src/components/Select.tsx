import React, { useState, useEffect } from "react";
import { DownArrow } from "styled-icons/boxicons-solid/DownArrow";
import styled from "styled-components";
import { handleEnterPress } from "../utils/a11y";
const uuidv1 = require("uuid/v1");

const Arrow = styled(DownArrow)`
  height: 15px;
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
    <div
      className="navbar-item has-dropdown is-hoverable"
      onClick={() => handleClick()}
      tabIndex={0}
      onKeyPress={ev => handleEnterPress(ev, handleClick)}
    >
      <a className="navbar-link">{selected}</a>
      <div className="navbar-dropdown">
        {options.map(option => (
          <a
            className="navbar-item"
            key={uuidv1()}
            onClick={handleSelect}
            onKeyPress={ev => handleEnterPress(ev, handleSelect)}
            tabIndex={0}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Select;
