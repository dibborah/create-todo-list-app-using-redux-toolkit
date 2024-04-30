import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  
  const newTodo = {
    id: nanoid(),
    title: title,
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo"
        name="todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
