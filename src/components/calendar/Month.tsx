import React from 'react'
import { getDaysOnMonth } from '../../utils/dates'
import { chunkArray } from '../../utils/arrays'
import Week from './Week'
import { Day } from '../../interfaces'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations/styles.css'
import { useCalendar } from '../../state/context'
const uuidv1 = require('uuid/v1')

const MonthContainer = styled.div`
  justify-content: space-arround;
  margin: 1em;
  width: 100%;
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
  const blankFilledWeeks: Day[][] = chunkArray(
    [...firstBlanks, ...monthDays, ...LastBlanks],
    7
  )

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <MonthContainer>
        {blankFilledWeeks.map((weekDays: Day[]) => (
          <Week days={weekDays} key={uuidv1()} mini={mini} />
        ))}
      </MonthContainer>
    </ReactCSSTransitionGroup>
  )
}

export default Month
