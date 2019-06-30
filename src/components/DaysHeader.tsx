import React from "react";

const DaysHeader: React.FC = () => {
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div style={{ display: "flex" }}>
      {weekDays.map(day => (
        <div>{day}</div>
      ))}
    </div>
  );
};

export default DaysHeader;
