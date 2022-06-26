import React from "react";
import TodoItem from "../TodoItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-top: 1rem;
  max-height: 700px;
  overflow-y: scroll;
  min-width: 100%;
  margin-bottom: 2rem;

  p {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    max-width: 75%;
  }
`;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              addTodo={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </ul>
      ) : (
        <ListWrapper>
          <p>No todos yet!</p>
        </ListWrapper>
      )}
    </>
  );
};

export default TodoList;
