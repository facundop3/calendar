export interface CalendarState {
  currentDate: number;
  currentDateMin: number;
  selectedDayMini: number;
  currentDayId: number;
  calendarMode: string;
  currentDayIdMin: number;
  calendarModeMin: string;
  tasks: Task[];
}

export interface Action {
  type?: string;
  payload?: any;
}

export interface Day {
  timeStamp: number;
  disabled: boolean;
}

export interface Task {
  title: string;
  day: Day;
  time: Date;
}
