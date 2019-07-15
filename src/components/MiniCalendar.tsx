import React from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import "./styles/MiniCalendar.css";
const MiniCalendar = (props: { context: any }) => {
  const { context } = props;
  return (
    <div className="mini-calendar">
      <MonthSelector mini={true} context={context} />
      <WeekHeader mini={true} />
      <Month mini={true} context={context} />
    </div>
  );
};

export default MiniCalendar;
