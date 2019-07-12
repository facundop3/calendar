import React from "react";
import "./styles/DayBox.css";
const DayBox = (props: {
  weekDay?: string;
  day: { value: Date; disabled: boolean };
  handleDayClick: (ev: any) => void;
}) => {
  const {
    day: { value, disabled },
    weekDay,
    handleDayClick
  } = props;
  return (
    <div
      className="DayContainer"
      onClick={handleDayClick}
      tabIndex={0}
      aria-disabled={disabled}
    >
      <small style={{ color: "grey" }}>{weekDay}</small>
      <p aria-label={!disabled ? value.toDateString() : ""}>
        {disabled ? value : value.getDate()}
      </p>
    </div>
  );
};

export default DayBox;
