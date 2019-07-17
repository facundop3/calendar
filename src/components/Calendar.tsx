import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import WeekHeader from "./WeekHeader";
import { monthSelectorContext } from "../context";

const Calendar = () => {
  return (
    <monthSelectorContext.Consumer>
      {({ state, dispatch }: any) => {
        const currentDate = state.currentDate;
        return (
          <div className={`calendar-container flex-end`}>
            <WeekHeader />
            <Month
              currentDate={currentDate}
              mini={false}
              dispatch={dispatch}
              state={state}
            />
          </div>
        );
      }}
    </monthSelectorContext.Consumer>
  );
};

export default Calendar;
