import TodoList from "../../components/TodoList";
import React from "react";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
  return (
    <div className={styles.todo_container}>
      <TodoList />
    </div>
  );
};

export default TodoContainer;
