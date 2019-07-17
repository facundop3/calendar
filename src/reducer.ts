export const calendarReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
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

    case "TOGGLE_MODAL":
      return {
        ...state,
        currentDayId: action.payload.dayId
      };
    case "NEXT_MONTH":
      if (state.currentDate.getMonth() === 11) {
        const year = state.currentDate.getFullYear() + 1;
        return {
          ...state,
          currentDate: new Date(year, 0)
        };
      } else {
        return {
          ...state,
          currentDate: new Date(
            state.currentDate.getFullYear(),
            state.currentDate.getMonth() + 1
          )
        };
      }
    case "PREV_MONTH":
      if (state.currentDate === 0) {
        return {
          ...state,
          currentDate: new Date(state.currentDate.getFullYear() - 1, 11)
        };
      } else {
        return {
          ...state,
          currentDate: new Date(
            state.currentDate.getFullYear(),
            state.currentDate.getMonth() - 1
          )
        };
      }
    default:
      return state;
  }
};
