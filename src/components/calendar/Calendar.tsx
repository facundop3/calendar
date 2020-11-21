import React from 'react'
import Month from './Month'
import WeekHeader from './WeekHeader'
import { useCalendar } from '../../state/context'
import Year from './Year'
import styled from 'styled-components'

const CalendarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`
const Calendar = () => {
  const [{ calendarMode }] = useCalendar()
  return (
    <CalendarContainer>
      {calendarMode === 'Month' ? (
        <>
          <WeekHeader />
          <Month mini={false} />
        </>
      ) : (
        <Year />
      )}
    </CalendarContainer>
  )
}

export default Calendar
