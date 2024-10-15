import React from "react";
import styled from "styled-components";
import TaskAdd from "../task/taskAdd";

const DoneFilterFiedlsBox = styled.fieldset`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap:1rem;
  border: 0px;
legend{
  background-color: white; 

  padding: 0.2rem;
  border-radius: 0.5rem;
  background: white;
}
 
`;



const DoneFilter = () => {
  return (
    <>
      <DoneFilterFiedlsBox>
        <legend>Status:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales">Feitas</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Incompletas</label>
        </div>
      </DoneFilterFiedlsBox>
    </>
  );
};

export default DoneFilter;
