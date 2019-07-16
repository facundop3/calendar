import React, { useContext, useReducer } from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import "./styles/MiniCalendar.css";
import { miniCalendarContext } from "../context";
import calendarReducer from "../reducer";

const MiniCalendar = () => {
  const initialCalendarState = useContext(miniCalendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialCalendarState);
  return (
    <div className="mini-calendar">
      <miniCalendarContext.Provider value={{ state, dispatch }}>
        <MonthSelector mini={true} context={miniCalendarContext} />
        <WeekHeader mini={true} />
        <Month mini={true} context={miniCalendarContext} />
      </miniCalendarContext.Provider>
    </div>
  );
};

export default MiniCalendar;
