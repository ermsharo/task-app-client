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

const ModalContent = styled.div`
  text-align: center;
`;

const DoneFilter = () => {
  return (
    <>
      <fieldset>
        <legend>Fitros:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Feitas</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Incompletas</label>
        </div>
      </fieldset>
    </>
  );
};

export default DoneFilter;
