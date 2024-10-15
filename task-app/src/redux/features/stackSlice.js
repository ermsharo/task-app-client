import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {server_url} from "../../../config";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
  statusFilters: [],
  modalType: "none", 
  modalId: "",
  orderParameter: "data_criação",
  filteredTasks: [],
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(`${server_url}/tasks`);
  return await response.json();
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch(`${server_url}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
});

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ id, updatedTask }) => {
    const response = await fetch(`${server_url}/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    return await response.json();
  },
);

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await fetch(`${server_url}/task/${id}`, {
    method: "DELETE",
  });
  return id;
});

const filterTasksByCompletion = (data, statusArray) => {


  return data.filter(task => 
    statusArray.length === 0 || 
    statusArray.includes(task.completed ? "Feitas" : "Incompletas")
  );
};


const sortByAlphabeticalOrder = (array, key) => {
  return array.sort((a, b) => {
    const valueA = a[key]?.toString().toLowerCase() || ''; 
    const valueB = b[key]?.toString().toLowerCase() || ''; 

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0; 
  });
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setModalType: (state, action) => {
      state.modalType = action.payload.modalType;
      state.modalId = action.payload.modalId || "";
    },
    setOrderFilter: (state, action) => {
      state.orderParameter = action.payload.orderParameter;
      
 
    },
    setStatusFilters: (state, action) => {
      state.statusFilters = action.payload.statusFilters;
      state.filteredTasks = filterTasksByCompletion(state.tasks, action.payload.statusFilters);
    },
    closeModal: (state) => {
      state.modalType = "none";
      state.modalId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
        state.filteredTasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.status = "idle";
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const existingTask = state.tasks.find(
          (task) => task.id === updatedTask.id,
        );
        if (existingTask) {
          Object.assign(existingTask, updatedTask);
        }
        state.status = "idle";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.status = "idle";
      });
  },
});


export const { setModalType, closeModal , setStatusFilters, setOrderFilter} = tasksSlice.actions;
export default tasksSlice.reducer;
