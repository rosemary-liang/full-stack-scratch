import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, getTodos }) => {
  // console.log("TodoList todos", todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todos.todo_id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
