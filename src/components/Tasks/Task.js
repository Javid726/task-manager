import { useState } from 'react';
import styled from 'styled-components';

import Select from 'react-select';
// import { assigneeOptions } from '../data';

const TaskContainer = styled.div`
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
`;

const TaskTitle = styled.input`
  width: 80%;
  border: 1px solid #d6d9de;
  border-radius: 0.9rem;
  font-size: 1.6rem;
  height: 4rem;
  padding: 0.6rem 2rem;
  transition: border-color 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  margin: 2rem 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const TaskContent = styled.textarea`
  width: 80%;
  border: 1px solid #d6d9de;
  border-radius: 0.9rem;
  font-size: 1.6rem;
  font-family: inherit;
  height: 10rem;
  padding: 0.6rem 2rem;
  transition: border-color 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #090c9b;
  color: #fdfdfd;
  width: 20rem;
  cursor: pointer;
`;

const TaskDeadline = styled.input`
  width: 40%;
  border: 1px solid #d6d9de;
  border-radius: 0.9rem;
  font-size: 1.6rem;
  height: 4rem;
  padding: 0.6rem 2rem;

  transition: border-color 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Assignees = styled.div`
  flex: 1;
`;

const TaskDetails = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Task = props => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignee, setAssignee] = useState([]);
  const [status, setStatus] = useState('');

  const createTask = () => {
    console.log(taskTitle, taskDescription, deadline, assignee, status);
  };

  return (
    <TaskContainer>
      <TaskTitle
        placeholder="Title"
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)}
      ></TaskTitle>
      <TaskContent
        placeholder="Description"
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
      ></TaskContent>

      <TaskDetails>
        <TaskDeadline
          type="date"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
        ></TaskDeadline>
        <Assignees>
          <Select
            closeMenuOnSelect={false}
            defaultValue={'Javid'}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            // options={assigneeOptions}
          />
        </Assignees>
      </TaskDetails>

      <Button onClick={createTask}>Create Task</Button>
      <Button onClick={props.onCancelAddTask}>Cancel</Button>
    </TaskContainer>
  );
};

export default Task;
