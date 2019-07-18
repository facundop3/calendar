import React from "react";
import { getDaysOnMonth } from "../utils/dates";
import { chunkArray } from "../utils/arrays";
import Week from "./Week";
import { day } from "../interfaces";
import styled from "styled-components";
const uuidv1 = require("uuid/v1");

const MonthContainer = styled.div`
  justify-content: space-arround;
  margin: 1em;
  width: 100%;
`;
const Month = (props: {
  mini: boolean;
  currentDate: Date;
  dispatch?: any;
  state?: any;
}) => {
  const { currentDate, mini, dispatch, state } = props;
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

  return (
    <MonthContainer>
      {blankFilledWeeks.map((weekDays: day[]) => (
        <Week
          days={weekDays}
          key={uuidv1()}
          mini={mini}
          dispatch={dispatch}
          state={state}
        />
      ))}
    </MonthContainer>
  );
};

export default Month;
