import React from "react";
import Month from "./Month";
import WeekHeader from "./WeekHeader";
import { monthSelectorContext } from "../context";
import Year from "./Year";
import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;
const Calendar = () => {
  return (
    <monthSelectorContext.Consumer>
      {({ state, dispatch }: any) => {
        const currentDate = state.currentDate;
        return (
          <CalendarContainer>
            {state.calendarMode === "Month" ? (
              <React.Fragment>
                <WeekHeader />
                <Month
                  currentDate={currentDate}
                  mini={false}
                  dispatch={dispatch}
                  state={state}
                />
              </React.Fragment>
            ) : (
              <Year />
            )}
          </CalendarContainer>
        );
      }}
    </monthSelectorContext.Consumer>
  );
};

export default Calendar;
