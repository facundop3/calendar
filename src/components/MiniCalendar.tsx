import React from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import "./styles/MiniCalendar.css";
const MiniCalendar = () => {
  return (
    <div className="mini-calendar">
      <MonthSelector mini={true} />
      <WeekHeader mini={true} />
      <Month mini={true} />
    </div>
  );
};

export default MiniCalendar;
