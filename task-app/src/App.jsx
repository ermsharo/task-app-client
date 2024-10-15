import styled from "styled-components";
import "./App.css";
import TaskList from "./components/task/taskList";
import DashboardModal from "./components/dashboard/DashboardModal";
import DoneFilter from "./components/dashboard/DoneFilter";
import TaskAddButton from "./components/dashboard/TaskAddButton";
import OrderFilters from "./components/dashboard/OrderFilters";

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

const SearchBarBox = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: #82fccb;
  text-align: center;

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
      <Header> <h2>Tarefas</h2></Header>
      <DashboardModal></DashboardModal>
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
  );
}

export default App;
