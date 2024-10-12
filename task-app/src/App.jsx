import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import Task from "./components/task/task"
import TaskAdd from './components/task/taskAdd'
import './App.css'

const Dashboard = styled.div`
display: flex;
flex-direction: column;
gap:1rem; 
width: 60vw;
margin: auto;
padding: 1rem;
`


const SearchBarBox = styled.div`
display: grid;
grid-template-columns: 80% 20%;

`

const DefaultTextBox = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: calc(100% - 1rem);
  margin:auto; 
`;


function App() {


  return (
    <Dashboard>

      <div>Seletor de estilo aqui</div>

      <SearchBarBox>
        <div>  
          <DefaultTextBox   placeholder="Barra de pesquisa" ></DefaultTextBox>

        </div>
        <div>Filtros</div>


      </SearchBarBox>
      <TaskAdd />
      <Task />

    </Dashboard>
  )
}

export default App
