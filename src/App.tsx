import React, { useContext, useReducer } from "react";
import { monthSelectorContext } from "./context";
import { calendarReducer } from "./reducer";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "./App.css";

const App: React.FC = () => {
  const { state } = useContext(monthSelectorContext);
  const [monthSelectorState, monthSelectorDispatcher] = useReducer(
    calendarReducer,
    state
  );

  return (
    <div className="container">
      <monthSelectorContext.Provider
        value={{
          state: monthSelectorState,
          dispatch: monthSelectorDispatcher
        }}
      >
        <Header />
        <div className="content-container">
          <div className="left-side">
            <MiniCalendar />
          </div>
          <Calendar />
        </div>
      </monthSelectorContext.Provider>
    </div>
  );
};

export default App;
