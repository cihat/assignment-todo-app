import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, toggleTodo }) => {
  console.log(todos);
  return (
    <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClick={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
