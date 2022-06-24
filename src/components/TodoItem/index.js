import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const TodoItemStyle = styled.li`
  list-style: square;
  padding: 1rem;
  margin-bottom: 0;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  min-height: 100%;
  max-width: 85%;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const TodoItem = (props) => {
  const { key, todo, onClick } = props;

  return (
    <TodoItemContainer>
      <TodoItemStyle
        key={key}
        onClick={onClick}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <span>{todo.text}</span>
      </TodoItemStyle>
    </TodoItemContainer>
  );
};

export default TodoItem;
