import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/stackSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice, 
  },
});

export default store;
