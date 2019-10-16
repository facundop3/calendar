import React from "react";
import Month from "./Month";
import WeekHeader from "./WeekHeader";
import { calendarContext } from "../../context";
import Year from "./Year";
import styled from "styled-components";
import { CalendarState } from "../../interfaces";

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
    <calendarContext.Consumer>
      {({ state }: { state: CalendarState }) => {
        const currentDate = state.currentDate;
        return (
          <CalendarContainer>
            {state.calendarMode === "Month" ? (
              <React.Fragment>
                <WeekHeader />
                <Month currentDate={currentDate} mini={false} state={state} />
              </React.Fragment>
            ) : (
              <Year
                year={new Date(state.currentDate).getFullYear()}
                state={state}
              />
            )}
          </CalendarContainer>
        );
      }}
    </calendarContext.Consumer>
  );
};

export default Calendar;
