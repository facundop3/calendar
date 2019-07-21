import React, { Dispatch } from "react";
import { calendarState, action } from "./interfaces";

const monthSelector: { state: calendarState; dispatch?: Dispatch<action> } = {
  state: localStorage.getItem("calendarMode")
    ? JSON.parse(
        localStorage.getItem("calendarMode") || "{calalendarMode:'Month'}"
      )
    : {
        currentDate: new Date().getTime(),
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
    currentDate: new Date().getTime(),
    currentDayId: "",
    calendarMode: "",
    tasks: []
  }
};

const yearCalendarState: {
  state: calendarState;
  dispatch?: Dispatch<action>;
} = {
  state: {
    currentDate: new Date().getTime(),
    currentDayId: "",
    calendarMode: "",
    tasks: []
  }
};

export const monthSelectorContext = React.createContext(monthSelector);
export const miniCalendarContext = React.createContext(miniCalendarState);
export const yearCalendarContext = React.createContext(yearCalendarState);
