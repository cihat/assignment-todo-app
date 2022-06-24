import React from "react";
import TodoItem from "../TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const todos = [
    {
      id: uuidv4(),
      text: "Take out the trash",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Meet with the boss",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Meet with the boss2",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Meet with the boss3",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Meet with the boss4",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Meet with the boss5",
      completed: false,
    },
  ];
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
