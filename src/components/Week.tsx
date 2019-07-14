import React from "react";
import DayBox from "./DayBox";
const uuidv1 = require("uuid/v1");

const Week = (props: { days: { value: Date; disabled: boolean }[] }) => {
  const { days } = props;
  return (
    <div style={{ display: "flex" }}>
      {days.map((day: { value: Date; disabled: boolean }) => {
        return <DayBox day={day} key={uuidv1()} />;
      })}
    </div>
  );
};

export default Week;
