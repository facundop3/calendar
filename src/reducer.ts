export default function(state: any, action: { type: string; payload: any }) {
  switch (action.type) {
    case "SET_MONTH_DAYS":
      return {
        ...state,
        monthDays: action.payload.monthDays
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
        currentDayId: action.payload.dayId
      };
    case "NEXT_MONTH":
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
