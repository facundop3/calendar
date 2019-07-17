import React from "react";
// import "./styles/DayBox.css";
import { day as dayI } from "../interfaces";
import Modal from "./Modal";
import { handleEnterPress } from "../utils/a11y";
import TaskList from "./TaskList";

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
    <div
      style={{ position: "relative", margin: 0, width: "100%" }}
      className="box"
      onClick={toggleModal}
      onKeyPress={ev => handleEnterPress(ev, toggleModal)}
      aria-disabled={disabled}
      {...tabIndex}
    >
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p
              aria-label={!disabled ? value.toDateString() : ""}
              className={mini ? "hover-date" : ""}
            >
              {disabled ? value : value.getDate()}
            </p>
            <TaskList tasks={todayTasks} />
            {!disabled && currentDayId === id && (
              <Modal dayIndex={index} day={day} dispatch={dispatch} />
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default DayBox;
