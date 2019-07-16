export default function(state: any, action: { type: string; payload: any }) {
  switch (action.type) {
    case "CHANGE_CALENDAR_MODE":
      console.log(action.payload);
      return {
        ...state,
        calendarMode: action.payload.calendarMode
      };
    case "ADD_TASK":
      console.log("Adding task: ", action.payload.task);
      const { title, time } = action.payload.task;
      const monthDays = state.monthDays.map((day: any) => {
        if (day.id === action.payload.task.day.id) {
          console.log("added task:");
          const addedTask = { ...day, tasks: [...day.tasks, { title, time }] };
          return addedTask;
        }
        return day;
      });
      return {
        ...state,
        monthDays
      };
    case "SET_MONTH_DAYS":
      return {
        ...state,
        monthDays: action.payload.monthDays
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        currentDayId: action.payload.dayId
      };
    case "NEXT_MONTH":
      console.log("Next month");
      if (state.currentMonth === 11) {
        return {
          ...state,
          currentMonth: 0,
          currentYear: state.currentYeat + 1
        };
      } else {
        return {
          ...state,
          currentMonth: state.currentMonth + 1
        };
      }
    case "PREV_MONTH":
      if (state.currentMonth === 0) {
        return {
          ...state,
          currentMonth: 11,
          currentYear: state.currentYear - 1
        };
      } else {
        return {
          ...state,
          currentMonth: state.currentMonth - 1
        };
      }
    default:
      return state;
  }
}
