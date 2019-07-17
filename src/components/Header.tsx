import React, { useContext } from "react";
import "./styles/Header.css";
import Select from "./Select";
import { monthSelectorContext } from "../context";
import MonthSelector from "./MonthSelector";
import styled from "styled-components";
import { CalendarAlt } from "styled-icons/fa-solid/CalendarAlt";

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
  const { dispatch } = useContext(monthSelectorContext);
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

      <MonthSelector context={monthSelectorContext} />
      <Select
        defaultValue="Month"
        options={["Month", "Year"]}
        handleChange={handleChange}
      />
    </header>
  );
};
export default Header;
