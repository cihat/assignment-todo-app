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
  min-height: 100%;
  max-width: 85%;
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
        <input onChange={(event) => setTodoInput(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </AddTodoStyle>
  );
};

export default connect()(AddTodo);
