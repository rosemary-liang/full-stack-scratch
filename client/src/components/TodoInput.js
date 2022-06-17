import React, { useState } from "react";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState(null);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    //fetch request to submit
    console.log("newTodo:", newTodo);
    e.preventDefault();
    const finalNewTodo = { description: newTodo };
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalNewTodo),
    };

    fetch("/api/todos", req)
      .then((res) => {
        console.log(res);
        setNewTodo("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        placeholder="enter new todo"
        onChange={handleInputChange}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoInput;
