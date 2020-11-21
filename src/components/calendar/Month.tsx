import React from 'react'
import { getDaysOnMonth } from '../../utils/dates'
import { Day } from '../../interfaces'
import styled from 'styled-components'
import '../animations/styles.css'
import { useCalendar } from '../../state/context'
import DayBox from './DayBox'
const uuidv1 = require('uuid/v1')

const MonthContainer = styled.div`
  justify-content: space-arround;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 1em;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    margin: 0;
  }
`
const Month = (props: { mini: boolean; currentDate?: number }) => {
  const { mini } = props
  const [state] = useCalendar()
  const currentDate = props.currentDate || state.currentDate
  const monthDays: Day[] = getDaysOnMonth(new Date(currentDate))
  const [{ timeStamp: firstDay }] = monthDays.slice(0, 1)
  const [{ timeStamp: lastDay }] = monthDays.slice(-1)
  const firstBlanks = Array(new Date(firstDay).getDay()).fill({
    value: 'x',
    disabled: true,
  })
  const LastBlanks = Array(6 - new Date(lastDay).getDay()).fill({
    value: 'x',
    disabled: true,
  })
  const blankFilledDays = [...firstBlanks, ...monthDays, ...LastBlanks]

  return (
    <MonthContainer>
      {blankFilledDays.map((day: Day, index: number) => (
        <DayBox day={day} key={uuidv1()} index={index} mini={mini} />
      ))}
    </MonthContainer>
  )
}

export default Month
