import React, { useContext, useReducer } from "react";
import { monthSelectorContext } from "./context";
import { calendarReducer } from "./reducer";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "../node_modules/bulma/css/bulma.min.css";
import "./App.css";
const App: React.FC = () => {
  const { state } = useContext(monthSelectorContext);
  const [monthSelectorState, monthSelectorDispatcher] = useReducer(
    calendarReducer,
    state
  );

  return (
    <div>
      <monthSelectorContext.Provider
        value={{
          state: monthSelectorState,
          dispatch: monthSelectorDispatcher
        }}
      >
        <Header />
        <div>
          <div className="content-container" style={{ padding: ".5em" }}>
            <div className="left-side">
              <MiniCalendar />
            </div>
            <Calendar />
          </div>
        </div>
      </monthSelectorContext.Provider>
    </div>
  );
};

export default App;
