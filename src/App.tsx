import React from 'react'
import { CalendarProvider } from './state/context'
import { Header } from './components/page'
import { Calendar, MiniCalendar, CreateEvent } from './components/calendar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    padding: 0;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 100%;
  padding-top: 1em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fafafa;
`

const App: React.FC = () => {
  return (
    <CalendarProvider>
      <AppContainer>
        <Header />
        <Container>
          <LeftSide>
            <CreateEvent />
            <MiniCalendar />
          </LeftSide>
          <Calendar />
        </Container>
      </AppContainer>
    </CalendarProvider>
  )
}

export default App
