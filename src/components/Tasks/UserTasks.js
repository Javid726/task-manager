import styled from 'styled-components';
import Task from './Task';
import { useState } from 'react';

const MainTitle = styled.h3`
  font-size: 2rem;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
`;

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #090c9b;
  color: #fdfdfd;
  width: 10rem;
  cursor: pointer;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  margin-top: 2rem;
`;

const Tasks = styled.div``;

const UserTasks = () => {
  const [addTask, setAddTask] = useState(false);

  const handleCancelAddTask = () => setAddTask(false);

  return (
    <Tasks>
      <MainTitle>Your Tasks</MainTitle>
      <TaskContent>
        {addTask ? (
          <Task onCancelAddTask={handleCancelAddTask} />
        ) : (
          <>
            <Paragraph>Currently you don't have any!</Paragraph>
            <Button onClick={() => setAddTask(true)}>+ Task</Button>
          </>
        )}
      </TaskContent>
    </Tasks>
  );
};

export default UserTasks;
