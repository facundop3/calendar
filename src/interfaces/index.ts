export interface calendarState {
  currentDate: number;
  currentDateMin: number;
  currentDayId: number;
  calendarMode: string;
  currentDayIdMin: number;
  calendarModeMin: string;
  tasks: task[];
}

export interface action {
  type?: string;
  payload?: any;
}

export interface day {
  timeStamp: number;
  disabled: boolean;
}

export interface task {
  title: string;
  day: day;
  time: Date;
}
