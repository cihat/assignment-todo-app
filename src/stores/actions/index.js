import { v4 as uuidv4 } from "uuid";

const addTodo = (text) => ({
  type: "ADD_TODO",
  id: uuidv4(),
  text,
});

const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

const updateTodo = (id, text) => ({
  type: "UPDATE_TODO",
  id,
});

const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export { addTodo, setVisibilityFilter, toggleTodo, updateTodo, deleteTodo };
