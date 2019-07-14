import React, { useContext } from "react";
import "./styles/calendar.css";
import Month from "./Month";
import Modal from "./Modal";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";
import calendarContext from "../context";

const Calendar: React.FC = () => {
  const {
    state: { showModal }
  } = useContext(calendarContext);

  return (
    <div className="Container">
      <MonthSelector />
      <WeekHeader />
      {showModal && <Modal />}
      <Month />
    </div>
  );
};

export default Calendar;
