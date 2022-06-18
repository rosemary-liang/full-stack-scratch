import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos]  = useState('')

  //initial fetch request when app loads
  useEffect(() => {
    fetch('/api/todos')
    .then(result => setTodos(result))
  }, [])

  

  return (
    <>
      <TodoForm />
      <TodoList todos={todos}/>

    </>
  );
}

export default App;
