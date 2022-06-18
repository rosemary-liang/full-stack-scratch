CREATE DATABASE perntodo;

DROP TABLE IF exists todo;
DROP TABLE IF exists todos;

CREATE TABLE todos(
  todo_id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(250),
  completed BOOLEAN NOT NULL
);


INSERT into todos (description, completed)
VALUES
('do the dishes', false),
('sweep the floor', false),
('take a nap', false)
;
