import React from 'react'
import { CalendarState, Action } from '../interfaces'
import { calendarReducer } from './reducer'
import { CalendarContext } from './contexts'

const defaultValues = {
  currentDate: new Date().getTime(),
  selectedTimestamp: new Date().getTime(),
  currentDateMin: new Date().getTime(),
  currentDayIdMin: 0,
  selectedDayMini: new Date().getTime(),
  calendarMode: 'Month',
  tasks: [],
  showModal: false,
  currentDayIndex: 0,
}

const stateFromLocalStore = localStorage.getItem('calendarState')

const calendarInitialState: CalendarState = {
  ...(stateFromLocalStore ? JSON.parse(stateFromLocalStore) : defaultValues),
}

export const CalendarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(
    calendarReducer,
    calendarInitialState
  )
  const multipleDispatch = (...actions: Action[]) => dispatch(actions)
  return (
    <CalendarContext.Provider value={[state, multipleDispatch]}>
      {children}
    </CalendarContext.Provider>
  )
}
