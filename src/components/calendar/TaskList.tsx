import React from 'react'
import styled from 'styled-components'
import { Task as TaskI } from '../../interfaces'
import ReactTooltip from 'react-tooltip'
const uuidv1 = require('uuid/v1')
const Task = styled.li`
  list-style-type: none;
  border-radius: 6px;
  color: white;
  padding: 0.25em 0.5em;
  width: 100%;
  background-color: #3273dc;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  margin: 0.1em;
`
const Container = styled.ul`
  position: absolute;
  padding: 0.5em;
  margin: 0;
  top: 0;
  width: 100%;
  display: contents;
`
const TitleSpan = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`

const TaskList = (props: { tasks: TaskI[] }) => {
  const { tasks } = props
  return (
    <Container>
      {tasks.map(({ title, time }, i) => (
        <Task
          key={uuidv1()}
          data-tip={`${i + 1} - ${title}`}
          data-iscapture="true"
        >
          {time} <TitleSpan>{title}</TitleSpan>
        </Task>
      ))}
      <ReactTooltip place="top" type="dark" effect="float" />
    </Container>
  )
}

export default TaskList
