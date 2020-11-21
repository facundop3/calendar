import { CalendarState, Action } from '../interfaces'
import {
  CHANGE_CALENDAR_MODE,
  ADD_TASK,
  SET_SELECTED_DAY,
  TOGGLE_MODAL,
  NEXT_MONTH,
  PREV_MONTH,
  PREV_YEAR,
  NEXT_YEAR,
} from './actions'
import {
  changeCalendarMode,
  persist,
  addTask,
  setSelectedDay,
  toggleModal,
  nextMonth,
  prevMonth,
  prevYear,
  nextYear,
} from './helper'

export const calendarReducer = (
  state: CalendarState,
  action: Action
): CalendarState => {
  switch (action.type) {
    case CHANGE_CALENDAR_MODE: {
      return persist(changeCalendarMode(state, action))
    }
    case ADD_TASK: {
      return persist(addTask(state, action))
    }
    case SET_SELECTED_DAY: {
      return persist(setSelectedDay(state, action))
    }
    case TOGGLE_MODAL: {
      return persist(toggleModal(state, action))
    }
    case NEXT_MONTH: {
      return persist(nextMonth(state, action))
    }
    case PREV_MONTH: {
      return persist(prevMonth(state, action))
    }
    case PREV_YEAR: {
      return persist(prevYear(state, action))
    }
    case NEXT_YEAR: {
      return persist(nextYear(state, action))
    }
    default:
      return state
  }
}
