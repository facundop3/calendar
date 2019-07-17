import React from "react";

const monthSelector: any = {
  currentDate: new Date()
};

const miniCalendarState: any = {
  currentDate: new Date()
};

export const monthSelectorContext = React.createContext(monthSelector);
export const miniCalendarContext = React.createContext(miniCalendarState);
