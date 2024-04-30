import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./features/todosOperations";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})

export default store;