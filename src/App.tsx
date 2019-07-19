import React, { useContext, useReducer } from "react";
import { monthSelectorContext } from "./context";
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
`;

const App: React.FC = () => {
  const { state } = useContext(monthSelectorContext);
  const [monthSelectorState, monthSelectorDispatcher] = useReducer(
    calendarReducer,
    state
  );

  return (
    <AppContainer>
      <monthSelectorContext.Provider
        value={{
          state: monthSelectorState,
          dispatch: monthSelectorDispatcher
        }}
      >
        <Header />
        <div>
          <Container>
            <LeftSide>
              <MiniCalendar />
            </LeftSide>
            <Calendar />
          </Container>
        </div>
      </monthSelectorContext.Provider>
    </AppContainer>
  );
};

export default App;
