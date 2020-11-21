import { Day } from '../interfaces'
export const getDaysOnMonth = (date: Date): Day[] => {
  const year = date.getFullYear()
  const monthNumber = date.getMonth()
  let currentDate = new Date(year, monthNumber)
  const month: number = currentDate.getMonth()
  const lastMonthDay = new Date(year, month + 1, 0).getDate()
  const days: Day[] = Array(lastMonthDay)
    .fill(1)
    .map((e, index: number) => {
      const timeStamp: number = new Date(year, month, index + 1).getTime()
      return {
        timeStamp,
        disabled: false,
      }
    })
  return days
}
