import React, { useState } from 'react'
import { Button, Input } from '../elements'
import TimePicker, { TimePickerValue } from 'react-time-picker'
import { Close } from 'styled-icons/material/Close'
import styled from 'styled-components'
import { closeModal, addTask } from '../../state/actionCreators'
import { useCalendar } from '../../state/contexts'
import { getHHMM } from '../../utils/dates'

const ModalOverly = styled.div`
  position: fixed; /* Positioning and size */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.5); /* color */
`

const ModalForm = styled.form`
  max-height: 272px;
  max-width: 530px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  position: fixed;
  background-color: #fafafa;
  top: 35%;
  left: 40%;

  @media screen and (max-width: 768px) {
    left: 0;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #f2f3f4;
  button {
    background-color: transparent !important;
  }
`

const CloseIcon = styled(Close)`
  height: 15px;
  color: #000;
`
const ModalBody = styled.div`
  padding: 1em;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ModalBodyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
`

const CustomTimePicker = styled(TimePicker)`
  .react-time-picker__wrapper {
    border: none;
    box-shadow: 0px 1px 3px 1px rgba(10, 10, 10, 0.1);
    border-radius: 4px;
  }
  .react-time-picker__clock {
    box-shadow: 0px 1px 3px 1px rgba(10, 10, 10, 0.1);
    border-radius: 4px;
  }
`

const Modal = () => {
  // TODO: use `currentDayIndex` to place the modal near the day the user clicked
  const [{ selectedTimestamp, showModal }, dispatch] = useCalendar()
  const [taskTime, setTaskTime] = useState<TimePickerValue>(getHHMM(new Date()))
  const [title, setTitle] = useState<string>('')
  const stopPropagation = (ev: React.MouseEvent) => {
    ev.stopPropagation()
  }
  const handleClose = () => {
    dispatch(closeModal())
  }
  const saveTask = () => {
    const task = {
      title,
      time: taskTime,
      day: { timestamp: selectedTimestamp, disabled: false },
    }
    dispatch(addTask(task))
    setTitle('')
    dispatch(closeModal())
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    title && saveTask()
  }

  if (!showModal) {
    return null
  }
  return (
    <ModalOverly onClick={handleClose}>
      <ModalForm onClick={stopPropagation} onSubmit={handleSubmit}>
        <ModalHeader>
          <Button ariaLabel="close" onClick={handleClose} type="button">
            <CloseIcon />
          </Button>
        </ModalHeader>
        <ModalBody>
          <Input
            placeholder="Add a title"
            type="text"
            setTitle={setTitle}
            value={title}
          />
          <ModalBodyItem>
            <p>{new Date(selectedTimestamp).toDateString()}</p>
            <CustomTimePicker value={taskTime} onChange={setTaskTime} />
          </ModalBodyItem>
          <div>
            <Button ariaLabel="Save button" type="submit" btnType="info">
              Save
            </Button>
            <Button
              type="button"
              ariaLabel="Cancel button"
              onClick={handleClose}
              btnType="light"
            >
              Cancel
            </Button>
          </div>
        </ModalBody>
      </ModalForm>
    </ModalOverly>
  )
}

export default Modal
