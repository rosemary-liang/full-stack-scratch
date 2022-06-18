import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <li>{todo.description}</li>
      <button>Remove</button>
    </div>
  );
};

export default Todo;
