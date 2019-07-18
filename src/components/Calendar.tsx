import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import WeekHeader from "./WeekHeader";
import { monthSelectorContext } from "../context";
import Year from "./Year";

const Calendar = () => {
  return (
    <monthSelectorContext.Consumer>
      {({ state, dispatch }: any) => {
        const currentDate = state.currentDate;
        return (
          <div className="calendar-container flex-end">
            <Year />
          </div>
          // <div className={`calendar-container flex-end`}>
          //   <WeekHeader />
          //   <Month
          //     currentDate={currentDate}
          //     mini={false}
          //     dispatch={dispatch}
          //     state={state}
          //   />
          // </div>
        );
      }}
    </monthSelectorContext.Consumer>
  );
};

export default Calendar;
