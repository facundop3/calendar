import React, { useContext } from "react";
import Select from "./Select";
import { monthSelectorContext } from "../context";
import MonthSelector from "./MonthSelector";
import styled, { withTheme } from "styled-components";
import { CalendarAlt } from "styled-icons/fa-solid/CalendarAlt";
import { backgroundColor, textColor } from "../theme";
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
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <Button ariaLabel="night mode" onClick={() => themeToggle.toggle()}>
        {props.theme.mode === "dark" ? "🌝" : "🌚"}
      </Button>
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
export default withTheme(Header);
