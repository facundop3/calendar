import React from 'react'
import styled from 'styled-components'
import Month from './Month'
import WeekHeader from './WeekHeader'
import { useCalendar } from '../../state/context'
const uuidv1 = require('uuid/v1')

const YearContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  zoom: 0.8;
  padding-bottom: 5em;
  padding-left: 7em;
  padding-top: 1em;
  height: 100%;
`

const MonthTitle = styled.p`
  width: 100%;
  padding-left: 1.5em;
`

const MonthCalendar = styled.div`
  width: 320px;
  height: fit-content;
`

const Year: React.FC = () => {
  const [state] = useCalendar()
  const year = new Date(state.currentDate).getFullYear()
  const monthDates: Date[] = Array(12)
    .fill(1)
    .map((e, monthNumber: number) => new Date(year, monthNumber))
  return (
    <YearContainer>
      {monthDates.map((date) => (
        <MonthCalendar key={uuidv1()}>
          <MonthTitle>{date.toDateString().split(' ')[1]}</MonthTitle>
          <WeekHeader mini={true} />
          <Month currentDate={date.getTime()} mini={true} />
        </MonthCalendar>
      ))}
    </YearContainer>
  )
}

export default Year
