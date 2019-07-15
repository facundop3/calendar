import React, { useContext, useEffect } from "react";
import { getDaysOnMonth } from "../utils/dates";
import { chunkArray } from "../utils/arrays";
import Week from "./Week";
import { day } from "../interfaces";
const uuidv1 = require("uuid/v1");

const Month = (props: { mini?: boolean; context: any }) => {
  const calendarContext = props.context;
  const {
    state: { currentYear, currentMonth, monthDays },
    dispatch
  } = useContext(calendarContext);
  useEffect(() => {
    const monthDays: day[] = getDaysOnMonth(currentYear, currentMonth);
    const [{ value: firstDay }] = monthDays.slice(0, 1);
    const [{ value: lastDay }] = monthDays.slice(-1);
    const firstBlanks = Array(firstDay.getDay()).fill({
      value: "x",
      disabled: true
    });
    const LastBlanks = Array(6 - lastDay.getDay()).fill({
      value: "x",
      disabled: true
    });
    const blankFilledWeeks: day[][] = chunkArray(
      [...firstBlanks, ...monthDays, ...LastBlanks],
      7
    );
    dispatch({
      type: "SET_MONTH_DAYS",
      payload: { monthDays: blankFilledWeeks }
    });

    return () => console.log("Unmount");
  }, [currentMonth, currentYear, dispatch]);

  return (
    <div>
      {monthDays.map((weekDays: day[]) => (
        <Week days={weekDays} key={uuidv1()} context={calendarContext} />
      ))}
    </div>
  );
};

export default Month;
