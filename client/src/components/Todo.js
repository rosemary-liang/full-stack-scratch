import React from "react";

const Todo = ({ todo }) => {
  // const handleCheckboxClick = (e) => {};

  // const handleRemoveClick = (e) => {};

  return (
    <div>
      <input type="checkbox" />
      <li>{todo.description}</li>
      <button>Remove</button>
    </div>
  );
};

export default Todo;
