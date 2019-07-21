import React from "react";
import DayBox from "./DayBox";
import { day } from "../interfaces";
const uuidv1 = require("uuid/v1");

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
            key={uuidv1()}
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
