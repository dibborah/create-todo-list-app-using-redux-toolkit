import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <div>
        {todos &&
          todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
    </div>
  );
};

export default Todos;
