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
      console.log("next month");
      return {
        ...state,
        currentMonth: (state.currentMonth + 1) % 12
      };
    case "PREV_MONTH":
      console.log("prev month");
      return {
        ...state,
        currentMonth: (state.currentMonth - 1 + 12) % 12
      };
    default:
      return state;
  }
}
