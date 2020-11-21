import React from 'react'
import { Button } from '../elements'
import { NavigateNext } from 'styled-icons/material/NavigateNext'
import { NavigateBefore } from 'styled-icons/material/NavigateBefore'
import styled, { withTheme } from 'styled-components'
import {
  PREV_YEAR,
  PREV_MONTH,
  NEXT_YEAR,
  NEXT_MONTH,
} from '../../state/actions'
import { useCalendar } from '../../state/context'

const MonthSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const MonthSelector = (props: {
  mini?: boolean
  onlyYear?: boolean
  theme?: { mode: string }
}) => {
  const { mini, onlyYear } = props
  const [state, dispatch] = useCalendar()
  const currentDate = mini ? state.currentDateMin : state.currentDate
  const stringDateArr: string[] = new Date(currentDate)
    .toDateString()
    .split(' ')
  const month = stringDateArr[1]
  const year = stringDateArr[3]
  const previusDate = onlyYear ? PREV_YEAR : PREV_MONTH
  const nextDate = onlyYear ? NEXT_YEAR : NEXT_MONTH

  return (
    <MonthSelectorContainer style={{ zoom: mini ? 0.7 : 1 }}>
      <Button
        ariaLabel="Previus month"
        size={50}
        onClick={() =>
          dispatch && dispatch({ type: previusDate, payload: { mini } })
        }
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        size={50}
        ariaLabel="Next month"
        onClick={() =>
          dispatch && dispatch({ type: nextDate, payload: { mini } })
        }
      >
        <NavigateNextIcon />
      </Button>
      <SelectedMonthContainer arial-label="testing" tabIndex={0}>
        {`${onlyYear ? '' : month + ' - '}${year}`}
      </SelectedMonthContainer>
    </MonthSelectorContainer>
  )
}

export default withTheme(MonthSelector)
