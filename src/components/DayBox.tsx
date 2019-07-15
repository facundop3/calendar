import React, { useContext } from "react";
import "./styles/DayBox.css";
import calendarContext from "../context";
import { day as iday } from "../interfaces";
import Modal from "./Modal";
const DayBox = (props: { weekDay?: string; day: iday; index: number }) => {
  const {
    day: { value, disabled, id },
    day,
    index
  } = props;
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  const {
    dispatch,
    state: { currentDayId }
  } = useContext(calendarContext);
  const toggleModal = (ev: any) => {
    if (!disabled) {
      dispatch({ type: "TOGGLE_MODAL", payload: { dayId: id } });
    }
  };
  const handleEnterPress = (ev: any) => {
    if (ev.key === "Enter") {
      return toggleModal(ev);
    }
  };
  return (
    <div
      style={{ position: "relative" }}
      className="DayContainer"
      onClick={toggleModal}
      onKeyPress={handleEnterPress}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <p aria-label={!disabled ? value.toDateString() : ""}>
        {disabled ? value : value.getDate()}
      </p>
      {!disabled && currentDayId === id && <Modal dayIndex={index} day={day} />}
    </div>
  );
};

export default DayBox;
