import React, { Dispatch } from "react";
import { calendarState, action } from "./interfaces";

const monthSelector: { state: calendarState; dispatch?: Dispatch<action> } = {
  state: {
    currentDate: new Date(),
    currentDayId: "",
    calendarMode: "",
    tasks: []
  }
};

const miniCalendarState: {
  state: calendarState;
  dispatch?: Dispatch<action>;
} = {
  state: {
    currentDate: new Date(),
    currentDayId: "",
    calendarMode: "",
    tasks: []
  }
};

export const monthSelectorContext = React.createContext(monthSelector);
export const miniCalendarContext = React.createContext(miniCalendarState);
