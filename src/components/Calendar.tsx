import React, { useState } from "react";
import "./styles/calendar.css";
import Month from "./Month";
import Modal from "./Modal";

const Calendar: React.FC = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  const handleDayClick = (ev: Event) => {
    console.log(ev);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="Container">
      {showModal && <Modal closeModal={closeModal} />}
      <Month handleDayClick={handleDayClick} />
    </div>
  );
};

export default Calendar;
