import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          addTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
