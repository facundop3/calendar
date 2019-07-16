import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./styles/TimePicker.css";
import styled from "styled-components";
import { Plus } from "styled-icons/fa-solid/Plus";
import { Minus } from "styled-icons/typicons/Minus";

const PlusIcon = styled(Plus)`
  height: 15px;
`;

const MinusIcon = styled(Minus)`
  height: 15px;
`;
const TimePicker = (props: { date: Date; handleChange?: any }) => {
  const { date, handleChange } = props;
  const [currentTime, setCurrentTime] = useState<Date>(date);
  const [hours, minutes] = currentTime.toTimeString().split(":");
  const changeMinutes = (sign: number) => {
    const fiveMinutesInMiliseconds = sign * 5 * 60000;
    setCurrentTime(new Date(currentTime.getTime() + fiveMinutesInMiliseconds));
  };
  useEffect(() => {
    handleChange && handleChange(currentTime);
  }, [currentTime, handleChange]);
  return (
    <div className="timepicker-container">
      <div className="timepicker-value">
        <p>
          {hours}:{minutes}
        </p>
      </div>
      <div className="up-down-controls">
        <Button ariaLabel="Add 5 minutes" onClick={() => changeMinutes(1)}>
          <PlusIcon />
        </Button>
        <Button
          ariaLabel="substract 5 minutes"
          onClick={() => changeMinutes(-1)}
        >
          <MinusIcon />
        </Button>
      </div>
    </div>
  );
};

export default TimePicker;
