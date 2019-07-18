import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import Month from "./Month";
import { yearCalendarContext } from "../context";
import { calendarReducer } from "../reducer";
import { chunkArray } from "../utils/arrays";

const YearContainer = styled.div`
  display: flex;
`;
const FourMonths = styled.div`
  width: 100%;
`;
const Year = (props: any) => {
  const year: number = props.year ? props.year : new Date().getFullYear();
  const monthDates: Date[] = Array(12)
    .fill(1)
    .map((e, monthNumber: number) => new Date(year, monthNumber));
  const fourMonthOneElem: Date[][] = chunkArray(monthDates, 3);
  const initialState = useContext(yearCalendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialState.state);
  return (
    <yearCalendarContext.Provider value={{ state, dispatch }}>
      <YearContainer className="pipoca">
        {fourMonthOneElem.map(months => {
          return (
            <FourMonths>
              {months.map(date => (
                <Month
                  currentDate={date}
                  mini={true}
                  dispatch={dispatch}
                  state={state}
                />
              ))}
            </FourMonths>
          );
        })}
        {/* {monthDates.map(date => (
          <Month
            currentDate={date}
            mini={true}
            dispatch={dispatch}
            state={state}
          />
        ))} */}
      </YearContainer>
    </yearCalendarContext.Provider>
  );
};

export default Year;
