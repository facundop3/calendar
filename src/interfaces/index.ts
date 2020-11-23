export interface CalendarState {
  currentDate: number
  currentDateMin: number
  selectedDayMini: number
  selectedTimestamp: number
  calendarMode: 'Month' | 'Year'
  currentDayIdMin: number
  tasks: Task[]
  showModal: boolean
  currentDayIndex: number
}

export interface Action {
  type?: string
  payload?: any
}

export interface Day {
  timestamp: number
  disabled: boolean
}

export interface Task {
  title: string
  day: Day
  time: Date
}
