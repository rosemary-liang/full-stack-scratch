// require express, cors, db relative path(after db.js setup)
// set app to call express
// middleware
// routes/endpoints
// app.listen to check if server is running

const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES (CRUD)

// create a todo
app.post("/todos", (req, res) => {
  const { description } = req.body;
  
});

// get all todos
// app.get("/todos", (req, res) => {
//   const sql = `
//   select * from todos
//   `;
//   db.query(sql)
//     .then(result => {
//       const todos = result.rows;
//       res.json(todos);
//     })
//     .catch((err) => console.error(err));
// });

app.get("/todos", (req, res) => {
  const sql = `
  select * from "todos"
  `;
  db.query(sql)
    .then((result) => {
      const todos = result.rows;
      res.json(todos);
    })
    .catch((err) => console.error(err));
});

// get a todo

app.get("/todos/:id", (req, res) => {
  const { id } = req.params; // change to req.body when the rest of the code is up

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
// delete a todo

app.listen(8000, () => {
  console.log("server started on port 8000");
});
