import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../stores/actions";
import styled from "styled-components";
import { RiAddBoxLine } from "react-icons/ri";
import { Button } from "@mui/material";

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
      svg {
        margin-right: 10px;
        min-width: 20px;
      }

      &:disabled {
        cursor: not-allowed;
        border: 1px solid red;
        color: white;
        background-color: var(--color-red);
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
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo"
          value={todoInput}
        />
        <Button
          variant={!todoInput ? "outlined" : "contained"}
          color={!todoInput ? "error" : "success"}
          type="submit"
          disabled={!todoInput}
          style={{ cursor: !todoInput ? "not-allowed" : "pointer" }}
        >
          <RiAddBoxLine size={"20px"} />
          {todoInput ? "Add" : "Add a todo"}
        </Button>
      </form>
    </AddTodoStyle>
  );
};

export default connect()(AddTodo);
