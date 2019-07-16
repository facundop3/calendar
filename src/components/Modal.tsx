import React, { useContext, useState } from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
import { day as iday } from "../interfaces";
import TimePicker from "./TimePicker";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";

const CloseIcon = styled(Close)`
  height: 15px;
`;
const Modal = (props: { dayIndex: number; day: iday; context: any }) => {
  const { dayIndex, day } = props;
  const calendarContext = props.context;
  const { dispatch } = useContext(calendarContext);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>("");
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: "" });
  };
  const stopPropagation = (ev: any) => {
    ev.stopPropagation();
  };
  const saveTask = (ev: any) => {
    dispatch({ type: "ADD_TASK", payload: { task: { title, time, day } } });
  };

  return (
    <div
      className="modal-container"
      style={{ left: dayIndex < 3 ? "100px" : "-100px" }}
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
        <Button
          ariaLabel="Cancel button"
          type="secondary"
          onClick={toggleModal}
        >
          cancel
        </Button>
      </div>
    </div>
  );
};

export default Modal;
