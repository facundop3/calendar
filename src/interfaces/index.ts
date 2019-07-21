export interface calendarState {
  currentDate: number;
  currentDayId: number;
  calendarMode: string;
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
