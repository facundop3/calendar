import { day } from "../interfaces";
const uuidv1 = require("uuid/v1");
export const getDaysOnMonth = (
  year: number = new Date().getFullYear(),
  monthNumnber: number = new Date().getMonth()
): day[] => {
  let currentDate = new Date(year, monthNumnber);
  const month: number = currentDate.getMonth();
  const lastMonthDay = new Date(year, month + 1, 0).getDate();
  const days: day[] = Array(lastMonthDay)
    .fill(1)
    .map((e, index: number) => ({
      id: uuidv1(),
      value: new Date(year, month, index + 1),
      disabled: false
    }));
  return days;
};
