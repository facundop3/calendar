import React, { useContext } from "react";
import "./styles/Header.css";
import Select from "./Select";
import { calendarContext } from "../context";
import MonthSelector from "./MonthSelector";

const Header = () => {
  const { dispatch } = useContext(calendarContext);
  const handleChange = (calendarMode: string) => {
    dispatch({ type: "CHANGE_CALENDAR_MODE", payload: { calendarMode } });
  };
  return (
    <header className="header-container">
      Header
      <MonthSelector context={calendarContext} />
      <Select
        defaultValue="Month"
        options={["Month", "Year"]}
        handleChange={handleChange}
      />
    </header>
  );
};
export default Header;
