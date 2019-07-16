import React, { useState, useEffect } from "react";
import "./styles/Select.css";
import { DownArrow } from "styled-icons/boxicons-solid/DownArrow";
import styled from "styled-components";
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

  return (
    <div
      className="select-container"
      onClick={() => setShowOptions(!showOptions)}
    >
      {selected} <Arrow />
      <div>
        <ul className={`hide-options ${showOptions ? "show-options" : ""}`}>
          {options.map(option => (
            <li
              key={uuidv1()}
              onClick={handleSelect}
              className={selected === option ? "selected-option" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
