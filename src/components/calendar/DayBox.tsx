import React from 'react'
import { Day } from '../../interfaces'
import { handleEnterPress } from '../../utils/a11y'
import TaskList from './TaskList'
import styled from 'styled-components'
import { openModal, selectDay } from '../../state/actionCreators'
import { useCalendar } from '../../state/contexts'

const DayBoxContainer = styled.div`
  box-sizing: border-box;
  padding: 0.5em;
  position: relative;
  width: 100%;
  background-color: #fafafa !important;
  ${({ mini }: { mini?: boolean }) =>
    !mini &&
    `box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);`}
  @media (max-width: 768px) {
    padding: 0.5rem !important;
  }
`

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DateContainer = styled.p`
  color: ${({ today, selectedDay }: { today: boolean; selectedDay: boolean }) =>
    today ? 'white' : selectedDay ? '#185abc' : '#000'};
  background-color: ${({
    today,
    selectedDay,
  }: {
    today: boolean
    selectedDay: boolean
  }) => (today ? '#1967d2' : selectedDay ? '#aecbfa' : '#fafafa')};
  margin: 0 !important;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
`
interface Props {
  day: Day
  index: number
  weekDay?: string
  mini?: boolean
}

const DayBox: React.FC<Props> = (props) => {
  const {
    day: { timestamp, disabled },
    day,
    index,
    mini,
    weekDay,
  } = props
  const [{ tasks, selectedDayMini }, dispatch] = useCalendar()
  const tabIndex = disabled ? {} : { tabIndex: 0 }
  const todayTasks = tasks.filter(
    ({ day }: { day: Day }) => day.timestamp === timestamp
  )
  const todayTimeStamp: number = new Date().setHours(0, 0, 0, 0)

  const handleDayClick = () => {
    if (!disabled) {
      if (mini) {
        dispatch(selectDay(timestamp, index))
      } else {
        dispatch(openModal(timestamp, index))
      }
    }
  }
  return (
    <DayBoxContainer
      mini={mini}
      onClick={handleDayClick}
      onKeyPress={(ev) => handleEnterPress(ev, handleDayClick)}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <DayContent>
        {!mini && weekDay}
        <DateContainer
          today={day.timestamp === todayTimeStamp}
          selectedDay={selectedDayMini === day.timestamp}
          aria-label={!disabled ? new Date(timestamp).toDateString() : ''}
        >
          {disabled ? timestamp : new Date(timestamp).getDate()}
        </DateContainer>
        {!mini && <TaskList tasks={todayTasks} />}
      </DayContent>
    </DayBoxContainer>
  )
}

export default DayBox
