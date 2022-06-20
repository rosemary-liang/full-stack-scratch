import React from "react";

const Todo = ({ todo, getTodos, todo_id }) => {
  const completed = todo.completed;
  const handleCheckboxClick = (e) => {
    const reqObject = {
      completed: !completed,
      todo_id: todo_id,
    };

    const req = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqObject),
    };

    fetch("/api/todos", req)
      .then((res) => res.json())
      .then((todo) => {
        if (todo) {
          getTodos();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleRemoveClick = (e) => {
    const reqObject = {
      todo_id: todo_id,
    };

    const req = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqObject),
    };

    fetch("/api/todos", req)
      .then((res) => res.json())
      .then((deleted) => {
        if (deleted) getTodos();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex align-items-center align-content-center justify-content-between">
      <div className="d-flex align-items-center align-content-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxClick}
        />
        <p className="m-0 ps-1">{todo.description}</p>
      </div>
      <button className="ms-5" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default Todo;
