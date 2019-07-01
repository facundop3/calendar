import React from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
const Modal: React.FC = () => {
  return (
    <div className="modal-container">
      <Input
        label="Add title and hour"
        placeholder="Do important stuff"
        type="text"
      />
      <Button ariaLabel="Add an hour" message="Add an hour" />
      <div>
        <Button ariaLabel="Save button" message="Save" />
        <Button ariaLabel="Cancel button" message="Cancel" type="secondary" />
      </div>
    </div>
  );
};

export default Modal;
