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
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  return (
    <div
      className="DayContainer"
      onClick={handleDayClick}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <small style={{ color: "grey" }}>{weekDay}</small>
      <p aria-label={!disabled ? value.toDateString() : ""}>
        {disabled ? value : value.getDate()}
      </p>
    </div>
  );
};

export default DayBox;
