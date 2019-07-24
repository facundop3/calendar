import React, { useContext, useReducer } from "react";
import { calendarContext } from "./context";
import { calendarReducer } from "./reducer";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import "../node_modules/bulma/css/bulma.min.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em;
`;

const LeftSide = styled.div`
  display: flex;
  left: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const AppContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const App: React.FC = () => {
  const { state } = useContext(calendarContext);
  const [monthSelectorState, monthSelectorDispatcher] = useReducer(
    calendarReducer,
    state
  );

  return (
    <AppContainer>
      <calendarContext.Provider
        value={{
          state: monthSelectorState,
          dispatch: monthSelectorDispatcher
        }}
      >
        <calendarContext.Consumer>
          {({ dispatch, state }) => (
            <Header state={state} dispatch={dispatch} />
          )}
        </calendarContext.Consumer>
        <div>
          <Container>
            <LeftSide>
              <MiniCalendar />
            </LeftSide>
            <Calendar />
          </Container>
        </div>
      </calendarContext.Provider>
    </AppContainer>
  );
};

export default App;
