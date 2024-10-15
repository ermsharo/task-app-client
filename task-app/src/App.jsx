import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import Task from "./components/task/task"
import TaskAdd from './components/task/taskAdd'
import './App.css'
import TaskList from './components/task/taskList'

const Dashboard = styled.div`
display: flex;
flex-direction: column;
gap:1rem; 
width: 60vw;
margin: auto;
padding: 1rem;
`


const SearchBarBox = styled.div`
  padding: 1rem;

`

const Header = styled.div`
padding: 1rem;
background-color: #82fccb;


`

const DefaultTextBox = styled.input`
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: calc(100% - 1rem);
  margin:auto; 
`;


function App() {


  return (
    <div>
      <Header>Header</Header>
      <Dashboard>
        <SearchBarBox>
          <DefaultTextBox placeholder="Barra de pesquisa" ></DefaultTextBox>
        </SearchBarBox>
        <TaskAdd />
        <TaskList />
      </Dashboard>
    </div>
  )
}

export default App
