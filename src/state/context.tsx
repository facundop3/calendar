import React, { Dispatch } from 'react'
import { CalendarState, Action } from '../interfaces'
import { calendarReducer } from './reducer'

const defaultValues = {
  currentDate: new Date().getTime(),
  currentDayId: 0,
  currentDateMin: new Date().getTime(),
  currentDayIdMin: 0,
  selectedDayMini: new Date().getTime(),
  calendarMode: '',
  tasks: [],
}

const stateFromLocalStore = localStorage.getItem('calendarState')

const calendarInitialState: CalendarState = {
  ...(stateFromLocalStore ? JSON.parse(stateFromLocalStore) : defaultValues),
}

export const CalendarContext = React.createContext<
  [CalendarState, Dispatch<Action>] | null
>(null)

export const useCalendar = (): any => {
  const value = React.useContext(CalendarContext)
  if (!value) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }
  return value
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
