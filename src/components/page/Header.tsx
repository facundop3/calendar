import React, { Dispatch } from "react";
import { Select, Button } from "../elements";
import { MonthSelector } from "../calendar";
import styled, { withTheme } from "styled-components";
import { CalendarAlt } from "styled-icons/fa-solid/CalendarAlt";
import { backgroundColor, textColor, oppositeBlue } from "../../theme";
import { useTheme } from "../../ThemeContext";
import { calendarState, action } from "../../interfaces";

const CalendarIcon = styled(CalendarAlt)`
  height: 40px;
  color: #3866d0;
  margin-right: 0.5em;
`;
const HeaderTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  padding-left: 0.5em;
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
const Header = (props: {
  state: calendarState;
  dispatch?: Dispatch<action>;
  theme: { mode: string };
}) => {
  const { dispatch, state } = props;
  const themeToggle: any = useTheme();
  const calendarMode = state.calendarMode;
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
        onlyYear={calendarMode === "Year"}
        mini={false}
        dispatch={dispatch}
        state={state}
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
            defaultValue={calendarMode || "Month"}
            options={["Month", "Year"]}
            handleChange={handleChange}
          />
        </div>
      </div>
    </NavBar>
  );
};
export default withTheme(Header);
