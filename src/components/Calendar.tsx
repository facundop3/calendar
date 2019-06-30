import React from "react";
import "./styles/calendar.css";
import Month from "./Month";
import Modal from "./Modal";
const Calendar: React.FC = () => {
  return (
    <div className="Container">
      <Modal />
      <Month />
    </div>
  );
};

export default Calendar;
