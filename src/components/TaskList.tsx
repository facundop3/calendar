import React from "react";
import styled from "styled-components";
import { task } from "../interfaces";

const Task = styled.li`
  list-style-type: none;
  border-radius: 6px;
  background-color: rgb(56, 102, 208);
  color: white;
  padding: 0.5em;
`;
const Container = styled.ul`
  position: absolute;
  padding: 0.5em;
  margin: 0;
  top: 0;
  width: 100%;
`;
const TaskList = (props: { tasks: task[] }) => {
  const { tasks } = props;
  return (
    <Container>
      {tasks.map(task => (
        <Task>{task.title}</Task>
      ))}
    </Container>
  );
};

export default TaskList;
