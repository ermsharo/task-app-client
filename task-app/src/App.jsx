import styled from "styled-components";
import "./App.css";
import TaskList from "./components/task/taskList";
import DashboardModal from "./components/dashboard/DashboardModal";
import DoneFilter from "./components/dashboard/DoneFilter";
import TaskAddButton from "./components/dashboard/TaskAddButton";

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-column-gap: 1.5rem;
  width: 100%;
`;

const DashboardBox = styled.div`
  width: 80vw;
  margin: auto;
`;

const DashboardFilters = styled.div`
  padding: 1rem;

`;
const StackList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr ;
 grid-column-gap: 1rem;
 grid-row-gap: 1rem;
`;

const SearchBarBox = styled.div`
  padding: 2rem;
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
  font-size: 1rem;
  color:black;
`;

function App() {
  return (
    <div>
      <Header>Header</Header>
      <DashboardModal></DashboardModal>
      <DashboardBox>
        <div>
          <SearchBarBox>
            <DefaultTextBox placeholder="Digite o titulo que deseja"></DefaultTextBox>
          </SearchBarBox>
        </div>
        <Dashboard>
          <StackList>

            <TaskAddButton />

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
