import React, { useState } from 'react'
import { Button, Input, TimePicker } from '../elements'
import { Day, Action } from '../../interfaces'
import { Close } from 'styled-icons/material/Close'
import styled from 'styled-components'
import { textColor, backgroundColor, hoverColor } from '../../theme'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations/styles.css'
import { TOGGLE_MODAL, ADD_TASK } from '../../state/actions'
const CloseIcon = styled(Close)`
  height: 15px;
  color: ${textColor};
`
const ModalContainer = styled.div`
  min-height: 250px;
  min-width: 200px;
  position: absolute;
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
  z-index: 3;
  border: 0.5px solid ${hoverColor} !important;
`
const TaskName = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: transparent !important;
  }
`
const Modal = (props: {
  dayIndex: number
  day: Day
  dispatch?: React.Dispatch<Action>
}) => {
  const { dayIndex, day, dispatch } = props

  const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
  const [time, setTime] = useState<Date>(new Date())
  const [title, setTitle] = useState<string>('')
  const toggleModal = () => {
    dispatch && dispatch({ type: TOGGLE_MODAL, payload: '' })
  }
  const stopPropagation = (ev: React.MouseEvent) => {
    ev.stopPropagation()
  }
  const saveTask = () => {
    dispatch &&
      dispatch({ type: ADD_TASK, payload: { task: { title, time, day } } })
  }
  const handleEnter = (ev: React.KeyboardEvent) => {
    ev.key === 'Enter' && saveTask()
  }
  return (
    <ReactCSSTransitionGroup
      transitionName="modal"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ModalContainer
        className="box"
        style={{
          left: dayIndex < 3 ? '100px' : '-240px',
          position: 'absolute',
        }}
        onClick={stopPropagation}
      >
        <TaskName>
          <h4>{title}</h4>
          <Button ariaLabel="close" onClick={toggleModal}>
            <CloseIcon />
          </Button>
        </TaskName>
        <p>{new Date(day.timeStamp).toDateString()}</p>
        <Input
          label="Add title"
          placeholder="Do important stuff"
          type="text"
          setTitle={setTitle}
          value={title}
          handleEnter={handleEnter}
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
            type="is-light"
            onClick={toggleModal}
          >
            cancel
          </Button>
        </div>
      </ModalContainer>
    </ReactCSSTransitionGroup>
  )
}

export default Modal
