import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./styles/TimePicker.css";
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
        <Button
          message="+"
          ariaLabel="Add 5 minutes"
          onClick={() => changeMinutes(1)}
        />
        <Button
          message="-"
          ariaLabel="substract 5 minutes"
          onClick={() => changeMinutes(-1)}
        />
      </div>
    </div>
  );
};

export default TimePicker;
