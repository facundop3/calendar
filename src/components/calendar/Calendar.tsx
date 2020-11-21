import React from 'react'
import Month from './Month'
import WeekHeader from './WeekHeader'
import { useCalendar } from '../../state/context'
import Year from './Year'
import styled from 'styled-components'

const CalendarContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`
const Calendar = () => {
  const [{ calendarMode }] = useCalendar()
  return (
    <CalendarContainer>
      {calendarMode === 'Month' ? (
        <React.Fragment>
          <WeekHeader />
          <Month mini={false} />
        </React.Fragment>
      ) : (
        <Year />
      )}
    </CalendarContainer>
  )
}

export default Calendar
