export interface calendarState {
  currentDate: number;
  currentDayId: string;
  calendarMode: string;
  tasks: task[];
}

export interface action {
  type?: string;
  payload?: any;
}

export interface day {
  value: Date;
  disabled: boolean;
  id: string;
}

export interface task {
  title: string;
  day: day;
  time: Date;
}
