import React from 'react'
import { Button } from '../elements'
import { NavigateNext } from 'styled-icons/material/NavigateNext'
import { NavigateBefore } from 'styled-icons/material/NavigateBefore'
import styled from 'styled-components'
import {
  prevYear,
  prevMonth,
  nextMonth,
  nextYear,
} from '../../state/actionCreators'
import { useCalendar } from '../../state/contexts'
import { FlexRow } from '../elements'

const MonthSelectorContainer = styled(FlexRow.center)`
  button {
    background-color: transparent !important;
  }
  svg {
    color: #000;
  }
  .btn--link {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn--link:hover {
    background-color: rgba(119, 136, 153, 0.2);
  }
`

const SelectedMonthContainer = styled.div`
  min-width: 100px;
  text-align: center;
`

const NavigateNextIcon = styled(NavigateNext)`
  height: 30px;
  font-weight: bold;
`

const NavigateBeforeIcon = styled(NavigateBefore)`
  height: 30px;
  font-weight: bold;
`

const MonthSelector = (props: { mini?: boolean; onlyYear?: boolean }) => {
  const { mini, onlyYear } = props
  const [state, dispatch] = useCalendar()
  const currentDate = mini ? state.currentDateMin : state.currentDate
  const stringDateArr: string[] = new Date(currentDate)
    .toDateString()
    .split(' ')
  const month = stringDateArr[1]
  const year = stringDateArr[3]
  const previousDate = onlyYear ? prevYear : prevMonth
  const nextDate = onlyYear ? nextYear : nextMonth

  return (
    <MonthSelectorContainer style={{ zoom: mini ? 0.7 : 1 }}>
      <Button
        ariaLabel="Previous month"
        size={50}
        onClick={() => dispatch(previousDate(Boolean(mini)))}
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        size={50}
        ariaLabel="Next month"
        onClick={() => dispatch(nextDate(Boolean(mini)))}
      >
        <NavigateNextIcon />
      </Button>
      <SelectedMonthContainer arial-label="testing" tabIndex={0}>
        {`${onlyYear ? '' : month + ' - '}${year}`}
      </SelectedMonthContainer>
    </MonthSelectorContainer>
  )
}

export default MonthSelector
