import styled from 'styled-components'
import Task from "./task"
import TaskAdd from './taskAdd'
import { fetchTasks, addTask, editTask, deleteTask } from '../../redux/features/stackSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function TaskDataRequest() {

}




export default function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        if (taskStatus === 'idle') {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);

    if (taskStatus == "loading") {
        return <div>Loading...</div>

    }

    if (taskStatus == "failed") {
        return <div>{error}</div>

    }
    console.log("task status", tasks)
    return (
        <>
            {tasks.map((task) => (
                <Task title = {task.title} description={task.description} completed={task.completed}/>
            ))}

        </>
    )
}

