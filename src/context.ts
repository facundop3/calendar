import React from "react";
const state: any = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  showModal: false,
  currentDayId: "",
  monthDays: []
};

const calendarContext = React.createContext(state);

export default calendarContext;
