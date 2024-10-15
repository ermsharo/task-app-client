import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setStatusFilters } from "../../redux/features/stackSlice";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const [selectedStatuses, setSelectedStatuses] = useState(["Feitas", "Incompletas"]);
  useEffect(() => {
    dispatch(setStatusFilters({ statusFilters: selectedStatuses }));
  }, [selectedStatuses, dispatch]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

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
          checked={selectedStatuses.includes("Feitas")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="feitas">Feitas</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="incompletas"
          name="Incompletas"
          checked={selectedStatuses.includes("Incompletas")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="incompletas">Incompletas</label>
      </div>

    </DoneFilterFieldsBox>
  );
};

export default DoneFilter;
