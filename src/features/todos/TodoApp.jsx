import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {

  return (
    <div>
      <AddTodoForm />
      <TodoList/>
    </div>
  );
};

export default TodoApp;
