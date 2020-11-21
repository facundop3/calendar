import React from 'react'
import Month from './Month'
import { useCalendar } from '../../state/context'
import Year from './Year'
import styled from 'styled-components'
import { Modal } from '../page'

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
          <Month mini={false} />
          <Modal />
        </>
      ) : (
        <Year />
      )}
    </CalendarContainer>
  )
}

export default Calendar
