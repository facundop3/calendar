import React from "react";

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
        <div>{day}</div>
      ))}
    </div>
  );
};

export default WeekHeader;
