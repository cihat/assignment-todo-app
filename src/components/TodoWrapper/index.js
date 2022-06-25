import TodoList from "../TodoList";
import React from "react";
import styled from "styled-components";
import AddTodo from "../../containers/AddTodo";
import VisibleTodoList from "../../containers/VisibleTodoList";
import Button from "../Button";

const TodoListContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  /* min-height: 100%; */
  /* max-width: 85%; */

  @media (min-width: 768px) {
    max-width: 75%;
  }
`;

const TodoListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ListWrapper = styled.div`
  margin-top: 1rem;
  max-height: 700px;
  overflow-y: scroll;
  min-width: 100%;

  @media (min-width: 768px) {
    max-width: 75%;
  }
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 1px solid #e6e6e6;
`;

const TodoContainer = () => {
  return (
    <TodoListContainer>
      <TodoListWrapper>
        <AddTodo />
        <br />
        <Hr />
        <ListWrapper>
          <VisibleTodoList />
        </ListWrapper>
      </TodoListWrapper>
    </TodoListContainer>
  );
};

export default TodoContainer;
