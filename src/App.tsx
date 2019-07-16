import React, { useContext, useReducer } from "react";

// import { calendarContext, miniCalendarContext } from "./context";
import calendarReducer from "./reducer";

import Header from "./components/Header";
import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "./App.css";
const App: React.FC = () => {
  // const initialCalendarState = useContext(calendarContext);
  // const [calendarState, calendarDispatch] = useReducer(
  //   calendarReducer,
  //   initialCalendarState
  // );

  return (
    // <React.Fragment>
    <div className="container">
      {/* <calendarContext.Provider
          value={{ state: calendarState, dispatch: calendarDispatch }}
        > */}
      <Header />
      {/* </calendarContext.Provider> */}
      <div className="content-container">
        <div className="left-side">
          <MiniCalendar />
        </div>
        {/* <calendarContext.Provider
            value={{ state: calendarState, dispatch: calendarDispatch }}
          > */}
        <Calendar />
        {/* </calendarContext.Provider> */}
      </div>
    </div>
    // </React.Fragment>
  );
};

export default App;
