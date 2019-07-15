import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";

const Calendar = (props: { context: any }) => {
  const { context } = props;
  return (
    <div className="Container">
      <MonthSelector context={context} />
      <WeekHeader />
      <Month context={context} />
    </div>
  );
};

export default Calendar;
