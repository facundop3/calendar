import React, { Dispatch } from "react";
import { calendarState as calendarStateInterface, action } from "./interfaces";

const calendarState: {
  state: calendarStateInterface;
  dispatch?: Dispatch<action>;
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
