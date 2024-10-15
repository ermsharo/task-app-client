import React from "react";
import styled from "styled-components";
import TaskAdd from "../task/taskAdd";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setModalType, closeModal } from "../../redux/features/stackSlice";

const AddButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;

`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding: 0rem 1rem;
  font-size: 1.5rem;
`;

const TextAlign = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
 
`;

const TaskAddButton = () => {
  const dispatch = useDispatch();
  const openNewTaskModal = () => {
    dispatch(setModalType({ modalType: "new" }));
  };

  return (
    <AddButton
      onClick={() => {
        openNewTaskModal();
      }}
    >
      <TextAlign><h3>Adicionar tarefa</h3></TextAlign>

      <IconBox>
        <IoMdAddCircle />
      </IconBox>
    </AddButton>
  );
};

export default TaskAddButton;
