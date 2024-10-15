import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import Task from "./components/task/task";
import TaskAdd from "./components/task/taskAdd";
import "./App.css";
import TaskList from "./components/task/taskList";
import DashboardModal from "./components/dashboard/DashboardModal";
import DoneFilter from "./components/dashboard/DoneFilter";

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
`;

const DashboardBox = styled.div`
  width: 70vw;
  margin: auto;
`;

const DashboardFilters = styled.div`
  padding: 1rem;
  padding-top: 2rem;
`;
const StackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchBarBox = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: #82fccb;
`;

const DefaultTextBox = styled.input`
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: calc(100% - 1rem);
  margin: auto;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header>Header</Header>
      <DashboardModal
        show={isOpen}
        onClose={() => setIsOpen(false)}
      ></DashboardModal>
      <DashboardBox>
        <div>
          <SearchBarBox>
            <DefaultTextBox placeholder="Barra de pesquisa"></DefaultTextBox>
          </SearchBarBox>
        </div>
        <Dashboard>
          <StackList>
            <div>
              <button onClick={() => setIsOpen(true)}>Adicionar tarefa</button>
            </div>
            <TaskList />
          </StackList>
          <DashboardFilters>
            <DoneFilter />
          </DashboardFilters>
        </Dashboard>
      </DashboardBox>
    </div>
  );
}

export default App;
