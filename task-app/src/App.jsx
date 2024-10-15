import styled from "styled-components";
import "./App.css";
import TaskList from "./components/task/taskList";
import DashboardModal from "./components/dashboard/DashboardModal";
import DoneFilter from "./components/dashboard/DoneFilter";
import TaskAddButton from "./components/dashboard/TaskAddButton";

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  width: 100%;
`;

const DashboardBox = styled.div`
  width: 50vw;
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
  return (
    <div>
      <Header>Header</Header>
      <DashboardModal></DashboardModal>
      <DashboardBox>
        <div>
          <SearchBarBox>
            <DefaultTextBox placeholder="Barra de pesquisa"></DefaultTextBox>
          </SearchBarBox>
        </div>
        <Dashboard>
          <StackList>
            <div>
              <TaskAddButton />
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
