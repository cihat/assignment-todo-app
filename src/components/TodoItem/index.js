import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background-color: gray;
`;

const TodoItem = (props) => {
  const { key, todo } = props;

  return (
    <TodoItemContainer>
      <li>
        <input type="radio" checked={todo.completed} />
        <span>{todo.text}</span>
      </li>
    </TodoItemContainer>
  );
};

export default TodoItem;
