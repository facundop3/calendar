import React from "react";
import DayBox from "./DayBox";
import { Day } from "../../interfaces";
import { calendarContext } from "../../context";
const uuidv1 = require("uuid/v1");

const Week = (props: { days: Day[]; mini: boolean }) => {
  const { days, mini } = props;

  return (
    <calendarContext.Consumer>
      {({ dispatch, state }) => (
        <div style={{ display: "flex" }}>
          {days.map((day: Day, index: number) => {
            return (
              <DayBox
                day={day}
                key={uuidv1()}
                index={index}
                mini={mini}
                state={state}
                dispatch={dispatch}
              />
            );
          })}
        </div>
      )}
    </calendarContext.Consumer>
  );
};

export default Week;
