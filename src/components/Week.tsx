import React from "react";
import DayBox from "./DayBox";
import { day } from "../interfaces";

const Week = (props: { days: day[]; mini: boolean }) => {
  const { days, mini } = props;

  return (
    <div style={{ display: "flex" }}>
      {days.map((day: day, index: number) => {
        return <DayBox day={day} key={day.id} index={index} mini={mini} />;
      })}
    </div>
  );
};

export default Week;
