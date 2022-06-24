import React from "react";
import styled from "styled-components";

const InputContainer = styled.div``;

const InputStyle = styled.input``;

const Input = () => {
  return (
    <div>
      <input type="text" name="todo-title" placeholder="Add your new todo" />
    </div>
  );
};

export default Input;
