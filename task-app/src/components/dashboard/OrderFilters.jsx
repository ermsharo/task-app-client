import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setOrderFilter , setOrderData } from "../../redux/features/stackSlice"; // Ensure this is the correct slice
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

const orderByTitle = (array) => {
    return array.slice().sort((a, b) => a.title.localeCompare(b.title));
};


const orderById = (array) => {
    return array.slice().sort((a, b) => a.id - b.id);
};


const orderByCompleted = (array) => {
    return array.slice().sort((a, b) => {
        if (a.completed === b.completed) {
            return 0;
        }
        return a.completed ? -1 : 1;
    });
};

const RadioButtonFilter = () => {
    const dispatch = useDispatch();
    const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
    const [selectedFilter, setSelectedFilter] = useState("data_criação");
    

    useEffect(() => {
        dispatch(setOrderFilter({ orderParameter: selectedFilter }));
        console.log("Filtered tasks", filteredTasks)
        if(selectedFilter == "data_criação"){
            let sorted_by_creation_time = orderById(filteredTasks)
            console.log("Filtered data", sorted_by_creation_time)
            dispatch(setOrderData({ filteredTasks: sorted_by_creation_time }));
        }
        if(selectedFilter == "tipo"){
            let sorted_by_type = orderByCompleted(filteredTasks)
            console.log("Filtered data by type", sorted_by_type)
            dispatch(setOrderData({ filteredTasks: sorted_by_type }));

        }
        if(selectedFilter == "alfabetica"){
            let sorted_by_title = orderByTitle(filteredTasks)
            console.log("Filtered data alfabetic order ", sorted_by_title)
            dispatch(setOrderData({ filteredTasks: sorted_by_title }));

        }

    }, [selectedFilter, dispatch]);

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setSelectedFilter(value);
        console.log("order filters", selectedFilter)
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
