import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import {
  addTask,
  fetchTasks,
  setModalType,
} from "../../redux/features/stackSlice"; // Import the addTask action

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

function TaskAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    const newTask = {
      title: title,
      description: description,
    };

    dispatch(addTask(newTask)).then((response) => {
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
      <h2>Nova tarefa</h2>
      <h2>
        <DefaultTextBox
          type="text"
          value={title}
          placeholder="Nome da tarefa"
          onChange={(e) => setTitle(e.target.value)}
        />
      </h2>
      <p>
        <DefaultTextBox
          type="text"
          value={description}
          placeholder="Descrição da tarefa"
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <TaskButtonBox>
        <DefaultButton onClick={handleSave}>Criar</DefaultButton>
      </TaskButtonBox>
    </TaskBox>
  );
}

export default TaskAdd;
