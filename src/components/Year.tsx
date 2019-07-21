import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import Month from "./Month";
import { yearCalendarContext } from "../context";
import { calendarReducer } from "../reducer";
import { chunkArray } from "../utils/arrays";
import WeekHeader from "./WeekHeader";
const uuidv1 = require("uuid/v1");

const FourMonths = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MonthTitle = styled.p`
  width: 100%;
  padding-left: 1.5em;
`;

const MonthCalendar = styled.div`
  width: 320px;
`;
const Year = () => {
  const initialState = useContext(yearCalendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialState.state);
  const year: number = new Date(state.currentDate).getFullYear();
  const monthDates: Date[] = Array(12)
    .fill(1)
    .map((e, monthNumber: number) => new Date(year, monthNumber));
  const fourMonthOneElem: Date[][] = chunkArray(monthDates, 4);
  return (
    <yearCalendarContext.Provider value={{ state, dispatch }}>
      <div>
        {fourMonthOneElem.map(months => {
          return (
            <FourMonths key={uuidv1()}>
              {months.map(date => (
                <MonthCalendar key={uuidv1()}>
                  <MonthTitle>{date.toDateString().split(" ")[1]}</MonthTitle>
                  <WeekHeader mini={true} />
                  <Month
                    currentDate={date.getTime()}
                    mini={true}
                    dispatch={dispatch}
                    state={state}
                  />
                </MonthCalendar>
              ))}
            </FourMonths>
          );
        })}
      </div>
    </yearCalendarContext.Provider>
  );
};

export default Year;
