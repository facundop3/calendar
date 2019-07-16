import React, { useContext } from "react";
import "./styles/calendar.css";
import Month from "./Month";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";

const Calendar = (props: { context: any }) => {
  const { context } = props;
  const {
    state: { mini }
  } = useContext(context);
  return (
    <div className={`calendar-container ${mini ? "" : "flex-end"}`}>
      {mini && <MonthSelector context={context} />}
      <WeekHeader />
      <Month context={context} />
    </div>
  );
};

export default Calendar;
