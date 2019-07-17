import React from "react";
import DayBox from "./DayBox";
import { day } from "../interfaces";

const Week = (props: {
  days: day[];
  mini: boolean;
  dispatch: any;
  state: any;
}) => {
  const { days, mini, dispatch, state } = props;

  return (
    <div style={{ display: "flex" }}>
      {days.map((day: day, index: number) => {
        return (
          <DayBox
            day={day}
            key={day.id}
            index={index}
            mini={mini}
            dispatch={dispatch}
            state={state}
          />
        );
      })}
    </div>
  );
};

export default Week;
