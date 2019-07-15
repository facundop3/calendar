import React, { useEffect } from "react";
import DayBox from "./DayBox";
import { day } from "../interfaces";

const Week = (props: { days: day[]; context: any }) => {
  const { days, context } = props;
  useEffect(() => {
    console.log("Week mounted");
    return () => console.log("Unmount week");
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: day, index: number) => {
        return (
          <DayBox day={day} key={day.id} index={index} context={context} />
        );
      })}
    </div>
  );
};

export default Week;
