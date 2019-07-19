import React, { useContext } from "react";
import Select from "./Select";
import { monthSelectorContext } from "../context";
import MonthSelector from "./MonthSelector";
import styled, { withTheme } from "styled-components";
import { CalendarAlt } from "styled-icons/fa-solid/CalendarAlt";
import { backgroundColor, textColor, oppositeBlue } from "../theme";
import { useTheme } from "../ThemeContext";
import Button from "./Button";

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
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.nav`
  border-bottom: 0.5px solid ${textColor};
  margin-bottom: "1em";
  background-color: ${backgroundColor} !important;
  display: flex;
  align-items: center !important;
  justify-content: center;
`;
const Sky = styled.div`
  background-color: ${oppositeBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  max-height: 40px;
  max-width: 40px;
`;
const Header = (props: any) => {
  const themeToggle: any = useTheme();

  const {
    dispatch,
    state: { calendarMode }
  } = useContext(monthSelectorContext);
  const handleChange = (calendarMode: string) => {
    dispatch &&
      dispatch({ type: "CHANGE_CALENDAR_MODE", payload: { calendarMode } });
  };
  return (
    <NavBar className="navbar">
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
      <Sky>
        <Button
          ariaLabel="night mode"
          onClick={() => themeToggle.toggle()}
          bg="transparent"
        >
          {props.theme.mode === "dark" ? "🌝" : "🌚"}
        </Button>
      </Sky>
      <div className="navbar-end">
        <div className="navbar-item">
          <Select
            defaultValue="Month"
            options={["Month", "Year"]}
            handleChange={handleChange}
          />
        </div>
      </div>
    </NavBar>
  );
};
export default withTheme(Header);
