import React, { useState } from "react";
import TodoItem from "../TodoItem";
import styled from "styled-components";
import { TransitionGroup, Transition } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

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

const Ul = styled.ul`
  transition: all 0.5s ease-out;
`;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <Transition timeout={500}>
      {todos.length > 0 ? (
        <Ul>
          <TransitionGroup
            style={{ display: "flex", flexDirection: "column-reverse" }}
          >
            {todos.map((todo, index) => (
              <Collapse key={index}>
                <TodoItem
                  todo={todo}
                  addTodo={() => toggleTodo(todo.id)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </Ul>
      ) : (
        <TransitionGroup timeout={500}>
          <ListWrapper>
            <p>No todos yet!</p>
          </ListWrapper>
        </TransitionGroup>
      )}
    </Transition>
  );
};

export default TodoList;
