import { CalendarState, Action } from '../interfaces'
import {
  CHANGE_CALENDAR_MODE,
  ADD_TASK,
  SET_SELECTED_DAY,
  OPEN_MODAL,
  CLOSE_MODAL,
  NEXT_MONTH,
  PREV_MONTH,
  PREV_YEAR,
  NEXT_YEAR,
} from './actions'
import {
  changeCalendarMode,
  persist,
  addTask,
  openModal,
  closeModal,
  setSelectedDay,
  nextMonth,
  prevMonth,
  prevYear,
  nextYear,
} from './helper'

export const calendarReducer = (
  state: CalendarState,
  action: Action
): CalendarState => {
  console.groupCollapsed(
    `[${new Date().toTimeString()}] calendarReducer ${action.type}`
  )
  console.log(`State before the changes:`, state)
  console.log(`Action to perform:`, action)
  console.groupEnd()

  switch (action.type) {
    case CHANGE_CALENDAR_MODE: {
      return changeCalendarMode(state, action)
    }
    case ADD_TASK: {
      return persist(addTask(state, action))
    }
    case SET_SELECTED_DAY: {
      return setSelectedDay(state, action)
    }
    case OPEN_MODAL: {
      return openModal(state, action)
    }
    case CLOSE_MODAL: {
      return closeModal(state)
    }
    case NEXT_MONTH: {
      return nextMonth(state, action)
    }
    case PREV_MONTH: {
      return prevMonth(state, action)
    }
    case PREV_YEAR: {
      return prevYear(state, action)
    }
    case NEXT_YEAR: {
      return nextYear(state, action)
    }
    default:
      return state
  }
}
