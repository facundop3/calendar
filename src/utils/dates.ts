export const getDaysOnMonth = (
  year: number = new Date().getFullYear(),
  monthNumnber: number = new Date().getMonth()
): { value: Date; disabled: boolean }[] => {
  let currentDate = new Date(year, monthNumnber);
  const month: number = currentDate.getMonth();
  const lastMonthDay = new Date(year, month + 1, 0).getDate();
  const days: { value: Date; disabled: boolean }[] = Array(lastMonthDay)
    .fill(1)
    .map((e, index: number) => ({
      value: new Date(year, month, index + 1),
      disabled: false
    }));
  return days;
};
