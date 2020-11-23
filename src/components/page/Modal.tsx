import React, { useState } from 'react'
import { Button, Input, TimePicker } from '../elements'
import { Close } from 'styled-icons/material/Close'
import styled from 'styled-components'
import { TOGGLE_MODAL, ADD_TASK } from '../../state/actions'
import { useCalendar } from '../../state/context'

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
  overflow: hidden;
  top: 35%;
  left: 40%;
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
  align-items: center;
  padding: 1em;
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
    <ModalOverly onClick={toggleModal}>
      <ModalForm onClick={stopPropagation} onSubmit={handleSubmit}>
        <ModalHeader>
          <Button ariaLabel="close" onClick={toggleModal} type="button">
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
            {/* TODO: FIX the ugly add an hour UI */}
            <Button
              type="button"
              ariaLabel="Add an hour"
              onClick={() => setShowTimePicker(!showTimePicker)}
            >
              Add an hour
            </Button>
            {showTimePicker && (
              <TimePicker date={time} handleChange={setTime} />
            )}
          </ModalBodyItem>
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
        </ModalBody>
      </ModalForm>
    </ModalOverly>
  )
}

export default Modal
