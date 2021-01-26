import { CalendarState, Action } from '../interfaces'

export const changeCalendarMode = (
  state: CalendarState,
  action: Action
): CalendarState => {
  const newState: CalendarState = {
    ...state,
    calendarMode: action.payload.calendarMode,
  }
  return newState
}

export const addTask = (state: CalendarState, action: Action) => {
  const { title, time, day } = action.payload.task
  const newTasks = [...state.tasks, { title, time, day }]
  const sortedTasks = newTasks.sort(({ time: timeA }, { time: timeB }) => {
    const numberA = Number(timeA.replace(':', ''))
    const numberB = Number(timeB.replace(':', ''))
    return numberA - numberB
  })
  const newState: CalendarState = {
    ...state,
    tasks: sortedTasks,
    showModal: false,
  }
  return newState
}

export const setSelectedDay = (state: CalendarState, action: Action) => {
  const newState: CalendarState = {
    ...state,
    selectedDayMini: action.payload.timestamp,
  }
  return newState
}

export const openModal = (state: CalendarState, action: Action) => {
  const newState: CalendarState = {
    ...state,
    selectedTimestamp: action.payload.timestamp,
    showModal: true,
    currentDayIndex: action.payload.currentDayIndex,
  }

  return newState
}
export const closeModal = (state: CalendarState) => {
  return {
    ...state,
    showModal: false,
  }
}

export const nextMonth = (state: CalendarState, action: Action) => {
  const mini = action.payload ? action.payload.mini : false
  let newState: CalendarState
  const currentDate = mini ? 'currentDateMin' : 'currentDate'
  if (new Date(state[currentDate]).getMonth() === 11) {
    const year = new Date(state[currentDate]).getFullYear() + 1
    newState = {
      ...state,
      [currentDate]: new Date(year, 0).getTime(),
    }
  } else {
    newState = {
      ...state,
      [currentDate]: new Date(
        new Date(state[currentDate]).getFullYear(),
        new Date(state[currentDate]).getMonth() + 1
      ).getTime(),
    }
  }
  return newState
}

export const prevMonth = (state: CalendarState, action: Action) => {
  const mini = action.payload ? action.payload.mini : false
  let newState: CalendarState
  const currentDate = mini ? 'currentDateMin' : 'currentDate'
  if (new Date(state[currentDate]).getMonth() === 0) {
    newState = {
      ...state,
      [currentDate]: new Date(
        new Date(state[currentDate]).getFullYear() - 1,
        11
      ).getTime(),
    }
  } else {
    newState = {
      ...state,
      [currentDate]: new Date(
        new Date(state[currentDate]).getFullYear(),
        new Date(state[currentDate]).getMonth() - 1
      ).getTime(),
    }
  }
  return newState
}

export const prevYear = (state: CalendarState, action: Action) => {
  const newState: CalendarState = {
    ...state,
    currentDate: new Date(
      new Date(state.currentDate).getFullYear() - 1,
      new Date(state.currentDate).getMonth()
    ).getTime(),
  }
  return newState
}

export const nextYear = (state: CalendarState, action: Action) => {
  const newState: CalendarState = {
    ...state,
    currentDate: new Date(
      new Date(state.currentDate).getFullYear() + 1,
      new Date(state.currentDate).getMonth()
    ).getTime(),
  }
  return newState
}

export const persist = (state: CalendarState) => {
  localStorage.setItem('calendarState', JSON.stringify(state))
  return state
}
