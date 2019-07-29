import React, { useContext, useReducer } from "react";
import { calendarContext } from "./context";
import { calendarReducer } from "./reducer/reducer";
import { Header } from "./components/page";
import { Calendar, MiniCalendar } from "./components/calendar";
import "../node_modules/bulma/css/bulma.min.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  @media (max-width: 768px) {
    padding: 0;
  }
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
            <LeftSide className="is-hidden-mobile">
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
