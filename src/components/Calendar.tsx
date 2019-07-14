import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";

const Calendar: React.FC = () => {
  return (
    <div className="Container">
      <MonthSelector />
      <WeekHeader />
      <Month />
    </div>
  );
};

export default Calendar;
