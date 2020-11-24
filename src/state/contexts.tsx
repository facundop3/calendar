import React, { Dispatch } from 'react'
import { CalendarState, Action } from '../interfaces'

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
