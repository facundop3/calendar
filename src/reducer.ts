import { calendarState, action as actionI } from "./interfaces";

export const calendarReducer = (
  state: calendarState,
  action: actionI
): calendarState => {
  switch (action.type) {
    case "CHANGE_CALENDAR_MODE":
      console.log(action.payload);
      return {
        ...state,
        calendarMode: action.payload.calendarMode
      };
    case "ADD_TASK":
      console.log("Adding task: ", action.payload.task);
      const { title, time, day } = action.payload.task;
      return {
        ...state,
        tasks: [...state.tasks, { title, time, day }],
        currentDayId: ""
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
      if (state.currentDate.getMonth() === 0) {
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
