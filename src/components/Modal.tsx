import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { day as iday } from "../interfaces";
import TimePicker from "./TimePicker";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";

const CloseIcon = styled(Close)`
  height: 15px;
`;
const ModalContainer = styled.div`
  min-height: 250px;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 3;
`;
const TaskName = styled.div`
  display: flex;
  justify-content: space-between;
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
        <Button ariaLabel="close" type="link" onClick={toggleModal}>
          <CloseIcon />
        </Button>
      </TaskName>
      <p>{day.value.toDateString()}</p>
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
        <Button ariaLabel="Cancel button" type="is-light" onClick={toggleModal}>
          cancel
        </Button>
      </div>
    </ModalContainer>
  );
};

export default Modal;
