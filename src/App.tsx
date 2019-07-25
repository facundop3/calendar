import React, { useContext, useReducer } from "react";
import { calendarContext } from "./context";
import { calendarReducer } from "./reducer";
import Header from "./components/page/Header";
import Calendar from "./components/calendar/Calendar";
import MiniCalendar from "./components/calendar/MiniCalendar";
import "../node_modules/bulma/css/bulma.min.css";
import "./styles.css";
import styled from "styled-components";
import { MyThemeProvider } from "./ThemeContext";

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
    <MyThemeProvider>
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
    </MyThemeProvider>
  );
};

export default App;
