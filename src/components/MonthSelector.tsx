import React, { useContext, useEffect, useState } from "react";
import calendarContext from "../context";
import Button from "./Button";
import "./styles/MonthSelector.css";

const MonthSelector = () => {
  const { state, dispatch } = useContext(calendarContext);
  const { monthDays } = state;
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  useEffect(() => {
    const firstWeek = monthDays[0];
    let firstDay = "";
    if (firstWeek) {
      firstDay = firstWeek
        .find(({ disabled }: { disabled: boolean }) => !disabled)
        .value.toDateString();
    }
    console.log(firstDay);
    let month = "",
      year = "";
    if (firstDay) {
      const stringDateArr: string[] = firstDay.split(" ");
      month = stringDateArr[1];
      year = stringDateArr[3];
    }
    setSelectedMonth(`${month} - ${year}`);
  }, [monthDays]);
  return (
    <div className="monthSelector-container">
      <Button
        message="Prev"
        ariaLabel="Previus month"
        onClick={() => dispatch({ type: "PREV_MONTH" })}
      />
      <div className="selected-month" arial-label="testing" tabIndex={0}>
        {selectedMonth}
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
