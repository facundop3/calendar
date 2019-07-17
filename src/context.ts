import React from "react";

const monthSelector: any = {
  currentDate: new Date(),
  currentDayId: "",
  tasks: []
};

const miniCalendarState: any = {
  currentDate: new Date(),
  currentDayId: "",
  tasks: []
};

export const monthSelectorContext = React.createContext(monthSelector);
export const miniCalendarContext = React.createContext(miniCalendarState);
