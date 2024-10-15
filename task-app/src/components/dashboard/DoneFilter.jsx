import React, { useState } from "react";
import styled from "styled-components";

const DoneFilterFieldsBox = styled.fieldset`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0px;

  legend {
    background-color: white;
    padding: 0.2rem;
    border-radius: 0.5rem;
  }
`;

const DoneFilter = () => {
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Update the selectedStatuses array based on the checkbox state
    if (checked) {
      setSelectedStatuses((prev) => [...prev, name]);
    } else {
      setSelectedStatuses((prev) => prev.filter((status) => status !== name));
    }
  };

  return (
    <DoneFilterFieldsBox>
      <legend>Status:</legend>

      <div>
        <input
          type="checkbox"
          id="feitas"
          name="Feitas"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="feitas">Feitas</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="incompletas"
          name="Incompletas"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="incompletas">Incompletas</label>
      </div>

    </DoneFilterFieldsBox>
  );
};

export default DoneFilter;
