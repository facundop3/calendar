import { day } from "../interfaces";
export const getDaysOnMonth = (date: Date): day[] => {
  const year = date.getFullYear();
  const monthNumnber = date.getMonth();
  let currentDate = new Date(year, monthNumnber);
  const month: number = currentDate.getMonth();
  const lastMonthDay = new Date(year, month + 1, 0).getDate();
  const days: day[] = Array(lastMonthDay)
    .fill(1)
    .map((e, index: number) => {
      const value = new Date(year, month, index + 1);
      const id = String(value.getTime());
      return {
        id,
        value,
        disabled: false
      };
    });
  return days;
};
