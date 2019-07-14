import React from "react";
const uuidv1 = require("uuid/v1");
const container = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const WeekHeader = () => {
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div style={container}>
      {weekDays.map((day: string) => (
        <div key={uuidv1()}>{day}</div>
      ))}
    </div>
  );
};

export default WeekHeader;
