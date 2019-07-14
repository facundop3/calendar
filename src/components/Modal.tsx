import React, { useContext } from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
import calendarContext from "../context";
const Modal = () => {
  const { dispatch } = useContext(calendarContext);
  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: "" });
  };
  return (
    <div className="modal-container">
      <Button
        ariaLabel="close"
        message="close"
        type="link"
        onClick={toggleModal}
        style={{ alignSelf: "flex-end", fontSize: ".8em", padding: 0 }}
      />
      <Input
        label="Add title and hour"
        placeholder="Do important stuff"
        type="text"
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
