import React, { useContext, useReducer } from "react";
import WeekHeader from "./WeekHeader";
import MonthSelector from "./MonthSelector";
import Month from "./Month";
import { miniCalendarContext } from "../context";
import { calendarReducer } from "../reducer";
import styled from "styled-components";

const MiniCalendarContainer = styled.div`
  min-width: 300px;
  zoom: 0.8;
`;

const MiniCalendar = () => {
  const { state } = useContext(miniCalendarContext);
  const [MiniCalendarState, dispatch] = useReducer(calendarReducer, state);
  return (
    <MiniCalendarContainer>
      <miniCalendarContext.Provider
        value={{ state: MiniCalendarState, dispatch }}
      >
        <MonthSelector mini={true} context={miniCalendarContext} />
        <WeekHeader mini={true} />
        <Month
          mini={true}
          currentDate={state.currentDate}
          dispatch={dispatch}
          state={state}
        />
      </miniCalendarContext.Provider>
    </MiniCalendarContainer>
  );
};

export default MiniCalendar;
