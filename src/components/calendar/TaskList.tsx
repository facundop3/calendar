import React from 'react'
import styled from 'styled-components'
import { Task as TaskI } from '../../interfaces'
const uuidv1 = require('uuid/v1')
const Task = styled.li`
  list-style-type: none;
  border-radius: 6px;
  color: white;
  padding: 0.5em;
  width: 100%;
`
const Container = styled.ul`
  position: absolute;
  padding: 0.5em;
  margin: 0;
  top: 0;
  width: 100%;
  display: contents;
`
const TaskList = (props: { tasks: TaskI[] }) => {
  const { tasks } = props
  return (
    <Container>
      {tasks.map((task) => (
        <Task className="tag is-link" key={uuidv1()}>
          {task.title}
        </Task>
      ))}
    </Container>
  )
}

export default TaskList
