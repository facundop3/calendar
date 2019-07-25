import React from "react";
const uuidv1 = require("uuid/v1");
const container = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%"
};

const WeekHeader = (props: { mini?: boolean }) => {
  const { mini } = props;
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div style={container}>
      {weekDays.map((day: string) => (
        <div key={uuidv1()}>{mini ? day[0] : day}</div>
      ))}
    </div>
  );
};

export default WeekHeader;
