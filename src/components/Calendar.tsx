import React, { useState } from "react";
import "./styles/calendar.css";
import Month from "./Month";
import Modal from "./Modal";
import MonthSelector from "./MonthSelector";
import WeekHeader from "./WeekHeader";

const Calendar: React.FC = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  const handleDayClick = (ev: Event) => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="Container">
      <MonthSelector />
      <WeekHeader />
      {showModal && <Modal closeModal={closeModal} />}
      <Month handleDayClick={handleDayClick} />
    </div>
  );
};

export default Calendar;
