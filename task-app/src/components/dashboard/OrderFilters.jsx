import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setStatusFilters } from "../../redux/features/stackSlice";
import { useSelector, useDispatch } from "react-redux";

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

const OrderFilters = () => {
    const dispatch = useDispatch();

    const [selectedFilter, setSelectedFilter] = useState("data_criação");


    const handleRadioChange = (event) => {
        const { value } = event.target;
        setSelectedFilter(value);
    };

    return (
        <FilterFieldsBox>
            <legend>Ordenar por:</legend>

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

export default OrderFilters;
