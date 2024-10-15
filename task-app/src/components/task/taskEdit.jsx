import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60vw;
  margin: auto;
  padding: 1rem;
`;

const TaskBox = styled.div`
  padding: 1rem;
`;

const TaskButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const DefaultButton = styled.div`
  background-color: #81fccb;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DefaultTextBox = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: calc(100% - 1rem);
  margin: auto;
`;

const filter_task_by_id = (tasksArray, taskId) => {
  return tasksArray.find((task) => task.id === taskId);
};

function TaskEdit({ taskId }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const actualStack = filter_task_by_id(tasks, taskId);
  console.log("Actual stack", actualStack);
  const [title, setTitle] = useState(actualStack.title);
  const [description, setDescription] = useState(actualStack.description);

  const handleSave = () => {
    const newTask = {
      title: title,
      description: description,
    };
  };

  return (
    <TaskBox>
      <h2>Editar tarefa</h2>

      <DefaultTextBox
        type="text"
        value={title}
        placeholder="Nome da tarefa"
        onChange={(e) => setTitle(e.target.value)}
      />

      <p>
        <DefaultTextBox
          type="text"
          value={description}
          placeholder="Descrição da tarefa"
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <TaskButtonBox>
        <DefaultButton onClick={handleSave}>Salvar</DefaultButton>
      </TaskButtonBox>
    </TaskBox>
  );
}

export default TaskEdit;
