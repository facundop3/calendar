import React from 'react'
import WeekHeader from './WeekHeader'
import MonthSelector from './MonthSelector'
import Month from './Month'
import styled from 'styled-components'

const MiniCalendarContainer = styled.div`
  min-width: 300px;
  zoom: 0.8;
`

const MiniCalendar = () => {
  return (
    <MiniCalendarContainer>
      <MonthSelector mini />
      <WeekHeader mini />
      <Month mini />
    </MiniCalendarContainer>
  )
}

export default MiniCalendar
