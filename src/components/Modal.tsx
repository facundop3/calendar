import React from "react";
import "./styles/Modal.css";
import Button from "./Button";
import Input from "./Input";
const Modal = (props: { closeModal: () => void }) => {
  const { closeModal } = props;
  return (
    <div className="modal-container">
      <Button
        ariaLabel="close"
        message="close"
        type="link"
        onClick={closeModal}
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
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default Modal;
