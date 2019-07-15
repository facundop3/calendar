import React, { useContext, useReducer } from "react";

import calendarContext from "./context";
import calendarReducer from "./reducer";

import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "./App.css";
const App: React.FC = () => {
  const initialState = useContext(calendarContext);
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  return (
    <calendarContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <MiniCalendar />
        <Calendar />
      </div>
    </calendarContext.Provider>
  );
};

export default App;
