import {
  TOGGLE_MODAL,
  ADD_TASK,
  SET_SELECTED_DAY,
  CHANGE_CALENDAR_MODE,
  PREV_YEAR,
  PREV_MONTH,
  NEXT_YEAR,
  NEXT_MONTH,
} from './actions'
import { Task } from '../interfaces'

export const prevYear = (mini: boolean) => {
  return {
    type: PREV_YEAR,
    payload: {
      mini,
    },
  }
}

export const nextYear = (mini: boolean) => {
  return {
    type: NEXT_YEAR,
    payload: {
      mini,
    },
  }
}

export const prevMonth = (mini: boolean) => {
  return {
    type: PREV_MONTH,
    payload: {
      mini,
    },
  }
}

export const nextMonth = (mini: boolean) => {
  return {
    type: NEXT_MONTH,
    payload: {
      mini,
    },
  }
}

export const toggleModal = (timestamp: number, currentDayIndex: number) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      timestamp,
      currentDayIndex,
    },
  }
}

export const addTask = (task: Task) => {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  }
}

export const selectDay = (timestamp: number, currentDayIndex: number) => {
  return {
    type: SET_SELECTED_DAY,
    payload: {
      timestamp,
      currentDayIndex,
    },
  }
}

export const changeCalendarMode = (calendarMode: 'Month' | 'Year') => {
  return {
    type: CHANGE_CALENDAR_MODE,
    payload: {
      calendarMode,
    },
  }
}
