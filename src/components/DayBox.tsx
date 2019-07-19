import React from "react";
import { day as dayI } from "../interfaces";
import Modal from "./Modal";
import { handleEnterPress } from "../utils/a11y";
import TaskList from "./TaskList";
import styled from "styled-components";
import { backgroundColor, textColor, hoverColor } from "../theme";

const DayBoxContainer = styled.div`
  position: relative;
  margin: 0 !important;
  width: 100%;
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
`;

const DayContent = styled.div`
  color: ${textColor};
`;

const DayBox = (props: {
  weekDay?: string;
  day: dayI;
  index: number;
  mini: boolean;
  dispatch: any;
  state: any;
}) => {
  const {
    day: { value, disabled, id },
    day,
    index,
    mini,
    dispatch,
    state: { currentDayId, tasks }
  } = props;
  const tabIndex = disabled ? {} : { tabIndex: 0 };
  const todayTasks = tasks.filter(
    ({ day }: { day: dayI }) => String(day.value.getTime()) === id
  );
  const toggleModal = (ev: any) => {
    if (!disabled) {
      dispatch({ type: "TOGGLE_MODAL", payload: { dayId: id } });
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
      {!disabled && currentDayId === id && (
        <Modal dayIndex={index} day={day} dispatch={dispatch} />
      )}
      <article className="media">
        <div className="media-content">
          <DayContent className="content">
            <p
              aria-label={!disabled ? value.toDateString() : ""}
              className={mini ? "hover-date" : ""}
            >
              {disabled ? value : value.getDate()}
            </p>
            <TaskList tasks={todayTasks} />
          </DayContent>
        </div>
      </article>
    </DayBoxContainer>
  );
};

export default DayBox;
