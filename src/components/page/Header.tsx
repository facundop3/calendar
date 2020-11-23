import React from 'react'
import { Select } from '../elements'
import { MonthSelector } from '../calendar'
import styled from 'styled-components'
import { CalendarAlt } from 'styled-icons/fa-solid/CalendarAlt'
import { CHANGE_CALENDAR_MODE } from '../../state/actions'
import { useCalendar } from '../../state/context'

const CalendarIcon = styled(CalendarAlt)`
  height: 40px;
  color: #3866d0;
  margin-right: 0.5em;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`
const HeaderTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const NavBar = styled.nav`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  margin-bottom: '1em';
  background-color: #fafafa !important;
  display: flex;
  align-items: center !important;
  justify-content: center;
  padding-left: 0.5em;
  max-height: 55px;
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
  const handleChange = (calendarMode: string) => {
    dispatch({ type: CHANGE_CALENDAR_MODE, payload: { calendarMode } })
  }
  return (
    <NavBar className="navbar">
      <div className="navbar-brand">
        <HeaderTitle>
          <CalendarIcon />
          <Title>Calendar</Title>
        </HeaderTitle>
      </div>

      <MonthSelector onlyYear={calendarMode === 'Year'} mini={false} />
      <div className="navbar-end">
        <div className="navbar-item">
          <Select
            defaultValue={calendarMode || 'Month'}
            options={['Month', 'Year']}
            handleChange={handleChange}
          />
        </div>
      </div>
    </NavBar>
  )
}
export default Header
