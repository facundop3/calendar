import React, { useContext, useState } from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
import calendarContext from "../context";
import { day } from "../interfaces";

const Modal = (props: { dayIndex: number; day: day }) => {
  const { dayIndex, day } = props;
  const { dispatch } = useContext(calendarContext);
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: "" });
  };
  const stopPropagation = (ev: any) => {
    ev.stopPropagation();
  };
  const [title, setTitle] = useState<string>("");
  return (
    <div
      className="modal-container"
      style={{ left: dayIndex < 3 ? "100px" : "-100px" }}
      onClick={stopPropagation}
    >
      <div className="modal-header">
        <h3>{title}</h3>
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
      />
      <Button ariaLabel="Add an hour" message="Add an hour" />
      <div>
        <Button ariaLabel="Save button" message="Save" />
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
