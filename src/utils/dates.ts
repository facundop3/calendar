export const getDaysOnMonth = (
  year: number = new Date().getFullYear(),
  monthNumnber: number = new Date().getMonth()
): Date[] => {
  let currentDate = new Date(year, monthNumnber);
  const month: number = currentDate.getMonth();
  const lastMonthDay = new Date(year, month + 1, 0).getDate();
  const days: Date[] = Array(lastMonthDay)
    .fill(1)
    .map((e, index: number) => new Date(year, month, index + 1));
  return days;
};
