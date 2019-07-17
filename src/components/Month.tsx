import React, { useEffect } from "react";
import { getDaysOnMonth } from "../utils/dates";
import { chunkArray } from "../utils/arrays";
import Week from "./Week";
import { day } from "../interfaces";
const uuidv1 = require("uuid/v1");

const Month = (props: { mini: boolean; currentDate: Date }) => {
  const { currentDate, mini } = props;
  const monthDays: day[] = getDaysOnMonth(currentDate);
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
  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <div>
      {blankFilledWeeks.map((weekDays: day[]) => (
        <Week days={weekDays} key={uuidv1()} mini={mini} />
      ))}
    </div>
  );
};

export default Month;
