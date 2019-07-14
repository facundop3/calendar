import React, { useContext } from "react";
import "./styles/DayBox.css";
import calendarContext from "../context";
const DayBox = (props: {
  weekDay?: string;
  day: { value: Date; disabled: boolean };
}) => {
  const {
    day: { value, disabled },
    weekDay
  } = props;
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  const {
    state: { showModal },
    dispatch
  } = useContext(calendarContext);
  const toggleModal = (ev: any) => {
    dispatch({ type: "TOGGLE_MODAL" });
  };
  const handleEnterPress = (ev: any) => {
    if (ev.key === "Enter") {
      return toggleModal(ev);
    }
  };
  return (
    <div
      className="DayContainer"
      onClick={toggleModal}
      onKeyPress={handleEnterPress}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <small style={{ color: "grey" }}>{weekDay}</small>
      <p aria-label={!disabled ? value.toDateString() : ""}>
        {disabled ? value : value.getDate()}
      </p>
    </div>
  );
};

export default DayBox;
