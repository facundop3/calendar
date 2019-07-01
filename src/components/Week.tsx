import React from "react";
import DayBox from "./DayBox";

const Week = (props: {
  days: Date[];
  first?: boolean;
  handleDayClick: (ev: any) => void;
}) => {
  const { days, first, handleDayClick } = props;
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: Date, index: number) => {
        const weekDay: string = first ? weekDays[index] : "";
        return (
          <DayBox
            first={first}
            weekDay={weekDay}
            day={day}
            handleDayClick={handleDayClick}
          />
        );
      })}
    </div>
  );
};

export default Week;
