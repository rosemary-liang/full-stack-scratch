CREATE DATABASE perntodo;

DROP TABLE IF exists todo;
DROP TABLE IF exists todos;

CREATE TABLE todos(
  todo_id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(250),
  completed BOOLEAN NOT NULL
);


INSERT into todos (description)
VALUES
('do the dishes'),
('sweep the floor'),
('take a nap')
;
