import React, { useContext } from "react";
import { getDaysOnMonth } from "../utils/dates";
import { chunkArray } from "../utils/arrays";
import Week from "./Week";

import calendarContext from "../context";

const Month = (props: { handleDayClick: (ev: any) => void }) => {
  const {
    state: { currentMonth }
  } = useContext(calendarContext);
  const { handleDayClick } = props;
  const monthDays: { value: Date; disabled: boolean }[] = getDaysOnMonth(
    2019,
    currentMonth
  );
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
  const blankFilledWeeks: { value: Date; disabled: boolean }[][] = chunkArray(
    [...firstBlanks, ...monthDays, ...LastBlanks],
    7
  );
  return (
    <div>
      {blankFilledWeeks.map(
        (weekDays: { value: Date; disabled: boolean }[]) => (
          <Week days={weekDays} handleDayClick={handleDayClick} />
        )
      )}
    </div>
  );
};

export default Month;
