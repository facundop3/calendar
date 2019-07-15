import React, { useContext, useState } from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
import calendarContext from "../context";
import { day as iday } from "../interfaces";
import TimePicker from "./TimePicker";

const Modal = (props: { dayIndex: number; day: iday }) => {
  const { dayIndex, day } = props;
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
        <Button
          ariaLabel="close"
          message="close"
          type="link"
          onClick={toggleModal}
          style={{ alignSelf: "flex-end", fontSize: ".8em", padding: 0 }}
        />
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
        message="Add an hour"
        onClick={() => setShowTimePicker(!showTimePicker)}
      />
      {showTimePicker && <TimePicker date={time} handleChange={setTime} />}
      <div>
        <Button ariaLabel="Save button" message="Save" onClick={saveTask} />
        <Button
          ariaLabel="Cancel button"
          message="Cancel"
          type="secondary"
          onClick={toggleModal}
        />
      </div>
    </div>
  );
};

export default Modal;
