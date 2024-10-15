import React from "react";
import styled from "styled-components";
import TaskAdd from "../task/taskAdd";
import TaskEdit from "../task/taskEdit";
import { useSelector, useDispatch } from "react-redux";
import { setModalType } from "../../redux/features/stackSlice";
import {
  fetchTasks,
  addTask,
  editTask,
  deleteTask,
} from "../../redux/features/stackSlice";

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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  z-index: 20;
`;

const ModalContent = styled.div`
  text-align: center;
`;

const DashboardModal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.tasks.modalType);
  const modalId = useSelector((state) => state.tasks.modalId); // Get modalId from Redux

  const onClose = () => {
    dispatch(setModalType({ modalType: "none" }));
  };

  if (modalType === "none") {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          {modalType === "new" && <TaskAdd onClose={onClose} />}
          {modalType === "edit" && (
            <TaskEdit taskId={modalId} onClose={onClose} />
          )}
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default DashboardModal;
