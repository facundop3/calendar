import React, { useState } from 'react'
import { Button, Input, TimePicker } from '../elements'
import { Close } from 'styled-icons/material/Close'
import styled from 'styled-components'
import { TOGGLE_MODAL, ADD_TASK } from '../../state/actions'
import { useCalendar } from '../../state/context'
const CloseIcon = styled(Close)`
  height: 15px;
`
const ModalContainer = styled.form`
  min-height: 250px;
  min-width: 200px;
  position: fixed;
  background-color: #fafafa !important;
  z-index: 3;
  border: 0.5px solid #fafafa !important;
`
const TaskName = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: transparent !important;
  }
`
const Modal = () => {
  const [
    { selectedTimestamp, currentDayIndex, showModal },
    dispatch,
  ] = useCalendar()
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
  const [time, setTime] = useState<Date>(new Date())
  const [title, setTitle] = useState<string>('')
  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: '' })
  }
  const stopPropagation = (ev: React.MouseEvent) => {
    ev.stopPropagation()
  }
  const saveTask = () => {
    dispatch({
      type: ADD_TASK,
      payload: {
        task: {
          title,
          time,
          day: { timestamp: selectedTimestamp, disabled: false },
        },
      },
    })
    setTitle('')
    dispatch({
      type: TOGGLE_MODAL,
      payload: {
        timestamp: selectedTimestamp,
        showModal: false,
        currentDayIndex,
      },
    })
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    console.log(ev)
    console.log(title)
    title && saveTask()
  }

  if (!showModal) {
    return null
  }
  return (
    <ModalContainer
      className="box"
      onClick={stopPropagation}
      onSubmit={handleSubmit}
    >
      <TaskName>
        <h4>{title}</h4>
        <Button ariaLabel="close" onClick={toggleModal} type="button">
          <CloseIcon />
        </Button>
      </TaskName>
      <p>{new Date(selectedTimestamp).toDateString()}</p>
      <Input
        label="Add title"
        placeholder="Do important stuff"
        type="text"
        setTitle={setTitle}
        value={title}
      />
      <Button
        type="button"
        ariaLabel="Add an hour"
        onClick={() => setShowTimePicker(!showTimePicker)}
      >
        Add an hour
      </Button>
      {showTimePicker && <TimePicker date={time} handleChange={setTime} />}
      <div>
        <Button ariaLabel="Save button" type="submit">
          Save
        </Button>
        <Button
          type="button"
          ariaLabel="Cancel button"
          className="is-light"
          onClick={toggleModal}
        >
          cancel
        </Button>
      </div>
    </ModalContainer>
  )
}

export default Modal
