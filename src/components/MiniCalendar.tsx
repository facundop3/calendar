import React, { useContext, useReducer } from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import "./styles/MiniCalendar.css";
import { miniCalendarContext } from "../context";
import { calendarReducer } from "../reducer";

const MiniCalendar = () => {
  const { state } = useContext(miniCalendarContext);
  const [MiniCalendarState, dispatch] = useReducer(calendarReducer, state);
  return (
    <div className="mini-calendar">
      <miniCalendarContext.Provider
        value={{ state: MiniCalendarState, dispatch }}
      >
        <MonthSelector mini={true} context={miniCalendarContext} />
        <WeekHeader mini={true} />
        <Month
          mini={true}
          currentDate={state.currentDate}
          dispatch={dispatch}
          state={state}
        />
      </miniCalendarContext.Provider>
    </div>
  );
};

export default MiniCalendar;
