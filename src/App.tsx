import React from 'react'
import { CalendarProvider } from './state/providers'
import { Header } from './components/page'
import { Calendar, MiniCalendar, CreateEvent } from './components/calendar'
import { FlexColumn, FlexRow } from './components/elements'
import styled from 'styled-components'

const Container = styled(FlexRow.centerVertically)`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    padding: 0;
  }
`

const LeftSide = styled(FlexColumn)`
  align-items: baseline;
  height: 100%;
  padding-top: 1em;
  margin-right: 7em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const AppContainer = styled(FlexColumn)`
  height: 100vh;
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
