import React, { useContext } from "react";
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
  const {
    dispatch,
    state: { calendarMode }
  } = useContext(monthSelectorContext);
  const handleChange = (calendarMode: string) => {
    dispatch &&
      dispatch({ type: "CHANGE_CALENDAR_MODE", payload: { calendarMode } });
  };
  return (
    <nav
      className="navbar"
      style={{ borderBottom: ".5px solid grey", marginBottom: "1em" }}
    >
      <div className="navbar-brand">
        <HeaderTitle>
          <CalendarIcon />
          <Title>Calendar</Title>
        </HeaderTitle>
      </div>

      <MonthSelector
        context={monthSelectorContext}
        onlyYear={calendarMode === "Year"}
      />
      <div className="navbar-end">
        <div className="navbar-item">
          <Select
            defaultValue="Month"
            options={["Month", "Year"]}
            handleChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
};
export default Header;
