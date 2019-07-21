import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { day as iday } from "../interfaces";
import TimePicker from "./TimePicker";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";
import { textColor, backgroundColor, hoverColor } from "../theme";
import "./styles/MountTransition.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const CloseIcon = styled(Close)`
  height: 15px;
  color: ${textColor};
`;
const ModalContainer = styled.div`
  min-height: 250px;
  min-width: 200px;
  position: absolute;
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
  z-index: 3;
  border: 0.5px solid ${hoverColor} !important;
`;
const TaskName = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: transparent !important;
  }
`;
const Modal = (props: { dayIndex: number; day: iday; dispatch: any }) => {
  const { dayIndex, day, dispatch } = props;

  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>("");
  const toggleModal = () => {
    console.log("Toggle modal");
    dispatch({ type: "TOGGLE_MODAL", payload: "" });
  };
  const stopPropagation = (ev: any) => {
    ev.stopPropagation();
  };
  const saveTask = (ev: any) => {
    console.log("save task");
    dispatch({ type: "ADD_TASK", payload: { task: { title, time, day } } });
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="modal"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ModalContainer
        className="box"
        style={{
          left: dayIndex < 3 ? "100px" : "-100px",
          position: "absolute"
        }}
        onClick={stopPropagation}
      >
        <TaskName>
          <h4>{title}</h4>
          <Button ariaLabel="close" onClick={toggleModal}>
            <CloseIcon />
          </Button>
        </TaskName>
        <p>{new Date(day.timeStamp).toDateString()}</p>
        <Input
          label="Add title"
          placeholder="Do important stuff"
          type="text"
          handleChange={setTitle}
          value={title}
        />
        <Button
          ariaLabel="Add an hour"
          onClick={() => setShowTimePicker(!showTimePicker)}
        >
          Add an hour
        </Button>
        {showTimePicker && <TimePicker date={time} handleChange={setTime} />}
        <div>
          <Button ariaLabel="Save button" onClick={saveTask}>
            Save
          </Button>
          <Button
            ariaLabel="Cancel button"
            type="is-light"
            onClick={toggleModal}
          >
            cancel
          </Button>
        </div>
      </ModalContainer>
    </ReactCSSTransitionGroup>
  );
};

export default Modal;
