import React from "react";
// import calendarI from "./interfaces/index";

const state: any = {
  currentMonth: new Date().getMonth(),
  showModal: false
};

const calendarContext = React.createContext(state);

export default calendarContext;
