import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 1,
  title: "Learn codProg.com",
  completed: true,
}];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
  },
});

export const todosReducer = todosSlice.reducer;

