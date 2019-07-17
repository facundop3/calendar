import React, { useContext } from "react";
import "./styles/DayBox.css";
import { day as iday } from "../interfaces";
import Modal from "./Modal";
import { handleEnterPress } from "../utils/a11y";

const DayBox = (props: {
  weekDay?: string;
  day: iday;
  index: number;
  mini: boolean;
  dispatch: any;
  state: any;
}) => {
  const {
    day: { value, disabled, id },
    day,
    index,
    mini,
    dispatch,
    state: { currentDayId }
  } = props;
  const tabIndex = disabled ? {} : { tabIndex: 0 };

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
        className={mini ? "hover-date" : ""}
      >
        {disabled ? value : value.getDate()}
      </p>
      {!disabled && currentDayId === id && (
        <Modal dayIndex={index} day={day} dispatch={dispatch} />
      )}
    </div>
  );
};

export default DayBox;
