import styled from "styled-components";
import "./App.css";
import TaskList from "./components/task/taskList";
import DashboardModal from "./components/dashboard/DashboardModal";
import DoneFilter from "./components/dashboard/DoneFilter";
import OrderFilters from "./components/dashboard/OrderFilters";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes.js';
import { GlobalStyles } from './styles/globalStyles.js';


const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-column-gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 950px) {
    grid-template-columns:  1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1rem;
  }
`;

const DashboardBox = styled.div`
  width: 80vw;
  margin: auto;
  padding: 2rem;

  @media screen and (max-width: 1200px) {
    width: 90vw;
  }

  @media screen and (max-width: 950px) {
    width: 85vw;
    padding: 0px;
 }
`;

const DashboardFilters = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap:2rem;

`;
const StackList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr ;
 grid-column-gap: 1rem;
 grid-row-gap: 1rem;
 @media screen and (max-width: 950px) {
  grid-template-columns: 1fr 1fr  ;
 }

 @media screen and (max-width: 720px) {
  grid-template-columns: 1fr  ;
 }
`;


const Header = styled.div`
display: flex;
  padding: 1.5rem 2rem;
  background-color: #0b8b58;
  text-align: center;
  color:white; 
  justify-content: space-between;

`;


const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  background-color:  ${({ theme }) => theme.background}; 
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  margin-top: 1rem;
`;


const ToggleButtonDark = styled.button`
  background: #1E201E;
  color: #FAFAFA;
  background-color:  #1E201E;
  border: 2px solid #FAFAFA;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  margin-top: 1rem;
`;



function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Header> <h2>Tarefas</h2> 
        
        {theme === 'light' && <ToggleButtonDark onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} 
        </ToggleButtonDark>    }
        {theme === 'dark' && <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} 
        </ToggleButton>}
            </Header>
   
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  
      <GlobalStyles />
      
      <DashboardModal></DashboardModal>
      <div style={{ textAlign: 'center', padding: '2rem' }}>

      <DashboardBox>
        <Dashboard>
          <DashboardFilters>
            <DoneFilter />
            <OrderFilters />
          </DashboardFilters>
          <StackList>
            <TaskList />
          </StackList>

        </Dashboard>
      </DashboardBox>

      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
