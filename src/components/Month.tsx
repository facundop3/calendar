import React from "react";
import { getDaysOnMonth } from "../utils/dates";
import { chunkArray } from "../utils/arrays";
import Week from "./Week";
const Month = (props: { handleDayClick: (ev: any) => void }) => {
  const { handleDayClick } = props;
  const monthDays: Date[] = getDaysOnMonth(2019, 1);
  const [firstDay] = monthDays.slice(0, 1);
  const [lastDay] = monthDays.slice(-1);
  const firstBlanks = Array(firstDay.getDay()).fill("x");
  const LastBlanks = Array(6 - lastDay.getDay()).fill("x");
  const blankFilledWeeks: Date[][] = chunkArray(
    [...firstBlanks, ...monthDays, ...LastBlanks],
    7
  );
  return (
    <div>
      {blankFilledWeeks.map((weekDays: Date[], index: number) => (
        <Week
          first={!Boolean(index)}
          days={weekDays}
          handleDayClick={handleDayClick}
        />
      ))}
    </div>
  );
};

export default Month;
