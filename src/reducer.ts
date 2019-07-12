// import calendarI from "./interfaces";

export default function(state: any, action: { type: string }) {
  switch (action.type) {
    case "NEXT_MONTH":
      return {
        ...state,
        currentMonth: (state.currentMonth + 1) % 12
      };
    case "PREV_MONTH":
      return {
        ...state,
        currentMonth: (state.currentMonth - 1 + 12) % 12
      };
    default:
      return state;
  }
}
