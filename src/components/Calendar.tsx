import React, { useContext, useReducer } from "react";
import "./styles/calendar.css";
import Month from "./Month";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";
import { calendarContext, miniCalendarContext } from "../context";
import calendarReducer from "../reducer";

const Calendar = () => {
  const initialState = useContext(calendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialState);
  const { mini } = state;
  return (
    <calendarContext.Provider value={{ state, dispatch }}>
      <div className={`calendar-container ${mini ? "" : "flex-end"}`}>
        {mini && <MonthSelector context={calendarContext} />}
        <WeekHeader />
        <Month context={calendarContext} />
      </div>
    </calendarContext.Provider>
  );
};

export default Calendar;
