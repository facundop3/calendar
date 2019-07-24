import React from "react";
import { day as dayI, action, calendarState } from "../interfaces";
import Modal from "./Modal";
import { handleEnterPress } from "../utils/a11y";
import TaskList from "./TaskList";
import styled from "styled-components";
import { backgroundColor, textColor } from "../theme";

const DayBoxContainer = styled.div`
  position: relative;
  margin: 0 !important;
  width: 100%;
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
  outline: none;
`;

const DayContent = styled.div`
  color: ${textColor};
`;
const DateContainer = styled.p`
  color: ${({ today, selectedDay }: { today: boolean; selectedDay: boolean }) =>
    today ? "white" : selectedDay ? "#185abc" : textColor};
  background-color: ${({
    today,
    selectedDay
  }: {
    today: boolean;
    selectedDay: boolean;
  }) => (today ? "#1967d2" : selectedDay ? "#aecbfa" : backgroundColor)};
  margin: 0 !important;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const DayBox = (props: {
  weekDay?: string;
  day: dayI;
  index: number;
  mini: boolean;
  state: calendarState;
  dispatch?: React.Dispatch<action>;
}) => {
  const {
    day: { timeStamp, disabled },
    day,
    index,
    mini,
    dispatch,
    state: { currentDayId, tasks, selectedDayMini }
  } = props;
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  const todayTasks = tasks.filter(
    ({ day }: { day: dayI }) => day.timeStamp === timeStamp
  );
  const todayTimeStamp: number = new Date().setHours(0, 0, 0, 0);
  const toggleModal = (ev: any) => {
    if (!disabled && dispatch && mini) {
      dispatch({ type: "SET_SELECTED_DAY", payload: { dayId: timeStamp } });
    }
    if (!disabled && dispatch && !mini) {
      dispatch({ type: "TOGGLE_MODAL", payload: { dayId: timeStamp } });
    }
  };
  return (
    <DayBoxContainer
      className={mini ? "" : "box"}
      onClick={toggleModal}
      onKeyPress={ev => handleEnterPress(ev, toggleModal)}
      aria-disabled={disabled}
      {...tabIndex}
    >
      {!disabled && !mini && currentDayId === timeStamp && (
        <Modal dayIndex={index} day={day} dispatch={dispatch} />
      )}
      <article className="media">
        <div className="media-content">
          <DayContent className="content">
            <DateContainer
              today={day.timeStamp === todayTimeStamp}
              selectedDay={selectedDayMini === day.timeStamp}
              aria-label={!disabled ? new Date(timeStamp).toDateString() : ""}
              className={mini ? "hover-date" : ""}
            >
              {disabled ? timeStamp : new Date(timeStamp).getDate()}
            </DateContainer>
            <TaskList tasks={todayTasks} mini={mini} />
          </DayContent>
        </div>
      </article>
    </DayBoxContainer>
  );
};

export default DayBox;
