import React from "react";
const calendarState: any = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentDayId: "",
  monthDays: []
};
const miniCalendarState: any = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentDayId: "",
  monthDays: []
};

export const calendarContext = React.createContext(calendarState);
export const miniCalendarContext = React.createContext(miniCalendarState);
