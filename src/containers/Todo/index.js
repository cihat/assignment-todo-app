import TodoList from "../../components/TodoList";
import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  grid-area: main;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 0;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  min-height: 100%;
  max-width: 85%;

  @media (min-width: 768px) {
    max-width: 75%;
  }
`;

const TodoContainer = () => {
  return (
    <TodoListContainer>
      <TodoList />
    </TodoListContainer>
  );
};

export default TodoContainer;
