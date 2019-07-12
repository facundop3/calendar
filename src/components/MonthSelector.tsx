import React, { useContext } from "react";
import calendarContext from "../context";

import Button from "./Button";
import "./styles/MonthSelector.css";

const MonthSelector = () => {
  const { state, dispatch } = useContext(calendarContext);
  const { currentMonth } = state;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <div className="monthSelector-container">
      <Button
        message="Prev"
        ariaLabel="Previus month"
        onClick={() => dispatch({ type: "PREV_MONTH" })}
      />
      <div className="selected-month" arial-label="testing" tabIndex={0}>
        {months[currentMonth]}
      </div>
      <Button
        message="Next"
        ariaLabel="Next month"
        onClick={() => dispatch({ type: "NEXT_MONTH" })}
      />
    </div>
  );
};

export default MonthSelector;
