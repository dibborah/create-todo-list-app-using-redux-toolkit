import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todosSlice";

const SingleTodo = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTodo({id: id}));
  };
  const handleToggle = () => {
    dispatch(toggleTodo({id: id}));
  };
  return (
    <div className="m-1 p-1 b-2">
      <p className={`${completed ? "t-g" : null}`}>{title}</p>
      <p>{id}</p>
      <p>{completed ? "true" : "false"}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle Completed </button>
    </div>
  );
};

export default SingleTodo;
