import React from 'react'
import Month from './Month'
import { useCalendar } from '../../state/contexts'
import Year from './Year'
import styled from 'styled-components'
import { Modal } from '../page'

const CalendarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 768px) {
    align-items: center;
    overflow-y: scroll;
  }
`
const Calendar = () => {
  const [{ calendarMode }] = useCalendar()
  return (
    <CalendarContainer>
      {calendarMode === 'Month' ? (
        <>
          <Month mini={false} />
        </>
      ) : (
        <Year />
      )}
      <Modal />
    </CalendarContainer>
  )
}

export default Calendar
