import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setOrderFilter } from "../../redux/features/stackSlice"; // Ensure this is the correct slice
import { useDispatch } from "react-redux";

const FilterFieldsBox = styled.fieldset`
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

const RadioButtonFilter = () => {
  const dispatch = useDispatch();

  // Initialize selected filter with a default value
  const [selectedFilter, setSelectedFilter] = useState("data_criação");

  // Update the Redux store whenever selectedFilter changes
  useEffect(() => {
    dispatch(setOrderFilter({ orderParameter: selectedFilter }));
  }, [selectedFilter, dispatch]);

  // Handle radio button change
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedFilter(value); 
    console.log("order filters", selectedFilter) // Update selectedFilter on change
  };

  return (
    <FilterFieldsBox>
      <legend>Ordenar por :</legend>

      <div>
        <input
          type="radio"
          id="data_criação"
          name="filter"
          value="data_criação"
          checked={selectedFilter === "data_criação"}
          onChange={handleRadioChange}
        />
        <label htmlFor="data_criação">Data Criação</label>
      </div>

      <div>
        <input
          type="radio"
          id="tipo"
          name="filter"
          value="tipo"
          checked={selectedFilter === "tipo"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tipo">Tipo</label>
      </div>

      <div>
        <input
          type="radio"
          id="alfabetica"
          name="filter"
          value="alfabetica"
          checked={selectedFilter === "alfabetica"}
          onChange={handleRadioChange}
        />
        <label htmlFor="alfabetica">Alfabética</label>
      </div>
    </FilterFieldsBox>
  );
};

export default RadioButtonFilter;
