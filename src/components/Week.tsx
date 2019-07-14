import React from "react";
import DayBox from "./DayBox";
import { day } from "../interfaces";

const Week = (props: { days: day[] }) => {
  const { days } = props;
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: day, index: number) => {
        return <DayBox day={day} key={day.id} index={index} />;
      })}
    </div>
  );
};

export default Week;
