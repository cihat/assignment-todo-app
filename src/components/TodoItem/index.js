import React from "react";
import styled from "styled-components";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";

const TodoItemContainer = styled.li`
  width: 100%;
  overflow-y: scroll;
`;

const TodoItemStyle = styled.div`
  margin-bottom: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  margin-bottom: 1rem;
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${(props) => (props.completed ? "#c4cdc9" : "#fefefe")};
  transition: 250ms all ease-out;

  &:hover {
    cursor: pointer;
    background-color: #e1d4d4cd;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-basis: 10%;

  svg {
    margin-left: 10px;
  }
`;

const TextWrapper = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "grey" : "black")};
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  border-right: 1px solid #ffe6e6;
  overflow-x: scroll;
  max-width: 100%;

  flex-basis: 90%;
`;

const TodoItem = (props) => {
  const { todo, addTodo, deleteTodo } = props;

  return (
    <TodoItemContainer>
      <TodoItemStyle key={todo.id} completed={todo?.completed}>
        <TextWrapper
          onClick={addTodo}
          style={{ textDecoration: todo?.completed ? "line-through" : "none" }}
          completed={todo?.completed}
          className="not_select"
        >
          {todo?.text}
        </TextWrapper>
        <ButtonsContainer>
          <RiEditBoxLine size={"20px"} />
          <RiDeleteBinLine size={"20px"} onClick={deleteTodo} />
        </ButtonsContainer>
      </TodoItemStyle>
    </TodoItemContainer>
  );
};

export default TodoItem;
