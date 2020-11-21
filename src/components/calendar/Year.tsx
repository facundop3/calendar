import React from 'react'
import styled from 'styled-components'
import Month from './Month'
import { chunkArray } from '../../utils/arrays'
import WeekHeader from './WeekHeader'
import { useCalendar } from '../../state/context'
const uuidv1 = require('uuid/v1')

const FourMonths = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const MonthTitle = styled.p`
  width: 100%;
  padding-left: 1.5em;
`

const MonthCalendar = styled.div`
  width: 320px;
`

const Year: React.FC = () => {
  const [state] = useCalendar()
  const year = new Date(state.currentDate).getFullYear()
  const monthDates: Date[] = Array(12)
    .fill(1)
    .map((e, monthNumber: number) => new Date(year, monthNumber))
  const fourMonthOneElem: Date[][] = chunkArray(monthDates, 4)
  return (
    <div style={{ zoom: 0.8 }}>
      {fourMonthOneElem.map((months) => {
        return (
          <FourMonths key={uuidv1()}>
            {months.map((date) => (
              <MonthCalendar key={uuidv1()}>
                <MonthTitle>{date.toDateString().split(' ')[1]}</MonthTitle>
                <WeekHeader mini={true} />
                <Month currentDate={date.getTime()} mini={true} />
              </MonthCalendar>
            ))}
          </FourMonths>
        )
      })}
    </div>
  )
}

export default Year
