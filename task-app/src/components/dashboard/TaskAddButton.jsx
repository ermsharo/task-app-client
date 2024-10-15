import React from "react";
import styled from "styled-components";
import TaskAdd from "../task/taskAdd";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(100, 98, 98, 0.644);
  border-radius: 8px;
  z-index: 20;
`;

const AddButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const TaskAddButton = () => {
  return <AddButton>Adicionar tarefa</AddButton>;
};

export default TaskAddButton;
