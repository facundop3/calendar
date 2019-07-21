import { calendarState, action as actionI } from "./interfaces";

export const calendarReducer = (
  state: calendarState,
  action: actionI
): calendarState => {
  switch (action.type) {
    case "CHANGE_CALENDAR_MODE":
      return (() => {
        const newState = {
          ...state,
          calendarMode: action.payload.calendarMode
        };
        localStorage.setItem(
          "monthSelector",
          JSON.stringify({
            ...newState,
            currentDate: newState.currentDate
          })
        );
        return newState;
      })();

    case "ADD_TASK":
      return (() => {
        const { title, time, day } = action.payload.task;
        const newState = {
          ...state,
          tasks: [...state.tasks, { title, time, day }],
          currentDayId: 0
        };
        localStorage.setItem("monthSelector", JSON.stringify(newState));
        return newState;
      })();

    case "TOGGLE_MODAL":
      return (() => {
        const newState = {
          ...state,
          currentDayId: action.payload.dayId
        };
        localStorage.setItem("modal", JSON.stringify(newState));

        return newState;
      })();
    case "NEXT_MONTH":
      return (() => {
        let newState: any;
        if (new Date(state.currentDate).getMonth() === 11) {
          const year = new Date(state.currentDate).getFullYear() + 1;
          newState = {
            ...state,
            currentDate: new Date(year, 0)
          };
        } else {
          newState = {
            ...state,
            currentDate: new Date(
              new Date(state.currentDate).getFullYear(),
              new Date(state.currentDate).getMonth() + 1
            )
          };
        }
        localStorage.setItem("nextMonth", JSON.stringify(newState));
        return newState;
      })();
    case "PREV_MONTH":
      return (() => {
        let newState: any;
        if (new Date(state.currentDate).getMonth() === 0) {
          newState = {
            ...state,
            currentDate: new Date(
              new Date(state.currentDate).getFullYear() - 1,
              11
            )
          };
        } else {
          newState = {
            ...state,
            currentDate: new Date(
              new Date(state.currentDate).getFullYear(),
              new Date(state.currentDate).getMonth() - 1
            )
          };
        }
        localStorage.setItem("prevMonth", JSON.stringify(newState));
        return newState;
      })();
    case "PREV_YEAR":
      return (() => {
        const newState = {
          ...state,
          currentDate: new Date(
            new Date(state.currentDate).getFullYear() - 1,
            new Date(state.currentDate).getMonth()
          ).getTime()
        };
        localStorage.setItem("prevYear", JSON.stringify(newState));
        return newState;
      })();
    case "NEXT_YEAR":
      return (() => {
        const newState = {
          ...state,
          currentDate: new Date(
            new Date(state.currentDate).getFullYear() + 1,
            new Date(state.currentDate).getMonth()
          ).getTime()
        };
        localStorage.setItem("newxtYear", JSON.stringify(newState));
        return newState;
      })();
    default:
      return state;
  }
};
