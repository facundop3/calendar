import { calendarState, action as actionI } from "./interfaces";

export const calendarReducer = (
  state: calendarState,
  action: actionI
): calendarState => {
  const mini = action.payload ? action.payload.mini : false;
  switch (action.type) {
    case "CHANGE_CALENDAR_MODE": {
      const newState: calendarState = {
        ...state,
        calendarMode: action.payload.calendarMode
      };
      localStorage.setItem(
        "calendarState",
        JSON.stringify({
          ...newState,
          currentDate: newState.currentDate
        })
      );
      return newState;
    }

    case "ADD_TASK": {
      const { title, time, day } = action.payload.task;
      const newState: calendarState = {
        ...state,
        tasks: [...state.tasks, { title, time, day }],
        currentDayId: 0
      };
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }
    case "SET_SELECTED_DAY": {
      const newState: calendarState = {
        ...state,
        selectedDayMini: action.payload.dayId
      };
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }
    case "TOGGLE_MODAL": {
      const newState: calendarState = {
        ...state,
        currentDayId: action.payload.dayId
      };
      localStorage.setItem("calendarState", JSON.stringify(newState));

      return newState;
    }
    case "NEXT_MONTH": {
      let newState: calendarState;
      const currentDate = mini ? "currentDateMin" : "currentDate";
      if (new Date(state[currentDate]).getMonth() === 11) {
        const year = new Date(state[currentDate]).getFullYear() + 1;
        newState = {
          ...state,
          [currentDate]: new Date(year, 0).getTime()
        };
      } else {
        newState = {
          ...state,
          [currentDate]: new Date(
            new Date(state[currentDate]).getFullYear(),
            new Date(state[currentDate]).getMonth() + 1
          ).getTime()
        };
      }
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }

    case "PREV_MONTH": {
      let newState: calendarState;
      const currentDate = mini ? "currentDateMin" : "currentDate";
      if (new Date(state[currentDate]).getMonth() === 0) {
        newState = {
          ...state,
          [currentDate]: new Date(
            new Date(state[currentDate]).getFullYear() - 1,
            11
          ).getTime()
        };
      } else {
        newState = {
          ...state,
          [currentDate]: new Date(
            new Date(state[currentDate]).getFullYear(),
            new Date(state[currentDate]).getMonth() - 1
          ).getTime()
        };
      }
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }

    case "PREV_YEAR": {
      const newState: calendarState = {
        ...state,
        currentDate: new Date(
          new Date(state.currentDate).getFullYear() - 1,
          new Date(state.currentDate).getMonth()
        ).getTime()
      };
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }
    case "NEXT_YEAR": {
      const newState: calendarState = {
        ...state,
        currentDate: new Date(
          new Date(state.currentDate).getFullYear() + 1,
          new Date(state.currentDate).getMonth()
        ).getTime()
      };
      localStorage.setItem("calendarState", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};
