import React, { useContext, useReducer } from "react";

import { calendarContext, miniCalendarContext } from "./context";
import calendarReducer from "./reducer";

import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "./App.css";
const App: React.FC = () => {
  const initialCalendarState = useContext(calendarContext);
  const [calendarState, calendarDispatch] = useReducer(
    calendarReducer,
    initialCalendarState
  );
  const initialMiniCalendarState = useContext(miniCalendarContext);
  const [miniCalendarState, miniCalendarDispatch] = useReducer(
    calendarReducer,
    initialMiniCalendarState
  );

  return (
    <div className="container">
      <miniCalendarContext.Provider
        value={{ state: miniCalendarState, dispatch: miniCalendarDispatch }}
      >
        <MiniCalendar context={miniCalendarContext} />
      </miniCalendarContext.Provider>
      <calendarContext.Provider
        value={{ state: calendarState, dispatch: calendarDispatch }}
      >
        <Calendar context={calendarContext} />
      </calendarContext.Provider>
    </div>
  );
};

export default App;
