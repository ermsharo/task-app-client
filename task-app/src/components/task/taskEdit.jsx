import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  editTask,
  fetchTasks,
  setModalType,
} from "../../redux/features/stackSlice"; // Import the addTask action

const TaskBox = styled.div`
  padding: 1rem;
`;

const TaskButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
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
  const tasks = useSelector((state) => state.tasks.tasks);
  const actualStack = filter_task_by_id(tasks, taskId);
  const [title, setTitle] = useState(actualStack.title);
  const [description, setDescription] = useState(actualStack.description);


  const dispatch = useDispatch();

  const handleSave = () => {
    const editedTask = {
      title: title,
      description: description,
    };

    dispatch(editTask({ id: taskId, updatedTask: editedTask })).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setTitle("");
        setDescription("");
        dispatch(fetchTasks());
        dispatch(setModalType({ modalType: "none", modalId: "" }));
      } else {
        console.error("Error:", response.error.message);
      }
    });
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
