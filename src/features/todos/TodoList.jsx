import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const todos  = useSelector((state) => {
    return state.todos;
  });
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return <SingleTodo key={todo.id} {...todo} />;
        })}
    </div>
  );
};

export default TodoList;
