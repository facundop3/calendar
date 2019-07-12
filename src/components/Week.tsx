import React from "react";
import DayBox from "./DayBox";

const Week = (props: {
  days: { value: Date; disabled: boolean }[];
  handleDayClick: (ev: any) => void;
}) => {
  const { days, handleDayClick } = props;
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: { value: Date; disabled: boolean }) => {
        return <DayBox day={day} handleDayClick={handleDayClick} />;
      })}
    </div>
  );
};

export default Week;
