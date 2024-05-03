import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learn codProg.com",
    completed: true,
  },
  {
    id: 2,
    title: "Learn JS",
    completed: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   // const { payload } = newTodo;
    //   // return [...state, payload];
    //   state.push(action.payload);
    // },
    addTodo: {
      reducer: (state, action) => {
        // console.log("reducer run", action)
        state.push(action.payload);
      },
      prepare: (title) => {
        // console.log("Prepare run");
        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      // return state.map((todo) => {
      //   if (todo.id == id.payload) {
      //     return { ...todo, completed: !todo.completed };
      //   }
      //   return todo;
      // });
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed; // redux keeps current states preserve and implicitly returns unchanged state using IMMERSE JS
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
