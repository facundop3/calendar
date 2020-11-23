import React from 'react'
import { Select } from '../elements'
import { MonthSelector } from '../calendar'
import styled from 'styled-components'
import { changeCalendarMode } from '../../state/actionCreators'
import { useCalendar } from '../../state/context'

const NavBar = styled.nav`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  margin-bottom: '1em';
  background-color: #fafafa !important;
  display: flex;
  align-items: center !important;
  justify-content: space-between;
  padding-left: 0.5em;
  max-height: 55px;
  min-height: 3.25rem;
  position: relative;
  z-index- 2;

  @media (max-width: 768px) {
    padding-left: 0;
    .button {
      padding: 0;
    }
    .navbar-item {
      padding: 0.3em;
    }
  }
`

const Header: React.FC = () => {
  const [state, dispatch] = useCalendar()
  const calendarMode = state.calendarMode
  const handleChange = React.useCallback(
    (calendarMode: string) => {
      dispatch(changeCalendarMode(calendarMode as 'Month' | 'Year'))
    },
    [dispatch]
  )
  return (
    <NavBar>
      <MonthSelector onlyYear={calendarMode === 'Year'} mini={false} />
      <Select
        defaultValue={calendarMode || 'Month'}
        options={['Month', 'Year']}
        handleChange={handleChange}
      />
    </NavBar>
  )
}
export default Header
