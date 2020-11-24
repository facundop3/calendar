import React from 'react'
import { CalendarState } from '../interfaces'
import { calendarReducer } from './reducer'
import { CalendarContext } from './contexts'

const defaultValues = {
  currentDate: new Date().getTime(),
  selectedTimestamp: 0,
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
  const value = React.useReducer(calendarReducer, calendarInitialState)

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}
