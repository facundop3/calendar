import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TASK,
  SET_SELECTED_DAY,
  SET_CURRENT_DATE,
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

export const openModal = (timestamp: number, currentDayIndex: number) => {
  return {
    type: OPEN_MODAL,
    payload: {
      timestamp,
      currentDayIndex,
    },
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
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

export const setCurrentDate = (timestamp: number) => {
  return {
    type: SET_CURRENT_DATE,
    payload: {
      timestamp,
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
