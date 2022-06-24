import React from "react";
import TodoItem from "../TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = ({ todos, toggleTodo }) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onClick={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
