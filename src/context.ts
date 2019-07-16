import React from "react";
const calendarState: any = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentDayId: "",
  monthDays: [],
  mini: false,
  calendarMode: ""
};
const miniCalendarState: any = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentDayId: "",
  monthDays: [],
  mini: true
};

export const calendarContext = React.createContext(calendarState);
export const miniCalendarContext = React.createContext(miniCalendarState);
