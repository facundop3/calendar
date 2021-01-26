import React from 'react'
import Month from './Month'
import { useCalendar } from '../../state/contexts'
import Year from './Year'
import styled from 'styled-components'
import { Modal } from '../page'
import { FlexColumn } from '../elements'

const CalendarContainer = styled(FlexColumn)`
  width: 100%;
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
