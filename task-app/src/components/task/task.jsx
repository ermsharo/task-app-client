import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setModalType, deleteTask, editTask } from "../../redux/features/stackSlice";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;
  margin: auto;
  padding: 1rem;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 1px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? '#4caf50' : '#f0f0f0')};
  border-radius: 4px;
  transition: all 150ms;
  border: 2px solid ${(props) => (props.checked ? '#4caf50' : '#ccc')};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => (props.checked ? '#388e3c' : '#999')};
  }

  &::before {
    content: '${(props) => (props.checked ? '✓' : '')}';
    display: block;
    text-align: center;
    line-height: 24px;
    color: white;
    font-weight: bold;
  }
`;

const TaskBoxRegular = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
`;


const TaskBoxDone = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #2dcc70;
`;


const TaskTitle = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.5rem;
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

const Checkbox = ({ checked, onChange }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={checked} onClick={onChange} />
    <HiddenCheckbox checked={checked} onChange={onChange} />
  </CheckboxContainer>
);

function Task({ title, description, completed, id }) {
  const dispatch = useDispatch();

  const openEditTaskModal = () => {
    dispatch(setModalType({ modalType: "edit", modalId: id }));
  };

  const handleRemoveTask = () => {
    dispatch(deleteTask(id));
  };

  const handleCheckboxChange = () => {
    const editedTask = {
      title: title,
      description: description,
      completed: !completed,
    };
    dispatch(editTask({ id: id, updatedTask: editedTask })).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(fetchTasks());

      } else {
        console.error("Error:", response.error.message);
      }
    });
  };

  return (
    <> {(completed) ? (<TaskBoxDone>
      <TaskTitle>
        <h3>{title}</h3>
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
      </TaskTitle>
      <p>{description}</p>

    

    </TaskBoxDone>) : (<TaskBoxRegular>
      <TaskTitle>
        <h3>{title}</h3>
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
      </TaskTitle>
      <p>{description}</p>

      <TaskButtonBox>
        <DefaultButton onClick={openEditTaskModal}>Editar</DefaultButton>
        <DefaultButton onClick={handleRemoveTask}>Remover</DefaultButton> {/* Attach handleRemoveTask to onClick */}
      </TaskButtonBox>

    </TaskBoxRegular>)}</>


  );
}

export default Task;
