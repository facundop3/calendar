import React from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import { calendarContext } from "../../context";
import styled from "styled-components";

const MiniCalendarContainer = styled.div`
  min-width: 300px;
  zoom: 0.8;
`;

const MiniCalendar = () => {
  return (
    <MiniCalendarContainer>
      <calendarContext.Consumer>
        {({ state, dispatch }) => (
          <React.Fragment>
            <MonthSelector mini={true} dispatch={dispatch} state={state} />
            <WeekHeader mini={true} />
            <Month
              mini={true}
              currentDate={state.currentDateMin}
              state={state}
            />
          </React.Fragment>
        )}
      </calendarContext.Consumer>
    </MiniCalendarContainer>
  );
};

export default MiniCalendar;
