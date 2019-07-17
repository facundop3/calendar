import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import WeekHeader from "./WeekHeader";
import { monthSelectorContext } from "../context";

const Calendar = () => {
  return (
    <monthSelectorContext.Consumer>
      {({ state }: any) => {
        const currentDate = state.currentDate;
        return (
          <div className={`calendar-container flex-end`}>
            <WeekHeader />
            <Month currentDate={currentDate} mini={false} />
          </div>
        );
      }}
    </monthSelectorContext.Consumer>
  );
};

export default Calendar;
