import React from "react";

const monthSelector: any = {
  currentDate: new Date(),
  currentDayId: ""
};

const miniCalendarState: any = {
  currentDate: new Date(),
  currentDayId: ""
};

export const monthSelectorContext = React.createContext(monthSelector);
export const miniCalendarContext = React.createContext(miniCalendarState);
