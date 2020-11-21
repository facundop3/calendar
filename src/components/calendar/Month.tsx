import React from 'react'
import { getDaysOnMonth } from '../../utils/dates'
import { Day } from '../../interfaces'
import styled from 'styled-components'
import { useCalendar } from '../../state/context'
import DayBox from './DayBox'
const uuidv1 = require('uuid/v1')

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    margin: 0;
  }
`
const Month = (props: { mini?: boolean; currentDate?: number }) => {
  const { mini } = props
  const [state] = useCalendar()
  const currentDate = props.currentDate || state.currentDate
  const monthDays: Day[] = getDaysOnMonth(new Date(currentDate))
  const [{ timestamp: firstDay }] = monthDays.slice(0, 1)
  const [{ timestamp: lastDay }] = monthDays.slice(-1)
  const firstBlanks = Array(new Date(firstDay).getDay()).fill({
    value: 'x',
    disabled: true,
  })
  const LastBlanks = Array(6 - new Date(lastDay).getDay()).fill({
    value: 'x',
    disabled: true,
  })
  const blankFilledDays = [...firstBlanks, ...monthDays, ...LastBlanks]
  const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <MonthContainer>
      {blankFilledDays.map((day: Day, index: number) => (
        <DayBox
          day={day}
          key={uuidv1()}
          index={index}
          mini={mini}
          weekDay={weekDays[index]}
        />
      ))}
    </MonthContainer>
  )
}

export default Month
