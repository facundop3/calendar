import React, { useContext, useReducer, useEffect } from "react";
import "./styles/Header.css";
import Select from "./Select";
import { calendarContext } from "../context";
import MonthSelector from "./MonthSelector";
import styled from "styled-components";
import { CalendarAlt } from "styled-icons/fa-solid/CalendarAlt";
import calendarReducer from "../reducer";

const CalendarIcon = styled(CalendarAlt)`
  height: 40px;
  color: #3866d0;
  margin-right: 0.5em;
`;
const HeaderTitle = styled.div`
  display: inline-flex;
`;
const Title = styled.h2`
  margin: 0;
  font-family: sans-serif;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const initialState = useContext(calendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialState);
  const handleChange = (calendarMode: string) => {
    dispatch({ type: "CHANGE_CALENDAR_MODE", payload: { calendarMode } });
  };
  return (
    <header className="header-container">
      <div>
        <HeaderTitle>
          <CalendarIcon />
          <Title>Calendar</Title>
        </HeaderTitle>
      </div>
      <calendarContext.Provider value={{ state, dispatch }}>
        <MonthSelector context={calendarContext} />
        <Select
          defaultValue="Month"
          options={["Month", "Year"]}
          handleChange={handleChange}
        />
      </calendarContext.Provider>
    </header>
  );
};
export default Header;
