import React from "react";
import "./styles/DayBox.css";
const DayBox = (props: {
  first?: boolean;
  weekDay?: string;
  day: Date | string;
  handleDayClick: (ev: any) => void;
}) => {
  const { day, weekDay, handleDayClick } = props;
  return (
    <div className="DayContainer" onClick={handleDayClick}>
      <small style={{ color: "grey" }}>{weekDay}</small>
      <p>{typeof day === "string" ? day : day.getDate()}</p>
    </div>
  );
};

export default DayBox;
