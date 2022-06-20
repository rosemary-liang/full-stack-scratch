import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, getTodos }) => {
  return (
    <ul className="p-0 my-2">
      {todos.map((todo) => (
        <Todo
          key={todo.todo_id}
          todo_id={todo.todo_id}
          todo={todo}
          getTodos={getTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
