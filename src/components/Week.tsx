import React from "react";
import DayBox from "./DayBox";

const Week = (props: { days: Date[]; first?: boolean; firstDay?: number }) => {
  const { days, first, firstDay } = props;
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: Date, index: number) => {
        const weekDay: string = first ? weekDays[index] : "";
        return <DayBox first={first} weekDay={weekDay} day={day} />;
      })}
    </div>
  );
};

export default Week;
