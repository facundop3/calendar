import React, { useContext } from "react";
import "./styles/DayBox.css";
import { day as iday } from "../interfaces";
import Modal from "./Modal";
import { handleEnterPress } from "../utils/a11y";
const DayBox = (props: {
  weekDay?: string;
  day: iday;
  index: number;
  context: any;
}) => {
  const {
    day: { value, disabled, id },
    day,
    index
  } = props;
  const calendarContext = props.context;
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  const {
    dispatch,
    state: { currentDayId, mini }
  } = useContext(calendarContext);
  const toggleModal = (ev: any) => {
    if (!disabled) {
      dispatch({ type: "TOGGLE_MODAL", payload: { dayId: id } });
    }
  };
  return (
    <div
      style={{ position: "relative" }}
      className={`DayContainer ${mini ? "no-border" : "big-boxes"}`}
      onClick={toggleModal}
      onKeyPress={ev => handleEnterPress(ev, toggleModal)}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <p
        aria-label={!disabled ? value.toDateString() : ""}
        className={mini && "hover-date"}
      >
        {disabled ? value : value.getDate()}
      </p>
      {!disabled && currentDayId === id && (
        <Modal dayIndex={index} day={day} context={calendarContext} />
      )}
    </div>
  );
};

export default DayBox;
