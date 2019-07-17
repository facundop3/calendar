import React, { useState } from "react";
// import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
import { day as iday } from "../interfaces";
import TimePicker from "./TimePicker";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";

const CloseIcon = styled(Close)`
  height: 15px;
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
    <div
      // className="modal"
      style={{
        left: dayIndex < 3 ? "100px" : "-100px",
        position: "absolute",
        zIndex: 2
      }}
      onClick={stopPropagation}
    >
      <div className="modal-header">
        <h4>{title}</h4>
        <Button ariaLabel="close" type="link" onClick={toggleModal}>
          <CloseIcon />
        </Button>
      </div>
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
    </div>
  );
};

export default Modal;
