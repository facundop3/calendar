import React from 'react'
import { CalendarProvider } from './state/context'
import { Header } from './components/page'
import { Calendar, MiniCalendar } from './components/calendar'
import '../node_modules/bulma/css/bulma.min.css'
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
  align-items: baseline;
  height: 100%;
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
          <LeftSide className="is-hidden-mobile">
            <MiniCalendar />
          </LeftSide>
          <Calendar />
        </Container>
      </AppContainer>
    </CalendarProvider>
  )
}

export default App
