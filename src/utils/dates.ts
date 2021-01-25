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
      const timestamp: number = new Date(year, month, index + 1).getTime()
      return {
        timestamp,
        disabled: false,
      }
    })
  return days
}

export const getHHMM = (date: Date) => {
  const [HHMMSS] = date.toTimeString().split(' ')
  return HHMMSS.replace(/:\d\d$/, '')
}
