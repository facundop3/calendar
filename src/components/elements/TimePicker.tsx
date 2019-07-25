import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import { Plus } from "styled-icons/fa-solid/Plus";
import { Minus } from "styled-icons/typicons/Minus";

const TimePickerContainer = styled.div`
  display: flex;
  max-width: 80px;
`;

const TimePickerValue = styled.div`
  padding: 0.5em;
  display: flex;
  p {
    margin: 0;
  }
`;
const ControlsContainer = styled.div`
  display: inline-grid;
  zoom: 0.7;

  button {
    margin: 0;
    padding: 4px 8px;
  }
`;

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
    <TimePickerContainer>
      <TimePickerValue>
        <p>
          {hours}:{minutes}
        </p>
      </TimePickerValue>
      <ControlsContainer>
        <Button ariaLabel="Add 5 minutes" onClick={() => changeMinutes(1)}>
          <PlusIcon />
        </Button>
        <Button
          ariaLabel="substract 5 minutes"
          onClick={() => changeMinutes(-1)}
        >
          <MinusIcon />
        </Button>
      </ControlsContainer>
    </TimePickerContainer>
  );
};

export default TimePicker;
