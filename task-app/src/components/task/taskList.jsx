import Task from "./task";
import {
  fetchTasks,
  addTask,
  editTask,
  deleteTask,
} from "../../redux/features/stackSlice";
import { useSelector, useDispatch } from "react-redux";
import TaskAddButton from "../dashboard/TaskAddButton";
import { useEffect } from "react";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.filteredTasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  if (taskStatus == "loading") {
    return <div>Loading...</div>;
  }

  if (taskStatus == "failed") {
    return <div>{error}</div>;
  }

  return (
    <>
      <TaskAddButton />
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            title={task.title}
            description={task.description}
            completed={task.completed}
            id={task.id}
          />
        </div>
      ))}
    </>
  );
}
