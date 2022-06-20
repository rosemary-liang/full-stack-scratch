import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //initial fetch request when app loads

  const getTodos = () => {
    const req = {
      method: "GET",
    };
    fetch("/api/todos", req)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (todos.length > 1) {
    console.log("todos:", todos);
    return (
      <div className="d-flex flex-column align-items-center w-100 container my-2">
        <TodoForm getTodos={getTodos} />
        <TodoList todos={todos} getTodos={getTodos} />
      </div>
    );
  }
}

export default App;
