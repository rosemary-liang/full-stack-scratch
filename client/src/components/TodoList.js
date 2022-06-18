import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {

  return (
    <ul>
      {
        todos.map(todo => (
          <Todo key={todos.todo_id} />
        ))
      }
    </ul>
  )
}

export default TodoList;
