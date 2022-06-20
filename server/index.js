// require express, cors, db relative path(after db.js setup)
// set app to call express
// middleware
// routes/endpoints
// app.listen to check if server is running

const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const errorMiddleware = require("./error-middleware");
const ClientError = require("./client-error");

app.use(cors());
app.use(express.json());

// ROUTES (CRUD)

// create a todo
app.post("/api/todos", (req, res, next) => {
  const { description, completed } = req.body;
  if (!description)
    throw new ClientError(400, "request must include a description");
  if (typeof completed !== "boolean")
    throw new ClientError(400, "request must include completed status");
  const sql = `
  insert into "todos"
  ("description", "completed")
  values
  ($1, $2)
  returning *
  `;
  const params = [description, completed];
  db.query(sql, params)
    .then((result) => {
      const finalResult = {
        todos: result.rows,
      };
      res.json(finalResult);
    })
    .catch((err) => next(err));
});

// get all todos
app.get("/api/todos", (req, res, next) => {
  const sql = `
  select * from "todos"
  `;
  db.query(sql)
    .then((result) => {
      const todos = result.rows;
      res.json(todos);
    })
    .catch((err) => next(err));
});

// get a todo

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params; // change to req.body when the rest of the code is up
  if (!id) throw new ClientError(400, `cannot find todo with id ${id}`);
  const sql = `
  select "description"
  from "todos"
  where "todo_id" = $1
  `;
  const params = [id];
  db.query(sql, params)
    .then((result) => {
      const todo = result.rows[0];
      res.json(todo);
    })
    .catch((err) => console.error(err.message));
});

// update a todo
app.put("/api/todos", (req, res, next) => {
  const { completed, todo_id } = req.body;
  const sql = `
  update "todos"
  set "completed" = $1
  where "todo_id" = $2
  returning *
  `;
  const params = [completed, todo_id];
  if (typeof completed !== "boolean")
    throw new ClientError(400, "completed status must be included");
  if (!todo_id) throw new ClientError(400, "invalid todo_id");
  db.query(sql, params)
    .then((results) => {
      const data = {
        status: "success",
        results: results.rows.length,
        data: {
          todo_added: results.rows,
        },
      };
      res.json(data);
    })
    .catch((err) => next(err));
});

// delete a todo
app.delete("/api/todos", (req, res, next) => {
  const { todo_id } = req.body;
  if (!todo_id) throw new ClientError(400, "invalid todo_id");
  const params = [todo_id];
  const sql = `
  delete from "todos"
  where "todo_id" = $1
  `;
  db.query(sql, params)
    .then((result) => {
      const data = result.rows;
      res.json(data);
    })
    .catch((err) => next(err));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
