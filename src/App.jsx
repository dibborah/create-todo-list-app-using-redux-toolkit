import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const App = () => {
  const todos = useSelector((state)=>{
    return state.todos;
  });
  console.log(todos);
  return (
    <div>
      <TodoForm />
      <Todos todos={todos}/>
    </div>
  );
};

export default App;
