import React from "react";
import "./styles/DayBox.css";
const DayBox = (props: {
  first?: boolean;
  weekDay?: string;
  day: Date | string;
}) => {
  const { day, weekDay } = props;
  return (
    <div className="DayContainer">
      <small style={{ color: "grey" }}>{weekDay}</small>
      <p>{typeof day === "string" ? day : day.getDate()}</p>
    </div>
  );
};

export default DayBox;
