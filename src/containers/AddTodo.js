import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../stores/actions";
import styled from "styled-components";

const AddTodoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 0;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  background-color: var(--color-blue);

  form {
    width: 100%;
    display: flex;

    input {
      width: 75%;
      padding: 0.5rem;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      margin-right: 0.5rem;
      height: 20px;
      font-size: 1.2rem;
    }

    button {
      width: 25%;
      padding: 0.5rem;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      transition: 500ms ease-in-out;
      cursor: pointer;
      font-size: 1.2rem;
      background-color: var(--color-yellow);
      color: var(--color-orange);

      &:disabled {
        background-color: var(--color-pink);
        color: white;
        cursor: not-allowed;
      }
    }
  }
`;

const AddTodo = ({ dispatch }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (!todoInput.trim() && !todoInput) return;

    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <AddTodoStyle>
      <form onSubmit={handleSubmitTodo}>
        <input
          onChange={(event) => setTodoInput(event.target.value)}
          placeholder="Add a todo"
          value={todoInput}
        />
        <button type="submit" disabled={!todoInput}>
          Add Todo
        </button>
      </form>
    </AddTodoStyle>
  );
};

export default connect()(AddTodo);
