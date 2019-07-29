import React, { Dispatch } from "react";
import { CalendarState, Action } from "./interfaces";

const calendarState: {
  state: CalendarState;
  dispatch?: Dispatch<Action>;
} = {
  state: localStorage.getItem("calendarState")
    ? JSON.parse(
        localStorage.getItem("calendarState") || "{calalendarMode:'Month'}"
      )
    : {
        currentDate: new Date().getTime(),
        currentDayId: 0,
        currentDateMin: new Date().getTime(),
        currentDayIdMin: 0,
        selectedDayMini: new Date().getTime(),
        calendarMode: "",
        tasks: []
      }
};

export const calendarContext = React.createContext(calendarState);
